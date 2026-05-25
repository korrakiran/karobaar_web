import { memo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Globe, Clock, Zap, MessageCircle, X } from 'lucide-react'

import WhatsAppMockup from './WhatsAppMockup'
import { useLanguage } from '../context/LanguageContext'



const HeroSection = memo(function HeroSection() {

  const [isMd, setIsMd] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)

  const { t } = useLanguage()
  const words = (t('hero.title') + t('hero.whatsapp')).split(' ')

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsMd(mq.matches)
    const handler = (e) => setIsMd(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 100, background: '#FAFAFA' }}>
      {/* Unified Parallax Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: '10%', left: '10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,193,106,0.12) 0%, transparent 70%)', filter: 'blur(80px)' }} />
        <motion.div animate={{ x: [0, -20, 0], y: [0, 30, 0] }} transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', bottom: '10%', right: '10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      </div>

      <div className="section" style={{ position: 'relative', zIndex: 1, paddingTop: 40, paddingBottom: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMd ? '1fr 1fr' : '1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px', borderRadius: 999, background: 'rgba(0,193,106,0.1)', border: '1px solid rgba(0,193,106,0.2)', fontSize: '0.85rem', fontWeight: 600, color: '#00C16A', fontFamily: "'Inter', sans-serif" }}>
                <MessageCircle size={14} /> {t('hero.tagline')}
              </span>
            </motion.div>

            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginTop: 24, fontFamily: "'Outfit', sans-serif", color: '#111827' }}>
              {words.map((word, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }} style={{ display: 'inline-block', marginRight: '0.25em' }}>
                  {word.includes('WhatsApp') ? <span className="gradient-text">{word}</span> : word}
                </motion.span>
              ))}
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#4B5563', lineHeight: 1.7, marginTop: 20, maxWidth: 520 }}>
              {t('hero.subtitle')}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 36px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                {t('hero.ctaPrimary')} <ArrowRight size={18} />
              </Link>
              <button onClick={() => setShowVideoModal(true)} className="btn-secondary" style={{ fontSize: '1.05rem', padding: '16px 36px', color: '#111827', borderColor: 'rgba(0,0,0,0.1)' }}>
                <Play size={18} /> {t('hero.ctaSecondary')}
              </button>
            </motion.div>
          </div>

          {isMd && (
            <div>
              <WhatsAppMockup />
            </div>
          )}
        </div>


      </div>

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowVideoModal(false)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(15, 23, 42, 0.85)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 99999,
              padding: 24,
            }}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 250 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: 800,
                background: '#0F172A',
                borderRadius: 24,
                padding: 6,
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 193, 106, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowVideoModal(false)}
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  width: 38,
                  height: 38,
                  borderRadius: '50%',
                  background: '#00C16A',
                  color: 'white',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 8px 16px rgba(0, 193, 106, 0.4)',
                  zIndex: 10,
                  transition: 'transform 0.2s',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <X size={18} />
              </button>

              {/* Video Player */}
              <div style={{ borderRadius: 18, overflow: 'hidden', background: '#000', aspectRatio: '16/9', display: 'flex', alignItems: 'center' }}>
                <video
                  src="/demo.mov"
                  controls
                  autoPlay
                  style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
})

export default HeroSection
