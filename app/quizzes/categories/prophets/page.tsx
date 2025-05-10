"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Home, Users, Filter, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  prophetQuizQuestions,
  getAllProphets,
  getAllCategories,
  type ProphetQuizQuestion,
} from "@/data/prophets-quiz-data"

export default function ProphetsQuizPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [questions, setQuestions] = useState<ProphetQuizQuestion[]>([])
  const [loading, setLoading] = useState(true)

  // Filter states
  const [selectedProphet, setSelectedProphet] = useState<string | "all">("all")
  const [selectedCategory, setSelectedCategory] = useState<string | "all">("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | "all">("all")
  const [questionCount, setQuestionCount] = useState(10)
  const [showFilters, setShowFilters] = useState(false)

  const allProphets = getAllProphets()
  const allCategories = getAllCategories()
  const difficulties = ["beginner", "intermediate", "advanced"]

  useEffect(() => {
    initializeQuiz()
  }, [])

  const initializeQuiz = () => {
    setLoading(true)
    let filteredQuestions = [...prophetQuizQuestions]

    // Apply filters
    if (selectedProphet !== "all") {
      filteredQuestions = filteredQuestions.filter((q) => q.prophet === selectedProphet)
    }

    if (selectedCategory !== "all") {
      filteredQuestions = filteredQuestions.filter((q) => q.category === selectedCategory)
    }

    if (selectedDifficulty !== "all") {
      filteredQuestions = filteredQuestions.filter((q) => q.difficulty === selectedDifficulty)
    }

    // Shuffle and limit
    filteredQuestions = filteredQuestions.sort(() => 0.5 - Math.random()).slice(0, questionCount)

    if (filteredQuestions.length === 0) {
      // If no questions match filters, use default questions
      filteredQuestions = prophetQuizQuestions.sort(() => 0.5 - Math.random()).slice(0, questionCount)
    }

    setQuestions(filteredQuestions)
    setCurrentQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setShowExplanation(false)
    setQuizCompleted(false)
    setLoading(false)
  }

  const handleAnswerSelect = (answerId: string) => {
    if (selectedAnswer || quizCompleted) return

    setSelectedAnswer(answerId)

    if (answerId === questions[currentQuestionIndex].correctAnswer) {
      setScore((prevScore) => prevScore + 1)
    }

    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      setQuizCompleted(true)
    }
  }

  const handleRestartQuiz = () => {
    initializeQuiz()
  }

  const applyFilters = () => {
    initializeQuiz()
    setShowFilters(false)
  }

  const resetFilters = () => {
    setSelectedProphet("all")
    setSelectedCategory("all")
    setSelectedDifficulty("all")
    setQuestionCount(10)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-700 mx-auto"></div>
          <p className="mt-4 text-emerald-700 font-medium">Loading quiz questions...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-blue-700 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold flex items-center">
            <Users className="mr-2 h-6 w-6" />
            Prophets Quiz
          </h1>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" title="Filter Questions" onClick={() => setShowFilters(!showFilters)}>
              <Filter className="h-5 w-5" />
              <span className="sr-only">Filter</span>
            </Button>
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
        {showFilters && (
          <Card className="mb-8 border-blue-200">
            <CardHeader className="bg-blue-50 border-b border-blue-100">
              <CardTitle className="text-blue-800">Quiz Filters</CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Prophet</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedProphet}
                    onChange={(e) => setSelectedProphet(e.target.value)}
                  >
                    <option value="all">All Prophets</option>
                    {allProphets.map((prophet) => (
                      <option key={prophet} value={prophet}>
                        {prophet}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    {allCategories.map((category) => (
                      <option key={category} value={category}>
                        {category.charAt(0).toUpperCase() + category.slice(1).replace("-", " ")}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={selectedDifficulty}
                    onChange={(e) => setSelectedDifficulty(e.target.value)}
                  >
                    <option value="all">All Difficulties</option>
                    {difficulties.map((difficulty) => (
                      <option key={difficulty} value={difficulty}>
                        {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Number of Questions</label>
                  <select
                    className="w-full p-2 border border-gray-300 rounded-md"
                    value={questionCount}
                    onChange={(e) => setQuestionCount(Number(e.target.value))}
                  >
                    <option value={5}>5 Questions</option>
                    <option value={10}>10 Questions</option>
                    <option value={15}>15 Questions</option>
                    <option value={20}>20 Questions</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-4 space-x-2">
                <Button
                  variant="outline"
                  onClick={resetFilters}
                  className="border-blue-500 text-blue-500 hover:bg-blue-50"
                >
                  Reset Filters
                </Button>
                <Button onClick={applyFilters} className="bg-blue-600 hover:bg-blue-700 text-white">
                  Apply Filters
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {!quizCompleted ? (
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="bg-blue-50 border-b border-blue-100">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-blue-600 font-medium">
                    Question {currentQuestionIndex + 1} of {questions.length}
                  </p>
                  <CardTitle className="text-blue-800 mt-1">{questions[currentQuestionIndex]?.question}</CardTitle>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                    {questions[currentQuestionIndex]?.prophet}
                  </span>
                  <span className="inline-block ml-2 px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded capitalize">
                    {questions[currentQuestionIndex]?.difficulty}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3">
                {questions[currentQuestionIndex]?.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswerSelect(option.id)}
                    className={`w-full text-left p-3 rounded-md transition-colors ${
                      selectedAnswer === option.id
                        ? option.id === questions[currentQuestionIndex].correctAnswer
                          ? "bg-green-100 border border-green-300"
                          : "bg-red-100 border border-red-300"
                        : "bg-white border border-gray-200 hover:bg-gray-50"
                    }`}
                    disabled={selectedAnswer !== null}
                  >
                    <div className="flex items-start">
                      <span className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 text-blue-800 flex items-center justify-center mr-3 font-medium">
                        {option.id.toUpperCase()}
                      </span>
                      <span>{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>

              {showExplanation && (
                <div className="mt-6 p-4 bg-blue-50 rounded-md border border-blue-100">
                  <h3 className="font-medium text-blue-800 mb-2">Explanation:</h3>
                  <p className="text-gray-700">{questions[currentQuestionIndex]?.explanation}</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t border-gray-100 pt-4">
              <div>
                <p className="text-sm text-gray-500">
                  Score: <span className="font-medium text-blue-600">{score}</span> /{" "}
                  {currentQuestionIndex + (selectedAnswer ? 1 : 0)}
                </p>
              </div>
              {selectedAnswer && (
                <Button onClick={handleNextQuestion} className="bg-blue-600 hover:bg-blue-700">
                  {currentQuestionIndex < questions.length - 1 ? "Next Question" : "See Results"}
                </Button>
              )}
            </CardFooter>
          </Card>
        ) : (
          <Card className="max-w-3xl mx-auto">
            <CardHeader className="bg-blue-50 border-b border-blue-100 text-center">
              <CardTitle className="text-blue-800">Quiz Completed!</CardTitle>
            </CardHeader>
            <CardContent className="pt-6 text-center">
              <div className="mb-6">
                <div className="text-5xl font-bold text-blue-600 mb-2">
                  {score} / {questions.length}
                </div>
                <p className="text-gray-600">
                  You answered {((score / questions.length) * 100).toFixed(0)}% of the questions correctly.
                </p>
              </div>

              <div className="p-4 rounded-md bg-blue-50 text-left mb-6">
                <h3 className="font-medium text-blue-800 mb-2">Performance by Prophet:</h3>
                <div className="grid grid-cols-2 gap-2">
                  {allProphets
                    .filter((prophet) => questions.some((q) => q.prophet === prophet))
                    .map((prophet) => {
                      const prophetQuestions = questions.filter((q) => q.prophet === prophet)
                      const correctAnswers = prophetQuestions.filter(
                        (q, idx) =>
                          questions.indexOf(q) < currentQuestionIndex &&
                          questions[questions.indexOf(q)].correctAnswer === selectedAnswer,
                      ).length
                      return (
                        <div key={prophet} className="text-sm">
                          <span className="font-medium">{prophet}:</span> {correctAnswers} / {prophetQuestions.length}
                        </div>
                      )
                    })}
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center border-t border-gray-100 pt-4">
              <Button onClick={handleRestartQuiz} className="bg-blue-600 hover:bg-blue-700 flex items-center">
                <RefreshCw className="mr-2 h-4 w-4" />
                Take Another Quiz
              </Button>
            </CardFooter>
          </Card>
        )}
      </main>
    </div>
  )
}
