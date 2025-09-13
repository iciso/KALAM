import type { VocabularyWord } from "../types/vocabulary"
import { vocabularyData } from "../data/vocabulary-data"
import { vocabularyDataExpansion } from "../data/vocabulary-data-expansion"
import { vocabularyDataExpansionPhase2 } from "../data/vocabulary-data-expansion-phase2"
import { vocabularyDataExpansionPhase3 } from "../data/vocabulary-data-expansion-phase3"
import { vocabularyDataExpansionPhase4 } from "../data/vocabulary-data-expansion-phase4"
import { vocabularyDataExpansionPhase5 } from "../data/vocabulary-data-expansion-phase5"
import { vocabularyDataExpansionPhase6 } from "../data/vocabulary-data-expansion-phase6"
import { vocabularyDataExpansionPhase7 } from "../data/vocabulary-data-expansion-phase7"
import { vocabularyDataExpansionPhase8 } from "../data/vocabulary-data-expansion-phase8"
import { vocabularyDataExpansionPhase9 } from "../data/vocabulary-data-expansion-phase9"
import { vocabularyDataExpansionPhase10 } from "../data/vocabulary-data-expansion-phase10"
import { vocabularyDataExpansionPhase11 } from "../data/vocabulary-data-expansion-phase11"
import { vocabularyDataProphets } from "../data/vocabulary-data-prophets"

// Import quiz-extracted vocabulary if it exists
let quizExtractedVocabulary: VocabularyWord[] = []
try {
  const quizData = require("../data/vocabulary-data-quiz-extracted")
  quizExtractedVocabulary = quizData.quizExtractedVocabulary || []
} catch (error) {
  console.log("Quiz-extracted vocabulary not found, using existing data only")
}

export interface VocabularyStats {
  totalWords: number
  categoryCounts: { [category: string]: number }
  difficultyCounts: { [difficulty: string]: number }
  surahCounts: { [surah: string]: number }
  tagCounts: { [tag: string]: number }
}

export class EnhancedVocabularyService {
  private allVocabulary: VocabularyWord[]

  constructor() {
    // Combine all vocabulary sources
    this.allVocabulary = [
      ...vocabularyData,
      ...vocabularyDataExpansion,
      ...vocabularyDataExpansionPhase2,
      ...vocabularyDataExpansionPhase3,
      ...vocabularyDataExpansionPhase4,
      ...vocabularyDataExpansionPhase5,
      ...vocabularyDataExpansionPhase6,
      ...vocabularyDataExpansionPhase7,
      ...vocabularyDataExpansionPhase8,
      ...vocabularyDataExpansionPhase9,
      ...vocabularyDataExpansionPhase10,
      ...vocabularyDataExpansionPhase11,
      ...vocabularyDataProphets,
      ...quizExtractedVocabulary,
    ]

    // Remove duplicates based on Arabic text and transliteration
    this.allVocabulary = this.removeDuplicates(this.allVocabulary)
  }

  private removeDuplicates(words: VocabularyWord[]): VocabularyWord[] {
    const seen = new Set<string>()
    return words.filter((word) => {
      const key = `${word.arabic}-${word.transliteration}`
      if (seen.has(key)) {
        return false
      }
      seen.add(key)
      return true
    })
  }

  getAllVocabulary(): VocabularyWord[] {
    return this.allVocabulary
  }

  getVocabularyByCategory(category: string): VocabularyWord[] {
    return this.allVocabulary.filter((word) => word.category === category)
  }

  getVocabularyByDifficulty(difficulty: string): VocabularyWord[] {
    return this.allVocabulary.filter((word) => word.difficulty === difficulty)
  }

  getVocabularyBySurah(surahNumber: number): VocabularyWord[] {
    return this.allVocabulary.filter((word) => word.examples?.some((example) => example.surahNumber === surahNumber))
  }

  getVocabularyByTag(tag: string): VocabularyWord[] {
    return this.allVocabulary.filter((word) => word.tags?.includes(tag))
  }

  searchVocabulary(query: string): VocabularyWord[] {
    const lowerQuery = query.toLowerCase()
    return this.allVocabulary.filter(
      (word) =>
        word.arabic.includes(query) ||
        word.transliteration.toLowerCase().includes(lowerQuery) ||
        word.meanings.some((meaning) => meaning.toLowerCase().includes(lowerQuery)) ||
        word.tags?.some((tag) => tag.toLowerCase().includes(lowerQuery)),
    )
  }

  getVocabularyStats(): VocabularyStats {
    const stats: VocabularyStats = {
      totalWords: this.allVocabulary.length,
      categoryCounts: {},
      difficultyCounts: {},
      surahCounts: {},
      tagCounts: {},
    }

    this.allVocabulary.forEach((word) => {
      // Count categories
      const category = word.category || "Uncategorized"
      stats.categoryCounts[category] = (stats.categoryCounts[category] || 0) + 1

      // Count difficulties
      stats.difficultyCounts[word.difficulty] = (stats.difficultyCounts[word.difficulty] || 0) + 1

      // Count surahs
      if (word.examples) {
        word.examples.forEach((example) => {
          const surahKey = `Surah ${example.surahNumber}`
          stats.surahCounts[surahKey] = (stats.surahCounts[surahKey] || 0) + 1
        })
      }

      // Count tags
      if (word.tags) {
        word.tags.forEach((tag) => {
          stats.tagCounts[tag] = (stats.tagCounts[tag] || 0) + 1
        })
      }
    })

    return stats
  }

  getRandomVocabulary(count = 10): VocabularyWord[] {
    const shuffled = [...this.allVocabulary].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  getVocabularyById(id: string): VocabularyWord | undefined {
    return this.allVocabulary.find((word) => word.id === id)
  }

  getRelatedVocabulary(word: VocabularyWord, count = 5): VocabularyWord[] {
    const related = this.allVocabulary.filter((w) => {
      if (w.id === word.id) return false

      // Same category
      if (w.category === word.category) return true

      // Same difficulty
      if (w.difficulty === word.difficulty) return true

      // Shared tags
      if (word.tags && w.tags) {
        const sharedTags = word.tags.filter((tag) => w.tags!.includes(tag))
        if (sharedTags.length > 0) return true
      }

      // Same surah
      if (word.examples && w.examples) {
        const wordSurahs = word.examples.map((e) => e.surahNumber)
        const wSurahs = w.examples.map((e) => e.surahNumber)
        if (wordSurahs.some((s) => wSurahs.includes(s))) return true
      }

      return false
    })

    return related.slice(0, count)
  }

  getPopularCategories(limit = 10): Array<{ category: string; count: number }> {
    const stats = this.getVocabularyStats()
    return Object.entries(stats.categoryCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, limit)
      .map(([category, count]) => ({ category, count }))
  }

  getRecentlyAdded(days = 30): VocabularyWord[] {
    // For now, return quiz-extracted vocabulary as "recently added"
    return quizExtractedVocabulary.slice(0, 50)
  }

  exportVocabularyData(): string {
    return JSON.stringify(this.allVocabulary, null, 2)
  }

  importVocabularyData(jsonData: string): boolean {
    try {
      const importedWords: VocabularyWord[] = JSON.parse(jsonData)
      this.allVocabulary = [...this.allVocabulary, ...importedWords]
      this.allVocabulary = this.removeDuplicates(this.allVocabulary)
      return true
    } catch (error) {
      console.error("Error importing vocabulary data:", error)
      return false
    }
  }
}

// Create a singleton instance
export const enhancedVocabularyService = new EnhancedVocabularyService()

// Export convenience functions
export function getAllVocabulary(): VocabularyWord[] {
  return enhancedVocabularyService.getAllVocabulary()
}

export function getVocabularyStats(): VocabularyStats {
  return enhancedVocabularyService.getVocabularyStats()
}

export function getVocabularyByCategory(category: string): VocabularyWord[] {
  return enhancedVocabularyService.getVocabularyByCategory(category)
}

export function searchVocabulary(query: string): VocabularyWord[] {
  return enhancedVocabularyService.searchVocabulary(query)
}
