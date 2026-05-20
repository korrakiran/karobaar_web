import { memo } from 'react'
import { motion } from 'framer-motion'
import { MessageSquare } from 'lucide-react'

const WhatsAppMockup = memo(function WhatsAppMockup() {
  const messages = [
    { type: 'user', text: 'Add 50 packets of Maggi', time: '10:31 AM' },
    { type: 'bot', text: '✅ Added! Stock: 50 packets\n📦 Total inventory value: ₹500', time: '10:31 AM' },
    { type: 'user', text: 'Generate bill for Sharma ji', time: '10:32 AM' },
    { type: 'bot', text: '🧾 Bill #1042 generated!\nItems: 3 | Total: ₹1,245\n📱 Sent via WhatsApp', time: '10:32 AM' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateX: 5 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          width: '100%',
          maxWidth: 320,
          margin: '0 auto',
          borderRadius: 32,
          overflow: 'hidden',
          boxShadow: '0 30px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.05)',
          background: '#075E54',
        }}
      >
        {/* Header */}
        <div
          style={{
            background: '#075E54',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #00C16A, #06B6D4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <MessageSquare size={18} color="white" />
          </div>
          <div>
            <div style={{ color: 'white', fontSize: 14, fontWeight: 600 }}>
              Karobaar Bot
            </div>
            <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 11 }}>
              online
            </div>
          </div>
        </div>

        {/* Chat Area */}
        <div
          style={{
            background: '#ECE5DD',
            padding: '16px 12px',
            minHeight: 320,
            display: 'flex',
            flexDirection: 'column',
            gap: 8,
          }}
        >
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.3, duration: 0.4 }}
              style={{
                alignSelf: msg.type === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '82%',
              }}
            >
              <div
                style={{
                  background: msg.type === 'user' ? '#DCF8C6' : 'white',
                  padding: '8px 12px',
                  borderRadius: 12,
                  borderTopRightRadius: msg.type === 'user' ? 4 : 12,
                  borderTopLeftRadius: msg.type === 'bot' ? 4 : 12,
                  fontSize: 12.5,
                  lineHeight: 1.5,
                  color: '#1a1a1a',
                  whiteSpace: 'pre-line',
                  boxShadow: '0 1px 2px rgba(0,0,0,0.08)',
                }}
              >
                {msg.text}
                <div
                  style={{
                    fontSize: 10,
                    color: '#999',
                    textAlign: 'right',
                    marginTop: 4,
                  }}
                >
                  {msg.time}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
})

export default WhatsAppMockup
