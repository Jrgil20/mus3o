import { MuseumSchema, type Museum } from '@mus3o/shared'

export type CommunityMuseum = {
  id: string
  title: string
  roomCount: number
  createdAt: number
}

/** Extrae el ID de un museo compartido desde pathname, search params o hash */
export function parseShareIdFromLocation(loc: { pathname: string; search: string; hash: string }): string | null {
  // 1. Pathname: /m/abc12345
  const pathMatch = loc.pathname.match(/\/m\/([A-Za-z0-9_-]{6,16})/i)
  if (pathMatch) return pathMatch[1]

  // 2. Query param: ?m=abc12345
  const params = new URLSearchParams(loc.search)
  const qId = params.get('m')
  if (qId && /^[A-Za-z0-9_-]{6,16}$/.test(qId)) return qId

  // 3. Hash: #/m/abc12345 o #m=abc12345
  const hashMatch = loc.hash.match(/[#/]m[/=]([A-Za-z0-9_-]{6,16})/i)
  if (hashMatch) return hashMatch[1]

  return null
}

/** Publica un museo en el servidor para compartirlo con un enlace corto */
export async function shareMuseum(museum: Museum): Promise<{ ok: boolean; id?: string; url?: string; error?: string }> {
  try {
    const res = await fetch('/api/museums/share', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ museum }),
    })
    const data = await res.json()
    if (!res.ok || !data.ok) {
      return { ok: false, error: data.error || 'Error al guardar el museo' }
    }
    const origin = typeof window !== 'undefined' && window.location?.origin ? window.location.origin : ''
    const fullUrl = `${origin}/m/${data.id}`
    return { ok: true, id: data.id, url: fullUrl }
  } catch (err) {
    return { ok: false, error: err instanceof Error ? err.message : 'Error de conexión con el servidor' }
  }
}

/** Descarga un museo compartido por su ID */
export async function fetchSharedMuseum(id: string): Promise<Museum | null> {
  try {
    const res = await fetch(`/api/museums/${encodeURIComponent(id)}`)
    if (!res.ok) return null
    const data = await res.json()
    if (!data.ok || !data.museum) return null
    const parsed = MuseumSchema.safeParse(data.museum)
    return parsed.success ? parsed.data : null
  } catch {
    return null
  }
}

/** Lista los museos compartidos recientemente por la comunidad */
export async function fetchRecentCommunityMuseums(): Promise<CommunityMuseum[]> {
  try {
    const res = await fetch('/api/museums/community/recent')
    if (!res.ok) return []
    const data = await res.json()
    return Array.isArray(data.museums) ? data.museums : []
  } catch {
    return []
  }
}
