import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function horarioAdministrativoTool(server: McpServer) {
	server.tool(
		"horarioAdministrativo",
		`
        Información sobre el horario de atención de la sede administrativa.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Horario sede Administrativo
La atención al usuario en la sede principal puede que tenga que ver con matrículas, homologaciones, notas, entre otros. Con esto en mente, el horario de atención es el siguiente:
Lunes, Miércoles y Viernes: 8:00 am - 5:00 pm
Martes y Jueves: 8:00 am - 6:00 pm
                    `,
					},
				],
			};
		}
	);
}
