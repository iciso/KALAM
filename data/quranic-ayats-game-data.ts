export interface AyatWord {
  id: string
  text: string
  transliteration?: string
  translation?: string
}

export interface QuranicAyat {
  id: string
  surah: number
  ayat: number
  difficulty: "easy" | "medium" | "hard"
  words: AyatWord[]
  translation: string
  audioUrl?: string
}

export const quranicAyatsData: QuranicAyat[] = [
  {
    id: "1-1",
    surah: 1,
    ayat: 1,
    difficulty: "easy",
    words: [
      { id: "1-1-1", text: "بِسْمِ", transliteration: "Bismi", translation: "In the name of" },
      { id: "1-1-2", text: "اللَّهِ", transliteration: "Allah", translation: "Allah" },
      { id: "1-1-3", text: "الرَّحْمَٰنِ", transliteration: "Ar-Rahman", translation: "the Most Gracious" },
      { id: "1-1-4", text: "الرَّحِيمِ", transliteration: "Ar-Raheem", translation: "the Most Merciful" },
    ],
    translation: "In the name of Allah, the Most Gracious, the Most Merciful",
  },
  {
    id: "2-255-1",
    surah: 2,
    ayat: 255,
    difficulty: "medium",
    words: [
      { id: "2-255-1-1", text: "اللَّهُ", transliteration: "Allahu", translation: "Allah" },
      { id: "2-255-1-2", text: "لَا", transliteration: "la", translation: "no" },
      { id: "2-255-1-3", text: "إِلَٰهَ", transliteration: "ilaha", translation: "god" },
      { id: "2-255-1-4", text: "إِلَّا", transliteration: "illa", translation: "except" },
      { id: "2-255-1-5", text: "هُوَ", transliteration: "huwa", translation: "Him" },
    ],
    translation: "Allah - there is no deity except Him",
  },
  {
    id: "112-1",
    surah: 112,
    ayat: 1,
    difficulty: "easy",
    words: [
      { id: "112-1-1", text: "قُلْ", transliteration: "Qul", translation: "Say" },
      { id: "112-1-2", text: "هُوَ", transliteration: "huwa", translation: "He is" },
      { id: "112-1-3", text: "اللَّهُ", transliteration: "Allahu", translation: "Allah" },
      { id: "112-1-4", text: "أَحَدٌ", transliteration: "ahad", translation: "the One and Only" },
    ],
    translation: "Say, 'He is Allah, [who is] One'",
  },
  {
    id: "3-103-1",
    surah: 3,
    ayat: 103,
    difficulty: "hard",
    words: [
      { id: "3-103-1-1", text: "وَاعْتَصِمُوا", transliteration: "Wa'tasimoo", translation: "And hold fast" },
      { id: "3-103-1-2", text: "بِحَبْلِ", transliteration: "bihabli", translation: "to the rope" },
      { id: "3-103-1-3", text: "اللَّهِ", transliteration: "Allahi", translation: "of Allah" },
      { id: "3-103-1-4", text: "جَمِيعًا", transliteration: "jamee'an", translation: "all together" },
      { id: "3-103-1-5", text: "وَلَا", transliteration: "wala", translation: "and do not" },
      { id: "3-103-1-6", text: "تَفَرَّقُوا", transliteration: "tafarraqoo", translation: "become divided" },
    ],
    translation: "And hold firmly to the rope of Allah all together and do not become divided",
  },
  {
    id: "2-286-1",
    surah: 2,
    ayat: 286,
    difficulty: "medium",
    words: [
      { id: "2-286-1-1", text: "لَا", transliteration: "La", translation: "Not" },
      { id: "2-286-1-2", text: "يُكَلِّفُ", transliteration: "yukallifu", translation: "does burden" },
      { id: "2-286-1-3", text: "اللَّهُ", transliteration: "Allahu", translation: "Allah" },
      { id: "2-286-1-4", text: "نَفْسًا", transliteration: "nafsan", translation: "a soul" },
      { id: "2-286-1-5", text: "إِلَّا", transliteration: "illa", translation: "except" },
      { id: "2-286-1-6", text: "وُسْعَهَا", transliteration: "wus'aha", translation: "its capacity" },
    ],
    translation: "Allah does not charge a soul except [with that within] its capacity",
  },
]

// Add more verses with varying difficulty levels
export const getAyatsByDifficulty = (difficulty: "easy" | "medium" | "hard"): QuranicAyat[] => {
  return quranicAyatsData.filter((ayat) => ayat.difficulty === difficulty)
}

export const getAllAyats = (): QuranicAyat[] => {
  return quranicAyatsData
}

export const getRandomAyats = (count: number, difficulty?: "easy" | "medium" | "hard"): QuranicAyat[] => {
  let ayats = difficulty ? getAyatsByDifficulty(difficulty) : getAllAyats()

  // If we don't have enough ayats of the requested difficulty, fall back to all ayats
  if (ayats.length < count) {
    ayats = getAllAyats()
  }

  // Shuffle and take the requested number
  return [...ayats].sort(() => Math.random() - 0.5).slice(0, Math.min(count, ayats.length))
}
