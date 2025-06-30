"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shuffle, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"
import { ImanOMeter } from "@/components/score"
import { divineNames } from "@/data/divine-names-data"

export default function DivineAttributesMatchingGame() {
  const [cards, setCards] = useState<
    Array<{ id: number; baseId: number; content: string; type: string; matched: boolean; flipped: boolean }>
  >([])
  const [flippedCards, setFlippedCards] = useState<number[]>([])
  const [matchedPairs, setMatchedPairs] = useState<number>(0)
  const [moves, setMoves] = useState<number>(0)
  const [score, setScore] = useState<number>(0)
  const [gameComplete, setGameComplete] = useState<boolean>(false)
  const [gameStarted, setGameStarted] = useState<boolean>(false)
  const [setNumber, setSetNumber] = useState<number>(1)
  const totalNames = divineNames.length // 99 names
  const namesPerSet = 5
  const maxSets = Math.floor(totalNames / namesPerSet) // 19 full sets + 1 partial set (20 sets total)
  const remainingNames = totalNames % namesPerSet // 4 names in the last set
  const currentSetIndexRef = useRef<number>(0)
  const usedSetIndicesRef = useRef<number[]>([0])

  useEffect(() => {
    initializeGame()
  }, [setNumber])

  const initializeGame = () => {
    console.log("Initializing game for set:", setNumber, "Index:", currentSetIndexRef.current)
    setFlippedCards([])
    setMatchedPairs(0)
    setMoves(0)
    setGameComplete(false)
    setGameStarted(false)

    const namesToSelect = setNumber <= maxSets ? namesPerSet : remainingNames || namesPerSet
    const startIndex = currentSetIndexRef.current * namesPerSet
    const endIndex = Math.min(startIndex + namesToSelect, totalNames)
    const availableNames = divineNames.slice(startIndex, endIndex).sort(() => Math.random() - 0.5)

    const cardPairs = availableNames.flatMap((name) => [
      { id: name.id * 2, baseId: name.id, content: name.arabic, type: "arabic", matched: false, flipped: false },
      { id: name.id * 2 + 1, baseId: name.id, content: name.english, type: "english", matched: false, flipped: false },
    ])

    const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5)
    setCards(shuffledCards)
    console.log("Cards initialized:", shuffledCards.map(c => ({ content: c.content, baseId: c.baseId })))
  }

  const handleCardClick = (index: number) => {
    console.log("Card clicked at index:", index, "Content:", cards[index].content)
    if (cards[index].flipped || cards[index].matched) {
      console.log("Card already flipped or matched, skipping")
      return
    }
    if (flippedCards.length === 2) {
      console.log("Max 2 cards flipped, waiting for reset")
      return
    }

    if (!gameStarted) setGameStarted(true)

    const newCards = [...cards]
    newCards[index].flipped = true
    setCards(newCards)
    console.log("Flipped card at index:", index)

    const newFlippedCards = [...flippedCards, index]
    setFlippedCards(newFlippedCards)
    console.log("Flipped cards:", newFlippedCards)

    if (newFlippedCards.length === 2) {
      setMoves((prev) => prev + 1)
      console.log("Two cards flipped, checking match")

      const firstBaseId = cards[newFlippedCards[0]].baseId
      const secondBaseId = cards[newFlippedCards[1]].baseId
      console.log("Card base IDs:", firstBaseId, secondBaseId)
      console.log("Card types:", cards[newFlippedCards[0]].type, cards[newFlippedCards[1]].type)

      if (firstBaseId === secondBaseId && cards[newFlippedCards[0]].type !== cards[newFlippedCards[1]].type) {
        console.log("Match detected:", cards[newFlippedCards[0]].content, cards[newFlippedCards[1]].content)
        const matchedCards = [...cards]
        matchedCards[newFlippedCards[0]].matched = true
        matchedCards[newFlippedCards[1]].matched = true
        setCards(matchedCards)
        setMatchedPairs((prev) => prev + 1)
        setScore((prev) => prev + 10)
        setFlippedCards([])
        console.log("Match updated: Score:", score + 10, "Matched pairs:", matchedPairs + 1)

        const totalPairs = setNumber <= maxSets ? namesPerSet / 2 : remainingNames / 2 || namesPerSet / 2
        if (matchedPairs + 1 === totalPairs) {
          setGameComplete(true)
          console.log("Set complete")
        }
      } else {
        console.log("No match, resetting cards")
        setTimeout(() => {
          const resetCards = [...cards]
          resetCards[newFlippedCards[0]].flipped = false
          resetCards[newFlippedCards[1]].flipped = false
          setCards(resetCards)
          setFlippedCards([])
          console.log("Cards reset")
        }, 1000)
      }
    }
  }

  const startNextSet = () => {
    console.log("Starting next set, current setNumber:", setNumber, "currentIndex:", currentSetIndexRef.current)
    if (setNumber < maxSets + (remainingNames > 0 ? 1 : 0)) {
      const nextIndex = currentSetIndexRef.current + 1
      if (nextIndex < maxSets + (remainingNames > 0 ? 1 : 0)) {
        currentSetIndexRef.current = nextIndex
        usedSetIndicesRef.current.push(nextIndex)
        setSetNumber((prev) => {
          const newSetNumber = prev + 1
          console.log("Next set initialized, new setNumber:", newSetNumber, "newIndex:", nextIndex)
          return newSetNumber
        })
      } else {
        alert("You have completed all sets! Great job mastering the 99 Names of Allah! Alhamdulillah!")
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Match Names of Allah - Set {setNumber}</CardTitle>
          <CardDescription className="text-center text-sm text-gray-500">
            Match the Arabic names of Allah with their English meanings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">Pairs:</span> {matchedPairs}/{setNumber <= maxSets ? 5 : remainingNames / 2 || 5}
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
                  animate={{ rotateY: !card.matched && card.flipped ? 180 : 0 }}
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
                  animate={{ rotateY: card.matched ? 0 : card.flipped ? 0 : -180 }}
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
                You found all {setNumber <= maxSets ? 5 : remainingNames / 2 || 5} pairs in {moves} moves with a score of {score}.
              </div>
              <Button onClick={startNextSet} className="mt-4 bg-emerald-700 hover:bg-emerald-600">
                Next Set
              </Button>
              {setNumber === maxSets + (remainingNames > 0 ? 1 : 0) && (
                <div className="mt-4 text-lg font-bold text-emerald-600">
                  You have mastered all 99 Names of Allah! Alhamdulillah!
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
