import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function carrerasProfesionales(server: McpServer) {
	server.resource(
		"carrerasProfesionales",
		"resource://carrerasProfesionales",
		{
			name: "Carreras Profesionales",
			description: "Información completa sobre programas profesionales disponibles",
		},
		async () => {
			return {
				contents: [
					{
						uri: "resource://carrerasProfesionales",
						mimeType: "text/plain",
						text: `
						*
						No se dispone de informacion para ofrecer planes de estudio.

						Cuando termines de presentar los programas, ofrece la alternativa de inscripcion
						*
						Responde exclusivamente la pregunta del usuario sin dar información de más que no haya pedido el usuario

						<programas_disponibles>
						Modalidad Presencial:

						Derecho
						Administración de Empresas
						Arquitectura
						Contaduría Pública
						Ingeniería Industrial
						Ingeniería de Sistemas
						Ingeniería de Software
						Psicología
						Medicina Veterinaria y Zootecnia

						Modalidad Virtual:

						Derecho
						Ingeniería de Software
						Ingeniería de Sistemas
						Ingeniería Industrial
						Arquitectura
						Administración de Empresas
						Contaduría Pública
						</programas_disponibles>

						<creditos_por_programa>

						Derecho: 160 créditos
						Administración de Empresas: 144 créditos
						Arquitectura: 150 créditos
						Contaduría Pública: 144 créditos
						Ingeniería Industrial: 150 créditos
						Ingeniería de Sistemas: 150 créditos
						Ingeniería de Software: 150 créditos
						Psicología: 150 créditos
						Medicina Veterinaria y Zootecnia: 172 créditos
						(No darás precio por credito)
						</creditos_por_programa>

						<modalidades_disponibles>
						<modalidad_presencial>

						Disponible para todos los programas profesionales
						Clases en instalaciones universitarias
						Horarios: diurnos y nocturnos
						</modalidad_presencial>

						<modalidad_fin_de_semana>

						Programas disponibles: Ingeniería de Software, Ingeniería de Sistemas, Psicología, Arquitectura, Derecho, Administración de Empresas
						Viernes: Clases virtuales de 6:00 p.m. a 10:00 p.m.
						Sábados: Sesiones presenciales de 8:00 a.m. a 5:00 p.m.
						Domingos: Sesiones presenciales de 8:00 a.m. a 12:00 p.m.
						</modalidad_fin_de_semana>

						<modalidad_virtual>
						Horario nocturno: Lunes a Viernes, de 6:00 p.m. a 10:00 p.m.
						Clases 100% sincrónicas
						Sesiones grabadas disponibles en aula virtual para validación posterior
						</modalidad_virtual>
						</modalidades_disponibles>
						
						<instrucciones>
						1. Responde únicamente con la información contenida en las etiquetas anteriores
						2. Si te preguntan sobre información no disponible, responde explícitamente: "No cuento con esa información"
						3. No inventes ni extrapoles información
						4. Usa solo datos verificados de la Universitaria de Colombia
						5. Darás el nombre completo del programa cuando lo menciones
						</instrucciones>
						
						<limitaciones>
						- No responder con información que no se tenga o no se pueda verificar
						- Si no se dispone de información, responder explícitamente que no se cuenta con esa información
						- No se dispone de información para ofrecer planes de estudio
						- No repetir los beneficios si ya se dijeron 1 vez
						</limitaciones>
						`,
					},
				],
			};
		}
	);
}
