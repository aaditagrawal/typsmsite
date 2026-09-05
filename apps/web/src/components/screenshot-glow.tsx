import * as stylex from "@stylexjs/stylex"
import { styles } from "../styles/site.stylex"
import { motion } from "motion/react"

interface ScreenshotGlowProps {
  src: string
  alt: string
  className?: string
}

export function ScreenshotGlow({
  src,
  alt,
  className = "",
}: ScreenshotGlowProps) {
  return (
    <motion.div
      className={`${stylex.props(styles.screenshotWrapper).className} ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Glow effect */}
      <div
        {...stylex.props(styles.screenshotGlow)}
        style={{
          background:
            "radial-gradient(ellipse at center, var(--brand-glow) 0%, transparent 70%)",
          filter: "blur(48px)",
          animation: "glow-pulse 4s ease-in-out infinite",
        }}
      />
      {/* Screenshot */}
      <img
        src={src}
        alt={alt}
        {...stylex.props(styles.screenshotImage)}
        loading="lazy"
      />
    </motion.div>
  )
}
