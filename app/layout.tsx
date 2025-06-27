import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuartaBill - Professionelle Quartalsabrechnungen für Arbeitsmediziner',
  description: 'Desktop-App für Arbeitsmediziner zur effizienten Quartalsabrechnung. Automatische PDF-Generierung, E-Mail-Integration und Cloud-Sync. Kostenlos für Windows, macOS und Linux.',
  keywords: [
    'QuartaBill',
    'Quartalsabrechnung',
    'Arbeitsmediziner',
    'Desktop-App', 
    'PDF-Rechnung',
    'Kundenverwaltung',
    'Medizin-Software',
    'Dr. Thomas Entner'
  ],
  authors: [{ name: 'Dr. Thomas Entner', url: 'https://github.com/entttom' }],
  creator: 'Dr. Thomas Entner',
  publisher: 'Dr. Thomas Entner',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://quartabill.com'),
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/de',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'QuartaBill - Professionelle Quartalsabrechnungen für Arbeitsmediziner',
    description: 'Desktop-App für Arbeitsmediziner zur effizienten Quartalsabrechnung. Automatische PDF-Generierung, E-Mail-Integration und Cloud-Sync.',
    url: 'https://quartabill.com',
    siteName: 'QuartaBill',
    images: [
      {
        url: '/screenshots/de/QuartaBill-Screenshot-2025-06-27-1-de.png',
        width: 1200,
        height: 630,
        alt: 'QuartaBill - Hauptbildschirm',
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuartaBill - Professionelle Quartalsabrechnungen für Arbeitsmediziner',
    description: 'Desktop-App für Arbeitsmediziner zur effizienten Quartalsabrechnung.',
    images: ['/screenshots/de/QuartaBill-Screenshot-2025-06-27-1-de.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 