"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, Search, Home, Info, Clock, Layers, CheckCircle2, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Implementation status types
type ImplementationStatus = "available" | "partial" | "coming-soon" | "in-progress"

// Surah data with implementation status
const surahs = [
  {
    id: 1,
    name: "Al-Fatihah",
    arabicName: "الفاتحة",
    verses: 7,
    type: "Meccan",
    vocabularyCount: 29,
    difficulty: "Beginner",
    implementationStatus: "available" as ImplementationStatus,
    implementationPhase: 1,
    sections: [],
  },
  {
    id: 2,
    name: "Al-Baqarah",
    arabicName: "البقرة",
    verses: 286,
    type: "Medinan",
    vocabularyCount: 168,
    difficulty: "Advanced",
    implementationStatus: "partial" as ImplementationStatus,
    implementationPhase: 3,
    sections: [
      { id: "2-1", name: "Verses 1-60", status: "available" as ImplementationStatus, phase: 3 },
      { id: "2-2", name: "Verses 61-120", status: "in-progress" as ImplementationStatus, phase: 4 },
      { id: "2-3", name: "Verses 121-180", status: "coming-soon" as ImplementationStatus, phase: 5 },
      { id: "2-4", name: "Verses 181-240", status: "coming-soon" as ImplementationStatus, phase: 6 },
      { id: "2-5", name: "Verses 241-286", status: "coming-soon" as ImplementationStatus, phase: 7 },
    ],
  },
  {
    id: 3,
    name: "Ali 'Imran",
    arabicName: "آل عمران",
    verses: 200,
    type: "Medinan",
    vocabularyCount: 120,
    difficulty: "Intermediate",
    implementationStatus: "coming-soon" as ImplementationStatus,
    implementationPhase: 5,
    sections: [],
  },
  {
    id: 4,
    name: "An-Nisa",
    arabicName: "النساء",
    verses: 176,
    type: "Medinan",
    vocabularyCount: 142,
    difficulty: "Advanced",
    implementationStatus: "coming-soon" as ImplementationStatus,
    implementationPhase: 6,
    sections: [],
  },
  {
    id: 5,
    name: "Al-Ma'idah",
    arabicName: "المائدة",
    verses: 120,
    type: "Medinan",
    vocabularyCount: 118,
    difficulty: "Intermediate",
    implementationStatus: "coming-soon" as ImplementationStatus,
    implementationPhase: 7,
    sections: [],
  },
  {
    id: 6,
    name: "Al-An'am",
    arabicName: "الأنعام",
    verses: 165,
    type: "Meccan",
    vocabularyCount: 132,
    difficulty: "Intermediate",
    implementationStatus: "coming-soon" as ImplementationStatus,
    implementationPhase: 8,
    sections: [],
  },
  {
    id: 7,
    name: "Al-A'raf",
    arabicName: "الأعراف",
    verses: 206,
    type: "Meccan",
    vocabularyCount: 145,
    difficulty: "Advanced",
    implementationStatus: "coming-soon" as ImplementationStatus,
    implementationPhase: 9,
    sections: [],
  },
  {
    id: 8,
    name: "Al-Anfal",
    arabicName: "الأنفال",
    verses: 75,
    type: "Medinan",
    vocabularyCount: 86,
    difficulty: "Intermediate",
    implementationStatus: "coming-soon" as ImplementationStatus,
    implementationPhase: 10,
    sections: [],
  },
  {
    id: 9,
    name: "At-Tawbah",
    arabicName: "التوبة",
    verses: 129,
    type: "Medinan",
    vocabularyCount: 110,
    difficulty: "Advanced",
    implementationStatus: "coming-soon" as ImplementationStatus,
    implementationPhase: 11,
    sections: [],
  },
  {
    id: 10,
    name: "Yunus",
    arabicName: "يونس",
    verses: 109,
    type: "Meccan",
    vocabularyCount: 98,
    difficulty: "Intermediate",
    implementationStatus: "coming-soon" as ImplementationStatus,
    implementationPhase: 12,
    sections: [],
  },
  {
    id: 12,
    name: "Yusuf",
    arabicName: "يوسف",
    verses: 111,
    type: "Meccan",
    vocabularyCount: 105,
    difficulty: "Intermediate",
    implementationStatus: "coming-soon" as ImplementationStatus,
    implementationPhase: 13,
    sections: [],
  },
  {
    id: 18,
    name: "Al-Kahf",
    arabicName: "الكهف",
    verses: 110,
    type: "Meccan",
    vocabularyCount: 103,
    difficulty: "Intermediate",
    implementationStatus: "in-progress" as ImplementationStatus,
    implementationPhase: 2,
    sections: [],
  },
  {
    id: 19,
    name: "Maryam",
    arabicName: "مريم",
    verses: 98,
    type: "Meccan",
    vocabularyCount: 90,
    difficulty: "Intermediate",
    implementationStatus: "coming-soon" as ImplementationStatus,
    implementationPhase: 14,
    sections: [],
  },
  {
    id: 36,
    name: "Ya-Sin",
    arabicName: "يس",
    verses: 83,
    type: "Meccan",
    vocabularyCount: 76,
    difficulty: "Beginner",
    implementationStatus: "in-progress" as ImplementationStatus,
    implementationPhase: 2,
    sections: [],
  },
  {
    id: 55,
    name: "Ar-Rahman",
    arabicName: "الرحمن",
    verses: 78,
    type: "Medinan",
    vocabularyCount: 65,
    difficulty: "Beginner",
    implementationStatus: "available" as ImplementationStatus,
    implementationPhase: 1,
    sections: [],
  },
  {
    id: 56,
    name: "Al-Waqi'ah",
    arabicName: "الواقعة",
    verses: 96,
    type: "Meccan",
    vocabularyCount: 78,
    difficulty: "Intermediate",
    implementationStatus: "coming-soon" as ImplementationStatus,
    implementationPhase: 15,
    sections: [],
  },
  {
    id: 67,
    name: "Al-Mulk",
    arabicName: "الملك",
    verses: 30,
    type: "Meccan",
    vocabularyCount: 60,
    difficulty: "Beginner",
    implementationStatus: "available" as ImplementationStatus,
    implementationPhase: 1,
    sections: [],
  },
  {
    id: 78,
    name: "An-Naba",
    arabicName: "النبأ",
    verses: 40,
    type: "Meccan",
    vocabularyCount: 54,
    difficulty: "Beginner",
    implementationStatus: "available" as ImplementationStatus,
    implementationPhase: 1,
    sections: [],
  },
  {
    id: 93,
    name: "Ad-Duha",
    arabicName: "الضحى",
    verses: 11,
    type: "Meccan",
    vocabularyCount: 28,
    difficulty: "Beginner",
    implementationStatus: "available" as ImplementationStatus,
    implementationPhase: 1,
    sections: [],
  },
  {
    id: 96,
    name: "Al-'Alaq",
    arabicName: "العلق",
    verses: 19,
    type: "Meccan",
    vocabularyCount: 35,
    difficulty: "Beginner",
    implementationStatus: "available" as ImplementationStatus,
    implementationPhase: 1,
    sections: [],
  },
  {
    id: 97,
    name: "Al-Qadr",
    arabicName: "القدر",
    verses: 5,
    type: "Meccan",
    vocabularyCount: 23,
    difficulty: "Beginner",
    implementationStatus: "available" as ImplementationStatus,
    implementationPhase: 1,
    sections: [],
  },
  {
    id: 112,
    name: "Al-Ikhlas",
    arabicName: "الإخلاص",
    verses: 4,
    type: "Meccan",
    vocabularyCount: 15,
    difficulty: "Beginner",
    implementationStatus: "available" as ImplementationStatus,
    implementationPhase: 1,
    sections: [],
  },
  {
    id: 113,
    name: "Al-Falaq",
    arabicName: "الفلق",
    verses: 5,
    type: "Meccan",
    vocabularyCount: 23,
    difficulty: "Beginner",
    implementationStatus: "available" as ImplementationStatus,
    implementationPhase: 1,
    sections: [],
  },
  {
    id: 114,
    name: "An-Nas",
    arabicName: "الناس",
    verses: 6,
    type: "Meccan",
    vocabularyCount: 20,
    difficulty: "Beginner",
    implementationStatus: "available" as ImplementationStatus,
    implementationPhase: 1,
    sections: [],
  },
]

// Get difficulty color
const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300"
    case "Intermediate":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300"
    case "Advanced":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900/20 dark:text-purple-300"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300"
  }
}

// Get type color
const getTypeColor = (type: string) => {
  return type === "Meccan"
    ? "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300"
    : "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300"
}

// Get implementation status color and icon
const getImplementationStatus = (status: ImplementationStatus) => {
  switch (status) {
    case "available":
      return {
        color: "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300",
        icon: <CheckCircle2 className="h-4 w-4 mr-1" />,
        label: "Available",
      }
    case "partial":
      return {
        color: "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300",
        icon: <Layers className="h-4 w-4 mr-1" />,
        label: "Partially Available",
      }
    case "in-progress":
      return {
        color: "bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300",
        icon: <Clock className="h-4 w-4 mr-1" />,
        label: "In Progress",
      }
    case "coming-soon":
      return {
        color: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300",
        icon: <AlertCircle className="h-4 w-4 mr-1" />,
        label: "Coming Soon",
      }
    default:
      return {
        color: "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300",
        icon: <AlertCircle className="h-4 w-4 mr-1" />,
        label: "Coming Soon",
      }
  }
}

export default function SurahQuizPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null)
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [selectedStatus, setSelectedStatus] = useState<ImplementationStatus | null>(null)
  const [showSections, setShowSections] = useState<number | null>(null)

  // Filter surahs based on search term and filters
  const filteredSurahs = surahs.filter((surah) => {
    const matchesSearch =
      surah.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      surah.arabicName.includes(searchTerm) ||
      surah.id.toString().includes(searchTerm)

    const matchesDifficulty = selectedDifficulty ? surah.difficulty === selectedDifficulty : true
    const matchesType = selectedType ? surah.type === selectedType : true
    const matchesStatus = selectedStatus ? surah.implementationStatus === selectedStatus : true

    return matchesSearch && matchesDifficulty && matchesType && matchesStatus
  })

  // Function to get the appropriate link for a surah
  const getSurahLink = (surahId: number) => {
    // List of implemented surahs
    const implementedSurahs = [1, 112, 113, 114]

    if (implementedSurahs.includes(surahId)) {
      return `/quizzes/surah/${surahId}`
    }

    return null
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Surah Quizzes</h1>
          <div className="flex gap-2">
            <Link href="/quizzes">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Quizzes</span>
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">About Surah Quizzes</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Test your knowledge of Quranic vocabulary by surah (chapter). Each quiz focuses on the key vocabulary
              words found in a specific surah, helping you build your understanding of the Quran chapter by chapter.
            </p>
            <div className="flex items-center text-amber-600 dark:text-amber-400 mb-4">
              <Info className="h-5 w-5 mr-2 flex-shrink-0" />
              <p className="text-sm">Select a surah below to begin a quiz focused on its vocabulary.</p>
            </div>

            <div className="border-t pt-4 mt-2">
              <h3 className="font-medium mb-2">Implementation Status Guide:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div className="flex items-center">
                  <Badge className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-1" /> Available
                  </Badge>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Quiz is ready to use</span>
                </div>
                <div className="flex items-center">
                  <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-300 flex items-center">
                    <Layers className="h-4 w-4 mr-1" /> Partially Available
                  </Badge>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Some sections available</span>
                </div>
                <div className="flex items-center">
                  <Badge className="bg-amber-100 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300 flex items-center">
                    <Clock className="h-4 w-4 mr-1" /> In Progress
                  </Badge>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Currently being developed</span>
                </div>
                <div className="flex items-center">
                  <Badge className="bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-300 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" /> Coming Soon
                  </Badge>
                  <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Planned for future phases</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by name or number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedStatus === null ? "default" : "outline"}
                onClick={() => setSelectedStatus(null)}
                className="text-xs"
              >
                All Status
              </Button>
              <Button
                variant={selectedStatus === "available" ? "default" : "outline"}
                onClick={() => setSelectedStatus(selectedStatus === "available" ? null : "available")}
                className="text-xs bg-green-600 hover:bg-green-700"
              >
                Available
              </Button>
              <Button
                variant={selectedStatus === "in-progress" ? "default" : "outline"}
                onClick={() => setSelectedStatus(selectedStatus === "in-progress" ? null : "in-progress")}
                className="text-xs bg-amber-600 hover:bg-amber-700"
              >
                In Progress
              </Button>
              <Button
                variant={selectedStatus === "partial" ? "default" : "outline"}
                onClick={() => setSelectedStatus(selectedStatus === "partial" ? null : "partial")}
                className="text-xs bg-blue-600 hover:bg-blue-700"
              >
                Partial
              </Button>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            <Button
              variant={selectedDifficulty === null ? "default" : "outline"}
              onClick={() => setSelectedDifficulty(null)}
              className="text-xs"
            >
              All Levels
            </Button>
            <Button
              variant={selectedDifficulty === "Beginner" ? "default" : "outline"}
              onClick={() => setSelectedDifficulty(selectedDifficulty === "Beginner" ? null : "Beginner")}
              className="text-xs bg-green-600 hover:bg-green-700"
            >
              Beginner
            </Button>
            <Button
              variant={selectedDifficulty === "Intermediate" ? "default" : "outline"}
              onClick={() => setSelectedDifficulty(selectedDifficulty === "Intermediate" ? null : "Intermediate")}
              className="text-xs bg-blue-600 hover:bg-blue-700"
            >
              Intermediate
            </Button>
            <Button
              variant={selectedDifficulty === "Advanced" ? "default" : "outline"}
              onClick={() => setSelectedDifficulty(selectedDifficulty === "Advanced" ? null : "Advanced")}
              className="text-xs bg-purple-600 hover:bg-purple-700"
            >
              Advanced
            </Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-6">
              <TabsTrigger value="all" onClick={() => setSelectedType(null)}>
                All Surahs
              </TabsTrigger>
              <TabsTrigger value="meccan" onClick={() => setSelectedType("Meccan")}>
                Meccan
              </TabsTrigger>
              <TabsTrigger value="medinan" onClick={() => setSelectedType("Medinan")}>
                Medinan
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSurahs.map((surah) => (
                  <div key={surah.id}>
                    {showSections === surah.id && surah.sections.length > 0 ? (
                      <Card className="border-2 border-blue-500 dark:border-blue-700">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg flex items-center gap-2">
                                <span className="inline-block w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm flex items-center justify-center">
                                  {surah.id}
                                </span>
                                {surah.name} Sections
                              </CardTitle>
                              <CardDescription className="font-arabic text-lg mt-1">{surah.arabicName}</CardDescription>
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => setShowSections(null)}
                              className="h-8 px-2"
                            >
                              <ArrowLeft className="h-4 w-4 mr-1" /> Back
                            </Button>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="space-y-3">
                            {surah.sections.map((section) => {
                              const status = getImplementationStatus(section.status)
                              return (
                                <div key={section.id} className="border rounded-md p-3">
                                  <div className="flex justify-between items-center mb-2">
                                    <span className="font-medium">{section.name}</span>
                                    <Badge className={status.color}>
                                      {status.icon} {status.label}
                                    </Badge>
                                  </div>
                                  <Button
                                    className="w-full bg-emerald-600 hover:bg-emerald-700"
                                    disabled={section.status !== "available"}
                                  >
                                    <BookOpen className="mr-2 h-4 w-4" />
                                    {section.status === "available" ? "Start Quiz" : "Coming in Phase " + section.phase}
                                  </Button>
                                </div>
                              )
                            })}
                          </div>
                        </CardContent>
                      </Card>
                    ) : (
                      <Card className="overflow-hidden">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div>
                              <CardTitle className="text-lg flex items-center gap-2">
                                <span className="inline-block w-7 h-7 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-800 dark:text-emerald-300 text-sm flex items-center justify-center">
                                  {surah.id}
                                </span>
                                {surah.name}
                              </CardTitle>
                              <CardDescription className="font-arabic text-lg mt-1">{surah.arabicName}</CardDescription>
                            </div>
                            <Badge className={getTypeColor(surah.type)}>{surah.type}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="pb-2">
                          <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mb-2">
                            <span>{surah.verses} verses</span>
                            <span>{surah.vocabularyCount} vocabulary words</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            <Badge className={getDifficultyColor(surah.difficulty)}>{surah.difficulty}</Badge>
                            <Badge className={getImplementationStatus(surah.implementationStatus).color}>
                              {getImplementationStatus(surah.implementationStatus).icon}
                              {getImplementationStatus(surah.implementationStatus).label}
                            </Badge>
                            {surah.implementationStatus !== "available" && (
                              <Badge variant="outline" className="text-xs">
                                Phase {surah.implementationPhase}
                              </Badge>
                            )}
                          </div>
                        </CardContent>
                        <CardFooter>
                          {surah.sections.length > 0 ? (
                            <Button
                              className="w-full bg-blue-600 hover:bg-blue-700"
                              onClick={() => setShowSections(surah.id)}
                            >
                              <Layers className="mr-2 h-4 w-4" />
                              View Sections ({surah.sections.filter((s) => s.status === "available").length} Available)
                            </Button>
                          ) : getSurahLink(surah.id) ? (
                            <Link href={getSurahLink(surah.id)!} className="w-full">
                              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                                <BookOpen className="mr-2 h-4 w-4" />
                                Start Quiz
                              </Button>
                            </Link>
                          ) : (
                            <Button
                              className="w-full bg-emerald-600 hover:bg-emerald-700"
                              disabled={surah.implementationStatus !== "available"}
                            >
                              <BookOpen className="mr-2 h-4 w-4" />
                              {surah.implementationStatus === "available"
                                ? "Start Quiz"
                                : surah.implementationStatus === "in-progress"
                                  ? "Coming Soon (In Progress)"
                                  : "Coming in Phase " + surah.implementationPhase}
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    )}
                  </div>
                ))}
              </div>

              {filteredSurahs.length === 0 && (
                <div className="text-center py-12">
                  <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">No surahs found</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Try adjusting your search or filters to find what you're looking for.
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="meccan" className="mt-0">
              {/* Content will be filtered by the tab click */}
            </TabsContent>

            <TabsContent value="medinan" className="mt-0">
              {/* Content will be filtered by the tab click */}
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
