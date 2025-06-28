'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Heart } from 'lucide-react'

const Footer = () => {
  const links = [
    {
      category: 'Links',
      items: [
        { name: 'GitHub Repository', href: 'https://github.com/entttom/QuartaBill', external: true },
        { name: 'Releases', href: 'https://github.com/entttom/QuartaBill/releases', external: true },
        { name: 'Issues', href: 'https://github.com/entttom/QuartaBill/issues', external: true },
        { name: 'Dokumentation', href: 'https://github.com/entttom/QuartaBill#readme', external: true }
      ]
    },
    {
      category: 'Entwickler',
      items: [
        { name: 'Dr. Thomas Entner', href: 'https://github.com/entttom', external: true },
        { name: 'Kontakt', href: 'mailto:tom@entner.org', external: true },
        { name: 'QuartaBill App', href: 'https://github.com/entttom/QuartaBill', external: true },
        { name: 'Entner.org', href: 'https://Entner.org', external: true },
        { name: 'Arbeitsmediziner Wien', href: 'https://arbeitsmediziner.Wien', external: true }
      ]
    },
    {
      category: 'Rechtliches',
      items: [
        { name: 'Changelog', href: 'https://github.com/entttom/QuartaBill/blob/main/CHANGELOG.md', external: true }
      ]
    }
  ]

  return (
    <footer className="bg-secondary-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/3 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-2xl font-bold text-primary-400 mb-4">
                  QuartaBill
                </div>
                <p className="text-secondary-300 mb-6 leading-relaxed">
                              Professionelle Quartalsabrechnungen für pauschale Quartalshonorare.
            Entwickelt für Dienstleister mit regelmäßigen Abrechnungen.
                </p>
                
                {/* Tech Stack */}
                <div className="flex items-center gap-2 text-sm text-secondary-400">
                  <span>Entwickelt mit</span>
                  <Heart className="w-4 h-4 text-red-400" />
                  <span>und Electron + React</span>
                </div>
              </motion.div>
            </div>

            {/* Links Sections */}
            {links.map((section, index) => (
              <motion.div
                key={section.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-white mb-4">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.name}>
                      <motion.a
                        href={item.href}
                        target={item.external ? '_blank' : undefined}
                        rel={item.external ? 'noopener noreferrer' : undefined}
                        className="text-secondary-300 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                        whileHover={{ x: 5 }}
                      >
                        {item.name}
                        {item.external && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-secondary-700 py-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-secondary-400 text-sm">
              © 2024 Dr. Thomas Entner. Alle Rechte vorbehalten.
            </div>
            
            <div className="flex items-center gap-6">
              <motion.a
                href="https://github.com/entttom/QuartaBill"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5" />
              </motion.a>
              
              <div className="text-secondary-500 text-sm">
                Version 1.6.2
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer 