"use client"  

import { useState, useEffect } from "react"
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
function MakeQuranicAyatsGame({ difficulty, initialAyatCount }: GameProps) {
  const isMobile = useMobileDetect()
  const [wordPool, setWordPool] = useState<WordItem[]>([])
  const [arrangedWords, setArrangedWords] = useState<WordItem[]>([])
  const [difficultyLevel, setDifficultyLevel] = useState(difficulty)
  const [score, setScore] = useState(0)
  const [feedback, setFeedback] = useState("")

  // ... (keep all the existing MakeQuranicAyatsGame implementation)
  // This includes all the useEffect, helper functions, and return statement
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

// Export only the wrapper component
export default QuranicAyatsWrapper
