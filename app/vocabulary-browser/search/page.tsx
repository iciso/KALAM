import { createClient } from "@supabase/supabase-js"
import Link from "next/link"

// Initialize Supabase client (server-side)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function VocabularySearch({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = typeof searchParams.q === "string" ? searchParams.q : ""

  // Fetch vocabulary words from Supabase based on search query
  let supabaseQuery = supabase.from("vocabulary_words").select("*")

  if (query) {
    supabaseQuery = supabaseQuery.or(
      `arabic.ilike.%${query}%,transliteration.ilike.%${query}%,meanings.ilike.%${query}%`,
    )
  }

  const { data: words, error } = await supabaseQuery.order("frequency", { ascending: false }).limit(50)

  if (error) {
    console.error("Error fetching vocabulary words:", error)
    return <div>Error loading vocabulary words. Please try again later.</div>
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Quranic Vocabulary Search</h1>

      <div className="max-w-2xl mx-auto mb-8">
        <form action="/vocabulary-browser/search" method="get" className="flex gap-2">
          <input
            type="text"
            name="q"
            defaultValue={query}
            placeholder="Search by Arabic, transliteration, or meaning..."
            className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Search
          </button>
        </form>
      </div>

      {query && (
        <div className="mb-6 text-center">
          <p className="text-lg">
            {words.length > 0 ? `Found ${words.length} results for "${query}"` : `No results found for "${query}"`}
          </p>
        </div>
      )}

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
        query && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No vocabulary words found matching your search.</p>
            <p className="text-gray-500">Try a different search term or browse all words.</p>
          </div>
        )
      )}

      <div className="mt-12 text-center">
        <Link
          href="/vocabulary-browser"
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Back to Browser
        </Link>
      </div>
    </div>
  )
}
