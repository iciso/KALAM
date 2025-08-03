"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Home, BookOpen, Check, X, HelpCircle, ChevronRight, ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { SurahQuizData } from "@/data/surah-quiz-data"

interface SurahQuizProps {
  quizData: SurahQuizData & {
    additionalContextElements?: {
      title: string
      content: string
    }[]
  }
}

export default function SurahQuiz({ quizData }: SurahQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)
  const [score, setScore] = useState(0)
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [showIntroduction, setShowIntroduction] = useState(true)
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set<string>())
  const [userAnswers, setUserAnswers] = useState<Map<string, string>>(new Map())
  const [error, setError] = useState<string | null>(null)

  // Log quizData for debugging
  useEffect(() => {
    console.log("Quiz Data:", quizData)
    console.log("Questions Length:", quizData.questions.length)
  }, [quizData])

  // Handle errors in quizData access
  if (!quizData || !quizData.questions || quizData.questions.length === 0) {
    console.error("Invalid quiz data:", quizData)
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
        <div className="container mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Error</CardTitle>
              <CardDescription>Unable to load quiz data for Surah {quizData?.surahName || "Unknown"}.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Please try again later or contact support.</p>
            </CardContent>
            <CardFooter>
              <Link href="/quizzes/surah">
                <Button>Back to Surah Quizzes</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    )
  }

  const currentQuestion = quizData.questions[currentQuestionIndex]

  // Function to shuffle options
  const shuffleArray = <T>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  // Shuffle options for the current question
  const shuffledOptions = shuffleArray(currentQuestion.options)

  // Restore previous answer when navigating to a question
  useEffect(() => {
    const previousAnswer = userAnswers.get(currentQuestion.id)
    if (previousAnswer) {
      setSelectedOption(previousAnswer)
      const selectedOptionObj = currentQuestion.options.find((option) => option.id === previousAnswer)
      setIsCorrect(selectedOptionObj?.isCorrect || false)
      setShowExplanation(answeredQuestions.has(currentQuestion.id))
    } else {
      setSelectedOption(null)
      setIsCorrect(null)
      setShowExplanation(false)
    }
  }, [currentQuestion.id, userAnswers, answeredQuestions])

  const handleOptionSelect = (optionId: string) => {
    if (selectedOption !== null) return // Prevent changing answer in current view
    if (answeredQuestions.has(currentQuestion.id)) return // Prevent re-answering

    try {
      setSelectedOption(optionId)
      setUserAnswers((prev) => new Map(prev).set(currentQuestion.id, optionId))
      const selectedOptionObj = currentQuestion.options.find((option) => option.id === optionId)
      const correct = selectedOptionObj?.isCorrect || false
      setIsCorrect(correct)
      if (correct) {
        setScore((prev) => prev + 1)
      }
      setAnsweredQuestions((prev) => new Set(prev).add(currentQuestion.id))
      console.log(`Selected option ${optionId} for question ${currentQuestion.id}, Score: ${score + (correct ? 1 : 0)}`)
    } catch (err) {
      console.error("Error in handleOptionSelect:", err)
      setError("An error occurred while processing your answer. Please try again.")
    }
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setQuizCompleted(true)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    }
  }

  const resetQuiz = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsCorrect(null)
    setShowExplanation(false)
    setScore(0)
    setQuizCompleted(false)
    setShowIntroduction(true)
    setAnsweredQuestions(new Set())
    setUserAnswers(new Map())
    setError(null)
  }

  const startQuiz = () => {
    setShowIntroduction(false)
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

  // Calculate percentage score
  const percentageScore = Math.round((score / quizData.questions.length) * 100)

  // Get score color
  const getScoreColor = () => {
    if (percentageScore >= 80) {
      return "text-green-600 dark:text-green-400"
    } else if (percentageScore >= 60) {
      return "text-amber-600 dark:text-amber-400"
    } else {
      return "text-red-600 dark:text-red-400"
    }
  }

  // Function to render theological significance for specific surahs
  const renderTheologicalSignificance = () => {
    if (quizData.surahId === 112) {
      return (
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Theological Significance</h3>
          <p className="text-blue-700 dark:text-blue-200 mb-3">
            Surah Al-Ikhlas is the cornerstone of Tawheed (Islamic monotheism) and establishes the fundamental concept
            of Allah's oneness that distinguishes Islam from all other religions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-1">Tawheed ar-Rububiyyah</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Oneness of Lordship: Allah is the only creator and sustainer of all that exists
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-1">Tawheed al-Uluhiyyah</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Oneness of Worship: Allah alone deserves to be worshipped
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 className="font-medium text-blue-700 dark:text-blue-300 mb-1">Tawheed al-Asma wa al-Sifat</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Oneness of Names and Attributes: Allah's attributes are unique and incomparable
              </p>
            </div>
          </div>
        </div>
      )
    } else if (quizData.surahId === 111) {
      return (
        <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 className="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Prophetic Miracle</h3>
          <p className="text-amber-700 dark:text-amber-200 mb-3">
            Surah Al-Masad contains a remarkable prophecy that demonstrates the divine origin of the Quran. The surah
            predicted that Abu Lahab would die in disbelief and enter Hellfire - a bold claim made while he was still
            alive.
          </p>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 className="font-medium text-amber-700 dark:text-amber-300 mb-1">The Unfalsified Prophecy</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Abu Lahab lived for approximately ten years after this surah was revealed. During this time, he could have
              easily attempted to falsify the Quranic prophecy by simply declaring faith in Islam, even insincerely.
              However, he never did so, which would have potentially challenged the prophecy about his destiny in
              Hellfire.
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 className="font-medium text-amber-700 dark:text-amber-300 mb-1">Historical Context</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Abu Lahab (Abd al-Uzza ibn Abdul-Muttalib) was the Prophet Muhammad's uncle and one of his most vehement
              opponents. Despite their blood relation, Abu Lahab and his wife actively persecuted the Prophet and the
              early Muslims, placing thorns in the Prophet's path and using their wealth and influence to oppose the
              message of Islam.
            </p>
          </div>
        </div>
      )
    }
    return null
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
        <div className="container mx-auto max-w-2xl">
          <Card>
            <CardHeader>
              <CardTitle>Error</CardTitle>
              <CardDescription>An error occurred in the Surah {quizData.surahName} quiz.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{error}</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={resetQuiz}>
                Restart Quiz
              </Button>
              <Link href="/quizzes/surah">
                <Button>Back to Surah Quizzes</Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
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
        <div className="max-w-2xl mx-auto">
          {showIntroduction ? (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl flex items-center gap-2">
                      <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm flex items-center justify-center">
                        {quizData.surahId}
                      </span>
                      Surah {quizData.surahName}
                    </CardTitle>
                    <CardDescription className="font-arabic text-2xl mt-1">{quizData.surahArabicName}</CardDescription>
                  </div>
                  <div className="flex flex-col gap-2 items-end">
                    <Badge className={getTypeColor(quizData.type)}>{quizData.type}</Badge>
                    <Badge className={getDifficultyColor(quizData.difficulty)}>{quizData.difficulty}</Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>{quizData.totalVerses} verses</span>
                  <span>{quizData.questions.length} vocabulary words</span>
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <h3 className="text-lg font-semibold mb-2">About This Surah</h3>
                  <p>{quizData.introduction}</p>

                  {quizData.additionalContextElements &&
                    quizData.additionalContextElements.map((element, index) => (
                      <div key={index} dangerouslySetInnerHTML={{ __html: element.content }} />
                    ))}

                  {renderTheologicalSignificance()}

                  <h3 className="text-lg font-semibold mt-6 mb-2">Quiz Instructions</h3>
                  <p>
                    This quiz contains {quizData.questions.length} questions testing your knowledge of key vocabulary
                    from Surah {quizData.surahName}. Select the correct meaning for each Arabic word or phrase.
                  </p>
                  <ul className="list-disc pl-5 mt-2">
                    <li>Read each question carefully</li>
                    <li>Select the option you believe is correct</li>
                    <li>Review the explanation to deepen your understanding</li>
                    <li>Your final score will be displayed at the end</li>
                  </ul>
                </div>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button onClick={startQuiz} className="bg-emerald-600 hover:bg-emerald-700">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Start Quiz
                </Button>
              </CardFooter>
            </Card>
          ) : quizCompleted ? (
            <Card>
              <CardHeader>
                <CardTitle>Quiz Completed!</CardTitle>
                <CardDescription>You've completed the Surah {quizData.surahName} vocabulary quiz.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-6">
                  <div className="text-5xl font-bold mb-2 flex justify-center items-center">
                    <span className={getScoreColor()}>
                      {score}/{quizData.questions.length}
                    </span>
                  </div>
                  <p className={`text-xl ${getScoreColor()}`}>{percentageScore}%</p>
                  <div className="mt-6 max-w-md mx-auto">
                    {percentageScore >= 80 ? (
                      <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-lg p-4 text-green-800 dark:text-green-200">
                        <h3 className="font-semibold mb-1">Excellent!</h3>
                        <p className="text-sm">
                          You have a strong understanding of the vocabulary in Surah {quizData.surahName}. Keep up the
                          good work!
                        </p>
                      </div>
                    ) : percentageScore >= 60 ? (
                      <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-100 dark:border-amber-800 rounded-lg p-4 text-amber-800 dark:text-amber-200">
                        <h3 className="font-semibold mb-1">Good effort!</h3>
                        <p className="text-sm">
                          You have a decent grasp of the vocabulary in Surah {quizData.surahName}. Review the words you
                          missed and try again.
                        </p>
                      </div>
                    ) : (
                      <div className="bg-red-50 dark:bg-red-900/20 border border-red-100 dark:border-red-800 rounded-lg p-4 text-red-800 dark:text-red-200">
                        <h3 className="font-semibold mb-1">Keep practicing!</h3>
                        <p className="text-sm">
                          You might need more practice with the vocabulary in Surah {quizData.surahName}. Review the
                          words and try again.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={resetQuiz}>
                  Restart Quiz
                </Button>
                <Link href="/quizzes/surah">
                  <Button>Back to Surah Quizzes</Button>
                </Link>
              </CardFooter>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>
                      Question {currentQuestionIndex + 1} of {quizData.questions.length}
                    </CardTitle>
                    <CardDescription>Surah {quizData.surahName} Vocabulary Quiz</CardDescription>
                  </div>
                  <div className="text-sm font-medium">
                    Score: {score}/{answeredQuestions.size}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <h3 className="text-lg font-medium mb-2">{currentQuestion.question}</h3>
                  <div className="text-center">
                    <p className="text-3xl font-arabic mb-2">{currentQuestion.arabic}</p>
                    {currentQuestion.rootLetters && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 font-arabic">
                        Root letters: {currentQuestion.rootLetters}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-3">
                  {shuffledOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => handleOptionSelect(option.id)}
                      className={`w-full text-left p-3 rounded-lg border transition-colors ${
                        selectedOption === option.id
                          ? option.isCorrect
                            ? "bg-green-100 border-green-300 dark:bg-green-900/30 dark:border-green-700"
                            : "bg-red-100 border-red-300 dark:bg-red-900/30 dark:border-red-700"
                          : "bg-white border-gray-200 hover:bg-gray-50 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-750"
                      }`}
                      disabled={answeredQuestions.has(currentQuestion.id)}
                    >
                      <div className="flex justify-between items-center">
                        <span>
                          <span className="font-medium mr-2">{option.id.toUpperCase()}.</span>
                          {option.text}
                        </span>
                        {selectedOption === option.id && (
                          <span>
                            {option.isCorrect ? (
                              <Check className="h-5 w-5 text-green-600 dark:text-green-400" />
                            ) : (
                              <X className="h-5 w-5 text-red-600 dark:text-red-400" />
                            )}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {selectedOption !== null && !showExplanation && currentQuestion.explanation && (
                  <div className="mt-4 flex justify-center">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowExplanation(true)}
                      className="text-blue-600 dark:text-blue-400"
                    >
                      <HelpCircle className="h-4 w-4 mr-1" />
                      Show Explanation
                    </Button>
                  </div>
                )}

                {showExplanation && currentQuestion.explanation && (
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
                    <h4 className="font-medium text-blue-800 dark:text-blue-300 mb-1">Explanation:</h4>
                    <p className="text-blue-700 dark:text-blue-200">{currentQuestion.explanation}</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <Button
                  onClick={handleNextQuestion}
                  disabled={selectedOption === null}
                  className={isCorrect !== null ? "bg-emerald-600 hover:bg-emerald-700" : ""}
                >
                  {currentQuestionIndex < quizData.questions.length - 1 ? (
                    <>
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </>
                  ) : (
                    "Finish Quiz"
                  )}
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
      </main>
    </div>
  )
}
