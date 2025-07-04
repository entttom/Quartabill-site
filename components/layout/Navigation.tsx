'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Github, Download } from 'lucide-react'
import Image from 'next/image'
import Button from '@/components/ui/Button'
import DarkModeToggle from '@/components/ui/DarkModeToggle'
import { useTranslations } from '@/lib/useTranslations'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { locale, setLocale, t } = useTranslations()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: t('nav.features', 'Features'), href: '#features' },
    { name: t('nav.screenshots', 'Screenshots'), href: '#features' },
    { name: t('nav.download', 'Download'), href: '#download' },
    { name: t('nav.faq', 'FAQ'), href: '#faq' },
    { name: t('nav.github', 'GitHub'), href: 'https://github.com/entttom/QuartaBill', external: true }
  ]

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      element?.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.open(href, '_blank')
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || isOpen
          ? 'glass backdrop-blur-xl border-b border-white/20 dark:border-white/10' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="/logo.png"
              alt="QuartaBill Logo"
              width={40}
              height={40}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <div className="text-xl sm:text-2xl font-bold text-primary-600 dark:text-primary-400">
              QuartaBill
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-secondary-700 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-colors font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.button>
            ))}
            
            {/* Language Switcher */}
            <div className="flex items-center gap-2 px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg dark:bg-black/20 dark:border-white/10">
              <motion.button
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                  locale === 'de' 
                    ? 'text-primary-600 bg-primary-100 dark:bg-primary-900/30' 
                    : 'text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLocale('de')}
              >
                DE
              </motion.button>
              <motion.button
                className={`text-sm font-medium px-2 py-1 rounded transition-colors ${
                  locale === 'en' 
                    ? 'text-primary-600 bg-primary-100 dark:bg-primary-900/30' 
                    : 'text-secondary-500 hover:text-secondary-700 dark:text-secondary-400 dark:hover:text-secondary-300'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setLocale('en')}
              >
                EN
              </motion.button>
            </div>
            
            {/* Dark Mode Toggle */}
            <DarkModeToggle />
            
            <Button
              variant="primary"
              size="sm"
              onClick={() => scrollToSection('#download')}
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              {t('nav.download', 'Download')}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 text-secondary-700 dark:text-secondary-300"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden glass backdrop-blur-xl border-t border-white/20"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-6 py-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-left text-secondary-700 hover:text-primary-600 dark:text-secondary-300 dark:hover:text-primary-400 transition-colors font-medium py-2"
                    whileHover={{ x: 10 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
                
                {/* Mobile Language Switcher */}
                <div className="py-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-secondary-600 font-medium dark:text-secondary-400">
                      {locale === 'de' ? 'Sprache:' : 'Language:'}
                    </span>
                    <div className="flex items-center gap-2">
                      <motion.button
                        className={`text-sm font-medium px-3 py-1 rounded transition-colors ${
                          locale === 'de' 
                            ? 'text-primary-600 bg-primary-100 dark:bg-primary-900/30' 
                            : 'text-secondary-500 hover:text-secondary-700 border border-secondary-200 dark:text-secondary-400 dark:hover:text-secondary-300 dark:border-secondary-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setLocale('de')}
                      >
                        Deutsch
                      </motion.button>
                      <motion.button
                        className={`text-sm font-medium px-3 py-1 rounded transition-colors ${
                          locale === 'en' 
                            ? 'text-primary-600 bg-primary-100 dark:bg-primary-900/30' 
                            : 'text-secondary-500 hover:text-secondary-700 border border-secondary-200 dark:text-secondary-400 dark:hover:text-secondary-300 dark:border-secondary-600'
                        }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setLocale('en')}
                      >
                        English
                      </motion.button>
                    </div>
                  </div>
                </div>
                
                {/* Mobile Dark Mode Toggle */}
                <div className="py-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-secondary-600 font-medium dark:text-secondary-400">
                      {locale === 'de' ? 'Design:' : 'Theme:'}
                    </span>
                    <DarkModeToggle />
                  </div>
                </div>
                
                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => scrollToSection('#download')}
                  className="flex items-center gap-2 w-fit"
                >
                  <Download className="w-4 h-4" />
                  {t('nav.download', 'Download')}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation 