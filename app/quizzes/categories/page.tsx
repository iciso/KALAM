"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export default function CategoryQuizzesPage() {
  const [categories, setCategories] = useState<string[]>([])

  // Simulate fetching categories
  useEffect(() => {
    // For now, let's use some sample categories
    const sampleCategories = [
      "divine-attributes",
      "ethics",
      "afterlife",
      "prophets",
      "worship",
      "nature",
      "guidance",
      "faith",
    ]
    setCategories(sampleCategories)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Category Quizzes</h1>
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
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl">Vocabulary by Category</CardTitle>
            <CardDescription>
              Test your knowledge of Quranic vocabulary words grouped by specific categories
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle className="capitalize">{category.replace(/-/g, " ")}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  Test your knowledge of {category.replace(/-/g, " ")} vocabulary.
                </p>
                <Link href={`/quizzes/categories/${category}`}>
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Quiz</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8">
          <Link href="/quizzes">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Quizzes
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
