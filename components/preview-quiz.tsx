"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { alKafirunQuizDataLite } from "@/data/surah-quiz-data-lite"

export default function PreviewQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<string | null>(null)
  const [showExplanation, setShowExplanation] = useState(false)

  const currentQuestion = alKafirunQuizDataLite.questions[currentQuestionIndex]
  const isLastQuestion = currentQuestionIndex === alKafirunQuizDataLite.questions.length - 1

  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId)
    setShowExplanation(false)
  }

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      // Handle quiz completion
      alert("Quiz completed!")
      return
    }

    setCurrentQuestionIndex((prev) => prev + 1)
    setSelectedOption(null)
    setShowExplanation(false)
  }

  const correctOption = currentQuestion.options.find((option) => option.isCorrect)
  const isCorrect = selectedOption && correctOption?.id === selectedOption

  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-xl">
          {alKafirunQuizDataLite.surahName} Quiz - Question {currentQuestionIndex + 1}
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {currentQuestion.arabic && (
          <div className="text-2xl text-center font-arabic my-4 rtl">{currentQuestion.arabic}</div>
        )}

        <div className="text-lg font-medium mb-4">{currentQuestion.question}</div>

        <div className="space-y-2">
          {currentQuestion.options.map((option) => (
            <Button
              key={option.id}
              variant={selectedOption === option.id ? (isCorrect ? "success" : "destructive") : "outline"}
              className="w-full justify-start text-left p-4 h-auto"
              onClick={() => handleOptionSelect(option.id)}
              disabled={selectedOption !== null}
            >
              <span className="mr-2">{option.id.toUpperCase()}.</span>
              {option.text}
            </Button>
          ))}
        </div>

        {selectedOption && !showExplanation && currentQuestion.explanation && (
          <Button variant="link" onClick={() => setShowExplanation(true)} className="mt-4">
            Show Explanation
          </Button>
        )}

        {showExplanation && currentQuestion.explanation && (
          <div className="mt-4 p-4 bg-muted rounded-md">
            <h3 className="font-medium mb-2">Explanation:</h3>
            <p>{currentQuestion.explanation}</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button
          variant="outline"
          onClick={() => setCurrentQuestionIndex((prev) => prev - 1)}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </Button>

        <Button onClick={handleNextQuestion} disabled={selectedOption === null}>
          {isLastQuestion ? "Finish Quiz" : "Next Question"}
        </Button>
      </CardFooter>
    </Card>
  )
}
