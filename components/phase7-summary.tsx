import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { vocabularyService } from "@/services/vocabulary-service"

export function Phase7Summary() {
  const phase7Words = vocabularyService.getPhase7Words()

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-2xl">Phase 7 Vocabulary Expansion</CardTitle>
        <CardDescription>10 new words added (words 121-130)</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-2">New Themes Covered:</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Prophets and Messengers</Badge>
              <Badge variant="outline">Quranic Concepts</Badge>
              <Badge variant="outline">Ethical Concepts</Badge>
              <Badge variant="outline">Human Relationships</Badge>
              <Badge variant="outline">Natural Elements</Badge>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-2">New Words:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {phase7Words.map((word) => (
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
                {phase7Words.filter((w) => w.difficulty === "beginner").length} words
              </div>
              <div>
                <span className="font-medium">Intermediate:</span>{" "}
                {phase7Words.filter((w) => w.difficulty === "intermediate").length} words
              </div>
              <div>
                <span className="font-medium">Advanced:</span>{" "}
                {phase7Words.filter((w) => w.difficulty === "advanced").length} words
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
