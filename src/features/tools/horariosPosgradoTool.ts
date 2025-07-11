import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function horariosPosgradoTool(server: McpServer) {
	server.tool(
		"horariosPosgrado",
		`
        Información sobre los horarios de los posgrados.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Horarios de los Posgrados
Los posgrados ofrecen clases en horario nocturno a través de las siguientes modalidades:
Presencial: Clases completamente presenciales, de miércoles a viernes de 6:00 p.m. a 10:00 p.m. (Aplica para todos los posgrados)
Virtual: Clases virtuales de miércoles a viernes, de 6:00 pm a 10:00 pm. (solo Derecho Penal y Criminalística y Derecho Administrativo y Contractual)
Nota:
Las especializaciones en Derecho Penal y Criminalística y Derecho Administrativo y Contractual Están disponibles en ambas modalidades, presencial y virtual. El resto de las especializaciones se ofrece únicamente en modalidad presencial y nocturna.
                    `,
					},
				],
			};
		}
	);
}
