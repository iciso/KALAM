"use client";
import { anNasrQuizData } from "@/data/surah-110-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function ANNasrQuizClient() {
  return <SurahQuiz quizData={anNasrQuizData} />;
}
