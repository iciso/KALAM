import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Surah Quizzes - KALAM",
  description: "Test your knowledge of Quranic vocabulary with our surah-based quizzes.",
}

// Define the surahs to be displayed
const surahs = [
  { id: 1, name: "Al-Fatihah", arabicName: "الفاتحة", verses: 7, type: "Meccan" },
  { id: 109, name: "Al-Kafirun", arabicName: "الكافرون", verses: 6, type: "Meccan" },
  { id: 110, name: "An-Nasr", arabicName: "النصر", verses: 3, type: "Medinan" },
  { id: 111, name: "Al-Masad", arabicName: "المسد", verses: 5, type: "Meccan" },
  { id: 112, name: "Al-Ikhlas", arabicName: "الإخلاص", verses: 4, type: "Meccan" },
  { id: 113, name: "Al-Falaq", arabicName: "الفلق", verses: 5, type: "Meccan" },
  { id: 114, name: "An-Nas", arabicName: "الناس", verses: 6, type: "Meccan" },
]

// Define which surahs have implemented quizzes
const implementedSurahs = [109, 110, 111, 112, 113, 114]

// Function to determine if a surah has an implemented quiz
function getSurahLink(surahId: number) {
  return implementedSurahs.includes(surahId) ? `/quizzes/surah/${surahId}` : "#"
}

// Function to get the appropriate badge color based on surah type
function getTypeColor(type: string) {
  return type === "Meccan"
    ? "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300"
    : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300"
}

export default function SurahQuizzesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Surah Vocabulary Quizzes</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
          Test your knowledge of Quranic vocabulary with these surah-based quizzes. Select a surah to begin.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {surahs.map((surah) => {
            const isImplemented = implementedSurahs.includes(surah.id)
            return (
              <Link
                key={surah.id}
                href={getSurahLink(surah.id)}
                className={`block transition-transform ${
                  isImplemented ? "hover:scale-105" : "opacity-60 cursor-not-allowed"
                }`}
              >
                <Card className={isImplemented ? "h-full" : "h-full bg-gray-50 dark:bg-gray-800/50"}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <span className="inline-block w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm flex items-center justify-center">
                          {surah.id}
                        </span>
                        <CardTitle className="text-xl">{surah.name}</CardTitle>
                      </div>
                      <Badge className={getTypeColor(surah.type)}>{surah.type}</Badge>
                    </div>
                    <CardDescription className="font-arabic text-xl mt-1">{surah.arabicName}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      <p>{surah.verses} verses</p>
                      {!isImplemented && <p className="mt-2 text-amber-600 dark:text-amber-400">Coming soon</p>}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
