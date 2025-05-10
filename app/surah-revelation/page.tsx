import SurahSelector from "@/components/surah-selector"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { BookOpen, Calendar, MapPin } from "lucide-react"
import { surahTimelineData } from "@/data/surah-timeline-data"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function SurahRevelationPage() {
  // Get supported Surahs that have detailed revelation context data
  const supportedSurahs = [
    {
      id: 2,
      name: "Al-Baqarah",
      verses: 286,
      period: "Medinan",
      features: ["Complete Explorer", "Interactive Timeline", "Thematic Network"],
    },
    {
      id: 3,
      name: "Ali 'Imran",
      verses: 200,
      period: "Medinan",
      features: ["Complete Explorer", "Narrative Flow", "Geographic Context"],
    },
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2">Asbab al-Nuzul: Revelation Contexts</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Explore the historical contexts, events, and circumstances behind the revelation of Quranic verses.
      </p>

      <SurahSelector />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {supportedSurahs.map((surah) => {
          const surahData = surahTimelineData.find((s) => s.id === surah.id)

          return (
            <Link key={surah.id} href={`/surah-revelation/${surah.id}`} className="block">
              <Card className="h-full transition-shadow hover:shadow-md">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>
                        {surah.id}. {surah.name}
                      </CardTitle>
                      <CardDescription>
                        {surah.verses} verses • {surahData?.period || surah.period} surah
                      </CardDescription>
                    </div>
                    <Badge className={surah.period === "Meccan" ? "bg-emerald-600" : "bg-blue-600"}>
                      {surah.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm">
                      <BookOpen className="h-4 w-4 mr-2 text-emerald-600" />
                      <span>
                        {surahData?.mainThemes?.slice(0, 2).join(", ") || "Various themes"}
                        {surahData?.mainThemes && surahData.mainThemes.length > 2 ? "..." : ""}
                      </span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                      <span>{surahData?.approximateYear || "Revelation period"}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                      <span>{surah.period === "Meccan" ? "Mecca" : "Medina"}</span>
                    </div>

                    <div className="pt-3 flex flex-wrap gap-1">
                      {surah.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="bg-gray-100 text-gray-800">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}

        {/* Coming soon card */}
        <Card className="h-full border-dashed">
          <CardHeader>
            <CardTitle className="text-gray-500">More Surahs Coming Soon</CardTitle>
            <CardDescription>
              We're working on adding detailed revelation contexts for additional surahs
            </CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-gray-500">
            <p>Upcoming surahs include:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>An-Nisa (4)</li>
              <li>Al-Ma'idah (5)</li>
              <li>Al-Anfal (8)</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="mt-12 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Understanding Asbab al-Nuzul</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            <strong>Asbab al-Nuzul</strong> (أسباب النزول), or "causes of revelation," refers to the historical contexts
            and events that prompted the revelation of specific verses or chapters in the Quran. Understanding these
            contexts provides deeper insight into:
          </p>

          <ul>
            <li>The historical circumstances surrounding the revelation</li>
            <li>The immediate purpose and application of the verses</li>
            <li>The connection between divine guidance and human experiences</li>
            <li>The gradual development of Islamic teachings</li>
          </ul>

          <p>
            While not every verse has a specific cause of revelation, those that do offer valuable historical context
            that enriches our understanding of the Quran's message and its application in different situations.
          </p>
        </div>
      </div>

      <div className="mt-8 p-6 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-200 dark:border-amber-800">
        <h2 className="text-2xl font-bold mb-4">Explore the Hijra Journey</h2>
        <p className="mb-4">
          Many Quranic revelations are closely tied to the Prophet's migration (Hijra) from Mecca to Medina. This
          pivotal journey marks a significant transition in the revelation contexts.
        </p>
        <div className="flex justify-center">
          <Link href="/hijra">
            <Button className="bg-amber-600 hover:bg-amber-700">
              Explore the Hijra Journey <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
