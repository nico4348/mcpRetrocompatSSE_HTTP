import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function resourceTemplate(server: McpServer) {
	server.resource(
		"resourceTemplate",
		"resource://resourceTemplate",
		{
			name: "Resource Template",
			description: "Description of the resource template",
		},
		async () => {
			return {
				contents: [
					{
						uri: "resource://resourceTemplate",
						mimeType: "text/plain",
						text: `
                    
                    `,
					},
				],
			};
		}
	);
}
