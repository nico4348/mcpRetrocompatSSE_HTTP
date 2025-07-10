import express, { Request, Response } from "express";
import { randomUUID } from "node:crypto";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { z } from "zod";
import { CallToolResult, isInitializeRequest } from "@modelcontextprotocol/sdk/types.js";
import { InMemoryEventStore } from "./shared/inMemoryEventStore.js";
import { addNotificationTools } from "./tools/notificationTools.js";
import cors from "cors";

/**
 * Servidor MCP con compatibilidad hacia atrás que demuestra soporte para:
 * 1. Transporte HTTP+SSE deprecated (protocolo versión 2024-11-05)
 * 2. Transporte Streamable HTTP (protocolo versión 2025-03-26)
 *
 * Mantiene una sola instancia del servidor MCP pero expone dos opciones de transporte:
 * - /mcp: Endpoint nuevo Streamable HTTP (soporta GET/POST/DELETE)
 * - /sse: Endpoint SSE deprecated para clientes antiguos (GET para establecer stream)
 * - /messages: Endpoint POST deprecated para clientes antiguos (POST para enviar mensajes)
 */

const getServer = () => {
	const server = new McpServer(
		{
			name: "servidor-compatible-mcp",
			version: "1.0.0",
		},
		{ capabilities: { logging: {} } }
	);

	// Agregar herramientas de notificación
	addNotificationTools(server);

	console.log("🔧 Servidor MCP compatible configurado con herramientas de compatibilidad");
	return server;
};

// Crear aplicación Express
const app = express();
app.use(express.json());

// Configurar CORS para exponer header Mcp-Session-Id para clientes basados en browser
app.use(
	cors({
		origin: "*", // Permitir todos los orígenes - ajustar según sea necesario para producción
		exposedHeaders: ["Mcp-Session-Id"],
	})
);

// Almacenar transportes por session ID
const transports: Record<string, StreamableHTTPServerTransport | SSEServerTransport> = {};

//=============================================================================
// TRANSPORTE STREAMABLE HTTP (PROTOCOLO VERSIÓN 2025-03-26)
//=============================================================================

// Manejar todas las peticiones MCP Streamable HTTP (GET, POST, DELETE) en un solo endpoint
app.all("/mcp", async (req: Request, res: Response) => {
	console.log(`📡 Recibida petición ${req.method} a /mcp`);

	try {
		// Verificar session ID existente
		const sessionId = req.headers["mcp-session-id"] as string | undefined;
		let transport: StreamableHTTPServerTransport;

		if (sessionId && transports[sessionId]) {
			// Verificar que el transporte sea del tipo correcto
			const existingTransport = transports[sessionId];
			if (existingTransport instanceof StreamableHTTPServerTransport) {
				// Reutilizar transporte existente
				transport = existingTransport;
			} else {
				// Transporte existe pero no es StreamableHTTPServerTransport (podría ser SSEServerTransport)
				res.status(400).json({
					jsonrpc: "2.0",
					error: {
						code: -32000,
						message:
							"Bad Request: La sesión existe pero usa un protocolo de transporte diferente",
					},
					id: null,
				});
				return;
			}
		} else if (!sessionId && req.method === "POST" && isInitializeRequest(req.body)) {
			const eventStore = new InMemoryEventStore();
			transport = new StreamableHTTPServerTransport({
				sessionIdGenerator: () => randomUUID(),
				eventStore, // Habilitar resumabilidad
				onsessioninitialized: (sessionId) => {
					// Almacenar el transporte por session ID cuando se inicializa la sesión
					console.log(`🎯 Sesión StreamableHTTP inicializada con ID: ${sessionId}`);
					transports[sessionId] = transport;
				},
			});

			// Configurar handler onclose para limpiar transporte cuando se cierre
			transport.onclose = () => {
				const sid = transport.sessionId;
				if (sid && transports[sid]) {
					console.log(
						`🔌 Transporte cerrado para sesión ${sid}, eliminando del mapa de transportes`
					);
					delete transports[sid];
				}
			};

			// Conectar el transporte al servidor MCP
			const server = getServer();
			await server.connect(transport);
		} else {
			// Petición inválida - sin session ID o no es petición de inicialización
			res.status(400).json({
				jsonrpc: "2.0",
				error: {
					code: -32000,
					message: "Bad Request: No se proporcionó un session ID válido",
				},
				id: null,
			});
			return;
		}

		// Manejar la petición con el transporte
		await transport.handleRequest(req, res, req.body);
	} catch (error) {
		console.error("❌ Error manejando petición MCP:", error);
		if (!res.headersSent) {
			res.status(500).json({
				jsonrpc: "2.0",
				error: {
					code: -32603,
					message: "Error interno del servidor",
				},
				id: null,
			});
		}
	}
});

//=============================================================================
// TRANSPORTE HTTP+SSE DEPRECATED (PROTOCOLO VERSIÓN 2024-11-05)
//=============================================================================

app.get("/sse", async (req: Request, res: Response) => {
	console.log("📡 Recibida petición GET a /sse (transporte SSE deprecated)");
	const transport = new SSEServerTransport("/messages", res);
	transports[transport.sessionId] = transport;
	res.on("close", () => {
		console.log(`🔌 Conexión SSE cerrada para sesión ${transport.sessionId}`);
		delete transports[transport.sessionId];
	});
	const server = getServer();
	await server.connect(transport);
});

app.post("/messages", async (req: Request, res: Response) => {
	const sessionId = req.query.sessionId as string;
	let transport: SSEServerTransport;
	const existingTransport = transports[sessionId];

	if (existingTransport instanceof SSEServerTransport) {
		// Reutilizar transporte existente
		transport = existingTransport;
	} else {
		// Transporte existe pero no es SSEServerTransport (podría ser StreamableHTTPServerTransport)
		res.status(400).json({
			jsonrpc: "2.0",
			error: {
				code: -32000,
				message:
					"Bad Request: La sesión existe pero usa un protocolo de transporte diferente",
			},
			id: null,
		});
		return;
	}

	if (transport) {
		await transport.handlePostMessage(req, res, req.body);
	} else {
		res.status(400).send("No se encontró transporte para sessionId");
	}
});

// Endpoint de información del servidor
app.get("/", (req: Request, res: Response) => {
	res.json({
		server: "servidor-compatible-mcp",
		version: "1.0.0",
		protocols: [
			{
				name: "Streamable HTTP",
				version: "2025-03-26",
				endpoint: "/mcp",
			},
			{
				name: "HTTP+SSE (deprecated)",
				version: "2024-11-05",
				endpoints: ["/sse", "/messages"],
			},
		],
		activeSessions: Object.keys(transports).length,
		uptime: process.uptime(),
	});
});

// Iniciar el servidor
const PORT = 3002;
app.listen(PORT, () => {
	console.log(`🚀 Servidor MCP compatible ejecutándose en puerto ${PORT}`);
	console.log(`
==============================================
🔧 OPCIONES DE TRANSPORTE SOPORTADAS:

1. 🆕 Streamable HTTP (Protocolo versión: 2025-03-26)
   Endpoint: /mcp
   Métodos: GET, POST, DELETE
   Uso: 
     - Inicializar con POST a /mcp
     - Establecer stream SSE con GET a /mcp
     - Enviar peticiones con POST a /mcp
     - Terminar sesión con DELETE a /mcp

2. 🔙 HTTP + SSE (Protocolo versión: 2024-11-05)
   Endpoints: /sse (GET) y /messages (POST)
   Uso:
     - Establecer stream SSE con GET a /sse
     - Enviar peticiones con POST a /messages?sessionId=<id>

📊 Información del servidor: GET /
🧪 Herramientas disponibles: 
   - start-notification-stream
   - send-immediate-notification
   - test-protocol-connectivity
   - get-server-info
   - test-compatibility
==============================================
`);
});

// Manejar apagado del servidor
process.on("SIGINT", async () => {
	console.log("🔄 Apagando servidor...");

	// Cerrar todos los transportes activos para limpiar recursos adecuadamente
	for (const sessionId in transports) {
		try {
			console.log(`🔌 Cerrando transporte para sesión ${sessionId}`);
			await transports[sessionId].close();
			delete transports[sessionId];
		} catch (error) {
			console.error(`❌ Error cerrando transporte para sesión ${sessionId}:`, error);
		}
	}
	console.log("✅ Apagado del servidor completado");
	process.exit(0);
});
