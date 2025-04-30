"use client"

import { useState, useEffect } from "react"
import { Timer, RefreshCw } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { vocabularyService } from "@/services/vocabulary-service"

type MatchingCard = {
  id: string
  content: string
  type: "arabic" | "meaning"
  originalId: number
  isFlipped: boolean
  isMatched: boolean
}

// Function to generate vocabulary pairs for the game
const generateVocabularyPairs = (count = 8) => {
  const allWords = vocabularyService.getAllWords()
  const shuffledWords = [...allWords].sort(() => Math.random() - 0.5)
  const selectedWords = shuffledWords.slice(0, count)

  return selectedWords.map((word, index) => ({
    id: index + 1,
    arabic: word.arabic,
    meaning: word.meanings[0],
  }))
}

export default function MemoryGamePage() {
  const [vocabularyPairs, setVocabularyPairs] = useState(generateVocabularyPairs())
  const [cards, setCards] = useState<MatchingCard[]>([])
  const [flippedCards, setFlippedCards] = useState<MatchingCard[]>([])
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [moves, setMoves] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [timer, setTimer] = useState(0)

  useEffect(() => {
    if (gameStarted && !gameCompleted) {
      const interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1)
      }, 1000)

      return () => clearInterval(interval)
    }
  }, [gameStarted, gameCompleted])

  useEffect(() => {
    if (matchedPairs === vocabularyPairs.length) {
      setGameCompleted(true)
    }
  }, [matchedPairs, vocabularyPairs.length])

  const initializeGame = () => {
    // Create pairs of cards (arabic and meaning)
    const initialCards: MatchingCard[] = []

    vocabularyPairs.forEach((pair) => {
      initialCards.push({
        id: `arabic-${pair.id}`,
        content: pair.arabic,
        type: "arabic",
        originalId: pair.id,
        isFlipped: false,
        isMatched: false,
      })

      initialCards.push({
        id: `meaning-${pair.id}`,
        content: pair.meaning,
        type: "meaning",
        originalId: pair.id,
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

  const startNewGame = () => {
    // Generate new vocabulary pairs
    const newVocabularyPairs = generateVocabularyPairs()
    setVocabularyPairs(newVocabularyPairs)

    // Create pairs of cards with the new vocabulary
    const initialCards: MatchingCard[] = []

    newVocabularyPairs.forEach((pair) => {
      initialCards.push({
        id: `arabic-${pair.id}`,
        content: pair.arabic,
        type: "arabic",
        originalId: pair.id,
        isFlipped: false,
        isMatched: false,
      })

      initialCards.push({
        id: `meaning-${pair.id}`,
        content: pair.meaning,
        type: "meaning",
        originalId: pair.id,
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
              <CardTitle className="text-2xl text-center">Memory Match Game</CardTitle>
              <CardDescription className="text-center">Match Arabic words with their meanings</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-6">
                Test your knowledge of Quranic vocabulary by matching Arabic words with their meanings. Flip cards to
                find matching pairs and try to complete the game with as few moves as possible!
              </p>
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
                  Pairs: {matchedPairs}/{vocabularyPairs.length}
                </div>
              </div>
              <Progress value={(matchedPairs / vocabularyPairs.length) * 100} className="h-2" />
            </div>

            {gameCompleted ? (
              <Card className="max-w-md mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">Game Completed!</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-lg mb-4">Congratulations! You've matched all the pairs.</p>
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
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={initializeGame}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Play Again
                  </Button>
                  <Button className="bg-emerald-600 hover:bg-emerald-700" onClick={startNewGame}>
                    <RefreshCw className="mr-2 h-4 w-4" />
                    New Words
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
