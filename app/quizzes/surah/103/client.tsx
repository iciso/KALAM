"use client";
import { alAsrQuizData } from "@/data/surah-103-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlAsrQuizClient() {
  return <SurahQuiz quizData={alAsrQuizData} />;
}
