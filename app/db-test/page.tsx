"use client"

import { useState, useEffect } from "react"
import { createClient } from "@supabase/supabase-js"

export default function DbTestPage() {
  const [status, setStatus] = useState("initializing")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [errorDetails, setErrorDetails] = useState<any>(null)
  const [words, setWords] = useState<any[]>([])
  const [debugInfo, setDebugInfo] = useState<any>({})

  useEffect(() => {
    async function testSupabase() {
      try {
        setStatus("checking-env")

        // Check environment variables
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        setDebugInfo((prev) => ({
          ...prev,
          env: {
            url: !!supabaseUrl,
            key: !!supabaseKey,
            actualUrl: supabaseUrl?.substring(0, 10) + "...", // Show part of URL for debugging
          },
        }))

        if (!supabaseUrl || !supabaseKey) {
          throw new Error("Missing Supabase environment variables")
        }

        // Create client
        setStatus("creating-client")
        const supabase = createClient(supabaseUrl, supabaseKey)

        setDebugInfo((prev) => ({
          ...prev,
          client: "created",
        }))

        // Test connection
        setStatus("testing-connection")
        try {
          const { data: connectionTest, error: connectionError } = await supabase
            .from("vocabulary_words")
            .select("count()", { count: "exact", head: true })

          if (connectionError) {
            setDebugInfo((prev) => ({
              ...prev,
              connectionError: {
                message: connectionError.message,
                details: connectionError.details,
                hint: connectionError.hint,
                code: connectionError.code,
              },
            }))
            throw connectionError
          }

          setDebugInfo((prev) => ({
            ...prev,
            connection: "success",
            connectionTest,
          }))
        } catch (connErr) {
          setDebugInfo((prev) => ({
            ...prev,
            connectionCatchError: connErr instanceof Error ? connErr.message : String(connErr),
          }))
          throw connErr
        }

        // Fetch data
        setStatus("fetching-data")
        const { data, error: fetchError } = await supabase.from("vocabulary_words").select("*").limit(5)

        if (fetchError) {
          throw fetchError
        }

        setWords(data || [])
        setStatus("success")
      } catch (err) {
        console.error("Error:", err)

        // Better error handling
        if (err instanceof Error) {
          setErrorMessage(err.message)
          setErrorDetails(err)
        } else if (typeof err === "object" && err !== null) {
          setErrorMessage(JSON.stringify(err))
          setErrorDetails(err)
        } else {
          setErrorMessage(String(err))
        }

        setStatus("error")
      }
    }

    testSupabase()
  }, [])

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Database Test Page</h1>

      <div className="mb-6 p-4 bg-gray-100 rounded-md">
        <h2 className="text-lg font-semibold mb-2">Status: {status}</h2>

        {errorMessage && (
          <div className="mt-2 p-3 bg-red-50 text-red-700 rounded">
            <p className="font-bold">Error:</p>
            <p>{errorMessage}</p>
            {errorDetails && (
              <div className="mt-2">
                <p className="font-semibold">Error Details:</p>
                <pre className="mt-1 p-2 bg-red-100 rounded overflow-x-auto text-sm">
                  {JSON.stringify(errorDetails, null, 2)}
                </pre>
              </div>
            )}
          </div>
        )}

        <div className="mt-4">
          <h3 className="font-medium">Debug Info:</h3>
          <pre className="mt-2 p-2 bg-gray-200 rounded overflow-x-auto text-sm">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>
      </div>

      {status === "success" && (
        <div>
          <h2 className="text-xl font-semibold mb-4">Words from Database:</h2>
          {words.length === 0 ? (
            <p>No words found in the database.</p>
          ) : (
            <ul className="list-disc pl-5 space-y-2">
              {words.map((word) => (
                <li key={word.id}>
                  <span className="font-bold">{word.arabic}</span> ({word.transliteration}) -
                  {typeof word.meanings === "object" ? JSON.stringify(word.meanings) : word.meanings}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}
