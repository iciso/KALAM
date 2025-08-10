"use client"

import { alNasQuizData } from "@/data/surah-114-quiz-data"
import dynamic from "next/dynamic"

// Use dynamic import to avoid hydration issues with client components
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false })

export default function AlNasQuizClient() {
  return <SurahQuiz quizData={alNasQuizData} />
}
