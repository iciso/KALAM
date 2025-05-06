import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, Users, BookMarked, School } from "lucide-react"

export const metadata = {
  title: "Prophets in the Quran - KALAM",
  description: "Learn about the 25 prophets mentioned in the Quran through interactive resources",
}

export default function ProphetsPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Prophets in the Quran</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
        The Quran mentions 25 prophets by name, each with their own unique story and message. Explore their lives,
        teachings, and significance through our interactive resources.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <Users className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>Prophets Overview</CardTitle>
            <CardDescription>Explore all 25 prophets mentioned in the Quran</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              View a comprehensive list of all prophets mentioned in the Quran with their Arabic names and meanings.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/prophets-summary" passHref className="w-full">
              <Button className="w-full">View Overview</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <Clock className="h-8 w-8 text-emerald-600 mb-2" />
            <CardTitle>Prophets Timeline</CardTitle>
            <CardDescription>Chronological sequence of prophets</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Explore the chronological order of prophets from Adam to Muhammad and learn about their time periods and
              key events.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/prophets-summary?tab=timeline" passHref className="w-full">
              <Button className="w-full">View Timeline</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <BookOpen className="h-8 w-8 text-amber-600 mb-2" />
            <CardTitle>Prophet Stories</CardTitle>
            <CardDescription>Detailed narratives from the Quran</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Read the stories of prophets as mentioned in the Quran and learn about their trials and triumphs.</p>
          </CardContent>
          <CardFooter>
            <Link href="/prophets/stories" passHref className="w-full">
              <Button className="w-full">Read Stories</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <BookMarked className="h-8 w-8 text-purple-600 mb-2" />
            <CardTitle>Prophets in the Quran</CardTitle>
            <CardDescription>Quranic references to prophets</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Explore Quranic verses that mention prophets and their stories, with translations and context.</p>
          </CardContent>
          <CardFooter>
            <Link href="/prophets/quranic-references" passHref className="w-full">
              <Button className="w-full">View References</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <School className="h-8 w-8 text-red-600 mb-2" />
            <CardTitle>Prophets Quiz</CardTitle>
            <CardDescription>Test your knowledge about prophets</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Challenge yourself with quizzes about the prophets mentioned in the Quran and their stories.</p>
          </CardContent>
          <CardFooter>
            <Link href="/quizzes/categories/prophets" passHref className="w-full">
              <Button className="w-full">Take Quiz</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-blue-200 bg-blue-50 dark:bg-blue-900/20 dark:border-blue-800">
          <CardHeader>
            <Users className="h-8 w-8 text-blue-600 mb-2" />
            <CardTitle>Prophet Family Tree</CardTitle>
            <CardDescription>Relationships between prophets</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Explore the family relationships between prophets, including the lineage from Ibrahim to Muhammad.</p>
          </CardContent>
          <CardFooter>
            <Link href="/prophets/family-tree" passHref className="w-full">
              <Button className="w-full bg-blue-600 hover:bg-blue-700">View Family Tree</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>

      <div className="mt-12 bg-emerald-50 dark:bg-emerald-900/20 p-6 rounded-lg border border-emerald-200 dark:border-emerald-800">
        <h2 className="text-2xl font-bold mb-4">Study Prophets in the Dictionary</h2>
        <p className="mb-4">
          Explore detailed entries for each prophet in our Quranic dictionary, including their Arabic names,
          transliterations, meanings, and Quranic references.
        </p>
        <div className="flex justify-center">
          <Link href="/vocabulary?category=prophets">
            <Button variant="outline" className="bg-white dark:bg-gray-800">
              Browse Prophet Vocabulary
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
