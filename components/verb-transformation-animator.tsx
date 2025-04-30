"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { type ConjugationForm, type VerbRoot, Tense } from "@/types/conjugation"
import { Play, Pause, RotateCcw, ChevronRight } from "lucide-react"

interface VerbTransformationAnimatorProps {
  root: VerbRoot
  form: ConjugationForm
  tense: Tense
}

export function VerbTransformationAnimator({ root, form, tense }: VerbTransformationAnimatorProps) {
  const [animationStep, setAnimationStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(1000) // milliseconds per step
  const [autoPlayTimer, setAutoPlayTimer] = useState<NodeJS.Timeout | null>(null)

  // Analyze the verb to determine prefixes, root letters, and suffixes
  const analyzeVerbForm = () => {
    const verbLetters = form.arabicText.split("")
    const rootLetters = root.letters.split("")

    let prefix: string[] = []
    let suffix: string[] = []
    let rootPositions: number[] = []

    // For past tense, we have a simpler pattern to detect
    if (tense === Tense.Past) {
      // For third person masculine singular (base form), there's no prefix or suffix
      if (form.person === "third" && form.gender === "masculine" && form.number === "singular") {
        rootPositions = [0, 1, 2] // All three letters are root letters
      }
      // For third person feminine singular, there's a suffix ت
      else if (form.person === "third" && form.gender === "feminine" && form.number === "singular") {
        rootPositions = [0, 1, 2] // First three letters are root letters
        suffix = verbLetters.slice(3) // The rest is suffix
      }
      // For third person dual/plural, there are suffixes
      else if (form.person === "third" && form.number !== "singular") {
        rootPositions = [0, 1, 2] // First three letters are root letters
        suffix = verbLetters.slice(3) // The rest is suffix
      }
      // For second person, there's typically a prefix ت and possibly suffixes
      else if (form.person === "second") {
        prefix = verbLetters.slice(0, 1) // First letter is prefix
        rootPositions = [1, 2, 3] // Next three letters are root letters
        suffix = verbLetters.slice(4) // The rest is suffix
      }
      // For first person singular, there's a prefix أ
      else if (form.person === "first" && form.number === "singular") {
        prefix = verbLetters.slice(0, 1) // First letter is prefix
        rootPositions = [1, 2, 3] // Next three letters are root letters
      }
      // For first person plural, there's a prefix ن
      else if (form.person === "first" && form.number === "plural") {
        prefix = verbLetters.slice(0, 1) // First letter is prefix
        rootPositions = [1, 2, 3] // Next three letters are root letters
        suffix = verbLetters.slice(4) // The rest is suffix
      }
    }

    return {
      prefix,
      rootLetters: rootPositions.map((i) => verbLetters[i]),
      suffix,
      verbLetters,
      rootPositions,
    }
  }

  const analysis = analyzeVerbForm()

  // Define the animation steps
  const totalSteps = 3 // Root -> Add Prefix -> Add Suffix

  // Get the current state of the animation
  const getCurrentAnimationState = () => {
    switch (animationStep) {
      case 0: // Root only
        return {
          letters: root.letters.split(""),
          description: "Start with the root letters",
          showPrefix: false,
          showRoot: true,
          showSuffix: false,
        }
      case 1: // Add prefix if any
        return {
          letters:
            analysis.prefix.length > 0 ? [...analysis.prefix, ...root.letters.split("")] : root.letters.split(""),
          description:
            analysis.prefix.length > 0
              ? `Add the prefix ${analysis.prefix.join("")}`
              : "No prefix needed for this form",
          showPrefix: true,
          showRoot: true,
          showSuffix: false,
        }
      case 2: // Add suffix if any
        return {
          letters: form.arabicText.split(""),
          description:
            analysis.suffix.length > 0
              ? `Add the suffix ${analysis.suffix.join("")}`
              : "No suffix needed for this form",
          showPrefix: true,
          showRoot: true,
          showSuffix: true,
        }
      default:
        return {
          letters: form.arabicText.split(""),
          description: "Complete conjugated form",
          showPrefix: true,
          showRoot: true,
          showSuffix: true,
        }
    }
  }

  const currentState = getCurrentAnimationState()

  // Handle play/pause
  const togglePlayPause = () => {
    if (isPlaying) {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer)
        setAutoPlayTimer(null)
      }
    } else {
      const timer = setInterval(() => {
        setAnimationStep((prev) => {
          const nextStep = prev + 1
          if (nextStep >= totalSteps) {
            clearInterval(timer)
            setIsPlaying(false)
            return prev
          }
          return nextStep
        })
      }, animationSpeed)
      setAutoPlayTimer(timer)
    }
    setIsPlaying(!isPlaying)
  }

  // Handle reset
  const resetAnimation = () => {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer)
      setAutoPlayTimer(null)
    }
    setAnimationStep(0)
    setIsPlaying(false)
  }

  // Handle manual step forward
  const stepForward = () => {
    if (animationStep < totalSteps - 1) {
      setAnimationStep(animationStep + 1)
    }
  }

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer)
      }
    }
  }, [autoPlayTimer])

  // Render the letters with appropriate styling
  const renderLetters = () => {
    const state = getCurrentAnimationState()

    // For RTL languages like Arabic, we need to reverse the display order
    // but keep the logical order for processing
    const displayLetters = [...state.letters].reverse()

    return displayLetters.map((letter, index) => {
      // We need to map the reversed index back to the original index for styling
      const originalIndex = state.letters.length - 1 - index

      let className = "inline-block px-2 py-1 mx-1 rounded-md transition-all duration-500 transform"

      // Determine if this letter is part of prefix, root, or suffix
      // Note: For RTL display, prefixes are visually on the right and suffixes on the left
      const isPrefix = originalIndex < analysis.prefix.length
      const isSuffix = originalIndex >= analysis.prefix.length + root.letters.length
      const isRoot = !isPrefix && !isSuffix

      // Apply appropriate styling based on letter type and animation state
      if (isPrefix) {
        className += state.showPrefix ? " bg-blue-100 text-blue-800 opacity-100 scale-100" : " opacity-0 scale-75"
      } else if (isRoot) {
        className += state.showRoot ? " bg-emerald-100 text-emerald-800 opacity-100 scale-100" : " opacity-0 scale-75"
      } else if (isSuffix) {
        className += state.showSuffix ? " bg-amber-100 text-amber-800 opacity-100 scale-100" : " opacity-0 scale-75"
      }

      return (
        <span key={originalIndex} className={className} style={{ minWidth: "2rem" }}>
          {letter}
        </span>
      )
    })
  }

  return (
    <Card className="mt-4">
      <CardContent className="pt-6">
        <h3 className="text-lg font-medium mb-4">Verb Transformation Animation</h3>

        <div className="bg-muted p-4 rounded-lg mb-4">
          <div className="flex justify-center items-center h-20 font-arabic text-3xl mb-4">{renderLetters()}</div>

          <div className="text-center mb-4">
            <p className="text-sm font-medium">{currentState.description}</p>
            <p className="text-xs text-muted-foreground mt-1">
              Step {animationStep + 1} of {totalSteps}: {form.translation}
            </p>
          </div>

          <div className="flex justify-center gap-2">
            <Button variant="outline" size="sm" onClick={resetAnimation}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
            <Button variant="outline" size="sm" onClick={togglePlayPause}>
              {isPlaying ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
              {isPlaying ? "Pause" : "Play"}
            </Button>
            <Button variant="outline" size="sm" onClick={stepForward} disabled={animationStep >= totalSteps - 1}>
              <ChevronRight className="h-4 w-4 mr-1" />
              Next Step
            </Button>
          </div>
        </div>

        <div className="text-sm">
          <h4 className="font-medium mb-2">Animation Legend:</h4>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 bg-emerald-100 rounded-sm mr-1"></span>
              <span>Root Letters</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 bg-blue-100 rounded-sm mr-1"></span>
              <span>Prefixes</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 bg-amber-100 rounded-sm mr-1"></span>
              <span>Suffixes</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
