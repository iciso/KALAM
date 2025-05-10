"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  MapPin,
  Navigation,
  Info,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Calendar,
  BookOpen,
  MapIcon,
} from "lucide-react"
import { hijraQuranicReferences } from "@/data/hijra-quranic-references"

// Define the locations on the Hijra route with accurate geographic coordinates
const locations = [
  {
    id: "mecca",
    name: "Mecca",
    arabicName: "مكة",
    // Mecca is in the western part of the Arabian Peninsula
    coordinates: { x: 55, y: 78 },
    description: "The birthplace of Prophet Muhammad ﷺ and the starting point of the Hijra journey.",
    events: [
      "Muslims faced increasing persecution",
      "Plot to assassinate the Prophet",
      "Prophet Muhammad ﷺ and Abu Bakr secretly left the city",
    ],
    date: "1st Rabi al-Awwal, 1 AH (September 622 CE)",
    imageUrl: "/images/hijra/mecca.jpg",
  },
  {
    id: "cave-thawr",
    name: "Cave of Thawr",
    arabicName: "غار ثور",
    // Cave of Thawr is south of Mecca
    coordinates: { x: 56, y: 81 },
    description: "A cave south of Mecca where Prophet Muhammad ﷺ and Abu Bakr hid for three days to evade pursuers.",
    events: [
      "Stayed for three days and nights",
      "Quraysh search party came to the cave entrance but did not enter",
      "A spider web and nesting doves at the entrance deterred the pursuers",
    ],
    date: "1st-4th Rabi al-Awwal, 1 AH (September 622 CE)",
    imageUrl: "/images/hijra/cave-thawr.jpg",
  },
  {
    id: "coastal-route",
    name: "Coastal Route",
    arabicName: "الطريق الساحلي",
    // Coastal route along the Red Sea coast of Arabia
    coordinates: { x: 52, y: 65 },
    description: "An unusual route along the Red Sea coast taken to avoid pursuers who were monitoring the main road.",
    events: [
      "Guided by Abdullah ibn Urayqit",
      "Traveled mostly at night to avoid detection",
      "Encountered various challenges and received help from locals",
    ],
    date: "4th-8th Rabi al-Awwal, 1 AH (September 622 CE)",
    imageUrl: "/images/hijra/coastal-route.jpg",
  },
  {
    id: "umm-mabad",
    name: "Umm Mabad's Tent",
    arabicName: "خيمة أم معبد",
    // Location between coastal route and Quba
    coordinates: { x: 54, y: 50 },
    description: "A stop along the journey where the Prophet displayed a miracle with a dry goat that produced milk.",
    events: [
      "Prophet Muhammad ﷺ asked for milk but Umm Mabad had none to offer",
      "The Prophet touched a dry goat's udder and it produced abundant milk",
      "This miracle led to Umm Mabad and her husband's later conversion to Islam",
    ],
    date: "Rabi al-Awwal, 1 AH (September 622 CE)",
    imageUrl: "/images/hijra/umm-mabad.jpg",
  },
  {
    id: "quba",
    name: "Quba",
    arabicName: "قباء",
    // Quba is on the outskirts of Medina
    coordinates: { x: 55, y: 30 },
    description:
      "A village on the outskirts of Medina where the Prophet stayed for several days and built the first mosque in Islam.",
    events: [
      "Arrived on Monday, 8th Rabi al-Awwal",
      "Stayed for 14 days",
      "Built the Quba Mosque, the first mosque in Islam",
      "Waited for Ali ibn Abi Talib to join them from Mecca",
    ],
    date: "8th-22nd Rabi al-Awwal, 1 AH (September 622 CE)",
    imageUrl: "/images/hijra/quba.jpg",
  },
  {
    id: "medina",
    name: "Medina",
    arabicName: "المدينة",
    // Medina is north of Mecca in the western part of the Arabian Peninsula
    coordinates: { x: 56, y: 25 },
    description:
      "The final destination of the Hijra, formerly known as Yathrib, where the first Islamic community was established.",
    events: [
      "Entered on Friday, 12th Rabi al-Awwal",
      "Warmly welcomed by the Ansar (Helpers)",
      "Established the Prophet's Mosque",
      "Created the Constitution of Medina",
      "Formed the first Islamic society and state",
    ],
    date: "12th Rabi al-Awwal, 1 AH (September 622 CE)",
    imageUrl: "/images/hijra/medina.jpg",
  },
]

export function InteractiveHijraMap() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showTimeline, setShowTimeline] = useState(false)
  const [activeTab, setActiveTab] = useState("details")
  const [mapFocus, setMapFocus] = useState<string | null>(null)

  // Helper function to get the transform for focusing on a specific location
  const getFocusTransform = (locationId: string | null) => {
    if (!locationId) return "translate(0, 0)"

    const location = locations.find((loc) => loc.id === locationId)
    if (!location) return "translate(0, 0)"

    // Calculate the transform to center the location
    // We need to invert the percentages and adjust for the 200% size
    const translateX = -location.coordinates.x + 50
    const translateY = -location.coordinates.y + 50

    return `translate(${translateX}%, ${translateY}%)`
  }

  const handleLocationClick = (locationId: string) => {
    if (selectedLocation === locationId) {
      setSelectedLocation(null)
      setMapFocus(null)
    } else {
      setSelectedLocation(locationId)
      setMapFocus(locationId)
      setActiveTab("details") // Reset to details tab when changing location
    }
  }

  const getNextLocation = () => {
    if (!selectedLocation) return locations[0].id
    const currentIndex = locations.findIndex((loc) => loc.id === selectedLocation)
    return locations[(currentIndex + 1) % locations.length].id
  }

  const getPrevLocation = () => {
    if (!selectedLocation) return locations[locations.length - 1].id
    const currentIndex = locations.findIndex((loc) => loc.id === selectedLocation)
    return locations[(currentIndex - 1 + locations.length) % locations.length].id
  }

  const zoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 2))
  const zoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.6))

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  const toggleTimeline = () => {
    setShowTimeline(!showTimeline)
  }

  const resetMapView = () => {
    setMapFocus(null)
  }

  const selectedLocationData = selectedLocation ? locations.find((loc) => loc.id === selectedLocation) : null
  const quranicReferences = selectedLocation
    ? hijraQuranicReferences.find((ref) => ref.locationId === selectedLocation)?.references || []
    : []

  return (
    <div className={`relative ${isFullscreen ? "fixed inset-0 z-50 bg-white dark:bg-gray-900 p-4" : ""}`}>
      <div className="relative w-full h-[500px] bg-amber-50 dark:bg-amber-950 rounded-lg overflow-hidden border border-amber-200 dark:border-amber-800">
        {/* Map controls */}
        <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
          <Button variant="outline" size="icon" onClick={zoomIn} title="Zoom In">
            <ZoomIn className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={zoomOut} title="Zoom Out">
            <ZoomOut className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={resetMapView} title="Reset View" disabled={!mapFocus}>
            <Navigation className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={toggleTimeline} title="Toggle Timeline">
            <Calendar className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon" onClick={toggleFullscreen} title="Toggle Fullscreen">
            {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
          </Button>
        </div>

        {/* Map container with zoom and focus */}
        <div
          className="relative w-full h-full overflow-hidden"
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: "center",
            transition: "transform 0.3s ease",
          }}
        >
          {/* Map background with focus */}
          <div
            className="absolute inset-0 transition-all duration-500 ease-in-out"
            style={
              mapFocus
                ? {
                    transform: getFocusTransform(mapFocus),
                    width: "200%",
                    height: "200%",
                  }
                : {}
            }
          >
            <img src="/images/hijra/arabia-map.jpg" alt="Map of Arabia" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black bg-opacity-10"></div>

            {/* Route line - directly on the map background to move with it */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <path
                d={`M ${locations[0].coordinates.x / 2}% ${locations[0].coordinates.y / 2}% 
                    C ${locations[0].coordinates.x / 2 - 1}% ${locations[0].coordinates.y / 2 + 2.5}%, 
                      ${locations[1].coordinates.x / 2 + 1}% ${locations[1].coordinates.y / 2 - 1}%, 
                      ${locations[1].coordinates.x / 2}% ${locations[1].coordinates.y / 2}%
                    C ${locations[1].coordinates.x / 2 - 1.5}% ${locations[1].coordinates.y / 2 - 5}%, 
                      ${locations[2].coordinates.x / 2 + 1.5}% ${locations[2].coordinates.y / 2 + 5}%, 
                      ${locations[2].coordinates.x / 2}% ${locations[2].coordinates.y / 2}%
                    C ${locations[2].coordinates.x / 2 + 0.5}% ${locations[2].coordinates.y / 2 - 2.5}%, 
                      ${locations[3].coordinates.x / 2 - 0.5}% ${locations[3].coordinates.y / 2 + 2.5}%, 
                      ${locations[3].coordinates.x / 2}% ${locations[3].coordinates.y / 2}%
                    C ${locations[3].coordinates.x / 2 + 1}% ${locations[3].coordinates.y / 2 - 5}%, 
                      ${locations[4].coordinates.x / 2 - 1}% ${locations[4].coordinates.y / 2 + 2.5}%, 
                      ${locations[4].coordinates.x / 2}% ${locations[4].coordinates.y / 2}%
                    C ${locations[4].coordinates.x / 2 + 0.25}% ${locations[4].coordinates.y / 2 - 1}%, 
                      ${locations[5].coordinates.x / 2 - 0.25}% ${locations[5].coordinates.y / 2 + 1}%, 
                      ${locations[5].coordinates.x / 2}% ${locations[5].coordinates.y / 2}%`}
                stroke="rgba(220, 38, 38, 0.7)"
                strokeWidth={mapFocus ? "1" : "2"}
                fill="none"
                strokeDasharray="5,5"
                className={mapFocus ? "opacity-70" : "opacity-100"}
              />
            </svg>

            {/* Map markers - directly on the map background to move with it */}
            {locations.map((location) => (
              <div
                key={location.id}
                className={`absolute transition-all duration-300 
                  ${mapFocus && mapFocus !== location.id ? "opacity-40 scale-75" : "opacity-100 scale-100"}
                  ${mapFocus === location.id ? "z-20" : "z-10"}`}
                style={{
                  left: `${location.coordinates.x / 2}%`,
                  top: `${location.coordinates.y / 2}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div
                  className={`
                  flex items-center justify-center w-5 h-5 rounded-full 
                  ${mapFocus === location.id ? "bg-red-600 text-white" : "bg-white text-red-600"} 
                  border-2 border-red-600 shadow-md
                `}
                >
                  <MapPin className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline overlay (conditionally rendered) */}
        {showTimeline && (
          <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-3 border-t border-amber-200 dark:border-amber-800 overflow-x-auto">
            <div className="flex space-x-4 min-w-max">
              {locations.map((location, index) => (
                <div
                  key={location.id}
                  className={`flex flex-col items-center cursor-pointer ${selectedLocation === location.id ? "opacity-100" : "opacity-70"} hover:opacity-100`}
                  onClick={() => handleLocationClick(location.id)}
                >
                  <div className="w-3 h-3 rounded-full bg-red-600 mb-1"></div>
                  <div className="text-xs font-medium">{location.name}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{location.date.split("(")[0]}</div>
                  {index < locations.length - 1 && (
                    <div className="absolute top-4 left-[calc(100%+8px)] w-[calc(100%-16px)] h-0.5 bg-red-600 bg-opacity-50"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Location selection panel - separate from the map */}
      <div className="mt-4 bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-800 rounded-lg p-2 overflow-x-auto">
        <div className="flex items-center">
          <div className="flex-shrink-0 flex items-center mr-3">
            <MapIcon className="h-4 w-4 text-amber-600 dark:text-amber-400 mr-1" />
            <span className="font-medium text-sm">Locations:</span>
          </div>
          <div className="flex space-x-2 min-w-max">
            {locations.map((location) => (
              <Button
                key={location.id}
                variant={selectedLocation === location.id ? "default" : "outline"}
                size="sm"
                className={`flex items-center gap-1 ${
                  selectedLocation === location.id
                    ? "bg-red-600 hover:bg-red-700 text-white"
                    : "border-red-200 dark:border-red-800 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950"
                }`}
                onClick={() => handleLocationClick(location.id)}
              >
                <MapPin className="h-3 w-3" />
                {location.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Selected location details */}
      {selectedLocationData && (
        <Card className="mt-4 border-red-200 dark:border-red-900">
          <CardContent className="pt-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-red-800 dark:text-red-400">{selectedLocationData.name}</h3>
                <p className="text-lg font-semibold text-red-600 dark:text-red-500">
                  {selectedLocationData.arabicName}
                </p>
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{selectedLocationData.date}</div>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details" className="flex items-center gap-1">
                  <Info className="h-4 w-4" /> Details
                </TabsTrigger>
                <TabsTrigger
                  value="quranic"
                  className="flex items-center gap-1"
                  disabled={quranicReferences.length === 0}
                >
                  <BookOpen className="h-4 w-4" /> Quranic References
                  {quranicReferences.length > 0 && (
                    <span className="ml-1 text-xs bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-full px-1.5">
                      {quranicReferences.length}
                    </span>
                  )}
                </TabsTrigger>
              </TabsList>

              <TabsContent value="details" className="mt-4">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Location image */}
                  <div className="w-full md:w-1/3">
                    <div className="relative h-48 md:h-full rounded-md overflow-hidden">
                      <img
                        src={selectedLocationData.imageUrl || "/placeholder.svg"}
                        alt={selectedLocationData.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Location details */}
                  <div className="w-full md:w-2/3">
                    <p className="mb-3 text-gray-700 dark:text-gray-300">{selectedLocationData.description}</p>

                    <div className="mt-4">
                      <h4 className="font-semibold text-red-700 dark:text-red-500 flex items-center gap-1 mb-2">
                        <Info className="h-4 w-4" /> Key Events
                      </h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        {selectedLocationData.events.map((event, index) => (
                          <li key={index}>{event}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="quranic" className="mt-4">
                {quranicReferences.length > 0 ? (
                  <div className="space-y-6">
                    {quranicReferences.map((reference) => (
                      <div
                        key={reference.id}
                        className="border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0"
                      >
                        <h4 className="font-semibold text-lg mb-2">
                          Surah {reference.surah}, Ayah {reference.ayah}
                        </h4>
                        <div className="mb-3 text-right font-arabic text-xl leading-loose text-gray-800 dark:text-gray-200">
                          {reference.arabicText}
                        </div>
                        <div className="mb-3 italic text-gray-700 dark:text-gray-300">"{reference.translation}"</div>
                        <div className="text-sm bg-amber-50 dark:bg-amber-950 p-3 rounded-md mb-2">
                          <p className="font-semibold mb-1 text-amber-800 dark:text-amber-300">Context:</p>
                          <p className="text-gray-700 dark:text-gray-300">{reference.context}</p>
                        </div>
                        <div className="text-sm bg-red-50 dark:bg-red-950 p-3 rounded-md">
                          <p className="font-semibold mb-1 text-red-800 dark:text-red-300">
                            Relevance to {selectedLocationData.name}:
                          </p>
                          <p className="text-gray-700 dark:text-gray-300">{reference.relevance}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500 dark:text-gray-400">
                    <BookOpen className="h-12 w-12 mx-auto mb-2 opacity-30" />
                    <p>No Quranic references available for this location.</p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      )}

      {!selectedLocation && (
        <div className="mt-4 p-4 bg-amber-50 dark:bg-amber-950 rounded-lg border border-amber-200 dark:border-amber-800 text-amber-800 dark:text-amber-300">
          <h3 className="font-bold flex items-center gap-1 mb-2">
            <Navigation className="h-4 w-4" /> The Hijra Route
          </h3>
          <p className="text-sm">
            Select any location from the panel above to explore the Hijra journey from Mecca to Medina. This historic
            migration took place in 622 CE (1 AH) and marks the beginning of the Islamic calendar.
          </p>
        </div>
      )}
    </div>
  )
}
