"use client";
import { alQadrQuizData } from "@/data/surah-97-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlQadrQuizClient() {
  return <SurahQuiz quizData={alQadrQuizData} />;
}
