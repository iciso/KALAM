import { SurahVocabularyBrowser } from "../../components/surah-vocabulary-browser"

export default function SurahVocabularyPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Quranic Vocabulary by Surah</h1>
          <p className="text-emerald-100">Explore Arabic words organized by Quranic chapters</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <SurahVocabularyBrowser />
      </main>
    </div>
  )
}
