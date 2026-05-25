import { memo } from 'react'
import { motion } from 'framer-motion'
import { Package, Timer, Languages } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '../context/LanguageContext'

const ProblemSection = memo(function ProblemSection() {
  const { t } = useLanguage()

  const problems = [
    { Icon: Package, title: t('problems.p1.title'), desc: t('problems.p1.desc') },
    { Icon: Timer, title: t('problems.p2.title'), desc: t('problems.p2.desc') },
    { Icon: Languages, title: t('problems.p3.title'), desc: t('problems.p3.desc') },
  ]

  return (
    <section className="section" style={{ position: 'relative' }}>
      {/* Subtle green background accent */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '100vw', height: '100%', background: 'radial-gradient(ellipse at center, rgba(0,193,106,0.03) 0%, transparent 70%)', zIndex: -1, pointerEvents: 'none' }} />
      
      <AnimatedSection>
        <h2 className="section-title">{t('problems.title')}<span className="gradient-text">{t('problems.highlight')}</span></h2>
        <p className="section-subtitle">{t('problems.subtitle')}</p>
      </AnimatedSection>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
        {problems.map((p, i) => {
          const IconComp = p.Icon
          return (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div 
                className="glass-card" 
                whileHover={{ y: -6 }}
                style={{ padding: 40, background: 'white', transition: 'all 0.3s ease' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(0,193,106,0.3)'
                  e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,193,106,0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0,0,0,0.08)'
                }}
              >
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(0,193,106,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <IconComp size={28} style={{ color: '#00C16A' }} />
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.35rem', fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em', color: '#111827' }}>{p.title}</h3>
                <p style={{ color: '#6B7280', lineHeight: 1.7, fontSize: '0.95rem' }}>{p.desc}</p>
              </motion.div>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
})

export default ProblemSection
