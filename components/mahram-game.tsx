"use client"

import { useState, useEffect } from "react"
import {
  DndContext,
  closestCenter,
  type DragEndEvent,
  type DragStartEvent,
  useSensor,
  useSensors,
  PointerSensor,
  TouchSensor,
} from "@dnd-kit/core"
import { SortableContext, useSortable, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { useDroppable } from "@dnd-kit/core"
import { CSS } from "@dnd-kit/utilities"
import { type Relative, relatives, mahramTerms } from "@/data/mahram-game-data"
import { familyRelationVerses, type QuranVerse } from "@/data/mahram-quran-verses"
import { Button } from "@/components/ui/button"
import {
  Check,
  X,
  Info,
  RefreshCw,
  Trophy,
  UserIcon as Male,
  UserIcon as Female,
  Languages,
  BookOpen,
  GitFork,
} from "lucide-react"
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
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import FamilyTreeVisualizer from "./family-tree-visualizer"
import { ImanOMeter } from "./iman-o-meter"
import confetti from "canvas-confetti"

type PlayerGender = "male" | "female"
type RelativeWithZone = Relative & { zone: "unassigned" | "mahram" | "non-mahram" }
type LanguageMode = "english" | "arabic" | "both"

const QuranVerseCard = ({ verse }: { verse: QuranVerse }) => {
  return (
    <Card className="mb-4">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>
            Surah {verse.surah} ({verse.surahNumber}:{verse.verseNumber})
          </span>
          <Badge variant="outline">{verse.topic.replace("_", " ")}</Badge>
        </CardTitle>
        <CardDescription>
          {verse.relatedRelatives && verse.relatedRelatives.length > 0 && (
            <div className="text-xs text-gray-500 mt-1">
              Related to: {verse.relatedRelatives.map((r) => r.split("-").join(" ")).join(", ")}
            </div>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <p className="font-arabic text-xl leading-relaxed" dir="rtl">
            {verse.arabicText}
          </p>
        </div>
        <div className="text-sm text-gray-700">{verse.translation}</div>
      </CardContent>
      <CardFooter className="text-xs text-gray-600 border-t pt-4">{verse.explanation}</CardFooter>
    </Card>
  )
}

const RelativeItem = ({
  relative,
  playerGender,
  languageMode,
}: {
  relative: RelativeWithZone
  playerGender: PlayerGender
  languageMode: LanguageMode
}) => {
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

  const explanation = playerGender === "male" ? relative.explanationForMale : relative.explanationForFemale

  // Find relevant Quranic verses for this relative
  const relevantVerses = familyRelationVerses.filter(
    (verse) => verse.relatedRelatives && verse.relatedRelatives.includes(relative.id),
  )

  // Determine what name to display based on language mode
  const displayName = () => {
    switch (languageMode) {
      case "arabic":
        return (
          <span className="font-arabic text-lg" dir="rtl">
            {relative.arabicName}
          </span>
        )
      case "english":
        return <span>{relative.name}</span>
      case "both":
        return (
          <div className="flex flex-col">
            <span>{relative.name}</span>
            <span className="font-arabic text-sm" dir="rtl">
              {relative.arabicName}
            </span>
          </div>
        )
    }
  }

  // Determine what relation to display based on language mode
  const displayRelation = () => {
    switch (languageMode) {
      case "arabic":
        return null // Skip relation in Arabic-only mode to save space
      case "english":
        return <div className="text-xs text-gray-500">{relative.relation}</div>
      case "both":
        return (
          <div className="text-xs text-gray-500">
            {relative.relation} <span className="text-gray-400">({relative.transliteration})</span>
          </div>
        )
    }
  }

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
          className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
            relative.gender === "male" ? "bg-blue-200" : "bg-pink-200"
          }`}
        >
          {relative.gender === "male" ? "👨" : "👩"}
        </div>
        <div>
          {displayName()}
          {displayRelation()}
        </div>
      </div>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Info className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {relative.name}
              {languageMode !== "english" && (
                <span className="font-arabic text-lg" dir="rtl">
                  {relative.arabicName}
                </span>
              )}
            </DialogTitle>
            <DialogDescription className="flex flex-col">
              <span>{relative.relation}</span>
              {languageMode !== "english" && (
                <span className="text-sm text-gray-500">Transliteration: {relative.transliteration}</span>
              )}
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="explanation">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="explanation">Explanation</TabsTrigger>
              <TabsTrigger value="quran" disabled={relevantVerses.length === 0}>
                Quranic References {relevantVerses.length > 0 && `(${relevantVerses.length})`}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="explanation" className="py-4">
              <p>{explanation}</p>
            </TabsContent>
            <TabsContent value="quran" className="py-4">
              {relevantVerses.length > 0 ? (
                relevantVerses.map((verse) => <QuranVerseCard key={verse.id} verse={verse} />)
              ) : (
                <p className="text-center text-gray-500 italic">No specific Quranic references available.</p>
              )}
            </TabsContent>
          </Tabs>
        </DialogContent>
      </Dialog>
    </div>
  )
}

const DropZone = ({
  id,
  title,
  arabicTitle,
  items,
  type,
  isChecking,
  isGameOver,
  playerGender,
  languageMode,
}: {
  id: string
  title: string
  arabicTitle: string
  items: RelativeWithZone[]
  type: "mahram" | "non-mahram" | "unassigned"
  isChecking: boolean
  isGameOver: boolean
  playerGender: PlayerGender
  languageMode: LanguageMode
}) => {
  // Use the useDroppable hook to make this a drop target
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  })

  let bgColor = "bg-gray-100"
  let borderColor = "border-gray-300"

  if (type === "mahram") {
    bgColor = "bg-green-50"
    borderColor = "border-green-300"
  } else if (type === "non-mahram") {
    bgColor = "bg-amber-50"
    borderColor = "border-amber-300"
  }

  // Add a highlight effect when dragging over
  if (isOver) {
    borderColor = "border-blue-500"
    bgColor = "bg-blue-50"
  }

  // Determine title based on language mode
  const displayTitle = () => {
    switch (languageMode) {
      case "arabic":
        return (
          <h3 className="font-bold text-lg mb-4 text-center font-arabic" dir="rtl">
            {arabicTitle}
          </h3>
        )
      case "english":
        return <h3 className="font-bold text-lg mb-4 text-center">{title}</h3>
      case "both":
        return (
          <div className="text-center mb-4">
            <h3 className="font-bold text-lg">{title}</h3>
            <p className="font-arabic text-sm" dir="rtl">
              {arabicTitle}
            </p>
          </div>
        )
    }
  }

  return (
    <div ref={setNodeRef} className={`p-4 rounded-lg border-2 ${borderColor} ${bgColor} min-h-[200px] flex-1`}>
      {displayTitle()}
      <div>
        {items.map((item) => (
          <div key={item.id} className="relative">
            <RelativeItem relative={item} playerGender={playerGender} languageMode={languageMode} />
            {isChecking && (
              <div className="absolute top-2 right-2">
                {type !== "unassigned" &&
                  ((playerGender === "male" ? item.isMahramToMale : item.isMahramToFemale) === (type === "mahram") ? (
                    <Check className="h-6 w-6 text-green-600" />
                  ) : (
                    <X className="h-6 w-6 text-red-600" />
                  ))}
              </div>
            )}
          </div>
        ))}
        {items.length === 0 && (
          <div className="text-center text-gray-500 italic py-8">
            {languageMode === "arabic" ? (
              <span className="font-arabic" dir="rtl">
                اسحب الأقارب هنا
              </span>
            ) : (
              "Drag relatives here"
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function MahramGame() {
  const [playerGender, setPlayerGender] = useState<PlayerGender>("male")
  const [gameRelatives, setGameRelatives] = useState<RelativeWithZone[]>([])
  const [activeId, setActiveId] = useState<string | null>(null)
  const [isChecking, setIsChecking] = useState(false)
  const [score, setScore] = useState(0)
  const [maxScore, setMaxScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [timer, setTimer] = useState(0)
  const [isTimerRunning, setIsTimerRunning] = useState(false)
  const [level, setLevel] = useState(1)
  const [showInstructions, setShowInstructions] = useState(true)
  const [gameStarted, setGameStarted] = useState(false)
  const [debugInfo, setDebugInfo] = useState<string>("")
  const [languageMode, setLanguageMode] = useState<LanguageMode>("both")
  const [showQuranVerses, setShowQuranVerses] = useState(false)
  const [showFamilyTree, setShowFamilyTree] = useState(false)
  const [useMobileFallback, setUseMobileFallback] = useState(false)
  const [isMobileDevice, setIsMobileDevice] = useState(false)

  // First, let's add a new state to track mobile scoring
  const [mobileScore, setMobileScore] = useState(0)
  const [mobileAnswered, setMobileAnswered] = useState<Set<string>>(new Set())
  const [showMobileResults, setShowMobileResults] = useState(false)

  // Configure sensors for better touch and mouse support
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // Reduced from 8px to 5px for easier activation
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 100, // Reduced from 250ms to 100ms for more responsive touch
        tolerance: 5, // Reduced from 8px to 5px
      },
    }),
  )

  // Initialize the game when gender is selected or level changes
  useEffect(() => {
    if (gameStarted) {
      initializeGame()
    }
  }, [level, playerGender, gameStarted])

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

  // Detect mobile devices
  useEffect(() => {
    const checkMobile = () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768
      setIsMobileDevice(isMobile)
      // Auto-enable fallback mode on mobile devices
      if (isMobile && !useMobileFallback) {
        setUseMobileFallback(true)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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
    setDebugInfo("")

    // Reset mobile scoring
    setMobileScore(0)
    setMobileAnswered(new Set())
    setShowMobileResults(false)
  }

  const handleDragStart = (event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event

    if (!over) {
      setDebugInfo("No drop target detected")
      return
    }

    const relativeId = active.id as string
    let newZone: "unassigned" | "mahram" | "non-mahram" = "unassigned"

    // Set the new zone based on where the item was dropped
    if (over.id === "mahram-zone") {
      newZone = "mahram"
    } else if (over.id === "non-mahram-zone") {
      newZone = "non-mahram"
    } else if (over.id === "unassigned-zone") {
      newZone = "unassigned"
    }

    setDebugInfo(`Dropped ${relativeId} onto ${over.id}, setting zone to ${newZone}`)

    // Update the relative's zone
    setGameRelatives((prev) => prev.map((rel) => (rel.id === relativeId ? { ...rel, zone: newZone } : rel)))

    setActiveId(null)
  }

  const checkAnswers = () => {
    setIsChecking(true)
    setIsTimerRunning(false)

    let correctAnswers = 0
    gameRelatives.forEach((rel) => {
      const isMahram = playerGender === "male" ? rel.isMahramToMale : rel.isMahramToFemale
      if ((rel.zone === "mahram" && isMahram) || (rel.zone === "non-mahram" && !isMahram)) {
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

  const startGame = (gender: PlayerGender) => {
    setPlayerGender(gender)
    setGameStarted(true)
    setShowInstructions(false)
  }

  const unassignedRelatives = gameRelatives.filter((rel) => rel.zone === "unassigned")
  const mahramRelatives = gameRelatives.filter((rel) => rel.zone === "mahram")
  const nonMahramRelatives = gameRelatives.filter((rel) => rel.zone === "non-mahram")

  const accuracy = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0

  // Mobile fallback UI for devices where drag and drop doesn't work well
  const renderMobileFallback = () => {
    return (
      <div className="grid grid-cols-1 gap-6 mb-6">
        {!showMobileResults && (
          <div className="bg-white p-4 rounded-lg shadow-sm border border-amber-200">
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="font-semibold">Progress: </span>
                <span>
                  {mobileAnswered.size} of {gameRelatives.length} answered
                </span>
              </div>
              <div>
                <span className="font-semibold">Score: </span>
                <span>{mobileScore}</span>
              </div>
            </div>

            <ImanOMeter score={mobileScore} maxScore={gameRelatives.length} className="mb-2" />
          </div>
        )}

        {showMobileResults ? (
          <div className="bg-white p-6 rounded-lg shadow-sm border border-amber-200 text-center">
            <h3 className="text-xl font-bold mb-4">Results</h3>
            <div className="text-5xl font-bold mb-4 text-amber-600">
              {mobileScore} / {gameRelatives.length}
            </div>

            <div className="mb-6">
              <ImanOMeter score={mobileScore} maxScore={gameRelatives.length} className="mb-4 max-w-md mx-auto" />

              <p>
                You got {mobileScore} out of {gameRelatives.length} correct!
                {mobileScore === gameRelatives.length && (
                  <span className="block mt-2 text-green-600 font-semibold">Perfect score! Excellent work!</span>
                )}
              </p>
            </div>

            <div className="flex justify-center gap-4">
              <Button
                onClick={() => {
                  setShowMobileResults(false)
                  resetGame()
                  setMobileScore(0)
                  setMobileAnswered(new Set())
                }}
              >
                Play Again
              </Button>
              {mobileScore === gameRelatives.length && (
                <Button
                  onClick={() => {
                    setShowMobileResults(false)
                    nextLevel()
                    setMobileScore(0)
                    setMobileAnswered(new Set())
                  }}
                >
                  Next Level
                </Button>
              )}
            </div>
          </div>
        ) : (
          gameRelatives.map((relative) => {
            const isMahram = playerGender === "male" ? relative.isMahramToMale : relative.isMahramToFemale
            const isAnswered = mobileAnswered.has(relative.id)
            const isCorrect = (relative.zone === "mahram" && isMahram) || (relative.zone === "non-mahram" && !isMahram)

            return (
              <div
                key={relative.id}
                className={`border rounded-lg p-4 bg-white shadow-sm ${
                  isAnswered ? (isCorrect ? "border-green-500 bg-green-50" : "border-red-500 bg-red-50") : ""
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${
                        relative.gender === "male" ? "bg-blue-200" : "bg-pink-200"
                      }`}
                    >
                      {relative.gender === "male" ? "👨" : "👩"}
                    </div>
                    <div>
                      {languageMode !== "arabic" && <div className="font-semibold">{relative.name}</div>}
                      {languageMode !== "english" && (
                        <div className="font-arabic text-sm" dir="rtl">
                          {relative.arabicName}
                        </div>
                      )}
                      {languageMode !== "arabic" && <div className="text-xs text-gray-500">{relative.relation}</div>}
                    </div>
                  </div>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        <Info className="h-4 w-4 mr-1" />
                        Info
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-3xl">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          {relative.name}
                          {languageMode !== "english" && (
                            <span className="font-arabic text-lg" dir="rtl">
                              {relative.arabicName}
                            </span>
                          )}
                        </DialogTitle>
                        <DialogDescription className="flex flex-col">
                          <span>{relative.relation}</span>
                          {languageMode !== "english" && (
                            <span className="text-sm text-gray-500">Transliteration: {relative.transliteration}</span>
                          )}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="py-4">
                        <p>{playerGender === "male" ? relative.explanationForMale : relative.explanationForFemale}</p>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="flex justify-between gap-2">
                  <Button
                    variant={relative.zone === "mahram" ? "default" : "outline"}
                    className={relative.zone === "mahram" ? "bg-green-600 hover:bg-green-700 w-1/2" : "w-1/2"}
                    disabled={isAnswered}
                    onClick={() => {
                      const isMahramRelative =
                        playerGender === "male" ? relative.isMahramToMale : relative.isMahramToFemale
                      const isCorrectAnswer = isMahramRelative === true

                      // Update score if correct
                      if (isCorrectAnswer) {
                        setMobileScore((prev) => prev + 1)
                      }

                      // Mark as answered
                      setMobileAnswered((prev) => new Set([...prev, relative.id]))

                      // Update the relative's zone
                      setGameRelatives((prev) =>
                        prev.map((rel) => (rel.id === relative.id ? { ...rel, zone: "mahram" } : rel)),
                      )

                      // Check if all relatives have been answered
                      if (mobileAnswered.size + 1 === gameRelatives.length) {
                        // Show results after a short delay
                        setTimeout(() => {
                          setShowMobileResults(true)
                          // Trigger confetti if perfect score
                          if (mobileScore + (isCorrectAnswer ? 1 : 0) === gameRelatives.length) {
                            confetti({
                              particleCount: 100,
                              spread: 70,
                              origin: { y: 0.6 },
                            })
                          }
                        }, 500)
                      }
                    }}
                  >
                    Mahram
                  </Button>
                  <Button
                    variant={relative.zone === "non-mahram" ? "default" : "outline"}
                    className={relative.zone === "non-mahram" ? "bg-amber-600 hover:bg-amber-700 w-1/2" : "w-1/2"}
                    disabled={isAnswered}
                    onClick={() => {
                      const isMahramRelative =
                        playerGender === "male" ? relative.isMahramToMale : relative.isMahramToFemale
                      const isCorrectAnswer = isMahramRelative === false

                      // Update score if correct
                      if (isCorrectAnswer) {
                        setMobileScore((prev) => prev + 1)
                      }

                      // Mark as answered
                      setMobileAnswered((prev) => new Set([...prev, relative.id]))

                      // Update the relative's zone
                      setGameRelatives((prev) =>
                        prev.map((rel) => (rel.id === relative.id ? { ...rel, zone: "non-mahram" } : rel)),
                      )

                      // Check if all relatives have been answered
                      if (mobileAnswered.size + 1 === gameRelatives.length) {
                        // Show results after a short delay
                        setTimeout(() => {
                          setShowMobileResults(true)
                          // Trigger confetti if perfect score
                          if (mobileScore + (isCorrectAnswer ? 1 : 0) === gameRelatives.length) {
                            confetti({
                              particleCount: 100,
                              spread: 70,
                              origin: { y: 0.6 },
                            })
                          }
                        }, 500)
                      }
                    }}
                  >
                    Non-Mahram
                  </Button>
                </div>

                {isAnswered && (
                  <div className="mt-3 text-center">
                    {isCorrect ? (
                      <div className="flex items-center justify-center text-green-600">
                        <Check className="h-5 w-5 mr-1" /> Correct
                      </div>
                    ) : (
                      <div className="flex items-center justify-center text-red-600">
                        <X className="h-5 w-5 mr-1" /> Incorrect -{" "}
                        {isMahram ? "This is a Mahram" : "This is a Non-Mahram"}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })
        )}
      </div>
    )
  }

  if (!gameStarted) {
    return (
      <div className="container mx-auto p-4 max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-amber-600 mb-2">Knowing Your Mahram</h1>
          <p className="font-arabic text-2xl text-amber-600 mb-6" dir="rtl">
            معرفة المَحارِم
          </p>
          <p className="text-gray-600 mb-6">Select your gender to start the game</p>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Choose Your Perspective</h2>
            <p className="mb-6 text-gray-600">
              In Islam, Mahram relationships depend on your gender. Select your gender to learn the correct Mahram
              relationships from your perspective.
            </p>

            <div className="flex flex-col gap-6">
              <Button
                onClick={() => startGame("male")}
                className="flex items-center justify-center gap-2 h-16 bg-blue-600 hover:bg-blue-700"
              >
                <Male className="h-6 w-6" />
                <span className="text-lg">Play as Male</span>
                <span className="font-arabic text-sm" dir="rtl">
                  (ذَكَر)
                </span>
              </Button>

              <Button
                onClick={() => startGame("female")}
                className="flex items-center justify-center gap-2 h-16 bg-pink-600 hover:bg-pink-700"
              >
                <Female className="h-6 w-6" />
                <span className="text-lg">Play as Female</span>
                <span className="font-arabic text-sm" dir="rtl">
                  (أُنثى)
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

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
            <ImanOMeter score={score} maxScore={maxScore} className="mb-2" />
            <p>Accuracy: 100%</p>
          </div>
          <DialogFooter>
            <Button onClick={nextLevel}>Next Level</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showFamilyTree} onOpenChange={setShowFamilyTree}>
        <DialogContent className="max-w-5xl h-[80vh] overflow-y-auto">
          <FamilyTreeVisualizer playerGender={playerGender} onClose={() => setShowFamilyTree(false)} />
        </DialogContent>
      </Dialog>

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-amber-600 mb-2">Knowing Your Mahram</h1>
        <p className="font-arabic text-2xl text-amber-600 mb-2" dir="rtl">
          معرفة المَحارِم
        </p>
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
            <ImanOMeter score={score} maxScore={maxScore} />
          </div>
        )}
      </div>

      <div className="flex justify-center mb-4">
        <div
          className={`w-28 h-28 rounded-full flex items-center justify-center text-2xl ${
            playerGender === "male" ? "bg-blue-100 border-4 border-blue-500" : "bg-pink-100 border-4 border-pink-500"
          }`}
        >
          <div className="flex flex-col items-center">
            {playerGender === "male" ? <Male className="h-8 w-8" /> : <Female className="h-8 w-8" />}
            <span className="text-sm font-bold mt-1">ME</span>
            <span className="font-arabic text-sm" dir="rtl">
              أنا
            </span>
          </div>
        </div>
      </div>

      <div className="mb-6 flex flex-col sm:flex-row justify-center items-center gap-4">
        <Button
          variant="outline"
          onClick={() => {
            setGameStarted(false)
            setIsTimerRunning(false)
          }}
          className="flex items-center gap-2"
        >
          {playerGender === "male" ? (
            <>
              <Female className="h-4 w-4" />
              Change Gender to Female
            </>
          ) : (
            <>
              <Male className="h-4 w-4" />
              Change Gender to Male
            </>
          )}
        </Button>

        <Button variant="outline" onClick={() => setShowFamilyTree(true)} className="flex items-center gap-2">
          <GitFork className="h-4 w-4" />
          View Family Tree
        </Button>

        <div className="flex items-center gap-2">
          <Languages className="h-4 w-4" />
          <Label htmlFor="language-mode">Language:</Label>
          <select
            id="language-mode"
            value={languageMode}
            onChange={(e) => setLanguageMode(e.target.value as LanguageMode)}
            className="border rounded px-2 py-1 text-sm"
          >
            <option value="english">English</option>
            <option value="arabic">Arabic</option>
            <option value="both">Both</option>
          </select>
        </div>
        {isMobileDevice && (
          <Button
            variant="outline"
            onClick={() => setUseMobileFallback(!useMobileFallback)}
            className="flex items-center gap-2"
          >
            {useMobileFallback ? "Try Drag & Drop" : "Use Tap Interface"}
          </Button>
        )}
      </div>

      {useMobileFallback ? (
        renderMobileFallback()
      ) : (
        <DndContext
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          sensors={sensors}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="md:col-span-1">
              <SortableContext items={unassignedRelatives.map((r) => r.id)} strategy={verticalListSortingStrategy}>
                <DropZone
                  id="unassigned-zone"
                  title="Relatives"
                  arabicTitle="الأقارب"
                  items={unassignedRelatives}
                  type="unassigned"
                  isChecking={isChecking}
                  isGameOver={gameOver}
                  playerGender={playerGender}
                  languageMode={languageMode}
                />
              </SortableContext>
            </div>

            <div className="md:col-span-1">
              <SortableContext items={mahramRelatives.map((r) => r.id)} strategy={verticalListSortingStrategy}>
                <DropZone
                  id="mahram-zone"
                  title="Mahram"
                  arabicTitle={mahramTerms.mahram.arabic}
                  items={mahramRelatives}
                  type="mahram"
                  isChecking={isChecking}
                  isGameOver={gameOver}
                  playerGender={playerGender}
                  languageMode={languageMode}
                />
              </SortableContext>
            </div>

            <div className="md:col-span-1">
              <SortableContext items={nonMahramRelatives.map((r) => r.id)} strategy={verticalListSortingStrategy}>
                <DropZone
                  id="non-mahram-zone"
                  title="Non-Mahram"
                  arabicTitle={mahramTerms.nonMahram.arabic}
                  items={nonMahramRelatives}
                  type="non-mahram"
                  isChecking={isChecking}
                  isGameOver={gameOver}
                  playerGender={playerGender}
                  languageMode={languageMode}
                />
              </SortableContext>
            </div>
          </div>

          {debugInfo && <div className="mb-4 p-2 bg-gray-100 text-xs text-gray-600 rounded">Debug: {debugInfo}</div>}

          <div className="flex justify-center gap-4">
            {!isChecking ? (
              <Button
                onClick={checkAnswers}
                disabled={unassignedRelatives.length > 0}
                className="bg-amber-600 hover:bg-amber-700"
              >
                {languageMode === "arabic" ? (
                  <span className="font-arabic" dir="rtl">
                    تحقق من الإجابات
                  </span>
                ) : (
                  "Check Answers"
                )}
              </Button>
            ) : (
              <Button onClick={resetGame} className="flex items-center gap-2">
                <RefreshCw className="h-4 w-4" />
                {languageMode === "arabic" ? (
                  <span className="font-arabic" dir="rtl">
                    العب مرة أخرى
                  </span>
                ) : (
                  "Play Again"
                )}
              </Button>
            )}

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  {languageMode === "arabic" ? (
                    <span className="font-arabic" dir="rtl">
                      ما هو المَحرم؟
                    </span>
                  ) : (
                    "What is Mahram?"
                  )}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-2">
                    Understanding Mahram in Islam
                    {languageMode !== "english" && (
                      <span className="font-arabic text-lg" dir="rtl">
                        فهم المَحرم في الإسلام
                      </span>
                    )}
                  </DialogTitle>
                </DialogHeader>
                <Tabs defaultValue="definition">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="definition">Definition</TabsTrigger>
                    <TabsTrigger value="categories">Categories</TabsTrigger>
                    <TabsTrigger value="importance">Importance</TabsTrigger>
                  </TabsList>
                  <TabsContent value="definition" className="space-y-4 py-4">
                    <p>
                      In Islamic law, a <strong>Mahram</strong> (
                      <span className="font-arabic" dir="rtl">
                        مَحْرَم
                      </span>
                      ) is a person with whom marriage is permanently forbidden (haram) due to blood relations,
                      marriage, or breastfeeding relationships.
                    </p>
                    <p>
                      Non-Mahram (
                      <span className="font-arabic" dir="rtl">
                        غَيْر مَحْرَم
                      </span>
                      ) refers to individuals with whom marriage is potentially permissible.
                    </p>
                  </TabsContent>
                  <TabsContent value="categories" className="space-y-4 py-4">
                    <p>
                      <strong>Mahram categories include:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Blood relatives: parents, grandparents, siblings, children, grandchildren, aunts, uncles,
                        nieces, nephews
                      </li>
                      <li>In-laws: parents-in-law, children's spouses</li>
                      <li>Milk relatives: those related through breastfeeding</li>
                    </ul>
                    <p>
                      <strong>Non-Mahram includes:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        Cousins (
                        <span className="font-arabic" dir="rtl">
                          اِبن العَمّ / بِنت العَمّ
                        </span>
                        )
                      </li>
                      <li>
                        Brother/sister-in-law (
                        <span className="font-arabic" dir="rtl">
                          زَوجَة الأخ / زَوج الأُخت
                        </span>
                        )
                      </li>
                      <li>
                        Uncle's wife/Aunt's husband (
                        <span className="font-arabic" dir="rtl">
                          زَوجَة العَمّ / زَوج الخَالَة
                        </span>
                        )
                      </li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="importance" className="space-y-4 py-4">
                    <p>Understanding Mahram relationships is important in Islam for several reasons:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>
                        It determines who can be alone together (
                        <span className="font-arabic" dir="rtl">
                          الخَلوة
                        </span>
                        )
                      </li>
                      <li>
                        It affects hijab requirements for women (
                        <span className="font-arabic" dir="rtl">
                          الحِجاب
                        </span>
                        )
                      </li>
                      <li>
                        It clarifies who can travel together (
                        <span className="font-arabic" dir="rtl">
                          السَفَر
                        </span>
                        )
                      </li>
                      <li>
                        It establishes boundaries for physical contact (
                        <span className="font-arabic" dir="rtl">
                          التَواصُل الجَسَدي
                        </span>
                        )
                      </li>
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
      )}

      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <BookOpen className="h-5 w-5" />
            Quranic References
          </h2>
          <Button variant="outline" size="sm" onClick={() => setShowQuranVerses(!showQuranVerses)}>
            {showQuranVerses ? "Hide" : "Show"} Verses
          </Button>
        </div>

        {showQuranVerses && (
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="mb-4 text-amber-800">
              The Quran provides guidance on family relationships and Mahram rules. Here are some relevant verses:
            </p>

            <Accordion type="single" collapsible className="w-full">
              {familyRelationVerses.map((verse) => (
                <AccordionItem key={verse.id} value={verse.id}>
                  <AccordionTrigger className="hover:no-underline">
                    <div className="flex justify-between w-full items-center">
                      <span>
                        Surah {verse.surah} ({verse.surahNumber}:{verse.verseNumber})
                      </span>
                      <Badge variant="outline" className="ml-2">
                        {verse.topic.replace("_", " ")}
                      </Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="mb-4">
                      <p className="font-arabic text-lg leading-relaxed mb-4" dir="rtl">
                        {verse.arabicText}
                      </p>
                      <p className="text-sm">{verse.translation}</p>
                    </div>
                    <div className="text-xs text-gray-600 border-t pt-2">{verse.explanation}</div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        )}
      </div>
    </div>
  )
}
