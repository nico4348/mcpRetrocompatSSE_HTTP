import express, { Request, Response } from "express";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { carrerasProfesionales } from "./features/resources/test.js";
import { uniformesProgramasTecnicosTool } from "./features/tools/uniformesProgramasTecnicosTool.js";
import { uniformesProfesionalesTool } from "./features/tools/uniformesProfesionalesTool.js";
import { ubicacionSedesTool } from "./features/tools/ubicacionSedesTool.js";
import { sistemaReferidosTool } from "./features/tools/sistemaReferidosTool.js";
import { sistemaModularTool } from "./features/tools/sistemaModularTool.js";
import { programasTecnicosTool } from "./features/tools/programasTecnicosTool.js";
import { programasProfesionalesTool } from "./features/tools/programasProfesionalesTool.js";
import { programasPosgradoTool } from "./features/tools/programasPosgradoTool.js";
import { procesoReintegroTool } from "./features/tools/procesoReintegroTool.js";
import { procesoMatriculaTool } from "./features/tools/procesoMatriculaTool.js";
import { procesoInscripcionTool } from "./features/tools/procesoInscripcionTool.js";
import { procesoHomologacionesTool } from "./features/tools/procesoHomologacionesTool.js";
import { procesoFinanciacionIcetexTool } from "./features/tools/procesoFinanciacionIcetexTool.js";
import { procesoFinanciacionTool } from "./features/tools/procesoFinanciacionTool.js";
import { practicasProfesionalesTool } from "./features/tools/practicasProfesionalesTool.js";
import { polizasTecnicosTool } from "./features/tools/polizasTecnicosTool.js";
import { polizasProfesionalesTool } from "./features/tools/polizasProfesionalesTool.js";
import { modalidadesEstudioTecnicosTool } from "./features/tools/modalidadesEstudioTecnicosTool.js";
import { modalidadesEstudioProfesionalesTool } from "./features/tools/modalidadesEstudioProfesionalesTool.js";
import { modalidadesEstudioPosgradoTool } from "./features/tools/modalidadesEstudioPosgradoTool.js";
import { modalidadVirtualInfoTool } from "./features/tools/modalidadVirtualInfoTool.js";
import { metodosPagoTecnicosTool } from "./features/tools/metodosPagoTecnicosTool.js";
import { metodosPagoProfesionalesTool } from "./features/tools/metodosPagoProfesionalesTool.js";
import { metodosPagoPosgradoTool } from "./features/tools/metodosPagoPosgradoTool.js";
import { informativoParqueaderoTool } from "./features/tools/informativoParqueaderoTool.js";
import { informativoMatriculaTool } from "./features/tools/informativoMatriculaTool.js";
import { informativoIpsTool } from "./features/tools/informativoIpsTool.js";
import { informativoHistoriaTool } from "./features/tools/informativoHistoriaTool.js";
import { informativoDeporteTool } from "./features/tools/informativoDeporteTool.js";
import { informativoClinicaVeterinariaTool } from "./features/tools/informativoClinicaVeterinariaTool.js";
import { informativoBecasTool } from "./features/tools/informativoBecasTool.js";
import { informativoAcreditacionesTool } from "./features/tools/informativoAcreditacionesTool.js";
import { horariosProgramasTecnicosTool } from "./features/tools/horariosProgramasTecnicosTool.js";
import { horariosProgramasProfesionalesTool } from "./features/tools/horariosProgramasProfesionalesTool.js";
import { horariosPosgradoTool } from "./features/tools/horariosPosgradoTool.js";
import { horarioAdministrativoTool } from "./features/tools/horarioAdministrativoTool.js";
import { duracionProgramasTecnicosTool } from "./features/tools/duracionProgramasTecnicosTool.js";
import { duracionProgramasProfesionalesTool } from "./features/tools/duracionProgramasProfesionalesTool.js";
import { duracionPosgradoTool } from "./features/tools/duracionPosgradoTool.js";
import { documentosMatriculaTecnicosTool } from "./features/tools/documentosMatriculaTecnicosTool.js";
import { documentosMatriculaProfesionalesTool } from "./features/tools/documentosMatriculaProfesionalesTool.js";
import { documentosMatriculaPosgradoTool } from "./features/tools/documentosMatriculaPosgradoTool.js";
import { dobleTitulacionProfesionalesTool } from "./features/tools/dobleTitulacionProfesionalesTool.js";
import { descuentosBeneficiosTool } from "./features/tools/descuentosBeneficiosTool.js";
import { creditosProgramasProfesionalesTool } from "./features/tools/creditosProgramasProfesionalesTool.js";
import { creditosPosgradoTool } from "./features/tools/creditosPosgradoTool.js";
import { costosProgramasTecnicosTool } from "./features/tools/costosProgramasTecnicosTool.js";
import { costosProgramasProfesionalesTool } from "./features/tools/costosProgramasProfesionalesTool.js";
import { costosPosgradoTool } from "./features/tools/costosPosgradoTool.js";
import { conveniosInternacionalesTool } from "./features/tools/conveniosInternacionalesTool.js";
import { beneficiosTool } from "./features/tools/beneficiosTool.js";

import cors from "cors";
import { TransportManager } from "./configs/transports/transportManager.js";
import { handleStreamableHttpRequest } from "./configs/transports/streamableHttpTransport";
import { handleSseRequest, handleSsePostRequest } from "./configs/transports/sseTransport";

const getServer = () => {
	const server = new McpServer(
		{
			name: "servidor-compatible-mcp",
			version: "1.0.0",
		},
		{ capabilities: { logging: {} } }
	);

	carrerasProfesionales(server);
	uniformesProgramasTecnicosTool(server);
	uniformesProfesionalesTool(server);
	ubicacionSedesTool(server);
	sistemaReferidosTool(server);
	sistemaModularTool(server);
	programasTecnicosTool(server);
	programasProfesionalesTool(server);
	programasPosgradoTool(server);
	procesoReintegroTool(server);
	procesoMatriculaTool(server);
	procesoInscripcionTool(server);
	procesoHomologacionesTool(server);
	procesoFinanciacionIcetexTool(server);
	procesoFinanciacionTool(server);
	practicasProfesionalesTool(server);
	polizasTecnicosTool(server);
	polizasProfesionalesTool(server);
	modalidadesEstudioTecnicosTool(server);
	modalidadesEstudioProfesionalesTool(server);
	modalidadesEstudioPosgradoTool(server);
	modalidadVirtualInfoTool(server);
	metodosPagoTecnicosTool(server);
	metodosPagoProfesionalesTool(server);
	metodosPagoPosgradoTool(server);
	informativoParqueaderoTool(server);
	informativoMatriculaTool(server);
	informativoIpsTool(server);
	informativoHistoriaTool(server);
	informativoDeporteTool(server);
	informativoClinicaVeterinariaTool(server);
	informativoBecasTool(server);
	informativoAcreditacionesTool(server);
	horariosProgramasTecnicosTool(server);
	horariosProgramasProfesionalesTool(server);
	horariosPosgradoTool(server);
	horarioAdministrativoTool(server);
	duracionProgramasTecnicosTool(server);
	duracionProgramasProfesionalesTool(server);
	duracionPosgradoTool(server);
	documentosMatriculaTecnicosTool(server);
	documentosMatriculaProfesionalesTool(server);
	documentosMatriculaPosgradoTool(server);
	dobleTitulacionProfesionalesTool(server);
	descuentosBeneficiosTool(server);
	creditosProgramasProfesionalesTool(server);
	creditosPosgradoTool(server);
	costosProgramasTecnicosTool(server);
	costosProgramasProfesionalesTool(server);
	costosPosgradoTool(server);
	conveniosInternacionalesTool(server);
	beneficiosTool(server);

	console.log("🔧 Servidor MCP compatible configurado con herramientas de compatibilidad");
	return server;
};

const app = express();
app.use(express.json());

app.use(
	cors({
		origin: "*",
		exposedHeaders: ["Mcp-Session-Id"],
	})
);

const transportManager = new TransportManager();

app.all("/mcp", (req: Request, res: Response) => {
	handleStreamableHttpRequest(req, res, transportManager, getServer);
});

app.get("/sse", (req: Request, res: Response) => {
	handleSseRequest(req, res, transportManager, getServer);
});

app.post("/messages", (req: Request, res: Response) => {
	handleSsePostRequest(req, res, transportManager);
});

app.get("/", (req: Request, res: Response) => {
	res.json({
		server: "servidor-compatible-mcp",
		version: "1.o.o",
		protocols: [
			{
				name: "Streamable HTTP",
				version: "2025-03-26",
				endpoint: "/mcp",
			},
			{
				name: "HTTP+SSE (deprecated)",
				version: "2024-11-05",
				endpoints: ["/sse", "/messages"],
			},
		],
		activeSessions: transportManager.getActiveSessions(),
		uptime: process.uptime(),
	});
});

const PORT = 3002;
app.listen(PORT, () => {
	console.log(`🚀 Servidor MCP compatible ejecutándose en puerto ${PORT}`);
	console.log(`
==============================================
🔧 OPCIONES DE TRANSPORTE SOPORTADAS:

1. 🆕 Streamable HTTP (Protocolo versión: 2025-03-26)
   Endpoint: /mcp
   Métodos: GET, POST, DELETE
   Uso: 
     - Inicializar con POST a /mcp
     - Establecer stream SSE con GET a /mcp
     - Enviar peticiones con POST a /mcp
     - Terminar sesión con DELETE a /mcp

2. 🔙 HTTP + SSE (Protocolo versión: 2024-11-05)
   Endpoints: /sse (GET) y /messages (POST)
   Uso:
     - Establecer stream SSE con GET a /sse
     - Enviar peticiones con POST a /messages?sessionId=<id>

📊 Información del servidor: GET /
🧪 Herramientas disponibles: 
   - start-notification-stream
   - send-immediate-notification
   - test-protocol-connectivity
   - get-server-info
   - test-compatibility
==============================================
`);
});

process.on("SIGINT", async () => {
	console.log("🔄 Apagando servidor...");
	await transportManager.closeAll();
	console.log("✅ Apagado del servidor completado");
	process.exit(0);
});
