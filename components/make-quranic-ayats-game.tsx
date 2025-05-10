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
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { type QuranicAyat, type AyatWord, getRandomAyats } from "@/data/quranic-ayats-game-data"
import { Check, RefreshCw, Award } from "lucide-react"

interface SortableItemProps {
  id: string
  word: string
}

const SortableItem = ({ id, word }: SortableItemProps) => {
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
      className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md p-3 m-1 cursor-grab shadow-sm hover:shadow-md transition-shadow font-arabic text-xl text-center min-w-[80px] select-none"
    >
      {word}
    </div>
  )
}

interface MakeQuranicAyatsGameProps {
  difficulty?: "easy" | "medium" | "hard"
  initialAyatCount?: number
}

export default function MakeQuranicAyatsGame({ difficulty = "easy", initialAyatCount = 3 }: MakeQuranicAyatsGameProps) {
  const [ayats, setAyats] = useState<QuranicAyat[]>([])
  const [currentAyatIndex, setCurrentAyatIndex] = useState(0)
  const [wordPool, setWordPool] = useState<AyatWord[]>([])
  const [selectedWords, setSelectedWords] = useState<AyatWord[]>([])
  const [secondRowWords, setSecondRowWords] = useState<AyatWord[]>([])
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [isCorrect, setIsCorrect] = useState(false)
  const [showTranslation, setShowTranslation] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  useEffect(() => {
    // Initialize the game with random ayats
    const randomAyats = getRandomAyats(initialAyatCount, difficulty)
    setAyats(randomAyats)

    if (randomAyats.length > 0) {
      prepareAyat(randomAyats[0])
    }
  }, [difficulty, initialAyatCount])

  const prepareAyat = (ayat: QuranicAyat) => {
    // Create a shuffled pool of words
    const shuffledWords = [...ayat.words].sort(() => Math.random() - 0.5)
    setWordPool(shuffledWords)
    setSelectedWords([])
    setSecondRowWords([])
    setFeedback("")
    setIsCorrect(false)
    setShowTranslation(false)
  }

  const handleDragEnd = (event: DragEndEvent, container: "wordPool" | "selectedWords" | "secondRowWords") => {
    const { active, over } = event

    if (!over) return

    if (active.id !== over.id) {
      if (container === "wordPool") {
        setWordPool((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id)
          const newIndex = items.findIndex((item) => item.id === over.id)
          return arrayMove(items, oldIndex, newIndex)
        })
      } else if (container === "selectedWords") {
        setSelectedWords((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id)
          const newIndex = items.findIndex((item) => item.id === over.id)
          return arrayMove(items, oldIndex, newIndex)
        })
      } else if (container === "secondRowWords") {
        setSecondRowWords((items) => {
          const oldIndex = items.findIndex((item) => item.id === active.id)
          const newIndex = items.findIndex((item) => item.id === over.id)
          return arrayMove(items, oldIndex, newIndex)
        })
      }
    }
  }

  const moveWordToSelected = (word: AyatWord) => {
    if (difficulty === "hard" && selectedWords.length >= 3 && secondRowWords.length < 3) {
      // In hard mode, if first row has 3+ words and second row has less than 3, add to second row
      setSecondRowWords([...secondRowWords, word])
    } else {
      // Otherwise add to first row
      setSelectedWords([...selectedWords, word])
    }
    setWordPool(wordPool.filter((w) => w.id !== word.id))
  }

  const moveWordBackToPool = (word: AyatWord, fromSecondRow = false) => {
    setWordPool([...wordPool, word])
    if (fromSecondRow) {
      setSecondRowWords(secondRowWords.filter((w) => w.id !== word.id))
    } else {
      setSelectedWords(selectedWords.filter((w) => w.id !== word.id))
    }
  }

  const checkAnswer = () => {
    const currentAyat = ayats[currentAyatIndex]

    // For hard difficulty, we need to check both rows
    let allWords = [...selectedWords]
    if (difficulty === "hard") {
      allWords = [...allWords, ...secondRowWords]
    }

    // Check if all words are selected and in correct order
    const isAllWordsSelected = allWords.length === currentAyat.words.length

    if (!isAllWordsSelected) {
      setFeedback("Please use all the words to complete the ayat.")
      return
    }

    // Check if words are in correct order
    const isCorrectOrder = allWords.every((word, index) => {
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

      <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Word Pool</h3>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={(event) => handleDragEnd(event, "wordPool")}
        >
          <SortableContext items={wordPool.map((word) => word.id)} strategy={horizontalListSortingStrategy}>
            <div className="flex flex-wrap justify-center p-2 min-h-[100px]">
              {wordPool.map((word) => (
                <div key={word.id} onClick={() => moveWordToSelected(word)}>
                  <SortableItem id={word.id} word={word.text} />
                </div>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Arrange the Ayat (Right to Left)</h3>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={(event) => handleDragEnd(event, "selectedWords")}
        >
          <SortableContext items={selectedWords.map((word) => word.id)} strategy={horizontalListSortingStrategy}>
            <div className="flex flex-wrap justify-center p-2 min-h-[80px] border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg dir-rtl">
              {selectedWords.map((word) => (
                <div key={word.id} onClick={() => moveWordBackToPool(word)}>
                  <SortableItem id={word.id} word={word.text} />
                </div>
              ))}
            </div>
          </SortableContext>
        </DndContext>

        {difficulty === "hard" && (
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={(event) => handleDragEnd(event, "secondRowWords")}
          >
            <SortableContext items={secondRowWords.map((word) => word.id)} strategy={horizontalListSortingStrategy}>
              <div className="flex flex-wrap justify-center p-2 mt-2 min-h-[80px] border-2 border-dashed border-blue-300 dark:border-blue-700 rounded-lg dir-rtl">
                {secondRowWords.map((word) => (
                  <div key={word.id} onClick={() => moveWordBackToPool(word, true)}>
                    <SortableItem id={word.id} word={word.text} />
                  </div>
                ))}
              </div>
            </SortableContext>
          </DndContext>
        )}
      </div>

      {feedback && (
        <div
          className={`p-4 rounded-lg ${isCorrect ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200" : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"}`}
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
