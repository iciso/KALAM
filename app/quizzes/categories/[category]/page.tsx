"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Home, XCircle, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { prophetQuizQuestions } from "@/data/prophets-quiz-data"

// Sample quiz questions
const sampleQuestions = [
  {
    id: 1,
    question: "What does 'الله' mean?",
    options: [
      { id: "a", text: "God" },
      { id: "b", text: "Prophet" },
      { id: "c", text: "Angel" },
      { id: "d", text: "Book" },
    ],
    correctAnswer: "a",
    wordInfo: {
      arabic: "الله",
      transliteration: "Allah",
      meaning: "God",
      difficulty: "beginner",
    },
  },
  {
    id: 2,
    question: "What does 'رب' mean?",
    options: [
      { id: "a", text: "Angel" },
      { id: "b", text: "Lord" },
      { id: "c", text: "Book" },
      { id: "d", text: "Heaven" },
    ],
    correctAnswer: "b",
    wordInfo: {
      arabic: "رب",
      transliteration: "Rabb",
      meaning: "Lord",
      difficulty: "beginner",
    },
  },
  {
    id: 3,
    question: "What does 'رحمن' mean?",
    options: [
      { id: "a", text: "Merciful" },
      { id: "b", text: "Powerful" },
      { id: "c", text: "Creator" },
      { id: "d", text: "Judge" },
    ],
    correctAnswer: "a",
    wordInfo: {
      arabic: "رحمن",
      transliteration: "Rahman",
      meaning: "Merciful",
      difficulty: "beginner",
    },
  },
]

export default function CategoryQuizPage({ params }: { params: { category: string } }) {
  const category = params.category
  const [quizQuestions, setQuizQuestions] = useState(sampleQuestions)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(30)
  const [showExplanation, setShowExplanation] = useState(false)

  // Use prophet quiz questions if the category is prophets
  useEffect(() => {
    if (category === "prophets") {
      setQuizQuestions(prophetQuizQuestions)
    }
  }, [category])

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100

  // Timer effect
  useEffect(() => {
    if (!isAnswered && !quizCompleted) {
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
  }, [isAnswered, quizCompleted])

  const handleOptionSelect = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOption(optionId)
    }
  }

  const handleSubmit = () => {
    if (selectedOption === currentQuestion.correctAnswer) {
      setScore(score + 1)
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

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "text-green-600 dark:text-green-400"
      case "intermediate":
        return "text-yellow-600 dark:text-yellow-400"
      case "advanced":
        return "text-red-600 dark:text-red-400"
      default:
        return ""
    }
  }

  // Format category name for display
  const formatCategoryName = (cat: string) => {
    return cat.charAt(0).toUpperCase() + cat.slice(1).replace(/-/g, " ")
  }

  // Check if we're using the prophets quiz
  const isProphetsQuiz = category === "prophets"

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold capitalize">{formatCategoryName(category)} Quiz</h1>
          <div className="flex space-x-2">
            <Link href="/quizzes/categories">
              <Button variant="ghost" size="icon" title="Back to Categories">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Categories</span>
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
        {!quizCompleted ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-lg font-medium capitalize">{formatCategoryName(category)} Quiz</span>
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
                <CardTitle className="text-xl">{currentQuestion?.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={selectedOption || ""} className="space-y-4">
                  {currentQuestion?.options.map((option) => (
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
                      {showExplanation ? "Hide" : "Show"} {isProphetsQuiz ? "Prophet Details" : "Word Details"}
                    </Button>

                    {showExplanation && isProphetsQuiz && "explanation" in currentQuestion && (
                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="mb-4 text-gray-700 dark:text-gray-300">{currentQuestion.explanation}</p>

                        <div className="mt-4 border-t pt-4">
                          <h4 className="font-medium text-lg mb-2">About {currentQuestion.prophetInfo.name}</h4>
                          <div className="flex flex-col space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">Arabic:</span>
                              <span className="font-arabic text-lg">{currentQuestion.prophetInfo.arabic}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="font-medium">Transliteration:</span>
                              <span>{currentQuestion.prophetInfo.transliteration}</span>
                            </div>
                            <div className="mt-2">
                              <span className="font-medium">Significance:</span>
                              <p className="mt-1 text-gray-700 dark:text-gray-300">
                                {currentQuestion.prophetInfo.significance}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {showExplanation && !isProphetsQuiz && "wordInfo" in currentQuestion && (
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
              <CardTitle className="text-2xl text-center capitalize">
                {formatCategoryName(category)} Quiz Results
              </CardTitle>
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
                <Button onClick={resetQuiz} className="bg-emerald-600 hover:bg-emerald-700">
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
                <Link href="/quizzes/categories">
                  <Button variant="ghost" className="w-full">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Categories
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
