import type { VocabularyWord } from "../types/vocabulary"
import type { WordList, WordListWithWords } from "../types/word-lists"

// Simplified service for debugging
export const wordListService = {
  async getAllLists(): Promise<WordList[]> {
    return []
  },

  async getListWithWords(id: string): Promise<WordListWithWords | null> {
    return null
  },

  async createList(name: string, description?: string): Promise<WordList | null> {
    return null
  },

  async updateList(id: string, updates: { name?: string; description?: string }): Promise<boolean> {
    return true
  },

  async deleteList(id: string): Promise<boolean> {
    return true
  },

  async addWordToList(listId: string, wordId: string): Promise<boolean> {
    return true
  },

  async removeWordFromList(listId: string, wordId: string): Promise<boolean> {
    return true
  },

  async getWordsInList(listId: string): Promise<VocabularyWord[]> {
    return []
  },
}

export async function getWordLists(): Promise<WordList[]> {
  return []
}

export async function getWordsInList(listId: string): Promise<VocabularyWord[]> {
  return []
}
