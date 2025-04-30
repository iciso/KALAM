"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Define font size levels
export type FontSizeLevel = "small" | "medium" | "large" | "x-large"

// Font size multipliers for each level
export const fontSizeMultipliers = {
  small: 1.5,
  medium: 2.5,
  large: 3.5,
  "x-large": 5,
}

// Font size multipliers for flashcards (larger)
export const flashcardFontSizeMultipliers = {
  small: 3,
  medium: 5,
  large: 7,
  "x-large": 9,
}

type FontSizeContextType = {
  fontSizeLevel: FontSizeLevel
  increaseFontSize: () => void
  decreaseFontSize: () => void
  setFontSizeLevel: (level: FontSizeLevel) => void
  fontSizeMultiplier: number
  flashcardFontSizeMultiplier: number
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined)

export function FontSizeProvider({ children }: { children: ReactNode }) {
  // Initialize with medium or saved preference
  const [fontSizeLevel, setFontSizeLevel] = useState<FontSizeLevel>("medium")

  // Load saved preference on mount
  useEffect(() => {
    const savedFontSize = localStorage.getItem("kalam-font-size") as FontSizeLevel
    if (savedFontSize && Object.keys(fontSizeMultipliers).includes(savedFontSize)) {
      setFontSizeLevel(savedFontSize)
    }
  }, [])

  // Save preference when it changes
  useEffect(() => {
    localStorage.setItem("kalam-font-size", fontSizeLevel)

    // Apply CSS variables for font sizes
    document.documentElement.style.setProperty("--font-size-arabic", `${fontSizeMultipliers[fontSizeLevel]}em`)
    document.documentElement.style.setProperty(
      "--font-size-arabic-flashcard",
      `${flashcardFontSizeMultipliers[fontSizeLevel]}em`,
    )
  }, [fontSizeLevel])

  const increaseFontSize = () => {
    setFontSizeLevel((current) => {
      if (current === "small") return "medium"
      if (current === "medium") return "large"
      if (current === "large") return "x-large"
      return current
    })
  }

  const decreaseFontSize = () => {
    setFontSizeLevel((current) => {
      if (current === "x-large") return "large"
      if (current === "large") return "medium"
      if (current === "medium") return "small"
      return current
    })
  }

  return (
    <FontSizeContext.Provider
      value={{
        fontSizeLevel,
        increaseFontSize,
        decreaseFontSize,
        setFontSizeLevel,
        fontSizeMultiplier: fontSizeMultipliers[fontSizeLevel],
        flashcardFontSizeMultiplier: flashcardFontSizeMultipliers[fontSizeLevel],
      }}
    >
      {children}
    </FontSizeContext.Provider>
  )
}

export function useFontSize() {
  const context = useContext(FontSizeContext)
  if (context === undefined) {
    throw new Error("useFontSize must be used within a FontSizeProvider")
  }
  return context
}
