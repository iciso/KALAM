"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Home, Plus, Edit, Trash2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { wordListService } from "../../services/word-list-service"
import { WordListDialog } from "../../components/word-list-dialog"
import { PredefinedWordLists } from "../../components/predefined-word-lists"
import type { WordList } from "../../types/word-lists"

export default function WordListsPage() {
  const [wordLists, setWordLists] = useState<WordList[]>([])
  const [listToDelete, setListToDelete] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("my-lists")

  useEffect(() => {
    loadWordLists()
  }, [])

  const loadWordLists = () => {
    const lists = wordListService.getAllLists()
    setWordLists(lists)
  }

  const handleListCreated = (list: WordList) => {
    loadWordLists()
  }

  const handleListUpdated = (list: WordList) => {
    loadWordLists()
  }

  const handleDeleteList = () => {
    if (listToDelete) {
      wordListService.deleteList(listToDelete)
      loadWordLists()
      setListToDelete(null)
    }
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Word Lists</h1>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <div className="flex justify-between items-center mb-6">
            <TabsList>
              <TabsTrigger value="my-lists">My Lists</TabsTrigger>
              <TabsTrigger value="predefined">Pre-defined Lists</TabsTrigger>
            </TabsList>
            <WordListDialog
              trigger={
                <Button>
                  <Plus className="h-4 w-4 mr-2" />
                  Create New List
                </Button>
              }
              onListCreated={handleListCreated}
            />
          </div>

          <TabsContent value="my-lists">
            {wordLists.length === 0 ? (
              <div className="text-center py-12 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <h2 className="text-xl font-semibold mb-2">No Word Lists Yet</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Create your first word list to organize vocabulary for focused study, or import a pre-defined list.
                </p>
                <div className="flex justify-center gap-4">
                  <WordListDialog
                    trigger={
                      <Button>
                        <Plus className="h-4 w-4 mr-2" />
                        Create Your First List
                      </Button>
                    }
                    onListCreated={handleListCreated}
                  />
                  <Button variant="outline" onClick={() => setActiveTab("predefined")}>
                    Browse Pre-defined Lists
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {wordLists.map((list) => (
                  <Card key={list.id}>
                    <CardHeader>
                      <CardTitle>{list.name}</CardTitle>
                      <CardDescription>
                        {list.wordIds.length} {list.wordIds.length === 1 ? "word" : "words"} • Created{" "}
                        {formatDate(list.createdAt)}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300 line-clamp-2">
                        {list.description || "No description provided."}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <div className="flex space-x-2">
                        <WordListDialog
                          existingList={list}
                          onListUpdated={handleListUpdated}
                          trigger={
                            <Button variant="outline" size="sm">
                              <Edit className="h-4 w-4 mr-2" />
                              Edit
                            </Button>
                          }
                        />
                        <AlertDialog
                          open={listToDelete === list.id}
                          onOpenChange={(open) => !open && setListToDelete(null)}
                        >
                          <AlertDialogTrigger asChild>
                            <Button variant="outline" size="sm" onClick={() => setListToDelete(list.id)}>
                              <Trash2 className="h-4 w-4 mr-2" />
                              Delete
                            </Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>Delete Word List</AlertDialogTitle>
                              <AlertDialogDescription>
                                Are you sure you want to delete "{list.name}"? This action cannot be undone.
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
                      </div>
                      <Link href={`/word-lists/${list.id}`}>
                        <Button className="bg-emerald-600 hover:bg-emerald-700">
                          <BookOpen className="h-4 w-4 mr-2" />
                          Study
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          <TabsContent value="predefined">
            <PredefinedWordLists />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
