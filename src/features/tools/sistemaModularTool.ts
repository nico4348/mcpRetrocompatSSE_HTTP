import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function sistemaModularTool(server: McpServer) {
	server.tool(
		"sistemaModular",
		`
        Información sobre las materias y el sistema modular de la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Información sobre Materias y Sistema Modular
Inscripción de Materias Adicionales y Pérdida de Materias:
Los estudiantes no pueden matricular materias adicionales a las establecidas en cada módulo, ya que la universidad opera bajo un sistema modular que define de forma estricta las materias a cursar. Esto implica que se debe seguir el proceso lineal establecido en el pensum, sin posibilidad de ajustar la oferta académica mediante la intervención de un coordinador.
Se considera pérdida la materia si se acumulan 3 faltas o si se falla la asignatura obteniendo una nota menor a 3.
Sistema Modular y Periodos Académicos:
La metodología de la universidad se basa en un sistema modular, en el cual el año académico se organiza en períodos de 16 semanas. Durante cada periodo se cursan 6 materias, divididas en 3 módulos. Cada módulo, que equivale aproximadamente a 1 mes y 10 días, contempla la impartición de 2 materias, lo que permite una focalización intensiva del aprendizaje.
Cabe destacar que en la Institución Universitaria de Colombia los programas profesionales, técnicos laborales y posgrados no se manejan en semestres.

Si el usuario menciona "semestres", aclara que en la universidad se utilizan "períodos" en vez de semestres. Los períodos son lapsos de tiempo más cortos y tienen una estructura diferente. Siempre busca y presenta la información sobre períodos en tus herramientas, nunca sobre semestres.
                    `,
					},
				],
			};
		}
	);
}
