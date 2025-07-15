import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function procesoMatriculaTool(server: McpServer) {
	server.tool(
		"procesoMatricula",
		`
        Información sobre el proceso de matrícula.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
					proceso_matricula:
¿Cómo es el proceso de matrícula?
El proceso de matrícula debe realizarse siguiendo los siguientes pasos:
Reunir la documentación necesaria para realizar la matrícula en el programa seleccionado.
Realizar el pago del primer periodo académico o la primera cuota del primer periodo.
Acercarse a la sede administrativa para concretar el proceso de matrícula de forma presencial.
¿A dónde me dirijo para matricularme?
Para matricularte en la Institución Universitaria de Colombia, debes dirigirte a la sede administrativa ubicada en la Cra. 7 #35-85. Recuerda que el horario de atención es de 8:00 a.m. a 5:00 p.m. sin la necesidad de agendar una cita.
¿Se puede realizar la matrícula en línea?
Si reside en la ciudad de Bogotá, es obligatorio acercarse a la sede administrativa para formalizar el proceso; en cambio, si vive fuera de Bogotá, podrá enviar sus documentos a través de WhatsApp y se realizará todo el trámite por correo.
Excepciones:
El programa de Derecho penal y Criminalística debe ser abogado para poderse matricular al programa

Fechas de Matrícula:
Solo tenemos dos fechas de ingreso en el mes de marzo y agosto

Primera fecha del año para matrícula (Marzo)
Ingreso para primer módulo de 1°:
Si la fecha límite para ingresar al primer módulo de marzo ya pasó (viernes 28 de marzo de 2025). 
Se puede considerar la opción de ingresar al segundo módulo, que tiene fechas específicas en abril y mayo.

Ingreso a segundo módulo de 1° :
Se pueden matricular desde el 29 de marzo de 2025 y hasta el 9 de abril de 2025, con el pago de la primera cuota del periodo (primer módulo).
Se pueden matricular desde el 10 de abril de 2025 y hasta el 2 de mayo de 2025, con el pago de la primera y segunda cuota del periodo (primer y segundo módulo).

Si la fecha de matrícula es posterior a la fecha de inicio de clases, 

Esta opción solo está disponible para Profesionales y técnicos; las especializaciones no pueden ingresar a segundo módulo.

Segunda fecha del año para matrícula (Agosto)
La matrícula se puede realizar en cualquier momento del año, el ingreso se efectuará en el mes de agosto de 2025. El día exacto máximo para matricularse está pendiente de definir y se avisará oportunamente una vez establecido.
Nota: No aplica segundo módulo para Centro de Idiomas ni Especialización. El segundo módulo aplica también para pregrados en modalidad virtual.
Sin el pago de las cuotas correspondientes no se puede formalizar la matrícula
					`,
					},
				],
			};
		}
	);
}
