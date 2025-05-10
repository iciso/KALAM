"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useFontSize } from "@/contexts/font-size-context"

interface VirtualArabicKeyboardProps {
  onKeyPress: (key: string) => void
  onBackspace: () => void
  onClear: () => void
  disabled?: boolean
  compact?: boolean
}

export function VirtualArabicKeyboard({
  onKeyPress,
  onBackspace,
  onClear,
  disabled = false,
  compact = false,
}: VirtualArabicKeyboardProps) {
  const { fontSizeMultiplier } = useFontSize()
  const [currentLayout, setCurrentLayout] = useState<"main" | "secondary">("main")

  // Main Arabic letters
  const mainKeys = [
    ["ا", "ب", "ت", "ث", "ج", "ح", "خ", "د", "ذ"],
    ["ر", "ز", "س", "ش", "ص", "ض", "ط", "ظ", "ع"],
    ["غ", "ف", "ق", "ك", "ل", "م", "ن", "ه", "و", "ي"],
  ]

  // Secondary keys (diacritics, hamza variations, etc.)
  const secondaryKeys = [
    ["ء", "أ", "إ", "آ", "ؤ", "ئ", "ة", "ى"],
    ["َ", "ُ", "ِ", "ّ", "ْ", "ً", "ٌ", "ٍ", "ـ"],
    ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"],
  ]

  const handleKeyPress = (key: string) => {
    if (!disabled) {
      onKeyPress(key)
    }
  }

  const toggleLayout = () => {
    setCurrentLayout(currentLayout === "main" ? "secondary" : "main")
  }

  const keys = currentLayout === "main" ? mainKeys : secondaryKeys

  return (
    <div className="virtual-keyboard bg-gray-100 p-3 rounded-lg shadow-inner">
      {keys.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center mb-2 gap-1">
          {row.map((key) => (
            <Button
              key={key}
              variant="outline"
              className={`font-arabic ${compact ? "w-8 h-8 p-0" : "w-10 h-10 p-0"} text-center`}
              style={{ fontSize: `${fontSizeMultiplier * (compact ? 0.8 : 1)}em` }}
              onClick={() => handleKeyPress(key)}
              disabled={disabled}
            >
              {key}
            </Button>
          ))}
        </div>
      ))}
      <div className="flex justify-center gap-1 mt-3">
        <Button
          variant="secondary"
          className={`${compact ? "text-xs" : ""}`}
          onClick={toggleLayout}
          disabled={disabled}
        >
          {currentLayout === "main" ? "More Symbols" : "Main Letters"}
        </Button>
        <Button variant="secondary" className={`${compact ? "text-xs" : ""}`} onClick={onBackspace} disabled={disabled}>
          Backspace
        </Button>
        <Button variant="secondary" className={`${compact ? "text-xs" : ""}`} onClick={onClear} disabled={disabled}>
          Clear
        </Button>
      </div>
    </div>
  )
}
