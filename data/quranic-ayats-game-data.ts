export interface AyatWord {
  id: string;
  text: string;
}

export interface QuranicAyat {
  surah: number;
  ayat: number;
  words: AyatWord[];
  translation: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

// Predefined ayats for each difficulty (no overlap in {surah, ayat})
const ayatsData: QuranicAyat[] = [
  // Easy: Short ayats (3-5 words)
  {
    surah: 112,
    ayat: 1,
    words: [
      { id: "1-1", text: "قُلْ" },
      { id: "1-2", text: "هُوَ" },
      { id: "1-3", text: "اللَّهُ" },
      { id: "1-4", text: "أَحَدٌ" },
    ],
    translation: "Say: He is Allah, the One.",
    difficulty: "easy",
  },
  {
    surah: 114,
    ayat: 1,
    words: [
      { id: "2-1", text: "قُلْ" },
      { id: "2-2", text: "أَعُوذُ" },
      { id: "2-3", text: "بِرَبِّ" },
      { id: "2-4", text: "النَّاسِ" },
    ],
    translation: "Say: I seek refuge with the Lord of mankind.",
    difficulty: "easy",
  },
  {
    surah: 113,
    ayat: 1,
    words: [
      { id: "3-1", text: "قُلْ" },
      { id: "3-2", text: "أَعُوذُ" },
      { id: "3-3", text: "بِرَبِّ" },
      { id: "3-4", text: "الْفَلَقِ" },
    ],
    translation: "Say: I seek refuge with the Lord of the dawn.",
    difficulty: "easy",
  },
  {
    surah: 94,
    ayat: 5,
    words: [
      { id: "4-1", text: "فَإِنَّ" },
      { id: "4-2", text: "مَعَ" },
      { id: "4-3", text: "الْعُسْرِ" },
      { id: "4-4", text: "يُسْرًا" },
    ],
    translation: "For indeed, with hardship [will be] ease.",
    difficulty: "easy",
  },
  {
    surah: 93,
    ayat: 11,
    words: [
      { id: "5-1", text: "وَأَمَّا" },
      { id: "5-2", text: "بِنِعْمَةِ" },
      { id: "5-3", text: "رَبِّكَ" },
      { id: "5-4", text: "فَحَدِّثْ" },
    ],
    translation: "But as for the favor of your Lord, report [it].",
    difficulty: "easy",
  },
  // Medium: Moderate length ayats (6-8 words)
  {
    surah: 2,
    ayat: 255,
    words: [
      { id: "6-1", text: "اللَّهُ" },
      { id: "6-2", text: "لَا" },
      { id: "6-3", text: "إِلَٰهَ" },
      { id: "6-4", text: "إِلَّا" },
      { id: "6-5", text: "هُوَ" },
      { id: "6-6", text: "الْحَيُّ" },
      { id: "6-7", text: "الْقَيُّومُ" },
    ],
    translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer.",
    difficulty: "medium",
  },
  {
    surah: 3,
    ayat: 2,
    words: [
      { id: "7-1", text: "اللَّهُ" },
      { id: "7-2", text: "لَا" },
      { id: "7-3", text: "إِلَٰهَ" },
      { id: "7-4", text: "إِلَّا" },
      { id: "7-5", text: "هُوَ" },
      { id: "7-6", text: "الْعَزِيزُ" },
      { id: "7-7", text: "الْحَكِيمُ" },
    ],
    translation: "Allah - there is no deity except Him, the Exalted, the Wise.",
    difficulty: "medium",
  },
  {
    surah: 59,
    ayat: 22,
    words: [
      { id: "8-1", text: "هُوَ" },
      { id: "8-2", text: "اللَّهُ" },
      { id: "8-3", text: "الَّذِي" },
      { id: "8-4", text: "لَا" },
      { id: "8-5", text: "إِلَٰهَ" },
      { id: "8-6", text: "إِلَّا" },
      { id: "8-7", text: "هُوَ" },
    ],
    translation: "He is Allah, the One whom there is no deity but Him.",
    difficulty: "medium",
  },
  {
    surah: 55,
    ayat: 1,
    words: [
      { id: "9-1", text: "الرَّحْمَٰنُ" },
      { id: "9-2", text: "عَلَّمَ" },
      { id: "9-3", text: "الْقُرْآنَ" },
      { id: "9-4", text: "خَلَقَ" },
      { id: "9-5", text: "الْإِنْسَانَ" },
      { id: "9-6", text: "عَلَّمَهُ" },
      { id: "9-7", text: "الْبَيَانَ" },
    ],
    translation: "The Most Merciful taught the Quran, created man, taught him eloquence.",
    difficulty: "medium",
  },
  {
    surah: 36,
    ayat: 1,
    words: [
      { id: "10-1", text: "يٰسٓ" },
      { id: "10-2", text: "وَالْقُرْآنِ" },
      { id: "10-3", text: "الْحَكِيمِ" },
      { id: "10-4", text: "إِنَّكَ" },
      { id: "10-5", text: "لَمِنَ" },
      { id: "10-6", text: "الْمُرْسَلِينَ" },
    ],
    translation: "Ya-Sin. By the wise Quran, indeed you are from the messengers.",
    difficulty: "medium",
  },
  // Hard: Longer or complex ayats (8+ words or complex grammar)
  {
    surah: 2,
    ayat: 286,
    words: [
      { id: "11-1", text: "لَا" },
      { id: "11-2", text: "يُكَلِّفُ" },
      { id: "11-3", text: "اللَّهُ" },
      { id: "11-4", text: "نَفْسًا" },
      { id: "11-5", text: "إِلَّا" },
      { id: "11-6", text: "وُسْعَهَا" },
      { id: "11-7", text: "لَهَا" },
      { id: "11-8", text: "مَا" },
      { id: "11-9", text: "كَسَبَتْ" },
    ],
    translation: "Allah does not burden a soul beyond its capacity. It will have what it has earned.",
    difficulty: "hard",
  },
  {
    surah: 3,
    ayat: 190,
    words: [
      { id: "12-1", text: "إِنَّ" },
      { id: "12-2", text: "فِي" },
      { id: "12-3", text: "خَلْقِ" },
      { id: "12-4", text: "السَّمَاوَاتِ" },
      { id: "12-5", text: "وَالْأَرْضِ" },
      { id: "12-6", text: "وَاخْتِلَافِ" },
      { id: "12-7", text: "اللَّيْلِ" },
      { id: "12-8", text: "وَالنَّهَارِ" },
      { id: "12-9", text: "لَآيَاتٍ" },
    ],
    translation: "Indeed, in the creation of the heavens and earth and the alternation of night and day are signs.",
    difficulty: "hard",
  },
  {
    surah: 18,
    ayat: 1,
    words: [
      { id: "13-1", text: "الْحَمْدُ" },
      { id: "13-2", text: "لِلَّهِ" },
      { id: "13-3", text: "الَّذِي" },
      { id: "13-4", text: "أَنْزَلَ" },
      { id: "13-5", text: "عَلَىٰ" },
      { id: "13-6", text: "عَبْدِهِ" },
      { id: "13-7", text: "الْكِتَابَ" },
      { id: "13-8", text: "وَلَمْ" },
      { id: "13-9", text: "يَجْعَلْ" },
      { id: "13-10", text: "لَهُ" },
    ],
    translation: "Praise to Allah, who sent down upon His Servant the Book and did not make therein any deviance.",
    difficulty: "hard",
  },
  {
    surah: 7,
    ayat: 54,
    words: [
      { id: "14-1", text: "إِنَّ" },
      { id: "14-2", text: "رَبَّكُمُ" },
      { id: "14-3", text: "اللَّهُ" },
      { id: "14-4", text: "الَّذِي" },
      { id: "14-5", text: "خَلَقَ" },
      { id: "14-6", text: "السَّمَاوَاتِ" },
      { id: "14-7", text: "وَالْأَرْضَ" },
      { id: "14-8", text: "فِي" },
      { id: "14-9", text: "سِتَّةِ" },
      { id: "14-10", text: "أَيَّامٍ" },
    ],
    translation: "Indeed, your Lord is Allah, who created the heavens and earth in six days.",
    difficulty: "hard",
  },
  {
    surah: 17,
    ayat: 1,
    words: [
      { id: "15-1", text: "سُبْحَانَ" },
      { id: "15-2", text: "الَّذِي" },
      { id: "15-3", text: "أَسْرَىٰ" },
      { id: "15-4", text: "بِعَبْدِهِ" },
      { id: "15-5", text: "لَيْلًا" },
      { id: "15-6", text: "مِنَ" },
      { id: "15-7", text: "الْمَسْجِدِ" },
      { id: "15-8", text: "الْحَرَامِ" },
      { id: "15-9", text: "إِلَىٰ" },
      { id: "15-10", text: "الْمَسْجِدِ" },
    ],
    translation: "Exalted is He who took His Servant by night from the Sacred Mosque to the Farthest Mosque.",
    difficulty: "hard",
  },
];

// Ensure no duplicates by {surah, ayat}
const uniqueAyats = Array.from(
  new Map(ayatsData.map((ayat) => [`${ayat.surah}-${ayat.ayat}`, ayat])).values(),
);

// Filter ayats by difficulty
const easyAyats = uniqueAyats.filter((ayat) => ayat.difficulty === "easy");
const mediumAyats = uniqueAyats.filter((ayat) => ayat.difficulty === "medium");
const hardAyats = uniqueAyats.filter((ayat) => ayat.difficulty === "hard");

export function getRandomAyats(count: number, difficulty: 'easy' | 'medium' | 'hard'): QuranicAyat[] {
  const ayatPool = difficulty === "easy" ? easyAyats : difficulty === "medium" ? mediumAyats : hardAyats;
  if (ayatPool.length < count) {
    console.warn(`Not enough ${difficulty} ayats available. Requested: ${count}, Available: ${ayatPool.length}`);
    return ayatPool.slice();
  }

  // Shuffle and select 'count' ayats
  const shuffled = [...ayatPool].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}
