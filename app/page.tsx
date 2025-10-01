import Link from "next/link"
import { ArrowRight, BookOpen, Award, Beaker, CircleHelp, BookHeart, Bookmark, Briefcase, Album, Bitcoin, Database, ListPlus, MessageSquare, Route, Star, ShieldQuestion, Trophy, Users, Milestone, CheckSquare, Clock, Gamepad2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { VocabularyStats } from "@/components/vocabulary-stats"
import { Badge } from "@/components/ui/badge"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              <p><span className="text-blue-600 dark:text-blue-400">K</span>{" "}
              <span className="text-green-600 dark:text-green-400">A</span>{" "}
              <span className="text-purple-600 dark:text-purple-400">L</span>{" "}
              <span className="text-orange-600 dark:text-orange-400">A</span>{" "}
              <span className="text-red-600 dark:text-red-400">M</span>{" "} is an Open Source Freeware for learning Islam by fun and Games</p>
            </Badge>
            
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              <p><span className="text-green-600 dark:text-green-400">IQRA</span>{" "} is an Open Source Freeware for learning Islam by Quiz challenges</p>
              </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="text-blue-600 dark:text-blue-400">K</span>now{" "}
              <span className="text-green-600 dark:text-green-400">A</span>llah by{" "}
              <span className="text-purple-600 dark:text-purple-400">L</span>ighting up{" "}
              <span className="text-orange-600 dark:text-orange-400">A</span>ctivities of{" "}
              <span className="text-red-600 dark:text-red-400">M</span>irth
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the joy of learning the word of Allah (KALAM) through games, interactive timelines, and with fun activities
              rather than rote learning.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="/games">
                <Gamepad2 className="mr-2 h-5 w-5" />
                Play Games
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
              <Link href="/vocabulary">
                <BookOpen className="mr-2 h-5 w-5" />
                Start Learning
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <main className="flex-1 container mx-auto px-4 py-8">
        {/* 1. Featured Games Section - Top Priority */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center justify-center space-x-2"><Gamepad2 className="h-6 w-6 text-black-600 mb-2" />{" "}Featured Games</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Barzaq Game */}
            <Card className="border-indigo-200 bg-indigo-50 dark:bg-indigo-950 dark:border-indigo-800">
              <CardHeader>
                <Award className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-indigo-800 dark:text-indigo-200">Barzaq Game</CardTitle>
                <CardDescription>Learn about the intermediate state after death</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
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
            <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950 dark:border-purple-800">
              <CardHeader>
             <BookHeart className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-purple-800 dark:text-purple-200">Make Quranic Ayats</CardTitle>
                <CardDescription>Arrange words to form Quranic verses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
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
            <Card className="border-emerald-200 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-800">
              <CardHeader>
                 <Beaker className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-emerald-800 dark:text-emerald-200">Memory Match</CardTitle>
                <CardDescription>Match Arabic words with their meanings</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Improve your memory and vocabulary by matching Arabic words with their English translations.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/games/memory" className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Play Now</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Islamic Finance Game */}
            <Card className="border-teal-200 bg-teal-50 dark:bg-teal-950 dark:border-teal-800">
              <CardHeader>
                <Bitcoin className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-teal-800 dark:text-teal-200">Islamic Finance Game</CardTitle>
                <CardDescription>Learn Islamic financial ethics through scenarios</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Navigate ethical financial decisions and learn Islamic principles through interactive scenarios and
                  choices.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="https://isfin.vercel.app/" target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button className="w-full bg-teal-600 hover:bg-teal-700">Begin Journey</Button>
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
                See all 15 games <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>

        {/* 2. Surah Quizzes Section */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center justify-center space-x-2"><ShieldQuestion className="h-8 w-8 text-orange-600" />{" "}Surah Quizzes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Al-Fatiha Quiz */}
            <Card className="border-emerald-200 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-800">
              <CardHeader>
                <Bookmark className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-emerald-800 dark:text-emerald-200">Al-Fatiha Quiz</CardTitle>
                <CardDescription>Test your knowledge on the Opening Surah of the Noble Quran</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Comprehensive quiz covering the Opening Surah of the Noble Quran in a single session.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quizzes/surah/1" className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Al-Fatiha Quiz</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* An-Nas Quiz */}
            <Card className="border-blue-200 bg-blue-50 dark:bg-blue-950 dark:border-blue-800">
              <CardHeader>
                <BookOpen className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-blue-800 dark:text-blue-200">Surah An-Nas Quiz</CardTitle>
                <CardDescription>Focus on quizzes from Surah An-Nas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Test your knowledge and vocabulary from the last chapter: Surah An-Nas.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quizzes/surah/114" className="w-full">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Start An-Nas Quiz</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Al-Falaq Quiz */}
            <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950 dark:border-purple-800">
              <CardHeader>
                <CircleHelp className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-purple-800 dark:text-purple-200">Surah Al-Falaq</CardTitle>
                <CardDescription>Test your knowledge and vocabulary of Surah Al-Falaq.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Learn vocabulary, related hadeeth, tafsir and reasons for revealation of Surah Al-Falaq.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quizzes/surah/113" className="w-full">
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">Start Al-Falaq Quiz</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Al-Ikhlas Quiz */}
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-800">
              <CardHeader>
                 <Star className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-amber-800 dark:text-amber-200 relative">
                  Al-Ikhlas Quiz
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </span>
                </CardTitle>
                <CardDescription>A comprehensive Quiz of Surah Al-Ikhlas</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Challenge yourself by testing your knowledge of Surah Al-Ikhlas.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quizzes/surah/112" className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Start Al-Ikhlas Quiz</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-6">
  {/* See All Quran Quizzes Buttons */}
</div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="https://ichal.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Trophy className="mr-2 h-5 w-5" />
                Visit IQRA App
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
               <Link href="/quizzes/surah">
                <CheckSquare className="mr-2 h-5 w-5" />
                See All Surah Quizzes
              </Link>
            </Button>
          </div>
      </section>


                 {/* 3. Other Quizzes Section */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center justify-center space-x-2"><ShieldQuestion className="h-8 w-8 text-orange-600" />{" "}Other Quizzes</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* General Quiz */}
            <Card className="border-emerald-200 bg-emerald-50 dark:bg-emerald-950 dark:border-emerald-800">
              <CardHeader>
                <Bookmark className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-emerald-800 dark:text-emerald-200">General Quiz</CardTitle>
                <CardDescription>Test your knowledge of vocabulary words</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Comprehensive quiz covering 400 words from the Quranic dictionary in multiple sessions.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quizzes" className="w-full">
                  <Button className="w-full bg-emerald-600 hover:bg-emerald-700">Start Quiz</Button>
                </Link>
              </CardFooter>
            </Card>

            {/* Category Quiz */}
            <Card className="border-purple-200 bg-purple-50 dark:bg-purple-950 dark:border-purple-800">
              <CardHeader>
                <CircleHelp className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-purple-800 dark:text-purple-200">Category Quiz</CardTitle>
                <CardDescription>Organized by themes and categories</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
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
            <Card className="border-amber-200 bg-amber-50 dark:bg-amber-950 dark:border-amber-800">
              <CardHeader>
                 <Star className="h-6 w-6 text-blue-600 mb-2" />
                <CardTitle className="text-amber-800 dark:text-amber-200 relative">
                  Reverse Word Quiz
                  <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    NEW
                  </span>
                </CardTitle>
                <CardDescription>English meanings to Arabic words</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Challenge yourself by selecting the correct Arabic word from English meanings.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/quizzes/reverse" className="w-full">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700">Start Reverse Quiz</Button>
                </Link>
              </CardFooter>
            </Card>


             {/* Hijra Journey Quiz Card */}
          <Card className="border-orange-200 bg-orange-50">
            <CardHeader>
              <CardTitle className="text-orange-800 flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Hijra Journey Quiz
                <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  NEW
                </span>
              </CardTitle>
              <CardDescription>The Prophet's migration from Mecca to Medina</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400">
                Key events, locations, and Quranic references.
              </p>
            </CardContent>
            <CardFooter>
              <Link href="/hijra/quiz" className="w-full">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <MapPin className="mr-2 h-4 w-4" />
                  Start Hijra Quiz
                </Button>
              </Link>
            </CardFooter>
          </Card>
          </div>

         <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 mt-6">
  {/* See All Quizzes Buttons */}
</div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button asChild size="lg" className="text-lg px-8 py-3">
              <Link href="https://ichal.vercel.app/" target="_blank" rel="noopener noreferrer">
                <Trophy className="mr-2 h-5 w-5" />
                Visit IQRA App
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8 py-3">
               <Link href="/quizzes">
                <CheckSquare className="mr-2 h-5 w-5" />
                See All Quizzes
              </Link>
            </Button>
          </div>
      </section>



        {/* 3. Timelines that are Lifelines! */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-6 flex items-center justify-center space-x-2">
  <Milestone className="h-8 w-8 text-orange-600" /> Timelines that are Lifelines!</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <Route className="h-8 w-8 text-orange-600 mb-2" />
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
                <Briefcase className="h-8 w-8 text-purple-600 mb-2" />
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

        <section className="mb-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Learn Quranic Arabic Vocabulary</h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
            Enhance your understanding of the Quran through interactive learning tools designed to help you master
            Arabic vocabulary.
          </p>
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
                <CardTitle>Grammar</CardTitle>
                <CardDescription>Learn verbs with easy interactive method</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Start the study of Quranic grammar with conjugation of three letter verbs from their context in the Quran.
                </p>
              </CardContent>
              <CardFooter>
                <Link href="/verb-conjugation" className="w-full">
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

            {/* No Charity Section */}
           <section className="mb-12">
       <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h2 className="text-2xl text-emerald-800 dark:text-emerald-300 font-bold mb-4">No Donations & Charity</h2>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            IQRA and KALAM apps are built without charity, zakat, or donations – a practice aligned with the true Sunnah of the Noble Prophets, and the Righteous.
          </p>
           <p className="mb-4 text-emerald-600 dark:text-emerald-300 text-3xl">
            قُلْ مَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ وَمَا أَنَا مِنَ الْمُتَكَلِّفِينَ
            </p>
             <p className="mb-4 text-emerald-600 dark:text-emerald-300">
          Say, "I do not ask you for this any payment, and I am not of the pretentious - Surah Sad 38:86. 
          </p>
       </div>
        </section>
      </main>

            {/* Footer Section */}
      <footer className="border-t border-green-200 p-4 sm:p-6 text-center text-sm text-green-800 bg-green-50 dark:bg-green-900/20 dark:border-green-700/30 dark:text-green-300 w-screen mt-8 mx-0">
       <div className="flex items-center justify-center mb-2 sm:mb-3">
            <MessageSquare className="h-4 w-4 sm:h-5 sm:w-5 mr-1 text-green-600 dark:text-green-400" />
            <span>
              For suggestions, WhatsApp{" "}
              <a
                href="https://cvemrafi.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300 underline"
              >
                Rafique
              </a>{" "}
              at +91 7558845528
            </span>
             </div>
          <div className="flex justify-center space-x-4 mt-4">
            <svg
              viewBox="0 0 496.08 512"
              className="h-4 w-4 sm:h-5 sm:w-5 mr-1 text-green-600 dark:text-green-400"
            >
              <path
                fill="currentColor"
                d="M245.83 214.87l-33.22 17.28c-9.43-19.58-25.24-19.93-27.46-19.93-22.13 0-33.22 14.61-33.22 43.84 0 23.57 9.21 43.84 33.22 43.84 14.47 0 24.65-7.09 30.57-21.26l30.55 15.5c-6.17 11.51-25.69 38.98-65.1 38.98-22.6 0-73.96-10.32-73.96-77.05 0-58.69 43-77.06 72.63-77.06 30.72-.01 52.7 11.95 65.99 35.86zm143.05 0l-32.78 17.28c-9.5-19.77-25.72-19.93-27.9-19.93-22.14 0-33.22 14.61-33.22 43.84 0 23.55 9.23 43.84 33.22 43.84 14.45 0 24.65-7.09 30.54-21.26l31 15.5c-2.1 3.75-21.39 38.98-65.09 38.98-22.69 0-73.96-9.87-73.96-77.05 0-58.67 42.97-77.06 72.63-77.06 30.71-.01 52.58 11.95 65.56 35.86zM247.56 8.05C104.74 8.05 0 123.11 0 256.05c0 138.49 113.6 248 247.56 248 129.93 0 248.44-100.87 248.44-248 0-137.87-106.62-248-248.44-248zm.87 450.81c-112.54 0-203.7-93.04-203.7-202.81 0-105.42 85.43-203.27 203.72-203.27 112.53 0 202.82 89.46 202.82 203.26-.01 121.69-99.68 202.82-202.84 202.82z"
              />
            </svg>
      
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
              >
                License 4.0
              </a>
            <Link href="/about" className="text-emerald-600 hover:text-emerald-700">
              About
            </Link>
            <Link href="/contribute" className="text-emerald-600 hover:text-emerald-700">
              Contribute
            </Link>
            <Link href="https://github.com/iciso/KALAM" className="text-emerald-600 hover:text-emerald-700">
              GitHub
            </Link>{" "}
                <a
                href="/about"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 hover:text-green-900 dark:text-green-400 dark:hover:text-green-300"
              >
                • Iqra 💡 Team AI
              </a>
               
            
        </div>
      </footer>
    </div>
  )
}
