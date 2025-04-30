import {
  type VerbConjugation,
  type ConjugationForm,
  type VerbExample,
  Tense,
  type Person,
  type Gender,
  type Number,
} from "@/types/conjugation"
import { initialVerbConjugations } from "@/data/verb-conjugation-data"

class ConjugationService {
  private conjugations: VerbConjugation[] = initialVerbConjugations

  // Get all available verb conjugations
  getConjugations(): VerbConjugation[] {
    return this.conjugations
  }

  // Get a specific verb conjugation by root ID and tense
  getConjugation(rootId: string, tense: Tense): VerbConjugation | undefined {
    return this.conjugations.find((conj) => conj.root.id === rootId && conj.tense === tense)
  }

  // Get a specific form from a conjugation
  getForm(rootId: string, tense: Tense, person: Person, gender: Gender, number: Number): ConjugationForm | undefined {
    const conjugation = this.getConjugation(rootId, tense)
    if (!conjugation) return undefined

    return conjugation.forms.find((form) => form.person === person && form.gender === gender && form.number === number)
  }

  // Get examples for a specific form
  getExamplesForForm(rootId: string, tense: Tense, person: Person, gender: Gender, number: Number): VerbExample[] {
    const form = this.getForm(rootId, tense, person, gender, number)

    // If the form has specific examples, return those
    if (form?.examples && form.examples.length > 0) {
      return form.examples
    }

    // Otherwise, return general examples from the root
    const conjugation = this.getConjugation(rootId, tense)
    if (!conjugation) return []

    return conjugation.root.examples || []
  }

  // Check if a user's answer is correct
  checkAnswer(rootId: string, tense: Tense, person: Person, gender: Gender, number: Number, answer: string): boolean {
    const form = this.getForm(rootId, tense, person, gender, number)
    if (!form) return false

    // Normalize the answer by removing diacritics for comparison
    const normalizedAnswer = this.normalizeArabic(answer)
    const normalizedCorrect = this.normalizeArabic(form.arabicText)

    return normalizedAnswer === normalizedCorrect
  }

  // Helper to normalize Arabic text for comparison (removing diacritics)
  private normalizeArabic(text: string): string {
    // Remove Arabic diacritics (harakat)
    return text.replace(/[\u064B-\u0652]/g, "")
  }

  // Get a random conjugation for practice
  getRandomConjugation(): VerbConjugation {
    const randomIndex = Math.floor(Math.random() * this.conjugations.length)
    return this.conjugations[randomIndex]
  }

  // Get conjugation pattern explanation
  getPatternExplanation(rootId: string, tense: Tense): string {
    // This would contain explanations of patterns for each verb type
    // For now, we'll return a basic explanation for past tense
    if (tense === Tense.Past) {
      return "In the past tense, three-letter verbs follow a pattern where the base form (he/third person masculine singular) has the voweling pattern َ َ َ (fatha-fatha-fatha)."
    }
    return "Pattern explanation not available."
  }
}

// Create and export a singleton instance
export const conjugationService = new ConjugationService()
