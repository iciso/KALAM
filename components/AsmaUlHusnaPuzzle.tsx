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

  // Dynamic grid based on set size (4 or 5 names)
  const pieceCount = names.length;
  const cols = pieceCount;
  const rows = 2;
  const pieceWidth = 110;
  const pieceHeight = 70;
  const gap = 25;
  const canvasWidth = cols * (pieceWidth + gap) + 100;
  const canvasHeight = 380;
  const startX = 50;
  const startY = 80;

  // Sounds
  const [snapSound] = useState(() => new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwF'));
  const [victorySound] = useState(() => new Audio('data:audio/wav;base64,UklGRiQFAABXQVZFZm10IBAAAAABAAEAIlYAAESsAAACABAAZGF0YQdFAACAhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwF'));

  useEffect(() => {
    initializePuzzle();
  }, [setIndex]);

  const initializePuzzle = () => {
    const initialPieces: PuzzlePiece[] = [];
    const shuffledCols = shuffleArray([...Array(pieceCount).keys()]);

    names.forEach((name, i) => {
      const col = shuffledCols[i];
      initialPieces.push({
        id: i * 2,
        text: name.arabic,
        x: 50 + Math.random() * 300,
        y: 220 + Math.random() * 60,
        isArabic: true,
        correctCol: col,
      });
      initialPieces.push({
        id: i * 2 + 1,
        text: name.english,
        x: 300 + Math.random() * 300,
        y: 220 + Math.random() * 60,
        isArabic: false,
        correctCol: col,
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

    // Draw grid slots
    ctx.strokeStyle = '#4B0082';
    ctx.lineWidth = 3;
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = startX + col * (pieceWidth + gap);
        const y = startY + row * (pieceHeight + gap);
        ctx.strokeRect(x, y, pieceWidth, pieceHeight);
        ctx.fillStyle = '#555';
        ctx.font = '14px Arial';
        ctx.fillText(row === 0 ? 'Arabic' : 'English', x + 5, y - 8);
      }
    }

    // Draw pieces
    pieces.forEach((piece) => {
      const isCorrect = isPieceCorrect(piece);
      ctx.fillStyle = piece.isArabic
        ? (isCorrect ? '#FFD700' : '#FFF8DC')
        : (isCorrect ? '#98FB98' : '#E0FFE0');
      ctx.fillRect(piece.x, piece.y, pieceWidth, pieceHeight);
      ctx.strokeStyle = isCorrect ? '#228B22' : '#888';
      ctx.lineWidth = isCorrect ? 4 : 2;
      ctx.strokeRect(piece.x, piece.y, pieceWidth, pieceHeight);

      ctx.fillStyle = '#000';
      ctx.font = piece.isArabic ? '26px Amiri, serif' : '15px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(piece.text, piece.x + pieceWidth / 2, piece.y + pieceHeight / 2);
    });

    // Check completion
    const allCorrect = pieces.length > 0 && pieces.every(isPieceCorrect);
    if (allCorrect && !isComplete) {
      setIsComplete(true);
      onComplete?.();
      victorySound.currentTime = 0;
      victorySound.play();
      drawVictory(ctx);
    }
  };

  const isPieceCorrect = (piece: PuzzlePiece): boolean => {
    const targetX = startX + piece.correctCol * (pieceWidth + gap);
    const targetY = piece.isArabic ? startY : startY + pieceHeight + gap;
    return Math.abs(piece.x - targetX) < 10 && Math.abs(piece.y - targetY) < 10;
  };

  const drawVictory = (ctx: CanvasRenderingContext2D) => {
    ctx.fillStyle = 'rgba(0, 128, 0, 0.9)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#FFF';
    ctx.font = '36px Amiri, serif';
    ctx.textAlign = 'center';
    ctx.fillText('ماشاء الله!', canvas.width / 2, canvas.height / 2 - 30);
    ctx.font = '24px Arial';
    ctx.fillText('Puzzle Completed!', canvas.width / 2, canvas.height / 2 + 10);
  };

  const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
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
    const row = selectedPiece.isArabic ? 0 : 1;

    if (col >= 0 && col < cols && ((selectedPiece.isArabic && row === 0) || (!selectedPiece.isArabic && row === 1))) {
      const targetX = startX + col * (pieceWidth + gap);
      const targetY = startY + row * (pieceHeight + gap);

      setPieces(prev => prev.map(p =>
        p.id === selectedPiece.id ? { ...p, x: targetX, y: targetY } : p
      ));

      if (Math.abs(selectedPiece.x - targetX) > 10 || Math.abs(selectedPiece.y - targetY) > 10) {
        snapSound.currentTime = 0;
        snapSound.play();
      }
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
        أسماء الله الحسنى - المجموعة {setIndex + 1}
      </h2>
      <p style={{ color: '#555', fontSize: '18px', marginBottom: '25px' }}>
        اسحب الأسماء لترتيبها: العربية في الأعلى، المعاني في الأسفل
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
          إعادة الترتيب
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
          ماشاء الله! لقد أكملت المجموعة بنجاح
        </div>
      )}
    </div>
  );
};

export default AsmaUlHusnaPuzzle;
