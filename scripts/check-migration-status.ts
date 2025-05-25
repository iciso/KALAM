import { supabase } from "../services/supabase-client"

async function checkMigrationStatus() {
  console.log("Checking Supabase migration status...")

  // Check vocabulary words
  const { data: vocabData, error: vocabError } = await supabase
    .from("vocabulary_words")
    .select("phase, count", { count: "exact" })
    .group("phase")

  if (vocabError) {
    console.error("Error checking vocabulary words:", vocabError)
  } else {
    console.log("\nVocabulary Words by Phase:")
    console.log("-------------------------")

    if (vocabData.length === 0) {
      console.log("No vocabulary words found in the database.")
    } else {
      vocabData.forEach((row) => {
        console.log(`Phase ${row.phase}: ${row.count} words`)
      })
    }
  }

  // Check examples
  const { count: examplesCount, error: examplesError } = await supabase
    .from("word_examples")
    .select("*", { count: "exact" })

  if (examplesError) {
    console.error("Error checking examples:", examplesError)
  } else {
    console.log("\nWord Examples:")
    console.log("-------------")
    console.log(`Total: ${examplesCount || 0} examples`)
  }

  // Check word lists
  const { data: listsData, error: listsError } = await supabase
    .from("word_lists")
    .select("is_predefined, count", { count: "exact" })
    .group("is_predefined")

  if (listsError) {
    console.error("Error checking word lists:", listsError)
  } else {
    console.log("\nWord Lists:")
    console.log("----------")

    if (listsData.length === 0) {
      console.log("No word lists found in the database.")
    } else {
      listsData.forEach((row) => {
        console.log(`${row.is_predefined ? "Predefined" : "User-created"}: ${row.count} lists`)
      })
    }
  }

  // Check word list items
  const { count: itemsCount, error: itemsError } = await supabase
    .from("word_list_items")
    .select("*", { count: "exact" })

  if (itemsError) {
    console.error("Error checking word list items:", itemsError)
  } else {
    console.log("\nWord List Items:")
    console.log("---------------")
    console.log(`Total: ${itemsCount || 0} items`)
  }

  console.log("\nMigration status check complete.")
}

// Execute the check
checkMigrationStatus().catch((error) => console.error("Status check failed:", error))
