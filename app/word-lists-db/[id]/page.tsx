import { createClient } from "@supabase/supabase-js"
import Link from "next/link"
import { notFound } from "next/navigation"

// Initialize Supabase client (server-side)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""
const supabase = createClient(supabaseUrl, supabaseKey)

export default async function WordListDetailPage({ params }: { params: { id: string } }) {
  const { id } = params

  // Fetch the word list
  const { data: list, error: listError } = await supabase.from("word_lists").select("*").eq("id", id).single()

  if (listError || !list) {
    console.error("Error fetching word list:", listError)
    return notFound()
  }

  // Fetch the word IDs in this list
  const { data: listItems, error: itemsError } = await supabase
    .from("word_list_items")
    .select("word_id")
    .eq("list_id", id)

  if (itemsError) {
    console.error("Error fetching word list items:", itemsError)
    return <div>Error loading word list items. Please try again later.</div>
  }

  const wordIds = listItems.map((item) => item.word_id)

  // Fetch the words if there are any
  let words = []
  if (wordIds.length > 0) {
    const { data: wordsData, error: wordsError } = await supabase.from("vocabulary_words").select("*").in("id", wordIds)

    if (wordsError) {
      console.error("Error fetching words:", wordsError)
      return <div>Error loading words. Please try again later.</div>
    }

    words = wordsData
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="mb-6">
        <Link href="/word-lists-db" className="text-green-600 hover:underline flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Word Lists
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold mb-2">{list.name}</h1>
        <p className="text-gray-700 mb-4">{list.description || "No description provided."}</p>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-600">
            {words.length} {words.length === 1 ? "word" : "words"}
          </span>
          <span className="text-sm text-gray-600">Created: {new Date(list.created_at).toLocaleDateString()}</span>
          {list.is_predefined && (
            <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Predefined</span>
          )}
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
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">No Words in This List Yet</h2>
          <p className="text-gray-600 mb-6">Add words to this list from the vocabulary browser.</p>
          <Link
            href="/vocabulary-browser"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
          >
            Browse Vocabulary Words
          </Link>
        </div>
      )}

      <div className="mt-12 flex justify-center gap-4">
        <Link
          href={`/word-lists-db/${id}/edit`}
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Edit List
        </Link>
        <Link
          href={`/word-lists-db/${id}/study`}
          className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
        >
          Study Words
        </Link>
      </div>
    </div>
  )
}
