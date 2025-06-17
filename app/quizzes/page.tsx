"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import {
  ArrowLeft,
  CheckCircle,
  Home,
  XCircle,
  RefreshCw,
  BookOpen,
  Tag,
  Clock,
  Trophy,
  Repeat,
  MapPin,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { vocabularyService } from "@/services/vocabulary-service"

// Constants for quiz configuration
const WORDS_PER_SESSION = 10 // Number of questions per session
const TOTAL_WORDS_TO_USE = 400 // Total words to use from dictionary
const MAX_TIME_PER_QUESTION = 30 // Maximum time allowed per question in seconds
const BASE_POINTS_PER_CORRECT = 100 // Base points for a correct answer
const TIME_BONUS_MULTIPLIER = 3 // Points per second saved

// Function to generate random quiz questions from vocabulary
const generateRandomQuizQuestions = (startIndex = 0, wordsPerSession = WORDS_PER_SESSION) => {
  const allWords = vocabularyService.getAllWords()
  const shuffledWords = [...allWords].sort(() => 0.5 - Math.random())

  // Select words for this session, starting from startIndex
  const selectedWords = shuffledWords.slice(0, TOTAL_WORDS_TO_USE).slice(startIndex, startIndex + wordsPerSession)

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
      word: word, // Store the original word for reference
    }
  })
}

// Calculate points for a correct answer based on time taken
const calculatePoints = (isCorrect: boolean, timeSpent: number) => {
  if (!isCorrect) return 0

  // Base points for correct answer
  const points = BASE_POINTS_PER_CORRECT

  // Add time bonus (more points for faster answers)
  const timeRemaining = Math.max(0, MAX_TIME_PER_QUESTION - timeSpent)
  const timeBonus = timeRemaining * TIME_BONUS_MULTIPLIER

  return points + timeBonus
}

export default function QuizzesPage() {
  const [quizQuestions, setQuizQuestions] = useState(() => generateRandomQuizQuestions())
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [score, setScore] = useState(0) // Number of correct answers
  const [points, setPoints] = useState(0) // Point-based score
  const [quizCompleted, setQuizCompleted] = useState(false)
  const [timeLeft, setTimeLeft] = useState(MAX_TIME_PER_QUESTION)
  const [showQuizOptions, setShowQuizOptions] = useState(true)
  const [questionStartTime, setQuestionStartTime] = useState(0)
  const [questionResults, setQuestionResults] = useState<
    Array<{
      correct: boolean
      timeSpent: number
      points: number
      word: string
    }>
  >([])

  // New state for tracking progress through the full quiz
  const [currentSession, setCurrentSession] = useState(1)
  const [totalSessions, setTotalSessions] = useState(Math.ceil(TOTAL_WORDS_TO_USE / WORDS_PER_SESSION))
  const [overallScore, setOverallScore] = useState(0)
  const [overallPoints, setOverallPoints] = useState(0)
  const [sessionScores, setSessionScores] = useState<number[]>([])
  const [currentStartIndex, setCurrentStartIndex] = useState(0)
  const [totalTimeSpent, setTotalTimeSpent] = useState(0)
  const [sessionTimeSpent, setSessionTimeSpent] = useState(0)

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / quizQuestions.length) * 100
  const overallProgress =
    (((currentSession - 1) * WORDS_PER_SESSION + currentQuestionIndex + 1) / TOTAL_WORDS_TO_USE) * 100

  useEffect(() => {
    if (!isAnswered && !quizCompleted && !showQuizOptions) {
      // Set the start time when a new question is shown
      if (questionStartTime === 0) {
        setQuestionStartTime(Date.now())
      }

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
  }, [isAnswered, quizCompleted, showQuizOptions, questionStartTime])

  const handleOptionSelect = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOption(optionId)
    }
  }

  const handleSubmit = () => {
    // Calculate time spent on this question
    const timeSpent =
      questionStartTime > 0
        ? Math.min(MAX_TIME_PER_QUESTION, (Date.now() - questionStartTime) / 1000)
        : MAX_TIME_PER_QUESTION

    // Update total time spent
    setSessionTimeSpent((prev) => prev + timeSpent)

    const isCorrect = selectedOption === currentQuestion.correctAnswer

    // Calculate points for this question
    const earnedPoints = calculatePoints(isCorrect, timeSpent)

    // Store the result for this question
    setQuestionResults((prev) => [
      ...prev,
      {
        correct: isCorrect,
        timeSpent,
        points: earnedPoints,
        word: currentQuestion.word.arabic,
      },
    ])

    if (isCorrect) {
      setScore(score + 1)
    }

    // Add points
    setPoints(points + earnedPoints)

    setIsAnswered(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setSelectedOption(null)
      setIsAnswered(false)
      setTimeLeft(MAX_TIME_PER_QUESTION)
      setQuestionStartTime(0) // Reset start time for next question
    } else {
      // Session completed
      setQuizCompleted(true)

      // Update total time spent
      setTotalTimeSpent((prev) => prev + sessionTimeSpent)

      // Update session scores
      const newSessionScores = [...sessionScores]
      newSessionScores[currentSession - 1] = score
      setSessionScores(newSessionScores)

      // Update overall score and points
      setOverallScore(overallScore + score)
      setOverallPoints(overallPoints + points)
    }
  }

  const startNextSession = () => {
    // Move to the next session
    const nextSession = currentSession + 1
    const nextStartIndex = currentStartIndex + WORDS_PER_SESSION

    if (nextSession <= totalSessions) {
      setCurrentSession(nextSession)
      setCurrentStartIndex(nextStartIndex)
      setQuizQuestions(generateRandomQuizQuestions(nextStartIndex))
      setCurrentQuestionIndex(0)
      setSelectedOption(null)
      setIsAnswered(false)
      setScore(0)
      setPoints(0)
      setQuestionResults([])
      setSessionTimeSpent(0)
      setQuizCompleted(false)
      setTimeLeft(MAX_TIME_PER_QUESTION)
      setQuestionStartTime(0)
    } else {
      // All sessions completed - could navigate to a final results page
      // For now, just reset to the quiz options
      setShowQuizOptions(true)
    }
  }

  const resetQuiz = () => {
    // Reset current session
    setQuizQuestions(generateRandomQuizQuestions(currentStartIndex))
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setPoints(0)
    setQuestionResults([])
    setSessionTimeSpent(0)
    setQuizCompleted(false)
    setTimeLeft(MAX_TIME_PER_QUESTION)
    setQuestionStartTime(0)
  }

  const startNewQuiz = () => {
    // Reset everything and start from the beginning
    setCurrentSession(1)
    setCurrentStartIndex(0)
    setOverallScore(0)
    setOverallPoints(0)
    setSessionScores([])
    setTotalTimeSpent(0)
    setQuizQuestions(generateRandomQuizQuestions(0))
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setScore(0)
    setPoints(0)
    setQuestionResults([])
    setSessionTimeSpent(0)
    setQuizCompleted(false)
    setTimeLeft(MAX_TIME_PER_QUESTION)
    setQuestionStartTime(0)
  }

  const startGeneralQuiz = () => {
    setShowQuizOptions(false)
    startNewQuiz()
  }

  // Format time in minutes and seconds
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  // Format points to remove decimal places
  const formatPoints = (pts: number) => {
    return Math.round(pts)
  }

return (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
    <header className="bg-emerald-800 text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Quranic Quizzes</h1>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* General Quiz Card */}
          <Card className="border-emerald-200 bg-emerald-50">
            <CardHeader>
              <CardTitle className="text-emerald-800">General Quiz</CardTitle>
              <CardDescription>Test your knowledge of vocabulary words from the entire Quranic dictionary</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Covers {TOTAL_WORDS_TO_USE} words in {totalSessions} sessions.
              </p>
            </CardContent>
            <CardFooter>
              <Button 
                onClick={startGeneralQuiz} 
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                Start General Quiz
              </Button>
            </CardFooter>
          </Card>

          {/* Surah-Specific Quiz Card */}
          <Card className="border-blue-200 bg-blue-50">
            <CardHeader>
              <CardTitle className="text-blue-800">Surah-Specific Quiz</CardTitle>
              <CardDescription>Focus on vocabulary from a specific Surah</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Learn words from individual chapters of the Quran.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/quizzes/surah" className="w-full">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse Surah Quizzes
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Category Quiz Card */}
          <Card className="border-purple-200 bg-purple-50">
            <CardHeader>
              <CardTitle className="text-purple-800">Category Quiz</CardTitle>
              <CardDescription>Vocabulary organized by categories</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Divine attributes, prophets, ethics, afterlife, and more.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/quizzes/categories" className="w-full">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Tag className="mr-2 h-4 w-4" />
                  Browse Categories
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Reverse Word Quiz Card */}
          <Card className="border-amber-200 bg-amber-50">
            <CardHeader>
              <CardTitle className="text-amber-800 flex items-center gap-2">
                Reverse Word Quiz
                <span className="bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </span>
              </CardTitle>
              <CardDescription>Challenge yourself with English meanings</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Select the correct Arabic word for given English meanings.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/quizzes/reverse" className="w-full">
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  <Repeat className="mr-2 h-4 w-4" />
                  Start Reverse Quiz
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Hijra Journey Quiz Card */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Hijra Journey Quiz
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </span>
              </CardTitle>
              <CardDescription>The Prophet's migration from Mecca to Medina</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Key events, locations, and Quranic references.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/hijra/quiz" className="w-full">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <MapPin className="mr-2 h-4 w-4" />
                  Start Hijra Quiz
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Back to Home Button */}
          <div className="md:col-span-3">
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
            <div className="mb-2">
              <div className="flex justify-between mb-1 text-sm text-gray-600 dark:text-gray-400">
                <span>Session progress:</span>
                <span>
                  {currentQuestionIndex + 1} of {quizQuestions.length}
                </span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            <div className="mb-4">
              <div className="flex justify-between mb-1 text-sm text-gray-600 dark:text-gray-400">
                <span>Overall progress:</span>
                <span>
                  Session {currentSession} of {totalSessions}
                </span>
              </div>
              <Progress value={overallProgress} className="h-2 bg-emerald-100 dark:bg-emerald-900" />
              <div className="flex justify-between mt-1 text-sm text-gray-600 dark:text-gray-400">
                <span>
                  Word {(currentSession - 1) * WORDS_PER_SESSION + currentQuestionIndex + 1} of {TOTAL_WORDS_TO_USE}
                </span>
                <span className="flex items-center">
                  <Clock className="h-3 w-3 mr-1" /> {timeLeft}s
                </span>
              </div>
            </div>

            {/* Add the statistics card here */}
            <div className="mb-4 p-3 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
              <p className="text-sm text-emerald-800 dark:text-emerald-200">
                <span className="font-medium">Quiz Stats:</span> This comprehensive quiz covers {TOTAL_WORDS_TO_USE}{" "}
                words from a total of 403 words in our dictionary ({((TOTAL_WORDS_TO_USE / 403) * 100).toFixed(2)}%).
                You're currently in session {currentSession} of {totalSessions}.
              </p>
              <p className="text-sm text-emerald-800 dark:text-emerald-200 mt-1">
                <span className="font-medium">Scoring:</span> Earn {BASE_POINTS_PER_CORRECT} points for each correct
                answer plus {TIME_BONUS_MULTIPLIER} points for each second saved!
              </p>
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
                    {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "Complete Session"}
                  </Button>
                )}
              </CardFooter>
            </Card>
          </>
        ) : (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {currentSession === totalSessions ? "Quiz Completed!" : "Session Completed!"}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex justify-center items-center gap-4 mb-4">
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">Accuracy</div>
                  <div className="text-4xl font-bold text-emerald-600">
                    {score}/{quizQuestions.length}
                  </div>
                  <div className="text-sm text-gray-500">{Math.round((score / quizQuestions.length) * 100)}%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-gray-500 mb-1">Points</div>
                  <div className="text-4xl font-bold text-emerald-600">{formatPoints(points)}</div>
                  <div className="text-sm text-gray-500">
                    <Clock className="inline h-3 w-3 mr-1" />
                    {formatTime(sessionTimeSpent)}
                  </div>
                </div>
              </div>

              <p className="mb-4">
                {score === quizQuestions.length
                  ? "Perfect score! Excellent work!"
                  : score >= quizQuestions.length * 0.7
                    ? "Great job! You're making good progress."
                    : "Keep practicing! You'll improve with time."}
              </p>

              {/* Question Results Table */}
              <div className="mb-6 border rounded-lg overflow-hidden">
                <div className="text-sm font-medium text-left bg-gray-100 dark:bg-gray-800 p-2">
                  <div className="grid grid-cols-12 gap-2">
                    <div className="col-span-5">Word</div>
                    <div className="col-span-3 text-center">Result</div>
                    <div className="col-span-2 text-center">Time</div>
                    <div className="col-span-2 text-center">Points</div>
                  </div>
                </div>
                <div className="divide-y">
                  {questionResults.map((result, index) => (
                    <div key={index} className="text-sm p-2">
                      <div className="grid grid-cols-12 gap-2 items-center">
                        <div className="col-span-5 font-arabic text-right">{result.word}</div>
                        <div className="col-span-3 text-center">
                          {result.correct ? (
                            <CheckCircle className="h-4 w-4 text-green-500 mx-auto" />
                          ) : (
                            <XCircle className="h-4 w-4 text-red-500 mx-auto" />
                          )}
                        </div>
                        <div className="col-span-2 text-center">{result.timeSpent.toFixed(1)}s</div>
                        <div className="col-span-2 text-center">{formatPoints(result.points)}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {currentSession < totalSessions ? (
                <div className="mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    You've completed session {currentSession} of {totalSessions}.
                  </p>
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 text-amber-500 mr-1" />
                      <span className="font-medium">Total points: {formatPoints(overallPoints + points)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-blue-500 mr-1" />
                      <span>Total time: {formatTime(totalTimeSpent + sessionTimeSpent)}</span>
                    </div>
                  </div>
                  <Progress
                    value={(currentSession / totalSessions) * 100}
                    className="h-2 mb-4 bg-emerald-100 dark:bg-emerald-900"
                  />
                </div>
              ) : (
                <div className="mb-6">
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Congratulations! You've completed all {totalSessions} sessions!
                  </p>
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <div className="flex items-center">
                      <Trophy className="h-4 w-4 text-amber-500 mr-1" />
                      <span className="font-medium">Final points: {formatPoints(overallPoints + points)}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-blue-500 mr-1" />
                      <span>Total time: {formatTime(totalTimeSpent + sessionTimeSpent)}</span>
                    </div>
                  </div>
                  <Progress value={100} className="h-2 mb-4 bg-emerald-100 dark:bg-emerald-900" />
                </div>
              )}

              <div className="flex flex-col space-y-4">
                {currentSession < totalSessions ? (
                  <Button
                    onClick={startNextSession}
                    className="bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center"
                  >
                    Continue to Session {currentSession + 1}
                  </Button>
                ) : (
                  <Button
                    onClick={startNewQuiz}
                    className="bg-emerald-600 hover:bg-emerald-700 flex items-center justify-center"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Start New Quiz
                  </Button>
                )}

                <Button onClick={resetQuiz} variant="outline" className="w-full">
                  Retry This Session
                </Button>

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
