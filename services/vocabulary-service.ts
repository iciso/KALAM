import type { VocabularyWord } from "@/types/vocabulary"
import { databaseService } from "./database-service"

export interface SurahInfo {
  number: number
  name: string
  wordCount: number
}

// class VocabularyService {
//   private allWords: VocabularyWord[]
//   private surahMap: Map<number, SurahInfo> = new Map()

//   constructor() {
//     this.allWords = [
//       ...vocabularyData,
//       ...additionalVocabularyData,
//       ...phase2VocabularyData,
//       ...phase3VocabularyData,
//       ...phase4VocabularyData,
//       ...phase5VocabularyData,
//       ...phase6VocabularyData,
//       ...phase7VocabularyData,
//       ...phase8VocabularyData,
//       ...phase9VocabularyData,
//       ...familyRelationshipsVocabulary,
//       ...divineAttributesVocabulary,
//       ...prophetsVocabulary,
//     ]
//     this.initSurahMap()
//   }

//   private initSurahMap() {
//     for (const word of this.allWords) {
//       for (const example of word.examples) {
//         const surahNumber = example.surahNumber
//         const surahName = example.surahName

//         if (!this.surahMap.has(surahNumber)) {
//           this.surahMap.set(surahNumber, {
//             name: surahName,
//             wordCount: 0,
//           })
//         }
//       }
//     }

//     // Count words per surah
//     for (const word of this.allWords) {
//       const surahNumbers = new Set<number>()

//       for (const example of word.examples) {
//         surahNumbers.add(example.surahNumber)
//       }

//       for (const surahNumber of surahNumbers) {
//         const surah = this.surahMap.get(surahNumber)
//         if (surah) {
//           surah.wordCount++
//         }
//       }
//     }
//   }

//   getAllWords(): VocabularyWord[] {
//     return this.allWords
//   }

//   getWordsByDifficulty(difficulty: Difficulty): VocabularyWord[] {
//     return this.allWords.filter((word) => word.difficulty === difficulty)
//   }

//   getWordsBySurah(surahNumber: number): VocabularyWord[] {
//     return this.allWords.filter((word) => word.examples.some((example) => example.surahNumber === surahNumber))
//   }

//   getAllSurahs(): SurahInfo[] {
//     const surahs: SurahInfo[] = []
//     for (const [number, data] of this.surahMap.entries()) {
//       surahs.push({
//         number,
//         name: data.name,
//         wordCount: data.wordCount,
//       })
//     }
//     return surahs.sort((a, b) => a.number - b.number)
//   }

//   // Get all categories
//   getAllCategories() {
//     return vocabularyCategories.map((category) => ({
//       id: category.id,
//       name: category.name,
//       description: category.description,
//       wordIds: this.getWordsByCategoryId(category.id).map((word) => word.id),
//     }))
//   }

//   // Get words by category ID
//   getWordsByCategoryId(categoryId: string): VocabularyWord[] {
//     const category = vocabularyCategories.find((c) => c.id === categoryId)
//     if (!category) return []

//     // If it's the prophets category, return all words with the prophets tag
//     if (categoryId === "prophets") {
//       return this.allWords.filter((word) => word.tags && word.tags.includes("prophets"))
//     }

//     // For other categories, use the existing logic
//     return this.allWords.filter((word) => {
//       // Check if the word has the category tag
//       if (word.tags && word.tags.includes(categoryId)) {
//         return true
//       }

//       // Check if the word is in the category's wordIds
//       if (category.wordIds && category.wordIds.includes(word.id)) {
//         return true
//       }

//       return false
//     })
//   }

//   // Search for words
//   searchWords(query: string): VocabularyWord[] {
//     const lowercaseQuery = query.toLowerCase()
//     return this.allWords.filter((word) => {
//       // Search in Arabic
//       if (word.arabic.includes(query)) {
//         return true
//       }

//       // Search in transliteration
//       if (word.transliteration.toLowerCase().includes(lowercaseQuery)) {
//         return true
//       }

//       // Search in meanings
//       if (word.meanings.some((meaning) => meaning.toLowerCase().includes(lowercaseQuery))) {
//         return true
//       }

//       // Search in root letters
//       if (word.rootLetters && word.rootLetters.includes(query)) {
//         return true
//       }

//       return false
//     })
//   }

//   // Get total number of words in the dictionary
//   getTotalWordCount(): number {
//     return this.allWords.length
//   }

//   // Get total number of words with Surah associations
//   getWordsWithSurahCount(): number {
//     return this.allWords.filter((word) => word.examples.length > 0).length
//   }

//   // Get coverage percentage
//   getSurahCoveragePercentage(): number {
//     return (this.getWordsWithSurahCount() / this.getTotalWordCount()) * 100
//   }

//   // Phase-specific methods
//   getPhase5Words(): VocabularyWord[] {
//     return phase5VocabularyData
//   }

//   getPhase6Words(): VocabularyWord[] {
//     return phase6VocabularyData
//   }

//   getPhase7Words(): VocabularyWord[] {
//     return phase7VocabularyData
//   }

//   getPhase8Words(): VocabularyWord[] {
//     return phase8VocabularyData
//   }

//   getPhase9Words(): VocabularyWord[] {
//     return phase9VocabularyData
//   }

//   // Generic method to get words by phase number
//   getWordsByPhase(phase: number): VocabularyWord[] {
//     switch (phase) {
//       case 1:
//         return additionalVocabularyData
//       case 2:
//         return phase2VocabularyData
//       case 3:
//         return phase3VocabularyData
//       case 4:
//         return phase4VocabularyData
//       case 5:
//         return phase5VocabularyData
//       case 6:
//         return phase6VocabularyData
//       case 7:
//         return phase7VocabularyData
//       case 8:
//         return phase8VocabularyData
//       case 9:
//         return phase9VocabularyData
//       case 10:
//         return [...familyRelationshipsVocabulary, ...divineAttributesVocabulary]
//       default:
//         return []
//     }
//   }
// }

// export const vocabularyService = new VocabularyService()

export const vocabularyService = {
  async getAllWords(): Promise<VocabularyWord[]> {
    return databaseService.getAllWords()
  },

  async getWordById(id: string): Promise<VocabularyWord | null> {
    return databaseService.getWordById(id)
  },

  async getWordsByTag(tag: string): Promise<VocabularyWord[]> {
    return databaseService.getWordsByTag(tag)
  },

  // Add more methods as needed
}

export const getAllVocabulary = () => vocabularyService.getAllWords()

export const getAllVocabularyWords = () => vocabularyService.getAllWords()

export type { SurahInfo }
