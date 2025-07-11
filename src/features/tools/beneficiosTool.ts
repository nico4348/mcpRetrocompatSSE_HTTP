import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function beneficiosTool(server: McpServer) {
	server.tool(
		"beneficios",
		`
        Información sobre los beneficios de la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Beneficios

Los beneficios de egresados se dividen en 2 tipos:
Egresado técnico laboral a profesional: Para egresados de programas técnicos laborales de la universidad que deseen cursar un programa profesional, se otorga un descuento del 50% en el primer periodo académico únicamente. Este descuento se aplicará únicamente a quienes hayan cursado obligatoriamente y estén certificados por la Universidad Universitaria de Colombia; no se aceptarán certificaciones de otras instituciones.Debe traer acta y diploma del técnico cursado con nosotros
Egresado profesional a posgrado: Para egresados de programas profesionales que deseen cursar un posgrado, se aplica un descuento del 50% del valor cancelado en derechos de grado para la primera cuota y un 20% de descuento en las otras dos cuotas. A partir del segundo periodo, se cancela el valor completo de 4.650.000. Este beneficio es exclusivo para quienes hayan cursado y certificado sus estudios en la Universidad Universitaria de Colombia; certificaciones expedidas por otras instituciones no serán aceptadas.Debe traer el recibo de caja de los derechos de grado
Los beneficios para estudiantes al inscribirse en la Institución Universitaria de Colombia son:
Descuentos especiales para estudiantes nuevos del 20%, 10% dependiendo el programa
Beca del 50% para todos los estudiantes nuevos ya incluido en el precio regular
Inscripción completamente gratis
Contamos con IPS para nuestros estudiantes
Clínica veterinaria
Acceso a consultorios psicológicos y jurídicos
Talleres de bienestar Universitario
Con el pago de la primera cuota ya se puede matricular
Ubicación privilegiada
No se aplicarán incrementos anuales durante el transcurso de la carrera.
Financiación directa con la universidad, sin incremento adicional
Un curso gratuito de inglés nivel A1
Somos academia Cisco
Manejamos doble titulación para algunas carreras
Contamos con gimnasio gratuito el cual podrás usar ilimitadamente en un horario establecido
Estos son los únicos beneficios que actualmente se manejan en la universidad.
                    `,
					},
				],
			};
		}
	);
}