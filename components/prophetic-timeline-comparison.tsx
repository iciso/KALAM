"use client"

import { useState } from "react"
import { propheticTimelineData } from "@/data/prophetic-timeline-data"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  MapPin,
  Star,
  ArrowRight,
  ArrowLeft,
  BookOpen,
  Sparkles,
  Sword,
  FileSignature,
  User,
  MessageCircle,
  Compass,
} from "lucide-react"

export default function PropheticTimelineComparison() {
  const [activeEventId, setActiveEventId] = useState<string>("isra-miraj")
  const [showRelatedOnly, setShowRelatedOnly] = useState(false)

  // Filter events based on the showRelatedOnly toggle
  const filteredEvents = showRelatedOnly
    ? propheticTimelineData.filter((event) => event.id === "isra-miraj" || event.relatedToIsraMiraj)
    : propheticTimelineData

  const activeEvent = propheticTimelineData.find((event) => event.id === activeEventId)
  const activeEventIndex = filteredEvents.findIndex((event) => event.id === activeEventId)

  const handlePrevious = () => {
    if (activeEventIndex > 0) {
      setActiveEventId(filteredEvents[activeEventIndex - 1].id)
    }
  }

  const handleNext = () => {
    if (activeEventIndex < filteredEvents.length - 1) {
      setActiveEventId(filteredEvents[activeEventIndex + 1].id)
    }
  }

  // Get category icon
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "revelation":
        return <Sparkles className="h-4 w-4" />
      case "journey":
        return <Compass className="h-4 w-4" />
      case "conflict":
        return <Sword className="h-4 w-4" />
      case "treaty":
        return <FileSignature className="h-4 w-4" />
      case "personal":
        return <User className="h-4 w-4" />
      case "dawah":
        return <MessageCircle className="h-4 w-4" />
      default:
        return <Star className="h-4 w-4" />
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-amber-700 dark:text-amber-300">Prophetic Timeline</h2>
        <Button
          variant="outline"
          onClick={() => setShowRelatedOnly(!showRelatedOnly)}
          className={showRelatedOnly ? "bg-amber-100 dark:bg-amber-900/30" : ""}
        >
          {showRelatedOnly ? "Show All Events" : "Show Only Related Events"}
        </Button>
      </div>

      {/* Timeline Visualization */}
      <div className="relative w-full h-24 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
        <div className="absolute left-0 right-0 top-1/2 h-1 bg-amber-300 dark:bg-amber-700 transform -translate-y-1/2"></div>

        {filteredEvents.map((event, index) => {
          // Calculate position as percentage
          const position = `${(index / (filteredEvents.length - 1)) * 100}%`
          const isActive = event.id === activeEventId
          const isIsraMiraj = event.id === "isra-miraj"

          return (
            <button
              key={event.id}
              className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all ${
                isActive ? "scale-150 z-10" : "scale-100 z-0"
              } ${isIsraMiraj ? "bg-amber-500" : "bg-amber-300 dark:bg-amber-600"}`}
              style={{ left: position }}
              onClick={() => setActiveEventId(event.id)}
              aria-label={event.title}
            >
              <div
                className={`rounded-full ${
                  isActive ? "w-5 h-5 border-2 border-amber-200 dark:border-amber-400" : "w-3 h-3"
                } ${isIsraMiraj ? "ring-4 ring-amber-300/50" : ""}`}
              ></div>

              {isActive && (
                <div className="absolute whitespace-nowrap text-xs font-medium -bottom-6 left-1/2 transform -translate-x-1/2 text-amber-800 dark:text-amber-200">
                  {event.year}
                </div>
              )}
            </button>
          )
        })}
      </div>

      {/* Event Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={handlePrevious}
          disabled={activeEventIndex <= 0}
          className="flex items-center gap-1"
        >
          <ArrowLeft className="h-4 w-4" /> Previous Event
        </Button>

        <div className="text-center">
          <span className="text-sm text-gray-500">
            {activeEventIndex + 1} of {filteredEvents.length} events
          </span>
        </div>

        <Button
          variant="outline"
          onClick={handleNext}
          disabled={activeEventIndex >= filteredEvents.length - 1}
          className="flex items-center gap-1"
        >
          Next Event <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Event Details */}
      {activeEvent && (
        <Card
          className={`border-l-4 ${
            activeEvent.id === "isra-miraj"
              ? "border-l-amber-500"
              : activeEvent.relatedToIsraMiraj
                ? "border-l-amber-300"
                : "border-l-gray-300"
          }`}
        >
          <CardHeader className="pb-2">
            <div className="flex justify-between">
              <div>
                <div className="flex items-center gap-2">
                  {getCategoryIcon(activeEvent.category)}
                  <span className="text-xs uppercase text-gray-500">{activeEvent.category}</span>
                </div>
                <CardTitle className="text-xl mt-1">{activeEvent.title}</CardTitle>
                <CardDescription>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-4 w-4 text-amber-600" />
                    <span>
                      {activeEvent.year}
                      {activeEvent.hijriYear && ` (${activeEvent.hijriYear})`}
                      {activeEvent.date && `, ${activeEvent.date}`}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <MapPin className="h-4 w-4 text-amber-600" />
                    <span>{activeEvent.location}</span>
                  </div>
                </CardDescription>
              </div>

              {activeEvent.id === "isra-miraj" && (
                <div className="bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-full text-xs font-medium text-amber-800 dark:text-amber-200 flex items-center">
                  <Star className="h-3 w-3 mr-1" /> Focal Event
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-4">
              <p>{activeEvent.description}</p>

              <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-md">
                <h4 className="font-medium flex items-center gap-1 mb-1">
                  <Star className="h-4 w-4 text-amber-600" /> Significance
                </h4>
                <p className="text-sm">{activeEvent.significance}</p>
              </div>

              {activeEvent.relatedToIsraMiraj && activeEvent.id !== "isra-miraj" && (
                <div className="bg-amber-50 dark:bg-amber-900/20 p-3 rounded-md border-l-2 border-amber-300">
                  <h4 className="font-medium flex items-center gap-1 mb-1">
                    <BookOpen className="h-4 w-4 text-amber-600" /> Relationship to Isra and Miraj
                  </h4>
                  <p className="text-sm">{activeEvent.relatedToIsraMiraj}</p>
                </div>
              )}

              {activeEvent.id === "isra-miraj" && (
                <div className="bg-amber-100/50 dark:bg-amber-900/30 p-3 rounded-md">
                  <h4 className="font-medium mb-2">Key Aspects of Isra and Miraj</h4>
                  <ul className="space-y-1 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                      <span>Occurred during a period of great hardship after the Year of Sorrow</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                      <span>Provided spiritual strength before the Hijra to Medina</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                      <span>Established the five daily prayers as a pillar of Islam</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                      <span>Confirmed Muhammad's ﷺ leadership of all prophets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                      <span>Became a test of faith, distinguishing true believers</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Timeline Legend */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Before Isra and Miraj</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                <span>
                  <strong>First Revelation (610 CE):</strong> Began Muhammad's ﷺ prophethood, while Isra and Miraj later
                  affirmed his status among all prophets.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                <span>
                  <strong>Year of Sorrow (619 CE):</strong> The deaths of Abu Talib and Khadijah left the Prophet ﷺ
                  vulnerable; the Isra and Miraj provided divine comfort during this difficult period.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                <span>
                  <strong>Journey to Ta'if (619 CE):</strong> After rejection and persecution at Ta'if, the Isra and
                  Miraj served as divine consolation and honor.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">After Isra and Miraj</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                <span>
                  <strong>First Pledge of Aqaba (621 CE):</strong> The spiritual authority gained during the Night
                  Journey helped the Prophet ﷺ find support outside Mecca.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                <span>
                  <strong>Hijra (622 CE):</strong> The Isra and Miraj provided spiritual preparation for this major
                  transition, occurring approximately one year before.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                <span>
                  <strong>Conquest of Mecca (630 CE):</strong> The Prophet ﷺ returned in triumph to the same Sacred
                  Mosque from which the Night Journey began, fulfilling the divine promise of return.
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Historical Context */}
      <Card className="bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800">
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Historical Context of Isra and Miraj</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">
            The Night Journey occurred at a critical juncture in the Prophet's ﷺ mission, approximately 10-11 years
            after the beginning of his prophethood and about one year before the Hijra to Medina.
          </p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-1">Timing and Significance</h4>
              <p className="text-sm">
                The Isra and Miraj took place during a period of intense hardship and opposition in Mecca. After losing
                his protective uncle Abu Talib and beloved wife Khadijah in the "Year of Sorrow," and facing rejection
                at Ta'if, the Prophet ﷺ was at one of the most challenging points of his mission. The miraculous journey
                served as divine consolation and preparation for the next phase of his prophetic work.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">Transition Point</h4>
              <p className="text-sm">
                This event marked a transition between the Meccan and Medinan periods of the Prophet's ﷺ life. Shortly
                after the Isra and Miraj, the first Muslims from Yathrib (later Medina) accepted Islam and invited the
                Prophet ﷺ to their city, setting the stage for the Hijra. The spiritual authority and resilience gained
                from the Night Journey helped prepare the Prophet ﷺ for his role as both spiritual and political leader
                in Medina.
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-1">Legacy in Islamic Practice</h4>
              <p className="text-sm">
                The five daily prayers established during this journey became the cornerstone of Muslim religious
                practice, creating a direct connection between the Night Journey and the daily spiritual life of every
                Muslim throughout history. This makes the Isra and Miraj not just a historical event but a living legacy
                that continues to shape Islamic worship.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
