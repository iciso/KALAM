import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SurahRevelationIndexPage() {
  // For now, we only have Al-Baqarah implemented
  const availableSurahs = [
    {
      id: 2,
      name: "Al-Baqarah",
      arabicName: "البقرة",
      englishMeaning: "The Cow",
      revelationPlace: "Medinan",
      verses: 286,
      revelationCauses: 14,
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Asbab al-Nuzul Explorer</h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Explore the historical contexts and events that prompted the revelation of specific verses in the Quran.
        </p>

        <div className="grid gap-4">
          {availableSurahs.map((surah) => (
            <Link href={`/surah-revelation/${surah.id}`} key={surah.id}>
              <Card className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl">
                        Surah {surah.name}{" "}
                        <span className="text-gray-500 dark:text-gray-400">({surah.arabicName})</span>
                      </CardTitle>
                      <CardDescription>{surah.englishMeaning}</CardDescription>
                    </div>
                    <Badge className={surah.revelationPlace === "Meccan" ? "bg-emerald-600" : "bg-blue-600"}>
                      {surah.revelationPlace}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {surah.verses} verses • {surah.revelationCauses} revelation contexts
                    </div>
                    <span className="text-emerald-600 text-sm font-medium">View details →</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
          <h2 className="text-lg font-medium text-amber-800 dark:text-amber-300 mb-2">
            About Asbab al-Nuzul (أسباب النزول)
          </h2>
          <p className="text-sm text-amber-700 dark:text-amber-400">
            Asbab al-Nuzul, or "causes of revelation," refers to the historical contexts and events that prompted the
            revelation of specific verses in the Quran. Understanding these contexts helps provide deeper insight into
            the meaning and application of Quranic verses, showing how divine guidance responded to real-world
            situations faced by the early Muslim community.
          </p>
        </div>
      </div>
    </div>
  )
}
