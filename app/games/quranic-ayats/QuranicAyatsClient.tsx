"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import MakeQuranicAyatsGame from "@/components/make-quranic-ayats-game"

export default function QuranicAyatsClient() {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy")

  return (
    <div className="container max-w-screen-md mx-auto px-4 py-6 sm:py-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center">Make Quranic Ayats</h1>
      <p className="text-center mb-6 text-gray-600 dark:text-gray-400 text-sm sm:text-base">
        Arrange the words to form complete Quranic verses
      </p>

      <Card className="mb-6 sm:mb-8">
        <CardHeader>
          <CardTitle className="text-lg sm:text-xl">How to Play</CardTitle>
          <CardDescription>Learn how to play the Make Quranic Ayats game</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2 text-sm sm:text-base">
            <li>Tap or drag words from the Word Pool into your arrangement area.</li>
            <li>Arrange words from right to left to match the verse correctly.</li>
            <li>Tap on arranged words to remove them.</li>
            <li>Tap "Check Answer" to verify your arrangement.</li>
            <li>Earn points for each correct verse!</li>
          </ol>
          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-md text-sm sm:text-base">
            <strong>Tip:</strong> In hard mode, you may need to arrange two lines.
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="easy" className="mb-6" onValueChange={(value) => setDifficulty(value as any)}>
        <TabsList className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4">
          <TabsTrigger value="easy" className="text-sm sm:text-base">Easy</TabsTrigger>
          <TabsTrigger value="medium" className="text-sm sm:text-base">Medium</TabsTrigger>
          <TabsTrigger value="hard" className="text-sm sm:text-base">Hard</TabsTrigger>
        </TabsList>

        <TabsContent value="easy">
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Easy Mode</CardTitle>
              <CardDescription>Short verses with fewer words</CardDescription>
            </CardHeader>
            <CardContent>
              <MakeQuranicAyatsGame difficulty="easy" initialAyatCount={5} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="medium">
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Medium Mode</CardTitle>
              <CardDescription>Medium-length verses, single line</CardDescription>
            </CardHeader>
            <CardContent>
              <MakeQuranicAyatsGame difficulty="medium" initialAyatCount={5} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hard">
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Hard Mode</CardTitle>
              <CardDescription>Longer verses, may span two lines</CardDescription>
            </CardHeader>
            <CardContent>
              <MakeQuranicAyatsGame difficulty="hard" initialAyatCount={5} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
