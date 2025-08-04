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
      question: "What does the name 'Al-Fatihah' mean?",
      arabic: "الْفَاتِحَة",
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
      question: "What is the meaning of this phrase?",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
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
      question: "What is the meaning of this verse?",
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      rootLetters: "ح م د",
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
      question: "What is the meaning of these two attributes of Allah?",
      arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
      rootLetters: "ر ح م",
      options: [
        { id: "a", text: "The Most Gracious, the Most Merciful", isCorrect: true },
        { id: "b", text: "The Most Forgiving, the Most Compassionate", isCorrect: false },
        { id: "c", text: "The Most Kind, the Most Gentle", isCorrect: false },
        { id: "d", text: "The Most Loving, the Most Caring", isCorrect: false },
      ],
      explanation:
        "Ar-Rahman Ar-Rahim means 'The Most Gracious, the Most Merciful.' Both derive from the same root (ر ح م) meaning mercy, but they emphasize different aspects of Allah's mercy. Ar-Rahman refers to Allah's all-encompassing mercy that extends to all creation regardless of faith, while Ar-Rahim refers to His special, intensive mercy that is reserved for believers, particularly in the hereafter.",
    },
    {
      id: "fatihah-5",
      question: "What is the meaning of this phrase?",
      arabic: "مَالِكِ يَوْمِ الدِّينِ",
      rootLetters: "م ل ك",
      options: [
        { id: "a", text: "The Creator of the Day of Judgment", isCorrect: false },
        { id: "b", text: "The Master of the Day of Judgment", isCorrect: true },
        { id: "c", text: "The Witness of the Day of Judgment", isCorrect: false },
        { id: "d", text: "The Initiator of the Day of Judgment", isCorrect: false },
      ],
      explanation:
        "Maliki Yawmid-Din means 'The Master of the Day of Judgment.' The word 'Malik' means king or master, and 'Yawmid-Din' refers to the Day of Judgment or the Day of Recompense when all souls will be judged according to their deeds. This verse emphasizes Allah's absolute sovereignty and authority on that momentous day.",
    },
    {
      id: "fatihah-6",
      question: "What is the meaning of this declaration?",
      arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      rootLetters: "ع ب د",
      options: [
        { id: "a", text: "You alone we worship and You alone we ask for help", isCorrect: true },
        { id: "b", text: "You alone we praise and You alone we thank", isCorrect: false },
        { id: "c", text: "You alone we fear and You alone we love", isCorrect: false },
        { id: "d", text: "You alone we obey and You alone we follow", isCorrect: false },
      ],
      explanation:
        "Iyyaka na'budu wa iyyaka nasta'in means 'You alone we worship and You alone we ask for help.' This verse represents the core of Islamic monotheism (Tawhid) by declaring exclusive worship and dependence on Allah. The word 'na'budu' comes from the root ع ب د meaning worship or servitude.",
    },
    {
      id: "fatihah-7",
      question: "What is the meaning of this supplication?",
      arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      rootLetters: "ه د ي",
      options: [
        { id: "a", text: "Guide us to the straight path", isCorrect: true },
        { id: "b", text: "Show us the right way", isCorrect: false },
        { id: "c", text: "Lead us to the correct path", isCorrect: false },
        { id: "d", text: "Direct us to the true path", isCorrect: false },
      ],
      explanation:
        "Ihdinas-siratal-mustaqim means 'Guide us to the straight path.' This is the central supplication of Al-Fatihah, asking Allah for guidance to the correct way of life. The word 'ihdina' comes from the root ه د ي meaning guidance, and 'sirat' means path or way.",
    },
    {
      id: "fatihah-8",
      question: "What is the meaning of this phrase describing the righteous?",
      arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
      rootLetters: "ن ع م",
      options: [
        { id: "a", text: "The path of those whom You have favored", isCorrect: true },
        { id: "b", text: "The way of those whom You have chosen", isCorrect: false },
        { id: "c", text: "The road of those whom You have blessed", isCorrect: false },
        { id: "d", text: "The route of those whom You have guided", isCorrect: false },
      ],
      explanation:
        "Siratal-ladhina an'amta 'alayhim means 'The path of those whom You have favored.' This refers to the prophets, the truthful, the martyrs, and the righteous whom Allah has blessed with His guidance and favor. The word 'an'amta' comes from the root ن ع م meaning blessing or favor.",
    },
    {
      id: "fatihah-9",
      question: "What is the meaning of this phrase about those who went astray?",
      arabic: "غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      rootLetters: "غ ض ب",
      options: [
        {
          id: "a",
          text: "Not of those who have earned Your anger, nor of those who have gone astray",
          isCorrect: true,
        },
        { id: "b", text: "Not of those who have been cursed, nor of those who are lost", isCorrect: false },
        { id: "c", text: "Not of those who have been rejected, nor of those who are misguided", isCorrect: false },
        { id: "d", text: "Not of those who have been punished, nor of those who are confused", isCorrect: false },
      ],
      explanation:
        "Ghayril-maghdubi 'alayhim wa lad-dallin means 'Not of those who have earned Your anger, nor of those who have gone astray.' This refers to avoiding the path of those who knew the truth but rejected it (maghdub 'alayhim) and those who went astray out of ignorance (dallin). The word 'maghdub' comes from the root غ ض ب meaning anger.",
    },
    {
      id: "fatihah-10",
      question: "What is the meaning of the word 'Amin' that follows Al-Fatihah?",
      arabic: "آمِينَ",
      rootLetters: "أ م ن",
      options: [
        { id: "a", text: "So be it / Accept our prayer", isCorrect: true },
        { id: "b", text: "We believe", isCorrect: false },
        { id: "c", text: "We trust", isCorrect: false },
        { id: "d", text: "We hope", isCorrect: false },
      ],
      explanation:
        "Amin means 'So be it' or 'Accept our prayer.' It is a supplication asking Allah to accept and fulfill the prayer that was just recited. The word comes from the root أ م ن which relates to safety, security, and trust. Saying 'Amin' after Al-Fatihah is a Sunnah of the Prophet ﷺ.",
    },
  ],
}
