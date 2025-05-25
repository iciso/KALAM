"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { supabase } from "@/lib/supabase"

export default function AuthCallback() {
  const router = useRouter()
  const [status, setStatus] = useState("Processing...")

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          console.error("Auth callback error:", error)
          setStatus("Authentication failed. Please try signing in again.")
          setTimeout(() => router.push("/"), 3000)
          return
        }

        if (data.session) {
          setStatus("Authentication successful! Redirecting...")
          setTimeout(() => router.push("/"), 2000)
        } else {
          setStatus("No active session found. Redirecting...")
          setTimeout(() => router.push("/"), 3000)
        }
      } catch (error) {
        console.error("Auth callback exception:", error)
        setStatus("An error occurred. Redirecting...")
        setTimeout(() => router.push("/"), 3000)
      }
    }

    handleAuthCallback()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Authentication</h1>
        <p className="text-gray-600">{status}</p>
        <div className="mt-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
        </div>
      </div>
    </div>
  )
}
