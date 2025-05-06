"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Home, Search, User, Heart, Book, Sun, Moon, Leaf, Users, Scroll } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

// Define quiz categories
const quizCategories = [
  {
    id: "divine-attributes",
    name: "Divine Attributes",
    description: "Test your knowledge of Allah's names and attributes",
    icon: <Heart className="h-6 w-6 text-red-500" />,
  },
  {
    id: "prophets",
    name: "Prophets",
    description: "Learn about the 25 prophets mentioned in the Quran",
    icon: <Users className="h-6 w-6 text-blue-500" />,
    featured: true,
  },
  {
    id: "afterlife",
    name: "Afterlife",
    description: "Test your knowledge of Quranic terms related to the hereafter",
    icon: <Sun className="h-6 w-6 text-orange-500" />,
  },
  {
    id: "ethics",
    name: "Ethics & Morality",
    description: "Learn Quranic vocabulary related to character and behavior",
    icon: <Leaf className="h-6 w-6 text-green-500" />,
  },
  {
    id: "worship",
    name: "Worship",
    description: "Test your knowledge of terms related to Islamic worship",
    icon: <User className="h-6 w-6 text-purple-500" />,
  },
  {
    id: "creation",
    name: "Creation",
    description: "Learn Quranic terms about the natural world and creation",
    icon: <Moon className="h-6 w-6 text-indigo-500" />,
  },
  {
    id: "stories",
    name: "Quranic Stories",
    description: "Test your knowledge of vocabulary used in Quranic narratives",
    icon: <Book className="h-6 w-6 text-yellow-500" />,
  },
  {
    id: "revelation",
    name: "Revelation",
    description: "Learn terms related to divine revelation and scripture",
    icon: <Scroll className="h-6 w-6 text-teal-500" />,
  },
]

export default function QuizCategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("")

  // Filter categories based on search query
  const filteredCategories = quizCategories.filter(
    (category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Quiz Categories</h1>
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
        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Search categories..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredCategories.map((category) => (
            <Card
              key={category.id}
              className={`overflow-hidden ${category.featured ? "ring-2 ring-emerald-500 ring-offset-2" : ""}`}
            >
              <CardHeader className="bg-gray-100 dark:bg-gray-800">
                <CardTitle className="flex items-center gap-2">
                  {category.icon}
                  <span>{category.name}</span>
                  {category.featured && (
                    <span className="ml-auto bg-emerald-100 text-emerald-800 text-xs font-medium px-2 py-1 rounded dark:bg-emerald-900 dark:text-emerald-200">
                      New
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
              </CardContent>
              <CardFooter>
                <Link href={`/quizzes/categories/${category.id}`} className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Quiz</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No categories found matching your search.</p>
          </div>
        )}
      </main>
    </div>
  )
}
