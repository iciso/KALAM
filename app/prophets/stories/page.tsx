import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

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
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                Read Story
              </Button>
            </div>
          </CardContent>
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
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                Read Story
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>The Story of Ibrahim (Abraham)</CardTitle>
            <CardDescription>The friend of Allah</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Discover the story of Ibrahim, who challenged idolatry, was willing to sacrifice his son, and built the
              Ka'bah.
            </p>
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                Read Story
              </Button>
            </div>
          </CardContent>
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
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                Read Story
              </Button>
            </div>
          </CardContent>
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
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                Read Story
              </Button>
            </div>
          </CardContent>
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
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                Read Story
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          More prophet stories coming soon. Check back for updates!
        </p>
        <Link href="/prophets">
          <Button>Back to Prophets Hub</Button>
        </Link>
      </div>
    </div>
  )
}
