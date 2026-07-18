# SJ Dev Studio — Premium Agency Website

A cinematic, Awwwards-style single-page site built with **Vite + React**, Tailwind CSS,
Framer Motion, GSAP + Lenis smooth scroll, and an interactive **React Three Fiber** 3D scene.

## Run it locally

You need Node.js 18+ installed.

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

> Note: this project was generated in a sandboxed environment without internet
> access, so `npm install` has not been run here. Every file's imports and JSX
> were syntax-checked and bundle-resolved locally with esbuild, but you should
> run `npm run dev` yourself before deploying to catch anything a live
> dependency tree might surface (in particular, verify the `@react-three/fiber`
> + `@react-three/drei` + `three` version combo in `package.json` still matches
> on install — that's the trio most likely to need a version bump over time).

## Project structure

```
src/
  components/       All UI sections (Hero, Services, Portfolio, Pricing, FAQ, etc.)
  data/content.js   All copy, services, projects, pricing & FAQ — edit this first
  index.css         Design tokens, glass/grid/noise utilities, custom cursor
  App.jsx           Page composition + Lenis/GSAP wiring
tailwind.config.js  Color palette, fonts, animation tokens
```

## Customize

- **Copy & data** — edit `src/data/content.js` (services, projects, pricing, testimonials, FAQ).
- **Colors** — edit `tailwind.config.js` under `theme.extend.colors`.
- **WhatsApp / email / socials** — update the links in `CTA.jsx` and `WhatsAppButton.jsx`.
- **3D scene** — `components/Workspace3D.jsx`. It's wrapped in an error boundary
  with a gradient-blob fallback, so the page still looks good even if WebGL
  is unavailable on a visitor's device.

## Notes on scope

- Built with **Vite + React Router-free single page** (the brief's top line asked
  for the Vite installer; the tech list at the bottom mentioned Next.js App Router —
  Vite was used since it was the explicit, repeated instruction).
- Uses `lucide-react` for icons (as requested) instead of shadcn/ui components,
  since no interactive form/dialog primitives were needed beyond what's built here.
  Add shadcn/ui yourself if you extend this with a booking form or modal.
- Custom cursor auto-disables on touch/mobile devices.
- Respects `prefers-reduced-motion`.
