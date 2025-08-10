"use client";
import { alHumazahQuizData } from "@/data/surah-104-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlHumazahQuizClient() {
  return <SurahQuiz quizData={alHumazahQuizData} />;
}
