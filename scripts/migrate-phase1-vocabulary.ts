import { supabase } from "../services/supabase-client"
import { vocabularyData } from "../data/vocabulary-data"

async function migratePhase1Vocabulary() {
  console.log(`Starting migration of Phase 1 vocabulary (${vocabularyData.length} words)...`)

  // Process in smaller batches to avoid timeouts
  const batchSize = 50
  const batches = Math.ceil(vocabularyData.length / batchSize)

  for (let i = 0; i < batches; i++) {
    const start = i * batchSize
    const end = Math.min(start + batchSize, vocabularyData.length)
    const batch = vocabularyData.slice(start, end)

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
      phase: 1, // Phase 1 vocabulary
    }))

    // Insert into database
    const { error } = await supabase.from("vocabulary_words").upsert(dbWords, { onConflict: "id" })

    if (error) {
      console.error(`Error inserting batch ${i + 1}:`, error)
      return
    }

    console.log(`Successfully inserted batch ${i + 1}`)
  }

  console.log("Phase 1 vocabulary migration completed!")
}

// Execute the migration
migratePhase1Vocabulary().catch((error) => console.error("Migration failed:", error))
