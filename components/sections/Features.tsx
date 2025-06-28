'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  Users, 
  FileText, 
  History, 
  Settings, 
  Database, 
  FileOutput 
} from 'lucide-react'
import ImageLightbox from '@/components/ui/ImageLightbox'
import { trackLightboxOpen } from '@/lib/analytics'

const Features = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '', title: '' })

  const openLightbox = (src: string, alt: string, title: string) => {
    setLightboxImage({ src, alt, title })
    setLightboxOpen(true)
    
    // Analytics Event für Lightbox-Öffnung
    trackLightboxOpen(title, 'features')
  }

  const features = [
    {
      id: 'customer_management',
      icon: Users,
      title: 'Kundenverwaltung',
      description: 'Umfassende Verwaltung von Kundendaten mit flexiblen Leistungspositionen, Drag-and-Drop Sortierung und deutschen Steuersätzen.',
      screenshot: '/screenshots/de/QuartaBill-Screenshot-2025-06-27-2-de.png',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'invoice_generation',
      icon: FileText,
      title: 'Rechnungserstellung',
      description: 'Batch-Generierung aller Kunden eines Quartals mit anpassbaren Rechnungsnummern und automatischer Steuerberechnung.',
      screenshot: '/screenshots/de/QuartaBill-Screenshot-2025-06-27-3-de.png',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'invoice_history',
      icon: History,
      title: 'Rechnungshistorie',
      description: 'Übersichtliche Historie aller erstellten Rechnungen mit intelligenter Pagination und Suchfunktion.',
      screenshot: '/screenshots/de/QuartaBill-Screenshot-2025-06-27-4-de.png',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'settings',
      icon: Settings,
      title: 'Einstellungen',
      description: 'Vollständige Konfiguration von Firmendaten, Pfaden, Logos und personalisierten E-Mail-Templates.',
      screenshot: '/screenshots/de/QuartaBill-Screenshot-2025-06-27-5-de.png',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'backup',
      icon: Database,
      title: 'Backup & Restore',
      description: 'Automatische Backups mit Wiederherstellungsfunktion für maximale Datensicherheit.',
      screenshot: '/screenshots/de/QuartaBill-Screenshot-2025-06-27-6-de.png',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'pdf_output',
      icon: FileOutput,
      title: 'PDF-Ausgabe',
      description: 'Professionelle PDF-Rechnungen mit modernem Design, Logo-Integration und deutscher Formatierung.',
      screenshot: '/screenshots/de/Rechnung_Beispiel.png',
      color: 'from-emerald-500 to-green-600'
    }
  ]

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
    <section id="features" className="py-16 sm:py-20 bg-secondary-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-72 sm:h-72 bg-primary-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-accent-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary-900 mb-4 sm:mb-6 leading-tight">
            Alle Features im{' '}
            <span className="text-gradient block sm:inline">Überblick</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed px-4">
            QuartaBill bietet alles, was Sie für eine professionelle Quartalsabrechnung benötigen. 
            Entwickelt für Dienstleister mit pauschalen Quartalshonoraren.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            
            return (
              <motion.div
                key={feature.id}
                variants={itemVariants}
                className="group"
              >
                <div className="glass p-6 rounded-2xl h-full hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/30">
                  {/* Icon Header */}
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} mr-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-secondary-900">
                      {feature.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Screenshot Preview */}
                  <div 
                    className="relative overflow-hidden rounded-lg bg-secondary-100 group-hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => openLightbox(feature.screenshot, `${feature.title} Screenshot`, feature.title)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={feature.screenshot}
                        alt={`${feature.title} Screenshot`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover object-top"
                      />
                    </motion.div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">
                        Screenshot vergrößern
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <div className="glass p-8 rounded-2xl inline-block border border-white/30">
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              Überzeugt? Testen Sie QuartaBill kostenlos!
            </h3>
            <p className="text-secondary-600 mb-6">
              Keine Registrierung erforderlich. Einfach herunterladen und sofort loslegen.
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Jetzt kostenlos herunterladen
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        imageSrc={lightboxImage.src}
        imageAlt={lightboxImage.alt}
        title={lightboxImage.title}
      />
    </section>
  )
}

export default Features 