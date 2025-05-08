import { SurahVocabularyBrowser } from "../../components/surah-vocabulary-browser"
import EnhancedSurahTimeline from "@/components/enhanced-surah-timeline"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
        <Tabs defaultValue="browser" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="browser">Surah Browser</TabsTrigger>
            <TabsTrigger value="timeline">Revelation Timeline</TabsTrigger>
          </TabsList>
          <TabsContent value="browser" className="pt-4">
            <SurahVocabularyBrowser />
          </TabsContent>
          <TabsContent value="timeline" className="pt-4">
            <EnhancedSurahTimeline />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
