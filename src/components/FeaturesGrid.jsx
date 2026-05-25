import { memo } from 'react'
import { PackageSearch, Zap, BookOpen, Users, LineChart, Globe2 } from 'lucide-react'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '../context/LanguageContext'

const FeaturesGrid = memo(function FeaturesGrid() {
  const { t } = useLanguage()

  const features = [
    { icon: PackageSearch, title: t('features.f1.title'), desc: t('features.f1.desc'), color: '#3B82F6' },
    { icon: Zap, title: t('features.f2.title'), desc: t('features.f2.desc'), color: '#EAB308' },
    { icon: BookOpen, title: t('features.f3.title'), desc: t('features.f3.desc'), color: '#10B981' },
    { icon: Users, title: t('features.f4.title'), desc: t('features.f4.desc'), color: '#F43F5E' },
    { icon: LineChart, title: t('features.f5.title'), desc: t('features.f5.desc'), color: '#8B5CF6' },
    { icon: Globe2, title: t('features.f6.title'), desc: t('features.f6.desc'), color: '#06B6D4' },
  ]

  return (
    <section className="section" style={{ background: '#F8FAFC' }}>
      <div style={{ textAlign: 'center', marginBottom: 60 }}>
        <AnimatedSection>
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">{t('features.subtitle')}</p>
        </AnimatedSection>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
        {features.map((feature, i) => {
          const IconComp = feature.icon
          return (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div 
                className="glass-card"
                style={{ 
                  padding: '32px', 
                  background: 'white',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease',
                  border: '1px solid rgba(0,0,0,0.05)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.02)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.06)'
                  e.currentTarget.style.borderColor = 'rgba(0,193,106,0.2)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.02)'
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.05)'
                }}
              >
                <div style={{ width: 50, height: 50, borderRadius: 14, background: `${feature.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20 }}>
                  <IconComp size={24} style={{ color: feature.color }} />
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 12, fontFamily: "'Outfit', sans-serif", color: '#111827' }}>{feature.title}</h3>
                <p style={{ color: '#64748B', lineHeight: 1.6, fontSize: '0.95rem', flex: 1 }}>{feature.desc}</p>
              </div>
            </AnimatedSection>
          )
        })}
      </div>
    </section>
  )
})

export default FeaturesGrid
