"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { enhancedVocabularyService } from "../services/enhanced-vocabulary-service"
// Remove or comment out the original import
// import { vocabularyService } from "../services/vocabulary-service"
import { Difficulty } from "../types/vocabulary"
import { Progress } from "@/components/ui/progress"

export function VocabularyStats() {
  const [totalWords, setTotalWords] = useState(0)
  const [beginnerWords, setBeginnerWords] = useState(0)
  const [intermediateWords, setIntermediateWords] = useState(0)
  const [advancedWords, setAdvancedWords] = useState(0)
  const [categoriesCount, setCategoriesCount] = useState(0)
  const [mostFrequentWord, setMostFrequentWord] = useState<string>("")

  useEffect(() => {
    const allWords = enhancedVocabularyService.getAllWords()
    setTotalWords(allWords.length)

    setBeginnerWords(enhancedVocabularyService.getWordsByDifficulty(Difficulty.Beginner).length)
    setIntermediateWords(enhancedVocabularyService.getWordsByDifficulty(Difficulty.Intermediate).length)
    setAdvancedWords(enhancedVocabularyService.getWordsByDifficulty(Difficulty.Advanced).length)

    setCategoriesCount(enhancedVocabularyService.getAllCategories().length)

    const mostFrequent = enhancedVocabularyService.getMostFrequentWords(1)[0]
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
          <CardDescription>Total Words in Dictionary</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="text-sm text-gray-500">
              <div className="flex justify-between mb-1">
                <span>Beginner:</span>
                <span>{beginnerWords}</span>
              </div>
              <Progress value={(beginnerWords / totalWords) * 100} className="h-1 mb-2" />
            </div>
            <div className="text-sm text-gray-500">
              <div className="flex justify-between mb-1">
                <span>Intermediate:</span>
                <span>{intermediateWords}</span>
              </div>
              <Progress value={(intermediateWords / totalWords) * 100} className="h-1 mb-2" />
            </div>
            <div className="text-sm text-gray-500">
              <div className="flex justify-between mb-1">
                <span>Advanced:</span>
                <span>{advancedWords}</span>
              </div>
              <Progress value={(advancedWords / totalWords) * 100} className="h-1 mb-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl">{categoriesCount}</CardTitle>
          <CardDescription>Word Categories</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500">Words organized into thematic categories for easier learning</p>
          <div className="mt-2 text-xs text-emerald-600">+4 new categories in Phase 4</div>
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
