import * as stylex from "@stylexjs/stylex"
import { styles } from "../styles/site.stylex"
import { motion } from "motion/react"
import type { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  index: number
}

export function FeatureCard({
  icon,
  title,
  description,
  index,
}: FeatureCardProps) {
  return (
    <motion.div
      {...stylex.props(styles.featureCard)}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.08,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <div {...stylex.props(styles.featureIcon)}>{icon}</div>
      <h3 {...stylex.props(styles.featureTitle)}>{title}</h3>
      <p {...stylex.props(styles.featureDescription)}>{description}</p>
    </motion.div>
  )
}
