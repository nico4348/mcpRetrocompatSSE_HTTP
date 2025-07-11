import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function procesoInscripcionTool(server: McpServer) {
	server.tool(
		"procesoInscripcion",
		`
        Información sobre el proceso de inscripción a la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Proceso de Inscripción
La inscripción está abierta todo el año y es completamente gratuita, sin ningún costo adicional. Al inscribirte en cualquier momento, podrás acceder a beneficios exclusivos como descuentos especiales (válidos solo tras completar la entrevista virtual) y prioridad en la asignación de tu jornada preferida.
Información Obligatoria
Para completar tu inscripción debes proporcionar los siguientes datos:

1. Nombre completo
2. Correo electrónico
3. Fecha de nacimiento: (formato DD/MM/AAAA)
4. Número de documento de identidad: (solo números, sin puntos ni guiones)
5. Localidad
6. Celular
7. Programa de interés
8. Jornada preferida: (Diurna , Nocturna y fin de semana)
9. ¿Culminó el bachillerato?: (Sí o No)
10. ¿Cómo se enteró de nosotros?

Siguiente Paso
Una vez completes tu inscripción, recibirás en los próximos días un enlace para tu entrevista virtual con los directivos de la universidad. Es fundamental que asistas a esta entrevista, ya que es el requisito para activar los descuentos disponibles y proceder con la matrícula.
                    `,
					},
				],
			};
		}
	);
}
