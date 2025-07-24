"use client"

import { useState, useRef, useEffect } from "react"
import { useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"
import { DndProvider } from "react-dnd"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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

// Main game component
export default function MakeQuranicAyatsGame({ difficulty, initialAyatCount }: GameProps) {
  const isMobile = useMobileDetect()
  const [wordPool, setWordPool] = useState<WordItem[]>([])
  const [arrangedWords, setArrangedWords] = useState<WordItem[]>([])
  const [difficultyLevel, setDifficultyLevel] = useState(difficulty)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState("")

  // Initialize words based on difficulty
  useEffect(() => {
    const initialWords = generateInitialWords(difficultyLevel, initialAyatCount)
    setWordPool(initialWords)
    setArrangedWords([])
    setFeedback("")
  }, [difficultyLevel, initialAyatCount])

  const generateInitialWords = (mode: string, count: number): WordItem[] => {
    // Sample words - replace with your actual word generation logic
    const easyWords = [
      { id: '1', text: 'بسم' },
      { id: '2', text: 'الله' },
      { id: '3', text: 'الرحمن' },
      { id: '4', text: 'الرحيم' }
    ]
    
    const mediumWords = [...easyWords, 
      { id: '5', text: 'الحمد' },
      { id: '6', text: 'لله' },
      { id: '7', text: 'رب' },
      { id: '8', text: 'العالمين' }
    ]
    
    const hardWords = [...mediumWords,
      { id: '9', text: 'الرحمن' },
      { id: '10', text: 'الرحيم' },
      { id: '11', text: 'مالك' },
      { id: '12', text: 'يوم' },
      { id: '13', text: 'الدين' }
    ]

    switch(mode) {
      case 'easy': return shuffleArray([...easyWords])
      case 'medium': return shuffleArray([...mediumWords])
      case 'hard': return shuffleArray([...hardWords])
      default: return shuffleArray([...easyWords])
    }
  }

  const shuffleArray = (array: WordItem[]) => {
    return [...array].sort(() => Math.random() - 0.5)
  }

  const handleWordClick = (word: WordItem) => {
    if (wordPool.includes(word)) {
      // Move from pool to arrangement
      setWordPool(wordPool.filter(w => w.id !== word.id))
      setArrangedWords([...arrangedWords, word])
    } else {
      // Move from arrangement to pool
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
    // Simple validation - replace with your actual validation logic
    const correctOrder = ['1', '2', '3', '4'] // Example correct order IDs
    const isCorrect = words.every((word, index) => word.id === correctOrder[index])
    
    if (isCorrect) {
      setScore(score + 1)
      setFeedback("Correct! Well done.")
      setTimeout(() => {
        const newWords = generateInitialWords(difficultyLevel, initialAyatCount)
        setWordPool(newWords)
        setArrangedWords([])
        setFeedback("")
      }, 1500)
    } else {
      setFeedback("Not quite right. Try again!")
    }
  }

  const resetGame = () => {
    const newWords = generateInitialWords(difficultyLevel, initialAyatCount)
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
          <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} gap-2 min-h-32 border-2 border-dashed p-4 rounded-lg`}>
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
            Reset
          </button>
        </div>

        <div className="mt-4 text-center font-semibold">
          Score: {score}
        </div>
      </div>
    </div>
  )
}

// Wrap the game with DndProvider
export function QuranicAyatsWrapper({ difficulty, initialAyatCount }: GameProps) {
  const isMobile = useMobileDetect()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return <div className="text-center py-8">Loading game...</div>
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
        ${isMobile ? 'py-3 px-4 text-lg' : 'py-2 px-3'}
        bg-white dark:bg-gray-800 rounded-lg shadow-md
        border border-gray-200 dark:border-gray-700
        active:scale-95 transition-transform
      `}
      style={{
        touchAction: 'none',
        userSelect: 'none',
      }}
    >
      {word.text}
    </div>
  )
}
