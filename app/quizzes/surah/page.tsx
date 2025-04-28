"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, CheckCircle, Home, XCircle, RefreshCw } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { vocabularyService } from "@/services/vocabulary-service"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

// Function to generate quiz questions from vocabulary for a specific Surah
const generateSurahQuizQuestions = (surahNumber: number) => {
  const surahWords = vocabularyService.getWordsBySurah(surahNumber)

  // If there are fewer than 5 words, use all available words
  const wordCount = Math.min(5, surahWords.length)

  if (surahWords.length === 0) {
    return []
  }

  const shuffledWords = [...surahWords].sort(() => 0.5 - Math.random())
  const selectedWords = shuffledWords.slice(0, wordCount)

  // Get all words for wrong options
  const allWords = vocabularyService.getAllWords()

  return selectedWords.map((word, index) => {
    // Create wrong options by selecting random words that are different from the current word
    const wrongOptions = allWords
      .filter((w) => w.id !== word.id)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((w) => w.meanings[0])

    // Create all options including the correct one
    const options = [
      { id: "a", text: word.meanings[0] },
      { id: "b", text: wrongOptions[0] },
      { id: "c", text: wrongOptions[1] },
      { id: "d", text: wrongOptions[2] },
    ]

    // Shuffle the options
    const shuffledOptions = [...options].sort(() => 0.5 - Math.random())

    // Find the new position of the correct answer
    const correctAnswerId = shuffledOptions.find((option) => option.text === word.meanings[0])?.id || "a"

    return {
      id: index + 1,
      question: `What does '${word.arabic}' mean?`,
      options: shuffledOptions,
      correctAnswer: correctAnswerId,
      wordInfo: {
        arabic: word.arabic,
        transliteration: word.transliteration,
        meaning: word.meanings[0],
      },
    }
  })
}

export default function SurahQuizzesPage() {
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null)
  const [quizQuestions, setQuizQuestions] = useState<any[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [showExplanation, setShowExplanation] = useState(false)

  const allSurahs = vocabularyService.getAllSurahs()

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const progress = quizQuestions.length > 0 ? ((currentQuestionIndex + 1) / quizQuestions.length) * 100 : 0

  useEffect(() => {
    if (selectedSurah && !quizStarted) {
      const questions = generateSurahQuizQuestions(selectedSurah)
      setQuizQuestions(questions)
    }
  }, [selectedSurah, quizStarted])

  useEffect(() => {
    if (quizStarted && !isAnswered && !quizCompleted && quizQuestions.length > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer)
            handleSubmit()
            return 0
          }
          return prevTime - 1
        })
      }, 1000)

      return () => clearInterval(timer)
    }
  }, [isAnswered, quizCompleted, quizStarted, quizQuestions])

  const handleSurahSelect = (value: string) => {
    const surahNumber = Number.parseInt(value, 10)
    setSelectedSurah(surahNumber)
    setQuizStarted(false)
    setQuizCompleted(false)
    setScore(0)
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setShowExplanation(false)
  }

  const startQuiz = () => {
    if (selectedSurah && quizQuestions.length > 0) {
      setQuizStarted(true)
      setTimeLeft(30)
    }
  }

  const handleOptionSelect = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOption(optionId)
    }
  }

  const handleSubmit = () => {
    if (selectedOption && currentQuestion) {
      if (selectedOption === currentQuestion.correctAnswer) {
        setScore(score + 1)
      }
    }

    setIsAnswered(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
      setIsAnswered(false)
      setTimeLeft(30)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setQuizCompleted(false)
    setTimeLeft(30)
    setShowExplanation(false)
  }

  const startNewQuiz = () => {
    if (selectedSurah) {
      const newQuestions = generateSurahQuizQuestions(selectedSurah)
      setQuizQuestions(newQuestions)
      resetQuiz()
      setQuizStarted(true)
    }
  }

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation)
  }

  const getSurahName = (surahNumber: number) => {
    const surah = allSurahs.find((s) => s.number === surahNumber)
    return surah ? surah.name : `Surah ${surahNumber}`
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Surah Vocabulary Quiz</h1>
          <div className="flex space-x-2">
            <Link href="/quizzes">
              <Button variant="ghost" size="icon" title="Back to Quizzes">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Quizzes</span>
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="icon" title="Home">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!quizStarted ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Surah Vocabulary Quiz</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="surah-select">Select a Surah</Label>
                <Select onValueChange={handleSurahSelect}>
                  <SelectTrigger id="surah-select">
                    <SelectValue placeholder="Choose a Surah" />
                  </SelectTrigger>
                  <SelectContent>
                    {allSurahs.map((surah) => (
                      <SelectItem key={surah.number} value={surah.number.toString()}>
                        {surah.number}. {surah.name} ({surah.wordCount} words)
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {selectedSurah && quizQuestions.length === 0 && (
                <Alert variant="destructive">
                  <AlertTitle>No words available</AlertTitle>
                  <AlertDescription>
                    There are not enough vocabulary words for this Surah in our database. Please select another Surah.
                  </AlertDescription>
                </Alert>
              )}

              {selectedSurah && quizQuestions.length > 0 && (
                <div className="text-center">
                  <p className="mb-4">
                    This quiz will test your knowledge of {quizQuestions.length} words from{" "}
                    {getSurahName(selectedSurah)}.
                  </p>
                  <Button onClick={startQuiz} className="bg-emerald-600 hover:bg-emerald-700">
                    Start Quiz
                  </Button>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center">
              <Link href="/quizzes">
                <Button variant="outline">Back to All Quizzes</Button>
              </Link>
            </CardFooter>
          </Card>
        ) : !quizCompleted ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium">{getSurahName(selectedSurah!)} Quiz</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">Time left: {timeLeft}s</span>
              </div>
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span>
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
                <span>
                  Score: {score}/{currentQuestionIndex + (isAnswered ? 1 : 0)}
                </span>
              </div>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl flex items-center justify-between">
                  <span>{currentQuestion?.question}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-emerald-600"
                    onClick={() => window.open(`/surah-vocabulary?surah=${selectedSurah}`, "_blank")}
                  >
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span className="text-xs">View All Words</span>
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedOption || ""} className="space-y-4">
                  {currentQuestion?.options.map((option: any) => (
                    <div
                      key={option.id}
                      className={`flex items-center space-x-2 p-4 rounded-lg border ${
                        isAnswered && option.id === currentQuestion.correctAnswer
                          ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                          : isAnswered && option.id === selectedOption && option.id !== currentQuestion.correctAnswer
                            ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
                            : "hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      <RadioGroupItem
                        value={option.id}
                        id={`option-${option.id}`}
                        disabled={isAnswered}
                        className="sr-only"
                      />
                      <Label
                        htmlFor={`option-${option.id}`}
                        className="flex-1 cursor-pointer flex items-center justify-between"
                      >
                        <span>{option.text}</span>
                        {isAnswered && option.id === currentQuestion.correctAnswer && (
                          <CheckCircle className="h-5 w-5 text-green-500" />
                        )}
                        {isAnswered && option.id === selectedOption && option.id !== currentQuestion.correctAnswer && (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>

                {isAnswered && (
                  <div className="mt-6">
                    <Button variant="outline" size="sm" onClick={toggleExplanation} className="mb-2">
                      {showExplanation ? "Hide" : "Show"} Word Details
                    </Button>

                    {showExplanation && (
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <div className="flex flex-col space-y-2">
                          <div className="flex justify-between">
                            <span className="font-medium">Arabic:</span>
                            <span className="font-arabic text-lg">{currentQuestion.wordInfo.arabic}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Transliteration:</span>
                            <span>{currentQuestion.wordInfo.transliteration}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="font-medium">Meaning:</span>
                            <span>{currentQuestion.wordInfo.meaning}</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                {!isAnswered ? (
                  <Button
                    onClick={handleSubmit}
                    disabled={!selectedOption}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    Submit Answer
                  </Button>
                ) : (
                  <Button onClick={handleNextQuestion} className="bg-emerald-600 hover:bg-emerald-700">
                    {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </>
        ) : (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Quiz Results</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-5xl font-bold mb-4 text-emerald-600">
                {score}/{quizQuestions.length}
              </div>
              <p className="mb-6">
                {score === quizQuestions.length
                  ? "Perfect score! Excellent work!"
                  : score >= quizQuestions.length * 0.7
                    ? "Great job! You're making good progress."
                    : "Keep practicing! You'll improve with time."}
              </p>
              <div className="flex flex-col space-y-4">
                <Button
                  onClick={startNewQuiz}
                  className="bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  New Quiz (Different Words)
                </Button>
                <Button onClick={resetQuiz} variant="outline" className="w-full">
                  Try Again (Same Words)
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => window.open(`/surah-vocabulary?surah=${selectedSurah}`, "_blank")}
                >
                  <BookOpen className="mr-2 h-4 w-4" />
                  Study All Words in This Surah
                </Button>
                <Link href="/quizzes">
                  <Button variant="ghost" className="w-full">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to All Quizzes
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  )
}
