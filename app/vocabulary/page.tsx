import { VocabularyBrowser } from "@/components/vocabulary-browser"
import { VocabularyCategoryLinks } from "@/components/vocabulary-category-links"

export default function VocabularyPage() {
  return (
    <div>
      <div className="bg-emerald-50 dark:bg-emerald-900/20 py-6 mb-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-2">Quranic Vocabulary Dictionary</h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl">
            Explore the rich vocabulary of the Quran with detailed meanings, examples, and context. Use the filters to
            find specific words or browse by category.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-8">
        <VocabularyCategoryLinks
          title="Quick Category Access"
          description="Jump directly to a specific category of Quranic vocabulary"
          compact={true}
          maxInitialCategories={6}
        />
      </div>

      <VocabularyBrowser />
    </div>
  )
}
