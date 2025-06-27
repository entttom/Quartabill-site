'use client'

import React from 'react'
import Navigation from '@/components/layout/Navigation'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import Download from '@/components/sections/Download'
import Footer from '@/components/layout/Footer'

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <Features />
        <Download />
      </main>
      <Footer />
    </>
  )
} 