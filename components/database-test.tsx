"use client"

import { useState, useEffect } from "react"
import { getVocabularyWords } from "../services/database-service"
import { getWordLists, getWordsInList } from "../services/word-list-service"
import type { VocabularyWord, WordList } from "../types/supabase-types"

export default function DatabaseTest() {
  const [words, setWords] = useState<VocabularyWord[]>([])
  const [lists, setLists] = useState<WordList[]>([])
  const [selectedListId, setSelectedListId] = useState<string>("")
  const [wordsInList, setWordsInList] = useState<VocabularyWord[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)

        // Load vocabulary words
        const vocabularyWords = await getVocabularyWords()
        setWords(vocabularyWords)

        // Load word lists
        const wordLists = await getWordLists()
        setLists(wordLists)

        setLoading(false)
      } catch (err) {
        console.error("Error loading data:", err)
        setError("Failed to load data from the database")
        setLoading(false)
      }
    }

    loadData()
  }, [])

  useEffect(() => {
    async function loadWordsInList() {
      if (!selectedListId) return

      try {
        const listWords = await getWordsInList(selectedListId)
        setWordsInList(listWords)
      } catch (err) {
        console.error("Error loading words in list:", err)
        setError("Failed to load words in the selected list")
      }
    }

    loadWordsInList()
  }, [selectedListId])

  if (loading) {
    return <div className="p-8">Loading data from Supabase...</div>
  }

  if (error) {
    return <div className="p-8 text-red-500">{error}</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Database Connection Test</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Vocabulary Words ({words.length})</h2>
        {words.length === 0 ? (
          <p>No vocabulary words found in the database.</p>
        ) : (
          <ul className="border rounded-lg divide-y">
            {words.map((word) => (
              <li key={word.id} className="p-4">
                <div className="font-bold text-lg">{word.arabic}</div>
                <div>{word.transliteration}</div>
                <div className="text-gray-600">{word.meanings.join(", ")}</div>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Word Lists ({lists.length})</h2>
        {lists.length === 0 ? (
          <p>No word lists found in the database.</p>
        ) : (
          <div>
            <select
              className="border rounded p-2 mb-4 w-full max-w-md"
              value={selectedListId}
              onChange={(e) => setSelectedListId(e.target.value)}
            >
              <option value="">Select a word list</option>
              {lists.map((list) => (
                <option key={list.id} value={list.id}>
                  {list.name}
                </option>
              ))}
            </select>

            {selectedListId && (
              <div>
                <h3 className="text-lg font-medium mb-2">Words in selected list ({wordsInList.length})</h3>
                {wordsInList.length === 0 ? (
                  <p>No words in this list.</p>
                ) : (
                  <ul className="border rounded-lg divide-y">
                    {wordsInList.map((word) => (
                      <li key={word.id} className="p-4">
                        <div className="font-bold text-lg">{word.arabic}</div>
                        <div>{word.transliteration}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
