import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function informativoIpsTool(server: McpServer) {
	server.tool(
		"informativoIps",
		`
        Información de contacto y servicios de la IPS universitaria.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    informativo_ips:
INFORMACIÓN DE CONTACTO:

-   WhatsApp: +57 313 858 7733
-   Página web: https://ipsuniversitariadecolombia.com/agenda-tu-cita/
-   Para membresía VIP: https://ipsuniversitariadecolombia.com/membresia/
                    `,
					},
				],
			};
		}
	);
}
