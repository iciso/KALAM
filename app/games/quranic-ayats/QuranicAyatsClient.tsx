"use client"

import { useState, useEffect } from "react"
import { useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"
import { DndProvider } from "react-dnd"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, RefreshCw, Eye, EyeOff, ChevronRight, Info } from "lucide-react"
import { toast } from "sonner"
import { quranicAyatsGameData } from "@/data/quranic-ayats-game-data"

interface WordItem {
  id: string
  text: string
}

interface GameProps {
  difficulty: "easy" | "medium" | "hard"
  initialAyatCount: number
}

// Corrected mobile detection hook
const useMobileDetect = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(
        window.innerWidth <= 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => window.removeEventListener('resize', checkIfMobile)
  }, [])

  return isMobile
}

// Word component with improved mobile touch handling
function Word({ word, isMobile, onClick, onTouchEnd }: {
  word: WordItem
  isMobile: boolean
  onClick: () => void
  onTouchEnd: () => void
}) {
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
        ${isDragging ? 'opacity-50 scale-95' : 'opacity-100'}
        ${isMobile ? 'py-3 px-4 text-lg' : 'py-2 px-4 text-xl'}
        bg-white dark:bg-gray-800 rounded-lg shadow-md
        border border-gray-200 dark:border-gray-700
        active:scale-95 transition-all duration-150
        arabic-text
        flex items-center justify-center
      `}
      style={{
        touchAction: 'none',
        userSelect: 'none',
        fontFamily: "'Amiri', serif",
        direction: 'rtl',
        minWidth: isMobile ? '80px' : '100px'
      }}
    >
      {word.text}
    </div>
  )
}

// Main game component with mobile optimizations
function MakeQuranicAyatsGame({ difficulty, initialAyatCount }: GameProps) {
  const isMobile = useMobileDetect()
  const [wordPool, setWordPool] = useState<WordItem[]>([])
  const [arrangedWords, setArrangedWords] = useState<WordItem[]>([])
  const [difficultyLevel, setDifficultyLevel] = useState(difficulty)
  const [score, setScore] = useState(0)
  const [currentAyahIndex, setCurrentAyahIndex] = useState(0)
  const [currentSetIndex, setCurrentSetIndex] = useState(0)
  const [showTranslation, setShowTranslation] = useState(false)
  const [feedback, setFeedback] = useState("")
  const [gameComplete, setGameComplete] = useState(false)

  // Initialize words based on difficulty
  useEffect(() => {
    resetGameState()
  }, [difficultyLevel, currentSetIndex, currentAyahIndex])

  const resetGameState = () => {
    const initialWords = generateInitialWords()
    setWordPool(initialWords)
    setArrangedWords([])
    setShowTranslation(false)
    setGameComplete(false)
    setFeedback("")
  }

  const generateInitialWords = (): WordItem[] => {
    if (!quranicAyatsGameData[difficultyLevel] || 
        !quranicAyatsGameData[difficultyLevel][currentSetIndex] || 
        !quranicAyatsGameData[difficultyLevel][currentSetIndex][currentAyahIndex]) {
      return []
    }
    return shuffleArray([...quranicAyatsGameData[difficultyLevel][currentSetIndex][currentAyahIndex]])
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
      const word = [...wordPool, ...arrangedWords].find(w => w.id === item.id)
      if (word) handleWordClick(word)
    },
  })

  const currentAyahTranslation = quranicAyatsGameData.translations[difficultyLevel]?.[currentSetIndex]?.[currentAyahIndex]
  const correctOrder = quranicAyatsGameData.correctOrders[difficultyLevel]?.[currentSetIndex]?.[currentAyahIndex]

  const checkAnswer = () => {
    if (!correctOrder) return
    
    const isCorrect = arrangedWords.length === correctOrder.length && 
                     arrangedWords.every((word, index) => word.id === correctOrder[index])
    
    if (isCorrect) {
      setScore(score + 5)
      setFeedback("Correct! Well done.")
      setShowTranslation(true)
      toast.success("Correct! Well done.", { duration: 2000 })
      
      setTimeout(() => {
        moveToNextAyah()
      }, 2000)
    } else {
      setFeedback("Not quite right. Try again!")
      toast.error("Not quite right. Try rearranging the words.", { duration: 1500 })
    }
  }

  const moveToNextAyah = () => {
    const nextAyahIndex = currentAyahIndex + 1
    const currentSet = quranicAyatsGameData[difficultyLevel][currentSetIndex]
    
    if (nextAyahIndex < currentSet.length) {
      setCurrentAyahIndex(nextAyahIndex)
    } else {
      moveToNextSet()
    }
    resetGameState()
  }

  const moveToNextSet = () => {
    const nextSetIndex = currentSetIndex + 1
    if (nextSetIndex < quranicAyatsGameData[difficultyLevel].length) {
      setCurrentSetIndex(nextSetIndex)
      setCurrentAyahIndex(0)
    } else {
      completeGame()
    }
  }

  const completeGame = () => {
    if (difficultyLevel === 'hard') {
      setGameComplete(true)
      toast.success("Masha'Allah! You've completed all levels.", {
        description: `Final Score: ${score + 5}`,
        duration: 4000
      })
    } else {
      const nextDifficulty = difficultyLevel === 'easy' ? 'medium' : 'hard'
      setDifficultyLevel(nextDifficulty)
      setCurrentSetIndex(0)
      setCurrentAyahIndex(0)
      toast.info(`Moving to ${nextDifficulty} level!`, { duration: 2000 })
    }
  }

  const resetGame = () => {
    resetGameState()
    toast.info("Game reset", { description: "Words have been reshuffled.", duration: 1500 })
  }

  const skipToNext = () => {
    moveToNextAyah()
    toast.info("Skipped to next ayah", { duration: 1500 })
  }

  if (gameComplete) {
    return (
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mb-4">
          Masha'Allah! Game Complete
        </h2>
        <p className="text-lg mb-6">
          You've successfully arranged all Quranic verses across all difficulty levels.
        </p>
        <Button 
          onClick={() => {
            setDifficultyLevel('easy')
            setCurrentSetIndex(0)
            setCurrentAyahIndex(0)
            setScore(0)
            resetGameState()
          }}
          size="lg"
        >
          Play Again
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8 px-4 max-w-4xl">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Make Quranic Ayats</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Arrange the words to form complete Quranic verses
        </p>
        <div className="mt-4 text-xl font-semibold text-emerald-600 dark:text-emerald-400">
          Score: {score}
        </div>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Game Controls</span>
            <Tabs 
              defaultValue={difficulty} 
              onValueChange={(value) => {
                setDifficultyLevel(value as "easy" | "medium" | "hard")
                setCurrentSetIndex(0)
                setCurrentAyahIndex(0)
                setScore(0)
              }}
              className="w-[300px]"
            >
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="easy">Easy</TabsTrigger>
                <TabsTrigger value="medium">Medium</TabsTrigger>
                <TabsTrigger value="hard">Hard</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardTitle>
          <CardDescription>
            {difficultyLevel === 'easy' ? 'Short verses' : 
             difficultyLevel === 'medium' ? 'Medium length verses' : 
             'Long verses with more complexity'}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-3 mb-4">
            <Button 
              onClick={checkAnswer}
              disabled={arrangedWords.length === 0}
              className="flex-1 min-w-[150px]"
              variant="success"
            >
              <Check className="mr-2 h-4 w-4" />
              Check Answer
            </Button>
            
            <Button 
              onClick={() => setShowTranslation(!showTranslation)}
              className="flex-1 min-w-[150px]"
              variant="secondary"
            >
              {showTranslation ? (
                <>
                  <EyeOff className="mr-2 h-4 w-4" />
                  Hide Translation
                </>
              ) : (
                <>
                  <Eye className="mr-2 h-4 w-4" />
                  Show Hint
                </>
              )}
            </Button>
            
            <Button 
              onClick={resetGame}
              className="flex-1 min-w-[150px]"
              variant="outline"
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Reset
            </Button>
            
            <Button 
              onClick={skipToNext}
              className="flex-1 min-w-[150px]"
              variant="ghost"
            >
              <ChevronRight className="mr-2 h-4 w-4" />
              Skip
            </Button>
          </div>
          
          {showTranslation && currentAyahTranslation && (
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md text-center">
              <p className="font-semibold text-blue-800 dark:text-blue-200">Translation:</p>
              <p className="text-blue-700 dark:text-blue-300">{currentAyahTranslation}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="word-pool">
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Word Pool ({wordPool.length})
          </h2>
          <div className="flex flex-wrap gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg min-h-[120px]">
            {wordPool.length > 0 ? (
              wordPool.map((word) => (
                <Word 
                  key={word.id} 
                  word={word} 
                  isMobile={isMobile}
                  onClick={() => handleWordClick(word)}
                  onTouchEnd={() => handleWordTouchEnd(word)}
                />
              ))
            ) : (
              <p className="text-gray-400 m-auto">All words in use</p>
            )}
          </div>
        </div>

        <div className="arrangement-area" ref={drop}>
          <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
            Your Arrangement ({arrangedWords.length}/{correctOrder?.length || 0})
          </h2>
          <div 
            dir="rtl" 
            className="flex flex-wrap gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg min-h-[120px] border-2 border-dashed border-gray-300 dark:border-gray-700"
          >
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
              <p className="text-gray-400 m-auto">
                {isMobile ? 'Tap and drag words here' : 'Drag words here to arrange them'}
              </p>
            )}
          </div>
        </div>
      </div>

      {feedback && (
        <div className={`p-4 rounded-lg ${
          feedback.includes("Correct") 
            ? "bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200" 
            : "bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200"
        }`}>
          {feedback}
        </div>
      )}
    </div>
  )
}

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
