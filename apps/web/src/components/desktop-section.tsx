import * as stylex from "@stylexjs/stylex"
import { styles } from "../styles/site.stylex"
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

/** Present desktop capabilities, screenshot, and platform-aware download control. */
export function DesktopSection() {
  return (
    <section id="desktop" {...stylex.props(styles.desktop)}>
      <div {...stylex.props(styles.desktopGrid)}>
        {/* Screenshot (left on desktop) */}
        <ScreenshotGlow
          src="/screenshots/app-desktop.png"
          alt="typsmthng desktop app showing project management interface"
          {...stylex.props(styles.desktopScreenshot)}
        />

        {/* Text (right on desktop) */}
        <motion.div
          {...stylex.props(styles.desktopContent)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <p {...stylex.props(styles.desktopEyebrow)}>Desktop</p>
          <h2 {...stylex.props(styles.desktopHeading)}>
            typsmthng for Desktop
          </h2>
          <ul {...stylex.props(styles.desktopPoints)} data-stack="">
            {points.map((point) => (
              <li key={point} {...stylex.props(styles.desktopPoint)}>
                <span {...stylex.props(styles.desktopBullet)} />
                {point}
              </li>
            ))}
          </ul>
          <div {...stylex.props(styles.desktopActions)}>
            <DownloadButton />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
