"use client"

import { useState } from "react"
import { MissingLettersGame } from "@/components/missing-letters-game"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Difficulty } from "@/types/vocabulary"

export default function AdvancedMissingLettersPage() {
  const [gameSettings, setGameSettings] = useState<{
    difficulty: "easy" | "medium" | "hard"
    wordCount: number
    wordDifficulty: Difficulty | "all"
    gameStarted: boolean
  }>({
    difficulty: "medium",
    wordCount: 10,
    wordDifficulty: "all",
    gameStarted: false,
  })

  const startGame = () => {
    setGameSettings({
      ...gameSettings,
      gameStarted: true,
    })
  }

  if (gameSettings.gameStarted) {
    return (
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Advanced Missing Letters Game</h1>
        <MissingLettersGame
          difficulty={gameSettings.difficulty}
          wordCount={gameSettings.wordCount}
          wordDifficulty={gameSettings.wordDifficulty}
        />
        <div className="mt-8 text-center">
          <Button variant="outline" onClick={() => setGameSettings({ ...gameSettings, gameStarted: false })}>
            Change Settings
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Advanced Missing Letters</h1>

      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Game Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Game Difficulty</h3>
              <p className="text-sm text-gray-500 mb-2">
                This determines how many letters will be missing from each word.
              </p>
              <div className="flex space-x-2">
                <Button
                  variant={gameSettings.difficulty === "easy" ? "default" : "outline"}
                  onClick={() => setGameSettings({ ...gameSettings, difficulty: "easy" })}
                >
                  Easy (20%)
                </Button>
                <Button
                  variant={gameSettings.difficulty === "medium" ? "default" : "outline"}
                  onClick={() => setGameSettings({ ...gameSettings, difficulty: "medium" })}
                >
                  Medium (30%)
                </Button>
                <Button
                  variant={gameSettings.difficulty === "hard" ? "default" : "outline"}
                  onClick={() => setGameSettings({ ...gameSettings, difficulty: "hard" })}
                >
                  Hard (40%)
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Word Count</h3>
              <p className="text-sm text-gray-500 mb-2">How many words do you want to practice?</p>
              <div className="flex space-x-2">
                <Button
                  variant={gameSettings.wordCount === 5 ? "default" : "outline"}
                  onClick={() => setGameSettings({ ...gameSettings, wordCount: 5 })}
                >
                  5 Words
                </Button>
                <Button
                  variant={gameSettings.wordCount === 10 ? "default" : "outline"}
                  onClick={() => setGameSettings({ ...gameSettings, wordCount: 10 })}
                >
                  10 Words
                </Button>
                <Button
                  variant={gameSettings.wordCount === 20 ? "default" : "outline"}
                  onClick={() => setGameSettings({ ...gameSettings, wordCount: 20 })}
                >
                  20 Words
                </Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Word Difficulty</h3>
              <p className="text-sm text-gray-500 mb-2">Choose the difficulty level of words to include.</p>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant={gameSettings.wordDifficulty === "all" ? "default" : "outline"}
                  onClick={() => setGameSettings({ ...gameSettings, wordDifficulty: "all" })}
                >
                  All Levels
                </Button>
                <Button
                  variant={gameSettings.wordDifficulty === "beginner" ? "default" : "outline"}
                  onClick={() => setGameSettings({ ...gameSettings, wordDifficulty: "beginner" })}
                >
                  Beginner
                </Button>
                <Button
                  variant={gameSettings.wordDifficulty === "intermediate" ? "default" : "outline"}
                  onClick={() => setGameSettings({ ...gameSettings, wordDifficulty: "intermediate" })}
                >
                  Intermediate
                </Button>
                <Button
                  variant={gameSettings.wordDifficulty === "advanced" ? "default" : "outline"}
                  onClick={() => setGameSettings({ ...gameSettings, wordDifficulty: "advanced" })}
                >
                  Advanced
                </Button>
              </div>
            </div>

            <div className="pt-4">
              <Button onClick={startGame} className="w-full">
                Start Game
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
