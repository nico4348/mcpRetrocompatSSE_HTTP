import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function procesoFinanciacionIcetexTool(server: McpServer) {
	server.tool(
		"procesoFinanciacionIcetex",
		`
        Información sobre el proceso de financiación con ICETEX.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    proceso_financiacion_icetex:
Actualmente no se cuenta con un convenio de ICETEX, sin embargo, se puede solicitar a la Universidad una orden de matrícula, donde se puede hacer la gestión del crédito directamente con ICETEX y una vez desembolsado el dinero puede realizar la respectiva matrícula.

    - Información: La Institución Universitaria de Colombia por medio del presente le informa que debe comunicarse con el ICETEX; la entidad le dará a conocer con más profundidad todas sus líneas de crédito y usted pueda escoger la que más se adapte a sus necesidades.
    - URL del credito: https://web.icetex.gov.co/creditos

Nota: se entrega una orden de matrícula para que el aspirante pueda hacer la solicitud con el icetex ellos deben endosar el cheque para poder realizar la consignación a la cuenta de la universidad
                    `,
					},
				],
			};
		}
	);
}
