"use client"

import SurahQuiz from "@/components/surah-quiz"
import { surahalKafirunQuizData } from "@/data/surah-quiz-data"

export default function SurahalKafirunQuizClient() {
  return <SurahQuiz quizData={surahalKafirunQuizData} />
}
