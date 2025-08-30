"use client";
import { adDuhaQuizData } from "@/data/surah-93-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AdDuhaQuizClient() {
  return <SurahQuiz quizData={adDuhaQuizData} />;
}
