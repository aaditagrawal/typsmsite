export type Platform = "macos-arm64" | "macos-x64" | "linux-x64" | "windows-x64"

interface PlatformInfo {
  label: string
  shortLabel: string
  match: (name: string) => boolean
}

export const PLATFORMS: Record<Platform, PlatformInfo> = {
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
    match: (name) => name.includes("windows-x64") || name.includes("win-x64"),
  },
}

/** Pick only targets the browser can identify, leaving unknown Mac CPUs to the picker. */
export function detectPlatform(navigatorInfo: {
  userAgent: string
  platform: string
  userAgentData?: { architecture?: string }
} | null = typeof navigator === "undefined" ? null : navigator): Platform | null {
  if (!navigatorInfo) return null
  const ua = navigatorInfo.userAgent.toLowerCase()
  const platform = navigatorInfo.platform.toLowerCase()
  if (ua.includes("win")) return "windows-x64"
  if (ua.includes("linux")) return "linux-x64"
  if (ua.includes("mac") || platform.includes("mac")) {
    const architecture = navigatorInfo.userAgentData?.architecture
    if (architecture === "arm" || architecture === "arm64") return "macos-arm64"
    if (architecture === "x86" || architecture === "x64") return "macos-x64"
  }
  return null
}

