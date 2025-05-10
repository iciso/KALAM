"use client"

import { useState, useEffect } from "react"
import { type QuizQuestion, getRandomQuestions, getQuestionsByCategory } from "@/data/hijra-quiz-data"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, RefreshCw, Filter, Clock } from "lucide-react"

interface QuizStats {
  totalQuestions: number
  correctAnswers: number
  incorrectAnswers: number
  score: number
  timeTaken: number
}

export function HijraQuiz() {
  const [questions, setQuestions] = useState<QuizQuestion[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [quizStats, setQuizStats] = useState<QuizStats>({
    totalQuestions: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    score: 0,
    timeTaken: 0,
  })
  const [startTime, setStartTime] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")
  const [questionCount, setQuestionCount] = useState(10)
  const [showFilters, setShowFilters] = useState(false)

  const categories = [
    { id: "all", name: "All Categories" },
    { id: "locations", name: "Locations" },
    { id: "events", name: "Events" },
    { id: "timeline", name: "Timeline" },
    { id: "quranic", name: "Quranic References" },
    { id: "people", name: "People" },
  ]

  const difficulties = [
    { id: "all", name: "All Difficulties" },
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" },
  ]

  const questionCounts = [5, 10, 15, 20]

  useEffect(() => {
    if (quizStarted && !quizCompleted) {
      setStartTime(Date.now())
    }
  }, [quizStarted, quizCompleted])

  const startQuiz = () => {
    let filteredQuestions: QuizQuestion[] = []

    // Filter by category if needed
    if (selectedCategory !== "all") {
      filteredQuestions = getQuestionsByCategory(selectedCategory)
    } else {
      filteredQuestions = [...getRandomQuestions(questionCount)]
    }

    // Further filter by difficulty if needed
    if (selectedDifficulty !== "all") {
      filteredQuestions = filteredQuestions.filter((q) => q.difficulty === selectedDifficulty)
    }

    // If we don't have enough questions after filtering, get random ones
    if (filteredQuestions.length < questionCount) {
      const additionalQuestions = getRandomQuestions(questionCount - filteredQuestions.length)
      filteredQuestions = [...filteredQuestions, ...additionalQuestions]
    }

    // Limit to the requested question count and shuffle
    filteredQuestions = filteredQuestions.slice(0, questionCount).sort(() => 0.5 - Math.random())

    setQuestions(filteredQuestions)
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setQuizStarted(true)
    setQuizCompleted(false)
    setQuizStats({
      totalQuestions: filteredQuestions.length,
      correctAnswers: 0,
      incorrectAnswers: 0,
      score: 0,
      timeTaken: 0,
    })
    setStartTime(Date.now())
    setShowFilters(false)
  }

  const handleOptionSelect = (optionIndex: number) => {
    if (!isAnswered) {
      setSelectedOption(optionIndex)
    }
  }

  const checkAnswer = () => {
    if (selectedOption === null) return

    const isCorrect = selectedOption === questions[currentQuestionIndex].correctAnswer

    setQuizStats((prev) => ({
      ...prev,
      correctAnswers: isCorrect ? prev.correctAnswers + 1 : prev.correctAnswers,
      incorrectAnswers: !isCorrect ? prev.incorrectAnswers + 1 : prev.incorrectAnswers,
      score: isCorrect ? prev.score + 10 : prev.score,
    }))

    setIsAnswered(true)
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
      setIsAnswered(false)
    } else {
      // Quiz completed
      const endTime = Date.now()
      const timeTaken = startTime ? (endTime - startTime) / 1000 : 0

      setQuizStats((prev) => ({
        ...prev,
        timeTaken,
      }))

      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setQuizStarted(false)
    setQuizCompleted(false)
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
  }

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const calculatePerformanceMessage = (): string => {
    const percentage = (quizStats.correctAnswers / quizStats.totalQuestions) * 100

    if (percentage >= 90) return "Excellent! You're a Hijra history expert!"
    if (percentage >= 70) return "Great job! You have a solid understanding of the Hijra journey."
    if (percentage >= 50) return "Good effort! You know the basics of the Hijra journey."
    return "Keep learning! The Hijra journey has many important lessons."
  }

  if (!quizStarted) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-emerald-800">Hijra Journey Quiz</CardTitle>
          <CardDescription>Test your knowledge about the Prophet's migration from Mecca to Medina</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
            <h3 className="font-medium text-emerald-800 mb-2">About this Quiz</h3>
            <p className="text-sm text-emerald-700 mb-2">
              The Hijra (migration) of Prophet Muhammad ﷺ from Mecca to Medina in 622 CE marks one of the most
              significant events in Islamic history. This quiz will test your knowledge of the locations, events,
              people, and Quranic references related to this pivotal journey.
            </p>
            <p className="text-sm text-emerald-700">
              Answer questions about the Cave of Thawr, the coastal route, the arrival in Medina, and more. Challenge
              yourself and deepen your understanding of this momentous historical event!
            </p>
          </div>

          {showFilters ? (
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-medium">Quiz Options</h3>
                <Button variant="ghost" size="sm" onClick={() => setShowFilters(false)}>
                  Hide Options
                </Button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Category</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {categories.map((category) => (
                      <Button
                        key={category.id}
                        variant={selectedCategory === category.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedCategory(category.id)}
                        className={selectedCategory === category.id ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                      >
                        {category.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Difficulty</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {difficulties.map((difficulty) => (
                      <Button
                        key={difficulty.id}
                        variant={selectedDifficulty === difficulty.id ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedDifficulty(difficulty.id)}
                        className={selectedDifficulty === difficulty.id ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                      >
                        {difficulty.name}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium mb-2">Number of Questions</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {questionCounts.map((count) => (
                      <Button
                        key={count}
                        variant={questionCount === count ? "default" : "outline"}
                        size="sm"
                        onClick={() => setQuestionCount(count)}
                        className={questionCount === count ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                      >
                        {count}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-center mb-6">
              <Button variant="outline" size="sm" onClick={() => setShowFilters(true)}>
                <Filter className="h-4 w-4 mr-2" />
                Customize Quiz
              </Button>
            </div>
          )}

          <div className="flex flex-col items-center">
            <Button onClick={startQuiz} className="w-full max-w-xs bg-emerald-600 hover:bg-emerald-700">
              Start Quiz
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (quizCompleted) {
    return (
      <Card className="w-full max-w-4xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-emerald-800">Quiz Completed!</CardTitle>
          <CardDescription>You've completed the Hijra Journey Quiz</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-center mb-4">{calculatePerformanceMessage()}</h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-emerald-50 p-4 rounded-lg text-center">
                <p className="text-sm text-emerald-600 mb-1">Score</p>
                <p className="text-2xl font-bold text-emerald-800">{quizStats.score}</p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg text-center">
                <p className="text-sm text-emerald-600 mb-1">Correct</p>
                <p className="text-2xl font-bold text-emerald-800">
                  {quizStats.correctAnswers}/{quizStats.totalQuestions}
                </p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg text-center">
                <p className="text-sm text-emerald-600 mb-1">Accuracy</p>
                <p className="text-2xl font-bold text-emerald-800">
                  {Math.round((quizStats.correctAnswers / quizStats.totalQuestions) * 100)}%
                </p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg text-center">
                <p className="text-sm text-emerald-600 mb-1">Time</p>
                <p className="text-2xl font-bold text-emerald-800">{formatTime(quizStats.timeTaken)}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">Performance by Category</h3>
              <div className="space-y-3">
                {categories
                  .filter((c) => c.id !== "all")
                  .map((category) => {
                    const categoryQuestions = questions.filter((q) => q.category === category.id)
                    const correctAnswers = categoryQuestions.filter(
                      (q, i) =>
                        questions.indexOf(q) < currentQuestionIndex &&
                        questions[questions.indexOf(q)].correctAnswer === selectedOption,
                    ).length
                    const percentage =
                      categoryQuestions.length > 0 ? (correctAnswers / categoryQuestions.length) * 100 : 0

                    return (
                      <div key={category.id}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{category.name}</span>
                          <span>
                            {correctAnswers}/{categoryQuestions.length}
                          </span>
                        </div>
                        <Progress value={percentage} className="h-2" />
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <Button onClick={resetQuiz} className="bg-emerald-600 hover:bg-emerald-700">
              <RefreshCw className="h-4 w-4 mr-2" />
              Take Another Quiz
            </Button>
            <Button variant="outline" onClick={() => (window.location.href = "/hijra")}>
              Return to Hijra Journey
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <div className="flex justify-between items-center mb-2">
          <div className="text-sm text-gray-500">
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
          <div className="text-sm text-gray-500 flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            {startTime && <span>{formatTime((Date.now() - startTime) / 1000)}</span>}
          </div>
        </div>
        <Progress value={progress} className="h-2 mb-4" />
        <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
        <div className="flex items-center mt-1">
          <span
            className={`text-xs px-2 py-0.5 rounded-full ${
              currentQuestion.difficulty === "easy"
                ? "bg-green-100 text-green-800"
                : currentQuestion.difficulty === "medium"
                  ? "bg-yellow-100 text-yellow-800"
                  : "bg-red-100 text-red-800"
            }`}
          >
            {currentQuestion.difficulty.charAt(0).toUpperCase() + currentQuestion.difficulty.slice(1)}
          </span>
          <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 ml-2">
            {currentQuestion.category.charAt(0).toUpperCase() + currentQuestion.category.slice(1)}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <RadioGroup value={selectedOption?.toString() || ""} className="space-y-3">
          {currentQuestion.options.map((option, index) => (
            <div
              key={index}
              className={`flex items-center space-x-2 p-4 rounded-lg border ${
                isAnswered && index === currentQuestion.correctAnswer
                  ? "bg-green-50 border-green-200"
                  : isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer
                    ? "bg-red-50 border-red-200"
                    : "hover:bg-gray-50"
              }`}
              onClick={() => handleOptionSelect(index)}
            >
              <RadioGroupItem
                value={index.toString()}
                id={`option-${index}`}
                disabled={isAnswered}
                className="sr-only"
              />
              <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer flex items-center justify-between">
                <span>{option}</span>
                {isAnswered && index === currentQuestion.correctAnswer && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {isAnswered && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-1">Explanation</h3>
            <p className="text-sm text-blue-700">{currentQuestion.explanation}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between">
        {!isAnswered ? (
          <Button
            onClick={checkAnswer}
            disabled={selectedOption === null}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Check Answer
          </Button>
        ) : (
          <Button onClick={nextQuestion} className="bg-emerald-600 hover:bg-emerald-700">
            {currentQuestionIndex < questions.length - 1 ? "Next Question" : "Complete Quiz"}
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
