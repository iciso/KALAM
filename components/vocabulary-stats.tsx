"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { vocabularyService } from "../services/vocabulary-service"
import { Difficulty } from "../types/vocabulary"

export function VocabularyStats() {
  const [totalWords, setTotalWords] = useState(0)
  const [beginnerWords, setBeginnerWords] = useState(0)
  const [intermediateWords, setIntermediateWords] = useState(0)
  const [advancedWords, setAdvancedWords] = useState(0)
  const [categoriesCount, setCategoriesCount] = useState(0)
  const [mostFrequentWord, setMostFrequentWord] = useState<string>("")

  useEffect(() => {
    const allWords = vocabularyService.getAllWords()
    setTotalWords(allWords.length)

    setBeginnerWords(vocabularyService.getWordsByDifficulty(Difficulty.Beginner).length)
    setIntermediateWords(vocabularyService.getWordsByDifficulty(Difficulty.Intermediate).length)
    setAdvancedWords(vocabularyService.getWordsByDifficulty(Difficulty.Advanced).length)

    setCategoriesCount(vocabularyService.getAllCategories().length)

    const mostFrequent = vocabularyService.getMostFrequentWords(1)[0]
    if (mostFrequent) {
      setMostFrequentWord(
        `${mostFrequent.arabic} (${mostFrequent.transliteration}): ${mostFrequent.frequency} occurrences`,
      )
    }
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl">{totalWords}</CardTitle>
          <CardDescription>Total Vocabulary Words</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-sm text-gray-500">
            <div>Beginner: {beginnerWords}</div>
            <div>Intermediate: {intermediateWords}</div>
            <div>Advanced: {advancedWords}</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl">{categoriesCount}</CardTitle>
          <CardDescription>Vocabulary Categories</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">Words organized into thematic categories for easier learning</p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-lg">Most Frequent Word</CardTitle>
          <CardDescription>Based on Quranic occurrences</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm font-arabic">{mostFrequentWord}</p>
        </CardContent>
      </Card>
    </div>
  )
}
