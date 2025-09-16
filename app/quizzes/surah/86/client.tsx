"use client";
import { atTariqQuizData } from "@/data/surah-86-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AtTariqQuiz() {
  return <SurahQuiz quizData={atTariqQuizData} />;
}
