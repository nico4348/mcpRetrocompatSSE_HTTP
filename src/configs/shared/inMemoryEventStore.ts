import { JSONRPCMessage } from '@modelcontextprotocol/sdk/types.js';
import { EventStore } from '@modelcontextprotocol/sdk/server/streamableHttp.js';

/**
 * Simple in-memory implementation of the EventStore interface for resumability
 * This is primarily intended for examples and testing, not for production use
 * where a persistent storage solution would be more appropriate.
 */
export class InMemoryEventStore implements EventStore {
  private events: Map<string, { streamId: string, message: JSONRPCMessage, timestamp: number }> = new Map();
  private maxEvents = 10000; // Límite para evitar memory leaks

  /**
   * Generates a unique event ID for a given stream ID
   */
  private generateEventId(streamId: string): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 10);
    return `${streamId}_${timestamp}_${random}`;
  }

  /**
   * Extracts the stream ID from an event ID
   */
  private getStreamIdFromEventId(eventId: string): string {
    const parts = eventId.split('_');
    return parts.length > 0 ? parts[0] : '';
  }

  /**
   * Stores an event with a generated event ID
   * Implements EventStore.storeEvent
   */
  async storeEvent(streamId: string, message: JSONRPCMessage): Promise<string> {
    const eventId = this.generateEventId(streamId);
    const timestamp = Date.now();
    
    this.events.set(eventId, { streamId, message, timestamp });
    
    // Limpiar eventos antiguos para evitar memory leaks
    if (this.events.size > this.maxEvents) {
      this.cleanupOldEvents();
    }
    
    console.log(`📦 Evento almacenado: ${eventId} para stream ${streamId}`);
    return eventId;
  }

  /**
   * Replays events that occurred after a specific event ID
   * Implements EventStore.replayEventsAfter
   */
  async replayEventsAfter(lastEventId: string,
    { send }: { send: (eventId: string, message: JSONRPCMessage) => Promise<void> }
  ): Promise<string> {
    if (!lastEventId || !this.events.has(lastEventId)) {
      console.log(`⚠️ Evento no encontrado: ${lastEventId}`);
      return '';
    }

    // Extract the stream ID from the event ID
    const streamId = this.getStreamIdFromEventId(lastEventId);
    if (!streamId) {
      console.log(`⚠️ No se pudo extraer stream ID de: ${lastEventId}`);
      return '';
    }

    const lastEvent = this.events.get(lastEventId);
    if (!lastEvent) {
      return '';
    }

    const lastTimestamp = lastEvent.timestamp;
    let eventsReplayed = 0;

    // Obtener eventos posteriores para el mismo stream
    const laterEvents = Array.from(this.events.entries())
      .filter(([eventId, event]) => 
        event.streamId === streamId && 
        event.timestamp > lastTimestamp
      )
      .sort((a, b) => a[1].timestamp - b[1].timestamp);

    console.log(`🔄 Reproduciendo ${laterEvents.length} eventos después de ${lastEventId}`);

    // Enviar eventos en orden cronológico
    for (const [eventId, { message }] of laterEvents) {
      try {
        await send(eventId, message);
        eventsReplayed++;
      } catch (error) {
        console.error(`❌ Error enviando evento ${eventId}:`, error);
      }
    }

    console.log(`✅ ${eventsReplayed} eventos reproducidos para stream ${streamId}`);
    return streamId;
  }

  /**
   * Limpia eventos antiguos para evitar memory leaks
   */
  private cleanupOldEvents(): void {
    const events = Array.from(this.events.entries())
      .sort((a, b) => b[1].timestamp - a[1].timestamp);
    
    // Mantener solo los eventos más recientes
    const eventsToKeep = events.slice(0, Math.floor(this.maxEvents * 0.8));
    
    this.events.clear();
    eventsToKeep.forEach(([eventId, eventData]) => {
      this.events.set(eventId, eventData);
    });

    console.log(`🧹 Limpieza de eventos: mantenidos ${eventsToKeep.length} eventos`);
  }

  /**
   * Obtiene estadísticas del event store
   */
  getStats() {
    const streams = new Set(Array.from(this.events.values()).map(e => e.streamId));
    const timestamps = Array.from(this.events.values()).map(e => e.timestamp);
    
    return {
      totalEvents: this.events.size,
      totalStreams: streams.size,
      oldestEvent: timestamps.length > 0 ? Math.min(...timestamps) : 0,
      newestEvent: timestamps.length > 0 ? Math.max(...timestamps) : 0,
      maxEvents: this.maxEvents
    };
  }

  /**
   * Limpia todos los eventos (útil para testing)
   */
  clear(): void {
    this.events.clear();
    console.log('🗑️ Event store limpiado completamente');
  }
}