"use client";
import { alFilQuizData } from "@/data/surah-105-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlFilQuizClient() {
  return <SurahQuiz quizData={alFilQuizData} />;
}
