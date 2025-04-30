"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight } from "lucide-react"
import Link from "next/link"

export function Phase3Summary() {
  const [activeTab, setActiveTab] = useState("overview")
  const [openSection, setOpenSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    if (openSection === section) {
      setOpenSection(null)
    } else {
      setOpenSection(section)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-8">
        <CardHeader className="bg-emerald-50 dark:bg-emerald-900/20 border-b">
          <Badge className="mb-2 w-fit">Phase 3 Complete</Badge>
          <CardTitle className="text-2xl">Vocabulary Expansion - Phase 3</CardTitle>
          <CardDescription>
            Expanding the vocabulary database to 75 words with advanced theological and spiritual concepts
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="vocabulary">New Vocabulary</TabsTrigger>
              <TabsTrigger value="features">New Features</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-2">Phase 3 Expansion Summary</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Phase 3 of the vocabulary expansion has successfully increased our database to 75 words, with a focus
                  on advanced theological concepts, spiritual development terms, and specialized Islamic terminology.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Vocabulary Growth</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Initial vocabulary: 15 words</li>
                        <li>Phase 1 expansion: +15 words</li>
                        <li>Phase 2 expansion: +20 words</li>
                        <li>Phase 3 expansion: +25 words</li>
                        <li className="font-semibold">Total vocabulary: 75 words</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Key Improvements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Added advanced theological concepts</li>
                        <li>Created pre-defined word lists</li>
                        <li>Implemented root word explorer</li>
                        <li>Added advanced vocabulary section</li>
                        <li>Enhanced categorization system</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="flex justify-center">
                  <Link href="/vocabulary">
                    <Button className="bg-emerald-600 hover:bg-emerald-700">Explore Full Vocabulary</Button>
                  </Link>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="vocabulary" className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">New Vocabulary Added in Phase 3</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Phase 3 added 25 advanced words focusing on theological concepts, spiritual development, ethics, and
                specialized Islamic terminology.
              </p>

              <Collapsible
                open={openSection === "theological"}
                onOpenChange={() => toggleSection("theological")}
                className="mb-4"
              >
                <CollapsibleTrigger className="flex items-center w-full text-left font-medium p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  {openSection === "theological" ? (
                    <ChevronDown className="h-4 w-4 mr-2" />
                  ) : (
                    <ChevronRight className="h-4 w-4 mr-2" />
                  )}
                  Theological Concepts
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-l-2 border-emerald-500 ml-2 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <span className="font-arabic">تَوْحِيد</span> (Tawhid) - Monotheism, Oneness of God
                    </li>
                    <li>
                      <span className="font-arabic">شِرْك</span> (Shirk) - Polytheism, Associating partners with Allah
                    </li>
                    <li>
                      <span className="font-arabic">قَضَاء</span> (Qada) - Divine Decree, Judgment
                    </li>
                    <li>
                      <span className="font-arabic">قَدَر</span> (Qadar) - Divine Predestination, Fate
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={openSection === "spiritual"}
                onOpenChange={() => toggleSection("spiritual")}
                className="mb-4"
              >
                <CollapsibleTrigger className="flex items-center w-full text-left font-medium p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  {openSection === "spiritual" ? (
                    <ChevronDown className="h-4 w-4 mr-2" />
                  ) : (
                    <ChevronRight className="h-4 w-4 mr-2" />
                  )}
                  Spiritual Development
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-l-2 border-emerald-500 ml-2 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <span className="font-arabic">تَزْكِيَة</span> (Tazkiyah) - Purification, Self-improvement
                    </li>
                    <li>
                      <span className="font-arabic">تَفَكُّر</span> (Tafakkur) - Contemplation, Deep thinking
                    </li>
                    <li>
                      <span className="font-arabic">تَدَبُّر</span> (Tadabbur) - Pondering, Deep reflection
                    </li>
                    <li>
                      <span className="font-arabic">خُشُوع</span> (Khushu) - Humility, Reverence
                    </li>
                    <li>
                      <span className="font-arabic">رِضَا</span> (Rida) - Pleasure, Contentment
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={openSection === "ethical"}
                onOpenChange={() => toggleSection("ethical")}
                className="mb-4"
              >
                <CollapsibleTrigger className="flex items-center w-full text-left font-medium p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  {openSection === "ethical" ? (
                    <ChevronDown className="h-4 w-4 mr-2" />
                  ) : (
                    <ChevronRight className="h-4 w-4 mr-2" />
                  )}
                  Advanced Ethical Concepts
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-l-2 border-emerald-500 ml-2 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <span className="font-arabic">تَقْوَى</span> (Taqwa) - God-consciousness, Piety
                    </li>
                    <li>
                      <span className="font-arabic">إِخْلَاص</span> (Ikhlas) - Sincerity, Purity of intention
                    </li>
                    <li>
                      <span className="font-arabic">زُهْد</span> (Zuhd) - Asceticism, Detachment from worldly pleasures
                    </li>
                    <li>
                      <span className="font-arabic">أَمَانَة</span> (Amanah) - Trustworthiness, Faithfulness
                    </li>
                    <li>
                      <span className="font-arabic">عِفَّة</span> (Iffah) - Chastity, Modesty
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={openSection === "jurisprudential"}
                onOpenChange={() => toggleSection("jurisprudential")}
                className="mb-4"
              >
                <CollapsibleTrigger className="flex items-center w-full text-left font-medium p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  {openSection === "jurisprudential" ? (
                    <ChevronDown className="h-4 w-4 mr-2" />
                  ) : (
                    <ChevronRight className="h-4 w-4 mr-2" />
                  )}
                  Jurisprudential Terms
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-l-2 border-emerald-500 ml-2 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <span className="font-arabic">حَلَال</span> (Halal) - Permissible, Lawful
                    </li>
                    <li>
                      <span className="font-arabic">حَرَام</span> (Haram) - Forbidden, Prohibited
                    </li>
                    <li>
                      <span className="font-arabic">فَرْض</span> (Fard) - Obligation, Duty
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={openSection === "quranic"}
                onOpenChange={() => toggleSection("quranic")}
                className="mb-4"
              >
                <CollapsibleTrigger className="flex items-center w-full text-left font-medium p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  {openSection === "quranic" ? (
                    <ChevronDown className="h-4 w-4 mr-2" />
                  ) : (
                    <ChevronRight className="h-4 w-4 mr-2" />
                  )}
                  Quranic Sciences
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-l-2 border-emerald-500 ml-2 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <span className="font-arabic">آيَة</span> (Ayah) - Verse, Sign, Miracle
                    </li>
                    <li>
                      <span className="font-arabic">سُورَة</span> (Surah) - Chapter of the Quran
                    </li>
                    <li>
                      <span className="font-arabic">تَفْسِير</span> (Tafsir) - Exegesis, Interpretation
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>

              <Collapsible
                open={openSection === "societal"}
                onOpenChange={() => toggleSection("societal")}
                className="mb-4"
              >
                <CollapsibleTrigger className="flex items-center w-full text-left font-medium p-2 bg-gray-100 dark:bg-gray-800 rounded">
                  {openSection === "societal" ? (
                    <ChevronDown className="h-4 w-4 mr-2" />
                  ) : (
                    <ChevronRight className="h-4 w-4 mr-2" />
                  )}
                  Societal Concepts
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 border-l-2 border-emerald-500 ml-2 mt-2">
                  <ul className="space-y-2">
                    <li>
                      <span className="font-arabic">أُمَّة</span> (Ummah) - Community, Nation
                    </li>
                    <li>
                      <span className="font-arabic">شُورَى</span> (Shura) - Consultation, Deliberation
                    </li>
                  </ul>
                </CollapsibleContent>
              </Collapsible>
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">New Features Added in Phase 3</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Phase 3 introduced several new features to enhance the learning experience and make the app more useful
                for different types of learners.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Root Word Explorer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      A new tool that allows users to search for words by their Arabic root letters, helping them
                      understand word formation patterns and relationships between words.
                    </p>
                    <Link href="/vocabulary">
                      <Button variant="outline" size="sm" className="mt-2">
                        Try Root Word Explorer
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Advanced Vocabulary Section</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      A dedicated section on the home page showcasing advanced vocabulary words for users looking to
                      deepen their understanding of complex Islamic concepts.
                    </p>
                    <Link href="/">
                      <Button variant="outline" size="sm" className="mt-2">
                        View Advanced Section
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Pre-defined Word Lists</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Curated word lists organized by difficulty level, themes, and functional categories to help users
                      get started quickly with organized learning paths.
                    </p>
                    <Link href="/word-lists">
                      <Button variant="outline" size="sm" className="mt-2">
                        Browse Word Lists
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Enhanced Categorization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Expanded category system with new categories for theological concepts, spiritual development,
                      ethics, jurisprudence, and more.
                    </p>
                    <Link href="/vocabulary">
                      <Button variant="outline" size="sm" className="mt-2">
                        Explore Categories
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="categories" className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">Updated Categories</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Phase 3 expanded our categorization system to include new categories and updated existing ones to
                accommodate the advanced vocabulary.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">New Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Divine Will and Decree</li>
                      <li>Islamic Jurisprudence</li>
                      <li>Community and Society</li>
                      <li>Spiritual States</li>
                      <li>Quranic Sciences</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Updated Categories</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Ethics and Virtues (expanded)</li>
                      <li>Faith and Belief (expanded)</li>
                      <li>Worship and Devotion (expanded)</li>
                      <li>Knowledge and Wisdom (expanded)</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-2">Pre-defined Word Lists by Category</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <Badge variant="outline" className="p-2 justify-center">
                    Beginner's Essentials
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Intermediate Vocabulary
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Advanced Concepts
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Divine Names & Attributes
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Prophets & Messengers
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Ethics & Character
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Afterlife & Judgment
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Worship & Devotion
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Natural World
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Most Frequent Words
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Al-Fatihah Vocabulary
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Five Pillars of Islam
                  </Badge>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
