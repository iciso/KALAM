"use client";
import { alZalzalahQuizData } from "@/data/surah-99-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlZalzalahQuizClient() {
  return <SurahQuiz quizData={alZalzalahQuizData} />;
}
