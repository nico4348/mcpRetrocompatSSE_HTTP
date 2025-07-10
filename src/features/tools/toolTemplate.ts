import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function toolTemplate(server: McpServer) {
	server.tool(
		"infoTemplate",
		`
        
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    
                    `,
					},
				],
			};
		}
	);
}
