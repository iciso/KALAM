"use client";

import { useState, useEffect } from "react";
import DSDQuranModal from "../dsd-quran-modal";
import { DSDQuestions } from "@/data/dsd-quran-data";

type DSDQuestion = {
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
  answer: string;
};

export default function DSDQuranGamePage() {
  const [questions, setQuestions] = useState<DSDQuestion[]>(DSDQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const currentQuestion = questions[currentQuestionIndex];

  const handleCheckAnswer = () => {
    if (currentQuestion) {
      const userInput = userAnswer.trim().toLowerCase();
      const correctAnswer = currentQuestion.answer.toLowerCase();
      const correctStage = currentQuestion.stage.toLowerCase();
      const isCorrectAnswer = userInput === correctAnswer || userInput === correctStage;
      setIsCorrect(isCorrectAnswer);
      setShowModal(true);
    }
  };

  const handleNextQuestion = () => {
    setUserAnswer("");
    setShowModal(false);
    setIsCorrect(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Game Over! You've completed all questions. Alhamdulillah!");
    }
  };

  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">DSD Quran Game</h1>
      <div className="mb-4">
        <p className="text-lg">Question: {currentQuestion.text}</p>
        <p className="text-sm text-gray-600 mt-1">Hint: Enter the key event or stage (e.g., "mockery" or "Denial & Antilocution").</p>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          placeholder="Enter your answer"
          className="w-full p-2 border rounded mt-2"
        />
      </div>
      <button
        onClick={handleCheckAnswer}
        disabled={!userAnswer}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-400"
      >
        Check Answer
      </button>
      {showModal && (
        <DSDQuranModal
          isCorrect={isCorrect}
          onClose={handleNextQuestion}
          correctAnswer={currentQuestion.answer}
          surah={currentQuestion.surah}
          verse={currentQuestion.verse}
          stage={currentQuestion.stage}
          commentary={currentQuestion.commentary}
          tafsir={currentQuestion.tafsir}
          historicalContext={currentQuestion.historicalContext}
          hadeeth={currentQuestion.hadeeth}
          comparativeReligion={currentQuestion.comparativeReligion}
          islamophobia={currentQuestion.islamophobia}
          significance={currentQuestion.significance}
        />
      )}
    </div>
  );
}
