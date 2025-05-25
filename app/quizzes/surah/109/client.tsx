"use client"

import SurahQuiz from "@/components/surah-quiz"
import type { SurahQuizData } from "@/types/vocabulary"

interface SurahQuizClientProps {
  quizData: SurahQuizData
}

export default function SurahQuizClient({ quizData }: SurahQuizClientProps) {
  return <SurahQuiz quizData={quizData} />
}
