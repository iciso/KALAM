"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { wordListDbService } from "@/services/word-list-db-service"

export default function EditWordListPage({ params }: { params: { id: string } }) {
  const { id } = params
  const router = useRouter()

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isPredefined, setIsPredefined] = useState(false)

  useEffect(() => {
    const fetchList = async () => {
      try {
        const list = await wordListDbService.getListWithWords(id)
        if (list) {
          setName(list.name)
          setDescription(list.description || "")
          setIsPredefined(!!list.isPredefined)
        } else {
          router.push("/word-lists-db")
        }
      } catch (err) {
        setError("Failed to load word list. Please try again.")
        console.error("Error fetching word list:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchList()
  }, [id, router])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!name.trim()) {
      setError("Please enter a name for your word list")
      return
    }

    setSaving(true)
    setError(null)

    try {
      const success = await wordListDbService.updateList(id, {
        name: name.trim(),
        description: description.trim(),
      })

      if (success) {
        router.push(`/word-lists-db/${id}`)
      } else {
        throw new Error("Failed to update list")
      }
    } catch (err) {
      setError("Failed to update word list. Please try again.")
      console.error("Error updating word list:", err)
      setSaving(false)
    }
  }

  const handleDelete = async () => {
    if (!window.confirm("Are you sure you want to delete this word list? This action cannot be undone.")) {
      return
    }

    setDeleting(true)
    setError(null)

    try {
      const success = await wordListDbService.deleteList(id)

      if (success) {
        router.push("/word-lists-db")
      } else {
        throw new Error("Failed to delete list")
      }
    } catch (err) {
      setError("Failed to delete word list. Please try again.")
      console.error("Error deleting word list:", err)
      setDeleting(false)
    }
  }

  if (loading) {
    return (
      <div className="container mx-auto py-8 px-4 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
        <p className="mt-4">Loading word list...</p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href={`/word-lists-db/${id}`} className="text-green-600 hover:underline flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Word List
        </Link>
      </div>

      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold mb-6">Edit Word List</h1>

        {isPredefined && (
          <div className="mb-4 p-3 bg-blue-50 text-blue-700 rounded-md">
            This is a predefined list. Some changes may be limited.
          </div>
        )}

        {error && <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              List Name *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="e.g., Essential Quranic Words"
              required
              disabled={isPredefined}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description (Optional)
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Describe the purpose of this word list..."
            />
          </div>

          <div className="flex justify-between">
            {!isPredefined && (
              <button
                type="button"
                onClick={handleDelete}
                disabled={deleting}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {deleting ? "Deleting..." : "Delete List"}
              </button>
            )}

            <div className="flex gap-3">
              <Link
                href={`/word-lists-db/${id}`}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </Link>
              <button
                type="submit"
                disabled={saving}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors disabled:opacity-50"
              >
                {saving ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
