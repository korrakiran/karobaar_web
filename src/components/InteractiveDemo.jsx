import { memo, useState } from 'react'
import AnimatedSection from './AnimatedSection'
import SimulatedPhone from './SimulatedPhone'

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
    <section style={{ background: 'linear-gradient(to bottom, #FFFFFF, #F0FDF4 50%, #FFFFFF)', padding: '120px 0', position: 'relative' }}>
      <div className="section" style={{ paddingTop: 0, paddingBottom: 0 }}>
        <AnimatedSection>
          <h2 className="section-title">Try <span className="gradient-text">Karobaar</span> Yourself</h2>
          <p className="section-subtitle">Experience how fast and simple it is to run your shop. Tap any command below to watch the bot respond instantly.</p>
        </AnimatedSection>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 60, alignItems: 'center', marginTop: 40 }}>
          {/* Left Side: Buttons & Controls */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <h3 style={{ fontFamily: "'Outfit', sans-serif", fontSize: '1.75rem', fontWeight: 800, marginBottom: 8, letterSpacing: '-0.02em', color: '#111827' }}>
              Choose a Command
            </h3>
            <p style={{ color: '#6B7280', fontSize: '1.05rem', marginBottom: 12, lineHeight: 1.6 }}>
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
                    padding: '18px 24px',
                    borderRadius: 20,
                    border: activeCommand === cmd.id ? '2px solid #00C16A' : '1px solid rgba(0,0,0,0.06)',
                    background: activeCommand === cmd.id ? '#FFFFFF' : 'rgba(255,255,255,0.6)',
                    cursor: isTyping ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: activeCommand === cmd.id ? '#00C16A' : '#374151',
                    boxShadow: activeCommand === cmd.id ? '0 12px 24px rgba(0,193,106,0.15)' : '0 2px 4px rgba(0,0,0,0.02)',
                    backdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isTyping && activeCommand !== cmd.id) {
                      e.currentTarget.style.borderColor = 'rgba(0,193,106,0.4)'
                      e.currentTarget.style.background = '#FFFFFF'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,193,106,0.08)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeCommand !== cmd.id) {
                      e.currentTarget.style.borderColor = 'rgba(0,0,0,0.06)'
                      e.currentTarget.style.background = 'rgba(255,255,255,0.6)'
                      e.currentTarget.style.transform = 'none'
                      e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.02)'
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
          <SimulatedPhone messages={messages} isTyping={isTyping} />
        </div>
      </div>
    </section>
  )
})

export default InteractiveDemo
