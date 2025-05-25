"use client"

import { useEffect, useState } from "react"
import { createClient } from "@supabase/supabase-js"

export default function ConnectionTest() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [data, setData] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function testConnection() {
      try {
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
        const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        if (!supabaseUrl || !supabaseKey) {
          throw new Error("Missing Supabase environment variables")
        }

        const supabase = createClient(supabaseUrl, supabaseKey)

        // Test basic connection
        const { data: tables, error: tablesError } = await supabase
          .from("information_schema.tables")
          .select("table_name")
          .eq("table_schema", "public")

        if (tablesError) {
          throw tablesError
        }

        setData({
          url: supabaseUrl,
          tables: tables || [],
          connectionTest: "Success",
        })
        setStatus("success")
      } catch (err: any) {
        setError(err.message)
        setStatus("error")
      }
    }

    testConnection()
  }, [])

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Supabase Connection Test</h1>

      {status === "loading" && <div className="text-blue-600">Testing connection...</div>}

      {status === "error" && (
        <div className="text-red-600">
          <h2 className="text-xl font-semibold mb-2">Connection Failed</h2>
          <p>{error}</p>
        </div>
      )}

      {status === "success" && (
        <div className="text-green-600">
          <h2 className="text-xl font-semibold mb-4">Connection Successful!</h2>
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="font-semibold mb-2">Connection Details:</h3>
            <pre className="text-sm">{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Environment Variables Check:</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span
              className={`w-3 h-3 rounded-full mr-2 ${process.env.NEXT_PUBLIC_SUPABASE_URL ? "bg-green-500" : "bg-red-500"}`}
            ></span>
            NEXT_PUBLIC_SUPABASE_URL: {process.env.NEXT_PUBLIC_SUPABASE_URL ? "✓ Set" : "✗ Missing"}
          </li>
          <li className="flex items-center">
            <span
              className={`w-3 h-3 rounded-full mr-2 ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "bg-green-500" : "bg-red-500"}`}
            ></span>
            NEXT_PUBLIC_SUPABASE_ANON_KEY: {process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? "✓ Set" : "✗ Missing"}
          </li>
        </ul>
      </div>
    </div>
  )
}
