import { memo } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle, Zap, Globe, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '../context/LanguageContext'

const ContactCTA = memo(function ContactCTA() {
  const { t } = useLanguage()

  const highlights = [
    { Icon: MessageCircle, title: t('contactCTA.h1') },
    { Icon: Zap, title: t('contactCTA.h2') },
    { Icon: Globe, title: t('contactCTA.h3') },
    { Icon: BarChart3, title: t('contactCTA.h4') },
  ]

  return (
    <section style={{ background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,193,106,0.08) 0%, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="section" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <AnimatedSection>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.04em', marginBottom: 16 }}>
            {t('contactCTA.title')}<span className="gradient-text">{t('contactCTA.highlight')}</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1.15rem', maxWidth: 560, margin: '0 auto 48px', lineHeight: 1.7 }}>
            {t('contactCTA.subtitle')}
          </p>
        </AnimatedSection>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16, marginBottom: 48 }}>
          {highlights.map((highlight, i) => {
            const IconComp = highlight.Icon
            return (
              <AnimatedSection key={i} delay={i * 0.1}>
                <motion.div whileHover={{ scale: 1.05, y: -4 }} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 24px', borderRadius: 16, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', fontSize: '0.95rem', fontWeight: 500 }}>
                  <IconComp size={18} style={{ color: '#00C16A' }} />
                  {highlight.title}
                </motion.div>
              </AnimatedSection>
            )
          })}
        </div>
        <AnimatedSection delay={0.4}>
          <Link to="/contact" className="btn-glow" style={{ fontSize: '1.1rem', display: 'inline-flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
            {t('contactCTA.btn')} <ArrowRight size={20} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
})

export default ContactCTA
