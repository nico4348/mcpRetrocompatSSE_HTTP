import { z } from "zod";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";

export function procesoHomologacionesTool(server: McpServer) {
	server.tool(
		"procesoHomologaciones",
		`
        Información sobre el proceso de homologaciones.
        `,
		async () => {
			return {
				content: [
					{
						type: "text",
						text: `
                    Proceso de Homologaciones
Este trámite se realiza exclusivamente por modalidad virtual y está dirigido únicamente a estudiantes profesionales colombianos. (Temporalmente, no es posible realizar la homologación para las carreras profesionales de Medicina veterinaria y zootecnia , debido a que estas son nuevas en la universidad).
Requisitos Previos y Obligatorios
Para el programa de Derecho:

No deben haber transcurrido más de 5 años desde la culminación de la carrera.

La homologación solo es válida para programas de Derecho.

Para los demás programas:

No deben haber transcurrido más de 6 años desde la culminación de la carrera.

La información de cuanto se homologa se te dará por el área pertinente .
El estudiante debe enviar la sabana de notas de la institución colombiana de origen, presentando tanto el original como una copia.

Pasos Obligatorios (No se pueden omitir)
Ingresar a la página de la universidad: https://solicitudes.universitariadecolombia.edu.co/formulario-homologaciones/

Seleccionar "Homologaciones" y diligenciar obligatoriamente cada uno de los campos del formulario.

Enviar la solicitud de homologación.

Importante
Esperar la respuesta oficial de la institución, la cual confirmará si es posible realizar la homologación.
Información Adicional
El estudio de homologación no presenta ningún costo.

El tiempo máximo de entrega de la respuesta es de 10 a 15 días hábiles.

Homologación para Profesionales
El proceso de homologación para profesionales presenta las siguientes condiciones:
El aspirante sólo puede solicitar homologaciones de estudios cursados en programas tecnológicos o en carreras profesionales, ya sean estos estudios no culminados o culminados.

Este proceso está disponible únicamente para las modalidades diurna y nocturna, de lunes a viernes. No se puede realizar la homologación en las modalidades virtual o de fin de semana.

Homologación para Técnicos
No se permite la homologación de títulos de técnicos laborales en la institución.

Homologación para Posgrados
No se permite la homologación de especializaciones .
                    `,
					},
				],
			};
		}
	);
}