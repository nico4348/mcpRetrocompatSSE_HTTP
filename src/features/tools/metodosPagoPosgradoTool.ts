import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function metodosPagoPosgradoTool(server: McpServer) {
	server.tool(
		"metodosPagoPosgrado",
		`
        Información sobre los métodos de pago para los posgrados.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Métodos de Pago para los Posgrados

1. Consignación Directa en Banco Davivienda
   Titular: Universitaria de Colombia
   NIT: 900.350.945-0
   Tipo de Cuenta: Ahorros
   Número de Cuenta: 008900814248
2. Cesantías
   Proceso:
   Solicitar una orden de matrícula a la universidad.
   Acercarse a la sede para endosar el cheque emitido por el fondo de cesantías.
   Consignar cheque y esperar tres días posterior a la consignación, para que haga canje
   Realizar el desembolso correspondiente.
   Acercarse a la institución con la documentación completa y comprobante de la consignación para formalizar la matrícula.
3. Datáfono en la Sede Principal
   Nota: No se aceptan pagos en efectivo.
   Se recibe pago por datáfono, solo se acepta VISA, MasterCard, tarjeta débito y crédito.
   Solo pude realizar el primer pago con tarjeta, del segundo pago en adelante debe realizar la consignación a la cuenta bancaria
                    `,
					},
				],
			};
		}
	);
}
