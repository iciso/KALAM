import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"
import { ArrowLeft, BookOpen, Search } from "lucide-react"

export const metadata = {
  title: "Prophets in the Quran - References - KALAM",
  description: "Comprehensive collection of Quranic verses about prophets mentioned in the Quran",
}

export default function ProphetQuranReferencesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Prophets in the Quran</h1>
        <Link href="/prophets">
          <Button variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Prophets
          </Button>
        </Link>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        The Quran mentions 25 prophets by name and contains numerous references to their stories, teachings, and
        examples. Explore key Quranic verses about prophets below.
      </p>

      <div className="mb-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search for a prophet or verse..."
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <Tabs defaultValue="by-prophet" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-8">
          <TabsTrigger value="by-prophet">By Prophet</TabsTrigger>
          <TabsTrigger value="by-surah">By Surah</TabsTrigger>
          <TabsTrigger value="by-theme">By Theme</TabsTrigger>
        </TabsList>

        <TabsContent value="by-prophet" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
              <CardHeader>
                <CardTitle>Adam</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Creation and Appointment:</span> Surah Al-Baqarah (2:30-37)
                  </li>
                  <li>
                    <span className="font-semibold">Temptation by Iblis:</span> Surah Al-A'raf (7:19-25)
                  </li>
                  <li>
                    <span className="font-semibold">Repentance:</span> Surah Al-Baqarah (2:37)
                  </li>
                  <li>
                    <span className="font-semibold">Warning to Mankind:</span> Surah Ta-Ha (20:115-124)
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Verses
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
              <CardHeader>
                <CardTitle>Nuh (Noah)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Story of the Flood:</span> Surah Hud (11:25-48)
                  </li>
                  <li>
                    <span className="font-semibold">Building of the Ark:</span> Surah Hud (11:37-38)
                  </li>
                  <li>
                    <span className="font-semibold">His Son Who Disbelieved:</span> Surah Hud (11:42-43)
                  </li>
                  <li>
                    <span className="font-semibold">Entire Chapter:</span> Surah Nuh (71)
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Verses
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
              <CardHeader>
                <CardTitle>Ibrahim (Abraham)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Breaking the Idols:</span> Surah Al-Anbiya (21:51-70)
                  </li>
                  <li>
                    <span className="font-semibold">Building the Ka'bah:</span> Surah Al-Baqarah (2:127)
                  </li>
                  <li>
                    <span className="font-semibold">Sacrifice of His Son:</span> Surah As-Saffat (37:102-107)
                  </li>
                  <li>
                    <span className="font-semibold">Prayer for Makkah:</span> Surah Ibrahim (14:35-41)
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Verses
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Musa (Moses)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Confrontation with Pharaoh:</span> Surah Al-A'raf (7:103-137)
                  </li>
                  <li>
                    <span className="font-semibold">Parting of the Sea:</span> Surah Ash-Shu'ara (26:63-66)
                  </li>
                  <li>
                    <span className="font-semibold">Receiving the Torah:</span> Surah Al-A'raf (7:142-145)
                  </li>
                  <li>
                    <span className="font-semibold">Meeting with Khidr:</span> Surah Al-Kahf (18:60-82)
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Verses
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Isa (Jesus)</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Miraculous Birth:</span> Surah Maryam (19:16-34)
                  </li>
                  <li>
                    <span className="font-semibold">Miracles Performed:</span> Surah Al-Ma'idah (5:110)
                  </li>
                  <li>
                    <span className="font-semibold">Being Raised to Heaven:</span> Surah An-Nisa (4:157-158)
                  </li>
                  <li>
                    <span className="font-semibold">As a Sign:</span> Surah Al-Anbiya (21:91)
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Verses
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Muhammad</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Seal of the Prophets:</span> Surah Al-Ahzab (33:40)
                  </li>
                  <li>
                    <span className="font-semibold">Night Journey:</span> Surah Al-Isra (17:1)
                  </li>
                  <li>
                    <span className="font-semibold">Character and Mission:</span> Surah Al-Anbiya (21:107)
                  </li>
                  <li>
                    <span className="font-semibold">As a Mercy:</span> Surah Al-Qalam (68:4)
                  </li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Verses
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button>View All 25 Prophets</Button>
          </div>
        </TabsContent>

        <TabsContent value="by-surah" className="space-y-8">
          <div className="bg-blue-50 dark:bg-blue-950 p-6 rounded-lg border border-blue-100 dark:border-blue-900 mb-6">
            <h2 className="text-xl font-semibold mb-4 flex items-center text-blue-800 dark:text-blue-300">
              <BookOpen className="h-5 w-5 mr-2" />
              Surahs with Major Prophet Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Surah Al-Anbiya (21)</h3>
                <p className="text-sm">
                  Named "The Prophets" - mentions numerous prophets including Ibrahim, Nuh, Musa, and others
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Surah Yusuf (12)</h3>
                <p className="text-sm">Dedicated entirely to the story of Prophet Yusuf (Joseph)</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Surah Nuh (71)</h3>
                <p className="text-sm">Dedicated to Prophet Nuh (Noah) and the flood</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Surah Ibrahim (14)</h3>
                <p className="text-sm">Named after Prophet Ibrahim (Abraham)</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Surah Maryam (19)</h3>
                <p className="text-sm">Contains the story of Maryam (Mary) and the birth of Isa (Jesus)</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-2">Surah Hud (11)</h3>
                <p className="text-sm">Contains stories of multiple prophets including Nuh, Hud, Salih, and Ibrahim</p>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Surah Al-Baqarah (2)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">Verses 30-37: Adam</h3>
                  <p className="text-sm">Creation of Adam, his appointment as vicegerent, and his fall from Paradise</p>
                </div>
                <div>
                  <h3 className="font-semibold">Verses 124-132: Ibrahim</h3>
                  <p className="text-sm">Ibrahim's trials, building of the Ka'bah, and his legacy</p>
                </div>
                <div>
                  <h3 className="font-semibold">Verses 246-251: Dawud (David)</h3>
                  <p className="text-sm">Story of Talut (Saul) and Dawud's victory over Jalut (Goliath)</p>
                </div>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    View All Verses
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-8">
            <Button>Browse All Surahs</Button>
          </div>
        </TabsContent>

        <TabsContent value="by-theme" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Trials and Tribulations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ibrahim's willingness to sacrifice his son (37:102-107)</li>
                  <li>Ayyub's (Job's) patience through suffering (21:83-84)</li>
                  <li>Yusuf's imprisonment and separation from family (12:33-42)</li>
                  <li>Yunus (Jonah) in the belly of the whale (37:139-148)</li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Theme
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Miracles of Prophets</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Musa's staff turning into a serpent (7:107-108)</li>
                  <li>Ibrahim being saved from the fire (21:69)</li>
                  <li>Isa bringing the dead to life (5:110)</li>
                  <li>Sulaiman (Solomon) commanding the wind (21:81)</li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Theme
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prophets and Their People</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Nuh and the disbelievers (71:5-20)</li>
                  <li>Hud and the people of 'Ad (11:50-60)</li>
                  <li>Salih and the people of Thamud (11:61-68)</li>
                  <li>Shu'ayb and the people of Madyan (11:84-95)</li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Theme
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Divine Protection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Musa being saved from Pharaoh as a baby (20:38-40)</li>
                  <li>Ibrahim being saved from the fire (21:69)</li>
                  <li>Nuh and believers saved from the flood (11:40-44)</li>
                  <li>Lut (Lot) being saved from the destruction (21:74-75)</li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Theme
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prophetic Prayers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Ibrahim's prayer for Makkah (14:35-41)</li>
                  <li>Zakariya's prayer for a son (19:3-6)</li>
                  <li>Yunus's prayer in the whale (21:87)</li>
                  <li>Musa's prayer for help (20:25-35)</li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Theme
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Prophets as Role Models</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Following the guidance of prophets (6:90)</li>
                  <li>Ibrahim as an excellent example (60:4-6)</li>
                  <li>Muhammad's excellent character (33:21)</li>
                  <li>Patience of prophets (46:35)</li>
                </ul>
                <div className="mt-4">
                  <Button variant="outline" size="sm" className="w-full">
                    Explore Theme
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-8">
            <Button>View All Themes</Button>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-12 bg-amber-50 dark:bg-amber-950 p-6 rounded-lg border border-amber-100 dark:border-amber-900">
        <h2 className="text-xl font-semibold mb-4">Featured Verse Collection</h2>
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Prophets as Role Models</h3>
          <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg mb-4">
            <p className="font-arabic text-xl text-right mb-2" dir="rtl">
              أُولَٰئِكَ الَّذِينَ هَدَى اللَّهُ ۖ فَبِهُدَاهُمُ اقْتَدِهْ
            </p>
            <p className="italic">
              "Those are the ones whom Allah has guided, so from their guidance take an example." (Quran 6:90)
            </p>
          </div>
          <p className="text-sm mb-4">
            This verse instructs the Prophet Muhammad (and by extension, all believers) to follow the example of
            previous prophets. It emphasizes that the guidance given to all prophets comes from the same source and
            follows the same principles.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h4 className="font-semibold text-sm mb-1">Context</h4>
              <p className="text-xs">
                This verse appears after mentioning 18 prophets, indicating that they all share the same fundamental
                message of monotheism and moral excellence.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-sm mb-1">Application</h4>
              <p className="text-xs">
                Muslims are encouraged to study the lives of prophets and emulate their virtues, patience, and
                steadfastness in faith.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 text-center">
        <Link href="/prophets">
          <Button>Back to Prophets Hub</Button>
        </Link>
      </div>
    </div>
  )
}
