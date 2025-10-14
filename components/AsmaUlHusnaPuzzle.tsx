import React, { useRef, useEffect, useState } from 'react';

// Define the first 12 Asma ul Husna with Arabic and English meanings
interface AsmaName {
  arabic: string;
  english: string;
}

const asmaNames: AsmaName[] = [
  { arabic: 'الرحمن', english: 'The Most Merciful' },
  { arabic: 'الرحيم', english: 'The Especially Merciful' },
  { arabic: 'الملك', english: 'The King' },
  { arabic: 'القدوس', english: 'The Most Holy' },
  { arabic: 'السلام', english: 'The Source of Peace' },
  { arabic: 'المؤمن', english: 'The Giver of Faith' },
  { arabic: 'المهيمن', english: 'The Guardian' },
  { arabic: 'العزيز', english: 'The Mighty' },
  { arabic: 'الجبار', english: 'The Compeller' },
  { arabic: 'المتكبر', english: 'The Supreme' },
  { arabic: 'الخالق', english: 'The Creator' },
  { arabic: 'البارئ', english: 'The Maker' },
];

interface PuzzlePiece {
  id: number;
  text: string;
  x: number;
  y: number;
  isArabic: boolean;
  correctIndex: number;
}

const AsmaUlHusnaPuzzle: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [pieces, setPieces] = useState<PuzzlePiece[]>([]);
  const [selectedPiece, setSelectedPiece] = useState<PuzzlePiece | null>(null);
  const [isComplete, setIsComplete] = useState(false);

  const gridRows = 3;
  const gridCols = 4;
  const pieceWidth = 100;
  const pieceHeight = 60;
  const canvasWidth = 600;
  const canvasHeight = 400;

  useEffect(() => {
    // Initialize puzzle pieces
    const initialPieces: PuzzlePiece[] = [];
    const shuffledIndices = shuffleArray([...Array(12).keys()]);

    asmaNames.forEach((name, index) => {
      // Arabic piece
      initialPieces.push({
        id: index * 2,
        text: name.arabic,
        x: 50 + (index % 4) * (pieceWidth + 10),
        y: 250,
        isArabic: true,
        correctIndex: index,
      });
      // English piece
      initialPieces.push({
        id: index * 2 + 1,
        text: name.english,
        x: 50 + (index % 4) * (pieceWidth + 10),
        y: 320,
        isArabic: false,
        correctIndex: index,
      });
    });

    // Shuffle pieces for initial placement
    setPieces(shuffleArray(initialPieces));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw the puzzle
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = '#4B0082';
    ctx.lineWidth = 2;
    for (let row = 0; row < gridRows; row++) {
      for (let col = 0; col < gridCols; col++) {
        ctx.strokeRect(col * pieceWidth + 50, row * pieceHeight + 50, pieceWidth, pieceHeight);
      }
    }

    // Draw pieces
    pieces.forEach((piece) => {
      ctx.fillStyle = piece.isArabic ? '#FFD700' : '#98FB98';
      ctx.fillRect(piece.x, piece.y, pieceWidth, pieceHeight);
      ctx.strokeRect(piece.x, piece.y, pieceWidth, pieceHeight);
      ctx.fillStyle = '#000';
      ctx.font = piece.isArabic ? '24px Amiri' : '16px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(piece.text, piece.x + pieceWidth / 2, piece.y + pieceHeight / 2);
    });

    // Check if puzzle is complete
    const isSolved = pieces.every((piece) => {
      const row = Math.floor(piece.correctIndex / gridCols);
      const col = piece.correctIndex % gridCols;
      const targetX = col * pieceWidth + 50;
      const targetY = piece.isArabic ? 50 : 110;
      return Math.abs(piece.x - targetX) < 5 && Math.abs(piece.y - targetY) < 5;
    });

    if (isSolved) {
      setIsComplete(true);
      ctx.fillStyle = 'rgba(0, 128, 0, 0.7)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#FFF';
      ctx.font = '32px Arial';
      ctx.fillText('Puzzle Completed!', canvas.width / 2, canvas.height / 2);
    }
  }, [pieces]);

  // Shuffle array utility
  const shuffleArray = <T,>(array: T[]): T[] => {
    return array.sort(() => Math.random() - 0.5);
  };

  // Handle mouse down to select a piece
  const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const clickedPiece = pieces.find((piece) =>
      mouseX >= piece.x &&
      mouseX <= piece.x + pieceWidth &&
      mouseY >= piece.y &&
      mouseY <= piece.y + pieceHeight
    );

    if (clickedPiece) {
      setSelectedPiece(clickedPiece);
    }
  };

  // Handle mouse move to drag piece
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    if (!selectedPiece) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    setPieces((prevPieces) =>
      prevPieces.map((piece) =>
        piece.id === selectedPiece.id
          ? { ...piece, x: mouseX - pieceWidth / 2, y: mouseY - pieceHeight / 2 }
          : piece
      )
    );
  };

  // Handle mouse up to snap piece to grid
  const handleMouseUp = () => {
    if (!selectedPiece) return;

    const row = Math.round((selectedPiece.y - 50) / pieceHeight);
    const col = Math.round((selectedPiece.x - 50) / pieceWidth);

    if (row >= 0 && row < gridRows && col >= 0 && col < gridCols) {
      const targetX = col * pieceWidth + 50;
      const targetY = selectedPiece.isArabic ? 50 : 110;

      setPieces((prevPieces) =>
        prevPieces.map((piece) =>
          piece.id === selectedPiece.id ? { ...piece, x: targetX, y: targetY } : piece
        )
      );
    }

    setSelectedPiece(null);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Asma ul Husna Jigsaw Puzzle</h2>
      <p>Drag and drop to match Arabic names with their English meanings.</p>
      <canvas
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight}
        style={{ border: '1px solid #4B0082', background: '#F0F8FF' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
      />
      {isComplete && <p style={{ color: 'green', fontSize: '24px' }}>Congratulations! Puzzle Completed!</p>}
    </div>
  );
};

export default AsmaUlHusnaPuzzle;
