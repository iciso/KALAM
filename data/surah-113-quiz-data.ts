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
