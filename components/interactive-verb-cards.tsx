"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VerbCardVisualizer } from "./verb-card-visualizer"
import { Tense, type Person } from "@/types/conjugation"
import { conjugationService } from "@/services/conjugation-service"

interface VerbConjugationData {
  prefix?: string
  root: string
  suffix?: string
  translation: string
  person: string
  gender?: string
  number: string
}

// Helper function to extract parts from a conjugated verb
const extractVerbParts = (
  arabicText: string,
  personType: Person,
): { prefix?: string; root: string; suffix?: string } => {
  // This is a simplified version - in a real app, you'd need more sophisticated parsing
  // based on the actual verb patterns and forms

  if (personType === "third" && arabicText.length <= 3) {
    // Base form (3rd person masculine singular) - no prefix or suffix
    return { root: arabicText }
  }

  if (personType === "third") {
    // 3rd person forms typically have suffixes only
    const root = arabicText.slice(0, 3)
    const suffix = arabicText.slice(3)
    return { root, suffix: suffix || undefined }
  }

  if (personType === "first" || personType === "second") {
    // 1st and 2nd person forms typically have both prefix and suffix
    const prefix = arabicText.slice(0, 1)
    const root = arabicText.slice(1, 4)
    const suffix = arabicText.slice(4)
    return { prefix, root, suffix: suffix || undefined }
  }

  // Default fallback
  return { root: arabicText }
}

export function InteractiveVerbCards() {
  const conjugations = conjugationService.getConjugations()
  const [selectedRootId, setSelectedRootId] = useState(conjugations[0].root.id)
  const [selectedTense, setSelectedTense] = useState<Tense>(Tense.Past)

  const selectedConjugation = conjugationService.getConjugation(selectedRootId, selectedTense)

  if (!selectedConjugation) {
    return <div>No conjugation data available</div>
  }

  // Process the conjugation data to extract parts for visualization
  const processedForms: VerbConjugationData[] = selectedConjugation.forms.map((form) => {
    const { prefix, root, suffix } = extractVerbParts(form.arabicText, form.person)

    return {
      prefix,
      root,
      suffix,
      translation: form.translation,
      person: form.person === "first" ? "First Person" : form.person === "second" ? "Second Person" : "Third Person",
      gender: form.gender === "masculine" ? "Masculine" : form.gender === "feminine" ? "Feminine" : undefined,
      number: form.number === "singular" ? "Singular" : form.number === "dual" ? "Dual" : "Plural",
    }
  })

  // Group forms by person
  const thirdPersonForms = processedForms.filter((form) => form.person === "Third Person")
  const secondPersonForms = processedForms.filter((form) => form.person === "Second Person")
  const firstPersonForms = processedForms.filter((form) => form.person === "First Person")

  return (
    <Card className="mt-6">
      <CardContent className="pt-6">
        <div className="mb-6">
          <h3 className="text-xl font-bold mb-4">Interactive Verb Cards</h3>

          <div className="flex flex-wrap gap-3 mb-4">
            <select
              className="px-3 py-2 border rounded-md"
              value={selectedRootId}
              onChange={(e) => setSelectedRootId(e.target.value)}
            >
              {conjugations.map((conj) => (
                <option key={conj.root.id} value={conj.root.id}>
                  {conj.root.letters} ({conj.root.transliteration}) - {conj.root.meaning}
                </option>
              ))}
            </select>
          </div>

          <Tabs defaultValue="third">
            <TabsList className="mb-4">
              <TabsTrigger value="third">Third Person (He/She/They)</TabsTrigger>
              <TabsTrigger value="second">Second Person (You)</TabsTrigger>
              <TabsTrigger value="first">First Person (I/We)</TabsTrigger>
            </TabsList>

            <TabsContent value="third">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {thirdPersonForms.map((form, index) => (
                  <VerbCardVisualizer
                    key={`third-${index}`}
                    prefix={form.prefix}
                    root={form.root}
                    suffix={form.suffix}
                    translation={form.translation}
                    person={form.person}
                    gender={form.gender}
                    number={form.number}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="second">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {secondPersonForms.map((form, index) => (
                  <VerbCardVisualizer
                    key={`second-${index}`}
                    prefix={form.prefix}
                    root={form.root}
                    suffix={form.suffix}
                    translation={form.translation}
                    person={form.person}
                    gender={form.gender}
                    number={form.number}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="first">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {firstPersonForms.map((form, index) => (
                  <VerbCardVisualizer
                    key={`first-${index}`}
                    prefix={form.prefix}
                    root={form.root}
                    suffix={form.suffix}
                    translation={form.translation}
                    person={form.person}
                    gender={form.gender}
                    number={form.number}
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-muted p-4 rounded-lg mt-6">
            <h4 className="font-medium mb-2">Understanding Arabic Verb Parts</h4>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-blue-100 rounded-sm mr-2"></span>
                <span>Prefix (سابقة) - Added to the beginning (right side in Arabic)</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-emerald-100 rounded-sm mr-2"></span>
                <span>Root (جذر) - The core of the verb</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-4 h-4 bg-amber-100 rounded-sm mr-2"></span>
                <span>Suffix (لاحقة) - Added to the end (left side in Arabic)</span>
              </div>
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-medium mb-1">How to Use:</h5>
              <ul className="text-sm list-disc list-inside space-y-1">
                <li>Click "Show Formation" to see how the verb parts combine</li>
                <li>Select different roots from the dropdown to practice with various verbs</li>
                <li>Use the tabs to focus on specific person categories</li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
