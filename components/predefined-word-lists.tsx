"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, BookOpen, Check } from "lucide-react"
import { wordListService } from "../services/word-list-service"
import Link from "next/link"
import type { WordList } from "../types/word-lists"

export function PredefinedWordLists() {
  const [activeTab, setActiveTab] = useState("difficulty")
  const [predefinedLists, setPredefinedLists] = useState<Record<string, WordList[]>>({
    difficulty: [],
    thematic: [],
    functional: [],
  })
  const [importedLists, setImportedLists] = useState<string[]>([])
  const [userLists, setUserLists] = useState<WordList[]>([])

  useEffect(() => {
    // Load predefined lists by category
    setPredefinedLists({
      difficulty: wordListService.getPredefinedListsByCategory("difficulty"),
      thematic: wordListService.getPredefinedListsByCategory("thematic"),
      functional: wordListService.getPredefinedListsByCategory("functional"),
    })

    // Load user lists to check which predefined lists have been imported
    const lists = wordListService.getAllLists()
    setUserLists(lists)
  }, [])

  const isListImported = (predefinedListName: string): boolean => {
    return userLists.some((list) => list.name === predefinedListName) || importedLists.includes(predefinedListName)
  }

  const handleImportList = (listId: string, listName: string) => {
    const importedList = wordListService.importPredefinedList(listId)
    if (importedList) {
      setImportedLists([...importedLists, listName])
      setUserLists([...userLists, importedList])
    }
  }

  const getWordCount = (list: WordList): number => {
    return list.wordIds.length
  }

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Pre-defined Word Lists</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Get started quickly with these curated word lists. Import them to your personal collection and start studying.
      </p>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="difficulty">By Difficulty</TabsTrigger>
          <TabsTrigger value="thematic">By Theme</TabsTrigger>
          <TabsTrigger value="functional">By Function</TabsTrigger>
        </TabsList>

        <TabsContent value="difficulty">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {predefinedLists.difficulty.map((list) => (
              <PredefinedListCard
                key={list.id}
                list={list}
                isImported={isListImported(list.name)}
                onImport={handleImportList}
                wordCount={getWordCount(list)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="thematic">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {predefinedLists.thematic.map((list) => (
              <PredefinedListCard
                key={list.id}
                list={list}
                isImported={isListImported(list.name)}
                onImport={handleImportList}
                wordCount={getWordCount(list)}
              />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="functional">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {predefinedLists.functional.map((list) => (
              <PredefinedListCard
                key={list.id}
                list={list}
                isImported={isListImported(list.name)}
                onImport={handleImportList}
                wordCount={getWordCount(list)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

interface PredefinedListCardProps {
  list: WordList
  isImported: boolean
  onImport: (id: string, name: string) => void
  wordCount: number
}

function PredefinedListCard({ list, isImported, onImport, wordCount }: PredefinedListCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{list.name}</CardTitle>
        <CardDescription>
          {wordCount} {wordCount === 1 ? "word" : "words"}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{list.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link href={`/word-lists/${list.id}`}>
          <Button variant="outline">
            <BookOpen className="h-4 w-4 mr-2" />
            Preview
          </Button>
        </Link>
        {isImported ? (
          <Button variant="outline" disabled>
            <Check className="h-4 w-4 mr-2" />
            Imported
          </Button>
        ) : (
          <Button onClick={() => onImport(list.id, list.name)}>
            <Download className="h-4 w-4 mr-2" />
            Import
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
