import { useEffect, useState } from "react"

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-200 ${
        scrolled
          ? "border-b border-white/5 bg-background/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center bg-brand text-brand-foreground text-sm font-bold">
            t.
          </div>
          <span className="text-sm font-semibold tracking-tight">typsmthng</span>
        </a>

        {/* Links */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#features"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="#web"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Web
          </a>
          <a
            href="#desktop"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Desktop
          </a>
          <a
            href="#cta"
            className="bg-brand px-4 py-2 text-sm font-medium text-brand-foreground transition-opacity hover:opacity-90"
          >
            Try it now
          </a>
        </div>
      </div>
    </nav>
  )
}
