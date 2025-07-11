import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function modalidadesEstudioTecnicosTool(server: McpServer) {
	server.tool(
		"modalidadesEstudioTecnicos",
		`
        Información sobre las modalidades de estudio para programas técnicos.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Modalidades de estudio para programas tecnicos

En la universidad, ofrecemos únicamente la modalidad presencial para los programas técnicos laborales. A continuación, se detallan las características de esta modalidad:
Nota: Actualmente, NO se ofrecen modalidades semi-presenciales o virtuales para los programas técnicos laborales. Todas las clases se realizan de manera 100% presencial para garantizar una formación práctica y de calidad.
                    `,
					},
				],
			};
		}
	);
}
