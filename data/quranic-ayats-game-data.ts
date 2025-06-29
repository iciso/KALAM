export interface AyatWord {
  id: string;
  text: string;
  transliteration?: string;
  translation?: string;
}

export interface QuranicAyat {
  id: string;
  surah: number;
  ayat: number;
  difficulty: "easy" | "medium" | "hard";
  words: AyatWord[];
  translation: string;
  audioUrl?: string;
}

export const quranicAyatsData: QuranicAyat[] = [
  // Easy: Short ayats (3-5 words)
  {
    id: "112-1",
    surah: 112,
    ayat: 1,
    difficulty: "easy",
    words: [
      { id: "112-1-1", text: "قُلْ", transliteration: "Qul", translation: "Say" },
      { id: "112-1-2", text: "هُوَ", transliteration: "Huwa", translation: "He is" },
      { id: "112-1-3", text: "اللَّهُ", transliteration: "Allahu", translation: "Allah" },
      { id: "112-1-4", text: "أَحَدٌ", transliteration: "Ahad", translation: "the One" },
    ],
    translation: "Say: He is Allah, the One.",
  },
  {
    id: "114-1",
    surah: 114,
    ayat: 1,
    difficulty: "easy",
    words: [
      { id: "114-1-1", text: "قُلْ", transliteration: "Qul", translation: "Say" },
      { id: "114-1-2", text: "أَعُوذُ", transliteration: "A'udhu", translation: "I seek refuge" },
      { id: "114-1-3", text: "بِرَبِّ", transliteration: "Birabbi", translation: "with the Lord" },
      { id: "114-1-4", text: "النَّاسِ", transliteration: "An-Nas", translation: "of mankind" },
    ],
    translation: "Say: I seek refuge with the Lord of mankind.",
  },
  {
    id: "113-1",
    surah: 113,
    ayat: 1,
    difficulty: "easy",
    words: [
      { id: "113-1-1", text: "قُلْ", transliteration: "Qul", translation: "Say" },
      { id: "113-1-2", text: "أَعُوذُ", transliteration: "A'udhu", translation: "I seek refuge" },
      { id: "113-1-3", text: "بِرَبِّ", transliteration: "Birabbi", translation: "with the Lord" },
      { id: "113-1-4", text: "الْفَلَقِ", transliteration: "Al-Falaq", translation: "of the dawn" },
    ],
    translation: "Say: I seek refuge with the Lord of the dawn.",
  },
  {
    id: "94-5",
    surah: 94,
    ayat: 5,
    difficulty: "easy",
    words: [
      { id: "94-5-1", text: "فَإِنَّ", transliteration: "Fa-inna", translation: "For indeed" },
      { id: "94-5-2", text: "مَعَ", transliteration: "Ma'a", translation: "with" },
      { id: "94-5-3", text: "الْعُسْرِ", transliteration: "Al-'usr", translation: "hardship" },
      { id: "94-5-4", text: "يُسْرًا", transliteration: "Yusran", translation: "ease" },
    ],
    translation: "For indeed, with hardship [will be] ease.",
  },
  {
    id: "93-11",
    surah: 93,
    ayat: 11,
    difficulty: "easy",
    words: [
      { id: "93-11-1", text: "وَأَمَّا", transliteration: "Wa-amma", translation: "But as for" },
      { id: "93-11-2", text: "بِنِعْمَةِ", transliteration: "Bini'mati", translation: "the favor of" },
      { id: "93-11-3", text: "رَبِّكَ", transliteration: "Rabbika", translation: "your Lord" },
      { id: "93-11-4", text: "فَحَدِّثْ", transliteration: "Fahaddith", translation: "report [it]" },
    ],
    translation: "But as for the favor of your Lord, report [it].",
  },
  // Medium: Moderate length ayats (6-8 words)
  {
    id: "2-255-1",
    surah: 2,
    ayat: 255,
    difficulty: "medium",
    words: [
      { id: "2-255-1-1", text: "اللَّهُ", transliteration: "Allahu", translation: "Allah" },
      { id: "2-255-1-2", text: "لَا", transliteration: "La", translation: "no" },
      { id: "2-255-1-3", text: "إِلَٰهَ", transliteration: "Ilaha", translation: "deity" },
      { id: "2-255-1-4", text: "إِلَّا", transliteration: "Illa", translation: "except" },
      { id: "2-255-1-5", text: "هُوَ", transliteration: "Huwa", translation: "Him" },
      { id: "2-255-1-6", text: "الْحَيُّ", transliteration: "Al-Hayy", translation: "the Ever-Living" },
      { id: "2-255-1-7", text: "الْقَيُّومُ", transliteration: "Al-Qayyum", translation: "the Sustainer" },
    ],
    translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer.",
  },
  {
    id: "3-2",
    surah: 3,
    ayat: 2,
    difficulty: "medium",
    words: [
      { id: "3-2-1", text: "اللَّهُ", transliteration: "Allahu", translation: "Allah" },
      { id: "3-2-2", text: "لَا", transliteration: "La", translation: "no" },
      { id: "3-2-3", text: "إِلَٰهَ", transliteration: "Ilaha", translation: "deity" },
      { id: "3-2-4", text: "إِلَّا", transliteration: "Illa", translation: "except" },
      { id: "3-2-5", text: "هُوَ", transliteration: "Huwa", translation: "Him" },
      { id: "3-2-6", text: "الْعَزِيزُ", transliteration: "Al-'Aziz", translation: "the Exalted" },
      { id: "3-2-7", text: "الْحَكِيمُ", transliteration: "Al-Hakim", translation: "the Wise" },
    ],
    translation: "Allah - there is no deity except Him, the Exalted, the Wise.",
  },
  {
    id: "59-22",
    surah: 59,
    ayat: 22,
    difficulty: "medium",
    words: [
      { id: "59-22-1", text: "هُوَ", transliteration: "Huwa", translation: "He is" },
      { id: "59-22-2", text: "اللَّهُ", transliteration: "Allahu", translation: "Allah" },
      { id: "59-22-3", text: "الَّذِي", transliteration: "Alladhi", translation: "the One who" },
      { id: "59-22-4", text: "لَا", transliteration: "La", translation: "no" },
      { id: "59-22-5", text: "إِلَٰهَ", transliteration: "Ilaha", translation: "deity" },
      { id: "59-22-6", text: "إِلَّا", transliteration: "Illa", translation: "except" },
      { id: "59-22-7", text: "هُوَ", transliteration: "Huwa", translation: "Him" },
    ],
    translation: "He is Allah, the One whom there is no deity but Him.",
  },
  {
    id: "55-1",
    surah: 55,
    ayat: 1,
    difficulty: "medium",
    words: [
      { id: "55-1-1", text: "الرَّحْمَٰنُ", transliteration: "Ar-Rahman", translation: "The Most Merciful" },
      { id: "55-1-2", text: "عَلَّمَ", transliteration: "'Allama", translation: "taught" },
      { id: "55-1-3", text: "الْقُرْآنَ", transliteration: "Al-Qur'an", translation: "the Quran" },
      { id: "55-1-4", text: "خَلَقَ", transliteration: "Khalaqa", translation: "created" },
      { id: "55-1-5", text: "الْإِنْسَانَ", transliteration: "Al-Insan", translation: "man" },
      { id: "55-1-6", text: "عَلَّمَهُ", transliteration: "'Allamahu", translation: "taught him" },
      { id: "55-1-7", text: "الْبَيَانَ", transliteration: "Al-Bayan", translation: "eloquence" },
    ],
    translation: "The Most Merciful taught the Quran, created man, taught him eloquence.",
  },
  {
    id: "36-1",
    surah: 36,
    ayat: 1,
    difficulty: "medium",
    words: [
      { id: "36-1-1", text: "يٰسٓ", transliteration: "Ya-Sin", translation: "Ya-Sin" },
      { id: "36-1-2", text: "وَالْقُرْآنِ", transliteration: "Wal-Qur'an", translation: "By the Quran" },
      { id: "36-1-3", text: "الْحَكِيمِ", transliteration: "Al-Hakim", translation: "the Wise" },
      { id: "36-1-4", text: "إِنَّكَ", transliteration: "Innaka", translation: "Indeed you" },
      { id: "36-1-5", text: "لَمِنَ", transliteration: "Lamin", translation: "are from" },
      { id: "36-1-6", text: "الْمُرْسَلِينَ", transliteration: "Al-Mursalin", translation: "the messengers" },
    ],
    translation: "Ya-Sin. By the wise Quran, indeed you are from the messengers.",
  },
  // Hard: Longer or complex ayats (8+ words)
  {
    id: "2-286",
    surah: 2,
    ayat: 286,
    difficulty: "hard",
    words: [
      { id: "2-286-1", text: "لَا", transliteration: "La", translation: "Not" },
      { id: "2-286-2", text: "يُكَلِّفُ", transliteration: "Yukallifu", translation: "does burden" },
      { id: "2-286-3", text: "اللَّهُ", transliteration: "Allahu", translation: "Allah" },
      { id: "2-286-4", text: "نَفْسًا", transliteration: "Nafsan", translation: "a soul" },
      { id: "2-286-5", text: "إِلَّا", transliteration: "Illa", translation: "except" },
      { id: "2-286-6", text: "وُسْعَهَا", transliteration: "Wus'aha", translation: "its capacity" },
      { id: "2-286-7", text: "لَهَا", transliteration: "Laha", translation: "It will have" },
      { id: "2-286-8", text: "مَا", transliteration: "Ma", translation: "what" },
      { id: "2-286-9", text: "كَسَبَتْ", transliteration: "Kasabat", translation: "it has earned" },
    ],
    translation: "Allah does not burden a soul beyond its capacity. It will have what it has earned.",
  },
  {
    id: "3-190",
    surah: 3,
    ayat: 190,
    difficulty: "hard",
    words: [
      { id: "3-190-1", text: "إِنَّ", transliteration: "Inna", translation: "Indeed" },
      { id: "3-190-2", text: "فِي", transliteration: "Fi", translation: "in" },
      { id: "3-190-3", text: "خَلْقِ", transliteration: "Khalqi", translation: "the creation" },
      { id: "3-190-4", text: "السَّمَاوَاتِ", transliteration: "As-Samawat", translation: "of the heavens" },
      { id: "3-190-5", text: "وَالْأَرْضِ", transliteration: "Wal-Ard", translation: "and the earth" },
      { id: "3-190-6", text: "وَاخْتِلَافِ", transliteration: "Wakhtilafi", translation: "and the alternation" },
      { id: "3-190-7", text: "اللَّيْلِ", transliteration: "Al-Layl", translation: "of the night" },
      { id: "3-190-8", text: "وَالنَّهَارِ", transliteration: "Wan-Nahar", translation: "and the day" },
      { id: "3-190-9", text: "لَآيَاتٍ", transliteration: "La-ayat", translation: "are signs" },
    ],
    translation: "Indeed, in the creation of the heavens and earth and the alternation of night and day are signs.",
  },
  {
    id: "18-1",
    surah: 18,
    ayat: 1,
    difficulty: "hard",
    words: [
      { id: "18-1-1", text: "الْحَمْدُ", transliteration: "Al-Hamd", translation: "Praise" },
      { id: "18-1-2", text: "لِلَّهِ", transliteration: "Lillahi", translation: "to Allah" },
      { id: "18-1-3", text: "الَّذِي", transliteration: "Alladhi", translation: "who" },
      { id: "18-1-4", text: "أَنْزَلَ", transliteration: "Anzala", translation: "sent down" },
      { id: "18-1-5", text: "عَلَىٰ", transliteration: "Ala", translation: "upon" },
      { id: "18-1-6", text: "عَبْدِهِ", transliteration: "Abdihi", translation: "His servant" },
      { id: "18-1-7", text: "الْكِتَابَ", transliteration: "Al-Kitab", translation: "the Book" },
      { id: "18-1-8", text: "وَلَمْ", transliteration: "Walam", translation: "and did not" },
      { id: "18-1-9", text: "يَجْعَلْ", transliteration: "Yaj'al", translation: "make" },
      { id: "18-1-10", text: "لَهُ", transliteration: "Lahu", translation: "therein" },
      { id: "18-1-11", text: "عِوَجَاۜ", transliteration: "iwajaa", translation: "any deviance" },
    ],
    translation: "Praise to Allah, who sent down upon His Servant the Book and did not make therein any deviance.",
  },
  {
    id: "7-54",
    surah: 7,
    ayat: 54,
    difficulty: "hard",
    words: [
      { id: "7-54-1", text: "إِنَّ", transliteration: "Inna", translation: "Indeed" },
      { id: "7-54-2", text: "رَبَّكُمُ", transliteration: "Rabbakum", translation: "your Lord" },
      { id: "7-54-3", text: "اللَّهُ", transliteration: "Allahu", translation: "is Allah" },
      { id: "7-54-4", text: "الَّذِي", transliteration: "Alladhi", translation: "who" },
      { id: "7-54-5", text: "خَلَقَ", transliteration: "Khalaqa", translation: "created" },
      { id: "7-54-6", text: "السَّمَاوَاتِ", transliteration: "As-Samawat", translation: "the heavens" },
      { id: "7-54-7", text: "وَالْأَرْضَ", transliteration: "Wal-Ard", translation: "and the earth" },
      { id: "7-54-8", text: "فِي", transliteration: "Fi", translation: "in" },
      { id: "7-54-9", text: "سِتَّةِ", transliteration: "Sittati", translation: "six" },
      { id: "7-54-10", text: "أَيَّامٍ", transliteration: "Ayyam", translation: "days" },
    ],
    translation: "Indeed, your Lord is Allah, who created the heavens and earth in six days.",
  },
  {
    id: "17-1",
    surah: 17,
    ayat: 1,
    difficulty: "hard",
    words: [
      { id: "17-1-1", text: "سُبْحَانَ", transliteration: "Subhana", translation: "Exalted is" },
      { id: "17-1-2", text: "الَّذِي", transliteration: "Alladhi", translation: "He who" },
      { id: "17-1-3", text: "أَسْرَىٰ", transliteration: "Asra", translation: "took" },
      { id: "17-1-4", text: "بِعَبْدِهِ", transliteration: "Bi'abdihi", translation: "His servant" },
      { id: "17-1-5", text: "لَيْلًا", transliteration: "Laylan", translation: "by night" },
      { id: "17-1-6", text: "مِنَ", transliteration: "Min", translation: "from" },
      { id: "17-1-7", text: "الْمَسْجِدِ", transliteration: "Al-Masjid", translation: "the Sacred Mosque" },
      { id: "17-1-8", text: "الْحَرَامِ", transliteration: "Al-Haram", translation: "the Sacred" },
      { id: "17-1-9", text: "إِلَىٰ", transliteration: "Ila", translation: "to" },
      { id: "17-1-10", text: "الْمَسْجِدِ", transliteration: "Al-Masjid", translation: "the Farthest Mosque" },
    ],
    translation: "Exalted is He who took His Servant by night from the Sacred Mosque to the Farthest Mosque.",
  },
];

// Filter ayats by difficulty
const easyAyats = quranicAyatsData.filter((ayat) => ayat.difficulty === "easy");
const mediumAyats = quranicAyatsData.filter((ayat) => ayat.difficulty === "medium");
const hardAyats = quranicAyatsData.filter((ayat) => ayat.difficulty === "hard");

export const getAyatsByDifficulty = (difficulty: "easy" | "medium" | "hard"): QuranicAyat[] => {
  return difficulty === "easy" ? easyAyats : difficulty === "medium" ? mediumAyats : hardAyats;
};

export const getAllAyats = (): QuranicAyat[] => {
  return quranicAyatsData;
};

export const getRandomAyats = (count: number, difficulty: "easy" | "medium" | "hard"): QuranicAyat[] => {
  const ayatPool = getAyatsByDifficulty(difficulty);
  if (ayatPool.length < count) {
    console.warn(`Not enough ${difficulty} ayats available. Requested: ${count}, Available: ${ayatPool.length}`);
    return ayatPool.slice(); // Return all available ayats
  }

  // Shuffle and select 'count' ayats
  return [...ayatPool].sort(() => Math.random() - 0.5).slice(0, count);
};
