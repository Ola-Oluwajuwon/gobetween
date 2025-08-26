"use client"

import React, { createContext, useContext, useState, useEffect } from 'react'

type ColorScheme = 'purple' | 'blue' | 'green' | 'orange'

interface ColorSchemeContextType {
  colorScheme: ColorScheme
  setColorScheme: (scheme: ColorScheme) => void
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(undefined)

const colorSchemes = {
  purple: {
    primary: 'hsl(262.1 83.3% 57.8%)',
    primaryForeground: 'hsl(210 40% 98%)',
    ring: 'hsl(262.1 83.3% 57.8%)',
  },
  blue: {
    primary: 'hsl(221.2 83.2% 53.3%)',
    primaryForeground: 'hsl(210 40% 98%)',
    ring: 'hsl(221.2 83.2% 53.3%)',
  },
  green: {
    primary: 'hsl(142.1 76.2% 36.3%)',
    primaryForeground: 'hsl(355.7 100% 97.3%)',
    ring: 'hsl(142.1 76.2% 36.3%)',
  },
  orange: {
    primary: 'hsl(24.6 95% 53.1%)',
    primaryForeground: 'hsl(60 9.1% 97.8%)',
    ring: 'hsl(24.6 95% 53.1%)',
  },
}

export function ColorSchemeProvider({ children }: { children: React.ReactNode }) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('purple')

  useEffect(() => {
    const savedScheme = localStorage.getItem('colorScheme') as ColorScheme
    if (savedScheme && Object.keys(colorSchemes).includes(savedScheme)) {
      setColorScheme(savedScheme)
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement
    const scheme = colorSchemes[colorScheme]
    
    root.style.setProperty('--primary', scheme.primary)
    root.style.setProperty('--primary-foreground', scheme.primaryForeground)
    root.style.setProperty('--ring', scheme.ring)
    
    localStorage.setItem('colorScheme', colorScheme)
  }, [colorScheme])

  const handleSetColorScheme = (scheme: ColorScheme) => {
    setColorScheme(scheme)
  }

  return (
    <ColorSchemeContext.Provider value={{ colorScheme, setColorScheme: handleSetColorScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  )
}

export function useColorScheme() {
  const context = useContext(ColorSchemeContext)
  if (context === undefined) {
    throw new Error('useColorScheme must be used within a ColorSchemeProvider')
  }
  return context
}
