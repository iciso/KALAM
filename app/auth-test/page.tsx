"use client"

import { useState, useEffect } from "react"
import { supabase } from "@/lib/supabase"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function AuthTestPage() {
  const [connectionStatus, setConnectionStatus] = useState<string>("Testing...")
  const [envVars, setEnvVars] = useState<any>({})
  const [testEmail, setTestEmail] = useState("test@example.com")
  const [testPassword, setTestPassword] = useState("testpassword123")
  const [testResults, setTestResults] = useState<string[]>([])

  useEffect(() => {
    const testConnection = async () => {
      try {
        // Check environment variables
        const url = process.env.NEXT_PUBLIC_SUPABASE_URL
        const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

        setEnvVars({
          url: url ? `${url.substring(0, 30)}...` : "Missing",
          key: key ? `${key.substring(0, 30)}...` : "Missing",
          fullUrl: url,
        })

        // Test basic connection
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          setConnectionStatus(`❌ Error: ${error.message}`)
        } else {
          setConnectionStatus("✅ Connection successful!")
        }
      } catch (error) {
        setConnectionStatus(`❌ Connection failed: ${error}`)
      }
    }

    testConnection()
  }, [])

  const addTestResult = (result: string) => {
    setTestResults((prev) => [...prev, `${new Date().toLocaleTimeString()}: ${result}`])
  }

  const testDirectFetch = async () => {
    try {
      addTestResult("🔄 Testing direct fetch to Supabase auth endpoint...")

      const authUrl = `${envVars.fullUrl}/auth/v1/signup`

      const response = await fetch(authUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        },
        body: JSON.stringify({
          email: testEmail,
          password: testPassword,
        }),
      })

      addTestResult(`📡 Response status: ${response.status}`)

      if (response.ok) {
        const data = await response.json()
        addTestResult(`✅ Direct fetch successful!`)
      } else {
        const errorText = await response.text()
        addTestResult(`❌ Direct fetch failed: ${errorText}`)
      }
    } catch (error) {
      addTestResult(`❌ Direct fetch exception: ${error}`)
    }
  }

  const testSupabaseClient = async () => {
    try {
      addTestResult("🔄 Testing Supabase client...")

      // Test with a completely new client instance
      const { createClient } = await import("@supabase/supabase-js")
      const testClient = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
          auth: {
            autoRefreshToken: false,
            persistSession: false,
            detectSessionInUrl: false,
          },
        },
      )

      const { data, error } = await testClient.auth.signUp({
        email: testEmail,
        password: testPassword,
      })

      if (error) {
        addTestResult(`❌ Supabase client error: ${error.message}`)
      } else {
        addTestResult(`✅ Supabase client successful!`)
      }
    } catch (error) {
      addTestResult(`❌ Supabase client exception: ${error}`)
    }
  }

  const testCORS = async () => {
    try {
      addTestResult("🔄 Testing CORS...")

      // Test a simple GET request to check CORS
      const response = await fetch(`${envVars.fullUrl}/rest/v1/`, {
        method: "GET",
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        },
      })

      addTestResult(`📡 CORS test status: ${response.status}`)

      if (response.ok) {
        addTestResult(`✅ CORS working correctly!`)
      } else {
        addTestResult(`❌ CORS issue detected`)
      }
    } catch (error) {
      addTestResult(`❌ CORS test exception: ${error}`)
    }
  }

  const testWithDifferentConfig = async () => {
    try {
      addTestResult("🔄 Testing with different Supabase config...")

      const { createClient } = await import("@supabase/supabase-js")
      const altClient = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        // No additional config - use defaults
      )

      const { data, error } = await altClient.auth.signUp({
        email: `test-${Date.now()}@example.com`, // Use unique email
        password: testPassword,
      })

      if (error) {
        addTestResult(`❌ Alt config error: ${error.message}`)
      } else {
        addTestResult(`✅ Alt config successful!`)
      }
    } catch (error) {
      addTestResult(`❌ Alt config exception: ${error}`)
    }
  }

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Enhanced Authentication Test</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Connection Status:</h2>
            <p className="text-sm">{connectionStatus}</p>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Environment Variables:</h2>
            <p className="text-xs">URL: {envVars.url}</p>
            <p className="text-xs">Key: {envVars.key}</p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="testEmail">Test Email:</Label>
            <Input
              id="testEmail"
              value={testEmail}
              onChange={(e) => setTestEmail(e.target.value)}
              placeholder="test@example.com"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="testPassword">Test Password:</Label>
            <Input
              id="testPassword"
              type="password"
              value={testPassword}
              onChange={(e) => setTestPassword(e.target.value)}
              placeholder="testpassword123"
            />
          </div>

          <div className="space-y-2">
            <Button onClick={testCORS} className="w-full">
              Test CORS
            </Button>
            <Button onClick={testDirectFetch} className="w-full">
              Test Direct Fetch
            </Button>
            <Button onClick={testSupabaseClient} className="w-full">
              Test Supabase Client
            </Button>
            <Button onClick={testWithDifferentConfig} className="w-full">
              Test Different Config
            </Button>
            <Button onClick={() => setTestResults([])} variant="outline" className="w-full">
              Clear Results
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Test Results:</h2>
          <div className="bg-gray-100 p-4 rounded-lg h-96 overflow-y-auto">
            {testResults.length === 0 ? (
              <p className="text-gray-500">No test results yet...</p>
            ) : (
              testResults.map((result, index) => (
                <div key={index} className="text-xs mb-1 font-mono">
                  {result}
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <h3 className="font-semibold text-yellow-800">Troubleshooting Tips:</h3>
        <ul className="text-sm text-yellow-700 mt-2 space-y-1">
          <li>• If CORS test fails, check your Supabase project settings</li>
          <li>• If Direct Fetch works but Supabase Client fails, it's a client configuration issue</li>
          <li>• Try testing from a different network or device</li>
          <li>• Check if your Supabase project is paused or has billing issues</li>
        </ul>
      </div>
    </div>
  )
}
