"use client"

import { useState, useRef, useEffect } from "react"
import { useDrag, useDrop } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { TouchBackend } from "react-dnd-touch-backend"
import { DndProvider } from "react-dnd"

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
  // Existing state and logic...
  
  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend} options={{
      enableMouseEvents: true,
      delayTouchStart: 150,
      delay: 0,
      touchSlop: 5
    }}>
      <div className="game-container">
        {/* Your existing game UI */}
        <div className="word-pool">
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
        
        <div className="arrangement-area">
          {arrangedWords.map((word, index) => (
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
    </DndProvider>
  )
}

interface WordProps {
  word: WordItem
  isMobile: boolean
  onClick: () => void
  onTouchEnd: () => void
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
        word 
        ${isDragging ? 'opacity-50' : 'opacity-100'}
        ${isMobile ? 'py-3 px-4 text-lg' : 'py-2 px-3'}
      `}
      style={{
        cursor: 'move',
        touchAction: 'none', // Important for touch devices
        userSelect: 'none', // Prevent text selection during drag
      }}
    >
      {word.text}
    </div>
  )
}
