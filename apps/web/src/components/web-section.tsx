import * as stylex from "@stylexjs/stylex"
import { styles } from "../styles/site.stylex"
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
    <section id="web" {...stylex.props(styles.web)}>
      <div {...stylex.props(styles.webGrid)}>
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p {...stylex.props(styles.webEyebrow)}>Web</p>
          <h2 {...stylex.props(styles.webHeading)}>typsmthng for the Web</h2>
          <ul {...stylex.props(styles.webPoints)} data-stack="">
            {points.map((point) => (
              <li key={point} {...stylex.props(styles.webPoint)}>
                <span {...stylex.props(styles.webBullet)} />
                {point}
              </li>
            ))}
          </ul>
          <div {...stylex.props(styles.webActions)}>
            <a
              href="https://typsmthng.coolstuff.work"
              {...stylex.props(styles.webLink)}
            >
              Open Web Editor
              <span {...stylex.props(styles.webArrow)}>→</span>
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
