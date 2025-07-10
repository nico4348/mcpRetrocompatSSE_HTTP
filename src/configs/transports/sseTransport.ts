import { Request, Response } from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";
import { TransportManager } from "./transportManager.js";

export const handleSseRequest = async (
	req: Request,
	res: Response,
	transportManager: TransportManager,
	getServer: () => McpServer
) => {
	console.log("📡 Recibida petición GET a /sse (transporte SSE deprecated)");
	const transport = new SSEServerTransport("/messages", res);
	transportManager.add(transport.sessionId, transport);
	res.on("close", () => {
		console.log(`🔌 Conexión SSE cerrada para sesión ${transport.sessionId}`);
		transportManager.remove(transport.sessionId);
	});
	const server = getServer();
	await server.connect(transport);
};

export const handleSsePostRequest = async (
	req: Request,
	res: Response,
	transportManager: TransportManager
) => {
	const sessionId = req.query.sessionId as string;
	let transport: SSEServerTransport;
	const existingTransport = transportManager.get(sessionId);

	if (existingTransport instanceof SSEServerTransport) {
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

	if (transport) {
		await transport.handlePostMessage(req, res, req.body);
	} else {
		res.status(400).send("No se encontró transporte para sessionId");
	}
};