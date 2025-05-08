"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { surahTimelineData } from "@/data/surah-timeline-data"
import { revelationCausesData } from "@/data/revelation-causes-data"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  MapPin,
  BookOpen,
  Users,
  Lightbulb,
  MessageSquare,
  LinkIcon,
  ChevronRight,
  ChevronLeft,
  Info,
} from "lucide-react"
import Link from "next/link"
import * as d3 from "d3"

// Types for our data
interface RevelationCause {
  id: string
  surahId: number
  verseRange: string
  historicalEvent: string
  year: string
  location: string
  keyFigures: string[]
  narrative: string
  thematicConnection: string[]
  authenticityLevel: "sahih" | "hasan" | "daif"
  source: string
  coordinates?: {
    lat: number
    lng: number
  }
}

interface ThemeNode {
  id: string
  name: string
  type: "theme"
  count: number
}

interface EventNode {
  id: string
  name: string
  type: "event"
  year: string
  surahIds: number[]
}

interface LinkData {
  source: string
  target: string
  value: number
}

const RevelationContextExplorer = () => {
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null)
  const [selectedCause, setSelectedCause] = useState<RevelationCause | null>(null)
  const [activeTab, setActiveTab] = useState("timeline")
  const [filteredCauses, setFilteredCauses] = useState<RevelationCause[]>([])
  const [timelineEvents, setTimelineEvents] = useState<any[]>([])
  const networkRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<HTMLDivElement>(null)

  // Filter causes when surah changes
  useEffect(() => {
    if (selectedSurah) {
      const causes = revelationCausesData.filter((cause) => cause.surahId === selectedSurah)
      setFilteredCauses(causes)
      if (causes.length > 0 && !selectedCause) {
        setSelectedCause(causes[0])
      } else if (causes.length === 0) {
        setSelectedCause(null)
      }
    } else {
      setFilteredCauses([])
      setSelectedCause(null)
    }
  }, [selectedSurah])

  // Prepare timeline data
  useEffect(() => {
    // Group all revelation causes by year
    const eventsByYear = revelationCausesData.reduce(
      (acc, cause) => {
        if (!acc[cause.year]) {
          acc[cause.year] = []
        }
        acc[cause.year].push(cause)
        return acc
      },
      {} as Record<string, RevelationCause[]>,
    )

    // Convert to timeline format
    const events = Object.entries(eventsByYear).map(([year, causes]) => ({
      year,
      causes,
      count: causes.length,
      period: Number.parseInt(year) < 622 ? "Meccan" : "Medinan",
    }))

    // Sort by year
    events.sort((a, b) => Number.parseInt(a.year) - Number.parseInt(b.year))
    setTimelineEvents(events)
  }, [])

  // Render network visualization when tab changes or surah changes
  useEffect(() => {
    if (activeTab === "network" && networkRef.current) {
      renderNetworkVisualization()
    }
  }, [activeTab, selectedSurah])

  // Render timeline visualization when tab changes
  useEffect(() => {
    if (activeTab === "timeline" && timelineRef.current) {
      renderTimelineVisualization()
    }
  }, [activeTab, timelineEvents])

  // Render map visualization when tab changes or cause changes
  useEffect(() => {
    if (activeTab === "map" && mapRef.current && selectedCause) {
      renderMapVisualization()
    }
  }, [activeTab, selectedCause])

  // Network visualization rendering function
  const renderNetworkVisualization = () => {
    if (!networkRef.current) return

    // Clear previous visualization
    d3.select(networkRef.current).selectAll("*").remove()

    // Prepare data for network visualization
    const themes = new Map<string, ThemeNode>()
    const events = new Map<string, EventNode>()
    const links: LinkData[] = []

    // If a surah is selected, only show its causes and themes
    const relevantCauses = selectedSurah
      ? revelationCausesData.filter((cause) => cause.surahId === selectedSurah)
      : revelationCausesData

    // Extract themes and events
    relevantCauses.forEach((cause) => {
      // Add event node
      const eventId = `event-${cause.id}`
      if (!events.has(eventId)) {
        events.set(eventId, {
          id: eventId,
          name: cause.historicalEvent,
          type: "event",
          year: cause.year,
          surahIds: [cause.surahId],
        })
      } else {
        const event = events.get(eventId)!
        if (!event.surahIds.includes(cause.surahId)) {
          event.surahIds.push(cause.surahId)
        }
      }

      // Add theme nodes and links
      cause.thematicConnection.forEach((theme) => {
        const themeId = `theme-${theme.toLowerCase().replace(/\s+/g, "-")}`

        if (!themes.has(themeId)) {
          themes.set(themeId, {
            id: themeId,
            name: theme,
            type: "theme",
            count: 1,
          })
        } else {
          const themeNode = themes.get(themeId)!
          themeNode.count++
        }

        // Add link between event and theme
        links.push({
          source: eventId,
          target: themeId,
          value: 1,
        })
      })
    })

    // Convert to arrays for D3
    const nodes = [...Array.from(events.values()), ...Array.from(themes.values())]

    // Set up SVG
    const width = networkRef.current.clientWidth
    const height = 500

    const svg = d3
      .select(networkRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .attr("style", "max-width: 100%; height: auto;")

    // Create simulation
    const simulation = d3
      .forceSimulation(nodes as any)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d: any) => d.id)
          .distance(100),
      )
      .force("charge", d3.forceManyBody().strength(-200))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("x", d3.forceX(width / 2).strength(0.1))
      .force("y", d3.forceY(height / 2).strength(0.1))

    // Create links
    const link = svg
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#999")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", (d) => Math.sqrt(d.value))
      .attr("stroke-dasharray", "5,5")

    // Create nodes
    const node = svg
      .append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended) as any)

    // Add circles to nodes
    node
      .append("circle")
      .attr("r", (d: any) => (d.type === "theme" ? 10 + d.count : 8))
      .attr("fill", (d: any) => (d.type === "theme" ? "#10b981" : "#3b82f6"))
      .attr("stroke", "#fff")
      .attr("stroke-width", 1.5)

    // Add labels to nodes
    node
      .append("text")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .text((d: any) => d.name)
      .attr("font-size", "10px")
      .attr("fill", "#333")
      .each(function (d: any) {
        // Wrap text for long labels
        const text = d3.select(this)
        const words = d.name.split(/\s+/)
        text.text(null)

        let line = ""
        let lineNumber = 0
        const lineHeight = 1.1
        const y = text.attr("y")
        const dy = Number.parseFloat(text.attr("dy"))
        let tspan = text
          .append("tspan")
          .attr("x", 12)
          .attr("y", y)
          .attr("dy", dy + "em")

        words.forEach((word: string, i: number) => {
          if (i > 0 && line.length + word.length > 20) {
            tspan = text
              .append("tspan")
              .attr("x", 12)
              .attr("y", y)
              .attr("dy", ++lineNumber * lineHeight + dy + "em")
            line = ""
          }
          line += word + " "
          tspan.text(line.trim())
        })
      })

    // Add title for tooltip
    node.append("title").text((d: any) => {
      if (d.type === "theme") {
        return `Theme: ${d.name}\nAppears in ${d.count} contexts`
      } else {
        const surahNames = d.surahIds
          .map((id: number) => {
            const surah = surahTimelineData.find((s) => s.id === id)
            return surah ? `Surah ${surah.name} (${id})` : `Surah ${id}`
          })
          .join(", ")
        return `Event: ${d.name}\nYear: ${d.year}\nRelated to: ${surahNames}`
      }
    })

    // Update positions on tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y)

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`)
    })

    // Drag functions
    function dragstarted(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    }

    function dragged(event: any, d: any) {
      d.fx = event.x
      d.fy = event.y
    }

    function dragended(event: any, d: any) {
      if (!event.active) simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    }
  }

  // Timeline visualization rendering function
  const renderTimelineVisualization = () => {
    if (!timelineRef.current || timelineEvents.length === 0) return

    // Clear previous visualization
    d3.select(timelineRef.current).selectAll("*").remove()

    const margin = { top: 20, right: 20, bottom: 50, left: 50 }
    const width = timelineRef.current.clientWidth - margin.left - margin.right
    const height = 200 - margin.top - margin.bottom

    // Create SVG
    const svg = d3
      .select(timelineRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)

    // Create scales
    const years = timelineEvents.map((d) => Number.parseInt(d.year))
    const minYear = Math.min(...years)
    const maxYear = Math.max(...years)

    const x = d3.scaleLinear().domain([minYear, maxYear]).range([0, width])

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(timelineEvents, (d) => d.count) || 0])
      .range([height, 0])

    // Add X axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat((d) => d.toString()))
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-45)")

    // Add Y axis
    svg.append("g").call(d3.axisLeft(y))

    // Add X axis label
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom - 5)
      .text("Year (CE)")

    // Add Y axis label
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .attr("y", -margin.left + 15)
      .attr("x", -height / 2)
      .text("Number of Revelations")

    // Add Meccan/Medinan divider
    svg
      .append("line")
      .attr("x1", x(622))
      .attr("y1", 0)
      .attr("x2", x(622))
      .attr("y2", height)
      .attr("stroke", "#888")
      .attr("stroke-width", 1)
      .attr("stroke-dasharray", "5,5")

    // Add Meccan/Medinan labels
    svg
      .append("text")
      .attr("x", x(616))
      .attr("y", 10)
      .attr("text-anchor", "end")
      .attr("font-size", "10px")
      .attr("fill", "#10b981")
      .text("Meccan Period")

    svg
      .append("text")
      .attr("x", x(623))
      .attr("y", 10)
      .attr("font-size", "10px")
      .attr("fill", "#3b82f6")
      .text("Medinan Period")

    // Add bars
    svg
      .selectAll(".bar")
      .data(timelineEvents)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d) => x(Number.parseInt(d.year)) - 5)
      .attr("width", 10)
      .attr("y", (d) => y(d.count))
      .attr("height", (d) => height - y(d.count))
      .attr("fill", (d) => (d.period === "Meccan" ? "#10b981" : "#3b82f6"))
      .attr("rx", 2)
      .attr("ry", 2)
      .on("mouseover", function (event, d) {
        d3.select(this).attr("fill", d.period === "Meccan" ? "#047857" : "#1d4ed8")

        // Show tooltip
        const tooltip = d3
          .select(timelineRef.current)
          .append("div")
          .attr("class", "tooltip")
          .style("position", "absolute")
          .style("background-color", "white")
          .style("border", "1px solid #ddd")
          .style("border-radius", "4px")
          .style("padding", "8px")
          .style("box-shadow", "0 2px 4px rgba(0,0,0,0.1)")
          .style("font-size", "12px")
          .style("pointer-events", "none")
          .style("left", `${event.pageX - timelineRef.current!.getBoundingClientRect().left + 10}px`)
          .style("top", `${event.pageY - timelineRef.current!.getBoundingClientRect().top - 40}px`)

        tooltip.append("div").style("font-weight", "bold").text(`Year: ${d.year} CE (${d.period} Period)`)

        tooltip.append("div").text(`${d.count} revelation${d.count > 1 ? "s" : ""}`)

        // List the first 3 causes
        if (d.causes.length > 0) {
          tooltip.append("div").style("margin-top", "4px").style("font-weight", "bold").text("Related to:")

          const list = tooltip.append("ul").style("margin", "2px 0 0 0").style("padding-left", "16px")

          d.causes.slice(0, 3).forEach((cause: RevelationCause) => {
            const surah = surahTimelineData.find((s) => s.id === cause.surahId)
            list.append("li").text(`Surah ${surah?.name || cause.surahId} (${cause.verseRange})`)
          })

          if (d.causes.length > 3) {
            tooltip
              .append("div")
              .style("font-style", "italic")
              .text(`...and ${d.causes.length - 3} more`)
          }
        }
      })
      .on("mouseout", function (d) {
        d3.select(this).attr("fill", d.period === "Meccan" ? "#10b981" : "#3b82f6")
        d3.select(timelineRef.current).selectAll(".tooltip").remove()
      })
      .on("click", (event, d) => {
        // If a surah is selected, filter to show only its causes
        if (selectedSurah) {
          const surahCauses = d.causes.filter((c: RevelationCause) => c.surahId === selectedSurah)
          if (surahCauses.length > 0) {
            setSelectedCause(surahCauses[0])
          }
        } else if (d.causes.length > 0) {
          // Otherwise, show the first cause and set its surah
          setSelectedCause(d.causes[0])
          setSelectedSurah(d.causes[0].surahId)
        }
      })
  }

  // Map visualization rendering function
  const renderMapVisualization = () => {
    // In a real implementation, this would use a mapping library like Leaflet or Google Maps
    // For this example, we'll just show a placeholder
    if (!mapRef.current) return

    // Clear previous content
    mapRef.current.innerHTML = `
      <div class="flex items-center justify-center h-[400px] bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div class="text-center p-6">
          <MapPin class="h-12 w-12 text-emerald-600 mx-auto mb-4" />
          <h3 class="text-lg font-medium mb-2">Geographic Context Visualization</h3>
          <p class="text-sm text-gray-600 dark:text-gray-400 max-w-md">
            ${
              selectedCause
                ? `This would show a map centered on ${selectedCause.location} with markers for key locations related to the revelation of Surah ${selectedCause.surahId}.`
                : "Select a revelation cause to see its geographic context."
            }
          </p>
          ${
            selectedCause?.coordinates
              ? `<p class="text-sm text-gray-500 mt-4">Coordinates: ${selectedCause.coordinates.lat}, ${selectedCause.coordinates.lng}</p>`
              : ""
          }
        </div>
      </div>
    `
  }

  // Get authenticity badge color
  const getAuthenticityColor = (level: string) => {
    switch (level) {
      case "sahih":
        return "bg-green-100 text-green-800 border-green-200"
      case "hasan":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "daif":
        return "bg-red-100 text-red-800 border-red-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <CardTitle className="text-2xl">Asbab al-Nuzul Explorer</CardTitle>
              <CardDescription>Explore the historical contexts and causes behind Quranic revelations</CardDescription>
            </div>

            <div className="w-full md:w-64">
              <Select
                value={selectedSurah?.toString() || ""}
                onValueChange={(value) => setSelectedSurah(Number.parseInt(value) || null)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a Surah" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Surahs</SelectItem>
                  {surahTimelineData
                    .filter((surah) => revelationCausesData.some((cause) => cause.surahId === surah.id))
                    .map((surah) => (
                      <SelectItem key={surah.id} value={surah.id.toString()}>
                        {surah.id}. {surah.name}
                      </SelectItem>
                    ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="timeline" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="timeline">
                <Calendar className="h-4 w-4 mr-2" />
                Historical Timeline
              </TabsTrigger>
              <TabsTrigger value="network">
                <LinkIcon className="h-4 w-4 mr-2" />
                Cause-Theme Network
              </TabsTrigger>
              <TabsTrigger value="map">
                <MapPin className="h-4 w-4 mr-2" />
                Geographic Context
              </TabsTrigger>
            </TabsList>

            <TabsContent value="timeline" className="pt-4">
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This timeline shows the historical events that prompted Quranic revelations. Each bar represents the
                  number of revelations in a given year.
                  {selectedSurah && ` Currently showing events related to Surah ${selectedSurah}.`}
                </p>
              </div>
              <div ref={timelineRef} className="h-[250px] w-full relative"></div>
            </TabsContent>

            <TabsContent value="network" className="pt-4">
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This network visualization shows the connections between historical events (blue) and thematic
                  elements (green) in the Quran. The size of theme nodes indicates how frequently they appear.
                  {selectedSurah && ` Currently showing connections for Surah ${selectedSurah}.`}
                </p>
              </div>
              <div ref={networkRef} className="h-[500px] w-full border rounded-lg bg-gray-50 dark:bg-gray-900"></div>
            </TabsContent>

            <TabsContent value="map" className="pt-4">
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This map shows the geographic context of revelations, highlighting locations where specific verses
                  were revealed and the historical events that occurred there.
                  {selectedSurah && ` Currently showing locations related to Surah ${selectedSurah}.`}
                </p>
              </div>
              <div ref={mapRef} className="h-[400px] w-full"></div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Revelation Cause Detail Card */}
      {selectedCause && (
        <Card>
          <CardHeader>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div>
                <CardTitle className="text-xl">
                  Revelation Context
                  {filteredCauses.length > 1 && (
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      ({filteredCauses.indexOf(selectedCause) + 1} of {filteredCauses.length})
                    </span>
                  )}
                </CardTitle>
                <CardDescription>{selectedCause.historicalEvent}</CardDescription>
              </div>

              {filteredCauses.length > 1 && (
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentIndex = filteredCauses.indexOf(selectedCause)
                      const prevIndex = (currentIndex - 1 + filteredCauses.length) % filteredCauses.length
                      setSelectedCause(filteredCauses[prevIndex])
                    }}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentIndex = filteredCauses.indexOf(selectedCause)
                      const nextIndex = (currentIndex + 1) % filteredCauses.length
                      setSelectedCause(filteredCauses[nextIndex])
                    }}
                  >
                    Next
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </div>
          </CardHeader>

          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left column - Context details */}
              <div className="md:col-span-2 space-y-4">
                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    <Calendar className="h-3 w-3 mr-1" />
                    {selectedCause.year} CE
                  </Badge>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                    <MapPin className="h-3 w-3 mr-1" />
                    {selectedCause.location}
                  </Badge>
                  <Badge variant="outline" className={getAuthenticityColor(selectedCause.authenticityLevel)}>
                    <Info className="h-3 w-3 mr-1" />
                    {selectedCause.authenticityLevel.charAt(0).toUpperCase() + selectedCause.authenticityLevel.slice(1)}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <MessageSquare className="h-5 w-5 mr-2 text-emerald-600" />
                    Historical Narrative
                  </h3>
                  <div className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                    <p>{selectedCause.narrative}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <Lightbulb className="h-5 w-5 mr-2 text-emerald-600" />
                    Thematic Connection
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCause.thematicConnection.map((theme, index) => (
                      <Badge key={index} className="bg-emerald-100 text-emerald-800">
                        {theme}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <Users className="h-5 w-5 mr-2 text-emerald-600" />
                    Key Figures Involved
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCause.keyFigures.map((figure, index) => (
                      <Badge key={index} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                        {figure}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-emerald-600" />
                    Source
                  </h3>
                  <div className="text-gray-700 dark:text-gray-300 text-sm">
                    <p>{selectedCause.source}</p>
                  </div>
                </div>
              </div>

              {/* Right column - Surah details */}
              <div>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Related Revelation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {(() => {
                      const surah = surahTimelineData.find((s) => s.id === selectedCause.surahId)
                      return (
                        <div className="space-y-3">
                          <div className="text-center">
                            <h3 className="text-xl font-bold">Surah {surah?.name}</h3>
                            <p className="text-lg font-arabic">{surah?.arabicName}</p>
                            <div className="flex justify-center mt-1">
                              <Badge className={surah?.period === "Meccan" ? "bg-emerald-600" : "bg-blue-600"}>
                                {surah?.period} Surah
                              </Badge>
                            </div>
                          </div>

                          <div className="text-sm">
                            <div className="flex justify-between py-1 border-b">
                              <span className="font-medium">Surah Number:</span>
                              <span>{surah?.id}</span>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <span className="font-medium">Verses:</span>
                              <span>{selectedCause.verseRange}</span>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <span className="font-medium">Revelation Order:</span>
                              <span>{surah?.revelationOrder}</span>
                            </div>
                            <div className="flex justify-between py-1">
                              <span className="font-medium">Total Verses:</span>
                              <span>{surah?.verses}</span>
                            </div>
                          </div>

                          <div className="pt-2">
                            <Link href={`/surah-vocabulary?surah=${selectedCause.surahId}`}>
                              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                <BookOpen className="h-4 w-4 mr-2" />
                                Explore Surah
                              </Button>
                            </Link>
                          </div>
                        </div>
                      )
                    })()}
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Explanation Card */}
      <Card>
        <CardHeader>
          <CardTitle>Understanding Asbab al-Nuzul</CardTitle>
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

            <p>
              While not every verse has a specific cause of revelation, those that do offer valuable historical context
              that enriches our understanding of the Quran's message and its application in different situations.
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800 not-prose">
              <h3 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Important Note on Authenticity</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Asbab al-Nuzul reports vary in their level of authenticity. In this visualization, we categorize them
                as:
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li className="flex items-center">
                  <Badge variant="outline" className="bg-green-100 text-green-800 border-green-200 mr-2">
                    Sahih
                  </Badge>
                  <span>Authentic reports with strong chains of narration</span>
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-200 mr-2">
                    Hasan
                  </Badge>
                  <span>Good reports with acceptable chains of narration</span>
                </li>
                <li className="flex items-center">
                  <Badge variant="outline" className="bg-red-100 text-red-800 border-red-200 mr-2">
                    Daif
                  </Badge>
                  <span>Weak reports that should be treated with caution</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default RevelationContextExplorer
