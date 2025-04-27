"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { vocabularyService } from "../services/vocabulary-service"
import Link from "next/link"

export function Phase4Summary() {
  const [activeTab, setActiveTab] = useState("overview")
  const [totalWords, setTotalWords] = useState(0)
  const [phase4Words, setPhase4Words] = useState(0)
  const [categoriesCount, setCategoriesCount] = useState(0)
  const [predefinedListsCount, setPredefinedListsCount] = useState(0)

  useEffect(() => {
    setTotalWords(vocabularyService.getTotalWordCount())
    setPhase4Words(vocabularyService.getPhase4Words().length)
    setCategoriesCount(vocabularyService.getAllCategories().length)
    setPredefinedListsCount(vocabularyService.getAllPredefinedLists().length)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="mb-8">
        <CardHeader className="bg-emerald-50 dark:bg-emerald-900/20 border-b">
          <Badge className="mb-2 w-fit">Phase 4 Complete</Badge>
          <CardTitle className="text-2xl">Vocabulary Expansion - Phase 4</CardTitle>
          <CardDescription>
            Expanding the vocabulary database to 100 words with specialized theological and spiritual concepts
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
                <h3 className="text-lg font-semibold mb-2">Phase 4 Expansion Summary</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Phase 4 of the vocabulary expansion has successfully increased our database to 100 words, with a focus
                  on specialized theological concepts, spiritual purification, and advanced Islamic terminology.
                </p>

                <div className="mb-6">
                  <h4 className="text-md font-medium mb-2">Vocabulary Growth</h4>
                  <Progress value={100} className="h-3 mb-2" />
                  <div className="grid grid-cols-4 text-center text-sm">
                    <div>
                      <div className="font-semibold">Phase 1</div>
                      <div>30 words</div>
                    </div>
                    <div>
                      <div className="font-semibold">Phase 2</div>
                      <div>50 words</div>
                    </div>
                    <div>
                      <div className="font-semibold">Phase 3</div>
                      <div>75 words</div>
                    </div>
                    <div>
                      <div className="font-semibold">Phase 4</div>
                      <div>100 words</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Key Statistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex justify-between">
                          <span>Total vocabulary:</span>
                          <span className="font-semibold">{totalWords} words</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Added in Phase 4:</span>
                          <span className="font-semibold">{phase4Words} words</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Total categories:</span>
                          <span className="font-semibold">{categoriesCount}</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Predefined lists:</span>
                          <span className="font-semibold">{predefinedListsCount}</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">Key Improvements</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Added specialized theological concepts</li>
                        <li>Expanded spiritual purification vocabulary</li>
                        <li>Added Quranic narrative terminology</li>
                        <li>Created new thematic word lists</li>
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
              <h3 className="text-lg font-semibold mb-2">New Vocabulary Added in Phase 4</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Phase 4 added 25 specialized words focusing on Quranic narratives, cosmology, spiritual purification,
                and advanced theological concepts.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Quranic Narratives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-arabic">قَصَص</span> (Qasas) - Stories, Narratives
                      </li>
                      <li>
                        <span className="font-arabic">عِبْرَة</span> (Ibrah) - Lesson, Moral
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Cosmology and Creation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-arabic">عَرْش</span> (Arsh) - Throne, Divine Throne
                      </li>
                      <li>
                        <span className="font-arabic">كُرْسِيّ</span> (Kursi) - Footstool, Pedestal
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Spiritual Purification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-arabic">تَوَكُّل</span> (Tawakkul) - Reliance on Allah
                      </li>
                      <li>
                        <span className="font-arabic">مُحَاسَبَة</span> (Muhasabah) - Self-reckoning
                      </li>
                      <li>
                        <span className="font-arabic">مُجَاهَدَة</span> (Mujahadah) - Spiritual struggle
                      </li>
                      <li>
                        <span className="font-arabic">تَزْكِيَة</span> (Tazkiyah) - Purification
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Divine Attributes</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-arabic">رَحْمَة</span> (Rahmah) - Mercy, Compassion
                      </li>
                      <li>
                        <span className="font-arabic">عَدْل</span> (Adl) - Justice, Fairness
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Eschatology</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-arabic">بَرْزَخ</span> (Barzakh) - Intermediate state after death
                      </li>
                      <li>
                        <span className="font-arabic">شَفَاعَة</span> (Shafa'ah) - Intercession
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Spiritual Ailments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-arabic">غَفْلَة</span> (Ghaflah) - Heedlessness
                      </li>
                      <li>
                        <span className="font-arabic">كِبْر</span> (Kibr) - Arrogance, Pride
                      </li>
                      <li>
                        <span className="font-arabic">حَسَد</span> (Hasad) - Envy, Jealousy
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Quranic Sciences</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-arabic">تَجْوِيد</span> (Tajweed) - Proper Quran recitation
                      </li>
                      <li>
                        <span className="font-arabic">تَدْبُّر</span> (Tadabbur) - Contemplation of Quran
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-md">Jurisprudence</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      <li>
                        <span className="font-arabic">فِقْه</span> (Fiqh) - Understanding, Islamic law
                      </li>
                      <li>
                        <span className="font-arabic">حُكْم</span> (Hukm) - Judgment, Ruling
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="features" className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">New Features Added in Phase 4</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Phase 4 introduced several new features to enhance the learning experience and provide more specialized
                study paths.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">New Thematic Word Lists</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Five new specialized word lists focusing on spiritual purification, Quranic sciences, cosmology,
                      narratives, and spiritual ailments.
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
                      Added new categories for Quranic narratives, cosmology, spiritual purification, and spiritual
                      ailments to better organize the expanded vocabulary.
                    </p>
                    <Link href="/vocabulary">
                      <Button variant="outline" size="sm" className="mt-2">
                        Explore Categories
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Vocabulary Statistics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Enhanced statistics dashboard showing vocabulary distribution by category, difficulty level, and
                      frequency in the Quran.
                    </p>
                    <Link href="/vocabulary">
                      <Button variant="outline" size="sm" className="mt-2">
                        View Statistics
                      </Button>
                    </Link>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Related Words Explorer</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Improved related words functionality to show connections between words with the same root or
                      related meanings.
                    </p>
                    <Link href="/vocabulary">
                      <Button variant="outline" size="sm" className="mt-2">
                        Explore Related Words
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="categories" className="space-y-4">
              <h3 className="text-lg font-semibold mb-2">New Categories</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Phase 4 added several new categories to better organize the specialized vocabulary.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Quranic Narratives</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Terms related to stories, lessons, and narratives in the Quran, helping users understand the
                      storytelling aspects of Quranic discourse.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Cosmology and Creation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Terms related to the universe, divine creation, and cosmic elements as described in the Quran and
                      Islamic tradition.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Spiritual Purification</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Terms related to self-improvement, spiritual growth, and purification of the soul, central
                      concepts in Islamic spirituality.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">Spiritual Ailments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 dark:text-gray-300">
                      Terms describing spiritual diseases and negative traits that hinder spiritual growth, important
                      for understanding ethical development.
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-6">
                <h4 className="font-medium mb-2">New Pre-defined Word Lists</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  <Badge variant="outline" className="p-2 justify-center">
                    Spiritual Purification
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Spiritual Ailments
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Quranic Sciences
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Islamic Cosmology
                  </Badge>
                  <Badge variant="outline" className="p-2 justify-center">
                    Quranic Narratives
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
