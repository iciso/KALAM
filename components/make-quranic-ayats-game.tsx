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
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { useSortable } from "@dnd-kit/sortable"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type QuranicAyat, type AyatWord, getRandomAyats } from "@/data/quranic-ayats-game-data"
import { Check, RefreshCw, Award, HelpCircle, Info } from "lucide-react"

interface SortableItemProps {
  id: string
  word: string
  onDoubleClick?: () => void
}

const SortableItem = ({ id, word, onDoubleClick }: SortableItemProps) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: "none", // Prevent default touch behaviors (scroll, zoom)
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onDoubleClick={onDoubleClick}
      className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md p-3 m-1 cursor-grab shadow-sm hover:shadow-md transition-shadow font-arabic text-xl text-center min-w-[100px] sm:min-w-[80px] select-none touch-none"
      title="Drag to rearrange or double-click to select"
      aria-label={`Word: ${word}. Drag to rearrange or double-click to select.`}
    >
      {word}
    </div>
  )
}

interface MakeQuranicAyatsGameProps {
  difficulty?: "easy" | "medium" | "hard"
  initialAyatCount?: number
}

export default function MakeQuranicAyatsGame({ difficulty = "easy", initialAyatCount = 5 }: MakeQuranicAyatsGameProps) {
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
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8, // Require 8px movement to initiate drag (helps distinguish from scroll)
        delay: 100, // 100ms delay to reduce accidental drags
        tolerance: 5, // Allow slight movement without canceling drag
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  useEffect(() => {
    // Initialize or refresh ayats when difficulty changes
    const randomAyats = getRandomAyats(initialAyatCount, difficulty)
    setAyats(randomAyats)
    setCurrentAyatIndex(0)
    setScore(0)
    setGameCompleted(false)

    if (randomAyats.length > 0) {
      prepareAyat(randomAyats[0])
    }
  }, [difficulty, initialAyatCount])

  const prepareAyat = (ayat: QuranicAyat) => {
    // Create a shuffled array of words
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

    // Check if words are in correct order
    const isCorrectOrder = words.every((word, index) => {
      return word.id === currentAyat.words[index].id
    })

    if (isCorrectOrder) {
      // Calculate score based on difficulty
      const difficultyMultiplier = difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3
      const newScore = score + 10 * difficultyMultiplier

      setScore(newScore)
      setFeedback("Excellent! You arranged the ayat correctly.")
      setIsCorrect(true)
      setShowTranslation(true)
    } else {
      setFeedback("The arrangement is not correct. Try again!")
      setIsCorrect(false)
    }
  }

  const nextAyat = () => {
    if (currentAyatIndex < ayats.length - 1) {
      const nextIndex = currentAyatIndex + 1
      setCurrentAyatIndex(nextIndex)
      prepareAyat(ayats[nextIndex])
    } else {
      setGameCompleted(true)
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
  }

  if (gameCompleted) {
    return (
      <div className="flex flex-col items-center justify-center p-6 space-y-6">
        <div className="text-4xl font-bold text-green-600 flex items-center">
          <Award className="mr-2 h-10 w-10" />
          Game Completed!
        </div>

        <Card className="w-full max-w-md p-6 text-center">
          <h2 className="text-2xl font-bold mb-4">Your Final Score</h2>
          <p className="text-5xl font-bold text-green-600 mb-6">{score}</p>
          <p className="mb-4">You successfully arranged {ayats.length} Quranic ayats!</p>
          <Button onClick={restartGame} className="w-full">
            <RefreshCw className="mr-2 h-4 w-4" /> Play Again
          </Button>
        </Card>
      </div>
    )
  }

  if (ayats.length === 0) {
    return <div>Loading...</div>
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
              difficulty === "easy" ? "bg-green-500" : difficulty === "medium" ? "bg-yellow-500" : "bg-red-500"
            }`}
          >
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </Badge>
        </div>
        <div className="text-xl font-bold">Score: {score}</div>
      </div>

      {showInstructions && (
        <Card className="p-4 bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800">
          <div className="flex items-start">
            <Info className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0" />
            <div>
              <h3 className="font-medium text-blue-700 dark:text-blue-300">How to Play</h3>
              <p className="text-sm text-blue-600 dark:text-blue-400 mt-1">
                Rearrange the words to form the correct Quranic ayat (verse). Drag words to reorder them or double-tap
                to select. The ayat should read from right to left in Arabic.
              </p>
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
            <div
              className="flex flex-wrap justify-center p-4 min-h-[120px] border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg dir-rtl bg-white dark:bg-gray-900/50"
              style={{ touchAction: "none" }} // Prevent scroll/zoom on container
            >
              {words.map((word) => (
                <SortableItem key={word.id} id={word.id} word={word.text} />
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>

      {feedback && (
        <div
          className={`p-4 rounded-lg ${
            isCorrect
              ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200"
              : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"
          }`}
        >
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
