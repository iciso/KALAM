"use client"; 
import { arRahmanQuizData } from "@/data/surah-55-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function arRahmanQuiz() {
  return <SurahQuiz quizData={arRahmanQuizData} />;
}
