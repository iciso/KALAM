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

async function migrateAllVocabulary() {
  console.log("Starting migration of all vocabulary data...")

  for (const phaseData of allVocabularyData) {
    const { phase, data } = phaseData
    console.log(`\nMigrating Phase ${phase} vocabulary (${data.length} words)...`)

    // Process in smaller batches to avoid timeouts
    const batchSize = 50
    const batches = Math.ceil(data.length / batchSize)

    for (let i = 0; i < batches; i++) {
      const start = i * batchSize
      const end = Math.min(start + batchSize, data.length)
      const batch = data.slice(start, end)

      console.log(`Processing batch ${i + 1}/${batches} (${start} to ${end - 1})`)

      // Transform data to match database schema
      const dbWords = batch.map((word) => ({
        id: word.id,
        arabic: word.arabic,
        transliteration: word.transliteration,
        root_letters: word.rootLetters || null,
        meanings: word.meanings,
        part_of_speech: word.partOfSpeech,
        difficulty: word.difficulty,
        frequency: word.frequency || null,
        tags: word.tags,
        audio_url: word.audioUrl || null,
        has_audio: word.hasAudio,
        notes: word.notes || null,
        phase: phase,
      }))

      // Insert into database
      const { error } = await supabase.from("vocabulary_words").upsert(dbWords, { onConflict: "id" })

      if (error) {
        console.error(`Error inserting batch ${i + 1}:`, error)
        continue
      }

      console.log(`Successfully inserted batch ${i + 1}`)
    }

    console.log(`Phase ${phase} vocabulary migration completed!`)
  }

  console.log("\nAll vocabulary migration completed!")
}

async function migrateAllExamples() {
  console.log("\nStarting migration of all examples...")

  // Collect all examples from all vocabulary data
  const allExamples = []

  for (const phaseData of allVocabularyData) {
    const { data } = phaseData

    data.forEach((word) => {
      if (word.examples && word.examples.length > 0) {
        const wordExamples = word.examples.map((example) => ({
          id: example.id,
          word_id: word.id,
          surah_number: example.surahNumber,
          surah_name: example.surahName,
          ayah_number: example.ayahNumber,
          arabic_text: example.arabicText,
          translation_text: example.translationText,
          word_location: example.wordLocation,
          audio_url: example.audioUrl || null,
          word_audio_url: example.wordAudioUrl || null,
          has_audio: example.hasAudio,
        }))

        allExamples.push(...wordExamples)
      }
    })
  }

  console.log(`Found ${allExamples.length} examples to migrate`)

  // Process in smaller batches to avoid timeouts
  const batchSize = 50
  const batches = Math.ceil(allExamples.length / batchSize)

  for (let i = 0; i < batches; i++) {
    const start = i * batchSize
    const end = Math.min(start + batchSize, allExamples.length)
    const batch = allExamples.slice(start, end)

    console.log(`Processing batch ${i + 1}/${batches} (${start} to ${end - 1})`)

    // Insert into database
    const { error } = await supabase.from("word_examples").upsert(batch, { onConflict: "id" })

    if (error) {
      console.error(`Error inserting batch ${i + 1}:`, error)
      continue
    }

    console.log(`Successfully inserted batch ${i + 1}`)
  }

  console.log("All examples migration completed!")
}

// Execute the migration
async function runMigration() {
  try {
    await migrateAllVocabulary()
    await migrateAllExamples()
    console.log("Complete migration finished successfully!")
  } catch (error) {
    console.error("Migration failed:", error)
  }
}

runMigration()
