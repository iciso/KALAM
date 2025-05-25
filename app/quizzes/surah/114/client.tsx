"use client"

import SurahQuiz from "@/components/surah-quiz"
import { alNasQuizData } from "@/data/surah-quiz-data"

export default function AlNasQuizClient() {
  return <SurahQuiz quizData={alNasQuizData} />
}
