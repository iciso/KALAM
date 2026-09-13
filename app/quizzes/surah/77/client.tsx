"use client"; 
import { alMursalatQuizData } from "@/data/surah-77-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function alMursalatQuiz() {
  return <SurahQuiz quizData={alMursalatQuizData} />;
}
