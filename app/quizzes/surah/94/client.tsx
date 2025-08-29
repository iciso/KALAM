"use client";
import { ashSharhQuizData } from "@/data/surah-94-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AshSharhQuizClient() {
  return <SurahQuiz quizData={ashSharhQuizData} />;
}
