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

export default function MakeQuranicAyatsGame({ difficulty, initialAyatCount, isMobile = false }: GameProps) {
  const [wordPool, setWordPool] = useState<WordItem[]>([])
  const [arrangedWords, setArrangedWords] = useState<WordItem[]>([])
  const [difficultyLevel, setDifficultyLevel] = useState(difficulty)

  // Initialize words based on difficulty
  useEffect(() => {
    const initialWords = generateInitialWords(difficultyLevel, initialAyatCount)
    setWordPool(initialWords)
    setArrangedWords([])
  }, [difficultyLevel, initialAyatCount])

  const generateInitialWords = (mode: string, count: number): WordItem[] => {
    // Replace with your actual word generation logic
    const sampleWords = [
      { id: '1', text: 'بسم' },
      { id: '2', text: 'الله' },
      { id: '3', text: 'الرحمن' },
      { id: '4', text: 'الرحيم' }
    ]
    return [...sampleWords]
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

  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend} options={{
      enableMouseEvents: true,
      delayTouchStart: 150,
      delay: 0,
      touchSlop: 5
    }}>
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
                arrangedWords.map((word, index) => (
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

          <button 
            className="mt-8 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg w-full"
            onClick={() => checkAnswer(arrangedWords)}
          >
            Check Answer
          </button>
        </div>
      </div>
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

function checkAnswer(arrangedWords: WordItem[]) {
  // Implement your answer checking logic here
  console.log("Checking arrangement:", arrangedWords)
}
