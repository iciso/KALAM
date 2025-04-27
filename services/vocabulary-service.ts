import { vocabularyData } from "../data/vocabulary-data"
import { additionalVocabularyData } from "../data/vocabulary-data-expansion"
import { vocabularyCategories } from "../data/vocabulary-categories"
import type { VocabularyWord, VocabularyCategory, Difficulty, PartOfSpeech } from "../types/vocabulary"

export class VocabularyService {
  private allVocabularyData: VocabularyWord[]

  constructor() {
    // Combine the original vocabulary data with the additional data
    this.allVocabularyData = [...vocabularyData, ...additionalVocabularyData]
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
}

export const vocabularyService = new VocabularyService()
