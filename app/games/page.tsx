import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Games - KALAM",
  description: "Fun and educational games to learn Quranic Arabic vocabulary",
}

export default function GamesPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Educational Games</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Word Search</CardTitle>
            <CardDescription>Find Arabic words from the Quran in a grid</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Test your recognition of Arabic words by finding them in a word search puzzle.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/word-search" passHref>
              <Button>Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Hangman</CardTitle>
            <CardDescription>Guess the Arabic word letter by letter</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Test your vocabulary knowledge by guessing Arabic words one letter at a time.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/hangman" passHref>
              <Button>Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Memory Match</CardTitle>
            <CardDescription>Match Arabic words with their meanings</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Improve your memory and vocabulary by matching Arabic words with their English translations.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/memory" passHref>
              <Button>Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Word Matching</CardTitle>
            <CardDescription>Connect Arabic words to their meanings</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Draw lines to connect Arabic words with their correct English translations.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/matching" passHref>
              <Button>Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-emerald-200 bg-emerald-50">
          <CardHeader>
            <CardTitle className="text-emerald-800">Divine Attributes</CardTitle>
            <CardDescription>Learn the beautiful names of Allah</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Match the Arabic names of Allah (Asma-ul-Husna) with their English meanings in this special matching game.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/games/matching/divine-attributes" passHref>
              <Button className="bg-emerald-600 hover:bg-emerald-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Crossword</CardTitle>
            <CardDescription>Fill in Arabic words based on clues</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Complete a crossword puzzle using your knowledge of Quranic Arabic vocabulary.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/crossword" passHref>
              <Button>Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Fill in the Blanks</CardTitle>
            <CardDescription>Complete Quranic sentences by filling in missing words</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Test your understanding of Quranic verses by filling in the missing words.</p>
          </CardContent>
          <CardFooter>
            <Link href="/games/fill-blanks" passHref>
              <Button>Play Now</Button>
            </Link>
          </CardFooter>
        </Card>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader>
            <CardTitle className="text-amber-800">Knowing Your Mahram</CardTitle>
            <CardDescription>Learn about Mahram relationships in Islam</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Drag and drop relatives into Mahram and Non-Mahram categories to learn about Islamic family relationships.
            </p>
          </CardContent>
          <CardFooter>
            <Link href="/games/mahram" passHref>
              <Button className="bg-amber-600 hover:bg-amber-700">Play Now</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
