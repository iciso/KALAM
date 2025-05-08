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
  const [specialConnectionVisible, setSpecialConnectionVisible] = useState(false)
  const surah58Ref = useRef<HTMLButtonElement>(null)
  const surah49Ref = useRef<HTMLButtonElement>(null)
  const [connectionPath, setConnectionPath] = useState("")

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

  // Draw special connection between Surah 58 and Surah 49
  useEffect(() => {
    // Wait for refs to be available and timeline to be rendered
    if (surah58Ref.current && surah49Ref.current && timelineRef.current) {
      // Use requestAnimationFrame to ensure the DOM is fully rendered
      requestAnimationFrame(() => {
        const rect58 = surah58Ref.current?.getBoundingClientRect()
        const rect49 = surah49Ref.current?.getBoundingClientRect()
        const timelineRect = timelineRef.current?.getBoundingClientRect()

        if (rect58 && rect49 && timelineRect) {
          // Calculate positions relative to the timeline container
          const x1 = rect58.left + rect58.width / 2 - timelineRect.left
          const y1 = rect58.top + rect58.height / 2 - timelineRect.top
          const x2 = rect49.left + rect49.width / 2 - timelineRect.left
          const y2 = rect49.top + rect49.height / 2 - timelineRect.top

          // Create a vertical path from 58 to 49
          setConnectionPath(`M ${x1},${y1} L ${x1},${y1 + (y2 - y1) / 2} L ${x2},${y1 + (y2 - y1) / 2} L ${x2},${y2}`)
          setSpecialConnectionVisible(true)
        }
      })
    }
  }, [zoomLevel]) // Re-run when zoom level changes to redraw the connection

  // Group surahs into rows for serpentine layout
  const rows = 8 // Number of rows in the serpentine layout
  const itemsPerRow = Math.ceil(fullSurahTimelineData.length / rows)

  // Find the indices of Surah 58 and 49
  const surah58Index = fullSurahTimelineData.findIndex((s) => s.id === 58)
  const surah49Index = fullSurahTimelineData.findIndex((s) => s.id === 49)

  // Calculate which rows they're in
  const surah58Row = Math.floor(surah58Index / itemsPerRow)
  const surah49Row = Math.floor(surah49Index / itemsPerRow)

  // Calculate the position within the row for Surah 58
  const surah58PosInRow =
    surah58Row % 2 === 0 ? surah58Index % itemsPerRow : itemsPerRow - 1 - (surah58Index % itemsPerRow)

  // Create the serpentine layout data structure with custom alignment
  const serpentineRows = Array.from({ length: rows }, (_, rowIndex) => {
    const start = rowIndex * itemsPerRow
    const end = Math.min(start + itemsPerRow, fullSurahTimelineData.length)
    let rowItems = fullSurahTimelineData.slice(start, end)

    // Reverse every other row for the serpentine effect
    rowItems = rowIndex % 2 === 0 ? rowItems : [...rowItems].reverse()

    // Apply custom offset to align Surah 49 under Surah 58
    if (rowIndex === surah49Row) {
      // Calculate how many positions we need to shift
      const surah49PosInRow =
        rowIndex % 2 === 0 ? surah49Index % itemsPerRow : itemsPerRow - 1 - (surah49Index % itemsPerRow)

      const offsetNeeded = surah58PosInRow - surah49PosInRow

      if (offsetNeeded > 0) {
        // Add empty placeholders at the beginning to shift right
        const placeholders = Array(offsetNeeded).fill(null)
        rowItems = [...placeholders, ...rowItems]
      } else if (offsetNeeded < 0) {
        // Add empty placeholders at the end to shift left
        const placeholders = Array(Math.abs(offsetNeeded)).fill(null)
        rowItems = [...rowItems, ...placeholders]
      }
    }

    return rowItems
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
            {/* Special connection between Surah 58 and 49 */}
            {specialConnectionVisible && (
              <svg
                className="absolute top-0 left-0 w-full h-full pointer-events-none z-0"
                style={{ overflow: "visible" }}
              >
                <defs>
                  <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#10b981" />
                  </marker>
                </defs>
                <path
                  d={connectionPath}
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeDasharray="5,3"
                  fill="none"
                  markerEnd="url(#arrowhead)"
                  className="special-connection"
                  style={{
                    visibility: connectionPath ? "visible" : "hidden",
                  }}
                />
              </svg>
            )}

            {serpentineRows.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="flex items-center justify-center relative"
                style={{
                  minWidth: `${row.length * 40}px`,
                  height: "40px",
                  maxWidth: "100%",
                  margin: "0 auto",
                }}
              >
                {/* Connecting line */}
                <div
                  className={`absolute h-1 bg-emerald-200 dark:bg-emerald-900`}
                  style={{
                    top: "50%",
                    transform: "translateY(-50%)",
                    left: "20px",
                    right: "20px",
                  }}
                ></div>

                {/* Vertical connector to next row if not the last row */}
                {rowIndex < serpentineRows.length - 1 && (
                  <div
                    className="absolute w-1 bg-emerald-200 dark:bg-emerald-900"
                    style={{
                      height: "40px",
                      top: "50%",
                      ...(rowIndex % 2 === 0
                        ? { right: "20px" } // End of even row
                        : { left: "20px" }), // End of odd row
                    }}
                  ></div>
                )}

                {/* Timeline nodes */}
                {row.map((surah, nodeIndex) => {
                  // Skip rendering for null placeholders
                  if (surah === null) {
                    return <div key={`placeholder-${rowIndex}-${nodeIndex}`} className="w-8 h-8 mx-1" />
                  }

                  const globalIndex = fullSurahTimelineData.findIndex((s) => s.id === surah.id)
                  const isActive = globalIndex === activeIndex
                  const hasData = hasDetailedData(surah.revelationOrder)

                  // Special refs for Surah 58 and 49
                  const isSurah58 = surah.id === 58
                  const isSurah49 = surah.id === 49
                  const specialRef = isSurah58 ? surah58Ref : isSurah49 ? surah49Ref : null

                  return (
                    <button
                      key={surah.revelationOrder}
                      data-index={globalIndex}
                      data-surah-id={surah.id}
                      ref={specialRef}
                      className={`w-8 h-8 mx-1 rounded-full z-10 transition-all flex items-center justify-center
                        ${isActive ? "ring-4 ring-emerald-100 dark:ring-emerald-900 transform scale-125" : ""}
                        ${surah.period === "Meccan" ? "bg-emerald-600" : "bg-blue-600"}
                        ${hasData ? "opacity-100" : "opacity-50"}
                        ${isSurah58 || isSurah49 ? "ring-2 ring-yellow-400" : ""}
                      `}
                      onClick={() => setActiveIndex(globalIndex)}
                      aria-label={`Go to Surah ${surah.name}`}
                      title={`${surah.name} (${surah.revelationOrder})${isSurah58 || isSurah49 ? " - Special thematic connection" : ""}`}
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
                    {(activeSurah.id === 58 || activeSurah.id === 49) && (
                      <Badge variant="outline" className="ml-2 border-yellow-400 text-yellow-600">
                        Special Connection
                      </Badge>
                    )}
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

                {/* Special connection note */}
                {(activeSurah.id === 58 || activeSurah.id === 49) && (
                  <div className="mt-4 p-2 bg-yellow-50 dark:bg-yellow-900/20 rounded-md text-sm">
                    <p className="text-yellow-800 dark:text-yellow-200">
                      {activeSurah.id === 58
                        ? "This surah has a special thematic connection with Surah Al-Hujurat (49), both addressing social etiquette and proper conduct."
                        : "This surah has a special thematic connection with Surah Al-Mujadilah (58), both addressing social etiquette and proper conduct."}
                    </p>
                  </div>
                )}
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

                  {/* Special connection explanation */}
                  {activeSurah.id === 58 && (
                    <div className="mt-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">
                        Connection with Surah Al-Hujurat (49)
                      </h4>
                      <p className="text-yellow-700 dark:text-yellow-300 mt-1">
                        Both surahs address proper social conduct and etiquette in the Muslim community. While
                        Al-Mujadilah (58) begins with addressing a woman's complaint and establishes principles for
                        private conversations and gatherings, Al-Hujurat (49) provides comprehensive guidelines for
                        social interaction, respect for leadership, and avoiding mockery and backbiting. Together, they
                        form a complete guide to Islamic social ethics.
                      </p>
                    </div>
                  )}

                  {activeSurah.id === 49 && (
                    <div className="mt-2 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-md">
                      <h4 className="font-semibold text-yellow-800 dark:text-yellow-200">
                        Connection with Surah Al-Mujadilah (58)
                      </h4>
                      <p className="text-yellow-700 dark:text-yellow-300 mt-1">
                        Both surahs establish principles for proper social conduct. Al-Hujurat (49) provides guidelines
                        for respecting the Prophet, verifying news, reconciling between believers, and avoiding mockery
                        and suspicion. Al-Mujadilah (58) complements these teachings by addressing private
                        conversations, proper conduct in gatherings, and the importance of making room for others.
                        Together, they form a comprehensive guide to Islamic social ethics.
                      </p>
                    </div>
                  )}

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
                    {(activeSurah.id === 58 || activeSurah.id === 49) && (
                      <Link href={activeSurah.id === 58 ? `/surah-vocabulary?surah=49` : `/surah-vocabulary?surah=58`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-yellow-400 text-yellow-600 hover:bg-yellow-50"
                        >
                          View Connected Surah
                        </Button>
                      </Link>
                    )}
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
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 rounded-full bg-blue-600"></div>
            <span className="text-sm">Medinan Surahs (622-632 CE)</span>
          </div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-4 h-4 rounded-full ring-2 ring-yellow-400 bg-blue-600"></div>
            <span className="text-sm">Surahs with special thematic connections</span>
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
          <p className="text-sm text-yellow-600 dark:text-yellow-400 mt-2">
            <strong>Special Connections:</strong> Some surahs share strong thematic relationships despite being revealed
            at different times. The connection between Surah Al-Mujadilah (58) and Surah Al-Hujurat (49) highlights
            complementary teachings on social etiquette and community conduct.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
