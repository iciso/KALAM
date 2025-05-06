"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shuffle, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"
import { ImanOMeter } from "@/components/score"

// Divine attributes data
const divineAttributes = [
  { arabic: "الرحمن", english: "The Most Merciful", id: 1 },
  { arabic: "الرحيم", english: "The Most Compassionate", id: 2 },
  { arabic: "الملك", english: "The King", id: 3 },
  { arabic: "القدوس", english: "The Holy", id: 4 },
  { arabic: "السلام", english: "The Source of Peace", id: 5 },
  { arabic: "المؤمن", english: "The Granter of Security", id: 6 },
  { arabic: "المهيمن", english: "The Guardian", id: 7 },
  { arabic: "العزيز", english: "The Mighty", id: 8 },
  { arabic: "الجبار", english: "The Compeller", id: 9 },
  { arabic: "المتكبر", english: "The Greatest", id: 10 },
  { arabic: "الخالق", english: "The Creator", id: 11 },
  { arabic: "البارئ", english: "The Originator", id: 12 },
  { arabic: "المصور", english: "The Fashioner", id: 13 },
  { arabic: "الغفار", english: "The All-Forgiving", id: 14 },
  { arabic: "القهار", english: "The Subduer", id: 15 },
  { arabic: "الوهاب", english: "The Bestower", id: 16 },
  { arabic: "الرزاق", english: "The Provider", id: 17 },
  { arabic: "الفتاح", english: "The Opener", id: 18 },
  { arabic: "العليم", english: "The All-Knowing", id: 19 },
  { arabic: "القابض", english: "The Constrictor", id: 20 },
]

export default function DivineAttributesMatchingGame() {
  const [cards, setCards] = useState<
    Array<{ id: number; content: string; type: string; matched: boolean; flipped: boolean }>
  >([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState<number>(0)
  const [moves, setMoves] = useState<number>(0)
  const [gameComplete, setGameComplete] = useState<boolean>(false)
  const [score, setScore] = useState<number>(1000)
  const [gameStarted, setGameStarted] = useState<boolean>(false)

  // Initialize game
  useEffect(() => {
    initializeGame()
  }, [])

  const initializeGame = () => {
    // Reset game state
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setGameComplete(false)
    setScore(1000)
    setGameStarted(false)

    // Get a random subset of divine attributes (10 pairs)
    const shuffledAttributes = [...divineAttributes].sort(() => Math.random() - 0.5).slice(0, 10)

    // Create card pairs (arabic and english)
    const cardPairs = shuffledAttributes.flatMap((attr) => [
      { id: attr.id * 2 - 1, content: attr.arabic, type: "arabic", matched: false, flipped: false },
      { id: attr.id * 2, content: attr.english, type: "english", matched: false, flipped: false },
    ])

    // Shuffle the cards
    const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
  }

  const handleCardClick = (index: number) => {
    // Don't allow flipping if the card is already flipped or matched
    if (cards[index].flipped || cards[index].matched) return

    // Don't allow more than 2 cards to be flipped at once
    if (flippedCards.length === 2) return

    // Start the game on first card flip
    if (!gameStarted) {
      setGameStarted(true)
    }

    // Flip the card
    const newCards = [...cards]
    newCards[index].flipped = true
    setCards(newCards)

    // Add to flipped cards
    const newFlippedCards = [...flippedCards, index]
    setFlippedCards(newFlippedCards)

    // If we have 2 flipped cards, check for a match
    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1)

      const firstCardId = Math.floor(cards[newFlippedCards[0]].id / 2)
      const secondCardId = Math.floor(cards[newFlippedCards[1]].id / 2)

      // Check if the cards match (same attribute but different types)
      if (firstCardId === secondCardId && cards[newFlippedCards[0]].type !== cards[newFlippedCards[1]].type) {
        // It's a match!
        setTimeout(() => {
          const matchedCards = [...cards]
          matchedCards[newFlippedCards[0]].matched = true
          matchedCards[newFlippedCards[1]].matched = true
          setCards(matchedCards)
          setMatchedPairs((prev) => prev + 1)
          setFlippedCards([])

          // Check if game is complete
          if (matchedPairs + 1 === 10) {
            setGameComplete(true)
          }
        }, 500)
      } else {
        // Not a match, flip cards back
        setTimeout(() => {
          const resetCards = [...cards]
          resetCards[newFlippedCards[0]].flipped = false
          resetCards[newFlippedCards[1]].flipped = false
          setCards(resetCards)
          setFlippedCards([])
          // Reduce score for wrong match
          setScore((prev) => Math.max(0, prev - 20))
        }, 1000)
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Divine Attributes Matching Game</CardTitle>
          <CardDescription className="text-center">
            Match the Arabic names of Allah with their English meanings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">Pairs:</span> {matchedPairs}/10
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Moves:</span> {moves}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Score:</span> {score}
            </div>
          </div>

          <div className="w-full max-w-md mx-auto mb-4">
            <ImanOMeter score={score} maxScore={1000} />
          </div>

          <div className="flex justify-center mb-4">
            <Button onClick={initializeGame} className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700">
              <RefreshCw size={16} />
              New Game
            </Button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 mt-4">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className={`relative h-24 cursor-pointer rounded-lg shadow-md ${card.matched ? "opacity-70" : ""}`}
                onClick={() => handleCardClick(index)}
                whileHover={{ scale: card.matched ? 1 : 1.05 }}
                whileTap={{ scale: card.matched ? 1 : 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-lg bg-emerald-600 flex items-center justify-center text-white p-2 backface-hidden"
                  animate={{ rotateY: card.flipped ? 180 : 0 }}
                  transition={{ duration: 0.6 }}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className="text-center">
                    <Shuffle size={24} className="mx-auto" />
                    <div className="text-xs mt-1">Divine Attribute</div>
                  </div>
                </motion.div>
                <motion.div
                  className={`absolute inset-0 rounded-lg flex items-center justify-center p-2 text-center backface-hidden ${
                    card.type === "arabic" ? "bg-amber-100 text-amber-800" : "bg-blue-100 text-blue-800"
                  }`}
                  initial={{ rotateY: -180 }}
                  animate={{ rotateY: card.flipped ? 0 : -180 }}
                  transition={{ duration: 0.6 }}
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div className={`${card.type === "arabic" ? "text-xl font-arabic" : "text-sm"} font-medium`}>
                    {card.content}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {gameComplete && (
            <div className="mt-6 text-center">
              <div className="text-xl font-bold text-emerald-600 mb-2">Congratulations! You completed the game!</div>
              <div className="text-gray-600">
                You found all pairs in {moves} moves with a score of {score}.
              </div>
              <Button onClick={initializeGame} className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                Play Again
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
