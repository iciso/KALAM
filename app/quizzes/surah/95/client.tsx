"use client";
import { atTinQuizData } from "@/data/surah-95-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AtTinQuizClient() {
  return <SurahQuiz quizData={atTinQuizData} />;
}
