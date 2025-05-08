"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowLeft, Home, Download, Upload, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { enhancedVocabularyService } from "@/services/enhanced-vocabulary-service"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { PartOfSpeech, Difficulty } from "@/types/vocabulary"

export default function VocabularyIntegrationPage() {
  const allWords = enhancedVocabularyService.getAllWords()
  const allSurahs = enhancedVocabularyService.getAllSurahs()

  // Get words with and without Surah associations
  const [integratedWords, setIntegratedWords] = useState<any[]>([])
  const [nonIntegratedWords, setNonIntegratedWords] = useState<any[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all")
  const [filterPartOfSpeech, setFilterPartOfSpeech] = useState<string>("all")
  const [selectedTab, setSelectedTab] = useState("non-integrated")

  // Stats
  const [totalWords, setTotalWords] = useState(0)
  const [integratedCount, setIntegratedCount] = useState(0)
  const [integrationPercentage, setIntegrationPercentage] = useState(0)
  const [targetCount, setTargetCount] = useState(0)
  const [wordsNeeded, setWordsNeeded] = useState(0)

  // For the integration plan
  const [targetPercentage, setTargetPercentage] = useState(99)
  const [selectedWords, setSelectedWords] = useState<Set<string>>(new Set())
  const [suggestedSurahs, setSuggestedSurahs] = useState<Record<string, number[]>>({})

  useEffect(() => {
    // Identify words with and without Surah associations
    const integrated: any[] = []
    const nonIntegrated: any[] = []

    allWords.forEach((word) => {
      const hasSurahAssociation = word.examples && word.examples.some((ex: any) => ex.surahNumber)

      if (hasSurahAssociation) {
        // For integrated words, collect which Surahs they appear in
        const surahNumbers = new Set<number>()
        word.examples.forEach((ex: any) => {
          if (ex.surahNumber) {
            surahNumbers.add(ex.surahNumber)
          }
        })

        integrated.push({
          ...word,
          surahNumbers: Array.from(surahNumbers),
        })
      } else {
        nonIntegrated.push(word)
      }
    })

    setIntegratedWords(integrated)
    setNonIntegratedWords(nonIntegrated)

    // Calculate stats
    const total = allWords.length
    const integratedTotal = integrated.length
    const percentage = (integratedTotal / total) * 100

    setTotalWords(total)
    setIntegratedCount(integratedTotal)
    setIntegrationPercentage(percentage)

    // Calculate how many more words we need to reach target percentage
    const targetWordCount = Math.ceil((targetPercentage / 100) * total)
    setTargetCount(targetWordCount)
    setWordsNeeded(Math.max(0, targetWordCount - integratedTotal))

    // Generate suggested Surahs for non-integrated words
    const suggestions: Record<string, number[]> = {}

    nonIntegrated.forEach((word) => {
      // Simple suggestion algorithm - suggest Surahs based on word difficulty
      // In a real implementation, this would use more sophisticated matching
      let suggestedSurahNumbers: number[] = []

      if (word.difficulty === Difficulty.Beginner) {
        // For beginner words, suggest early Surahs
        suggestedSurahNumbers = [1, 2, 3, 4, 5]
      } else if (word.difficulty === Difficulty.Intermediate) {
        // For intermediate words, suggest middle Surahs
        suggestedSurahNumbers = [6, 7, 8, 9, 10]
      } else {
        // For advanced words, suggest later Surahs
        suggestedSurahNumbers = [11, 12, 13, 14, 15]
      }

      suggestions[word.id] = suggestedSurahNumbers
    })

    setSuggestedSurahs(suggestions)
  }, [allWords, targetPercentage])

  // Filter words based on search and filters
  const filterWords = (words: any[]) => {
    return words.filter((word) => {
      const matchesSearch =
        searchTerm === "" ||
        word.arabic.includes(searchTerm) ||
        word.transliteration.toLowerCase().includes(searchTerm.toLowerCase()) ||
        word.meanings.some((m: string) => m.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesDifficulty = filterDifficulty === "all" || word.difficulty === filterDifficulty

      const matchesPartOfSpeech = filterPartOfSpeech === "all" || word.partOfSpeech === filterPartOfSpeech

      return matchesSearch && matchesDifficulty && matchesPartOfSpeech
    })
  }

  const filteredNonIntegrated = filterWords(nonIntegratedWords)
  const filteredIntegrated = filterWords(integratedWords)

  const toggleWordSelection = (wordId: string) => {
    const newSelected = new Set(selectedWords)
    if (newSelected.has(wordId)) {
      newSelected.delete(wordId)
    } else {
      newSelected.add(wordId)
    }
    setSelectedWords(newSelected)
  }

  const handleSelectAll = (words: any[]) => {
    const newSelected = new Set(selectedWords)
    words.forEach((word) => {
      newSelected.add(word.id)
    })
    setSelectedWords(newSelected)
  }

  const handleDeselectAll = (words: any[]) => {
    const newSelected = new Set(selectedWords)
    words.forEach((word) => {
      newSelected.delete(word.id)
    })
    setSelectedWords(newSelected)
  }

  const exportIntegrationPlan = () => {
    // Create a plan for integrating the selected words
    const plan = {
      selectedWords: Array.from(selectedWords).map((id) => {
        const word = allWords.find((w) => w.id === id)
        return {
          id,
          arabic: word?.arabic,
          transliteration: word?.transliteration,
          meanings: word?.meanings,
          suggestedSurahs: suggestedSurahs[id]?.map((num) => {
            const surah = allSurahs.find((s) => s.number === num)
            return {
              number: num,
              name: surah?.name || `Surah ${num}`,
            }
          }),
        }
      }),
      stats: {
        totalWords,
        currentIntegrated: integratedCount,
        currentPercentage: integrationPercentage,
        targetPercentage,
        wordsNeeded,
        selectedCount: selectedWords.size,
        projectedPercentage: ((integratedCount + selectedWords.size) / totalWords) * 100,
      },
    }

    // Convert to JSON and create download link
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(plan, null, 2))
    const downloadAnchorNode = document.createElement("a")
    downloadAnchorNode.setAttribute("href", dataStr)
    downloadAnchorNode.setAttribute("download", "quran-vocabulary-integration-plan.json")
    document.body.appendChild(downloadAnchorNode)
    downloadAnchorNode.click()
    downloadAnchorNode.remove()
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Quranic Vocabulary Integration</h1>
          <div className="flex space-x-2">
            <Link href="/quizzes/surah">
              <Button variant="ghost" size="icon" title="Back to Surah Quizzes">
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back to Surah Quizzes</span>
              </Button>
            </Link>
            <Link href="/">
              <Button variant="ghost" size="icon" title="Home">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Vocabulary Integration Dashboard</CardTitle>
            <CardDescription>
              Track and improve the integration of Quranic vocabulary words with specific Surahs
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Current Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{integrationPercentage.toFixed(1)}%</div>
                  <Progress value={integrationPercentage} className="h-2 mb-2" />
                  <p className="text-sm text-gray-500">
                    {integratedCount} of {totalWords} words integrated with Surahs
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Target Coverage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2 mb-2">
                    <Input
                      type="number"
                      min="1"
                      max="100"
                      value={targetPercentage}
                      onChange={(e) => setTargetPercentage(Number(e.target.value))}
                      className="w-20"
                    />
                    <span className="text-lg">%</span>
                  </div>
                  <Progress value={Math.min(100, targetPercentage)} className="h-2 mb-2" />
                  {integrationPercentage >= targetPercentage ? (
                    <p className="text-sm text-gray-500">
                      Target already achieved! Current coverage: {integrationPercentage.toFixed(1)}%
                    </p>
                  ) : (
                    <p className="text-sm text-gray-500">
                      Need {wordsNeeded} more words to reach {targetPercentage}% coverage
                    </p>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Integration Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    {selectedWords.size} <span className="text-lg font-normal text-gray-500">selected</span>
                  </div>
                  {wordsNeeded > 0 ? (
                    <>
                      <Progress value={(selectedWords.size / wordsNeeded) * 100} className="h-2 mb-2" />
                      <p className="text-sm text-gray-500">
                        Projected coverage: {(((integratedCount + selectedWords.size) / totalWords) * 100).toFixed(1)}%
                      </p>
                    </>
                  ) : (
                    <>
                      <Progress value={100} className="h-2 mb-2" />
                      <p className="text-sm text-gray-500">
                        Target already achieved! Adding more words will further improve coverage.
                      </p>
                    </>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
              <div className="flex items-center space-x-2 w-full md:w-auto">
                <div className="relative w-full md:w-64">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                  <Input
                    placeholder="Search words..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-8"
                  />
                </div>

                <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Difficulties</SelectItem>
                    <SelectItem value={Difficulty.Beginner}>Beginner</SelectItem>
                    <SelectItem value={Difficulty.Intermediate}>Intermediate</SelectItem>
                    <SelectItem value={Difficulty.Advanced}>Advanced</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={filterPartOfSpeech} onValueChange={setFilterPartOfSpeech}>
                  <SelectTrigger className="w-full md:w-40">
                    <SelectValue placeholder="Part of Speech" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Parts of Speech</SelectItem>
                    <SelectItem value={PartOfSpeech.Noun}>Noun</SelectItem>
                    <SelectItem value={PartOfSpeech.Verb}>Verb</SelectItem>
                    <SelectItem value={PartOfSpeech.Adjective}>Adjective</SelectItem>
                    <SelectItem value={PartOfSpeech.Adverb}>Adverb</SelectItem>
                    <SelectItem value={PartOfSpeech.Preposition}>Preposition</SelectItem>
                    <SelectItem value={PartOfSpeech.Pronoun}>Pronoun</SelectItem>
                    <SelectItem value={PartOfSpeech.Conjunction}>Conjunction</SelectItem>
                    <SelectItem value={PartOfSpeech.Particle}>Particle</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-2 w-full md:w-auto justify-end">
                <Button
                  variant="outline"
                  onClick={() =>
                    selectedTab === "non-integrated"
                      ? handleSelectAll(filteredNonIntegrated)
                      : handleSelectAll(filteredIntegrated)
                  }
                >
                  Select All
                </Button>
                <Button
                  variant="outline"
                  onClick={() =>
                    selectedTab === "non-integrated"
                      ? handleDeselectAll(filteredNonIntegrated)
                      : handleDeselectAll(filteredIntegrated)
                  }
                >
                  Deselect All
                </Button>
                <Button
                  onClick={exportIntegrationPlan}
                  disabled={selectedWords.size === 0}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Export Plan
                </Button>
              </div>
            </div>

            <Tabs defaultValue="non-integrated" onValueChange={setSelectedTab}>
              <TabsList className="mb-4">
                <TabsTrigger value="non-integrated">
                  Non-Integrated Words{" "}
                  <Badge variant="outline" className="ml-2">
                    {nonIntegratedWords.length}
                  </Badge>
                </TabsTrigger>
                <TabsTrigger value="integrated">
                  Integrated Words{" "}
                  <Badge variant="outline" className="ml-2">
                    {integratedWords.length}
                  </Badge>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="non-integrated">
                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12"></TableHead>
                        <TableHead>Arabic</TableHead>
                        <TableHead>Transliteration</TableHead>
                        <TableHead>Meaning</TableHead>
                        <TableHead>Difficulty</TableHead>
                        <TableHead>Suggested Surahs</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredNonIntegrated.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-4">
                            No words found matching your filters
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredNonIntegrated.map((word) => (
                          <TableRow key={word.id}>
                            <TableCell>
                              <Checkbox
                                checked={selectedWords.has(word.id)}
                                onCheckedChange={() => toggleWordSelection(word.id)}
                              />
                            </TableCell>
                            <TableCell className="font-arabic text-lg">{word.arabic}</TableCell>
                            <TableCell>{word.transliteration}</TableCell>
                            <TableCell>{word.meanings.join(", ")}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  word.difficulty === Difficulty.Beginner
                                    ? "bg-green-50 text-green-700 border-green-200"
                                    : word.difficulty === Difficulty.Intermediate
                                      ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                      : "bg-red-50 text-red-700 border-red-200"
                                }
                              >
                                {word.difficulty}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {suggestedSurahs[word.id]?.map((surahNum) => {
                                  const surah = allSurahs.find((s) => s.number === surahNum)
                                  return (
                                    <Badge
                                      key={surahNum}
                                      variant="outline"
                                      className="bg-blue-50 text-blue-700 border-blue-200"
                                    >
                                      {surahNum}. {surah?.name || `Surah ${surahNum}`}
                                    </Badge>
                                  )
                                })}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>

              <TabsContent value="integrated">
                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12"></TableHead>
                        <TableHead>Arabic</TableHead>
                        <TableHead>Transliteration</TableHead>
                        <TableHead>Meaning</TableHead>
                        <TableHead>Difficulty</TableHead>
                        <TableHead>Integrated Surahs</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {filteredIntegrated.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={6} className="text-center py-4">
                            No words found matching your filters
                          </TableCell>
                        </TableRow>
                      ) : (
                        filteredIntegrated.map((word) => (
                          <TableRow key={word.id}>
                            <TableCell>
                              <Checkbox
                                checked={selectedWords.has(word.id)}
                                onCheckedChange={() => toggleWordSelection(word.id)}
                              />
                            </TableCell>
                            <TableCell className="font-arabic text-lg">{word.arabic}</TableCell>
                            <TableCell>{word.transliteration}</TableCell>
                            <TableCell>{word.meanings.join(", ")}</TableCell>
                            <TableCell>
                              <Badge
                                variant="outline"
                                className={
                                  word.difficulty === Difficulty.Beginner
                                    ? "bg-green-50 text-green-700 border-green-200"
                                    : word.difficulty === Difficulty.Intermediate
                                      ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                                      : "bg-red-50 text-red-700 border-red-200"
                                }
                              >
                                {word.difficulty}
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {word.surahNumbers?.map((surahNum: number) => {
                                  const surah = allSurahs.find((s) => s.number === surahNum)
                                  return (
                                    <Badge
                                      key={surahNum}
                                      variant="outline"
                                      className="bg-green-50 text-green-700 border-green-200"
                                    >
                                      {surahNum}. {surah?.name || `Surah ${surahNum}`}
                                    </Badge>
                                  )
                                })}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Link href="/quizzes/surah">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Surah Quizzes
              </Button>
            </Link>
            <Button
              className="bg-emerald-600 hover:bg-emerald-700"
              onClick={() => window.open("/contribute", "_blank")}
            >
              <Upload className="h-4 w-4 mr-2" />
              Contribute to KALAM
            </Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-xl">Integration Plan</CardTitle>
            <CardDescription>How to increase Surah vocabulary coverage to {targetPercentage}%</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="bg-amber-50 dark:bg-amber-900/20 p-4 rounded-lg border border-amber-200 dark:border-amber-800">
              <h3 className="font-medium text-amber-800 dark:text-amber-300 mb-2">Current Status</h3>
              {integrationPercentage >= 99.9 ? (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Currently, all {integratedCount} words in our Quranic vocabulary dictionary are integrated with
                  specific Surahs. This gives users access to the complete vocabulary when studying specific Surahs.
                </p>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Currently, only {integratedCount} out of {totalWords} words ({integrationPercentage.toFixed(1)}%) in
                  our Quranic vocabulary dictionary are integrated with specific Surahs. This means that when users
                  select a Surah for quizzes, they're only seeing a portion of the relevant vocabulary.
                </p>
              )}
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-medium">Steps to Improve Integration:</h3>

              <div className="pl-4 border-l-2 border-emerald-500">
                <h4 className="font-medium">1. Identify Missing Associations</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  We've identified {nonIntegratedWords.length} words that don't have specific Surah associations. These
                  words need to be analyzed to determine which Surahs they appear in.
                </p>
              </div>

              <div className="pl-4 border-l-2 border-emerald-500">
                <h4 className="font-medium">2. Research Quranic Occurrences</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  For each word, research where it appears in the Quran. This can be done using:
                </p>
                <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Quranic concordances</li>
                  <li>Online Quran search tools</li>
                  <li>Arabic language resources</li>
                </ul>
              </div>

              <div className="pl-4 border-l-2 border-emerald-500">
                <h4 className="font-medium">3. Update the Vocabulary Data</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  For each word, add example objects that include:
                </p>
                <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Surah number and name</li>
                  <li>Ayah number</li>
                  <li>Arabic text of the ayah</li>
                  <li>Translation of the ayah</li>
                  <li>Word location within the ayah</li>
                </ul>
              </div>

              <div className="pl-4 border-l-2 border-emerald-500">
                <h4 className="font-medium">4. Prioritize High-Impact Words</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  To reach our target of {targetPercentage}% coverage efficiently, prioritize:
                </p>
                <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <li>Beginner-level words (most impactful for learners)</li>
                  <li>Words with high frequency in the Quran</li>
                  <li>Words from important categories (divine attributes, prophets, etc.)</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
              <h3 className="font-medium text-blue-800 dark:text-blue-300 mb-2">Expected Outcomes</h3>
              {integrationPercentage >= targetPercentage ? (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Our dictionary already exceeds the target of {targetPercentage}% coverage with{" "}
                  {integrationPercentage.toFixed(1)}% integration. You can increase the target for even more
                  comprehensive coverage.
                </p>
              ) : (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  By integrating {wordsNeeded} more words with specific Surahs, we can reach {targetPercentage}%
                  coverage. This will:
                </p>
              )}
              <ul className="list-disc pl-6 text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>Improve the relevance of Surah-specific quizzes</li>
                <li>Provide more comprehensive vocabulary learning for each Surah</li>
                <li>Create a more complete learning experience for users studying specific Surahs</li>
              </ul>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="w-full bg-emerald-600 hover:bg-emerald-700"
              onClick={exportIntegrationPlan}
              disabled={selectedWords.size === 0}
            >
              <Download className="h-4 w-4 mr-2" />
              Export Detailed Integration Plan ({selectedWords.size} words)
            </Button>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
