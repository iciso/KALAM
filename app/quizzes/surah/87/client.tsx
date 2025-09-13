"use client";
import { alAlaQuizData } from "@/data/surah-87-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlAlaQuiz() {
  return <SurahQuiz quizData={alAlaQuizData} />;
}
