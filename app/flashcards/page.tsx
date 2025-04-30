"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { getAllVocabulary } from "@/services/vocabulary-service"
import type { VocabularyWord } from "@/types/vocabulary"
import { Loader2, ArrowLeft, ArrowRight, RotateCw, Home, School } from "lucide-react"
import Link from "next/link"
import { useFontSize } from "@/contexts/font-size-context"
import { AudioPlayer } from "@/components/audio-player"

export default function FlashcardsPage() {
  const [words, setWords] = useState<VocabularyWord[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const [loading, setLoading] = useState(true)
  const [completed, setCompleted] = useState(false)
  const { fontSize } = useFontSize()

  useEffect(() => {
    const loadWords = async () => {
      try {
        const allWords = await getAllVocabulary()
        // Get 8 random words for the flashcard session
        const randomWords = getRandomWords(allWords, 8)
        setWords(randomWords)
        setLoading(false)
      } catch (error) {
        console.error("Failed to load vocabulary:", error)
        setLoading(false)
      }
    }

    loadWords()
  }, [])

  const getRandomWords = (allWords: VocabularyWord[], count: number) => {
    const shuffled = [...allWords].sort(() => 0.5 - Math.random())
    return shuffled.slice(0, count)
  }

  const handleFlip = () => {
    setFlipped(!flipped)
  }

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setFlipped(false)
    } else {
      // Show completion state when we've gone through all cards
      setCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setFlipped(false)
    }
  }

  const handleRestart = () => {
    setCurrentIndex(0)
    setFlipped(false)
    setCompleted(false)
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <Loader2 className="h-8 w-8 animate-spin text-emerald-600 mb-4" />
        <p>Loading flashcards...</p>
      </div>
    )
  }

  if (completed) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <Card className="bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800">
          <CardContent className="p-8 text-center">
            <h1 className="text-2xl font-bold mb-4">Flashcard Session Complete! 🎉</h1>
            <p className="mb-6">Congratulations! You've reviewed all the flashcards in this set.</p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
              <Button onClick={handleRestart} className="flex items-center gap-2">
                <RotateCw className="h-4 w-4" />
                Start Over
              </Button>
              <Link href="/quizzes">
                <Button variant="outline" className="flex items-center gap-2">
                  <School className="h-4 w-4" />
                  Test Your Knowledge
                </Button>
              </Link>
              <Link href="/">
                <Button variant="secondary" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  Return Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  const currentWord = words[currentIndex]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6 text-center">Quranic Vocabulary Flashcards</h1>
      <p className="text-center mb-8 text-gray-600 dark:text-gray-300">
        Click on the card to reveal the meaning. Use the arrows to navigate between cards.
      </p>

      <div className="mb-4 flex justify-between items-center">
        <div>
          Card {currentIndex + 1} of {words.length}
        </div>
        <Button variant="outline" size="sm" onClick={handleRestart} className="flex items-center gap-1">
          <RotateCw className="h-4 w-4" /> Restart
        </Button>
      </div>

      <div className="relative perspective-1000 w-full h-80 md:h-96 cursor-pointer mb-8" onClick={handleFlip}>
        <div
          className={`absolute w-full h-full transition-transform duration-500 transform-style-3d ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front of card (Arabic) */}
          <div
            className={`absolute w-full h-full backface-hidden bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col items-center justify-center p-6 border-2 border-emerald-200 dark:border-emerald-700`}
          >
            <div className="text-center">
              <p className="font-arabic mb-4" style={{ fontSize: `${fontSize + 1.5}rem` }}>
                {currentWord.arabic}
              </p>
              <div className="mt-4">
                <AudioPlayer word={currentWord.id} />
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">Click to reveal meaning</p>
            </div>
          </div>

          {/* Back of card (English) */}
          <div
            className={`absolute w-full h-full backface-hidden bg-emerald-50 dark:bg-emerald-900/30 rounded-xl shadow-lg flex flex-col items-center justify-center p-6 border-2 border-emerald-300 dark:border-emerald-700 rotate-y-180`}
          >
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">{currentWord.english}</h3>
              <p className="mb-4 text-gray-600 dark:text-gray-300">{currentWord.transliteration}</p>
              <div className="mb-4">
                <span className="inline-block bg-emerald-100 dark:bg-emerald-800 text-emerald-800 dark:text-emerald-100 text-sm px-2 py-1 rounded">
                  {currentWord.partOfSpeech}
                </span>
              </div>
              {currentWord.example && (
                <div className="mt-4 text-sm">
                  <p className="italic">"{currentWord.example}"</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <Button onClick={handlePrevious} disabled={currentIndex === 0} className="flex items-center">
          <ArrowLeft className="mr-2 h-4 w-4" /> Previous
        </Button>
        <Button onClick={handleNext} disabled={currentIndex === words.length - 1} className="flex items-center">
          Next <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
