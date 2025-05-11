"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Home, CheckCircle, XCircle, RefreshCw, BookOpen, AlertCircle, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import type { SurahQuizData } from "@/data/surah-quiz-data"

interface SurahQuizProps {
  quizData: SurahQuizData
}

export default function SurahQuiz({ quizData }: SurahQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [questionResults, setQuestionResults] = useState<Array<{ questionId: string; correct: boolean }>>([])
  const [showIntroduction, setShowIntroduction] = useState(true)

  const currentQuestion = quizData.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / quizData.questions.length) * 100

  const handleOptionSelect = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOption(optionId)
    }
  }

  const handleSubmit = () => {
    if (!selectedOption) return

    const isCorrect = currentQuestion.options.find((option) => option.id === selectedOption)?.isCorrect || false

    // Store the result for this question
    setQuestionResults((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        correct: isCorrect,
      },
    ])

    if (isCorrect) {
      setScore(score + 1)
    }

    setIsAnswered(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
      setIsAnswered(false)
      setShowExplanation(false)
    } else {
      // Quiz completed
      setQuizCompleted(true)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setQuizCompleted(false)
    setShowExplanation(false)
    setQuestionResults([])
  }

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation)
  }

  // Get difficulty color
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
      case "Advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
    }
  }

  // Get type color
  const getTypeColor = (type: string) => {
    return type === "Meccan"
      ? "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300"
      : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300"
  }

  if (showIntroduction) {
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
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm flex items-center justify-center">
                      {quizData.surahId}
                    </span>
                    Surah {quizData.surahName}
                  </CardTitle>
                  <p className="font-arabic text-2xl mt-2">{quizData.surahArabicName}</p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <Badge className={getTypeColor(quizData.type)}>{quizData.type}</Badge>
                  <Badge className={getDifficultyColor(quizData.difficulty)}>{quizData.difficulty}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Introduction</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{quizData.introduction}</p>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 mb-4">
                  <div className="flex items-start">
                    <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-1">About This Quiz</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-200">
                        This quiz contains {quizData.questions.length} questions testing your knowledge of key
                        vocabulary from Surah {quizData.surahName}. Each question presents an Arabic word from the surah
                        and asks you to select its correct meaning in English.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>{quizData.totalVerses} verses</span>
                  </div>
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    <span>{quizData.questions.length} vocabulary words</span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={() => setShowIntroduction(false)} className="w-full bg-emerald-600 hover:bg-emerald-700">
                Start Quiz
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    )
  }

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
        {!quizCompleted ? (
          <>
            <div className="mb-6">
              <div className="flex justify-between mb-1 text-sm text-gray-600 dark:text-gray-400">
                <span>
                  Question {currentQuestionIndex + 1} of {quizData.questions.length}
                </span>
                <span>
                  Score: {score}/{currentQuestionIndex + (isAnswered ? 1 : 0)}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <Card className="max-w-2xl mx-auto mb-8">
              <CardHeader>
                <CardTitle className="text-xl">
                  What does <span className="font-arabic text-2xl">{currentQuestion.arabic}</span> mean?
                </CardTitle>
                {currentQuestion.rootLetters && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Root letters: <span className="font-arabic">{currentQuestion.rootLetters}</span>
                  </p>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {currentQuestion.options.map((option) => (
                    <div
                      key={option.id}
                      className={`flex items-center space-x-2 p-4 rounded-lg border cursor-pointer ${
                        isAnswered && option.isCorrect
                          ? "bg-green-50 border-green-200 dark:bg-green-900/20 dark:border-green-800"
                          : isAnswered && option.id === selectedOption && !option.isCorrect
                            ? "bg-red-50 border-red-200 dark:bg-red-900/20 dark:border-red-800"
                            : selectedOption === option.id
                              ? "bg-blue-50 border-blue-200 dark:bg-blue-900/20 dark:border-blue-800"
                              : "hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      onClick={() => handleOptionSelect(option.id)}
                    >
                      <div className="flex-1 flex items-center justify-between">
                        <span>{option.text}</span>
                        {isAnswered && option.isCorrect && <CheckCircle className="h-5 w-5 text-green-500" />}
                        {isAnswered && option.id === selectedOption && !option.isCorrect && (
                          <XCircle className="h-5 w-5 text-red-500" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {isAnswered && currentQuestion.explanation && (
                  <div className="mt-6">
                    <Button
                      variant="outline"
                      onClick={toggleExplanation}
                      className="mb-2 text-sm w-full justify-between"
                    >
                      <span>{showExplanation ? "Hide Explanation" : "Show Explanation"}</span>
                      <Info className="h-4 w-4 ml-2" />
                    </Button>
                    {showExplanation && (
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-lg p-4 text-sm text-amber-800 dark:text-amber-200">
                        {currentQuestion.explanation}
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
                    {currentQuestionIndex < quizData.questions.length - 1 ? "Next Question" : "Complete Quiz"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </>
        ) : (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Quiz Completed!</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="text-5xl font-bold text-emerald-600 mb-4">
                {score}/{quizData.questions.length}
              </div>
              <p className="text-xl mb-6">
                {score === quizData.questions.length
                  ? "Perfect score! Excellent work!"
                  : score >= quizData.questions.length * 0.8
                    ? "Great job! You have a strong understanding of this surah's vocabulary."
                    : score >= quizData.questions.length * 0.6
                      ? "Good effort! Keep studying to improve your knowledge."
                      : "Keep practicing! You'll improve with more study."}
              </p>

              <div className="mb-6 border rounded-lg overflow-hidden">
                <div className="text-sm font-medium text-left bg-gray-100 dark:bg-gray-800 p-2">
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-8">Word</div>
                    <div className="col-span-4 text-center">Result</div>
                  </div>
                </div>
                <div className="divide-y">
                  {questionResults.map((result, index) => {
                    const question = quizData.questions.find((q) => q.id === result.questionId)
                    return (
                      <div key={index} className="text-sm p-2">
                        <div className="grid grid-cols-12 gap-2 items-center">
                          <div className="col-span-8 font-arabic text-right text-lg">{question?.arabic}</div>
                          <div className="col-span-4 text-center">
                            {result.correct ? (
                              <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                            ) : (
                              <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-col space-y-4">
                <Button
                  onClick={resetQuiz}
                  className="bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center"
                >
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Retry Quiz
                </Button>

                <Link href="/quizzes/surah">
                  <Button variant="outline" className="w-full">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Surah Quizzes
                  </Button>
                </Link>

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
