import { MessageCircle, Mail, Linkedin, Instagram, ArrowRight } from 'lucide-react'
import Reveal from './Reveal.jsx'
import MagneticButton from './MagneticButton.jsx'

const contacts = [
  { label: 'WhatsApp', icon: MessageCircle, href: 'https://wa.me/910000000000' },
  { label: 'Email', icon: Mail, href: 'mailto:hello@sjdevstudio.com' },
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'Instagram', icon: Instagram, href: 'https://instagram.com' }
]

export default function CTA() {
  return (
    <section id="contact" className="section-pad container-px relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-highlight/20 blur-[140px]" />
      <Reveal className="relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
          Let&rsquo;s Build Something
          <br />
          <span className="text-gradient">Amazing Together.</span>
        </h2>
        <p className="text-muted mt-6 max-w-xl mx-auto">
          Tell us about your business and we&rsquo;ll show you exactly how a new
          website can bring in more customers.
        </p>

        <MagneticButton
          as="a"
          href="https://wa.me/910000000000"
          target="_blank"
          rel="noopener noreferrer"
          data-cursor-hover
          className="mt-9 inline-flex items-center gap-2 rounded-full bg-grad-primary text-bg font-semibold px-8 py-4 text-lg shadow-[0_0_50px_rgba(255,107,53,0.4)]"
        >
          Book Free Consultation
          <ArrowRight className="w-5 h-5" />
        </MagneticButton>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-12">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-2.5 text-sm hover:border-accent/40 transition-colors"
            >
              <c.icon className="w-4 h-4" />
              {c.label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
