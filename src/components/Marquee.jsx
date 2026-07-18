import { techStack } from "../data/content.js"

export default function Marquee() {
  const firstRow = [...techStack, ...techStack]
  const secondRow = [...techStack].reverse()
  const secondItems = [...secondRow, ...secondRow]

  return (
    <section className="relative overflow-hidden py-20">

      {/* Background Glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-accent/10 blur-[120px] rounded-full" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-highlight/10 blur-[120px] rounded-full" />

      {/* Gradient Fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-bg to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-bg to-transparent z-10" />

      <div className="space-y-8">

        {/* Row 1 */}
        <div className="flex w-max animate-marquee gap-6">

          {firstRow.map((item, index) => (
            <div
              key={index}
              className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              px-7
              py-4
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-accent/40
              hover:shadow-[0_10px_40px_rgba(255,107,53,.25)]
              "
            >
              <div className="w-3 h-3 rounded-full bg-accent group-hover:scale-125 transition" />

              <span className="font-semibold text-lg text-white whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex w-max animate-marquee-reverse gap-6">

          {secondItems.map((item, index) => (
            <div
              key={index}
              className="
              group
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-xl
              px-7
              py-4
              transition-all
              duration-500
              hover:-translate-y-1
              hover:border-highlight/40
              hover:shadow-[0_10px_40px_rgba(124,58,237,.25)]
              "
            >
              <div className="w-3 h-3 rounded-full bg-highlight group-hover:scale-125 transition" />

              <span className="font-semibold text-lg text-white whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}