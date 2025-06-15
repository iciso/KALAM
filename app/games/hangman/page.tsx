"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { RefreshCw, Home, ArrowLeft, HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { hangmanWords } from "@/data/game-data"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function HangmanGame() {
  const [currentWordData, setCurrentWordData] = useState<{ word: string; hint: string } | null>(null)
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])
  const [wrongGuesses, setWrongGuesses] = useState(0)
  const [gameStatus, setGameStatus] = useState<"playing" | "won" | "lost">("playing")
  const maxWrongGuesses = 6

  // Arabic keyboard layout
  const arabicKeyboard = [
    ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج"],
    ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط"],
    ["ئ", "أ", "ء", "ؤ", "ر", "لا", "ى", "ة", "و", "ز", "ظ", "د"],
  ]

  // Initialize game
  useEffect(() => {
    startNewGame()
  }, [])

  const startNewGame = () => {
    const randomIndex = Math.floor(Math.random() * hangmanWords.length)
    setCurrentWordData(hangmanWords[randomIndex])
    setGuessedLetters([])
    setWrongGuesses(0)
    setGameStatus("playing")
  }

  const handleGuess = (letter: string) => {
    if (gameStatus !== "playing" || guessedLetters.includes(letter)) return

    const newGuessedLetters = [...guessedLetters, letter]
    setGuessedLetters(newGuessedLetters)

    // Check if the letter is in the word
    if (!currentWordData?.word.includes(letter)) {
      const newWrongGuesses = wrongGuesses + 1
      setWrongGuesses(newWrongGuesses)

      // Check if player lost
      if (newWrongGuesses >= maxWrongGuesses) {
        setGameStatus("lost")
      }
    } else {
      // Check if player won
      const wordLetters = currentWordData.word.split("")
      const isWordGuessed = wordLetters.every(
        (letter) =>
          newGuessedLetters.includes(letter) ||
          letter === " " ||
          letter === "َ" ||
          letter === "ِ" ||
          letter === "ُ" ||
          letter === "ْ" ||
          letter === "ّ",
      )

      if (isWordGuessed) {
        setGameStatus("won")
      }
    }
  }

  // Display the word with guessed letters revealed
  const displayWord = () => {
    if (!currentWordData) return ""

    return currentWordData.word
      .split("")
      .map((letter) => {
        // Skip diacritics in the display
        if (letter === "َ" || letter === "ِ" || letter === "ُ" || letter === "ْ" || letter === "ّ") {
          return letter
        }
        return guessedLetters.includes(letter) || gameStatus === "lost" ? letter : "_"
      })
      .join("")
  }

  // Render hangman figure based on wrong guesses
  const renderHangman = () => {
    const hangmanParts = [
      // Head
      <div
        key="head"
        className="w-10 h-10 rounded-full border-4 border-gray-800 absolute top-10 left-1/2 transform -translate-x-1/2"
      ></div>,
      // Body
      <div key="body" className="w-1 h-20 bg-gray-800 absolute top-20 left-1/2 transform -translate-x-1/2"></div>,
      // Left Arm - Positioned to connect to the upper body
      <div
        key="leftArm"
        className="w-14 h-1 bg-gray-800 absolute top-24 left-[calc(50%-14px)] transform rotate-30 origin-right"
      ></div>,
      // Right Arm - Positioned to connect to the upper body
      <div
        key="rightArm"
        className="w-14 h-1 bg-gray-800 absolute top-24 left-[calc(50%)] transform -rotate-30 origin-left"
      ></div>,
      // Left Leg - Positioned to connect to the lower body
      <div
        key="leftLeg"
        className="w-14 h-1 bg-gray-800 absolute top-40 left-[calc(50%-7px)] transform rotate-30 origin-top-right"
      ></div>,
      // Right Leg - Positioned to connect to the lower body
      <div
        key="rightLeg"
        className="w-14 h-1 bg-gray-800 absolute top-40 left-[calc(50%-7px)] transform -rotate-30 origin-top-left"
      ></div>,
    ]

    return (
      <div className="relative w-40 h-60 mx-auto">
        {/* Gallows */}
        <div className="w-40 h-1 bg-gray-800 absolute bottom-0"></div>
        <div className="w-1 h-60 bg-gray-800 absolute bottom-0 left-10"></div>
        <div className="w-30 h-1 bg-gray-800 absolute top-0 left-10"></div>
        <div className="w-1 h-10 bg-gray-800 absolute top-0 left-[calc(50%)]"></div>

        {/* Hangman parts */}
        {hangmanParts.slice(0, wrongGuesses)}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/games">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to Games</span>
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Quranic Hangman</h1>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-lg mb-4">
            Test your Quranic vocabulary knowledge by guessing Arabic words letter by letter. Use the hint to help you
            figure out the word before the hangman is complete!
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/games">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Games
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  How to Play
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>How to Play Vocabulary Hangman</DialogTitle>
                  <DialogDescription>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                      <li>A random Quranic vocabulary word will be selected</li>
                      <li>Use the Arabic keyboard to guess letters in the word</li>
                      <li>Each incorrect guess adds a part to the hangman figure</li>
                      <li>You have 6 incorrect guesses before the game is over</li>
                      <li>Use the hint to help you figure out the word</li>
                      <li>Win by correctly guessing all letters in the word</li>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">Guess the Word</CardTitle>
              <Badge variant={wrongGuesses > 3 ? "destructive" : "secondary"}>
                {maxWrongGuesses - wrongGuesses} guesses left
              </Badge>
            </div>
            <CardDescription>Hint: {currentWordData?.hint}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mb-8">{renderHangman()}</div>

            <div className="text-center mb-8">
              <div className="text-4xl font-arabic tracking-wider mb-4 min-h-[60px]">{displayWord()}</div>

              {gameStatus === "won" && (
                <div className="text-emerald-600 font-bold text-xl mt-4">Congratulations! You guessed the word!</div>
              )}

              {gameStatus === "lost" && (
                <div className="text-red-600 font-bold text-xl mt-4">
                  Game Over! The word was: <span className="font-arabic">{currentWordData?.word}</span>
                </div>
              )}
            </div>

            {/* Arabic Keyboard */}
            <div className="max-w-md mx-auto">
              {arabicKeyboard.map((row, rowIndex) => (
                <div key={rowIndex} className="flex justify-center mb-2">
                  {row.map((letter) => (
                    <button
                      key={letter}
                      onClick={() => handleGuess(letter)}
                      disabled={guessedLetters.includes(letter) || gameStatus !== "playing"}
                      className={`w-9 h-9 m-1 rounded-md font-arabic text-lg flex items-center justify-center
                        ${
                          guessedLetters.includes(letter)
                            ? currentWordData?.word.includes(letter)
                              ? "bg-emerald-200 text-emerald-800 border-emerald-400"
                              : "bg-red-200 text-red-800 border-red-400"
                            : "bg-gray-100 hover:bg-gray-200 text-gray-800 border-gray-300"
                        }
                        ${gameStatus !== "playing" ? "opacity-70" : ""}
                        border-2 transition-colors`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={startNewGame}>
              <RefreshCw className="mr-2 h-4 w-4" />
              New Word
            </Button>
            <Link href="/games">
              <Button variant="secondary">Back to Games</Button>
            </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
