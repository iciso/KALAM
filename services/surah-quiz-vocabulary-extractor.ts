import fs from "fs"
import path from "path"
import { Difficulty, PartOfSpeech } from "../types/vocabulary"

interface ExtractedWord {
  id: string
  arabic: string
  transliteration: string
  meanings: string[]
  partOfSpeech: PartOfSpeech
  difficulty: Difficulty
  frequency: number
  tags: string[]
  examples: Array<{
    id: string
    surahNumber: number
    surahName: string
    ayahNumber: number
    arabicText: string
    translationText: string
    wordLocation: {
      startIndex: number
      endIndex: number
    }
    hasAudio: boolean
  }>
  surahNumber: number
  surahName: string
  source: string
}

export class SurahQuizVocabularyExtractor {
  private extractedWords: ExtractedWord[] = []
  private wordIdCounter = 1

  async extractFromAllQuizzes(): Promise<ExtractedWord[]> {
    const dataDir = path.join(process.cwd(), "data")
    const files = fs.readdirSync(dataDir)

    const quizFiles = files.filter(
      (file) => file.startsWith("surah-") && file.endsWith("-quiz-data.ts") && file !== "surah-quiz-types.ts",
    )

    console.log(`Processing ${quizFiles.length} quiz files...`)

    for (const file of quizFiles) {
      try {
        const filePath = path.join(dataDir, file)
        await this.extractFromFile(filePath)
      } catch (error) {
        console.warn(`Error processing ${file}:`, error.message)
      }
    }

    // Remove duplicates based on Arabic text
    this.removeDuplicates()

    return this.extractedWords
  }

  private async extractFromFile(filePath: string): Promise<void> {
    const content = fs.readFileSync(filePath, "utf-8")
    const fileName = path.basename(filePath)

    // Extract Surah number and name from filename
    const surahMatch = fileName.match(/surah-(\d+)-/)
    const surahNumber = surahMatch ? Number.parseInt(surahMatch[1]) : 1
    const surahName = this.getSurahName(surahNumber)

    console.log(`Processing ${fileName} (Surah ${surahNumber}: ${surahName})...`)

    // Extract Arabic text patterns from the file content
    const arabicTexts = this.extractArabicTexts(content)

    console.log(`  Found ${arabicTexts.length} Arabic texts`)

    // Process each Arabic text
    for (const arabicText of arabicTexts) {
      if (this.isValidWord(arabicText)) {
        const word = this.createWordFromArabic(arabicText, surahNumber, surahName)
        if (word) {
          this.extractedWords.push(word)
        }
      }
    }
  }

  private extractArabicTexts(content: string): string[] {
    // Match Arabic text in various contexts
    const patterns = [
      // Direct Arabic text in strings
      /["'`]([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\s]+)["'`]/g,
      // Arabic text in template literals
      /`([^`]*[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF][^`]*)`/g,
      // Arabic text in object properties
      /arabicText:\s*["'`]([\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\s]+)["'`]/g,
    ]

    const arabicTexts: string[] = []

    for (const pattern of patterns) {
      let match
      while ((match = pattern.exec(content)) !== null) {
        const text = match[1].trim()
        if (text && text.length > 0) {
          // Split by spaces to get individual words
          const words = text
            .split(/\s+/)
            .filter(
              (word) =>
                word.length > 0 && /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(word),
            )
          arabicTexts.push(...words)
        }
      }
    }

    return [...new Set(arabicTexts)] // Remove duplicates
  }

  private isValidWord(arabicText: string): boolean {
    // Filter out very short words, numbers, and common particles
    if (arabicText.length < 2) return false

    // Remove diacritics for checking
    const cleanText = arabicText.replace(/[\u064B-\u0652\u0670\u0640]/g, "")

    // Skip very common particles and prepositions
    const commonParticles = ["في", "من", "إلى", "على", "عن", "مع", "لا", "ما", "هذا", "هذه", "ذلك", "تلك"]
    if (commonParticles.includes(cleanText)) return false

    // Must contain Arabic letters
    return /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/.test(arabicText)
  }

  private createWordFromArabic(arabicText: string, surahNumber: number, surahName: string): ExtractedWord | null {
    // Clean the Arabic text
    const cleanArabic = arabicText.trim()

    // Generate a basic transliteration (placeholder)
    const transliteration = this.generateTransliteration(cleanArabic)

    // Generate basic meaning (placeholder - needs manual review)
    const meaning = this.generateMeaning(cleanArabic)

    const word: ExtractedWord = {
      id: `quiz-word-${this.wordIdCounter++}`,
      arabic: cleanArabic,
      transliteration: transliteration,
      meanings: [meaning],
      partOfSpeech: PartOfSpeech.Noun, // Default, needs manual review
      difficulty: this.determineDifficulty(cleanArabic),
      frequency: 1,
      tags: ["quiz-extracted", `surah-${surahNumber}`],
      examples: [
        {
          id: `example-${this.wordIdCounter}`,
          surahNumber: surahNumber,
          surahName: surahName,
          ayahNumber: 1, // Placeholder
          arabicText: cleanArabic,
          translationText: meaning,
          wordLocation: {
            startIndex: 0,
            endIndex: cleanArabic.length,
          },
          hasAudio: false,
        },
      ],
      surahNumber: surahNumber,
      surahName: surahName,
      source: "quiz-extraction",
    }

    return word
  }

  private generateTransliteration(arabic: string): string {
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
      ع: "a",
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
      ة: "h",
      ء: "a",
    }

    let result = ""
    for (const char of arabic) {
      result += transliterationMap[char] || char
    }

    return result || "transliteration-needed"
  }

  private generateMeaning(arabic: string): string {
    // Basic word meaning mapping (very limited - needs expansion)
    const basicMeanings: { [key: string]: string } = {
      الله: "Allah",
      رب: "Lord",
      إله: "God",
      كتاب: "book",
      قرآن: "Quran",
      صلاة: "prayer",
      زكاة: "charity",
      حج: "pilgrimage",
      صوم: "fasting",
      إيمان: "faith",
      إسلام: "Islam",
      مسلم: "Muslim",
      نبي: "prophet",
      رسول: "messenger",
    }

    // Remove diacritics for lookup
    const cleanArabic = arabic.replace(/[\u064B-\u0652\u0670\u0640]/g, "")

    return basicMeanings[cleanArabic] || `[Translation needed for: ${arabic}]`
  }

  private determineDifficulty(arabic: string): Difficulty {
    // Simple heuristic based on word length and complexity
    const cleanLength = arabic.replace(/[\u064B-\u0652\u0670\u0640]/g, "").length

    if (cleanLength <= 3) return Difficulty.Beginner
    if (cleanLength <= 6) return Difficulty.Intermediate
    return Difficulty.Advanced
  }

  private getSurahName(surahNumber: number): string {
    const surahNames: { [key: number]: string } = {
      1: "Al-Fatihah",
      92: "Al-Layl",
      93: "Ad-Duha",
      94: "Ash-Sharh",
      95: "At-Tin",
      96: "Al-Alaq",
      97: "Al-Qadr",
      98: "Al-Bayyinah",
      99: "Az-Zalzalah",
      100: "Al-Adiyat",
      101: "Al-Qari'ah",
      102: "At-Takathur",
      103: "Al-Asr",
      104: "Al-Humazah",
      105: "Al-Fil",
      106: "Quraysh",
      107: "Al-Ma'un",
      108: "Al-Kawthar",
      109: "Al-Kafirun",
      110: "An-Nasr",
      111: "Al-Masad",
      112: "Al-Ikhlas",
      113: "Al-Falaq",
      114: "An-Nas",
    }

    return surahNames[surahNumber] || `Surah ${surahNumber}`
  }

  private removeDuplicates(): void {
    const seen = new Set<string>()
    this.extractedWords = this.extractedWords.filter((word) => {
      const key = word.arabic.replace(/[\u064B-\u0652\u0670\u0640]/g, "") // Remove diacritics for comparison
      if (seen.has(key)) {
        return false
      }
      seen.add(key)
      return true
    })
  }

  generateDataFile(words: ExtractedWord[]): string {
    const imports = `import { VocabularyWord, Difficulty, PartOfSpeech } from "../types/vocabulary"`

    const wordsJson = JSON.stringify(words, null, 2)
      .replace(/"Difficulty\.(\w+)"/g, "Difficulty.$1")
      .replace(/"PartOfSpeech\.(\w+)"/g, "PartOfSpeech.$1")

    return `${imports}

// Auto-generated vocabulary from Surah quiz data
// Generated on: ${new Date().toISOString()}
// Total words: ${words.length}
// 
// ⚠️  IMPORTANT: This is auto-generated content that needs manual review!
// - Transliterations are basic and may need correction
// - Meanings are placeholders and need proper translation
// - Part of speech assignments need verification
// - Difficulty levels are estimated and may need adjustment

export const quizExtractedVocabulary: VocabularyWord[] = ${wordsJson}
`
  }
}
