"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  ChevronUp,
  ChevronDown,
  Info,
  Book,
  MapPin,
  Star,
  Moon,
  Eye,
  Heart,
  Maximize,
  Minimize,
  RotateCcw,
  BookOpen,
  ImageIcon,
  FileText,
  Quote,
  BookMarked,
  ChevronRight,
} from "lucide-react"
import {
  israMirajLocations,
  prophetEncounters,
  israMirajQuranicReferences,
  israMirajContext,
  afterlifeVisions,
  authenticHadithReferences,
} from "@/data/isra-miraj-data"

// Default placeholder image
const DEFAULT_PLACEHOLDER = "/islamic-journey.png"

export function InteractiveIsraMiraj() {
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("details")
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [showTimeline, setShowTimeline] = useState(true)
  const [animationInProgress, setAnimationInProgress] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState<Record<string, boolean>>({})
  const [expandedTafsir, setExpandedTafsir] = useState<Record<string, boolean>>({})
  const visualizerRef = useRef<HTMLDivElement>(null)

  // Get the selected location data
  const locationData = selectedLocation ? israMirajLocations.find((loc) => loc.id === selectedLocation) : null

  // Get prophet encounters for the selected location
  const locationProphets = selectedLocation
    ? prophetEncounters.filter((prophet) => prophet.location === selectedLocation)
    : []

  // Get Quranic references relevant to the selected location
  const locationReferences = selectedLocation
    ? israMirajQuranicReferences.filter((ref) => {
        // Match references to locations based on content
        if (selectedLocation === "mecca" && ref.id === "isra-1") return true
        if (selectedLocation === "jerusalem" && ref.id === "isra-1") return true
        if (selectedLocation === "sidrat-muntaha" && ref.id.startsWith("najm")) return true
        if (selectedLocation === "divine-presence" && ref.id === "baqarah-1") return true
        return false
      })
    : []

  // Get Hadith references relevant to the selected location
  const locationHadith = selectedLocation
    ? authenticHadithReferences.filter((hadith) => hadith.location === selectedLocation)
    : []

  // Handle location selection
  const handleLocationSelect = (locationId: string) => {
    if (animationInProgress) return

    setAnimationInProgress(true)

    // If already selected, deselect it
    if (selectedLocation === locationId) {
      setSelectedLocation(null)
      setAnimationInProgress(false)
      return
    }

    // Otherwise, select the new location
    setSelectedLocation(locationId)
    setActiveTab("details")

    // End animation after a delay
    setTimeout(() => {
      setAnimationInProgress(false)
    }, 500)
  }

  // Navigate to next or previous location
  const navigateLocation = (direction: "next" | "prev") => {
    if (!selectedLocation || animationInProgress) return

    const currentIndex = israMirajLocations.findIndex((loc) => loc.id === selectedLocation)
    let newIndex

    if (direction === "next") {
      newIndex = (currentIndex + 1) % israMirajLocations.length
    } else {
      newIndex = (currentIndex - 1 + israMirajLocations.length) % israMirajLocations.length
    }

    handleLocationSelect(israMirajLocations[newIndex].id)
  }

  // Toggle fullscreen mode
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
  }

  // Reset the visualization
  const resetVisualization = () => {
    setSelectedLocation(null)
    setActiveTab("details")
  }

  // Toggle timeline visibility
  const toggleTimeline = () => {
    setShowTimeline(!showTimeline)
  }

  // Toggle tafsir expansion
  const toggleTafsir = (id: string) => {
    setExpandedTafsir((prev) => ({
      ...prev,
      [id]: !prev[id],
    }))
  }

  // Get the vertical position for a location in the visualization
  const getLocationPosition = (order: number) => {
    const totalLocations = israMirajLocations.length
    const maxPosition = 85 // Maximum percentage from top
    const minPosition = 5 // Minimum percentage from top

    // Calculate position based on order (reversed, since we're going from bottom to top)
    const reversedOrder = totalLocations - order + 1
    return minPosition + ((reversedOrder - 1) / (totalLocations - 1)) * (maxPosition - minPosition)
  }

  // Handle image load
  const handleImageLoad = (imageId: string) => {
    setImagesLoaded((prev) => ({ ...prev, [imageId]: true }))
  }

  // Handle image error
  const handleImageError = (imageId: string) => {
    console.error(`Failed to load image: ${imageId}`)
    setImagesLoaded((prev) => ({ ...prev, [imageId]: false }))
  }

  // Generate a placeholder image URL based on the name
  const getPlaceholderImage = (name: string) => {
    return `/placeholder.svg?height=400&width=600&query=${encodeURIComponent(name)}`
  }

  return (
    <div className={`relative ${isFullscreen ? "fixed inset-0 z-50 bg-white dark:bg-gray-900 p-4 overflow-auto" : ""}`}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Timeline Section - Left Side */}
        <div className="md:col-span-1">
          {/* Title moved outside the timeline */}
          <div className="mb-2 text-center">
            <h3 className="text-xl font-bold text-amber-700 dark:text-amber-300">The Ascension</h3>
            <p className="text-amber-600/80 dark:text-amber-400/80 text-sm">Journey through the Heavens</p>
          </div>

          {/* Timeline Visualization */}
          <div className="relative w-full h-[700px] bg-gray-900 rounded-lg overflow-hidden border border-amber-200 dark:border-amber-800">
            {/* Background image */}
            <div className="absolute inset-0 w-full h-full">
              <img
                src={DEFAULT_PLACEHOLDER || "/placeholder.svg"}
                alt="Night sky background"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
            </div>

            {/* Controls */}
            <div className="absolute top-2 right-2 z-10 flex flex-col gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={toggleFullscreen}
                className="bg-gray-800/70 text-white border-gray-700 hover:bg-gray-700/80"
              >
                {isFullscreen ? <Minimize className="h-4 w-4" /> : <Maximize className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={resetVisualization}
                className="bg-gray-800/70 text-white border-gray-700 hover:bg-gray-700/80"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>

            {/* Vertical journey path */}
            <div className="absolute left-1/2 top-[5%] bottom-[5%] w-1 bg-gradient-to-b from-amber-300 via-amber-400 to-amber-300 transform -translate-x-1/2 rounded-full"></div>

            {/* Location markers */}
            {israMirajLocations.map((location) => {
              const isSelected = selectedLocation === location.id
              const position = getLocationPosition(location.order)

              return (
                <div
                  key={location.id}
                  className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out ${
                    animationInProgress ? "pointer-events-none" : ""
                  } ${isSelected ? "z-20 scale-125" : "z-10 hover:scale-110"}`}
                  style={{ top: `${position}%` }}
                >
                  <button
                    onClick={() => handleLocationSelect(location.id)}
                    className={`relative flex items-center justify-center w-8 h-8 rounded-full ${
                      isSelected
                        ? "bg-amber-500 text-white ring-4 ring-amber-300/50"
                        : "bg-gray-800/80 text-amber-400 hover:bg-gray-700/90"
                    } transition-all duration-300`}
                    aria-label={`Select ${location.name}`}
                  >
                    <MapPin className="h-4 w-4" />
                  </button>

                  {/* Location name label */}
                  <div
                    className={`absolute ${
                      location.order % 2 === 0 ? "left-full ml-3" : "right-full mr-3"
                    } top-1/2 transform -translate-y-1/2 transition-all duration-300 ${
                      isSelected ? "opacity-100" : "opacity-70"
                    }`}
                  >
                    <div className={`text-sm font-medium ${isSelected ? "text-amber-300" : "text-amber-200/80"}`}>
                      {location.name}
                    </div>
                    <div className={`text-xs ${isSelected ? "text-amber-100/90" : "text-amber-100/60"}`}>
                      {location.arabicName}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Instructions moved below the timeline */}
          <div className="mt-2 text-center">
            <p className="text-amber-700 dark:text-amber-400 text-sm flex items-center justify-center gap-1">
              <Moon className="h-4 w-4" />
              Click on any location marker along the vertical path to explore each stage of this extraordinary journey.
            </p>
          </div>
        </div>

        {/* Information Display - Right Side */}
        <div className="md:col-span-2">
          {selectedLocation && locationData ? (
            <Card className="h-full border-amber-200 dark:border-amber-800">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl text-amber-700 dark:text-amber-300">{locationData.name}</CardTitle>
                    <CardDescription>{locationData.arabicName}</CardDescription>
                  </div>
                  <div className="flex gap-1">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => navigateLocation("prev")}
                      className="text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200"
                    >
                      <ChevronUp className="h-5 w-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => navigateLocation("next")}
                      className="text-amber-700 dark:text-amber-300 hover:text-amber-800 dark:hover:text-amber-200"
                    >
                      <ChevronDown className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-3 bg-amber-50 dark:bg-amber-950/30">
                    <TabsTrigger
                      value="details"
                      className="data-[state=active]:bg-amber-200/50 dark:data-[state=active]:bg-amber-900/50"
                    >
                      <Info className="h-4 w-4 mr-1" /> Details
                    </TabsTrigger>
                    <TabsTrigger
                      value="quranic"
                      className="data-[state=active]:bg-amber-200/50 dark:data-[state=active]:bg-amber-900/50"
                      disabled={locationReferences.length === 0}
                    >
                      <BookOpen className="h-4 w-4 mr-1" /> Quranic
                    </TabsTrigger>
                    <TabsTrigger
                      value="hadeeth"
                      className="data-[state=active]:bg-amber-200/50 dark:data-[state=active]:bg-amber-900/50"
                      disabled={locationHadith.length === 0}
                    >
                      <Book className="h-4 w-4 mr-1" /> Hadeeth
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="details" className="mt-4">
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="w-full md:w-1/3">
                        <div className="relative h-48 md:h-full rounded-md overflow-hidden border border-amber-200 dark:border-amber-800">
                          {/* Use placeholder image instead of trying to load from a path that might not exist */}
                          <div className="absolute inset-0 bg-amber-50 dark:bg-amber-950/30 flex items-center justify-center">
                            <div className="text-center p-4">
                              <ImageIcon className="h-8 w-8 mx-auto mb-2 text-amber-500" />
                              <p className="text-sm text-amber-700 dark:text-amber-300">{locationData.name}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:w-2/3">
                        <p className="mb-3">{locationData.description}</p>

                        {locationData.events.length > 0 && (
                          <div className="mt-4">
                            <h4 className="font-semibold text-amber-700 dark:text-amber-300 flex items-center gap-1 mb-2">
                              <Star className="h-4 w-4" /> Key Events
                            </h4>
                            <div className="space-y-3">
                              {locationData.events.map((event) => (
                                <div key={event.id} className="bg-amber-50 dark:bg-amber-950/30 p-3 rounded-md">
                                  <h5 className="font-medium text-amber-700 dark:text-amber-300 mb-1">{event.title}</h5>
                                  <p className="text-sm mb-2">{event.description}</p>
                                  <p className="text-xs text-amber-600 dark:text-amber-400 italic">
                                    <span className="font-medium">Significance:</span> {event.significance}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="quranic" className="mt-4">
                    {locationReferences.length > 0 ? (
                      <div className="space-y-6">
                        {locationReferences.map((reference) => (
                          <div key={reference.id} className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-md">
                            <h4 className="font-semibold text-amber-700 dark:text-amber-300 mb-2">
                              Surah {reference.surah}, Ayah {reference.ayahNumbers.join(", ")}
                            </h4>

                            <div className="mb-3 text-right font-arabic text-xl leading-loose">
                              {reference.arabicText}
                            </div>

                            <div className="mb-3 italic bg-amber-100/50 dark:bg-amber-900/20 p-3 rounded-md">
                              "{reference.translation}"
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                              <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-md">
                                <h5 className="font-medium text-amber-700 dark:text-amber-300 mb-1">Context</h5>
                                <p className="text-sm">{reference.context}</p>
                              </div>

                              <div className="bg-amber-100/50 dark:bg-amber-900/20 p-3 rounded-md">
                                <h5 className="font-medium text-amber-700 dark:text-amber-300 mb-1">Relevance</h5>
                                <p className="text-sm">{reference.relevance}</p>
                              </div>
                            </div>

                            {/* Tafsir Section */}
                            <div className="mt-4">
                              <h5 className="font-semibold text-amber-700 dark:text-amber-300 flex items-center gap-1 mb-3">
                                <BookMarked className="h-4 w-4" /> Tafsir (Scholarly Interpretations)
                              </h5>
                              <div className="space-y-4">
                                {reference.tafsir.map((tafsir, index) => {
                                  const tafsirId = `${reference.id}-${index}`
                                  const isExpanded = expandedTafsir[tafsirId] || false

                                  return (
                                    <div
                                      key={tafsirId}
                                      className="border border-amber-200 dark:border-amber-800 rounded-md overflow-hidden"
                                    >
                                      <div
                                        className="flex items-center justify-between p-3 bg-amber-100 dark:bg-amber-900/40 cursor-pointer"
                                        onClick={() => toggleTafsir(tafsirId)}
                                      >
                                        <div className="font-medium text-amber-800 dark:text-amber-200">
                                          {tafsir.scholar}
                                        </div>
                                        <div className="flex items-center">
                                          <span className="text-xs text-amber-600 dark:text-amber-400 mr-2">
                                            {tafsir.source}
                                          </span>
                                          <ChevronRight
                                            className={`h-4 w-4 text-amber-600 transition-transform ${
                                              isExpanded ? "rotate-90" : ""
                                            }`}
                                          />
                                        </div>
                                      </div>
                                      {isExpanded && (
                                        <div className="p-3 bg-amber-50 dark:bg-amber-950/20 text-sm">
                                          <p>{tafsir.text}</p>
                                        </div>
                                      )}
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <BookOpen className="h-12 w-12 mx-auto mb-2 opacity-30" />
                        <p>No specific Quranic references for this location.</p>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="hadeeth" className="mt-4">
                    {locationHadith.length > 0 ? (
                      <div className="space-y-4">
                        {locationHadith.map((hadith) => (
                          <div
                            key={hadith.id}
                            className="bg-amber-50 dark:bg-amber-950/30 p-4 rounded-md border-l-4 border-amber-500"
                          >
                            <div className="flex items-start gap-2 mb-3">
                              <Quote className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                              <div>
                                <h4 className="font-semibold text-amber-700 dark:text-amber-300">
                                  {hadith.collection} #{hadith.hadithNumber}
                                </h4>
                                <p className="text-sm text-amber-600 dark:text-amber-400">
                                  Narrated by {hadith.narrator} | {hadith.bookNumber}
                                </p>
                              </div>
                            </div>

                            <div className="bg-amber-100/50 dark:bg-amber-900/20 p-3 rounded-md mb-3">
                              <p className="text-sm">{hadith.text}</p>
                            </div>

                            <div className="bg-amber-100/30 dark:bg-amber-900/10 p-3 rounded-md">
                              <h5 className="font-medium text-amber-700 dark:text-amber-300 text-sm mb-1 flex items-center gap-1">
                                <FileText className="h-4 w-4" /> Relevance to this Location
                              </h5>
                              <p className="text-sm">{hadith.relevance}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        <Book className="h-12 w-12 mx-auto mb-2 opacity-30" />
                        <p>No Hadeeth references for this location.</p>
                      </div>
                    )}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ) : (
            <Card className="h-full border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Book className="h-5 w-5 text-amber-600" />
                  About the Night Journey
                </CardTitle>
                <CardDescription>Select a location from the timeline to view detailed information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    The Night Journey and Ascension (Isra and Miraj) was a miraculous journey that took place in one
                    night, where Prophet Muhammad ﷺ traveled from Mecca to Jerusalem and then ascended through the seven
                    heavens.
                  </p>

                  <div className="bg-amber-100/50 dark:bg-amber-900/20 p-4 rounded-md">
                    <h3 className="font-semibold text-lg mb-2 text-amber-700 dark:text-amber-300">Key Aspects</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                        <span>The journey began at Al-Masjid Al-Haram in Mecca</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                        <span>Prophet Muhammad ﷺ traveled on Al-Buraq to Jerusalem</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                        <span>He led all previous prophets in prayer at Al-Masjid Al-Aqsa</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                        <span>He ascended through seven heavens, meeting different prophets</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                        <span>He reached Sidrat al-Muntaha (the Lote Tree of the Utmost Boundary)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                        <span>The five daily prayers were prescribed during this journey</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                        <span>He returned to Mecca before dawn of the same night</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>

      {/* Historical context section */}
      {!isFullscreen && (
        <Card className="mt-4 border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Book className="h-5 w-5 text-amber-600" />
              Historical Context
            </CardTitle>
            <CardDescription>
              The Night Journey and Ascension (Isra and Miraj) occurred during a difficult period in the Prophet's life
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-amber-800 dark:text-amber-300">Timing</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                    <span>
                      <strong>Date:</strong> {israMirajContext.timing.islamicDate}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                    <span>
                      <strong>Period:</strong> {israMirajContext.timing.period}
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                    <span>
                      <strong>Context:</strong> {israMirajContext.timing.significance}
                    </span>
                  </li>
                </ul>

                <h3 className="font-semibold text-lg mt-6 mb-2 text-amber-800 dark:text-amber-300">
                  Spiritual Lessons
                </h3>
                <ul className="space-y-2">
                  {israMirajContext.spiritualLessons.map((lesson, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                      <span>{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2 text-amber-800 dark:text-amber-300">
                  Historical Significance
                </h3>
                <ul className="space-y-2">
                  {israMirajContext.historicalSignificance.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="mt-1 h-2 w-2 rounded-full bg-amber-500 flex-shrink-0"></span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Visions of Paradise and Hell */}
      {!isFullscreen && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <Card className="border-green-200 dark:border-green-900 bg-green-50/50 dark:bg-green-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                <Heart className="h-5 w-5" />
                Visions of Paradise
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {afterlifeVisions.paradise.map((vision) => (
                  <div key={vision.id} className="bg-green-100/50 dark:bg-green-900/20 p-3 rounded-md">
                    <h4 className="font-medium text-green-800 dark:text-green-300 mb-1">{vision.title}</h4>
                    <p className="text-sm text-green-700 dark:text-green-200/80 mb-2">{vision.description}</p>
                    <p className="text-xs italic text-green-600 dark:text-green-400/70">
                      <span className="font-medium">Significance:</span> {vision.significance}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 dark:border-red-900 bg-red-50/50 dark:bg-red-950/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <Eye className="h-5 w-5" />
                Visions of Hell
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {afterlifeVisions.hell.map((vision) => (
                  <div key={vision.id} className="bg-red-100/50 dark:bg-red-900/20 p-3 rounded-md">
                    <h4 className="font-medium text-red-800 dark:text-red-300 mb-1">{vision.title}</h4>
                    <p className="text-sm text-red-700 dark:text-red-200/80 mb-2">{vision.description}</p>
                    <p className="text-xs italic text-red-600 dark:text-red-400/70">
                      <span className="font-medium">Significance:</span> {vision.significance}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
