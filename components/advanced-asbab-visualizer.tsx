"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { surahTimelineData } from "@/data/surah-timeline-data"
import { allRevelationCausesData } from "@/data/revelation-causes-data-expanded"
import {
  Calendar,
  MapPin,
  BookOpen,
  Users,
  Lightbulb,
  MessageSquare,
  Info,
  Clock,
  BarChart4,
  Layers,
  ArrowRight,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"
import * as d3 from "d3"

// Types
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

interface SurahData {
  id: number
  name: string
  arabicName: string
  verses: number
  period: "Meccan" | "Medinan"
  revelationOrder: number
}

interface AdvancedAsbabVisualizerProps {
  surahId: number
}

const AdvancedAsbabVisualizer = ({ surahId }: AdvancedAsbabVisualizerProps) => {
  const [activeTab, setActiveTab] = useState("chronology")
  const [selectedCause, setSelectedCause] = useState<RevelationCause | null>(null)
  const [surahCauses, setSurahCauses] = useState<RevelationCause[]>([])
  const [surahData, setSurahData] = useState<SurahData | null>(null)
  const [timelineZoom, setTimelineZoom] = useState(1)

  // Refs for visualizations
  const chronologyRef = useRef<HTMLDivElement>(null)
  const thematicRef = useRef<HTMLDivElement>(null)
  const geographicRef = useRef<HTMLDivElement>(null)
  const contextualRef = useRef<HTMLDivElement>(null)
  const comparativeRef = useRef<HTMLDivElement>(null)

  // Load surah data and causes on mount
  useEffect(() => {
    // Find surah data
    const surah = surahTimelineData.find((s) => s.id === surahId)
    if (surah) {
      setSurahData(surah)
    }

    // Filter causes for this surah
    const causes = allRevelationCausesData.filter((cause) => cause.surahId === surahId)
    setSurahCauses(causes)

    // Set first cause as selected if available
    if (causes.length > 0 && !selectedCause) {
      setSelectedCause(causes[0])
    }
  }, [surahId])

  // Render visualizations when tab changes or data changes
  useEffect(() => {
    if (surahCauses.length === 0) return

    switch (activeTab) {
      case "chronology":
        renderChronologyVisualization()
        break
      case "thematic":
        renderThematicVisualization()
        break
      case "geographic":
        renderGeographicVisualization()
        break
      case "contextual":
        renderContextualVisualization()
        break
      case "comparative":
        renderComparativeVisualization()
        break
    }
  }, [activeTab, surahCauses, selectedCause, timelineZoom])

  // Chronology visualization
  const renderChronologyVisualization = () => {
    if (!chronologyRef.current || surahCauses.length === 0) return

    // Clear previous visualization
    d3.select(chronologyRef.current).selectAll("*").remove()

    const margin = { top: 50, right: 30, bottom: 50, left: 50 }
    const width = chronologyRef.current.clientWidth - margin.left - margin.right
    const height = 300 - margin.top - margin.bottom

    // Create SVG
    const svg = d3
      .select(chronologyRef.current)
      .append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`)

    // Sort causes by year
    const sortedCauses = [...surahCauses].sort((a, b) => Number.parseInt(a.year) - Number.parseInt(b.year))

    // Create scales
    const years = sortedCauses.map((d) => Number.parseInt(d.year))
    const minYear = Math.min(...years) - 1
    const maxYear = Math.max(...years) + 1

    // Apply zoom factor to the x-axis scale
    const zoomRange = (maxYear - minYear) / timelineZoom
    const zoomMidpoint = (maxYear + minYear) / 2
    const zoomedMinYear = Math.max(zoomMidpoint - zoomRange / 2, minYear - 1)
    const zoomedMaxYear = Math.min(zoomMidpoint + zoomRange / 2, maxYear + 1)

    const x = d3.scaleLinear().domain([zoomedMinYear, zoomedMaxYear]).range([0, width])

    // Add X axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height})`)
      .call(d3.axisBottom(x).tickFormat((d) => d.toString()))
      .selectAll("text")
      .style("text-anchor", "middle")

    // Add X axis label
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height + margin.bottom - 10)
      .text("Year (CE)")

    // Add title
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", -margin.top / 2)
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .text(`Chronology of Revelations for Surah ${surahData?.name || surahId}`)

    // Create a group for each cause
    const causeGroups = svg
      .selectAll(".cause-group")
      .data(sortedCauses)
      .enter()
      .append("g")
      .attr("class", "cause-group")
      .attr("transform", (d) => `translate(${x(Number.parseInt(d.year))},0)`)
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        setSelectedCause(d)
      })

    // Add circles for each cause
    causeGroups
      .append("circle")
      .attr("cy", height / 2)
      .attr("r", 8)
      .attr("fill", (d) => (d.id === selectedCause?.id ? "#3b82f6" : "#10b981"))
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)

    // Add verse range labels
    causeGroups
      .append("text")
      .attr("y", height / 2 - 15)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .text((d) => d.verseRange)

    // Add year labels
    causeGroups
      .append("text")
      .attr("y", height / 2 + 25)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .text((d) => d.year)

    // Add connecting line
    svg
      .append("line")
      .attr("x1", x(Number.parseInt(sortedCauses[0].year)))
      .attr("y1", height / 2)
      .attr("x2", x(Number.parseInt(sortedCauses[sortedCauses.length - 1].year)))
      .attr("y2", height / 2)
      .attr("stroke", "#d1d5db")
      .attr("stroke-width", 2)
      .attr("stroke-dasharray", "5,5")
      .lower()

    // Add tooltips
    causeGroups.append("title").text((d) => `${d.historicalEvent}\nVerses: ${d.verseRange}\nYear: ${d.year} CE`)
  }

  // Thematic visualization
  const renderThematicVisualization = () => {
    if (!thematicRef.current || surahCauses.length === 0) return

    // Clear previous visualization
    d3.select(thematicRef.current).selectAll("*").remove()

    const width = thematicRef.current.clientWidth
    const height = 400

    // Create SVG
    const svg = d3
      .select(thematicRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])

    // Extract all themes and count occurrences
    const themeCount = new Map()
    surahCauses.forEach((cause) => {
      cause.thematicConnection.forEach((theme) => {
        themeCount.set(theme, (themeCount.get(theme) || 0) + 1)
      })
    })

    // Create nodes for themes and causes
    const themeNodes = Array.from(themeCount.entries()).map(([theme, count], i) => ({
      id: `theme-${i}`,
      name: theme,
      type: "theme",
      count: count,
    }))

    const causeNodes = surahCauses.map((cause) => ({
      id: cause.id,
      name: cause.historicalEvent,
      type: "cause",
      verseRange: cause.verseRange,
      year: cause.year,
      selected: cause.id === selectedCause?.id,
    }))

    const nodes = [...themeNodes, ...causeNodes]

    // Create links between themes and causes
    const links = []
    surahCauses.forEach((cause) => {
      cause.thematicConnection.forEach((theme) => {
        const themeNode = themeNodes.find((node) => node.name === theme)
        if (themeNode) {
          links.push({
            source: cause.id,
            target: themeNode.id,
            value: 1,
          })
        }
      })
    })

    // Create force simulation
    const simulation = d3
      .forceSimulation(nodes)
      .force(
        "link",
        d3
          .forceLink(links)
          .id((d) => d.id)
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
      .attr("stroke", "#9ca3af")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", (d) => Math.sqrt(d.value))

    // Create nodes
    const node = svg
      .append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .attr("cursor", "pointer")
      .on("click", (event, d) => {
        if (d.type === "cause") {
          const cause = surahCauses.find((c) => c.id === d.id)
          if (cause) setSelectedCause(cause)
        }
      })
      .call(d3.drag().on("start", dragstarted).on("drag", dragged).on("end", dragended))

    // Add circles to nodes
    node
      .append("circle")
      .attr("r", (d) => (d.type === "theme" ? 10 + d.count * 2 : 8))
      .attr("fill", (d) => {
        if (d.type === "theme") return "#10b981"
        return d.selected ? "#3b82f6" : "#f59e0b"
      })
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)

    // Add labels to nodes
    node
      .append("text")
      .attr("dx", 12)
      .attr("dy", ".35em")
      .text((d) => (d.type === "theme" ? `${d.name} (${d.count})` : `${d.name} (${d.verseRange})`))
      .attr("font-size", "10px")
      .attr("fill", "#374151")
      .each(function (d) {
        // Wrap text for long labels
        const text = d3.select(this)
        const words = text.text().split(/\s+/)
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

        words.forEach((word, i) => {
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

    // Add tooltips
    node.append("title").text((d) => {
      if (d.type === "theme") {
        return `Theme: ${d.name}\nAppears in ${d.count} revelation contexts`
      } else {
        return `Event: ${d.name}\nVerses: ${d.verseRange}\nYear: ${d.year} CE`
      }
    })

    // Update positions on tick
    simulation.on("tick", () => {
      link
        .attr("x1", (d) => d.source.x)
        .attr("y1", (d) => d.source.y)
        .attr("x2", (d) => d.target.x)
        .attr("y2", (d) => d.target.y)

      node.attr("transform", (d) => `translate(${d.x},${d.y})`)
    })

    // Drag functions
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart()
      d.fx = d.x
      d.fy = d.y
    }

    function dragged(event, d) {
      d.fx = event.x
      d.fy = event.y
    }

    function dragended(event, d) {
      if (!event.active) simulation.alphaTarget(0)
      d.fx = null
      d.fy = null
    }
  }

  // Geographic visualization
  const renderGeographicVisualization = () => {
    if (!geographicRef.current || surahCauses.length === 0) return

    // Clear previous visualization
    d3.select(geographicRef.current).selectAll("*").remove()

    // In a real implementation, this would use a mapping library
    // For this example, we'll create a simplified geographic representation

    const width = geographicRef.current.clientWidth
    const height = 400

    // Create SVG
    const svg = d3
      .select(geographicRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])

    // Define regions
    const regions = [
      { name: "Mecca", x: width * 0.3, y: height * 0.6, radius: 40 },
      { name: "Medina", x: width * 0.4, y: height * 0.4, radius: 40 },
      { name: "Tabuk", x: width * 0.3, y: height * 0.2, radius: 30 },
      { name: "Hudaybiyyah", x: width * 0.25, y: height * 0.55, radius: 25 },
      { name: "Uhud", x: width * 0.42, y: height * 0.38, radius: 20 },
      { name: "Badr", x: width * 0.35, y: height * 0.5, radius: 25 },
      { name: "Najran", x: width * 0.45, y: height * 0.7, radius: 30 },
    ]

    // Draw regions
    svg
      .selectAll(".region")
      .data(regions)
      .enter()
      .append("circle")
      .attr("class", "region")
      .attr("cx", (d) => d.x)
      .attr("cy", (d) => d.y)
      .attr("r", (d) => d.radius)
      .attr("fill", "#e5e7eb")
      .attr("stroke", "#9ca3af")
      .attr("stroke-width", 1)
      .attr("opacity", 0.6)

    // Add region labels
    svg
      .selectAll(".region-label")
      .data(regions)
      .enter()
      .append("text")
      .attr("class", "region-label")
      .attr("x", (d) => d.x)
      .attr("y", (d) => d.y)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "bold")
      .text((d) => d.name)

    // Map causes to regions
    const causesWithCoordinates = surahCauses.map((cause) => {
      // Find the closest region based on location name
      const region =
        regions.find((r) => cause.location.includes(r.name)) || regions.find((r) => r.name.includes(cause.location))

      // If no region match, default to Medina or Mecca based on year
      if (!region) {
        if (Number.parseInt(cause.year) >= 622) {
          return { ...cause, region: regions.find((r) => r.name === "Medina") }
        } else {
          return { ...cause, region: regions.find((r) => r.name === "Mecca") }
        }
      }

      return { ...cause, region }
    })

    // Draw causes on the map
    svg
      .selectAll(".cause-marker")
      .data(causesWithCoordinates)
      .enter()
      .append("circle")
      .attr("class", "cause-marker")
      .attr("cx", (d) => d.region.x + (Math.random() - 0.5) * d.region.radius * 0.8)
      .attr("cy", (d) => d.region.y + (Math.random() - 0.5) * d.region.radius * 0.8)
      .attr("r", 6)
      .attr("fill", (d) => (d.id === selectedCause?.id ? "#3b82f6" : "#10b981"))
      .attr("stroke", "#fff")
      .attr("stroke-width", 2)
      .attr("cursor", "pointer")
      .on("click", (event, d) => {
        setSelectedCause(d)
      })
      .append("title")
      .text((d) => `${d.historicalEvent}\nVerses: ${d.verseRange}\nLocation: ${d.location}\nYear: ${d.year} CE`)
  }

  // Contextual visualization
  const renderContextualVisualization = () => {
    if (!contextualRef.current || surahCauses.length === 0) return

    // Clear previous visualization
    d3.select(contextualRef.current).selectAll("*").remove()

    const width = contextualRef.current.clientWidth
    const height = 400

    // Create SVG
    const svg = d3
      .select(contextualRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])

    // Create hierarchical data structure
    const hierarchyData = {
      name: `Surah ${surahData?.name || surahId}`,
      children: surahCauses.map((cause) => ({
        name: cause.historicalEvent,
        id: cause.id,
        children: [
          {
            name: "Key Figures",
            children: cause.keyFigures.map((figure) => ({ name: figure })),
          },
          {
            name: "Themes",
            children: cause.thematicConnection.map((theme) => ({ name: theme })),
          },
        ],
      })),
    }

    // Create hierarchy layout
    const root = d3
      .hierarchy(hierarchyData)
      .sum((d) => (d.children ? 0 : 1))
      .sort((a, b) => b.value - a.value)

    // Create treemap layout
    const treemap = d3.treemap().size([width, height]).paddingTop(28).paddingRight(7).paddingInner(3).round(true)

    treemap(root)

    // Create color scale
    const colorScale = d3
      .scaleOrdinal()
      .domain(["Surah", "Event", "Key Figures", "Themes"])
      .range(["#3b82f6", "#10b981", "#f59e0b", "#ec4899"])

    // Create cells
    const cell = svg
      .selectAll("g")
      .data(root.descendants())
      .join("g")
      .attr("transform", (d) => `translate(${d.x0},${d.y0})`)

    // Add rectangles
    cell
      .append("rect")
      .attr("width", (d) => d.x1 - d.x0)
      .attr("height", (d) => d.y1 - d.y0)
      .attr("fill", (d) => {
        if (d.depth === 0) return colorScale("Surah")
        if (d.depth === 1) return d.data.id === selectedCause?.id ? "#3b82f6" : "#10b981"
        if (d.parent?.data.name === "Key Figures") return colorScale("Key Figures")
        if (d.parent?.data.name === "Themes") return colorScale("Themes")
        return "#cbd5e1"
      })
      .attr("stroke", "#fff")
      .attr("cursor", (d) => (d.depth === 1 ? "pointer" : "default"))
      .on("click", (event, d) => {
        if (d.depth === 1) {
          const cause = surahCauses.find((c) => c.id === d.data.id)
          if (cause) setSelectedCause(cause)
        }
      })

    // Add text labels
    cell
      .append("text")
      .attr("x", 4)
      .attr("y", 14)
      .attr("font-size", (d) => (d.depth === 0 ? "14px" : "10px"))
      .attr("font-weight", (d) => (d.depth < 2 ? "bold" : "normal"))
      .attr("fill", (d) => (d.depth < 2 ? "#fff" : "#000"))
      .text((d) => d.data.name)
      .each(function (d) {
        // Truncate text if too long for the cell
        const self = d3.select(this)
        let textLength = self.node().getComputedTextLength()
        let text = self.text()
        const width = d.x1 - d.x0

        while (textLength > width - 8 && text.length > 0) {
          text = text.slice(0, -1)
          self.text(text + "...")
          textLength = self.node().getComputedTextLength()
        }
      })
  }

  // Comparative visualization
  const renderComparativeVisualization = () => {
    if (!comparativeRef.current || surahCauses.length === 0) return

    // Clear previous visualization
    d3.select(comparativeRef.current).selectAll("*").remove()

    const width = comparativeRef.current.clientWidth
    const height = 400

    // Create SVG
    const svg = d3
      .select(comparativeRef.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])

    // Group causes by authenticity level
    const authenticityGroups = {
      sahih: surahCauses.filter((c) => c.authenticityLevel === "sahih"),
      hasan: surahCauses.filter((c) => c.authenticityLevel === "hasan"),
      daif: surahCauses.filter((c) => c.authenticityLevel === "daif"),
    }

    // Create scales
    const x = d3
      .scaleBand()
      .domain(Object.keys(authenticityGroups))
      .range([50, width - 50])
      .padding(0.2)

    const y = d3
      .scaleLinear()
      .domain([0, Math.max(...Object.values(authenticityGroups).map((group) => group.length))])
      .range([height - 50, 50])

    // Add X axis
    svg
      .append("g")
      .attr("transform", `translate(0,${height - 50})`)
      .call(d3.axisBottom(x))

    // Add Y axis
    svg.append("g").attr("transform", "translate(50,0)").call(d3.axisLeft(y).ticks(5))

    // Add X axis label
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", height - 10)
      .text("Authenticity Level")

    // Add Y axis label
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("transform", "rotate(-90)")
      .attr("x", -height / 2)
      .attr("y", 15)
      .text("Number of Revelations")

    // Add title
    svg
      .append("text")
      .attr("text-anchor", "middle")
      .attr("x", width / 2)
      .attr("y", 30)
      .attr("font-size", "16px")
      .attr("font-weight", "bold")
      .text(`Authenticity Levels of Asbab al-Nuzul for Surah ${surahData?.name || surahId}`)

    // Color scale for authenticity levels
    const colorScale = d3.scaleOrdinal().domain(["sahih", "hasan", "daif"]).range(["#10b981", "#f59e0b", "#ef4444"])

    // Add bars
    Object.entries(authenticityGroups).forEach(([level, causes]) => {
      svg
        .append("rect")
        .attr("x", x(level))
        .attr("y", y(causes.length))
        .attr("width", x.bandwidth())
        .attr("height", height - 50 - y(causes.length))
        .attr("fill", colorScale(level))
        .attr("stroke", "#fff")
        .attr("stroke-width", 1)
        .append("title")
        .text(`${level}: ${causes.length} revelation(s)`)
    })

    // Add labels for each bar
    Object.entries(authenticityGroups).forEach(([level, causes]) => {
      svg
        .append("text")
        .attr("x", x(level) + x.bandwidth() / 2)
        .attr("y", y(causes.length) - 5)
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .text(causes.length)
    })

    // Add legend
    const legend = svg.append("g").attr("transform", `translate(${width - 150}, 50)`)

    const legendItems = [
      { level: "sahih", label: "Authentic" },
      { level: "hasan", label: "Good" },
      { level: "daif", label: "Weak" },
    ]

    legendItems.forEach((item, i) => {
      const g = legend.append("g").attr("transform", `translate(0, ${i * 20})`)

      g.append("rect").attr("width", 15).attr("height", 15).attr("fill", colorScale(item.level))

      g.append("text").attr("x", 20).attr("y", 12).attr("font-size", "12px").text(`${item.level} (${item.label})`)
    })
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
              <CardDescription>
                Multiple perspectives on the historical contexts of Surah {surahData?.name || surahId}
              </CardDescription>
            </div>
          </div>
        </CardHeader>

        <CardContent>
          <Tabs defaultValue="chronology" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="chronology">
                <Clock className="h-4 w-4 mr-2" />
                Chronology
              </TabsTrigger>
              <TabsTrigger value="thematic">
                <Lightbulb className="h-4 w-4 mr-2" />
                Thematic
              </TabsTrigger>
              <TabsTrigger value="geographic">
                <MapPin className="h-4 w-4 mr-2" />
                Geographic
              </TabsTrigger>
              <TabsTrigger value="contextual">
                <Layers className="h-4 w-4 mr-2" />
                Contextual
              </TabsTrigger>
              <TabsTrigger value="comparative">
                <BarChart4 className="h-4 w-4 mr-2" />
                Comparative
              </TabsTrigger>
            </TabsList>

            <TabsContent value="chronology" className="pt-4">
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This timeline shows the chronological sequence of revelations for Surah {surahData?.name || surahId},
                  highlighting when specific verses were revealed in relation to historical events.
                </p>
                <div className="mt-2">
                  <label className="text-sm font-medium">Timeline Zoom:</label>
                  <Slider
                    value={[timelineZoom]}
                    min={1}
                    max={3}
                    step={0.1}
                    onValueChange={(value) => setTimelineZoom(value[0])}
                    className="w-48 mt-1"
                  />
                </div>
              </div>
              <div ref={chronologyRef} className="h-[300px] w-full relative"></div>
            </TabsContent>

            <TabsContent value="thematic" className="pt-4">
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This network visualization shows the thematic connections between historical events and key themes in
                  Surah {surahData?.name || surahId}. The size of theme nodes indicates how frequently they appear.
                </p>
              </div>
              <div ref={thematicRef} className="h-[400px] w-full border rounded-lg bg-gray-50 dark:bg-gray-900"></div>
            </TabsContent>

            <TabsContent value="geographic" className="pt-4">
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This map shows the geographic context of revelations for Surah {surahData?.name || surahId},
                  highlighting locations where specific verses were revealed and the historical events that occurred
                  there.
                </p>
              </div>
              <div ref={geographicRef} className="h-[400px] w-full border rounded-lg bg-gray-50 dark:bg-gray-900"></div>
            </TabsContent>

            <TabsContent value="contextual" className="pt-4">
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This treemap visualization shows the hierarchical relationships between historical events, key
                  figures, and thematic elements in Surah {surahData?.name || surahId}.
                </p>
              </div>
              <div ref={contextualRef} className="h-[400px] w-full border rounded-lg bg-gray-50 dark:bg-gray-900"></div>
            </TabsContent>

            <TabsContent value="comparative" className="pt-4">
              <div className="mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This comparative visualization shows the distribution of authenticity levels among the Asbab al-Nuzul
                  reports for Surah {surahData?.name || surahId}.
                </p>
              </div>
              <div
                ref={comparativeRef}
                className="h-[400px] w-full border rounded-lg bg-gray-50 dark:bg-gray-900"
              ></div>
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
                  {surahCauses.length > 1 && (
                    <span className="text-sm font-normal text-gray-500 ml-2">
                      ({surahCauses.indexOf(selectedCause) + 1} of {surahCauses.length})
                    </span>
                  )}
                </CardTitle>
                <CardDescription>{selectedCause.historicalEvent}</CardDescription>
              </div>

              {surahCauses.length > 1 && (
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentIndex = surahCauses.indexOf(selectedCause)
                      const prevIndex = (currentIndex - 1 + surahCauses.length) % surahCauses.length
                      setSelectedCause(surahCauses[prevIndex])
                    }}
                  >
                    <ArrowLeft className="h-4 w-4 mr-1" />
                    Previous
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const currentIndex = surahCauses.indexOf(selectedCause)
                      const nextIndex = (currentIndex + 1) % surahCauses.length
                      setSelectedCause(surahCauses[nextIndex])
                    }}
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-1" />
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
                      return (
                        <div className="space-y-3">
                          <div className="text-center">
                            <h3 className="text-xl font-bold">Surah {surahData?.name}</h3>
                            <p className="text-lg font-arabic">{surahData?.arabicName}</p>
                            <div className="flex justify-center mt-1">
                              <Badge className={surahData?.period === "Meccan" ? "bg-emerald-600" : "bg-blue-600"}>
                                {surahData?.period} Surah
                              </Badge>
                            </div>
                          </div>

                          <div className="text-sm">
                            <div className="flex justify-between py-1 border-b">
                              <span className="font-medium">Surah Number:</span>
                              <span>{surahData?.id}</span>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <span className="font-medium">Verses:</span>
                              <span>{selectedCause.verseRange}</span>
                            </div>
                            <div className="flex justify-between py-1 border-b">
                              <span className="font-medium">Revelation Order:</span>
                              <span>{surahData?.revelationOrder}</span>
                            </div>
                            <div className="flex justify-between py-1">
                              <span className="font-medium">Total Verses:</span>
                              <span>{surahData?.verses}</span>
                            </div>
                          </div>

                          <div className="pt-2">
                            <Link href={`/surah-vocabulary?surah=${surahId}`}>
                              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                <BookOpen className="h-4 w-4 mr-2" />
                                Explore Surah Vocabulary
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
    </div>
  )
}

export default AdvancedAsbabVisualizer
