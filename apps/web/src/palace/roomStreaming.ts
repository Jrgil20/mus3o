import type { CorridorLayout, PalaceLayout, RoomLayout } from './layout'
import type { GraphEdge, Museum } from '@mus3o/shared'

export type RoomLOD = 'full' | 'shell' | 'hidden'

/**
 * Construye la lista de adyacencia (grafo no dirigido) entre las salas del museo.
 * Combina aristas explícitas (edges), pasillos (corridors) y fallback secuencial.
 */
export function computeRoomAdjacency(
  rooms: Array<{ id: string; x?: number; z?: number; w?: number; d?: number }>,
  corridors?: CorridorLayout[],
  edges?: GraphEdge[],
): Map<string, Set<string>> {
  const adj = new Map<string, Set<string>>()
  for (const r of rooms) adj.set(r.id, new Set())

  // 1. Conexiones explícitas del grafo del museo
  if (edges && edges.length > 0) {
    for (const e of edges) {
      if (adj.has(e.from) && adj.has(e.to)) {
        adj.get(e.from)!.add(e.to)
        adj.get(e.to)!.add(e.from)
      }
    }
  } else {
    // Si no hay aristas explícitas, el museo estándar es una cadena lineal r[i] <-> r[i+1]
    for (let i = 0; i < rooms.length - 1; i++) {
      adj.get(rooms[i].id)?.add(rooms[i + 1].id)
      adj.get(rooms[i + 1].id)?.add(rooms[i].id)
    }
  }

  // 2. Conexiones físicas por pasillos del layout
  if (corridors && corridors.length > 0) {
    for (const c of corridors) {
      const f = c.floor
      const touched: string[] = []
      for (const r of rooms) {
        if (r.x === undefined || r.z === undefined || r.w === undefined || r.d === undefined) continue
        const inX = Math.abs(r.x - f.x) <= (r.w + f.w) / 2 + 1.5
        const inZ = Math.abs(r.z - f.z) <= (r.d + f.d) / 2 + 1.5
        if (inX && inZ) touched.push(r.id)
      }
      if (touched.length >= 2) {
        adj.get(touched[0])?.add(touched[1])
        adj.get(touched[1])?.add(touched[0])
      }
    }
  }

  return adj
}

/**
 * Calcula la distancia topológica en saltos de sala (BFS) desde la sala actual.
 */
export function getRoomDistances(startRoomId: string, adj: Map<string, Set<string>>): Map<string, number> {
  const dist = new Map<string, number>()
  if (!startRoomId || !adj.has(startRoomId)) return dist
  dist.set(startRoomId, 0)
  const queue: string[] = [startRoomId]

  while (queue.length > 0) {
    const curr = queue.shift()!
    const d = dist.get(curr)!
    const neighbors = adj.get(curr)
    if (neighbors) {
      for (const n of neighbors) {
        if (!dist.has(n)) {
          dist.set(n, d + 1)
          queue.push(n)
        }
      }
    }
  }
  return dist
}

/**
 * Determina el nivel de detalle (LOD) y visibilidad de una sala según su distancia al jugador:
 * - dist <= 1: 'full' (sala completa: modelos 3D, cuadros, pedestales, etiquetas, textos)
 * - dist === 2: 'shell' (solo cascarón: piso y muros para evitar vacíos visuales, sin modelos ni texturas)
 * - dist >= 3: 'hidden' (completamente desmontada: libera memoria RAM, geometrías y texturas)
 */
export function getRoomLOD(
  roomId: string,
  currentRoomId: string | null,
  adj: Map<string, Set<string>>,
  rooms: RoomLayout[],
): RoomLOD {
  // Si aún no se conoce la sala actual, la primera es 'full' y las demás siguen el grafo desde la primera
  const current = currentRoomId ?? rooms[0]?.id
  if (!current) return 'full'

  const distances = getRoomDistances(current, adj)
  let d = distances.get(roomId)

  // Fallback euclidiano por si la sala quedara desconectada del grafo topológico
  if (d === undefined) {
    const curRoom = rooms.find((r) => r.id === current)
    const targetRoom = rooms.find((r) => r.id === roomId)
    if (curRoom && targetRoom) {
      const euclid = Math.hypot(curRoom.x - targetRoom.x, curRoom.z - targetRoom.z)
      if (euclid < 28) d = 1
      else if (euclid < 52) d = 2
      else d = 3
    } else {
      d = 3
    }
  }

  if (d <= 1) return 'full'
  if (d === 2) return 'shell'
  return 'hidden'
}

/**
 * Construye el grafo de adyacencia directamente desde un Museum (para el prefetecher de imágenes).
 */
export function buildRoomGraphFromMuseum(palace: Museum): Map<string, Set<string>> {
  const edges = (palace as { edges?: GraphEdge[] }).edges ?? palace.graph?.edges
  return computeRoomAdjacency(palace.rooms, undefined, edges)
}
