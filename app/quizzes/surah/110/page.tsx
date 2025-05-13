import { anNasrQuizData } from "@/data/surah-quiz-data"
import dynamic from "next/dynamic"

const SurahQuizClient = dynamic(() => import("./client"), {
  ssr: false,
})

export const metadata = {
  title: `Surah ${anNasrQuizData.surahName} Quiz - KALAM`,
  description: `Test your knowledge of Surah ${anNasrQuizData.surahName} vocabulary and meanings with this interactive quiz.`,
}

export default function SurahQuizPage() {
  return <SurahQuizClient quizData={anNasrQuizData} />
}
