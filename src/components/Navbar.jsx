import { useState, useEffect, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/demo', label: 'Demo' },
]

const Navbar = memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="fixed top-4 left-1/2 z-50"
        style={{
          width: 'min(92%, 1100px)',
        }}
      >
        <div
          className="flex items-center justify-between transition-all duration-300"
          style={{
            background: scrolled
              ? 'rgba(255,255,255,0.82)'
              : 'rgba(255,255,255,0.65)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255,255,255,0.3)',
            borderRadius: '999px',
            padding: scrolled ? '10px 24px' : '14px 28px',
            boxShadow: scrolled
              ? '0 8px 32px rgba(0,0,0,0.1)'
              : '0 4px 20px rgba(0,0,0,0.06)',
          }}
        >
          {/* Logo */}
          <Link to="/" className="no-underline" style={{ color: '#111827' }}>
            <Logo size={32} />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1" style={{ alignItems: 'center', gap: '8px' }}>
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="relative text-sm font-medium no-underline transition-colors duration-200"
                style={{
                  color: location.pathname === link.path ? '#00C16A' : '#6B7280',
                  fontFamily: "'Inter', sans-serif",
                  padding: '8px 16px',
                  display: 'inline-block',
                }}
                onMouseEnter={(e) => {
                  if (location.pathname !== link.path) {
                    e.currentTarget.style.color = '#111827'
                  }
                }}
                onMouseLeave={(e) => {
                  if (location.pathname !== link.path) {
                    e.currentTarget.style.color = '#6B7280'
                  }
                }}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navIndicator"
                    className="absolute bottom-0 left-1/2 h-0.5 rounded-full"
                    style={{
                      width: '20px',
                      background: '#00C16A',
                      transform: 'translateX(-50%)',
                    }}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div className="hidden md:block">
              <Link
                to="/contact"
                className="btn-primary"
                style={{ padding: '10px 24px', fontSize: '0.875rem' }}
              >
                Contact Us <ArrowRight size={16} />
              </Link>
            </div>
            <button
              className="md:hidden flex items-center justify-center"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: '#111827',
                padding: 4,
              }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.97)',
              backdropFilter: 'blur(40px)',
            }}
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    className="text-3xl font-bold no-underline"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      color: location.pathname === link.path ? '#00C16A' : '#111827',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/contact" className="btn-primary" style={{ marginTop: 16 }}>
                  Contact Us <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
})

export default Navbar
