import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function informativoParqueaderoTool(server: McpServer) {
	server.tool(
		"informativoParqueadero",
		`
        Información sobre el servicio de parqueadero de la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    informativo_parqueadero:
Inmobiliaria Centro San Martín y Bienestar Universitario IUDC
SERVICIO DE PARQUEO A CIELO ABIERTO
Ubicación:
Calle 33 No 6B-04
Horario de Atención:
Días: Lunes a sábados
Jornada Diurna: 6:00 a.m. a 12:00 p.m.
Jornada Nocturna: 05:00 p.m. a 11:00 p.m.
Documentos requeridos para el ingreso:
Carnet de estudiante
Carnet de funcionario administrativo
Cédula ciudadanía
Tarjeta de propiedad
Tarifas (pago en efectivo):
Motocicletas: $4,000
Vehículos: $9,000
                    `,
					},
				],
			};
		}
	);
}
