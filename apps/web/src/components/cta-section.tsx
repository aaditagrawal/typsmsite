import * as stylex from "@stylexjs/stylex"
import { styles } from "../styles/site.stylex"
import { motion } from "motion/react"
import { DownloadButton } from "./download-button"

export function CtaSection() {
  return (
    <section id="cta" {...stylex.props(styles.cta)}>
      {/* Background glow */}
      <div
        {...stylex.props(styles.ctaGlow)}
        style={{
          background:
            "radial-gradient(ellipse at center bottom, var(--brand-glow) 0%, transparent 60%)",
          filter: "blur(80px)",
          opacity: 0.25,
        }}
      />

      <motion.div
        {...stylex.props(styles.ctaContent)}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2 {...stylex.props(styles.ctaHeading)}>Start writing.</h2>
        <p {...stylex.props(styles.ctaDescription)}>
          Beautiful typesetting without the complexity. Pick your platform and
          go.
        </p>

        <div {...stylex.props(styles.ctaActions)}>
          <a
            href="https://typsmthng.coolstuff.work"
            {...stylex.props(styles.ctaWebLink)}
          >
            Try Web App
            <span {...stylex.props(styles.ctaArrow)}>→</span>
          </a>
          <DownloadButton />
        </div>
      </motion.div>
    </section>
  )
}
