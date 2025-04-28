"use client"

import Link from "next/link"
import { BookOpen, BookText, Dices, Gamepad2, Grid3X3, PenTool, Puzzle, Search } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GamesPage() {
  const games = [
    {
      id: "flashcards",
      title: "Flashcards",
      description: "Test your memory with digital flashcards",
      icon: <BookText className="h-8 w-8 text-emerald-600" />,
      href: "/flashcards",
      new: false,
    },
    {
      id: "quiz",
      title: "Vocabulary Quiz",
      description: "Test your knowledge with multiple-choice questions",
      icon: <PenTool className="h-8 w-8 text-emerald-600" />,
      href: "/quizzes",
      new: false,
    },
    {
      id: "surah-quiz",
      title: "Surah Quizzes",
      description: "Test your knowledge of words from specific Surahs",
      icon: <BookOpen className="h-8 w-8 text-emerald-600" />,
      href: "/quizzes/surah",
      new: true,
    },
    {
      id: "matching",
      title: "Word Matching",
      description: "Match Arabic words with their meanings",
      icon: <Grid3X3 className="h-8 w-8 text-emerald-600" />,
      href: "/games/matching",
      new: false,
    },
    {
      id: "memory",
      title: "Memory Game",
      description: "Find matching pairs of words and meanings",
      icon: <Dices className="h-8 w-8 text-emerald-600" />,
      href: "/games/memory",
      new: false,
    },
    {
      id: "fill-blanks",
      title: "Fill in the Blanks",
      description: "Complete sentences with the correct words",
      icon: <Puzzle className="h-8 w-8 text-emerald-600" />,
      href: "/games/fill-blanks",
      new: false,
    },
    {
      id: "hangman",
      title: "Vocabulary Hangman",
      description: "Guess the word before the drawing is complete",
      icon: <Gamepad2 className="h-8 w-8 text-emerald-600" />,
      href: "/games/hangman",
      new: false,
    },
    {
      id: "word-search",
      title: "Word Search",
      description: "Find hidden words in a grid of letters",
      icon: <Search className="h-8 w-8 text-emerald-600" />,
      href: "/games/word-search",
      new: false,
    },
    {
      id: "crossword",
      title: "Crossword Puzzle",
      description: "Fill in words based on their meanings",
      icon: <Grid3X3 className="h-8 w-8 text-emerald-600" />,
      href: "/games/crossword",
      new: false,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Quranic Vocabulary Games</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {games.map((game) => (
          <Card key={game.id} className="overflow-hidden">
            <CardHeader className="pb-2 relative">
              {game.new && (
                <div className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-bl-md">
                  NEW
                </div>
              )}
              <CardTitle className="text-xl flex items-center gap-2">
                {game.icon}
                {game.title}
              </CardTitle>
              <CardDescription>{game.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">{/* Game preview image or icon could go here */}</CardContent>
            <CardFooter>
              <Link href={game.href} className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Play Now</Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
