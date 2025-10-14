"use client"; 
import { atTakwirQuizData } from "@/data/surah-81-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AtTakwirQuiz() {
  return <SurahQuiz quizData={atTakwirQuizData} />;
}
