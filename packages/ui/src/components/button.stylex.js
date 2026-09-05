import * as stylex from "@stylexjs/stylex"

export const styles = stylex.create({
  base: {
    display: "inline-flex",
    flexShrink: "0",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "0",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: "#0000",
    backgroundClip: "padding-box",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    whiteSpace: "nowrap",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    "--tw-outline-style": "none",
    outlineStyle: "none",
    WebkitUserSelect: "none",
    userSelect: "none",
  },
  variant_default: {
    backgroundColor: "var(--primary)",
    color: "var(--primary-foreground)",
  },
  variant_outline: {
    borderColor: "var(--border)",
  },
  variant_secondary: {
    backgroundColor: "var(--secondary)",
    color: "var(--secondary-foreground)",
  },
  variant_ghost: {},
  variant_destructive: {
    backgroundColor: "var(--destructive)",
    color: "var(--destructive)",
  },
  variant_link: {
    color: "var(--primary)",
    textUnderlineOffset: "4px",
  },
  size_default: {
    height: "calc(var(--spacing) * 8)",
    gap: "calc(var(--spacing) * 1.5)",
    paddingInline: "calc(var(--spacing) * 2.5)",
  },
  size_xs: {
    height: "calc(var(--spacing) * 6)",
    gap: "calc(var(--spacing) * 1)",
    borderRadius: "0",
    paddingInline: "calc(var(--spacing) * 2)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
  },
  size_sm: {
    height: "calc(var(--spacing) * 7)",
    gap: "calc(var(--spacing) * 1)",
    borderRadius: "0",
    paddingInline: "calc(var(--spacing) * 2.5)",
  },
  size_lg: {
    height: "calc(var(--spacing) * 9)",
    gap: "calc(var(--spacing) * 1.5)",
    paddingInline: "calc(var(--spacing) * 2.5)",
  },
  size_icon: {
    width: "calc(var(--spacing) * 8)",
    height: "calc(var(--spacing) * 8)",
  },
  "size_icon-xs": {
    width: "calc(var(--spacing) * 6)",
    height: "calc(var(--spacing) * 6)",
    borderRadius: "0",
  },
  "size_icon-sm": {
    width: "calc(var(--spacing) * 7)",
    height: "calc(var(--spacing) * 7)",
    borderRadius: "0",
  },
  "size_icon-lg": {
    width: "calc(var(--spacing) * 9)",
    height: "calc(var(--spacing) * 9)",
  },
})
