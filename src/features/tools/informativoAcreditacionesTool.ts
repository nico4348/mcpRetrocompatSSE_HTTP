import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function informativoAcreditacionesTool(server: McpServer) {
	server.tool(
		"informativoAcreditaciones",
		`
        Información sobre las acreditaciones de la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    informativo_acreditaciones:
¿Están acreditados ante el ministerio de educación?
Por supuesto, en caso de quieras ver el SNIES de una carrera :
Lista de Programas Profesionales ofrecidos por la universidad:
Derecho - SNIES:101401
Administración de Empresas - SNIES: 107997
Arquitectura - SNIES: 108552
Contaduría Pública - SNIES: 107998
Ingeniería Industrial - SNIES: 108257
Ingeniería de Sistemas - SNIES: 110616
Ingeniería de Software - SNIES: 107876
Psicología - SNIES: 104286
Medicina Veterinaria y Zootecnia - SNIES: 116323
Comunicación social - SNIES: 101321
Lista de Programas Técnicos Laborales ofrecidos por la universidad tiene el RES 030024

**Lista de Programas de Posgrado ofrecidos por la universidad: **
Posgrado en Derecho Administrativo y Contractual - SNIES: 108519
Posgrado en Derecho Penal y Criminalística - SNIES: 108520
Posgrado en Gerencia en Talento Humano - SNIES: 109243
Posgrado en Gerencia de Empresas - SNIES: 109244
Posgrado en Gerencia Financiera - SNIES: 110206

¿Están acreditados en alta calidad?
En este momento, estamos trabajando arduamente para obtener la acreditación de alta calidad que nos permitirá mejorar aún más nuestros estándares educativos.
                    `,
					},
				],
			};
		}
	);
}
