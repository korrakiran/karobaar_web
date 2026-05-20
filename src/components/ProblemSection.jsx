import { memo } from 'react'
import { Package, Timer, Languages } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const problems = [
  { Icon: Package, title: 'Inventory Chaos', desc: 'Retailers lose track of stock daily. Manual registers and spreadsheets can\'t keep up with modern demand.' },
  { Icon: Timer, title: 'Slow Billing', desc: 'Handwritten bills, calculation errors, and long queues frustrate both shopkeepers and customers.' },
  { Icon: Languages, title: 'Language Barriers', desc: 'Most retail software only works in English — leaving out millions of Hindi, Tamil, and regional language speakers.' },
]

const ProblemSection = memo(function ProblemSection() {
  return (
    <section className="section">
      <AnimatedSection>
        <h2 className="section-title">Retail Shouldn't Be <span className="gradient-text">This Hard</span></h2>
        <p className="section-subtitle">Millions of Indian retailers struggle with outdated tools that don't speak their language or fit their workflow.</p>
      </AnimatedSection>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
        {problems.map((p, i) => {
          const IconComp = p.Icon
          return (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div className="glass-card" style={{ padding: 40 }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: 'rgba(0,193,106,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <IconComp size={28} style={{ color: '#00C16A' }} />
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.35rem', fontWeight: 700, marginBottom: 12, letterSpacing: '-0.02em' }}>{p.title}</h3>
                <p style={{ color: '#6B7280', lineHeight: 1.7, fontSize: '0.95rem' }}>{p.desc}</p>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
})

export default ProblemSection
