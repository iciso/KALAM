"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Plus, ListPlus } from "lucide-react"
import { wordListService } from "../services/word-list-service"
import { WordListDialog } from "./word-list-dialog"
import type { WordList } from "../types/word-lists"
import type { VocabularyWord } from "../types/vocabulary"

interface AddToListDialogProps {
  word: VocabularyWord
  trigger?: React.ReactNode
  onAddToList?: (list: WordList) => void
}

export function AddToListDialog({ word, trigger, onAddToList }: AddToListDialogProps) {
  const [open, setOpen] = useState(false)
  const [lists, setLists] = useState<WordList[]>([])
  const [selectedLists, setSelectedLists] = useState<Set<string>>(new Set())
  const [message, setMessage] = useState("")

  useEffect(() => {
    if (open) {
      loadLists()
    }
  }, [open])

  const loadLists = () => {
    const allLists = wordListService.getAllLists()
    setLists(allLists)

    // Pre-select lists that already contain this word
    const containingLists = wordListService.getListsContainingWord(word.id)
    setSelectedLists(new Set(containingLists.map((list) => list.id)))
  }

  const handleListCreated = (newList: WordList) => {
    setLists([...lists, newList])
    // Automatically select newly created list
    setSelectedLists(new Set([...selectedLists, newList.id]))
  }

  const handleToggleList = (listId: string) => {
    const newSelected = new Set(selectedLists)
    if (newSelected.has(listId)) {
      newSelected.delete(listId)
    } else {
      newSelected.add(listId)
    }
    setSelectedLists(newSelected)
  }

  const handleSave = () => {
    try {
      // Get all lists
      const allLists = wordListService.getAllLists()

      // For each list, add or remove the word as needed
      allLists.forEach((list) => {
        const shouldBeInList = selectedLists.has(list.id)
        const isInList = wordListService.isWordInList(list.id, word.id)

        if (shouldBeInList && !isInList) {
          const updatedList = wordListService.addWordToList(list.id, word.id)
          if (updatedList && onAddToList) {
            onAddToList(updatedList)
          }
        } else if (!shouldBeInList && isInList) {
          wordListService.removeWordFromList(list.id, word.id)
        }
      })

      setMessage("Word lists updated successfully!")
      setTimeout(() => {
        setOpen(false)
        setMessage("")
      }, 1500)
    } catch (error) {
      console.error("Error saving word lists:", error)
      setMessage("An error occurred. Please try again.")
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button variant="outline" size="sm">
            <ListPlus className="h-4 w-4 mr-2" />
            Add to List
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add to Word List</DialogTitle>
          <DialogDescription>
            Add <span className="font-arabic">{word.arabic}</span> ({word.transliteration}) to your custom word lists.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4">
          {lists.length === 0 ? (
            <div className="text-center py-4">
              <p className="text-gray-500 mb-4">You don't have any word lists yet.</p>
              <WordListDialog
                trigger={
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Create Your First List
                  </Button>
                }
                onListCreated={handleListCreated}
              />
            </div>
          ) : (
            <>
              <ScrollArea className="h-[200px] pr-4">
                <div className="space-y-4">
                  {lists.map((list) => (
                    <div key={list.id} className="flex items-start space-x-2">
                      <Checkbox
                        id={`list-${list.id}`}
                        checked={selectedLists.has(list.id)}
                        onCheckedChange={() => handleToggleList(list.id)}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <Label htmlFor={`list-${list.id}`} className="font-medium">
                          {list.name}
                        </Label>
                        {list.description && <p className="text-sm text-gray-500">{list.description}</p>}
                        <p className="text-xs text-gray-400">
                          {list.wordIds.length} {list.wordIds.length === 1 ? "word" : "words"}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>

              <div className="mt-4 flex justify-between items-center">
                <WordListDialog
                  trigger={
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      New List
                    </Button>
                  }
                  onListCreated={handleListCreated}
                />
                {message && <p className="text-sm text-emerald-600">{message}</p>}
              </div>
            </>
          )}
        </div>

        <DialogFooter>
          <Button onClick={handleSave} disabled={lists.length === 0}>
            Save
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
