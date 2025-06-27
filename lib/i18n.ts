// Locale configuration for QuartaBill Website
export const locales = ['de', 'en'] as const;
export const defaultLocale = 'de' as const;

export type Locale = (typeof locales)[number];

// Messages for different locales
export const messages = {
  de: {
    hero: {
      headline: "Professionelle Quartalsabrechnungen für Arbeitsmediziner",
      subline: "Vereinfachen Sie Ihre Abrechnung mit QuartaBill - der Desktop-App, die speziell für Arbeitsmediziner entwickelt wurde. Automatische PDF-Generierung, E-Mail-Integration und Cloud-Sync inklusive.",
      cta_primary: "Kostenlos Download",
      cta_secondary: "Screenshots ansehen",
      cta_tertiary: "GitHub Repository"
    }
  },
  en: {
    hero: {
      headline: "Professional Quarterly Billing for Occupational Physicians",
      subline: "Streamline your billing process with QuartaBill - the desktop app designed specifically for occupational physicians. Automatic PDF generation, email integration, and cloud sync included.",
      cta_primary: "Free Download",
      cta_secondary: "View Screenshots", 
      cta_tertiary: "GitHub Repository"
    }
  }
}; 