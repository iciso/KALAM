import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

// This would normally come from a database or API
const getVerseData = (surah: string, verse: string) => {
  // Placeholder data
  return {
    surahNumber: "11",
    surahName: "Hud",
    verseNumber: "42-43",
    arabicText:
      "وَنَادَىٰ نُوحٌ ابْنَهُ وَكَانَ فِي مَعْزِلٍ يَا بُنَيَّ ارْكَب مَّعَنَا وَلَا تَكُن مَّعَ الْكَافِرِينَ ﴿٤٢﴾ قَالَ سَآوِي إِلَىٰ جَبَلٍ يَعْصِمُنِي مِنَ الْمَاءِ ۚ قَالَ لَا عَاصِمَ الْيَوْمَ مِنْ أَمْرِ اللَّهِ إِلَّا مَن رَّحِمَ ۚ وَحَالَ بَيْنَهُمَا الْمَوْجُ فَكَانَ مِنَ الْمُغْرَقِينَ",
    translation:
      "And Noah called to his son who was apart [from them], 'O my son, come aboard with us and be not with the disbelievers.' [But] he said, 'I will take refuge on a mountain to protect me from the water.' [Noah] said, 'There is no protector today from the decree of Allah, except for whom He gives mercy.' And the waves came between them, and he was among the drowned.",
    prophet: "Nuh (Noah)",
    theme: "Family Relations",
    context:
      "This verse describes the tragic moment when Prophet Nuh's son refuses to board the ark, believing he can save himself by climbing a mountain. Despite Nuh's plea, his son remains adamant in his disbelief and is eventually drowned in the flood.",
    lessons: [
      "Guidance is in Allah's hands, not even prophets can guide those whom Allah has not decreed to be guided",
      "Faith is more important than family relations in terms of salvation",
      "Pride and arrogance can lead to destruction",
      "Natural disasters can be a form of divine punishment",
    ],
    relatedVerses: [
      { surah: "11", verse: "37-38", description: "Building of the Ark" },
      { surah: "11", verse: "40-41", description: "Loading the Ark" },
      { surah: "11", verse: "44", description: "End of the Flood" },
      { surah: "71", verse: "1-28", description: "Nuh's Preaching" },
    ],
  }
}

export function generateMetadata({ params }: { params: { surah: string; verse: string } }) {
  const { surahNumber, surahName, verseNumber, prophet } = getVerseData(params.surah, params.verse)

  return {
    title: `Surah ${surahName} (${surahNumber}:${verseNumber}) - ${prophet} - KALAM`,
    description: `Explore Surah ${surahName} verses ${verseNumber} about Prophet ${prophet} in the Quran with translation, context, and lessons.`,
  }
}

export default function VerseDetailPage({ params }: { params: { surah: string; verse: string } }) {
  const verseData = getVerseData(params.surah, params.verse)

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">
          Surah {verseData.surahName} ({verseData.surahNumber}:{verseData.verseNumber})
        </h1>
        <div className="flex gap-2">
          <Link href="/prophets/quranic-references">
            <Button variant="outline" className="flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to References
            </Button>
          </Link>
          <Link href="/prophets">
            <Button variant="outline">Prophets Hub</Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="mb-4">
                <h2 className="text-lg font-semibold mb-2">Arabic Text</h2>
                <p className="font-arabic text-2xl text-right leading-loose" dir="rtl">
                  {verseData.arabicText}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">Translation</h2>
                <p className="italic">{verseData.translation}</p>
              </div>
            </CardContent>
          </Card>

          <div className="prose dark:prose-invert max-w-none">
            <h2>Context</h2>
            <p>{verseData.context}</p>

            <h2>Key Lessons</h2>
            <ul>
              {verseData.lessons.map((lesson, index) => (
                <li key={index}>{lesson}</li>
              ))}
            </ul>

            <h2>Related Verses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
              {verseData.relatedVerses.map((related, index) => (
                <Link href={`/prophets/quranic-references/${related.surah}/${related.verse}`} key={index}>
                  <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <h3 className="font-semibold">
                      Surah {verseData.surahName} {related.verse}
                    </h3>
                    <p className="text-sm">{related.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Card className="mb-6">
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-4">About This Verse</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-sm">Prophet</h3>
                  <p>{verseData.prophet}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Theme</h3>
                  <p>{verseData.theme}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-sm">Surah Information</h3>
                  <p>
                    Surah {verseData.surahName} is the {verseData.surahNumber}th chapter of the Quran.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <h2 className="text-lg font-semibold mb-4">Explore More</h2>
              <div className="space-y-4">
                <Link href={`/prophets/stories/nuh`} className="block text-blue-600 dark:text-blue-400 hover:underline">
                  Read the full story of Prophet {verseData.prophet}
                </Link>
                <Link href="/prophets/family-tree" className="block text-blue-600 dark:text-blue-400 hover:underline">
                  View Prophet Family Tree
                </Link>
                <Link
                  href={`/vocabulary?category=prophets`}
                  className="block text-blue-600 dark:text-blue-400 hover:underline"
                >
                  Learn Quranic vocabulary about Prophets
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
