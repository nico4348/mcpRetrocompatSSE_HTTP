import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function programasPosgradoTool(server: McpServer) {
	server.tool(
		"programasPosgrado",
		`
        Lista de programas de posgrado ofrecidos por la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Lista de Programas de Posgrado Ofrecidos por la Universidad
La universidad ofrece un total de 5 de programas de posgrados. A continuación, se detalla la lista de programas disponibles:
Posgrado Derecho Administrativo y Contractual.
Posgrado Derecho Penal y Criminalística.
Posgrado en Gerencia en Talento Humano.
Posgrado en Gerencia de empresas.
Posgrado en Gerencia financiera.
                    `,
					},
				],
			};
		}
	);
}
