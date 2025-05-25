import Link from "next/link"
import { ArrowRight, BookOpen, Database, Gamepad2, ListChecks, ListPlus, Users, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { VocabularyStats } from "../components/vocabulary-stats"
import { Ribbon } from "@/components/ribbon"
import { KalamAcronym } from "@/components/kalam-acronym"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-emerald-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="relative bg-gradient-to-r from-emerald-700 to-emerald-900 text-white p-8 rounded-lg shadow-lg mb-8">
            <Ribbon text="Demo" position="top-right" color="bg-amber-500" textColor="text-white" />
            <div className="flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-2">KALAM</h1>
              <p className="text-xl mb-4">Know Allah by Lighting up Activities of Mirth</p>
              <div className="mt-2">
                <Link href="/kalam-meaning">
                  <Button variant="outline" size="sm" className="text-white border-white hover:bg-emerald-600">
                    What does KALAM mean?
                  </Button>
                </Link>
              </div>
              <div className="mt-6">
                <KalamAcronym size="sm" interactive={false} withLinks={true} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 container mx-auto px-4 py-8">
        <section className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Learn Quranic Arabic Vocabulary</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Enhance your understanding of the Quran through interactive learning tools designed to help you master
            Arabic vocabulary.
          </p>
        </section>

        <section className="mb-8">
          <VocabularyStats />
        </section>

        {/* Main features grid - Reordered to match navigation */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Interactive Learning Section - Top Priority */}
          <Card>
            <CardHeader>
              <Gamepad2 className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Games</CardTitle>
              <CardDescription>Learn while having fun with vocabulary games</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Enjoy learning through games that make vocabulary acquisition fun and engaging. Perfect for all ages and
                learning styles.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/games" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Play Games <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <ListChecks className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Quizzes</CardTitle>
              <CardDescription>Test your knowledge with interactive quizzes</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Challenge yourself with quizzes designed to reinforce your vocabulary learning. Track your progress and
                identify areas for improvement.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/quizzes" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Take a Quiz <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-orange-600 mb-2" />
              <CardTitle>Hijra Journey</CardTitle>
              <CardDescription>Explore the Prophet's migration from Mecca to Medina</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Discover the historic journey of Prophet Muhammad (PBUH) with interactive maps, historical context, and
                Quranic references.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/hijra" className="w-full">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  Explore Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Clock className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Isra & Miraj</CardTitle>
              <CardDescription>Experience the Prophet's miraculous night journey</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Follow the Prophet's journey from Mecca to Jerusalem and ascension to the heavens with interactive
                storytelling.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/isra-miraj" className="w-full">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  Begin Journey <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <ListPlus className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Word Lists</CardTitle>
              <CardDescription>Create custom lists for focused study</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Create and manage your own word lists to organize vocabulary based on your learning needs and goals.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/word-lists" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  My Word Lists <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Reference Section */}
          <Card>
            <CardHeader>
              <Database className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Quranic Dictionary</CardTitle>
              <CardDescription>Explore comprehensive Quranic vocabulary</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Browse our extensive collection of Quranic Arabic vocabulary with detailed meanings, examples, and
                context.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/vocabulary" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Explore Dictionary <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <BookOpen className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Flashcards</CardTitle>
              <CardDescription>Learn new words with interactive flashcards</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Study Quranic vocabulary with our comprehensive flashcard system. Review words, their meanings, and
                their context in the Quran.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/flashcards" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <Users className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Prophets in the Quran</CardTitle>
              <CardDescription>Learn about the 25 prophets mentioned in the Quran</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Explore the stories and attributes of the prophets mentioned in the Quran and their significance in
                Islamic teachings.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/prophets" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Explore Prophets <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </section>

        {/* Rest of the homepage content remains the same */}
        {/* ... */}
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            KALAM - Know Allah by Lighting up Activities of Mirth | Open Source Project
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/about" className="text-emerald-600 hover:text-emerald-700">
              About
            </Link>
            <Link href="/contribute" className="text-emerald-600 hover:text-emerald-700">
              Contribute
            </Link>
            <Link href="https://github.com/iciso/KALAM" className="text-emerald-600 hover:text-emerald-700">
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
