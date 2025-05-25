import { supabase } from "./supabase-client"
import type { VocabularyWord, WordExample } from "../types/supabase-types"

export async function getVocabularyWords(phase?: number): Promise<VocabularyWord[]> {
  let query = supabase.from("vocabulary_words").select("*")

  if (phase !== undefined) {
    query = query.eq("phase", phase)
  }

  const { data, error } = await query.order("arabic")

  if (error) {
    console.error("Error fetching vocabulary words:", error)
    return []
  }

  return data.map((word) => ({
    ...word,
    meanings: word.meanings as unknown as string[],
  }))
}

export async function getVocabularyWordById(id: string): Promise<VocabularyWord | null> {
  const { data, error } = await supabase.from("vocabulary_words").select("*").eq("id", id).single()

  if (error) {
    console.error("Error fetching vocabulary word:", error)
    return null
  }

  return {
    ...data,
    meanings: data.meanings as unknown as string[],
  }
}

export async function getWordExamples(wordId: string): Promise<WordExample[]> {
  const { data, error } = await supabase.from("word_examples").select("*").eq("word_id", wordId)

  if (error) {
    console.error("Error fetching word examples:", error)
    return []
  }

  return data.map((example) => ({
    ...example,
    word_location: example.word_location as unknown as { startIndex: number; endIndex: number },
  }))
}

export async function searchVocabularyWords(searchTerm: string): Promise<VocabularyWord[]> {
  const { data, error } = await supabase
    .from("vocabulary_words")
    .select("*")
    .or(`arabic.ilike.%${searchTerm}%,transliteration.ilike.%${searchTerm}%`)

  if (error) {
    console.error("Error searching vocabulary words:", error)
    return []
  }

  return data.map((word) => ({
    ...word,
    meanings: word.meanings as unknown as string[],
  }))
}
