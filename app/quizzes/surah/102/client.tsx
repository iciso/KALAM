"use client";
import { atTakathurQuizData } from "@/data/surah-102-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AtTakathurQuizClient() {
  return <SurahQuiz quizData={atTakathurQuizData} />;
}
