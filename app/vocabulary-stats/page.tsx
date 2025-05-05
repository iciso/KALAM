"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Home, Tag, BookOpen, BarChart3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { vocabularyService } from "@/services/vocabulary-service"

export default function VocabularyStatsPage() {
  const [totalWords, setTotalWords] = useState(0)
  const [beginnerWords, setBeginnerWords] = useState(0)
  const [intermediateWords, setIntermediateWords] = useState(0)
  const [advancedWords, setAdvancedWords] = useState(0)

  useEffect(() => {
    // Get all words
    const allWords = vocabularyService.getAllWords()
    setTotalWords(allWords.length)

    // Count by difficulty
    setBeginnerWords(allWords.filter((word) => word.difficulty === "beginner").length)
    setIntermediateWords(allWords.filter((word) => word.difficulty === "intermediate").length)
    setAdvancedWords(allWords.filter((word) => word.difficulty === "advanced").length)
  }, [])

  const getColorForDifficulty = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500"
      case "intermediate":
        return "bg-yellow-500"
      case "advanced":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  // Sample categories
  const topCategories = [
    { tag: "divine-attributes", count: 15 },
    { tag: "ethics", count: 12 },
    { tag: "prophets", count: 25 },
    { tag: "afterlife", count: 10 },
    { tag: "worship", count: 7 },
    { tag: "nature", count: 6 },
    { tag: "guidance", count: 5 },
    { tag: "faith", count: 4 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Vocabulary Statistics</h1>
          <div className="flex space-x-2">
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
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center">
                <BarChart3 className="mr-2 h-5 w-5" />
                Word Statistics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold mb-6 text-center">{totalWords} Words</div>

              <h3 className="text-lg font-semibold mb-2">Words by Difficulty</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${getColorForDifficulty("beginner")}`}></div>
                    <span>Beginner</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{beginnerWords}</span>
                    <div className="ml-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-32">
                      <div
                        className={`h-full rounded-full ${getColorForDifficulty("beginner")}`}
                        style={{ width: `${(beginnerWords / totalWords) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${getColorForDifficulty("intermediate")}`}></div>
                    <span>Intermediate</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{intermediateWords}</span>
                    <div className="ml-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-32">
                      <div
                        className={`h-full rounded-full ${getColorForDifficulty("intermediate")}`}
                        style={{ width: `${(intermediateWords / totalWords) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full mr-2 ${getColorForDifficulty("advanced")}`}></div>
                    <span>Advanced</span>
                  </div>
                  <div className="flex items-center">
                    <span className="font-medium">{advancedWords}</span>
                    <div className="ml-2 bg-gray-200 dark:bg-gray-700 rounded-full h-2 w-32">
                      <div
                        className={`h-full rounded-full ${getColorForDifficulty("advanced")}`}
                        style={{ width: `${(advancedWords / totalWords) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold mt-8 mb-2">Top Categories</h3>
              <div className="grid grid-cols-2 gap-2">
                {topCategories.map((category) => (
                  <Link
                    key={category.tag}
                    href={`/quizzes/categories/${category.tag}`}
                    className="flex items-center justify-between py-2 px-3 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
                  >
                    <span className="capitalize">{category.tag.replace(/-/g, " ")}</span>
                    <span className="font-medium">{category.count}</span>
                  </Link>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Link href="/vocabulary">
                <Button variant="outline">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Browse All Words
                </Button>
              </Link>
              <Link href="/quizzes/categories">
                <Button className="bg-emerald-600 hover:bg-emerald-700">
                  <Tag className="mr-2 h-4 w-4" />
                  Explore Categories
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center">
          <Link href="/">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
