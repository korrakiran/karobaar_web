import { memo, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Globe, Clock, Zap, MessageCircle, X } from 'lucide-react'
import CountUpModule from 'react-countup'
import { useInView } from 'react-intersection-observer'

const CountUp = typeof CountUpModule === 'function' ? CountUpModule : (CountUpModule.default || CountUpModule)
import WhatsAppMockup from './WhatsAppMockup'

const stats = [
  { Icon: Globe, value: 20, suffix: '+', label: 'Languages' },
  { Icon: Clock, value: 3, suffix: '+', label: 'Hours Saved Daily' },
  { Icon: Zap, value: 2, suffix: 'x', label: 'Faster Billing' },
  { Icon: MessageCircle, value: 100, suffix: '%', label: 'WhatsApp Native' },
]

const HeroSection = memo(function HeroSection() {
  const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 })
  const [isMd, setIsMd] = useState(false)
  const [showVideoModal, setShowVideoModal] = useState(false)
  const words = ['Run', 'Your', 'Store', 'on', 'WhatsApp']

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    setIsMd(mq.matches)
    const handler = (e) => setIsMd(e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  return (
    <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', paddingTop: 100 }}>
      {/* Background glows */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
        <motion.div animate={{ x: [0, 30, 0], y: [0, -20, 0] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: '10%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,193,106,0.12) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <motion.div animate={{ x: [0, -20, 0], y: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', bottom: '10%', right: '10%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <motion.div animate={{ x: [0, 15, 0] }} transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }} style={{ position: 'absolute', top: '40%', right: '30%', width: 300, height: 300, borderRadius: '50%', background: 'radial-gradient(circle, rgba(79,70,229,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      </div>

      <div className="section" style={{ position: 'relative', zIndex: 1, paddingTop: 40, paddingBottom: 40 }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMd ? '1fr 1fr' : '1fr', gap: 48, alignItems: 'center' }}>
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '8px 20px', borderRadius: 999, background: 'rgba(0,193,106,0.08)', border: '1px solid rgba(0,193,106,0.2)', fontSize: '0.85rem', fontWeight: 600, color: '#00C16A', fontFamily: "'Inter', sans-serif" }}>
                <MessageCircle size={14} /> WhatsApp-First Retail OS
              </span>
            </motion.div>

            <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginTop: 24, fontFamily: "'Outfit', sans-serif" }}>
              {words.map((word, i) => (
                <motion.span key={i} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + i * 0.08 }} style={{ display: 'inline-block', marginRight: '0.25em' }}>
                  {word === 'WhatsApp' ? <span className="gradient-text">{word}</span> : word}
                </motion.span>
              ))}
            </h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }} style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#6B7280', lineHeight: 1.7, marginTop: 20, maxWidth: 520 }}>
              Inventory, billing, analytics and business management — in your language. Built for every Indian retailer.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} style={{ display: 'flex', gap: 16, marginTop: 32, flexWrap: 'wrap' }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
                Contact Us <ArrowRight size={18} />
              </Link>
              <button onClick={() => setShowVideoModal(true)} className="btn-secondary" style={{ fontSize: '1.05rem', padding: '16px 36px' }}>
                <Play size={18} /> See How It Works
              </button>
            </motion.div>
          </div>

          {isMd && (
            <div>
              <WhatsAppMockup />
            </div>
          )}
        </div>

        <div ref={statsRef} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 20, marginTop: 80 }}>
          {stats.map((stat, i) => {
            const IconComp = stat.Icon
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={statsInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="glass-card" style={{ padding: 24, textAlign: 'center' }}>
                <IconComp size={24} style={{ color: '#00C16A', margin: '0 auto 12px' }} />
                <div style={{ fontSize: '2rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.03em' }}>
                  {statsInView ? <CountUp end={stat.value} duration={2} /> : 0}{stat.suffix}
                </div>
                <div style={{ color: '#6B7280', fontSize: '0.85rem', marginTop: 4 }}>{stat.label}</div>
              </motion.div>
            )
          })}
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
                  top: -16,
                  right: -16,
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
