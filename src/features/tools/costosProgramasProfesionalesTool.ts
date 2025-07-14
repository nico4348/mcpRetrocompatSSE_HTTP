import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function costosProgramasProfesionalesTool(server: McpServer) {
	server.tool(
		"costosProgramasProfesionales",
		`
        Información sobre los costos de los programas profesionales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Costos de los Programas Profesionales
Programas Profesionales Regulares
La mayoría de los programas profesionales tienen un costo por período de contado de $3,600,000. La excepción es la carrera de Medicina Veterinaria y Zootecnia, cuyo costo es de $6,000,000 por período. La universidad ofrece la opción de pago en 3 cuotas mensuales de $1,200,000 para los programas regulares y $2,000,000 para Medicina Veterinaria y Zootecnia.
Importante

La carrera de Medicina Veterinaria y Zootecnia también requiere un pago único de una póliza de seguro obligatorio de $60,000 pesos, que cubre accidentes dentro de las instalaciones universitarias. Este pago se realiza una sola vez durante toda la carrera, junto con el primer pago.
Programas Profesionales Virtuales
El costo por período académico para los programas profesionales virtuales ahora será de $2,700,000 por contado o en 3 cuotas de $900,000 cada una. Para este nuevo valor, no aplicará ningún tipo de descuento para estudiantes nuevos.
Condiciones Generales para Programas Virtuales y Generales:

-   Financiación Directa: Al igual que los programas regulares, los programas virtuales se financian directamente a través de la universidad, sin necesidad de fiadores, cheques ni pagarés.
-   Estabilidad de precios: Los precios establecidos para los programas activos se mantendrán hasta la finalización de la carrera, sin aumentos anuales.

Polizas para carreras profesionales
					Todos los programas profesionales (Incluyendo virtuales y presenciales) requieren el pago obligatorio de una póliza con un costo de 60.000 COP, 
					la cual cubre exclusivamente los accidentes ocurridos dentro de las instalaciones universitarias. 
					Este seguro protege a los estudiantes mientras participan en actividades académicas o extracurriculares 
					organizadas y supervisadas por la institución dentro de sus espacios autorizados.
                    `,
					},
				],
			};
		}
	);
}
