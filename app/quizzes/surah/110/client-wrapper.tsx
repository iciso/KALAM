"use client"

import { anNasrQuizData } from "@/data/surah-quiz-data"
import dynamic from "next/dynamic"

const SurahQuizClient = dynamic(() => import("./client"), {
  ssr: false,
})

export default function ClientWrapper() {
  return <SurahQuizClient quizData={anNasrQuizData} />
}
