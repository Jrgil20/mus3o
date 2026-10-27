import { describe, expect, it } from 'vitest'
import { computeRoomAdjacency, getRoomDistances, getRoomLOD, buildRoomGraphFromMuseum } from './roomStreaming'
import type { RoomLayout } from './layout'
import type { Museum } from '@mus3o/shared'

describe('roomStreaming', () => {
  const dummyRooms: RoomLayout[] = [
    { id: 'r0', x: 0, z: 0, w: 14, d: 14 } as RoomLayout,
    { id: 'r1', x: 24, z: 0, w: 14, d: 14 } as RoomLayout,
    { id: 'r2', x: 48, z: 0, w: 14, d: 14 } as RoomLayout,
    { id: 'r3', x: 72, z: 0, w: 14, d: 14 } as RoomLayout,
    { id: 'r4', x: 96, z: 0, w: 14, d: 14 } as RoomLayout,
  ]

  it('builds linear adjacency when no edges given', () => {
    const adj = computeRoomAdjacency(dummyRooms)
    expect(adj.get('r0')?.has('r1')).toBe(true)
    expect(adj.get('r1')?.has('r0')).toBe(true)
    expect(adj.get('r1')?.has('r2')).toBe(true)
    expect(adj.get('r0')?.has('r2')).toBe(false)
  })

  it('calculates BFS room distances properly', () => {
    const adj = computeRoomAdjacency(dummyRooms)
    const dist = getRoomDistances('r0', adj)
    expect(dist.get('r0')).toBe(0)
    expect(dist.get('r1')).toBe(1)
    expect(dist.get('r2')).toBe(2)
    expect(dist.get('r3')).toBe(3)
    expect(dist.get('r4')).toBe(4)
  })

  it('determines LOD correctly: full for <=1, shell for 2, hidden for >=3', () => {
    const adj = computeRoomAdjacency(dummyRooms)

    // Player in r0:
    expect(getRoomLOD('r0', 'r0', adj, dummyRooms)).toBe('full')
    expect(getRoomLOD('r1', 'r0', adj, dummyRooms)).toBe('full')
    expect(getRoomLOD('r2', 'r0', adj, dummyRooms)).toBe('shell')
    expect(getRoomLOD('r3', 'r0', adj, dummyRooms)).toBe('hidden')
    expect(getRoomLOD('r4', 'r0', adj, dummyRooms)).toBe('hidden')

    // Player moves to r2:
    expect(getRoomLOD('r0', 'r2', adj, dummyRooms)).toBe('shell')
    expect(getRoomLOD('r1', 'r2', adj, dummyRooms)).toBe('full')
    expect(getRoomLOD('r2', 'r2', adj, dummyRooms)).toBe('full')
    expect(getRoomLOD('r3', 'r2', adj, dummyRooms)).toBe('full')
    expect(getRoomLOD('r4', 'r2', adj, dummyRooms)).toBe('shell')

    // Player moves to r3 (r0 is now 3 hops away, should be hidden and evicted!):
    expect(getRoomLOD('r0', 'r3', adj, dummyRooms)).toBe('hidden')
    expect(getRoomLOD('r1', 'r3', adj, dummyRooms)).toBe('shell')
    expect(getRoomLOD('r2', 'r3', adj, dummyRooms)).toBe('full')
    expect(getRoomLOD('r3', 'r3', adj, dummyRooms)).toBe('full')
    expect(getRoomLOD('r4', 'r3', adj, dummyRooms)).toBe('full')
  })

  it('builds graph from museum edges', () => {
    const museum: Museum = {
      title: 'Branching Museum',
      rooms: [
        { id: 'hub', name: 'Hub', description: '', pieces: [] },
        { id: 'left', name: 'Left', description: '', pieces: [] },
        { id: 'right', name: 'Right', description: '', pieces: [] },
      ],
      graph: {
        start: 'hub',
        edges: [
          { from: 'hub', to: 'left', kind: 'next' },
          { from: 'hub', to: 'right', kind: 'next' },
        ],
      },
    }
    const graph = buildRoomGraphFromMuseum(museum)
    expect(graph.get('hub')?.has('left')).toBe(true)
    expect(graph.get('hub')?.has('right')).toBe(true)
    expect(graph.get('left')?.has('right')).toBe(false)
  })
})
