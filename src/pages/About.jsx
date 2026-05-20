import { memo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Package, Receipt, BarChart3, Brain, Globe, Users, Mail } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'

import kiranImg from '../assets/kiran.jpeg'
import abdullahImg from '../assets/abdullah.jpeg'
import mubashirImg from '../assets/mubashir.png'

const Linkedin = memo(function Linkedin({ size = 20 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
})

const capabilities = [
  { Icon: Package, title: 'Inventory Management', desc: 'Real-time stock tracking via WhatsApp. Add, update, and monitor inventory with simple text messages. Low stock alerts keep you prepared.' },
  { Icon: Receipt, title: 'Billing & Invoicing', desc: 'Generate professional GST-compliant invoices instantly. Share bills via WhatsApp with a single message. No printer needed.' },
  { Icon: BarChart3, title: 'Analytics Dashboard', desc: 'Daily, weekly, and monthly sales summaries delivered to your WhatsApp. Know your best-selling products and peak hours.' },
  { Icon: Brain, title: 'AI Assistant', desc: 'Smart business suggestions powered by AI. Get insights on pricing, demand patterns, and growth opportunities.' },
  { Icon: Globe, title: 'Multilingual Support', desc: 'Operate in 20+ Indian languages. The system understands Hindi, Tamil, Telugu, Bengali, and many more.' },
  { Icon: Users, title: 'Customer Database', desc: 'Automatically build customer profiles. Track purchase history, preferences, and send personalized updates.' },
]

const team = [
  {
    name: 'Korra Kiran',
    role: 'Co-Founder & CEO',
    bio: 'Passionate about leveraging machine learning and conversational AI to solve real-world problems and digitalize retail.',
    image: kiranImg,
    linkedin: 'https://www.linkedin.com/in/korra-kiran-482998286/',
    email: 'kiran@ports.blog',
  },
  {
    name: 'Abdullah Aarif Shaikh',
    role: 'Founder & CFO',
    bio: 'Curious coder and optimist focused on building optimized technological and financial systems for commerce.',
    image: abdullahImg,
    linkedin: 'https://www.linkedin.com/in/abdullah-aarif-shaikh-0b248b227/',
    email: 'abdullah@ports.blog',
  },
  {
    name: 'Md. Mubashir Ahmed',
    role: 'Head of Growth',
    bio: 'Experienced in AI/ML solutions and community outreach, focused on scaling tech platforms for local merchants.',
    image: mubashirImg,
    linkedin: 'https://www.linkedin.com/in/md-mubashir-ahmed-00511728b/',
    email: 'mubashir@ports.blog',
  },
]


const About = memo(function About() {
  return (
    <main style={{ paddingTop: 120 }}>
      {/* Hero */}
      <section className="section" style={{ textAlign: 'center', paddingBottom: 60 }}>
        <AnimatedSection>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', padding: '8px 20px', borderRadius: 999, background: 'rgba(79,70,229,0.08)', border: '1px solid rgba(79,70,229,0.15)', fontSize: '0.85rem', fontWeight: 600, color: '#4F46E5', marginBottom: 24 }}>
              About Karobaar
            </span>
          </motion.div>
          <h1 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: 20 }}>
            Built for Bharat's <span className="gradient-text">Retail Future</span>
          </h1>
          <p style={{ color: '#6B7280', fontSize: 'clamp(1rem, 2vw, 1.2rem)', maxWidth: 640, margin: '0 auto', lineHeight: 1.7 }}>
            Karobaar is a WhatsApp-first retail operating system designed to empower India's 12 million+ small retailers with modern technology — in their own language.
          </p>
        </AnimatedSection>
      </section>

      {/* Mission Box */}
      <section style={{ background: '#f8fafc', padding: '80px 24px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnimatedSection>
            <div className="glass-card" style={{ padding: 'clamp(32px, 5vw, 56px)', textAlign: 'center' }}>
              <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.6rem', fontWeight: 700, marginBottom: 16, letterSpacing: '-0.02em' }}>Our Mission</h2>
              <p style={{ color: '#6B7280', fontSize: '1.1rem', lineHeight: 1.8 }}>
                To make retail technology accessible, affordable, and native to every Indian shopkeeper — regardless of their language, location, or technical literacy. We believe the best software meets people where they already are: on WhatsApp.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <AnimatedSection>
          <h2 className="section-title">What Karobaar <span className="gradient-text">Can Do</span></h2>
          <p className="section-subtitle">A comprehensive suite of tools built into the platform you already use every day.</p>
        </AnimatedSection>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
          {capabilities.map((cap, i) => {
            const IconComp = cap.Icon
            return (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass-card" style={{ padding: '36px 32px', height: '100%' }}>
                  <div style={{ width: 52, height: 52, borderRadius: 16, background: 'linear-gradient(135deg, rgba(0,193,106,0.1), rgba(79,70,229,0.08))', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                    <IconComp size={26} style={{ color: '#00C16A' }} />
                  </div>
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.25rem', fontWeight: 700, marginBottom: 10, letterSpacing: '-0.02em' }}>{cap.title}</h3>
                  <p style={{ color: '#6B7280', fontSize: '0.93rem', lineHeight: 1.7 }}>{cap.desc}</p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: '#FFFFFF', borderTop: '1px solid rgba(0,0,0,0.04)', borderBottom: '1px solid rgba(0,0,0,0.04)', maxWidth: 'none', width: '100vw', marginLeft: '50%', transform: 'translateX(-50%)', padding: '100px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <AnimatedSection>
            <h2 className="section-title">Meet Our <span className="gradient-text">Team</span></h2>
            <p className="section-subtitle" style={{ marginBottom: 48 }}>The builders and dreamers behind the WhatsApp-first operating system for Bharat.</p>
          </AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32, maxWidth: 1000, margin: '0 auto' }}>
            {team.map((member, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="glass-card" style={{ padding: '40px 28px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                  <img
                    src={member.image}
                    alt={member.name}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: '50%',
                      objectFit: 'cover',
                      marginBottom: 24,
                      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                      border: '3px solid rgba(0, 193, 106, 0.15)',
                    }}
                  />
                  <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.3rem', fontWeight: 700, marginBottom: 4, letterSpacing: '-0.02em', color: '#111827' }}>
                    {member.name}
                  </h3>
                  <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#00C16A', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 16, display: 'inline-block' }}>
                    {member.role}
                  </span>
                  <p style={{ color: '#6B7280', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: 24, flexGrow: 1 }}>
                    {member.bio}
                  </p>
                  <div style={{ display: 'flex', gap: 16 }}>
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00C16A'} onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
                      <Linkedin size={20} />
                    </a>
                    <a href={`mailto:${member.email}`} style={{ color: '#94a3b8', transition: 'color 0.2s' }} onMouseEnter={e => e.currentTarget.style.color = '#00C16A'} onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}>
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,193,106,0.06) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div className="section" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <AnimatedSection>
            <h2 style={{ fontFamily: "'Outfit', sans-serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: 'white', letterSpacing: '-0.03em', marginBottom: 16 }}>
              Ready to Transform <span className="gradient-text">Retail</span>?
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', marginBottom: 40 }}>
              Join us in building the future of Indian commerce.
            </p>
            <Link to="/contact" className="btn-glow">
              Get in Touch <ArrowRight size={20} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </main>
  )
})

export default About
