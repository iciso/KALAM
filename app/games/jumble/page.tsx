"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { VocabularyWord } from "@/types/vocabulary"
import { getAllVocabularyWords } from "@/services/vocabulary-service"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ImanOMeter } from "@/components/score"

export default function JumblePage() {
  const [words, setWords] = useState<VocabularyWord[]>([])
  const [currentWord, setCurrentWord] = useState<VocabularyWord | null>(null)
  const [jumbledLetters, setJumbledLetters] = useState<{ letter: string; id: string }[]>([])
  const [userArrangement, setUserArrangement] = useState<{ letter: string; id: string }[]>([])
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [showHint, setShowHint] = useState(false)
  const [difficulty, setDifficulty] = useState<"beginner" | "intermediate" | "advanced">("beginner")
  const [gameStarted, setGameStarted] = useState(false)
  const [usedWordIds, setUsedWordIds] = useState<Set<string>>(new Set())
  const [remainingHints, setRemainingHints] = useState(3)

  // Load vocabulary words
  useEffect(() => {
    const loadWords = async () => {
      const allWords = await getAllVocabularyWords()
      setWords(allWords)
    }
    loadWords()
  }, [])

  // Filter words by difficulty
  const getFilteredWords = () => {
    return words.filter((word) => {
      // Filter by difficulty
      if (difficulty === "beginner" && word.difficulty !== "beginner") return false
      if (difficulty === "intermediate" && word.difficulty === "advanced") return false

      // Only use words with 3-8 letters for better gameplay
      const arabicWithoutDiacritics = removeDiacritics(word.arabic)
      const letterCount = arabicWithoutDiacritics.length
      return letterCount >= 3 && letterCount <= 8
    })
  }

  // Remove diacritical marks for gameplay
  const removeDiacritics = (text: string) => {
    return text.replace(/[\u064B-\u0652\u0670]/g, "")
  }

  // Start a new game with a random word
  const startNewGame = () => {
    const filteredWords = getFilteredWords()

    // Filter out already used words if possible
    const unusedWords = filteredWords.filter((word) => !usedWordIds.has(word.id))

    // If we've used all words or have very few left, reset the used words
    const wordsToChooseFrom = unusedWords.length < 5 ? filteredWords : unusedWords

    if (wordsToChooseFrom.length === 0) {
      alert("No words available for the selected difficulty. Please try another difficulty level.")
      return
    }

    // Select a random word
    const randomIndex = Math.floor(Math.random() * wordsToChooseFrom.length)
    const selectedWord = wordsToChooseFrom[randomIndex]

    // Add to used words
    setUsedWordIds((prev) => new Set(prev).add(selectedWord.id))

    // Remove diacritics for gameplay
    const arabicWithoutDiacritics = removeDiacritics(selectedWord.arabic)

    // Create jumbled letters
    const letters = arabicWithoutDiacritics.split("")
    const jumbled = shuffleArray(
      [...letters].map((letter, index) => ({
        letter,
        id: `letter-${index}-${Math.random()}`,
      })),
    )

    setCurrentWord(selectedWord)
    setJumbledLetters(jumbled)
    setUserArrangement([])
    setIsCorrect(null)
    setShowHint(false)
    setGameStarted(true)
  }

  // Fisher-Yates shuffle algorithm
  const shuffleArray = <T,>(array: T[]): T[] => {
    const newArray = [...array]
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
    }
    return newArray
  }

  // Handle letter selection
  const selectLetter = (letter: { letter: string; id: string }) => {
    // Move letter from jumbled to user arrangement
    // Add to the beginning of the array for RTL display
    setJumbledLetters((prev) => prev.filter((l) => l.id !== letter.id))
    setUserArrangement((prev) => [letter, ...prev])
  }

  // Handle letter removal
  const removeLetter = (letter: { letter: string; id: string }) => {
    // Move letter from user arrangement back to jumbled
    setUserArrangement((prev) => prev.filter((l) => l.id !== letter.id))
    setJumbledLetters((prev) => [...prev, letter])
  }

  // Check if the user's arrangement is correct
  const checkAnswer = () => {
    if (!currentWord) return

    // We should NOT reverse the letters here - Arabic is read from right to left
    // but in our UI, that's the natural order of the letters as they appear
    const userWord = userArrangement.map((l) => l.letter).join("")
    const correctWord = removeDiacritics(currentWord.arabic)

    const correct = userWord === correctWord
    setIsCorrect(correct)

    if (correct) {
      // Update score and streak
      const newScore = score + 10 + (difficulty === "advanced" ? 10 : difficulty === "intermediate" ? 5 : 0)
      setScore(newScore)
      setStreak(streak + 1)

      // Auto-advance to next word after 1.5 seconds
      setTimeout(() => {
        startNewGame()
      }, 1500)
    } else {
      // Reset streak on wrong answer
      setStreak(0)
    }
  }

  // Use a hint (reveals one correct letter position)
  const useHint = () => {
    if (remainingHints <= 0) return

    setRemainingHints((prev) => prev - 1)
    setShowHint(true)

    // If no letters are placed yet, place the first letter
    if (userArrangement.length === 0 && jumbledLetters.length > 0) {
      const correctWord = removeDiacritics(currentWord?.arabic || "")
      const firstLetter = correctWord[0]

      // Find the first letter in jumbled letters
      const letterToMove = jumbledLetters.find((l) => l.letter === firstLetter)

      if (letterToMove) {
        // For RTL, the first letter should be at the rightmost position
        selectLetter(letterToMove)
      }
    }
  }

  // Reset the game
  const resetGame = () => {
    setScore(0)
    setStreak(0)
    setUsedWordIds(new Set())
    setRemainingHints(3)
    startNewGame()
  }

  // Get a hint message based on the current word
  const getHintMessage = () => {
    if (!currentWord) return ""

    // Use the first meaning as a hint
    return currentWord.meanings[0]
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Quranic Word Jumble</h1>

      {!gameStarted ? (
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Welcome to Word Jumble!</CardTitle>
            <CardDescription>Rearrange the jumbled Arabic letters to form Quranic words</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Test your knowledge of Quranic vocabulary by unscrambling the letters to form the correct word. You'll
              earn points for each correct answer, with bonus points for higher difficulties.
            </p>

            <div className="my-6">
              <h3 className="text-lg font-medium mb-2">Select Difficulty:</h3>
              <Tabs
                defaultValue="beginner"
                className="w-full"
                onValueChange={(value) => setDifficulty(value as "beginner" | "intermediate" | "advanced")}
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="beginner">Beginner</TabsTrigger>
                  <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
                  <TabsTrigger value="advanced">Advanced</TabsTrigger>
                </TabsList>
                <TabsContent value="beginner">
                  <p className="text-sm text-muted-foreground">Shorter and more common words from the Quran.</p>
                </TabsContent>
                <TabsContent value="intermediate">
                  <p className="text-sm text-muted-foreground">
                    Medium-length words with moderate frequency in the Quran.
                  </p>
                </TabsContent>
                <TabsContent value="advanced">
                  <p className="text-sm text-muted-foreground">
                    Longer and less common words for those seeking a challenge.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-md p-4 my-4">
              <h3 className="text-amber-800 font-medium mb-2">How to Play:</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-amber-700">
                <li>Click on the jumbled letters to place them in the answer area</li>
                <li>Click on placed letters to remove them</li>
                <li>Arrange the letters to form the correct Arabic word</li>
                <li>Use hints if you get stuck (limited to 3 per game)</li>
                <li>Earn more points for higher difficulties</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={startNewGame} className="w-full" disabled={words.length === 0}>
              {words.length === 0 ? "Loading Words..." : "Start Game"}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-4">
            <ImanOMeter score={score} maxScore={100} className="w-40" />
            <div className="flex gap-2">
              <Badge variant="outline">Difficulty: {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}</Badge>
              <Badge variant="outline">Hints: {remainingHints}</Badge>
            </div>
          </div>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle className="text-center">Unscramble the Word</CardTitle>
              {showHint && <CardDescription className="text-center">Hint: {getHintMessage()}</CardDescription>}
            </CardHeader>
            <CardContent>
              {/* User's arrangement area */}
              <div
                className="min-h-20 border-2 border-dashed border-gray-300 rounded-md p-4 mb-6 flex flex-wrap justify-center items-center gap-2 dir-rtl"
                aria-label="Your answer"
              >
                {userArrangement.length === 0 ? (
                  <p className="text-gray-400">Click the letters below to arrange them here</p>
                ) : (
                  userArrangement.map((letter) => (
                    <Button
                      key={letter.id}
                      variant="outline"
                      className="h-12 w-12 text-xl font-arabic"
                      onClick={() => removeLetter(letter)}
                    >
                      {letter.letter}
                    </Button>
                  ))
                )}
              </div>

              {/* Feedback message */}
              {isCorrect !== null && (
                <div
                  className={`text-center mb-4 p-2 rounded-md ${isCorrect ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                >
                  {isCorrect ? "Correct! Well done!" : "Not quite right. Try again!"}
                </div>
              )}

              {/* Jumbled letters */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {jumbledLetters.map((letter) => (
                  <Button
                    key={letter.id}
                    variant="secondary"
                    className="h-12 w-12 text-xl font-arabic"
                    onClick={() => selectLetter(letter)}
                  >
                    {letter.letter}
                  </Button>
                ))}
              </div>

              <div className="flex justify-center gap-4">
                <Button onClick={checkAnswer} disabled={userArrangement.length === 0 || jumbledLetters.length > 0}>
                  Check Answer
                </Button>
                <Button variant="outline" onClick={useHint} disabled={remainingHints <= 0}>
                  Use Hint
                </Button>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost" onClick={resetGame}>
                Reset Game
              </Button>
              <Button variant="ghost" onClick={startNewGame}>
                Skip Word
              </Button>
            </CardFooter>
          </Card>

          {currentWord && (
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Word difficulty: {currentWord.difficulty}</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
