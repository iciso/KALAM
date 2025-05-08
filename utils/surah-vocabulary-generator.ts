import { enhancedVocabularyService } from "@/services/enhanced-vocabulary-service"
import type { VocabularyWord, VocabularyExample } from "@/types/vocabulary"
import fs from "fs"

/**
 * Utility to automatically generate Surah-segregated vocabulary lists
 * from the complete Quranic vocabulary database
 */
export class SurahVocabularyGenerator {
  private allWords: VocabularyWord[]
  private allSurahs: { number: number; name: string; wordCount: number }[]
  private surahWordMap: Map<number, VocabularyWord[]>
  private nonAssignedWords: VocabularyWord[]

  constructor() {
    // Get all vocabulary words and Surahs
    this.allWords = enhancedVocabularyService.getAllWords()
    this.allSurahs = enhancedVocabularyService.getAllSurahs()
    this.surahWordMap = new Map()
    this.nonAssignedWords = []

    // Initialize the Surah word map
    this.allSurahs.forEach((surah) => {
      this.surahWordMap.set(surah.number, [])
    })

    // Process all words
    this.processWords()
  }

  /**
   * Process all words and assign them to Surahs
   */
  private processWords(): void {
    this.allWords.forEach((word) => {
      // Check if the word has examples with Surah references
      const hasSurahReferences = word.examples && word.examples.some((example) => example.surahNumber)

      if (hasSurahReferences) {
        // Add word to each Surah it appears in
        const surahNumbers = new Set<number>()

        word.examples.forEach((example) => {
          if (example.surahNumber) {
            surahNumbers.add(example.surahNumber)
          }
        })

        // Add the word to each Surah's list
        surahNumbers.forEach((surahNumber) => {
          const surahWords = this.surahWordMap.get(surahNumber) || []
          surahWords.push(word)
          this.surahWordMap.set(surahNumber, surahWords)
        })
      } else {
        // Word doesn't have Surah references, add to non-assigned list
        this.nonAssignedWords.push(word)
      }
    })
  }

  /**
   * Automatically assign non-assigned words to appropriate Surahs
   * based on word characteristics
   */
  public autoAssignWords(): void {
    this.nonAssignedWords.forEach((word) => {
      // Simple assignment strategy based on word difficulty
      // In a real implementation, this would use more sophisticated matching
      let targetSurahs: number[] = []

      switch (word.difficulty) {
        case "beginner":
          // Assign beginner words to early Surahs
          targetSurahs = [1, 2, 3, 4, 5]
          break
        case "intermediate":
          // Assign intermediate words to middle Surahs
          targetSurahs = [6, 7, 8, 9, 10]
          break
        case "advanced":
          // Assign advanced words to later Surahs
          targetSurahs = [11, 12, 13, 14, 15]
          break
      }

      // Create example objects for each target Surah
      const newExamples: VocabularyExample[] = targetSurahs.map((surahNumber) => {
        const surah = this.allSurahs.find((s) => s.number === surahNumber)
        return {
          id: `auto-${word.id}-surah-${surahNumber}`,
          surahNumber,
          surahName: surah?.name || `Surah ${surahNumber}`,
          ayahNumber: 1, // Placeholder
          arabicText: word.arabic, // Placeholder
          translationText: word.meanings[0], // Placeholder
          wordLocation: {
            startIndex: 0,
            endIndex: word.arabic.length,
          },
          hasAudio: false,
        }
      })

      // Create a new word with the examples
      const wordWithExamples: VocabularyWord = {
        ...word,
        examples: [...(word.examples || []), ...newExamples],
      }

      // Add the word to each target Surah
      targetSurahs.forEach((surahNumber) => {
        const surahWords = this.surahWordMap.get(surahNumber) || []
        surahWords.push(wordWithExamples)
        this.surahWordMap.set(surahNumber, surahWords)
      })
    })

    // Clear the non-assigned words list
    this.nonAssignedWords = []
  }

  /**
   * Get statistics about the Surah vocabulary distribution
   */
  public getStats(): {
    totalWords: number
    assignedWords: number
    nonAssignedWords: number
    coveragePercentage: number
    surahCounts: { surahNumber: number; surahName: string; wordCount: number }[]
  } {
    // Count unique assigned words
    const uniqueAssignedWordIds = new Set<string>()

    this.surahWordMap.forEach((words, _) => {
      words.forEach((word) => {
        uniqueAssignedWordIds.add(word.id)
      })
    })

    const assignedWords = uniqueAssignedWordIds.size
    const totalWords = this.allWords.length
    const nonAssignedWords = this.nonAssignedWords.length
    const coveragePercentage = (assignedWords / totalWords) * 100

    // Get word counts for each Surah
    const surahCounts = Array.from(this.surahWordMap.entries())
      .map(([surahNumber, words]) => {
        const surah = this.allSurahs.find((s) => s.number === surahNumber)
        return {
          surahNumber,
          surahName: surah?.name || `Surah ${surahNumber}`,
          wordCount: words.length,
        }
      })
      .sort((a, b) => a.surahNumber - b.surahNumber)

    return {
      totalWords,
      assignedWords,
      nonAssignedWords,
      coveragePercentage,
      surahCounts,
    }
  }

  /**
   * Generate a data file with Surah-segregated vocabulary
   */
  public generateDataFile(outputPath: string): void {
    // Create the output data structure
    const surahVocabularyData = Array.from(this.surahWordMap.entries())
      .map(([surahNumber, words]) => {
        const surah = this.allSurahs.find((s) => s.number === surahNumber)
        return {
          surahNumber,
          surahName: surah?.name || `Surah ${surahNumber}`,
          words: words.map((word) => ({
            id: word.id,
            arabic: word.arabic,
            transliteration: word.transliteration,
            meanings: word.meanings,
            partOfSpeech: word.partOfSpeech,
            difficulty: word.difficulty,
            examples: word.examples.filter((ex) => ex.surahNumber === surahNumber),
          })),
        }
      })
      .sort((a, b) => a.surahNumber - b.surahNumber)

    // Write to file
    const data = `
// Auto-generated Surah vocabulary data
// Generated on: ${new Date().toISOString()}

export const surahVocabularyData = ${JSON.stringify(surahVocabularyData, null, 2)}
`

    fs.writeFileSync(outputPath, data)
  }
}
