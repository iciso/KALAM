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

// Function to create sets of 4 words each from our vocabulary
const createMemoryMatchSets = (): MemoryMatchSet[] => {
  const allWords = vocabularyService.getAllWords()
  const totalWords = allWords.length
  const wordsPerSet = 4
  const totalSets = Math.floor(totalWords / wordsPerSet)

  const sets: MemoryMatchSet[] = []

  const categorizedWords: Record<string, VocabularyWord[]> = {}

  allWords.forEach((word) => {
    if (word.tags && word.tags.length > 0) {
      const primaryTag = word.tags[0]
      if (!categorizedWords[primaryTag]) {
        categorizedWords[primaryTag] = []
      }
      categorizedWords[primaryTag].push(word)
    }
  })

  let setId = 1
  Object.entries(categorizedWords).forEach(([category, words]) => {
    if (words.length < wordsPerSet) return
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

  const usedWordIds = new Set(sets.flatMap((set) => set.words.map((word) => word.id)))
  const remainingWords = allWords.filter((word) => !usedWordIds.has(word.id))
  const shuffledRemainingWords = [...remainingWords].sort(() => Math.random() - 0.5)

  const remainingSets = totalSets - sets.length
  for (let i = 0; i < remainingSets && i * wordsPerSet < shuffledRemainingWords.length; i++) {
    const setWords = shuffledRemainingWords.slice(i * wordsPerSet, (i + 1) * wordsPerSet)
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

export const getTotalUniqueWords = (): number => {
  const uniqueWordIds = new Set(memoryMatchSets.flatMap((set) => set.words.map((word) => word.id)))
  return uniqueWordIds.size
}

export const getTotalVocabularyWords = (): number => {
  return vocabularyService.getAllWords().length
}
