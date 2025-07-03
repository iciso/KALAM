"use client"

import { useState } from "react"
import DSDQuranModal from "../dsd-quran-modal"

type Question = {
  id: number
  text: string
  options: string[]
  correctAnswer: string
}

const DSDQuranGame = () => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      id: 1,
      text: "What is the first surah in the Quran?",
      options: ["Al-Fatiha", "Al-Baqarah", "Al-Imran", "An-Nisa"],
      correctAnswer: "Al-Fatiha",
    },
    {
      id: 2,
      text: "How many surahs are in the Quran?",
      options: ["114", "113", "112", "111"],
      correctAnswer: "114",
    },
  ])

  return (
    <div>
      <h1>DSD Quran Game</h1>
      <DSDQuranModal />
    </div>
  )
}

export default DSDQuranGame
