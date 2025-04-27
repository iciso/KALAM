import { vocabularyService } from "./vocabulary-service"
import type { WordList, WordListWithWords } from "../types/word-lists"
import type { VocabularyWord } from "../types/vocabulary"

// Local storage key
const WORD_LISTS_STORAGE_KEY = "kalam_word_lists"

export class WordListService {
  private wordLists: WordList[] = []

  constructor() {
    this.loadFromStorage()
  }

  // Load word lists from local storage
  private loadFromStorage(): void {
    if (typeof window === "undefined") return

    try {
      const storedLists = localStorage.getItem(WORD_LISTS_STORAGE_KEY)
      if (storedLists) {
        const parsedLists = JSON.parse(storedLists) as WordList[]
        // Convert string dates back to Date objects
        this.wordLists = parsedLists.map((list) => ({
          ...list,
          createdAt: new Date(list.createdAt),
          updatedAt: new Date(list.updatedAt),
        }))
      }
    } catch (error) {
      console.error("Failed to load word lists from storage:", error)
      this.wordLists = []
    }
  }

  // Save word lists to local storage
  private saveToStorage(): void {
    if (typeof window === "undefined") return

    try {
      localStorage.setItem(WORD_LISTS_STORAGE_KEY, JSON.stringify(this.wordLists))
    } catch (error) {
      console.error("Failed to save word lists to storage:", error)
    }
  }

  // Get all word lists
  getAllLists(): WordList[] {
    return [...this.wordLists]
  }

  // Get a word list by ID
  getListById(id: string): WordList | undefined {
    return this.wordLists.find((list) => list.id === id)
  }

  // Get a word list with populated words
  getListWithWords(id: string): WordListWithWords | undefined {
    const list = this.getListById(id)
    if (!list) return undefined

    const words = list.wordIds
      .map((wordId) => vocabularyService.getWordById(wordId))
      .filter((word): word is VocabularyWord => word !== undefined)

    return {
      ...list,
      words,
    }
  }

  // Create a new word list
  createList(name: string, description = ""): WordList {
    const now = new Date()
    const newList: WordList = {
      id: `list-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      name,
      description,
      createdAt: now,
      updatedAt: now,
      wordIds: [],
    }

    this.wordLists.push(newList)
    this.saveToStorage()
    return newList
  }

  // Update a word list
  updateList(id: string, updates: Partial<Omit<WordList, "id" | "createdAt" | "updatedAt">>): WordList | undefined {
    const listIndex = this.wordLists.findIndex((list) => list.id === id)
    if (listIndex === -1) return undefined

    const updatedList = {
      ...this.wordLists[listIndex],
      ...updates,
      updatedAt: new Date(),
    }

    this.wordLists[listIndex] = updatedList
    this.saveToStorage()
    return updatedList
  }

  // Delete a word list
  deleteList(id: string): boolean {
    const initialLength = this.wordLists.length
    this.wordLists = this.wordLists.filter((list) => list.id !== id)

    if (this.wordLists.length !== initialLength) {
      this.saveToStorage()
      return true
    }

    return false
  }

  // Add a word to a list
  addWordToList(listId: string, wordId: string): WordList | undefined {
    const list = this.getListById(listId)
    if (!list) return undefined

    // Check if word exists
    const word = vocabularyService.getWordById(wordId)
    if (!word) return undefined

    // Check if word is already in the list
    if (list.wordIds.includes(wordId)) return list

    const updatedList = {
      ...list,
      wordIds: [...list.wordIds, wordId],
      updatedAt: new Date(),
    }

    const listIndex = this.wordLists.findIndex((l) => l.id === listId)
    this.wordLists[listIndex] = updatedList
    this.saveToStorage()
    return updatedList
  }

  // Remove a word from a list
  removeWordFromList(listId: string, wordId: string): WordList | undefined {
    const list = this.getListById(listId)
    if (!list) return undefined

    const updatedList = {
      ...list,
      wordIds: list.wordIds.filter((id) => id !== wordId),
      updatedAt: new Date(),
    }

    const listIndex = this.wordLists.findIndex((l) => l.id === listId)
    this.wordLists[listIndex] = updatedList
    this.saveToStorage()
    return updatedList
  }

  // Check if a word is in a list
  isWordInList(listId: string, wordId: string): boolean {
    const list = this.getListById(listId)
    return list ? list.wordIds.includes(wordId) : false
  }

  // Get all lists containing a word
  getListsContainingWord(wordId: string): WordList[] {
    return this.wordLists.filter((list) => list.wordIds.includes(wordId))
  }
}

export const wordListService = new WordListService()
