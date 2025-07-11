import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function informativoClinicaVeterinariaTool(server: McpServer) {
	server.tool(
		"informativoClinicaVeterinaria",
		`
        Información sobre la clínica veterinaria de la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    informativo_clinicaVeterinaria:
La Institución Universitaria de Colombia cuenta con una clínica veterinaria para sus estudiantes. Esta clínica ofrece servicios veterinarios para animales, donde los estudiantes pueden realizar prácticas y adquirir experiencia en el campo de la medicina veterinaria. Además, la clínica veterinaria también brinda atención a mascotas y animales de la comunidad, ofreciendo servicios de consulta, diagnóstico, tratamiento y cirugía. En caso de querer comunicarse con la clínica veterinaria aquí se encuentra su número (314 4539585)
                    `,
					},
				],
			};
		}
	);
}
