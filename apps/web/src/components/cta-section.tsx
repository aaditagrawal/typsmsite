import { motion } from "motion/react"
import { DownloadButton } from "./download-button"

export function CtaSection() {
  return (
    <section id="cta" className="relative scroll-mt-20 py-24 md:py-40">
      {/* Background glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, var(--brand-glow) 0%, transparent 60%)",
          filter: "blur(80px)",
          opacity: 0.25,
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-2xl px-6 text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
          Start writing.
        </h2>
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          Beautiful typesetting without the complexity. Pick your platform and go.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="https://typsmthng.coolstuff.work"
            className="inline-flex items-center bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            Try Web App
            <span className="ml-2">→</span>
          </a>
          <DownloadButton />
        </div>
      </motion.div>
    </section>
  )
}
