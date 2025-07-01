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

  const usedSetIndicesRef = useRef<number[]>([])
  const currentSetIndexRef = useRef<number>(-1)

  const [debugInfo, setDebugInfo] = useState<string>("")
  const [statsInfo, setStatsInfo] = useState<string>("")

  useEffect(() => {
    setAllWords(matchingGameWords)
    const totalSets = Math.ceil(matchingGameWords.length / 3)
    const totalWords = matchingGameWords.length
    setStatsInfo(`Total: ${totalSets} sets with ${totalWords} words`)
  }, [])

  const getWordSetAtIndex = (index: number): WordData[] => {
    const wordsPerSet = 3
    const startIndex = index * wordsPerSet
    const endIndex = Math.min(startIndex + wordsPerSet, allWords.length)
    console.log(`Selecting words at index ${index}: ${startIndex} to ${endIndex}`)
    return allWords.slice(startIndex, endIndex)
  }

  const getTotalSets = (): number => {
    return Math.ceil(allWords.length / 3)
  }

  const selectNewWordSet = (): number => {
    const totalSets = getTotalSets()
    if (usedSetIndicesRef.current.length >= totalSets - 1) {
      usedSetIndicesRef.current = currentSetIndexRef.current >= 0 ? [currentSetIndexRef.current] : []
    }
    const allSetIndices = Array.from({ length: totalSets }, (_, i) => i)
    const availableIndices = allSetIndices.filter(
      (index) => !usedSetIndicesRef.current.includes(index) && index !== currentSetIndexRef.current,
    )
    if (availableIndices.length === 0) {
      const fallbackIndices = allSetIndices.filter((index) => index !== currentSetIndexRef.current)
      return fallbackIndices.length > 0 ? fallbackIndices[Math.floor(Math.random() * fallbackIndices.length)] : 0
    }
    const newIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)]
    usedSetIndicesRef.current.push(newIndex)
    return newIndex
  }

  const startGame = (newSet = false) => {
    let setIndex: number

    if (!gameStarted || !newSet) {
      if (currentSetIndexRef.current === -1) {
        setIndex = 0
        currentSetIndexRef.current = 0
        usedSetIndicesRef.current = [0]
      } else {
        setIndex = currentSetIndexRef.current
      }
    } else {
      setIndex = selectNewWordSet()
      currentSetIndexRef.current = setIndex
    }

    const currentWords = getWordSetAtIndex(setIndex)
    console.log("Selected words:", currentWords.map(w => ({ id: w.id, arabic: w.arabic, english: w.english })))

    setDebugInfo(
      `Set #${setIndex + 1} of ${getTotalSets()}. Used sets: [${usedSetIndicesRef.current.map((i) => i + 1).join(", ")}]`,
    )

    const arabicWords = currentWords.map((word) => ({
      id: word.id,
      text: word.arabic,
      type: "arabic" as const,
      originalId: word.id,
      selected: false,
      matched: false,
    }))

    const englishWords = currentWords.map((word) => ({
      id: word.id + 1000,
      text: word.english,
      type: "english" as const,
      originalId: word.id,
      selected: false,
      matched: false,
    }))

    const gameWords = [...arabicWords, ...englishWords].sort(() => Math.random() - 0.5)
    console.log("Generated tiles:", gameWords.map(w => ({ id: w.id, text: w.text, type: w.type })))

    setWords(gameWords)
    setSelectedWord(null)
    setMatchedPairs(0)
    setGameStarted(true)
    setGameCompleted(false)
  }

  const handleWordClick = (clickedWord: any) => {
    if (clickedWord.matched || (selectedWord && clickedWord.id === selectedWord.id)) {
      return
    }

    const updatedWords = words.map((word) => (word.id === clickedWord.id ? { ...word, selected: true } : word))

    if (!selectedWord) {
      setSelectedWord(clickedWord)
      setWords(updatedWords)
    } else {
      setWords(updatedWords)

      if (clickedWord.originalId === selectedWord.originalId && clickedWord.type !== selectedWord.type) {
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

          const currentWords = getWordSetAtIndex(currentSetIndexRef.current)
          if (matchedPairs + 1 === currentWords.length) {
            setGameCompleted(true)
          }
        }, 500)
      } else {
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
          {statsInfo && <p className="text-sm text-green-600 font-semibold mt-2">{statsInfo}</p>}
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
                <p className="mb-4">You've successfully matched all the pairs.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button onClick={() => startGame(false)} className="bg-green-600 hover:bg-green-700 text-white">
                    Play Again (Same Words)
                  </Button>
                  <Button onClick={() => startGame(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Next Set
                  </Button>
                </div>
                <p className="mt-2">Time: {Math.floor(matchedPairs * 30 / 60)}:{(matchedPairs * 30) % 60}</p>
                <p>Moves: {matchedPairs * 2 + 2}</p>
                <p>
                  Your Progress: You've completed {currentSetIndexRef.current + 1} of {getTotalSets()} sets (
                  {Math.round((currentSetIndexRef.current + 1) / getTotalSets() * 100)}%)
                </p>
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
                  <p>Pairs: {matchedPairs}/{getWordSetAtIndex(currentSetIndexRef.current).length}</p>
                </div>
              </>
            )}
          </>
        )}
      </Card>
    </div>
  )
}
