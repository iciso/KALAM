"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, Volume2, ArrowLeft, ArrowRight, Repeat } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { vocabularyService } from "../../services/vocabulary-service"
import { AudioPlayer } from "../../components/audio-player"
import type { VocabularyWord } from "../../types/vocabulary"

export default function PronunciationPage() {
  const [words, setWords] = useState<VocabularyWord[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [repeatMode, setRepeatMode] = useState(false)
  const [showMeaning, setShowMeaning] = useState(false)

  useEffect(() => {
    // Get all words with audio
    const allWords = vocabularyService.getAllWords().filter((word) => word.hasAudio)
    setWords(allWords)
  }, [])

  const currentWord = words[currentIndex]
  const progress = words.length ? ((currentIndex + 1) / words.length) * 100 : 0

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setShowMeaning(false)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setShowMeaning(false)
    }
  }

  const handleAudioEnded = () => {
    setIsPlaying(false)
    if (repeatMode) {
      // Small delay before replaying
      setTimeout(() => {
        setIsPlaying(true)
      }, 1000)
    }
  }

  if (!words.length) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="bg-emerald-800 text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Pronunciation Practice</h1>
            <Link href="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Button>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8 max-w-2xl">
          <Card className="mb-8 border-dashed border-gray-300 dark:border-gray-600">
            <CardHeader className="text-center">
              <Volume2 className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <CardTitle className="text-2xl">Pronunciation Practice Coming Soon</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We're currently working on adding audio pronunciations for all vocabulary words. This feature will be
                available soon!
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                In the meantime, you can explore our other learning tools like flashcards, quizzes, and word lists.
              </p>
              <Link href="/">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </CardContent>
          </Card>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Pronunciation Practice</h1>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="mb-6">
          <Progress value={progress} className="h-2" />
          <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
            <span>
              Word {currentIndex + 1} of {words.length}
            </span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-center text-xl">Listen and Practice</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-arabic mb-4">{currentWord.arabic}</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300">{currentWord.transliteration}</p>

              {showMeaning ? (
                <div className="mt-4 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                  <p className="text-lg">{currentWord.meanings.join(", ")}</p>
                </div>
              ) : (
                <Button variant="outline" className="mt-4" onClick={() => setShowMeaning(true)}>
                  Show Meaning
                </Button>
              )}
            </div>

            {currentWord.audioUrl && (
              <div className="w-full max-w-md">
                <AudioPlayer
                  audioUrl={currentWord.audioUrl}
                  label="Pronunciation"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={handleAudioEnded}
                />
              </div>
            )}

            <div className="flex items-center mt-6">
              <Button
                variant="outline"
                size="icon"
                className={repeatMode ? "bg-emerald-100 dark:bg-emerald-900/30" : ""}
                onClick={() => setRepeatMode(!repeatMode)}
                aria-pressed={repeatMode}
              >
                <Repeat className={`h-4 w-4 ${repeatMode ? "text-emerald-600" : ""}`} />
                <span className="sr-only">Toggle Repeat</span>
              </Button>
              <span className="text-sm text-gray-500 ml-2">{repeatMode ? "Repeat mode on" : "Repeat mode off"}</span>
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-between">
          <Button variant="outline" onClick={handlePrevious} disabled={currentIndex === 0}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Previous
          </Button>

          <Link href="/vocabulary">
            <Button variant="ghost">Browse All Vocabulary</Button>
          </Link>

          <Button
            onClick={handleNext}
            disabled={currentIndex === words.length - 1}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
    </div>
  )
}
