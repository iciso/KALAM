export const atTariqQuizData: SurahQuizData = {
  surahId: 86,
  surahName: "At-Tariq",
  surahArabicName: "الطارق",
  totalVerses: 17,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah At-Tariq (The Night Visitor) is the 86th chapter of the Quran, revealed in Mecca. It swears by the heaven and the piercing star to affirm Allah's power in creation and resurrection, emphasizing that every soul has a guardian and will face accountability on the Day when secrets are revealed. The surah counters the disbelievers' plots against the message by asserting Allah's superior plan and declares the Quran a decisive, protected word inscribed in a preserved tablet.",
  additionalContextElements: [
    {
      title: "Oaths by Creation and Human Origin",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Affirmation Through Celestial Signs</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The surah opens with oaths by the heaven and the night visitor (At-Tariq), identified as the piercing star (an-najm ath-thaqib), to underscore Allah's watchful creation. It reminds humanity of its humble origin from gushing fluid emerging from between the backbone and ribs, proving Allah's ability to resurrect.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir interprets At-Tariq as a star that knocks or appears suddenly, symbolizing divine oversight. The fluid (ma'in dafiq) refers to semen, and its origin between sulb (backbone) and tara'ib (ribs) highlights creation's precision, alerting man to resurrection's reality.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Reasons for Revelation and Historical Context</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Revealed in early Mecca after Surah Al-Balad, amid Quraysh plots to defeat the Prophet ﷺ's message through mockery and persecution. It reassures the Prophet and believers of divine protection against disbelievers' schemes.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Creation from fluid: Surah Al-Insan (76:2). Resurrection power: Surah Al-Qiyamah (75:3-4).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Accountability, Plots, and the Quran's Protection",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Day of Secrets and Divine Decree</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            Every soul has a guardian; on Judgment Day, secrets of hearts will be tested, leaving no power or helper for the wrongdoer. While disbelievers plot, Allah counters with a superior plan, granting them respite. The Quran is a decisive word in a guarded tablet.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir notes the guardian (hafiz) as angels recording deeds. Plots (kayd) refer to Quraysh conspiracies; Allah's counter-plot ensures truth's victory. The preserved tablet (lauh mahfuz) is the heavenly record, per Al-Jalalayn.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Prophetic Guidance and Hadith</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet ﷺ said: 'O Allah, I seek refuge from the visitors of this night except the visitor who comes with good,' relating to At-Tariq's knocking (narrated in Tirmidhi). He recited it in noon/afternoon prayers (Sahih Muslim).
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Secrets revealed: Surah Al-Infitar (82:5-6). Quran protected: Surah Al-Hijr (15:9). Divine plots: Surah Al-Anfal (8:30).
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, At-Tariq, الطارق?",
      arabic: "الطارق",
      rootLetters: "ط ر ق",
      options: [
        { id: "a", text: "The Dawn", isCorrect: false },
        { id: "b", text: "The Overwhelming", isCorrect: false },
        { id: "c", text: "The Most High", isCorrect: false },
        { id: "d", text: "The Night Visitor", isCorrect: true },
      ],
      explanation: "الطارق (At-Tariq) means 'The Night Visitor,' derived from the root ط-ر-ق, referring to a star that appears suddenly and brightly in the night sky.",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'وَالسَّمَاءِ وَالطَّارِقِ' mean?",
      arabic: "وَالسَّمَاءِ وَالطَّارِقِ",
      rootLetters: "س م و | ط ر ق",
      options: [
        { id: "a", text: "By the earth and the star", isCorrect: false },
        { id: "b", text: "By the night and the dawn", isCorrect: false },
        { id: "c", text: "By the heaven and the night visitor", isCorrect: true },
        { id: "d", text: "By the sun and the moon", isCorrect: false },
      ],
      explanation: "وَالسَّمَاءِ وَالطَّارِقِ (Was-samai wat-tariq) means 'By the heaven and the night visitor,' roots س-م-و (heaven) and ط-ر-ق (visitor).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'النَّجْمُ الثَّاقِبُ' mean?",
      arabic: "النَّجْمُ الثَّاقِبُ",
      rootLetters: "ن ج م | ث ق ب",
      options: [
        { id: "a", text: "The hidden star", isCorrect: false },
        { id: "b", text: "The piercing star", isCorrect: true },
        { id: "c", text: "The falling star", isCorrect: false },
        { id: "d", text: "The guiding star", isCorrect: false },
      ],
      explanation: "النَّجْمُ الثَّاقِبُ (An-najmu ath-thaqib) means 'the piercing star,' roots ن-ج-م (star) and ث-ق-ب (piercing).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'إِنْ كُلُّ نَفْسٍ لَمَّا عَلَيْهَا حَافِظٌ' mean?",
      arabic: "إِنْ كُلُّ نَفْسٍ لَمَّا عَلَيْهَا حَافِظٌ",
      rootLetters: "ن ف س | ح ف ظ",
      options: [
        { id: "a", text: "There is no soul but that has a guardian over it", isCorrect: true },
        { id: "b", text: "Every soul is free without a watcher", isCorrect: false },
        { id: "c", text: "All souls are equal in creation", isCorrect: false },
        { id: "d", text: "No soul escapes divine knowledge", isCorrect: false },
      ],
      explanation: "إِنْ كُلُّ نَفْسٍ لَمَّا عَلَيْهَا حَافِظٌ (In kullu nafsin lamma 'alayha hafiz) means 'There is no soul but that has a guardian over it,' roots ن-ف-س (soul) and ح-ف-ظ (guardian).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'فَلْيَنْظُرِ الْإِنْسَانُ مِمَّ خُلِقَ' mean?",
      arabic: "فَلْيَنْظُرِ الْإِنْسَانُ مِمَّ خُلِقَ",
      rootLetters: "ن ظ ر | أ ن س | خ ل ق",
      options: [
        { id: "a", text: "Let man forget from what he is created", isCorrect: false },
        { id: "b", text: "Let man ponder his final destiny", isCorrect: false },
        { id: "c", text: "Let man see what state he is in", isCorrect: false },
        { id: "d", text: "Let man see from what he is created", isCorrect: true },
      ],
      explanation: "فَلْيَنْظُرِ الْإِنْسَانُ مِمَّ خُلِقَ (Falyanzuri al-insanu mimma khuliq) means 'Let man see from what he is created,' roots ن-ظ-ر (see), أ-ن-س (man), خ-ل-ق (created).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'خُلِقَ مِنْ مَاءٍ دَافِقٍ' mean?",
      arabic: "خُلِقَ مِنْ مَاءٍ دَافِقٍ",
      rootLetters: "خ ل ق | م و ء | د ف ق",
      options: [
        { id: "a", text: "Created from stagnant water", isCorrect: false },
        { id: "b", text: "Created from pure rain", isCorrect: false },
        { id: "c", text: "Created from gushing fluid", isCorrect: true },
        { id: "d", text: "Created from flowing rivers", isCorrect: false },
      ],
      explanation: "خُلِقَ مِنْ مَاءٍ دَافِقٍ (Khuliqa min ma'in dafiq) means 'Created from gushing fluid,' roots خ-ل-ق (created), م-و-ء (water), د-ف-ق (gushing).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'يَخۡرُجُ مِنۢ بَيۡنِ ٱلصُّلۡبِ وَٱلتَّرَآئِبِ' mean?",
      arabic: "يَخۡرُجُ مِنۢ بَيۡنِ ٱلصُّلۡبِ وَٱلتَّرَآئِبِ",
      rootLetters: "أ ت ي | ص ل ب | ر ء ب",
      options: [
        { id: "a", text: "It comes from between the backbone and the ribs", isCorrect: false },
        { id: "b", text: "It comes from between the backbone and the ribs", isCorrect: true },
        { id: "c", text: "It emerges from the heart and mind", isCorrect: false },
        { id: "d", text: "It flows from the earth and sky", isCorrect: false },
      ],
      explanation: "يَخۡرُجُ مِنۢ بَيۡنِ ٱلصُّلۡبِ وَٱلتَّرَآئِبِ (Yakhruju mim bainissulbi wat taraaa’ib) means 'It comes from between the backbone and the ribs,' roots أ-ت-ي (come), ص-ل-ب (backbone), ر-ء-ب (ribs).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'إِنَّهُ عَلَىٰ رَجْعِهِ لَقَادِرٌ' mean?",
      arabic: "إِنَّهُ عَلَىٰ رَجْعِهِ لَقَادِرٌ",
      rootLetters: "ر ج ع | ق د ر",
      options: [
        { id: "a", text: "Indeed, He is able to return [to a death] powerful", isCorrect: false },
        { id: "b", text: "Indeed, He is unaware of its creation", isCorrect: false },
        { id: "c", text: "Indeed, He is over its return [to life] powerful", isCorrect: true },
        { id: "d", text: "Indeed, He is unable to resurrect it", isCorrect: false },
      ],
      explanation: "إِنَّهُ عَلَىٰ رَجْعِهِ لَقَادِرٌ (Innahu 'ala raj'ihi laqadir) means 'Indeed, He is over its return [to life] powerful,' roots ر-ج-ع (return) and ق-د-ر (powerful).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'يَوْمَ تُبْلَى السَّرَائِرُ' mean?",
      arabic: "يَوْمَ تُبْلَى السَّرَائِرُ",
      rootLetters: "ي و م | ب ل و | س ر ر",
      options: [
        { id: "a", text: "The day the secrets are concealed", isCorrect: false },
        { id: "b", text: "The day the secrets are tested", isCorrect: true },
        { id: "c", text: "The day the deeds are forgotten", isCorrect: false },
        { id: "d", text: "The day the hearts are hidden", isCorrect: false },
      ],
      explanation: "يَوْمَ تُبْلَى السَّرَائِرُ (Yawma tubla as-sara'ir) means 'The day the secrets are tested,' roots ي-و-م (day), ب-ل-و (tested), س-ر-ر (secrets).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'فَمَا لَهُ مِنْ قُوَّةٍ وَلَا نَاصِرٍ' mean?",
      arabic: "فَمَا لَهُ مِنْ قُوَّةٍ وَلَا نَاصِرٍ",
      rootLetters: "ق و ء | ن ص ر",
      options: [
        { id: "a", text: "So he will have all power but no helper", isCorrect: false },
        { id: "b", text: "So he will have full strength and support", isCorrect: false },
        { id: "c", text: "So he will have no power or any helper", isCorrect: true },
        { id: "d", text: "So he will have divine aid and victory", isCorrect: false },
      ],
      explanation: "فَمَا لَهُ مِنْ قُوَّةٍ وَلَا نَاصِرٍ (Fama lahu min quwwatin wala nasir) means 'So he will have no power or any helper,' roots ق-و-ء (power) and ن-ص-ر (helper).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'إِنَّهُمْ يَكِيدُونَ كَيْدًا' mean?",
      arabic: "إِنَّهُمْ يَكِيدُونَ كَيْدًا",
      rootLetters: "ك ي د",
      options: [
        { id: "a", text: "Indeed, they are abusing the believers", isCorrect: false },
        { id: "b", text: "Indeed, they are seeking guidance", isCorrect: false },
        { id: "c", text: "Indeed, they are forgetting the truth", isCorrect: false },
        { id: "d", text: "Indeed, they are plotting a plot", isCorrect: true },
      ],
      explanation: "إِنَّهُمْ يَكِيدُونَ كَيْدًا (Innahum yakeeduna kayda) means 'Indeed, they are plotting a plot,' root ك-ي-د (plot).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'إِنَّهُۥ لَقَوۡلٞ فَصۡلٞ' mean?",
      arabic: "إِنَّهُۥ لَقَوۡلٞ فَصۡلٞ",
      rootLetters: "ك ت ب | ر ق م",
      options: [
        { id: "a", text: "Indeed, the Qur’an is a decisive statement", isCorrect: true },
        { id: "b", text: "Indeed, the Qur’an is a forgotten scripture", isCorrect: false },
        { id: "c", text: "Indeed, the Qur’an is a hidden decree", isCorrect: false },
        { id: "d", text: "Indeed, the Qur’an is a temporary message", isCorrect: false },
      ],
      explanation: "إِنَّهُۥ لَقَوۡلٞ فَصۡلٞ (Innahoo laqawlun fasl) means 'Indeed, the Qur’an is a decisive statement,,' roots ك-ت-ب (book) and ر-ق-م (registered).",
    },
  ],
};
