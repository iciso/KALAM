"use client"; 
import { abasaQuizData } from "@/data/surah-80-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AbasaQuiz() {
  return <SurahQuiz quizData={abasaQuizData} />;
}
