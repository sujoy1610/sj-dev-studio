import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { faqs } from '../data/content.js'

function Item({ f, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/10 py-5">
      <button
        onClick={onToggle}
        data-cursor-hover
        className="w-full flex items-center justify-between text-left gap-4"
      >
        <span className="font-display text-lg font-medium">{f.q}</span>
        <motion.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <Plus className="w-5 h-5 text-accent shrink-0" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <p className="text-muted text-sm leading-relaxed pt-3 pr-8">{f.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="section-pad container-px">
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">FAQ</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 max-w-2xl">
          Questions, answered.
        </h2>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-12 max-w-2xl mx-auto">
          {faqs.map((f, i) => (
            <Item key={f.q} f={f} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
