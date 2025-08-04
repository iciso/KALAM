"use client" 

import { alFatihahQuizData } from "@/data/surah-1-quiz-data"
import dynamic from "next/dynamic"

// Use dynamic import to avoid hydration issues with client components
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false })

export default function AlFatihahQuizClient() {
  return <SurahQuiz quizData={alFatihahQuizData} />
}
