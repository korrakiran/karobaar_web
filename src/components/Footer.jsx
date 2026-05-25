import { memo } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Footer = memo(function Footer() {
  return (
    <footer
      style={{
        background: '#0F172A',
        color: 'white',
        padding: '80px 24px 40px',
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 48,
        }}
      >
        {/* Brand */}
        <div>
          <Logo size={36} className="text-white mb-4" />
          <p
            style={{
              color: '#94a3b8',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              marginTop: 16,
              maxWidth: 280,
            }}
          >
            WhatsApp-first retail operating system for small Indian retailers.
            Manage inventory, billing, and analytics — in your language.
          </p>
          <div style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <span style={{ color: '#475569', fontSize: '0.75rem' }}>A product of</span>
            <a
              href="https://ports.blog"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#94a3b8',
                fontSize: '0.75rem',
                fontWeight: 600,
                letterSpacing: '0.04em',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.08)',
                padding: '2px 8px',
                borderRadius: 999,
                textDecoration: 'none',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#00C16A'; e.currentTarget.style.borderColor = 'rgba(0,193,106,0.3)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
            >
              ports.blog
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '1.1rem',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Quick Links
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {['/', '/about', '/demo', '/contact'].map((path) => (
              <Link
                key={path}
                to={path}
                style={{
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#00C16A')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
              >
                {path === '/' ? 'Home' : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </Link>
            ))}
          </div>
        </div>

        {/* Company */}
        <div>
          <h4
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '1.1rem',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Company
          </h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <a
              href="mailto:support@ports.blog"
              style={{
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00C16A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              support@ports.blog
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h4
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 700,
              fontSize: '1.1rem',
              marginBottom: 20,
              letterSpacing: '-0.02em',
            }}
          >
            Connect
          </h4>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              color: '#94a3b8',
              fontSize: '0.95rem',
            }}
          >
            LinkedIn
            <span
              style={{
                fontSize: '0.75rem',
                color: '#00C16A',
                background: 'rgba(0, 193, 106, 0.1)',
                padding: '2px 8px',
                borderRadius: 999,
                fontWeight: 600,
                letterSpacing: '0.02em',
              }}
            >
              Coming Soon
            </span>
          </div>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          marginTop: 60,
          paddingTop: 24,
          textAlign: 'center',
        }}
      >
        <p style={{ color: '#64748b', fontSize: '0.85rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          <span>Built for Bharat 🇮🇳</span>
          <span style={{ color: '#334155' }}>·</span>
          <span style={{ color: '#475569' }}>A{' '}
            <a
              href="https://ports.blog"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#64748b', fontWeight: 600, textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#00C16A')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#64748b')}
            >
              ports.blog
            </a>{' '}product
          </span>
        </p>
      </div>
    </footer>
  )
})

export default Footer
