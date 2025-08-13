"use client";
import { alBayyinahQuizData } from "@/data/surah-98-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlBayyinahQuizClient() {
  return <SurahQuiz quizData={alBayyinahQuizData} />;
}
