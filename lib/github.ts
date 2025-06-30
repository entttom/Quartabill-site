// GitHub API integration for QuartaBill releases
interface GitHubRelease {
  tag_name: string
  name: string
  published_at: string
  assets: Array<{
    name: string
    download_count: number
    browser_download_url: string
    size: number
  }>
}

export interface ReleaseInfo {
  version: string
  tagName: string
  publishedAt: string
  downloads: DownloadInfo[]
}

export interface DownloadInfo {
  platform: 'windows' | 'macos' | 'linux'
  type: 'installer' | 'portable' | 'dmg' | 'appimage' | 'deb'
  architecture?: 'x64' | 'arm64'
  filename: string
  url: string
  size: number
  downloadCount: number
}

const GITHUB_REPO = 'entttom/QuartaBill'
const GITHUB_API_BASE = 'https://api.github.com/repos'

// Cache für 10 Minuten
let cachedRelease: ReleaseInfo | null = null
let cacheTime: number = 0
const CACHE_DURATION = 10 * 60 * 1000 // 10 Minuten

export async function getLatestRelease(): Promise<ReleaseInfo> {
  // Cache check
  const now = Date.now()
  if (cachedRelease && (now - cacheTime) < CACHE_DURATION) {
    return cachedRelease
  }

  try {
    const response = await fetch(`${GITHUB_API_BASE}/${GITHUB_REPO}/releases/latest`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'QuartaBill-Website'
      },
      next: { revalidate: 600 } // 10 Minuten Revalidation
    })

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }

    const release: GitHubRelease = await response.json()
    
    const releaseInfo: ReleaseInfo = {
      version: release.tag_name,
      tagName: release.tag_name,
      publishedAt: release.published_at,
      downloads: parseDownloads(release.assets, release.tag_name)
    }

    // Cache update
    cachedRelease = releaseInfo
    cacheTime = now

    return releaseInfo
  } catch (error) {
    console.error('Error fetching latest release:', error)
    
    // Fallback zu hardcodierter Version
    return getFallbackRelease()
  }
}

function parseDownloads(assets: GitHubRelease['assets'], version: string): DownloadInfo[] {
  const downloads: DownloadInfo[] = []

  assets.forEach(asset => {
    const { name, browser_download_url, size, download_count } = asset
    
    // Windows Downloads
    if (name.includes('Setup') && name.endsWith('.exe')) {
      downloads.push({
        platform: 'windows',
        type: 'installer',
        architecture: 'x64',
        filename: name,
        url: browser_download_url,
        size,
        downloadCount: download_count
      })
    }
    
    // macOS Downloads
    else if (name.endsWith('.dmg')) {
      const architecture = name.includes('arm64') ? 'arm64' : 'x64'
      downloads.push({
        platform: 'macos',
        type: 'dmg',
        architecture,
        filename: name,
        url: browser_download_url,
        size,
        downloadCount: download_count
      })
    }
    
    // Linux Downloads
    else if (name.endsWith('.AppImage')) {
      downloads.push({
        platform: 'linux',
        type: 'appimage',
        architecture: 'x64',
        filename: name,
        url: browser_download_url,
        size,
        downloadCount: download_count
      })
    } else if (name.endsWith('.deb')) {
      downloads.push({
        platform: 'linux',
        type: 'deb',
        architecture: 'x64',
        filename: name,
        url: browser_download_url,
        size,
        downloadCount: download_count
      })
    }
  })

  return downloads
}

function getFallbackRelease(): ReleaseInfo {
  // Fallback für den Fall, dass GitHub API nicht verfügbar ist
  const version = 'v1.6.2'
  
  return {
    version,
    tagName: version,
    publishedAt: '2024-12-27T00:00:00Z',
    downloads: [
      {
        platform: 'windows',
        type: 'installer',
        architecture: 'x64',
        filename: `QuartaBill-Setup-${version.replace('v', '')}.exe`,
        url: `https://github.com/${GITHUB_REPO}/releases/download/${version}/QuartaBill-Setup-${version.replace('v', '')}.exe`,
        size: 125829120, // ~120 MB
        downloadCount: 0
      },
      {
        platform: 'macos',
        type: 'dmg',
        architecture: 'x64',
        filename: `QuartaBill-${version.replace('v', '')}.dmg`,
        url: `https://github.com/${GITHUB_REPO}/releases/download/${version}/QuartaBill-${version.replace('v', '')}.dmg`,
        size: 131072000, // ~125 MB
        downloadCount: 0
      },
      {
        platform: 'macos',
        type: 'dmg',
        architecture: 'arm64',
        filename: `QuartaBill-${version.replace('v', '')}-arm64.dmg`,
        url: `https://github.com/${GITHUB_REPO}/releases/download/${version}/QuartaBill-${version.replace('v', '')}-arm64.dmg`,
        size: 127926272, // ~122 MB
        downloadCount: 0
      },
      {
        platform: 'linux',
        type: 'appimage',
        architecture: 'x64',
        filename: `QuartaBill-${version.replace('v', '')}.AppImage`,
        url: `https://github.com/${GITHUB_REPO}/releases/download/${version}/QuartaBill-${version.replace('v', '')}.AppImage`,
        size: 136314880, // ~130 MB
        downloadCount: 0
      },
      {
        platform: 'linux',
        type: 'deb',
        architecture: 'x64',
        filename: `quartabill_${version.replace('v', '')}_amd64.deb`,
        url: `https://github.com/${GITHUB_REPO}/releases/download/${version}/quartabill_${version.replace('v', '')}_amd64.deb`,
        size: 131072000, // ~125 MB
        downloadCount: 0
      }
    ]
  }
}

// Utility Funktionen
export function formatFileSize(bytes: number): string {
  const sizes = ['Bytes', 'KB', 'MB', 'GB']
  if (bytes === 0) return '0 Bytes'
  const i = Math.floor(Math.log(bytes) / Math.log(1024))
  return `${Math.round(bytes / Math.pow(1024, i))} ${sizes[i]}`
}

export function formatVersionForDisplay(version: string): string {
  return version.startsWith('v') ? version : `v${version}`
} 