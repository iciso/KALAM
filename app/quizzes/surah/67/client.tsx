"use client"; 
import { alMulkQuizData } from "@/data/surah-67-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlMulkQuiz() {
  return <SurahQuiz quizData={alMulkQuizData} />;
}
