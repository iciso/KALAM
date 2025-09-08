"use client";
import { alGhashiyahQuizData } from "@/data/surah-88-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlGhashiyahQuiz() {
  return <SurahQuiz quizData={alGhashiyahQuizData} />;
}
