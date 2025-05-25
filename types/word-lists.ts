import type { VocabularyWord } from "./vocabulary"

export interface WordList {
  id: string
  name: string
  description: string
  createdAt: Date
  updatedAt: Date
  wordIds: string[]
}

export interface WordListWithWords extends WordList {
  words: VocabularyWord[]
}
