"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Home, BookOpen, Check, X, HelpCircle, ChevronRight, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { SurahQuizData } from "@/data/surah-quiz-data";

interface SurahQuizProps {
  quizData: SurahQuizData & {
    additionalContextElements?: {
      title: string;
      content: string;
    }[];
  };
}

export default function SurahQuiz({ quizData }: SurahQuizProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [showIntroduction, setShowIntroduction] = useState(true);
  const [answeredQuestions, setAnsweredQuestions] = useState(new Set<string>());
  const [userAnswers, setUserAnswers] = useState<Map<string, string>>(new Map());
  const [error, setError] = useState<string | null>(null);

  // Log quizData for debugging
  useEffect(() => {
    console.log("Quiz Data:", quizData);
    console.log("Questions Length:", quizData.questions.length);
  }, [quizData]);

  // Handle errors in quizData access
  if (!quizData || !quizData.questions || quizData.questions.length === 0) {
    console.error("Invalid quiz data:", quizData);
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
    );
  }

  const currentQuestion = quizData.questions[currentQuestionIndex];

  // Function to shuffle option content while keeping IDs fixed
  const shuffleOptionContent = (options: { id: string; text: string; isCorrect: boolean }[]) => {
    // Extract text and isCorrect fields
    const content = options.map(({ text, isCorrect }) => ({ text, isCorrect }));
    // Shuffle content
    for (let i = content.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [content[i], content[j]] = [content[j], content[i]];
    }
    // Reassign shuffled content to fixed IDs
    return options.map((option, index) => ({
      id: option.id,
      text: content[index].text,
      isCorrect: content[index].isCorrect,
    }));
  };

  // Apply shuffled content for the current question
  const shuffledOptions = shuffleOptionContent(currentQuestion.options);

  // Restore previous answer when navigating to a question
  useEffect(() => {
    const previousAnswer = userAnswers.get(currentQuestion.id);
    if (previousAnswer) {
      setSelectedOption(previousAnswer);
      const selectedOptionObj = currentQuestion.options.find((option) => option.id === previousAnswer);
      setIsCorrect(selectedOptionObj?.isCorrect || false);
      setShowExplanation(answeredQuestions.has(currentQuestion.id));
    } else {
      setSelectedOption(null);
      setIsCorrect(null);
      setShowExplanation(false);
    }
  }, [currentQuestion.id, userAnswers, answeredQuestions]);

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    const selectedOptionObj = currentQuestion.options.find((option) => option.id === optionId);
    const isOptionCorrect = selectedOptionObj?.isCorrect || false;
    setIsCorrect(isOptionCorrect);
    setAnsweredQuestions((prev) => new Set(prev).add(currentQuestion.id));
    setUserAnswers((prev) => new Map(prev).set(currentQuestion.id, optionId));
    if (isOptionCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsCorrect(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
    setAnsweredQuestions(new Set());
    setUserAnswers(new Map());
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <main className="container mx-auto max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <Link href="/quizzes/surah">
            <Button variant="ghost">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Surah Quizzes
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>

        {showIntroduction && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>{quizData.surahName}</CardTitle>
              <CardDescription>
                Surah {quizData.surahId} • {quizData.totalVerses} verses • {quizData.type}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{quizData.introduction}</p>
              {quizData.additionalContextElements?.map((element, index) => (
                <div key={index} dangerouslySetInnerHTML={{ __html: element.content }} />
              ))}
            </CardContent>
            <CardFooter>
              <Button onClick={() => setShowIntroduction(false)}>
                Start Quiz
                <BookOpen className="h-4 w-4 ml-2" />
              </Button>
            </CardFooter>
          </Card>
        )}

        {!showIntroduction && !quizCompleted && (
          <Card>
            <CardHeader>
              <CardTitle>Question {currentQuestionIndex + 1} of {quizData.questions.length}</CardTitle>
              <CardDescription>
                Score: {score} / {answeredQuestions.size}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="text-lg font-semibold">{currentQuestion.question}</p>
                {currentQuestion.arabic && (
                  <p className="text-right text-xl font-arabic mt-2">{currentQuestion.arabic}</p>
                )}
                {currentQuestion.rootLetters && (
                  <div className="flex items-center mt-2">
                    <Badge variant="secondary">Root Letters: {currentQuestion.rootLetters}</Badge>
                  </div>
                )}
              </div>
              <div className="space-y-2">
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

        {quizCompleted && (
          <Card>
            <CardHeader>
              <CardTitle>Quiz Completed!</CardTitle>
              <CardDescription>
                Your score: {score} out of {quizData.questions.length} ({((score / quizData.questions.length) * 100).toFixed(2)}%)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Great job completing the quiz for Surah {quizData.surahName}!</p>
              <div className="space-y-2">
                {quizData.questions.map((question, index) => (
                  <div key={question.id} className="p-3 border rounded-lg">
                    <p className="font-semibold">{index + 1}. {question.question}</p>
                    <p className="text-sm">
                      Your answer: {userAnswers.get(question.id) ? question.options.find((opt) => opt.id === userAnswers.get(question.id))?.text : "Not answered"}
                    </p>
                    <p className="text-sm">
                      Correct answer: {question.options.find((opt) => opt.isCorrect)?.text}
                    </p>
                    {question.explanation && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">{question.explanation}</p>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button onClick={handleRestartQuiz}>
                Restart Quiz
              </Button>
              <Link href="/quizzes/surah">
                <Button variant="outline">
                  Back to Surah Quizzes
                </Button>
              </Link>
            </CardFooter>
          </Card>
        )}
      </main>
    </div>
  );
}
