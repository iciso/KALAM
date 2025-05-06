"use client"

import { useState } from "react"
import { prophetsTimelineData } from "@/data/prophets-timeline-data"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Clock, MapPin, Star } from "lucide-react"
import Link from "next/link"

export default function ProphetsTimeline() {
  const [activeIndex, setActiveIndex] = useState(0)
  const prophet = prophetsTimelineData[activeIndex]

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev < prophetsTimelineData.length - 1 ? prev + 1 : prev))
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="bg-emerald-800 text-white p-4">
          <h2 className="text-xl font-bold">Prophets Timeline</h2>
          <p className="text-sm opacity-90">Chronological sequence of prophets mentioned in the Quran</p>
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
              {activeIndex + 1} of {prophetsTimelineData.length}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={goToNext}
              disabled={activeIndex === prophetsTimelineData.length - 1}
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
                  {prophetsTimelineData.map((p, idx) => (
                    <button
                      key={p.id}
                      className={`w-3 h-3 rounded-full z-10 transition-all ${
                        idx <= activeIndex
                          ? "bg-emerald-600 ring-4 ring-emerald-100 dark:ring-emerald-900"
                          : "bg-gray-300 dark:bg-gray-600"
                      } ${idx === activeIndex ? "w-5 h-5 -mt-1" : ""}`}
                      onClick={() => setActiveIndex(idx)}
                      aria-label={`Go to ${p.name}`}
                    ></button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Prophet Details */}
        <div className="p-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold">{prophet.name}</h3>
                <p className="text-xl font-arabic mt-1">{prophet.arabicName}</p>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-4">
                <Clock className="h-4 w-4" />
                <span>{prophet.approximatePeriod}</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>{prophet.location}</span>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold flex items-center gap-1">
                    <Clock className="h-4 w-4 text-emerald-600" /> Time Period
                  </h4>
                  <p>{prophet.yearRange}</p>
                </div>

                <div>
                  <h4 className="font-semibold flex items-center gap-1">
                    <Star className="h-4 w-4 text-emerald-600" /> Key Events
                  </h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {prophet.keyEvents.map((event, idx) => (
                      <li key={idx}>{event}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Significance</h4>
                  <p>{prophet.significance}</p>
                </div>

                <div className="pt-2">
                  <Link href={`/vocabulary?search=${prophet.arabicName}`}>
                    <Button variant="outline" size="sm">
                      View in Dictionary
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
            This timeline represents the approximate chronological order of prophets mentioned in the Quran. The exact
            dates and time periods are approximate and based on various historical sources.
          </p>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            The five major prophets (Ulul 'Azm) are: Nuh (Noah), Ibrahim (Abraham), Musa (Moses), Isa (Jesus), and
            Muhammad.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
