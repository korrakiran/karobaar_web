import { memo } from 'react'
import { Package, Receipt, BarChart3, Globe, Users, Brain } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const features = [
  { Icon: Package, title: 'Inventory Management', desc: 'Track stock in real-time via WhatsApp.', large: true },
  { Icon: Receipt, title: 'Smart Billing', desc: 'Generate professional invoices instantly.', large: false },
  { Icon: BarChart3, title: 'Sales Analytics', desc: 'Daily insights, trends, and forecasts.', large: false },
  { Icon: Globe, title: 'Multilingual Support', desc: '20+ Indian languages supported natively.', large: false },
  { Icon: Users, title: 'Customer Tracking', desc: 'Build customer profiles automatically.', large: false },
  { Icon: Brain, title: 'AI Insights', desc: 'Smart suggestions to grow your business.', large: true },
]

const FeaturesGrid = memo(function FeaturesGrid() {
  return (
    <section className="section">
      <AnimatedSection>
        <h2 className="section-title">Everything Your Store <span className="gradient-text">Needs</span></h2>
        <p className="section-subtitle">A complete retail operating system that works entirely through WhatsApp.</p>
      </AnimatedSection>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 20 }}>
        {features.map((f, i) => {
          const IconComp = f.Icon
          return (
            <AnimatedSection key={i} delay={i * 0.08}>
              <div className="glass-card" style={{ padding: f.large ? '48px 36px' : '36px 28px', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div style={{ width: 52, height: 52, borderRadius: 16, background: 'linear-gradient(135deg, rgba(0,193,106,0.1), rgba(79,70,229,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <IconComp size={26} style={{ color: '#00C16A' }} />
                </div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: f.large ? '1.4rem' : '1.15rem', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.02em' }}>{f.title}</h3>
                <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
})

export default FeaturesGrid
