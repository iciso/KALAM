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
import { type VocabularyWord, Difficulty } from "@/types/vocabulary"
import { vocabularyCategories } from "@/data/vocabulary-categories"

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
      ...familyRelationshipsVocabulary,
      ...divineAttributesVocabulary,
      ...prophetsVocabulary,
    ]

    // Create map of surahs
    this.surahMap = new Map()
    this.initSurahMap()

    // Ensure all words have Surah associations
    this.ensureAllWordsHaveSurahAssociations()
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

  // Ensure all words have Surah associations
  private ensureAllWordsHaveSurahAssociations() {
    // Get all words without Surah examples
    const wordsWithoutSurah = this.allWords.filter((word) => word.examples.length === 0)

    // If there are words without Surah associations, assign them
    if (wordsWithoutSurah.length > 0) {
      // Get a default Surah to assign words to (Al-Fatihah)
      const defaultSurah = {
        surahNumber: 1,
        surahName: "Al-Fatihah",
        verseNumber: 1,
        arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        translationText: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
      }

      // Assign the default Surah to all words without examples
      for (const word of wordsWithoutSurah) {
        word.examples = [defaultSurah]

        // Update the Surah map
        const surah = this.surahMap.get(1)
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

  // Get family relationship words
  getFamilyRelationshipWords(): VocabularyWord[] {
    return this.allWords.filter((word) => word.tags && word.tags.includes("family"))
  }

  // Get divine attribute words
  getDivineAttributeWords(): VocabularyWord[] {
    return this.allWords.filter((word) => word.tags && word.tags.includes("asma-ul-husna"))
  }

  // Get prophets words
  getProphets(): VocabularyWord[] {
    return this.allWords.filter((word) => word.tags && word.tags.includes("prophets"))
  }

  // Get all categories
  getAllCategories() {
    // Return the full category objects, not just the names
    return vocabularyCategories.map((category) => ({
      id: category.id,
      name: category.name,
      description: category.description,
      wordIds: this.getWordsByCategoryId(category.id).map((word) => word.id),
    }))
  }

  // Get words by category ID
  getWordsByCategoryId(categoryId: string): VocabularyWord[] {
    const category = vocabularyCategories.find((c) => c.id === categoryId)
    if (!category) return []

    // If it's the prophets category, return all words with the prophets tag
    if (categoryId === "prophets") {
      return this.getProphets()
    }

    // For other categories, use the existing logic
    return this.allWords.filter((word) => {
      // Check if the word has the category tag
      if (word.tags && word.tags.includes(categoryId)) {
        return true
      }

      // Check if the word is in the category's wordIds
      if (category.wordIds && category.wordIds.includes(word.id)) {
        return true
      }

      return false
    })
  }

  // Get most frequent words
  getMostFrequentWords(count: number): VocabularyWord[] {
    // Filter words that have frequency property
    const wordsWithFrequency = this.allWords.filter((word) => word.frequency !== undefined)

    // Sort by frequency in descending order
    const sortedWords = [...wordsWithFrequency].sort((a, b) => {
      const freqA = a.frequency || 0
      const freqB = b.frequency || 0
      return freqB - freqA
    })

    // Return the top 'count' words
    return sortedWords.slice(0, count)
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

export const enhancedVocabularyService = new EnhancedVocabularyService()
