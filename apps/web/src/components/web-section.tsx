import { motion } from "motion/react"
import { ScreenshotGlow } from "./screenshot-glow"

const points = [
  "No installation // open your browser and start writing",
  "Browser-native Typst compiler via WebAssembly",
  "Works on any device with a modern browser",
  "Install as a PWA for offline access",
  "Local-first // your documents stay in your browser",
]

export function WebSection() {
  return (
    <section id="web" className="scroll-mt-20 py-20 md:py-32">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-brand">
            Web
          </p>
          <h2 className="text-2xl font-bold tracking-tight md:text-4xl">
            typsmthng for the Web
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
            <a
              href="https://typsmthng.coolstuff.work"
              className="inline-flex items-center bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
            >
              Open Web Editor
              <span className="ml-2">→</span>
            </a>
          </div>
        </motion.div>

        {/* Screenshot */}
        <ScreenshotGlow
          src="/screenshots/editor-preview-desktop.png"
          alt="typsmthng web editor showing split-pane editing with live preview"
        />
      </div>
    </section>
  )
}
