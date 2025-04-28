import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { vocabularyService } from "@/services/vocabulary-service"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function VocabularyExpansionSummary() {
  const totalWords = vocabularyService.getTotalWordCount()
  const beginnerWords = vocabularyService.getWordsByDifficulty("beginner").length
  const intermediateWords = vocabularyService.getWordsByDifficulty("intermediate").length
  const advancedWords = vocabularyService.getWordsByDifficulty("advanced").length

  const phases = [
    { number: 1, count: vocabularyService.getWordsByPhase(1).length, path: "/summary" },
    { number: 2, count: vocabularyService.getWordsByPhase(2).length, path: "/summary" },
    { number: 3, count: vocabularyService.getWordsByPhase(3).length, path: "/phase3-summary" },
    { number: 4, count: vocabularyService.getWordsByPhase(4).length, path: "/summary" },
    { number: 5, count: vocabularyService.getWordsByPhase(5).length, path: "/phase4-summary" },
    { number: 6, count: vocabularyService.getWordsByPhase(6).length, path: "/phase5-summary" },
    { number: 7, count: vocabularyService.getWordsByPhase(7).length, path: "/phase6-summary" },
    { number: 8, count: vocabularyService.getWordsByPhase(8).length, path: "/phase7-summary" },
    { number: 9, count: vocabularyService.getWordsByPhase(9).length, path: "/phase8-summary" },
    { number: 10, count: vocabularyService.getWordsByPhase(10).length, path: "/phase9-summary" },
  ]

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Vocabulary Expansion Summary</CardTitle>
        <CardDescription>Total of {totalWords} words across all phases</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">Difficulty Distribution:</h3>
            <div className="flex flex-wrap gap-4">
              <div>
                <span className="font-medium">Beginner:</span> {beginnerWords} words (
                {Math.round((beginnerWords / totalWords) * 100)}%)
              </div>
              <div>
                <span className="font-medium">Intermediate:</span> {intermediateWords} words (
                {Math.round((intermediateWords / totalWords) * 100)}%)
              </div>
              <div>
                <span className="font-medium">Advanced:</span> {advancedWords} words (
                {Math.round((advancedWords / totalWords) * 100)}%)
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Expansion Phases:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {phases.map((phase) => (
                <Card key={phase.number} className="overflow-hidden">
                  <CardHeader className="p-4">
                    <CardTitle className="text-lg">Phase {phase.number}</CardTitle>
                    <CardDescription>{phase.count} words</CardDescription>
                  </CardHeader>
                  <CardContent className="p-4 pt-0">
                    <Link href={phase.path}>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Milestone Achievement:</h3>
            <div className="bg-green-50 dark:bg-green-950 p-4 rounded-lg border border-green-200 dark:border-green-800">
              <p className="text-green-800 dark:text-green-200 font-medium">
                🎉 Congratulations! We've reached our goal of 150 Quranic vocabulary words!
              </p>
              <p className="text-green-700 dark:text-green-300 mt-2">
                This collection now covers a significant portion of frequently occurring words in the Quran, providing a
                solid foundation for Quranic studies.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
