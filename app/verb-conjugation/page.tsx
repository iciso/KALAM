import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { VerbPatternVisualizer } from "@/components/verb-pattern-visualizer"
import { ConjugationPatternGuide } from "@/components/conjugation-pattern-guide"
import { VerbTransformationAnimator } from "@/components/verb-transformation-animator"
import { ConjugationProcessAnimator } from "@/components/conjugation-process-animator"
import { ConjugationBuilder } from "@/components/conjugation-builder"
import { InteractiveVerbCards } from "@/components/interactive-verb-cards"

export const metadata = {
  title: "Arabic Verb Conjugation - KALAM",
  description: "Learn Arabic verb conjugation patterns with interactive tools",
}

export default function VerbConjugationPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Arabic Verb Conjugation</h1>

      <p className="mb-6">
        Learn how to conjugate three-letter Arabic verbs found in the Quran. Use the interactive tools below to
        understand the patterns and practice conjugating verbs.
      </p>

      <InteractiveVerbCards />

      <Tabs defaultValue="builder" className="mt-8">
        <TabsList className="mb-4">
          <TabsTrigger value="builder">Conjugation Builder</TabsTrigger>
          <TabsTrigger value="patterns">Pattern Visualizer</TabsTrigger>
          <TabsTrigger value="guide">Pattern Guide</TabsTrigger>
          <TabsTrigger value="animation">Animation</TabsTrigger>
        </TabsList>

        <TabsContent value="builder">
          <ConjugationBuilder />
        </TabsContent>

        <TabsContent value="patterns">
          <VerbPatternVisualizer />
        </TabsContent>

        <TabsContent value="guide">
          <ConjugationPatternGuide />
        </TabsContent>

        <TabsContent value="animation">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <VerbTransformationAnimator />
            <ConjugationProcessAnimator />
          </div>
        </TabsContent>
      </Tabs>
    </main>
  )
}
