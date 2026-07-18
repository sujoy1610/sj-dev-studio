import { useRef } from "react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import Reveal from "./Reveal.jsx";
import { services } from "../data/content.js";

function ServiceCard({ item, index }) {
  const ref = useRef(null);
  const Icon = Icons[item.icon] || Icons.Sparkles;

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `
perspective(1200px)
rotateX(${-py * 14}deg)
rotateY(${px * 14}deg)
translateY(-10px)
scale(1.03)
`
  };
  const reset = () => {
    if (ref.current)
      ref.current.style.transform =
'perspective(1200px) rotateX(0) rotateY(0) scale(1)'
  };

  return (
    <Reveal delay={(index % 4) * 0.08}>
      <div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        data-cursor-hover
        className="
group
relative
overflow-hidden
rounded-[28px]
border
border-white/10
bg-white/[0.03]
backdrop-blur-2xl
p-8
h-full
transition-all
duration-500
will-change-transform
hover:border-accent/50
hover:-translate-y-2
hover:shadow-[0_30px_80px_rgba(255,107,53,.25)]
"
      >
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-grad-primary/[0.06]" />
        <div className="relative z-10">
          <div
className="
relative
w-16
h-16
rounded-2xl
bg-gradient-to-br
from-accent
via-orange-400
to-highlight
flex
items-center
justify-center
shadow-[0_10px_35px_rgba(255,107,53,.45)]
group-hover:rotate-6
group-hover:scale-110
transition-all
duration-500
mb-6
"
>
            <Icon className="w-6 h-6 text-bg" strokeWidth={2.2} />
          </div>
          <h3
className="
font-display
text-2xl
font-bold
tracking-tight
mb-3
group-hover:text-accent
transition-colors
"
>
            {item.title}
          </h3>
          <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Services() {
  return (
    <section id="services" className="section-pad container-px">
      <Reveal>
        <span className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">
          What We Do
        </span>
        <h2 className="font-display text-4xl md:text-5xl font-bold mt-3 max-w-2xl">
          Services built to{" "}
          <span className="text-gradient-purple">move the needle.</span>
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
        {services.map((s, i) => (
          <ServiceCard key={s.title} item={s} index={i} />
        ))}
      </div>
    </section>
  );
}
