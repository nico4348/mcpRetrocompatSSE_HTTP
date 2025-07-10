# Servidor MCP Compatible

Servidor MCP con compatibilidad hacia atrás que soporta tanto el protocolo Streamable HTTP moderno (2025-03-26) como el protocolo HTTP+SSE deprecated (2024-11-05).

## 🚀 Características

### Protocolos Soportados

1. **Streamable HTTP (2025-03-26)** - Protocolo moderno
   - ✅ Resumabilidad de sesiones
   - ✅ Event Store para recuperación de eventos
   - ✅ Gestión avanzada de sesiones
   - ✅ Soporte completo para GET/POST/DELETE

2. **HTTP+SSE (2024-11-05)** - Protocolo legacy
   - ✅ Notificaciones en tiempo real
   - ✅ Compatibilidad con clientes antiguos
   - ✅ Soporte para Server-Sent Events

### Herramientas Incluidas

- 🔧 `get-server-info` - Información del servidor y estadísticas
- 🧪 `test-compatibility` - Test de compatibilidad de protocolos
- 📡 `start-notification-stream` - Stream de notificaciones periódicas
- 📨 `send-immediate-notification` - Notificación inmediata
- 🔗 `test-protocol-connectivity` - Test de conectividad

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Compilar TypeScript
npm run build

# Ejecutar en modo desarrollo
npm run dev
```

## 🎯 Uso

### Iniciar el Servidor

```bash
# Modo desarrollo (con hot reload)
npm run dev

# Modo producción
npm run build && npm start
```

El servidor estará disponible en `http://localhost:3002`

### Endpoints Disponibles

- `GET /` - Información del servidor
- `/mcp` - Endpoint Streamable HTTP (GET/POST/DELETE)
- `/sse` - Endpoint SSE legacy (GET)
- `/messages` - Endpoint POST legacy (POST)

### Ejecutar Tests

```bash
# Test básico
npm run test

# Test completo de ambos protocolos
npm run test-both

# Test solo protocolo moderno
npm run test-modern

# Test solo protocolo legacy
npm run test-legacy
```

## 🔌 Conexión con Clientes

### Protocolo Streamable HTTP (Moderno)

```typescript
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

const client = new Client({
  name: 'my-client',
  version: '1.0.0',
}, {
  capabilities: { logging: {} }
});

const transport = new StreamableHTTPClientTransport({
  baseUrl: 'http://localhost:3002/mcp'
});

await client.connect(transport);
```

### Protocolo HTTP+SSE (Legacy)

```typescript
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { SSEClientTransport } from '@modelcontextprotocol/sdk/client/sse.js';

const client = new Client({
  name: 'my-legacy-client',
  version: '1.0.0',
}, {
  capabilities: { logging: {} }
});

const transport = new SSEClientTransport({
  url: 'http://localhost:3002/sse',
  postUrl: 'http://localhost:3002/messages'
});

await client.connect(transport);
```

## 🧪 Testing con Postman

### Protocolo Streamable HTTP

1. **Inicializar sesión:**
   ```
   POST http://localhost:3002/mcp
   Content-Type: application/json
   
   {
     "jsonrpc": "2.0",
     "method": "initialize",
     "params": {
       "capabilities": {}
     },
     "id": 1
   }
   ```

2. **Llamar herramienta:**
   ```
   POST http://localhost:3002/mcp
   Content-Type: application/json
   Mcp-Session-Id: <session-id-from-response>
   
   {
     "jsonrpc": "2.0",
     "method": "tools/call",
     "params": {
       "name": "get-server-info",
       "arguments": {}
     },
     "id": 2
   }
   ```

### Protocolo HTTP+SSE

1. **Establecer stream SSE:**
   ```
   GET http://localhost:3002/sse
   Accept: text/event-stream
   ```

2. **Enviar mensajes:**
   ```
   POST http://localhost:3002/messages?sessionId=<session-id>
   Content-Type: application/json
   
   {
     "jsonrpc": "2.0",
     "method": "initialize",
     "params": {
       "capabilities": {}
     },
     "id": 1
   }
   ```

## 🔧 Desarrollo

### Estructura del Proyecto

```
servidor-compatible/
├── src/
│   ├── server.ts                 # Servidor principal
│   ├── shared/
│   │   └── inMemoryEventStore.ts # Event Store para resumabilidad
│   ├── tools/
│   │   └── notificationTools.ts  # Herramientas de notificación
│   ├── test-client.ts           # Cliente de prueba básico
│   ├── test-modern-client.ts    # Cliente protocolo moderno
│   ├── test-legacy-client.ts    # Cliente protocolo legacy
│   └── test-both-protocols.ts   # Test completo
├── package.json
├── tsconfig.json
└── README.md
```

### Scripts Disponibles

- `npm run build` - Compilar TypeScript
- `npm run dev` - Ejecutar en modo desarrollo
- `npm run start` - Ejecutar en modo producción
- `npm run test` - Test básico
- `npm run test-both` - Test completo de protocolos
- `npm run test-modern` - Test protocolo moderno
- `npm run test-legacy` - Test protocolo legacy

## 📋 Características Técnicas

### Resumabilidad (Solo Protocolo Moderno)

El servidor implementa resumabilidad completa:

- **Event Store**: Almacena eventos para recuperación
- **Session Management**: Gestión de sesiones persistentes
- **Automatic Reconnection**: Reconexión automática con recuperación de estado

### Compatibilidad hacia Atrás

- **Dual Protocol Support**: Soporta ambos protocolos simultáneamente
- **Independent Sessions**: Sesiones independientes por protocolo
- **Legacy Client Support**: Soporte completo para clientes antiguos

### Gestión de Recursos

- **Memory Management**: Limpieza automática de eventos antiguos
- **Connection Cleanup**: Limpieza automática de conexiones cerradas
- **Graceful Shutdown**: Apagado elegante del servidor

## 🛡️ Producción

Para uso en producción:

1. Configurar variables de entorno apropiadas
2. Usar un proceso manager como PM2
3. Configurar reverse proxy (nginx/apache)
4. Implementar logging estructurado
5. Monitorear rendimiento y memoria

## 🤝 Contribuir

1. Fork el proyecto
2. Crear branch para feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push al branch (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🔗 Enlaces Útiles

- [MCP SDK Documentation](https://github.com/modelcontextprotocol/typescript-sdk)
- [Protocol Specification](https://spec.modelcontextprotocol.io/)
- [Examples Repository](https://github.com/modelcontextprotocol/servers)

---

**Nota**: Este servidor es compatible con ambos protocolos MCP, pero se recomienda usar el protocolo Streamable HTTP moderno para nuevas implementaciones debido a sus características avanzadas de resumabilidad y gestión de sesiones.