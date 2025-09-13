import * as fs from "fs"
import * as path from "path"

interface ExtractedWord {
  id: string
  arabic: string
  transliteration: string
  meanings: string[]
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: string
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
  hasAudio: boolean
  frequency?: number
  rootLetters?: string
}

const SURAH_NAMES: { [key: number]: string } = {
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

function cleanArabicText(text: string): string {
  // Remove diacritics and clean up the text
  return text
    .replace(/[\u064B-\u0652\u0670\u0640]/g, "") // Remove diacritics and tatweel
    .replace(/[^\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF\s]/g, "") // Keep only Arabic characters and spaces
    .trim()
}

function generateTransliteration(arabic: string): string {
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
    ة: "h",
    ى: "a",
    ء: "'",
  }

  return arabic
    .split("")
    .map((char) => transliterationMap[char] || char)
    .join("")
}

function generateBasicTranslation(arabic: string): string {
  // Very basic word translations - these should be manually reviewed
  const basicTranslations: { [key: string]: string } = {
    الله: "Allah",
    رب: "Lord",
    الرحمن: "The Most Merciful",
    الرحيم: "The Most Compassionate",
    الحمد: "Praise",
    العالمين: "of the worlds",
    يوم: "Day",
    الدين: "of Judgment",
    إياك: "You alone",
    نعبد: "we worship",
    نستعين: "we seek help",
    اهدنا: "Guide us",
    الصراط: "the path",
    المستقيم: "the straight",
  }

  return basicTranslations[arabic] || `[Translation needed for: ${arabic}]`
}

function assignDifficulty(arabic: string): "Beginner" | "Intermediate" | "Advanced" {
  const length = arabic.length
  if (length <= 3) return "Beginner"
  if (length <= 6) return "Intermediate"
  return "Advanced"
}

function assignCategory(arabic: string, surahNumber: number): string {
  // Basic categorization based on common patterns
  if (arabic.includes("الله")) return "Divine Names"
  if (arabic.includes("صل") || arabic.includes("دع")) return "Prayer & Worship"
  if (arabic.includes("يوم") || arabic.includes("آخر")) return "Afterlife"
  if (surahNumber <= 5) return "Opening Chapters"
  if (surahNumber >= 92) return "Short Chapters"
  return "Quranic Vocabulary"
}

async function extractVocabularyFromQuizzes() {
  console.log("🚀 Starting Surah Quiz Vocabulary Extraction\n")

  const dataDir = path.join(process.cwd(), "data")
  const files = fs.readdirSync(dataDir)

  const surahQuizFiles = files
    .filter((file) => file.startsWith("surah-") && file.endsWith("-quiz-data.ts") && file !== "surah-quiz-types.ts")
    .sort((a, b) => {
      const aNum = Number.parseInt(a.match(/surah-(\d+)-/)?.[1] || "0")
      const bNum = Number.parseInt(b.match(/surah-(\d+)-/)?.[1] || "0")
      return aNum - bNum
    })

  console.log(`Processing ${surahQuizFiles.length} quiz files...`)

  const extractedWords: ExtractedWord[] = []
  const seenWords = new Set<string>()

  let totalWordsFound = 0
  let beginnerCount = 0
  let intermediateCount = 0
  let advancedCount = 0
  const categoryCount: { [key: string]: number } = {}

  for (const file of surahQuizFiles) {
    try {
      const filePath = path.join(dataDir, file)
      const content = fs.readFileSync(filePath, "utf-8")

      // Extract Surah number from filename
      const surahMatch = file.match(/surah-(\d+)-quiz-data\.ts/)
      const surahNumber = surahMatch ? Number.parseInt(surahMatch[1]) : 0
      const surahName = SURAH_NAMES[surahNumber] || `Surah ${surahNumber}`

      console.log(`Processing ${file} (Surah ${surahNumber}: ${surahName})...`)

      // Extract Arabic text using regex
      const arabicMatches =
        content.match(
          /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+(?:\s+[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+)*/g,
        ) || []

      console.log(`  Found ${arabicMatches.length} Arabic texts`)

      for (const arabicText of arabicMatches) {
        const cleanedArabic = cleanArabicText(arabicText)

        if (cleanedArabic.length < 2 || seenWords.has(cleanedArabic)) {
          continue // Skip very short words or duplicates
        }

        seenWords.add(cleanedArabic)

        const transliteration = generateTransliteration(cleanedArabic)
        const translation = generateBasicTranslation(cleanedArabic)
        const difficulty = assignDifficulty(cleanedArabic)
        const category = assignCategory(cleanedArabic, surahNumber)

        // Count by difficulty
        if (difficulty === "Beginner") beginnerCount++
        else if (difficulty === "Intermediate") intermediateCount++
        else advancedCount++

        // Count by category
        categoryCount[category] = (categoryCount[category] || 0) + 1

        const word: ExtractedWord = {
          id: `quiz-extracted-${totalWordsFound + 1}`,
          arabic: cleanedArabic,
          transliteration,
          meanings: [translation],
          difficulty,
          category,
          tags: ["quiz-extracted", `surah-${surahNumber}`, category.toLowerCase().replace(/\s+/g, "-")],
          examples: [
            {
              id: `example-${totalWordsFound + 1}`,
              surahNumber,
              surahName,
              ayahNumber: 1, // Default, should be manually corrected
              arabicText: cleanedArabic,
              translationText: translation,
              wordLocation: {
                startIndex: 0,
                endIndex: cleanedArabic.length,
              },
              hasAudio: false,
            },
          ],
          hasAudio: false,
          frequency: 1,
        }

        extractedWords.push(word)
        totalWordsFound++
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error)
    }
  }

  // Generate the vocabulary data file
  const outputPath = path.join(dataDir, "vocabulary-data-quiz-extracted.ts")
  const fileContent = `// Auto-generated vocabulary from Surah quiz data
// Generated on: ${new Date().toISOString()}
// Total words: ${totalWordsFound}

import { VocabularyWord, Difficulty } from "../types/vocabulary"

export const quizExtractedVocabulary: VocabularyWord[] = ${JSON.stringify(extractedWords, null, 2)}
`

  fs.writeFileSync(outputPath, fileContent, "utf-8")

  console.log(`\n📁 Generated vocabulary file: ${outputPath}`)
  console.log(`📊 Statistics:`)
  console.log(`   - Total words extracted: ${totalWordsFound}`)
  console.log(`   - Beginner: ${beginnerCount}`)
  console.log(`   - Intermediate: ${intermediateCount}`)
  console.log(`   - Advanced: ${advancedCount}`)

  console.log(`\n📚 Categories:`)
  Object.entries(categoryCount).forEach(([category, count]) => {
    console.log(`   - ${category}: ${count}`)
  })

  console.log(`\n✅ Vocabulary extraction completed successfully!`)
  console.log(`   The new words will be automatically included in your dictionary.`)
  console.log(`   You may want to review and improve the translations manually.`)
}

extractVocabularyFromQuizzes().catch(console.error)
