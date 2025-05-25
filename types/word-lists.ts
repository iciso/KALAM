import type { VocabularyWord } from "./vocabulary"

export interface WordList {
  id: string
  name: string
  description?: string
  isPredefined?: boolean
  createdAt: Date
  updatedAt: Date
  wordCount?: number
  wordIds: string[]
  words?: VocabularyWord[]
}

export interface WordListWithWords extends WordList {
  words: VocabularyWord[]
}

export interface WordListItem {
  list_id: string
  word_id: string
  added_at: string
}
