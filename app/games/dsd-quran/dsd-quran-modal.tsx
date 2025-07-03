"use client";

import { useState, useEffect } from "react";

type DSDQuranModalProps = {
  isCorrect: boolean | null;
  onClose: () => void;
  correctAnswer: string;
};

export default function DSDQuranModal({ isCorrect, onClose, correctAnswer }: DSDQuranModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (isCorrect === null) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className={`bg-white p-6 rounded-lg shadow-lg transition-transform ${isVisible ? "scale-100" : "scale-95"}`}>
        <h2 className="text-xl font-bold mb-4">Result</h2>
        <p className={isCorrect ? "text-green-600" : "text-red-600"}>
          {isCorrect ? "Correct!" : "Incorrect!"}
        </p>
        <p className="mt-2">Correct Answer: {correctAnswer}</p>
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
