"use client"

import { useState, useEffect } from "react"
import { useParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Home, ArrowLeft, ArrowRight, Bookmark, RotateCcw, ListChecks, Edit, Trash2, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { wordListService } from "../../../services/word-list-service"
import { WordListDialog } from "../../../components/word-list-dialog"
import { AudioPlayer } from "../../../components/audio-player"
import type { WordListWithWords } from "../../../types/word-lists"
import type { VocabularyWord } from "../../../types/vocabulary"

export default function WordListStudyPage() {
  const params = useParams()
  const router = useRouter()
  const listId = params.id as string

  const [wordList, setWordList] = useState<WordListWithWords | null>(null)
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const [savedWords, setSavedWords] = useState<string[]>([])
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const [isPredefinedList, setIsPredefinedList] = useState(false)

  useEffect(() => {
    loadWordList()
  }, [listId])

  const loadWordList = () => {
    // Check if this is a predefined list
    if (listId.startsWith("predefined-")) {
      const list = wordListService.getPredefinedListWithWords(listId)
      if (list) {
        setWordList(list)
        setIsPredefinedList(true)
      } else {
        // List not found, redirect to word lists page
        router.push("/word-lists")
      }
    } else {
      const list = wordListService.getListWithWords(listId)
      if (list) {
        setWordList(list)
        setIsPredefinedList(false)
      } else {
        // List not found, redirect to word lists page
        router.push("/word-lists")
      }
    }
  }

  const handleListUpdated = (updatedList: WordListWithWords) => {
    loadWordList()
  }

  const handleDeleteList = () => {
    wordListService.deleteList(listId)
    router.push("/word-lists")
  }

  const handleImportList = () => {
    if (wordList && isPredefinedList) {
      const importedList = wordListService.importPredefinedList(wordList.id)
      if (importedList) {
        router.push(`/word-lists/${importedList.id}`)
      }
    }
  }

  const handleRemoveWord = (wordId: string) => {
    if (wordList) {
      if (isPredefinedList) {
        // Cannot remove words from predefined lists
        return
      }

      wordListService.removeWordFromList(wordList.id, wordId)
      loadWordList()

      // If we're removing the current word and it's the last one, go to previous
      if (currentCardIndex >= wordList.words.length - 1) {
        setCurrentCardIndex(Math.max(0, currentCardIndex - 1))
      }
    }
  }

  const handleNext = () => {
    if (wordList && currentCardIndex < wordList.words.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1)
      setIsFlipped(false)
    }
  }

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1)
      setIsFlipped(false)
    }
  }

  const toggleSaveWord = (word: VocabularyWord) => {
    setSavedWords((prev) => {
      if (prev.includes(word.id)) {
        return prev.filter((id) => id !== word.id)
      } else {
        return [...prev, word.id]
      }
    })
  }

  const resetCards = () => {
    setCurrentCardIndex(0)
    setIsFlipped(false)
  }

  if (!wordList) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <header className="bg-emerald-800 text-white py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold">Loading Word List...</h1>
            <Link href="/">
              <Button variant="ghost" size="icon">
                <Home className="h-5 w-5" />
                <span className="sr-only">Home</span>
              </Button>
            </Link>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="text-center">Loading...</div>
        </main>
      </div>
    )
  }

  const currentWord = wordList.words[currentCardIndex]
  const progress = ((currentCardIndex + 1) / wordList.words.length) * 100

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">{wordList.name}</h1>
            <p className="text-emerald-100 text-sm">{wordList.description}</p>
          </div>
          <div className="flex items-center gap-2">
            {isPredefinedList ? (
              <Button variant="ghost" size="icon" title="Import list" onClick={handleImportList}>
                <Download className="h-5 w-5" />
                <span className="sr-only">Import list</span>
              </Button>
            ) : (
              <>
                <WordListDialog
                  existingList={wordList}
                  onListUpdated={handleListUpdated}
                  trigger={
                    <Button variant="ghost" size="icon" title="Edit list">
                      <Edit className="h-5 w-5" />
                      <span className="sr-only">Edit list</span>
                    </Button>
                  }
                />
                <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
                  <AlertDialogTrigger asChild>
                    <Button variant="ghost" size="icon" title="Delete list">
                      <Trash2 className="h-5 w-5" />
                      <span className="sr-only">Delete list</span>
                    </Button>
                  </AlertDialogTrigger>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle>Delete Word List</AlertDialogTitle>
                      <AlertDialogDescription>
                        Are you sure you want to delete "{wordList.name}"? This action cannot be undone.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancel</AlertDialogCancel>
                      <AlertDialogAction onClick={handleDeleteList} className="bg-red-600 hover:bg-red-700">
                        Delete
                      </AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              </>
            )}
            <Link href="/word-lists">
              <Button variant="ghost" size="icon">
                <ListChecks className="h-5 w-5" />
                <span className="sr-only">All lists</span>
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
        {wordList.words.length === 0 ? (
          <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">No Words in This List</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">Add words to this list from the vocabulary browser.</p>
            <Link href="/vocabulary">
              <Button className="bg-emerald-600 hover:bg-emerald-700">Browse Vocabulary</Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <Progress value={progress} className="h-2" />
              <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                <span>
                  Card {currentCardIndex + 1} of {wordList.words.length}
                </span>
                <span>{Math.round(progress)}% Complete</span>
              </div>
            </div>

            <div className="flex justify-center mb-8">
              <Card
                className={`w-full max-w-md h-80 cursor-pointer transition-all duration-500 ${
                  isFlipped ? "bg-emerald-50 dark:bg-emerald-900/20" : "bg-white dark:bg-gray-800"
                }`}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <CardContent className="flex flex-col items-center justify-center h-full p-6">
                  {!isFlipped ? (
                    <div className="text-center">
                      <h2 className="text-4xl mb-4 font-arabic">{currentWord.arabic}</h2>
                      <p className="text-xl text-gray-600 dark:text-gray-300">{currentWord.transliteration}</p>
                      {currentWord.hasAudio && currentWord.audioUrl && (
                        <div className="mt-4">
                          <AudioPlayer audioUrl={currentWord.audioUrl} compact label="Listen" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold mb-4">{currentWord.meanings.join(", ")}</h3>
                      {currentWord.examples.length > 0 && (
                        <>
                          <p className="text-lg mb-4 font-arabic">{currentWord.examples[0].arabicText}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {currentWord.examples[0].translationText}
                          </p>
                        </>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center space-x-4 mb-8">
              <Button variant="outline" onClick={handlePrevious} disabled={currentCardIndex === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>

              <Button variant="outline" onClick={() => toggleSaveWord(currentWord)}>
                <Bookmark className={`mr-2 h-4 w-4 ${savedWords.includes(currentWord.id) ? "fill-emerald-600" : ""}`} />
                {savedWords.includes(currentWord.id) ? "Saved" : "Save"}
              </Button>

              <Button variant="outline" onClick={resetCards}>
                <RotateCcw className="mr-2 h-4 w-4" />
                Reset
              </Button>

              {!isPredefinedList && (
                <Button
                  variant="outline"
                  onClick={() => handleRemoveWord(currentWord.id)}
                  className="text-red-600 hover:bg-red-50 hover:text-red-700"
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Remove
                </Button>
              )}

              <Button
                onClick={handleNext}
                disabled={currentCardIndex === wordList.words.length - 1}
                className="bg-emerald-600 hover:bg-emerald-700"
              >
                Next
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Tip: Click on the card to flip it and see the meaning and example.
              </p>
              <Link href="/vocabulary">
                <Button variant="outline">Browse more vocabulary</Button>
              </Link>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
