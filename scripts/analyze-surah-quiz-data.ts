import * as fs from "fs"
import * as path from "path"

interface QuizQuestion {
  question: string
  options: string[]
  correctAnswer: number
  explanation?: string
  arabicText?: string
  transliteration?: string
  translation?: string
}

interface SurahQuizData {
  questions: QuizQuestion[]
  surahInfo?: {
    number: number
    name: string
    arabicName: string
    englishName: string
    numberOfAyahs: number
    revelationType: string
  }
}

async function analyzeSurahQuizData() {
  console.log("Analyzing Surah quiz data...")

  const dataDir = path.join(process.cwd(), "data")
  const files = fs.readdirSync(dataDir)

  const surahQuizFiles = files.filter(
    (file) => file.startsWith("surah-") && file.endsWith("-quiz-data.ts") && file !== "surah-quiz-types.ts",
  )

  console.log(`Found ${surahQuizFiles.length} Surah quiz files:`)
  surahQuizFiles.forEach((file) => console.log(`- ${file}`))

  console.log("\nVocabulary extraction opportunities:")

  let totalQuestions = 0
  let totalArabicTexts = 0

  for (const file of surahQuizFiles) {
    try {
      const filePath = path.join(dataDir, file)
      const content = fs.readFileSync(filePath, "utf-8")

      // Extract Surah number from filename
      const surahMatch = file.match(/surah-(\d+)-quiz-data\.ts/)
      const surahNumber = surahMatch ? Number.parseInt(surahMatch[1]) : 0

      // Count questions by looking for question patterns
      const questionMatches = content.match(/question:\s*["'`]/g) || []
      const questionCount = questionMatches.length

      // Count Arabic text occurrences
      const arabicMatches = content.match(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+/g) || []
      const arabicCount = arabicMatches.length

      console.log(`Surah ${surahNumber}: ${questionCount} questions, ${arabicCount} Arabic texts`)

      totalQuestions += questionCount
      totalArabicTexts += arabicCount
    } catch (error) {
      console.error(`Error processing ${file}:`, error)
    }
  }

  console.log(
    `\nTotal: ${totalQuestions} questions, ${totalArabicTexts} Arabic texts across ${surahQuizFiles.length} Surahs`,
  )
}

analyzeSurahQuizData().catch(console.error)
