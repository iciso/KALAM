"use client";
import { alInshiqaqQuizData } from "@/data/surah-84-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlInshiqaqQuiz() {
  return <SurahQuiz quizData={alInshiqaqQuizData} />;
}
