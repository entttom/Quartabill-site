'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Download as DownloadIcon, 
  Monitor, 
  Apple, 
  Laptop,
  CheckCircle,
  Shield,
  Zap,
  Globe
} from 'lucide-react'
import Button from '@/components/ui/Button'

const Download = () => {
  const platforms = [
    {
      name: 'Windows',
      icon: Monitor,
      downloads: [
        {
          name: 'QuartaBill Setup 1.6.2.exe',
          type: 'Installer',
          size: '120 MB',
          url: 'https://github.com/entttom/QuartaBill/releases/download/v1.6.2/QuartaBill-Setup-1.6.2.exe'
        },
        {
          name: 'QuartaBill 1.6.2.exe',
          type: 'Portable',
          size: '115 MB',
          url: 'https://github.com/entttom/QuartaBill/releases/download/v1.6.2/QuartaBill-1.6.2.exe'
        }
      ],
      requirements: 'Windows 10 oder höher',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'macOS',
      icon: Apple,
      downloads: [
        {
          name: 'QuartaBill-1.6.2.dmg',
          type: 'Intel Macs',
          size: '125 MB',
          url: 'https://github.com/entttom/QuartaBill/releases/download/v1.6.2/QuartaBill-1.6.2.dmg'
        },
        {
          name: 'QuartaBill-1.6.2-arm64.dmg',
          type: 'Apple Silicon',
          size: '122 MB',
          url: 'https://github.com/entttom/QuartaBill/releases/download/v1.6.2/QuartaBill-1.6.2-arm64.dmg'
        }
      ],
      requirements: 'macOS 10.14 (Mojave) oder höher',
      color: 'from-gray-700 to-gray-800',
      badge: '✅ Signiert & Notarisiert'
    },
    {
      name: 'Linux',
      icon: Laptop,
      downloads: [
        {
          name: 'QuartaBill-1.6.2.AppImage',
          type: 'Universal',
          size: '130 MB',
          url: 'https://github.com/entttom/QuartaBill/releases/download/v1.6.2/QuartaBill-1.6.2.AppImage'
        },
        {
          name: 'quartabill_1.6.2_amd64.deb',
          type: 'Debian/Ubuntu',
          size: '125 MB',
          url: 'https://github.com/entttom/QuartaBill/releases/download/v1.6.2/quartabill_1.6.2_amd64.deb'
        }
      ],
      requirements: 'Ubuntu 18.04 oder äquivalent',
      color: 'from-orange-500 to-orange-600'
    }
  ]

  const features = [
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
  ]

  return (
    <section id="download" className="py-20 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-80 h-80 bg-primary-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-60 h-60 bg-accent-500/10 rounded-full blur-3xl"
          animate={{ 
            scale: [1.3, 1, 1.3],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 8, repeat: Infinity }}
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
          <div className="inline-flex items-center px-4 py-2 mb-6 bg-accent-500/20 text-accent-300 rounded-full text-sm font-medium">
            🚀 Aktuelle Version: v1.6.2
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Jetzt kostenlos{' '}
            <span className="bg-gradient-to-r from-accent-400 to-primary-400 bg-clip-text text-transparent">
              herunterladen
            </span>
          </h2>
          
          <p className="text-xl text-secondary-300 max-w-3xl mx-auto">
            Verfügbar für alle gängigen Betriebssysteme. 
            Keine Registrierung erforderlich - einfach herunterladen und sofort loslegen.
          </p>
        </motion.div>

        {/* Platform Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
        >
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon
            
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="glass-dark p-6 rounded-2xl h-full hover:bg-white/10 transition-all duration-300 hover:scale-105 border border-white/10">
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${platform.color} mr-4`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {platform.name}
                        </h3>
                        {platform.badge && (
                          <span className="text-xs text-accent-400 font-medium">
                            {platform.badge}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Requirements */}
                  <p className="text-secondary-300 text-sm mb-6">
                    {platform.requirements}
                  </p>

                  {/* Download Options */}
                  <div className="space-y-3">
                    {platform.downloads.map((download, downloadIndex) => (
                      <motion.div
                        key={downloadIndex}
                        whileHover={{ scale: 1.02 }}
                        className="group/download"
                      >
                        <Button
                          variant="glass"
                          className="w-full justify-between text-left p-4 h-auto"
                          href={download.url}
                          external
                        >
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-medium text-white group-hover/download:text-accent-300 transition-colors">
                                {download.type}
                              </span>
                              <span className="text-xs text-secondary-400">
                                {download.size}
                              </span>
                            </div>
                            <div className="text-xs text-secondary-400 mt-1 truncate">
                              {download.name}
                            </div>
                          </div>
                          <DownloadIcon className="w-4 h-4 text-secondary-400 group-hover/download:text-accent-300 transition-colors ml-3" />
                        </Button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="glass-dark p-6 rounded-xl hover:bg-white/5 transition-all duration-300 border border-white/5">
                  <div className="inline-flex p-3 rounded-lg bg-accent-500/20 text-accent-400 mb-4">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-secondary-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* GitHub Link */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="glass-dark p-6 rounded-xl inline-block border border-white/10">
            <p className="text-secondary-300 mb-4">
              Möchten Sie den Quellcode einsehen oder zur Entwicklung beitragen?
            </p>
            <Button
              variant="glass"
              href="https://github.com/entttom/QuartaBill"
              external
              className="text-white hover:text-accent-300"
            >
              Auf GitHub ansehen
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Download 