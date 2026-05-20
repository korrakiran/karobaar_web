import { memo } from 'react'
import { Globe, Clock, Zap, MessageCircle } from 'lucide-react'
import CountUpModule from 'react-countup'
import { useInView } from 'react-intersection-observer'

const CountUp = typeof CountUpModule === 'function' ? CountUpModule : (CountUpModule.default || CountUpModule)
import AnimatedSection from './AnimatedSection'

const metrics = [
  { Icon: Clock, value: 3, suffix: '+ Hours', label: 'Saved Daily' },
  { Icon: Zap, value: 2, suffix: 'x Faster', label: 'Billing Speed' },
  { Icon: Globe, value: 20, suffix: '+', label: 'Languages Supported' },
  { Icon: MessageCircle, value: 100, suffix: '%', label: 'WhatsApp Native' },
]

const ImpactSection = memo(function ImpactSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section className="section">
      <AnimatedSection>
        <h2 className="section-title">Real <span className="gradient-text">Impact</span></h2>
        <p className="section-subtitle">Numbers that speak for themselves.</p>
      </AnimatedSection>
      <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
        {metrics.map((m, i) => {
          const IconComp = m.Icon
          return (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card" style={{ padding: '40px 28px', textAlign: 'center' }}>
                <div style={{ width: 60, height: 60, borderRadius: 18, background: 'linear-gradient(135deg, rgba(0,193,106,0.1), rgba(6,182,212,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <IconComp size={28} style={{ color: '#00C16A' }} />
                </div>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: "'Outfit', sans-serif", letterSpacing: '-0.04em', lineHeight: 1 }}>
                  {inView ? <CountUp end={m.value} duration={2.5} /> : 0}{m.suffix}
                </div>
                <div style={{ color: '#6B7280', fontSize: '0.9rem', marginTop: 8 }}>{m.label}</div>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
})

export default ImpactSection
