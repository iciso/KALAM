"use client"

import { alMaunQuizData } from "@/data/surah-107-quiz-data"
import dynamic from "next/dynamic"

const SurahQuiz = dynamic(() => import("@/components/surah-quiz"), { ssr: false })

export default function AlMaunQuizClient() {
  return <SurahQuiz quizData={alMaunQuizData} />
}
