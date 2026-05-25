import { memo } from 'react'
import { MessageSquare, Settings2, TrendingUp } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '../context/LanguageContext'

const HowItWorks = memo(function HowItWorks() {
  const { t } = useLanguage()

  const steps = [
    { icon: MessageSquare, title: t('howItWorks.s1.title'), desc: t('howItWorks.s1.desc'), color: '#25D366' },
    { icon: Settings2, title: t('howItWorks.s2.title'), desc: t('howItWorks.s2.desc'), color: '#3B82F6' },
    { icon: TrendingUp, title: t('howItWorks.s3.title'), desc: t('howItWorks.s3.desc'), color: '#8B5CF6' },
  ]

  return (
    <section className="section" style={{ background: '#0F172A', color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: 400, background: 'radial-gradient(ellipse at top, rgba(0,193,106,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
      
      <AnimatedSection>
        <div style={{ textAlign: 'center', marginBottom: 64, position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: 16 }}>{t('howItWorks.title')}</h2>
          <p style={{ color: '#94A3B8', fontSize: '1.1rem', maxWidth: 500, margin: '0 auto' }}>{t('howItWorks.subtitle')}</p>
        </div>
      </AnimatedSection>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 32, position: 'relative', zIndex: 1 }}>
        {steps.map((step, i) => {
          return (
            <AnimatedSection key={i} delay={i * 0.15}>
              <div style={{ position: 'relative', padding: 32, background: 'rgba(255,255,255,0.03)', borderRadius: 24, border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ position: 'absolute', top: -20, left: 32, width: 48, height: 48, borderRadius: 14, background: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 8px 24px ${step.color}40`, color: 'white' }}>
                  <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '1.2rem' }}>{i + 1}</span>
                </div>
                <div style={{ marginTop: 24 }}>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: 12, fontFamily: "'Outfit', sans-serif" }}>{step.title}</h3>
                  <p style={{ color: '#94A3B8', lineHeight: 1.6, fontSize: '0.95rem' }}>{step.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
})

export default HowItWorks
