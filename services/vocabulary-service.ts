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
import { familyRelationshipsVocabulary, divineAttributesVocabulary } from "@/data/vocabulary-data-expansion-phase10"
import { phase11VocabularyData } from "@/data/vocabulary-data-expansion-phase11"
import { prophetsVocabulary } from "@/data/vocabulary-data-prophets"
import { vocabularyCategories } from "@/data/vocabulary-categories"
import type { VocabularyWord, Difficulty } from "@/types/vocabulary"

export interface SurahInfo {
  number: number
  name: string
  wordCount: number
}

class VocabularyService {
  private allWords: VocabularyWord[]
  private surahMap: Map<number, SurahInfo> = new Map()

  constructor() {
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
      ...familyRelationshipsVocabulary,
      ...divineAttributesVocabulary,
      ...phase11VocabularyData,
      ...prophetsVocabulary,
    ]
    this.initSurahMap()
  }

  private initSurahMap() {
    for (const word of this.allWords) {
      for (const example of word.examples) {
        const surahNumber = example.surahNumber
        const surahName = example.surahName
        if (!this.surahMap.has(surahNumber)) {
          this.surahMap.set(surahNumber, { name: surahName, wordCount: 0 })
        }
      }
    }
    for (const word of this.allWords) {
      const surahNumbers = new Set<number>()
      for (const example of word.examples) {
        surahNumbers.add(example.surahNumber)
      }
      for (const surahNumber of surahNumbers) {
        const surah = this.surahMap.get(surahNumber)
        if (surah) surah.wordCount++
      }
    }
  }

  getAllWords(): VocabularyWord[] {
    return this.allWords
  }

  addNewVocabulary(newWords: VocabularyWord[]): void {
    // Deduplicate based on arabic and meaning, keeping the word with the most examples or highest id
    const existingIds = new Set(this.allWords.map((w) => w.id))
    const deduplicatedNewWords = newWords.filter((newWord) => {
      const duplicate = this.allWords.find(
        (w) => w.arabic === newWord.arabic && w.meanings[0] === newWord.meanings[0]
      )
      if (duplicate) {
        if (newWord.examples.length > duplicate.examples.length) {
          this.allWords[this.allWords.indexOf(duplicate)] = newWord
          return false
        }
        return false
      }
      return true
    }).map((w) => (existingIds.has(w.id) ? { ...w, id: `${w.id}-new` } : w))

    this.allWords.push(...deduplicatedNewWords)
    this.initSurahMap() // Reinitialize to update surah mappings
  }

  getWordsByDifficulty(difficulty: Difficulty): VocabularyWord[] {
    return this.allWords.filter((word) => word.difficulty === difficulty)
  }

  getWordsBySurah(surahNumber: number): VocabularyWord[] {
    return this.allWords.filter((word) => word.examples.some((example) => example.surahNumber === surahNumber))
  }

  getAllSurahs(): SurahInfo[] {
    const surahs: SurahInfo[] = []
    for (const [number, data] of this.surahMap.entries()) {
      surahs.push({ number, name: data.name, wordCount: data.wordCount })
    }
    return surahs.sort((a, b) => a.number - b.number)
  }

  getAllCategories() {
    return vocabularyCategories.map((category) => ({
      id: category.id,
      name: category.name,
      description: category.description,
      wordIds: this.getWordsByCategoryId(category.id).map((word) => word.id),
    }))
  }

  getWordsByCategoryId(categoryId: string): VocabularyWord[] {
    const category = vocabularyCategories.find((c) => c.id === categoryId)
    if (!category) return []
    if (categoryId === "prophets") {
      return this.allWords.filter((word) => word.tags && word.tags.includes("prophets"))
    }
    return this.allWords.filter((word) => {
      if (word.tags && word.tags.includes(categoryId)) return true
      if (category.wordIds && category.wordIds.includes(word.id)) return true
      return false
    })
  }

  searchWords(query: string): VocabularyWord[] {
    const lowercaseQuery = query.toLowerCase()
    return this.allWords.filter((word) => {
      if (word.arabic.includes(query)) return true
      if (word.transliteration.toLowerCase().includes(lowercaseQuery)) return true
      if (word.meanings.some((meaning) => meaning.toLowerCase().includes(lowercaseQuery))) return true
      if (word.rootLetters && word.rootLetters.includes(query)) return true
      return false
    })
  }

  getTotalWordCount(): number {
    return this.allWords.length
  }

  getWordsWithSurahCount(): number {
    return this.allWords.filter((word) => word.examples.length > 0).length
  }

  getSurahCoveragePercentage(): number {
    return (this.getWordsWithSurahCount() / this.getTotalWordCount()) * 100
  }

  getWordsByPhase(phase: number): VocabularyWord[] {
    switch (phase) {
      case 1: return additionalVocabularyData
      case 2: return phase2VocabularyData
      case 3: return phase3VocabularyData
      case 4: return phase4VocabularyData
      case 5: return phase5VocabularyData
      case 6: return phase6VocabularyData
      case 7: return phase7VocabularyData
      case 8: return phase8VocabularyData
      case 9: return phase9VocabularyData
      case 10: return [...familyRelationshipsVocabulary, ...divineAttributesVocabulary]
      default: return []
    }
  }
}

export const vocabularyService = new VocabularyService()
export const getAllVocabulary = () => vocabularyService.getAllWords()
export const getAllVocabularyWords = () => vocabularyService.getAllWords()
export type { SurahInfo }
