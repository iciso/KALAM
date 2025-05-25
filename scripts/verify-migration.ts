import { supabase } from "../services/supabase-client"
import { vocabularyData } from "../data/vocabulary-data"
import { vocabularyDataPhase2 } from "../data/vocabulary-data-expansion"
import { vocabularyDataPhase3 } from "../data/vocabulary-data-expansion-phase2"
import { vocabularyDataPhase4 } from "../data/vocabulary-data-expansion-phase3"
import { vocabularyDataPhase5 } from "../data/vocabulary-data-expansion-phase4"
import { vocabularyDataPhase6 } from "../data/vocabulary-data-expansion-phase5"
import { vocabularyDataPhase7 } from "../data/vocabulary-data-expansion-phase6"
import { vocabularyDataPhase8 } from "../data/vocabulary-data-expansion-phase7"
import { vocabularyDataPhase9 } from "../data/vocabulary-data-expansion-phase8"
import { vocabularyDataPhase10 } from "../data/vocabulary-data-expansion-phase9"
import { vocabularyDataPhase11 } from "../data/vocabulary-data-expansion-phase10"
import { predefinedWordLists } from "../data/predefined-word-lists"

// All vocabulary data by phase
const allVocabularyData = [
  { phase: 1, data: vocabularyData },
  { phase: 2, data: vocabularyDataPhase2 },
  { phase: 3, data: vocabularyDataPhase3 },
  { phase: 4, data: vocabularyDataPhase4 },
  { phase: 5, data: vocabularyDataPhase5 },
  { phase: 6, data: vocabularyDataPhase6 },
  { phase: 7, data: vocabularyDataPhase7 },
  { phase: 8, data: vocabularyDataPhase8 },
  { phase: 9, data: vocabularyDataPhase9 },
  { phase: 10, data: vocabularyDataPhase10 },
  { phase: 11, data: vocabularyDataPhase11 },
]

async function verifyMigration() {
  console.log("Verifying data migration...")

  // Count total words in local data
  let totalLocalWords = 0
  let totalLocalExamples = 0
  let totalLocalRelatedWords = 0

  allVocabularyData.forEach(({ data }) => {
    totalLocalWords += data.length

    data.forEach((word) => {
      if (word.examples) {
        totalLocalExamples += word.examples.length
      }

      if (word.relatedWords) {
        totalLocalRelatedWords += word.relatedWords.length
      }
    })
  })

  // Count total predefined word lists and items
  const totalLocalLists = predefinedWordLists.length
  let totalLocalListItems = 0

  predefinedWordLists.forEach((list) => {
    totalLocalListItems += list.wordIds.length
  })

  // Get counts from database
  const { count: dbWordsCount, error: wordsError } = await supabase
    .from("vocabulary_words")
    .select("*", { count: "exact" })

  const { count: dbExamplesCount, error: examplesError } = await supabase
    .from("word_examples")
    .select("*", { count: "exact" })

  const { count: dbRelatedWordsCount, error: relatedError } = await supabase
    .from("related_words")
    .select("*", { count: "exact" })

  const { count: dbListsCount, error: listsError } = await supabase
    .from("word_lists")
    .select("*", { count: "exact", filter: "is_predefined.eq.true" })

  const { count: dbListItemsCount, error: itemsError } = await supabase
    .from("word_list_items")
    .select("*", { count: "exact" })

  // Print verification results
  console.log("\nVerification Results:")
  console.log("--------------------")

  console.log(`Vocabulary Words: ${dbWordsCount || 0}/${totalLocalWords} migrated`)
  if (dbWordsCount !== totalLocalWords) {
    console.log("⚠️ Not all vocabulary words have been migrated!")
  }

  console.log(`Word Examples: ${dbExamplesCount || 0}/${totalLocalExamples} migrated`)
  if (dbExamplesCount !== totalLocalExamples) {
    console.log("⚠️ Not all word examples have been migrated!")
  }

  console.log(`Related Words: ${dbRelatedWordsCount || 0}/${totalLocalRelatedWords} migrated`)
  if (dbRelatedWordsCount !== totalLocalRelatedWords) {
    console.log("⚠️ Not all related words have been migrated!")
  }

  console.log(`Predefined Word Lists: ${dbListsCount || 0}/${totalLocalLists} migrated`)
  if (dbListsCount !== totalLocalLists) {
    console.log("⚠️ Not all predefined word lists have been migrated!")
  }

  console.log(`Word List Items: ${dbListItemsCount || 0}/${totalLocalListItems} migrated`)
  if (dbListItemsCount !== totalLocalListItems) {
    console.log("⚠️ Not all word list items have been migrated!")
  }

  console.log("\nVerification complete.")
}

// Execute the verification
verifyMigration().catch((error) => console.error("Verification failed:", error))
