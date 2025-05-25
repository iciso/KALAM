import { supabase } from "../services/supabase-client"
import { vocabularyData } from "../data/vocabulary-data"

async function migratePhase1Examples() {
  console.log("Starting migration of Phase 1 examples...")

  // Collect all examples from vocabulary data
  const allExamples: any[] = []

  vocabularyData.forEach((word) => {
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
  })

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
      return
    }

    console.log(`Successfully inserted batch ${i + 1}`)
  }

  console.log("Phase 1 examples migration completed!")
}

// Execute the migration
migratePhase1Examples().catch((error) => console.error("Migration failed:", error))
