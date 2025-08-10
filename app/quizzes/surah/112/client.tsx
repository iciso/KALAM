"use client";
import { alIkhlasQuizData } from "@/data/surah-112-quiz-data";
import dynamic from "next/dynamic";
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false });
export default function AlIkhlasQuizClient() {
  return <SurahQuiz quizData={alIkhlasQuizData} />;
}
