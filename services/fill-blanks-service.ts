import { vocabularyService } from "./vocabulary-service"
import type { VocabularyWord } from "@/types/vocabulary"

export interface FillBlankSentence {
  id: string
  text: string
  blanks: {
    id: string
    word: string
    filled: string | null
  }[]
  surahName?: string
  surahNumber?: number
  ayahNumber?: number
  translation?: string
  originalText?: string // For debugging
}

export class FillBlanksService {
  // Generate a set of fill-in-the-blank sentences from vocabulary examples
  generateSentences(count = 5): FillBlankSentence[] {
    const allWords = vocabularyService.getAllWords()
    const wordsWithExamples = allWords.filter((word) => word.examples && word.examples.length > 0)

    // Shuffle the words to get random ones each time
    const shuffledWords = this.shuffleArray([...wordsWithExamples])

    // Take only the number we need - get more than we need to ensure we have enough valid ones
    const selectedWords = shuffledWords.slice(0, Math.min(count * 3, shuffledWords.length))

    // Generate sentences from these words
    const sentences = selectedWords.map((word, index) => this.createSentenceFromWord(word, index))

    // Validate sentences - ensure each has at least one blank and valid text
    const validSentences = sentences.filter(
      (sentence) => sentence.text && sentence.text.includes("___") && sentence.blanks && sentence.blanks.length > 0,
    )

    // Return only the requested number of valid sentences
    return validSentences.slice(0, count)
  }

  // Create a fill-in-the-blank sentence from a vocabulary word
  private createSentenceFromWord(word: VocabularyWord, index: number): FillBlankSentence {
    // Get a random example from this word
    const examples = word.examples || []
    if (examples.length === 0) {
      // Fallback if no examples (shouldn't happen due to filter above)
      return this.createFallbackSentence(word, index)
    }

    const example = examples[Math.floor(Math.random() * examples.length)]

    // Get the Arabic text from the example
    const arabicText = example.arabicText || ""

    // Ensure we have text to work with
    if (!arabicText || arabicText.trim() === "") {
      return this.createFallbackSentence(word, index)
    }

    const blanks: { id: string; word: string; filled: string | null }[] = []

    // Add the word as a blank
    blanks.push({
      id: `blank-${index}-1`,
      word: word.arabic,
      filled: null,
    })

    // Create a modified text with a blank replacing the word
    let modifiedText = arabicText

    // First, try to use the word location if available
    if (
      example.wordLocation &&
      example.wordLocation.startIndex !== undefined &&
      example.wordLocation.endIndex !== undefined
    ) {
      // If we have word location info, use it to place the blank
      const startIndex = example.wordLocation.startIndex
      const endIndex = example.wordLocation.endIndex

      // Replace ONLY this occurrence of the word
      modifiedText = arabicText.substring(0, startIndex) + "___" + arabicText.substring(endIndex)
    } else {
      // If we don't have location info, we need to be more careful

      // First, try an exact match of the word
      const exactWordIndex = arabicText.indexOf(word.arabic)

      if (exactWordIndex >= 0) {
        // Replace ONLY this occurrence of the word
        modifiedText =
          arabicText.substring(0, exactWordIndex) + "___" + arabicText.substring(exactWordIndex + word.arabic.length)
      } else {
        // If exact match fails, try to find any variation of the word (with/without diacritics)
        // This is a simplified approach - for a more robust solution, we'd need a proper Arabic text processor

        // Remove diacritics for comparison (simplified approach)
        const simplifiedWord = this.removeDiacritics(word.arabic)
        const simplifiedText = this.removeDiacritics(arabicText)

        const simplifiedWordIndex = simplifiedText.indexOf(simplifiedWord)

        if (simplifiedWordIndex >= 0) {
          // Find the corresponding position in the original text
          // This is an approximation and might not be perfect for all cases
          let charCount = 0
          let originalIndex = 0

          for (let i = 0; i < arabicText.length; i++) {
            if (this.removeDiacritics(arabicText[i]) !== "") {
              charCount++
            }

            if (charCount > simplifiedWordIndex) {
              originalIndex = i - (charCount - simplifiedWordIndex) + 1
              break
            }
          }

          // Estimate the word length in the original text
          let wordLength = 0
          let diacriticCount = 0

          for (let i = originalIndex; i < arabicText.length; i++) {
            if (this.removeDiacritics(arabicText[i]) === "") {
              diacriticCount++
            } else {
              wordLength++
            }

            if (wordLength >= simplifiedWord.length) {
              break
            }
          }

          // Replace the word in the original text
          modifiedText =
            arabicText.substring(0, originalIndex) +
            "___" +
            arabicText.substring(originalIndex + wordLength + diacriticCount)
        } else {
          // If we still can't find the word, just append it with a blank
          modifiedText = arabicText + " (___)"
        }
      }
    }

    // ADDITIONAL SAFETY CHECK: Make sure the word is not still in the text
    // This is a brute force approach but should catch most cases
    const wordWithoutDiacritics = this.removeDiacritics(word.arabic)
    const textWithoutDiacritics = this.removeDiacritics(modifiedText)

    if (textWithoutDiacritics.includes(wordWithoutDiacritics)) {
      // The word is still in the text, so let's replace all occurrences
      // This is a simplified approach and might not be perfect for all cases
      const regex = new RegExp(wordWithoutDiacritics, "g")
      const matches = [...textWithoutDiacritics.matchAll(regex)]

      // Start from the end to avoid index shifting
      for (let i = matches.length - 1; i >= 0; i--) {
        const match = matches[i]
        if (match.index !== undefined) {
          // Find the corresponding position in the original text
          let charCount = 0
          let originalIndex = 0

          for (let j = 0; j < modifiedText.length; j++) {
            if (this.removeDiacritics(modifiedText[j]) !== "") {
              charCount++
            }

            if (charCount > match.index) {
              originalIndex = j - (charCount - match.index) + 1
              break
            }
          }

          // Estimate the word length in the original text
          let wordLength = 0
          let diacriticCount = 0

          for (let j = originalIndex; j < modifiedText.length; j++) {
            if (this.removeDiacritics(modifiedText[j]) === "") {
              diacriticCount++
            } else {
              wordLength++
            }

            if (wordLength >= wordWithoutDiacritics.length) {
              break
            }
          }

          // Replace the word in the original text
          modifiedText =
            modifiedText.substring(0, originalIndex) +
            "___" +
            modifiedText.substring(originalIndex + wordLength + diacriticCount)
        }
      }
    }

    // Final validation: ensure we have at least one blank in the text
    if (!modifiedText.includes("___")) {
      modifiedText = "___" + modifiedText
    }

    return {
      id: `sentence-${index}`,
      text: modifiedText,
      blanks: blanks,
      surahName: example.surahName,
      surahNumber: example.surahNumber,
      ayahNumber: example.ayahNumber,
      translation: example.translationText,
      originalText: arabicText, // For debugging
    }
  }

  // Helper function to remove Arabic diacritics (simplified)
  private removeDiacritics(text: string): string {
    // This is a simplified approach - for a more robust solution, we'd need a proper Arabic text processor
    const diacritics = [
      "\u064B",
      "\u064C",
      "\u064D",
      "\u064E",
      "\u064F",
      "\u0650",
      "\u0651",
      "\u0652",
      "\u0653",
      "\u0654",
      "\u0655",
      "\u0656",
      "\u0657",
      "\u0658",
      "\u0659",
      "\u065A",
      "\u065B",
      "\u065C",
      "\u065D",
      "\u065E",
      "\u065F",
      "\u0670",
    ]

    let result = text
    for (const diacritic of diacritics) {
      result = result.replace(new RegExp(diacritic, "g"), "")
    }

    return result
  }

  // Create a fallback sentence if we can't use an example
  private createFallbackSentence(word: VocabularyWord, index: number): FillBlankSentence {
    // Create a simple sentence with the word as a blank
    return {
      id: `sentence-${index}`,
      text: `___ ${word.transliteration} (${word.meanings[0]})`,
      blanks: [
        {
          id: `blank-${index}-1`,
          word: word.arabic,
          filled: null,
        },
      ],
    }
  }

  // Utility function to shuffle an array
  private shuffleArray<T>(array: T[]): T[] {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Generate distractor words for a given set of sentences
  generateDistractorWords(sentences: FillBlankSentence[], count = 3): string[] {
    const correctWords = sentences.flatMap((sentence) => sentence.blanks.map((blank) => blank.word))

    // Get all words except those already used as correct answers
    const allWords = vocabularyService.getAllWords()
    const potentialDistractors = allWords
      .filter((word) => !correctWords.includes(word.arabic))
      .map((word) => word.arabic)

    // Shuffle and take what we need
    return this.shuffleArray(potentialDistractors).slice(0, count)
  }
}

export const fillBlanksService = new FillBlanksService()
