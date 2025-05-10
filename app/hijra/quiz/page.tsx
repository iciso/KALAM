import { HijraQuiz } from "@/components/hijra-quiz"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home } from "lucide-react"

export default function HijraQuizPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Hijra Journey Quiz</h1>
          <div className="flex space-x-2">
            <Link href="/hijra">
              <Button variant="ghost" size="icon" className="text-white">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Hijra Journey</span>
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="icon" className="text-white">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Link href="/hijra" className="text-emerald-600 hover:text-emerald-700 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Hijra Journey
          </Link>
        </div>

        <HijraQuiz />

        <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-lg max-w-4xl mx-auto">
          <h2 className="text-lg font-medium text-amber-800 mb-2">Learning Through Quizzes</h2>
          <p className="text-sm text-amber-700 mb-2">
            Quizzes are an excellent way to reinforce your knowledge about the Hijra journey. By testing yourself on key
            events, locations, and people, you'll better remember these important historical details.
          </p>
          <p className="text-sm text-amber-700">
            After completing the quiz, consider revisiting the interactive map to further explore the locations and
            events you may have missed. The combination of visual learning and knowledge testing creates a more complete
            understanding of this pivotal moment in Islamic history.
          </p>
        </div>
      </main>
    </div>
  )
}
