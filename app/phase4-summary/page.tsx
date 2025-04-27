import { Phase4Summary } from "../../components/phase4-summary"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"

export default function Phase4SummaryPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">KALAM Project - Phase 4</h1>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
        </div>
      </header>

      <main>
        <Phase4Summary />

        <div className="container mx-auto px-4 py-8 max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Project Status</h2>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Completed Phases</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold mr-3">
                  1
                </div>
                <div>
                  <h4 className="font-medium">Phase 1: Initial Expansion</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Expanded vocabulary to 30 words with basic Quranic terms
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold mr-3">
                  2
                </div>
                <div>
                  <h4 className="font-medium">Phase 2: Intermediate Expansion</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Expanded vocabulary to 50 words with intermediate concepts
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold mr-3">
                  3
                </div>
                <div>
                  <h4 className="font-medium">Phase 3: Advanced Expansion</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Expanded vocabulary to 75 words with advanced theological concepts
                  </p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold mr-3">
                  4
                </div>
                <div>
                  <h4 className="font-medium">Phase 4: Specialized Expansion</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Expanded vocabulary to 100 words with specialized theological and spiritual concepts
                  </p>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-semibold mt-8 mb-4">Future Development</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Implement spaced repetition system for more effective learning</li>
              <li>Add user authentication and profiles</li>
              <li>Create mobile app version</li>
              <li>Add real audio pronunciations</li>
              <li>Implement progress tracking and statistics</li>
              <li>Expand vocabulary to 150+ words</li>
              <li>Add grammatical analysis for each word</li>
            </ul>
          </div>

          <div className="flex justify-center mt-8">
            <Link href="/">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Return to Home</Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  )
}
