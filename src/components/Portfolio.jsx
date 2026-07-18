import { motion } from 'framer-motion'
import { ExternalLink, Github, FileText } from 'lucide-react'
import Reveal from './Reveal.jsx'
import { projects } from '../data/content.js'

export default function Portfolio() {
  return (
   <section
  id="portfolio"
  className="relative overflow-hidden section-pad container-px">
  <div className="absolute inset-0 -z-10">
    <div className="absolute left-0 top-40 w-[500px] h-[500px] rounded-full bg-highlight/10 blur-[160px]" />
    <div className="absolute right-0 bottom-0 w-[450px] h-[450px] rounded-full bg-accent/10 blur-[160px]" />
  </div>
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">Selected Work</span>
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
          Real projects. <span className="text-gradient">Real results.</span>
        </h2>
      </Reveal>

      <div className="mt-14 flex flex-col gap-8">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.05}>
            <div
className="
group
grid
xl:grid-cols-2
overflow-hidden
rounded-[36px]
border
border-white/10
bg-white/[0.03]
backdrop-blur-xl
transition-all
duration-500
hover:border-accent/40
hover:shadow-[0_30px_100px_rgba(255,107,53,.25)]
"
>
              <div className="
relative
min-h-[420px]
bg-gradient-to-br
from-card
to-surface
overflow-hidden
flex
items-center
justify-center
p-10
">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                 className="
w-full
aspect-video
rounded-3xl
border
border-white/10
bg-white/[0.04]
backdrop-blur-xl
shadow-[0_20px_80px_rgba(0,0,0,.35)]
group-hover:scale-105
transition-all
duration-700
"
                >
                  <div
className="
absolute
bottom-6
right-6
text-8xl
font-black
text-white/5
"
>
0{i+1}
</div>
                  <span className="font-display text-2xl text-muted/50">{p.name}</span>
                </motion.div>
                <span className="absolute top-5 left-5 text-[10px] tracking-[0.2em] uppercase rounded-full
bg-black/40
backdrop-blur-xl
border
border-white/10
px-4
py-2 px-3 py-1 text-muted">
                  {p.category}
                </span>
              </div>

              <div className="
flex
flex-col
justify-center
p-10
lg:p-14
">
                <h3 className="
font-display
text-4xl
font-black
tracking-tight
">{p.name}</h3>
                <div className="flex flex-wrap gap-2 mt-3 mb-6">
                  {p.tags.map((t) => (
                    <span key={t} className="
rounded-full
bg-white/5
border
border-white/10
px-4
py-2
text-sm
font-medium
hover:border-accent
transition
">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="
grid
md:grid-cols-3
gap-8
mt-10
">
                  <div
className="
rounded-2xl
border
border-white/10
bg-white/[0.03]
p-5
"
>
                    <p className="text-accent font-semibold mb-1">Problem</p>
                    <p className="text-muted leading-relaxed">{p.problem}</p>
                  </div>
                  <div
className="
rounded-2xl
border
border-white/10
bg-white/[0.03]
p-5
"
>
                    <p className="text-gold font-semibold mb-1">Solution</p>
                    <p className="text-muted leading-relaxed">{p.solution}</p>
                  </div>
                  <div
className="
rounded-2xl
border
border-white/10
bg-white/[0.03]
p-5
"
>
                    <p className="text-success font-semibold mb-1">Result</p>
                    <p className="text-muted leading-relaxed">{p.result}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mt-7">
                  <a data-cursor-hover href="#" className="
inline-flex
items-center
gap-2
rounded-full
bg-gradient-to-r
from-accent
to-highlight
px-6
py-3
font-semibold
text-bg
shadow-[0_10px_35px_rgba(255,107,53,.35)]
hover:scale-105
transition
">
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                  <a data-cursor-hover href="#" className="
inline-flex
items-center
gap-2
rounded-full
border
border-white/10
bg-white/5
px-6
py-3
hover:border-accent
transition
">
                    <Github className="w-3.5 h-3.5" /> GitHub
                  </a>
                  <a data-cursor-hover href="#" className="
inline-flex
items-center
gap-2
rounded-full
border
border-white/10
bg-white/5
px-6
py-3
hover:border-accent
transition
">
                    <FileText className="w-3.5 h-3.5" /> Case Study
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
