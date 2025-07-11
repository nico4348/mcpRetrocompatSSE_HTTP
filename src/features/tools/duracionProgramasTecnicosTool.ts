import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function duracionProgramasTecnicosTool(server: McpServer) {
	server.tool(
		"duracionProgramasTecnicos",
		`
        Información sobre la duración de los programas técnicos.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Duración de los Programas Técnicos
La duración de los programas técnicos laborales es fija y establecida para cada carrera, sin posibilidad de modificación. Esto permite a los estudiantes planificar su formación sin enfrentar cambios inesperados en el tiempo de estudio.
Duración Estándar:
Períodos Académicos: 3 períodos académicos
Equivalente en Tiempo: 8 meses
Excepción para Técnico de Enfermería y Técnico de Veterinaria: Duración de 1 año
Excepción - Centro de Idiomas:
Duración: 1 año
Programas Incluidos:
Cursos de Inglés
Cursos de Francés
                    `,
					},
				],
			};
		}
	);
}
