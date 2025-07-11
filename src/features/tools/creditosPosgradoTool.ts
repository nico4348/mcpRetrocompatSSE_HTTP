import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function creditosPosgradoTool(server: McpServer) {
	server.tool(
		"creditosPosgrado",
		`
        Información sobre los créditos de los programas de posgrado.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Créditos de los Programas de Posgrado
Todos los programas de posgrado en la institución están estructurados con una carga académica establecida para garantizar una formación de calidad y coherente. A continuación, se detallan los créditos requeridos:

-   Total de Créditos:
    Derecho Administrativo y Contractual: 26
    Derecho Penal y Criminalística: 26
    Gerencia en Talento Humano: 30
    Gerencia de empresas: 30
    Gerencia financiera: 32
                    `,
					},
				],
			};
		}
	);
}