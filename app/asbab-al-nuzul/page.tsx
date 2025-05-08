"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { surahTimelineData } from "@/data/surah-timeline-data"
import { allRevelationCausesData } from "@/data/revelation-causes-data-expanded"
import Link from "next/link"
import { BookOpen, Search, Info } from "lucide-react"

export default function AsbabAlNuzulPage() {
  const [searchTerm, setSearchTerm] = useState("")

  // Count causes for each surah
  const surahCauseCounts = allRevelationCausesData.reduce(
    (acc, cause) => {
      acc[cause.surahId] = (acc[cause.surahId] || 0) + 1
      return acc
    },
    {} as Record<number, number>,
  )

  // Filter surahs that have revelation causes
  const surahsWithCauses = surahTimelineData
    .filter((surah) => surahCauseCounts[surah.id] > 0)
    .filter(
      (surah) =>
        surah.name.toLowerCase().includes(searchTerm.toLowerCase()) || surah.id.toString().includes(searchTerm),
    )
    .sort((a, b) => a.id - b.id)

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Asbab al-Nuzul Explorer</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Explore the historical contexts and causes behind Quranic revelations across different Surahs.
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Understanding Asbab al-Nuzul</CardTitle>
          <CardDescription>The historical contexts of Quranic revelations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="prose dark:prose-invert max-w-none">
            <p>
              <strong>Asbab al-Nuzul</strong> (أسباب النزول), or "causes of revelation," refers to the historical
              contexts and events that prompted the revelation of specific verses or chapters in the Quran.
              Understanding these contexts provides deeper insight into:
            </p>

            <ul>
              <li>The historical circumstances surrounding the revelation</li>
              <li>The immediate purpose and application of the verses</li>
              <li>The connection between divine guidance and human experiences</li>
              <li>The gradual development of Islamic teachings</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input
            placeholder="Search by Surah name or number..."
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {surahsWithCauses.map((surah) => (
          <Card key={surah.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle>
                    {surah.id}. Surah {surah.name}
                  </CardTitle>
                  <CardDescription className="font-arabic text-lg">{surah.arabicName}</CardDescription>
                </div>
                <Badge className={surah.period === "Meccan" ? "bg-emerald-600" : "bg-blue-600"}>{surah.period}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Info size={16} />
                  <span>
                    {surahCauseCounts[surah.id]} revelation context{surahCauseCounts[surah.id] > 1 ? "s" : ""}
                  </span>
                </div>

                <div className="flex justify-between">
                  <Link href={`/surah-revelation/${surah.id}`}>
                    <Button variant="outline" size="sm">
                      <BookOpen className="h-4 w-4 mr-2" />
                      Explore Contexts
                    </Button>
                  </Link>

                  {surah.id === 3 && (
                    <Link href={`/surah-revelation/3`}>
                      <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700">
                        Advanced View
                      </Button>
                    </Link>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {surahsWithCauses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">No Surahs found matching your search criteria.</p>
        </div>
      )}
    </div>
  )
}
