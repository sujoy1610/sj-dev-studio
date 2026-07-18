import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { testimonials } from '../data/content.js'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  useEffect(() => {
    const id = setInterval(() => {
      setDirection(1)
      setIndex((i) => (i + 1) % testimonials.length)
    }, 5500)
    return () => clearInterval(id)
  }, [])

  const go = (dir) => {
    setDirection(dir)
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length)
  }

  const t = testimonials[index]

  return (
    <section className="section-pad container-px">
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">Client Voices</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 max-w-2xl">
          Businesses that grew with us.
        </h2>
      </Reveal>

      <div className="mt-14 max-w-3xl mx-auto relative">
        <Quote className="w-10 h-10 text-accent/40 mb-6 mx-auto" />
        <div className="relative h-56 sm:h-40 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -direction * 40 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 text-center"
            >
              <p className="text-xl md:text-2xl font-display leading-snug">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-5 text-sm text-gold font-semibold">{t.name}</p>
              <p className="text-xs text-muted">{t.role}</p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={() => go(-1)} data-cursor-hover className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i) }}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === index ? 'w-6 bg-accent' : 'w-1.5 bg-white/20'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={() => go(1)} data-cursor-hover className="w-10 h-10 rounded-full glass flex items-center justify-center">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
