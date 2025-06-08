"use client"

import SurahQuiz from "@/components/surah-quiz"
import { alKafirunQuizData } from "@/data/surah-quiz-data"

export default function alKafirunQuizClient() {
  return <SurahQuiz quizData={alKafirunQuizData} />
}
