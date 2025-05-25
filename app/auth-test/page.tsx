"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"

export default function AuthTestPage() {
  const [connectionStatus, setConnectionStatus] = useState<string>("Testing...")
  const [envVars, setEnvVars] = useState<any>({})

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Check environment variables
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        setEnvVars({
          url: url ? `${url.substring(0, 20)}...` : "Missing",
          key: key ? `${key.substring(0, 20)}...` : "Missing",
        })

        // Test basic connection
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          setConnectionStatus(`Error: ${error.message}`)
        } else {
          setConnectionStatus("✅ Connection successful!")
        }
      } catch (error) {
        setConnectionStatus(`❌ Connection failed: ${error}`)
      }
    }

    testConnection()
  }, [])

  const testSignUp = async () => {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: "test@example.com",
        password: "testpassword123",
      })
      console.log("Test signup result:", { data, error })
    } catch (error) {
      console.error("Test signup error:", error)
    }
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Authentication Test</h1>

      <div className="space-y-4">
        <div>
          <h2 className="text-lg font-semibold">Connection Status:</h2>
          <p>{connectionStatus}</p>
        </div>

        <div>
          <h2 className="text-lg font-semibold">Environment Variables:</h2>
          <p>URL: {envVars.url}</p>
          <p>Key: {envVars.key}</p>
        </div>

        <Button onClick={testSignUp}>Test Sign Up</Button>
      </div>
    </div>
  )
}
