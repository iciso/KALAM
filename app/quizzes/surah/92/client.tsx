"use client"; 
import { alLailQuizData } from "@/data/surah-92-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlLailQuizClient() {
  return <SurahQuiz quizData={alLailQuizData} />;
}
