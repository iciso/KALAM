"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Timer, RefreshCw, HelpCircle } from "lucide-react"
import { fillBlanksData } from "@/data/game-data"

type Sentence = {
  id: number
  text: string
  blanks: {
    id: string
    word: string
    filled: string | null
  }[]
}

export default function FillBlanksGamePage() {
  const [sentences, setSentences] = useState<Sentence[]>([])
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
  const [availableWords, setAvailableWords] = useState<string[]>([])
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [timer, setTimer] = useState(0)
  const [score, setScore] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [draggedWord, setDraggedWord] = useState<string | null>(null)

  useEffect(() => {
    if (gameStarted && !gameCompleted) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [gameStarted, gameCompleted])

  const initializeGame = () => {
    // Deep copy the sentences to avoid modifying the original data
    const initialSentences = JSON.parse(JSON.stringify(fillBlanksData))

    // Get all words for the first sentence
    const firstSentenceWords = initialSentences[0].blanks.map((blank: any) => blank.word)

    // Shuffle the words
    const shuffledWords = [...firstSentenceWords].sort(() => Math.random() - 0.5)

    setSentences(initialSentences)
    setCurrentSentenceIndex(0)
    setAvailableWords(shuffledWords)
    setTimer(0)
    setScore(0)
    setShowHint(false)
    setGameStarted(true)
    setGameCompleted(false)
  }

  const handleDragStart = (word: string) => {
    setDraggedWord(word)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, blankId: string) => {
    e.preventDefault()

    if (!draggedWord) return

    // Update the sentence with the dropped word
    const updatedSentences = [...sentences]
    const currentSentence = updatedSentences[currentSentenceIndex]

    const blankIndex = currentSentence.blanks.findIndex((blank) => blank.id === blankId)

    if (blankIndex !== -1) {
      // If the blank already has a word, put it back in available words
      if (currentSentence.blanks[blankIndex].filled) {
        setAvailableWords((prev) => [...prev, currentSentence.blanks[blankIndex].filled!])
      }

      // Fill the blank with the dragged word
      currentSentence.blanks[blankIndex].filled = draggedWord

      // Remove the word from available words
      setAvailableWords((prev) => prev.filter((word) => word !== draggedWord))

      setSentences(updatedSentences)

      // Check if all blanks are filled
      const allFilled = currentSentence.blanks.every((blank) => blank.filled !== null)

      if (allFilled) {
        // Check if all blanks are filled correctly
        const allCorrect = currentSentence.blanks.every((blank) => blank.filled === blank.word)

        if (allCorrect) {
          setScore((prev) => prev + 10)

          // Move to next sentence or complete game
          if (currentSentenceIndex < sentences.length - 1) {
            setTimeout(() => {
              const nextIndex = currentSentenceIndex + 1
              setCurrentSentenceIndex(nextIndex)

              // Get words for the next sentence
              const nextSentenceWords = sentences[nextIndex].blanks.map((blank) => blank.word)
              const shuffledWords = [...nextSentenceWords].sort(() => Math.random() - 0.5)

              setAvailableWords(shuffledWords)
              setShowHint(false)
            }, 1000)
          } else {
            setGameCompleted(true)
          }
        }
      }
    }

    setDraggedWord(null)
  }

  const handleRemoveWord = (blankId: string) => {
    const updatedSentences = [...sentences]
    const currentSentence = updatedSentences[currentSentenceIndex]

    const blankIndex = currentSentence.blanks.findIndex((blank) => blank.id === blankId)

    if (blankIndex !== -1 && currentSentence.blanks[blankIndex].filled) {
      // Put the word back in available words
      setAvailableWords((prev) => [...prev, currentSentence.blanks[blankIndex].filled!])

      // Clear the blank
      currentSentence.blanks[blankIndex].filled = null

      setSentences(updatedSentences)
    }
  }

  const showHintHandler = () => {
    setShowHint(true)
    setScore((prev) => Math.max(0, prev - 2)) // Penalty for using hint
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const currentSentence = sentences[currentSentenceIndex]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fill in the Blanks</h1>
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
              <CardTitle className="text-2xl text-center">Fill in the Blanks</CardTitle>
              <CardDescription className="text-center">
                Complete sentences by dragging words to the correct blanks
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6">
                Test your knowledge of Quranic vocabulary by completing sentences with the correct words. Drag words
                from the word bank to the appropriate blanks in the sentence.
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
                  Sentence: {currentSentenceIndex + 1}/{sentences.length}
                </div>
              </div>
              <Progress value={(currentSentenceIndex / sentences.length) * 100} className="h-2" />
            </div>

            {gameCompleted ? (
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Game Completed!</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg mb-4">Congratulations! You've completed all the sentences.</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Time</div>
                      <div className="text-xl font-bold">{formatTime(timer)}</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Score</div>
                      <div className="text-xl font-bold">{score}</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={initializeGame}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Play Again
                  </Button>
                  <Link href="/games">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">More Games</Button>
                  </Link>
                </CardFooter>
              </Card>
            ) : (
              <div className="max-w-3xl mx-auto">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>Sentence {currentSentenceIndex + 1}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={showHintHandler}
                        disabled={showHint}
                        className="text-gray-500"
                      >
                        <HelpCircle className="h-4 w-4 mr-1" />
                        Hint
                      </Button>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg mb-6">
                      {currentSentence &&
                        currentSentence.text.split("___").map((part, index) => (
                          <span key={index}>
                            {part}
                            {index < currentSentence.text.split("___").length - 1 && (
                              <span
                                className={`inline-block min-w-[100px] mx-1 p-2 border-2 border-dashed rounded ${
                                  currentSentence.blanks[index].filled
                                    ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                                    : "border-gray-300 dark:border-gray-600"
                                }`}
                                onDragOver={handleDragOver}
                                onDrop={(e) => handleDrop(e, currentSentence.blanks[index].id)}
                              >
                                {currentSentence.blanks[index].filled ? (
                                  <div className="flex justify-between items-center">
                                    <span className="font-arabic">{currentSentence.blanks[index].filled}</span>
                                    <button
                                      onClick={() => handleRemoveWord(currentSentence.blanks[index].id)}
                                      className="text-red-500 ml-2"
                                    >
                                      ×
                                    </button>
                                  </div>
                                ) : (
                                  <span className="text-gray-400">Drop here</span>
                                )}
                              </span>
                            )}
                          </span>
                        ))}
                    </div>

                    {showHint && (
                      <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg mb-6 border border-yellow-200 dark:border-yellow-800">
                        <h3 className="font-bold mb-2 flex items-center">
                          <HelpCircle className="h-4 w-4 mr-1 text-yellow-600 dark:text-yellow-400" />
                          Hint
                        </h3>
                        <ul className="list-disc pl-5 space-y-1">
                          {currentSentence.blanks.map((blank, index) => (
                            <li key={index}>
                              Blank {index + 1}: <span className="font-arabic">{blank.word}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold mb-3">Word Bank</h3>
                      <div className="flex flex-wrap gap-2">
                        {availableWords.map((word, index) => (
                          <div
                            key={index}
                            draggable
                            onDragStart={() => handleDragStart(word)}
                            className="bg-white dark:bg-gray-700 px-3 py-2 rounded border border-gray-300 dark:border-gray-600 cursor-move font-arabic"
                          >
                            {word}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
