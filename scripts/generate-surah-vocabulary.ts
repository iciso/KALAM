import { SurahVocabularyGenerator } from "../utils/surah-vocabulary-generator"
import path from "path"

/**
 * Script to generate Surah-segregated vocabulary data -  four mnths old script
 */
async function main() {
  console.log("Starting Surah vocabulary generation...")

  // Create the generator
  const generator = new SurahVocabularyGenerator()

  // Get initial stats
  const initialStats = generator.getStats()
  console.log("Initial stats:")
  console.log(`- Total words: ${initialStats.totalWords}`)
  console.log(`- Assigned words: ${initialStats.assignedWords}`)
  console.log(`- Non-assigned words: ${initialStats.nonAssignedWords}`)
  console.log(`- Coverage: ${initialStats.coveragePercentage.toFixed(2)}%`)

  // Auto-assign non-assigned words
  console.log("\nAuto-assigning non-assigned words...")
  generator.autoAssignWords()

  // Get final stats
  const finalStats = generator.getStats()
  console.log("\nFinal stats:")
  console.log(`- Total words: ${finalStats.totalWords}`)
  console.log(`- Assigned words: ${finalStats.assignedWords}`)
  console.log(`- Non-assigned words: ${finalStats.nonAssignedWords}`)
  console.log(`- Coverage: ${finalStats.coveragePercentage.toFixed(2)}%`)

  // Generate data file
  const outputPath = path.join(process.cwd(), "data", "surah-vocabulary-data.ts")
  console.log(`\nGenerating data file at: ${outputPath}`)
  generator.generateDataFile(outputPath)

  console.log("\nSurah vocabulary generation completed!")

  // Print Surah word counts
  console.log("\nWord counts by Surah:")
  finalStats.surahCounts.forEach((surah) => {
    console.log(`- Surah ${surah.surahNumber} (${surah.surahName}): ${surah.wordCount} words`)
  })
}

// Run the script
main().catch((error) => {
  console.error("Error generating Surah vocabulary:", error)
  process.exit(1)
})
