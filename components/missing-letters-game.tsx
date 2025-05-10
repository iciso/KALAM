"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { enhancedVocabularyService } from "@/services/enhanced-vocabulary-service"
import type { VocabularyWord, Difficulty } from "@/types/vocabulary"
import { Input } from "@/components/ui/input"
import { useFontSize } from "@/contexts/font-size-context"
import { IlmMeter } from "@/components/score"
import { VirtualArabicKeyboard } from "@/components/virtual-arabic-keyboard"

interface MissingLettersGameProps {
  difficulty?: "easy" | "medium" | "hard"
  wordCount?: number
  wordDifficulty?: Difficulty | "all"
}

export function MissingLettersGame({
  difficulty = "medium",
  wordCount = 10,
  wordDifficulty = "all",
}: MissingLettersGameProps) {
  const [words, setWords] = useState<VocabularyWord[]>([])
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null)
  const [currentWord, setCurrentWord] = useState<{
    original: string
    withMissingLetters: string
    missingIndices: number[]
  } | null>(null)
  const [attempts, setAttempts] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const { fontSizeMultiplier } = useFontSize()
  const inputRef = useRef<HTMLInputElement>(null)

  // Get words from the vocabulary service
  useEffect(() => {
    let allWords = enhancedVocabularyService.getAllWords()

    // Filter by word difficulty if specified
    if (wordDifficulty !== "all") {
      allWords = allWords.filter((word) => word.difficulty === wordDifficulty)
    }

    // Shuffle and take the requested number of words
    const shuffled = [...allWords].sort(() => 0.5 - Math.random())
    setWords(shuffled.slice(0, wordCount))
  }, [wordCount, wordDifficulty])

  // Create a word with missing letters
  const createWordWithMissingLetters = useCallback(
    (word: string) => {
      const letters = [...word]
      const indices: number[] = []

      // Determine how many letters to remove based on difficulty
      let percentToRemove = 0.3 // Default for medium
      if (difficulty === "easy") percentToRemove = 0.2
      if (difficulty === "hard") percentToRemove = 0.4

      const lettersToRemove = Math.max(1, Math.floor(letters.length * percentToRemove))

      // Create an array of indices and shuffle it
      const allIndices = Array.from({ length: letters.length }, (_, i) => i)
      const shuffledIndices = [...allIndices].sort(() => 0.5 - Math.random())

      // Take the first n indices
      const indicesToRemove = shuffledIndices.slice(0, lettersToRemove)

      // Replace letters at these indices with underscores
      for (const index of indicesToRemove) {
        letters[index] = "_"
        indices.push(index)
      }

      return {
        original: word,
        withMissingLetters: letters.join(""),
        missingIndices: indices.sort((a, b) => a - b),
      }
    },
    [difficulty],
  )

  // Start the game
  const startGame = () => {
    if (words.length > 0) {
      const firstWord = words[0]
      setCurrentWord(createWordWithMissingLetters(firstWord.arabic))
      setGameStarted(true)
      setGameCompleted(false)
      setCurrentWordIndex(0)
      setScore(0)
      setUserInput("")
      setFeedback(null)
      setAttempts(0)
      setShowAnswer(false)
    }
  }

  // Check the user's answer
  const checkAnswer = () => {
    if (!currentWord) return

    setAttempts(attempts + 1)

    // Get the current word
    const word = words[currentWordIndex]

    // Check if the user's input matches the original word
    if (userInput === word.arabic) {
      setFeedback("correct")
      setScore(score + 1)

      // Move to the next word after a delay
      setTimeout(() => {
        if (currentWordIndex < words.length - 1) {
          const nextIndex = currentWordIndex + 1
          setCurrentWordIndex(nextIndex)
          setCurrentWord(createWordWithMissingLetters(words[nextIndex].arabic))
          setUserInput("")
          setFeedback(null)
          setAttempts(0)
          setShowAnswer(false)
        } else {
          setGameCompleted(true)
        }
      }, 1500)
    } else {
      setFeedback("incorrect")

      // Show the answer after 3 attempts
      if (attempts >= 2) {
        setShowAnswer(true)
      }
    }
  }

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value)
  }

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      checkAnswer()
    }
  }

  // Handle virtual keyboard key press
  const handleVirtualKeyPress = (key: string) => {
    setUserInput(userInput + key)
    // Focus the input after pressing a key
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Handle virtual keyboard backspace
  const handleVirtualBackspace = () => {
    setUserInput(userInput.slice(0, -1))
    // Focus the input after pressing backspace
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Handle virtual keyboard clear
  const handleVirtualClear = () => {
    setUserInput("")
    // Focus the input after clearing
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  // Move to the next word
  const nextWord = () => {
    if (currentWordIndex < words.length - 1) {
      const nextIndex = currentWordIndex + 1
      setCurrentWordIndex(nextIndex)
      setCurrentWord(createWordWithMissingLetters(words[nextIndex].arabic))
      setUserInput("")
      setFeedback(null)
      setAttempts(0)
      setShowAnswer(false)
    } else {
      setGameCompleted(true)
    }
  }

  // Restart the game
  const restartGame = () => {
    startGame()
  }

  // Render the game
  return (
    <div className="container mx-auto py-6">
      {!gameStarted && !gameCompleted && (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Fill in the Missing Letters</CardTitle>
            <CardDescription>Fill in the missing letters in Arabic words from the Quran.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500">
                  This game will test your knowledge of Quranic vocabulary by asking you to fill in missing letters in
                  Arabic words.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  You will be presented with {wordCount} words with some letters replaced by underscores. Type the
                  complete word in the input field.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  A virtual Arabic keyboard is provided to help you type the words.
                </p>
              </div>
              <div>
                <p className="font-semibold">Difficulty: {difficulty}</p>
                <p className="text-sm text-gray-500">
                  {difficulty === "easy"
                    ? "20% of letters will be missing"
                    : difficulty === "medium"
                      ? "30% of letters will be missing"
                      : "40% of letters will be missing"}
                </p>
              </div>
              <div>
                <p className="font-semibold">Word Difficulty: {wordDifficulty}</p>
                <p className="text-sm text-gray-500">
                  {wordDifficulty === "all" ? "Words from all difficulty levels" : `Only ${wordDifficulty} level words`}
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={startGame} disabled={words.length === 0}>
              Start Game
            </Button>
          </CardFooter>
        </Card>
      )}

      {gameStarted && !gameCompleted && currentWord && (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Fill in the Missing Letters</CardTitle>
            <CardDescription>
              Word {currentWordIndex + 1} of {words.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-2">Fill in the missing letters:</p>
                <p className="dir-rtl font-arabic text-4xl mb-4" style={{ fontSize: `${fontSizeMultiplier}em` }}>
                  {currentWord.withMissingLetters}
                </p>

                {feedback && (
                  <div
                    className={`mt-4 p-2 rounded ${feedback === "correct" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                  >
                    {feedback === "correct" ? "Correct!" : "Incorrect, try again."}
                  </div>
                )}

                {showAnswer && (
                  <div className="mt-4 p-2 rounded bg-blue-100 text-blue-800">
                    <p>The correct answer is:</p>
                    <p
                      className="dir-rtl font-arabic text-2xl mt-2"
                      style={{ fontSize: `${fontSizeMultiplier * 0.8}em` }}
                    >
                      {words[currentWordIndex].arabic}
                    </p>
                    <p className="mt-2 text-sm">Meaning: {words[currentWordIndex].meanings.join(", ")}</p>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Answer:
                </label>
                <div className="flex space-x-2">
                  <Input
                    id="answer"
                    ref={inputRef}
                    value={userInput}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    className="dir-rtl font-arabic text-xl"
                    style={{ fontSize: `${fontSizeMultiplier * 0.7}em` }}
                    disabled={feedback === "correct" || showAnswer}
                  />
                  <Button onClick={checkAnswer} disabled={feedback === "correct" || showAnswer || !userInput}>
                    Check
                  </Button>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700 mb-2">Virtual Arabic Keyboard:</p>
                <VirtualArabicKeyboard
                  onKeyPress={handleVirtualKeyPress}
                  onBackspace={handleVirtualBackspace}
                  onClear={handleVirtualClear}
                  disabled={feedback === "correct" || showAnswer}
                />
              </div>

              {(feedback === "correct" || showAnswer) && (
                <div className="flex justify-center">
                  <Button onClick={nextWord}>
                    {currentWordIndex < words.length - 1 ? "Next Word" : "Finish Game"}
                  </Button>
                </div>
              )}

              <div className="text-center">
                <p className="text-sm text-gray-500">Hints:</p>
                <p className="text-sm">Transliteration: {words[currentWordIndex].transliteration}</p>
                <p className="text-sm">Part of Speech: {words[currentWordIndex].partOfSpeech}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div>
              <p className="text-sm text-gray-500">
                Score: {score}/{words.length}
              </p>
            </div>
            <Button variant="outline" onClick={restartGame}>
              Restart Game
            </Button>
          </CardFooter>
        </Card>
      )}

      {gameCompleted && (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Game Completed!</CardTitle>
            <CardDescription>
              You scored {score} out of {words.length}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <IlmMeter score={score} maxScore={words.length} />

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2">Word List:</h3>
              <ul className="space-y-2">
                {words.map((word, index) => (
                  <li key={index} className="p-2 rounded bg-gray-50">
                    <div className="flex justify-between items-center">
                      <div>
                        <p
                          className="dir-rtl font-arabic text-xl"
                          style={{ fontSize: `${fontSizeMultiplier * 0.7}em` }}
                        >
                          {word.arabic}
                        </p>
                        <p className="text-sm text-gray-600">
                          {word.transliteration} - {word.meanings.join(", ")}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={restartGame}>Play Again</Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}
