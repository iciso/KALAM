import fs from "fs"
import path from "path"

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
  surahNumber: number
  surahName: string
  questions: QuizQuestion[]
}

async function analyzeQuizData() {
  console.log("Analyzing Surah quiz data...")

  const dataDir = path.join(process.cwd(), "data")
  const files = fs.readdirSync(dataDir)

  const quizFiles = files
    .filter((file) => file.startsWith("surah-") && file.endsWith("-quiz-data.ts") && file !== "surah-quiz-types.ts")
    .sort((a, b) => {
      const numA = Number.parseInt(a.match(/surah-(\d+)-/)?.[1] || "0")
      const numB = Number.parseInt(b.match(/surah-(\d+)-/)?.[1] || "0")
      return numA - numB
    })

  console.log(`Found ${quizFiles.length} Surah quiz files:`)
  quizFiles.forEach((file) => console.log(`- ${file}`))

  console.log("\nVocabulary extraction opportunities:")

  let totalQuestions = 0
  let totalArabicTexts = 0

  for (const file of quizFiles) {
    try {
      const filePath = path.join(dataDir, file)
      const content = fs.readFileSync(filePath, "utf-8")

      // Extract Surah number from filename
      const surahMatch = file.match(/surah-(\d+)-/)
      const surahNumber = surahMatch ? Number.parseInt(surahMatch[1]) : 0

      // Count questions by looking for question objects
      const questionMatches = content.match(/question:\s*["'`]/g) || []
      const questionCount = questionMatches.length

      // Count Arabic text occurrences
      const arabicMatches = content.match(/[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+/g) || []
      const arabicCount = arabicMatches.length

      console.log(`Surah ${surahNumber}: ${questionCount} questions, ${arabicCount} Arabic texts`)

      totalQuestions += questionCount
      totalArabicTexts += arabicCount
    } catch (error) {
      console.warn(`Error analyzing ${file}:`, error.message)
    }
  }

  console.log(
    `\nTotal: ${totalQuestions} questions, ${totalArabicTexts} Arabic texts across ${quizFiles.length} Surahs`,
  )

  return {
    totalFiles: quizFiles.length,
    totalQuestions,
    totalArabicTexts,
    files: quizFiles,
  }
}

analyzeQuizData().catch(console.error)
