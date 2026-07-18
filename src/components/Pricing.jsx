import { Check } from 'lucide-react'
import Reveal from './Reveal.jsx'
import MagneticButton from './MagneticButton.jsx'
import { pricing } from '../data/content.js'

export default function Pricing() {
  return (
    <section
  id="pricing"
  className="relative overflow-hidden section-pad container-px"
>
  {/* Background */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-0 top-40 w-[500px] h-[500px] rounded-full bg-highlight/10 blur-[170px]" />
    <div className="absolute right-0 bottom-20 w-[450px] h-[450px] rounded-full bg-accent/10 blur-[170px]" />
  </div>
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">Pricing</span>
        <h2
className="
font-display
text-5xl
lg:text-7xl
font-black
leading-[1]
tracking-tight
max-w-4xl
mt-5
"
>
          Straightforward pricing, <span className="text-gradient">no surprises.</span>
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20 items-stretch">
        {pricing.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div
              className={`group relative overflow-hidden rounded-[32px] border p-10 h-full flex flex-col transition-all duration-500 ${
                p.highlighted
                  ? `
border-accent/50
bg-gradient-to-br
from-accent/20
via-highlight/10
to-card
backdrop-blur-2xl
shadow-[0_25px_90px_rgba(255,107,53,.30)]
hover:-translate-y-2
`
                  : `
border-white/10
bg-white/[0.03]
backdrop-blur-xl
hover:border-accent/40
hover:-translate-y-2
hover:shadow-[0_20px_70px_rgba(255,107,53,.18)]
`
              }`}
            >
              <div
className="
absolute
-top-24
-right-24
w-72
h-72
rounded-full
bg-accent/10
blur-[120px]
opacity-0
group-hover:opacity-100
transition-all
duration-700
"
/>
              {p.highlighted && (
                <span className="
absolute
top-6
right-6
rounded-full
bg-black/40
backdrop-blur-xl
border
border-accent/40
px-4
py-2
text-xs
uppercase
tracking-[0.25em]
text-accent
">
                  Most Popular
                </span>
              )}
              <h3 className="
font-display
text-3xl
font-black
tracking-tight
">{p.name}</h3>
              <p className={`text-base leading-7 mt-1 ${p.highlighted ? 'text-bg/70' : 'text-muted'}`}>{p.desc}</p>
              <p className="font-display text-3xl font-bold mt-6">{p.price}</p>

              <ul className="mt-7 flex flex-col gap-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.highlighted ? 'text-bg' : 'text-success'}`} />
                    <span className={p.highlighted ? 'text-bg/90' : 'text-muted'}>{f}</span>
                  </li>
                ))}
              </ul>

              <MagneticButton
                as="a"
                href="#contact"
                data-cursor-hover
                className={`mt-8 inline-flex items-center justify-center rounded-full font-semibold px-6 py-3 ${
                  p.highlighted ? 'bg-bg text-ink' : 'bg-grad-primary text-bg'
                }`}
              >
                Get Started
              </MagneticButton>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
