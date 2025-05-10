"use client"

import { useState, useEffect, useRef } from "react"
import { Timer, RefreshCw, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { memoryMatchSets, getTotalUniqueWords, getTotalVocabularyWords } from "@/data/memory-match-sets"

type MatchingCard = {
  id: string
  content: string
  type: "arabic" | "meaning"
  originalId: string
  isFlipped: boolean
  isMatched: boolean
}

export default function MemoryGamePage() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const [cards, setCards] = useState<MatchingCard[]>([])
  const [flippedCards, setFlippedCards] = useState<MatchingCard[]>([])
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [moves, setMoves] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [timer, setTimer] = useState(0)

  // Track completed sets
  const completedSetsRef = useRef<Set<number>>(new Set())

  // Stats
  const totalSets = memoryMatchSets.length
  const totalWords = getTotalUniqueWords()
  const vocabularySize = getTotalVocabularyWords()

  useEffect(() => {
    if (gameStarted && !gameCompleted) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [gameStarted, gameCompleted])

  useEffect(() => {
    if (matchedPairs === memoryMatchSets[currentSetIndex].words.length) {
      setGameCompleted(true)
      // Mark this set as completed
      completedSetsRef.current.add(currentSetIndex)
    }
  }, [matchedPairs, currentSetIndex])

  const initializeGame = () => {
    const currentSet = memoryMatchSets[currentSetIndex]

    // Create pairs of cards (arabic and meaning)
    const initialCards: MatchingCard[] = []

    currentSet.words.forEach((word) => {
      initialCards.push({
        id: `arabic-${word.id}`,
        content: word.arabic,
        type: "arabic",
        originalId: word.id,
        isFlipped: false,
        isMatched: false,
      })

      initialCards.push({
        id: `meaning-${word.id}`,
        content: word.meaning,
        type: "meaning",
        originalId: word.id,
        isFlipped: false,
        isMatched: false,
      })
    })

    // Shuffle the cards
    const shuffledCards = initialCards.sort(() => Math.random() - 0.5)

    setCards(shuffledCards)
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setTimer(0)
    setGameStarted(true)
    setGameCompleted(false)
  }

  const changeSet = (direction: "next" | "prev") => {
    let newIndex = currentSetIndex

    if (direction === "next") {
      newIndex = (currentSetIndex + 1) % totalSets
    } else {
      newIndex = (currentSetIndex - 1 + totalSets) % totalSets
    }

    setCurrentSetIndex(newIndex)
    setGameStarted(false)
    setGameCompleted(false)
  }

  const handleCardClick = (clickedCard: MatchingCard) => {
    // Ignore if the card is already flipped or matched
    if (clickedCard.isFlipped || clickedCard.isMatched) {
      return
    }

    // Ignore if two cards are already flipped
    if (flippedCards.length === 2) {
      return
    }

    // Flip the card
    const updatedCards = cards.map((card) => (card.id === clickedCard.id ? { ...card, isFlipped: true } : card))

    setCards(updatedCards)

    // Add to flipped cards
    const newFlippedCards = [...flippedCards, clickedCard]
    setFlippedCards(newFlippedCards)

    // If two cards are flipped, check for a match
    if (newFlippedCards.length === 2) {
      setMoves(moves + 1)

      const [firstCard, secondCard] = newFlippedCards

      if (firstCard.originalId === secondCard.originalId && firstCard.type !== secondCard.type) {
        // It's a match!
        setTimeout(() => {
          const matchedCards = cards.map((card) =>
            card.originalId === firstCard.originalId ? { ...card, isMatched: true } : card,
          )

          setCards(matchedCards)
          setFlippedCards([])
          setMatchedPairs(matchedPairs + 1)
        }, 500)
      } else {
        // Not a match, flip them back
        setTimeout(() => {
          const resetCards = cards.map((card) =>
            flippedCards.some((flipped) => flipped.id === card.id) ? { ...card, isFlipped: false } : card,
          )

          setCards(resetCards)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`
  }

  const currentSet = memoryMatchSets[currentSetIndex]
  const completedSetsCount = completedSetsRef.current.size

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Memory Match Game</h1>
          <Link href="/games">
            <Button variant="ghost" size="sm">
              Back to Games
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {!gameStarted ? (
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Memory Match</CardTitle>
              <CardDescription className="text-center">Match Arabic words with their meanings</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex justify-between items-center mb-4">
                <Button variant="outline" size="sm" onClick={() => changeSet("prev")} className="flex items-center">
                  <ChevronLeft className="h-4 w-4 mr-1" /> Previous Set
                </Button>
                <span className="text-sm font-medium">
                  Set {currentSetIndex + 1} of {totalSets}
                </span>
                <Button variant="outline" size="sm" onClick={() => changeSet("next")} className="flex items-center">
                  Next Set <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg mb-4">
                <h3 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">{currentSet.name}</h3>
                <p className="text-sm mb-2">{currentSet.description}</p>
                <div className="text-xs text-emerald-600 dark:text-emerald-400">
                  {completedSetsRef.current.has(currentSetIndex)
                    ? "✓ You've completed this set!"
                    : "You haven't completed this set yet"}
                </div>
              </div>

              <p className="mb-4">
                Test your knowledge of Quranic vocabulary by matching Arabic words with their meanings. Flip cards to
                find matching pairs and try to complete the game with as few moves as possible!
              </p>

              <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
                <h3 className="font-semibold mb-2">Your Progress</h3>
                <p className="text-sm mb-2">
                  You've completed {completedSetsCount} of {totalSets} sets (
                  {Math.round((completedSetsCount / totalSets) * 100)}%)
                </p>
                <Progress value={(completedSetsCount / totalSets) * 100} className="h-2 mb-2" />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Master all {totalWords} words from our collection of {vocabularySize} Quranic vocabulary terms!
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button onClick={initializeGame} className="bg-emerald-600 hover:bg-emerald-700">
                Start Game
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <>
            <div className="mb-6 max-w-md mx-auto">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <Timer className="h-4 w-4 mr-1" />
                  <span>{formatTime(timer)}</span>
                </div>
                <div>Moves: {moves}</div>
                <div>
                  Pairs: {matchedPairs}/{currentSet.words.length}
                </div>
              </div>
              <Progress value={(matchedPairs / currentSet.words.length) * 100} className="h-2" />
              <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2 mb-6">
                Playing Set {currentSetIndex + 1}: {currentSet.name}
              </div>
            </div>

            {gameCompleted ? (
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Set Completed!</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg mb-4">Congratulations! You've matched all the pairs.</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    You've mastered Set {currentSetIndex + 1}: {currentSet.name}
                  </p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Time</div>
                      <div className="text-xl font-bold">{formatTime(timer)}</div>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                      <div className="text-sm text-gray-500 dark:text-gray-400">Moves</div>
                      <div className="text-xl font-bold">{moves}</div>
                    </div>
                  </div>

                  <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg mb-4">
                    <h3 className="font-semibold text-emerald-700 dark:text-emerald-300 mb-2">Your Progress</h3>
                    <p className="text-sm mb-2">
                      You've completed {completedSetsCount} of {totalSets} sets (
                      {Math.round((completedSetsCount / totalSets) * 100)}%)
                    </p>
                    <Progress value={(completedSetsCount / totalSets) * 100} className="h-2" />
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={initializeGame}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Play Again
                  </Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={() => changeSet("next")}>
                    Next Set <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className={`aspect-square flex items-center justify-center rounded-lg cursor-pointer transition-all duration-300 transform ${
                      card.isFlipped || card.isMatched
                        ? "bg-white dark:bg-gray-800 shadow-md"
                        : "bg-emerald-600 hover:bg-emerald-700"
                    } ${card.isMatched ? "opacity-70" : "opacity-100"}`}
                    onClick={() => handleCardClick(card)}
                  >
                    {(card.isFlipped || card.isMatched) && (
                      <span className={`text-center p-2 ${card.type === "arabic" ? "text-xl font-arabic" : "text-sm"}`}>
                        {card.content}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  )
}
