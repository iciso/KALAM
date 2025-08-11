"use client";
import { alQariahQuizData } from "@/data/surah-101-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlQariahQuizClient() {
  return <SurahQuiz quizData={alQariahQuizData} />;
}
