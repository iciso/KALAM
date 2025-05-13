export interface VocabularyWord {
  id: string
  arabic: string
  transliteration: string
  rootLetters?: string
  meanings: string[]
  partOfSpeech: PartOfSpeech
  difficulty: Difficulty
  frequency: number // Occurrence count in the Quran
  tags: string[]
  examples: VocabularyExample[]
  relatedWords?: RelatedWord[]
  notes?: string
  audioUrl?: string // URL to the word pronunciation audio
  hasAudio: boolean // Flag to indicate if audio is available
}

export interface VocabularyExample {
  id: string
  surahNumber: number
  surahName: string
  ayahNumber: number
  arabicText: string
  translationText: string
  wordLocation: {
    startIndex: number
    endIndex: number
  }
  audioUrl?: string // URL to the example ayah audio
  wordAudioUrl?: string // URL to just the word in this context
  hasAudio: boolean // Flag to indicate if audio is available
}

export interface RelatedWord {
  id: string
  relationshipType: RelationshipType
  description?: string
}

export enum PartOfSpeech {
  Noun = "noun",
  Verb = "verb",
  Adjective = "adjective",
  Adverb = "adverb",
  Preposition = "preposition",
  Pronoun = "pronoun",
  Particle = "particle",
  Other = "other",
}

export enum Difficulty {
  Beginner = "beginner",
  Intermediate = "intermediate",
  Advanced = "advanced",
}

export enum RelationshipType {
  Root = "root",
  Synonym = "synonym",
  Antonym = "antonym",
  Derivative = "derivative",
  Form = "form",
}

export interface VocabularyCategory {
  id: string
  name: string
  description: string
  wordIds: string[]
}

export interface VocabularyList {
  id: string
  name: string
  description: string
  wordIds: string[]
  createdAt: string
  updatedAt: string
}

export interface UserProgress {
  userId: string
  wordId: string
  familiarity: Familiarity
  lastReviewed: string
  nextReviewDate: string
  reviewHistory: ReviewEntry[]
}

export enum Familiarity {
  New = "new",
  Learning = "learning",
  Reviewing = "reviewing",
  Known = "known",
  Mastered = "mastered",
}

export interface ReviewEntry {
  date: string
  performance: Performance
}

export enum Performance {
  Easy = "easy",
  Good = "good",
  Hard = "hard",
  Forgot = "forgot",
}

export interface SurahQuizData {
  surahId: number
  surahName: string
  surahArabicName: string
  totalVerses: number
  type: string
  difficulty: string
  introduction: string
  questions: SurahQuizQuestion[]
  additionalContextElements?: {
    title: string
    content: string
  }[]
}

export interface SurahQuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswerIndex: number
  explanation?: string
}
