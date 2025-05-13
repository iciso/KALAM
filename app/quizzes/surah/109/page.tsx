import { alKafirunQuizData } from "@/data/surah-quiz-data"
import dynamic from "next/dynamic"

const SurahQuizClient = dynamic(() => import("./client"), {
  ssr: false,
})

export const metadata = {
  title: `Surah ${alKafirunQuizData.surahName} Quiz - KALAM`,
  description: `Test your knowledge of Surah ${alKafirunQuizData.surahName} vocabulary and concepts.`,
}

export default function SurahAlKafirunQuizPage() {
  return <SurahQuizClient quizData={alKafirunQuizData} />
}
