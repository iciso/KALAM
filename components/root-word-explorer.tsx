"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { vocabularyService } from "../services/vocabulary-service"
import type { VocabularyWord } from "../types/vocabulary"

export function RootWordExplorer() {
  const [rootInput, setRootInput] = useState("")
  const [rootWords, setRootWords] = useState<VocabularyWord[]>([])
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [commonRoots, setCommonRoots] = useState<string[]>([])

  useEffect(() => {
    // Get some common roots to display as suggestions
    const allWords = vocabularyService.getAllWords()
    const roots = allWords.filter((word) => word.rootLetters).map((word) => word.rootLetters as string)

    // Get unique roots and take the first 8
    const uniqueRoots = Array.from(new Set(roots)).slice(0, 8)
    setCommonRoots(uniqueRoots)
  }, [])

  const handleSearch = () => {
    if (!rootInput.trim()) return

    const words = vocabularyService
      .getAllWords()
      .filter((word) => word.rootLetters && word.rootLetters.includes(rootInput))

    setRootWords(words)
    setSearchPerformed(true)
  }

  const handleRootClick = (root: string) => {
    setRootInput(root)
    const words = vocabularyService.getAllWords().filter((word) => word.rootLetters === root)
    setRootWords(words)
    setSearchPerformed(true)
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Root Word Explorer</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            Search for words by their Arabic root letters to see related words and understand word formation patterns.
          </p>

          <div className="flex gap-2">
            <Input
              placeholder="Enter root letters (e.g., ك ت ب)"
              value={rootInput}
              onChange={(e) => setRootInput(e.target.value)}
              className="flex-1"
            />
            <Button onClick={handleSearch}>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {!searchPerformed && (
          <div>
            <h3 className="text-sm font-medium mb-2">Common Roots:</h3>
            <div className="flex flex-wrap gap-2">
              {commonRoots.map((root) => (
                <Button
                  key={root}
                  variant="outline"
                  size="sm"
                  onClick={() => handleRootClick(root)}
                  className="font-arabic"
                >
                  {root}
                </Button>
              ))}
            </div>
          </div>
        )}

        {searchPerformed && (
          <div>
            <h3 className="text-sm font-medium mb-2">
              {rootWords.length > 0
                ? `Found ${rootWords.length} words with root "${rootInput}"`
                : `No words found with root "${rootInput}"`}
            </h3>

            {rootWords.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                {rootWords.map((word) => (
                  <Card key={word.id} className="bg-gray-50 dark:bg-gray-800">
                    <CardContent className="p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-arabic text-xl">{word.arabic}</h4>
                          <p className="text-sm">{word.transliteration}</p>
                        </div>
                        <div className="text-xs text-gray-500">{word.partOfSpeech}</div>
                      </div>
                      <p className="mt-2 text-sm">{word.meanings.join(", ")}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
