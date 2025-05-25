"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/services/supabase-client"

export default function DatabaseViewPage() {
  const [words, setWords] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Use a key to force client-side only rendering
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    async function fetchWords() {
      try {
        const { data, error } = await supabase.from("vocabulary_words").select("*").limit(10)

        if (error) {
          throw error
        }

        setWords(data || [])
      } catch (err) {
        console.error("Error fetching words:", err)
        setError(err instanceof Error ? err.message : "Unknown error")
      } finally {
        setLoading(false)
      }
    }

    fetchWords()
  }, [])

  // Only render content client-side to avoid hydration mismatch
  if (!mounted) {
    return <div className="container mx-auto py-8 px-4">Loading...</div>
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Database View</h1>

      {loading ? (
        <p>Loading words from database...</p>
      ) : error ? (
        <div className="bg-red-50 text-red-700 p-4 rounded-md">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
        </div>
      ) : words.length === 0 ? (
        <p>No words found in the database. Run the migration script first.</p>
      ) : (
        <div>
          <p className="mb-4">Found {words.length} words in the database:</p>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Arabic</th>
                  <th className="py-2 px-4 border-b">Transliteration</th>
                  <th className="py-2 px-4 border-b">Meanings</th>
                  <th className="py-2 px-4 border-b">Phase</th>
                </tr>
              </thead>
              <tbody>
                {words.map((word) => (
                  <tr key={word.id}>
                    <td className="py-2 px-4 border-b text-right">{word.arabic_word}</td>
                    <td className="py-2 px-4 border-b">{word.transliteration}</td>
                    <td className="py-2 px-4 border-b">
                      {Array.isArray(word.meanings) ? word.meanings.join(", ") : word.meanings}
                    </td>
                    <td className="py-2 px-4 border-b">{word.phase}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}
