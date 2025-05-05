import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { enhancedVocabularyService } from "@/services/enhanced-vocabulary-service"
import Link from "next/link"

export default function ProphetsSummary() {
  const prophets = enhancedVocabularyService.getProphets()

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Prophets in the Quran</CardTitle>
          <CardDescription>
            The Quran mentions 25 prophets by name, each with their own unique story and message
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h3 className="font-bold text-lg mb-2">Key Facts</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>The Quran mentions 25 prophets by name</li>
                <li>All prophets conveyed the same essential message of monotheism</li>
                <li>
                  Five prophets are considered the most determined (Ulul 'Azm): Noah, Abraham, Moses, Jesus, and
                  Muhammad
                </li>
                <li>Some prophets were also given divine scriptures</li>
              </ul>
            </div>

            <h3 className="font-bold text-lg mt-4">All Prophets Mentioned in the Quran</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {prophets.map((prophet) => (
                <Link
                  key={prophet.id}
                  href={`/vocabulary?search=${prophet.arabic}`}
                  className="p-3 border rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  <div className="flex flex-col items-center text-center">
                    <span className="font-arabic text-lg mb-1">{prophet.arabic}</span>
                    <span className="text-sm font-medium">{prophet.transliteration}</span>
                    <Badge variant="outline" className="mt-1 text-xs">
                      {prophet.meanings[0]}
                    </Badge>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
