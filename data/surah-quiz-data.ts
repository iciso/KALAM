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
 
export const alIkhlasQuizData: SurahQuizData = {
  surahId: 112,
  surahName: "Al-Ikhlas",
  surahArabicName: "الإخلاص",
  totalVerses: 4,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Ikhlas (The Sincerity) is the 112th chapter of the Quran and is considered one of the most important chapters. The Prophet Muhammad ﷺ said it is equivalent to one-third of the Quran because it deals with the fundamental concept of Tawhid (the Oneness of Allah).",
  additionalContextElements: [
    {
      title: "Theological Significance",
      content: `
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">The Three Types of Tawheed</h3>
          <p class="text-blue-700 dark:text-blue-200 mb-3">
            Surah Al-Ikhlas is the cornerstone of Tawheed (Islamic monotheism) and establishes the fundamental concept of Allah's oneness that distinguishes Islam from all other religions.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Tawheed ar-Rububiyyah</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Oneness of Lordship: Allah is the only creator and sustainer of all that exists
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Tawheed al-Uluhiyyah</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Oneness of Worship: Allah alone deserves to be worshipped
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Tawheed al-Asma wa al-Sifat</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Oneness of Names and Attributes: Allah's attributes are unique and incomparable
              </p>
            </div>
          </div>
        </div>
      `,
    },
    {
      title: "Historical Context",
      content: `
        <div class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
          <h3 class="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Revelation Context</h3>
          <p class="text-green-700 dark:text-green-200 mb-3">
            This surah was revealed in response to questions from both Muslims and non-Muslims about the nature of Allah. It provides the clearest and most concise description of Allah's essence in the entire Quran.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-green-700 dark:text-green-300 mb-1">Prophetic Saying</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet Muhammad ﷺ said: "Is any one of you unable to recite one-third of the Quran in one night?" When asked how, he replied: "Qul Huwa Allahu Ahad (Surah Al-Ikhlas) is equivalent to one-third of the Quran."
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "ikhlas-1",
      question: "What does the name 'Al-Ikhlas' mean?",
      arabic: "الْإِخْلَاصِ",
      rootLetters: "خ ل ص",
      options: [
        { id: "a", text: "The Sincerity", isCorrect: true },
        { id: "b", text: "The Purity", isCorrect: false },
        { id: "c", text: "The Unity", isCorrect: false },
        { id: "d", text: "The Oneness", isCorrect: false },
      ],
      explanation:
        "Al-Ikhlas means 'The Sincerity' or 'The Purity of Faith.' It comes from the root خ ل ص meaning to be pure, sincere, or free from impurities. The surah is called this because it purifies the concept of Allah from all forms of shirk (associating partners with Allah).",
    },
    {
      id: "ikhlas-2",
      question: "What is the meaning of this opening command?",
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      rootLetters: "أ ح د",
      options: [
        { id: "a", text: "Say: He is Allah, the One", isCorrect: true },
        { id: "b", text: "Say: He is Allah, the First", isCorrect: false },
        { id: "c", text: "Say: He is Allah, the Only", isCorrect: false },
        { id: "d", text: "Say: He is Allah, the Unique", isCorrect: false },
      ],
      explanation:
        "Qul Huwa Allahu Ahad means 'Say: He is Allah, the One.' The word 'Ahad' comes from the root أ ح د and emphasizes absolute oneness and unity. Unlike 'Wahid' which can mean 'one among many,' 'Ahad' means absolute, indivisible oneness that cannot be counted or numbered.",
    },
    {
      id: "ikhlas-3",
      question: "What is the meaning of this attribute of Allah?",
      arabic: "اللَّهُ الصَّمَدُ",
      rootLetters: "ص م د",
      options: [
        { id: "a", text: "Allah, the Eternal, Absolute", isCorrect: true },
        { id: "b", text: "Allah, the Merciful, Compassionate", isCorrect: false },
        { id: "c", text: "Allah, the Powerful, Mighty", isCorrect: false },
        { id: "d", text: "Allah, the Wise, All-Knowing", isCorrect: false },
      ],
      explanation:
        "Allahu As-Samad means 'Allah, the Eternal, Absolute.' The word 'Samad' comes from the root ص م د and has multiple meanings: the One who is eternal, self-sufficient, the One to whom all creation turns in times of need, the One who is solid and impenetrable, and the Master upon whom all depend.",
    },
    {
      id: "ikhlas-4",
      question: "What is the meaning of this negation?",
      arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      rootLetters: "و ل د",
      options: [
        { id: "a", text: "He neither begets nor is born", isCorrect: true },
        { id: "b", text: "He neither creates nor is created", isCorrect: false },
        { id: "c", text: "He neither begins nor ends", isCorrect: false },
        { id: "d", text: "He neither changes nor is changed", isCorrect: false },
      ],
      explanation:
        "Lam yalid wa lam yulad means 'He neither begets nor is born.' This verse from the root و ل د (meaning to give birth or be born) negates any notion of Allah having offspring or being the offspring of anyone. This directly refutes Christian beliefs about Jesus being the 'Son of God' and pagan beliefs about gods having children.",
    },
    {
      id: "ikhlas-5",
      question: "What is the meaning of this final declaration?",
      arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      rootLetters: "ك ف و",
      options: [
        { id: "a", text: "And there is none comparable to Him", isCorrect: true },
        { id: "b", text: "And there is none equal to Him", isCorrect: false },
        { id: "c", text: "And there is none like Him", isCorrect: false },
        { id: "d", text: "And there is none similar to Him", isCorrect: false },
      ],
      explanation:
        "Wa lam yakun lahu kufuwan ahad means 'And there is none comparable to Him.' The word 'kufuw' comes from the root ك ف و meaning equal, equivalent, or comparable. This verse establishes that nothing in creation can be compared to Allah in any way - not in His essence, attributes, or actions.",
    },
    {
      id: "ikhlas-6",
      question: "What does the word 'Ahad' specifically emphasize about Allah's oneness?",
      arabic: "أَحَدٌ",
      options: [
        { id: "a", text: "Absolute, indivisible oneness", isCorrect: true },
        { id: "b", text: "First in sequence", isCorrect: false },
        { id: "c", text: "Single in number", isCorrect: false },
        { id: "d", text: "Unique in creation", isCorrect: false },
      ],
      explanation:
        "The word 'Ahad' emphasizes absolute, indivisible oneness. Unlike 'Wahid' (one), which can imply 'one among many,' 'Ahad' denotes absolute unity that cannot be divided, multiplied, or counted. It represents Allah's essence as completely unique and incomparable.",
    },
    {
      id: "ikhlas-7",
      question: "What does 'As-Samad' tell us about Allah's relationship with creation?",
      arabic: "الصَّمَدُ",
      options: [
        { id: "a", text: "All creation depends on Him, but He depends on nothing", isCorrect: true },
        { id: "b", text: "He is separate from all creation", isCorrect: false },
        { id: "c", text: "He is present in all creation", isCorrect: false },
        { id: "d", text: "He controls all creation directly", isCorrect: false },
      ],
      explanation:
        "As-Samad indicates that all creation depends entirely on Allah for their existence, sustenance, and needs, while Allah is completely self-sufficient and depends on nothing. He is the ultimate source and destination of all needs, the One to whom all turn in times of necessity.",
    },
    {
      id: "ikhlas-8",
      question: "Why does the surah specifically negate Allah having offspring?",
      arabic: "لَمْ يَلِدْ",
      options: [
        { id: "a", text: "To refute beliefs that attribute children to Allah", isCorrect: true },
        { id: "b", text: "To show Allah's power over creation", isCorrect: false },
        { id: "c", text: "To emphasize Allah's eternal nature", isCorrect: false },
        { id: "d", text: "To distinguish Allah from humans", isCorrect: false },
      ],
      explanation:
        "The negation 'lam yalid' (He does not beget) specifically refutes various beliefs that attribute children or offspring to Allah, including Christian beliefs about Jesus as the 'Son of God' and pagan beliefs about gods having children. Having offspring implies need, change, and similarity to creation - all of which contradict Allah's perfect nature.",
    },
    {
      id: "ikhlas-9",
      question: "What does the phrase 'none comparable to Him' establish about Allah?",
      arabic: "كُفُوًا",
      options: [
        { id: "a", text: "Allah is beyond all comparison and analogy", isCorrect: true },
        { id: "b", text: "Allah is the greatest among all beings", isCorrect: false },
        { id: "c", text: "Allah is different from His creation", isCorrect: false },
        { id: "d", text: "Allah is the most powerful", isCorrect: false },
      ],
      explanation:
        "The word 'kufuw' (comparable/equivalent) establishes that Allah is completely beyond all comparison, analogy, or similarity. This means we cannot truly understand Allah by comparing Him to anything in creation, as He transcends all categories of created existence. This is fundamental to proper Islamic theology.",
    },
    {
      id: "ikhlas-10",
      question: "Why is this surah considered equivalent to one-third of the Quran?",
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      options: [
        { id: "a", text: "It contains the complete doctrine of Allah's oneness", isCorrect: true },
        { id: "b", text: "It has special spiritual power", isCorrect: false },
        { id: "c", text: "It was revealed in a special way", isCorrect: false },
        { id: "d", text: "It contains the most important prayer", isCorrect: false },
      ],
      explanation:
        "According to the Prophet Muhammad ﷺ, this surah is equivalent to one-third of the Quran because it contains the complete and pure doctrine of Tawhid (Allah's oneness). Since the Quran's message can be broadly categorized into three themes - Allah's oneness, stories of previous nations, and laws/guidance - this surah comprehensively covers the first and most fundamental theme.",
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
        "Surah Al-Falaq seeks comprehensive protection from all forms of evil: general evil from all creation, the evil that emerges in darkness, the evil of sorcery and magic, and the evil of envy. This covers physical, spiritual, seen, and unseen forms of harm, making it a complete prayer of protection for believers.",
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
  introduction:
    "Surah An-Nas (Mankind) is the 114th and final chapter of the Quran. It is the second of the two 'Mu'awwidhatain' (seeking refuge chapters) and provides protection from the whispers of Satan and evil influences that target the human heart and mind.",
  additionalContextElements: [
    {
      title: "The Final Chapter",
      content: `
        <div class="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
          <h3 class="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Completion of the Quran</h3>
          <p class="text-indigo-700 dark:text-indigo-200 mb-3">
            As the final chapter of the Quran, Surah An-Nas serves as a fitting conclusion by teaching believers to seek Allah's protection from the most subtle and persistent form of evil - the whispers that target our thoughts and hearts.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Three Attributes of Allah</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              This surah mentions three key attributes of Allah in relation to mankind: Rabb (Lord), Malik (King), and Ilah (God), emphasizing His complete authority over human affairs.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Protection from Whispers",
      content: `
        <div class="mt-6 p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800">
          <h3 class="text-lg font-semibold text-rose-800 dark:text-rose-300 mb-2">The Whisperer's Strategy</h3>
          <p class="text-rose-700 dark:text-rose-200 mb-3">
            Unlike the external evils mentioned in Surah Al-Falaq, this surah focuses on internal spiritual threats - the whispers that come from both jinn and human sources to mislead and corrupt the human heart.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-rose-700 dark:text-rose-300 mb-1">Subtle Influence</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Whispers work gradually and subtly, making evil seem attractive and good seem burdensome.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-rose-700 dark:text-rose-300 mb-1">Retreating Nature</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                The whisperer retreats when Allah is remembered, showing the power of divine remembrance.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "nas-1",
      question: "What does the name 'An-Nas' mean?",
      arabic: "النَّاسِ",
      rootLetters: "ن و س",
      options: [
        { id: "a", text: "The Believers", isCorrect: false },
        { id: "b", text: "The Disbelievers", isCorrect: false },
        { id: "c", text: "The Angels", isCorrect: false },
        { id: "d", text: "Mankind", isCorrect: true },
      ],
      explanation:
        "An-Nas means 'Mankind' or 'People' and comes from the root ن و س. This surah is specifically about seeking Allah's protection for all of humanity from the whispers that target the human heart and mind.",
    },
    {
      id: "nas-2",
      question: "What is the meaning of this opening command?",
      arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
      rootLetters: "ر ب ب",
      options: [
        { id: "a", text: "Say: I seek refuge with the Lord of mankind", isCorrect: true },
        { id: "b", text: "Say: I seek help from the Creator of mankind", isCorrect: false },
        { id: "c", text: "Say: I seek guidance from the Master of mankind", isCorrect: false },
        { id: "d", text: "Say: I seek forgiveness from the Sustainer of mankind", isCorrect: false },
      ],
      explanation:
        "Qul a'udhu bi Rabbin-nas means 'Say: I seek refuge with the Lord of mankind.' The word 'Rabb' emphasizes Allah's lordship, care, and nurturing of all human beings. This establishes Allah as the ultimate protector and guardian of humanity.",
    },
    {
      id: "nas-3",
      question: "What is the meaning of this second attribute?",
      arabic: "مَلِكِ النَّاسِ",
      rootLetters: "م ل ك",
      options: [
        { id: "a", text: "Lord of mankind", isCorrect: false },
        { id: "b", text: "King of mankind", isCorrect: true },
        { id: "c", text: "Creator of mankind", isCorrect: false },
        { id: "d", text: "Judge of mankind", isCorrect: false },
      ],
      explanation:
        "Maliki an-nas means 'King of mankind.' The word 'Malik' from the root م ل ك emphasizes Allah's sovereignty and absolute authority over all human affairs. As King, Allah has complete control and dominion over humanity.",
    },
    {
      id: "nas-4",
      question: "What is the meaning of this third attribute?",
      arabic: "إِلَٰهِ النَّاسِ",
      rootLetters: "أ ل ه",
      options: [
        { id: "a", text: "God of mankind", isCorrect: true },
        { id: "b", text: "Lord of mankind", isCorrect: false },
        { id: "c", text: "Creator of mankind", isCorrect: false },
        { id: "d", text: "Sustainer of mankind", isCorrect: false },
      ],
      explanation:
        "Ilahi an-nas means 'God of mankind.' The word 'Ilah' from the root أ ل ه means the One who is worshipped and to whom all devotion is due. This emphasizes that Allah alone deserves the worship and complete submission of all humanity.",
    },
    {
      id: "nas-5",
      question: "What is the meaning of this description of the evil?",
      arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      rootLetters: "و س و س",
      options: [
        { id: "a", text: "From the evil of the darkness when it gathers", isCorrect: false },
        { id: "b", text: "From the evil of the night when it departs", isCorrect: false },
        { id: "c", text: "From the evil of the retreating whisperer", isCorrect: true },
        { id: "d", text: "From the evil of the day when it shines", isCorrect: false },
      ],
      explanation:
        "Min sharril-waswasil-khannas means 'From the evil of the retreating whisperer.' The word 'waswas' comes from the root و س و س meaning to whisper, and 'khannas' means one who retreats or withdraws. This refers to Satan who whispers evil thoughts but retreats when Allah is remembered.",
    },
    {
      id: "nas-6",
      question: "What is the meaning of this description of the whisperer's action?",
      arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
      rootLetters: "ص د ر",
      options: [
        { id: "a", text: "Who whispers in the hearts of mankind", isCorrect: true },
        { id: "b", text: "Who creates fear in the hearts of mankind", isCorrect: false },
        { id: "c", text: "Who brings peace to the hearts of mankind", isCorrect: false },
        { id: "d", text: "Who guides the hearts of mankind", isCorrect: false },
      ],
      explanation:
        "Alladhi yuwaswisu fi suduri an-nas means 'Who whispers in the hearts of mankind.' The word 'sudur' (plural of sadr) from the root ص د ر means chests or hearts. This describes how evil whispers target the innermost thoughts and feelings of human beings.",
    },
    {
      id: "nas-7",
      question: "What is the meaning of this final specification?",
      arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
      rootLetters: "ج ن ن",
      options: [
        { id: "a", text: "From the jinn and mankind", isCorrect: true },
        { id: "b", text: "From the angels and mankind", isCorrect: false },
        { id: "c", text: "From the heavens and the earth", isCorrect: false },
        { id: "d", text: "From the seen and the unseen", isCorrect: false },
      ],
      explanation:
        "Minal-jinnati wan-nas means 'From the jinn and mankind.' This specifies that evil whispers can come from both jinn (like Satan and his followers) and from human beings who spread corruption, doubt, and evil ideas. Both sources can influence and mislead people.",
    },
    {
      id: "nas-8",
      question: "Why are three attributes of Allah mentioned in this surah?",
      arabic: "رَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَٰهِ النَّاسِ",
      options: [
        { id: "a", text: "To emphasize Allah's complete authority over mankind in all aspects", isCorrect: true },
        { id: "b", text: "To show Allah's mercy toward humanity", isCorrect: false },
        { id: "c", text: "To demonstrate Allah's power over creation", isCorrect: false },
        { id: "d", text: "To highlight Allah's knowledge of all things", isCorrect: false },
      ],
      explanation:
        "The three attributes (Rabb - Lord/Nurturer, Malik - King/Sovereign, Ilah - God/Worshipped One) emphasize Allah's complete authority over mankind in all aspects: as our Creator and Sustainer, as our absolute Ruler, and as the only One worthy of worship. This comprehensive authority makes Him the perfect refuge from all forms of evil.",
    },
    {
      id: "nas-9",
      question: "What does 'Al-Khannas' (the retreating one) teach us about the whisperer?",
      arabic: "الْخَنَّاسِ",
      rootLetters: "خ ن س",
      options: [
        { id: "a", text: "The whisperer is weak and retreats when Allah is remembered", isCorrect: true },
        { id: "b", text: "The whisperer is always present and never leaves", isCorrect: false },
        { id: "c", text: "The whisperer only comes at night", isCorrect: false },
        { id: "d", text: "The whisperer is stronger than human will", isCorrect: false },
      ],
      explanation:
        "Al-Khannas (the retreating one) from the root خ ن س teaches us that the whisperer is actually weak and cowardly. When a person remembers Allah, seeks His protection, or engages in worship, the whisperer retreats and withdraws. This shows that divine remembrance is our most powerful weapon against evil whispers.",
    },
    {
      id: "nas-10",
      question: "How does this surah complement Surah Al-Falaq?",
      arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      options: [
        {
          id: "a",
          text: "Al-Falaq protects from external evils, An-Nas protects from internal whispers",
          isCorrect: true,
        },
        { id: "b", text: "Both surahs protect from the same types of evil", isCorrect: false },
        { id: "c", text: "An-Nas is more important than Al-Falaq", isCorrect: false },
        { id: "d", text: "They should never be recited together", isCorrect: false },
      ],
      explanation:
        "Surah Al-Falaq seeks protection from external evils (general evil, darkness, sorcery, envy), while Surah An-Nas focuses on internal spiritual threats (whispers that corrupt the heart and mind). Together, they provide comprehensive protection from all forms of evil - both external and internal, physical and spiritual.",
    },
  ],
}
