"use client"; 
import { anNaziatQuizData } from "@/data/surah-79-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AnNaziatQuiz() {
  return <SurahQuiz quizData={anNaziatQuizData} />;
}
