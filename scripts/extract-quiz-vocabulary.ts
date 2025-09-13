import fs from "fs"
import path from "path"
import { SurahQuizVocabularyExtractor } from "../services/surah-quiz-vocabulary-extractor"

async function extractQuizVocabulary() {
  console.log("🚀 Starting Surah Quiz Vocabulary Extraction\n")

  try {
    const extractor = new SurahQuizVocabularyExtractor()
    const extractedWords = await extractor.extractFromAllQuizzes()

    if (extractedWords.length === 0) {
      console.log("⚠️  No vocabulary words were extracted.")
      console.log("   This might be because:")
      console.log("   - Quiz files don't contain Arabic text")
      console.log("   - Arabic text format is different than expected")
      return
    }

    // Generate the data file
    const fileContent = extractor.generateDataFile(extractedWords)
    const outputPath = path.join(process.cwd(), "data", "vocabulary-data-quiz-extracted.ts")

    fs.writeFileSync(outputPath, fileContent, "utf-8")

    console.log(`\n📁 Generated vocabulary file: ${outputPath}`)
    console.log(`📊 Statistics:`)
    console.log(`   - Total words extracted: ${extractedWords.length}`)

    // Count by difficulty
    const difficulties = extractedWords.reduce(
      (acc, word) => {
        acc[word.difficulty] = (acc[word.difficulty] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    console.log(`   - Beginner: ${difficulties.beginner || 0}`)
    console.log(`   - Intermediate: ${difficulties.intermediate || 0}`)
    console.log(`   - Advanced: ${difficulties.advanced || 0}`)

    // Count by category
    const categories = extractedWords.reduce(
      (acc, word) => {
        acc[word.category] = (acc[word.category] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    console.log(`\n📚 Categories:`)
    Object.entries(categories).forEach(([category, count]) => {
      console.log(`   - ${category}: ${count}`)
    })

    console.log("\n✅ Vocabulary extraction completed successfully!")
    console.log("   The new words will be automatically included in your dictionary.")
    console.log("   You may want to review and improve the translations manually.")
  } catch (error) {
    console.error("❌ Error during vocabulary extraction:", error)
  }
}

extractQuizVocabulary()
