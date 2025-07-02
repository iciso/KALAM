"use client"

import React, { useState, useEffect } from 'react';
import DSDQuranQuestion from '@/DSDQuranQuestion';
import DSDQuranModal from '@/DSDQuranModal';
import dsdData from '@/data/dsd-quran-data.json';

interface Ayah {
  surah: string;
  verse: string;
  text: string;
  stage: string;
  commentary: string;
  tafsir: string;
  historicalContext: string;
  hadeeth: string;
  comparativeReligion: string;
  islamophobia: string;
  significance: string;
}

const DSDQuranGame: React.FC = () => {
  const [currentAyah, setCurrentAyah] = useState<Ayah | null>(null);
  const [userAnswer, setUserAnswer] = useState<string>('');
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showModal, setShowModal] = useState<boolean>(false);

  const stages = [
    'Denial & Antilocution',
    'Stigma & Avoidance',
    'Discrimination',
    'Physical Attack',
    'Extermination',
  ];

  useEffect(() => {
    // Load a random ayah on mount
    const randomIndex = Math.floor(Math.random() * dsdData.length);
    setCurrentAyah(dsdData[randomIndex]);
  }, []);

  const handleAnswer = (answer: string) => {
    setUserAnswer(answer);
    setIsCorrect(answer === currentAyah?.stage);
    setShowModal(true);
  };

  const handleNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * dsdData.length);
    setCurrentAyah(dsdData[randomIndex]);
    setUserAnswer('');
    setIsCorrect(null);
    setShowModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">DSD-Quran Game</h1>
      {currentAyah && (
        <DSDQuranQuestion
          ayah={currentAyah}
          stages={stages}
          onAnswer={handleAnswer}
        />
      )}
      {showModal && currentAyah && (
        <DSDQuranModal
          ayah={currentAyah}
          isCorrect={isCorrect}
          onClose={handleNextQuestion}
        />
      )}
    </div>
  );
};

export default DSDQuranGame;
