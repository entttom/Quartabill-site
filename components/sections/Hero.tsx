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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(59,130,246,0.08)_0%,transparent_50%),radial-gradient(circle_at_70%_80%,rgba(16,185,129,0.05)_0%,transparent_50%)] opacity-70" />
      
      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      />
      
      {/* Floating Elements - More Subtle */}
      <motion.div
        className="absolute top-32 left-8 w-24 h-24 bg-primary-400/10 rounded-full blur-2xl"
        animate={{ y: [0, -15, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-32 right-8 w-32 h-32 bg-accent-400/10 rounded-full blur-2xl"
        animate={{ y: [0, 15, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >


            {/* Headline */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-900 mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Professionelle{' '}
              <span className="text-gradient block sm:inline">Quartalsabrechnungen</span>{' '}
              <span className="block sm:inline">leicht gemacht</span>
            </motion.h1>

            {/* Subline */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-secondary-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Vereinfachen Sie Ihre Quartalsabrechnung mit QuartaBill - der Desktop-App 
              für pauschale Abrechnungen. Ideal für Arbeitsmediziner, Beratungsunternehmen und 
              andere Dienstleister. Automatische PDF-Generierung, E-Mail-Integration und Cloud-Sync inklusive.
            </motion.p>

            {/* Features Preview */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8 text-sm text-secondary-600 max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0" />
                <span className="text-xs sm:text-sm">Multi-Platform Support</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0" />
                <span className="text-xs sm:text-sm">Cloud-Sync kompatibel</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0" />
                <span className="text-xs sm:text-sm">Vollständig signiert</span>
              </div>
              <div className="flex items-center gap-2 justify-center sm:justify-start">
                <div className="w-2 h-2 bg-accent-500 rounded-full flex-shrink-0" />
                <span className="text-xs sm:text-sm">Kostenlos & Open Source</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
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
            className="relative order-1 lg:order-2 mt-16 sm:mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Mockup Frame */}
            <div className="relative max-w-sm sm:max-w-md lg:max-w-2xl mx-auto">
              {/* Floating Screenshot */}
              <motion.div
                className="screenshot-container"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
              >
                <Image
                  src="/screenshots/de/QuartaBill-Screenshot-2025-06-27-1-de.png"
                  alt="QuartaBill Hauptbildschirm"
                  width={800}
                  height={600}
                  className="w-full h-auto rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl"
                  priority
                />
              </motion.div>

              {/* Floating Elements around Screenshot - Hidden on mobile */}
              <motion.div
                className="hidden sm:block absolute -top-3 sm:-top-4 -left-3 sm:-left-4 w-6 h-6 sm:w-8 sm:h-8 bg-primary-500 rounded-lg opacity-80"
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
                className="hidden sm:block absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-5 h-5 sm:w-6 sm:h-6 bg-accent-500 rounded-full opacity-80"
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