"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shuffle, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"
import { ImanOMeter } from "@/components/score"
import { divineNames } from "@/data/divine-names-data"

export default function DivineAttributesMatchingGame() {
  const [cards, setCards] = useState<
    Array<{ id: number; content: string; type: string; matched: boolean; flipped: boolean }>
  >([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState<number>(0)
  const [moves, setMoves] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [gameComplete, setGameComplete] = useState<boolean>(false)
  const [gameStarted, setGameStarted] = useState<boolean>(false)
  const [setNumber, setSetNumber] = useState<number>(1)

  // Initialize game with 5 pairs (10 cards) from divineNames
  useEffect(() => {
    initializeGame()
  }, [setNumber])

  const initializeGame = () => {
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setGameComplete(false)
    setScore(0)
    setGameStarted(false)

    // Select 5 random divine names from the first 100 (assuming 99 names + 1)
    const availableNames = divineNames.filter((name) => name.id <= 100).sort(() => Math.random() - 0.5).slice(0, 5)

    // Create card pairs (arabic and english)
    const cardPairs = availableNames.flatMap((name) => [
      { id: name.id * 2 - 1, content: name.arabic, type: "arabic", matched: false, flipped: false },
      { id: name.id * 2, content: name.english, type: "english", matched: false, flipped: false },
    ])

    // Shuffle the cards
    const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
  }

  const handleCardClick = (index: number) => {
    if (cards[index].flipped || cards[index].matched) return
    if (flippedCards.length === 2) return

    if (!gameStarted) setGameStarted(true)

    const newCards = [...cards]
    newCards[index].flipped = true
    setCards(newCards)

    const newFlippedCards = [...flippedCards, index]
    setFlippedCards(newFlippedCards)

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1)

      const firstCardId = Math.floor(cards[newFlippedCards[0]].id / 2)
      const secondCardId = Math.floor(cards[newFlippedCards[1]].id / 2)

      if (firstCardId === secondCardId && cards[newFlippedCards[0]].type !== cards[newFlippedCards[1]].type) {
        setTimeout(() => {
          const matchedCards = [...cards]
          matchedCards[newFlippedCards[0]].matched = true
          matchedCards[newFlippedCards[1]].matched = true
          setCards(matchedCards)
          setMatchedPairs((prev) => prev + 1)
          setScore((prev) => prev + 10)
          setFlippedCards([])

          if (matchedPairs + 1 === 5) {
            setGameComplete(true)
          }
        }, 500)
      } else {
        setTimeout(() => {
          const resetCards = [...cards]
          resetCards[newFlippedCards[0]].flipped = false
          resetCards[newFlippedCards[1]].flipped = false
          setCards(resetCards)
          setFlippedCards([])
        }, 1000)
      }
    }
  }

  const startNextSet = () => {
    if (setNumber < 20) {
      setSetNumber((prev) => prev + 1)
    } else {
      alert("You have completed all 20 sets! Great job!")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Match Names of Allah - Set {setNumber}</CardTitle>
          <CardDescription className="text-center">
            Match the Arabic names of Allah with their English meanings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">Pairs:</span> {matchedPairs}/5
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Moves:</span> {moves}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">Score:</span> {score}
            </div>
          </div>

          <div className="w-full max-w-md mx-auto mb-4">
            <ImanOMeter score={score} maxScore={500} /> {/* Max score for 5 pairs x 10 */}
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
              <div className="text-xl font-bold text-emerald-600 mb-2">Congratulations! Set {setNumber} Complete!</div>
              <div className="text-gray-600">
                You found all 5 pairs in {moves} moves with a score of {score}.
              </div>
              <Button onClick={startNextSet} className="mt-4 bg-emerald-600 hover:bg-emerald-700">
                Next Set
              </Button>
              {setNumber === 20 && (
                <div className="mt-4 text-lg font-bold text-emerald-600">
                  You have mastered all 100 divine names! Alhamdulillah!
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
