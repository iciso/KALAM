"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, CheckCircle, XCircle, RotateCcw, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { alKafirunQuizData } from "@/data/surah-quiz-data"

export function SurahQuizClient() {
  const quizData = alKafirunQuizData
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: string }>({})
  const [showResults, setShowResults] = useState(false)
  const [quizStarted, setQuizStarted] = useState(false)

  const currentQuestion = quizData.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100

  const handleAnswerSelect = (optionId: string) => {
    // Only allow selection if no answer is already selected for this question
    if (!selectedAnswers[currentQuestionIndex]) {
      setSelectedAnswers((prev) => ({
        ...prev,
        [currentQuestionIndex]: optionId,
      }))
    }
  }

  const handleNext = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1)
    } else {
      setShowResults(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1)
    }
  }

  const calculateScore = () => {
    let correct = 0
    quizData.questions.forEach((question, index) => {
      const selectedOption = selectedAnswers[index]
      const correctOption = question.options.find((opt) => opt.isCorrect)
      if (selectedOption === correctOption?.id) {
        correct++
      }
    })
    return correct
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedAnswers({})
    setShowResults(false)
    setQuizStarted(false)
  }

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="bg-emerald-800 text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Surah {quizData.surahName} Quiz</h1>
            <div className="flex gap-2">
              <Link href="/quizzes/surah">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="sr-only">Back to Surah Quizzes</span>
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Home</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-2">
                  Surah {quizData.surahName}
                  <span className="block text-2xl font-arabic mt-2 text-gray-800 dark:text-gray-200">
                    {quizData.surahArabicName}
                  </span>
                </CardTitle>
                <div className="flex justify-center gap-4 mb-4">
                  <Badge variant="outline">{quizData.totalVerses} verses</Badge>
                  <Badge variant="outline">{quizData.type}</Badge>
                  <Badge variant="outline">{quizData.difficulty}</Badge>
                </div>
                <CardDescription className="text-lg leading-relaxed">{quizData.introduction}</CardDescription>
              </CardHeader>

              {quizData.additionalContextElements && (
                <CardContent>
                  {quizData.additionalContextElements.map((element, index) => (
                    <div key={index} dangerouslySetInnerHTML={{ __html: element.content }} />
                  ))}
                </CardContent>
              )}

              <CardFooter className="flex flex-col gap-4">
                <div className="text-center">
                  <p className="text-lg font-medium mb-2">Ready to test your knowledge?</p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    This quiz contains {quizData.questions.length} questions about Surah {quizData.surahName}.
                  </p>
                </div>
                <Button onClick={() => setQuizStarted(true)} className="bg-emerald-600 hover:bg-emerald-700">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Start Quiz
                </Button>
              </CardFooter>
            </Card>
          </div>
        </main>
      </div>
    )
  }

  if (showResults) {
    const score = calculateScore()
    const percentage = Math.round((score / quizData.questions.length) * 100)

    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="bg-emerald-800 text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Quiz Results</h1>
            <div className="flex gap-2">
              <Link href="/quizzes/surah">
                <Button variant="ghost" size="icon">
                  <ArrowLeft className="h-5 w-5" />
                  <span className="sr-only">Back to Surah Quizzes</span>
                </Button>
              </Link>
              <Link href="/">
                <Button variant="ghost" size="icon">
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Home</span>
                </Button>
              </Link>
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-6">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl mb-2">Quiz Complete!</CardTitle>
                <CardDescription className="text-xl">
                  Surah {quizData.surahName} ({quizData.surahArabicName})
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-6xl font-bold mb-4 text-emerald-600 dark:text-emerald-400">{percentage}%</div>
                <p className="text-xl mb-4">
                  You scored {score} out of {quizData.questions.length} questions correctly
                </p>
                <div className="flex justify-center gap-4">
                  <Button onClick={resetQuiz} className="bg-emerald-600 hover:bg-emerald-700">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Retake Quiz
                  </Button>
                  <Link href="/quizzes/surah">
                    <Button variant="outline">
                      <BookOpen className="mr-2 h-4 w-4" />
                      More Quizzes
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Review Your Answers</h2>
              {quizData.questions.map((question, index) => {
                const selectedOption = selectedAnswers[index]
                const correctOption = question.options.find((opt) => opt.isCorrect)
                const isCorrect = selectedOption === correctOption?.id

                return (
                  <Card
                    key={question.id}
                    className={`border-l-4 ${isCorrect ? "border-l-green-500" : "border-l-red-500"}`}
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg flex items-center gap-2">
                            {isCorrect ? (
                              <CheckCircle className="h-5 w-5 text-green-500" />
                            ) : (
                              <XCircle className="h-5 w-5 text-red-500" />
                            )}
                            Question {index + 1}
                          </CardTitle>
                          <p className="mt-2">{question.question}</p>
                          {question.arabic && (
                            <p className="text-2xl font-arabic mt-2 text-gray-800 dark:text-gray-200 text-right">
                              {question.arabic}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {question.options.map((option) => (
                          <div
                            key={option.id}
                            className={`p-3 rounded-lg border ${
                              option.isCorrect
                                ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                                : selectedOption === option.id
                                  ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
                                  : "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {option.isCorrect && <CheckCircle className="h-4 w-4 text-green-500" />}
                              {selectedOption === option.id && !option.isCorrect && (
                                <XCircle className="h-4 w-4 text-red-500" />
                              )}
                              <span className="font-medium">{option.id.toUpperCase()})</span>
                              <span>{option.text}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      {question.explanation && (
                        <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                          <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Explanation:</h4>
                          <p className="text-blue-700 dark:text-blue-200">{question.explanation}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </main>
      </div>
    )
  }

  // Get the selected option for current question
  const selectedOptionId = selectedAnswers[currentQuestionIndex]
  const selectedOption = selectedOptionId ? currentQuestion.options.find((opt) => opt.id === selectedOptionId) : null

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Surah {quizData.surahName} Quiz</h1>
          <div className="flex gap-2">
            <Link href="/quizzes/surah">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Surah Quizzes</span>
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium">
                Question {currentQuestionIndex + 1} of {quizData.questions.length}
              </span>
              <span className="text-sm text-gray-500">{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">{currentQuestion.question}</CardTitle>
              {currentQuestion.arabic && (
                <div className="text-3xl font-arabic mt-4 text-gray-800 dark:text-gray-200 text-right leading-relaxed bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border">
                  {currentQuestion.arabic}
                </div>
              )}
              {currentQuestion.rootLetters && (
                <div className="mt-2">
                  <Badge variant="outline" className="font-arabic">
                    Root: {currentQuestion.rootLetters}
                  </Badge>
                </div>
              )}
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {currentQuestion.options.map((option) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === option.id
                  const isAnswered = selectedAnswers[currentQuestionIndex] !== undefined
                  const isCorrect = option.isCorrect

                  let buttonStyle = ""
                  if (isAnswered) {
                    if (isSelected && isCorrect) {
                      buttonStyle =
                        "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200"
                    } else if (isSelected && !isCorrect) {
                      buttonStyle = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200"
                    } else if (!isSelected && isCorrect) {
                      buttonStyle =
                        "border-green-300 bg-green-25 dark:bg-green-900/10 text-green-700 dark:text-green-300"
                    } else {
                      buttonStyle =
                        "border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                    }
                  } else {
                    buttonStyle =
                      "border-gray-200 dark:border-gray-700 hover:border-blue-300 hover:bg-blue-50/50 dark:hover:bg-blue-900/10"
                  }

                  return (
                    <button
                      key={option.id}
                      onClick={() => handleAnswerSelect(option.id)}
                      disabled={isAnswered}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${buttonStyle}`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-blue-600 dark:text-blue-400">{option.id.toUpperCase()})</span>
                        <span className="flex-1">{option.text}</span>
                        {isAnswered && isSelected && isCorrect && (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        )}
                        {isAnswered && isSelected && !isCorrect && (
                          <XCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                        )}
                        {isAnswered && !isSelected && isCorrect && (
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  )
                })}
              </div>

              {selectedAnswers[currentQuestionIndex] && currentQuestion.explanation && (
                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                  <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Explanation:</h4>
                  <p className="text-blue-700 dark:text-blue-200">{currentQuestion.explanation}</p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0} variant="outline">
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!selectedAnswers[currentQuestionIndex]}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                {currentQuestionIndex === quizData.questions.length - 1 ? "Finish Quiz" : "Next"}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
