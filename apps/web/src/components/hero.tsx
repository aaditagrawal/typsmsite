import * as stylex from "@stylexjs/stylex"
import { styles } from "../styles/site.stylex"
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
    <section {...stylex.props(styles.hero)}>
      <motion.div
        {...stylex.props(styles.heroContent)}
        variants={stagger}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 {...stylex.props(styles.heroHeading)} variants={fadeUp}>
          Write beautiful
          <br />
          <span {...stylex.props(styles.heroAccent)}>documents.</span>
        </motion.h1>

        <motion.p {...stylex.props(styles.heroDescription)} variants={fadeUp}>
          A modern Typst editor with live preview, browser-native compilation,
          and native desktop performance.
        </motion.p>

        <motion.div {...stylex.props(styles.heroActions)} variants={fadeUp}>
          <a
            href="https://typsmthng.coolstuff.work"
            {...stylex.props(styles.heroWebLink)}
          >
            Try Web App
            <span {...stylex.props(styles.heroArrow)}>→</span>
          </a>
          <DownloadButton />
        </motion.div>

        <motion.div {...stylex.props(styles.heroScreenshot)} variants={fadeUp}>
          <ScreenshotGlow
            src="/screenshots/editor-preview-desktop.png"
            alt="typsmthng editor with live preview showing Typst code on the left and rendered document on the right"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
