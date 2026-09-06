import * as stylex from "@stylexjs/stylex"
import { styles } from "../styles/site.stylex"
import { useEffect, useState } from "react"

type Platform = "macos-arm64" | "macos-x64" | "linux-x64" | "windows-x64"

interface ReleaseAsset {
  name: string
  browser_download_url: string
}

interface ReleaseInfo {
  tag_name: string
  assets: ReleaseAsset[]
}

interface PlatformInfo {
  label: string
  shortLabel: string
  match: (name: string) => boolean
}

const PLATFORMS: Record<Platform, PlatformInfo> = {
  "macos-arm64": {
    label: "macOS (Apple Silicon)",
    shortLabel: "macOS",
    match: (name) => name.includes("macos-arm64") && name.endsWith(".dmg"),
  },
  "macos-x64": {
    label: "macOS (Intel)",
    shortLabel: "macOS Intel",
    match: (name) => name.includes("macos-x64") && name.endsWith(".dmg"),
  },
  "linux-x64": {
    label: "Linux (x64)",
    shortLabel: "Linux",
    match: (name) => name.includes("linux-x64"),
  },
  "windows-x64": {
    label: "Windows (x64)",
    shortLabel: "Windows",
    match: (name) => name.includes("win-x64"),
  },
}

/** Choose the initial download target after client hydration. */
function detectPlatform(): Platform {
  if (typeof navigator === "undefined") return "macos-arm64"

  const ua = navigator.userAgent.toLowerCase()
  const platform = (navigator.platform || "").toLowerCase()

  if (ua.includes("win")) return "windows-x64"
  if (ua.includes("linux")) return "linux-x64"

  // macOS: check for Apple Silicon
  if (ua.includes("mac") || platform.includes("mac")) {
    // navigator.platform is "MacIntel" even on ARM Macs in some browsers,
    // but we can check userAgentData if available
    const uaData = (navigator as { userAgentData?: { architecture?: string } })
      .userAgentData
    if (uaData?.architecture === "arm") return "macos-arm64"
    // Default to ARM since most new Macs are Apple Silicon
    return "macos-arm64"
  }

  return "macos-arm64"
}

const REPO_API =
  "https://api.github.com/repos/aaditagrawal/typsmthng-desktop/releases"
const RELEASES_PAGE =
  "https://github.com/aaditagrawal/typsmthng-desktop/releases"

interface DownloadButtonProps {
  variant?: "primary" | "outline"
  className?: string
}

/** Resolve release assets and let visitors choose their desktop platform. */
export function DownloadButton({
  variant = "outline",
  className = "",
}: DownloadButtonProps) {
  const [platform, setPlatform] = useState<Platform>("macos-arm64")
  const [release, setRelease] = useState<ReleaseInfo | null>(null)
  const [showPicker, setShowPicker] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Detect after hydration so the first render matches the server HTML.
    setPlatform(detectPlatform())
  }, [])

  useEffect(() => {
    fetch(REPO_API)
      .then((res) => res.json())
      .then((releases: ReleaseInfo[]) => {
        if (releases.length > 0) {
          setRelease(releases[0])
        }
      })
      .catch(() => {
        // Silently fail - button falls back to releases page
      })
      .finally(() => setLoading(false))
  }, [])

  const downloadUrl = release
    ? release.assets.find((a) => PLATFORMS[platform].match(a.name))
        ?.browser_download_url
    : null

  const version = release?.tag_name

  return (
    <div
      className={`${stylex.props(styles.downloadWrapper).className} ${className}`}
    >
      {/* Main download button */}
      <a
        href={downloadUrl ?? RELEASES_PAGE}
        {...stylex.props(
          variant === "primary"
            ? styles.downloadMainPrimary
            : styles.downloadMainOutline
        )}
        target={downloadUrl ? undefined : "_blank"}
        rel={downloadUrl ? undefined : "noopener noreferrer"}
      >
        {loading ? (
          "Download Desktop"
        ) : (
          <>
            Download for {PLATFORMS[platform].shortLabel}
            {version && (
              <span {...stylex.props(styles.downloadVersion)}>{version}</span>
            )}
          </>
        )}
      </a>

      {/* Platform picker toggle */}
      <button
        onClick={() => setShowPicker((prev) => !prev)}
        {...stylex.props(
          variant === "primary"
            ? styles.downloadTogglePrimary
            : styles.downloadToggleOutline
        )}
        aria-label="Choose platform"
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...stylex.props(
            showPicker ? styles.downloadChevronOpen : styles.downloadChevron
          )}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Platform dropdown */}
      {showPicker && (
        <>
          {/* Click-away overlay */}
          <div
            {...stylex.props(styles.downloadBackdrop)}
            onClick={() => setShowPicker(false)}
          />
          <div {...stylex.props(styles.downloadMenu)}>
            {(Object.entries(PLATFORMS) as [Platform, PlatformInfo][]).map(
              ([key, info]) => (
                <button
                  key={key}
                  onClick={() => {
                    setPlatform(key)
                    setShowPicker(false)
                  }}
                  {...stylex.props(
                    platform === key
                      ? styles.downloadSelected
                      : styles.downloadUnselected
                  )}
                >
                  {platform === key && (
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  )}
                  <span
                    {...stylex.props(platform !== key && styles.downloadIndent)}
                  >
                    {info.label}
                  </span>
                </button>
              )
            )}
            <div {...stylex.props(styles.downloadDivider)} />
            <a
              href={RELEASES_PAGE}
              target="_blank"
              rel="noopener noreferrer"
              {...stylex.props(styles.downloadReleases)}
              onClick={() => setShowPicker(false)}
            >
              <span {...stylex.props(styles.downloadReleaseIndent)}>
                All releases
              </span>
            </a>
          </div>
        </>
      )}
    </div>
  )
}
