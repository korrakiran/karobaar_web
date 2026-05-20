import { memo, useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Send, CheckCircle, Smartphone, Play, Square, Volume2 } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const demoCommands = [
  {
    id: 'add-stock',
    label: '➕ Add Inventory',
    command: 'Add 50 packet Maggi',
    response: `✅ Maggi added!
📦 Stock updated: 50 packets
💰 Est. value: ₹600

Need anything else?`,
  },
  {
    id: 'create-bill',
    label: '🧾 Create Invoice',
    command: 'Bill 5 bread and 2 butter to Sharma Ji',
    response: `🧾 Invoice generated for Sharma Ji!
━━━━━━━━━━━━━━━
🍞 5 Bread: ₹200
🧈 2 Butter: ₹160
━━━━━━━━━━━━━━━
💵 Total: ₹360

📱 Sent bill to Sharma Ji on WhatsApp!`,
  },
  {
    id: 'sales-summary',
    label: '📊 Sales Summary',
    command: 'sales summary today',
    response: `📊 Daily Sales Summary
━━━━━━━━━━━━━━━
📈 Total Sales: ₹14,250
🛒 Orders Fulfilled: 28
🏆 Top Product: Maggi (12 units)

💬 AI Insight: Sales are up 15% from last Wednesday. Demand for dairy is high today.`,
  },
  {
    id: 'voice-note',
    label: '🎙️ Send Voice Command',
    isVoice: true,
    command: '🎙️ [Voice Note - 0:04] "पचास पैकेट दूध ऐड करो"',
    response: `🗣️ Transcribed (Hinglish): "Add 50 packets of milk"

✅ Added! Stock: 50 packets Milk
💰 Total Milk stock: 85 packets`,
  },
]

const InteractiveDemo = memo(function InteractiveDemo() {
  const [messages, setMessages] = useState([
    { type: 'bot', text: '👋 Namaste! Welcome to Karobaar. Click any option on the left to see how I can manage your store.', time: '12:00 PM' }
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [activeCommand, setActiveCommand] = useState(null)
  const chatEndRef = useRef(null)

  // Scroll to bottom of chat only when a message is added or typing changes, but not on initial mount
  useEffect(() => {
    if (messages.length > 1 || isTyping) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping])

  const handleCommandClick = (cmd) => {
    if (isTyping) return // prevent double clicks during typing
    setActiveCommand(cmd.id)

    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

    // 1. Append User Command
    setMessages(prev => [...prev, { type: 'user', text: cmd.command, time: now, isVoice: cmd.isVoice }])
    
    // 2. Trigger Typing Indicator
    setIsTyping(true)

    // 3. Delay and Append Bot Response
    setTimeout(() => {
      setIsTyping(false)
      setMessages(prev => [...prev, { type: 'bot', text: cmd.response, time: now }])
    }, 1200)
  };

  const handleReset = () => {
    setMessages([
      { type: 'bot', text: '👋 Namaste! Welcome to Karobaar. Click any option on the left to see how I can manage your store.', time: '12:00 PM' }
    ])
    setActiveCommand(null)
    setIsTyping(false)
  }

  return (
    <section className="section" style={{ background: '#FFFFFF', borderRadius: 32, margin: '60px auto', border: '1px solid rgba(0,0,0,0.04)' }}>
      <AnimatedSection>
        <h2 className="section-title">Try <span className="gradient-text">Karobaar</span> Yourself</h2>
        <p className="section-subtitle">Experience how fast and simple it is to run your shop. Tap any command below to watch the bot respond instantly.</p>
      </AnimatedSection>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 40, alignItems: 'center', marginTop: 40 }}>
        {/* Left Side: Buttons & Controls */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.5rem', fontWeight: 700, marginBottom: 8, letterSpacing: '-0.02em', color: '#111827' }}>
            Choose a Command
          </h3>
          <p style={{ color: '#6B7280', fontSize: '0.95rem', marginBottom: 12 }}>
            Simulate actual inputs that Indian shopkeepers use every day to list stock, send bills, or get AI advice.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {demoCommands.map((cmd) => (
              <button
                key={cmd.id}
                onClick={() => handleCommandClick(cmd)}
                disabled={isTyping}
                style={{
                  textAlign: 'left',
                  padding: '16px 20px',
                  borderRadius: 16,
                  border: activeCommand === cmd.id ? '2px solid #00C16A' : '1.5px solid rgba(0,0,0,0.08)',
                  background: activeCommand === cmd.id ? 'rgba(0,193,106,0.04)' : 'rgba(250,250,250,0.8)',
                  cursor: isTyping ? 'not-allowed' : 'pointer',
                  transition: 'all 0.25s ease',
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  color: activeCommand === cmd.id ? '#00C16A' : '#374151',
                  boxShadow: activeCommand === cmd.id ? '0 4px 12px rgba(0,193,106,0.08)' : 'none',
                }}
                onMouseEnter={(e) => {
                  if (!isTyping && activeCommand !== cmd.id) {
                    e.currentTarget.style.borderColor = '#00C16A'
                    e.currentTarget.style.background = 'white'
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeCommand !== cmd.id) {
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)'
                    e.currentTarget.style.background = 'rgba(250,250,250,0.8)'
                  }
                }}
              >
                {cmd.label}
              </button>
            ))}
          </div>

          <button
            onClick={handleReset}
            style={{
              marginTop: 24,
              padding: '12px 20px',
              borderRadius: 12,
              background: 'transparent',
              border: '1.5px dashed rgba(107, 114, 128, 0.3)',
              color: '#6B7280',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
              alignSelf: 'flex-start',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#ef4444'; e.currentTarget.style.color = '#ef4444' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(107, 114, 128, 0.3)'; e.currentTarget.style.color = '#6B7280' }}
          >
            Clear Conversation
          </button>
        </div>

        {/* Right Side: Simulated Phone */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              width: '100%',
              maxWidth: 320,
              aspectRatio: '9/18',
              borderRadius: 36,
              border: '10px solid #1e293b',
              background: '#075E54',
              overflow: 'hidden',
              boxShadow: '0 25px 60px rgba(0,0,0,0.15), 0 0 0 1px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
            }}
          >
            {/* Phone Notch/Speaker */}
            <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: 100, height: 18, background: '#1e293b', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, zIndex: 10 }} />

            {/* Chat App Header */}
            <div
              style={{
                background: '#075E54',
                padding: '24px 16px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                borderBottom: '1px solid rgba(255,255,255,0.08)',
              }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00C16A, #06B6D4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MessageSquare size={16} color="white" />
              </div>
              <div>
                <div style={{ color: 'white', fontSize: 13, fontWeight: 600, fontFamily: "'Inter', sans-serif" }}>
                  Karobaar Bot
                </div>
                <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 10, fontFamily: "'Inter', sans-serif" }}>
                  {isTyping ? 'typing...' : 'online'}
                </div>
              </div>
            </div>

            {/* Chat Messages Panel */}
            <div
              style={{
                flexGrow: 1,
                background: '#ECE5DD',
                padding: '16px 12px',
                overflowY: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                backgroundImage: 'url("https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png")',
                backgroundSize: 'cover',
                backgroundBlendMode: 'overlay',
              }}
            >
              <AnimatePresence>
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 12, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ type: 'spring', stiffness: 220, damping: 20 }}
                    style={{
                      alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                      maxWidth: '82%',
                    }}
                  >
                    <div
                      style={{
                        background: msg.type === 'user' ? '#DCF8C6' : 'white',
                        padding: '10px 14px',
                        borderRadius: 14,
                        borderTopRightRadius: msg.type === 'user' ? 4 : 14,
                        borderTopLeftRadius: msg.type === 'bot' ? 4 : 14,
                        fontSize: '0.85rem',
                        lineHeight: 1.5,
                        color: '#1a1a1a',
                        whiteSpace: 'pre-line',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {msg.isVoice ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, width: 180 }}>
                          <Volume2 size={18} style={{ color: '#075E54' }} />
                          <div style={{ flexGrow: 1, height: 4, background: '#a0d4a4', borderRadius: 2, position: 'relative' }}>
                            <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '60%', background: '#075E54', borderRadius: 2 }} />
                          </div>
                          <span style={{ fontSize: '0.75rem', color: '#555' }}>0:04</span>
                        </div>
                      ) : (
                        msg.text
                      )}
                      
                      <div
                        style={{
                          fontSize: '0.65rem',
                          color: '#8c8c8c',
                          textAlign: 'right',
                          marginTop: 4,
                        }}
                      >
                        {msg.time}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{
                      alignSelf: 'flex-start',
                      background: 'white',
                      padding: '10px 16px',
                      borderRadius: 14,
                      borderTopLeftRadius: 4,
                      boxShadow: '0 1px 2px rgba(0,0,0,0.06)',
                    }}
                  >
                    <div style={{ display: 'flex', gap: 4, alignItems: 'center', height: 16 }}>
                      <span className="dot" style={{ width: 6, height: 6, background: '#8c8c8c', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both' }} />
                      <span className="dot" style={{ width: 6, height: 6, background: '#8c8c8c', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both 0.2s' }} />
                      <span className="dot" style={{ width: 6, height: 6, background: '#8c8c8c', borderRadius: '50%', animation: 'bounce 1.4s infinite ease-in-out both 0.4s' }} />
                    </div>
                    <style>{`
                      @keyframes bounce {
                        0%, 80%, 100% { transform: scale(0); }
                        40% { transform: scale(1.0); }
                      }
                    `}</style>
                  </motion.div>
                )}
              </AnimatePresence>
              <div ref={chatEndRef} />
            </div>

            {/* Input Bar Footer */}
            <div
              style={{
                background: '#F0F0F0',
                padding: '10px 12px',
                display: 'flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              <div
                style={{
                  flexGrow: 1,
                  background: 'white',
                  borderRadius: 20,
                  padding: '8px 16px',
                  fontSize: '0.85rem',
                  color: '#9ca3af',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Type a message...
              </div>
              <div
                style={{
                  width: 34,
                  height: 34,
                  borderRadius: '50%',
                  background: '#075E54',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Send size={14} color="white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default InteractiveDemo
