"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import type { VerbExample } from "@/types/conjugation"

interface QuranicExamplesViewerProps {
  examples: VerbExample[]
  verbForm: string
}

export function QuranicExamplesViewer({ examples, verbForm }: QuranicExamplesViewerProps) {
  const [currentExampleIndex, setCurrentExampleIndex] = useState(0)

  if (!examples || examples.length === 0) {
    return (
      <Card>
        <CardContent className="p-4">
          <p className="text-center text-muted-foreground">No examples available for this form.</p>
        </CardContent>
      </Card>
    )
  }

  const currentExample = examples[currentExampleIndex]

  const nextExample = () => {
    setCurrentExampleIndex((prevIndex) => (prevIndex + 1) % examples.length)
  }

  const prevExample = () => {
    setCurrentExampleIndex((prevIndex) => (prevIndex - 1 + examples.length) % examples.length)
  }

  // Function to highlight the verb form in the ayah
  const highlightVerbInAyah = () => {
    const { arabicText, verbLocation } = currentExample
    const { startIndex, endIndex } = verbLocation

    const beforeVerb = arabicText.substring(0, startIndex)
    const verb = arabicText.substring(startIndex, endIndex)
    const afterVerb = arabicText.substring(endIndex)

    return (
      <p className="font-arabic text-lg mb-2 text-right leading-relaxed" dir="rtl">
        {beforeVerb}
        <span className="bg-amber-100 text-amber-800 px-1 rounded">{verb}</span>
        {afterVerb}
      </p>
    )
  }

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium">
            Example {currentExampleIndex + 1} of {examples.length}
          </h4>
          <div className="text-xs text-muted-foreground">
            Surah {currentExample.surahNumber}:{currentExample.ayahNumber}
          </div>
        </div>

        {highlightVerbInAyah()}

        <p className="text-sm text-muted-foreground mb-4">{currentExample.translationText}</p>

        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm" onClick={prevExample} disabled={examples.length <= 1}>
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          <div className="text-sm">
            <span className="font-arabic">{verbForm}</span> in context
          </div>

          <Button variant="outline" size="sm" onClick={nextExample} disabled={examples.length <= 1}>
            Next
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
