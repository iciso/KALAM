import { VocabularyCategoryLinks } from "@/components/vocabulary-category-links"

export default function VocabularyCategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Quranic Vocabulary Categories</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-3xl">
        Explore the rich vocabulary of the Quran organized by categories. Each category contains words related to a
        specific theme or concept mentioned in the Quran. Click on any category to view all words within that category.
      </p>

      <VocabularyCategoryLinks showSearch={true} maxInitialCategories={100} />
    </div>
  )
}
