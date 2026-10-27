import { describe, expect, it, beforeEach, vi } from 'vitest'
import { fetchRecentCommunityMuseums, fetchSharedMuseum, parseShareIdFromLocation, shareMuseum } from './shareApi'
import { sampleMuseum } from '@mus3o/shared'

describe('shareApi', () => {
  it('parses share ID from pathname, search or hash', () => {
    expect(parseShareIdFromLocation({ pathname: '/m/abc12345', search: '', hash: '' })).toBe('abc12345')
    expect(parseShareIdFromLocation({ pathname: '/', search: '?m=xyz98765', hash: '' })).toBe('xyz98765')
    expect(parseShareIdFromLocation({ pathname: '/', search: '', hash: '#/m/hash1234' })).toBe('hash1234')
    expect(parseShareIdFromLocation({ pathname: '/', search: '', hash: '' })).toBeNull()
  })

  it('shareMuseum sends POST and returns formatted URL', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () =>
        new Response(JSON.stringify({ ok: true, id: 'test1234', url: '/m/test1234' }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }),
      ),
    )

    const res = await shareMuseum(sampleMuseum)
    if (!res.ok) console.log('shareMuseum error:', res.error)
    expect(res.ok).toBe(true)
    expect(res.id).toBe('test1234')
    expect(res.url).toContain('/m/test1234')
    vi.unstubAllGlobals()
  })

  it('fetchSharedMuseum parses and returns valid museum', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn(async () =>
        new Response(JSON.stringify({ ok: true, museum: sampleMuseum }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }),
      ),
    )

    const museum = await fetchSharedMuseum('test1234')
    expect(museum).not.toBeNull()
    expect(museum?.title).toBe(sampleMuseum.title)
    vi.unstubAllGlobals()
  })
})
