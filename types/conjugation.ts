export interface VerbExample {
  id: string
  surahNumber: number
  ayahNumber: number
  arabicText: string
  translationText: string
  verbForm: string // The conjugated form as it appears in the verse
  verbLocation: {
    startIndex: number
    endIndex: number
  }
}

export interface VerbRoot {
  id: string
  letters: string // The three Arabic letters of the root
  transliteration: string
  meaning: string
  frequency: number // How often it appears in the Quran
  examples: VerbExample[]
}

export enum Tense {
  Past = "past",
  Present = "present",
  Imperative = "imperative",
}

export enum Person {
  First = "first", // I, we
  Second = "second", // you
  Third = "third", // he, she, they
}

export enum Gender {
  Masculine = "masculine",
  Feminine = "feminine",
}

export enum Number {
  Singular = "singular",
  Dual = "dual",
  Plural = "plural",
}

export interface ConjugationForm {
  person: Person
  gender: Gender
  number: Number
  arabicText: string
  transliteration: string
  pronunciation: string // For audio playback
  translation: string // English translation (e.g., "he wrote")
  examples?: VerbExample[] // Add examples specific to this conjugation form
}

export interface VerbConjugation {
  root: VerbRoot
  tense: Tense
  forms: ConjugationForm[]
}

export interface ConjugationProgress {
  rootId: string
  tense: Tense
  completedForms: string[] // IDs of completed forms
  masteryLevel: number // 0-100
  lastPracticed: string // ISO date string
}
