'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Monitor, Apple, Laptop, Shield, Zap, Globe, CheckCircle, Github } from 'lucide-react'
import { getLatestRelease, formatFileSize, formatVersionForDisplay, type ReleaseInfo, type DownloadInfo } from '@/lib/github'
import { useTranslations } from '@/lib/useTranslations'
import { trackDownload, trackGitHubVisit } from '@/lib/analytics'

const DownloadSection = () => {
  const { t } = useTranslations()
  const [releaseInfo, setReleaseInfo] = useState<ReleaseInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchReleaseInfo() {
      try {
        const release = await getLatestRelease()
        setReleaseInfo(release)
      } catch (err) {
        setError('Fehler beim Laden der Release-Informationen')
        console.error('Error fetching release info:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchReleaseInfo()
  }, [])

  const getDownloadsForPlatform = (platform: 'windows' | 'macos' | 'linux'): DownloadInfo[] => {
    if (!releaseInfo) return []
    return releaseInfo.downloads.filter(d => d.platform === platform)
  }

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'windows': return Monitor
      case 'macos': return Apple
      case 'linux': return Laptop
      default: return Download
    }
  }

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'windows': return 'from-blue-500 to-blue-600'
      case 'macos': return 'from-gray-700 to-gray-800'
      case 'linux': return 'from-orange-500 to-orange-600'
      default: return 'from-blue-500 to-blue-600'
    }
  }

  const getPlatformName = (platform: string) => {
    switch (platform) {
      case 'windows': return 'Windows'
      case 'macos': return 'macOS'
      case 'linux': return 'Linux'
      default: return platform
    }
  }

  const getTypeName = (type: string, architecture?: string) => {
    switch (type) {
      case 'installer': return 'Installer'
      case 'portable': return 'Portable'
      case 'dmg': return architecture === 'arm64' ? 'Apple Silicon' : 'Intel Macs'
      case 'appimage': return 'Universal'
      case 'deb': return 'Debian/Ubuntu'
      default: return type
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-60 h-60 bg-accent-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {loading ? (
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-accent-500/20 text-accent-300 rounded-full text-sm font-medium">
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-accent-300 border-t-transparent mr-2"></div>
              Lade aktuelle Version...
            </div>
          ) : error ? (
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-red-500/20 text-red-300 rounded-full text-sm font-medium">
              ⚠️ {error}
            </div>
          ) : (
            <div className="inline-flex items-center px-4 py-2 mb-6 bg-accent-500/20 text-accent-300 rounded-full text-sm font-medium">
              🚀 {t('download.version', `Aktuelle Version: ${formatVersionForDisplay(releaseInfo?.version || 'v1.6.2')}`)}
            </div>
          )}

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Jetzt kostenlos{' '}
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              herunterladen
            </span>
          </h2>
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Verfügbar für alle gängigen Betriebssysteme. Keine Registrierung erforderlich - einfach herunterladen und sofort loslegen.
          </p>
        </motion.div>

        {/* Download Cards */}
        {!loading && !error && releaseInfo && (
          <motion.div
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {['windows', 'macos', 'linux'].map((platform) => {
              const downloads = getDownloadsForPlatform(platform as any)
              const PlatformIcon = getPlatformIcon(platform)
              
              return (
                <motion.div
                  key={platform}
                  className="group"
                  variants={itemVariants}
                >
                  <div className="glass-dark p-6 rounded-2xl h-full hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
                    {/* Platform Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${getPlatformColor(platform)} mr-4`}>
                          <PlatformIcon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">
                            {getPlatformName(platform)}
                          </h3>
                          {platform === 'macos' && (
                            <span className="text-xs text-accent-400 font-medium">
                              ✅ Signiert & Notarisiert
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* System Requirements */}
                    <p className="text-secondary-300 text-sm mb-6">
                      {platform === 'windows' && 'Windows 10 oder höher'}
                      {platform === 'macos' && 'macOS 10.14 (Mojave) oder höher'}
                      {platform === 'linux' && 'Ubuntu 18.04 oder äquivalent'}
                    </p>

                    {/* Download Links */}
                    <div className="space-y-3">
                      {downloads.map((download, index) => (
                        <div key={index} className="group/download">
                          <a
                            href={download.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between w-full p-4 glass rounded-lg hover:bg-white/30 transition-all duration-200 group-hover/download:scale-105"
                            onClick={() => trackDownload(download.filename, platform, download.type)}
                          >
                            <div className="flex-1">
                              <div className="flex items-center justify-between">
                                <span className="font-medium text-white group-hover/download:text-accent-300 transition-colors">
                                  {getTypeName(download.type, download.architecture)}
                                </span>
                                <span className="text-xs text-secondary-400">
                                  {formatFileSize(download.size)}
                                </span>
                              </div>
                              <div className="text-xs text-secondary-400 mt-1 truncate">
                                {download.filename}
                              </div>
                            </div>
                            <Download className="w-4 h-4 text-secondary-400 group-hover/download:text-accent-300 transition-colors ml-3" />
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        )}

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {[
            {
              icon: Shield,
              title: 'Vollständig signiert',
              description: 'Alle Downloads sind digital signiert und von Antivirus-Software erkannt.'
            },
            {
              icon: Zap,
              title: 'Sofort einsatzbereit',
              description: 'Keine Registrierung oder Installation zusätzlicher Software erforderlich.'
            },
            {
              icon: Globe,
              title: 'Offline verfügbar',
              description: 'Alle Daten bleiben lokal auf Ihrem Gerät. Keine Internetverbindung erforderlich.'
            },
            {
              icon: CheckCircle,
              title: 'Kostenlos & Open Source',
              description: 'QuartaBill ist komplett kostenlos und der Quellcode ist auf GitHub verfügbar.'
            }
          ].map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="glass-dark p-6 rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/5">
                  <div className="inline-flex p-3 rounded-lg bg-accent-500/20 text-accent-400 mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                  <p className="text-sm text-secondary-300">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="glass-dark p-6 rounded-xl inline-block border border-white/10">
            <p className="text-secondary-300 mb-4">
              Möchten Sie den Quellcode einsehen oder zur Entwicklung beitragen?
            </p>
            <a
              href="https://github.com/entttom/QuartaBill"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-glass text-white hover:text-accent-300"
              onClick={trackGitHubVisit}
            >
              <Github className="w-5 h-5 mr-2" />
              Auf GitHub ansehen
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default DownloadSection 