import { vocabularyService } from "@/services/vocabulary-service"
import type { VocabularyWord } from "@/types/vocabulary"

// Type for a memory match set
export interface MemoryMatchSet {
  id: number
  name: string
  description: string
  words: {
    id: string
    arabic: string
    meaning: string
  }[]
}

// Function to create 50 sets of 8 words each from our vocabulary
const createMemoryMatchSets = (): MemoryMatchSet[] => {
  const allWords = vocabularyService.getAllWords()
  const totalWords = allWords.length
  const wordsPerSet = 8
  const totalSets = Math.floor(totalWords / wordsPerSet)

  // Create sets
  const sets: MemoryMatchSet[] = []

  // Group words by category where possible
  const categorizedWords: Record<string, VocabularyWord[]> = {}

  // First, group words by their primary tag
  allWords.forEach((word) => {
    if (word.tags && word.tags.length > 0) {
      const primaryTag = word.tags[0]
      if (!categorizedWords[primaryTag]) {
        categorizedWords[primaryTag] = []
      }
      categorizedWords[primaryTag].push(word)
    }
  })

  // Create category-based sets first
  let setId = 1
  Object.entries(categorizedWords).forEach(([category, words]) => {
    // Skip if not enough words in this category
    if (words.length < wordsPerSet) return

    // Create as many complete sets as possible from this category
    const setsFromCategory = Math.floor(words.length / wordsPerSet)

    for (let i = 0; i < setsFromCategory; i++) {
      const setWords = words.slice(i * wordsPerSet, (i + 1) * wordsPerSet)

      sets.push({
        id: setId++,
        name: `${category.charAt(0).toUpperCase() + category.slice(1)} Set ${i + 1}`,
        description: `Practice ${category} vocabulary words from the Quran`,
        words: setWords.map((word) => ({
          id: word.id,
          arabic: word.arabic,
          meaning: word.meanings[0],
        })),
      })
    }
  })

  // Fill remaining sets with mixed words
  const usedWordIds = new Set(sets.flatMap((set) => set.words.map((word) => word.id)))
  const remainingWords = allWords.filter((word) => !usedWordIds.has(word.id))

  // Shuffle remaining words
  const shuffledRemainingWords = [...remainingWords].sort(() => Math.random() - 0.5)

  // Create mixed sets
  const remainingSets = totalSets - sets.length
  for (let i = 0; i < remainingSets && i * wordsPerSet < shuffledRemainingWords.length; i++) {
    const setWords = shuffledRemainingWords.slice(i * wordsPerSet, (i + 1) * wordsPerSet)

    // Skip if not enough words for a complete set
    if (setWords.length < wordsPerSet) continue

    sets.push({
      id: setId++,
      name: `Mixed Vocabulary Set ${i + 1}`,
      description: `Practice a variety of Quranic vocabulary words`,
      words: setWords.map((word) => ({
        id: word.id,
        arabic: word.arabic,
        meaning: word.meanings[0],
      })),
    })
  }

  return sets
}

export const memoryMatchSets = createMemoryMatchSets()

// Get total unique words used in all sets
export const getTotalUniqueWords = (): number => {
  const uniqueWordIds = new Set(memoryMatchSets.flatMap((set) => set.words.map((word) => word.id)))
  return uniqueWordIds.size
}

// Get total words in vocabulary
export const getTotalVocabularyWords = (): number => {
  return vocabularyService.getAllWords().length
}
