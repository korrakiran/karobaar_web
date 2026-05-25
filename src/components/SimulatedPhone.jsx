import { useState, useEffect, useRef, memo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, Send, Volume2 } from 'lucide-react'

const SimulatedPhone = memo(function SimulatedPhone({ messages, isTyping }) {
  const chatBodyRef = useRef(null)
  const isMounted = useRef(false)
  const [statusBarTime, setStatusBarTime] = useState('')
  const [statusBarDate, setStatusBarDate] = useState('')

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date()
      setStatusBarTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false }))
      setStatusBarDate(now.toLocaleDateString([], { day: 'numeric', month: 'short' }))
    }
    updateDateTime()
    const timer = setInterval(updateDateTime, 30000)
    return () => clearInterval(timer)
  }, [])

  // Scroll to bottom of chat panel container only when messages or typing states update
  useEffect(() => {
    if (isMounted.current && chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth'
      })
    } else {
      isMounted.current = true
    }
  }, [messages, isTyping])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
      {/* Soft backdrop glow behind phone */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', background: 'rgba(0,193,106,0.3)', filter: 'blur(80px)', zIndex: 0, pointerEvents: 'none' }} />
      
      <div
        style={{
          width: '100%',
          maxWidth: 340,
          aspectRatio: '9/19',
          borderRadius: 44,
          border: '12px solid #000000',
          background: '#075E54',
          overflow: 'hidden',
          boxShadow: '0 25px 50px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.1), inset 0 0 0 2px rgba(255,255,255,0.1)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* iPhone Dynamic Display Status Bar */}
        <div
          style={{
            height: 38,
            background: '#075E54',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '12px 20px 0 20px',
            position: 'relative',
            zIndex: 10,
            color: 'white',
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '-0.02em',
            userSelect: 'none',
          }}
        >
          {/* Time */}
          <div style={{ width: 60, textAlign: 'left' }}>{statusBarTime}</div>

          {/* Dynamic Island */}
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 8,
              transform: 'translateX(-50%)',
              width: 80,
              height: 22,
              background: '#000000',
              borderRadius: 999,
              boxShadow: 'inset 0 0 1px rgba(255,255,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#111827', marginLeft: -40, opacity: 0.4 }} />
            <div style={{ width: 3, height: 3, borderRadius: '50%', background: '#1e3a8a', marginLeft: 4, opacity: 0.3 }} />
          </div>

          {/* Date */}
          <div style={{ width: 60, textAlign: 'right', fontSize: '11px', whiteSpace: 'nowrap' }}>{statusBarDate}</div>
        </div>

        {/* Chat App Header */}
        <div
          style={{
            background: '#075E54',
            padding: '10px 16px 12px',
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
          ref={chatBodyRef}
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
  )
})

export default SimulatedPhone
