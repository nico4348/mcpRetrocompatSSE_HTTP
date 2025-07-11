import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function horariosProgramasProfesionalesTool(server: McpServer) {
	server.tool(
		"horariosProgramasProfesionales",
		`
        Información sobre los horarios de los programas profesionales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Horarios para programas profesionales
Todos los programas profesionales ofrecen diversas opciones de horarios:
Horarios presenciales:
Disponible para todas las carreras Profesionales ofertadas actualmente
Diurno: Clases de lunes a viernes, de 8:00 am a 12:00 pm.  
 Nocturno: Clases de lunes a viernes, de 6:00 pm a 10:00 pm.  
Horarios fin de semana:
Disponible para los programas de Ingeniería de Software, Ingeniería de Sistemas, Psicología, Arquitectura, Derecho, y Administración de Empresas exclusivamente en el horario de fin de semana.
Fin de Semana:
Modalidad semi-presencial, con:
Clases virtuales los viernes: de 6:00 p.m. a 10:00 p.m.
Clases presenciales los días:
sábados de 8:00 a.m. a 5:00 p.m.
domingos de 8:00a.m. a 12:00 p.m.
Nota: Se debe tener disponibilidad los tres días
Horarios virtuales:  
 Disponibles exclusivamente para las carreras de Derecho, Ingeniería de Software, Ingeniería de Sistemas, Ingeniería Industrial, Arquitectura, Administración de Empresas, Contaduría Pública.
Nocturno: Clases virtuales de lunes a viernes, de 6:00 p.m. a 10:00 p.m.
Nota Las clases son 100% sincrónicas, en dado caso de no poder contactarte a la clase esta quedan grabadas y se puede validar en el aula virtual
                    `,
					},
				],
			};
		}
	);
}