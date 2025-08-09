"use client"
 
import { alKafirunQuizData } from "@/data/surah-quiz-data"
import dynamic from "next/dynamic"

// Use dynamic import to avoid hydration issues with client components
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false })

export default function AlKafirunQuizClient() {
  return <SurahQuiz quizData={alNasQuizData} />
}
