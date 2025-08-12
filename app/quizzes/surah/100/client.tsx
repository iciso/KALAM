"use client";
import { alAdiyatQuizData } from "@/data/surah-100-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlAdiyatQuizClient() {
  return <SurahQuiz quizData={alAdiyatQuizData} />;
}
