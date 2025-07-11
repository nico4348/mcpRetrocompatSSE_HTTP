import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function creditosProgramasProfesionalesTool(server: McpServer) {
	server.tool(
		"creditosProgramasProfesionales",
		`
        Información sobre los créditos de los programas profesionales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Creditos de los Programas Profesionales:

La cantidad de créditos necesaria para completar cada programa profesional está establecida y no se incrementará ni reducirá bajo ninguna circunstancia. A continuación, se detalla la carga de créditos por programa:
Derecho: 160 créditos
Administración de Empresas: 144 créditos
Arquitectura: 150 créditos
Contaduría Pública: 144 créditos
Ingeniería Industrial: 150 créditos
Ingeniería de Sistemas: 150 créditos
Ingeniería de Software: 150 créditos
Psicología: 150 créditos
Medicina Veterinaria y Zootecnia: 172 créditos
                    `,
					},
				],
			};
		}
	);
}