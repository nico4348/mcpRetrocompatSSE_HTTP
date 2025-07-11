import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function practicasProfesionalesTool(server: McpServer) {
	server.tool(
		"practicasProfesionales",
		`
        Información sobre las prácticas empresariales y académicas en programas profesionales.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Prácticas Empresariales y Académicas en Programas Profesionales
Enfoque Académico de las Prácticas
En la universidad, todos los programas académicos tienen un enfoque de 40% teórico y 60% práctico, lo que permite que la mayoría de las prácticas se realicen dentro de las clases. La institución cuenta con salones y espacios especializados para prácticas de diferentes programas, tales como:
Finca Universitarias para Medicina Veterinaria.
Clínica Veterinaria Universitaria de Colombia para auxiliares de clínica veterinaria y Medicina Veterinaria.
IPS Universitaria de Colombia para auxiliar de enfermería
Salas de Consultorios Jurídicos para Derecho
Salas de Consultorios Psicológico para psicología
Prácticas Empresariales Externas
Para las prácticas empresariales externas, los estudiantes deben seguir los siguientes pasos:
Buscar Empresas Certificadas o Acreditadas:
Las empresas deben estar certificadas o acreditadas por Industria y Comercio.
Gestión de la Práctica:
Los estudiantes son responsables de gestionar su propio lugar de práctica.
Formalización del Proceso:
Presentar una carta a Bienestar Universitario para formalizar el proceso de práctica.
Importante
Acreditación de la Empresa:
Para las prácticas empresariales externas, la empresa debe estar acreditada para validar oficialmente las prácticas realizadas. Además, la empresa tiene que tener más de un año de haber sido fundada. Solo se aceptarán prácticas realizadas en empresas que cumplan con este requisito.
                    `,
					},
				],
			};
		}
	);
}