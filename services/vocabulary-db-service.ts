import { createClient } from "@supabase/supabase-js"
import type { VocabularyWord, Difficulty } from "@/types/vocabulary"

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

export interface SurahInfo {
  number: number
  name: string
  wordCount: number
}

export class VocabularyDbService {
  // Get all vocabulary words
  async getAllWords(): Promise<VocabularyWord[]> {
    const { data, error } = await supabase.from("vocabulary_words").select("*")

    if (error) {
      console.error("Error fetching vocabulary words:", error)
      return []
    }

    return this.mapToVocabularyWords(data || [])
  }

  // Get words by difficulty
  async getWordsByDifficulty(difficulty: Difficulty): Promise<VocabularyWord[]> {
    const { data, error } = await supabase.from("vocabulary_words").select("*").eq("difficulty", difficulty)

    if (error) {
      console.error(`Error fetching ${difficulty} words:`, error)
      return []
    }

    return this.mapToVocabularyWords(data || [])
  }

  // Get words by phase
  async getWordsByPhase(phase: number): Promise<VocabularyWord[]> {
    const { data, error } = await supabase.from("vocabulary_words").select("*").eq("phase", phase)

    if (error) {
      console.error(`Error fetching phase ${phase} words:`, error)
      return []
    }

    return this.mapToVocabularyWords(data || [])
  }

  // Get words by surah
  async getWordsBySurah(surahNumber: number): Promise<VocabularyWord[]> {
    // First get all examples for this surah
    const { data: exampleData, error: exampleError } = await supabase
      .from("examples")
      .select("word_id")
      .eq("surah", surahNumber)

    if (exampleError) {
      console.error(`Error fetching examples for surah ${surahNumber}:`, exampleError)
      return []
    }

    // Extract unique word IDs
    const wordIds = [...new Set(exampleData.map((ex) => ex.word_id))]

    if (wordIds.length === 0) {
      return []
    }

    // Get the words with these IDs
    const { data, error } = await supabase.from("vocabulary_words").select("*").in("id", wordIds)

    if (error) {
      console.error(`Error fetching words for surah ${surahNumber}:`, error)
      return []
    }

    return this.mapToVocabularyWords(data || [])
  }

  // Search words
  async searchWords(query: string): Promise<VocabularyWord[]> {
    const { data, error } = await supabase
      .from("vocabulary_words")
      .select("*")
      .or(`arabic.ilike.%${query}%,transliteration.ilike.%${query}%,root_letters.ilike.%${query}%`)

    if (error) {
      console.error(`Error searching for "${query}":`, error)
      return []
    }

    return this.mapToVocabularyWords(data || [])
  }

  // Get total word count
  async getTotalWordCount(): Promise<number> {
    const { count, error } = await supabase.from("vocabulary_words").select("*", { count: "exact", head: true })

    if (error) {
      console.error("Error getting total word count:", error)
      return 0
    }

    return count || 0
  }

  // Helper method to map database records to VocabularyWord objects
  private mapToVocabularyWords(records: any[]): VocabularyWord[] {
    return records.map((record) => ({
      id: record.id,
      arabic: record.arabic,
      transliteration: record.transliteration,
      meanings: Array.isArray(record.meanings)
        ? record.meanings
        : typeof record.meanings === "object"
          ? Object.values(record.meanings)
          : [record.meanings],
      rootLetters: record.root_letters,
      partOfSpeech: record.part_of_speech,
      difficulty: record.difficulty,
      frequency: record.frequency,
      phase: record.phase,
      tags: record.tags || [],
      examples: [], // We'll fetch examples separately when needed
      hasAudio: false, // Add the missing hasAudio property
      audioUrl: record.audio_url || undefined, // Add audioUrl property
      notes: record.notes || undefined, // Add notes property
      relatedWords: record.related_words || [], // Add relatedWords property
    }))
  }

  // Get examples for a word
  async getExamplesForWord(wordId: string): Promise<any[]> {
    const { data, error } = await supabase.from("examples").select("*").eq("word_id", wordId)

    if (error) {
      console.error(`Error fetching examples for word ${wordId}:`, error)
      return []
    }

    return data || []
  }
}

// Create and export a singleton instance
export const vocabularyDbService = new VocabularyDbService()
