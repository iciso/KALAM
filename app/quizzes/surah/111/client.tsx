"use client"

import SurahQuiz from "@/components/surah-quiz"
import { surahMasadQuizData } from "@/data/surah-quiz-data"

export default function SurahMasadQuizClient() {
  return <SurahQuiz quizData={surahMasadQuizData} />
}
