"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { RefreshCw, Home, ArrowLeft, HelpCircle, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { wordSearchWords } from "@/data/game-data"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export default function WordSearchGame() {
  const gridSize = 10
  const [grid, setGrid] = useState<string[][]>([])
  const [words, setWords] = useState<string[]>([])
  const [foundWords, setFoundWords] = useState<string[]>([])
  const [selectedCells, setSelectedCells] = useState<{ row: number; col: number }[]>([])
  const [isSelecting, setIsSelecting] = useState(false)
  const [gameComplete, setGameComplete] = useState(false)

  // Initialize game
  useEffect(() => {
    generateNewPuzzle()
  }, [])

  // Check if game is complete
  useEffect(() => {
    if (words.length > 0 && foundWords.length === words.length) {
      setGameComplete(true)
    }
  }, [foundWords, words])

  const generateNewPuzzle = () => {
    // Select random words from the word list
    const shuffledWords = [...wordSearchWords].sort(() => 0.5 - Math.random())
    const selectedWords = shuffledWords.slice(0, 6) // Use 6 words for the puzzle
    setWords(selectedWords)
    setFoundWords([])
    setSelectedCells([])
    setGameComplete(false)

    // Create empty grid
    const newGrid = Array(gridSize)
      .fill(null)
      .map(() => Array(gridSize).fill(""))

    // Place words in the grid
    placeWordsInGrid(newGrid, selectedWords)

    // Fill empty cells with random Arabic letters
    const arabicLetters = "ابتثجحخدذرزسشصضطظعغفقكلمنهوي"
    for (let row = 0; row < gridSize; row++) {
      for (let col = 0; col < gridSize; col++) {
        if (newGrid[row][col] === "") {
          const randomIndex = Math.floor(Math.random() * arabicLetters.length)
          newGrid[row][col] = arabicLetters[randomIndex]
        }
      }
    }

    setGrid(newGrid)
  }

  const placeWordsInGrid = (grid: string[][], words: string[]) => {
    const directions = [
      { dr: 0, dc: 1 }, // right
      { dr: 1, dc: 0 }, // down
      { dr: 1, dc: 1 }, // diagonal down-right
      { dr: 1, dc: -1 }, // diagonal down-left
    ]

    words.forEach((word) => {
      let placed = false
      let attempts = 0
      const maxAttempts = 100

      // Remove diacritics for placement
      const normalizedWord = word.replace(/[\u064B-\u0652]/g, "")

      while (!placed && attempts < maxAttempts) {
        attempts++

        // Choose random direction
        const direction = directions[Math.floor(Math.random() * directions.length)]

        // Choose random starting position
        const startRow = Math.floor(Math.random() * gridSize)
        const startCol = Math.floor(Math.random() * gridSize)

        // Check if word fits in the grid
        const endRow = startRow + direction.dr * (normalizedWord.length - 1)
        const endCol = startCol + direction.dc * (normalizedWord.length - 1)

        if (endRow >= 0 && endRow < gridSize && endCol >= 0 && endCol < gridSize) {
          // Check if word can be placed without conflicts
          let canPlace = true
          for (let i = 0; i < normalizedWord.length; i++) {
            const row = startRow + direction.dr * i
            const col = startCol + direction.dc * i

            if (grid[row][col] !== "" && grid[row][col] !== normalizedWord[i]) {
              canPlace = false
              break
            }
          }

          if (canPlace) {
            // Place the word
            for (let i = 0; i < normalizedWord.length; i++) {
              const row = startRow + direction.dr * i
              const col = startCol + direction.dc * i
              grid[row][col] = normalizedWord[i]
            }
            placed = true
          }
        }
      }

      // If we couldn't place the word after max attempts, just skip it
      if (!placed) {
        console.warn(`Could not place word: ${word}`)
      }
    })
  }

  const handleCellMouseDown = (row: number, col: number) => {
    setIsSelecting(true)
    setSelectedCells([{ row, col }])
  }

  const handleCellMouseEnter = (row: number, col: number) => {
    if (isSelecting) {
      // Only allow straight lines (horizontal, vertical, diagonal)
      if (selectedCells.length > 0) {
        const firstCell = selectedCells[0]
        const lastCell = selectedCells[selectedCells.length - 1]

        // Check if new cell is in line with the selection
        const isHorizontal = row === lastCell.row
        const isVertical = col === lastCell.col
        const isDiagonal = Math.abs(row - lastCell.row) === Math.abs(col - lastCell.col)

        if (isHorizontal || isVertical || isDiagonal) {
          // Check if cell is already in the selection
          const isCellSelected = selectedCells.some((cell) => cell.row === row && cell.col === col)

          if (!isCellSelected) {
            setSelectedCells([...selectedCells, { row, col }])
          }
        }
      }
    }
  }

  const handleCellMouseUp = () => {
    setIsSelecting(false)
    checkSelection()
  }

  const checkSelection = () => {
    if (selectedCells.length < 2) {
      setSelectedCells([])
      return
    }

    // Get the selected word
    const selectedWord = selectedCells.map((cell) => grid[cell.row][cell.col]).join("")
    const reversedWord = selectedWord.split("").reverse().join("")

    // Check if the word is in the list and not already found
    const wordFound = words.find((word) => {
      const normalizedWord = word.replace(/[\u064B-\u0652]/g, "")
      return (normalizedWord === selectedWord || normalizedWord === reversedWord) && !foundWords.includes(word)
    })

    if (wordFound) {
      setFoundWords([...foundWords, wordFound])
    } else {
      // Clear selection if no word found
      setTimeout(() => {
        setSelectedCells([])
      }, 500)
    }
  }

  const isCellSelected = (row: number, col: number) => {
    return selectedCells.some((cell) => cell.row === row && cell.col === col)
  }

  const isCellInFoundWord = (row: number, col: number) => {
    // Check if this cell is part of a found word
    for (const word of foundWords) {
      const normalizedWord = word.replace(/[\u064B-\u0652]/g, "")

      // Check all possible directions from this cell
      const directions = [
        { dr: 0, dc: 1 }, // right
        { dr: 1, dc: 0 }, // down
        { dr: 1, dc: 1 }, // diagonal down-right
        { dr: 1, dc: -1 }, // diagonal down-left
        { dr: 0, dc: -1 }, // left
        { dr: -1, dc: 0 }, // up
        { dr: -1, dc: -1 }, // diagonal up-left
        { dr: -1, dc: 1 }, // diagonal up-right
      ]

      for (const dir of directions) {
        let matches = true

        for (let i = 0; i < normalizedWord.length; i++) {
          const checkRow = row + dir.dr * i
          const checkCol = col + dir.dc * i

          if (
            checkRow < 0 ||
            checkRow >= gridSize ||
            checkCol < 0 ||
            checkCol >= gridSize ||
            grid[checkRow][checkCol] !== normalizedWord[i]
          ) {
            matches = false
            break
          }
        }

        if (matches) {
          return true
        }
      }
    }

    return false
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pb-12">
      <header className="bg-emerald-800 text-white py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/games">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
              <span className="sr-only">Back to Games</span>
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Word Search</h1>
          <Link href="/">
            <Button variant="ghost" size="icon">
              <Home className="h-5 w-5" />
              <span className="sr-only">Home</span>
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto mb-8 text-center">
          <p className="text-lg mb-4">
            Search for hidden Quranic vocabulary words in the grid. Words can be found horizontally, vertically, or
            diagonally in any direction. Draw a line through the word when you find it!
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/games">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                All Games
              </Button>
            </Link>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  How to Play
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>How to Play Word Search</DialogTitle>
                  <DialogDescription>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                      <li>Find the Arabic words hidden in the grid</li>
                      <li>Words can be horizontal, vertical, or diagonal</li>
                      <li>Words can be forward or backward</li>
                      <li>Click and drag to select a word</li>
                      <li>When you find a word, it will be highlighted and checked off the list</li>
                      <li>Find all words to complete the puzzle</li>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-2xl">Find the Words</CardTitle>
              <div className="text-sm font-medium">
                Found: {foundWords.length}/{words.length}
              </div>
            </div>
            <CardDescription>Find all the hidden Quranic vocabulary words in the grid</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Word Search Grid */}
            <div
              className="grid grid-cols-10 gap-1 mb-6 select-none touch-none"
              onMouseLeave={() => {
                if (isSelecting) {
                  setIsSelecting(false)
                  checkSelection()
                }
              }}
            >
              {grid.map((row, rowIndex) =>
                row.map((cell, colIndex) => (
                  <div
                    key={`${rowIndex}-${colIndex}`}
                    className={`w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center font-arabic text-lg border-2 rounded cursor-pointer
                      ${
                        isCellSelected(rowIndex, colIndex)
                          ? "bg-emerald-200 border-emerald-400 dark:bg-emerald-700 dark:border-emerald-500"
                          : isCellInFoundWord(rowIndex, colIndex)
                            ? "bg-blue-100 border-blue-300 dark:bg-blue-800 dark:border-blue-600"
                            : "bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                      }`}
                    onMouseDown={() => handleCellMouseDown(rowIndex, colIndex)}
                    onMouseEnter={() => handleCellMouseEnter(rowIndex, colIndex)}
                    onMouseUp={handleCellMouseUp}
                    onTouchStart={() => handleCellMouseDown(rowIndex, colIndex)}
                    onTouchMove={(e) => {
                      const touch = e.touches[0]
                      const element = document.elementFromPoint(touch.clientX, touch.clientY)
                      const cellId = element?.getAttribute("data-cell-id")
                      if (cellId) {
                        const [row, col] = cellId.split("-").map(Number)
                        handleCellMouseEnter(row, col)
                      }
                    }}
                    onTouchEnd={handleCellMouseUp}
                    data-cell-id={`${rowIndex}-${colIndex}`}
                  >
                    {cell}
                  </div>
                )),
              )}
            </div>

            {/* Word List */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {words.map((word, index) => (
                <div
                  key={index}
                  className={`p-2 text-center font-arabic text-lg rounded-md border-2
                    ${
                      foundWords.includes(word)
                        ? "bg-emerald-100 border-emerald-300 line-through dark:bg-emerald-900 dark:border-emerald-700"
                        : "bg-gray-50 border-gray-200 dark:bg-gray-800 dark:border-gray-700"
                    }`}
                >
                  {word}
                  {foundWords.includes(word) && (
                    <Check className="inline-block ml-1 h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  )}
                </div>
              ))}
            </div>

            {gameComplete && (
              <div className="mt-6 p-4 bg-emerald-100 dark:bg-emerald-900 rounded-lg text-center">
                <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-2">Congratulations!</h3>
                <p className="text-emerald-700 dark:text-emerald-300">You found all the words!</p>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={generateNewPuzzle}>
              <RefreshCw className="mr-2 h-4 w-4" />
              New Puzzle
            </Button>
            <Link href="/games">
              <Button variant="secondary">Back to Games</Button>
            </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  )
}
