import { anNasrQuizData } from "@/data/surah-quiz-data"
import ClientWrapper from "./client-wrapper"

export const metadata = {
  title: `Surah ${anNasrQuizData.surahName} Quiz - KALAM`,
  description: `Test your knowledge of Surah ${anNasrQuizData.surahName} vocabulary and meanings with this interactive quiz.`,
}

export default function SurahQuizPage() {
  return <ClientWrapper />
}
