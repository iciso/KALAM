import { vocabularyData } from "../data/vocabulary-data"
import { additionalVocabularyData } from "../data/vocabulary-data-expansion"
import { phase2VocabularyData } from "../data/vocabulary-data-expansion-phase2"
import { phase3VocabularyData } from "../data/vocabulary-data-expansion-phase3"
import { phase4VocabularyData } from "../data/vocabulary-data-expansion-phase4"
import { phase5VocabularyData } from "../data/vocabulary-data-expansion-phase5"
import { phase6VocabularyData } from "../data/vocabulary-data-expansion-phase6"
import { phase7VocabularyData } from "../data/vocabulary-data-expansion-phase7"
import { phase8VocabularyData } from "../data/vocabulary-data-expansion-phase8"
import { phase9VocabularyData } from "../data/vocabulary-data-expansion-phase9"
import { vocabularyCategories } from "../data/vocabulary-categories"
import { type VocabularyWord, type VocabularyCategory, Difficulty, type PartOfSpeech } from "../types/vocabulary"

// Define a type for Surah information
export interface SurahInfo {
  number: number
  name: string
  wordCount: number
}

export class VocabularyService {
  private allVocabularyData: VocabularyWord[]
  private surahList: SurahInfo[] = []

  constructor() {
    // Combine all vocabulary data sets
    this.allVocabularyData = [
      ...vocabularyData,
      ...additionalVocabularyData,
      ...phase2VocabularyData,
      ...phase3VocabularyData,
      ...phase4VocabularyData,
      ...phase5VocabularyData,
      ...phase6VocabularyData,
      ...phase7VocabularyData,
      ...phase8VocabularyData,
      ...phase9VocabularyData,
    ]

    // Generate the list of Surahs with word counts
    this.generateSurahList()
  }

  // Generate a list of all Surahs that have words in our database
  private generateSurahList(): void {
    const surahMap = new Map<number, { name: string; words: Set<string> }>()

    // Collect all Surahs and the words that appear in them
    this.allVocabularyData.forEach((word) => {
      word.examples.forEach((example) => {
        if (!surahMap.has(example.surahNumber)) {
          surahMap.set(example.surahNumber, {
            name: example.surahName,
            words: new Set<string>(),
          })
        }
        surahMap.get(example.surahNumber)?.words.add(word.id)
      })
    })

    // Convert the map to an array of SurahInfo objects
    this.surahList = Array.from(surahMap.entries())
      .map(([number, { name, words }]) => ({
        number,
        name,
        wordCount: words.size,
      }))
      .sort((a, b) => a.number - b.number)
  }

  // Get all vocabulary words
  getAllWords(): VocabularyWord[] {
    return this.allVocabularyData
  }

  // Get a word by ID
  getWordById(id: string): VocabularyWord | undefined {
    return this.allVocabularyData.find((word) => word.id === id)
  }

  // Get words by difficulty level
  getWordsByDifficulty(difficulty: Difficulty): VocabularyWord[] {
    return this.allVocabularyData.filter((word) => word.difficulty === difficulty)
  }

  // Get words by part of speech
  getWordsByPartOfSpeech(partOfSpeech: PartOfSpeech): VocabularyWord[] {
    return this.allVocabularyData.filter((word) => word.partOfSpeech === partOfSpeech)
  }

  // Get words by tag
  getWordsByTag(tag: string): VocabularyWord[] {
    return this.allVocabularyData.filter((word) => word.tags.includes(tag))
  }

  // Get words by frequency range
  getWordsByFrequencyRange(minFrequency: number, maxFrequency: number): VocabularyWord[] {
    return this.allVocabularyData.filter((word) => word.frequency >= minFrequency && word.frequency <= maxFrequency)
  }

  // Search words by text (in Arabic, transliteration, or meanings)
  searchWords(query: string): VocabularyWord[] {
    const lowerCaseQuery = query.toLowerCase()
    return this.allVocabularyData.filter(
      (word) =>
        word.arabic.includes(query) ||
        word.transliteration.toLowerCase().includes(lowerCaseQuery) ||
        word.meanings.some((meaning) => meaning.toLowerCase().includes(lowerCaseQuery)),
    )
  }

  // Get all categories
  getAllCategories(): VocabularyCategory[] {
    return vocabularyCategories
  }

  // Get a category by ID
  getCategoryById(id: string): VocabularyCategory | undefined {
    return vocabularyCategories.find((category) => category.id === id)
  }

  // Get words by category ID
  getWordsByCategoryId(categoryId: string): VocabularyWord[] {
    const category = this.getCategoryById(categoryId)
    if (!category) return []

    return category.wordIds.map((wordId) => {
      const word = this.getWordById(wordId)
      if (!word) throw new Error(`Word with ID ${wordId} not found in category ${categoryId}`)
      return word
    })
  }

  // Get most frequent words (limit by count)
  getMostFrequentWords(limit = 10): VocabularyWord[] {
    return [...this.allVocabularyData].sort((a, b) => b.frequency - a.frequency).slice(0, limit)
  }

  // Get related words for a given word
  getRelatedWords(wordId: string): VocabularyWord[] {
    const word = this.getWordById(wordId)
    if (!word || !word.relatedWords) return []

    return word.relatedWords.map((relatedWord) => {
      const related = this.getWordById(relatedWord.id)
      if (!related) throw new Error(`Related word with ID ${relatedWord.id} not found`)
      return related
    })
  }

  // Get words with audio
  getWordsWithAudio(): VocabularyWord[] {
    return this.allVocabularyData.filter((word) => word.hasAudio)
  }

  // Get words with example audio
  getWordsWithExampleAudio(): VocabularyWord[] {
    return this.allVocabularyData.filter((word) => word.examples.some((example) => example.hasAudio))
  }

  // Get advanced words
  getAdvancedWords(): VocabularyWord[] {
    return this.allVocabularyData.filter((word) => word.difficulty === Difficulty.Advanced)
  }

  // Get words by root letters
  getWordsByRoot(rootLetters: string): VocabularyWord[] {
    return this.allVocabularyData.filter((word) => word.rootLetters === rootLetters)
  }

  // Get total word count
  getTotalWordCount(): number {
    return this.allVocabularyData.length
  }

  // Get words added in Phase 4
  getPhase4Words(): VocabularyWord[] {
    return phase4VocabularyData
  }

  // Get words added in Phase 5
  getPhase5Words(): VocabularyWord[] {
    return phase5VocabularyData
  }

  // Get words added in Phase 6
  getPhase6Words(): VocabularyWord[] {
    return phase6VocabularyData
  }

  // Get words added in Phase 7
  getPhase7Words(): VocabularyWord[] {
    return phase7VocabularyData
  }

  // Get words added in Phase 8
  getPhase8Words(): VocabularyWord[] {
    return phase8VocabularyData
  }

  // Get words added in Phase 9
  getPhase9Words(): VocabularyWord[] {
    return phase9VocabularyData
  }

  // Get words by phase
  getWordsByPhase(phase: number): VocabularyWord[] {
    switch (phase) {
      case 1:
        return vocabularyData
      case 2:
        return additionalVocabularyData
      case 3:
        return phase2VocabularyData
      case 4:
        return phase3VocabularyData
      case 5:
        return phase4VocabularyData
      case 6:
        return phase5VocabularyData
      case 7:
        return phase6VocabularyData
      case 8:
        return phase7VocabularyData
      case 9:
        return phase8VocabularyData
      case 10:
        return phase9VocabularyData
      default:
        return []
    }
  }

  // Get all Surahs that have words in our database
  getAllSurahs(): SurahInfo[] {
    return this.surahList
  }

  // Get words that appear in a specific Surah
  getWordsBySurah(surahNumber: number): VocabularyWord[] {
    return this.allVocabularyData.filter((word) => word.examples.some((example) => example.surahNumber === surahNumber))
  }

  // Get words that appear in a specific Surah by name
  getWordsBySurahName(surahName: string): VocabularyWord[] {
    return this.allVocabularyData.filter((word) => word.examples.some((example) => example.surahName === surahName))
  }

  // Get Surah information by number
  getSurahInfo(surahNumber: number): SurahInfo | undefined {
    return this.surahList.find((surah) => surah.number === surahNumber)
  }
}

export const vocabularyService = new VocabularyService()

// Export a function to get all vocabulary (used in flashcards)
export const getAllVocabulary = async (): Promise<VocabularyWord[]> => {
  return vocabularyService.getAllWords()
}
