import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function dobleTitulacionProfesionalesTool(server: McpServer) {
	server.tool(
		"dobleTitulacionProfesionales",
		`
        Información sobre la doble titulación en carreras profesionales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Doble Titulación en Carreras Profesionales

La universidad ofrece la posibilidad de obtener una doble titulación en ciertas carreras profesionales. Esta opción permite a los estudiantes ampliar sus conocimientos y competencias, fortaleciendo su perfil profesional.
Requisitos para la Doble Titulación
Duración Adicional: Completar 2 períodos académicos adicionales a los 9 períodos estándar de la carrera inicial.
Carreras que Ofrecen Doble Titulación
Las siguientes combinaciones de carreras permiten optar por una doble titulación:
Ingeniería de Sistemas con Ingeniería de Software
Administración de Empresas con Contaduría Pública
Ingeniería Industrial con Administración de Empresas
Proceso para Acceder a la Doble Titulación
Para solicitar la doble titulación, los estudiantes deben seguir estos pasos:
Manifestar Interés: Expresar su deseo de optar por la doble titulación durante el noveno período académico.
Contacto Administrativo:
Comunicarse directamente con el decano de la facultad correspondiente o el docente encargado del programa de doble titulación.
                    `,
					},
				],
			};
		}
	);
}