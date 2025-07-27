"use client"

import { useState, useEffect } from "react"
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core"
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, RefreshCw, Award, HelpCircle, Info } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { toast } from "sonner"

interface AyatWord {
  id: string
  text: string
}

interface QuranicAyat {
  surah: string
  ayat: string
  words: AyatWord[]
  translation: string
}

// Default data
const defaultGameData = {
  easy: [
    {
      surah: "Al-Fatiha",
      ayat: "1",
      words: [
        { id: "1-1", text: "بسم" },
        { id: "1-2", text: "الله" },
        { id: "1-3", text: "الرحمن" },
        { id: "1-4", text: "الرحيم" }
      ],
      translation: "In the name of Allah, the Entirely Merciful, the Especially Merciful."
    },
    {
      surah: "Al-Fatiha",
      ayat: "2",
      words: [
        { id: "2-1", text: "الحمد" },
        { id: "2-2", text: "لله" },
        { id: "2-3", text: "رب" },
        { id: "2-4", text: "العالمين" }
      ],
      translation: "[All] praise is [due] to Allah, Lord of the worlds"
    }
  ],
  medium: [
    {
      surah: "Al-Baqarah",
      ayat: "255",
      words: [
        { id: "m1-1", text: "الله" },
        { id: "m1-2", text: "لا" },
        { id: "m1-3", text: "إله" },
        { id: "m1-4", text: "إلا" },
        { id: "m1-5", text: "هو" }
      ],
      translation: "Allah - there is no deity except Him"
    }
  ],
  hard: [
    {
      surah: "Al-Baqarah",
      ayat: "186",
      words: [
        { id: "h1-1", text: "وإذا" },
        { id: "h1-2", text: "سألك" },
        { id: "h1-3", text: "عبادي" },
        { id: "h1-4", text: "عني" }
      ],
      translation: "And when My servants ask you concerning Me"
    }
  ]
}

const getRandomAyats = (count: number, difficulty: "easy" | "medium" | "hard"): QuranicAyat[] => {
  const ayats = defaultGameData[difficulty] || defaultGameData.easy
  return ayats.slice(0, Math.min(count, ayats.length))
}

function SortableItem({ id, word, onDoubleClick }: { id: string; word: string; onDoubleClick?: () => void }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onDoubleClick={onDoubleClick}
      className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md p-3 m-1 cursor-grab shadow-sm hover:shadow-md transition-shadow font-arabic text-xl text-center min-w-[80px] select-none"
      title="Drag to rearrange or double-click to select"
    >
      {word}
    </div>
  )
}

function MakeQuranicAyatsGame({ difficulty = "easy", initialAyatCount = 3 }: { 
  difficulty?: "easy" | "medium" | "hard"; 
  initialAyatCount?: number 
}) {
  const [ayats, setAyats] = useState<QuranicAyat[]>([])
  const [currentAyatIndex, setCurrentAyatIndex] = useState(0)
  const [words, setWords] = useState<AyatWord[]>([])
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)
  const [showTranslation, setShowTranslation] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [showInstructions, setShowInstructions] = useState(true)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  useEffect(() => {
    const randomAyats = getRandomAyats(initialAyatCount, difficulty)
    setAyats(randomAyats)
    if (randomAyats.length > 0) {
      prepareAyat(randomAyats[0])
    }
  }, [difficulty, initialAyatCount])

  const prepareAyat = (ayat: QuranicAyat) => {
    const shuffledWords = [...ayat.words].sort(() => Math.random() - 0.5)
    setWords(shuffledWords)
    setFeedback("")
    setIsCorrect(false)
    setShowTranslation(false)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    if (!over) return

    if (active.id !== over.id) {
      setWords((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)
        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  const checkAnswer = () => {
    const currentAyat = ayats[currentAyatIndex]
    const isCorrectOrder = words.every((word, index) => 
      word.id === currentAyat.words[index].id
    )

    if (isCorrectOrder) {
      const difficultyMultiplier = difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3
      setScore(score + 10 * difficultyMultiplier)
      setFeedback("Excellent! You arranged the ayat correctly.")
      setIsCorrect(true)
      setShowTranslation(true)
      toast.success("Correct! Well done.")
    } else {
      setFeedback("The arrangement is not correct. Try again!")
      setIsCorrect(false)
      toast.error("Not quite right. Try rearranging the words.")
    }
  }

  const nextAyat = () => {
    if (currentAyatIndex < ayats.length - 1) {
      const nextIndex = currentAyatIndex + 1
      setCurrentAyatIndex(nextIndex)
      prepareAyat(ayats[nextIndex])
    } else {
      setGameCompleted(true)
      toast.success("Masha'Allah! You've completed all ayahs.")
    }
  }

  const restartGame = () => {
    const randomAyats = getRandomAyats(initialAyatCount, difficulty)
    setAyats(randomAyats)
    setCurrentAyatIndex(0)
    setScore(0)
    setGameCompleted(false)
    if (randomAyats.length > 0) {
      prepareAyat(randomAyats[0])
    }
    toast.info("Game reset. Words have been reshuffled.")
  }

  if (gameCompleted) {
    return (
      <div className="flex flex-col items-center justify-center p-6 space-y-6">
        <div className="text-4xl font-bold text-green-600 flex items-center">
          <Award className="mr-2 h-10 w-10" />
          Game Completed!
        </div>
        <Card className="w-full max-w-md p-6 text-center">
          <CardHeader>
            <CardTitle className="text-2xl font-bold mb-4">Your Final Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-5xl font-bold text-green-600 mb-6">{score}</p>
            <p className="mb-4">You successfully arranged {ayats.length} Quranic ayats!</p>
            <Button onClick={restartGame} className="w-full">
              <RefreshCw className="mr-2 h-4 w-4" /> Play Again
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (ayats.length === 0) {
    return <div className="text-center py-8">Loading ayats...</div>
  }

  const currentAyat = ayats[currentAyatIndex]

  return (
    <div className="flex flex-col space-y-6 p-4">
      <div className="flex justify-between items-center">
        <div>
          <Badge variant="outline" className="text-lg">
            Surah {currentAyat.surah}, Ayat {currentAyat.ayat}
          </Badge>
          <Badge
            className={`ml-2 ${
              difficulty === "easy" ? "bg-green-500" : 
              difficulty === "medium" ? "bg-yellow-500" : "bg-red-500"
            }`}
          >
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
        <div className="text-xl font-bold">Score: {score}</div>
      </div>

      {showInstructions && (
        <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <CardContent>
            <div className="flex items-start">
              <Info className="h-5 w-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0" />
              <div>
                <CardTitle className="font-medium text-blue-700 dark:text-blue-300">How to Play</CardTitle>
                <CardDescription className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                  Rearrange the words to form the correct Quranic ayat (verse). 
                  Drag words to reorder them or double-click to select. 
                  The ayat should read from right to left in Arabic.
                </CardDescription>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="mt-2 text-blue-600 border-blue-300 hover:bg-blue-100 dark:text-blue-300 dark:border-blue-700 dark:hover:bg-blue-900/40"
              onClick={() => setShowInstructions(false)}
            >
              Got it
            </Button>
          </CardContent>
        </Card>
      )}

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-medium">Arrange the Ayat (Right to Left)</h3>
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-600 hover:bg-blue-100 dark:text-blue-300 dark:hover:bg-blue-900/40"
            onClick={() => setShowInstructions(true)}
          >
            <HelpCircle className="h-4 w-4 mr-1" /> Help
          </Button>
        </div>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={words.map((word) => word.id)} strategy={horizontalListSortingStrategy}>
            <div className="flex flex-wrap justify-center p-4 min-h-[120px] border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg dir-rtl bg-white dark:bg-gray-900/50">
              {words.map((word) => (
                <SortableItem key={word.id} id={word.id} word={word.text} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>

      {feedback && (
        <div className={`p-4 rounded-lg ${
          isCorrect ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200" : 
          "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"
        }`}>
          {feedback}
          {showTranslation && <div className="mt-2 font-medium">Translation: {currentAyat.translation}</div>}
        </div>
      )}

      <div className="flex justify-center space-x-4">
        <Button onClick={checkAnswer} disabled={isCorrect}>
          Check Answer
        </Button>
        {isCorrect && (
          <Button onClick={nextAyat} variant="outline" className="bg-green-500 text-white hover:bg-green-600">
            <Check className="mr-2 h-4 w-4" /> Next Ayat
          </Button>
        )}
        <Button onClick={restartGame} variant="outline">
          <RefreshCw className="mr-2 h-4 w-4" /> Restart
        </Button>
      </div>
    </div>
  )
}

export default function QuranicAyatsClient() {
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy")
  const [ayatCount, setAyatCount] = useState(3)

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
                onValueChange={(value) => setDifficulty(value as "easy" | "medium" | "hard")}
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
                    onClick={() => setAyatCount(count)}
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
        </CardContent>
      </Card>

      <MakeQuranicAyatsGame 
        difficulty={difficulty} 
        initialAyatCount={ayatCount} 
      />
    </div>
  )
}
