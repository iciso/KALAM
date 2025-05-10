import { VocabularyExpansionStats } from "@/components/vocabulary-expansion-stats"

export default function VocabularyExpansionStatsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Vocabulary Expansion Statistics</h1>
      <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
        Our Quranic vocabulary database has been expanded to over 400 words, covering key concepts, virtues, and themes
        from the Quran. Explore the statistics below to learn more about our vocabulary coverage.
      </p>

      <VocabularyExpansionStats />
    </div>
  )
}
