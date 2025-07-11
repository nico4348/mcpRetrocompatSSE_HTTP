import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function informativoBecasTool(server: McpServer) {
	server.tool(
		"informativoBecas",
		`
        Información sobre las becas ofrecidas por la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    informativo_becas:
A. La universidad proporciona de por sí una beca del 50% a todos los estudiantes, de esta forma obtienen uno de los precios más bajos del mercado.
En caso de estar hablando de una beca del 100%, la universidad no aplica ningún tipo de beca en la institución, ya sea por alto rendimiento académico, discapacidad u algún otro tipo de situación. De igual forma, tampoco se tienen algún beneficio adicional por ser militar, policía, agente de servicio, entre otros.
                    `,
					},
				],
			};
		}
	);
}
