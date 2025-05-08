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
import { prophetsVocabulary } from "@/data/vocabulary-data-prophets"
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

  getAllWords(): VocabularyWord[] {
    return this.allWords
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
      surahs.push({
        number,
        name: data.name,
        wordCount: data.wordCount,
      })
    }
    return surahs.sort((a, b) => a.number - b.number)
  }

  // Get total number of words in the dictionary
  getTotalWordCount(): number {
    return this.allWords.length
  }

  // Get total number of words with Surah associations
  getWordsWithSurahCount(): number {
    return this.allWords.filter((word) => word.examples.length > 0).length
  }

  // Get coverage percentage
  getSurahCoveragePercentage(): number {
    return (this.getWordsWithSurahCount() / this.getTotalWordCount()) * 100
  }
}

export const vocabularyService = new VocabularyService()

export const getAllVocabulary = () => vocabularyService.getAllWords()

export const getAllVocabularyWords = () => vocabularyService.getAllWords()

export type { SurahInfo }
