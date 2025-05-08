"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { surahTimelineData } from "@/data/surah-timeline-data"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Info } from "lucide-react"
import Link from "next/link"

// Extract and analyze themes from the surah data
const extractThemes = () => {
  // Get all Meccan and Medinan surahs
  const meccanSurahs = surahTimelineData.filter((surah) => surah.period === "Meccan")
  const medinanSurahs = surahTimelineData.filter((surah) => surah.period === "Medinan")

  // Theme categories for analysis
  const themeCategories = {
    monotheism: ["oneness", "monotheism", "tawhid", "divine nature", "allah", "creator", "creation"],
    judgment: ["judgment", "resurrection", "paradise", "hellfire", "accountability", "hereafter", "day of"],
    prophets: ["prophet", "moses", "abraham", "jesus", "noah", "stories of", "previous nations"],
    morality: ["moral", "ethics", "character", "virtue", "patience", "gratitude", "charity"],
    community: ["community", "society", "social", "brotherhood", "unity", "cooperation"],
    law: ["law", "legislation", "rules", "regulation", "halal", "haram", "permissible", "forbidden"],
    warfare: ["war", "battle", "jihad", "fighting", "enemy", "defense", "peace", "treaty"],
    family: ["family", "marriage", "divorce", "inheritance", "women", "children", "orphans"],
    interfaith: ["people of the book", "jews", "christians", "interfaith", "dialogue"],
    hypocrites: ["hypocrite", "munafiq", "disbelief", "opposition"],
  }

  // Count theme occurrences
  const countThemeOccurrences = (surahs, categories) => {
    const counts = {}

    // Initialize counts
    Object.keys(categories).forEach((category) => {
      counts[category] = 0
    })

    // Count occurrences
    surahs.forEach((surah) => {
      if (!surah.mainThemes) return

      surah.mainThemes.forEach((theme) => {
        const lowerTheme = theme.toLowerCase()

        Object.entries(categories).forEach(([category, keywords]) => {
          if (keywords.some((keyword) => lowerTheme.includes(keyword))) {
            counts[category]++
          }
        })
      })
    })

    return counts
  }

  const meccanThemeCounts = countThemeOccurrences(meccanSurahs, themeCategories)
  const medinanThemeCounts = countThemeOccurrences(medinanSurahs, themeCategories)

  // Prepare data for charts
  const barChartData = Object.keys(themeCategories).map((category) => ({
    name: category.charAt(0).toUpperCase() + category.slice(1),
    Meccan: meccanThemeCounts[category],
    Medinan: medinanThemeCounts[category],
  }))

  // Calculate percentages for pie charts
  const calculatePercentages = (counts) => {
    const total = Object.values(counts).reduce((sum: number, count: number) => sum + count, 0)
    return Object.entries(counts).map(([category, count]) => ({
      name: category.charAt(0).toUpperCase() + category.slice(1),
      value: Math.round(((count as number) / total) * 100),
    }))
  }

  const meccanPieData = calculatePercentages(meccanThemeCounts)
  const medinanPieData = calculatePercentages(medinanThemeCounts)

  // Prepare data for radar chart
  const radarChartData = Object.keys(themeCategories).map((category) => {
    // Normalize the values to account for different numbers of surahs in each period
    const meccanNormalized = (meccanThemeCounts[category] / meccanSurahs.length) * 10
    const medinanNormalized = (medinanThemeCounts[category] / medinanSurahs.length) * 10

    return {
      subject: category.charAt(0).toUpperCase() + category.slice(1),
      Meccan: meccanNormalized,
      Medinan: medinanNormalized,
    }
  })

  return {
    barChartData,
    meccanPieData,
    medinanPieData,
    radarChartData,
    meccanCount: meccanSurahs.length,
    medinanCount: medinanSurahs.length,
  }
}

// Example surahs for each theme
const themeExamples = {
  monotheism: {
    meccan: { id: 112, name: "Al-Ikhlas", description: "Pure monotheism and divine nature" },
    medinan: { id: 59, name: "Al-Hashr", description: "Beautiful names of Allah" },
  },
  judgment: {
    meccan: { id: 75, name: "Al-Qiyamah", description: "Detailed description of resurrection" },
    medinan: { id: 99, name: "Az-Zalzalah", description: "Earth revealing its secrets on Judgment Day" },
  },
  prophets: {
    meccan: { id: 21, name: "Al-Anbiya", description: "Stories of numerous prophets" },
    medinan: { id: 3, name: "Ali 'Imran", description: "Detailed account of Jesus and Mary" },
  },
  morality: {
    meccan: { id: 90, name: "Al-Balad", description: "Moral choices and compassion" },
    medinan: { id: 49, name: "Al-Hujurat", description: "Social ethics and avoiding mockery" },
  },
  community: {
    meccan: { id: 103, name: "Al-Asr", description: "Importance of faith, good deeds, and mutual encouragement" },
    medinan: { id: 61, name: "As-Saff", description: "Unity in ranks and community solidarity" },
  },
  law: {
    meccan: { id: 6, name: "Al-An'am", description: "Early dietary laws and prohibitions" },
    medinan: { id: 5, name: "Al-Ma'idah", description: "Comprehensive legal rulings" },
  },
  warfare: {
    meccan: { id: 8, name: "Al-Anfal", description: "Limited references to defense" },
    medinan: { id: 9, name: "At-Tawbah", description: "Rules of warfare and dealing with enemies" },
  },
  family: {
    meccan: { id: 31, name: "Luqman", description: "Parental guidance and family wisdom" },
    medinan: { id: 4, name: "An-Nisa", description: "Comprehensive family laws and women's rights" },
  },
  interfaith: {
    meccan: { id: 109, name: "Al-Kafirun", description: "Clear distinction between faiths" },
    medinan: { id: 2, name: "Al-Baqarah", description: "Detailed dialogue with Jews and Christians" },
  },
  hypocrites: {
    meccan: { id: 107, name: "Al-Ma'un", description: "Early references to religious hypocrisy" },
    medinan: { id: 63, name: "Al-Munafiqun", description: "Dedicated surah exposing hypocrites" },
  },
}

// Color schemes
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#8dd1e1",
  "#a4de6c",
  "#d0ed57",
]
const MECCAN_COLOR = "#16a34a" // emerald-600
const MEDINAN_COLOR = "#2563eb" // blue-600

export default function MeccanMedinanComparison() {
  const { barChartData, meccanPieData, medinanPieData, radarChartData, meccanCount, medinanCount } = extractThemes()
  const [selectedTheme, setSelectedTheme] = useState("monotheism")

  return (
    <div className="space-y-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Meccan vs Medinan Revelations</CardTitle>
          <CardDescription>
            Comparing thematic differences between the 86 Meccan surahs (610-622 CE) and 28 Medinan surahs (622-632 CE)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-emerald-50 dark:bg-emerald-950 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
              <h3 className="font-medium text-emerald-800 dark:text-emerald-300 mb-2 flex items-center">
                <span className="w-3 h-3 bg-emerald-600 rounded-full mr-2"></span>
                Meccan Period (610-622 CE)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {meccanCount} surahs revealed in Mecca before the migration (Hijrah)
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Focus on fundamental beliefs (tawhid, prophethood, afterlife)</li>
                <li>Stories of previous prophets and nations</li>
                <li>Shorter verses with powerful, rhythmic language</li>
                <li>Emphasis on moral and spiritual development</li>
                <li>Consolation to the Prophet and early Muslims facing persecution</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2 flex items-center">
                <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                Medinan Period (622-632 CE)
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                {medinanCount} surahs revealed in Medina after the migration (Hijrah)
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-300 space-y-1">
                <li>Detailed legal rulings and social legislation</li>
                <li>Community organization and governance</li>
                <li>Longer verses with detailed explanations</li>
                <li>Relations with People of the Book (Jews and Christians)</li>
                <li>Rules of warfare, treaties, and dealing with hypocrites</li>
              </ul>
            </div>
          </div>

          <Tabs defaultValue="bar" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="bar">Bar Comparison</TabsTrigger>
              <TabsTrigger value="radar">Thematic Emphasis</TabsTrigger>
              <TabsTrigger value="pie">Distribution</TabsTrigger>
            </TabsList>

            <TabsContent value="bar" className="pt-4">
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={barChartData} margin={{ top: 20, right: 30, left: 20, bottom: 70 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-45} textAnchor="end" height={70} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Meccan" fill={MECCAN_COLOR} />
                    <Bar dataKey="Medinan" fill={MEDINAN_COLOR} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Raw count of theme occurrences in Meccan vs Medinan surahs
              </p>
            </TabsContent>

            <TabsContent value="radar" className="pt-4">
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart outerRadius={150} data={radarChartData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 10]} />
                    <Radar name="Meccan" dataKey="Meccan" stroke={MECCAN_COLOR} fill={MECCAN_COLOR} fillOpacity={0.5} />
                    <Radar
                      name="Medinan"
                      dataKey="Medinan"
                      stroke={MEDINAN_COLOR}
                      fill={MEDINAN_COLOR}
                      fillOpacity={0.5}
                    />
                    <Legend />
                    <Tooltip />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Normalized thematic emphasis (accounting for different numbers of surahs in each period)
              </p>
            </TabsContent>

            <TabsContent value="pie" className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-center font-medium mb-2 text-emerald-700 dark:text-emerald-400">Meccan Themes</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={meccanPieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {meccanPieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div>
                  <h3 className="text-center font-medium mb-2 text-blue-700 dark:text-blue-400">Medinan Themes</h3>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={medinanPieData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {medinanPieData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}%`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-500 mt-4 text-center">
                Percentage distribution of themes within each period
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Thematic Examples</CardTitle>
          <CardDescription>Explore representative surahs for each theme from both periods</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-6">
            {Object.keys(themeExamples).map((theme) => (
              <Button
                key={theme}
                variant={selectedTheme === theme ? "default" : "outline"}
                onClick={() => setSelectedTheme(theme)}
                className="text-xs md:text-sm"
              >
                {theme.charAt(0).toUpperCase() + theme.slice(1)}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader className="bg-emerald-50 dark:bg-emerald-950 pb-2">
                <CardTitle className="text-lg flex items-center">
                  <span className="w-3 h-3 bg-emerald-600 rounded-full mr-2"></span>
                  Meccan Example
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-lg">
                      Surah {themeExamples[selectedTheme].meccan.id}: {themeExamples[selectedTheme].meccan.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {themeExamples[selectedTheme].meccan.description}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className="bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200"
                  >
                    Meccan
                  </Badge>
                </div>
                <Link href={`/surah-vocabulary?surah=${themeExamples[selectedTheme].meccan.id}`}>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    Explore Surah <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-blue-50 dark:bg-blue-950 pb-2">
                <CardTitle className="text-lg flex items-center">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mr-2"></span>
                  Medinan Example
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h4 className="font-bold text-lg">
                      Surah {themeExamples[selectedTheme].medinan.id}: {themeExamples[selectedTheme].medinan.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {themeExamples[selectedTheme].medinan.description}
                    </p>
                  </div>
                  <Badge variant="outline" className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
                    Medinan
                  </Badge>
                </div>
                <Link href={`/surah-vocabulary?surah=${themeExamples[selectedTheme].medinan.id}`}>
                  <Button variant="outline" size="sm" className="mt-2 w-full">
                    Explore Surah <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Key Thematic Shifts</CardTitle>
          <CardDescription>Major transitions in focus from Meccan to Medinan revelations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg border bg-gray-50 dark:bg-gray-900">
              <div className="mt-1">
                <Info className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">From Faith Foundations to Practical Implementation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Meccan revelations established core beliefs and spiritual foundations, while Medinan revelations
                  focused on implementing these principles in a functioning society with detailed laws and regulations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-gray-50 dark:bg-gray-900">
              <div className="mt-1">
                <Info className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">From Individual Spirituality to Community Organization</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Meccan surahs primarily addressed individual faith and moral development, while Medinan surahs
                  expanded to include social cohesion, community governance, and inter-community relations.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-gray-50 dark:bg-gray-900">
              <div className="mt-1">
                <Info className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">From Universal Principles to Specific Legislation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Meccan revelations presented broad moral principles and universal values, while Medinan revelations
                  provided specific legal rulings on inheritance, marriage, divorce, contracts, and warfare.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg border bg-gray-50 dark:bg-gray-900">
              <div className="mt-1">
                <Info className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">From Persuasion to Governance</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Meccan surahs focused on persuading people to accept the message of Islam, while Medinan surahs
                  addressed the Prophet's role as both spiritual leader and head of state, dealing with treaties,
                  alliances, and governance issues.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
