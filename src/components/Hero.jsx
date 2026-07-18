import { lazy, Suspense, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import MagneticButton from './MagneticButton.jsx'
import Counter from './Counter.jsx'
import ErrorBoundary from './ErrorBoundary.jsx'
import Reveal from './Reveal.jsx'
import { stats as STATS } from '../data/content.js'

const Workspace3D = lazy(() => import('./Workspace3D.jsx'))

export default function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 500], [0, 80])

  const [statsRef, setStatsRef] = useState(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    if (!statsRef) return
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setInView(true),
      { threshold: 0.4 }
    )
    io.observe(statsRef)
    return () => io.disconnect()
  }, [statsRef])

  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-44 md:pb-32 overflow-hidden">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12">
        <motion.div style={{ y }} className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              Booking 3 projects for this month
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[86px]">
              Building <span className="text-gradient">Websites</span>
              <br />
              That <span className="italic font-medium">Grow</span> Businesses.
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              We design modern websites and web applications that help businesses generate more leads, increase credibility, and turn visitors into paying customers.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <MagneticButton href="#contact">
                Book Free Consultation
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>

              <MagneticButton href="#work" variant="ghost">
                View Portfolio
                <Play className="h-3.5 w-3.5" />
              </MagneticButton>
            </div>
          </Reveal>

          <div ref={setStatsRef} className="mt-14 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={0.4 + i * 0.08}>
                <StatItem value={s.value} suffix={s.suffix} label={s.label} inView={inView} />
              </Reveal>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-5">
          <Reveal delay={0.15}>
            <div className="relative h-[420px] w-full sm:h-[480px] lg:h-[560px]">
              {/* ambient glow behind the scene, ties it into the hero's gradient palette */}
              <div className="pointer-events-none absolute inset-0 -z-10">
                <div className="absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-grad-primary opacity-25 blur-[80px]" />
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="relative h-full w-full rounded-3xl glass overflow-hidden"
              >
                <ErrorBoundary
                  fallback={
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="h-40 w-40 animate-float rounded-full bg-grad-primary opacity-40 blur-2xl" />
                    </div>
                  }
                >
                  <Suspense
                    fallback={<div className="h-full w-full animate-pulse rounded-3xl glass" />}
                  >
                    <Workspace3D />
                  </Suspense>
                </ErrorBoundary>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function StatItem({ value, suffix, label, inView }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-gradient sm:text-4xl">
        {inView ? <Counter value={value} suffix={suffix} /> : `${0}${suffix}`}
      </div>
      <div className="mt-1 text-xs text-muted-foreground">{label}</div>
    </div>
  )
}