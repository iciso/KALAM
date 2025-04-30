import { vocabularyData } from "@/data/vocabulary-data"
import { additionalVocabularyData } from "@/data/vocabulary-data-expansion"
import { phase2VocabularyData } from "@/data/vocabulary-data-expansion-phase2"
import { phase3VocabularyData } from "@/data/vocabulary-data-expansion-phase3"
import { phase4VocabularyData } from "@/data/vocabulary-data-expansion-phase4"
import { phase5VocabularyData } from "@/data/vocabulary-data-expansion-phase5"
import { phase6VocabularyData } from "@/data/vocabulary-data-expansion-phase6"
import { phase7VocabularyData } from "@/data/vocabulary-data-expansion-phase7"
import { phase8VocabularyData } from "@/data/vocabulary-data-expansion-phase8"
import { phase9VocabularyData } from "@/data/vocabulary-data-expansion-phase9"
import { type VocabularyWord, Difficulty } from "@/types/vocabulary"

class EnhancedVocabularyService {
  private allWords: VocabularyWord[]
  private surahMap: Map<number, { name: string; wordCount: number }>

  constructor() {
    // Combine all vocabulary data
    this.allWords = [
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

    // Create map of surahs
    this.surahMap = new Map()
    this.initSurahMap()
  }

  // Initialize surah map
  private initSurahMap() {
    for (const word of this.allWords) {
      for (const example of word.examples) {
        const surahNumber = example.surahNumber
        const surahName = example.surahName

        if (!this.surahMap.has(surahNumber)) {
          this.surahMap.set(surahNumber, {
            name: surahName,
            wordCount: 0,
          })
        }
      }
    }

    // Count words per surah
    for (const word of this.allWords) {
      const surahNumbers = new Set<number>()

      for (const example of word.examples) {
        surahNumbers.add(example.surahNumber)
      }

      for (const surahNumber of surahNumbers) {
        const surah = this.surahMap.get(surahNumber)
        if (surah) {
          surah.wordCount++
        }
      }
    }
  }

  // Get all words
  getAllWords(): VocabularyWord[] {
    return this.allWords
  }

  // Get words by difficulty
  getWordsByDifficulty(difficulty: Difficulty): VocabularyWord[] {
    return this.allWords.filter((word) => word.difficulty === difficulty)
  }

  // Get words by surah
  getWordsBySurah(surahNumber: number): VocabularyWord[] {
    return this.allWords.filter((word) => word.examples.some((example) => example.surahNumber === surahNumber))
  }

  // Get all surahs with word counts
  getAllSurahs(): { number: number; name: string; wordCount: number }[] {
    const surahs = []
    for (const [number, data] of this.surahMap.entries()) {
      surahs.push({
        number,
        name: data.name,
        wordCount: data.wordCount,
      })
    }
    return surahs.sort((a, b) => a.number - b.number)
  }

  // Get all unique tags from the vocabulary
  getAllTags(): string[] {
    const tags: string[] = []
    for (const word of this.allWords) {
      if (word.tags) {
        tags.push(...word.tags)
      }
    }
    return [...new Set(tags)].sort()
  }

  // Get words by tag
  getWordsByTag(tag: string): VocabularyWord[] {
    return this.allWords.filter((word) => word.tags && word.tags.includes(tag))
  }

  // Get word by ID
  getWordById(id: string): VocabularyWord | undefined {
    return this.allWords.find((word) => word.id === id)
  }

  // Get related words for a given word
  getRelatedWords(word: VocabularyWord): VocabularyWord[] {
    if (!word.relatedWords) {
      return []
    }

    return word.relatedWords
      .map((relation) => this.getWordById(relation.id))
      .filter((w): w is VocabularyWord => w !== undefined)
  }

  // Search for words
  searchWords(query: string): VocabularyWord[] {
    const lowercaseQuery = query.toLowerCase()
    return this.allWords.filter((word) => {
      // Search in Arabic
      if (word.arabic.includes(query)) {
        return true
      }

      // Search in transliteration
      if (word.transliteration.toLowerCase().includes(lowercaseQuery)) {
        return true
      }

      // Search in meanings
      if (word.meanings.some((meaning) => meaning.toLowerCase().includes(lowercaseQuery))) {
        return true
      }

      // Search in root letters
      if (word.rootLetters && word.rootLetters.includes(query)) {
        return true
      }

      return false
    })
  }

  // Get words with audio
  getWordsWithAudio(): VocabularyWord[] {
    return this.allWords.filter((word) => word.hasAudio)
  }

  // Get words count by difficulty
  getWordsCountByDifficulty(): Record<Difficulty, number> {
    const counts = {
      [Difficulty.Beginner]: 0,
      [Difficulty.Intermediate]: 0,
      [Difficulty.Advanced]: 0,
    }

    for (const word of this.allWords) {
      counts[word.difficulty]++
    }

    return counts
  }
}

export const enhancedVocabularyService = new EnhancedVocabularyService()
