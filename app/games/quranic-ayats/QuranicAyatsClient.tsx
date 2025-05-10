"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import MakeQuranicAyatsGame from "@/components/make-quranic-ayats-game"

export default function QuranicAyatsClient() {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy")

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-2 text-center">Make Quranic Ayats</h1>
      <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
        Arrange the words to form complete Quranic verses
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>How to Play</CardTitle>
          <CardDescription>Learn how to play the Make Quranic Ayats game</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-2">
            <li>Drag words from the Word Pool or click on them to add to your arrangement area.</li>
            <li>Arrange the words from right to left to form a complete Quranic verse.</li>
            <li>Click on words in your arrangement to send them back to the Word Pool.</li>
            <li>Click "Check Answer" to see if your arrangement is correct.</li>
            <li>Score points for each correctly arranged verse!</li>
          </ol>
          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-md">
            <strong>Tip:</strong> In hard mode, you'll need to arrange words across two lines.
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="easy" className="mb-8" onValueChange={(value) => setDifficulty(value as any)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="easy">Easy</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
          <TabsTrigger value="hard">Hard</TabsTrigger>
        </TabsList>
        <TabsContent value="easy">
          <Card>
            <CardHeader>
              <CardTitle>Easy Mode</CardTitle>
              <CardDescription>Arrange short verses with fewer words in a single line</CardDescription>
            </CardHeader>
            <CardContent>
              <MakeQuranicAyatsGame difficulty="easy" initialAyatCount={5} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="medium">
          <Card>
            <CardHeader>
              <CardTitle>Medium Mode</CardTitle>
              <CardDescription>Arrange medium-length verses with more words in a single line</CardDescription>
            </CardHeader>
            <CardContent>
              <MakeQuranicAyatsGame difficulty="medium" initialAyatCount={5} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hard">
          <Card>
            <CardHeader>
              <CardTitle>Hard Mode</CardTitle>
              <CardDescription>Arrange longer verses across two lines</CardDescription>
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
