"use client"

import { useState } from "react"
import { createClient } from "@supabase/supabase-js"

export default function SupabaseBasicTest() {
  const [testResult, setTestResult] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const runTest = async () => {
    setIsLoading(true)
    setError(null)
    setTestResult(null)

    try {
      // Check environment variables
      const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
      const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

      if (!supabaseUrl || !supabaseKey) {
        throw new Error(`Missing environment variables: URL=${!!supabaseUrl}, KEY=${!!supabaseKey}`)
      }

      // Create client
      const supabase = createClient(supabaseUrl, supabaseKey)

      // Test connection
      const { data, error } = await supabase.from("vocabulary_words").select("id").limit(1)

      if (error) {
        throw new Error(`Database error: ${error.message}`)
      }

      setTestResult(`Connection successful! Found ${data.length} records.`)
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err))
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Basic Supabase Test</h1>

      <div className="mb-6">
        <button
          onClick={runTest}
          disabled={isLoading}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
        >
          {isLoading ? "Testing..." : "Test Connection"}
        </button>
      </div>

      {error && (
        <div className="p-4 mb-4 bg-red-100 border border-red-400 text-red-700 rounded">
          <p className="font-bold">Error:</p>
          <p>{error}</p>
        </div>
      )}

      {testResult && (
        <div className="p-4 mb-4 bg-green-100 border border-green-400 text-green-700 rounded">
          <p className="font-bold">Success:</p>
          <p>{testResult}</p>
        </div>
      )}

      <div className="mt-6">
        <h2 className="text-lg font-semibold mb-2">Environment Variables:</h2>
        <div className="bg-gray-100 p-3 rounded">
          <p>NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? "✅ Set" : "❌ Missing"}</p>
          <p>NEXT_PUBLIC_SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✅ Set" : "❌ Missing"}</p>
        </div>
      </div>
    </div>
  )
}
