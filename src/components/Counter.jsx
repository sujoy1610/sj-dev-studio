import { useEffect, useRef } from 'react'
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'

export default function Counter({ value, suffix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { duration: duration * 1000, bounce: 0 })

  useEffect(() => {
    if (inView) motionVal.set(value)
  }, [inView, value, motionVal])

  const displayRef = useRef(null)

  useEffect(() => {
    const unsub = spring.on('change', (v) => {
      if (displayRef.current) displayRef.current.textContent = Math.round(v) + suffix
    })
    return unsub
  }, [spring, suffix])

  return (
    <motion.span ref={ref} className="font-display font-bold text-4xl md:text-5xl text-gradient">
      <span ref={displayRef}>0{suffix}</span>
    </motion.span>
  )
}
