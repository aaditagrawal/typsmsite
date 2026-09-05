import * as React from "react"
import * as stylex from "@stylexjs/stylex"
import { Slot } from "radix-ui"
import { clsx, type ClassValue } from "clsx"

import { styles } from "./button.stylex"
import "./button-selectors.css"

type Variant =
  | "default"
  | "outline"
  | "secondary"
  | "ghost"
  | "destructive"
  | "link"
type Size =
  | "default"
  | "xs"
  | "sm"
  | "lg"
  | "icon"
  | "icon-xs"
  | "icon-sm"
  | "icon-lg"
type ButtonVariants = { variant?: Variant | null; size?: Size | null }

const variants = {
  default: styles.variant_default,
  outline: styles.variant_outline,
  secondary: styles.variant_secondary,
  ghost: styles.variant_ghost,
  destructive: styles.variant_destructive,
  link: styles.variant_link,
}
const sizes = {
  default: styles.size_default,
  xs: styles.size_xs,
  sm: styles.size_sm,
  lg: styles.size_lg,
  icon: styles.size_icon,
  "icon-xs": styles["size_icon-xs"],
  "icon-sm": styles["size_icon-sm"],
  "icon-lg": styles["size_icon-lg"],
}

function buttonVariants({
  variant = "default",
  size = "default",
  className,
  class: extraClass,
}: ButtonVariants & { className?: ClassValue; class?: ClassValue } = {}) {
  return clsx(
    stylex.props(styles.base, variant && variants[variant], size && sizes[size])
      .className,
    "ui-button-base",
    variant && `ui-button-variant-${variant}`,
    size && `ui-button-size-${size}`,
    extraClass,
    className
  )
}

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> & ButtonVariants & { asChild?: boolean }) {
  const Comp = asChild ? Slot.Root : "button"
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  )
}

// eslint-disable-next-line react-refresh/only-export-components -- Preserve the existing public class-builder export.
export { Button, buttonVariants }
