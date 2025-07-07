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
  arabicVerse: string;
};

export default function DSDQuranGamePage() {
  const [questions, setQuestions] = useState<DSDQuestion[]>(DSDQuestions);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [currentSet, setCurrentSet] = useState(0); // Track current set (0 to 3)
  const questionsPerSet = 5;

  const currentQuestion = questions[currentQuestionIndex];

  const handleCheckAnswer = () => {
    if (currentQuestion) {
      const correctStage = currentQuestion.stage.toLowerCase();
      const userInput = userAnswer.trim().toLowerCase();
      const isCorrectAnswer = userInput === correctStage;
      setIsCorrect(isCorrectAnswer);
      setShowModal(true);
    }
  };

  const handleNextQuestion = () => {
    setUserAnswer("");
    setShowModal(false);
    setIsCorrect(null);
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length && (nextIndex % questionsPerSet === 0)) {
      setCurrentSet(currentSet + 1); // Move to next set
      alert(`Set ${currentSet + 1} completed! Reflect on the ayats and their congruity with Allport's scale. Click OK to start Set ${currentSet + 2}.`);
    }
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      alert("Game Over! You've completed all questions. Alhamdulillah!");
    }
  };

  if (!currentQuestion) return <div>Loading...</div>;

  const allportStages = [
    "Denial & Antilocution",
    "Stigma & Avoidance",
    "Discrimination",
    "Physical Attack",
    "Extermination",
  ];

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">DSD Quran Game</h1>
      <div className="mb-4">
        <p className="text-lg">Set {currentSet + 1} - Question {currentQuestionIndex % questionsPerSet + 1}: {currentQuestion.text}</p>
        <p className="text-base mt-2 text-right dir-rtl" style={{ fontFamily: "Amiri, serif" }}>
          {currentQuestion.arabicVerse}
        </p>
        <p className="text-sm text-gray-600 mt-1">Hint: Tap the Allport stage that matches this event.</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
          {allportStages.map((stage, index) => (
            <button
              key={index}
              onClick={() => setUserAnswer(stage)}
              className={`p-3 border rounded ${userAnswer === stage ? "bg-blue-500 text-white" : "bg-white text-black"}`}
              style={{ minHeight: "44px" }}
            >
              {stage}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={handleCheckAnswer}
        disabled={!userAnswer}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-4 disabled:bg-gray-400"
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
