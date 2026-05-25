import { memo } from 'react'
import { Globe, Clock, Zap, MessageCircle } from 'lucide-react'
import CountUpModule from 'react-countup'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '../context/LanguageContext'

const CountUp = typeof CountUpModule === 'function' ? CountUpModule : (CountUpModule.default || CountUpModule)

const ImpactSection = memo(function ImpactSection() {
  const { t } = useLanguage()

  const metrics = [
    { Icon: Clock, value: 3, suffix: '+', label: t('impact.m1') },
    { Icon: Zap, value: 2, suffix: 'x', label: t('impact.m2') },
    { Icon: Globe, value: 20, suffix: '+', label: t('impact.m3') },
    { Icon: MessageCircle, value: 100, suffix: '%', label: t('impact.m4') },
  ]

  return (
    <section className="section" style={{ padding: '140px 24px' }}>
      <AnimatedSection>
        <h2 className="section-title">{t('impact.title')}<span className="gradient-text">{t('impact.highlight')}</span></h2>
        <p className="section-subtitle">{t('impact.subtitle')}</p>
      </AnimatedSection>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginTop: 40 }}>
        {metrics.map((m, i) => {
          const IconComp = m.Icon
          return (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div style={{ padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(0,193,106,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
                  <IconComp size={26} style={{ color: '#00C16A' }} />
                </div>
                <div style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 900, fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.05em', lineHeight: 1, color: '#111827' }}>
                  <CountUp end={m.value} duration={2.5} enableScrollSpy scrollSpyOnce /><span style={{ color: '#00C16A' }}>{m.suffix}</span>
                </div>
                <div style={{ color: '#6B7280', fontSize: '1.05rem', marginTop: 12, fontWeight: 500 }}>{m.label}</div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
})

export default ImpactSection
