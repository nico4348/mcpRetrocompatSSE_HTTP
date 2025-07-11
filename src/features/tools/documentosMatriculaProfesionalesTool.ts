import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function documentosMatriculaProfesionalesTool(server: McpServer) {
	server.tool(
		"documentosMatriculaProfesionales",
		`
        Información sobre los documentos requeridos para la matrícula en programas profesionales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Documentos Requeridos para la Matrícula en Programas Profesionales
Para formalizar el proceso de matrícula en la universidad, es obligatorio presentar los siguientes documentos, sin excepción para ningún postulante, por ningún motivo:

1. Fotografías:
   Cantidad: 2 fotos
   Tamaño: 3x4 cm
   Fondo Blanco
2. Diplomas y Actas:
   Fotocopia autenticada por notaría del diploma de bachiller.
   Fotocopia autenticada por notaría del acta de grado.
3. Resultados Académicos:
   Fotocopia del resultado del ICFES o de las pruebas Saber. (No validamos puntaje solo resultado de examen)
4. Identificación:
   Fotocopia de la cédula ampliada al 150%.
5. Afiliación a Salud:
   Certificado de afiliación a la EPS vigente o al SISBEN, con una vigencia de 20 días máximo.(no se acepta adres ni fosiga)
6. Comprobante de Pago:
   Comprobante de pago del periodo académico o de la cuota inicial.
   Medicina Veterinaria y Zootecnia: El comprobante de pago debe incluir el pago de la póliza de seguro. $60.000
                    `,
					},
				],
			};
		}
	);
}