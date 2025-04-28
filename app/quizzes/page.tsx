"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Home, XCircle, RefreshCw, BookOpen } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { vocabularyService } from "@/services/vocabulary-service"

// Function to generate random quiz questions from vocabulary
const generateRandomQuizQuestions = () => {
  const allWords = vocabularyService.getAllWords()
  const shuffledWords = [...allWords].sort(() => 0.5 - Math.random())
  const selectedWords = shuffledWords.slice(0, 5)

  return selectedWords.map((word, index) => {
    // Create wrong options by selecting random words that are different from the current word
    const wrongOptions = shuffledWords
      .filter((w) => w.id !== word.id)
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
    }
  })
}

export default function QuizzesPage() {
  const [quizQuestions, setQuizQuestions] = useState(() => generateRandomQuizQuestions())
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [showQuizOptions, setShowQuizOptions] = useState(true)

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100

  useEffect(() => {
    if (!isAnswered && !quizCompleted && !showQuizOptions) {
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
  }, [isAnswered, quizCompleted, showQuizOptions])

  const handleOptionSelect = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOption(optionId)
    }
  }

  const handleSubmit = () => {
    if (selectedOption) {
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
    } else {
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setQuizQuestions(generateRandomQuizQuestions())
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setQuizCompleted(false)
    setTimeLeft(30)
  }

  const startNewQuiz = () => {
    // Generate a new set of questions
    setQuizQuestions(generateRandomQuizQuestions())
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setQuizCompleted(false)
    setTimeLeft(30)
  }

  const startGeneralQuiz = () => {
    setShowQuizOptions(false)
    startNewQuiz()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Quran Vocabulary Quiz</h1>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {showQuizOptions ? (
          <div className="max-w-2xl mx-auto grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">General Vocabulary Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Test your knowledge of random vocabulary words from the entire Quranic dictionary.
                </p>
              </CardContent>
              <CardFooter>
                <Button onClick={startGeneralQuiz} className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Start General Quiz
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Surah-Specific Quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Focus on vocabulary from a specific Surah (chapter) of the Quran.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quizzes/surah" className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Browse Surah Quizzes
                  </Button>
                </Link>
              </CardFooter>
            </Card>

            <div className="md:col-span-2">
              <Link href="/">
                <Button variant="ghost" className="w-full">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        ) : !quizCompleted ? (
          <>
            <div className="mb-6">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span>
                  Question {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
                <span>Time left: {timeLeft}s</span>
              </div>
            </div>

            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedOption || ""} className="space-y-4">
                  {currentQuestion.options.map((option) => (
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
                <Link href="/quizzes/surah">
                  <Button variant="outline" className="w-full">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Try a Surah-Specific Quiz
                  </Button>
                </Link>
                <Button variant="ghost" className="w-full" onClick={() => setShowQuizOptions(true)}>
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Quiz Options
                </Button>
                <Link href="/">
                  <Button variant="ghost" className="w-full">
                    <Home className="mr-2 h-4 w-4" />
                    Back to Home
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
