"use client";
import { alBurujQuizData } from "@/data/surah-85-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlBurujQuiz() {
  return <SurahQuiz quizData={alBurujQuizData} />;
}
