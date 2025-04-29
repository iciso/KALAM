"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Bookmark, Home, RotateCcw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Sample vocabulary data
const vocabularyData = [
  {
    id: 1,
    arabic: "الله",
    transliteration: "Allah",
    meaning: "God",
    example: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
    exampleTranslation: "In the name of Allah, the Most Gracious, the Most Merciful",
  },
  {
    id: 2,
    arabic: "رَبّ",
    transliteration: "Rabb",
    meaning: "Lord",
    example: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
    exampleTranslation: "Praise be to Allah, Lord of the Worlds",
  },
  {
    id: 3,
    arabic: "رَحْمَن",
    transliteration: "Rahman",
    meaning: "The Most Gracious",
    example: "الرَّحْمَٰنِ الرَّحِيمِ",
    exampleTranslation: "The Most Gracious, the Most Merciful",
  },
  {
    id: 4,
    arabic: "رَحِيم",
    transliteration: "Raheem",
    meaning: "The Most Merciful",
    example: "الرَّحْمَٰنِ الرَّحِيمِ",
    exampleTranslation: "The Most Gracious, the Most Merciful",
  },
  {
    id: 5,
    arabic: "يَوْم",
    transliteration: "Yawm",
    meaning: "Day",
    example: "مَالِكِ يَوْمِ الدِّينِ",
    exampleTranslation: "Master of the Day of Judgment",
  },
  {
    id: 6,
    arabic: "دِين",
    transliteration: "Deen",
    meaning: "Judgment/Religion",
    example: "مَالِكِ يَوْمِ الدِّينِ",
    exampleTranslation: "Master of the Day of Judgment",
  },
  {
    id: 7,
    arabic: "عِبَادَة",
    transliteration: "Ibadah",
    meaning: "Worship",
    example: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
    exampleTranslation: "You alone we worship, and You alone we ask for help",
  },
  {
    id: 8,
    arabic: "صِرَاط",
    transliteration: "Sirat",
    meaning: "Path",
    example: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
    exampleTranslation: "Guide us to the straight path",
  },
]

export default function FlashcardsPage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [savedCards, setSavedCards] = useState<number[]>([])
  const [isComplete, setIsComplete] = useState(false)

  const currentCard = vocabularyData[currentCardIndex]
  const progress = ((currentCardIndex + 1) / vocabularyData.length) * 100

  const handleNext = () => {
    if (currentCardIndex < vocabularyData.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
    } else {
      setIsComplete(true)
    }
  }

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setIsFlipped(false)
    }
  }

  const toggleSaveCard = () => {
    if (savedCards.includes(currentCard.id)) {
      setSavedCards(savedCards.filter((id) => id !== currentCard.id))
    } else {
      setSavedCards([...savedCards, currentCard.id])
    }
  }

  const resetCards = () => {
    setCurrentCardIndex(0)
    setIsFlipped(false)
    setIsComplete(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Flashcards</h1>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span>
              Card {currentCardIndex + 1} of {vocabularyData.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>

        <div className="flex justify-center mb-8">
          <Card
            className={`w-full max-w-md h-80 cursor-pointer transition-all duration-500 ${
              isFlipped ? "bg-emerald-50 dark:bg-emerald-900/20" : "bg-white dark:bg-gray-800"
            }`}
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <CardContent className="flex flex-col items-center justify-center h-full p-6">
              {!isFlipped ? (
                <div className="text-center">
                  <h2 className="mb-4 font-arabic-flashcard">{currentCard.arabic}</h2>
                  <p className="text-xl text-gray-600 dark:text-gray-300">{currentCard.transliteration}</p>
                </div>
              ) : (
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">{currentCard.meaning}</h3>
                  <p className="mb-4 font-arabic">{currentCard.example}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{currentCard.exampleTranslation}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <Button variant="outline" onClick={handlePrevious} disabled={currentCardIndex === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          <Button variant="outline" onClick={toggleSaveCard}>
            <Bookmark className={`mr-2 h-4 w-4 ${savedCards.includes(currentCard.id) ? "fill-emerald-600" : ""}`} />
            {savedCards.includes(currentCard.id) ? "Saved" : "Save"}
          </Button>

          <Button variant="outline" onClick={resetCards}>
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>

          <Button
            onClick={handleNext}
            disabled={currentCardIndex === vocabularyData.length - 1}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Tip: Click on the card to flip it and see the meaning and example.
          </p>
          <Link href="/quizzes">
            <Button variant="outline">Ready for a quiz? Test your knowledge</Button>
          </Link>
        </div>
        {isComplete && (
          <div className="mt-8 text-center bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-2">Session Complete! 🎉</h3>
            <p className="mb-4">You've reviewed all {vocabularyData.length} flashcards in this set.</p>
            <div className="flex justify-center space-x-4">
              <Button onClick={resetCards} variant="outline">
                <RotateCcw className="mr-2 h-4 w-4" />
                Start Over
              </Button>
              <Link href="/quizzes">
                <Button className="bg-emerald-600 hover:bg-emerald-700">Test Your Knowledge</Button>
              </Link>
              <Link href="/">
                <Button variant="outline">
                  <Home className="mr-2 h-4 w-4" />
                  Return Home
                </Button>
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
