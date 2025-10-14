"use client"; 
import { anNabaQuizData } from "@/data/surah-78-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AnNabaQuiz() {
  return <SurahQuiz quizData={anNabaQuizData} />;
}
