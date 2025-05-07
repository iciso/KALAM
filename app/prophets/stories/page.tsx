import { Button } from "@/components/ui/card"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft, BookOpen, CheckCircle2 } from "lucide-react"

export const metadata = {
  title: "Prophet Stories - KALAM",
  description: "Stories of prophets mentioned in the Quran",
}

export default function ProphetStoriesPage() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Prophet Stories</h1>
        <Link href="/prophets">
          <Button variant="outline" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Prophets
          </Button>
        </Link>
      </div>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        The Quran contains numerous stories of prophets, providing valuable lessons and guidance. Explore these stories
        to learn about the trials, triumphs, and teachings of the prophets.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>The Story of Adam</CardTitle>
            <CardDescription>The first human and prophet</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Learn about the creation of Adam, his time in Paradise, and his descent to Earth. The story teaches about
              human nature, free will, and repentance.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/prophets/stories/adam" className="w-full">
              <Button variant="outline" className="w-full">
                Read Story
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>The Story of Nuh (Noah)</CardTitle>
            <CardDescription>The prophet of the flood</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Explore the story of Nuh who preached for 950 years, built the Ark, and survived the great flood with the
              believers.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/prophets/stories/nuh" className="w-full">
              <Button variant="outline" className="w-full">
                Read Story
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-emerald-200 bg-emerald-50 dark:bg-emerald-900/20 dark:border-emerald-800">
          <CardHeader className="flex flex-row items-start justify-between pb-2">
            <div>
              <CardTitle>The Story of Ibrahim (Abraham)</CardTitle>
              <CardDescription>The friend of Allah</CardDescription>
            </div>
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
          </CardHeader>
          <CardContent>
            <p>
              Discover the story of Ibrahim, who challenged idolatry, was willing to sacrifice his son, and built the
              Ka'bah.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/prophets/stories/ibrahim" className="w-full">
              <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Read Story</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>The Story of Yusuf (Joseph)</CardTitle>
            <CardDescription>The most beautiful of stories</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Read about Yusuf, whose story is described in the Quran as "the most beautiful of stories," including his
              trials and rise to power in Egypt.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/prophets/stories/yusuf" className="w-full">
              <Button variant="outline" className="w-full">
                Read Story
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>The Story of Musa (Moses)</CardTitle>
            <CardDescription>The prophet who spoke with Allah</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Learn about Musa, who was raised in Pharaoh's palace, received revelation at Mount Tur, and led the
              Israelites out of Egypt.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/prophets/stories/musa" className="w-full">
              <Button variant="outline" className="w-full">
                Read Story
              </Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>The Story of Isa (Jesus)</CardTitle>
            <CardDescription>The prophet born miraculously</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Explore the story of Isa, who was born miraculously to Virgin Maryam, performed many miracles, and was
              raised to heaven.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/prophets/stories/isa" className="w-full">
              <Button variant="outline" className="w-full">
                Read Story
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
        <h2 className="text-2xl font-bold mb-4">Reading Guide</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center">
              <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
              How to Benefit from Prophet Stories
            </h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Reflect on the moral lessons in each story</li>
              <li>Consider how the prophets responded to challenges</li>
              <li>Note the consistent message of monotheism across all prophets</li>
              <li>Apply the lessons to your own life situations</li>
              <li>Discuss the stories with others to gain new perspectives</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-2">Chronological Reading Order</h3>
            <p className="mb-2">For those who wish to read the stories in chronological order:</p>
            <ol className="list-decimal pl-5 space-y-1">
              <li>Adam - The first human and prophet</li>
              <li>Idris (Enoch) - Before the flood</li>
              <li>Nuh (Noah) - The flood</li>
              <li>Hud - To the people of 'Ad</li>
              <li>Salih - To the people of Thamud</li>
              <li>Ibrahim (Abraham) - The friend of Allah</li>
              <li>Lut (Lot) - Contemporary of Ibrahim</li>
              <li>Isma'il (Ishmael) - Son of Ibrahim</li>
              <li>Ishaq (Isaac) - Son of Ibrahim</li>
              <li>Ya'qub (Jacob) - Son of Ishaq</li>
            </ol>
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
