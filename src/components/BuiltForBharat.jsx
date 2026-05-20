import { memo } from 'react'
import { motion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

const languages = [
  'Hindi', 'English', 'Tamil', 'Telugu', 'Kannada', 'Malayalam',
  'Bengali', 'Marathi', 'Gujarati', 'Punjabi', 'Odia', 'Assamese',
  'Urdu', 'Rajasthani', 'Bhojpuri', 'Maithili', 'Santali', 'Konkani',
  'Dogri', 'Manipuri', 'Bodo', 'Kashmiri',
]

const BuiltForBharat = memo(function BuiltForBharat() {
  return (
    <section style={{ background: '#f8fafc' }}>
      <div className="section" style={{ textAlign: 'center' }}>
        <AnimatedSection>
          <h2 className="section-title">Built for Every Store, Every <span className="gradient-text">Language</span></h2>
          <p className="section-subtitle">Karobaar speaks your language. Manage your entire business in the language you're most comfortable with.</p>
        </AnimatedSection>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 12, maxWidth: 800, margin: '0 auto' }}>
          {languages.map((lang, i) => (
            <motion.span
              key={lang}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03, duration: 0.3 }}
              whileHover={{ scale: 1.08, y: -3 }}
              style={{
                padding: '10px 22px',
                borderRadius: 999,
                background: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(0,193,106,0.15)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: '#374151',
                cursor: 'default',
                transition: 'all 0.25s ease',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              {lang}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
})

export default BuiltForBharat
