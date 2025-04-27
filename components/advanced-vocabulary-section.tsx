"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { vocabularyService } from "../services/vocabulary-service"
import type { VocabularyWord } from "../types/vocabulary"
import Link from "next/link"

export function AdvancedVocabularySection() {
  const [advancedWords, setAdvancedWords] = useState<VocabularyWord[]>([])
  const [displayCount, setDisplayCount] = useState(6)

  useEffect(() => {
    const words = vocabularyService.getAdvancedWords()
    setAdvancedWords(words)
  }, [])

  const handleShowMore = () => {
    setDisplayCount(Math.min(displayCount + 6, advancedWords.length))
  }

  if (advancedWords.length === 0) {
    return null
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Advanced Vocabulary</h2>
        <Link href="/vocabulary">
          <Button variant="outline">View All</Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {advancedWords.slice(0, displayCount).map((word) => (
          <Card key={word.id} className="hover:shadow-md transition-shadow">
            <CardHeader className="pb-2">
              <div className="flex justify-between">
                <div>
                  <CardTitle className="font-arabic text-xl">{word.arabic}</CardTitle>
                  <CardDescription>{word.transliteration}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-2 mb-2">{word.meanings.join(", ")}</p>
              <div className="flex flex-wrap gap-1">
                {word.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="capitalize text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {displayCount < advancedWords.length && (
        <div className="text-center mt-6">
          <Button onClick={handleShowMore}>Show More</Button>
        </div>
      )}
    </div>
  )
}
