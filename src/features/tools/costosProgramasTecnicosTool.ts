import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function costosProgramasTecnicosTool(server: McpServer) {
	server.tool(
		"costosProgramasTecnicos",
		`
        Información sobre los costos de los programas técnicos laborales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Costos de los Programas Técnicos Laborales
La universidad ofrece los siguientes costos para los programas técnicos laborales:
Costo Estándar:
Valor por Período: $1.800.000 COP
Opciones de Pago:
Contado: $1.800.000 COP por período
3 Cuotas Mensuales: $600.000 COP cada una

-   Financiación: Financiación directa de la universidad, sin necesidad de fiadores, cheques ni pagarés.
-   Seguro Obligatorio: Un único pago de una póliza de seguro de $20.000 COP, aplicable a todos los programas técnicos.
    Excepción - Centro de Idiomas:
    Costo por Período: $2.100.000 COP
    Opciones de Pago:
    Contado: $2.100.000 COP por período
    3 Cuotas Mensuales: $700.000 COP cada una
    Importante:
    La universidad no realiza aumentos anuales a sus precios. Esto garantiza que el precio con el que ingreses se mantendrá hasta que finalices la carrera, ofreciendo estabilidad económica a los estudiantes a lo largo de sus estudios.
    Financiación directa de la universidad, sin necesidad de fiadores, cheques ni pagarés.
                    `,
					},
				],
			};
		}
	);
}
