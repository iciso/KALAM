"use client"

import { alQurayshQuizData } from "@/data/surah-quiz-data"
import dynamic from "next/dynamic"

// Use dynamic import to avoid hydration issues with client components
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false })

export default function AlQurayshQuizClient() {
  return <SurahQuiz quizData={alQurayshQuizData} />
}
