"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { wordListDbService } from "@/services/word-list-db-service"

export default function StudyWordListPage({ params }: { params: { id: string } }) {
  const { id } = params
  const router = useRouter()

  const [list, setList] = useState<any>(null)
  const [words, setWords] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showMeaning, setShowMeaning] = useState(false)
  const [studyMode, setStudyMode] = useState<"flashcards" | "list">("flashcards")

  useEffect(() => {
    const fetchList = async () => {
      try {
        const fetchedList = await wordListDbService.getListWithWords(id)
        if (fetchedList) {
          setList(fetchedList)
          setWords(fetchedList.words || [])
        } else {
          router.push("/word-lists-db")
        }
      } catch (err) {
        setError("Failed to load word list. Please try again.")
        console.error("Error fetching word list:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchList()
  }, [id, router])

  const nextWord = () => {
    setShowMeaning(false)
    setCurrentIndex((prev) => (prev + 1) % words.length)
  }

  const prevWord = () => {
    setShowMeaning(false)
    setCurrentIndex((prev) => (prev - 1 + words.length) % words.length)
  }

  const toggleMeaning = () => {
    setShowMeaning((prev) => !prev)
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
        <p className="mt-4">Loading study materials...</p>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <p className="text-red-500">{error}</p>
        <Link href="/word-lists-db" className="mt-4 text-green-600 hover:underline">
          Return to Word Lists
        </Link>
      </div>
    )
  }

  if (words.length === 0) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">{list?.name}</h1>
        <p className="mb-4">This list doesn't have any words yet.</p>
        <div className="flex justify-center gap-4">
          <Link
            href={`/word-lists-db/${id}`}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
          >
            Back to List
          </Link>
          <Link
            href="/vocabulary-browser"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Browse Words
          </Link>
        </div>
      </div>
    )
  }

  const currentWord = words[currentIndex]

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href={`/word-lists-db/${id}`} className="text-green-600 hover:underline flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Word List
        </Link>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Studying: {list?.name}</h1>
          <div className="flex gap-2">
            <button
              onClick={() => setStudyMode("flashcards")}
              className={`px-3 py-1 rounded-md ${
                studyMode === "flashcards" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              Flashcards
            </button>
            <button
              onClick={() => setStudyMode("list")}
              className={`px-3 py-1 rounded-md ${
                studyMode === "list" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              List View
            </button>
          </div>
        </div>

        {studyMode === "flashcards" ? (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-green-50 border-b">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  Word {currentIndex + 1} of {words.length}
                </span>
                <span className="text-sm text-gray-600">Phase {currentWord.phase}</span>
              </div>
            </div>

            <div className="p-8 min-h-[300px] flex flex-col items-center justify-center">
              <div className="text-6xl font-arabic mb-4 text-center">{currentWord.arabic}</div>
              <div className="text-2xl mb-6 text-center">{currentWord.transliteration}</div>

              {showMeaning ? (
                <div className="text-xl text-center">
                  <p className="font-semibold mb-2">Meaning:</p>
                  <p>
                    {Array.isArray(currentWord.meanings)
                      ? currentWord.meanings.join(", ")
                      : typeof currentWord.meanings === "object"
                        ? Object.values(currentWord.meanings).join(", ")
                        : currentWord.meanings}
                  </p>
                  {currentWord.root_letters && (
                    <p className="mt-4 text-sm text-gray-600">Root: {currentWord.root_letters}</p>
                  )}
                </div>
              ) : (
                <button
                  onClick={toggleMeaning}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Show Meaning
                </button>
              )}
            </div>

            <div className="p-4 bg-gray-50 border-t flex justify-between">
              <button
                onClick={prevWord}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
              >
                Previous
              </button>
              <button
                onClick={nextWord}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
              >
                Next
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 bg-green-50 border-b">
              <h2 className="font-semibold">All Words in List</h2>
            </div>

            <div className="divide-y">
              {words.map((word, index) => (
                <div key={word.id} className="p-4 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-arabic">{word.arabic}</span>
                        <span className="text-lg">{word.transliteration}</span>
                      </div>
                      <p className="text-gray-700 mt-1">
                        {Array.isArray(word.meanings)
                          ? word.meanings.join(", ")
                          : typeof word.meanings === "object"
                            ? Object.values(word.meanings).join(", ")
                            : word.meanings}
                      </p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                      Phase {word.phase}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-8 text-center">
          <p className="text-sm text-gray-600 mb-2">
            Study tip: Regular review of vocabulary words improves retention.
          </p>
        </div>
      </div>
    </div>
  )
}
