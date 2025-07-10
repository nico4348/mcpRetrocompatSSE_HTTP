import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js";
import { SSEServerTransport } from "@modelcontextprotocol/sdk/server/sse.js";

type Transport = StreamableHTTPServerTransport | SSEServerTransport;

export class TransportManager {
	private transports: Record<string, Transport> = {};

	public add(sessionId: string, transport: Transport) {
		this.transports[sessionId] = transport;
	}

	public get(sessionId: string): Transport | undefined {
		return this.transports[sessionId];
	}

	public has(sessionId: string): boolean {
		return sessionId in this.transports;
	}

	public remove(sessionId: string) {
		delete this.transports[sessionId];
	}

	public getAll(): Transport[] {
		return Object.values(this.transports);
	}

	public getActiveSessions(): number {
		return Object.keys(this.transports).length;
	}

	public async closeAll() {
		for (const sessionId in this.transports) {
			try {
				console.log(`🔌 Cerrando transporte para sesión ${sessionId}`);
				await this.transports[sessionId].close();
				this.remove(sessionId);
			} catch (error) {
				console.error(`❌ Error cerrando transporte para sesión ${sessionId}:`, error);
			}
		}
	}
}
