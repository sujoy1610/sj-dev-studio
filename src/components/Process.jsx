import Reveal from './Reveal.jsx'
import { process } from '../data/content.js'

export default function Process() {
  return (
    <section id="process" className="section-pad container-px bg-surface/30">
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">How We Work</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 max-w-2xl">
          A process built for <span className="text-gradient-purple">zero surprises.</span>
        </h2>
      </Reveal>

      <div className="mt-16 relative">
        <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-white/10" />
        <div className="grid lg:grid-cols-7 gap-8 lg:gap-4">
          {process.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.06}>
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-card border border-white/10 flex items-center justify-center font-display font-bold text-gold relative z-10">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-semibold mt-4">{p.step}</h3>
                <p className="text-sm text-muted mt-1.5 leading-relaxed">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
