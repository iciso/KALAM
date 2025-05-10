"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { surahImranRevelationData, type RevelationContext } from "@/data/surah-imran-revelation-data"
import {
  Map,
  BookOpen,
  Users,
  Calendar,
  Network,
  Search,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Info,
  Clock,
  Tag,
  LinkIcon,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react"

export default function SurahImranExplorer() {
  const [activeTab, setActiveTab] = useState("timeline")
  const [selectedContext, setSelectedContext] = useState<RevelationContext | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredData, setFilteredData] = useState(surahImranRevelationData)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  // Filter data based on search query and category
  useEffect(() => {
    let filtered = surahImranRevelationData

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (context) =>
          context.title.toLowerCase().includes(query) ||
          context.context.toLowerCase().includes(query) ||
          context.themes.some((theme) => theme.toLowerCase().includes(query)) ||
          context.figures.some((figure) => figure.toLowerCase().includes(query)),
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter((context) => context.category === selectedCategory)
    }

    setFilteredData(filtered)
  }, [searchQuery, selectedCategory])

  // Initialize map when tab changes to geography
  useEffect(() => {
    if (activeTab === "geography" && mapRef.current) {
      // In a real implementation, this would initialize a map library like Leaflet or Mapbox
      // For this example, we'll just show a placeholder
      const mapElement = mapRef.current
      mapElement.innerHTML = `
        <div class="relative w-full h-[400px] bg-gray-200 rounded-lg flex items-center justify-center">
          <div class="absolute inset-0 opacity-50 rounded-lg" style="background-image: url('/arabian-peninsula-medina.png'); background-size: cover;"></div>
          <div class="absolute inset-0 flex flex-col items-center justify-center">
            <p class="text-lg font-bold mb-2">Interactive Map</p>
            <p class="text-sm text-center max-w-md px-4">This would be an interactive map showing the locations related to Surah Al-Imran's revelation contexts, including Medina, Uhud, and other significant places.</p>
          </div>
          ${surahImranRevelationData
            .filter((context) => context.location)
            .map(
              (context) => `
              <div class="absolute cursor-pointer" style="left: ${Math.random() * 70 + 15}%; top: ${Math.random() * 70 + 15}%;">
                <div class="w-4 h-4 bg-emerald-500 rounded-full animate-pulse"></div>
                <div class="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white px-2 py-1 rounded shadow text-xs whitespace-nowrap">
                  ${context.location?.name}
                </div>
              </div>
            `,
            )
            .join("")}
        </div>
      `
    }
  }, [activeTab])

  const handleContextSelect = (context: RevelationContext) => {
    setSelectedContext(context)
  }

  const getAuthenticityBadge = (level: string) => {
    switch (level) {
      case "sahih":
        return (
          <Badge className="bg-green-600">
            <CheckCircle2 className="w-3 h-3 mr-1" /> Sahih (Authentic)
          </Badge>
        )
      case "hasan":
        return (
          <Badge className="bg-blue-600">
            <Info className="w-3 h-3 mr-1" /> Hasan (Good)
          </Badge>
        )
      case "da'if":
        return (
          <Badge className="bg-amber-600">
            <AlertCircle className="w-3 h-3 mr-1" /> Da'if (Weak)
          </Badge>
        )
      case "multiple-reports":
        return (
          <Badge className="bg-purple-600">
            <Users className="w-3 h-3 mr-1" /> Multiple Reports
          </Badge>
        )
      default:
        return (
          <Badge className="bg-gray-600">
            <HelpCircle className="w-3 h-3 mr-1" /> Unspecified
          </Badge>
        )
    }
  }

  const getCategoryBadge = (category: string) => {
    switch (category) {
      case "theological":
        return <Badge className="bg-indigo-600">Theological</Badge>
      case "interfaith":
        return <Badge className="bg-cyan-600">Interfaith</Badge>
      case "military":
        return <Badge className="bg-red-600">Military</Badge>
      case "social":
        return <Badge className="bg-amber-600">Social</Badge>
      case "legal":
        return <Badge className="bg-emerald-600">Legal</Badge>
      case "narrative":
        return <Badge className="bg-purple-600">Narrative</Badge>
      default:
        return <Badge className="bg-gray-600">Other</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">Surah Ali 'Imran (آل عمران)</CardTitle>
              <CardDescription>
                The Family of Imran • 200 verses • Medinan Surah • Revealed in the 3rd year after Hijrah
              </CardDescription>
            </div>
            <Badge className="bg-blue-600">Medinan</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Surah Ali 'Imran addresses the Christian delegation from Najran, discusses the Battle of Uhud, and
            establishes core theological principles. It was revealed primarily in the 3rd year after Hijrah, with some
            portions revealed during the 9th year when the Christian delegation visited.
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="outline" className="bg-gray-100">
              Monotheism
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              Interfaith Dialogue
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              Battle of Uhud
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              Jesus & Mary
            </Badge>
            <Badge variant="outline" className="bg-gray-100">
              Community Formation
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <Input
            placeholder="Search by theme, figure, or content..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full"
            icon={<Search className="h-4 w-4" />}
          />
        </div>
        <div className="flex gap-2 flex-wrap">
          <Button
            variant={selectedCategory === null ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory(null)}
            className={selectedCategory === null ? "bg-emerald-600 hover:bg-emerald-700" : ""}
          >
            All
          </Button>
          <Button
            variant={selectedCategory === "theological" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("theological")}
            className={selectedCategory === "theological" ? "bg-indigo-600 hover:bg-indigo-700" : ""}
          >
            Theological
          </Button>
          <Button
            variant={selectedCategory === "interfaith" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("interfaith")}
            className={selectedCategory === "interfaith" ? "bg-cyan-600 hover:bg-cyan-700" : ""}
          >
            Interfaith
          </Button>
          <Button
            variant={selectedCategory === "military" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("military")}
            className={selectedCategory === "military" ? "bg-red-600 hover:bg-red-700" : ""}
          >
            Military
          </Button>
          <Button
            variant={selectedCategory === "social" ? "default" : "outline"}
            size="sm"
            onClick={() => setSelectedCategory("social")}
            className={selectedCategory === "social" ? "bg-amber-600 hover:bg-amber-700" : ""}
          >
            Social
          </Button>
        </div>
      </div>

      <Tabs defaultValue="timeline" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
          <TabsTrigger value="timeline" className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Timeline</span>
          </TabsTrigger>
          <TabsTrigger value="geography" className="flex items-center gap-2">
            <Map className="h-4 w-4" />
            <span>Geography</span>
          </TabsTrigger>
          <TabsTrigger value="themes" className="flex items-center gap-2">
            <Network className="h-4 w-4" />
            <span>Theme Network</span>
          </TabsTrigger>
          <TabsTrigger value="narrative" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Narrative Flow</span>
          </TabsTrigger>
        </TabsList>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1 space-y-4 order-2 md:order-1">
            <h3 className="font-medium text-lg">Revelation Contexts</h3>
            <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2">
              {filteredData.length === 0 ? (
                <div className="text-center py-8 text-gray-500">No contexts match your search criteria</div>
              ) : (
                filteredData.map((context) => (
                  <Card
                    key={context.id}
                    className={`cursor-pointer transition-colors ${selectedContext?.id === context.id ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20" : ""}`}
                    onClick={() => handleContextSelect(context)}
                  >
                    <CardHeader className="p-3 pb-0">
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-sm font-medium">Verses {context.verseRange}</CardTitle>
                        {getCategoryBadge(context.category)}
                      </div>
                    </CardHeader>
                    <CardContent className="p-3 pt-1">
                      <p className="text-sm font-medium mb-1">{context.title}</p>
                      <p className="text-xs text-gray-500 line-clamp-2">{context.context}</p>
                    </CardContent>
                  </Card>
                ))
              )}
            </div>
          </div>

          <div className="md:col-span-2 order-1 md:order-2">
            <TabsContent value="timeline" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Chronological Timeline</CardTitle>
                  <CardDescription>
                    Historical sequence of events related to the revelation of Surah Ali 'Imran
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    <div className="space-y-8 relative ml-10">
                      {surahImranRevelationData
                        .filter((context) => context.year !== undefined)
                        .sort((a, b) => (a.year || 0) - (b.year || 0))
                        .map((context) => (
                          <div key={context.id} className="relative">
                            <div className="absolute -left-10 mt-1.5 w-4 h-4 rounded-full bg-emerald-500"></div>
                            <div className="absolute -left-24 mt-1 text-sm font-medium">Year {context.year}</div>
                            <Card className="border-l-4 border-l-emerald-500">
                              <CardHeader className="p-4 pb-2">
                                <div className="flex justify-between items-start">
                                  <CardTitle className="text-base">
                                    Verses {context.verseRange}: {context.title}
                                  </CardTitle>
                                  {getCategoryBadge(context.category)}
                                </div>
                              </CardHeader>
                              <CardContent className="p-4 pt-2">
                                <p className="text-sm mb-3">{context.context}</p>
                                {context.historicalEvent && (
                                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-2">
                                    <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                                    <span>{context.historicalEvent}</span>
                                  </div>
                                )}
                                {context.location && (
                                  <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                    <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                                    <span>{context.location.name}</span>
                                  </div>
                                )}
                              </CardContent>
                            </Card>
                          </div>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="geography" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Geographic Context</CardTitle>
                  <CardDescription>Locations associated with the revelation of Surah Ali 'Imran</CardDescription>
                </CardHeader>
                <CardContent>
                  <div ref={mapRef} className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-lg">
                    {/* Map will be initialized by useEffect */}
                  </div>

                  <div className="mt-6 space-y-4">
                    <h3 className="font-medium">Key Locations</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Card>
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-base">Medina</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                          <p className="text-sm">
                            The city where most of Surah Ali 'Imran was revealed, including the verses related to
                            interfaith dialogue with Christians of Najran and theological foundations.
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-base">Mount Uhud</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                          <p className="text-sm">
                            The site of the Battle of Uhud (3 AH), which is extensively discussed in verses 121-175 of
                            the surah, addressing preparation, battle, and aftermath.
                          </p>
                        </CardContent>
                      </Card>

                      <Card>
                        <CardHeader className="p-4 pb-2">
                          <CardTitle className="text-base">Najran</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4 pt-2">
                          <p className="text-sm">
                            The home region of the Christian delegation that came to Medina in year 9 AH, leading to the
                            revelation of verses related to Jesus, Mary, and monotheism.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="themes" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Thematic Network</CardTitle>
                  <CardDescription>Interconnections between key themes in Surah Ali 'Imran</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="w-full h-[400px] bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                    <div className="text-center p-6">
                      <Network className="h-12 w-12 mx-auto mb-4 text-emerald-600" />
                      <p className="text-lg font-medium mb-2">Interactive Theme Network</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
                        This would be an interactive visualization showing how themes like Monotheism, Interfaith
                        Dialogue, Battle of Uhud, Jesus & Mary, and Community Formation interconnect throughout the
                        surah.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="font-medium mb-4">Major Themes</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                      {Array.from(new Set(surahImranRevelationData.flatMap((context) => context.themes)))
                        .sort()
                        .map((theme) => (
                          <Badge
                            key={theme}
                            variant="outline"
                            className="py-2 px-3 text-sm justify-start"
                            onClick={() => setSearchQuery(theme)}
                          >
                            <Tag className="h-3 w-3 mr-2" />
                            {theme}
                          </Badge>
                        ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="narrative" className="m-0">
              <Card>
                <CardHeader>
                  <CardTitle>Narrative Flow</CardTitle>
                  <CardDescription>
                    Sequential progression of themes and stories through Surah Ali 'Imran
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative">
                    <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                    <div className="space-y-6">
                      {surahImranRevelationData.map((context, index) => (
                        <div key={context.id} className={`flex ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                          <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                            <div className="mb-1">
                              <Badge variant="outline" className="mb-1">
                                Verses {context.verseRange}
                              </Badge>
                            </div>
                            <h3 className="font-medium text-base mb-1">{context.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{context.context}</p>
                            <div className="flex flex-wrap gap-1 mt-2 justify-end">
                              {context.themes.map((theme) => (
                                <Badge key={theme} variant="outline" className="text-xs">
                                  {theme}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="relative">
                            <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-emerald-500 transform -translate-x-1/2"></div>
                          </div>
                          <div className="w-1/2"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </div>
        </div>
      </Tabs>

      {selectedContext && (
        <Card className="border-emerald-500">
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>
                  Verses {selectedContext.verseRange}: {selectedContext.title}
                </CardTitle>
                <CardDescription>Detailed revelation context</CardDescription>
              </div>
              <div className="flex gap-2">
                {getAuthenticityBadge(selectedContext.authenticityLevel)}
                {getCategoryBadge(selectedContext.category)}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">Historical Context</h3>
              <p>{selectedContext.context}</p>
              {selectedContext.historicalEvent && (
                <div className="flex items-center mt-3 text-gray-600 dark:text-gray-400">
                  <Calendar className="h-4 w-4 mr-2 text-emerald-600" />
                  <span>{selectedContext.historicalEvent}</span>
                </div>
              )}
            </div>

            {selectedContext.location && (
              <div>
                <h3 className="font-medium mb-2">Location</h3>
                <div className="flex items-center text-gray-600 dark:text-gray-400">
                  <MapPin className="h-4 w-4 mr-2 text-emerald-600" />
                  <span>{selectedContext.location.name}</span>
                </div>
                <p className="text-sm mt-1">{selectedContext.location.description}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="font-medium mb-2">Key Themes</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedContext.themes.map((theme) => (
                    <Badge key={theme} variant="outline" className="bg-gray-100">
                      {theme}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-medium mb-2">Key Figures</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedContext.figures.map((figure) => (
                    <Badge key={figure} variant="outline" className="bg-gray-100">
                      {figure}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {selectedContext.relatedContexts && selectedContext.relatedContexts.length > 0 && (
              <div>
                <h3 className="font-medium mb-2">Related Contexts</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedContext.relatedContexts.map((contextId) => {
                    const related = surahImranRevelationData.find((c) => c.id === contextId)
                    return related ? (
                      <Button
                        key={contextId}
                        variant="outline"
                        size="sm"
                        className="gap-1"
                        onClick={() => handleContextSelect(related)}
                      >
                        <LinkIcon className="h-3 w-3" />
                        Verses {related.verseRange}
                      </Button>
                    ) : null
                  })}
                </div>
              </div>
            )}

            <div className="flex justify-between pt-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const currentIndex = surahImranRevelationData.findIndex((c) => c.id === selectedContext.id)
                  if (currentIndex > 0) {
                    handleContextSelect(surahImranRevelationData[currentIndex - 1])
                  }
                }}
                disabled={selectedContext.id === 1}
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> Previous
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  const currentIndex = surahImranRevelationData.findIndex((c) => c.id === selectedContext.id)
                  if (currentIndex < surahImranRevelationData.length - 1) {
                    handleContextSelect(surahImranRevelationData[currentIndex + 1])
                  }
                }}
                disabled={selectedContext.id === surahImranRevelationData.length}
              >
                Next <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
