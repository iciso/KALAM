"use client"

import Link from "next/link"
import {
  Gamepad2,
  BookOpen,
  PuzzleIcon as PuzzlePiece,
  ArrowRightLeft,
  FileText,
  Search,
  Grid3X3,
  Skull,
} from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function GamesPage() {
  const games = [
    {
      id: "memory",
      title: "Memory Match",
      description: "Flip cards to match Arabic words with their meanings",
      icon: <PuzzlePiece className="h-8 w-8 mb-2 text-emerald-600" />,
      difficulty: "Easy",
      path: "/games/memory",
    },
    {
      id: "matching",
      title: "Match the Following",
      description: "Draw lines to connect Arabic words with their correct meanings",
      icon: <ArrowRightLeft className="h-8 w-8 mb-2 text-emerald-600" />,
      difficulty: "Medium",
      path: "/games/matching",
    },
    {
      id: "fill-blanks",
      title: "Fill in the Blanks",
      description: "Drag and drop words to complete Quranic sentences",
      icon: <FileText className="h-8 w-8 mb-2 text-emerald-600" />,
      difficulty: "Hard",
      path: "/games/fill-blanks",
    },
    {
      id: "hangman",
      title: "Vocabulary Hangman",
      description: "Guess the hidden Arabic word letter by letter",
      icon: <Skull className="h-8 w-8 mb-2 text-emerald-600" />,
      difficulty: "Medium",
      path: "/games/hangman",
    },
    {
      id: "word-search",
      title: "Word Search",
      description: "Find hidden Arabic words in a grid of letters",
      icon: <Search className="h-8 w-8 mb-2 text-emerald-600" />,
      difficulty: "Medium",
      path: "/games/word-search",
    },
    {
      id: "crossword",
      title: "Crossword",
      description: "Solve a crossword puzzle with Quranic vocabulary clues",
      icon: <Grid3X3 className="h-8 w-8 mb-2 text-emerald-600" />,
      difficulty: "Hard",
      path: "/games/crossword",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
      <header className="bg-emerald-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-4">
            <Gamepad2 className="h-10 w-10 mr-3" />
            <h1 className="text-3xl font-bold text-center">Quranic Vocabulary Games</h1>
          </div>
          <p className="text-center max-w-2xl mx-auto">
            Reinforce your Quranic vocabulary knowledge with these interactive games. Choose a game to start playing!
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Six Ways to Practice Your Vocabulary</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We've created six different games to help you learn and remember Quranic vocabulary through fun, interactive
            challenges. Each game exercises different learning skills!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {games.map((game) => (
            <Card key={game.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{game.title}</CardTitle>
                  <Badge
                    variant={
                      game.difficulty === "Easy"
                        ? "default"
                        : game.difficulty === "Medium"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {game.difficulty}
                  </Badge>
                </div>
                <CardDescription>{game.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center justify-center pt-4 pb-6">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-6 mb-4">{game.icon}</div>
              </CardContent>
              <CardFooter className="bg-gray-50 dark:bg-gray-800 pt-2">
                <Link href={game.path} className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Play Game</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/">
            <Button variant="outline" className="mx-auto">
              <BookOpen className="mr-2 h-4 w-4" />
              Return to Learning
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
