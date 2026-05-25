import { memo } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'
import { useLanguage } from '../context/LanguageContext'

const languages = [
  'Hindi', 'English', 'Tamil', 'Telugu', 'Kannada', 'Malayalam',
  'Bengali', 'Marathi', 'Gujarati', 'Punjabi', 'Odia', 'Assamese',
  'Urdu', 'Rajasthani', 'Bhojpuri', 'Maithili', 'Santali', 'Konkani',
  'Dogri', 'Manipuri', 'Bodo', 'Kashmiri',
]

// Duplicate the array so we can loop seamlessly
const marqueeItems = [...languages, ...languages]

const BuiltForBharat = memo(function BuiltForBharat() {
  const { t } = useLanguage()

  return (
    <section style={{ background: '#f8fafc', overflow: 'hidden' }}>
      <div className="section" style={{ textAlign: 'center', paddingBottom: 60 }}>
        <AnimatedSection>
          <h2 className="section-title">{t('builtFor.title')}<span className="gradient-text">{t('builtFor.highlight')}</span></h2>
          <p className="section-subtitle">{t('builtFor.subtitle')}</p>
        </AnimatedSection>
      </div>

      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', paddingBottom: 80 }}>
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            ease: 'linear',
            duration: 35,
          }}
          style={{
            display: 'flex',
            width: 'max-content',
            gap: 32, // Increased gap to increase the width and spread of the items
            padding: '0 32px', // Added horizontal padding for further width spread
          }}
        >
          {marqueeItems.map((lang, i) => (
            <div
              key={`${lang}-${i}`}
              style={{
                padding: '12px 28px',
                borderRadius: 999,
                background: 'rgba(255,255,255,1)',
                border: '1px solid rgba(0,193,106,0.2)',
                fontSize: '1rem',
                fontWeight: 600,
                color: '#111827',
                whiteSpace: 'nowrap',
                boxShadow: '0 4px 12px rgba(0,193,106,0.05)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 0px 32px 12px rgba(0,193,106,0.25)'
                e.currentTarget.style.borderColor = '#00C16A'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'none'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,193,106,0.05)'
                e.currentTarget.style.borderColor = 'rgba(0,193,106,0.2)'
              }}
            >
              {lang}
            </div>
          ))}
        </motion.div>
        
        {/* Fading edges for the marquee */}
        <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, width: 100, background: 'linear-gradient(to right, #f8fafc, transparent)', zIndex: 2, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: 0, bottom: 0, right: 0, width: 100, background: 'linear-gradient(to left, #f8fafc, transparent)', zIndex: 2, pointerEvents: 'none' }} />
      </div>
    </section>
  )
})

export default BuiltForBharat
