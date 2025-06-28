'use client'

import { useEffect } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    _paq: any[]
  }
}

const MatomoTracking = () => {
  useEffect(() => {
    // Matomo Tracking Setup - DSGVO-konform ohne Cookies
    window._paq = window._paq || []
    
    // Wichtig: Keine Cookies setzen (DSGVO-konform)
    window._paq.push(['disableCookies'])
    
    // Standard Tracking
    window._paq.push(['trackPageView'])
    window._paq.push(['enableLinkTracking'])
    
    // Tracker Konfiguration
    const trackerUrl = '//track.entner.org/'
    window._paq.push(['setTrackerUrl', trackerUrl + 'matomo.php'])
    window._paq.push(['setSiteId', '6'])

    // Optional: Respektiere Do Not Track Header
    window._paq.push(['setDoNotTrack', true])
    
    // Optional: Anonymisiere IP-Adressen
    window._paq.push(['anonymizeIp'])
  }, [])

  return (
    <>
      {/* Matomo Analytics Script - Cookieless & DSGVO-konform */}
      <Script
        id="matomo-analytics"
        strategy="afterInteractive"
        src="//track.entner.org/matomo.js"
        onLoad={() => {
          console.log('📊 Matomo Analytics geladen (cookieless)')
        }}
      />
    </>
  )
}

export default MatomoTracking 