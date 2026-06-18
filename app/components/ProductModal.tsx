"use client";
import React from 'react';

type Product = {
  id: string;
  title: string;
  description?: string;
  image?: string;
  features?: string[];
};

export default function ProductModal({ open, onClose, product }: { open: boolean; onClose: () => void; product?: Product | null; }) {
  if (!open || !product) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={product.title}
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1200,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: 'min(900px, 95%)',
          maxHeight: '90vh',
          overflow: 'auto',
          background: '#fff',
          borderRadius: 8,
          padding: '1rem',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
          {product.image ? (
            // Use a simple img to avoid Next/Image layout complexities in modal
            <img src={product.image} alt={product.title} style={{ width: 220, height: 160, objectFit: 'cover', borderRadius: 6 }} />
          ) : null}

          <div style={{ flex: 1 }}>
            <h3 style={{ marginTop: 0 }}>{product.title}</h3>

            {/* Render description as labeled specs when possible */}
            {product.description ? (
              (() => {
                const text = (product.description || '').trim();

                // Normalize common separators into new lines so we can handle many input formats
                const normalized = text
                  .replace(/\r/g, '')
                  .replace(/\s*;\s*/g, '\n')
                  .replace(/\s*\|\s*/g, '\n')
                  .replace(/\s*\-\s*/g, ':') // treat dashes like key: value
                  .replace(/,\s*(?=[A-Z\-])/g, '\n'); // split on commas before an uppercase word

                const lines = normalized.split('\n').map((l) => l.trim()).filter(Boolean);

                // Try to extract key/value pairs from each line
                const specs: Array<{ key?: string; value: string }> = lines.map((line) => {
                  // Common key separators: ':' or '-'
                  const colonIndex = line.indexOf(':');
                  if (colonIndex > -1) {
                    const key = line.slice(0, colonIndex).trim();
                    const value = line.slice(colonIndex + 1).trim();
                    return { key: key || undefined, value };
                  }

                  // If line looks like "KEY VALUE" where KEY is uppercase and short, treat first token as key
                  const tokens = line.split(/\s+/);
                  if (tokens.length > 1 && tokens[0].toUpperCase() === tokens[0] && tokens[0].length <= 20) {
                    return { key: tokens[0], value: tokens.slice(1).join(' ') };
                  }

                  // Fallback: whole line as value
                  return { value: line };
                });

                return (
                  <div style={{ color: 'var(--color-muted)', lineHeight: 1.6 }}>
                    {specs.map((s, i) => (
                      <div key={i} style={{ marginBottom: '0.375rem' }}>
                        {s.key ? (
                          <>
                            <strong style={{ display: 'block', fontSize: '0.9rem' }}>{s.key.toUpperCase()}</strong>
                            <span style={{ fontSize: '0.95rem', color: 'var(--color-secondary)' }}>{s.value}</span>
                          </>
                        ) : (
                          <div style={{ fontSize: '0.95rem', color: 'var(--color-secondary)' }}>{s.value}</div>
                        )}
                      </div>
                    ))}
                  </div>
                );
              })()
            ) : null}

            {/* Features (if provided) */}
            {product.features && product.features.length > 0 ? (
              <ul style={{ marginTop: '0.75rem', paddingLeft: '1.25rem' }}>
                {product.features.map((f, idx) => (
                  <li key={idx} style={{ marginBottom: '0.25rem' }}>{f}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>

        <div style={{ marginTop: '1rem', textAlign: 'right' }}>
          <button onClick={onClose} className="btn btn-outline" style={{ cursor: 'pointer' }}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
