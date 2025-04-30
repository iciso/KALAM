import { ConjugationBuilder } from "@/components/conjugation-builder"

export const metadata = {
  title: "Verb Conjugation - KALAM",
  description: "Learn Arabic verb conjugation patterns from the Quran with multiple examples",
}

export default function VerbConjugationPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Arabic Verb Conjugation</h1>
      <p className="mb-8 text-muted-foreground">
        Learn how to conjugate three-letter Arabic verbs from the Quran. Start with the past tense and gradually build
        your understanding of verb patterns through interactive practice, animated visualizations, and multiple Quranic
        examples.
      </p>

      <ConjugationBuilder />
    </div>
  )
}
