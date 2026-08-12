"use client";

import { useSearchParams } from "next/navigation";
import { alMulkQuizData } from "@/data/surah-67-quiz-data";
import dynamic from "next/dynamic";

const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });

export default function AlMulkQuiz() {
  const searchParams = useSearchParams();

  const startParam = searchParams.get("start");
  const endParam = searchParams.get("end");

  // CHECKPOINT 1: what does the URL actually give us?
  console.error("[AlMulkQuiz] raw searchParams:", searchParams.toString());
  console.error("[AlMulkQuiz] startParam:", startParam, "endParam:", endParam);

  const totalQuestions = alMulkQuizData.questions.length;
  const start = startParam ? Math.max(1, Number(startParam)) : 1;
  const end = endParam ? Math.min(totalQuestions, Number(endParam)) : totalQuestions;

  // CHECKPOINT 2: resolved numeric range
  console.error("[AlMulkQuiz] resolved start:", start, "end:", end, "totalQuestions:", totalQuestions);

  const sectionedQuizData =
    start === 1 && end === totalQuestions
      ? alMulkQuizData
      : {
          ...alMulkQuizData,
          questions: alMulkQuizData.questions.slice(start - 1, end),
        };

  // CHECKPOINT 3: what's actually being handed to <SurahQuiz />?
  console.error(
    "[AlMulkQuiz] sectionedQuizData.questions.length:",
    sectionedQuizData.questions.length,
    "first id:",
    sectionedQuizData.questions[0]?.id,
    "last id:",
    sectionedQuizData.questions[sectionedQuizData.questions.length - 1]?.id
  );

  return <SurahQuiz key={`${start}-${end}`} quizData={sectionedQuizData} />;
}
