import { motion } from "motion/react"
import { DownloadButton } from "./download-button"
import { ScreenshotGlow } from "./screenshot-glow"

const points = [
  "Native performance via Electrobun // no Electron overhead",
  "Direct filesystem access // edit .typ files from your disk",
  "Full-text search across all your projects",
  "System integration with native window effects",
  "Offline-first // works without an internet connection",
]

export function DesktopSection() {
  return (
    <section id="desktop" className="scroll-mt-20 py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Screenshot (left on desktop) */}
        <ScreenshotGlow
          src="/screenshots/app-desktop.png"
          alt="typsmthng desktop app showing project management interface"
          className="order-2 md:order-1"
        />

        {/* Text (right on desktop) */}
        <motion.div
          className="order-1 md:order-2"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
            Desktop
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
            typsmthng for Desktop
          </h2>
          <ul className="mt-6 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-sm text-muted-foreground">
                <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 bg-brand" />
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <DownloadButton />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
