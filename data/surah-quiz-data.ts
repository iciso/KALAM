export interface SurahQuizData {
  surahId: number
  surahName: string
  surahArabicName: string
  totalVerses: number
  type: string
  difficulty: string
  introduction: string
  additionalContextElements?: {
    title: string
    content: string
  }[]
  questions: {
    id: string
    question: string
    arabic?: string
    rootLetters?: string
    options: {
      id: string
      text: string
      isCorrect: boolean
    }[]
    explanation?: string
  }[]
}

export const alFatihahQuizData: SurahQuizData = {
  surahId: 1,
  surahName: "Al-Fatihah",
  surahArabicName: "الفاتحة",
  totalVerses: 7,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Fatihah (The Opening) is the first chapter of the Quran and is recited in every unit (rak'ah) of the daily prayers. It is known as 'Umm al-Kitab' (The Mother of the Book) and 'Sab'a al-Mathani' (The Seven Oft-Repeated Verses) due to its central importance in Islamic worship and theology.",
  additionalContextElements: [
    {
      title: "Significance in Prayer",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Essential in Prayer</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The Prophet Muhammad ﷺ said: "There is no prayer for the one who does not recite the Opening of the Book (Al-Fatihah)." This highlights its fundamental importance in Islamic worship.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Divine Dialogue</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              In a hadith qudsi, the Prophet ﷺ reported that Allah said: "I have divided the prayer between Myself and My servant into two halves, and My servant shall have what he has asked for." When the servant says "All praise is due to Allah, the Lord of all worlds," Allah says: "My servant has praised Me." When the servant says "The Most Compassionate, the Most Merciful," Allah says: "My servant has extolled Me." When the servant says "Master of the Day of Judgment," Allah says: "My servant has glorified Me." When the servant says "You alone we worship and You alone we ask for help," Allah says: "This is between Me and My servant, and My servant shall have what he has asked for." When the servant says "Guide us to the straight path, the path of those whom You have favored, not of those who have earned Your anger, nor of those who have gone astray," Allah says: "This is for My servant, and My servant shall have what he has asked for."
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Theological Significance",
      content: `
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Comprehensive Summary</h3>
          <p class="text-blue-700 dark:text-blue-200 mb-3">
            Surah Al-Fatihah encapsulates the core message of the entire Quran in just seven verses:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Tawhid (Monotheism)</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                The surah establishes Allah as the sole Lord, Master, and deity worthy of worship.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Divine Attributes</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                It highlights Allah's mercy, compassion, and sovereignty over the Day of Judgment.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Worship & Dependence</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                It emphasizes the exclusive worship of Allah and complete reliance on Him.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Guidance & Salvation</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                It contains the essential supplication for guidance to the straight path.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "fatihah-1",
      question: "What does 'Al-Fatihah' mean?",
      options: [
        { id: "a", text: "The Closing", isCorrect: false },
        { id: "b", text: "The Opening", isCorrect: true },
        { id: "c", text: "The Guidance", isCorrect: false },
        { id: "d", text: "The Light", isCorrect: false },
      ],
      explanation:
        "Al-Fatihah means 'The Opening' and is so named because it opens the Quran as its first chapter. It also opens the door to understanding the message of the Quran.",
    },
    {
      id: "fatihah-2",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      question: "What is the meaning of 'Bismillah ir-Rahman ir-Rahim'?",
      options: [
        { id: "a", text: "In the name of Allah, the Creator, the Sustainer", isCorrect: false },
        { id: "b", text: "In the name of Allah, the Almighty, the Wise", isCorrect: false },
        { id: "c", text: "In the name of Allah, the Most Gracious, the Most Merciful", isCorrect: true },
        { id: "d", text: "In the name of Allah, the Forgiver, the Acceptor of repentance", isCorrect: false },
      ],
      explanation:
        "Bismillah ir-Rahman ir-Rahim means 'In the name of Allah, the Most Gracious, the Most Merciful.' This phrase begins not only Surah Al-Fatihah but also 113 of the 114 chapters of the Quran (except Surah At-Tawbah). It emphasizes Allah's attributes of mercy and compassion.",
    },
    {
      id: "fatihah-3",
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      rootLetters: "ح م د",
      question: "What is the meaning of 'Alhamdulillahi Rabbil 'Alamin'?",
      options: [
        { id: "a", text: "All praise is due to Allah, the Lord of all worlds", isCorrect: true },
        { id: "b", text: "All thanks is due to Allah, the Creator of mankind", isCorrect: false },
        { id: "c", text: "All glory is due to Allah, the Master of the universe", isCorrect: false },
        { id: "d", text: "All worship is due to Allah, the Sustainer of creation", isCorrect: false },
      ],
      explanation:
        "Alhamdulillahi Rabbil 'Alamin means 'All praise is due to Allah, the Lord of all worlds.' The word 'hamd' (praise) comes from the root letters ح م د and combines the meanings of praise, gratitude, and glorification. 'Rabb' means Lord, Master, Sustainer, and Nurturer. 'Alamin' refers to all worlds or all creation, including humans, jinn, angels, and all that exists.",
    },
    {
      id: "fatihah-4",
      arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
      question: "What is the difference between 'Ar-Rahman' and 'Ar-Rahim'?",
      options: [
        { id: "a", text: "They are synonyms with no difference in meaning", isCorrect: false },
        {
          id: "b",
          text: "Ar-Rahman refers to Allah's mercy to believers, while Ar-Rahim refers to His mercy to all creation",
          isCorrect: false,
        },
        {
          id: "c",
          text: "Ar-Rahman refers to Allah's mercy to all creation, while Ar-Rahim refers to His special mercy to believers",
          isCorrect: true,
        },
        {
          id: "d",
          text: "Ar-Rahman refers to mercy in this world, while Ar-Rahim refers to mercy in the hereafter",
          isCorrect: false,
        },
      ],
      explanation:
        "Both Ar-Rahman and Ar-Rahim derive from the same root (ر ح م) meaning mercy, but they emphasize different aspects of Allah's mercy. Ar-Rahman refers to Allah's all-encompassing mercy that extends to all creation regardless of faith, while Ar-Rahim refers to His special, intensive mercy that is reserved for believers, particularly in the hereafter.",
    },
    {
      id: "fatihah-5",
      arabic: "مَالِكِ يَوْمِ الدِّينِ",
      question: "What is the meaning of 'Maliki Yawmid-Din'?",
      options: [
        { id: "a", text: "The Creator of the Day of Judgment", isCorrect: false },
        { id: "b", text: "The Master of the Day of Judgment", isCorrect: true },
        { id: "c", text: "The Witness of the Day of Judgment", isCorrect: false },
        { id: "d", text: "The Initiator of the Day of Judgment", isCorrect: false },
      ],
      explanation:
        "Maliki Yawmid-Din means 'The Master of the Day of Judgment.' The word 'Malik' means king or master, and 'Yawmid-Din' refers to the Day of Judgment or the Day of Recompense when all souls will be judged according to their deeds. This verse emphasizes Allah's absolute sovereignty and authority on that momentous day.",
    },
  ],
}

export const alKafirunQuizData: SurahQuizData = {
  surahId: 109,
  surahName: "Al-Kafirun",
  surahArabicName: "الكافرون",
  totalVerses: 6,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Kafirun (The Disbelievers) is the 109th chapter of the Quran. It is a powerful declaration of religious freedom and the clear distinction between monotheism and polytheism.",
  questions: [
    {
      id: "kafirun-1",
      arabic: "الْكَافِرُونَ",
      rootLetters: "ك ف ر",
      question: "What does 'Al-Kafirun' mean?",
      options: [
        { id: "a", text: "The Believers", isCorrect: false },
        { id: "b", text: "The Disbelievers", isCorrect: true },
        { id: "c", text: "The Hypocrites", isCorrect: false },
        { id: "d", text: "The Righteous", isCorrect: false },
      ],
      explanation:
        "Al-Kafirun means 'The Disbelievers' and refers to those who reject faith in Allah and associate partners with Him.",
    },
  ],
}

export const alIkhlasQuizData: SurahQuizData = {
  surahId: 112,
  surahName: "Al-Ikhlas",
  surahArabicName: "الإخلاص",
  totalVerses: 4,
  type: "Meccan",
  difficulty: "Beginner",
  introduction: "This quiz tests your knowledge of Surah Al-Ikhlas.",
  questions: [
    {
      id: "1",
      question: "What is the main theme of Surah Al-Ikhlas?",
      options: [
        { id: "a", text: "The importance of prayer", isCorrect: false },
        { id: "b", text: "The Oneness of Allah", isCorrect: true },
        { id: "c", text: "The rewards of charity", isCorrect: false },
        { id: "d", text: "The Day of Judgment", isCorrect: false },
      ],
      explanation: "Surah Al-Ikhlas is centered on the concept of Tawhid, the Oneness of Allah.",
    },
  ],
}

export const alFalaqQuizData: SurahQuizData = {
  surahId: 113,
  surahName: "Al-Falaq",
  surahArabicName: "الفلق",
  totalVerses: 5,
  type: "Meccan",
  difficulty: "Beginner",
  introduction: "This quiz tests your knowledge of Surah Al-Falaq.",
  questions: [
    {
      id: "1",
      question: "What is the main theme of Surah Al-Falaq?",
      options: [
        { id: "a", text: "Seeking refuge in Allah", isCorrect: true },
        { id: "b", text: "The importance of prayer", isCorrect: false },
        { id: "c", text: "The rewards of charity", isCorrect: false },
        { id: "d", text: "The Day of Judgment", isCorrect: false },
      ],
      explanation: "Surah Al-Falaq is a prayer for seeking refuge in Allah from all kinds of evil.",
    },
  ],
}

export const alNasQuizData: SurahQuizData = {
  surahId: 114,
  surahName: "An-Nas",
  surahArabicName: "الناس",
  totalVerses: 6,
  type: "Meccan",
  difficulty: "Beginner",
  introduction: "This quiz tests your knowledge of Surah An-Nas.",
  questions: [
    {
      id: "1",
      question: "What does An-Nas mean?",
      options: [
        { id: "a", text: "The Opening", isCorrect: false },
        { id: "b", text: "The People", isCorrect: false },
        { id: "c", text: "The Guidance", isCorrect: false },
        { id: "d", text: "Mankind", isCorrect: true },
      ],
      explanation: "An-Nas means 'Mankind'.",
    },
  ],
}

export const surahMasadQuizData: SurahQuizData = {
  surahId: 111,
  surahName: "Al-Masad",
  surahArabicName: "المسد",
  totalVerses: 5,
  type: "Meccan",
  difficulty: "Beginner",
  introduction: "This quiz tests your knowledge of Surah Al-Masad.",
  questions: [
    {
      id: "1",
      question: "What is another name for Surah Al-Masad?",
      options: [
        { id: "a", text: "Al-Ikhlas", isCorrect: false },
        { id: "b", text: "Al-Falaq", isCorrect: false },
        { id: "c", text: "Al-Lahab", isCorrect: true },
        { id: "d", text: "An-Nas", isCorrect: false },
      ],
      explanation: "Another name for Surah Al-Masad is Al-Lahab.",
    },
  ],
}

export const anNasrQuizData: SurahQuizData = {
  surahId: 110,
  surahName: "An-Nasr",
  surahArabicName: "النصر",
  totalVerses: 3,
  type: "Medinan",
  difficulty: "Beginner",
  introduction:
    "Surah An-Nasr (The Divine Support) is the 110th chapter of the Quran and refers to Allah's help and victory.",
  questions: [
    {
      id: "nasr-1",
      question: "What does 'An-Nasr' mean?",
      options: [
        { id: "a", text: "The Victory", isCorrect: false },
        { id: "b", text: "The Help", isCorrect: false },
        { id: "c", text: "The Divine Support", isCorrect: true },
        { id: "d", text: "The Conquest", isCorrect: false },
      ],
      explanation:
        "An-Nasr means 'The Divine Support' or 'The Help' and refers to Allah's assistance to the Prophet Muhammad ﷺ.",
    },
  ],
}
