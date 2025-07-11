import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function modalidadesEstudioProfesionalesTool(server: McpServer) {
	server.tool(
		"modalidadesEstudioProfesionales",
		`
        Información sobre las modalidades de estudio para programas profesionales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Modalidades de estudio para Programas Profesionales:
La universidad ofrece diferentes modalidades de estudio para adaptarse a las necesidades de los estudiantes:
Presencial
Disponible para todos los programas profesionales. Las clases se dictan en las instalaciones de la universidad, con horarios diurnos y nocturnos.
Fin de semana
Disponible para los programas de:
Ingeniería de Software
Ingeniería de Sistemas
Psicología
Arquitectura
Derecho
Administración de Empresas

Horario:
Viernes: Clases virtuales de 6:00 p.m. a 10:00 p.m.
Sábados: Sesiones presenciales de 8:00 a.m. a 5:00 p.m.
Domingos: Sesiones presenciales de 8:00 a.m a 12:00 p.m.
Esta modalidad ofrece flexibilidad para quienes necesitan compaginar estudios con otras actividades durante la semana.

Virtual
Actualmente, los siguientes programas están disponibles en modalidad completamente virtual:
Derecho
Ingeniería de Software
Ingeniería de Sistemas
Ingeniería Industrial
Arquitectura
Administración de Empresas
Contaduria Publica

Horarios Específicos:
Nocturno Virtual: Lunes a Viernes, de 6:00 p.m. a 10:00 p.m.
Nota Las clases son 100% sincrónicas, en dado caso de no poder contactarte a la clase esta quedan grabadas y se puede validar en el aula virtual
                    `,
					},
				],
			};
		}
	);
}
