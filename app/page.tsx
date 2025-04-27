import Link from "next/link"
import { ArrowRight, BookOpen, Database, GamepadIcon, ListChecks, Volume2, ListPlus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AdvancedVocabularySection } from "../components/advanced-vocabulary-section"
import { VocabularyStats } from "../components/vocabulary-stats"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-emerald-800 text-white py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">KALAM</h1>
          <p className="text-center mt-2 text-emerald-100">Quran Vocabulary Learning App</p>
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

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-12">
          <Card>
            <CardHeader>
              <Database className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Vocabulary Database</CardTitle>
              <CardDescription>Explore comprehensive Quranic vocabulary</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Browse our extensive database of Quranic Arabic vocabulary with detailed meanings, examples, and
                context.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/vocabulary" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Explore Database <ArrowRight className="ml-2 h-4 w-4" />
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

          <Card>
            <CardHeader>
              <Volume2 className="h-8 w-8 text-emerald-600 mb-2" />
              <CardTitle>Pronunciation</CardTitle>
              <CardDescription>Learn correct Arabic pronunciation</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-300">
                Practice the correct pronunciation of Quranic Arabic words with audio guidance from expert reciters.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/pronunciation" className="w-full">
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Practice Pronunciation <ArrowRight className="ml-2 h-4 w-4" />
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
              <GamepadIcon className="h-8 w-8 text-emerald-600 mb-2" />
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
        </section>

        <AdvancedVocabularySection />

        <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 mb-12 mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Phase 4 Vocabulary Expansion Complete!</h2>
          <p className="text-center mb-6">
            We've reached our goal of 100 vocabulary words! Explore the new specialized theological and spiritual
            concepts.
          </p>
          <div className="flex justify-center">
            <Link href="/phase4-summary">
              <Button className="bg-emerald-600 hover:bg-emerald-700">View Phase 4 Summary</Button>
            </Link>
          </div>
        </section>

        <section className="bg-emerald-50 dark:bg-emerald-900/20 rounded-lg p-6 mb-12 mt-12">
          <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Why Learn Quranic Arabic?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Deeper Understanding</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Understanding the original language of the Quran allows for a more profound connection with its message
                and teachings.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Improved Recitation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Knowing the meaning behind the words enhances your recitation and helps you connect more deeply with the
                text.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Cultural Appreciation</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Arabic is a rich language with a deep cultural heritage. Learning it opens doors to understanding
                Islamic civilization.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Personal Growth</h3>
              <p className="text-gray-600 dark:text-gray-300">
                The discipline of learning a new language develops cognitive abilities and expands your worldview.
              </p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-xl md:text-2xl font-bold mb-4">Ready to Begin Your Journey?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/vocabulary">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                Explore Vocabulary
              </Button>
            </Link>
            <Link href="/word-lists">
              <Button size="lg" variant="outline">
                Create Word Lists
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-800 py-6">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            KALAM - Quran Vocabulary Learning App | Open Source Project
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Link href="/about" className="text-emerald-600 hover:text-emerald-700">
              About
            </Link>
            <Link href="/contribute" className="text-emerald-600 hover:text-emerald-700">
              Contribute
            </Link>
            <Link
              href="https://github.com/YOUR-ACTUAL-USERNAME/kalam"
              className="text-emerald-600 hover:text-emerald-700"
            >
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
