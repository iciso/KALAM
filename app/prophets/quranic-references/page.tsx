import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Prophets in the Quran - References - KALAM",
  description: "Quranic references to prophets mentioned in the Quran",
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Surah Al-Anbiya (The Prophets)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Surah Al-Anbiya is the 21st chapter of the Quran and is named "The Prophets" because it mentions numerous
              prophets and their stories.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
              <p className="font-arabic text-xl text-right mb-2" dir="rtl">
                وَلَقَدْ كَتَبْنَا فِي الزَّبُورِ مِن بَعْدِ الذِّكْرِ أَنَّ الْأَرْضَ يَرِثُهَا عِبَادِيَ الصَّالِحُونَ
              </p>
              <p className="italic">
                "And We have already written in the book [of Psalms] after the [previous] mention that the land [of
                Paradise] is inherited by My righteous servants." (Quran 21:105)
              </p>
            </div>
            <Button variant="outline" className="w-full">
              Read Surah Al-Anbiya
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Prophets as Role Models</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              The Quran presents prophets as role models for humanity, exemplifying patience, faith, and moral
              excellence.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg mb-4">
              <p className="font-arabic text-xl text-right mb-2" dir="rtl">
                أُولَٰئِكَ الَّذِينَ هَدَى اللَّهُ ۖ فَبِهُدَاهُمُ اقْتَدِهْ
              </p>
              <p className="italic">
                "Those are the ones whom Allah has guided, so from their guidance take an example." (Quran 6:90)
              </p>
            </div>
            <Button variant="outline" className="w-full">
              More Verses About Prophets
            </Button>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mb-4">Key Quranic References by Prophet</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Adam</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Creation and appointment as vicegerent (2:30-37)</li>
              <li>Temptation by Iblis (Satan) (7:19-25)</li>
              <li>Repentance and forgiveness (2:37)</li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                View Verses
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Nuh (Noah)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Story of the flood (11:25-48)</li>
              <li>Building of the Ark (11:37-38)</li>
              <li>His son who disbelieved (11:42-43)</li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                View Verses
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Ibrahim (Abraham)</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Breaking the idols (21:51-70)</li>
              <li>Building the Ka'bah (2:127)</li>
              <li>Sacrifice of his son (37:102-107)</li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                View Verses
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
              <li>Confrontation with Pharaoh (7:103-137)</li>
              <li>Parting of the sea (26:63-66)</li>
              <li>Receiving the Torah (7:142-145)</li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                View Verses
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
              <li>Miraculous birth (19:16-34)</li>
              <li>Miracles performed (5:110)</li>
              <li>Being raised to heaven (4:157-158)</li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                View Verses
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
              <li>Seal of the prophets (33:40)</li>
              <li>Night Journey (17:1)</li>
              <li>Character and mission (21:107)</li>
            </ul>
            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                View Verses
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Link href="/prophets">
          <Button>Back to Prophets Hub</Button>
        </Link>
      </div>
    </div>
  )
}
