"use client"

import { useState } from "react"
import { surahTimelineData } from "@/data/surah-timeline-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Clock, MapPin, BookOpen, Star } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function SurahTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const surah = surahTimelineData[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev < surahTimelineData.length - 1 ? prev + 1 : prev))
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-emerald-800 text-white p-4">
          <h2 className="text-xl font-bold">Quran Revelation Timeline</h2>
          <p className="text-sm opacity-90">Chronological order of revelation of Quranic chapters</p>
        </div>

        {/* Timeline Navigation */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              onClick={goToPrevious}
              disabled={activeIndex === 0}
              className="flex items-center"
            >
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>
            <span className="text-sm font-medium">
              {activeIndex + 1} of {surahTimelineData.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              disabled={activeIndex === surahTimelineData.length - 1}
              className="flex items-center"
            >
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Timeline Visualization */}
        <div className="relative overflow-x-auto py-4">
          <div className="flex justify-center mb-4">
            <div className="w-full max-w-3xl px-4">
              <div className="relative">
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-emerald-200 dark:bg-emerald-900 -translate-y-1/2"></div>
                <div className="flex justify-between relative">
                  {surahTimelineData.map((s, idx) => (
                    <button
                      key={s.id}
                      className={`w-3 h-3 rounded-full z-10 transition-all ${
                        idx <= activeIndex
                          ? "bg-emerald-600 ring-4 ring-emerald-100 dark:ring-emerald-900"
                          : "bg-gray-300 dark:bg-gray-600"
                      } ${idx === activeIndex ? "w-5 h-5 -mt-1" : ""}`}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Go to Surah ${s.name}`}
                      title={`Surah ${s.name} (${s.revelationOrder})`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Surah Details */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold">Surah {surah.name}</h3>
                <p className="text-xl font-arabic mt-1">{surah.arabicName}</p>
                <div className="flex items-center justify-center mt-2">
                  <Badge variant={surah.period === "Meccan" ? "default" : "secondary"} className="bg-emerald-600">
                    {surah.period}
                  </Badge>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <Clock className="h-4 w-4" />
                <span>{surah.approximateYear}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <BookOpen className="h-4 w-4" />
                <span>
                  Surah {surah.id} • {surah.verses} verses
                </span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
                <MapPin className="h-4 w-4" />
                <span>Revelation Order: {surah.revelationOrder}</span>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="space-y-4">
                {surah.revelationContext && (
                  <div>
                    <h4 className="font-semibold flex items-center gap-1">
                      <Clock className="h-4 w-4 text-emerald-600" /> Historical Context
                    </h4>
                    <p>{surah.revelationContext}</p>
                  </div>
                )}

                <div>
                  <h4 className="font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4 text-emerald-600" /> Main Themes
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {surah.mainThemes.map((theme, idx) => (
                      <li key={idx}>{theme}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Significance</h4>
                  <p>{surah.significance}</p>
                </div>

                <div className="pt-2 flex gap-2">
                  <Link href={`/vocabulary?search=${surah.arabicName}`}>
                    <Button variant="outline" size="sm">
                      View Vocabulary
                    </Button>
                  </Link>
                  <Link href={`/surah-vocabulary?surah=${surah.id}`}>
                    <Button variant="outline" size="sm">
                      Explore Surah
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Legend */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">About This Timeline</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            This timeline represents the chronological order of revelation of the surahs of the Quran. The Meccan surahs
            were revealed before the Hijrah (migration to Medina), while the Medinan surahs were revealed after.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            The traditional order of the Quran (by surah number) differs from the chronological order of revelation.
            This timeline helps understand the historical context of each surah's revelation.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
