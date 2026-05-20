import { memo } from 'react'
import { MessageSquare, Package, Receipt, BarChart3 } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const steps = [
  { Icon: MessageSquare, num: '01', title: 'Message on WhatsApp', desc: 'Just send a message to your Karobaar bot — no new app needed.' },
  { Icon: Package, num: '02', title: 'Track Inventory', desc: 'Add, update, or check stock with simple text commands.' },
  { Icon: Receipt, num: '03', title: 'Generate Bills', desc: 'Create professional invoices and share them instantly.' },
  { Icon: BarChart3, num: '04', title: 'Get Business Insights', desc: 'Daily summaries, trends, and smart suggestions powered by AI.' },
]

const HowItWorks = memo(function HowItWorks() {
  return (
    <section style={{ background: '#f8fafc' }}>
      <div className="section">
        <AnimatedSection>
          <h2 className="section-title">How <span className="gradient-text">Karobaar</span> Works</h2>
          <p className="section-subtitle">Four simple steps to transform your retail business — all through WhatsApp.</p>
        </AnimatedSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 32, position: 'relative' }}>
          {steps.map((step, i) => {
            const IconComp = step.Icon
            return (
              <AnimatedSection key={i} delay={i * 0.12}>
                <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                  <div style={{ width: 72, height: 72, borderRadius: 20, background: 'linear-gradient(135deg, rgba(0,193,106,0.1), rgba(6,182,212,0.1))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', border: '2px solid rgba(0,193,106,0.15)' }}>
                    <IconComp size={32} style={{ color: '#00C16A' }} />
                  </div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00C16A', marginBottom: 8, letterSpacing: '0.1em' }}>STEP {step.num}</div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
})

export default HowItWorks
