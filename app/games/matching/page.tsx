"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Timer, RefreshCw, CheckCircle2 } from "lucide-react"
import { vocabularyService } from "@/services/vocabulary-service"

type MatchItem = {
  id: number
  arabic: string
  meaning: string
  isMatched: boolean
}

// Function to generate matching words for the game
const generateMatchingWords = (count = 8) => {
  const allWords = vocabularyService.getAllWords()
  const shuffledWords = [...allWords].sort(() => Math.random() - 0.5)
  const selectedWords = shuffledWords.slice(0, count)

  return selectedWords.map((word, index) => ({
    id: index + 1,
    arabic: word.arabic,
    meaning: word.meanings[0],
    isMatched: false,
  }))
}

export default function MatchingGamePage() {
  const [matchingWords, setMatchingWords] = useState(generateMatchingWords())
  const [items, setItems] = useState<MatchItem[]>([])
  const [selectedItem, setSelectedItem] = useState<number | null>(null)
  const [lines, setLines] = useState<any[]>([])
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [timer, setTimer] = useState(0)
  const [score, setScore] = useState(0)
  const [attempts, setAttempts] = useState(0)

  useEffect(() => {
    if (gameStarted && !gameCompleted) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [gameStarted, gameCompleted])

  useEffect(() => {
    if (items.length > 0 && items.every((item) => item.isMatched)) {
      setGameCompleted(true)
    }
  }, [items])

  const initializeGame = () => {
    // Shuffle the meanings
    const shuffledItems = [...matchingWords].map((item) => ({
      ...item,
      isMatched: false,
    }))

    setItems(shuffledItems)
    setSelectedItem(null)
    setLines([])
    setTimer(0)
    setScore(0)
    setAttempts(0)
    setGameStarted(true)
    setGameCompleted(false)
  }

  const startNewGame = () => {
    // Generate new matching words
    const newMatchingWords = generateMatchingWords()
    setMatchingWords(newMatchingWords)

    // Initialize with the new words
    const shuffledItems = [...newMatchingWords].map((item) => ({
      ...item,
      isMatched: false,
    }))

    setItems(shuffledItems)
    setSelectedItem(null)
    setLines([])
    setTimer(0)
    setScore(0)
    setAttempts(0)
    setGameStarted(true)
    setGameCompleted(false)
  }

  const handleItemClick = (id: number, isArabic: boolean) => {
    if (items.find((item) => item.id === id)?.isMatched) {
      return
    }

    if (selectedItem === null) {
      setSelectedItem(id)
    } else {
      const selectedItemData = items.find((item) => item.id === selectedItem)
      const clickedItemData = items.find((item) => item.id === id)

      if (!selectedItemData || !clickedItemData) return

      // Check if one is Arabic and one is meaning
      const isMatch = selectedItem === id

      setAttempts((prev) => prev + 1)

      if (isMatch) {
        // Update matched status
        setItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, isMatched: true } : item)))

        setScore((prev) => prev + 10)
      } else {
        // Wrong match
        setScore((prev) => Math.max(0, prev - 2))
      }

      setSelectedItem(null)
    }
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Match the Following Words</h1>
          <Link href="/games">
            <Button variant="ghost" size="sm">
              Back to Games
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!gameStarted ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Match the Following Words</CardTitle>
              <CardDescription className="text-center">Connect Arabic words with their meanings</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6">
                Test your knowledge of Quranic vocabulary by matching Arabic words with their correct meanings. Click on
                a word and then its matching translation to create a pair.
              </p>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={initializeGame} className="bg-emerald-600 hover:bg-emerald-700">
                Start Game
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <>
            <div className="mb-6 max-w-md mx-auto">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Timer className="h-4 w-4 mr-1" />
                  <span>{formatTime(timer)}</span>
                </div>
                <div>Score: {score}</div>
                <div>
                  Matched: {items.filter((item) => item.isMatched).length}/{items.length}
                </div>
              </div>
              <Progress value={(items.filter((item) => item.isMatched).length / items.length) * 100} className="h-2" />
            </div>

            {gameCompleted ? (
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Game Completed!</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg mb-4">Congratulations! You've matched all the words correctly.</p>
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Time</div>
                      <div className="text-xl font-bold">{formatTime(timer)}</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Score</div>
                      <div className="text-xl font-bold">{score}</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Attempts</div>
                      <div className="text-xl font-bold">{attempts}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={initializeGame}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Play Again
                  </Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={startNewGame}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    New Words
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-center mb-4">Arabic Words</h2>
                  {items.map((item) => (
                    <div
                      key={`arabic-${item.id}`}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        item.isMatched
                          ? "bg-green-100 dark:bg-green-900 border-green-500"
                          : selectedItem === item.id
                            ? "bg-blue-100 dark:bg-blue-900 border-blue-500"
                            : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                      } border-2`}
                      onClick={() => handleItemClick(item.id, true)}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-arabic text-xl">{item.arabic}</span>
                        {item.isMatched && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-bold text-center mb-4">Meanings</h2>
                  {items.map((item) => (
                    <div
                      key={`meaning-${item.id}`}
                      className={`p-4 rounded-lg cursor-pointer transition-all ${
                        item.isMatched
                          ? "bg-green-100 dark:bg-green-900 border-green-500"
                          : selectedItem === item.id
                            ? "bg-blue-100 dark:bg-blue-900 border-blue-500"
                            : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                      } border-2`}
                      onClick={() => handleItemClick(item.id, false)}
                    >
                      <div className="flex justify-between items-center">
                        <span>{item.meaning}</span>
                        {item.isMatched && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
