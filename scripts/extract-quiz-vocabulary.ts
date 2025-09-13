import { SurahQuizVocabularyExtractor } from "../services/surah-quiz-vocabulary-extractor"
import fs from "fs"
import path from "path"

/**
 * Main script to extract vocabulary from all Surah quiz data
 */
async function extractQuizVocabulary() {
  console.log("Starting vocabulary extraction from Surah quizzes...")

  const extractor = new SurahQuizVocabularyExtractor()
  const dataDir = path.join(process.cwd(), "data")

  // List of known Surah quiz files
  const surahQuizFiles = [
    "surah-1-quiz-data.ts",
    "surah-92-quiz-data.ts",
    "surah-93-quiz-data.ts",
    "surah-94-quiz-data.ts",
    "surah-95-quiz-data.ts",
    "surah-96-quiz-data.ts",
    "surah-97-quiz-data.ts",
    "surah-98-quiz-data.ts",
    "surah-99-quiz-data.ts",
    "surah-100-quiz-data.ts",
    "surah-101-quiz-data.ts",
    "surah-102-quiz-data.ts",
    "surah-103-quiz-data.ts",
    "surah-104-quiz-data.ts",
    "surah-105-quiz-data.ts",
    "surah-106-quiz-data.ts",
    "surah-107-quiz-data.ts",
    "surah-108-quiz-data.ts",
    "surah-109-quiz-data.ts",
    "surah-110-quiz-data.ts",
    "surah-111-quiz-data.ts",
    "surah-112-quiz-data.ts",
    "surah-113-quiz-data.ts",
    "surah-114-quiz-data.ts",
  ]

  let totalExtracted = 0

  for (const fileName of surahQuizFiles) {
    const filePath = path.join(dataDir, fileName)

    if (fs.existsSync(filePath)) {
      try {
        // Dynamically import the quiz data
        const quizModule = await import(filePath)
        const quizData = quizModule.default || quizModule.surahQuizData

        if (quizData) {
          console.log(`Processing ${fileName}...`)
          const extractedWords = extractor.extractFromQuizData(quizData)
          totalExtracted += extractedWords.length
          console.log(`  Extracted ${extractedWords.length} words`)
        }
      } catch (error) {
        console.warn(`Could not process ${fileName}:`, error.message)
      }
    } else {
      console.warn(`File not found: ${fileName}`)
    }
  }

  // Get final statistics
  const stats = extractor.getStats()
  console.log("\n=== Extraction Complete ===")
  console.log(`Total words extracted: ${stats.totalExtracted}`)
  console.log(`Beginner: ${stats.byDifficulty.beginner}`)
  console.log(`Intermediate: ${stats.byDifficulty.intermediate}`)
  console.log(`Advanced: ${stats.byDifficulty.advanced}`)

  // Generate the vocabulary data file
  const outputPath = path.join(dataDir, "vocabulary-data-quiz-extracted.ts")
  generateVocabularyFile(extractor.getAllExtractedWords(), outputPath)

  console.log(`\nVocabulary file generated: ${outputPath}`)

  return stats
}

/**
 * Generate TypeScript vocabulary data file
 */
function generateVocabularyFile(words: any[], outputPath: string) {
  const fileContent = `// Auto-generated vocabulary from Surah quiz data
// Generated on: ${new Date().toISOString()}

import { VocabularyWord, Difficulty, PartOfSpeech } from '@/types/vocabulary'

export const quizExtractedVocabularyData: VocabularyWord[] = ${JSON.stringify(words, null, 2)}
`

  fs.writeFileSync(outputPath, fileContent, "utf-8")
}

// Run the extraction
extractQuizVocabulary().catch(console.error)
