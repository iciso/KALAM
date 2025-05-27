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
  introduction:
    "Surah Al-Falaq (The Daybreak) is the 113th chapter of the Quran and is one of the two 'Mu'awwidhatain' (the two seeking refuge chapters) along with Surah An-Nas. It teaches us to seek Allah's protection from various forms of evil and harm.",
  additionalContextElements: [
    {
      title: "The Mu'awwidhatain",
      content: `
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">The Two Seeking Refuge Chapters</h3>
          <p class="text-purple-700 dark:text-purple-200 mb-3">
            Surah Al-Falaq and Surah An-Nas are known as the Mu'awwidhatain (المعوذتان), meaning "the two seeking refuge chapters." The Prophet Muhammad ﷺ said: "No one seeks refuge with anything like that with which they seek refuge with Allah by means of these two surahs."
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Protection from Evil</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              These surahs provide comprehensive protection from all forms of evil - seen and unseen, physical and spiritual, external and internal. They are often recited for protection, especially before sleep and during times of difficulty.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Types of Evil Mentioned",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Four Categories of Evil</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            Surah Al-Falaq seeks protection from four specific types of evil:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">General Evil</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                From the evil of all that Allah has created - covering all forms of harm and evil in creation.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Darkness</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                From the evil of darkness when it settles - referring to the night and the evil that emerges in darkness.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Sorcery</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                From the evil of those who blow on knots - referring to sorcerers and their harmful practices.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Envy</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                From the evil of the envier when he envies - protection from the harmful effects of jealousy and envy.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "falaq-1",
      question: "What does the name 'Al-Falaq' mean?",
      arabic: "الْفَلَقِ",
      rootLetters: "ف ل ق",
      options: [
        { id: "a", text: "The Night", isCorrect: false },
        { id: "b", text: "The Daybreak", isCorrect: true },
        { id: "c", text: "The Dawn", isCorrect: false },
        { id: "d", text: "The Morning", isCorrect: false },
      ],
      explanation:
        "Al-Falaq means 'The Daybreak' or 'The Dawn' - the time when darkness splits and light emerges. It comes from the root ف ل ق meaning to split or cleave. The word symbolizes the splitting of darkness by light, representing Allah's power to dispel all forms of darkness and evil.",
    },
    {
      id: "falaq-2",
      question: "What is the meaning of this opening command?",
      arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      rootLetters: "ع و ذ",
      options: [
        { id: "a", text: "Say: I seek refuge with the Lord of the daybreak", isCorrect: true },
        { id: "b", text: "Say: I seek help from the Lord of the daybreak", isCorrect: false },
        { id: "c", text: "Say: I seek guidance from the Lord of the daybreak", isCorrect: false },
        { id: "d", text: "Say: I seek forgiveness from the Lord of the daybreak", isCorrect: false },
      ],
      explanation:
        "Qul a'udhu bi Rabbil-falaq means 'Say: I seek refuge with the Lord of the daybreak.' The word 'a'udhu' comes from the root ع و ذ meaning to seek protection or refuge. This establishes Allah as the ultimate source of protection and safety.",
    },
    {
      id: "falaq-3",
      question: "What is the meaning of this phrase about general evil?",
      arabic: "مِن شَرِّ مَا خَلَقَ",
      rootLetters: "ش ر ر",
      options: [
        { id: "a", text: "From the evil of what He created", isCorrect: true },
        { id: "b", text: "From the harm of what He made", isCorrect: false },
        { id: "c", text: "From the danger of what He formed", isCorrect: false },
        { id: "d", text: "From the wickedness of what He brought forth", isCorrect: false },
      ],
      explanation:
        "Min sharri ma khalaq means 'From the evil of what He created.' This seeks protection from all forms of evil that exist in Allah's creation. The word 'sharr' (ش ر ر) means evil or harm. This is a comprehensive protection covering all created beings that might cause harm.",
    },
    {
      id: "falaq-4",
      question: "What is the meaning of this phrase about darkness?",
      arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      rootLetters: "غ س ق",
      options: [
        { id: "a", text: "And from the evil of darkness when it settles", isCorrect: true },
        { id: "b", text: "And from the evil of night when it comes", isCorrect: false },
        { id: "c", text: "And from the evil of shadow when it falls", isCorrect: false },
        { id: "d", text: "And from the evil of blackness when it spreads", isCorrect: false },
      ],
      explanation:
        "Wa min sharri ghasiqin idha waqab means 'And from the evil of darkness when it settles.' The word 'ghasiq' comes from the root غ س ق meaning intense darkness or the night. 'Waqab' means to settle or penetrate. This refers to the evil that emerges and becomes active during the darkness of night.",
    },
    {
      id: "falaq-5",
      question: "What is the meaning of this phrase about sorcery?",
      arabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
      rootLetters: "ن ف ث",
      options: [
        { id: "a", text: "And from the evil of the blowers in knots", isCorrect: true },
        { id: "b", text: "And from the evil of the whisperers in corners", isCorrect: false },
        { id: "c", text: "And from the evil of the speakers in secrets", isCorrect: false },
        { id: "d", text: "And from the evil of the chanters in circles", isCorrect: false },
      ],
      explanation:
        "Wa min sharrin-naffathati fil-'uqad means 'And from the evil of the blowers in knots.' This refers to sorcerers and witches who practice magic by blowing on knots while reciting spells. The word 'naffathat' comes from the root ن ف ث meaning to blow or spit. This seeks protection from the harmful effects of sorcery and black magic.",
    },
    {
      id: "falaq-6",
      question: "What is the meaning of this phrase about envy?",
      arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      rootLetters: "ح س د",
      options: [
        { id: "a", text: "And from the evil of an envier when he envies", isCorrect: true },
        { id: "b", text: "And from the evil of a jealous person when he is jealous", isCorrect: false },
        { id: "c", text: "And from the evil of a hater when he hates", isCorrect: false },
        { id: "d", text: "And from the evil of an enemy when he opposes", isCorrect: false },
      ],
      explanation:
        "Wa min sharri hasidin idha hasad means 'And from the evil of an envier when he envies.' The word 'hasid' comes from the root ح س د meaning envy or jealousy. This seeks protection from the harmful effects of envy, which can manifest as the evil eye or other forms of spiritual harm caused by jealousy.",
    },
    {
      id: "falaq-7",
      question: "What does the word 'Rabb' emphasize in this context?",
      arabic: "رَبِّ الْفَلَقِ",
      rootLetters: "ر ب ب",
      options: [
        { id: "a", text: "Allah's lordship and control over the daybreak", isCorrect: true },
        { id: "b", text: "Allah's creation of the morning", isCorrect: false },
        { id: "c", text: "Allah's love for the dawn", isCorrect: false },
        { id: "d", text: "Allah's preference for light", isCorrect: false },
      ],
      explanation:
        "Rabbil-falaq emphasizes Allah's complete lordship, control, and authority over the daybreak and all that it represents. The word 'Rabb' (ر ب ب) means Lord, Master, Sustainer, and Nurturer. By seeking refuge with the 'Lord of the daybreak,' we acknowledge Allah's power to bring light and dispel darkness in all its forms.",
    },
    {
      id: "falaq-8",
      question: "Why is the daybreak specifically mentioned as Allah's domain?",
      arabic: "الْفَلَقِ",
      options: [
        { id: "a", text: "It symbolizes Allah's power to dispel darkness and evil", isCorrect: true },
        { id: "b", text: "It represents the beginning of prayer time", isCorrect: false },
        { id: "c", text: "It shows Allah's control over time", isCorrect: false },
        { id: "d", text: "It indicates Allah's preference for morning", isCorrect: false },
      ],
      explanation:
        "The daybreak (Al-Falaq) is mentioned because it symbolizes Allah's power to split darkness with light, representing His ability to dispel all forms of evil and darkness from our lives. Just as Allah brings physical light to dispel physical darkness, He can bring spiritual light to dispel spiritual darkness and evil.",
    },
    {
      id: "falaq-9",
      question: "What is the significance of mentioning 'when it settles' regarding darkness?",
      arabic: "إِذَا وَقَبَ",
      rootLetters: "و ق ب",
      options: [
        { id: "a", text: "It refers to the time when evil is most active", isCorrect: true },
        { id: "b", text: "It indicates the depth of night", isCorrect: false },
        { id: "c", text: "It shows the completeness of darkness", isCorrect: false },
        { id: "d", text: "It represents the end of day", isCorrect: false },
      ],
      explanation:
        "The phrase 'idha waqab' (when it settles) from the root و ق ب indicates the time when darkness has fully settled and penetrated everywhere. This is traditionally when evil forces, harmful creatures, and negative influences are most active. The Quran acknowledges this reality and teaches us to seek Allah's protection during these vulnerable times.",
    },
    {
      id: "falaq-10",
      question: "What is the comprehensive nature of protection sought in this surah?",
      arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      options: [
        { id: "a", text: "Protection from all forms of evil - physical, spiritual, seen and unseen", isCorrect: true },
        { id: "b", text: "Protection only from human enemies", isCorrect: false },
        { id: "c", text: "Protection only from natural disasters", isCorrect: false },
        { id: "d", text: "Protection only from spiritual harm", isCorrect: false },
      ],
      explanation:
        "Surah Al-Falaq seeks comprehensive protection from all forms of evil: general evil from all creation, the evil that emerges in darkness, the evil of sorcery and magic, and the evil of envy. This covers physical, spiritual, seen, and unseen forms of harm, making it a complete prayer of protection for believers.,,
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
      id: "nas-1",
      question: \"What does this word mean?",
      arabic: "النَّاسِ",
      options: [
        { id: "a", text: "The Believers", isCorrect: false },
        { id: "b", text: "The Disbelievers", isCorrect: false },
        { id: "c", text: "The Angels", isCorrect: false },
        { id: "d", text: "Mankind", isCorrect: true },
      ],
      explanation: "An-Nas means 'Mankind'.",
    },
    {
      id: "nas-2",
      question: "What does this phrase mean?",
      arabic: "مَلِكِ النَّاسِ",
      options: [
        { id: "a", text: "Lord of Mankind", isCorrect: false },
        { id: "b", text: "King of Mankind", isCorrect: true },
        { id: "c", text: "Creator of Mankind", isCorrect: false },
        { id: "d", text: "Judge of Mankind", isCorrect: false },
      ],
      explanation: "Maliki An-Nas means 'King of Mankind'.",
    },
    {
      id: "nas-3",
      question: "What does this phrase mean?",
      arabic: "إِلَٰهِ النَّاسِ",
      options: [
        { id: "a", text: "God of Mankind", isCorrect: true },
        { id: "b", text: "Lord of Mankind", isCorrect: false },
        { id: "c", text: "Creator of Mankind", isCorrect: false },
        { id: "d", text: "Judge of Mankind", isCorrect: false },
      ],
      explanation: "Ilahi An-Nas means 'God of Mankind'.",
    },
    {
      id: "nas-4",
      question: "What does this phrase mean?",
      arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      options: [
        { id: "a", text: "From the evil of the darkness when it gathers", isCorrect: false },
        { id: "b", text: "From the evil of the night when it departs", isCorrect: false },
        { id: "c", text: "From the evil of the retreating whisperer", isCorrect: true },
        { id: "d", text: "From the evil of the day when it shines", isCorrect: false },
      ],
      explanation: "Min Sharri Al-Waswas Al-Khannas means 'From the evil of the retreating whisperer'.",
    },
    {
      id: "nas-5",
      question: "What does this phrase mean?",
      arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
      options: [
        { id: "a", text: "Who whispers in the hearts of mankind", isCorrect: true },
        { id: "b", text: "Who creates fear in the hearts of mankind", isCorrect: false },
        { id: "c", text: "Who brings peace to the hearts of mankind", isCorrect: false },
        { id: "d", text: "Who guides the hearts of mankind", isCorrect: false },
      ],
      explanation: "Alladhi Yuwaswisu Fi Suduri An-Nas means 'Who whispers in the hearts of mankind'.",
    },
    {
      id: "nas-6",
      question: "What does this phrase mean?",
      arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
      options: [
        { id: "a", text: "From the jinn and mankind", isCorrect: true },
        { id: "b", text: "From the angels and mankind", isCorrect: false },
        { id: "c", text: "From the heavens and the earth", isCorrect: false },
        { id: "d", text: "From the stars and the planets", isCorrect: false },
      ],
      explanation: "Minal Jinnati Wan-Nas means 'From the jinn and mankind'.",
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
