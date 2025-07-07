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
  const [currentSet, setCurrentSet] = useState(0);
  const [score, setScore] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [showTransitionCard, setShowTransitionCard] = useState(false);
  const questionsPerSet = 5;

  const currentQuestion = questions[currentQuestionIndex];

  useEffect(() => {
    setTotalQuestions(questions.length);
  }, [questions]);

  const handleCheckAnswer = () => {
    if (currentQuestion) {
      const correctStage = currentQuestion.stage.toLowerCase();
      const userInput = userAnswer.trim().toLowerCase();
      const isCorrectAnswer = userInput === correctStage;
      setIsCorrect(isCorrectAnswer);
      if (isCorrectAnswer) {
        setScore(score + 10);
        setCorrectAnswers(correctAnswers + 1);
      }
      setShowModal(true);
    }
  };

  const handleNextQuestion = () => {
    setUserAnswer("");
    setShowModal(false);
    setIsCorrect(null);
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length && (nextIndex % questionsPerSet === 0)) {
      setShowTransitionCard(true); // Show transition card instead of alert
    }
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
    } else {
      setShowTransitionCard(true); // Show final stats
    }
  };

  const handleContinue = () => {
    setShowTransitionCard(false);
    if (currentQuestionIndex < questions.length) {
      if (currentQuestionIndex % questionsPerSet === 0 && currentQuestionIndex > 0) {
        setCurrentSet(currentSet + 1);
      }
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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
      {showTransitionCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full mx-4">
            <h2 className="text-xl font-bold mb-4">
              {currentQuestionIndex >= questions.length ? "Game Over! Alhamdulillah!" : `Set ${currentSet + 1} Completed!`}
            </h2>
            <p className="mb-2">Score: {score} / {totalQuestions * 10}</p>
            <p className="mb-2">Correct Answers: {correctAnswers} / {totalQuestions}</p>
            <p className="mb-4">Accuracy: {totalQuestions > 0 ? ((correctAnswers / totalQuestions) * 100).toFixed(1) : 0}%</p>
            <button
              onClick={handleContinue}
              className="bg-blue-500 text-white px-4 py-2 rounded w-full"
            >
              {currentQuestionIndex >= questions.length ? "Finish" : "Next Set"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
