import { Request, Response } from "express";
import { randomUUID } from "node:crypto";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { isInitializeRequest } from "@modelcontextprotocol/sdk/types.js";
import { InMemoryEventStore } from "../shared/inMemoryEventStore.js";
import { TransportManager } from "./transportManager.js";

export const handleStreamableHttpRequest = async (
	req: Request,
	res: Response,
	transportManager: TransportManager,
	getServer: () => McpServer
) => {
	console.log(`📡 Recibida petición ${req.method} a /mcp`);

	try {
		const sessionId = req.headers["mcp-session-id"] as string | undefined;
		let transport: StreamableHTTPServerTransport;

		if (sessionId && transportManager.has(sessionId)) {
			const existingTransport = transportManager.get(sessionId);
			if (existingTransport instanceof StreamableHTTPServerTransport) {
				transport = existingTransport;
			} else {
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
				eventStore,
				onsessioninitialized: (sessionId) => {
					console.log(`🎯 Sesión StreamableHTTP inicializada con ID: ${sessionId}`);
					transportManager.add(sessionId, transport);
				},
			});

			transport.onclose = () => {
				const sid = transport.sessionId;
				if (sid && transportManager.has(sid)) {
					console.log(
						`🔌 Transporte cerrado para sesión ${sid}, eliminando del mapa de transportes`
					);
					transportManager.remove(sid);
				}
			};

			const server = getServer();
			await server.connect(transport);
		} else {
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
};