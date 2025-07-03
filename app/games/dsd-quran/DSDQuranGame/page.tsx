import { useState } from "react";
import DSDQuranModal from "../dsd-quran-modal";

type Question = {
  question: string;
  answer: string;
  options?: string[];
};

async function getQuestions(): Promise<Question[]> {
  const response = await fetch("/data/dsd-quran-data.json");
  return response.json();
}

export default function DSDQuranGamePage() {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  // Load questions on mount
  useEffect(() => {
    getQuestions().then(setQuestions);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const handleCheckAnswer = () => {
    if (currentQuestion) {
      const correct = userAnswer.trim().toLowerCase() === currentQuestion.answer.toLowerCase();
      setIsCorrect(correct);
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
      alert("Game Over! You've completed all questions.");
    }
  };

  if (!currentQuestion) return <div>Loading...</div>;

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">DSD Quran Game</h1>
      <div className="mb-4">
        <p className="text-lg">{currentQuestion.question}</p>
        {currentQuestion.options && (
          <select
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="w-full p-2 border rounded mt-2"
          >
            <option value="">Select an answer</option>
            {currentQuestion.options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
        {!currentQuestion.options && (
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter your answer"
            className="w-full p-2 border rounded mt-2"
          />
        )}
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
        />
      )}
    </div>
  );
}
