import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function programasTecnicosTool(server: McpServer) {
	server.tool(
		"programasTecnicos",
		`
        Lista de programas técnicos ofrecidos por la universidad.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Lista de Programas de Tecnicos
La universidad ofrece un total de 14 programas técnicos. A continuación, se detalla la lista de programas disponibles:
Cocina nacional e internacional
Investigadores Criminalísticos y Judiciales
Diseño, confección y mercadeo de modas
Auxiliar en Clínica Veterinaria
Auxiliar de Enfermería
Auxiliar Contable y Financiero
Auxiliar de Talento Humano
Auxiliar Administrativo
Centro de idiomas.
Animación 2D, 3D.
Operaciones de software y redes de computo
Seguridad ocupacional
Auxiliar Productos interactivos digitales
Diseño Gráfico.
                    `,
					},
				],
			};
		}
	);
}
