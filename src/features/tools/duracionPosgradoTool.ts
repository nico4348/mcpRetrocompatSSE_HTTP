import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function duracionPosgradoTool(server: McpServer) {
	server.tool(
		"duracionPosgrado",
		`
        Información sobre la duración de los programas de posgrado.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Duración de los Programas de Posgrado
La universidad garantiza una formación eficiente y especializada mediante la definición clara de la duración de sus programas de posgrado:
Duración Estándar:
Períodos Académicos: 3 períodos académicos.
Equivalente en Tiempo: 8 meses.
Política de Duración:
La duración de todos los programas de posgrado es fija y no se modificará bajo ningún tipo de variación.
                    `,
					},
				],
			};
		}
	);
}
