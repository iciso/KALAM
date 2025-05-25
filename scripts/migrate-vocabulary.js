const { createClient } = require("@supabase/supabase-js")
const vocabularyData = require("../data/vocabulary-data.js")

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error(
    "Missing environment variables. Make sure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY are set.",
  )
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function migrateVocabularyData() {
  console.log("Starting vocabulary data migration...")
  console.log(`Total words to migrate: ${vocabularyData.length}`)

  // Batch size for inserts
  const BATCH_SIZE = 10
  let successCount = 0
  let errorCount = 0

  // Process in batches
  for (let i = 0; i < vocabularyData.length; i += BATCH_SIZE) {
    const batch = vocabularyData.slice(i, i + BATCH_SIZE)
    console.log(`Processing batch ${i / BATCH_SIZE + 1}/${Math.ceil(vocabularyData.length / BATCH_SIZE)}`)

    const dbWords = batch.map((word) => ({
      arabic: word.arabic,
      transliteration: word.transliteration,
      meanings: JSON.stringify(Array.isArray(word.meanings) ? word.meanings : [word.meanings]),
      root_letters: word.rootLetters || null,
      part_of_speech: word.partOfSpeech || "Noun",
      difficulty: "Beginner",
      frequency: word.frequency || 0,
      phase: word.phase || 1,
      tags: word.tags || [],
    }))

    // Insert batch into database
    const { data, error } = await supabase.from("vocabulary_words").insert(dbWords).select()

    if (error) {
      console.error("Error inserting batch:", error)
      errorCount += batch.length
    } else {
      console.log(`Successfully inserted ${data.length} words`)
      successCount += data.length

      // Now handle examples for these words if they exist
      for (let j = 0; j < batch.length; j++) {
        const word = batch[j]
        const insertedWord = data[j]

        if (word.examples && word.examples.length > 0) {
          console.log(`Inserting ${word.examples.length} examples for word: ${word.arabic}`)

          const examples = word.examples.map((example) => ({
            word_id: insertedWord.id,
            arabic_text: example.arabic,
            translation: example.translation,
            surah: example.surah || null,
            ayah: example.ayah || null,
          }))

          const { error: exampleError } = await supabase.from("examples").insert(examples)

          if (exampleError) {
            console.error(`Error inserting examples for word ${word.arabic}:`, exampleError)
          } else {
            console.log(`Successfully inserted examples for word: ${word.arabic}`)
          }
        }
      }
    }
  }

  console.log("\nMigration completed!")
  console.log(`Successfully migrated: ${successCount} words`)
  console.log(`Failed to migrate: ${errorCount} words`)
}

// Run the migration
migrateVocabularyData().catch((error) => {
  console.error("Migration failed:", error)
  process.exit(1)
})
