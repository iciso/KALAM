import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { vocabularyService } from "@/services/vocabulary-service"

export function Phase6Summary() {
  const phase6Words = vocabularyService.getPhase6Words()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Phase 6 Vocabulary Expansion</CardTitle>
        <CardDescription>10 new words added (words 111-120)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">New Themes Covered:</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Divine Attributes</Badge>
              <Badge variant="outline">Spiritual Concepts</Badge>
              <Badge variant="outline">Time-related Concepts</Badge>
              <Badge variant="outline">Human Actions</Badge>
              <Badge variant="outline">Eschatological Concepts</Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">New Words:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {phase6Words.map((word) => (
                <li key={word.id} className="flex items-start">
                  <span className="font-arabic text-lg ml-1">{word.arabic}</span>
                  <span className="mx-2">-</span>
                  <span>
                    {word.transliteration} ({word.meanings[0]})
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">Difficulty Breakdown:</h3>
            <div className="flex flex-wrap gap-4">
              <div>
                <span className="font-medium">Beginner:</span>{" "}
                {phase6Words.filter((w) => w.difficulty === "beginner").length} words
              </div>
              <div>
                <span className="font-medium">Intermediate:</span>{" "}
                {phase6Words.filter((w) => w.difficulty === "intermediate").length} words
              </div>
              <div>
                <span className="font-medium">Advanced:</span>{" "}
                {phase6Words.filter((w) => w.difficulty === "advanced").length} words
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
