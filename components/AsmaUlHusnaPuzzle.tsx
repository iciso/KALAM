"use client";

import React, { useRef, useEffect, useState } from 'react';
import { getSet, AsmaName } from '@/data/asmaSets';

interface PuzzlePiece {
  id: number;
  text: string;
  x: number;
  y: number;
  isArabic: boolean;
  correctCol: number;
  currentCol: number;
  currentRow: number;
}

interface AsmaUlHusnaPuzzleProps {
  setIndex: number;
  onComplete?: () => void;
}

const AsmaUlHusnaPuzzle: React.FC<AsmaUlHusnaPuzzleProps> = ({ setIndex, onComplete }) => {
  const names: AsmaName[] = getSet(setIndex);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<PuzzlePiece | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const pieceCount = names.length;
  const cols = pieceCount;
  const rows = 2;
  const pieceWidth = 110;
  const pieceHeight = 70;
  const gap = 25;
  const canvasWidth = cols * (pieceWidth + gap) + 100;
  const canvasHeight = 420; // Extra space for hints
  const startX = 50;
  const startY = 110; // Move down to make room for hints

  const [snapSound] = useState(() => new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwF'));
  const [victorySound] = useState(() => new Audio('data:audio/wav;base64,UklGRiQFAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YQdFAACAhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwF'));

  useEffect(() => {
    initializePuzzle();
  }, [setIndex]);

  const initializePuzzle = () => {
    const initialPieces: PuzzlePiece[] = [];

    // Fixed order: column 0 = name 0, column 1 = name 1, etc.
    names.forEach((name, i) => {
      initialPieces.push({
        id: i * 2,
        text: name.arabic,
        x: 50 + Math.random() * 300,
        y: 250 + Math.random() * 60,
        isArabic: true,
        correctCol: i,        // Fixed: Arabic goes to column i
        currentCol: -1,
        currentRow: -1,
      });
      initialPieces.push({
        id: i * 2 + 1,
        text: name.english,
        x: 300 + Math.random() * 300,
        y: 250 + Math.random() * 60,
        isArabic: false,
        correctCol: i,        // English also goes to column i
        currentCol: -1,
        currentRow: -1,
      });
    });

    setPieces(initialPieces);
    setIsComplete(false);
  };

  useEffect(() => {
    drawPuzzle();
  }, [pieces]);

  const drawPuzzle = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw hints: Number + Arabic name at top
    ctx.fillStyle = '#4B0082';
    ctx.font = 'bold 20px Amiri, serif';
    ctx.textAlign = 'center';
    names.forEach((name, i) => {
      const x = startX + i * (pieceWidth + gap) + pieceWidth / 2;
      ctx.fillText(`${i + 1}. ${name.arabic}`, x, 70);
    });

    // Draw grid
    ctx.strokeStyle = '#4B0082';
    ctx.lineWidth = 3;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = startX + col * (pieceWidth + gap);
        const y = startY + row * (pieceHeight + gap);
        ctx.strokeRect(x, y, pieceWidth, pieceHeight);

        // Row labels
        ctx.fillStyle = '#555';
        ctx.font = '14px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(row === 0 ? 'Arabic' : 'English', x + 5, y - 8);
      }
    }

    // Draw pieces
    pieces.forEach((piece) => {
      const isCorrect = piece.currentRow === (piece.isArabic ? 0 : 1) && piece.currentCol === piece.correctCol;
      const isInGrid = piece.currentRow >= 0;

      ctx.fillStyle = piece.isArabic
        ? (isCorrect ? '#FFD700' : '#FFF8DC')
        : (isCorrect ? '#98FB98' : '#E0FFE0');
      ctx.fillRect(piece.x, piece.y, pieceWidth, pieceHeight);
      ctx.strokeStyle = isCorrect ? '#228B22' : (isInGrid ? '#4B0082' : '#888');
      ctx.lineWidth = isCorrect ? 4 : 2;
      ctx.strokeRect(piece.x, piece.y, pieceWidth, pieceHeight);

      ctx.fillStyle = '#000';
      ctx.font = piece.isArabic ? '24px Amiri, serif' : '14px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(piece.text, piece.x + pieceWidth / 2, piece.y + pieceHeight / 2);
    });

    // Victory
    if (pieces.length > 0 && pieces.every(p => p.currentRow === (p.isArabic ? 0 : 1) && p.currentCol === p.correctCol)) {
      if (!isComplete) {
        setIsComplete(true);
        onComplete?.();
        victorySound.currentTime = 0;
        victorySound.play();
      }
      drawVictory(ctx);
    }
  };

  const drawVictory = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'rgba(0, 128, 0, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FFF';
    ctx.font = '36px Amiri, serif';
    ctx.textAlign = 'center';
    ctx.fillText('Masha Allah!', canvas.width / 2, canvas.height / 2 - 30);
    ctx.font = '24px Arial';
    ctx.fillText('Set Completed!', canvas.width / 2, canvas.height / 2 + 10);
  };

  const isSlotOccupied = (row: number, col: number): boolean => {
    return pieces.some(p => p.currentRow === row && p.currentCol === col && p.id !== selectedPiece?.id);
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (isComplete) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const clicked = pieces.slice().reverse().find(p =>
      mouseX >= p.x && mouseX <= p.x + pieceWidth &&
      mouseY >= p.y && mouseY <= p.y + pieceHeight
    );

    if (clicked) setSelectedPiece(clicked);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!selectedPiece || isComplete) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setPieces(prev => prev.map(p =>
      p.id === selectedPiece.id
        ? { ...p, x: mouseX - pieceWidth / 2, y: mouseY - pieceHeight / 2 }
        : p
    ));
  };

  const handleMouseUp = () => {
    if (!selectedPiece || isComplete) return;

    const col = Math.round((selectedPiece.x - startX) / (pieceWidth + gap));
    const row = Math.round((selectedPiece.y - startY) / (pieceHeight + gap));
    const targetRow = selectedPiece.isArabic ? 0 : 1;

    // Only allow correct column
    if (
      row === targetRow &&
      col >= 0 && col < cols &&
      col === selectedPiece.correctCol &&
      !isSlotOccupied(row, col)
    ) {
      const targetX = startX + col * (pieceWidth + gap);
      const targetY = startY + row * (pieceHeight + gap);

      setPieces(prev => prev.map(p =>
        p.id === selectedPiece.id
          ? { ...p, x: targetX, y: targetY, currentCol: col, currentRow: row }
          : p
      ));

      snapSound.currentTime = 0;
      snapSound.play();
    }

    setSelectedPiece(null);
  };

  return (
    <div style={{
      textAlign: 'center',
      padding: '30px 20px',
      fontFamily: "'Amiri', Arial, sans-serif",
      maxWidth: '900px',
      margin: '0 auto',
      background: '#f8f9fa',
      borderRadius: '16px',
      boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    }}>
      <h2 style={{ color: '#4B0082', marginBottom: '10px', fontSize: '28px' }}>
        Asma ul Husna - Set {setIndex + 1}
      </h2>
      <p style={{ color: '#555', fontSize: '18px', marginBottom: '25px' }}>
        Match each name with its meaning in the correct column
      </p>

      <div style={{ display: 'inline-block', position: 'relative' }}>
        <canvas
          ref={canvasRef}
          width={canvasWidth}
          height={canvasHeight}
          style={{
            border: '4px solid #4B0082',
            borderRadius: '16px',
            background: '#F0F8FF',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            cursor: isComplete ? 'default' : 'grab',
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => setSelectedPiece(null)}
        />
      </div>

      <div style={{ marginTop: '30px' }}>
        <button
          onClick={initializePuzzle}
          style={{
            padding: '14px 32px',
            fontSize: '18px',
            background: '#4B0082',
            color: 'white',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontWeight: 'bold',
          }}
        >
          Reset Puzzle
        </button>
      </div>

      {isComplete && (
        <div style={{
          marginTop: '20px',
          padding: '20px',
          background: '#d4edda',
          color: '#155724',
          borderRadius: '12px',
          fontSize: '20px',
          fontWeight: 'bold',
        }}>
          Masha Allah! Set completed successfully
        </div>
      )}
    </div>
  );
};

export default AsmaUlHusnaPuzzle;
