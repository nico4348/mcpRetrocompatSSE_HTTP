import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function duracionProgramasProfesionalesTool(server: McpServer) {
	server.tool(
		"duracionProgramasProfesionales",
		`
        Información sobre la duración de los programas profesionales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Duración de los Programas Profesionales

La duración de los programas profesionales es de tres años fijos. Esto permite a los estudiantes planificar su formación sin enfrentar cambios inesperados en el tiempo de estudio.

Duración Estándar: La mayoría de los programas profesionales tienen una duración de 9 períodos académicos (equivalentes a 3 años).
Duración Especializada: Los programas de Derecho , Medicina Veterinaria y Zootecnia requieren una duración de 10 períodos académicos. (equivalentes a 3 años) con una educación acelerada
                    `,
					},
				],
			};
		}
	);
}
