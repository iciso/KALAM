import ProphetsSummary from "@/components/prophets-summary"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, BookOpen } from "lucide-react"

export default function ProphetsSummaryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Prophets in the Quran</h1>
        <div className="flex space-x-2">
          <Link href="/vocabulary?category=prophets">
            <Button variant="outline" className="flex items-center">
              <BookOpen className="mr-2 h-4 w-4" />
              Browse Prophets
            </Button>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>

      <ProphetsSummary />

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Learn About the Prophets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Link href="/quizzes/categories/prophets">
            <div className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <h3 className="font-bold text-lg">Test Your Knowledge</h3>
              <p className="text-gray-600 dark:text-gray-400">Take a quiz on the prophets mentioned in the Quran</p>
            </div>
          </Link>
          <Link href="/vocabulary?category=prophets">
            <div className="p-4 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
              <h3 className="font-bold text-lg">Study the Prophets</h3>
              <p className="text-gray-600 dark:text-gray-400">Browse detailed information about each prophet</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
