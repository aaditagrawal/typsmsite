import { detectPlatform, PLATFORMS, type Platform } from "../lib/download-platform"
import * as stylex from "@stylexjs/stylex"
import { styles } from "../styles/site.stylex"
import { useEffect, useState } from "react"

interface ReleaseAsset {
  name: string
  browser_download_url: string
}

interface ReleaseInfo {
  tag_name: string
  assets: ReleaseAsset[]
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
  const [platform, setPlatform] = useState<Platform | null>(null)
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

  const downloadUrl = release && platform
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
            {platform ? `Download for ${PLATFORMS[platform].shortLabel}` : "Download Desktop"}
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
