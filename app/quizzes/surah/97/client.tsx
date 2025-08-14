"use client";
import { alQadarQuizData } from "@/data/surah-99-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlQadarQuizClient() {
  return <SurahQuiz quizData={alQadarQuizData} />;
}
