import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function uniformesProfesionalesTool(server: McpServer) {
	server.tool(
		"uniformesProfesionales",
		`
        Información sobre el uso de uniformes en carreras profesionales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Uso de Uniformes en Carreras Profesionales

Algunas carreras requieren el uso de uniformes, específicamente:
Psicología
Medicina Veterinaria y Zootecnia
El uso del uniforme es obligatorio únicamente durante las sesiones prácticas. Los docentes proporcionarán las especificaciones del uniforme y cualquier otra información necesaria en el momento adecuado.
                    `,
					},
				],
			};
		}
	);
}
