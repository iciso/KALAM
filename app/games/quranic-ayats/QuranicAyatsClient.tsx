"use client"

import { useState, useEffect } from "react"
import { useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"
import { DndProvider } from "react-dnd"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { quranicAyatsGameData } from "@/data/quranic-ayats-game-data"

interface WordItem {
  id: string
  text: string
}

interface GameProps {
  difficulty: "easy" | "medium" | "hard"
  initialAyatCount: number
  isMobile?: boolean
}

interface WordProps {
  word: WordItem
  isMobile: boolean
  onClick: () => void
  onTouchEnd: () => void
}

// Mobile detection hook
const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768 || 
                 /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return isMobile
}

// Word component
function Word({ word, isMobile, onClick, onTouchEnd }: WordProps) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "WORD",
    item: { id: word.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div
      ref={drag}
      onClick={onClick}
      onTouchEnd={onTouchEnd}
      className={`
        cursor-move select-none
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        ${isMobile ? 'py-3 px-4 text-lg' : 'py-2 px-3 text-2xl w-full text-center'}
        bg-white dark:bg-gray-800 rounded-lg shadow-md
        border border-gray-200 dark:border-gray-700
        active:scale-95 transition-transform
        arabic-text
      `}
      style={{
        touchAction: 'none',
        userSelect: 'none',
        fontFamily: "'Amiri', serif",
        direction: 'rtl'
      }}
    >
      {word.text}
    </div>
  )
}

// Main game component
function MakeQuranicAyatsGame({ difficulty, initialAyatCount }: GameProps) {
  const isMobile = useMobileDetect()
  const [wordPool, setWordPool] = useState<WordItem[]>([])
  const [arrangedWords, setArrangedWords] = useState<WordItem[]>([])
  const [difficultyLevel, setDifficultyLevel] = useState(difficulty)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState("")
  const [currentAyahIndex, setCurrentAyahIndex] = useState(0)

  // Initialize words based on difficulty
  useEffect(() => {
    const initialWords = generateInitialWords(difficultyLevel)
    setWordPool(initialWords)
    setArrangedWords([])
    setFeedback("")
    setCurrentAyahIndex(0)
  }, [difficultyLevel])

  const generateInitialWords = (mode: string): WordItem[] => {
    const levelData = quranicAyatsGameData[mode as keyof typeof quranicAyatsGameData]
    if (!levelData || !levelData[currentAyahIndex]) return []
    
    return shuffleArray([...levelData[currentAyahIndex]])
  }

  const shuffleArray = (array: WordItem[]) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

  const handleWordClick = (word: WordItem) => {
    if (wordPool.includes(word)) {
      setWordPool(wordPool.filter(w => w.id !== word.id))
      setArrangedWords([...arrangedWords, word])
    } else {
      setArrangedWords(arrangedWords.filter(w => w.id !== word.id))
      setWordPool([...wordPool, word])
    }
  }

  const handleWordTouchEnd = (word: WordItem) => {
    handleWordClick(word)
  }

  const [, drop] = useDrop({
    accept: "WORD",
    drop: (item: { id: string }) => {
      const word = wordPool.find(w => w.id === item.id) || arrangedWords.find(w => w.id === item.id)
      if (word) handleWordClick(word)
    },
  })

  const checkAnswer = (words: WordItem[]) => {
    const correctOrder = quranicAyatsGameData.correctOrders[difficultyLevel][currentAyahIndex]
    const isCorrect = words.length === correctOrder.length && 
                     words.every((word, index) => word.id === correctOrder[index])
    
    if (isCorrect) {
      setScore(score + 1)
      setFeedback("Correct! Well done.")
      
      setTimeout(() => {
        const nextAyahIndex = currentAyahIndex + 1
        const currentLevel = quranicAyatsGameData[difficultyLevel]
        
        if (nextAyahIndex < currentLevel.length) {
          setCurrentAyahIndex(nextAyahIndex)
          const newWords = generateInitialWords(difficultyLevel)
          setWordPool(newWords)
          setArrangedWords([])
        } else {
          if (difficultyLevel === 'hard') {
            setFeedback(`Congratulations! Final Score: ${score + 1}`)
            setTimeout(() => {
              setScore(0)
              setDifficultyLevel('easy')
              setCurrentAyahIndex(0)
              const newWords = generateInitialWords('easy')
              setWordPool(newWords)
              setArrangedWords([])
            }, 3000)
          } else {
            const nextDifficulty = 
              difficultyLevel === 'easy' ? 'medium' : 
              difficultyLevel === 'medium' ? 'hard' : 'easy'
            
            setFeedback(`Level Complete! Score: ${score + 1}. Moving to ${nextDifficulty} level.`)
            setTimeout(() => {
              setDifficultyLevel(nextDifficulty)
              setCurrentAyahIndex(0)
              const newWords = generateInitialWords(nextDifficulty)
              setWordPool(newWords)
              setArrangedWords([])
              setScore(0)
            }, 3000)
          }
        }
        setFeedback("")
      }, 1500)
    } else {
      setFeedback("Not quite right. Try again!")
    }
  }

  const resetGame = () => {
    const newWords = generateInitialWords(difficultyLevel)
    setWordPool(newWords)
    setArrangedWords([])
    setFeedback("")
  }

  return (
    <div className="game-container">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-2 text-center">Make Quranic Ayats</h1>
        <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
          Arrange the words to form complete Quranic verses
        </p>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>How to Play</CardTitle>
            <CardDescription>Learn how to play the Make Quranic Ayats game</CardDescription>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal list-inside space-y-2">
              <li>{isMobile ? "Tap and drag" : "Drag"} words from the Word Pool to arrange them</li>
              <li>Arrange the words from right to left to form a complete Quranic verse</li>
              <li>{isMobile ? "Tap" : "Click"} on words to move them back to the Word Pool</li>
              <li>Score points for each correctly arranged verse!</li>
            </ol>
          </CardContent>
        </Card>

        <Tabs defaultValue={difficulty} onValueChange={(value) => setDifficultyLevel(value as any)}>
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="easy">Easy</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="hard">Hard</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="word-pool mb-8">
          <h2 className="text-xl font-semibold mb-4">Word Pool</h2>
          <div className="flex flex-wrap gap-2">
            {wordPool.map((word) => (
              <Word 
                key={word.id} 
                word={word} 
                isMobile={isMobile}
                onClick={() => handleWordClick(word)}
                onTouchEnd={() => handleWordTouchEnd(word)}
              />
            ))}
          </div>
        </div>
        
        <div className="arrangement-area" ref={drop}>
          <h2 className="text-xl font-semibold mb-4">Your Arrangement</h2>
          <div dir="rtl" className="flex flex-col gap-2 min-h-32 border-2 border-dashed p-4 rounded-lg">
            {arrangedWords.length > 0 ? (
              arrangedWords.map((word) => (
                <Word 
                  key={word.id} 
                  word={word} 
                  isMobile={isMobile}
                  onClick={() => handleWordClick(word)}
                  onTouchEnd={() => handleWordTouchEnd(word)}
                />
              ))
            ) : (
              <p className="text-gray-400">Drag words here to arrange them</p>
            )}
          </div>
        </div>

        {feedback && (
          <div className={`mt-4 p-3 rounded-md text-center ${
            feedback.includes("Correct") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}>
            {feedback}
          </div>
        )}

        <div className="flex gap-4 mt-8">
          <button 
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg flex-1"
            onClick={() => checkAnswer(arrangedWords)}
          >
            Check Answer
          </button>
          <button 
            className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg flex-1"
            onClick={resetGame}
          >
            Next
          </button>
        </div>

        <div className="mt-4 text-center font-semibold">
          Score: {score}
        </div>
      </div>
    </div>
  )
}

// Main exported wrapper
export default function QuranicAyatsWrapper({ difficulty, initialAyatCount }: GameProps) {
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useMobileDetect()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return (
      <div className="container mx-auto py-8 text-center">
        Loading game components...
      </div>
    )
  }

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend} options={{
      enableMouseEvents: true,
      delayTouchStart: 150,
      delay: 0,
      touchSlop: 5
    }}>
      <MakeQuranicAyatsGame difficulty={difficulty} initialAyatCount={initialAyatCount} />
    </DndProvider>
  )
}
