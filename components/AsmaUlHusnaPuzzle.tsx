"use client"

import type React from "react"
import { useRef, useEffect, useState } from "react"

interface AsmaName {
  arabic: string
  english: string
}

const asmaNames: AsmaName[] = [
  { arabic: "الرحمن", english: "The Most Merciful" },
  { arabic: "الرحيم", english: "The Especially Merciful" },
  { arabic: "الملك", english: "The King" },
  { arabic: "القدوس", english: "The Most Holy" },
]

interface PuzzlePiece {
  id: number
  text: string
  x: number
  y: number
  isArabic: boolean
  correctIndex: number
}

const AsmaUlHusnaPuzzle: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [pieces, setPieces] = useState<PuzzlePiece[]>([])
  const [selectedPiece, setSelectedPiece] = useState<PuzzlePiece | null>(null)
  const [isComplete, setIsComplete] = useState(false)
  const [hasStarted, setHasStarted] = useState(false)

  const gridRows = 2
  const gridCols = 4
  const pieceWidth = 120
  const pieceHeight = 70
  const canvasWidth = 550
  const canvasHeight = 320
  const startX = 20
  const startY = 20

  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array]
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
    }
    return shuffled
  }

  useEffect(() => {
    const initialPieces: PuzzlePiece[] = []

    asmaNames.forEach((name, index) => {
      // Arabic piece
      initialPieces.push({
        id: index * 2,
        text: name.arabic,
        x: startX + (index % gridCols) * (pieceWidth + 10),
        y: 200 + Math.random() * 50,
        isArabic: true,
        correctIndex: index,
      })
      // English piece
      initialPieces.push({
        id: index * 2 + 1,
        text: name.english,
        x: startX + (index % gridCols) * (pieceWidth + 10),
        y: 250 + Math.random() * 50,
        isArabic: false,
        correctIndex: index,
      })
    })

    // Shuffle the pieces array and randomize positions
    const shuffledPieces = shuffleArray(initialPieces).map((piece) => ({
      ...piece,
      x: Math.random() * (canvasWidth - pieceWidth),
      y: Math.random() * (canvasHeight - pieceHeight),
    }))

    setPieces(shuffledPieces)
    setHasStarted(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Draw background
    ctx.fillStyle = "#f0f8ff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Draw grid
    ctx.strokeStyle = "#9370db"
    ctx.lineWidth = 2
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        const x = startX + col * (pieceWidth + 10)
        const y = startY + row * (pieceHeight + 10)
        ctx.strokeRect(x, y, pieceWidth, pieceHeight)
      }
    }

    // Draw pieces
    pieces.forEach((piece) => {
      ctx.fillStyle = piece.isArabic ? "#ffd700" : "#98fb98"
      ctx.fillRect(piece.x, piece.y, pieceWidth, pieceHeight)
      ctx.strokeStyle = "#333"
      ctx.lineWidth = 2
      ctx.strokeRect(piece.x, piece.y, pieceWidth, pieceHeight)

      ctx.fillStyle = "#000"
      ctx.font = piece.isArabic ? "bold 18px Amiri" : "14px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText(piece.text, piece.x + pieceWidth / 2, piece.y + pieceHeight / 2)
    })

    // Check if puzzle is complete
    if (hasStarted) {
      const isSolved = pieces.every((piece) => {
        const row = piece.isArabic ? 0 : 1
        const col = piece.correctIndex
        const targetX = startX + col * (pieceWidth + 10)
        const targetY = startY + row * (pieceHeight + 10)
        return Math.abs(piece.x - targetX) < 10 && Math.abs(piece.y - targetY) < 10
      })

      setIsComplete(isSolved)

      if (isSolved) {
        ctx.fillStyle = "rgba(34, 139, 34, 0.85)"
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        ctx.fillStyle = "#fff"
        ctx.font = "bold 28px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText("Congratulations!", canvas.width / 2, canvas.height / 2 - 20)
        ctx.font = "bold 20px Arial"
        ctx.fillText("Puzzle Completed!", canvas.width / 2, canvas.height / 2 + 20)
      }
    }
  }, [pieces, hasStarted])

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const clickedPiece = pieces.find(
      (piece) =>
        mouseX >= piece.x && mouseX <= piece.x + pieceWidth && mouseY >= piece.y && mouseY <= piece.y + pieceHeight,
    )

    if (clickedPiece) {
      setSelectedPiece(clickedPiece)
    }
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!selectedPiece || isComplete) return

    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    setPieces((prevPieces) =>
      prevPieces.map((piece) =>
        piece.id === selectedPiece.id
          ? {
              ...piece,
              x: Math.max(0, Math.min(mouseX - pieceWidth / 2, canvasWidth - pieceWidth)),
              y: Math.max(0, Math.min(mouseY - pieceHeight / 2, canvasHeight - pieceHeight)),
            }
          : piece,
      ),
    )
  }

  const handleMouseUp = () => {
    if (!selectedPiece) return

    const row = selectedPiece.isArabic ? 0 : 1
    const targetX = startX + selectedPiece.correctIndex * (pieceWidth + 10)
    const targetY = startY + row * (pieceHeight + 10)

    // Snap to grid if close
    if (Math.abs(selectedPiece.x - targetX) < 40 && Math.abs(selectedPiece.y - targetY) < 40) {
      setPieces((prevPieces) =>
        prevPieces.map((piece) => (piece.id === selectedPiece.id ? { ...piece, x: targetX, y: targetY } : piece)),
      )
    }

    setSelectedPiece(null)
  }

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-purple-900 mb-2">أسماء الله الحسنى</h2>
        <p className="text-gray-600 mb-4">Drag and drop to match Arabic names with their English meanings</p>
        <div className="grid grid-cols-2 gap-2 text-sm mb-4 p-4 bg-purple-50 rounded">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-yellow-400 border-2 border-gray-400 rounded"></div>
            <span>Arabic Names</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-300 border-2 border-gray-400 rounded"></div>
            <span>English Meanings</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          style={{
            border: "3px solid #9370db",
            background: "#f0f8ff",
            borderRadius: "8px",
            cursor: selectedPiece ? "grabbing" : "grab",
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        />
      </div>

      {isComplete && (
        <div className="text-center mt-6 p-4 bg-green-100 border-2 border-green-500 rounded-lg">
          <p className="text-green-700 font-bold text-lg">✓ Alhamdulillah! Puzzle Completed Successfully!</p>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h3 className="font-bold text-purple-900 mb-2">Names of Allah (The First Four):</h3>
        <ul className="space-y-2 text-sm">
          {asmaNames.map((name, idx) => (
            <li key={idx} className="flex justify-between items-center">
              <span className="text-xl text-purple-700 font-bold">{name.arabic}</span>
              <span className="text-gray-600">{name.english}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AsmaUlHusnaPuzzle
