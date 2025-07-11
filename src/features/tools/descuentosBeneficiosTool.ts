import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function descuentosBeneficiosTool(server: McpServer) {
	server.tool(
		"descuentosBeneficios",
		`
        Información sobre descuentos y beneficios para estudiantes.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Descuentos y Beneficios para Estudiantes
Beca Automática del 50%:
Todos los estudiantes de la universidad cuentan automáticamente con una beca del 50%, ya incluida en los precios de todos los programas académicos. Esto significa que los precios publicados reflejan esta reducción, representando un beneficio significativo para nuestros estudiantes.
Descuentos Adicionales:

-   Programas Profesionales y de Posgrado: Se aplica un descuento adicional del 20% para estudiantes nuevos, válido únicamente para el primer período académico.
-   Programas Técnicos Laborales: Se otorga un descuento del 10% para estudiantes nuevos, aplicable solo al primer período académico.
-   Centro de Idiomas: Se ofrece un descuento del 10% para estudiantes nuevos, válido para el primer período académico.
    Importante: Todos estos descuentos adicionales son válidos únicamente para el primer período y no se extienden al resto de la carrera. Además, en este caso se aclara que solo aplican para los programas profesionales y de posgrado en modalidad presencial, y no para otras modalidades ni programas.
    Exclusión:No aplica para estudiantes homologados.
    Programa de Referidos:Los estudiantes que refieran a un nuevo estudiante recibirán un descuento del 3% en la siguiente cuota.
    Importante: Este beneficio se aplica únicamente al estudiante que refiere; el estudiante referido no recibe descuento.
    Nota: Los descuentos no son acumulables.
                    `,
					},
				],
			};
		}
	);
}