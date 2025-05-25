import type { WordList, WordListWithWords } from "../types/word-lists"

// Simplified service for debugging
export const wordListDbService = {
  async getAllLists(): Promise<WordList[]> {
    return []
  },

  async getListWithWords(id: string): Promise<WordListWithWords | null> {
    return null
  },

  async createList(name: string, description = ""): Promise<WordList | null> {
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
}
