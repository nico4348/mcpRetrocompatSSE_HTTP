import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function costosPosgradoTool(server: McpServer) {
	server.tool(
		"costosPosgrado",
		`
        Información sobre los costos de los programas de posgrado.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Costos de los Programas de Posgrado
La universidad ofrece opciones de pago flexibles para facilitar el acceso a sus programas de posgrado, garantizando al mismo tiempo la estabilidad económica de los estudiantes.
Estructura de Costos:
Costo por Período (Contado): $3.100.000 COP.
Opciones de Pago:
Pago en 3 cuotas mensuales: $1.034.000 COP cada una.
Financiación:
Este plan de cuotas es una financiación directa de la universidad, sin necesidad de fiadores, cheques ni pagarés.
Importante:
Estabilidad de Precios:
La universidad no realiza aumentos anuales a sus precios. Esto significa que el precio con el que ingreses se mantendrá hasta que finalices el programa, ofreciendo estabilidad económica a los estudiantes a lo largo de sus estudios.
                    `,
					},
				],
			};
		}
	);
}