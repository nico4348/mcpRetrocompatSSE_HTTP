import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function informativoHistoriaTool(server: McpServer) {
	server.tool(
		"informativoHistoria",
		`
        Información sobre la historia institucional de la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    informativo_historiaInstitucional:
¿Cuándo se fundó la universidad?
La institución fue fundada el 3 de junio de 2010, hasta el día de hoy se cumple con brindar una educación superior sin igual.
                    `,
					},
				],
			};
		}
	);
}
