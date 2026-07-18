export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-10 container-px">
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-40 bg-accent/10 blur-[100px] pointer-events-none" />
      <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold tracking-tight">
          SJ <span className="text-gradient">Dev</span> Studio
        </span>
        <p className="text-xs text-muted">© {new Date().getFullYear()} SJ Dev Studio. All rights reserved.</p>
        <div className="flex gap-6 text-xs text-muted">
          <a href="#services" data-cursor-hover className="hover:text-ink transition-colors">Services</a>
          <a href="#portfolio" data-cursor-hover className="hover:text-ink transition-colors">Work</a>
          <a href="#contact" data-cursor-hover className="hover:text-ink transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  )
}
