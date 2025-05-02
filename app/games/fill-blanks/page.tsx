"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Timer, RefreshCw, HelpCircle, ArrowRight, CheckCircle, BookOpen, XCircle, Bug } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { fillBlanksService, type FillBlankSentence } from "@/services/fill-blanks-service"

export default function FillBlanksGamePage() {
  const [sentences, setSentences] = useState<FillBlankSentence[]>([])
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0)
  const [availableWords, setAvailableWords] = useState<string[]>([])
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [timer, setTimer] = useState(0)
  const [score, setScore] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [draggedWord, setDraggedWord] = useState<string | null>(null)
  const [sentenceCompleted, setSentenceCompleted] = useState(false)
  const [showTranslation, setShowTranslation] = useState(false)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [hasCheckedAnswer, setHasCheckedAnswer] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showDebug, setShowDebug] = useState(false)
  const [debugInfo, setDebugInfo] = useState<any>(null)

  useEffect(() => {
    if (gameStarted && !gameCompleted) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [gameStarted, gameCompleted])

  // Reset validation state when moving to a new sentence
  useEffect(() => {
    setIsCorrect(null)
    setHasCheckedAnswer(false)
  }, [currentSentenceIndex])

  useEffect(() => {
    console.log("Fill in the Blanks game loaded")

    // Check if the page is available
    try {
      console.log("Current path:", window.location.pathname)
    } catch (e) {
      console.error("Error getting location:", e)
    }
  }, [])

  const initializeGame = () => {
    try {
      // Generate new sentences from our vocabulary database
      const generatedSentences = fillBlanksService.generateSentences(5)
      console.log("Generated sentences:", generatedSentences)

      if (generatedSentences.length === 0) {
        setError("Could not generate sentences. Please try again.")
        return
      }

      // Validate that each sentence has blanks
      const validSentences = generatedSentences.filter((sentence) => sentence.blanks && sentence.blanks.length > 0)

      if (validSentences.length === 0) {
        setError("Generated sentences are invalid. Please try again.")
        return
      }

      // Set up the first sentence
      setupSentence(validSentences, 0)
      setError(null) // Clear any previous errors
    } catch (err) {
      console.error("Error initializing game:", err)
      setError("An error occurred while setting up the game. Please try again.")
    }
  }

  // Utility function to shuffle an array
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Function to set up a sentence with its word bank
  const setupSentence = (allSentences: FillBlankSentence[], index: number) => {
    // Get all words for the current sentence
    const currentSentenceWords = allSentences[index].blanks.map((blank) => blank.word)

    // Log the correct words for debugging
    console.log("Correct words for this sentence:", currentSentenceWords)

    // Add additional distractor words (6-8 extra words)
    const distractorWords = fillBlanksService.generateDistractorWords([allSentences[index]], 8)
    console.log("Distractor words:", distractorWords)

    // Create a word bank with the correct words FIRST to ensure they're included
    let wordBank = [...currentSentenceWords]

    // Then add distractors, avoiding duplicates
    distractorWords.forEach((word) => {
      if (!wordBank.includes(word)) {
        wordBank.push(word)
      }
    })

    // Shuffle the word bank
    wordBank = shuffleArray(wordBank)

    // Limit to a reasonable number of words (12-15)
    wordBank = wordBank.slice(0, Math.min(15, wordBank.length))

    // CRITICAL: Final verification - make sure all correct words are included
    let allIncluded = true
    const missingWords = []

    for (const correctWord of currentSentenceWords) {
      if (!wordBank.includes(correctWord)) {
        allIncluded = false
        missingWords.push(correctWord)

        // Add the missing word by replacing a distractor
        const distractorsInBank = wordBank.filter((word) => !currentSentenceWords.includes(word))
        if (distractorsInBank.length > 0) {
          // Replace a random distractor
          const randomDistractorIndex = wordBank.findIndex((word) => word === distractorsInBank[0])
          if (randomDistractorIndex !== -1) {
            wordBank[randomDistractorIndex] = correctWord
          } else {
            // If we couldn't find a distractor to replace, just add it
            wordBank.push(correctWord)
          }
        } else {
          // If no distractors to replace, just add it
          wordBank.push(correctWord)
        }
      }
    }

    // Final shuffle after ensuring all words are included
    wordBank = shuffleArray(wordBank)

    // Log the final word bank for debugging
    console.log("Final word bank:", wordBank)
    console.log(
      "Correct words included?",
      currentSentenceWords.every((word) => wordBank.includes(word)),
    )

    // Store debug info
    setDebugInfo({
      correctWords: currentSentenceWords,
      wordBank: wordBank,
      allIncluded: allIncluded,
      missingWords: missingWords,
      wordBankContainsAll: currentSentenceWords.every((word) => wordBank.includes(word)),
    })

    setSentences(allSentences)
    setCurrentSentenceIndex(index)
    setAvailableWords(wordBank)
    setTimer(index === 0 ? 0 : timer)
    setScore(index === 0 ? 0 : score)
    setShowHint(false)
    setShowTranslation(false)
    setGameStarted(true)
    setGameCompleted(false)
    setSentenceCompleted(false)
    setIsCorrect(null)
    setHasCheckedAnswer(false)
  }

  const handleDragStart = (word: string) => {
    setDraggedWord(word)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, blankId: string) => {
    e.preventDefault()

    if (!draggedWord || sentenceCompleted) return

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

      // Reset validation state when changing answers
      if (hasCheckedAnswer) {
        setIsCorrect(null)
        setHasCheckedAnswer(false)
        setSentenceCompleted(false)
      }
    }

    setDraggedWord(null)
  }

  const checkAnswer = () => {
    const currentSentence = sentences[currentSentenceIndex]

    // Check if all blanks are filled
    const allFilled = currentSentence.blanks.every((blank) => blank.filled !== null)

    if (!allFilled) {
      // Can't check if not all blanks are filled
      return
    }

    // Check if all blanks are filled correctly
    const allCorrect = currentSentence.blanks.every((blank) => blank.filled === blank.word)

    setIsCorrect(allCorrect)
    setHasCheckedAnswer(true)

    if (allCorrect) {
      setSentenceCompleted(true)
      setScore((prev) => prev + 10)
    }
  }

  const handleNextSentence = () => {
    if (currentSentenceIndex < sentences.length - 1) {
      const nextIndex = currentSentenceIndex + 1
      setupSentence(sentences, nextIndex)
      console.log("Moving to sentence:", nextIndex + 1)
    } else {
      // This is the last sentence, mark the game as completed
      setGameCompleted(true)
      console.log("Game completed!")
    }
  }

  const startNewGame = () => {
    // Generate completely new sentences
    const generatedSentences = fillBlanksService.generateSentences(5)
    setupSentence(generatedSentences, 0)
  }

  const handleRemoveWord = (blankId: string) => {
    if (sentenceCompleted) return

    const updatedSentences = [...sentences]
    const currentSentence = updatedSentences[currentSentenceIndex]

    const blankIndex = currentSentence.blanks.findIndex((blank) => blank.id === blankId)

    if (blankIndex !== -1 && currentSentence.blanks[blankIndex].filled) {
      // Put the word back in available words
      setAvailableWords((prev) => [...prev, currentSentence.blanks[blankIndex].filled!])

      // Clear the blank
      currentSentence.blanks[blankIndex].filled = null

      setSentences(updatedSentences)

      // Reset validation state
      setIsCorrect(null)
      setHasCheckedAnswer(false)
      setSentenceCompleted(false)
    }
  }

  const showHintHandler = () => {
    setShowHint(true)
    setScore((prev) => Math.max(0, prev - 2)) // Penalty for using hint
  }

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation)
  }

  const toggleDebug = () => {
    setShowDebug(!showDebug)
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const currentSentence = sentences[currentSentenceIndex]

  // Function to render a sentence with blanks in the correct RTL order
  const renderSentenceWithBlanks = (sentence: FillBlankSentence) => {
    if (!sentence) return null

    // For RTL text, we need to handle the rendering differently
    // We'll create an array of elements (text parts and blanks) and then render them
    const elements: React.ReactNode[] = []

    // Split the text by the blank placeholder
    const textParts = sentence.text.split("___")

    // Create elements for each part and blank
    textParts.forEach((part, index) => {
      // Add the text part
      elements.push(<span key={`text-${index}`}>{part}</span>)

      // Add a blank if this isn't the last part AND we have a corresponding blank in the array
      if (index < textParts.length - 1 && index < sentence.blanks.length) {
        const blank = sentence.blanks[index]
        if (blank) {
          // Make sure blank exists
          elements.push(
            <TooltipProvider key={`blank-${index}`}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span
                    className={`inline-block min-w-[100px] min-h-[40px] mx-1 p-2 border-2 border-dashed rounded ${
                      blank.filled
                        ? isCorrect === false
                          ? "border-red-500 bg-red-50 dark:bg-red-900/20"
                          : isCorrect === true
                            ? "border-green-500 bg-green-50 dark:bg-green-900/20"
                            : "border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-800/50"
                        : "border-gray-300 dark:border-gray-600 bg-gray-50/50 dark:bg-gray-800/50"
                    }`}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, blank.id)}
                  >
                    {blank.filled ? (
                      <div className="flex justify-between items-center">
                        <span className="font-arabic">{blank.filled}</span>
                        {!sentenceCompleted && (
                          <button
                            onClick={() => handleRemoveWord(blank.id)}
                            className="text-red-500 mr-2"
                            aria-label="Remove word"
                          >
                            ×
                          </button>
                        )}
                      </div>
                    ) : (
                      <span className="sr-only">Drop word here</span>
                    )}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Drop a word here</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>,
          )
        }
      }
    })

    // Return the elements wrapped in a container with RTL direction
    return (
      <div className="text-lg mb-6 text-right font-arabic" dir="rtl">
        {elements}
      </div>
    )
  }

  // Check if all blanks are filled
  const areAllBlanksFilled = () => {
    if (!currentSentence) return false
    return currentSentence.blanks.every((blank) => blank.filled !== null)
  }

  // Debug function to show the correct answer
  const debugCorrectAnswer = () => {
    if (!currentSentence) return null

    return (
      <div className="mt-4 p-2 bg-gray-100 dark:bg-gray-800 rounded text-xs text-gray-500">
        <p>Debug - Correct answer: {currentSentence.blanks.map((blank) => blank.word).join(", ")}</p>
        {showDebug && (
          <>
            {currentSentence.originalText && (
              <>
                <p className="mt-2">Original text:</p>
                <p className="font-arabic text-right" dir="rtl">
                  {currentSentence.originalText}
                </p>
                <p className="mt-2">Modified text:</p>
                <p className="font-arabic text-right" dir="rtl">
                  {currentSentence.text}
                </p>
              </>
            )}
            {debugInfo && (
              <>
                <p className="mt-2 font-bold">Word Bank Debug:</p>
                <p>All correct words included: {debugInfo.wordBankContainsAll ? "Yes" : "No"}</p>
                {debugInfo.missingWords && debugInfo.missingWords.length > 0 && (
                  <p>Missing words: {debugInfo.missingWords.join(", ")}</p>
                )}
                <p className="mt-2">Correct words:</p>
                <ul className="list-disc pl-5">
                  {debugInfo.correctWords &&
                    debugInfo.correctWords.map((word: string, i: number) => (
                      <li key={i} className="font-arabic">
                        {word} - {debugInfo.wordBank.includes(word) ? "✓" : "✗"}
                      </li>
                    ))}
                </ul>
              </>
            )}
          </>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Fill in the Blanks</h1>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={toggleDebug} className="text-white">
              <Bug className="h-4 w-4 mr-1" />
              {showDebug ? "Hide" : "Show"} Debug
            </Button>
            <Link href="/games">
              <Button variant="ghost" size="sm">
                Back to Games
              </Button>
            </Link>
          </div>
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
              <p className="text-sm text-gray-500 mb-4">
                Each game features different sentences from the Quran, helping you learn vocabulary in context.
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
            {error && (
              <Card className="max-w-md mx-auto mb-4 border-red-300 dark:border-red-700">
                <CardContent className="p-4">
                  <div className="flex items-center text-red-600 dark:text-red-400">
                    <XCircle className="h-5 w-5 mr-2" />
                    <p>{error}</p>
                  </div>
                  <Button onClick={() => window.location.reload()} className="mt-4 w-full">
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Reload Game
                  </Button>
                </CardContent>
              </Card>
            )}
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
                  <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={startNewGame}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    New Game
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="max-w-3xl mx-auto">
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex justify-between items-center">
                      <span>
                        Sentence {currentSentenceIndex + 1}
                        {currentSentence?.surahName && (
                          <span className="text-sm font-normal ml-2 text-gray-500">
                            (Surah {currentSentence.surahName}, {currentSentence.ayahNumber})
                          </span>
                        )}
                      </span>
                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" onClick={toggleTranslation} className="text-gray-500">
                          <BookOpen className="h-4 w-4 mr-1" />
                          {showTranslation ? "Hide" : "Show"} Translation
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={showHintHandler}
                          disabled={showHint || sentenceCompleted}
                          className="text-gray-500"
                        >
                          <HelpCircle className="h-4 w-4 mr-1" />
                          Hint
                        </Button>
                      </div>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {/* Display the full sentence with blanks */}
                    {currentSentence && <div className="mb-6">{renderSentenceWithBlanks(currentSentence)}</div>}

                    {showTranslation && currentSentence?.translation && (
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg mb-6 border border-blue-200 dark:border-blue-800">
                        <h3 className="font-bold mb-2 flex items-center">
                          <BookOpen className="h-4 w-4 mr-1 text-blue-600 dark:text-blue-400" />
                          Translation
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">{currentSentence.translation}</p>
                      </div>
                    )}

                    {showHint && !sentenceCompleted && (
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

                    {/* Check Answer Button */}
                    {!hasCheckedAnswer && areAllBlanksFilled() && (
                      <div className="flex justify-center mb-6">
                        <Button onClick={checkAnswer} className="bg-blue-600 hover:bg-blue-700">
                          Check Answer
                        </Button>
                      </div>
                    )}

                    {/* Feedback after checking answer */}
                    {hasCheckedAnswer && (
                      <div
                        className={`p-4 rounded-lg mb-6 border ${
                          isCorrect
                            ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
                            : "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800"
                        }`}
                      >
                        <h3
                          className={`font-bold mb-2 flex items-center ${
                            isCorrect ? "text-green-700 dark:text-green-400" : "text-red-700 dark:text-red-400"
                          }`}
                        >
                          {isCorrect ? (
                            <>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Correct! Well done!
                            </>
                          ) : (
                            <>
                              <XCircle className="h-4 w-4 mr-2" />
                              Not quite right. Try again!
                            </>
                          )}
                        </h3>

                        {isCorrect && (
                          <div className="flex justify-end">
                            <Button
                              onClick={handleNextSentence}
                              className="bg-emerald-600 hover:bg-emerald-700 flex items-center"
                            >
                              {currentSentenceIndex < sentences.length - 1 ? (
                                <>
                                  Next Sentence <ArrowRight className="ml-2 h-4 w-4" />
                                </>
                              ) : (
                                "Complete Game"
                              )}
                            </Button>
                          </div>
                        )}
                      </div>
                    )}

                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <h3 className="font-bold mb-3">Word Bank</h3>
                      <div className="flex flex-wrap gap-2">
                        {availableWords.map((word, index) => (
                          <div
                            key={index}
                            draggable={!sentenceCompleted}
                            onDragStart={() => !sentenceCompleted && handleDragStart(word)}
                            className={`bg-white dark:bg-gray-700 px-3 py-2 rounded border border-gray-300 dark:border-gray-600 ${
                              sentenceCompleted ? "opacity-50" : "cursor-move"
                            } font-arabic`}
                          >
                            {word}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Debug information */}
                    {debugCorrectAnswer()}
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
