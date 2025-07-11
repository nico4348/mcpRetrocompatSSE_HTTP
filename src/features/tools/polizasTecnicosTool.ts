import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function polizasTecnicosTool(server: McpServer) {
	server.tool(
		"polizasTecnicos",
		`
        Información sobre las pólizas para carreras técnicas.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Polizas para carreras tecnicos
La universidad cuenta con una póliza de seguros que cubre exclusivamente los accidentes ocurridos dentro de las instalaciones universitarias. Este seguro protege a los estudiantes mientras participan en actividades académicas o extracurriculares organizadas y supervisadas por la institución dentro de sus espacios autorizados.
Características de la Póliza:
Cobertura:
Accidentes durante clases teóricas y prácticas.
Actividades extracurriculares autorizadas por la universidad.
Exclusiones:
Accidentes ocurridos fuera de las instalaciones universitarias.
Actividades no autorizadas por la institución.
                    `,
					},
				],
			};
		}
	);
}
