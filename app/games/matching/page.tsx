"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { matchingGameWords } from "@/data/matching-game-data"

interface WordData {
  id: number
  arabic: string
  english: string
}

interface Word {
  id: number
  text: string
  type: "arabic" | "english"
  originalId: number
  selected: boolean
  matched: boolean
}

export default function MatchingGame() {
  const [words, setWords] = useState<Word[]>([])
  const [selectedWord, setSelectedWord] = useState<Word | null>(null)
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [allWords, setAllWords] = useState<WordData[]>([])

  // Use refs to maintain state across renders more reliably
  const usedSetIndicesRef = useRef<number[]>([])
  const currentSetIndexRef = useRef<number>(-1)

  // For debugging - display which set is currently being shown
  const [debugInfo, setDebugInfo] = useState<string>("")

  // Display total sets and words
  const [statsInfo, setStatsInfo] = useState<string>("")

  useEffect(() => {
    // Set the words from our expanded database
    setAllWords(matchingGameWords)

    // Calculate and display stats
    const totalSets = Math.ceil(matchingGameWords.length / 6)
    const totalWords = matchingGameWords.length
    setStatsInfo(`Total: ${totalSets} sets with ${totalWords} words`)
  }, [])

  // Helper function to get a set of words at a specific index
  const getWordSetAtIndex = (index: number): WordData[] => {
    const wordsPerSet = 6
    const startIndex = index * wordsPerSet
    const endIndex = Math.min(startIndex + wordsPerSet, allWords.length)
    return allWords.slice(startIndex, endIndex)
  }

  // Helper function to determine how many sets are available
  const getTotalSets = (): number => {
    return Math.ceil(allWords.length / 6)
  }

  // Completely redesigned set selection logic
  const selectNewWordSet = (): number => {
    const totalSets = getTotalSets()

    // If we've used all sets, start over
    if (usedSetIndicesRef.current.length >= totalSets - 1) {
      // Keep only the current set in the used list to prevent immediate repetition
      usedSetIndicesRef.current = currentSetIndexRef.current >= 0 ? [currentSetIndexRef.current] : []
    }

    // Get all possible set indices
    const allSetIndices = Array.from({ length: totalSets }, (_, i) => i)

    // Filter out the indices we've already used and the current index
    const availableIndices = allSetIndices.filter(
      (index) => !usedSetIndicesRef.current.includes(index) && index !== currentSetIndexRef.current,
    )

    // If we somehow have no available indices (edge case), pick any except current
    if (availableIndices.length === 0) {
      const fallbackIndices = allSetIndices.filter((index) => index !== currentSetIndexRef.current)
      // If multiple sets exist, choose one; otherwise use the only one (edge case)
      if (fallbackIndices.length > 0) {
        const newIndex = fallbackIndices[Math.floor(Math.random() * fallbackIndices.length)]
        return newIndex
      }
      return 0 // Ultra-fallback: just use the first set if nothing else is available
    }

    // Randomly select from available indices
    const newIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)]

    // Mark this index as used
    usedSetIndicesRef.current.push(newIndex)

    return newIndex
  }

  const startGame = (newSet = false) => {
    let setIndex: number

    if (!gameStarted || !newSet) {
      // First game or replay with same words
      if (currentSetIndexRef.current === -1) {
        // Very first game - choose set 0
        setIndex = 0
        currentSetIndexRef.current = 0
        usedSetIndicesRef.current = [0]
      } else {
        // Replay with same words - use current set
        setIndex = currentSetIndexRef.current
      }
    } else {
      // Select a new set of words
      setIndex = selectNewWordSet()
      currentSetIndexRef.current = setIndex
    }

    // Get words for the selected set
    const currentWords = getWordSetAtIndex(setIndex)

    // Update debug info
    setDebugInfo(
      `Set #${setIndex + 1} of ${getTotalSets()}. Used sets: [${usedSetIndicesRef.current.map((i) => i + 1).join(", ")}]`,
    )

    // Create a shuffled array of words with their translations
    const arabicWords = currentWords.map((word) => ({
      id: word.id,
      text: word.arabic,
      type: "arabic" as const,
      originalId: word.id,
      selected: false,
      matched: false,
    }))

    const englishWords = currentWords.map((word) => ({
      id: word.id + 1000, // Add offset to create unique IDs
      text: word.english,
      type: "english" as const,
      originalId: word.id,
      selected: false,
      matched: false,
    }))

    // Combine and shuffle
    const gameWords = [...arabicWords, ...englishWords].sort(() => Math.random() - 0.5)

    setWords(gameWords)
    setSelectedWord(null)
    setMatchedPairs(0)
    setGameStarted(true)
    setGameCompleted(false)
  }

  const handleWordClick = (clickedWord: any) => {
    // If the word is already matched or the same word is clicked again, do nothing
    if (clickedWord.matched || (selectedWord && clickedWord.id === selectedWord.id)) {
      return
    }

    // Create a new array with the clicked word marked as selected
    const updatedWords = words.map((word) => (word.id === clickedWord.id ? { ...word, selected: true } : word))

    if (!selectedWord) {
      // First selection
      setSelectedWord(clickedWord)
      setWords(updatedWords)
    } else {
      // Second selection - check for a match
      setWords(updatedWords)

      // Check if the words match (have the same originalId but different types)
      if (clickedWord.originalId === selectedWord.originalId && clickedWord.type !== selectedWord.type) {
        // It's a match!
        setTimeout(() => {
          setWords(
            words.map((word) =>
              word.id === clickedWord.id || word.id === selectedWord.id
                ? { ...word, matched: true, selected: false }
                : word,
            ),
          )
          setSelectedWord(null)
          setMatchedPairs(matchedPairs + 1)

          // Check if game is complete
          const currentWords = getWordSetAtIndex(currentSetIndexRef.current)
          if (matchedPairs + 1 === currentWords.length) {
            setGameCompleted(true)
          }
        }, 500)
      } else {
        // Not a match, deselect after a delay
        setTimeout(() => {
          setWords(
            words.map((word) =>
              word.id === clickedWord.id || word.id === selectedWord.id ? { ...word, selected: false } : word,
            ),
          )
          setSelectedWord(null)
        }, 1000)
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6 bg-green-800 text-white p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Match the Following Words</h1>
        <Link href="/games" className="text-white hover:underline">
          Back to Games
        </Link>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold text-center mb-2">Match the Following Words</h2>
        <p className="text-center text-gray-600 mb-4">Connect Arabic words with their meanings</p>

        <div className="text-center mb-6">
          <p>
            Test your knowledge of Quranic vocabulary by matching Arabic words with their correct meanings. Click on a
            word and then its matching translation to create a pair.
          </p>
          {/* Display stats about total sets and words */}
          {statsInfo && <p className="text-sm text-green-600 font-semibold mt-2">{statsInfo}</p>}
          {/* You can remove this in production, it's just for debugging */}
          {debugInfo && <p className="text-xs text-gray-500 mt-2">{debugInfo}</p>}
        </div>

        {!gameStarted ? (
          <div className="flex justify-center">
            <Button onClick={() => startGame(false)} className="bg-green-600 hover:bg-green-700 text-white">
              Start Game
            </Button>
          </div>
        ) : (
          <>
            {gameCompleted ? (
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-green-600 mb-4">Congratulations!</h3>
                <p className="mb-4">You've successfully matched all the words.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button onClick={() => startGame(false)} className="bg-green-600 hover:bg-green-700 text-white">
                    Play Again (Same Words)
                  </Button>
                  <Button onClick={() => startGame(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
                    New Set of Words
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {words.map((word) => (
                    <div
                      key={word.id}
                      className={`
                        p-4 rounded-lg cursor-pointer text-center flex items-center justify-center min-h-[80px]
                        ${
                          word.matched
                            ? "bg-green-100 border-2 border-green-500"
                            : word.selected
                              ? "bg-blue-100 border-2 border-blue-500"
                              : word.type === "arabic"
                                ? "bg-amber-50 border border-amber-200"
                                : "bg-slate-50 border border-slate-200"
                        }
                        ${word.matched ? "cursor-default" : "hover:shadow-md transition-shadow"}
                      `}
                      onClick={() => !word.matched && handleWordClick(word)}
                    >
                      <span className={word.type === "arabic" ? "text-xl" : ""}>{word.text}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p>
                    Matched pairs: {matchedPairs}/{getWordSetAtIndex(currentSetIndexRef.current).length}
                  </p>
                </div>
              </>
            )}
          </>
        )}
      </Card>
    </div>
  )
}
