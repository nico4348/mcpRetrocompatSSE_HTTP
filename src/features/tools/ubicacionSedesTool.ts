import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function ubicacionSedesTool(server: McpServer) {
	server.tool(
		"ubicacionSedes",
		`
        Información sobre la ubicación de las sedes de la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Ubicación de las Sedes
Sede Principal o Administrativa: Dirección: Cra. 7 #35-85, Bogotá

La sede principal se ubica por la Cra. 7 #35-85 (Bogotá). Se posee un total de 30 sedes donde la mayoría están cerca de la Cra. 7, entre estas se encuentran:
Sede 2: Cra. 7 #35-72
Sede 3: Cra. 13 #35-39
Sede 4: Dirección: Cra. 7 #34-90
Sede 5: Diagonal 34 #5-84
Sede 6: Calle 34 #5A-90
Sede de Enfermería: Calle 36 #5A-37
Sede Veterinaria: Cra. 6 #35-38
Sede de Laboratorios: Cra. 7 #35-20
Sede IPS: Calle 34 #5-89
Ubicación de las Sedes Prácticas para Estudiantes
Fincas Universitarias: Ubicadas en La Calera.
Clínica Veterinaria Universitaria de Colombia: Se encuentra en la Sede de Veterinaria.
IPS Universitaria de Colombia: Ubicada en la Sede de IPS.
Salas de Consultorios Jurídicos para Derecho: Ubicadas en la Sede 3.
Salas de Consultorios Psicológicos para Psicología: Ubicadas en la Sede 3.
Nota: Para obtener más información sobre la finca, IPS, clínica y consultorios, comunícate directamente con tus profesores.
                    `,
					},
				],
			};
		}
	);
}
