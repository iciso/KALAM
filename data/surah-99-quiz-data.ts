export const alZalzalahQuizData: SurahQuizData = {
  surahId: 99,
  surahName: "Al-Zalzalah",
  surahArabicName: "الزلزلة",
  totalVerses: 8,
  type: "Medinan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Zalzalah (The Earthquake) describes the catastrophic events of the Day of Judgment, when the earth will shake violently and reveal all its secrets. The surah emphasizes that every atom’s worth of good or evil will be accounted for, underscoring Allah’s perfect justice.",
  additionalContextElements: [
    {
      title: "The Earthquake of Judgment",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">The Earth’s Testimony</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The surah vividly portrays the earth’s quaking and its subsequent testimony about all human deeds. This aligns with the Quranic theme of creation bearing witness to truth on the Day of Reckoning.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains that "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا" (When the earth is shaken with its [final] earthquake) refers to a unique quake that will flatten mountains and expose buried deeds.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Weight of an Atom",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Divine Justice</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The surah’s closing verses highlight that even the smallest good or evil deed will be brought forth, demonstrating Allah’s meticulous justice. This serves as a warning and motivation for believers.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Hadith Connection</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet ﷺ said: <span class="arabic-text">"مَنْ قَرَأَ سُورَةَ الزَّلْزَلَةِ فَكَأَنَّمَا قَرَأَ بِالْبَقَرَةِ"</span> (Whoever recites Surah Al-Zalzalah, it is as if they recited half the Quran). (Tirmidhi)
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the Arabic term for 'earthquake' in the surah’s title, الزلزلة?",
      arabic: "الزلزلة",
      rootLetters: "ز ل ز ل",
      options: [
        { id: "a", text: "The Earthquake", isCorrect: true },
        { id: "b", text: "The Resurrection", isCorrect: false },
        { id: "c", text: "The Reckoning", isCorrect: false },
        { id: "d", text: "The Darkness", isCorrect: false },
      ],
      explanation: "الزلزلة (Al-Zalzalah) means 'The Earthquake,' derived from the root ز-ل-ز-ل (intense shaking).",
    },
    {
      id: "q2",
      question: "What Arabic phrase in the surah means 'when the earth is shaken violently'?",
      arabic: "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا",
      rootLetters: "ز ل ز ل | أ ر ض",
      options: [
        { id: "a", text: "The earth’s final quake", isCorrect: true },
        { id: "b", text: "The sky’s splitting", isCorrect: false },
        { id: "c", text: "The mountains’ crumbling", isCorrect: false },
        { id: "d", text: "The oceans’ boiling", isCorrect: false },
      ],
      explanation: "إِذَا زُلْزِلَتِ الْأَرْضُ زِلْزَالَهَا refers to the earth’s violent quake (roots: ز-ل-ز-ل and أ-ر-ض).",
    },
    {
      id: "q3",
      question: "What Arabic term in the surah means 'burdens' (what the earth will cast out)?",
      arabic: "أَثْقَالَهَا",
      rootLetters: "ث ق ل",
      options: [
        { id: "a", text: "Burdens/secrets", isCorrect: true },
        { id: "b", text: "Treasures", isCorrect: false },
        { id: "c", text: "Sins", isCorrect: false },
        { id: "d", text: "Mountains", isCorrect: false },
      ],
      explanation: "أَثْقَالَهَا (athqalaha) means 'its burdens,' from the root ث-ق-ل (weight). Tafsir: The earth will reveal hidden deeds.",
    },
    {
      id: "q4",
      question: "What Arabic phrase in the surah means 'man will say, "What is wrong with it?"'?",
      arabic: "قَالَ الْإِنْسَانُ مَا لَهَا",
      rootLetters: "ق و ل | إ ن س",
      options: [
        { id: "a", text: "Human confusion during the quake", isCorrect: true },
        { id: "b", text: "Angels’ announcement", isCorrect: false },
        { id: "c", text: "The disbelievers’ denial", isCorrect: false },
        { id: "d", text: "The believers’ prayer", isCorrect: false },
      ],
      explanation: "قَالَ الْإِنْسَانُ مَا لَهَا reflects human astonishment (roots: ق-و-ل and إ-ن-س).",
    },
    {
      id: "q5",
      question: "What Arabic term in the surah means 'your Lord inspired it' (the earth)?",
      arabic: "أَوْحَىٰ لَهَا",
      rootLetters: "و ح ي",
      options: [
        { id: "a", text: "Inspired/commanded", isCorrect: true },
        { id: "b", text: "Created", isCorrect: false },
        { id: "c", text: "Destroyed", isCorrect: false },
        { id: "d", text: "Blessed", isCorrect: false },
      ],
      explanation: "أَوْحَىٰ لَهَا (awha laha) means 'inspired it,' from the root و-ح-ي (divine communication).",
    },
    {
      id: "q6",
      question: "What Arabic phrase in the surah means 'whoever does an atom’s weight of good'?",
      arabic: "فَمَنْ يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا",
      rootLetters: "ع م ل | ث ق ل | ذ ر ر",
      options: [
        { id: "a", text: "Minimal good deeds count", isCorrect: true },
        { id: "b", text: "Only major deeds matter", isCorrect: false },
        { id: "c", text: "Wealth determines reward", isCorrect: false },
        { id: "d", text: "Intentions are irrelevant", isCorrect: false },
      ],
      explanation: "مِثْقَالَ ذَرَّةٍ (mithqala dharrah) means 'atom’s weight,' emphasizing Allah’s precise justice (roots: ث-ق-ل and ذ-ر-ر).",
    },
    {
      id: "q7",
      question: "What Arabic term in Tafsir Ibn Kathir refers to the earth 'discharging its charges'?",
      arabic: "أَلْقَتْ أَثْقَالَهَا",
      rootLetters: "ل ق ي | ث ق ل",
      options: [
        { id: "a", text: "Casting out buried deeds", isCorrect: true },
        { id: "b", text: "Destroying mountains", isCorrect: false },
        { id: "c", text: "Releasing water", isCorrect: false },
        { id: "d", text: "Announcing judgment", isCorrect: false },
      ],
      explanation: "أَلْقَتْ أَثْقَالَهَا (alqat athqalaha) means 'discharged its burdens,' as explained in Tafsir Ibn Kathir (roots: ل-ق-ي and ث-ق-ل).",
    },
    {
      id: "q8",
      question: "What Arabic word in the surah means 'scattered' (referring to people)?",
      arabic: "مُبَعْثَرُونَ",
      rootLetters: "ب ع ث ر",
      options: [
        { id: "a", text: "Scattered in confusion", isCorrect: true },
        { id: "b", text: "Gathered in rows", isCorrect: false },
        { id: "c", text: "Fleeing in fear", isCorrect: false },
        { id: "d", text: "Praying humbly", isCorrect: false },
      ],
      explanation: "مُبَعْثَرُونَ (muba'atharun) means 'scattered,' derived from ب-ع-ث-ر (dispersal).",
    },
    {
      id: "q9",
      question: "What is the root of the word يَوْمَئِذٍ (on that Day) in the surah?",
      arabic: "يَوْمَئِذٍ",
      rootLetters: "ي و م | أ ذ ن",
      options: [
        { id: "a", text: "ي-و-م and أ-ذ-ن", isCorrect: true },
        { id: "b", text: "ق-ي-م", isCorrect: false },
        { id: "c", text: "د-ي-ن", isCorrect: false },
        { id: "d", text: "ح-س-ب", isCorrect: false },
      ],
      explanation: "يَوْمَئِذٍ (yawma'idhin) combines ي-و-م (day) and أ-ذ-ن (time), meaning 'on that Day.'",
    },
    {
      id: "q10",
      question: "What Arabic phrase in the hadith equates reciting Al-Zalzalah to half the Quran?",
      arabic: "مَنْ قَرَأَ سُورَةَ الزَّلْزَلَةِ فَكَأَنَّمَا قَرَأَ بِالْبَقَرَةِ",
      rootLetters: "ق ر أ | ز ل ز ل | ب ق ر",
      options: [
        { id: "a", text: "Reward like reciting half the Quran", isCorrect: true },
        { id: "b", text: "Protection from earthquakes", isCorrect: false },
        { id: "c", text: "Guarantee of Paradise", isCorrect: false },
        { id: "d", text: "Forgiveness of sins", isCorrect: false },
      ],
      explanation: "The hadith’s phrase (roots: ق-ر-أ, ز-ل-ز-ل, and ب-ق-ر) highlights the surah’s immense value.",
    },
  ],
};
