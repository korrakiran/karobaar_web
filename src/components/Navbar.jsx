import { useState, useEffect, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ArrowRight, Globe } from 'lucide-react'
import Logo from './Logo'
import { useLanguage } from '../context/LanguageContext'

const navKeys = [
  { path: '/', key: 'nav.home' },
  { path: '/about', key: 'nav.about' },
  { path: '/demo', key: 'nav.demo' },
]

const Navbar = memo(function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { language, toggleLanguage, t } = useLanguage()
  
  const { scrollY } = useScroll()
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

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
        animate={{ y: hidden ? -100 : 0, x: '-50%', opacity: hidden ? 0 : 1 }}
        transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
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
            {navKeys.map((link) => (
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
                {t(link.key)}
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
            <div className="hidden md:flex items-center gap-4">
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                <Globe size={16} />
                {language.toUpperCase()}
              </button>
              <Link
                to="/contact"
                className="btn-primary"
                style={{ padding: '10px 24px', fontSize: '0.875rem', display: 'inline-flex', alignItems: 'center', gap: '6px', textDecoration: 'none' }}
              >
                {t('nav.contact')} <ArrowRight size={16} />
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
              <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 text-lg font-bold text-gray-600 hover:text-gray-900 transition-colors bg-gray-100 rounded-full px-6 py-2"
                style={{ border: 'none', cursor: 'pointer' }}
              >
                <Globe size={20} />
                {language === 'en' ? 'Switch to Hindi' : 'Switch to English'}
              </button>

              {navKeys.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-bold no-underline"
                    style={{
                      fontFamily: "'Outfit', sans-serif",
                      color: location.pathname === link.path ? '#00C16A' : '#111827',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {t(link.key)}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link to="/contact" className="btn-primary" style={{ marginTop: 16, display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }} onClick={() => setMenuOpen(false)}>
                  {t('nav.contact')} <ArrowRight size={18} />
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
