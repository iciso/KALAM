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
import { v4 as uuidv4 } from "uuid"

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

async function migrateRelatedWords() {
  console.log("Starting migration of related words...")

  // Collect all related word relationships
  const relatedWords = []

  for (const phaseData of allVocabularyData) {
    const { data } = phaseData

    data.forEach((word) => {
      if (word.relatedWords && word.relatedWords.length > 0) {
        word.relatedWords.forEach((related) => {
          relatedWords.push({
            id: uuidv4(),
            word_id: word.id,
            related_word_id: related.id,
            relationship_type: related.relationshipType,
          })
        })
      }
    })
  }

  console.log(`Found ${relatedWords.length} related word relationships to migrate`)

  // Process in smaller batches to avoid timeouts
  const batchSize = 50
  const batches = Math.ceil(relatedWords.length / batchSize)

  for (let i = 0; i < batches; i++) {
    const start = i * batchSize
    const end = Math.min(start + batchSize, relatedWords.length)
    const batch = relatedWords.slice(start, end)

    console.log(`Processing batch ${i + 1}/${batches} (${start} to ${end - 1})`)

    // Insert into database
    const { error } = await supabase.from("related_words").upsert(batch, { onConflict: ["word_id", "related_word_id"] })

    if (error) {
      console.error(`Error inserting batch ${i + 1}:`, error)
      continue
    }

    console.log(`Successfully inserted batch ${i + 1}`)
  }

  console.log("Related words migration completed!")
}

// Execute the migration
migrateRelatedWords().catch((error) => console.error("Migration failed:", error))
