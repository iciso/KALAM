"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import { RefreshCw, Home, ArrowLeft, HelpCircle, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { crosswordData } from "@/data/game-data"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type CellType = {
  value: string
  isBlack: boolean
  number?: number
  row: number
  col: number
  acrossClueNumber?: number
  downClueNumber?: number
}

type ClueType = {
  number: number
  clue: string
  answer: string
  row: number
  col: number
}

export default function CrosswordGame() {
  const [grid, setGrid] = useState<CellType[][]>([])
  const [userAnswers, setUserAnswers] = useState<string[][]>([])
  const [acrossClues, setAcrossClues] = useState<ClueType[]>([])
  const [downClues, setDownClues] = useState<ClueType[]>([])
  const [selectedCell, setSelectedCell] = useState<{ row: number; col: number } | null>(null)
  const [direction, setDirection] = useState<"across" | "down">("across")
  const [gameComplete, setGameComplete] = useState(false)

  // Add the following state variables to the component function:
  const [score, setScore] = useState(1000)
  const [feedback, setFeedback] = useState("")
  const [showFeedback, setShowFeedback] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const scoreRef = useRef(1000)

  // Initialize game
  useEffect(() => {
    initializeCrossword()
  }, [])

  // Add this effect to track score changes
  useEffect(() => {
    scoreRef.current = score
  }, [score])

  // Check if game is complete
  useEffect(() => {
    if (grid.length > 0 && userAnswers.length > 0) {
      let complete = true

      for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[row].length; col++) {
          if (!grid[row][col].isBlack && grid[row][col].value !== userAnswers[row][col]) {
            complete = false
            break
          }
        }
        if (!complete) break
      }

      setGameComplete(complete)
    }
  }, [grid, userAnswers])

  const initializeCrossword = () => {
    const { grid: rawGrid, clues } = crosswordData

    // Initialize grid with cell objects
    const initialGrid: CellType[][] = []
    const initialUserAnswers: string[][] = []

    for (let row = 0; row < rawGrid.length; row++) {
      initialGrid[row] = []
      initialUserAnswers[row] = []

      for (let col = 0; col < rawGrid[row].length; col++) {
        const cellValue = rawGrid[row][col]
        initialGrid[row][col] = {
          value: cellValue,
          isBlack: cellValue === "",
          row,
          col,
        }
        initialUserAnswers[row][col] = ""
      }
    }

    // Add clue numbers to cells
    let clueNumber = 1

    // Process across clues
    const acrossCluesList: ClueType[] = []
    clues.across.forEach((clue) => {
      const { row, col, answer, clue: clueText } = clue

      // Add number to the first cell of the across word
      initialGrid[row][col].number = clueNumber
      initialGrid[row][col].acrossClueNumber = clueNumber

      acrossCluesList.push({
        number: clueNumber,
        clue: clueText,
        answer,
        row,
        col,
      })

      clueNumber++
    })

    // Process down clues
    const downCluesList: ClueType[] = []
    clues.down.forEach((clue) => {
      const { row, col, answer, clue: clueText } = clue

      // Add number to the first cell of the down word if it doesn't already have one
      if (initialGrid[row][col].number === undefined) {
        initialGrid[row][col].number = clueNumber
      }

      initialGrid[row][col].downClueNumber = clueNumber

      downCluesList.push({
        number: clueNumber,
        clue: clueText,
        answer,
        row,
        col,
      })

      clueNumber++
    })

    setGrid(initialGrid)
    setUserAnswers(initialUserAnswers)
    setAcrossClues(acrossCluesList)
    setDownClues(downCluesList)
    setSelectedCell(null)
    setDirection("across")
    setGameComplete(false)
  }

  const handleCellClick = (row: number, col: number) => {
    if (grid[row][col].isBlack) return

    // If clicking the same cell, toggle direction
    if (selectedCell?.row === row && selectedCell?.col === col) {
      setDirection(direction === "across" ? "down" : "across")
    } else {
      setSelectedCell({ row, col })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent, row: number, col: number) => {
    if (grid[row][col].isBlack) return

    // Handle letter input
    if (/^[\u0600-\u06FF]$/.test(e.key)) {
      const newUserAnswers = [...userAnswers]
      const oldValue = newUserAnswers[row][col]
      newUserAnswers[row][col] = e.key
      setUserAnswers(newUserAnswers)

      // Check if the input is correct
      if (e.key === grid[row][col].value) {
        setFeedback("Correct!")
        setIsCorrect(true)
      } else {
        setFeedback("Incorrect. Try again.")
        setIsCorrect(false)
        // Reduce score for wrong answers
        setScore(Math.max(0, scoreRef.current - 10))
      }

      setShowFeedback(true)
      setTimeout(() => setShowFeedback(false), 1500)

      // Move to next cell
      moveToNextCell(row, col)
    }
    // Handle backspace
    else if (e.key === "Backspace") {
      const newUserAnswers = [...userAnswers]

      // If current cell is empty, move to previous cell
      if (newUserAnswers[row][col] === "") {
        moveToPrevCell(row, col)
      } else {
        newUserAnswers[row][col] = ""
        setUserAnswers(newUserAnswers)
      }
    }
    // Handle arrow keys
    else if (e.key === "ArrowRight") {
      setDirection("across")
      moveToNextCell(row, col)
    } else if (e.key === "ArrowLeft") {
      setDirection("across")
      moveToPrevCell(row, col)
    } else if (e.key === "ArrowDown") {
      setDirection("down")
      moveToNextCell(row, col)
    } else if (e.key === "ArrowUp") {
      setDirection("down")
      moveToPrevCell(row, col)
    }
  }

  const moveToNextCell = (row: number, col: number) => {
    if (direction === "across") {
      // For Arabic, move left (RTL) instead of right
      let nextCol = col - 1
      while (nextCol >= 0) {
        if (!grid[row][nextCol].isBlack) {
          setSelectedCell({ row, col: nextCol })
          return
        }
        nextCol--
      }
    } else {
      // Move down
      let nextRow = row + 1
      while (nextRow < grid.length) {
        if (!grid[nextRow][col].isBlack) {
          setSelectedCell({ row: nextRow, col })
          return
        }
        nextRow++
      }
    }
  }

  const moveToPrevCell = (row: number, col: number) => {
    if (direction === "across") {
      // For Arabic, move right (RTL) instead of left
      let prevCol = col + 1
      while (prevCol < grid[row].length) {
        if (!grid[row][prevCol].isBlack) {
          setSelectedCell({ row, col: prevCol })
          return
        }
        prevCol++
      }
    } else {
      // Move up
      let prevRow = row - 1
      while (prevRow >= 0) {
        if (!grid[prevRow][col].isBlack) {
          setSelectedCell({ row: prevRow, col })
          return
        }
        prevRow--
      }
    }
  }

  const handleClueClick = (clue: ClueType, clueDirection: "across" | "down") => {
    setSelectedCell({ row: clue.row, col: clue.col })
    setDirection(clueDirection)
  }

  const isSelectedWord = (row: number, col: number) => {
    if (!selectedCell) return false

    if (direction === "across") {
      // Check if in same row and has same across clue number
      return (
        row === selectedCell.row &&
        grid[row][col].acrossClueNumber === grid[selectedCell.row][selectedCell.col].acrossClueNumber
      )
    } else {
      // Check if in same column and has same down clue number
      return (
        col === selectedCell.col &&
        grid[row][col].downClueNumber === grid[selectedCell.row][selectedCell.col].downClueNumber
      )
    }
  }

  const checkClueComplete = (clue: ClueType, clueDirection: "across" | "down") => {
    const { row, col, answer } = clue

    if (clueDirection === "across") {
      for (let i = 0; i < answer.length; i++) {
        if (userAnswers[row][col + i] !== answer[i]) {
          return false
        }
      }
    } else {
      for (let i = 0; i < answer.length; i++) {
        if (userAnswers[row + i][col] !== answer[i]) {
          return false
        }
      }
    }

    return true
  }

  // Arabic keyboard layout
  const arabicKeyboardRows = [
    ["ض", "ص", "ث", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "ج"],
    ["ش", "س", "ي", "ب", "ل", "ا", "ت", "ن", "م", "ك", "ط"],
    ["ئ", "ء", "ؤ", "ر", "لا", "ى", "ة", "و", "ز", "ظ", "د"],
  ]

  const handleKeyboardInput = useCallback(
    (char: string) => {
      if (!selectedCell) return

      const { row, col } = selectedCell
      if (grid[row][col].isBlack) return

      const newUserAnswers = [...userAnswers]
      newUserAnswers[row][col] = char
      setUserAnswers(newUserAnswers)

      // Check if the input is correct
      if (char === grid[row][col].value) {
        setFeedback("Correct!")
        setIsCorrect(true)
      } else {
        setFeedback("Incorrect. Try again.")
        setIsCorrect(false)
        // Reduce score for wrong answers
        setScore(Math.max(0, scoreRef.current - 10))
      }

      setShowFeedback(true)
      setTimeout(() => setShowFeedback(false), 1500)

      // Move to next cell after a short delay to ensure state updates
      setTimeout(() => {
        if (direction === "across") {
          // For Arabic, move left (RTL) instead of right
          let nextCol = col - 1
          while (nextCol >= 0) {
            if (!grid[row][nextCol].isBlack) {
              setSelectedCell({ row, col: nextCol })
              return
            }
            nextCol--
          }
        } else {
          // Move down
          let nextRow = row + 1
          while (nextRow < grid.length) {
            if (!grid[nextRow][col].isBlack) {
              setSelectedCell({ row: nextRow, col })
              return
            }
            nextRow++
          }
        }
      }, 10)
    },
    [selectedCell, grid, userAnswers, direction],
  )

  const handleBackspace = useCallback(() => {
    if (!selectedCell) return

    const { row, col } = selectedCell
    if (grid[row][col].isBlack) return

    const newUserAnswers = [...userAnswers]

    // If current cell is empty, move to previous cell
    if (newUserAnswers[row][col] === "") {
      // Move to previous cell logic
      setTimeout(() => {
        if (direction === "across") {
          // For Arabic, move right (RTL) instead of left
          let prevCol = col + 1
          while (prevCol < grid[row].length) {
            if (!grid[row][prevCol].isBlack) {
              setSelectedCell({ row, col: prevCol })
              return
            }
            prevCol++
          }
        } else {
          // Move up
          let prevRow = row - 1
          while (prevRow >= 0) {
            if (!grid[prevRow][col].isBlack) {
              setSelectedCell({ row: prevRow, col })
              return
            }
            prevRow--
          }
        }
      }, 10)
    } else {
      newUserAnswers[row][col] = ""
      setUserAnswers(newUserAnswers)
    }
  }, [selectedCell, grid, userAnswers, direction])

  // Add a function to load a new crossword
  const loadNewCrossword = () => {
    // In a real implementation, you would fetch a new crossword
    // For now, we'll just reset the current one
    initializeCrossword()
    setScore(1000)
    setFeedback("")
    setShowFeedback(false)
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
          <h1 className="text-2xl font-bold">Quranic Crossword</h1>
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
            Test your Quranic vocabulary knowledge with this crossword puzzle. Fill in the Arabic words based on the
            English clues. Click a cell to start typing, and click again to change direction.
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
                  <DialogTitle>How to Play Crossword</DialogTitle>
                  <DialogDescription>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                      <li>Click on a cell to select it and start typing</li>
                      <li>Click on a cell twice to switch between across and down</li>
                      <li>Use arrow keys to navigate between cells</li>
                      <li>Click on a clue to jump to that word</li>
                      <li>Fill in all the words to complete the puzzle</li>
                      <li>The clues are in English, but the answers are in Arabic</li>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Crossword Grid */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="text-2xl">Quranic Vocabulary Crossword</CardTitle>
              <CardDescription>Fill in the crossword with Arabic words based on the clues</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center mb-6">
                <div className="grid grid-flow-row gap-0 border-2 border-gray-800 dark:border-gray-400">
                  {grid.map((row, rowIndex) => (
                    <div key={rowIndex} className="flex">
                      {row.map((cell, colIndex) => (
                        <div
                          key={`${rowIndex}-${colIndex}`}
                          className={`relative w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center font-arabic text-lg border border-gray-300 dark:border-gray-600
                            ${cell.isBlack ? "bg-gray-800 dark:bg-gray-900" : "bg-white dark:bg-gray-800"}
                            ${
                              selectedCell?.row === rowIndex && selectedCell?.col === colIndex
                                ? "bg-emerald-200 dark:bg-emerald-800 ring-2 ring-emerald-500 dark:ring-emerald-400"
                                : ""
                            }
                            ${
                              isSelectedWord(rowIndex, colIndex) &&
                              !(selectedCell?.row === rowIndex && selectedCell?.col === colIndex)
                                ? "bg-emerald-100 dark:bg-emerald-900"
                                : ""
                            }`}
                          onClick={() => !cell.isBlack && handleCellClick(rowIndex, colIndex)}
                          tabIndex={cell.isBlack ? -1 : 0}
                          onKeyDown={(e) => handleKeyDown(e, rowIndex, colIndex)}
                        >
                          {cell.number && (
                            <span className="absolute top-0 left-0 text-xs font-normal text-gray-600 dark:text-gray-400 p-0.5">
                              {cell.number}
                            </span>
                          )}
                          {!cell.isBlack && userAnswers[rowIndex][colIndex]}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-4 flex flex-col items-center">
                {/* Iman-o-meter */}
                <div className="w-full max-w-md mb-4">
                  <h3 className="text-center font-semibold mb-2">Iman-o-meter (Faith Level)</h3>
                  <div className="h-6 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ease-out rounded-full ${
                        score > 750
                          ? "bg-emerald-500"
                          : score > 500
                            ? "bg-yellow-500"
                            : score > 250
                              ? "bg-orange-500"
                              : "bg-red-500"
                      }`}
                      style={{ width: `${Math.max(score / 10, 0)}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-sm">
                    <span>0</span>
                    <span className="font-bold">{score}</span>
                    <span>1000</span>
                  </div>
                </div>

                {/* Feedback message */}
                {showFeedback && (
                  <div className={`mb-4 p-2 rounded-md text-white ${isCorrect ? "bg-emerald-500" : "bg-red-500"}`}>
                    {feedback}
                  </div>
                )}
              </div>

              {gameComplete && (
                <div className="mt-4 p-4 bg-emerald-100 dark:bg-emerald-900 rounded-lg text-center">
                  <h3 className="text-xl font-bold text-emerald-800 dark:text-emerald-200 mb-2">Congratulations!</h3>
                  <p className="text-emerald-700 dark:text-emerald-300">You completed the crossword!</p>
                </div>
              )}

              {/* Virtual Arabic Keyboard */}
              <div className="mt-6 bg-gray-100 dark:bg-gray-800 p-3 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-center">Arabic Keyboard</h3>
                <div className="flex flex-col gap-1">
                  {arabicKeyboardRows.map((row, rowIndex) => (
                    <div key={`keyboard-row-${rowIndex}`} className="flex justify-center gap-1">
                      {row.map((char) => (
                        <button
                          key={`key-${char}`}
                          className="w-8 h-10 sm:w-10 sm:h-12 bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 
                                    font-arabic text-lg hover:bg-emerald-100 dark:hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                          onClick={() => handleKeyboardInput(char)}
                        >
                          {char}
                        </button>
                      ))}
                    </div>
                  ))}
                  <div className="flex justify-center gap-1 mt-1">
                    <button
                      className="px-4 py-2 bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 
                                text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      onClick={handleBackspace}
                    >
                      Backspace
                    </button>
                    <button
                      className="px-4 py-2 bg-white dark:bg-gray-700 rounded border border-gray-300 dark:border-gray-600 
                                text-sm hover:bg-emerald-100 dark:hover:bg-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                      onClick={() => setDirection(direction === "across" ? "down" : "across")}
                    >
                      {direction === "across" ? "Switch to Down" : "Switch to Across"}
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Clues */}
          <Card>
            <CardHeader>
              <CardTitle>Clues</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-2">Across</h3>
                  <ul className="space-y-2">
                    {acrossClues.map((clue) => (
                      <li
                        key={`across-${clue.number}`}
                        className={`cursor-pointer p-2 rounded-md
                          ${checkClueComplete(clue, "across") ? "bg-emerald-100 dark:bg-emerald-900" : ""}
                          ${
                            selectedCell &&
                            grid[selectedCell.row][selectedCell.col].acrossClueNumber === clue.number &&
                            direction === "across"
                              ? "bg-blue-100 dark:bg-blue-900"
                              : ""
                          }`}
                        onClick={() => handleClueClick(clue, "across")}
                      >
                        <span className="font-bold mr-2">{clue.number}.</span>
                        {clue.clue}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-bold mb-2">Down</h3>
                  <ul className="space-y-2">
                    {downClues.map((clue) => (
                      <li
                        key={`down-${clue.number}`}
                        className={`cursor-pointer p-2 rounded-md
                          ${checkClueComplete(clue, "down") ? "bg-emerald-100 dark:bg-emerald-900" : ""}
                          ${
                            selectedCell &&
                            grid[selectedCell.row][selectedCell.col].downClueNumber === clue.number &&
                            direction === "down"
                              ? "bg-blue-100 dark:bg-blue-900"
                              : ""
                          }`}
                        onClick={() => handleClueClick(clue, "down")}
                      >
                        <span className="font-bold mr-2">{clue.number}.</span>
                        {clue.clue}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-3">
              <Button
                variant="default"
                onClick={loadNewCrossword}
                className="w-full bg-emerald-600 hover:bg-emerald-700"
              >
                <Plus className="mr-2 h-4 w-4" />
                New Crossword
              </Button>
              <Button variant="outline" onClick={initializeCrossword} className="w-full">
                <RefreshCw className="mr-2 h-4 w-4" />
                Reset Current Crossword
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
