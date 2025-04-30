"use client"

import { useState, useEffect } from "react"
import { vocabularyService, type SurahInfo } from "../services/vocabulary-service"
import type { VocabularyWord } from "../types/vocabulary"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Volume2, Bookmark, ListPlus, BookOpen } from "lucide-react"
import { VocabularyDetail } from "./vocabulary-detail"
import { AddToListDialog } from "./add-to-list-dialog"

export function SurahVocabularyBrowser() {
  const [surahs, setSurahs] = useState<SurahInfo[]>([])
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null)
  const [words, setWords] = useState<VocabularyWord[]>([])
  const [selectedWord, setSelectedWord] = useState<VocabularyWord | null>(null)
  const [savedWords, setSavedWords] = useState<string[]>([])

  // Load all Surahs on component mount
  useEffect(() => {
    const allSurahs = vocabularyService.getAllSurahs()
    setSurahs(allSurahs)
  }, [])

  // Load words when a Surah is selected
  useEffect(() => {
    if (selectedSurah) {
      const surahWords = vocabularyService.getWordsBySurah(selectedSurah)
      setWords(surahWords)
    } else {
      setWords([])
    }
  }, [selectedSurah])

  const handleSurahChange = (value: string) => {
    setSelectedSurah(Number.parseInt(value))
    setSelectedWord(null)
  }

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

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Browse Words by Surah</CardTitle>
          <CardDescription>Explore Quranic vocabulary organized by chapter</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium block mb-2">Select Surah</label>
              <Select value={selectedSurah?.toString() || ""} onValueChange={handleSurahChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Choose a Surah" />
                </SelectTrigger>
                <SelectContent>
                  {surahs.map((surah) => (
                    <SelectItem key={surah.number} value={surah.number.toString()}>
                      {surah.number}. {surah.name} ({surah.wordCount} {surah.wordCount === 1 ? "word" : "words"})
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {selectedSurah && words.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold mb-2">
                  Words in Surah {surahs.find((s) => s.number === selectedSurah)?.name}
                </h3>
                {selectedWord ? (
                  <div>
                    <Button variant="outline" className="mb-4" onClick={() => setSelectedWord(null)}>
                      Back to Surah Words
                    </Button>
                    <VocabularyDetail
                      word={selectedWord}
                      onSave={handleSaveWord}
                      isSaved={savedWords.includes(selectedWord.id)}
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {words.map((word) => (
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
                                <Bookmark
                                  className={`h-4 w-4 ${savedWords.includes(word.id) ? "fill-emerald-600" : ""}`}
                                />
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
                          <div className="mt-2 text-sm text-gray-500">
                            <div className="flex items-center">
                              <BookOpen className="h-3 w-3 mr-1" />
                              {word.examples.filter((ex) => ex.surahNumber === selectedSurah).length}
                              {word.examples.filter((ex) => ex.surahNumber === selectedSurah).length === 1
                                ? " occurrence"
                                : " occurrences"}{" "}
                              in this Surah
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </div>
            )}

            {selectedSurah && words.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No words found for this Surah in our database.</p>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
