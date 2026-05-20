import { memo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, MessageCircle, Send, CheckCircle } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

const Contact = memo(function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const res = await fetch(import.meta.env.VITE_FORMSPREE_URL || 'https://formspree.io/f/xwvzvarv', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSubmitted(true)
        setForm({ name: '', email: '', message: '' })
      }
    } catch {
      /* silently handle */
    }
    setLoading(false)
  }

  const inputStyle = (hasError) => ({
    width: '100%',
    padding: '16px 20px',
    borderRadius: 16,
    border: `1.5px solid ${hasError ? '#ef4444' : 'rgba(0,0,0,0.08)'}`,
    background: 'rgba(255,255,255,0.8)',
    fontSize: '1rem',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    transition: 'all 0.25s ease',
    color: '#111827',
  })

  return (
    <main style={{ paddingTop: 120 }}>
      <section className="section" style={{ textAlign: 'center', paddingBottom: 40 }}>
        <AnimatedSection>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', marginBottom: 16 }}>
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p style={{ color: '#6B7280', fontSize: '1.15rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Have a question or a partnership idea? We'd love to hear from you.
          </p>
        </AnimatedSection>
      </section>

      <section style={{ maxWidth: 600, margin: '0 auto', padding: '0 24px 80px' }}>
        <AnimatedSection>
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="glass-card" style={{ padding: 48, textAlign: 'center' }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}>
                  <CheckCircle size={56} style={{ color: '#00C16A', margin: '0 auto 20px' }} />
                </motion.div>
                <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: 12 }}>Message Sent!</h3>
                <p style={{ color: '#6B7280', lineHeight: 1.7 }}>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary" style={{ marginTop: 24 }}>Send Another</button>
              </motion.div>
            ) : (
              <motion.form key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} onSubmit={handleSubmit} className="glass-card" style={{ padding: 'clamp(28px, 4vw, 48px)' }}>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 8, color: '#374151' }}>Name</label>
                  <input
                    type="text" placeholder="Your name" value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    onFocus={(e) => { e.target.style.borderColor = '#00C16A'; e.target.style.boxShadow = '0 0 0 3px rgba(0,193,106,0.1)' }}
                    onBlur={(e) => { e.target.style.borderColor = errors.name ? '#ef4444' : 'rgba(0,0,0,0.08)'; e.target.style.boxShadow = 'none' }}
                    style={inputStyle(errors.name)}
                  />
                  {errors.name && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: 4, display: 'block' }}>{errors.name}</span>}
                </div>
                <div style={{ marginBottom: 20 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 8, color: '#374151' }}>Email</label>
                  <input
                    type="email" placeholder="you@example.com" value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    onFocus={(e) => { e.target.style.borderColor = '#00C16A'; e.target.style.boxShadow = '0 0 0 3px rgba(0,193,106,0.1)' }}
                    onBlur={(e) => { e.target.style.borderColor = errors.email ? '#ef4444' : 'rgba(0,0,0,0.08)'; e.target.style.boxShadow = 'none' }}
                    style={inputStyle(errors.email)}
                  />
                  {errors.email && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: 4, display: 'block' }}>{errors.email}</span>}
                </div>
                <div style={{ marginBottom: 28 }}>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: 8, color: '#374151' }}>Message</label>
                  <textarea
                    placeholder="Tell us what you're thinking..." rows={5} value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    onFocus={(e) => { e.target.style.borderColor = '#00C16A'; e.target.style.boxShadow = '0 0 0 3px rgba(0,193,106,0.1)' }}
                    onBlur={(e) => { e.target.style.borderColor = errors.message ? '#ef4444' : 'rgba(0,0,0,0.08)'; e.target.style.boxShadow = 'none' }}
                    style={{ ...inputStyle(errors.message), resize: 'vertical', minHeight: 120 }}
                  />
                  {errors.message && <span style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: 4, display: 'block' }}>{errors.message}</span>}
                </div>
                <button type="submit" className="btn-primary" disabled={loading} style={{ width: '100%', justifyContent: 'center', fontSize: '1.05rem', padding: '16px 32px', opacity: loading ? 0.7 : 1 }}>
                  {loading ? 'Sending...' : <><Send size={18} /> Send Message</>}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </AnimatedSection>

        {/* Contact Info */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
          <AnimatedSection delay={0.1}>
            <a href="mailto:support@ports.blog" style={{ textDecoration: 'none' }}>
              <motion.div whileHover={{ y: -4, scale: 1.02 }} className="glass-card" style={{ padding: 24, textAlign: 'center', cursor: 'pointer' }}>
                <Mail size={24} style={{ color: '#4F46E5', margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>Email Us</div>
                <div style={{ color: '#6B7280', fontSize: '0.8rem', marginTop: 4 }}>support@ports.blog</div>
              </motion.div>
            </a>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <a href="https://wa.me/918639624488" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <motion.div whileHover={{ y: -4, scale: 1.02 }} className="glass-card" style={{ padding: 24, textAlign: 'center', cursor: 'pointer' }}>
                <MessageCircle size={24} style={{ color: '#00C16A', margin: '0 auto 8px' }} />
                <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#111827' }}>WhatsApp</div>
                <div style={{ color: '#6B7280', fontSize: '0.8rem', marginTop: 4 }}>Chat with us</div>
              </motion.div>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
})

export default Contact
