import fs from "fs"
import path from "path"

/**
 * Script to analyze existing Surah quiz data and extract vocabulary
 */
async function analyzeSurahQuizData() {
  console.log("Analyzing Surah quiz data...")

  const dataDir = path.join(process.cwd(), "data")
  const files = fs.readdirSync(dataDir)

  // Find all surah quiz data files
  const surahQuizFiles = files.filter(
    (file) => file.startsWith("surah-") && file.includes("quiz-data") && file.endsWith(".ts"),
  )

  console.log(`Found ${surahQuizFiles.length} Surah quiz files:`)
  surahQuizFiles.forEach((file) => console.log(`- ${file}`))

  // Analyze each file for vocabulary potential
  const vocabularyOpportunities = []

  for (const file of surahQuizFiles) {
    const filePath = path.join(dataDir, file)
    const content = fs.readFileSync(filePath, "utf-8")

    // Extract Surah number from filename
    const surahMatch = file.match(/surah-(\d+)-quiz-data\.ts/)
    if (surahMatch) {
      const surahNumber = Number.parseInt(surahMatch[1])

      // Count questions and look for Arabic text
      const questionMatches = content.match(/question:/g) || []
      const arabicMatches = content.match(/[\u0600-\u06FF]+/g) || []

      vocabularyOpportunities.push({
        surahNumber,
        file,
        questionCount: questionMatches.length,
        arabicTextCount: arabicMatches.length,
        hasVocabularyPotential: arabicMatches.length > 0,
      })
    }
  }

  console.log("\nVocabulary extraction opportunities:")
  vocabularyOpportunities.forEach((opportunity) => {
    console.log(
      `Surah ${opportunity.surahNumber}: ${opportunity.questionCount} questions, ${opportunity.arabicTextCount} Arabic texts`,
    )
  })

  return vocabularyOpportunities
}

// Run the analysis
analyzeSurahQuizData().catch(console.error)
