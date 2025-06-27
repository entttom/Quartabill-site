'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Eye, Github } from 'lucide-react'
import Button from '@/components/ui/Button'

const Hero = () => {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-50 via-white to-primary-50">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 mesh-gradient opacity-30" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-40 h-40 bg-accent-200/30 rounded-full blur-xl"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center px-4 py-2 mb-6 bg-primary-100 text-primary-700 rounded-full text-sm font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              🏥 Speziell für Arbeitsmediziner
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Professionelle{' '}
              <span className="text-gradient">Quartalsabrechnungen</span>{' '}
              für Arbeitsmediziner
            </motion.h1>

            {/* Subline */}
            <motion.p
              className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              Vereinfachen Sie Ihre Abrechnung mit QuartaBill - der Desktop-App, 
              die speziell für Arbeitsmediziner entwickelt wurde. Automatische PDF-Generierung, 
              E-Mail-Integration und Cloud-Sync inklusive.
            </motion.p>

            {/* Features Preview */}
            <motion.div
              className="grid grid-cols-2 gap-4 mb-8 text-sm text-secondary-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                Multi-Platform Support
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                Cloud-Sync kompatibel
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                Vollständig signiert
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent-500 rounded-full" />
                Kostenlos & Open Source
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button
                variant="primary"
                size="lg"
                href="#download"
                className="flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Kostenlos Download
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                onClick={scrollToFeatures}
                className="flex items-center gap-2"
              >
                <Eye className="w-5 h-5" />
                Screenshots ansehen
              </Button>
              
              <Button
                variant="glass"
                size="lg"
                href="https://github.com/entttom/QuartaBill"
                external
                className="flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                GitHub Repository
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Side - Screenshot */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mockup Frame */}
            <div className="relative max-w-2xl mx-auto">
              {/* Floating Screenshot */}
              <motion.div
                className="screenshot-container"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Image
                  src="/screenshots/de/QuartaBill-Screenshot-2025-06-27-1-de.png"
                  alt="QuartaBill Hauptbildschirm"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-xl shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating Elements around Screenshot */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-primary-500 rounded-lg opacity-80"
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.1, 1] 
                }}
                transition={{ 
                  duration: 10, 
                  repeat: Infinity,
                  rotate: { duration: 20 }
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-accent-500 rounded-full opacity-80"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 4, 
                  repeat: Infinity 
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <button
          onClick={scrollToFeatures}
          className="flex flex-col items-center text-secondary-400 hover:text-secondary-600 transition-colors"
        >
          <span className="text-sm mb-2">Entdecken Sie mehr</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  )
}

export default Hero 