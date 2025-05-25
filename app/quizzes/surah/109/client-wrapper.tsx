"use client"

import dynamic from "next/dynamic"
import { alKafirunQuizData } from "@/data/surah-quiz-data"

const SurahQuizClient = dynamic(() => import("./client"), {
  ssr: false,
})

export default function SurahQuizClientWrapper() {
  return <SurahQuizClient quizData={alKafirunQuizData} />
}
