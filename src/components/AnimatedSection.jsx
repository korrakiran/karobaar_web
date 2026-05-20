import { memo } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AnimatedSection = memo(function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  threshold = 0.15,
}) {
  const [ref, inView] = useInView({ triggerOnce: once, threshold })

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  }

  const offset = directionMap[direction] || directionMap.up

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset, filter: 'blur(8px)' }}
      animate={inView ? { opacity: 1, y: 0, x: 0, filter: 'blur(0px)' } : {}}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </motion.div>
  )
})

export default AnimatedSection
