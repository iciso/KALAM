"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { prophetComparisonData, comparisonCategories, type ProphetData } from "@/data/prophet-comparison-data"
import {
  User,
  Users,
  Milestone,
  Sparkles,
  Mountain,
  BookOpen,
  BookMarked,
  Check,
  X,
  Info,
  MapPin,
  Clock,
  Book,
  Flag,
  Heart,
} from "lucide-react"

const iconMap: Record<string, React.ReactNode> = {
  User: <User className="h-5 w-5" />,
  Users: <Users className="h-5 w-5" />,
  Milestone: <Milestone className="h-5 w-5" />,
  Sparkles: <Sparkles className="h-5 w-5" />,
  Mountain: <Mountain className="h-5 w-5" />,
  BookOpen: <BookOpen className="h-5 w-5" />,
  BookMarked: <BookMarked className="h-5 w-5" />,
}

export default function ProphetComparisonTool() {
  const [selectedProphets, setSelectedProphets] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>(comparisonCategories.map((cat) => cat.id))
  const [availableProphets, setAvailableProphets] = useState<ProphetData[]>(Object.values(prophetComparisonData))
  const [searchTerm, setSearchTerm] = useState("")

  // Filter prophets based on search term
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setAvailableProphets(Object.values(prophetComparisonData))
    } else {
      const filtered = Object.values(prophetComparisonData).filter(
        (prophet) =>
          prophet.name.toLowerCase().includes(searchTerm.toLowerCase()) || prophet.arabicName.includes(searchTerm),
      )
      setAvailableProphets(filtered)
    }
  }, [searchTerm])

  // Toggle prophet selection
  const toggleProphet = (prophetId: string) => {
    if (selectedProphets.includes(prophetId)) {
      setSelectedProphets(selectedProphets.filter((id) => id !== prophetId))
    } else {
      // Limit to 3 prophets for better UI
      if (selectedProphets.length < 3) {
        setSelectedProphets([...selectedProphets, prophetId])
      }
    }
  }

  // Toggle category selection
  const toggleCategory = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId))
    } else {
      setSelectedCategories([...selectedCategories, categoryId])
    }
  }

  // Get selected prophet data
  const getSelectedProphetData = () => {
    return selectedProphets.map((id) => prophetComparisonData[id]).filter(Boolean)
  }

  // Reset selections
  const resetSelections = () => {
    setSelectedProphets([])
    setSelectedCategories(comparisonCategories.map((cat) => cat.id))
    setSearchTerm("")
  }

  // Quick selection presets
  const selectPreset = (preset: string) => {
    switch (preset) {
      case "ulul-azm":
        setSelectedProphets(["nuh", "ibrahim", "musa", "isa", "muhammad"].slice(0, 3))
        break
      case "ibrahim-family":
        setSelectedProphets(["ibrahim", "ismail", "ishaq"].slice(0, 3))
        break
      case "musa-isa":
        setSelectedProphets(["musa", "isa"])
        break
      case "first-last":
        setSelectedProphets(["adam", "muhammad"])
        break
      default:
        break
    }
  }

  return (
    <div className="container mx-auto py-6">
      <h1 className="text-3xl font-bold mb-2">Prophet Comparison Tool</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Compare different prophets mentioned in the Quran side by side to understand their similarities and differences.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" /> Select Prophets
              </CardTitle>
              <CardDescription>Choose up to 3 prophets to compare</CardDescription>
              <div className="relative mt-2">
                <input
                  type="text"
                  placeholder="Search prophets..."
                  className="w-full p-2 border rounded-md"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-2">
                {availableProphets.map((prophet) => (
                  <Button
                    key={prophet.id}
                    variant={selectedProphets.includes(prophet.id) ? "default" : "outline"}
                    className="w-full justify-start text-left"
                    onClick={() => toggleProphet(prophet.id)}
                    disabled={selectedProphets.length >= 3 && !selectedProphets.includes(prophet.id)}
                  >
                    <span className="mr-2">
                      {selectedProphets.includes(prophet.id) ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </span>
                    <span>{prophet.name}</span>
                    <span className="ml-auto text-xs opacity-70">{prophet.arabicName}</span>
                  </Button>
                ))}
              </div>

              <div className="mt-4">
                <h3 className="text-sm font-medium mb-2">Quick Selections:</h3>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" size="sm" onClick={() => selectPreset("ulul-azm")}>
                    Ulul 'Azm
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => selectPreset("ibrahim-family")}>
                    Ibrahim Family
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => selectPreset("musa-isa")}>
                    Musa & Isa
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => selectPreset("first-last")}>
                    First & Last
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="mt-4">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" /> Categories
              </CardTitle>
              <CardDescription>Select what to compare</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {comparisonCategories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategories.includes(category.id) ? "default" : "outline"}
                    className="w-full justify-start text-left"
                    onClick={() => toggleCategory(category.id)}
                  >
                    <span className="mr-2">{iconMap[category.icon]}</span>
                    <span>{category.label}</span>
                    {selectedCategories.includes(category.id) ? (
                      <Check className="h-4 w-4 ml-auto" />
                    ) : (
                      <X className="h-4 w-4 ml-auto" />
                    )}
                  </Button>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4" onClick={resetSelections}>
                Reset All Selections
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3">
          {selectedProphets.length === 0 ? (
            <Card className="h-full flex items-center justify-center">
              <CardContent className="text-center py-12">
                <Users className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium mb-2">Select Prophets to Compare</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  Choose at least one prophet from the list on the left to see detailed information and comparisons.
                </p>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <CardTitle>
                  Comparing{" "}
                  {getSelectedProphetData()
                    .map((p) => p.name)
                    .join(", ")}
                </CardTitle>
                <CardDescription>
                  {selectedProphets.length === 1
                    ? "Detailed information about this prophet"
                    : "Side-by-side comparison of selected prophets"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="comparison" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="comparison">Comparison View</TabsTrigger>
                    <TabsTrigger value="details">Detailed View</TabsTrigger>
                  </TabsList>

                  <TabsContent value="comparison" className="space-y-6">
                    {/* Basic Information */}
                    {selectedCategories.includes("basic") && (
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <User className="h-5 w-5" /> Basic Information
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-gray-50 dark:bg-gray-800">
                                <th className="p-2 text-left border">Attribute</th>
                                {getSelectedProphetData().map((prophet) => (
                                  <th key={prophet.id} className="p-2 text-left border">
                                    <div className="flex items-center gap-2">
                                      {prophet.name}
                                      <span className="text-xs text-gray-500 dark:text-gray-400">
                                        {prophet.arabicName}
                                      </span>
                                    </div>
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="p-2 border font-medium">Title</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border">
                                    {prophet.title || "Not specified"}
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td className="p-2 border font-medium">Birth Place</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border flex items-center gap-1">
                                    <MapPin className="h-4 w-4 text-gray-500" />
                                    {prophet.birthPlace || "Not specified"}
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td className="p-2 border font-medium">Time Period</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border flex items-center gap-1">
                                    <Clock className="h-4 w-4 text-gray-500" />
                                    {prophet.timePeriod || "Not specified"}
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td className="p-2 border font-medium">Age</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border">
                                    {prophet.age || "Not specified"} years
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td className="p-2 border font-medium">Revealed Book</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border flex items-center gap-1">
                                    {prophet.books && prophet.books.length > 0 ? (
                                      <>
                                        <Book className="h-4 w-4 text-gray-500" />
                                        {prophet.books.join(", ")}
                                      </>
                                    ) : (
                                      "None"
                                    )}
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td className="p-2 border font-medium">Nation/People</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border flex items-center gap-1">
                                    {prophet.nation ? (
                                      <>
                                        <Flag className="h-4 w-4 text-gray-500" />
                                        {prophet.nation}
                                      </>
                                    ) : (
                                      "Not specified"
                                    )}
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td className="p-2 border font-medium">End of Life</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border">
                                    {prophet.endOfLife || "Not specified"}
                                  </td>
                                ))}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Family */}
                    {selectedCategories.includes("family") && (
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Users className="h-5 w-5" /> Family
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-gray-50 dark:bg-gray-800">
                                <th className="p-2 text-left border">Relation</th>
                                {getSelectedProphetData().map((prophet) => (
                                  <th key={prophet.id} className="p-2 text-left border">
                                    {prophet.name}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="p-2 border font-medium">Father</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border">
                                    {prophet.family?.father || "Not mentioned"}
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td className="p-2 border font-medium">Mother</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border">
                                    {prophet.family?.mother || "Not mentioned"}
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td className="p-2 border font-medium">Spouses</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border">
                                    {prophet.family?.spouses ? (
                                      <ul className="list-disc pl-5">
                                        {prophet.family.spouses.map((spouse, idx) => (
                                          <li key={idx}>{spouse}</li>
                                        ))}
                                      </ul>
                                    ) : (
                                      "Not mentioned"
                                    )}
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td className="p-2 border font-medium">Children</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border">
                                    {prophet.family?.children ? (
                                      <ul className="list-disc pl-5">
                                        {prophet.family.children.map((child, idx) => (
                                          <li key={idx}>{child}</li>
                                        ))}
                                      </ul>
                                    ) : (
                                      "Not mentioned"
                                    )}
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td className="p-2 border font-medium">Siblings</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border">
                                    {prophet.family?.siblings ? (
                                      <ul className="list-disc pl-5">
                                        {prophet.family.siblings.map((sibling, idx) => (
                                          <li key={idx}>{sibling}</li>
                                        ))}
                                      </ul>
                                    ) : (
                                      "Not mentioned"
                                    )}
                                  </td>
                                ))}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}

                    {/* Key Events */}
                    {selectedCategories.includes("keyEvents") && (
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Milestone className="h-5 w-5" /> Key Events
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {getSelectedProphetData().map((prophet) => (
                            <div key={prophet.id} className="border rounded-lg p-3">
                              <h4 className="font-medium text-center mb-3 pb-2 border-b">{prophet.name}</h4>
                              <div className="space-y-3">
                                {prophet.keyEvents.map((event, idx) => (
                                  <div key={idx} className="flex gap-2">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-xs">
                                      {idx + 1}
                                    </div>
                                    <div>
                                      <h5 className="font-medium">{event.title}</h5>
                                      <p className="text-sm text-gray-600 dark:text-gray-400">{event.description}</p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Miracles */}
                    {selectedCategories.includes("miracles") && (
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Sparkles className="h-5 w-5" /> Miracles
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {getSelectedProphetData().map((prophet) => (
                            <div key={prophet.id} className="border rounded-lg p-3">
                              <h4 className="font-medium text-center mb-3 pb-2 border-b">{prophet.name}</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                {prophet.miracles.map((miracle, idx) => (
                                  <li key={idx} className="text-sm">
                                    {miracle}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Challenges */}
                    {selectedCategories.includes("challenges") && (
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <Mountain className="h-5 w-5" /> Challenges
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {getSelectedProphetData().map((prophet) => (
                            <div key={prophet.id} className="border rounded-lg p-3">
                              <h4 className="font-medium text-center mb-3 pb-2 border-b">{prophet.name}</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                {prophet.challenges.map((challenge, idx) => (
                                  <li key={idx} className="text-sm">
                                    {challenge}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Teachings */}
                    {selectedCategories.includes("teachings") && (
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <BookOpen className="h-5 w-5" /> Teachings
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {getSelectedProphetData().map((prophet) => (
                            <div key={prophet.id} className="border rounded-lg p-3">
                              <h4 className="font-medium text-center mb-3 pb-2 border-b">{prophet.name}</h4>
                              <ul className="list-disc pl-5 space-y-2">
                                {prophet.teachings.map((teaching, idx) => (
                                  <li key={idx} className="text-sm">
                                    {teaching}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quranic Mentions */}
                    {selectedCategories.includes("quranicMentions") && (
                      <div className="border rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                          <BookMarked className="h-5 w-5" /> Quranic Mentions
                        </h3>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse">
                            <thead>
                              <tr className="bg-gray-50 dark:bg-gray-800">
                                <th className="p-2 text-left border">Attribute</th>
                                {getSelectedProphetData().map((prophet) => (
                                  <th key={prophet.id} className="p-2 text-left border">
                                    {prophet.name}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="p-2 border font-medium">Mention Count</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border">
                                    {prophet.quranicMentions.count} times
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td className="p-2 border font-medium">Major Surahs</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border">
                                    {prophet.quranicMentions.majorSurahs.join(", ")}
                                  </td>
                                ))}
                              </tr>
                              <tr>
                                <td className="p-2 border font-medium">Notable Verses</td>
                                {getSelectedProphetData().map((prophet) => (
                                  <td key={prophet.id} className="p-2 border">
                                    <ul className="list-none space-y-2">
                                      {prophet.quranicMentions.notableVerses.map((verse, idx) => (
                                        <li key={idx} className="text-sm">
                                          <span className="font-medium">{verse.reference}</span>: {verse.description}
                                        </li>
                                      ))}
                                    </ul>
                                  </td>
                                ))}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="details">
                    <div className="grid grid-cols-1 gap-6">
                      {getSelectedProphetData().map((prophet) => (
                        <Card key={prophet.id}>
                          <CardHeader className="bg-gray-50 dark:bg-gray-800">
                            <CardTitle className="flex items-center gap-2">
                              <Heart className="h-5 w-5 text-blue-600" />
                              {prophet.name} <span className="text-gray-500 ml-2 text-lg">{prophet.arabicName}</span>
                            </CardTitle>
                            <CardDescription>{prophet.title}</CardDescription>
                          </CardHeader>
                          <CardContent className="pt-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <MapPin className="h-4 w-4 text-gray-500" />
                                  <span className="font-medium">Birth Place:</span>{" "}
                                  {prophet.birthPlace || "Not specified"}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Clock className="h-4 w-4 text-gray-500" />
                                  <span className="font-medium">Time Period:</span>{" "}
                                  {prophet.timePeriod || "Not specified"}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Info className="h-4 w-4 text-gray-500" />
                                  <span className="font-medium">Age:</span> {prophet.age || "Not specified"} years
                                </div>
                              </div>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <Book className="h-4 w-4 text-gray-500" />
                                  <span className="font-medium">Revealed Book:</span>{" "}
                                  {prophet.books ? prophet.books.join(", ") : "None"}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Flag className="h-4 w-4 text-gray-500" />
                                  <span className="font-medium">Nation/People:</span>{" "}
                                  {prophet.nation || "Not specified"}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Info className="h-4 w-4 text-gray-500" />
                                  <span className="font-medium">End of Life:</span>{" "}
                                  {prophet.endOfLife || "Not specified"}
                                </div>
                              </div>
                            </div>

                            <div className="space-y-6">
                              {/* Family */}
                              <div>
                                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                  <Users className="h-5 w-5" /> Family
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                  {prophet.family?.father && (
                                    <div className="border rounded-lg p-3">
                                      <h4 className="font-medium">Father</h4>
                                      <p>{prophet.family.father}</p>
                                    </div>
                                  )}
                                  {prophet.family?.mother && (
                                    <div className="border rounded-lg p-3">
                                      <h4 className="font-medium">Mother</h4>
                                      <p>{prophet.family.mother}</p>
                                    </div>
                                  )}
                                  {prophet.family?.spouses && prophet.family.spouses.length > 0 && (
                                    <div className="border rounded-lg p-3">
                                      <h4 className="font-medium">Spouses</h4>
                                      <ul className="list-disc pl-5">
                                        {prophet.family.spouses.map((spouse, idx) => (
                                          <li key={idx}>{spouse}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                  {prophet.family?.children && prophet.family.children.length > 0 && (
                                    <div className="border rounded-lg p-3">
                                      <h4 className="font-medium">Children</h4>
                                      <ul className="list-disc pl-5">
                                        {prophet.family.children.map((child, idx) => (
                                          <li key={idx}>{child}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                  {prophet.family?.siblings && prophet.family.siblings.length > 0 && (
                                    <div className="border rounded-lg p-3">
                                      <h4 className="font-medium">Siblings</h4>
                                      <ul className="list-disc pl-5">
                                        {prophet.family.siblings.map((sibling, idx) => (
                                          <li key={idx}>{sibling}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                </div>
                              </div>

                              {/* Key Events */}
                              <div>
                                <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                  <Milestone className="h-5 w-5" /> Key Events
                                </h3>
                                <div className="space-y-3">
                                  {prophet.keyEvents.map((event, idx) => (
                                    <div key={idx} className="flex gap-3 border rounded-lg p-3">
                                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-sm">
                                        {idx + 1}
                                      </div>
                                      <div>
                                        <h4 className="font-medium">{event.title}</h4>
                                        <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>

                              {/* Two Column Layout for Remaining Sections */}
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Miracles */}
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <Sparkles className="h-5 w-5" /> Miracles
                                  </h3>
                                  <ul className="list-disc pl-5 space-y-2 border rounded-lg p-3">
                                    {prophet.miracles.map((miracle, idx) => (
                                      <li key={idx}>{miracle}</li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Challenges */}
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <Mountain className="h-5 w-5" /> Challenges
                                  </h3>
                                  <ul className="list-disc pl-5 space-y-2 border rounded-lg p-3">
                                    {prophet.challenges.map((challenge, idx) => (
                                      <li key={idx}>{challenge}</li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Teachings */}
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <BookOpen className="h-5 w-5" /> Teachings
                                  </h3>
                                  <ul className="list-disc pl-5 space-y-2 border rounded-lg p-3">
                                    {prophet.teachings.map((teaching, idx) => (
                                      <li key={idx}>{teaching}</li>
                                    ))}
                                  </ul>
                                </div>

                                {/* Quranic Mentions */}
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                    <BookMarked className="h-5 w-5" /> Quranic Mentions
                                  </h3>
                                  <div className="border rounded-lg p-3">
                                    <p className="mb-2">
                                      <span className="font-medium">Mentioned:</span> {prophet.quranicMentions.count}{" "}
                                      times
                                    </p>
                                    <p className="mb-2">
                                      <span className="font-medium">Major Surahs:</span>{" "}
                                      {prophet.quranicMentions.majorSurahs.join(", ")}
                                    </p>
                                    <div className="mt-3">
                                      <h4 className="font-medium mb-2">Notable Verses:</h4>
                                      <ul className="list-none space-y-2">
                                        {prophet.quranicMentions.notableVerses.map((verse, idx) => (
                                          <li key={idx} className="text-sm">
                                            <span className="font-medium">{verse.reference}</span>: {verse.description}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
