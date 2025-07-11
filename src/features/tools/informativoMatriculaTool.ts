import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function informativoMatriculaTool(server: McpServer) {
	server.tool(
		"informativoMatricula",
		`
        Información sobre la matrícula.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    informativo_matricula:
Quedas excepto , no tienes cobro de matrícula con el pago del primer periodo académico o la primera cuota del primer periodo , ya puedes ingresar a estudiar.
                    `,
					},
				],
			};
		}
	);
}
