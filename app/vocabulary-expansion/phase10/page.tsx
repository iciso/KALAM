import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { enhancedVocabularyService } from "@/services/enhanced-vocabulary-service"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

export default function Phase10ExpansionPage() {
  const familyWords = enhancedVocabularyService.getFamilyRelationshipWords()
  const divineAttributes = enhancedVocabularyService.getDivineAttributeWords()

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">Vocabulary Expansion - Phase 10</h1>
      <p className="text-lg mb-8">
        This phase adds important family relationship terms from the Mahram game and divine attributes of Allah
        (Asma-ul-Husna).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Family Relationship Terms</CardTitle>
            <CardDescription>{familyWords.length} terms related to family relationships in Islam</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {familyWords.map((word) => (
                <div key={word.id} className="border-b pb-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-arabic">{word.arabic}</h3>
                    <Badge variant="outline">{word.difficulty}</Badge>
                  </div>
                  <p className="text-sm text-gray-500">{word.transliteration}</p>
                  <p className="mt-1">{word.meanings.join(", ")}</p>
                  {word.examples.length > 0 && (
                    <div className="mt-2 text-xs text-gray-600">
                      <span className="font-semibold">Example:</span> {word.examples[0].translation} (
                      {word.examples[0].surahName} {word.examples[0].verseNumber})
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Divine Attributes (Asma-ul-Husna)</CardTitle>
            <CardDescription>{divineAttributes.length} of the 99 beautiful names of Allah</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {divineAttributes.map((word) => (
                <div key={word.id} className="border-b pb-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-arabic">{word.arabic}</h3>
                    <Badge variant="outline">{word.difficulty}</Badge>
                  </div>
                  <p className="text-sm text-gray-500">{word.transliteration}</p>
                  <p className="mt-1">{word.meanings.join(", ")}</p>
                  {word.examples.length > 0 && (
                    <div className="mt-2 text-xs text-gray-600">
                      <span className="font-semibold">Example:</span> {word.examples[0].translation} (
                      {word.examples[0].surahName} {word.examples[0].verseNumber})
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="mb-4">
          These new vocabulary words are now available in the main dictionary and can be used in games, quizzes, and
          flashcards.
        </p>
        <Link
          href="/vocabulary"
          className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded"
        >
          Explore Full Dictionary
        </Link>
      </div>
    </div>
  )
}
