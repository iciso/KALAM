"use client"

import { useState } from "react"
import MakeQuranicAyatsGame from "@/components/make-quranic-ayats-game"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Info, ChevronRight, Eye, EyeOff } from "lucide-react"
import { toast } from "sonner"

export default function QuranicAyatsClient() {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy")
  const [ayatCount, setAyatCount] = useState(3)
  const [showTranslation, setShowTranslation] = useState(false)

  const handleDifficultyChange = (value: string) => {
    setDifficulty(value as "easy" | "medium" | "hard")
    toast.info(`Difficulty set to ${value}`, {
      description: "Starting new game with selected difficulty",
      duration: 1500
    })
  }

  const handleAyatCountChange = (count: number) => {
    setAyatCount(count)
    toast.info(`Set to ${count} ayahs per game`, {
      duration: 1500
    })
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-green-700 dark:text-green-500">Quranic Ayats Game</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" size="sm">
              <Info className="h-4 w-4 mr-2" /> How to Play
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>How to Play the Quranic Ayats Game</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <p className="text-sm">
                Arrange the Arabic words to form the correct Quranic verse. The game helps you learn Quranic verses 
                while practicing Arabic reading from right to left.
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Drag and drop words to rearrange them</li>
                <li>Double-click on a word to select it</li>
                <li>Check your answer when you think it's correct</li>
                <li>Higher difficulties give more points</li>
                <li>Complete all ayahs to finish the game</li>
              </ul>
              <p className="text-xs text-muted-foreground">
                Note: The game uses actual Quranic verses from the Mushaf.
              </p>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-lg">Game Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-3">Difficulty Level</h3>
              <Tabs 
                value={difficulty} 
                onValueChange={handleDifficultyChange}
                className="w-full"
              >
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="easy">Easy</TabsTrigger>
                  <TabsTrigger value="medium">Medium</TabsTrigger>
                  <TabsTrigger value="hard">Hard</TabsTrigger>
                </TabsList>
              </Tabs>
              <p className="text-sm text-muted-foreground mt-2">
                {difficulty === "easy" 
                  ? "Short verses with common words" 
                  : difficulty === "medium" 
                  ? "Medium length verses" 
                  : "Longer verses with complex arrangements"}
              </p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Number of Ayahs</h3>
              <div className="flex gap-2">
                {[3, 5, 7].map((count) => (
                  <Button
                    key={count}
                    variant={ayatCount === count ? "default" : "outline"}
                    onClick={() => handleAyatCountChange(count)}
                    className="flex-1"
                  >
                    {count}
                  </Button>
                ))}
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Number of verses to complete in one game session
              </p>
            </div>
          </div>

          <div className="mt-4 flex gap-2">
            <Button
              variant="secondary"
              onClick={() => setShowTranslation(!showTranslation)}
              className="flex-1"
            >
              {showTranslation ? (
                <>
                  <EyeOff className="mr-2 h-4 w-4" />
                  Hide Translation
                </>
              ) : (
                <>
                  <Eye className="mr-2 h-4 w-4" />
                  Show Translation
                </>
              )}
            </Button>
            <Button variant="ghost" className="flex-1">
              <ChevronRight className="mr-2 h-4 w-4" />
              Skip Ayah
            </Button>
          </div>
        </CardContent>
      </Card>

      <MakeQuranicAyatsGame 
        difficulty={difficulty} 
        initialAyatCount={ayatCount} 
      />
    </div>
  )
}
