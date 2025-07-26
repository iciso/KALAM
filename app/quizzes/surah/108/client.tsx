"use client"

import { alKawtharQuizData } from "@/data/surah-108-quiz-data"
import dynamic from "next/dynamic"

// Use dynamic import to avoid hydration issues with client components
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false })

export default function AlKawtharQuizClient() {
  return <SurahQuiz quizData={alKawtharQuizData} />
}
