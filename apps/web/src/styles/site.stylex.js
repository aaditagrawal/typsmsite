import * as stylex from "@stylexjs/stylex"

// Preserve the existing declarations and their responsive and interaction conditions.
export const styles = stylex.create({
  cta: {
    position: "relative",
    scrollMarginTop: "calc(var(--spacing) * 20)",
    paddingBlock: {
      default: "calc(var(--spacing) * 24)",
      "@media (min-width:48rem)": "calc(var(--spacing) * 40)",
    },
  },
  ctaGlow: {
    pointerEvents: "none",
    position: "absolute",
    inset: "calc(var(--spacing) * 0)",
    zIndex: "0",
  },
  ctaContent: {
    position: "relative",
    zIndex: "10",
    marginInline: "auto",
    maxWidth: "var(--container-2xl)",
    paddingInline: "calc(var(--spacing) * 6)",
    textAlign: "center",
  },
  ctaHeading: {
    fontSize: {
      default: "var(--text-3xl)",
      "@media (min-width:48rem)": "var(--text-5xl)",
    },
    lineHeight: {
      default: "var(--tw-leading,var(--text-3xl--line-height))",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-5xl--line-height))",
    },
    "--tw-font-weight": "var(--font-weight-bold)",
    fontWeight: "var(--font-weight-bold)",
    "--tw-tracking": "var(--tracking-tight)",
    letterSpacing: "var(--tracking-tight)",
  },
  ctaDescription: {
    marginTop: "calc(var(--spacing) * 4)",
    fontSize: {
      default: "var(--text-base)",
      "@media (min-width:48rem)": "var(--text-lg)",
    },
    lineHeight: {
      default: "var(--tw-leading,var(--text-base--line-height))",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-lg--line-height))",
    },
    color: "var(--muted-foreground)",
  },
  ctaActions: {
    marginTop: "calc(var(--spacing) * 10)",
    display: "flex",
    flexDirection: {
      default: "column",
      "@media (min-width:40rem)": "row",
    },
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing) * 4)",
  },
  ctaWebLink: {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "var(--brand)",
    paddingInline: "calc(var(--spacing) * 6)",
    paddingBlock: "calc(var(--spacing) * 3)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    color: "var(--brand-foreground)",
    transitionProperty: "opacity",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    opacity: {
      default: null,
      "@media (hover:hover)": {
        default: null,
        ":hover": ".9",
      },
    },
  },
  ctaArrow: {
    marginLeft: "calc(var(--spacing) * 2)",
  },
  desktop: {
    scrollMarginTop: "calc(var(--spacing) * 20)",
    paddingBlock: {
      default: "calc(var(--spacing) * 20)",
      "@media (min-width:48rem)": "calc(var(--spacing) * 32)",
    },
  },
  desktopGrid: {
    marginInline: "auto",
    display: "grid",
    maxWidth: "var(--container-6xl)",
    gridTemplateColumns: {
      default: "repeat(1,minmax(0,1fr))",
      "@media (min-width:48rem)": "repeat(2,minmax(0,1fr))",
    },
    alignItems: "center",
    gap: {
      default: "calc(var(--spacing) * 12)",
      "@media (min-width:48rem)": "calc(var(--spacing) * 16)",
    },
    paddingInline: "calc(var(--spacing) * 6)",
  },
  desktopScreenshot: {
    order: {
      default: "2",
      "@media (min-width:48rem)": "1",
    },
  },
  desktopContent: {
    order: {
      default: "1",
      "@media (min-width:48rem)": "2",
    },
  },
  desktopEyebrow: {
    marginBottom: "calc(var(--spacing) * 3)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    "--tw-font-weight": "var(--font-weight-semibold)",
    fontWeight: "var(--font-weight-semibold)",
    "--tw-tracking": "var(--tracking-widest)",
    letterSpacing: "var(--tracking-widest)",
    color: "var(--brand)",
    textTransform: "uppercase",
  },
  desktopHeading: {
    fontSize: {
      default: "var(--text-2xl)",
      "@media (min-width:48rem)": "var(--text-4xl)",
    },
    lineHeight: {
      default: "var(--tw-leading,var(--text-2xl--line-height))",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-4xl--line-height))",
    },
    "--tw-font-weight": "var(--font-weight-bold)",
    fontWeight: "var(--font-weight-bold)",
    "--tw-tracking": "var(--tracking-tight)",
    letterSpacing: "var(--tracking-tight)",
  },
  desktopPoints: {
    marginTop: "calc(var(--spacing) * 6)",
    "--stack-space": "calc(var(--spacing) * 3)",
  },
  desktopPoint: {
    display: "flex",
    alignItems: "flex-start",
    gap: "calc(var(--spacing) * 3)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: "var(--muted-foreground)",
  },
  desktopBullet: {
    marginTop: "calc(var(--spacing) * 1.5)",
    display: "block",
    height: "calc(var(--spacing) * 1.5)",
    width: "calc(var(--spacing) * 1.5)",
    flexShrink: "0",
    backgroundColor: "var(--brand)",
  },
  desktopActions: {
    marginTop: "calc(var(--spacing) * 8)",
  },
  downloadVersion: {
    marginLeft: "calc(var(--spacing) * 2)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    opacity: ".6",
  },
  downloadBackdrop: {
    position: "fixed",
    inset: "calc(var(--spacing) * 0)",
    zIndex: "40",
  },
  downloadMenu: {
    position: "absolute",
    top: "100%",
    right: "calc(var(--spacing) * 0)",
    zIndex: "50",
    marginTop: "calc(var(--spacing) * 2)",
    minWidth: "200px",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: {
      default: "#ffffff1a",
      "@supports (color:color-mix(in lab,red,red))":
        "color-mix(in oklab,var(--color-white) 10%,transparent)",
    },
    backgroundColor: "var(--background)",
    paddingBlock: "calc(var(--spacing) * 1)",
  },
  downloadDivider: {
    marginInline: "calc(var(--spacing) * 4)",
    marginBlock: "calc(var(--spacing) * 1)",
    borderTopStyle: "var(--tw-border-style)",
    borderTopWidth: "1px",
    borderColor: {
      default: "#ffffff0d",
      "@supports (color:color-mix(in lab,red,red))":
        "color-mix(in oklab,var(--color-white) 5%,transparent)",
    },
  },
  downloadReleases: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: "calc(var(--spacing) * 2)",
    paddingInline: "calc(var(--spacing) * 4)",
    paddingBlock: "calc(var(--spacing) * 2)",
    textAlign: "left",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: {
      default: "var(--muted-foreground)",
      "@media (hover:hover)": {
        default: null,
        ":hover": "var(--foreground)",
      },
    },
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    backgroundColor: {
      default: null,
      "@media (hover:hover)": {
        default: null,
        ":hover": "var(--surface-elevated)",
      },
    },
  },
  downloadReleaseIndent: {
    marginLeft: "calc(var(--spacing) * 5)",
  },
  downloadWrapper: {
    position: "relative",
    display: "inline-flex",
  },
  downloadMainPrimary: {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "var(--brand)",
    paddingInline: "calc(var(--spacing) * 6)",
    paddingBlock: "calc(var(--spacing) * 3)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    color: "var(--brand-foreground)",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    opacity: {
      default: null,
      "@media (hover:hover)": {
        default: null,
        ":hover": ".9",
      },
    },
  },
  downloadTogglePrimary: {
    display: "inline-flex",
    alignItems: "center",
    borderLeftStyle: "var(--tw-border-style)",
    borderLeftWidth: "1px",
    borderColor: {
      default: "#ffffff1a",
      "@supports (color:color-mix(in lab,red,red))":
        "color-mix(in oklab,var(--color-white) 10%,transparent)",
    },
    backgroundColor: "var(--brand)",
    paddingInline: "calc(var(--spacing) * 3)",
    paddingBlock: "calc(var(--spacing) * 3)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: "var(--brand-foreground)",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    opacity: {
      default: null,
      "@media (hover:hover)": {
        default: null,
        ":hover": ".9",
      },
    },
  },
  downloadMainOutline: {
    display: "inline-flex",
    alignItems: "center",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: {
      default: "#ffffff1a",
      "@supports (color:color-mix(in lab,red,red))":
        "color-mix(in oklab,var(--color-white) 10%,transparent)",
      "@media (hover:hover)": {
        default: null,
        ":hover": "#ffffff40",
        "@supports (color:color-mix(in lab,red,red))": {
          default: null,
          ":hover": "color-mix(in oklab,var(--color-white) 25%,transparent)",
        },
      },
    },
    paddingInline: "calc(var(--spacing) * 6)",
    paddingBlock: "calc(var(--spacing) * 3)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    color: "var(--foreground)",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  downloadToggleOutline: {
    display: "inline-flex",
    alignItems: "center",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderLeftStyle: "var(--tw-border-style)",
    borderLeftWidth: "1px",
    borderColor: {
      default: "#ffffff1a",
      "@supports (color:color-mix(in lab,red,red))":
        "color-mix(in oklab,var(--color-white) 10%,transparent)",
      "@media (hover:hover)": {
        default: null,
        ":hover": "#ffffff40",
        "@supports (color:color-mix(in lab,red,red))": {
          default: null,
          ":hover": "color-mix(in oklab,var(--color-white) 25%,transparent)",
        },
      },
    },
    paddingInline: "calc(var(--spacing) * 3)",
    paddingBlock: "calc(var(--spacing) * 3)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: "var(--foreground)",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  downloadChevron: {
    transitionProperty: "transform,translate,scale,rotate",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  downloadChevronOpen: {
    rotate: "180deg",
    transitionProperty: "transform,translate,scale,rotate",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  downloadSelected: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: "calc(var(--spacing) * 2)",
    paddingInline: "calc(var(--spacing) * 4)",
    paddingBlock: "calc(var(--spacing) * 2)",
    textAlign: "left",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: "var(--brand)",
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    backgroundColor: {
      default: null,
      "@media (hover:hover)": {
        default: null,
        ":hover": "var(--surface-elevated)",
      },
    },
  },
  downloadUnselected: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    gap: "calc(var(--spacing) * 2)",
    paddingInline: "calc(var(--spacing) * 4)",
    paddingBlock: "calc(var(--spacing) * 2)",
    textAlign: "left",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: {
      default: "var(--muted-foreground)",
      "@media (hover:hover)": {
        default: null,
        ":hover": "var(--foreground)",
      },
    },
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    backgroundColor: {
      default: null,
      "@media (hover:hover)": {
        default: null,
        ":hover": "var(--surface-elevated)",
      },
    },
  },
  downloadIndent: {
    marginLeft: "calc(var(--spacing) * 5)",
  },
  featureCard: {
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: {
      default: "#ffffff0d",
      "@supports (color:color-mix(in lab,red,red))":
        "color-mix(in oklab,var(--color-white) 5%,transparent)",
      "@media (hover:hover)": {
        default: null,
        ":hover": "var(--brand)",
        "@supports (color:color-mix(in lab,red,red))": {
          default: null,
          ":hover": "color-mix(in oklab,var(--brand) 30%,transparent)",
        },
      },
    },
    backgroundColor: "var(--surface-elevated)",
    padding: "calc(var(--spacing) * 6)",
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  featureIcon: {
    marginBottom: "calc(var(--spacing) * 4)",
    display: "flex",
    height: "calc(var(--spacing) * 10)",
    width: "calc(var(--spacing) * 10)",
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: {
      default: "#ffffff1a",
      "@supports (color:color-mix(in lab,red,red))":
        "color-mix(in oklab,var(--color-white) 10%,transparent)",
    },
    color: "var(--brand)",
  },
  featureTitle: {
    marginBottom: "calc(var(--spacing) * 2)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-semibold)",
    fontWeight: "var(--font-weight-semibold)",
  },
  featureDescription: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--leading-relaxed)",
    "--tw-leading": "var(--leading-relaxed)",
    color: "var(--muted-foreground)",
  },
  features: {
    scrollMarginTop: "calc(var(--spacing) * 20)",
    paddingBlock: {
      default: "calc(var(--spacing) * 20)",
      "@media (min-width:48rem)": "calc(var(--spacing) * 32)",
    },
  },
  featuresContent: {
    marginInline: "auto",
    maxWidth: "var(--container-6xl)",
    paddingInline: "calc(var(--spacing) * 6)",
  },
  featuresHeader: {
    marginBottom: {
      default: "calc(var(--spacing) * 12)",
      "@media (min-width:48rem)": "calc(var(--spacing) * 16)",
    },
  },
  featuresHeading: {
    fontSize: {
      default: "var(--text-2xl)",
      "@media (min-width:48rem)": "var(--text-4xl)",
    },
    lineHeight: {
      default: "var(--tw-leading,var(--text-2xl--line-height))",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-4xl--line-height))",
    },
    "--tw-font-weight": "var(--font-weight-bold)",
    fontWeight: "var(--font-weight-bold)",
    "--tw-tracking": "var(--tracking-tight)",
    letterSpacing: "var(--tracking-tight)",
  },
  featuresDescription: {
    marginTop: "calc(var(--spacing) * 4)",
    maxWidth: "var(--container-lg)",
    fontSize: "var(--text-base)",
    lineHeight: "var(--tw-leading,var(--text-base--line-height))",
    color: "var(--muted-foreground)",
  },
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: {
      default: "repeat(1,minmax(0,1fr))",
      "@media (min-width:48rem)": "repeat(2,minmax(0,1fr))",
      "@media (min-width:64rem)": "repeat(3,minmax(0,1fr))",
    },
    gap: "calc(var(--spacing) * 4)",
  },
  hero: {
    position: "relative",
    overflow: "hidden",
    paddingTop: {
      default: "calc(var(--spacing) * 32)",
      "@media (min-width:48rem)": "calc(var(--spacing) * 44)",
    },
    paddingBottom: {
      default: "calc(var(--spacing) * 20)",
      "@media (min-width:48rem)": "calc(var(--spacing) * 32)",
    },
  },
  heroContent: {
    marginInline: "auto",
    maxWidth: "var(--container-6xl)",
    paddingInline: "calc(var(--spacing) * 6)",
    textAlign: "center",
  },
  heroHeading: {
    fontSize: {
      default: "var(--text-4xl)",
      "@media (min-width:48rem)": "var(--text-6xl)",
      "@media (min-width:64rem)": "var(--text-7xl)",
    },
    lineHeight: {
      default: "var(--leading-tight)",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-6xl--line-height))",
      "@media (min-width:64rem)":
        "var(--tw-leading,var(--text-7xl--line-height))",
    },
    "--tw-leading": "var(--leading-tight)",
    "--tw-font-weight": "var(--font-weight-bold)",
    fontWeight: "var(--font-weight-bold)",
    "--tw-tracking": "var(--tracking-tight)",
    letterSpacing: "var(--tracking-tight)",
  },
  heroAccent: {
    color: "var(--brand)",
  },
  heroDescription: {
    marginInline: "auto",
    marginTop: "calc(var(--spacing) * 6)",
    maxWidth: "var(--container-xl)",
    fontSize: {
      default: "var(--text-base)",
      "@media (min-width:48rem)": "var(--text-lg)",
    },
    lineHeight: {
      default: "var(--tw-leading,var(--text-base--line-height))",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-lg--line-height))",
    },
    color: "var(--muted-foreground)",
  },
  heroActions: {
    marginTop: "calc(var(--spacing) * 10)",
    display: "flex",
    flexDirection: {
      default: "column",
      "@media (min-width:40rem)": "row",
    },
    alignItems: "center",
    justifyContent: "center",
    gap: "calc(var(--spacing) * 4)",
  },
  heroWebLink: {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "var(--brand)",
    paddingInline: "calc(var(--spacing) * 6)",
    paddingBlock: "calc(var(--spacing) * 3)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    color: "var(--brand-foreground)",
    transitionProperty: "opacity",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    opacity: {
      default: null,
      "@media (hover:hover)": {
        default: null,
        ":hover": ".9",
      },
    },
  },
  heroArrow: {
    marginLeft: "calc(var(--spacing) * 2)",
  },
  heroScreenshot: {
    marginTop: {
      default: "calc(var(--spacing) * 16)",
      "@media (min-width:48rem)": "calc(var(--spacing) * 24)",
    },
  },
  navbarContent: {
    marginInline: "auto",
    display: "flex",
    maxWidth: "var(--container-6xl)",
    alignItems: "center",
    justifyContent: "space-between",
    paddingInline: "calc(var(--spacing) * 6)",
    paddingBlock: "calc(var(--spacing) * 4)",
  },
  navbarLogo: {
    display: "flex",
    alignItems: "center",
    gap: "calc(var(--spacing) * 3)",
  },
  navbarIcon: {
    display: "flex",
    height: "calc(var(--spacing) * 8)",
    width: "calc(var(--spacing) * 8)",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--brand)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-bold)",
    fontWeight: "var(--font-weight-bold)",
    color: "var(--brand-foreground)",
  },
  navbarTitle: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-semibold)",
    fontWeight: "var(--font-weight-semibold)",
    "--tw-tracking": "var(--tracking-tight)",
    letterSpacing: "var(--tracking-tight)",
  },
  navbarLinks: {
    display: {
      default: "none",
      "@media (min-width:48rem)": "flex",
    },
    alignItems: "center",
    gap: "calc(var(--spacing) * 8)",
  },
  navbarLink: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: {
      default: "var(--muted-foreground)",
      "@media (hover:hover)": {
        default: null,
        ":hover": "var(--foreground)",
      },
    },
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  navbarWebLink: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: {
      default: "var(--muted-foreground)",
      "@media (hover:hover)": {
        default: null,
        ":hover": "var(--foreground)",
      },
    },
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  navbarDesktopLink: {
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: {
      default: "var(--muted-foreground)",
      "@media (hover:hover)": {
        default: null,
        ":hover": "var(--foreground)",
      },
    },
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  navbarAction: {
    backgroundColor: "var(--brand)",
    paddingInline: "calc(var(--spacing) * 4)",
    paddingBlock: "calc(var(--spacing) * 2)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    color: "var(--brand-foreground)",
    transitionProperty: "opacity",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    opacity: {
      default: null,
      "@media (hover:hover)": {
        default: null,
        ":hover": ".9",
      },
    },
  },
  navbarTop: {
    position: "fixed",
    top: "calc(var(--spacing) * 0)",
    right: "calc(var(--spacing) * 0)",
    left: "calc(var(--spacing) * 0)",
    zIndex: "50",
    backgroundColor: "#0000",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: ".2s",
    "--tw-duration": ".2s",
  },
  navbarScrolled: {
    position: "fixed",
    top: "calc(var(--spacing) * 0)",
    right: "calc(var(--spacing) * 0)",
    left: "calc(var(--spacing) * 0)",
    zIndex: "50",
    borderBottomStyle: "var(--tw-border-style)",
    borderBottomWidth: "1px",
    borderColor: {
      default: "#ffffff0d",
      "@supports (color:color-mix(in lab,red,red))":
        "color-mix(in oklab,var(--color-white) 5%,transparent)",
    },
    backgroundColor: {
      default: "var(--background)",
      "@supports (color:color-mix(in lab,red,red))":
        "color-mix(in oklab,var(--background) 80%,transparent)",
    },
    "--tw-backdrop-blur": "blur(var(--blur-md))",
    WebkitBackdropFilter:
      "var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)",
    backdropFilter:
      "var(--tw-backdrop-blur,) var(--tw-backdrop-brightness,) var(--tw-backdrop-contrast,) var(--tw-backdrop-grayscale,) var(--tw-backdrop-hue-rotate,) var(--tw-backdrop-invert,) var(--tw-backdrop-opacity,) var(--tw-backdrop-saturate,) var(--tw-backdrop-sepia,)",
    transitionProperty: "all",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: ".2s",
    "--tw-duration": ".2s",
  },
  screenshotGlow: {
    pointerEvents: "none",
    position: "absolute",
    inset: "calc(var(--spacing) * -8)",
    zIndex: "0",
  },
  screenshotImage: {
    position: "relative",
    zIndex: "10",
    width: "100%",
    borderStyle: "var(--tw-border-style)",
    borderWidth: "1px",
    borderColor: {
      default: "#ffffff1a",
      "@supports (color:color-mix(in lab,red,red))":
        "color-mix(in oklab,var(--color-white) 10%,transparent)",
    },
  },
  screenshotWrapper: {
    position: "relative",
  },
  web: {
    scrollMarginTop: "calc(var(--spacing) * 20)",
    paddingBlock: {
      default: "calc(var(--spacing) * 20)",
      "@media (min-width:48rem)": "calc(var(--spacing) * 32)",
    },
  },
  webGrid: {
    marginInline: "auto",
    display: "grid",
    maxWidth: "var(--container-6xl)",
    gridTemplateColumns: {
      default: "repeat(1,minmax(0,1fr))",
      "@media (min-width:48rem)": "repeat(2,minmax(0,1fr))",
    },
    alignItems: "center",
    gap: {
      default: "calc(var(--spacing) * 12)",
      "@media (min-width:48rem)": "calc(var(--spacing) * 16)",
    },
    paddingInline: "calc(var(--spacing) * 6)",
  },
  webEyebrow: {
    marginBottom: "calc(var(--spacing) * 3)",
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    "--tw-font-weight": "var(--font-weight-semibold)",
    fontWeight: "var(--font-weight-semibold)",
    "--tw-tracking": "var(--tracking-widest)",
    letterSpacing: "var(--tracking-widest)",
    color: "var(--brand)",
    textTransform: "uppercase",
  },
  webHeading: {
    fontSize: {
      default: "var(--text-2xl)",
      "@media (min-width:48rem)": "var(--text-4xl)",
    },
    lineHeight: {
      default: "var(--tw-leading,var(--text-2xl--line-height))",
      "@media (min-width:48rem)":
        "var(--tw-leading,var(--text-4xl--line-height))",
    },
    "--tw-font-weight": "var(--font-weight-bold)",
    fontWeight: "var(--font-weight-bold)",
    "--tw-tracking": "var(--tracking-tight)",
    letterSpacing: "var(--tracking-tight)",
  },
  webPoints: {
    marginTop: "calc(var(--spacing) * 6)",
    "--stack-space": "calc(var(--spacing) * 3)",
  },
  webPoint: {
    display: "flex",
    alignItems: "flex-start",
    gap: "calc(var(--spacing) * 3)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    color: "var(--muted-foreground)",
  },
  webBullet: {
    marginTop: "calc(var(--spacing) * 1.5)",
    display: "block",
    height: "calc(var(--spacing) * 1.5)",
    width: "calc(var(--spacing) * 1.5)",
    flexShrink: "0",
    backgroundColor: "var(--brand)",
  },
  webActions: {
    marginTop: "calc(var(--spacing) * 8)",
  },
  webLink: {
    display: "inline-flex",
    alignItems: "center",
    backgroundColor: "var(--brand)",
    paddingInline: "calc(var(--spacing) * 6)",
    paddingBlock: "calc(var(--spacing) * 3)",
    fontSize: "var(--text-sm)",
    lineHeight: "var(--tw-leading,var(--text-sm--line-height))",
    "--tw-font-weight": "var(--font-weight-medium)",
    fontWeight: "var(--font-weight-medium)",
    color: "var(--brand-foreground)",
    transitionProperty: "opacity",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
    opacity: {
      default: null,
      "@media (hover:hover)": {
        default: null,
        ":hover": ".9",
      },
    },
  },
  webArrow: {
    marginLeft: "calc(var(--spacing) * 2)",
  },
  footer: {
    borderTopStyle: "var(--tw-border-style)",
    borderTopWidth: "1px",
    borderColor: {
      default: "#ffffff0d",
      "@supports (color:color-mix(in lab,red,red))":
        "color-mix(in oklab,var(--color-white) 5%,transparent)",
    },
    paddingBlock: "calc(var(--spacing) * 8)",
  },
  footerContent: {
    marginInline: "auto",
    display: "flex",
    maxWidth: "var(--container-6xl)",
    flexDirection: {
      default: "column",
      "@media (min-width:40rem)": "row",
    },
    alignItems: "center",
    justifyContent: "space-between",
    gap: "calc(var(--spacing) * 4)",
    paddingInline: "calc(var(--spacing) * 6)",
  },
  footerLogo: {
    display: "flex",
    alignItems: "center",
    gap: "calc(var(--spacing) * 3)",
  },
  footerIcon: {
    display: "flex",
    height: "calc(var(--spacing) * 6)",
    width: "calc(var(--spacing) * 6)",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "var(--brand)",
    fontSize: "10px",
    "--tw-font-weight": "var(--font-weight-bold)",
    fontWeight: "var(--font-weight-bold)",
    color: "var(--brand-foreground)",
  },
  footerTitle: {
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    color: "var(--muted-foreground)",
  },
  footerLinks: {
    display: "flex",
    gap: "calc(var(--spacing) * 6)",
  },
  footerSource: {
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    color: {
      default: "var(--muted-foreground)",
      "@media (hover:hover)": {
        default: null,
        ":hover": "var(--foreground)",
      },
    },
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  footerWeb: {
    fontSize: "var(--text-xs)",
    lineHeight: "var(--tw-leading,var(--text-xs--line-height))",
    color: {
      default: "var(--muted-foreground)",
      "@media (hover:hover)": {
        default: null,
        ":hover": "var(--foreground)",
      },
    },
    transitionProperty:
      "color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to",
    transitionTimingFunction:
      "var(--tw-ease,var(--default-transition-timing-function))",
    transitionDuration: "var(--tw-duration,var(--default-transition-duration))",
  },
  body: {
    backgroundColor: "var(--background)",
    fontFamily: "JetBrains Mono Variable,monospace",
    color: "var(--foreground)",
    WebkitFontSmoothing: "antialiased",
    MozOsxFontSmoothing: "grayscale",
  },
})
