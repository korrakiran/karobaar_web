import { memo } from 'react'

const Logo = memo(function Logo({ size = 40, className = '' }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#00C16A" />
            <stop offset="100%" stopColor="#06B6D4" />
          </linearGradient>
        </defs>
        <rect width="40" height="40" rx="10" fill="url(#logoGrad)" />
        <path
          d="M12 12v16 M26 12L12 20L26 28"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
      <span
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 800,
          fontSize: size * 0.55,
          letterSpacing: '-0.03em',
          color: 'inherit',
        }}
      >
        Karobaar
      </span>
    </div>
  )
})

export default Logo
