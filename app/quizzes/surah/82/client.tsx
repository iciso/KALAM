"use client"; 
import { alInfitarQuizData } from "@/data/surah-82-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlInfitarQuiz() {
  return <SurahQuiz quizData={alInfitarQuizData} />;
} 
