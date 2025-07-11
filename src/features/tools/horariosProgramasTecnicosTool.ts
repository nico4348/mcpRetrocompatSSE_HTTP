import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function horariosProgramasTecnicosTool(server: McpServer) {
	server.tool(
		"horariosProgramasTecnicos",
		`
        Información sobre los horarios de los programas técnicos laborales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Horarios de los Programas Técnicos Laborales
Los programas técnicos laborales se imparten en las siguientes modalidades de horario:

-   Horario Diurno:
    Horario: 8:00 a.m. - 12:00 p.m.
    Modalidad: 100% presencial
-   Horario Nocturno:
    Horario: 6:00 p.m. - 10:00 p.m.
    Modalidad: 100% presencial
    Nota: Todos los programas técnicos laborales se realizan de manera 100% presencial en las instalaciones de la universidad.
                    `,
					},
				],
			};
		}
	);
}
