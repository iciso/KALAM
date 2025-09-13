"use client";
import { ashShamsQuizData } from "@/data/surah-91-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AshShamsQuizClient() {
  return <SurahQuiz quizData={ashShamsQuizData} />;
}
