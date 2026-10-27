import { useState, useEffect } from 'react'

export type ShareModalProps = {
  url: string
  title: string
  onClose: () => void
}

export function ShareModal({ url, title, onClose }: ShareModalProps) {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Fallback
    }
  }

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `mus3o — ${title}`,
          text: `Recorre el museo «${title}» en 3D en mus3o`,
          url,
        })
      } catch {
        // Cancelado
      }
    } else {
      copyToClipboard()
    }
  }

  return (
    <div
      className="card-backdrop"
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
      }}
    >
      <div
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '460px',
          width: '100%',
          padding: '2rem',
          borderRadius: '16px',
          background: 'var(--surface, #1e1e24)',
          border: '1px solid var(--border, rgba(255,255,255,0.15))',
          boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
          color: 'var(--ink, #f3f4f6)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 600 }}>Compartir museo</h3>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--muted, #9ca3af)',
              cursor: 'pointer',
              fontSize: '1.25rem',
            }}
          >
            ✕
          </button>
        </div>

        <p style={{ margin: '0 0 1.25rem', fontSize: '0.9rem', color: 'var(--muted, #9ca3af)' }}>
          Cualquier persona con este enlace podrá recorrer «<strong>{title}</strong>» en 3D desde su navegador o móvil:
        </p>

        <div
          style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '1.25rem',
            background: 'rgba(0,0,0,0.3)',
            padding: '0.5rem 0.75rem',
            borderRadius: '8px',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <input
            type="text"
            readOnly
            value={url}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              color: '#38bdf8',
              fontSize: '0.9rem',
              outline: 'none',
            }}
          />
          <button
            onClick={copyToClipboard}
            className="btn"
            style={{
              padding: '0.4rem 0.8rem',
              fontSize: '0.85rem',
              whiteSpace: 'nowrap',
              background: copied ? '#10b981' : 'var(--accent, #38bdf8)',
              color: '#000',
              fontWeight: 600,
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            {copied ? '¡Copiado!' : 'Copiar'}
          </button>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
          {typeof navigator !== 'undefined' && 'share' in navigator && (
            <button
              onClick={handleNativeShare}
              className="btn btn-secondary"
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '8px',
                cursor: 'pointer',
              }}
            >
              Compartir en app...
            </button>
          )}
          <button
            onClick={onClose}
            className="btn btn-primary"
            style={{
              padding: '0.6rem 1.2rem',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            Listo
          </button>
        </div>
      </div>
    </div>
  )
}
