import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import MatomoTracking from '@/components/analytics/MatomoTracking'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'QuartaBill - Automate Quarterly Billing',
  description: 'Automate your quarterly billing with QuartaBill. Intelligent, recurring, efficient. Perfect for occupational physicians, consulting companies, and service providers. Fully automated PDF generation, email delivery, and cloud sync. Free for Windows, macOS, and Linux.',
  keywords: [
    'QuartaBill',
    'Quarterly billing automation',
    'Flat-rate fees',
    'Automatic invoicing',
    'Desktop app', 
    'PDF invoice',
    'Customer management',
    'Billing software',
    'Billing Automation',
    'Recurring invoices',
    'Occupational physicians',
    'Consulting companies',
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
    canonical: '/en',
    languages: {
      'de-DE': '/',
      'en-US': '/en',
    },
  },
  openGraph: {
    title: 'QuartaBill - Automate Quarterly Billing',
    description: 'Automate your quarterly billing with QuartaBill. Intelligent, recurring, efficient. Fully automated PDF generation, email delivery, and cloud sync.',
    url: 'https://quartabill.com/en',
    siteName: 'QuartaBill',
    images: [
      {
        url: '/screenshots/en/QuartaBill-Screenshot-2025-06-27-1-en.png',
        width: 1200,
        height: 630,
        alt: 'QuartaBill - Main Screen',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuartaBill - Automate Quarterly Billing',
    description: 'Automate your quarterly billing with QuartaBill. Intelligent, recurring, efficient.',
    images: ['/screenshots/en/QuartaBill-Screenshot-2025-06-27-1-en.png'],
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

export default function EnglishRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-secondary-50 text-secondary-900 dark:bg-secondary-900 dark:text-secondary-100`}>
        {children}
        <MatomoTracking />
      </body>
    </html>
  )
} 