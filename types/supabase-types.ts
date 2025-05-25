export interface VocabularyWord {
  id: string
  arabic: string
  transliteration: string
  root_letters?: string
  meanings: string[]
  part_of_speech: string
  difficulty: string
  frequency?: number
  tags: string[]
  audio_url?: string
  has_audio: boolean
  notes?: string
  phase: number
  created_at: string
}

export interface WordExample {
  id: string
  word_id: string
  surah_number: number
  surah_name: string
  ayah_number: number
  arabic_text: string
  translation_text: string
  word_location: {
    startIndex: number
    endIndex: number
  }
  audio_url?: string
  word_audio_url?: string
  has_audio: boolean
  created_at: string
}

export interface WordList {
  id: string
  name: string
  description?: string
  is_predefined: boolean
  created_at: string
  updated_at: string
}

export interface WordListItem {
  list_id: string
  word_id: string
  added_at: string
}
