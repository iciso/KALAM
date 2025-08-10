"use client"

import { alFalaqQuizData } from "@/data/surah-113-quiz-data.ts"
import dynamic from "next/dynamic"

// Use dynamic import to avoid hydration issues with client components
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false })

export default function AlFalaqQuizClient() {
  return <SurahQuiz quizData={alFalaqQuizData} />
}
