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

  const testSignUp = async () => {
    try {
      addTestResult("🔄 Testing sign up...")
      const { data, error } = await supabase.auth.signUp({
        email: testEmail,
        password: testPassword,
      })

      if (error) {
        addTestResult(`❌ Sign up error: ${error.message}`)
      } else {
        addTestResult(`✅ Sign up successful! User: ${data.user?.email}`)
      }
    } catch (error) {
      addTestResult(`❌ Sign up exception: ${error}`)
    }
  }

  const testSignIn = async () => {
    try {
      addTestResult("🔄 Testing sign in...")
      const { data, error } = await supabase.auth.signInWithPassword({
        email: testEmail,
        password: testPassword,
      })

      if (error) {
        addTestResult(`❌ Sign in error: ${error.message}`)
      } else {
        addTestResult(`✅ Sign in successful! User: ${data.user?.email}`)
      }
    } catch (error) {
      addTestResult(`❌ Sign in exception: ${error}`)
    }
  }

  const testNetworkConnectivity = async () => {
    try {
      addTestResult("🔄 Testing network connectivity...")
      const response = await fetch(envVars.fullUrl + "/rest/v1/", {
        headers: {
          apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
        },
      })

      if (response.ok) {
        addTestResult("✅ Network connectivity successful!")
      } else {
        addTestResult(`❌ Network error: ${response.status} ${response.statusText}`)
      }
    } catch (error) {
      addTestResult(`❌ Network exception: ${error}`)
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
            <Button onClick={testNetworkConnectivity} className="w-full">
              Test Network Connectivity
            </Button>
            <Button onClick={testSignUp} className="w-full">
              Test Sign Up
            </Button>
            <Button onClick={testSignIn} className="w-full">
              Test Sign In
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
    </div>
  )
}
