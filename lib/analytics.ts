// Matomo Analytics Utility Functions
// DSGVO-konform ohne Cookies

declare global {
  interface Window {
    _paq: any[]
  }
}

/**
 * Verfolge ein Custom Event in Matomo
 * @param category - Event-Kategorie (z.B. 'Download', 'Navigation')
 * @param action - Event-Aktion (z.B. 'Click', 'View')
 * @param name - Event-Name (optional)
 * @param value - Event-Wert (optional)
 */
export function trackEvent(
  category: string,
  action: string,
  name?: string,
  value?: number
) {
  if (typeof window !== 'undefined' && window._paq) {
    const eventData: (string | number)[] = ['trackEvent', category, action]
    
    if (name) eventData.push(name)
    if (value !== undefined) eventData.push(value)
    
    window._paq.push(eventData)
    
    console.log('📊 Matomo Event:', { category, action, name, value })
  }
}

/**
 * Verfolge einen Download
 * @param filename - Name der heruntergeladenen Datei
 * @param platform - Plattform (Windows, macOS, Linux)
 * @param type - Download-Typ (installer, portable, etc.)
 */
export function trackDownload(filename: string, platform: string, type: string) {
  trackEvent('Download', 'File', `${platform}_${type}_${filename}`)
}

/**
 * Verfolge Screenshot-Lightbox Öffnungen
 * @param screenshotName - Name des Screenshots
 * @param source - Quelle (hero, features)
 */
export function trackLightboxOpen(screenshotName: string, source: string) {
  trackEvent('Lightbox', 'Open', `${source}_${screenshotName}`)
}

/**
 * Verfolge Sprachenwechsel
 * @param fromLang - Ausgangssprache
 * @param toLang - Zielsprache
 */
export function trackLanguageSwitch(fromLang: string, toLang: string) {
  trackEvent('Language', 'Switch', `${fromLang}_to_${toLang}`)
}

/**
 * Verfolge Navigation zwischen Sektionen
 * @param fromSection - Ausgangssektion
 * @param toSection - Zielsektion
 */
export function trackNavigation(fromSection: string, toSection: string) {
  trackEvent('Navigation', 'Section', `${fromSection}_to_${toSection}`)
}

/**
 * Verfolge externe Links
 * @param url - URL des externen Links
 * @param linkText - Text des Links
 */
export function trackExternalLink(url: string, linkText: string) {
  trackEvent('External Link', 'Click', `${linkText}_${url}`)
}

/**
 * Verfolge GitHub-Repository Besuche
 */
export function trackGitHubVisit() {
  trackEvent('GitHub', 'Visit', 'Repository')
}

/**
 * Verfolge Feature-Interesse
 * @param featureName - Name des Features
 * @param action - Aktion (hover, click, view)
 */
export function trackFeatureInterest(featureName: string, action: string) {
  trackEvent('Feature Interest', action, featureName)
} 