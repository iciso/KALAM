import { alKafirunQuizData } from "@/data/surah-quiz-data"
import SurahQuizClientWrapper from "./client-wrapper"

export const metadata = {
  title: `Surah ${alKafirunQuizData.surahName} Quiz - KALAM`,
  description: `Test your knowledge of Surah ${alKafirunQuizData.surahName} vocabulary and concepts.`,
}

export default function SurahAlKafirunQuizPage() {
  return <SurahQuizClientWrapper />
}
