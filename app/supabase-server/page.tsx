import { createClient } from "@supabase/supabase-js"

export default async function SupabaseServerTest() {
  let status = "Unknown"
  let errorMessage = null
  let data = null

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
    const response = await supabase.from("vocabulary_words").select("id, arabic, transliteration").limit(3)

    if (response.error) {
      throw new Error(`Database error: ${response.error.message}`)
    }

    status = "Success"
    data = response.data
  } catch (err) {
    status = "Error"
    errorMessage = err instanceof Error ? err.message : String(err)
    console.error(err)
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6">Server-Side Supabase Test</h1>

      <div className="mb-6">
        <p className="font-semibold">Status: {status}</p>

        {errorMessage && (
          <div className="p-4 mt-4 bg-red-100 border border-red-400 text-red-700 rounded">
            <p className="font-bold">Error:</p>
            <p>{errorMessage}</p>
          </div>
        )}

        {data && (
          <div className="mt-6">
            <h2 className="text-lg font-semibold mb-2">Data from Supabase:</h2>
            <pre className="bg-gray-100 p-4 rounded overflow-auto">{JSON.stringify(data, null, 2)}</pre>
          </div>
        )}
      </div>

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
