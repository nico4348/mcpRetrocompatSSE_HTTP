import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function procesoReintegroTool(server: McpServer) {
	server.tool(
		"procesoReintegro",
		`
        Información sobre el proceso de reintegro a la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    proceso_reintegro
Reintegros
En caso de querer realizar el reintegro dentro de la universidad, el proceso se realice mediante el siguiente enlace para realizar su solicitud: https://solicitudes.universitariadecolombia.edu.co/formulario-procesos/
                    `,
					},
				],
			};
		}
	);
}
