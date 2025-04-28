import { VocabularyBrowser } from "../../components/vocabulary-browser"
import { VocabularyStats } from "../../components/vocabulary-stats"
import { RootWordExplorer } from "../../components/root-word-explorer"

export default function VocabularyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Quranic Dictionary</h1>
          <p className="text-emerald-100">Explore and learn Arabic words from the Quran</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <VocabularyStats />
        <RootWordExplorer />
        <VocabularyBrowser />
      </main>
    </div>
  )
}
