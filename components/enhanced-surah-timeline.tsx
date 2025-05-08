"use client"

import { useState, useRef, useEffect } from "react"
import { fullSurahTimelineData, surahTimelineData } from "@/data/surah-timeline-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Clock, MapPin, BookOpen, Star, ZoomIn, ZoomOut } from "lucide-react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function EnhancedSurahTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [zoomLevel, setZoomLevel] = useState(1)
  const timelineRef = useRef<HTMLDivElement>(null)

  // Get the actual data for the active surah
  const activeSurah =
    surahTimelineData.find((s) => s.revelationOrder === fullSurahTimelineData[activeIndex].revelationOrder) ||
    fullSurahTimelineData[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev < fullSurahTimelineData.length - 1 ? prev + 1 : prev))
  }

  const zoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.2, 2))
  }

  const zoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.2, 0.5))
  }

  // Scroll to active node when it changes
  useEffect(() => {
    if (timelineRef.current) {
      const activeNode = timelineRef.current.querySelector(`[data-index="${activeIndex}"]`)
      if (activeNode) {
        activeNode.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" })
      }
    }
  }, [activeIndex])

  // Group surahs into rows for serpentine layout
  const rows = 8 // Number of rows in the serpentine layout
  const itemsPerRow = Math.ceil(fullSurahTimelineData.length / rows)

  // Create the serpentine layout data structure
  const serpentineRows = Array.from({ length: rows }, (_, rowIndex) => {
    const start = rowIndex * itemsPerRow
    const end = Math.min(start + itemsPerRow, fullSurahTimelineData.length)
    const rowItems = fullSurahTimelineData.slice(start, end)

    // Reverse every other row for the serpentine effect
    return rowIndex % 2 === 0 ? rowItems : [...rowItems].reverse()
  })

  // Determine if a surah has detailed data
  const hasDetailedData = (revelationOrder: number) => {
    return surahTimelineData.some((s) => s.revelationOrder === revelationOrder)
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-emerald-800 text-white p-4">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Quran Revelation Timeline</h2>
              <p className="text-sm opacity-90">Chronological order of revelation of Quranic chapters</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={zoomOut}
                className="h-8 w-8 rounded-full bg-emerald-700 border-emerald-600"
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={zoomIn}
                className="h-8 w-8 rounded-full bg-emerald-700 border-emerald-600"
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
            </div>
          </div>
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
              {activeSurah.revelationOrder} of 114: {activeSurah.name}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              disabled={activeIndex === fullSurahTimelineData.length - 1}
              className="flex items-center"
            >
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </div>
        </div>

        {/* Serpentine Timeline Visualization */}
        <div
          className="relative overflow-x-auto py-6 px-4"
          ref={timelineRef}
          style={{
            maxHeight: "300px",
            overflowY: "auto",
            transform: `scale(${zoomLevel})`,
            transformOrigin: "center top",
          }}
        >
          <div className="flex flex-col items-center gap-2 min-w-max">
            {serpentineRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex items-center relative"
                style={{
                  minWidth: `${row.length * 40}px`,
                  height: "40px",
                }}
              >
                {/* Connecting line */}
                <div
                  className={`absolute h-1 bg-emerald-200 dark:bg-emerald-900 ${
                    rowIndex % 2 === 0 ? "left-5 right-5" : "left-5 right-5"
                  }`}
                  style={{ top: "50%", transform: "translateY(-50%)" }}
                ></div>

                {/* Vertical connector to next row if not the last row */}
                {rowIndex < serpentineRows.length - 1 && (
                  <div
                    className="absolute w-1 bg-emerald-200 dark:bg-emerald-900"
                    style={{
                      height: "40px",
                      top: "50%",
                      ...(rowIndex % 2 === 0
                        ? { right: "5px" } // End of even row
                        : { left: "5px" }), // End of odd row
                    }}
                  ></div>
                )}

                {/* Timeline nodes */}
                {row.map((surah, nodeIndex) => {
                  const globalIndex =
                    rowIndex % 2 === 0
                      ? rowIndex * itemsPerRow + nodeIndex
                      : rowIndex * itemsPerRow + (row.length - nodeIndex - 1)

                  const isActive = globalIndex === activeIndex
                  const hasData = hasDetailedData(surah.revelationOrder)

                  return (
                    <button
                      key={surah.revelationOrder}
                      data-index={globalIndex}
                      className={`w-8 h-8 rounded-full z-10 transition-all flex items-center justify-center
                        ${isActive ? "ring-4 ring-emerald-100 dark:ring-emerald-900 transform scale-125" : ""}
                        ${surah.period === "Meccan" ? "bg-emerald-600" : "bg-blue-600"}
                        ${hasData ? "opacity-100" : "opacity-50"}
                      `}
                      onClick={() => setActiveIndex(globalIndex)}
                      aria-label={`Go to Surah ${surah.name}`}
                      title={`${surah.name} (${surah.revelationOrder})`}
                    >
                      <span className="text-white text-xs font-bold">{surah.id > 0 ? surah.id : "?"}</span>
                    </button>
                  )
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Mini-map for navigation */}
        <div className="px-4 py-2 border-t border-b">
          <div className="relative h-8 bg-gray-100 dark:bg-gray-700 rounded overflow-hidden">
            <div
              className="absolute top-0 bottom-0 bg-emerald-200 dark:bg-emerald-800 opacity-50"
              style={{
                left: `${(activeIndex / fullSurahTimelineData.length) * 100}%`,
                width: `${(itemsPerRow / fullSurahTimelineData.length) * 100}%`,
                minWidth: "10%",
                maxWidth: "20%",
              }}
            ></div>

            {/* Period markers */}
            <div
              className="absolute top-0 bottom-0 border-r-2 border-dashed border-emerald-500"
              style={{ left: `${(86 / 114) * 100}%` }}
              title="Transition from Meccan to Medinan period"
            ></div>

            <div className="flex justify-between px-2 h-full items-center text-xs">
              <span>Meccan Period</span>
              <span>Medinan Period</span>
            </div>
          </div>
        </div>

        {/* Surah Details */}
        <div className="p-6">
          {activeSurah.id > 0 ? (
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <div className="text-center mb-4">
                  <h3 className="text-2xl font-bold">Surah {activeSurah.name}</h3>
                  <p className="text-xl font-arabic mt-1">{activeSurah.arabicName}</p>
                  <div className="flex items-center justify-center mt-2">
                    <Badge
                      variant={activeSurah.period === "Meccan" ? "default" : "secondary"}
                      className={activeSurah.period === "Meccan" ? "bg-emerald-600" : "bg-blue-600"}
                    >
                      {activeSurah.period}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Clock className="h-4 w-4" />
                  <span>{activeSurah.approximateYear}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <BookOpen className="h-4 w-4" />
                  <span>
                    Surah {activeSurah.id} • {activeSurah.verses} verses
                  </span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-2">
                  <MapPin className="h-4 w-4" />
                  <span>Revelation Order: {activeSurah.revelationOrder}</span>
                </div>
              </div>

              <div className="md:w-2/3">
                <div className="space-y-4">
                  {activeSurah.revelationContext && (
                    <div>
                      <h4 className="font-semibold flex items-center gap-1">
                        <Clock className="h-4 w-4 text-emerald-600" /> Historical Context
                      </h4>
                      <p>{activeSurah.revelationContext}</p>
                    </div>
                  )}

                  <div>
                    <h4 className="font-semibold flex items-center gap-1">
                      <Star className="h-4 w-4 text-emerald-600" /> Main Themes
                    </h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {activeSurah.mainThemes.map((theme, idx) => (
                        <li key={idx}>{theme}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold">Significance</h4>
                    <p>{activeSurah.significance}</p>
                  </div>

                  <div className="pt-2 flex gap-2">
                    <Link href={`/vocabulary?search=${activeSurah.arabicName}`}>
                      <Button variant="outline" size="sm">
                        View Vocabulary
                      </Button>
                    </Link>
                    <Link href={`/surah-vocabulary?surah=${activeSurah.id}`}>
                      <Button variant="outline" size="sm">
                        Explore Surah
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <h3 className="text-xl font-semibold mb-2">Surah #{activeSurah.revelationOrder}</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Detailed information for this surah will be added soon.
              </p>
              <Badge
                variant={activeSurah.period === "Meccan" ? "default" : "secondary"}
                className={activeSurah.period === "Meccan" ? "bg-emerald-600" : "bg-blue-600"}
              >
                {activeSurah.period} Period
              </Badge>
            </div>
          )}
        </div>
      </div>

      {/* Timeline Legend */}
      <Card>
        <CardContent className="p-4">
          <h3 className="font-semibold mb-2">About This Timeline</h3>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-emerald-600"></div>
            <span className="text-sm">Meccan Surahs (610-622 CE)</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            <span className="text-sm">Medinan Surahs (622-632 CE)</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            This timeline represents the chronological order of revelation of the surahs of the Quran. The serpentine
            layout allows visualization of all 114 surahs, with brighter nodes indicating surahs with detailed
            information available.
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
