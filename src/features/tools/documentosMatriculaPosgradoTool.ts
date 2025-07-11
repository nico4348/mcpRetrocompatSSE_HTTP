import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function documentosMatriculaPosgradoTool(server: McpServer) {
	server.tool(
		"documentosMatriculaPosgrado",
		`
        Información sobre los documentos requeridos para la matrícula en los posgrados.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Documentos Requeridos para la Matrícula en los Posgrados
Para formalizar el proceso de matrícula en la universidad, es obligatorio presentar los siguientes documentos, sin excepción para ningún postulante, por ningún motivo:
Fotografías:
Cantidad: 2 fotos
Tamaño: 3x4 cm
Fondo Blanco
Diplomas y Actas:
Fotocopia autenticada por notaría del diploma de pregrado .
Fotocopia autenticada por notaría del acta de grado de pregrado.
Identificación:
Fotocopia de la cédula ampliada al 150%.
Afiliación a Salud:
Certificado de afiliación a la EPS vigente o al SISBEN, con una vigencia de 20 días máximo.(no se acepta adres ni fosiga)
Comprobante de Pago:
Comprobante de pago del periodo académico o de la cuota inicial.
                    `,
					},
				],
			};
		}
	);
}