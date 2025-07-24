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
  // Existing state and logic... try
  
  return (
    <DndProvider backend={isMobile ? TouchBackend : HTML5Backend} options={{
      enableMouseEvents: true,
      delayTouchStart: 150,
      delay: 0,
      touchSlop: 5
    }}>
      <div className="game-container">
        {/* Your existing game UI */}
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
            <li>Drag words from the Word Pool or click on them to add to your arrangement area.</li>
            <li>Arrange the words from right to left to form a complete Quranic verse.</li>
            <li>Click on words in your arrangement to send them back to the Word Pool.</li>
            <li>Click "Check Answer" to see if your arrangement is correct.</li>
            <li>Score points for each correctly arranged verse!</li>
          </ol>
          <div className="mt-4 p-3 bg-yellow-50 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 rounded-md">
            <strong>Tip:</strong> In hard mode, you'll need to arrange words across two lines.
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="easy" className="mb-8" onValueChange={(value) => setDifficulty(value as any)}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="easy">Easy</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
          <TabsTrigger value="hard">Hard</TabsTrigger>
        </TabsList>
        <TabsContent value="easy">
          <Card>
            <CardHeader>
              <CardTitle>Easy Mode</CardTitle>
              <CardDescription>Arrange short verses with fewer words in a single line</CardDescription>
            </CardHeader>
            <CardContent>
              <MakeQuranicAyatsGame difficulty="easy" initialAyatCount={5} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="medium">
          <Card>
            <CardHeader>
              <CardTitle>Medium Mode</CardTitle>
              <CardDescription>Arrange medium-length verses with more words in a single line</CardDescription>
            </CardHeader>
            <CardContent>
              <MakeQuranicAyatsGame difficulty="medium" initialAyatCount={5} />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="hard">
          <Card>
            <CardHeader>
              <CardTitle>Hard Mode</CardTitle>
              <CardDescription>Arrange longer verses across two lines</CardDescription>
            </CardHeader>
            <CardContent>
              <MakeQuranicAyatsGame difficulty="hard" initialAyatCount={5} />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
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
