import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import MagneticButton from './MagneticButton.jsx'

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#portfolio' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' }
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-6'
      }`}
    >
      <div className="container-px flex items-center justify-between">
        <a href="#top" data-cursor-hover className="font-display text-xl font-bold tracking-tight">
          SJ <span className="text-gradient">Dev</span> Studio
        </a>

        <nav className={`hidden md:flex items-center gap-8 px-6 py-3 rounded-full transition-all duration-500 ${scrolled ? 'glass' : ''}`}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-cursor-hover
              className="text-sm text-muted hover:text-ink transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <MagneticButton
          as="a"
          href="#contact"
          data-cursor-hover
          className="hidden md:inline-flex items-center rounded-full bg-grad-primary text-bg text-sm font-semibold px-5 py-2.5"
        >
          Book a Call
        </MagneticButton>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-ink"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden glass mx-4 mt-3 rounded-2xl overflow-hidden"
        >
          <div className="flex flex-col p-5 gap-4">
            {links.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-muted">
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="rounded-full bg-grad-primary text-bg text-sm font-semibold px-5 py-2.5 text-center">
              Book a Call
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
