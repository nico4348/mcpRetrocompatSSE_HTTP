import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function uniformesProgramasTecnicosTool(server: McpServer) {
	server.tool(
		"uniformesProgramasTecnicos",
		`
        Información sobre el uso de uniformes para programas técnicos.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Uso de Uniformes para Programas Técnicos

Algunas carreras técnicas laborales requieren el uso de uniformes específicos durante las sesiones prácticas. A continuación, se detallan las carreras que tienen esta obligación:
Carreras que Requieren Uniforme:
Cocina Internacional
Investigadores Criminalísticos y Judiciales
Auxiliar en Clínica Veterinaria
Auxiliar de Enfermería
Requisitos del Uniforme:
El uso del uniforme es obligatorio únicamente durante las sesiones prácticas.
Los profesores proporcionarán las especificaciones del uniforme y cualquier otra información necesaria en el momento adecuado.
                    `,
					},
				],
			};
		}
	);
}
