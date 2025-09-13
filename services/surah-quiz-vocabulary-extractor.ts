import { type VocabularyWord, Difficulty, PartOfSpeech } from "@/types/vocabulary"

interface SurahQuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswerIndex: number
  explanation?: string
  arabicText?: string
  transliteration?: string
  meaning?: string
}

interface SurahQuizData {
  surahId: number
  surahName: string
  surahArabicName: string
  questions: SurahQuizQuestion[]
}

export class SurahQuizVocabularyExtractor {
  private extractedWords: VocabularyWord[] = []
  private wordIdCounter = 1

  /**
   * Extract vocabulary from Surah quiz data
   */
  extractFromQuizData(quizData: SurahQuizData): VocabularyWord[] {
    const words: VocabularyWord[] = []

    for (const question of quizData.questions) {
      // Extract from question text
      const questionWords = this.extractWordsFromText(question.question, quizData.surahId, quizData.surahName)
      words.push(...questionWords)

      // Extract from explanation if available
      if (question.explanation) {
        const explanationWords = this.extractWordsFromText(question.explanation, quizData.surahId, quizData.surahName)
        words.push(...explanationWords)
      }

      // Extract from options
      for (const option of question.options) {
        const optionWords = this.extractWordsFromText(option, quizData.surahId, quizData.surahName)
        words.push(...optionWords)
      }
    }

    // Remove duplicates based on Arabic text
    const uniqueWords = this.removeDuplicates(words)
    this.extractedWords.push(...uniqueWords)

    return uniqueWords
  }

  /**
   * Extract Arabic words from text
   */
  private extractWordsFromText(text: string, surahNumber: number, surahName: string): VocabularyWord[] {
    const words: VocabularyWord[] = []

    // Regex to find Arabic text patterns
    const arabicPattern = /[\u0600-\u06FF]+/g
    const matches = text.match(arabicPattern)

    if (matches) {
      for (const arabicText of matches) {
        // Skip very short words (likely particles)
        if (arabicText.length < 2) continue

        // Create vocabulary word
        const word: VocabularyWord = {
          id: `quiz-extracted-${this.wordIdCounter++}`,
          arabic: arabicText,
          transliteration: this.generateTransliteration(arabicText),
          meanings: this.extractMeaningFromContext(text, arabicText),
          partOfSpeech: this.guessPartOfSpeech(arabicText),
          difficulty: this.guessDifficulty(arabicText),
          frequency: 1,
          tags: ["quiz-extracted", `surah-${surahNumber}`],
          examples: [
            {
              id: `example-${this.wordIdCounter}`,
              surahNumber: surahNumber,
              surahName: surahName,
              ayahNumber: 1, // Default, would need actual ayah context
              arabicText: text,
              translationText: this.extractTranslation(text),
              wordLocation: {
                startIndex: text.indexOf(arabicText),
                endIndex: text.indexOf(arabicText) + arabicText.length,
              },
              hasAudio: false,
            },
          ],
          hasAudio: false,
        }

        words.push(word)
      }
    }

    return words
  }

  /**
   * Generate basic transliteration (simplified)
   */
  private generateTransliteration(arabicText: string): string {
    // Basic Arabic to Latin transliteration mapping
    const transliterationMap: { [key: string]: string } = {
      ا: "a",
      ب: "b",
      ت: "t",
      ث: "th",
      ج: "j",
      ح: "h",
      خ: "kh",
      د: "d",
      ذ: "dh",
      ر: "r",
      ز: "z",
      س: "s",
      ش: "sh",
      ص: "s",
      ض: "d",
      ط: "t",
      ظ: "z",
      ع: "'",
      غ: "gh",
      ف: "f",
      ق: "q",
      ك: "k",
      ل: "l",
      م: "m",
      ن: "n",
      ه: "h",
      و: "w",
      ي: "y",
    }

    let transliteration = ""
    for (const char of arabicText) {
      transliteration += transliterationMap[char] || char
    }

    return transliteration || "unknown"
  }

  /**
   * Extract meaning from context
   */
  private extractMeaningFromContext(text: string, arabicWord: string): string[] {
    // Look for patterns like "means", "refers to", etc.
    const meaningPatterns = [/means?\s+([^.]+)/i, /refers?\s+to\s+([^.]+)/i, /is\s+([^.]+)/i]

    for (const pattern of meaningPatterns) {
      const match = text.match(pattern)
      if (match && match[1]) {
        return [match[1].trim()]
      }
    }

    return ["meaning to be determined"]
  }

  /**
   * Extract translation from text
   */
  private extractTranslation(text: string): string {
    // Look for quoted text or parenthetical translations
    const translationPatterns = [/"([^"]+)"/, /$$([^)]+)$$/, /means?\s+([^.]+)/i]

    for (const pattern of translationPatterns) {
      const match = text.match(pattern)
      if (match && match[1]) {
        return match[1].trim()
      }
    }

    return text.substring(0, 100) + "..."
  }

  /**
   * Guess part of speech based on Arabic patterns
   */
  private guessPartOfSpeech(arabicText: string): PartOfSpeech {
    // Basic heuristics for part of speech
    if (arabicText.startsWith("ال")) {
      return PartOfSpeech.Noun
    }
    if (arabicText.length >= 3) {
      return PartOfSpeech.Verb
    }
    return PartOfSpeech.Other
  }

  /**
   * Guess difficulty based on word length and complexity
   */
  private guessDifficulty(arabicText: string): Difficulty {
    if (arabicText.length <= 3) {
      return Difficulty.Beginner
    } else if (arabicText.length <= 6) {
      return Difficulty.Intermediate
    } else {
      return Difficulty.Advanced
    }
  }

  /**
   * Remove duplicate words based on Arabic text
   */
  private removeDuplicates(words: VocabularyWord[]): VocabularyWord[] {
    const seen = new Set<string>()
    return words.filter((word) => {
      if (seen.has(word.arabic)) {
        return false
      }
      seen.add(word.arabic)
      return true
    })
  }

  /**
   * Get all extracted words
   */
  getAllExtractedWords(): VocabularyWord[] {
    return this.extractedWords
  }

  /**
   * Get statistics
   */
  getStats() {
    return {
      totalExtracted: this.extractedWords.length,
      byDifficulty: {
        beginner: this.extractedWords.filter((w) => w.difficulty === Difficulty.Beginner).length,
        intermediate: this.extractedWords.filter((w) => w.difficulty === Difficulty.Intermediate).length,
        advanced: this.extractedWords.filter((w) => w.difficulty === Difficulty.Advanced).length,
      },
    }
  }
}
