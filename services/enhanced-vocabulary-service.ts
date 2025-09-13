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
import { type VocabularyWord, Difficulty } from "@/types/vocabulary"
import { vocabularyCategories } from "@/data/vocabulary-categories"

// Try to import the generated surah vocabulary data
let surahVocabularyData: VocabularyWord[] = []
try {
  const surahData = require("@/data/surah-vocabulary-data")
  surahVocabularyData = surahData.surahVocabularyData || []
} catch (error) {
  console.warn("Surah vocabulary data not found, continuing without it")
}

// Try to import the quiz-extracted vocabulary data
let quizExtractedVocabulary: VocabularyWord[] = []
try {
  const quizData = require("@/data/vocabulary-data-quiz-extracted")
  quizExtractedVocabulary = quizData.quizExtractedVocabulary || []
  console.log(`✅ Loaded ${quizExtractedVocabulary.length} quiz-extracted words`)
} catch (error) {
  console.warn("Quiz-extracted vocabulary data not found, continuing without it")
}

class EnhancedVocabularyService {
  private allWords: VocabularyWord[]
  private surahMap: Map<number, { name: string; wordCount: number }>
  private categoryMap: Map<string, VocabularyWord[]>

  constructor() {
    // Combine all vocabulary data and ensure all words have proper structure
    const rawWords = [
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
      ...surahVocabularyData,
      ...quizExtractedVocabulary, // Add the new quiz-extracted vocabulary
    ]

    console.log(`📊 Total raw words before processing: ${rawWords.length}`)

    // Ensure all words have proper structure
    this.allWords = rawWords.map((word) => ({
      ...word,
      examples: Array.isArray(word.examples) ? word.examples : [],
      tags: Array.isArray(word.tags) ? word.tags : [],
      meanings: Array.isArray(word.meanings) ? word.meanings : [],
      category: word.category || "General Quranic Vocabulary", // Ensure every word has a category
    }))

    console.log(`✅ Total processed words: ${this.allWords.length}`)

    // Create maps
    this.surahMap = new Map()
    this.categoryMap = new Map()
    this.initSurahMap()
    this.initCategoryMap()

    // Ensure all words have Surah associations
    this.ensureAllWordsHaveSurahAssociations()

    // Log category distribution
    this.logCategoryDistribution()
  }

  // Initialize surah map
  private initSurahMap() {
    for (const word of this.allWords) {
      // Ensure examples is an array before iterating
      if (Array.isArray(word.examples)) {
        for (const example of word.examples) {
          const surahNumber = example.surahNumber
          const surahName = example.surahName

          if (surahNumber && surahName && !this.surahMap.has(surahNumber)) {
            this.surahMap.set(surahNumber, {
              name: surahName,
              wordCount: 0,
            })
          }
        }
      }
    }

    // Count words per surah
    for (const word of this.allWords) {
      const surahNumbers = new Set<number>()

      if (Array.isArray(word.examples)) {
        for (const example of word.examples) {
          if (example.surahNumber) {
            surahNumbers.add(example.surahNumber)
          }
        }
      }

      for (const surahNumber of surahNumbers) {
        const surah = this.surahMap.get(surahNumber)
        if (surah) {
          surah.wordCount++
        }
      }
    }
  }

  // Initialize category map
  private initCategoryMap() {
    for (const word of this.allWords) {
      const category = word.category || "General Quranic Vocabulary"
      if (!this.categoryMap.has(category)) {
        this.categoryMap.set(category, [])
      }
      this.categoryMap.get(category)!.push(word)
    }
  }

  // Log category distribution for debugging
  private logCategoryDistribution() {
    console.log("\n📈 Category Distribution:")
    const sortedCategories = Array.from(this.categoryMap.entries()).sort(([, a], [, b]) => b.length - a.length)

    sortedCategories.forEach(([category, words]) => {
      console.log(`   - ${category}: ${words.length} words`)
    })
  }

  // Ensure all words have Surah associations
  private ensureAllWordsHaveSurahAssociations() {
    // Get all words without Surah examples
    const wordsWithoutSurah = this.allWords.filter(
      (word) => !Array.isArray(word.examples) || word.examples.length === 0,
    )

    // If there are words without Surah associations, assign them
    if (wordsWithoutSurah.length > 0) {
      console.log(`⚠️  Found ${wordsWithoutSurah.length} words without Surah associations, assigning defaults...`)

      // Get a default Surah to assign words to (Al-Fatihah)
      const defaultSurah = {
        id: "default-example",
        surahNumber: 1,
        surahName: "Al-Fatihah",
        ayahNumber: 1,
        arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        translationText: "In the name of Allah, the Entirely Merciful, the Especially Merciful.",
        wordLocation: {
          startIndex: 0,
          endIndex: 10,
        },
        hasAudio: false,
      }

      // Assign the default Surah to all words without examples
      for (const word of wordsWithoutSurah) {
        word.examples = [defaultSurah]

        // Update the Surah map
        if (!this.surahMap.has(1)) {
          this.surahMap.set(1, {
            name: "Al-Fatihah",
            wordCount: 0,
          })
        }
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

  // Get words by category
  getWordsByCategory(category: string): VocabularyWord[] {
    return this.categoryMap.get(category) || []
  }

  // Get all categories with word counts
  getAllCategoriesWithCounts(): Array<{ name: string; count: number }> {
    return Array.from(this.categoryMap.entries())
      .map(([name, words]) => ({ name, count: words.length }))
      .sort((a, b) => b.count - a.count)
  }

  // Get words by surah
  getWordsBySurah(surahNumber: number): VocabularyWord[] {
    return this.allWords.filter(
      (word) => Array.isArray(word.examples) && word.examples.some((example) => example.surahNumber === surahNumber),
    )
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
      if (Array.isArray(word.tags)) {
        tags.push(...word.tags)
      }
    }
    return [...new Set(tags)].sort()
  }

  // Get words by tag
  getWordsByTag(tag: string): VocabularyWord[] {
    return this.allWords.filter((word) => Array.isArray(word.tags) && word.tags.includes(tag))
  }

  // Get word by ID
  getWordById(id: string): VocabularyWord | undefined {
    return this.allWords.find((word) => word.id === id)
  }

  // Get related words for a given word
  getRelatedWords(word: VocabularyWord): VocabularyWord[] {
    if (!Array.isArray(word.relatedWords)) {
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
      if (word.arabic && word.arabic.includes(query)) {
        return true
      }

      // Search in transliteration
      if (word.transliteration && word.transliteration.toLowerCase().includes(lowercaseQuery)) {
        return true
      }

      // Search in meanings
      if (
        Array.isArray(word.meanings) &&
        word.meanings.some((meaning) => meaning.toLowerCase().includes(lowercaseQuery))
      ) {
        return true
      }

      // Search in category
      if (word.category && word.category.toLowerCase().includes(lowercaseQuery)) {
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
      if (word.difficulty && counts.hasOwnProperty(word.difficulty)) {
        counts[word.difficulty]++
      }
    }

    return counts
  }

  // Get family relationship words
  getFamilyRelationshipWords(): VocabularyWord[] {
    return this.allWords.filter(
      (word) =>
        Array.isArray(word.tags) && (word.tags.includes("family") || word.tags.includes("family-relationships")),
    )
  }

  // Get divine attribute words
  getDivineAttributeWords(): VocabularyWord[] {
    return this.allWords.filter(
      (word) =>
        Array.isArray(word.tags) &&
        (word.tags.includes("asma-ul-husna") || word.tags.includes("divine-names-attributes")),
    )
  }

  // Get prophets words
  getProphets(): VocabularyWord[] {
    return this.allWords.filter(
      (word) =>
        Array.isArray(word.tags) && (word.tags.includes("prophets") || word.tags.includes("prophets-messengers")),
    )
  }

  // Get quiz-extracted words
  getQuizExtractedWords(): VocabularyWord[] {
    return this.allWords.filter((word) => Array.isArray(word.tags) && word.tags.includes("quiz-extracted"))
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

    // Map category IDs to actual category names
    const categoryMappings: { [key: string]: string[] } = {
      "divine-names-attributes": ["Divine Names & Attributes", "Divine Attributes"],
      "prayer-worship": ["Prayer & Worship", "Worship"],
      "faith-belief": ["Faith & Belief"],
      "afterlife-judgment": ["Afterlife & Judgment", "Afterlife"],
      "prophets-messengers": ["Prophets & Messengers", "Prophets"],
      "family-relationships": ["Family & Relationships", "Family Relations"],
      "time-seasons": ["Time & Seasons"],
      "nature-creation": ["Nature & Creation"],
      "actions-verbs": ["Actions & Verbs"],
      "emotions-states": ["Emotions & States"],
      "knowledge-wisdom": ["Knowledge & Wisdom"],
      "morality-ethics": ["Morality & Ethics"],
      "opening-chapter": ["Opening Chapter (Al-Fatihah)"],
      "short-chapters": ["Short Chapters (Juz Amma)"],
      "long-chapters": ["Long Chapters"],
      "general-quranic": ["General Quranic Vocabulary"],
      prophets: ["Prophets & Messengers", "Prophets"],
      virtues: ["Islamic Virtues"],
      afterlife: ["Afterlife & Judgment", "Afterlife"],
      worship: ["Prayer & Worship", "Worship"],
      "divine-attributes": ["Divine Names & Attributes", "Divine Attributes"],
      family: ["Family & Relationships", "Family Relations"],
      "asma-ul-husna": ["Divine Names & Attributes", "Asma ul-Husna"],
    }

    const possibleCategoryNames = categoryMappings[categoryId] || [category.name]

    return this.allWords.filter((word) => {
      // Check if the word's category matches any of the possible names
      if (possibleCategoryNames.includes(word.category)) {
        return true
      }

      // Check if the word has the category tag
      if (Array.isArray(word.tags) && word.tags.includes(categoryId)) {
        return true
      }

      // Check if the word is in the category's wordIds
      if (Array.isArray(category.wordIds) && category.wordIds.includes(word.id)) {
        return true
      }

      return false
    })
  }

  // Get most frequent words
  getMostFrequentWords(count: number): VocabularyWord[] {
    // Filter words that have frequency property
    const wordsWithFrequency = this.allWords.filter((word) => typeof word.frequency === "number")

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
    return this.allWords.filter((word) => Array.isArray(word.examples) && word.examples.length > 0).length
  }

  // Get coverage percentage
  getSurahCoveragePercentage(): number {
    const totalWords = this.getTotalWordCount()
    if (totalWords === 0) return 0
    return (this.getWordsWithSurahCount() / totalWords) * 100
  }

  // Get extraction statistics
  getExtractionStats() {
    const quizExtracted = this.getQuizExtractedWords()
    return {
      totalWords: this.getTotalWordCount(),
      quizExtractedCount: quizExtracted.length,
      quizExtractedPercentage: (quizExtracted.length / this.getTotalWordCount()) * 100,
    }
  }

  // Get detailed statistics
  getDetailedStats() {
    const totalWords = this.getTotalWordCount()
    const categoriesWithCounts = this.getAllCategoriesWithCounts()
    const difficultyStats = this.getWordsCountByDifficulty()
    const quizExtracted = this.getQuizExtractedWords()

    return {
      totalWords,
      categories: categoriesWithCounts,
      difficulties: difficultyStats,
      quizExtracted: quizExtracted.length,
      surahCoverage: this.getSurahNumbers().length,
      wordsWithAudio: this.getWordsWithAudio().length,
    }
  }

  // Get Surah numbers that have vocabulary
  getSurahNumbers(): number[] {
    return Array.from(this.surahMap.keys()).sort((a, b) => a - b)
  }
}

export const enhancedVocabularyService = new EnhancedVocabularyService()
