"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { type ConjugationForm, type VerbRoot, Tense } from "@/types/conjugation"
import { ArrowRight } from "lucide-react"

interface VerbPatternVisualizerProps {
  root: VerbRoot
  form: ConjugationForm
  tense: Tense
}

export function VerbPatternVisualizer({ root, form, tense }: VerbPatternVisualizerProps) {
  const [activeTab, setActiveTab] = useState<"pattern" | "breakdown">("pattern")

  // Extract the three root letters
  const rootLetters = root.letters.split("")

  // Function to analyze the verb form and identify prefixes, root letters, and suffixes
  const analyzeVerbForm = () => {
    const verbLetters = form.arabicText.split("")

    // This is a simplified analysis - in a real app, this would be more sophisticated
    // based on the specific verb pattern and form

    let prefix: string[] = []
    const infix: string[] = []
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

  // Generate a color-coded representation of the verb
  const colorCodedVerb = () => {
    return analysis.verbLetters.map((letter, index) => {
      let className = "inline-block px-0.5 py-1 rounded-sm mx-0.5 text-center"

      if (analysis.rootPositions.includes(index)) {
        // Root letter
        className += " bg-emerald-100 text-emerald-800 font-bold"
      } else if (index < analysis.rootPositions[0]) {
        // Prefix
        className += " bg-blue-100 text-blue-800"
      } else {
        // Suffix
        className += " bg-amber-100 text-amber-800"
      }

      return (
        <span key={index} className={className} style={{ minWidth: "1.5rem" }}>
          {letter}
        </span>
      )
    })
  }

  // Generate a pattern explanation based on the form
  const getPatternExplanation = () => {
    let explanation = ""

    if (tense === Tense.Past) {
      if (form.person === "third" && form.gender === "masculine" && form.number === "singular") {
        explanation = "Base form (he): No prefixes or suffixes are added to the root."
      } else if (form.person === "third" && form.gender === "feminine" && form.number === "singular") {
        explanation = "She: Add the suffix ـَتْ (at) to the root."
      } else if (form.person === "third" && form.gender === "masculine" && form.number === "dual") {
        explanation = "They (2 males): Add the suffix ـَا (ā) to the root."
      } else if (form.person === "third" && form.gender === "feminine" && form.number === "dual") {
        explanation = "They (2 females): Add the suffix ـَتَا (atā) to the root."
      } else if (form.person === "third" && form.gender === "masculine" && form.number === "plural") {
        explanation = "They (males): Add the suffix ـُوا (ū) to the root."
      } else if (form.person === "third" && form.gender === "feminine" && form.number === "plural") {
        explanation = "They (females): Add the suffix ـْنَ (na) to the root."
      } else if (form.person === "second" && form.gender === "masculine" && form.number === "singular") {
        explanation = "You (male): Add the prefix تَـ (ta) to the root."
      } else if (form.person === "second" && form.gender === "feminine" && form.number === "singular") {
        explanation = "You (female): Add the prefix تَـ (ta) and suffix ـْتِ (ti) to the root."
      } else if (form.person === "second" && form.number === "dual") {
        explanation = "You (2): Add the prefix تَـ (ta) and suffix ـْتُمَا (tumā) to the root."
      } else if (form.person === "second" && form.gender === "masculine" && form.number === "plural") {
        explanation = "You (males): Add the prefix تَـ (ta) and suffix ـْتُمْ (tum) to the root."
      } else if (form.person === "second" && form.gender === "feminine" && form.number === "plural") {
        explanation = "You (females): Add the prefix تَـ (ta) and suffix ـْتُنَّ (tunna) to the root."
      } else if (form.person === "first" && form.number === "singular") {
        explanation = "I: Add the prefix أَـ (a) to the root."
      } else if (form.person === "first" && form.number === "plural") {
        explanation = "We: Add the prefix نَـ (na) to the root."
      }
    }

    return explanation
  }

  return (
    <Card className="mt-4">
      <CardContent className="pt-4">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as "pattern" | "breakdown")}>
          <TabsList className="mb-4">
            <TabsTrigger value="pattern">Pattern Visualization</TabsTrigger>
            <TabsTrigger value="breakdown">Letter Breakdown</TabsTrigger>
          </TabsList>

          <TabsContent value="pattern" className="space-y-4">
            <div className="bg-muted p-3 rounded-md">
              <h4 className="font-medium mb-2">Pattern Formula:</h4>
              <div className="flex items-center justify-center text-lg font-arabic">
                {analysis.prefix.length > 0 && (
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md flex items-center">
                    <span>Prefix</span>
                    <span className="mx-1 font-bold">+</span>
                  </div>
                )}

                <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-md mx-2 flex items-center">
                  <span>Root</span>
                  <span className="mx-1 font-bold">{root.letters}</span>
                </div>

                {analysis.suffix.length > 0 && (
                  <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-md flex items-center">
                    <span className="mx-1 font-bold">+</span>
                    <span>Suffix</span>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-center mt-4">
                <div className="flex items-center">
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Root Form</p>
                    <div className="font-arabic text-xl bg-white p-2 rounded-md">{root.letters}</div>
                  </div>

                  <ArrowRight className="mx-4" />

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-1">Conjugated Form</p>
                    <div className="font-arabic text-xl bg-white p-2 rounded-md">{form.arabicText}</div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm">{getPatternExplanation()}</p>
            </div>
          </TabsContent>

          <TabsContent value="breakdown">
            <div className="bg-muted p-3 rounded-md">
              <h4 className="font-medium mb-2">Letter-by-Letter Breakdown:</h4>

              <div className="flex flex-wrap justify-center font-arabic text-2xl mb-4 dir-rtl">{colorCodedVerb()}</div>

              <div className="grid grid-cols-3 gap-2 mt-4">
                <div className="bg-blue-100 text-blue-800 p-2 rounded-md text-center">
                  <p className="text-xs font-medium">PREFIX</p>
                  <p className="font-arabic text-lg">{analysis.prefix.length > 0 ? analysis.prefix.join("") : "—"}</p>
                </div>

                <div className="bg-emerald-100 text-emerald-800 p-2 rounded-md text-center">
                  <p className="text-xs font-medium">ROOT LETTERS</p>
                  <p className="font-arabic text-lg">{analysis.rootLetters.join("")}</p>
                </div>

                <div className="bg-amber-100 text-amber-800 p-2 rounded-md text-center">
                  <p className="text-xs font-medium">SUFFIX</p>
                  <p className="font-arabic text-lg">{analysis.suffix.length > 0 ? analysis.suffix.join("") : "—"}</p>
                </div>
              </div>

              <div className="mt-4 text-sm">
                <p>
                  <span className="font-medium">Translation:</span> {form.translation}
                </p>
                <p>
                  <span className="font-medium">Transliteration:</span> {form.transliteration}
                </p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
