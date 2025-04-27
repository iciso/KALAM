"use client"

import type React from "react"

import { useState } from "react"
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { wordListService } from "../services/word-list-service"
import type { WordList } from "../types/word-lists"

interface WordListDialogProps {
  existingList?: WordList
  onListCreated?: (list: WordList) => void
  onListUpdated?: (list: WordList) => void
  trigger?: React.ReactNode
}

export function WordListDialog({ existingList, onListCreated, onListUpdated, trigger }: WordListDialogProps) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState(existingList?.name || "")
  const [description, setDescription] = useState(existingList?.description || "")
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      setError("Please enter a name for your word list")
      return
    }

    try {
      if (existingList) {
        // Update existing list
        const updatedList = wordListService.updateList(existingList.id, { name, description })
        if (updatedList && onListUpdated) {
          onListUpdated(updatedList)
        }
      } else {
        // Create new list
        const newList = wordListService.createList(name, description)
        if (onListCreated) {
          onListCreated(newList)
        }
      }

      setOpen(false)
      setName("")
      setDescription("")
      setError("")
    } catch (err) {
      setError("An error occurred. Please try again.")
      console.error(err)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger || <Button variant="outline">Create Word List</Button>}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>{existingList ? "Edit Word List" : "Create Word List"}</DialogTitle>
            <DialogDescription>
              {existingList
                ? "Update your word list details below."
                : "Create a custom word list to organize vocabulary for focused study."}
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-3"
                placeholder="e.g., Essential Quranic Terms"
                required
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="col-span-3"
                placeholder="Optional description of this word list"
                rows={3}
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
          </div>
          <DialogFooter>
            <Button type="submit">{existingList ? "Save Changes" : "Create List"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
