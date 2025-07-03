"use client";

import { useState, useEffect } from "react";

type DSDQuranModalProps = {
  isCorrect: boolean | null;
  onClose: () => void;
  correctAnswer: string;
  surah: string;
  verse: string;
  stage: string;
  commentary: string;
  tafsir: string;
  historicalContext: string;
  hadeeth: string;
  comparativeReligion: string;
  islamophobia: string;
  significance: string;
};

export default function DSDQuranModal({
  isCorrect,
  onClose,
  correctAnswer,
  surah,
  verse,
  stage,
  commentary,
  tafsir,
  historicalContext,
  hadeeth,
  comparativeReligion,
  islamophobia,
  significance,
}: DSDQuranModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (isCorrect === null) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white p-6 rounded-lg shadow-lg max-h-[80vh] overflow-y-auto transition-transform ${isVisible ? "scale-100" : "scale-95"}`}>
        <h2 className="text-xl font-bold mb-4">Result</h2>
        <p className={isCorrect ? "text-green-600" : "text-red-600"}>
          {isCorrect ? "Correct! Alhamdulillah!" : "Incorrect! Try again next time."}
        </p>
        <p className="mt-2">Correct Answer: {correctAnswer}</p>
        <div className="mt-4 space-y-2 text-sm">
          <p><strong>Surah:</strong> {surah}</p>
          <p><strong>Verse:</strong> {verse}</p>
          <p><strong>Stage:</strong> {stage}</p>
          <p><strong>Commentary:</strong> {commentary}</p>
          <p><strong>Tafsir:</strong> {tafsir}</p>
          <p><strong>Historical Context:</strong> {historicalContext}</p>
          <p><strong>Hadeeth:</strong> {hadeeth}</p>
          <p><strong>Comparative Religion:</strong> {comparativeReligion}</p>
          <p><strong>Islamophobia:</strong> {islamophobia}</p>
          <p><strong>Significance:</strong> {significance}</p>
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        >
          Next Question
        </button>
      </div>
    </div>
  );
}
