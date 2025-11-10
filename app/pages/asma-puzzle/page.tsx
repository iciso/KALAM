"use client";

import React, { useState } from 'react';
import AsmaUlHusnaPuzzle from '@/components/AsmaUlHusnaPuzzle';
import { totalSets } from '@/data/asmaSets';

const AsmaPuzzlePage: React.FC = () => {
  const [selectedSet, setSelectedSet] = useState<number | null>(null);

  // Load progress from localStorage
  const getProgress = () => {
    if (typeof window === 'undefined') return [];
    const saved = localStorage.getItem('asmaProgress');
    return saved ? JSON.parse(saved) : [];
  };

  const progress = getProgress();

  const saveProgress = (setIndex: number) => {
    const newProgress = [...new Set([...progress, setIndex])];
    localStorage.setItem('asmaProgress', JSON.stringify(newProgress));
  };

  // Call saveProgress from puzzle when completed
  React.useEffect(() => {
    if (selectedSet !== null && progress.includes(selectedSet)) {
      // Optional: auto-save when puzzle completes
    }
  }, [selectedSet, progress]);

  if (selectedSet !== null) {
    return (
      <div>
        <button
          onClick={() => setSelectedSet(null)}
          style={{
            padding: '12px 24px',
            margin: '20px',
            background: '#4B0082',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '16px',
            cursor: 'pointer',
          }}
        >
          العودة إلى القائمة
        </button>
        <AsmaUlHusnaPuzzle
          setIndex={selectedSet}
          onComplete={() => saveProgress(selectedSet)}
        />
      </div>
    );
  }

  return (
    <div style={{ padding: '30px', fontFamily: "'Amiri', serif", textAlign: 'center' }}>
      <h1 style={{ color: '#4B0082', marginBottom: '10px' }}>
        أسماء الله الحسنى - لغز الترتيب
      </h1>
      <p style={{ fontSize: '18px', color: '#555', marginBottom: '30px' }}>
        اختر مجموعة لتبدأ التعلم باللعب
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto',
        }}
      >
        {Array.from({ length: totalSets }, (_, i) => (
          <button
            key={i}
            onClick={() => setSelectedSet(i)}
            style={{
              padding: '25px',
              fontSize: '20px',
              background: progress.includes(i) ? '#d4edda' : '#f8f9fa',
              border: progress.includes(i) ? '3px solid #28a745' : '3px solid #4B0082',
              borderRadius: '16px',
              cursor: 'pointer',
              color: progress.includes(i) ? '#155724' : '#4B0082',
              fontWeight: 'bold',
              transition: 'all 0.3s',
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            المجموعة {i + 1}
            <br />
            {progress.includes(i) && 'تم الإكمال'}
          </button>
        ))}
      </div>

      <div style={{ marginTop: '50px', color: '#666', fontSize: '18px' }}>
        <p>
          تم إكمال <strong>{progress.length}</strong> من أصل <strong>{totalSets}</strong> مجموعة
        </p>
        <progress
          value={progress.length}
          max={totalSets}
          style={{ width: '80%', height: '24px', borderRadius: '12px' }}
        />
      </div>
    </div>
  );
};

export default AsmaPuzzlePage;
