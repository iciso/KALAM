"use client";
import { alAlaqQuizData } from "@/data/surah-96-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlAlaqQuizClient() {
  return <SurahQuiz quizData={alAlaqQuizData} />;
}
