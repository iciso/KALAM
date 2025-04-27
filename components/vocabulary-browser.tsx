"use client"

import { useState, useEffect } from "react"
import { type VocabularyWord, Difficulty, PartOfSpeech } from "../types/vocabulary"
import { vocabularyService } from "../services/vocabulary-service"
import { VocabularyDetail } from "./vocabulary-detail"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Bookmark, Volume2, ListPlus } from "lucide-react"
import { AddToListDialog } from "./add-to-list-dialog"

export function VocabularyBrowser() {
  const [words, setWords] = useState<VocabularyWord[]>([])
  const [filteredWords, setFilteredWords] = useState<VocabularyWord[]>([])
  const [selectedWord, setSelectedWord] = useState<VocabularyWord | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all")
  const [partOfSpeech, setPartOfSpeech] = useState<PartOfSpeech | "all">("all")
  const [activeTab, setActiveTab] = useState("all")
  const [savedWords, setSavedWords] = useState<string[]>([])
  const [showAudioOnly, setShowAudioOnly] = useState(false)

  // Load all words on component mount
  useEffect(() => {
    const allWords = vocabularyService.getAllWords()
    setWords(allWords)
    setFilteredWords(allWords)
  }, [])

  // Apply filters when search or filter criteria change
  useEffect(() => {
    let result = words

    // Apply search filter
    if (searchQuery) {
      result = vocabularyService.searchWords(searchQuery)
    }

    // Apply difficulty filter
    if (difficulty !== "all") {
      result = result.filter((word) => word.difficulty === difficulty)
    }

    // Apply part of speech filter
    if (partOfSpeech !== "all") {
      result = result.filter((word) => word.partOfSpeech === partOfSpeech)
    }

    // Apply category filter
    if (activeTab !== "all" && activeTab !== "saved") {
      result = vocabularyService.getWordsByCategoryId(activeTab)
    } else if (activeTab === "saved") {
      result = result.filter((word) => savedWords.includes(word.id))
    }

    // Apply audio filter
    if (showAudioOnly) {
      result = result.filter((word) => word.hasAudio)
    }

    setFilteredWords(result)
  }, [searchQuery, difficulty, partOfSpeech, activeTab, words, savedWords, showAudioOnly])

  const handleWordSelect = (word: VocabularyWord) => {
    setSelectedWord(word)
  }

  const handleSaveWord = (word: VocabularyWord) => {
    setSavedWords((prev) => {
      if (prev.includes(word.id)) {
        return prev.filter((id) => id !== word.id)
      } else {
        return [...prev, word.id]
      }
    })
  }

  const categories = vocabularyService.getAllCategories()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar with filters */}
        <div className="w-full md:w-1/3 lg:w-1/4 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Search & Filter</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Input
                  placeholder="Search vocabulary..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1"
                />
                <Button variant="ghost" size="icon">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Difficulty</label>
                <Select value={difficulty} onValueChange={(value) => setDifficulty(value as Difficulty | "all")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select difficulty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Levels</SelectItem>
                    <SelectItem value={Difficulty.Beginner}>Beginner</SelectItem>
                    <SelectItem value={Difficulty.Intermediate}>Intermediate</SelectItem>
                    <SelectItem value={Difficulty.Advanced}>Advanced</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Part of Speech</label>
                <Select value={partOfSpeech} onValueChange={(value) => setPartOfSpeech(value as PartOfSpeech | "all")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select part of speech" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value={PartOfSpeech.Noun}>Noun</SelectItem>
                    <SelectItem value={PartOfSpeech.Verb}>Verb</SelectItem>
                    <SelectItem value={PartOfSpeech.Adjective}>Adjective</SelectItem>
                    <SelectItem value={PartOfSpeech.Adverb}>Adverb</SelectItem>
                    <SelectItem value={PartOfSpeech.Preposition}>Preposition</SelectItem>
                    <SelectItem value={PartOfSpeech.Pronoun}>Pronoun</SelectItem>
                    <SelectItem value={PartOfSpeech.Particle}>Particle</SelectItem>
                    <SelectItem value={PartOfSpeech.Other}>Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="audio-only"
                  checked={showAudioOnly}
                  onChange={(e) => setShowAudioOnly(e.target.checked)}
                  className="rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                />
                <label htmlFor="audio-only" className="text-sm font-medium">
                  <div className="flex items-center">
                    <Volume2 className="h-4 w-4 mr-1" />
                    Words with audio only
                  </div>
                </label>
              </div>

              <div className="pt-2">
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    setSearchQuery("")
                    setDifficulty("all")
                    setPartOfSpeech("all")
                    setShowAudioOnly(false)
                  }}
                >
                  <Filter className="mr-2 h-4 w-4" />
                  Reset Filters
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-2 mb-4">
                  <TabsTrigger value="all">All Words</TabsTrigger>
                  <TabsTrigger value="saved">
                    <Bookmark className="mr-1 h-4 w-4" />
                    Saved
                  </TabsTrigger>
                </TabsList>

                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={activeTab === category.id ? "default" : "ghost"}
                    className="w-full justify-start mb-1 px-2"
                    onClick={() => setActiveTab(category.id)}
                  >
                    {category.name}
                    <Badge variant="outline" className="ml-auto">
                      {category.wordIds.length}
                    </Badge>
                  </Button>
                ))}
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Main content area */}
        <div className="w-full md:w-2/3 lg:w-3/4">
          {selectedWord ? (
            <div className="mb-6">
              <Button variant="outline" className="mb-4" onClick={() => setSelectedWord(null)}>
                Back to List
              </Button>
              <VocabularyDetail
                word={selectedWord}
                onSave={handleSaveWord}
                isSaved={savedWords.includes(selectedWord.id)}
              />
            </div>
          ) : (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">
                  {activeTab === "all"
                    ? "All Vocabulary"
                    : activeTab === "saved"
                      ? "Saved Words"
                      : categories.find((c) => c.id === activeTab)?.name || "Vocabulary"}
                </h2>
                <div className="text-sm text-gray-500">
                  {filteredWords.length} {filteredWords.length === 1 ? "word" : "words"} found
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredWords.map((word) => (
                  <Card
                    key={word.id}
                    className="cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => handleWordSelect(word)}
                  >
                    <CardHeader className="pb-2">
                      <div className="flex justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <CardTitle className="font-arabic text-xl">{word.arabic}</CardTitle>
                            {word.hasAudio && <Volume2 className="h-4 w-4 text-emerald-600" />}
                          </div>
                          <CardDescription>{word.transliteration}</CardDescription>
                        </div>
                        <div className="flex gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation()
                              handleSaveWord(word)
                            }}
                          >
                            <Bookmark className={`h-4 w-4 ${savedWords.includes(word.id) ? "fill-emerald-600" : ""}`} />
                            <span className="sr-only">{savedWords.includes(word.id) ? "Unsave" : "Save"} word</span>
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={(e) => {
                              e.stopPropagation()
                            }}
                          >
                            <AddToListDialog word={word} trigger={<ListPlus className="h-4 w-4" />} />
                            <span className="sr-only">Add to list</span>
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="line-clamp-2">{word.meanings.join(", ")}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        <Badge variant="outline" className="capitalize text-xs">
                          {word.difficulty}
                        </Badge>
                        <Badge variant="outline" className="capitalize text-xs">
                          {word.partOfSpeech}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredWords.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No words found matching your criteria.</p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    onClick={() => {
                      setSearchQuery("")
                      setDifficulty("all")
                      setPartOfSpeech("all")
                      setActiveTab("all")
                      setShowAudioOnly(false)
                    }}
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
