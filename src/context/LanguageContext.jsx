import React, { createContext, useState, useContext, useCallback } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'hi' : 'en')
  }

  // Nested object lookup helper e.g. 'hero.title'
  const t = useCallback((key) => {
    const keys = key.split('.')
    let value = translations[language]
    for (const k of keys) {
      if (value[k] === undefined) return key
      value = value[k]
    }
    return value
  }, [language])

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
