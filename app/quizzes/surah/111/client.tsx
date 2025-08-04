"use client"

import { alMasadQuizData } from "@/data/surah-111-quiz-data"
import dynamic from "next/dynamic"

// Use dynamic import to avoid hydration issues with client components
const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false })

export default function AlMasadQuizClient() {
  return <SurahQuiz quizData={alMasadQuizData} />
}
