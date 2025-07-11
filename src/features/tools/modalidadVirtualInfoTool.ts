import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function modalidadVirtualInfoTool(server: McpServer) {
	server.tool(
		"modalidadVirtualInfo",
		`
        Información sobre la modalidad virtual de estudio.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Modalidad Virtual Información
En la modalidad virtual todas las carreras se imparten mediante clases sincrónicas en vivo con el docente. Además, cada sesión queda grabada, de modo que los estudiantes que no puedan asistir en tiempo real puedan acceder al contenido y continuar su aprendizaje.
Nota: Las carreras en modalidad virtual no cuentan con descuento en el costo de matrícula ni colegiaturas.
                    `,
					},
				],
			};
		}
	);
}
