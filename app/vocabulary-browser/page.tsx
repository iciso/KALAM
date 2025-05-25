import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

// Initialize Supabase client (server-side)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function VocabularyBrowser({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const phase = typeof searchParams.phase === "string" ? Number.parseInt(searchParams.phase) : undefined
  const difficulty = typeof searchParams.difficulty === "string" ? searchParams.difficulty : undefined

  // Build the query based on filters
  let query = supabase.from("vocabulary_words").select("*")

  if (phase !== undefined) {
    query = query.eq("phase", phase)
  }

  if (difficulty) {
    query = query.eq("difficulty", difficulty)
  }

  // Fetch vocabulary words from Supabase
  const { data: words, error } = await query.order("frequency", { ascending: false }).limit(20)

  if (error) {
    console.error("Error fetching vocabulary words:", error)
    return <div>Error loading vocabulary words. Please try again later.</div>
  }

  // Get phase counts
  const phaseCountsPromise = Promise.all(
    [1, 2, 3, 4, 5].map(async (phase) => {
      const { count } = await supabase
        .from("vocabulary_words")
        .select("*", { count: "exact", head: true })
        .eq("phase", phase)
      return { phase, count: count || 0 }
    }),
  )

  const phaseCounts = await phaseCountsPromise

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Quranic Vocabulary Browser (Database Version)</h1>

      <div className="mb-8 bg-green-50 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Vocabulary Statistics</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {phaseCounts.map(({ phase, count }) => (
            <div key={phase} className="bg-white p-4 rounded shadow text-center">
              <div className="text-2xl font-bold text-green-600">{count}</div>
              <div className="text-sm text-gray-600">Phase {phase} Words</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <p className="text-lg text-center mb-4">
          Browse through Quranic vocabulary words stored in the Supabase database.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <Link
            href="/vocabulary-browser/search"
            className="flex items-center justify-center gap-2 w-full bg-white border border-gray-300 rounded-lg px-4 py-3 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            Search vocabulary words...
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link
            href="/vocabulary-browser"
            className={`px-4 py-2 rounded transition-colors ${
              !phase && !difficulty ? "bg-green-700 text-white" : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
          >
            All Words
          </Link>
          <Link
            href="/vocabulary-browser?phase=1"
            className={`px-4 py-2 rounded transition-colors ${
              phase === 1 ? "bg-green-700 text-white" : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
          >
            Phase 1
          </Link>
          <Link
            href="/vocabulary-browser?phase=2"
            className={`px-4 py-2 rounded transition-colors ${
              phase === 2 ? "bg-green-700 text-white" : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
          >
            Phase 2
          </Link>
          <Link
            href="/vocabulary-browser?phase=3"
            className={`px-4 py-2 rounded transition-colors ${
              phase === 3 ? "bg-green-700 text-white" : "bg-green-100 text-green-800 hover:bg-green-200"
            }`}
          >
            Phase 3
          </Link>
          <Link
            href="/vocabulary-browser?difficulty=beginner"
            className={`px-4 py-2 rounded transition-colors ${
              difficulty === "beginner" ? "bg-blue-700 text-white" : "bg-blue-100 text-blue-800 hover:bg-blue-200"
            }`}
          >
            Beginner
          </Link>
          <Link
            href="/vocabulary-browser?difficulty=intermediate"
            className={`px-4 py-2 rounded transition-colors ${
              difficulty === "intermediate" ? "bg-blue-700 text-white" : "bg-blue-100 text-blue-800 hover:bg-blue-200"
            }`}
          >
            Intermediate
          </Link>
        </div>
      </div>

      {words.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {words.map((word) => (
            <div
              key={word.id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="bg-green-50 p-6 text-center">
                <h2 className="text-4xl font-arabic mb-2">{word.arabic}</h2>
                <p className="text-lg font-semibold">{word.transliteration}</p>
              </div>
              <div className="p-4">
                <p className="mb-2">
                  <span className="font-semibold">Meanings:</span>{" "}
                  {Array.isArray(word.meanings)
                    ? word.meanings.join(", ")
                    : typeof word.meanings === "object"
                      ? Object.values(word.meanings).join(", ")
                      : word.meanings}
                </p>
                {word.root_letters && (
                  <p className="mb-2">
                    <span className="font-semibold">Root:</span> {word.root_letters}
                  </p>
                )}
                <p className="mb-2">
                  <span className="font-semibold">Type:</span> {word.part_of_speech}
                </p>
                <div className="flex justify-between">
                  <p className="mb-2">
                    <span className="font-semibold">Difficulty:</span>{" "}
                    <span
                      className={`${
                        word.difficulty === "beginner"
                          ? "text-green-600"
                          : word.difficulty === "intermediate"
                            ? "text-yellow-600"
                            : "text-red-600"
                      }`}
                    >
                      {word.difficulty}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold">Phase:</span>{" "}
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">{word.phase}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 mb-4">No vocabulary words found matching your criteria.</p>
          <p className="text-gray-500">Try a different filter or browse all words.</p>
        </div>
      )}

      <div className="mt-12 text-center">
        <Link
          href="/vocabulary-db"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          View Simple Version
        </Link>
      </div>
    </div>
  )
}
