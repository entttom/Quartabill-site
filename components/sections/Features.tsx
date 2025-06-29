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
import { useTranslations } from '@/lib/useTranslations'

const Features = () => {
  const { t, locale } = useTranslations()
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
      screenshot_de: '/screenshots/de/QuartaBill-Screenshot-2025-06-27-2-de.png',
      screenshot_en: '/screenshots/en/QuartaBill-Screenshot-2025-06-27-2-en.png',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'invoice_generation',
      icon: FileText,
      screenshot_de: '/screenshots/de/QuartaBill-Screenshot-2025-06-27-3-de.png',
      screenshot_en: '/screenshots/en/QuartaBill-Screenshot-2025-06-27-3-en.png',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'invoice_history',
      icon: History,
      screenshot_de: '/screenshots/de/QuartaBill-Screenshot-2025-06-27-4-de.png',
      screenshot_en: '/screenshots/en/QuartaBill-Screenshot-2025-06-27-4-en.png',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'settings',
      icon: Settings,
      screenshot_de: '/screenshots/de/QuartaBill-Screenshot-2025-06-27-5-de.png',
      screenshot_en: '/screenshots/en/QuartaBill-Screenshot-2025-06-27-5-en.png',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 'backup',
      icon: Database,
      screenshot_de: '/screenshots/de/QuartaBill-Screenshot-2025-06-27-6-de.png',
      screenshot_en: '/screenshots/en/QuartaBill-Screenshot-2025-06-27-6-en.png',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      id: 'pdf_output',
      icon: FileOutput,
      screenshot_de: '/screenshots/de/Rechnung_Beispiel.png',
      screenshot_en: '/screenshots/de/Rechnung_Beispiel.png', // Assuming same for both
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
            {t('features.headline.part1', 'Alle Features im')}{' '}
            <span className="text-gradient block sm:inline">{t('features.headline.part2', 'Überblick')}</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed px-4">
            {t('features.subline_features', 'QuartaBill bietet alles, was Sie für eine professionelle Quartalsabrechnung benötigen. Entwickelt für Dienstleister mit pauschalen Quartalshonoraren.')}
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
            const title = t(`features.${feature.id}.title`, `Feature ${feature.id}`)
            const description = t(`features.${feature.id}.description`, 'Description missing')
            const screenshotSrc = locale === 'en' ? feature.screenshot_en : feature.screenshot_de
            
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
                      {title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-secondary-600 mb-6 leading-relaxed">
                    {description}
                  </p>

                  {/* Screenshot Preview */}
                  <div 
                    className="relative overflow-hidden rounded-lg bg-secondary-100 group-hover:shadow-lg transition-shadow cursor-pointer"
                    onClick={() => openLightbox(screenshotSrc, `${title} Screenshot`, title)}
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={screenshotSrc}
                        alt={`${title} Screenshot`}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover object-top"
                      />
                    </motion.div>
                    
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">
                        {t('features.enlarge_screenshot', 'Screenshot vergrößern')}
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
              {t('features.cta.headline', 'Überzeugt? Testen Sie QuartaBill kostenlos!')}
            </h3>
            <p className="text-secondary-600 mb-6">
              {t('features.cta.subline', 'Keine Registrierung erforderlich. Einfach herunterladen und sofort loslegen.')}
            </p>
            <motion.button
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('features.cta.button', 'Jetzt kostenlos herunterladen')}
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