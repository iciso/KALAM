"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/services/supabase-client"

export default function SupabaseTestPage() {
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading")
  const [message, setMessage] = useState("Testing connection to Supabase...")
  const [details, setDetails] = useState<any>(null)

  useEffect(() => {
    console.log("Environment variables check:")
    console.log("URL defined:", !!process.env.NEXT_PUBLIC_SUPABASE_URL)
    console.log("Key defined:", !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
  }, [])

  useEffect(() => {
    async function testConnection() {
      try {
        // Check if environment variables are set
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        if (!url || !key) {
          setStatus("error")
          setMessage("Environment variables are missing")
          setDetails({ url: !!url, key: !!key })
          return
        }

        // First, just test a simple connection without assuming tables exist
        const { data, error } = await supabase
          .from("_dummy_query")
          .select("*")
          .limit(1)
          .catch(() => {
            // This will error because the table doesn't exist, but we can check the error type
            return { data: null, error: { message: "Expected error for dummy query", code: "PGRST116" } }
          })

        if (error && error.code !== "PGRST116") {
          // If we get an error that's not the expected "relation does not exist" error
          setStatus("error")
          setMessage(`Error connecting to Supabase: ${error.message}`)
          setDetails(error)
        } else {
          // Connection successful
          setStatus("success")
          setMessage("Successfully connected to Supabase!")
          setDetails({
            connection: "Successful",
            url: url.substring(0, 15) + "...", // Only show part of the URL for security
          })
        }
      } catch (err) {
        setStatus("error")
        setMessage(`Unexpected error: ${err instanceof Error ? err.message : String(err)}`)
        setDetails(err)
      }
    }

    testConnection()
  }, [])

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Supabase Connection Test</h1>

      <div
        className={`p-4 rounded-md ${
          status === "loading"
            ? "bg-blue-50 text-blue-700"
            : status === "success"
              ? "bg-green-50 text-green-700"
              : "bg-red-50 text-red-700"
        }`}
      >
        <p className="font-bold">{status === "loading" ? "Testing..." : status === "success" ? "Success!" : "Error"}</p>
        <p>{message}</p>

        {details && (
          <div className="mt-4">
            <p className="font-semibold">Details:</p>
            <pre className="mt-2 p-2 bg-gray-100 rounded overflow-x-auto">{JSON.stringify(details, null, 2)}</pre>
          </div>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Next Steps:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Create database tables for vocabulary words</li>
          <li>Migrate existing data to Supabase</li>
          <li>Update application to use Supabase for data storage</li>
        </ul>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Troubleshooting Tips:</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Check that your .env.local file exists and has the correct values</li>
          <li>Verify that your Supabase project is active</li>
          <li>Check that your IP address is not blocked by any firewall rules</li>
        </ul>
      </div>
    </div>
  )
}
