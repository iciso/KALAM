"use client"

import { useState, useEffect } from "react"
import { DndContext, closestCenter, type DragEndEvent, type DragStartEvent } from "@dnd-kit/core"
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { type Relative, relatives } from "@/data/mahram-game-data"
import { Button } from "@/components/ui/button"
import { Check, X, Info, RefreshCw, Trophy } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import confetti from "canvas-confetti"

type RelativeWithZone = Relative & { zone: "unassigned" | "mahram" | "non-mahram" }

const RelativeItem = ({ relative }: { relative: RelativeWithZone }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: relative.id,
  })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
    cursor: "grab",
  }

  const iconColor = relative.gender === "male" ? "bg-blue-100" : "bg-pink-100"
  const borderColor = relative.gender === "male" ? "border-blue-500" : "border-pink-500"

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={`p-2 mb-2 rounded-lg border-2 ${borderColor} ${iconColor} flex items-center justify-between`}
    >
      <div className="flex items-center">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${relative.gender === "male" ? "bg-blue-200" : "bg-pink-200"}`}
        >
          {relative.gender === "male" ? "👨" : "👩"}
        </div>
        <div>
          <div className="font-medium">{relative.name}</div>
          <div className="text-xs text-gray-500">{relative.relation}</div>
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Info className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{relative.name}</DialogTitle>
            <DialogDescription>{relative.relation}</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p>{relative.explanation}</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const DropZone = ({
  title,
  items,
  type,
  isChecking,
  isGameOver,
}: {
  title: string
  items: RelativeWithZone[]
  type: "mahram" | "non-mahram" | "unassigned"
  isChecking: boolean
  isGameOver: boolean
}) => {
  let bgColor = "bg-gray-100"
  let borderColor = "border-gray-300"

  if (type === "mahram") {
    bgColor = "bg-green-50"
    borderColor = "border-green-300"
  } else if (type === "non-mahram") {
    bgColor = "bg-amber-50"
    borderColor = "border-amber-300"
  }

  return (
    <div className={`p-4 rounded-lg border-2 ${borderColor} ${bgColor} min-h-[200px] flex-1`}>
      <h3 className="font-bold text-lg mb-4 text-center">{title}</h3>
      <div>
        {items.map((item) => (
          <div key={item.id} className="relative">
            <RelativeItem relative={item} />
            {isChecking && (
              <div className="absolute top-2 right-2">
                {type !== "unassigned" &&
                  (item.isMahram === (type === "mahram") ? (
                    <Check className="h-6 w-6 text-green-600" />
                  ) : (
                    <X className="h-6 w-6 text-red-600" />
                  ))}
              </div>
            )}
          </div>
        ))}
        {items.length === 0 && <div className="text-center text-gray-500 italic py-8">Drag relatives here</div>}
      </div>
    </div>
  )
}

export default function MahramGame() {
  const [gameRelatives, setGameRelatives] = useState<RelativeWithZone[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isChecking, setIsChecking] = useState(false)
  const [score, setScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [timer, setTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [level, setLevel] = useState(1)
  const [showInstructions, setShowInstructions] = useState(true)

  // Initialize the game
  useEffect(() => {
    initializeGame()
  }, [level])

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isTimerRunning) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1)
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [isTimerRunning])

  const initializeGame = () => {
    // Shuffle and select relatives based on level
    const shuffled = [...relatives].sort(() => 0.5 - Math.random())
    const selectedRelatives = shuffled.slice(0, Math.min(5 + level * 2, relatives.length))

    const initialRelatives = selectedRelatives.map((relative) => ({
      ...relative,
      zone: "unassigned" as const,
    }))

    setGameRelatives(initialRelatives)
    setMaxScore(initialRelatives.length)
    setIsChecking(false)
    setScore(0)
    setGameOver(false)
    setTimer(0)
    setIsTimerRunning(true)
  }

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) return

    const relativeId = active.id as string
    let newZone: "unassigned" | "mahram" | "non-mahram" = "unassigned"

    if (over.id === "mahram-zone") {
      newZone = "mahram"
    } else if (over.id === "non-mahram-zone") {
      newZone = "non-mahram"
    }

    setGameRelatives((prev) => prev.map((rel) => (rel.id === relativeId ? { ...rel, zone: newZone } : rel)))

    setActiveId(null)
  }

  const checkAnswers = () => {
    setIsChecking(true)
    setIsTimerRunning(false)

    let correctAnswers = 0
    gameRelatives.forEach((rel) => {
      if ((rel.zone === "mahram" && rel.isMahram) || (rel.zone === "non-mahram" && !rel.isMahram)) {
        correctAnswers++
      }
    })

    setScore(correctAnswers)

    if (correctAnswers === maxScore) {
      setGameOver(true)
      // Trigger confetti if all answers are correct
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }
  }

  const resetGame = () => {
    initializeGame()
  }

  const nextLevel = () => {
    setLevel((prev) => prev + 1)
  }

  const unassignedRelatives = gameRelatives.filter((rel) => rel.zone === "unassigned")
  const mahramRelatives = gameRelatives.filter((rel) => rel.zone === "mahram")
  const nonMahramRelatives = gameRelatives.filter((rel) => rel.zone === "non-mahram")

  const accuracy = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0

  return (
    <div className="container mx-auto p-4">
      <Dialog open={showInstructions} onOpenChange={setShowInstructions}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Knowing Your Mahram - Instructions</DialogTitle>
            <DialogDescription>
              Learn about Mahram relationships in Islam through this interactive game.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <p>
              <strong>Mahram</strong> refers to relatives with whom marriage is permanently forbidden in Islam.
            </p>
            <p>
              <strong>How to play:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Drag each relative to either the Mahram or Non-Mahram box</li>
              <li>Click "Check Answers" when you're done</li>
              <li>Green checkmarks show correct answers, red X marks show incorrect ones</li>
              <li>Click the info icon on any relative to learn more</li>
            </ul>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button">Start Playing</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog
        open={gameOver && score === maxScore}
        onOpenChange={(open) => {
          if (!open) setGameOver(false)
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Trophy className="h-6 w-6 text-yellow-500" />
              Congratulations!
            </DialogTitle>
            <DialogDescription>You've completed Level {level} with a perfect score!</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="mb-4">You correctly identified all {maxScore} relatives!</p>
            <p className="mb-2">
              Time: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
            </p>
            <p>Accuracy: 100%</p>
          </div>
          <DialogFooter>
            <Button onClick={nextLevel}>Next Level</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-amber-600 mb-2">Knowing Your Mahram</h1>
        <p className="text-gray-600 mb-4">Drag each relative to the correct category</p>

        <div className="flex justify-between items-center mb-4">
          <Badge variant="outline" className="text-sm">
            Level {level}
          </Badge>
          <div className="text-sm">
            Time: {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
          </div>
          <Badge variant="outline" className="text-sm">
            {unassignedRelatives.length} remaining
          </Badge>
        </div>

        {isChecking && (
          <div className="mb-4">
            <div className="flex justify-between mb-1">
              <span>
                Score: {score}/{maxScore}
              </span>
              <span>{accuracy}%</span>
            </div>
            <Progress value={accuracy} className="h-2" />
          </div>
        )}
      </div>

      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-amber-100 border-4 border-amber-500 flex items-center justify-center text-2xl">
          ME
        </div>
      </div>

      <DndContext collisionDetection={closestCenter} onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="md:col-span-1">
            <SortableContext items={unassignedRelatives.map((r) => r.id)} strategy={verticalListSortingStrategy}>
              <DropZone
                title="Relatives"
                items={unassignedRelatives}
                type="unassigned"
                isChecking={isChecking}
                isGameOver={gameOver}
              />
            </SortableContext>
          </div>

          <div id="mahram-zone" className="md:col-span-1">
            <SortableContext items={mahramRelatives.map((r) => r.id)} strategy={verticalListSortingStrategy}>
              <DropZone
                title="Mahram"
                items={mahramRelatives}
                type="mahram"
                isChecking={isChecking}
                isGameOver={gameOver}
              />
            </SortableContext>
          </div>

          <div id="non-mahram-zone" className="md:col-span-1">
            <SortableContext items={nonMahramRelatives.map((r) => r.id)} strategy={verticalListSortingStrategy}>
              <DropZone
                title="Non-Mahram"
                items={nonMahramRelatives}
                type="non-mahram"
                isChecking={isChecking}
                isGameOver={gameOver}
              />
            </SortableContext>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          {!isChecking ? (
            <Button
              onClick={checkAnswers}
              disabled={unassignedRelatives.length > 0}
              className="bg-amber-600 hover:bg-amber-700"
            >
              Check Answers
            </Button>
          ) : (
            <Button onClick={resetGame} className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4" /> Play Again
            </Button>
          )}

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">What is Mahram?</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Understanding Mahram in Islam</DialogTitle>
              </DialogHeader>
              <Tabs defaultValue="definition">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="definition">Definition</TabsTrigger>
                  <TabsTrigger value="categories">Categories</TabsTrigger>
                  <TabsTrigger value="importance">Importance</TabsTrigger>
                </TabsList>
                <TabsContent value="definition" className="space-y-4 py-4">
                  <p>
                    In Islamic law, a <strong>Mahram</strong> is a person with whom marriage is permanently forbidden
                    (haram) due to blood relations, marriage, or breastfeeding relationships.
                  </p>
                  <p>Non-Mahram refers to individuals with whom marriage is potentially permissible.</p>
                </TabsContent>
                <TabsContent value="categories" className="space-y-4 py-4">
                  <p>
                    <strong>Mahram categories include:</strong>
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Blood relatives: parents, grandparents, siblings, children, grandchildren, aunts, uncles, nieces,
                      nephews
                    </li>
                    <li>In-laws: parents-in-law, children's spouses</li>
                    <li>Milk relatives: those related through breastfeeding</li>
                  </ul>
                  <p>
                    <strong>Non-Mahram includes:</strong>
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Cousins</li>
                    <li>Brother/sister-in-law</li>
                    <li>Uncle's wife/Aunt's husband</li>
                  </ul>
                </TabsContent>
                <TabsContent value="importance" className="space-y-4 py-4">
                  <p>Understanding Mahram relationships is important in Islam for several reasons:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>It determines who can be alone together</li>
                    <li>It affects hijab requirements for women</li>
                    <li>It clarifies who can travel together</li>
                    <li>It establishes boundaries for physical contact</li>
                  </ul>
                  <p>The concept helps maintain modesty and appropriate relationships between Muslims.</p>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>

        {isChecking && score < maxScore && (
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-center text-amber-800">
              You got {score} out of {maxScore} correct. Review the answers and try again!
            </p>
          </div>
        )}
      </DndContext>
    </div>
  )
}
