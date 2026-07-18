import { useEffect, useState } from 'react'
import Lenis from 'lenis'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Cursor from './components/Cursor.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import Services from './components/Services.jsx'
import Portfolio from './components/Portfolio.jsx'
import WhyUs from './components/WhyUs.jsx'
import Process from './components/Process.jsx'
import Testimonials from './components/Testimonials.jsx'
import Pricing from './components/Pricing.jsx'
import FAQ from './components/FAQ.jsx'
import CTA from './components/CTA.jsx'
import Footer from './components/Footer.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(true)

  // Loading screen timing
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1400)
    return () => clearTimeout(t)
  }, [])

  // Lenis smooth scroll wired to GSAP ticker
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true
    })

    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <Loader show={loading} />
      <Cursor />
      <ScrollProgress />
      <div className="bg-noise relative">
        <Navbar />
        <main>
          <Hero />
          <Marquee />
          <Services />
          <Portfolio />
          <WhyUs />
          <Process />
          <Testimonials />
          <Pricing />
          <FAQ />
          <CTA />
        </main>
        <Footer />
      </div>
      <WhatsAppButton />
    </>
  )
}
