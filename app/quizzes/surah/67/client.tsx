"use client";

import { useSearchParams } from "next/navigation";
import { alMulkQuizData } from "@/data/surah-67-quiz-data";
import dynamic from "next/dynamic";

const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });

export default function AlMulkQuiz() {
  const searchParams = useSearchParams();

  // Read optional ?start=1&end=20 style params from the URL (1-indexed, inclusive).
  // If absent, fall back to the full question set so the existing "Start Quiz"
  // link (with no params) keeps working exactly as before.
  const startParam = searchParams.get("start");
  const endParam = searchParams.get("end");

  const totalQuestions = alMulkQuizData.questions.length;
  const start = startParam ? Math.max(1, Number(startParam)) : 1;
  const end = endParam ? Math.min(totalQuestions, Number(endParam)) : totalQuestions;

  // Build a shallow copy of quizData with just the sliced questions,
  // leaving everything else (introduction, additionalContextElements, etc.) intact.
  const sectionedQuizData =
    start === 1 && end === totalQuestions
      ? alMulkQuizData
      : {
          ...alMulkQuizData,
          questions: alMulkQuizData.questions.slice(start - 1, end),
        };

  return <SurahQuiz quizData={sectionedQuizData} />;
}
