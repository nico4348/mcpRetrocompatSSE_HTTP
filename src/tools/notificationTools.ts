import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { CallToolResult } from '@modelcontextprotocol/sdk/types.js';
import { z } from 'zod';

/**
 * Agrega herramientas relacionadas con notificaciones al servidor MCP
 */
export function addNotificationTools(server: McpServer) {
  
  // Tool: Stream de notificaciones periódicas (compatible con ambos protocolos)
  server.registerTool(
    "start-notification-stream",
    {
      title: "Stream de Notificaciones",
      description: "Inicia un stream de notificaciones periódicas para probar resumabilidad",
      inputSchema: {
        interval: z.number()
          .min(100)
          .max(10000)
          .default(1000)
          .describe("Intervalo en milisegundos entre notificaciones"),
        count: z.number()
          .min(0)
          .max(100)
          .default(10)
          .describe("Número de notificaciones a enviar (0 para 100)"),
        message: z.string()
          .default("Notificación periódica")
          .describe("Mensaje personalizado para las notificaciones")
      }
    },
    async ({ interval, count, message }, { sendNotification }): Promise<CallToolResult> => {
      const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
      let counter = 0;
      const startTime = new Date().toISOString();
      const streamId = `notification_${Date.now()}`;

      console.log(`🔔 Iniciando stream de notificaciones: ${count} mensajes cada ${interval}ms`);

      try {
        while (count === 0 || counter < count) {
          counter++;
          
          const notificationData = {
            streamId,
            counter,
            timestamp: new Date().toISOString(),
            message: `${message} #${counter}`,
            interval,
            totalCount: count === 0 ? "ilimitado" : count
          };

          try {
            await sendNotification({
              method: "notifications/message",
              params: {
                level: "info",
                data: JSON.stringify(notificationData),
                timestamp: notificationData.timestamp
              },
            });
            
            console.log(`📨 Notificación #${counter} enviada`);
          } catch (error) {
            console.error(`❌ Error enviando notificación #${counter}:`, error);
            break;
          }

          // Esperar el intervalo especificado
          await sleep(interval);
        }

        // Notificación final
        await sendNotification({
          method: "notifications/completed",
          params: {
            level: "info",
            data: JSON.stringify({
              streamId,
              totalSent: counter,
              startTime,
              endTime: new Date().toISOString(),
              message: "Stream de notificaciones completado"
            })
          },
        });

        console.log(`✅ Stream de notificaciones completado: ${counter} mensajes enviados`);

      } catch (error) {
        console.error("❌ Error en stream de notificaciones:", error);
        
        // Notificación de error
        try {
          await sendNotification({
            method: "notifications/error",
            params: {
              level: "error",
              data: JSON.stringify({
                streamId,
                error: error instanceof Error ? error.message : "Error desconocido",
                messagesSent: counter
              })
            },
          });
        } catch (notifyError) {
          console.error("❌ Error enviando notificación de error:", notifyError);
        }
      }

      return {
        content: [
          {
            type: "text",
            text: `Stream de notificaciones iniciado: ${counter} mensajes enviados cada ${interval}ms\nStream ID: ${streamId}\nInicio: ${startTime}`
          },
        ],
      };
    }
  );

  // Tool: Notificación inmediata
  server.registerTool(
    "send-immediate-notification", 
    {
      title: "Notificación Inmediata",
      description: "Envía una notificación inmediata para probar la conectividad",
      inputSchema: {
        level: z.enum(['info', 'warning', 'error']).default('info').describe("Nivel de la notificación"),
        message: z.string().describe("Mensaje de la notificación"),
        includeTimestamp: z.boolean().default(true).describe("Incluir timestamp en el mensaje")
      }
    },
    async ({ level, message, includeTimestamp }, { sendNotification }): Promise<CallToolResult> => {
      const timestamp = new Date().toISOString();
      const notificationId = `immediate_${Date.now()}`;
      
      const finalMessage = includeTimestamp 
        ? `[${timestamp}] ${message}`
        : message;

      try {
        await sendNotification({
          method: "notifications/immediate",
          params: {
            level,
            data: JSON.stringify({
              id: notificationId,
              message: finalMessage,
              timestamp,
              type: "immediate"
            })
          },
        });

        console.log(`📨 Notificación inmediata enviada: ${level} - ${message}`);

        return {
          content: [
            {
              type: "text",
              text: `Notificación inmediata enviada exitosamente\nID: ${notificationId}\nNivel: ${level}\nMensaje: ${finalMessage}`
            },
          ],
        };
      } catch (error) {
        console.error("❌ Error enviando notificación inmediata:", error);
        
        return {
          content: [
            {
              type: "text",
              text: `Error enviando notificación: ${error instanceof Error ? error.message : "Error desconocido"}`
            },
          ],
          isError: true
        };
      }
    }
  );

  // Tool: Test de conectividad con diferentes protocolos
  server.registerTool(
    "test-protocol-connectivity",
    {
      title: "Test de Conectividad de Protocolos", 
      description: "Prueba la conectividad enviando notificaciones para ambos protocolos",
      inputSchema: {
        testType: z.enum(['quick', 'extended']).default('quick').describe("Tipo de test de conectividad")
      }
    },
    async ({ testType }, { sendNotification }): Promise<CallToolResult> => {
      const results = [];
      const testId = `connectivity_test_${Date.now()}`;
      
      console.log(`🧪 Iniciando test de conectividad: ${testType}`);

      try {
        // Test 1: Notificación básica
        await sendNotification({
          method: "notifications/test",
          params: {
            level: "info", 
            data: JSON.stringify({
              testId,
              test: "basic_connectivity",
              timestamp: new Date().toISOString(),
              protocol: "compatible"
            })
          },
        });
        results.push("✅ Test básico exitoso");

        if (testType === 'extended') {
          // Test 2: Múltiples notificaciones rápidas
          for (let i = 1; i <= 5; i++) {
            await sendNotification({
              method: "notifications/test",
              params: {
                level: "info",
                data: JSON.stringify({
                  testId,
                  test: "rapid_fire",
                  sequence: i,
                  timestamp: new Date().toISOString()
                })
              },
            });
            await new Promise(resolve => setTimeout(resolve, 100));
          }
          results.push("✅ Test de múltiples notificaciones exitoso");

          // Test 3: Notificaciones de diferentes niveles
          const levels = ['info', 'warning', 'error'] as const;
          for (const level of levels) {
            await sendNotification({
              method: "notifications/test",
              params: {
                level,
                data: JSON.stringify({
                  testId,
                  test: "level_test",
                  level,
                  timestamp: new Date().toISOString()
                })
              },
            });
          }
          results.push("✅ Test de niveles de notificación exitoso");
        }

        // Notificación final
        await sendNotification({
          method: "notifications/test_completed",
          params: {
            level: "info",
            data: JSON.stringify({
              testId,
              testType,
              results: results.length,
              completedAt: new Date().toISOString(),
              status: "success"
            })
          },
        });

        console.log(`✅ Test de conectividad completado: ${results.length} pruebas exitosas`);

        return {
          content: [
            {
              type: "text",
              text: `Test de conectividad completado exitosamente\n\nResultados:\n${results.join('\n')}\n\nTest ID: ${testId}\nTipo: ${testType}`
            },
          ],
        };
      } catch (error) {
        console.error("❌ Error en test de conectividad:", error);
        
        return {
          content: [
            {
              type: "text", 
              text: `Error en test de conectividad: ${error instanceof Error ? error.message : "Error desconocido"}\n\nResultados parciales:\n${results.join('\n')}`
            },
          ],
          isError: true
        };
      }
    }
  );

  console.log('🔔 Herramientas de notificación agregadas al servidor compatible');
}