import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function documentosMatriculaTecnicosTool(server: McpServer) {
	server.tool(
		"documentosMatriculaTecnicos",
		`
        Información sobre los documentos requeridos para la matrícula en programas técnicos laborales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Documentos Requeridos para la Matrícula en Programas Técnicos Laborales
Para formalizar el proceso de matrícula en la universidad, es obligatorio presentar los siguientes documentos, sin excepción para ningún postulante, por ningún motivo:

1. Fotografías:
   Cantidad: 2 fotos
   Tamaño: 3x4 cm
   Fondo Blanco
2. Diplomas y Actas:
   No Bachiller:
   Autenticación de documento certificado de aprobación de noveno grado (Solo es necesario presentarlo en caso de no ser bachiller).
   Bachiller:

-   Fotocopia del diploma de bachiller.
-   Fotocopia del acta de grado.

3. Identificación:
   Fotocopia de la cédula ampliada al 150%.
4. Afiliación a Salud:
   Certificado de afiliación a la EPS vigente o al SISBEN, con una vigencia de 20 días máximo. (no se acepta adres ni fosiga)
5. Comprobante de Pago:
   Comprobante de pago del primer periodo académico o de la cuota inicial.
   Póliza de Seguro: Comprobante de pago de la póliza ($20.000 COP). Este pago debe realizarse en una sola consignación junto con la matrícula.
                    `,
					},
				],
			};
		}
	);
}