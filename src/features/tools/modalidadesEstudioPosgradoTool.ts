import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function modalidadesEstudioPosgradoTool(server: McpServer) {
	server.tool(
		"modalidadesEstudioPosgrado",
		`
        Información sobre las modalidades de estudio para posgrados.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Modalidades de Estudio para Posgrados
En la universidad se ofrecen dos modalidades para los posgrados: presencial y algunos virtuales.
Modalidad Virtual: Disponible únicamente para las especializaciones en Derecho Penal y Criminalística y Derecho Administrativo y Contractual.
Horario Virtual: Clases de miércoles a viernes, de 6:00 p.m. a 10:00 p.m.
Modalidad Presencial: Las demás especializaciones se imparten en modalidad presencial.
Horario Presencial: Clases en horario nocturno, de miércoles a viernes, de 6:00 p.m. a 10:00 p.m.
                    `,
					},
				],
			};
		}
	);
}
