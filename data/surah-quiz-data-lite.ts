export interface SurahQuizData {
  surahId: number
  surahName: string
  surahArabicName: string
  totalVerses: number
  type: string
  difficulty: string
  introduction: string
  questions: {
    id: string
    question: string
    arabic?: string
    options: {
      id: string
      text: string
      isCorrect: boolean
    }[]
    explanation?: string
  }[]
}

// Simplified version with just essential data for preview purposes
export const alKafirunQuizDataLite: SurahQuizData = {
  surahId: 109,
  surahName: "Al-Kafirun",
  surahArabicName: "الكافرون",
  totalVerses: 6,
  type: "Meccan",
  difficulty: "Beginner",
  introduction: "Surah Al-Kafirun (The Disbelievers) is the 109th chapter of the Quran.",
  questions: [
    {
      id: "kafirun-1",
      arabic: "الْكَافِرُونَ",
      question: "What does 'Al-Kafirun' mean?",
      options: [
        { id: "a", text: "The Believers", isCorrect: false },
        { id: "b", text: "The Disbelievers", isCorrect: true },
        { id: "c", text: "The Hypocrites", isCorrect: false },
        { id: "d", text: "The Righteous", isCorrect: false },
      ],
      explanation: "Al-Kafirun means 'The Disbelievers'.",
    },
    {
      id: "kafirun-2",
      arabic: "قُلْ",
      question: "The surah begins with the command 'Qul'. What does this mean?",
      options: [
        { id: "a", text: "Say", isCorrect: true },
        { id: "b", text: "Recite", isCorrect: false },
        { id: "c", text: "Listen", isCorrect: false },
        { id: "d", text: "Believe", isCorrect: false },
      ],
      explanation: "Qul means 'Say' and is a command from Allah to Prophet Muhammad ﷺ.",
    },
    // Add more questions as needed, but keep it small for preview
  ],
}
