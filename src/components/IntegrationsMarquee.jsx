import { memo } from 'react'
import { motion } from 'framer-motion'

const integrations = [
  { name: 'UPI', color: '#000000' },
  { name: 'Paytm', color: '#002970' },
  { name: 'PhonePe', color: '#5f259f' },
  { name: 'Razorpay', color: '#02042b' },
  { name: 'WhatsApp', color: '#25D366' },
  { name: 'Tally', color: '#1B1C56' },
  { name: 'Google Pay', color: '#000000' },
  { name: 'SBI', color: '#2C2793' },
]

// Duplicate the array so we can seamlessly loop
const loopedIntegrations = [...integrations, ...integrations]

const IntegrationsMarquee = memo(function IntegrationsMarquee() {
  return (
    <section className="py-12 bg-white overflow-hidden border-b border-gray-100">
      {/* Marquee Container */}
      <div className="relative w-full flex items-center">
        {/* Left/Right Fade Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Animated Track */}
        <motion.div
          className="flex gap-16 items-center w-max"
          animate={{ x: [0, -1035] }} // Adjust width based on content if needed
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
        >
          {loopedIntegrations.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              style={{ minWidth: 120 }}
            >
              <span style={{ fontSize: '1.5rem', fontWeight: 800, color: item.color, fontFamily: "'Outfit', sans-serif" }}>
                {item.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
})

export default IntegrationsMarquee
