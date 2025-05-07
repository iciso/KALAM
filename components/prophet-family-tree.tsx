"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ZoomIn, ZoomOut, RefreshCw, Info } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { JSX } from "react/jsx-runtime"

// Define the prophet data structure
interface ProphetNode {
  id: string
  name: string
  arabicName: string
  title?: string
  description: string
  x: number
  y: number
  generation: number
  parentId?: string
  children?: string[]
  significance: string
  lineage: "ibrahim" | "adam" | "other"
  spouse?: string
}

// Prophet data
const prophets: ProphetNode[] = [
  {
    id: "adam",
    name: "Adam",
    arabicName: "آدم",
    title: "First Human",
    description: "The first human and prophet, created directly by Allah.",
    x: 450,
    y: 50,
    generation: 1,
    significance: "First human and prophet, father of humanity",
    lineage: "adam",
  },
  {
    id: "idris",
    name: "Idris",
    arabicName: "إدريس",
    description: "Known for his wisdom and knowledge.",
    x: 450,
    y: 150,
    generation: 2,
    parentId: "adam",
    significance: "Known for his devotion and knowledge",
    lineage: "adam",
  },
  {
    id: "nuh",
    name: "Nuh",
    arabicName: "نوح",
    title: "Noah",
    description: "Built the Ark and survived the great flood.",
    x: 450,
    y: 250,
    generation: 3,
    parentId: "idris",
    significance: "Built the Ark and survived the great flood with believers",
    lineage: "adam",
  },
  {
    id: "ibrahim",
    name: "Ibrahim",
    arabicName: "إبراهيم",
    title: "Abraham",
    description: "Friend of Allah (Khalilullah), father of prophets.",
    x: 450,
    y: 350,
    generation: 4,
    parentId: "nuh",
    children: ["ismail", "ishaq"],
    significance: "Friend of Allah, father of many prophets",
    lineage: "ibrahim",
  },
  {
    id: "ismail",
    name: "Isma'il",
    arabicName: "إسماعيل",
    title: "Ishmael",
    description: "Son of Ibrahim, helped build the Ka'bah.",
    x: 300,
    y: 450,
    generation: 5,
    parentId: "ibrahim",
    significance: "Son of Ibrahim, helped build the Ka'bah",
    lineage: "ibrahim",
  },
  {
    id: "ishaq",
    name: "Ishaq",
    arabicName: "إسحاق",
    title: "Isaac",
    description: "Son of Ibrahim, father of Ya'qub.",
    x: 600,
    y: 450,
    generation: 5,
    parentId: "ibrahim",
    children: ["yaqub"],
    significance: "Son of Ibrahim, father of Ya'qub",
    lineage: "ibrahim",
  },
  {
    id: "yaqub",
    name: "Ya'qub",
    arabicName: "يعقوب",
    title: "Jacob",
    description: "Son of Ishaq, also known as Israel.",
    x: 600,
    y: 550,
    generation: 6,
    parentId: "ishaq",
    children: ["yusuf"],
    significance: "Son of Ishaq, also known as Israel, father of 12 sons",
    lineage: "ibrahim",
  },
  {
    id: "yusuf",
    name: "Yusuf",
    arabicName: "يوسف",
    title: "Joseph",
    description: "Son of Ya'qub, known for his beauty and dream interpretation.",
    x: 750,
    y: 550,
    generation: 7,
    parentId: "yaqub",
    significance: "Son of Ya'qub, known for his beauty and dream interpretation",
    lineage: "ibrahim",
  },
  {
    id: "ayyub",
    name: "Ayyub",
    arabicName: "أيوب",
    title: "Job",
    description: "Known for his patience through trials and suffering.",
    x: 300,
    y: 550,
    generation: 7,
    significance: "Known for his patience through trials and suffering",
    lineage: "ibrahim",
  },
  {
    id: "musa",
    name: "Musa",
    arabicName: "موسى",
    title: "Moses",
    description: "Spoke directly with Allah, received the Torah.",
    x: 450,
    y: 650,
    generation: 8,
    significance: "Spoke directly with Allah, received the Torah",
    lineage: "ibrahim",
  },
  {
    id: "harun",
    name: "Harun",
    arabicName: "هارون",
    title: "Aaron",
    description: "Brother of Musa, helped him in his mission.",
    x: 550,
    y: 650,
    generation: 8,
    significance: "Brother of Musa, helped him in his mission",
    lineage: "ibrahim",
  },
  {
    id: "dawud",
    name: "Dawud",
    arabicName: "داوود",
    title: "David",
    description: "Prophet and king, received the Zabur (Psalms).",
    x: 400,
    y: 750,
    generation: 9,
    children: ["sulayman"],
    significance: "Prophet and king, received the Zabur (Psalms)",
    lineage: "ibrahim",
  },
  {
    id: "sulayman",
    name: "Sulayman",
    arabicName: "سليمان",
    title: "Solomon",
    description: "Son of Dawud, prophet and king known for his wisdom.",
    x: 400,
    y: 850,
    generation: 10,
    parentId: "dawud",
    significance: "Son of Dawud, prophet and king known for his wisdom",
    lineage: "ibrahim",
  },
  {
    id: "zakariyya",
    name: "Zakariyya",
    arabicName: "زكريا",
    title: "Zechariah",
    description: "Guardian of Maryam, father of Yahya.",
    x: 200,
    y: 850,
    generation: 10,
    children: ["yahya"],
    significance: "Guardian of Maryam, father of Yahya",
    lineage: "ibrahim",
  },
  {
    id: "yahya",
    name: "Yahya",
    arabicName: "يحيى",
    title: "John",
    description: "Son of Zakariyya, contemporary of Isa.",
    x: 100,
    y: 950,
    generation: 11,
    parentId: "zakariyya",
    significance: "Son of Zakariyya, contemporary of Isa",
    lineage: "ibrahim",
  },
  {
    id: "isa",
    name: "Isa",
    arabicName: "عيسى",
    title: "Jesus",
    description: "Born to Maryam, performed many miracles.",
    x: 300,
    y: 950,
    generation: 11,
    significance: "Born to Maryam, performed many miracles",
    lineage: "ibrahim",
  },
  {
    id: "muhammad",
    name: "Muhammad",
    arabicName: "محمد",
    title: "The Final Messenger",
    description: "The final prophet and messenger of Allah.",
    x: 150,
    y: 550,
    generation: 7,
    significance: "The final prophet and messenger of Allah",
    lineage: "ibrahim",
  },
]

export default function ProphetFamilyTree() {
  const [zoom, setZoom] = useState(100)
  const [selectedProphet, setSelectedProphet] = useState<ProphetNode | null>(null)
  const [highlightedLineage, setHighlightedLineage] = useState<string | null>(null)

  const increaseZoom = () => {
    if (zoom < 200) setZoom(zoom + 20)
  }

  const decreaseZoom = () => {
    if (zoom > 60) setZoom(zoom - 20)
  }

  const resetZoom = () => {
    setZoom(100)
  }

  const handleProphetClick = (prophet: ProphetNode) => {
    setSelectedProphet(prophet)
  }

  const handleLineageHighlight = (lineage: string | null) => {
    setHighlightedLineage(lineage)
  }

  // Find parent-child relationships
  const getConnections = () => {
    const connections: JSX.Element[] = []

    prophets.forEach((prophet) => {
      if (prophet.parentId) {
        const parent = prophets.find((p) => p.id === prophet.parentId)
        if (parent) {
          const isHighlighted = highlightedLineage === parent.lineage || highlightedLineage === prophet.lineage

          connections.push(
            <line
              key={`${parent.id}-${prophet.id}`}
              x1={parent.x}
              y1={parent.y + 40}
              x2={prophet.x}
              y2={prophet.y - 40}
              stroke={isHighlighted ? "#ff9800" : "#2196f3"}
              strokeWidth={isHighlighted ? "3" : "2"}
              opacity={highlightedLineage && !isHighlighted ? 0.3 : 1}
            />,
          )
        }
      }
    })

    // Add the special connection from Isma'il to Muhammad (many generations)
    const ismail = prophets.find((p) => p.id === "ismail")
    const muhammad = prophets.find((p) => p.id === "muhammad")
    if (ismail && muhammad) {
      const isHighlighted = highlightedLineage === "ibrahim"
      connections.push(
        <path
          key="ismail-muhammad"
          d={`M ${ismail.x},${ismail.y + 40} Q ${(ismail.x + muhammad.x) / 2},${
            (ismail.y + muhammad.y) / 2 - 50
          } ${muhammad.x},${muhammad.y - 40}`}
          fill="none"
          stroke={isHighlighted ? "#ff9800" : "#4caf50"}
          strokeWidth={isHighlighted ? "3" : "2"}
          strokeDasharray="5,5"
          opacity={highlightedLineage && !isHighlighted ? 0.3 : 1}
        />,
      )
    }

    return connections
  }

  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-0">
        <Tabs defaultValue="tree" className="w-full">
          <div className="bg-white dark:bg-gray-800 p-4 border-b flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="tree">Family Tree</TabsTrigger>
              <TabsTrigger value="lineage">Lineage View</TabsTrigger>
              <TabsTrigger value="info">Prophet Info</TabsTrigger>
            </TabsList>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" onClick={decreaseZoom} title="Zoom Out">
                <ZoomOut className="h-4 w-4" />
              </Button>
              <span className="text-sm mx-1">{zoom}%</span>
              <Button variant="outline" size="sm" onClick={increaseZoom} title="Zoom In">
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={resetZoom} title="Reset Zoom">
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <TabsContent value="tree" className="m-0">
            <div className="relative overflow-auto p-4" style={{ height: "600px" }}>
              <div
                style={{
                  transform: `scale(${zoom / 100})`,
                  transformOrigin: "top center",
                  transition: "transform 0.3s ease",
                }}
              >
                <svg width="900" height="1000" viewBox="0 0 900 1000">
                  {/* Background grid for reference */}
                  <defs>
                    <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                      <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(200,200,200,0.2)" strokeWidth="1" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />

                  {/* Connections between prophets */}
                  {getConnections()}

                  {/* Prophet nodes */}
                  {prophets.map((prophet) => {
                    const isHighlighted = highlightedLineage === prophet.lineage
                    let fillColor = "#e3f2fd"
                    let strokeColor = "#2196f3"

                    if (prophet.lineage === "ibrahim") {
                      fillColor = "#e8f5e9"
                      strokeColor = "#4caf50"
                    }

                    if (prophet.id === "muhammad") {
                      fillColor = "#fff3e0"
                      strokeColor = "#ff9800"
                    }

                    return (
                      <g
                        key={prophet.id}
                        transform={`translate(${prophet.x}, ${prophet.y})`}
                        onClick={() => handleProphetClick(prophet)}
                        style={{ cursor: "pointer" }}
                        opacity={highlightedLineage && !isHighlighted ? 0.3 : 1}
                      >
                        <circle
                          cx="0"
                          cy="0"
                          r={prophet.id === "ibrahim" || prophet.id === "muhammad" || prophet.id === "adam" ? 40 : 35}
                          fill={fillColor}
                          stroke={isHighlighted ? "#ff9800" : strokeColor}
                          strokeWidth={isHighlighted ? "3" : "2"}
                        />
                        <text
                          x="0"
                          y="-10"
                          textAnchor="middle"
                          dominantBaseline="middle"
                          fontWeight="bold"
                          fontSize={prophet.id === "ibrahim" || prophet.id === "muhammad" ? "14" : "12"}
                        >
                          {prophet.name}
                        </text>
                        <text x="0" y="10" textAnchor="middle" dominantBaseline="middle" fontSize="12">
                          {prophet.arabicName}
                        </text>
                        {prophet.title && (
                          <text
                            x="0"
                            y="30"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            fontSize="10"
                            fontStyle="italic"
                          >
                            {prophet.title}
                          </text>
                        )}
                      </g>
                    )
                  })}

                  {/* Legend */}
                  <g transform="translate(50, 50)">
                    <rect
                      x="0"
                      y="0"
                      width="180"
                      height="150"
                      fill="white"
                      fillOpacity="0.9"
                      stroke="#ccc"
                      strokeWidth="1"
                      rx="5"
                    />
                    <text x="90" y="25" textAnchor="middle" fontWeight="bold">
                      Legend
                    </text>

                    <circle
                      cx="20"
                      cy="50"
                      r="10"
                      fill="#e3f2fd"
                      stroke="#2196f3"
                      strokeWidth="2"
                      onClick={() => handleLineageHighlight("adam")}
                      style={{ cursor: "pointer" }}
                    />
                    <text
                      x="35"
                      y="50"
                      dominantBaseline="middle"
                      textAnchor="start"
                      onClick={() => handleLineageHighlight("adam")}
                      style={{ cursor: "pointer" }}
                    >
                      Early Prophets
                    </text>

                    <circle
                      cx="20"
                      cy="80"
                      r="10"
                      fill="#e8f5e9"
                      stroke="#4caf50"
                      strokeWidth="2"
                      onClick={() => handleLineageHighlight("ibrahim")}
                      style={{ cursor: "pointer" }}
                    />
                    <text
                      x="35"
                      y="80"
                      dominantBaseline="middle"
                      textAnchor="start"
                      onClick={() => handleLineageHighlight("ibrahim")}
                      style={{ cursor: "pointer" }}
                    >
                      Ibrahim's Family
                    </text>

                    <circle
                      cx="20"
                      cy="110"
                      r="10"
                      fill="#fff3e0"
                      stroke="#ff9800"
                      strokeWidth="2"
                      onClick={() => handleLineageHighlight("muhammad")}
                      style={{ cursor: "pointer" }}
                    />
                    <text
                      x="35"
                      y="110"
                      dominantBaseline="middle"
                      textAnchor="start"
                      onClick={() => handleLineageHighlight("muhammad")}
                      style={{ cursor: "pointer" }}
                    >
                      Muhammad
                    </text>

                    <text
                      x="90"
                      y="140"
                      textAnchor="middle"
                      fontSize="10"
                      className="underline"
                      onClick={() => handleLineageHighlight(null)}
                      style={{ cursor: "pointer" }}
                    >
                      Reset Highlighting
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lineage" className="m-0">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">Prophetic Lineages</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    From Adam to Ibrahim
                  </h4>
                  <ul className="space-y-1 ml-5 list-disc">
                    <li>Adam - First human and prophet</li>
                    <li>Idris - Known for wisdom and knowledge</li>
                    <li>Nuh - Built the Ark, survived the flood</li>
                    <li>Ibrahim - Friend of Allah, father of prophets</li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <span className="w-3 h-3 rounded-full bg-green-500 mr-2"></span>
                    Ibrahim's Lineage through Ishaq
                  </h4>
                  <ul className="space-y-1 ml-5 list-disc">
                    <li>Ibrahim</li>
                    <li>Ishaq (Isaac) - Son of Ibrahim</li>
                    <li>Ya'qub (Jacob/Israel) - Son of Ishaq</li>
                    <li>Yusuf (Joseph) - Son of Ya'qub</li>
                    <li>Many generations...</li>
                    <li>Musa (Moses) & Harun (Aaron)</li>
                    <li>Dawud (David) & Sulayman (Solomon)</li>
                    <li>Zakariyya (Zechariah) & Yahya (John)</li>
                    <li>Isa (Jesus) - Born to Maryam</li>
                  </ul>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <span className="w-3 h-3 rounded-full bg-amber-500 mr-2"></span>
                    Ibrahim's Lineage through Isma'il
                  </h4>
                  <ul className="space-y-1 ml-5 list-disc">
                    <li>Ibrahim</li>
                    <li>Isma'il (Ishmael) - Son of Ibrahim</li>
                    <li>Many generations of Arabs...</li>
                    <li>Muhammad - Final Prophet and Messenger</li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2 flex items-center">
                    <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
                    The Five Major Prophets (Ulul 'Azm)
                  </h4>
                  <ul className="space-y-1 ml-5 list-disc">
                    <li>Nuh (Noah)</li>
                    <li>Ibrahim (Abraham)</li>
                    <li>Musa (Moses)</li>
                    <li>Isa (Jesus)</li>
                    <li>Muhammad</li>
                  </ul>
                  <p className="mt-2 text-sm">
                    These five prophets are known as Ulul 'Azm (those of determination) and are mentioned together in
                    Surah Al-Ahzab (33:7) and Surah Ash-Shura (42:13).
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="info" className="m-0">
            <div className="p-6">
              {selectedProphet ? (
                <div>
                  <div className="flex items-center mb-4">
                    <div
                      className="w-10 h-10 rounded-full mr-3 flex items-center justify-center"
                      style={{
                        backgroundColor:
                          selectedProphet.lineage === "ibrahim"
                            ? "#e8f5e9"
                            : selectedProphet.id === "muhammad"
                              ? "#fff3e0"
                              : "#e3f2fd",
                        border: `2px solid ${
                          selectedProphet.lineage === "ibrahim"
                            ? "#4caf50"
                            : selectedProphet.id === "muhammad"
                              ? "#ff9800"
                              : "#2196f3"
                        }`,
                      }}
                    >
                      <span className="text-lg font-bold">{selectedProphet.arabicName.charAt(0)}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        {selectedProphet.name} ({selectedProphet.arabicName})
                      </h3>
                      {selectedProphet.title && <p className="text-gray-500">{selectedProphet.title}</p>}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-1">Description</h4>
                    <p>{selectedProphet.description}</p>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-1">Significance</h4>
                    <p>{selectedProphet.significance}</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    {selectedProphet.parentId && (
                      <div>
                        <h4 className="font-semibold mb-1">Parent</h4>
                        <p>
                          {prophets.find((p) => p.id === selectedProphet.parentId)?.name || "Unknown"} (
                          {prophets.find((p) => p.id === selectedProphet.parentId)?.arabicName || "Unknown"})
                        </p>
                      </div>
                    )}

                    {selectedProphet.children && selectedProphet.children.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-1">Children</h4>
                        <ul>
                          {selectedProphet.children.map((childId) => {
                            const child = prophets.find((p) => p.id === childId)
                            return (
                              <li key={childId}>
                                {child?.name || "Unknown"} ({child?.arabicName || "Unknown"})
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-center mt-4">
                    <Button variant="outline" onClick={() => setSelectedProphet(null)}>
                      Back to Family Tree
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-10">
                  <Info className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Prophet Information</h3>
                  <p className="text-gray-500 max-w-md mx-auto">
                    Click on any prophet in the family tree to view detailed information about them, their lineage, and
                    their significance in Islamic history.
                  </p>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="p-4 bg-gray-50 dark:bg-gray-900 text-sm text-gray-500 dark:text-gray-400">
          Note: This is a simplified representation. The actual lineage spans thousands of years with many generations
          between some prophets. Dotted lines indicate multiple generations.
        </div>
      </CardContent>
    </Card>
  )
}
