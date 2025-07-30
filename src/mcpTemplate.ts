import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { toolTemplate } from "./features/tools/toolTemplate.js";
import { TransportManager } from "./configs/transports/transportManager.js";
import { handleStreamableHttpRequest } from "./configs/transports/streamableHttpTransport.js";
import { handleSseRequest, handleSsePostRequest } from "./configs/transports/sseTransport.js";
import express, { Request, Response } from "express";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const getServer = () => {
	const server = new McpServer(
		{
			name: "servidor-compatible-mcp",
			version: "1.0.0",
		},
		{ capabilities: { logging: {} } }
	);

	toolTemplate(server);

	console.log("🔧 Servidor MCP compatible configurado con herramientas de compatibilidad");
	return server;
};

const app = express();
app.use(express.json());

app.use(
	cors({
		origin: "*",
		exposedHeaders: ["Mcp-Session-Id"],
	})
);

const transportManager = new TransportManager();

app.all("/mcp", (req: Request, res: Response) => {
	handleStreamableHttpRequest(req, res, transportManager, getServer);
});

app.get("/sse", (req: Request, res: Response) => {
	handleSseRequest(req, res, transportManager, getServer);
});

app.post("/messages", (req: Request, res: Response) => {
	handleSsePostRequest(req, res, transportManager);
});

app.get("/", (req: Request, res: Response) => {
	res.json({
		server: "servidor-compatible-mcp",
		version: "1.o.o",
		protocols: [
			{
				name: "Streamable HTTP",
				version: "2025-03-26",
				endpoint: `http://localhost:${PORT}/mcp`,
			},
			{
				name: "HTTP+SSE (deprecated)",
				version: "2024-11-05",
				endpoints: ["/sse", "/messages"],
			},
		],
		activeSessions: transportManager.getActiveSessions(),
		uptime: process.uptime(),
	});
});

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

process.on("SIGINT", async () => {
	console.log("🔄 Apagando servidor...");
	await transportManager.closeAll();
	console.log("✅ Apagado del servidor completado");
	process.exit(0);
});
