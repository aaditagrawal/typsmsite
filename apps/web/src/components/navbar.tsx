import * as stylex from "@stylexjs/stylex"
import { styles } from "../styles/site.stylex"
import { useEffect, useState } from "react"

/** Keep section navigation fixed and apply its scrolled appearance. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav {...stylex.props(scrolled ? styles.navbarScrolled : styles.navbarTop)}>
      <div {...stylex.props(styles.navbarContent)}>
        {/* Logo */}
        <a href="/" {...stylex.props(styles.navbarLogo)}>
          <div {...stylex.props(styles.navbarIcon)}>t.</div>
          <span {...stylex.props(styles.navbarTitle)}>typsmthng</span>
        </a>

        {/* Links */}
        <div {...stylex.props(styles.navbarLinks)}>
          <a href="#features" {...stylex.props(styles.navbarLink)}>
            Features
          </a>
          <a href="#web" {...stylex.props(styles.navbarWebLink)}>
            Web
          </a>
          <a href="#desktop" {...stylex.props(styles.navbarDesktopLink)}>
            Desktop
          </a>
          <a href="#cta" {...stylex.props(styles.navbarAction)}>
            Try it now
          </a>
        </div>
      </div>
    </nav>
  )
}
