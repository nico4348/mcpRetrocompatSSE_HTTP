import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function sistemaReferidosTool(server: McpServer) {
	server.tool(
		"sistemaReferidos",
		`
        Información sobre el sistema de descuentos por referidos.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Sistema de descuentos de Referidos
El funcionamiento del sistema de referidos es el siguiente:
Requisitos para Aplicar el Descuento: Cuando un nuevo estudiante se matricule, deberá presentar una copia del carnet del estudiante activo que lo refirió, junto con la documentación requerida para la matrícula.
Aplicación del Descuento: El descuento del 3% se aplicará únicamente a la próxima cuota del estudiante que realizó la referencia.
Importante: Este descuento no se acumula y no aplica al estudiante referido.
                    `,
					},
				],
			};
		}
	);
}
