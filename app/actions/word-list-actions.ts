"use server"

import { databaseService } from "@/services/database-service"

export async function createWordList(formData: FormData) {
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const wordIdsString = formData.get("wordIds") as string
  const wordIds = wordIdsString.split(",")

  try {
    const newList = await databaseService.createWordList({
      name,
      description,
      wordIds,
    })

    return { success: true, list: newList }
  } catch (error) {
    console.error("Error creating word list:", error)
    return { success: false, error: "Failed to create word list" }
  }
}

export async function updateWordList(formData: FormData) {
  const id = formData.get("id") as string
  const name = formData.get("name") as string
  const description = formData.get("description") as string
  const wordIdsString = formData.get("wordIds") as string
  const wordIds = wordIdsString.split(",")

  try {
    await databaseService.updateWordList(id, {
      name,
      description,
      wordIds,
    })

    return { success: true }
  } catch (error) {
    console.error("Error updating word list:", error)
    return { success: false, error: "Failed to update word list" }
  }
}

export async function deleteWordList(formData: FormData) {
  const id = formData.get("id") as string

  try {
    await databaseService.deleteWordList(id)
    return { success: true }
  } catch (error) {
    console.error("Error deleting word list:", error)
    return { success: false, error: "Failed to delete word list" }
  }
}
