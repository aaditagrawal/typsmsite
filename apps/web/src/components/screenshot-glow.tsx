import { motion } from "motion/react"

interface ScreenshotGlowProps {
  src: string
  alt: string
  className?: string
}

export function ScreenshotGlow({ src, alt, className = "" }: ScreenshotGlowProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Glow effect */}
      <div className="screenshot-glow pointer-events-none absolute -inset-8 z-0" />
      {/* Screenshot */}
      <img
        src={src}
        alt={alt}
        className="relative z-10 w-full border border-white/10"
        loading="lazy"
      />
    </motion.div>
  )
}
