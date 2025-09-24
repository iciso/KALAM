"use client";
import { alMutaffifinQuizData } from "@/data/surah-83-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlMutaffifinQuiz() {
  return <SurahQuiz quizData={alMutaffifinQuizData} />;
}
