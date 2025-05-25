import Link from "next/link"
import { ArrowRight, BookOpen, Database, ListPlus, Users, Clock } from "lucide-react"

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

        {/* 1. Featured Games Section - Top Priority */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">🎮 Featured Games</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Barzaq Game */}
            <Card className="border-indigo-200 bg-indigo-50">
              <CardHeader>
                <CardTitle className="text-indigo-800">Barzaq Game</CardTitle>
                <CardDescription>Learn about the intermediate state after death</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Explore the concept of Barzaq through an interactive educational game based on Islamic teachings.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://v0-barzaq.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Play Now</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Make Quranic Ayats */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <CardTitle className="text-purple-800">Make Quranic Ayats</CardTitle>
                <CardDescription>Arrange words to form Quranic verses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Test your knowledge by arranging Arabic words in the correct order to form complete ayats.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/games/quranic-ayats" className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Play Now</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Memory Match */}
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-emerald-800">Memory Match</CardTitle>
                <CardDescription>Match Arabic words with their meanings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Improve your memory and vocabulary by matching Arabic words with their English translations.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/games/memory" className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Play Now</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Hangman */}
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <CardTitle className="text-amber-800">Hangman</CardTitle>
                <CardDescription>Guess the Arabic word letter by letter</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Test your vocabulary knowledge by guessing Arabic words one letter at a time.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/games/hangman" className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Play Now</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* See All Games Button */}
          <div className="text-center mt-8">
            <Link href="/games">
              <Button
                variant="outline"
                size="lg"
                className="text-emerald-600 hover:text-emerald-700 border-emerald-600 hover:border-emerald-700"
              >
                See all 12 games <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* 2. Quizzes Section */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">✅ Quizzes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* General Quiz */}
            <Card className="border-emerald-200 bg-emerald-50">
              <CardHeader>
                <CardTitle className="text-emerald-800">General Quiz</CardTitle>
                <CardDescription>Test your knowledge of vocabulary words</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Comprehensive quiz covering 400 words from the Quranic dictionary in multiple sessions.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quizzes" className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Quiz</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Surah-Specific Quiz */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <BookOpen className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-blue-800">Surah-Specific Quiz</CardTitle>
                <CardDescription>Focus on vocabulary from specific Surahs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Test your knowledge of vocabulary from individual chapters of the Quran.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quizzes/surah" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Browse Surahs</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Category Quiz */}
            <Card className="border-purple-200 bg-purple-50">
              <CardHeader>
                <div className="h-6 w-6 text-purple-600 mb-2 text-xl">🏷️</div>
                <CardTitle className="text-purple-800">Category Quiz</CardTitle>
                <CardDescription>Organized by themes and categories</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Learn vocabulary organized by categories like divine attributes, prophets, ethics, and more.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quizzes/categories" className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Browse Categories</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Reverse Word Quiz */}
            <Card className="border-amber-200 bg-amber-50">
              <CardHeader>
                <div className="h-6 w-6 text-amber-600 mb-2 text-xl">🔄</div>
                <CardTitle className="text-amber-800 relative">
                  Reverse Word Quiz
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </span>
                </CardTitle>
                <CardDescription>English meanings to Arabic words</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Challenge yourself by selecting the correct Arabic word from English meanings.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quizzes/reverse" className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Start Reverse Quiz</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          {/* See All Quizzes Button */}
          <div className="text-center mt-8">
            <Link href="/quizzes">
              <Button
                variant="outline"
                size="lg"
                className="text-emerald-600 hover:text-emerald-700 border-emerald-600 hover:border-emerald-700"
              >
                See all quizzes <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* 3. Additional Interactive Learning Section */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">📝 Additional Interactive Learning</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Clock className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Hijra Journey</CardTitle>
                <CardDescription>Explore the Prophet's migration from Mecca to Medina</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Discover the historic journey of Prophet Muhammad (PBUH) with interactive maps and historical context.
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
                <div className="h-8 w-8 text-amber-600 mb-2 text-2xl">🕋</div>
                <CardTitle>Hajj Tamattu Journey</CardTitle>
                <CardDescription>Experience the complete pilgrimage journey</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Follow the sacred pilgrimage steps with interactive guidance through Umrah and Hajj rituals.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://tamatu.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">
                    Begin Pilgrimage <ArrowRight className="ml-2 h-4 w-4" />
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
                  Explore the stories and attributes of the prophets mentioned in the Quran and their significance.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/prophets" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Explore Prophets <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* 4. Reference & Study Tools Section */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-6 text-center">📚 Reference & Study Tools</h3>

          {/* Vocabulary Statistics */}
          <div className="mb-8">
            <VocabularyStats />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </section>
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
