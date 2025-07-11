import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function procesoFinanciacionTool(server: McpServer) {
	server.tool(
		"procesoFinanciacion",
		`
        Información sobre el proceso de financiación de la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    proceso_financiacion:

La Universidad facilita el acceso a la educación superior mediante opciones flexibles de financiamiento. No es necesario realizar un proceso complicado; basta con el pago de la primera cuota o las cuotas seleccionadas por el estudiante para que la universidad asuma la financiación, utilizando diversos métodos de pago sin generar intereses adicionales. Este enfoque se asemeja a un acuerdo verbal entre el estudiante y la institución.
Además, para aquellos que buscan obtener un crédito, la Institución Universitaria de Colombia ha establecido alianzas estratégicas con entidades financieras que ofrecen condiciones favorables en el mercado actual. Algunas de estas opciones son:
Convenio con ICETEX:
Debe comunicarse con el ICETEX; la entidad le dará a conocer con más profundidad todas sus líneas de crédito y usted podrá escoger la que más se adapte a sus necesidades.

Convenio con la Cooperativa Financiera Comultrasan:
Debe comunicarse con el Comultrasan; la entidad le dará a conocer con más profundidad todas sus líneas de crédito y usted podrá escoger la que más se adapte a sus necesidades.

Convenio con la Cooperativa FINANCIAR:
Debe comunicarse con la financiera; la entidad le dará a conocer con más profundidad todas sus líneas de crédito y usted podrá escoger la que más se adapte a sus necesidades.

Convenio con la Cooperativa Comuna:
Debe comunicarse con la cooperativa; la entidad le dará a conocer con más profundidad todas sus líneas de crédito y usted podrá escoger la que más se adapte a sus necesidades.

Para obtener más información sobre las cooperativas, ingrese al siguiente enlace: https://universitariadecolombia.edu.co/financiacion-y-opciones-de-pago/, donde encontrará detalles adicionales y un enlace para comunicarse directamente con un asesor de la entidad correspondiente.
                    `,
					},
				],
			};
		}
	);
}