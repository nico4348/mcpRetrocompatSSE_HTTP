import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function conveniosInternacionalesTool(server: McpServer) {
	server.tool(
		"conveniosInternacionales",
		`
        Información sobre convenios internacionales y colaboraciones de la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Convenios Internacionales y Colaboraciones
La universidad mantiene diversos convenios internacionales que favorecen el intercambio académico y la cooperación en distintos ámbitos. Entre ellos se destacan:
Aicad Business School
Università Guglielmo Marconi
Fundación General de la Universidad de Salamanca
Fundación Iberoamericana FUNIBER
Udima Escuela de Negocios
Instituto Científico de Educación Superior (ICES)
Universidad Metropolitana (UMECIT)
Información Adicional:
Doble Titulación: Actualmente, la universidad no maneja doble titulación con ninguna institución externa.
Consulta de Convenios: Para conocer todos los convenios vigentes y los beneficios asociados, visita el siguiente enlace: https://universitariadecolombia.edu.co/convenios/
Convenio con el SENA: La universidad no cuenta con un convenio formal con el SENA. No obstante, la homologación es posible siempre y cuando se realice desde una carrera profesional.
                    `,
					},
				],
			};
		}
	);
}