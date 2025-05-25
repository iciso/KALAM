"use client"

import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js"

export default function SimpleSupabaseTest() {
  const [log, setLog] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  // Add to log with timestamp
  const addLog = (message: string) => {
    const timestamp = new Date().toISOString().substring(11, 19)
    setLog((prev) => [...prev, `[${timestamp}] ${message}`])
  }

  useEffect(() => {
    setMounted(true)
    addLog("Component mounted")

    async function testConnection() {
      try {
        // Log environment variables (safely)
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        addLog(
          `Environment variables: URL ${supabaseUrl ? "exists" : "missing"}, Key ${supabaseKey ? "exists" : "missing"}`,
        )

        if (!supabaseUrl || !supabaseKey) {
          addLog("❌ ERROR: Missing environment variables")
          return
        }

        // Create client
        addLog("Creating Supabase client...")
        const supabase = createClient(supabaseUrl, supabaseKey)
        addLog("✅ Supabase client created")

        // Test connection with a simple query
        addLog("Testing connection...")
        const { data, error } = await supabase.from("vocabulary_words").select("id").limit(1)

        if (error) {
          addLog(`❌ Connection error: ${error.message}`)
          if (error.code) addLog(`Error code: ${error.code}`)
          if (error.hint) addLog(`Hint: ${error.hint}`)
          return
        }

        addLog(`✅ Connection successful! Found ${data?.length || 0} records`)
      } catch (err) {
        addLog(`❌ Unexpected error: ${err instanceof Error ? err.message : String(err)}`)
        console.error(err)
      }
    }

    testConnection()
  }, [])

  if (!mounted) {
    return <div>Loading...</div>
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Simple Supabase Connection Test</h1>

      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Connection Log:</h2>
        <div className="bg-black text-green-400 p-3 rounded font-mono text-sm h-64 overflow-y-auto">
          {log.map((entry, i) => (
            <div key={i}>{entry}</div>
          ))}
          {log.length === 0 && <div>No logs yet...</div>}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Troubleshooting:</h2>
        <ul className="list-disc pl-5 space-y-1">
          <li>Check that your .env.local file exists and has the correct values</li>
          <li>Verify that your Supabase project is active</li>
          <li>Make sure the vocabulary_words table exists in your database</li>
          <li>Check browser console for additional errors</li>
        </ul>
      </div>
    </div>
  )
}
