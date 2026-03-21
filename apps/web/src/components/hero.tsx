import { motion } from "motion/react"
import { DownloadButton } from "./download-button"
import { ScreenshotGlow } from "./screenshot-glow"

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32">
      <motion.div
        className="mx-auto max-w-6xl px-6 text-center"
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl"
          variants={fadeUp}
        >
          Write beautiful
          <br />
          <span className="text-brand">documents.</span>
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          variants={fadeUp}
        >
          A modern Typst editor with live preview, browser-native compilation,
          and native desktop performance.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          variants={fadeUp}
        >
          <a
            href="https://typsmthng.coolstuff.work"
            className="inline-flex items-center bg-brand px-6 py-3 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            Try Web App
            <span className="ml-2">→</span>
          </a>
          <DownloadButton />
        </motion.div>

        <motion.div className="mt-16 md:mt-24" variants={fadeUp}>
          <ScreenshotGlow
            src="/screenshots/editor-preview-desktop.png"
            alt="typsmthng editor with live preview showing Typst code on the left and rendered document on the right"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
