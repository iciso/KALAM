"use client";
import { alBaladQuizData } from "@/data/surah-90-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlBaladQuizClient() {
  return <SurahQuiz quizData={alBaladQuizData} />;
}
