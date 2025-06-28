'use client'

import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, ZoomOut, RotateCw, Download } from 'lucide-react'
import Image from 'next/image'

interface ImageLightboxProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  imageAlt: string
  title?: string
}

const ImageLightbox: React.FC<ImageLightboxProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageAlt,
  title
}) => {
  const [scale, setScale] = React.useState(1)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = React.useState(false)

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  // Reset zoom when opening
  useEffect(() => {
    if (isOpen) {
      setScale(1)
      setPosition({ x: 0, y: 0 })
    }
  }, [isOpen])

  const handleZoomIn = () => {
    setScale(prev => Math.min(prev + 0.5, 3))
  }

  const handleZoomOut = () => {
    setScale(prev => Math.max(prev - 0.5, 0.5))
  }

  const handleReset = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = imageSrc
    link.download = imageAlt.replace(/\s+/g, '_') + '.png'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
      >
        {/* Controls */}
        <div className="absolute top-4 right-4 flex items-center gap-2 z-10">
          <motion.button
            className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation()
              handleZoomOut()
            }}
          >
            <ZoomOut className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation()
              handleZoomIn()
            }}
          >
            <ZoomIn className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation()
              handleReset()
            }}
          >
            <RotateCw className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="p-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white hover:bg-white/20 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation()
              handleDownload()
            }}
          >
            <Download className="w-5 h-5" />
          </motion.button>

          <motion.button
            className="p-2 bg-red-500/20 backdrop-blur-md border border-red-500/40 rounded-lg text-white hover:bg-red-500/30 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </motion.button>
        </div>

        {/* Title */}
        {title && (
          <div className="absolute top-4 left-4 z-10">
            <div className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg">
              <h3 className="text-white font-medium">{title}</h3>
            </div>
          </div>
        )}

        {/* Zoom indicator */}
        <div className="absolute bottom-4 left-4 z-10">
          <div className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm">
            {Math.round(scale * 100)}%
          </div>
        </div>

        {/* Image Container */}
        <motion.div
          className="relative max-w-[90vw] max-h-[90vh] overflow-hidden rounded-lg cursor-move"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={(e) => e.stopPropagation()}
          style={{
            transform: `translate(${position.x}px, ${position.y}px)`,
          }}
        >
          <motion.div
            style={{ scale }}
            transition={{ duration: 0.2 }}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={1200}
              height={800}
              className="max-w-none w-auto h-auto max-h-[90vh] object-contain"
              draggable={false}
              priority
            />
          </motion.div>
        </motion.div>

        {/* Instructions */}
        <div className="absolute bottom-4 right-4 z-10">
          <div className="px-3 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-sm">
            <div className="text-xs opacity-75">ESC zum Schließen • Klicken zum Ziehen</div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ImageLightbox 