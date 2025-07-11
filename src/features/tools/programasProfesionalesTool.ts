import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function programasProfesionalesTool(server: McpServer) {
	server.tool(
		"programasProfesionales",
		`
        Lista de programas de profesionales ofrecidos por la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Lista de Programas de Profesionales

La universidad ofrece un total de 9 programas de formación profesional. A continuación, se detalla la lista de programas disponibles:

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
                    `,
					},
				],
			};
		}
	);
}
