'use client'

import React, { useEffect } from 'react'
import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import DownloadSection from '@/components/sections/Download'
import FAQ from '@/components/sections/FAQ'
import Footer from '@/components/layout/Footer'
import { useTranslations } from '@/lib/useTranslations'

export default function EnglishHome() {
  const { setLocale } = useTranslations()

  useEffect(() => {
    // Set locale to English when visiting /en
    setLocale('en')
  }, [setLocale])

  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <DownloadSection />
        <FAQ />
      </main>
      <Footer />
    </>
  )
} 