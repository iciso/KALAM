"use client";
import { alFajrQuizData } from "@/data/surah-89-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlFajrQuizClient() {
  return <SurahQuiz quizData={alFajrQuizData} />;
}
