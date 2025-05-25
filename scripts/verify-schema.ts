import { supabase } from "../services/supabase-client"

async function verifySchema() {
  console.log("Verifying database schema...")

  // Check if tables exist
  const { data: tables, error: tablesError } = await supabase
    .from("information_schema.tables")
    .select("table_name")
    .eq("table_schema", "public")

  if (tablesError) {
    console.error("Error fetching tables:", tablesError)
    return
  }

  const tableNames = tables.map((t) => t.table_name)

  const requiredTables = ["vocabulary_words", "word_examples", "related_words", "word_lists", "word_list_items"]

  console.log("\nTable Verification:")
  console.log("-----------------")

  requiredTables.forEach((table) => {
    if (tableNames.includes(table)) {
      console.log(`✅ Table '${table}' exists`)
    } else {
      console.log(`❌ Table '${table}' is missing!`)
    }
  })

  // Check columns for each table
  console.log("\nColumn Verification:")
  console.log("------------------")

  // Define expected columns for each table
  const expectedColumns = {
    vocabulary_words: [
      "id",
      "arabic",
      "transliteration",
      "root_letters",
      "meanings",
      "part_of_speech",
      "difficulty",
      "frequency",
      "tags",
      "audio_url",
      "has_audio",
      "notes",
      "phase",
    ],
    word_examples: [
      "id",
      "word_id",
      "surah_number",
      "surah_name",
      "ayah_number",
      "arabic_text",
      "translation_text",
      "word_location",
      "audio_url",
      "word_audio_url",
      "has_audio",
    ],
    related_words: ["id", "word_id", "related_word_id", "relationship_type"],
    word_lists: ["id", "name", "description", "is_predefined", "created_at", "updated_at"],
    word_list_items: ["list_id", "word_id"],
  }

  // Check columns for each table
  for (const table of requiredTables) {
    if (!tableNames.includes(table)) {
      console.log(`Skipping column check for missing table '${table}'`)
      continue
    }

    const { data: columns, error: columnsError } = await supabase
      .from("information_schema.columns")
      .select("column_name")
      .eq("table_schema", "public")
      .eq("table_name", table)

    if (columnsError) {
      console.error(`Error fetching columns for table '${table}':`, columnsError)
      continue
    }

    const columnNames = columns.map((c) => c.column_name)

    console.log(`\nColumns for table '${table}':`)

    expectedColumns[table].forEach((column) => {
      if (columnNames.includes(column)) {
        console.log(`✅ Column '${column}' exists`)
      } else {
        console.log(`❌ Column '${column}' is missing!`)
      }
    })
  }

  console.log("\nSchema verification complete.")
}

// Execute the verification
verifySchema().catch((error) => console.error("Schema verification failed:", error))
