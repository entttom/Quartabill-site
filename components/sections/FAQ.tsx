'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageCircle, Download, Settings, Shield, Zap } from 'lucide-react'
import { useTranslations } from '@/lib/useTranslations'

interface FAQItem {
  id: string
  icon: React.ReactNode
}

const FAQ = () => {
  const { t } = useTranslations()
  const [openItem, setOpenItem] = useState<string | null>(null)

  const faqItems: FAQItem[] = [
    {
      id: 'what_is',
      icon: <HelpCircle className="w-5 h-5" />
    },
    {
      id: 'installation',
      icon: <Download className="w-5 h-5" />
    },
    {
      id: 'system_requirements',
      icon: <Settings className="w-5 h-5" />
    },
    {
      id: 'free',
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 'eml_sending',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'data_export',
      icon: <Zap className="w-5 h-5" />
    },
    {
      id: 'support',
      icon: <MessageCircle className="w-5 h-5" />
    }
  ]

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id)
  }

  return (
    <section id="faq" className="py-24 bg-gradient-to-br from-secondary-50 to-primary-50/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-secondary-200/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <HelpCircle className="w-4 h-4" />
            {t('faq.badge', 'Häufig gestellte Fragen')}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-secondary-900 mb-6">
            {t('faq.headline', 'Haben Sie Fragen zu QuartaBill?')}
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto leading-relaxed">
            {t('faq.subline', 'Hier finden Sie Antworten auf die wichtigsten Fragen rund um Installation, Verwendung und Features von QuartaBill.')}
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-white rounded-2xl shadow-lg shadow-secondary-200/50 border border-secondary-100 overflow-hidden">
                <motion.button
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-secondary-50 transition-colors"
                  onClick={() => toggleItem(item.id)}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-secondary-900 pr-4">
                      {t(`faq.items.${item.id}.question`, `Question ${item.id}`)}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: openItem === item.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-secondary-400" />
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openItem === item.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6 pt-0">
                        <div className="ml-16 text-secondary-600 leading-relaxed">
                          {t(`faq.items.${item.id}.answer`, `Answer ${item.id}`)}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-secondary-200/50 border border-secondary-100 max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">
              {t('faq.cta.headline', 'Weitere Fragen?')}
            </h3>
            <p className="text-secondary-600 mb-8 leading-relaxed">
              {t('faq.cta.description', 'Haben Sie eine Frage, die hier nicht beantwortet wird? Zögern Sie nicht, uns zu kontaktieren oder ein Issue auf GitHub zu erstellen.')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://github.com/entttom/QuartaBill/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-primary-700 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                {t('faq.cta.github_button', 'GitHub Issue erstellen')}
              </motion.a>
              <motion.a
                href="mailto:tom@entner.org"
                className="inline-flex items-center gap-2 bg-secondary-100 text-secondary-700 px-6 py-3 rounded-xl font-medium hover:bg-secondary-200 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-5 h-5" />
                {t('faq.cta.email_button', 'E-Mail senden')}
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ 