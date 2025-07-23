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
  // --- Easy (5) ---
{
  id: "1-2",
  surah: 1,
  ayat: 2,
  difficulty: "easy",
  words: [
    { id: "1-2-1", text: "الْحَمْدُ", transliteration: "Alhamdu", translation: "All praise" },
    { id: "1-2-2", text: "لِلَّهِ", transliteration: "Lillahi", translation: "is for Allah" },
    { id: "1-2-3", text: "رَبِّ", transliteration: "Rabb", translation: "Lord" },
    { id: "1-2-4", text: "الْعَالَمِينَ", transliteration: "al-‘Alameen", translation: "of the worlds" },
  ],
  translation: "All praise is for Allah—Lord of the worlds",
},
{
  id: "112-1",
  surah: 112,
  ayat: 1,
  difficulty: "easy",
  words: [
    { id: "112-1-1", text: "قُلْ", transliteration: "Qul", translation: "Say" },
    { id: "112-1-2", text: "هُوَ", transliteration: "Huwa", translation: "He is" },
    { id: "112-1-3", text: "اللَّهُ", transliteration: "Allahu", translation: "Allah" },
    { id: "112-1-4", text: "أَحَدٌ", transliteration: "Ahad", translation: "One" },
  ],
  translation: "Say, He is Allah, [Who is] One",
},
{
  id: "108-1",
  surah: 108,
  ayat: 1,
  difficulty: "easy",
  words: [
    { id: "108-1-1", text: "إِنَّا", transliteration: "Inna", translation: "Indeed, We" },
    { id: "108-1-2", text: "أَعْطَيْنَاكَ", transliteration: "A‘taynaka", translation: "have given you" },
    { id: "108-1-3", text: "الْكَوْثَرَ", transliteration: "Al-Kawthar", translation: "Al-Kawthar" },
  ],
  translation: "Indeed, We have granted you, [O Muhammad], Al-Kawthar",
},
{
  id: "94-5",
  surah: 94,
  ayat: 5,
  difficulty: "easy",
  words: [
    { id: "94-5-1", text: "فَإِنَّ", transliteration: "Fa-inna", translation: "So indeed" },
    { id: "94-5-2", text: "مَعَ", transliteration: "ma‘a", translation: "with" },
    { id: "94-5-3", text: "الْعُسْرِ", transliteration: "al-‘usri", translation: "hardship" },
    { id: "94-5-4", text: "يُسْرًا", transliteration: "yusra", translation: "comes ease" },
  ],
  translation: "So, surely with hardship comes ease",
},
{
  id: "103-1",
  surah: 103,
  ayat: 1,
  difficulty: "easy",
  words: [
    { id: "103-1-1", text: "وَالْعَصْرِ", transliteration: "Wal-‘Asr", translation: "By Time" },
  ],
  translation: "By Time",
},

// --- Medium (5) ---
{
  id: "2-2",
  surah: 2,
  ayat: 2,
  difficulty: "medium",
  words: [
    { id: "2-2-1", text: "ذَٰلِكَ", transliteration: "Dhalika", translation: "This is" },
    { id: "2-2-2", text: "الْكِتَابُ", transliteration: "al-Kitab", translation: "the Book" },
    { id: "2-2-3", text: "لَا", transliteration: "la", translation: "no" },
    { id: "2-2-4", text: "رَيْبَ", transliteration: "rayba", translation: "doubt" },
    { id: "2-2-5", text: "فِيهِ", transliteration: "fihi", translation: "in it" },
  ],
  translation: "This is the Book about which there is no doubt",
},
{
  id: "3-139",
  surah: 3,
  ayat: 139,
  difficulty: "medium",
  words: [
    { id: "3-139-1", text: "وَلَا", transliteration: "Wala", translation: "Do not" },
    { id: "3-139-2", text: "تَهِنُوا", transliteration: "tahinu", translation: "lose heart" },
    { id: "3-139-3", text: "وَلَا", transliteration: "wala", translation: "and do not" },
    { id: "3-139-4", text: "تَحْزَنُوا", transliteration: "tahzanu", translation: "grieve" },
    { id: "3-139-5", text: "وَأَنتُمُ", transliteration: "wa antumu", translation: "for you" },
    { id: "3-139-6", text: "الْأَعْلَوْنَ", transliteration: "al-a‘lawna", translation: "will be superior" },
    { id: "3-139-7", text: "إِن", transliteration: "in", translation: "if" },
    { id: "3-139-8", text: "كُنتُم", transliteration: "kuntum", translation: "you are" },
    { id: "3-139-9", text: "مُّؤْمِنِينَ", transliteration: "mu’minin", translation: "believers" },
  ],
  translation: "So do not weaken and do not grieve, and you will be superior if you are [true] believers",
},
{
  id: "17-23",
  surah: 17,
  ayat: 23,
  difficulty: "medium",
  words: [
    { id: "17-23-1", text: "وَقَضَى", transliteration: "Waqada", translation: "And your Lord has decreed" },
    { id: "17-23-2", text: "رَبُّكَ", transliteration: "Rabbuka", translation: "your Lord" },
    { id: "17-23-3", text: "أَلَّا", transliteration: "alla", translation: "that you not" },
    { id: "17-23-4", text: "تَعْبُدُوا", transliteration: "ta‘budu", translation: "worship" },
    { id: "17-23-5", text: "إِلَّا", transliteration: "illa", translation: "except" },
    { id: "17-23-6", text: "إِيَّاهُ", transliteration: "iyyahu", translation: "Him" },
  ],
  translation: "And your Lord has decreed that you not worship except Him",
},
{
  id: "49-13",
  surah: 49,
  ayat: 13,
  difficulty: "medium",
  words: [
    { id: "49-13-1", text: "يَا", transliteration: "Ya", translation: "O" },
    { id: "49-13-2", text: "أَيُّهَا", transliteration: "Ayyuha", translation: "you" },
    { id: "49-13-3", text: "النَّاسُ", transliteration: "An-nasu", translation: "mankind" },
    { id: "49-13-4", text: "إِنَّا", transliteration: "Inna", translation: "Indeed We" },
    { id: "49-13-5", text: "خَلَقْنَاكُم", transliteration: "khalaqnakum", translation: "created you" },
    { id: "49-13-6", text: "مِّن", transliteration: "min", translation: "from" },
    { id: "49-13-7", text: "ذَكَرٍ", transliteration: "dhakarin", translation: "a male" },
    { id: "49-13-8", text: "وَأُنثَىٰ", transliteration: "wa-untha", translation: "and a female" },
  ],
  translation: "O mankind! Indeed, We created you from a male and a female",
},
{
  id: "5-8",
  surah: 5,
  ayat: 8,
  difficulty: "medium",
  words: [
    { id: "5-8-1", text: "اعْدِلُوا", transliteration: "i‘dilu", translation: "Be just" },
    { id: "5-8-2", text: "هُوَ", transliteration: "huwa", translation: "it is" },
    { id: "5-8-3", text: "أَقْرَبُ", transliteration: "aqrabu", translation: "nearer" },
    { id: "5-8-4", text: "لِلتَّقْوَىٰ", transliteration: "lil-taqwa", translation: "to righteousness" },
  ],
  translation: "Be just: that is nearer to righteousness",
},

// --- Hard (5) ---
{
  id: "39-53",
  surah: 39,
  ayat: 53,
  difficulty: "hard",
  words: [
    { id: "39-53-1", text: "قُلْ", transliteration: "Qul", translation: "Say" },
    { id: "39-53-2", text: "يَا", transliteration: "Ya", translation: "O" },
    { id: "39-53-3", text: "عِبَادِيَ", transliteration: "‘ibadi", translation: "My servants" },
    { id: "39-53-4", text: "الَّذِينَ", transliteration: "alladhina", translation: "who" },
    { id: "39-53-5", text: "أَسْرَفُوا", transliteration: "asrafu", translation: "transgressed" },
    { id: "39-53-6", text: "عَلَىٰ", transliteration: "‘ala", translation: "against" },
    { id: "39-53-7", text: "أَنفُسِهِمْ", transliteration: "anfusihim", translation: "themselves" },
  ],
  translation: "Say, O My servants who have transgressed against themselves [by sinning],",
},
{
  id: "24-35",
  surah: 24,
  ayat: 35,
  difficulty: "hard",
  words: [
    { id: "24-35-1", text: "اللَّهُ", transliteration: "Allahu", translation: "Allah" },
    { id: "24-35-2", text: "نُورُ", transliteration: "nuru", translation: "is the Light" },
    { id: "24-35-3", text: "السَّمَاوَاتِ", transliteration: "as-samawat", translation: "of the heavens" },
    { id: "24-35-4", text: "وَالْأَرْضِ", transliteration: "wal-ard", translation: "and the earth" },
  ],
  translation: "Allah is the Light of the heavens and the earth",
},
{
  id: "3-26",
  surah: 3,
  ayat: 26,
  difficulty: "hard",
  words: [
    { id: "3-26-1", text: "تُؤْتِي", transliteration: "tu’ti", translation: "You give" },
    { id: "3-26-2", text: "الْمُلْكَ", transliteration: "al-mulka", translation: "sovereignty" },
    { id: "3-26-3", text: "مَن", transliteration: "man", translation: "to whom" },
    { id: "3-26-4", text: "تَشَاءُ", transliteration: "tasha’u", translation: "You will" },
  ],
  translation: "You give sovereignty to whom You will",
},
{
  id: "2-286",
  surah: 2,
  ayat: 286,
  difficulty: "hard",
  words: [
    { id: "2-286-1", text: "لَا", transliteration: "la", translation: "Allah does not" },
    { id: "2-286-2", text: "يُكَلِّفُ", transliteration: "yukallifu", translation: "burden" },
    { id: "2-286-3", text: "اللَّهُ", transliteration: "Allah", translation: "Allah" },
    { id: "2-286-4", text: "نَفْسًا", transliteration: "nafsan", translation: "a soul" },
    { id: "2-286-5", text: "إِلَّا", transliteration: "illa", translation: "except" },
    { id: "2-286-6", text: "وُسْعَهَا", transliteration: "wus‘aha", translation: "within its capacity" },
  ],
  translation: "Allah does not burden a soul beyond that it can bear",
},
{
  id: "33-72",
  surah: 33,
  ayat: 72,
  difficulty: "hard",
  words: [
    { id: "33-72-1", text: "إِنَّا", transliteration: "Inna", translation: "Indeed, We" },
    { id: "33-72-2", text: "عَرَضْنَا", transliteration: "‘aradna", translation: "offered" },
    { id: "33-72-3", text: "الْأَمَانَةَ", transliteration: "al-amanah", translation: "the Trust" },
    { id: "33-72-4", text: "عَلَى", transliteration: "‘ala", translation: "to" },
    { id: "33-72-5", text: "السَّمَاوَاتِ", transliteration: "as-samawat", translation: "the heavens" },
  ],
  translation: "Indeed, We offered the Trust to the heavens",
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
