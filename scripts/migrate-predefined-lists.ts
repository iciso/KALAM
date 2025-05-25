import { supabase } from "../services/supabase-client"
import { predefinedWordLists } from "../data/predefined-word-lists"

async function migratePredefinedLists() {
  console.log(`Starting migration of predefined word lists (${predefinedWordLists.length} lists)...`)

  for (const list of predefinedWordLists) {
    console.log(`Migrating list: ${list.name}`)

    // Insert the list
    const { data, error } = await supabase
      .from("word_lists")
      .upsert([
        {
          id: list.id,
          name: list.name,
          description: list.description,
          is_predefined: true,
        },
      ])
      .select()

    if (error) {
      console.error(`Error inserting list ${list.name}:`, error)
      continue
    }

    // Insert the word items in batches
    const batchSize = 50
    const batches = Math.ceil(list.wordIds.length / batchSize)

    for (let i = 0; i < batches; i++) {
      const start = i * batchSize
      const end = Math.min(start + batchSize, list.wordIds.length)
      const batchWordIds = list.wordIds.slice(start, end)

      console.log(`Processing batch ${i + 1}/${batches} for list ${list.name}`)

      const listItems = batchWordIds.map((wordId) => ({
        list_id: list.id,
        word_id: wordId,
      }))

      const { error: itemsError } = await supabase.from("word_list_items").upsert(listItems)

      if (itemsError) {
        console.error(`Error inserting items for list ${list.name}:`, itemsError)
      }
    }

    console.log(`Successfully migrated list: ${list.name}`)
  }

  console.log("Predefined word lists migration completed!")
}

// Execute the migration
migratePredefinedLists().catch((error) => console.error("Migration failed:", error))
