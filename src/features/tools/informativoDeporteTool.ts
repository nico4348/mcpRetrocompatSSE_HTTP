import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function informativoDeporteTool(server: McpServer) {
	server.tool(
		"informativoDeporte",
		`
        Información sobre los equipos deportivos de la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    informativo_deporte:

La Institución Universitaria de Colombia cuenta con equipos deportivos femeninos y masculinos en fútbol, baloncesto y voleibol. Sin embargo, la universidad no dispone de canchas propias ni de un campus para actividades deportivas. Los estudiantes interesados en participar en los equipos deportivos pueden obtener más información comunicándose con el área de Bienestar Universitario.
                    `,
					},
				],
			};
		}
	);
}
