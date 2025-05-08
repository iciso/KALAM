"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, CheckCircle, Home, XCircle, RefreshCw, Trophy, Clock, Info } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { vocabularyService } from "@/services/vocabulary-service"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { IlmMeter } from "@/components/score"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"

// Function to generate quiz questions from vocabulary for a specific Surah
const generateSurahQuizQuestions = (surahNumber: number, questionsPerSession = 10, includeAdditionalWords = true) => {
  // Get words specific to this surah
  const surahWords = vocabularyService.getWordsBySurah(surahNumber)

  // If we have enough words in the surah or don't want additional words, just use surah words
  if (surahWords.length >= questionsPerSession || !includeAdditionalWords) {
    // Shuffle all words from the surah
    const shuffledWords = [...surahWords].sort(() => 0.5 - Math.random())

    // Take up to questionsPerSession words, or all available if fewer
    const wordCount = Math.min(questionsPerSession, surahWords.length)
    const selectedWords = shuffledWords.slice(0, wordCount)

    return createQuizQuestions(selectedWords, true)
  } else {
    // We need additional words from the dictionary
    const allWords = vocabularyService.getAllWords()

    // Filter out words that are already in the surah
    const surahWordIds = new Set(surahWords.map((word) => word.id))
    const additionalWords = allWords.filter((word) => !surahWordIds.has(word.id)).sort(() => 0.5 - Math.random())

    // Calculate how many additional words we need
    const additionalWordsNeeded = questionsPerSession - surahWords.length

    // Select additional words
    const selectedAdditionalWords = additionalWords.slice(0, additionalWordsNeeded)

    // Combine surah words with additional words
    const combinedWords = [
      ...surahWords.map((word) => ({ ...word, fromSurah: true })),
      ...selectedAdditionalWords.map((word) => ({ ...word, fromSurah: false })),
    ].sort(() => 0.5 - Math.random())

    return createQuizQuestions(combinedWords)
  }
}

// Helper function to create quiz questions from a list of words
const createQuizQuestions = (words, allFromSurah = false) => {
  const allWords = vocabularyService.getAllWords()

  return words.map((word, index) => {
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
        id: word.id,
        arabic: word.arabic,
        transliteration: word.transliteration,
        meaning: word.meanings[0],
        fromSurah: word.fromSurah !== undefined ? word.fromSurah : allFromSurah,
      },
    }
  })
}

// Format time in mm:ss format
const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs.toString().padStart(2, "0")}`
}

// Format points to remove decimal places
const formatPoints = (points: number): string => {
  return Math.round(points).toString()
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

  // New state variables for enhanced quiz experience
  const [currentSession, setCurrentSession] = useState(1)
  const [totalSessions, setTotalSessions] = useState(1)
  const [sessionScore, setSessionScore] = useState(0)
  const [totalPoints, setTotalPoints] = useState(0)
  const [questionStartTime, setQuestionStartTime] = useState(0)
  const [questionTimes, setQuestionTimes] = useState<number[]>([])
  const [questionPoints, setQuestionPoints] = useState<number[]>([])
  const [questionResults, setQuestionResults] = useState<boolean[]>([])
  const [totalQuizTime, setTotalQuizTime] = useState(0)
  const [sessionTime, setSessionTime] = useState(0)
  const [sessionStartTime, setSessionStartTime] = useState(0)
  const [surahWordCount, setSurahWordCount] = useState(0)
  const [questionsPerSession, setQuestionsPerSession] = useState(10)
  const [allSurahQuestions, setAllSurahQuestions] = useState<any[][]>([])
  const [currentQuestionWords, setCurrentQuestionWords] = useState<string[]>([])
  const [includeAdditionalWords, setIncludeAdditionalWords] = useState(true)

  const allSurahs = vocabularyService.getAllSurahs()

  // Get the actual total word count from the service
  const totalDictionaryWords = vocabularyService.getTotalWordCount()

  // Get the actual count of words with Surah associations
  const totalSurahWords = vocabularyService.getWordsWithSurahCount()

  // Calculate the actual coverage percentage
  const dictionaryCoveragePercentage = vocabularyService.getSurahCoveragePercentage()

  const currentQuestion = quizQuestions[currentQuestionIndex]
  const progress = quizQuestions.length > 0 ? ((currentQuestionIndex + 1) / quizQuestions.length) * 100 : 0

  // Timer for session duration
  useEffect(() => {
    if (quizStarted && !quizCompleted) {
      const interval = setInterval(() => {
        setSessionTime(Math.floor((Date.now() - sessionStartTime) / 1000))
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [quizStarted, quizCompleted, sessionStartTime])

  // Timer for question countdown
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

  // Initialize quiz when surah is selected
  useEffect(() => {
    if (selectedSurah && !quizStarted) {
      const surahWords = vocabularyService.getWordsBySurah(selectedSurah)
      setSurahWordCount(surahWords.length)

      // Determine how many sessions we need
      const sessionsNeeded = Math.ceil(surahWords.length / questionsPerSession)
      setTotalSessions(sessionsNeeded)

      // Generate all questions for all sessions
      const allQuestions: any[][] = []
      for (let i = 0; i < sessionsNeeded; i++) {
        // For the last session, we might have fewer questions
        const sessionQuestions = generateSurahQuizQuestions(selectedSurah, questionsPerSession, includeAdditionalWords)
        allQuestions.push(sessionQuestions)
      }
      setAllSurahQuestions(allQuestions)

      // Set the first session's questions
      if (allQuestions.length > 0) {
        setQuizQuestions(allQuestions[0])
      }

      // Track which words have been used
      const usedWords = new Set<string>()
      allQuestions.flat().forEach((q) => usedWords.add(q.wordInfo.id))
      setCurrentQuestionWords(Array.from(usedWords))
    }
  }, [selectedSurah, quizStarted, questionsPerSession, includeAdditionalWords])

  const handleSurahSelect = (value: string) => {
    const surahNumber = Number.parseInt(value, 10)
    setSelectedSurah(surahNumber)
    resetQuizState()
  }

  const resetQuizState = () => {
    setQuizStarted(false)
    setQuizCompleted(false)
    setScore(0)
    setTotalPoints(0)
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setShowExplanation(false)
    setCurrentSession(1)
    setSessionScore(0)
    setQuestionTimes([])
    setQuestionPoints([])
    setQuestionResults([])
    setTotalQuizTime(0)
    setSessionTime(0)
  }

  const startQuiz = () => {
    if (selectedSurah && quizQuestions.length > 0) {
      setQuizStarted(true)
      setTimeLeft(30)
      setSessionStartTime(Date.now())
      setQuestionStartTime(Date.now())
    }
  }

  const handleOptionSelect = (optionId: string) => {
    if (!isAnswered) {
      setSelectedOption(optionId)
    }
  }

  const handleSubmit = () => {
    if (currentQuestion) {
      const endTime = Date.now()
      const timeSpent = (endTime - questionStartTime) / 1000 // in seconds
      setQuestionTimes([...questionTimes, timeSpent])

      const isCorrect = selectedOption === currentQuestion.correctAnswer
      setQuestionResults([...questionResults, isCorrect])

      // Calculate points: 100 base points for correct answer + time bonus
      let pointsEarned = 0
      if (isCorrect) {
        setScore(score + 1)
        setSessionScore(sessionScore + 1)

        // Time bonus: 3 points for each second saved (from 30 second limit)
        const timeBonus = Math.max(0, (30 - timeSpent) * 3)
        pointsEarned = 100 + timeBonus
      }

      setQuestionPoints([...questionPoints, pointsEarned])
      setTotalPoints(totalPoints + pointsEarned)
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
      setQuestionStartTime(Date.now())
    } else {
      // Session completed
      setQuizCompleted(true)
      setTotalQuizTime(totalQuizTime + sessionTime)
    }
  }

  const startNextSession = () => {
    if (currentSession < totalSessions) {
      const nextSession = currentSession + 1
      setCurrentSession(nextSession)
      setQuizQuestions(allSurahQuestions[nextSession - 1])
      setCurrentQuestionIndex(0)
      setSelectedOption(null)
      setIsAnswered(false)
      setQuizCompleted(false)
      setSessionScore(0)
      setTimeLeft(30)
      setShowExplanation(false)
      setSessionTime(0)
      setSessionStartTime(Date.now())
      setQuestionStartTime(Date.now())
    }
  }

  const resetSession = () => {
    setCurrentQuestionIndex(0)
    setSelectedOption(null)
    setIsAnswered(false)
    setSessionScore(0)
    setQuizCompleted(false)
    setTimeLeft(30)
    setShowExplanation(false)
    setSessionTime(0)
    setSessionStartTime(Date.now())
    setQuestionStartTime(Date.now())
  }

  const startNewQuiz = () => {
    if (selectedSurah) {
      resetQuizState()
      const surahWords = vocabularyService.getWordsBySurah(selectedSurah)
      setSurahWordCount(surahWords.length)

      // Regenerate all questions for all sessions
      const sessionsNeeded = Math.ceil(surahWords.length / questionsPerSession)
      setTotalSessions(sessionsNeeded)

      const allQuestions: any[][] = []
      for (let i = 0; i < sessionsNeeded; i++) {
        const sessionQuestions = generateSurahQuizQuestions(selectedSurah, questionsPerSession, includeAdditionalWords)
        allQuestions.push(sessionQuestions)
      }
      setAllSurahQuestions(allQuestions)

      if (allQuestions.length > 0) {
        setQuizQuestions(allQuestions[0])
      }

      // Track which words have been used
      const usedWords = new Set<string>()
      allQuestions.flat().forEach((q) => usedWords.add(q.wordInfo.id))
      setCurrentQuestionWords(Array.from(usedWords))

      setQuizStarted(true)
      setSessionStartTime(Date.now())
      setQuestionStartTime(Date.now())
    }
  }

  const toggleExplanation = () => {
    setShowExplanation(!showExplanation)
  }

  const getSurahName = (surahNumber: number) => {
    const surah = allSurahs.find((s) => s.number === surahNumber)
    return surah ? surah.name : `Surah ${surahNumber}`
  }

  // Calculate the total words being used across all sessions
  const totalWordsInQuiz = currentQuestionWords.length
  const percentageOfDictionary = (totalWordsInQuiz / totalDictionaryWords) * 100
  const percentageOfSurah = surahWordCount > 0 ? (totalWordsInQuiz / surahWordCount) * 100 : 0

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
              {/* Dictionary Coverage Stats */}
              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800 mb-4">
                <h3 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2 flex items-center justify-center">
                  <Info className="h-4 w-4 mr-1" />
                  Quranic Vocabulary Coverage
                </h3>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  <p className="mb-1">
                    Our database contains <span className="font-medium">{totalDictionaryWords}</span> words from the
                    Quran.
                  </p>
                  <p className="mb-1">
                    <span className="font-medium">{totalSurahWords}</span> unique words are integrated across all Surahs
                    (<span className="font-medium">{dictionaryCoveragePercentage.toFixed(1)}%</span> of our dictionary).
                  </p>
                  <div className="mt-2">
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-500 rounded-full"
                        style={{ width: `${dictionaryCoveragePercentage}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs mt-1">
                      <span>0%</span>
                      <span>Coverage</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>

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
                <div className="text-center space-y-4">
                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                    <h3 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2 flex items-center justify-center">
                      <Info className="h-4 w-4 mr-1" />
                      Quiz Statistics
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      This quiz covers <span className="font-medium">{totalWordsInQuiz}</span> words from{" "}
                      {getSurahName(selectedSurah)}.
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      That's <span className="font-medium">{percentageOfSurah.toFixed(1)}%</span> of this Surah's
                      vocabulary and <span className="font-medium">{percentageOfDictionary.toFixed(2)}%</span> of our
                      total Quranic dictionary.
                    </p>
                    {totalSessions > 1 && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        The quiz is divided into {totalSessions} sessions with {questionsPerSession} questions each.
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-center space-x-2 mt-4">
                    <Checkbox
                      id="include-additional-words"
                      checked={includeAdditionalWords}
                      onCheckedChange={(checked) => setIncludeAdditionalWords(checked === true)}
                    />
                    <Label htmlFor="include-additional-words" className="text-sm">
                      Include additional words from Quranic dictionary when needed
                    </Label>
                  </div>

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
                  Score: {sessionScore}/{currentQuestionIndex + (isAnswered ? 1 : 0)}
                </span>
              </div>

              {/* Quiz Stats Card */}
              <Card className="mt-4 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700">
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                        <Info className="h-4 w-4 mr-1" />
                        Quiz Progress
                      </h3>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Session Progress</span>
                          <span>
                            {currentQuestionIndex + 1}/{quizQuestions.length}
                          </span>
                        </div>
                        <Progress value={progress} className="h-1.5" />

                        {totalSessions > 1 && (
                          <>
                            <div className="flex justify-between text-xs mt-2">
                              <span>Overall Progress</span>
                              <span>
                                Session {currentSession}/{totalSessions}
                              </span>
                            </div>
                            <Progress
                              value={
                                ((currentSession - 1 + (currentQuestionIndex + 1) / quizQuestions.length) /
                                  totalSessions) *
                                100
                              }
                              className="h-1.5"
                            />
                          </>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 flex items-center">
                        <Trophy className="h-4 w-4 mr-1 text-amber-500" />
                        Scoring System
                      </h3>
                      <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                        <li>• 100 base points for each correct answer</li>
                        <li>• 3 points bonus for each second saved</li>
                        <li>• Current points: {formatPoints(totalPoints)}</li>
                        <li>• Session time: {formatTime(sessionTime)}</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
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
                          <div className="flex justify-between">
                            <span className="font-medium">Source:</span>
                            <span>
                              {currentQuestion.wordInfo.fromSurah
                                ? `${getSurahName(selectedSurah!)}`
                                : "Supplementary word from Quranic dictionary"}
                            </span>
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
          <Card className="max-w-3xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                {currentSession < totalSessions ? "Session Completed" : "Quiz Completed"}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-center mb-4">
                    <Trophy className="h-8 w-8 text-amber-500 mr-2" />
                    <h3 className="text-xl font-bold">Points</h3>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-emerald-600 mb-2">{formatPoints(totalPoints)}</p>
                    <p className="text-sm text-gray-500">
                      Session: {formatPoints(questionPoints.reduce((a, b) => a + b, 0))} points
                    </p>
                    {currentSession > 1 && (
                      <p className="text-sm text-gray-500">
                        Previous: {formatPoints(totalPoints - questionPoints.reduce((a, b) => a + b, 0))} points
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-blue-500 mr-2" />
                    <h3 className="text-xl font-bold">Time</h3>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold text-blue-600 mb-2">{formatTime(sessionTime)}</p>
                    <p className="text-sm text-gray-500">
                      Average: {formatTime(sessionTime / quizQuestions.length)} per question
                    </p>
                    {currentSession > 1 && (
                      <p className="text-sm text-gray-500">Total: {formatTime(totalQuizTime + sessionTime)}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold mb-4">Session Performance</h3>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Session {currentSession} of {totalSessions}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Accuracy: {sessionScore}/{quizQuestions.length} (
                      {((sessionScore / quizQuestions.length) * 100).toFixed(0)}%)
                    </p>
                  </div>
                  <IlmMeter score={sessionScore} maxScore={quizQuestions.length} className="w-32" />
                </div>

                {totalSessions > 1 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium mb-2">Overall Progress</h4>
                    <Progress value={(currentSession / totalSessions) * 100} className="h-2 mb-1" />
                    <p className="text-xs text-gray-500 text-right">
                      {currentSession}/{totalSessions} sessions completed
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-x-auto">
                <h3 className="text-lg font-semibold mb-4">Question Details</h3>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Word</TableHead>
                      <TableHead>Result</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Points</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {quizQuestions.map((question, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">
                          <div className="flex items-center justify-between">
                            <span className="font-arabic">{question.wordInfo.arabic}</span>
                            {!question.wordInfo.fromSurah && (
                              <Badge variant="outline" className="ml-2 bg-blue-50 text-blue-700 border-blue-200">
                                Supplementary
                              </Badge>
                            )}
                          </div>
                          <span className="text-xs text-gray-500 block">{question.wordInfo.transliteration}</span>
                        </TableCell>
                        <TableCell>
                          {questionResults[index] ? (
                            <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                              <CheckCircle className="h-3 w-3 mr-1" /> Correct
                            </Badge>
                          ) : (
                            <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                              <XCircle className="h-3 w-3 mr-1" /> Incorrect
                            </Badge>
                          )}
                        </TableCell>
                        <TableCell>{questionTimes[index]?.toFixed(1)}s</TableCell>
                        <TableCell>{formatPoints(questionPoints[index])}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                <h3 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                  <Info className="h-4 w-4 mr-1" />
                  Quiz Statistics
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  This quiz covers <span className="font-medium">{totalWordsInQuiz}</span> words from{" "}
                  {getSurahName(selectedSurah!)}.
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  That's <span className="font-medium">{percentageOfSurah.toFixed(1)}%</span> of this Surah's vocabulary
                  and <span className="font-medium">{percentageOfDictionary.toFixed(2)}%</span> of our total Quranic
                  dictionary.
                </p>
                {totalSessions > 1 && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    You've completed {currentSession} of {totalSessions} sessions.
                  </p>
                )}
              </div>

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
                    New Quiz (Different Words)
                  </Button>
                )}
                <Button onClick={resetSession} variant="outline" className="w-full">
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
