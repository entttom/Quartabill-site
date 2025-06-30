'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'
import { useDarkMode } from '@/lib/useDarkMode'

interface DarkModeToggleProps {
  className?: string
}

const DarkModeToggle: React.FC<DarkModeToggleProps> = ({ className = '' }) => {
  const { isDarkMode, toggleDarkMode } = useDarkMode()

  return (
    <motion.button
      onClick={toggleDarkMode}
      className={`relative p-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 
                  hover:bg-white/20 dark:bg-black/20 dark:border-white/10 dark:hover:bg-black/30 
                  transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        className="w-5 h-5 flex items-center justify-center"
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {isDarkMode ? (
          <Moon className="w-5 h-5 text-yellow-500" />
        ) : (
          <Sun className="w-5 h-5 text-yellow-500" />
        )}
      </motion.div>
    </motion.button>
  )
}

export default DarkModeToggle 