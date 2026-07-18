import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function Cursor() {
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)
  const springX = useSpring(x, { stiffness: 500, damping: 40 })
  const springY = useSpring(y, { stiffness: 500, damping: 40 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    const over = (e) => {
      const target = e.target
      setHovering(!!target.closest('a, button, [data-cursor-hover]'))
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
    }
  }, [x, y])

  return (
    <motion.div
      className="custom-cursor fixed top-0 left-0 z-[9999] pointer-events-none mix-blend-screen"
      style={{ x: springX, y: springY, translateX: '-50%', translateY: '-50%' }}
    >
      <motion.div
        animate={{
          width: hovering ? 64 : 20,
          height: hovering ? 64 : 20,
          opacity: hovering ? 0.9 : 0.7
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 22 }}
        className="rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,107,53,0.9) 0%, rgba(124,58,237,0.5) 60%, transparent 100%)'
        }}
      />
    </motion.div>
  )
}
