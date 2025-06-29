'use client'

import { useState, useEffect } from 'react'

type Locale = 'de' | 'en'

interface Messages {
  [key: string]: any
}

let globalLocale: Locale = 'de'
let globalMessages: Messages = {}

export function useTranslations() {
  const [locale, setLocaleState] = useState<Locale>(globalLocale)
  const [messages, setMessages] = useState<Messages>(globalMessages)

  useEffect(() => {
    loadMessages(locale)
  }, [locale])

  const loadMessages = async (newLocale: Locale) => {
    try {
      const response = await fetch(`/api/messages?locale=${newLocale}`)
      if (response.ok) {
        const data = await response.json()
        globalMessages = data
        setMessages(data)
      } else {
        // Fallback to importing directly if API fails
        const { default: messagesData } = await import(`../content/${newLocale}/messages.json`)
        globalMessages = messagesData
        setMessages(messagesData)
      }
    } catch (error) {
      console.error('Failed to load translations:', error)
      // Fallback to German
      try {
        const { default: messagesData } = await import(`../content/de/messages.json`)
        globalMessages = messagesData
        setMessages(messagesData)
      } catch (fallbackError) {
        console.error('Failed to load fallback translations:', fallbackError)
      }
    }
  }

  // Listen auf globale Locale-Änderungen (von anderen Komponenten)
  useEffect(() => {
    const handleLocaleChange = (e: Event) => {
      const customEvent = e as CustomEvent<Locale>
      if (customEvent.detail && customEvent.detail !== locale) {
        setLocaleState(customEvent.detail)
      }
    }
    if (typeof window !== 'undefined') {
      window.addEventListener('localeChange', handleLocaleChange)
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('localeChange', handleLocaleChange)
      }
    }
  }, [locale])

  const setLocale = (newLocale: Locale) => {
    globalLocale = newLocale
    setLocaleState(newLocale)
    localStorage.setItem('locale', newLocale)

    // Andere Komponenten informieren
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent<Locale>('localeChange', { detail: newLocale }))
    }
  }

  const t = (key: string, fallback?: string): string => {
    const keys = key.split('.')
    let value = messages
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        return fallback || key
      }
    }
    
    return typeof value === 'string' ? value : fallback || key
  }

  // Initialize locale from localStorage on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLocale = localStorage.getItem('locale') as Locale
      if (savedLocale && savedLocale !== locale) {
        setLocale(savedLocale)
      }
    }
  }, [])

  return {
    locale,
    setLocale,
    t,
    messages
  }
} 