import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function informacionUniformesYPracticasTecnicos(server: McpServer) {
	server.tool(
		"informacionUniformesYPracticasTecnicos",
		`
        Proporciona información sobre las carreras que requieren uniforme y los requisitos asociados, 
		incluyendo cuándo es obligatorio su uso y cómo obtener las especificaciones necesarias, para 
		que el agente principal la presente al usuario.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
						<datos_uniformes>
						### Carreras que Requieren Uniforme:
						- Cocina Internacional
						- Investigadores Criminalísticos y Judiciales
						- Auxiliar en Clínica Veterinaria
						- Auxiliar de Enfermería

						### Requisitos del Uniforme:
						- El uso del uniforme es obligatorio únicamente durante las sesiones prácticas
						- Los profesores proporcionarán las especificaciones del uniforme y cualquier otra información necesaria en el momento adecuado
						</datos_uniformes>
                    `,
					},
				],
			};
		}
	);
}
