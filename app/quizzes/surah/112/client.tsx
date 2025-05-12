"use client"

import { useState, useEffect } from "react"
import SurahQuiz from "@/components/surah-quiz"
import { alIkhlasQuizData } from "@/data/surah-quiz-data"
import { Card, CardContent } from "@/components/ui/card"

export default function AlIkhlasQuizClient() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Card className="max-w-2xl mx-auto my-8">
        <CardContent className="p-6">
          <div className="h-8 w-3/4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-4"></div>
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-2"></div>
          <div className="h-4 w-5/6 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mb-6"></div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-16 w-full bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  return <SurahQuiz quizData={alIkhlasQuizData} />
}
