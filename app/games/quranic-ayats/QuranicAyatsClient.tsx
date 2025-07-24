"use client"

import { useState, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import MakeQuranicAyatsGame from "@/components/make-quranic-ayats-game"

export default function QuranicAyatsClient() {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if mobile device
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    // Initial check
    checkIfMobile()
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile)
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return (
    <div className="container mx-auto px-4 py-4 md:py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">Make Quranic Ayats</h1>
      <p className="text-center mb-4 md:mb-8 text-gray-600 dark:text-gray-400 text-sm md:text-base">
        Arrange the words to form complete Quranic verses
      </p>

      <Card className="mb-4 md:mb-8">
        <CardHeader className="p-4 md:p-6">
          <CardTitle className="text-lg md:text-xl">How to Play</CardTitle>
          <CardDescription className="text-sm md:text-base">
            Learn how to play the Make Quranic Ayats game
          </CardDescription>
        </CardHeader>
        <CardContent className="p-4 md:p-6">
          <ol className="list-decimal list-inside space-y-2 text-sm md:text-base">
            <li>{isMobile ? "Tap and drag" : "Drag"} words from the Word Pool or tap/click on them to add to your arrangement area.</li>
            <li>Arrange the words from right to left to form a complete Quranic verse.</li>
            <li>Tap/click on words in your arrangement to send them back to the Word Pool.</li>
            <li>Tap/click "Check Answer" to see if your arrangement is correct.</li>
            <li>Score points for each correctly arranged verse!</li>
          </ol>
          <div className="mt-3 p-2 md:p-3 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-md text-sm md:text-base">
            <strong>Tip:</strong> In hard mode, you'll need to arrange words across two lines.
          </div>
        </CardContent>
      </Card>

      <Tabs 
        defaultValue="easy" 
        className="mb-4 md:mb-8" 
        onValueChange={(value) => setDifficulty(value as any)}
      >
        <TabsList className="grid w-full grid-cols-3 h-10 md:h-12">
          <TabsTrigger value="easy" className="text-xs md:text-sm">Easy</TabsTrigger>
          <TabsTrigger value="medium" className="text-xs md:text-sm">Medium</TabsTrigger>
          <TabsTrigger value="hard" className="text-xs md:text-sm">Hard</TabsTrigger>
        </TabsList>
        <TabsContent value="easy">
          <Card>
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-lg md:text-xl">Easy Mode</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Arrange short verses with fewer words in a single line
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 md:p-6">
              <MakeQuranicAyatsGame difficulty="easy" initialAyatCount={5} isMobile={isMobile} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="medium">
          <Card>
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-lg md:text-xl">Medium Mode</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Arrange medium-length verses with more words in a single line
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 md:p-6">
              <MakeQuranicAyatsGame difficulty="medium" initialAyatCount={5} isMobile={isMobile} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hard">
          <Card>
            <CardHeader className="p-4 md:p-6">
              <CardTitle className="text-lg md:text-xl">Hard Mode</CardTitle>
              <CardDescription className="text-sm md:text-base">
                Arrange longer verses across two lines
              </CardDescription>
            </CardHeader>
            <CardContent className="p-2 md:p-6">
              <MakeQuranicAyatsGame difficulty="hard" initialAyatCount={5} isMobile={isMobile} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
