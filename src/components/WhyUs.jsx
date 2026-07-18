import * as Icons from 'lucide-react'
import Reveal from './Reveal.jsx'
import { whyUs } from '../data/content.js'

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden section-pad container-px">

  {/* Background Glow */}
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-0 top-40 w-[500px] h-[500px] rounded-full bg-highlight/10 blur-[160px]" />
    <div className="absolute right-0 bottom-20 w-[450px] h-[450px] rounded-full bg-accent/10 blur-[160px]" />
  </div>
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">Why Choose Us</span>
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
          Every reason your competitors will wish they picked us.
        </h2>
      </Reveal>

     <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
        {whyUs.map((w, i) => {
          const Icon = Icons[w.icon] || Icons.Star
          return (
            <Reveal key={w.title} delay={(i % 4) * 0.07}>
              <div className="
group
relative
overflow-hidden
rounded-[30px]
border
border-white/10
bg-white/[0.03]
backdrop-blur-xl
p-8
h-full
transition-all
duration-500
hover:-translate-y-2
hover:border-accent/40
hover:shadow-[0_25px_80px_rgba(255,107,53,.25)]
">
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

<div
className="
absolute
inset-0
opacity-0
group-hover:opacity-100
transition
duration-500
bg-gradient-to-br
from-accent/10
via-highlight/10
to-transparent
"
/>
<div
className="
absolute
top-6
right-6
text-6xl
font-black
text-white/5
pointer-events-none
"
>
0{i+1}
</div>
               <div
className="
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-accent
to-highlight
flex
items-center
justify-center
shadow-[0_10px_35px_rgba(255,107,53,.4)]
group-hover:rotate-6
group-hover:scale-110
transition-all
duration-500
mb-8
"
>
<Icon
className="w-8 h-8 text-white"
strokeWidth={2.3}
/>
</div>
                <h3 className="
font-display
text-2xl
font-bold
tracking-tight
mb-3
group-hover:text-accent
transition-colors
">{w.title}</h3>
                <p className="
text-base
text-muted
leading-8
">{w.desc}</p>
<div
className="
mt-8
flex
items-center
gap-2
font-semibold
text-accent
group-hover:gap-4
transition-all
"
>
Learn More

<Icons.ArrowRight className="w-5 h-5"/>
</div>
              </div>
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
