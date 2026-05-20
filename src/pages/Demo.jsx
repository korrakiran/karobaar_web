import { memo } from 'react'
import InteractiveDemo from '../components/InteractiveDemo'

const Demo = memo(function Demo() {
  return (
    <main style={{ paddingTop: 120, minHeight: '80vh', background: 'radial-gradient(circle at top right, rgba(0,193,106,0.03) 0%, transparent 60%)' }}>
      <InteractiveDemo />
    </main>
  )
})

export default Demo
