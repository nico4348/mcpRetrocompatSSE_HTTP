import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function polizasProfesionalesTool(server: McpServer) {
	server.tool(
		"polizasProfesionales",
		`
        Información sobre las pólizas para carreras profesionales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Polizas para carreras profesionales
					Todos los programas profesionales requieren el pago obligatorio de una póliza con un costo de 60.000 COP, 
					la cual cubre exclusivamente los accidentes ocurridos dentro de las instalaciones universitarias. 
					Este seguro protege a los estudiantes mientras participan en actividades académicas o extracurriculares 
					organizadas y supervisadas por la institución dentro de sus espacios autorizados.
                    `,
					},
				],
			};
		}
	);
}
