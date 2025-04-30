"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { type ConjugationForm, type VerbRoot, Tense } from "@/types/conjugation"
import { Play, Pause, RotateCcw, ChevronRight, ChevronLeft } from "lucide-react"

interface ConjugationProcessAnimatorProps {
  root: VerbRoot
  form: ConjugationForm
  tense: Tense
}

export function ConjugationProcessAnimator({ root, form, tense }: ConjugationProcessAnimatorProps) {
  const [animationStep, setAnimationStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [animationSpeed, setAnimationSpeed] = useState(1500) // milliseconds per step
  const [autoPlayTimer, setAutoPlayTimer] = useState<NodeJS.Timeout | null>(null)

  // Define the animation steps based on the form
  const getAnimationSteps = () => {
    const steps = []
    const rootLetters = root.letters.split("")

    // Step 1: Always start with the root
    steps.push({
      display: rootLetters,
      description: "Start with the root letters",
      highlightIndices: [0, 1, 2],
    })

    // For past tense conjugation
    if (tense === Tense.Past) {
      // Third person masculine singular is the base form (no changes)
      if (form.person === "third" && form.gender === "masculine" && form.number === "singular") {
        steps.push({
          display: rootLetters,
          description: "The third person masculine singular is the base form",
          highlightIndices: [0, 1, 2],
        })
      }
      // Third person feminine singular adds ت at the end
      else if (form.person === "third" && form.gender === "feminine" && form.number === "singular") {
        const withSuffix = [...rootLetters, "َ", "ت", "ْ"]
        steps.push({
          display: withSuffix,
          description: "Add the feminine marker تْ (at) to the end",
          highlightIndices: [3, 4, 5],
        })
      }
      // Third person masculine dual adds ا at the end
      else if (form.person === "third" && form.gender === "masculine" && form.number === "dual") {
        const withSuffix = [...rootLetters, "َ", "ا"]
        steps.push({
          display: withSuffix,
          description: "Add the dual marker ا (ā) to the end",
          highlightIndices: [3, 4],
        })
      }
      // Third person feminine dual adds تا at the end
      else if (form.person === "third" && form.gender === "feminine" && form.number === "dual") {
        const withSuffix = [...rootLetters, "َ", "ت", "َ", "ا"]
        steps.push({
          display: withSuffix,
          description: "Add the feminine dual marker تَا (atā) to the end",
          highlightIndices: [3, 4, 5, 6],
        })
      }
      // Third person masculine plural adds وا at the end
      else if (form.person === "third" && form.gender === "masculine" && form.number === "plural") {
        const withSuffix = [...rootLetters, "ُ", "و", "ا"]
        steps.push({
          display: withSuffix,
          description: "Add the masculine plural marker وا (ū) to the end",
          highlightIndices: [3, 4, 5],
        })
      }
      // Third person feminine plural adds ن at the end
      else if (form.person === "third" && form.gender === "feminine" && form.number === "plural") {
        const withSuffix = [...rootLetters, "ْ", "ن", "َ"]
        steps.push({
          display: withSuffix,
          description: "Add the feminine plural marker نَ (na) to the end",
          highlightIndices: [3, 4, 5],
        })
      }
      // Second person forms add ت at the beginning
      else if (form.person === "second") {
        // First add the prefix
        const withPrefix = ["ت", "َ", ...rootLetters]
        steps.push({
          display: withPrefix,
          description: "Add the second person prefix تَ (ta)",
          highlightIndices: [0, 1],
        })

        // Then add the appropriate suffix based on gender and number
        if (form.gender === "masculine" && form.number === "singular") {
          const withSuffix = ["ت", "َ", ...rootLetters, "ْ", "ت", "َ"]
          steps.push({
            display: withSuffix,
            description: "Add the masculine singular suffix تَ (ta)",
            highlightIndices: [5, 6, 7],
          })
        } else if (form.gender === "feminine" && form.number === "singular") {
          const withSuffix = ["ت", "َ", ...rootLetters, "ْ", "ت", "ِ"]
          steps.push({
            display: withSuffix,
            description: "Add the feminine singular suffix تِ (ti)",
            highlightIndices: [5, 6, 7],
          })
        } else if (form.number === "dual") {
          const withSuffix = ["ت", "َ", ...rootLetters, "ْ", "ت", "ُ", "م", "َ", "ا"]
          steps.push({
            display: withSuffix,
            description: "Add the dual suffix تُمَا (tumā)",
            highlightIndices: [5, 6, 7, 8, 9, 10],
          })
        } else if (form.gender === "masculine" && form.number === "plural") {
          const withSuffix = ["ت", "َ", ...rootLetters, "ْ", "ت", "ُ", "م", "ْ"]
          steps.push({
            display: withSuffix,
            description: "Add the masculine plural suffix تُمْ (tum)",
            highlightIndices: [5, 6, 7, 8, 9],
          })
        } else if (form.gender === "feminine" && form.number === "plural") {
          const withSuffix = ["ت", "َ", ...rootLetters, "ْ", "ت", "ُ", "ن", "َّ"]
          steps.push({
            display: withSuffix,
            description: "Add the feminine plural suffix تُنَّ (tunna)",
            highlightIndices: [5, 6, 7, 8, 9],
          })
        }
      }
      // First person singular adds أ at the beginning
      else if (form.person === "first" && form.number === "singular") {
        const withPrefix = ["أ", "َ", ...rootLetters, "ْ", "ت", "ُ"]
        steps.push({
          display: withPrefix,
          description: "Add the first person singular prefix أَ (a) and suffix تُ (tu)",
          highlightIndices: [0, 1, 5, 6, 7],
        })
      }
      // First person plural adds ن at the beginning
      else if (form.person === "first" && form.number === "plural") {
        const withPrefix = ["ن", "َ", ...rootLetters, "ْ", "ن", "َ", "ا"]
        steps.push({
          display: withPrefix,
          description: "Add the first person plural prefix نَ (na) and suffix نَا (nā)",
          highlightIndices: [0, 1, 5, 6, 7, 8],
        })
      }
    }

    // Final step: Show the complete form with pronunciation guide
    steps.push({
      display: form.arabicText.split(""),
      description: `Complete form: ${form.transliteration} (${form.translation})`,
      highlightIndices: [],
    })

    return steps
  }

  const animationSteps = getAnimationSteps()
  const totalSteps = animationSteps.length
  const currentStep = animationSteps[Math.min(animationStep, totalSteps - 1)]

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

  // Handle manual step forward/backward
  const stepForward = () => {
    if (animationStep < totalSteps - 1) {
      setAnimationStep(animationStep + 1)
    }
  }

  const stepBackward = () => {
    if (animationStep > 0) {
      setAnimationStep(animationStep - 1)
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

  // Handle animation speed change
  const handleSpeedChange = (value: number[]) => {
    setAnimationSpeed(3000 - value[0]) // Invert the scale: higher value = faster animation
  }

  return (
    <Card className="mt-6">
      <CardHeader>
        <CardTitle className="text-lg">Conjugation Process Animation</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="bg-muted p-6 rounded-lg mb-4">
          <div className="flex justify-center items-center h-24 font-arabic text-3xl mb-6">
            {/* Reverse the letters for proper RTL display */}
            {[...currentStep.display].reverse().map((letter, index) => {
              // We need to map the reversed index back to the original index for highlighting
              const originalIndex = currentStep.display.length - 1 - index
              const isHighlighted = currentStep.highlightIndices.includes(originalIndex)

              return (
                <span
                  key={originalIndex}
                  className={`inline-block px-1 py-1 mx-0.5 rounded-md transition-all duration-500 transform ${
                    isHighlighted ? "bg-blue-100 text-blue-800 scale-110" : ""
                  }`}
                >
                  {letter}
                </span>
              )
            })}
          </div>

          <div className="text-center mb-6">
            <p className="font-medium">{currentStep.description}</p>
            <p className="text-sm text-muted-foreground mt-1">
              Step {animationStep + 1} of {totalSteps}
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-4">
            <Button variant="outline" size="sm" onClick={resetAnimation}>
              <RotateCcw className="h-4 w-4 mr-1" />
              Reset
            </Button>
            <Button variant="outline" size="sm" onClick={stepBackward} disabled={animationStep <= 0}>
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" onClick={togglePlayPause}>
              {isPlaying ? <Pause className="h-4 w-4 mr-1" /> : <Play className="h-4 w-4 mr-1" />}
              {isPlaying ? "Pause" : "Play"}
            </Button>
            <Button variant="outline" size="sm" onClick={stepForward} disabled={animationStep >= totalSteps - 1}>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm">Slow</span>
            <Slider
              defaultValue={[1500]}
              min={500}
              max={2500}
              step={100}
              onValueChange={handleSpeedChange}
              className="flex-1"
            />
            <span className="text-sm">Fast</span>
          </div>
        </div>

        <div className="text-sm">
          <p className="mb-2">
            This animation shows the step-by-step process of conjugating the verb
            <span className="font-arabic mx-1">{root.letters}</span>({root.transliteration}) to form
            <span className="font-arabic mx-1">{form.arabicText}</span>({form.transliteration}).
          </p>
          <p>The highlighted letters show what changes in each step of the conjugation process.</p>
        </div>
      </CardContent>
    </Card>
  )
}
