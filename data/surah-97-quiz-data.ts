export const alQadrQuizData: SurahQuizData = {
  surahId: 97,
  surahName: "Al-Qadr",
  surahArabicName: "القدر",
  totalVerses: 5,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Qadr (The Night of Decree) reveals the immense value of Laylatul Qadr, the night when the Quran was first revealed. It describes this night as better than a thousand months, emphasizing its spiritual significance and the descent of angels with divine decrees.",

  additionalContextElements: [
    {
      title: "The Virtues of Laylatul Qadr",
      content: `
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Hadeeth About the Night of Power</h3>
          <p class="text-purple-700 dark:text-purple-200 mb-3">
            The Prophet ﷺ said: <span class="font-arabic">"مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ"</span> 
            ("Whoever stands (in prayer) on Laylatul Qadr out of faith and hope, his previous sins will be forgiven" - Bukhari 1901).
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">When is Laylatul Qadr?</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet ﷺ said: <span class="font-arabic">"تَحَرَّوْا لَيْلَةَ الْقَدْرِ فِي الْوِتْرِ مِنَ الْعَشْرِ الْأَوَاخِرِ مِنْ رَمَضَانَ"</span> 
              ("Seek Laylatul Qadr among the odd nights of the last ten days of Ramadan" - Bukhari 2017).
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Signs of Laylatul Qadr</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet ﷺ said: <span class="font-arabic">"لَيْلَةُ الْقَدْرِ لَيْلَةٌ طَلْقَةٌ، لَا حَارَّةٌ وَلَا بَارِدَةٌ، تُصْبِحُ الشَّمْسُ صَبِيحَتَهَا ضَعِيفَةً حَمْرَاءَ"</span> 
              ("Laylatul Qadr is a calm night, neither hot nor cold, and the sun rises weak and reddish" - Ibn Khuzaymah).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Tafsir of Key Terms",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Arabic Vocabulary</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">القدر (Al-Qadr)</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                <span class="font-semibold">Root:</span> ق د ر<br>
                <span class="font-semibold">Meaning:</span> "Decree" or "Honor" - referring to Allah's divine decree and the night's exalted status.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">تنزل (Tanazzalu)</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                <span class="font-semibold">Root:</span> ن ز ل<br>
                <span class="font-semibold">Meaning:</span> "Descend" - describing the angels and Spirit (Jibreel) bringing divine decrees.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">الروح (Ar-Ruh)</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                <span class="font-semibold">Root:</span> ر و ح<br>
                <span class="font-semibold">Meaning:</span> "The Spirit" - interpreted as Angel Jibreel (Tafsir Ibn Kathir).
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">سلام (Salam)</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                <span class="font-semibold">Root:</span> س ل م<br>
                <span class="font-semibold">Meaning:</span> "Peace" - the night is filled with divine safety until dawn.
              </p>
            </div>
          </div>
        </div>
      `,
    },
    {
      title: "The Descent of Angels",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Tafsir Insight</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            <span class="font-arabic">تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِمْ مِنْ كُلِّ أَمْرٍ</span> 
            ("The angels and the Spirit descend therein by permission of their Lord for every matter" - 97:4).
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Ibn Kathir's Explanation</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir states that angels descend with Jibreel to earth with Allah's decrees for the coming year, filling the space between heaven and earth (Tafsir Ibn Kathir 8/441).
            </p>
          </div>
        </div>
      `,
    },
  ],

  questions: [
    {
      id: "q1",
      question: "What does the Arabic phrase إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ in the surah mean?",
      arabic: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ",
      rootLetters: "ن ز ل | ق د ر",
      options: [
        { id: "a", text: "We revealed it on a blessed night", isCorrect: false },
        { id: "b", text: "We sent it down gradually", isCorrect: false },
        { id: "c", text: "We revealed it on the Night of Decree", isCorrect: true },
        { id: "d", text: "We created it with power", isCorrect: false },
      ],
      explanation: "إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ means 'We revealed it on the Night of Decree' (roots: ن-ز-ل and ق-د-ر).",
    },
    {
      id: "q2",
      question: "What does the Arabic term لَيْلَةُ الْقَدْرِ mean literally?",
      arabic: "لَيْلَةُ الْقَدْرِ",
      rootLetters: "ق د ر",
      options: [
        { id: "a", text: "Night of Power", isCorrect: false },
        { id: "b", text: "Night of Decree", isCorrect: true },
        { id: "c", text: "Night of Destiny", isCorrect: false },
        { id: "d", text: "Night of Honor", isCorrect: false },
      ],
      explanation: "لَيْلَةُ الْقَدْرِ literally means 'Night of Decree' (root: ق-د-ر), referring to Allah's divine decrees.",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase خَيْرٌ مِّنْ أَلْفِ شَهْرٍ signify?",
      arabic: "خَيْرٌ مِّنْ أَلْفِ شَهْرٍ",
      rootLetters: "خ ي ر | ش ه ر",
      options: [
        { id: "a", text: "Better than a lifetime", isCorrect: false },
        { id: "b", text: "Worth more than gold", isCorrect: false },
        { id: "c", text: "Superior to endless wealth", isCorrect: false },
        { id: "d", text: "Better than a thousand months", isCorrect: true },
      ],
      explanation: "خَيْرٌ مِّنْ أَلْفِ شَهْرٍ means 'better than a thousand months' (roots: خ-ي-ر and ش-ه-ر).",
    },
    {
      id: "q4",
      question: "What does the Arabic word تَنَزَّلُ in the surah refer to?",
      arabic: "تَنَزَّلُ",
      rootLetters: "ن ز ل",
      options: [
        { id: "a", text: "The descent of angels", isCorrect: true },
        { id: "b", text: "The rising of the sun", isCorrect: false },
        { id: "c", text: "The revelation of books", isCorrect: false },
        { id: "d", text: "The arrival of dawn", isCorrect: false },
      ],
      explanation: "تَنَزَّلُ means 'descend,' referring to angels (root: ن-ز-ل).",
    },
    {
      id: "q5",
      question: "What does the Arabic term الرُّوحُ signify in the surah?",
      arabic: "الرُّوحُ",
      rootLetters: "ر و ح",
      options: [
        { id: "a", text: "The human soul", isCorrect: false },
        { id: "b", text: "Angel Jibreel", isCorrect: true },
        { id: "c", text: "Divine mercy", isCorrect: false },
        { id: "d", text: "The wind", isCorrect: false },
      ],
      explanation: "الرُّوحُ refers to Angel Jibreel (root: ر-و-ح), as per Tafsir Ibn Kathir.",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ describe?",
      arabic: "سَلَامٌ هِيَ حَتَّىٰ مَطْلَعِ الْفَجْرِ",
      rootLetters: "س ل م | ط ل ع | ف ج ر",
      options: [
        { id: "a", text: "A night of worship", isCorrect: false },
        { id: "b", text: "A night of darkness", isCorrect: false },
        { id: "c", text: "A night of peace", isCorrect: false },
        { id: "d", text: "A night full of divine peace until dawn", isCorrect: true },
      ],
      explanation: "سَلَامٌ هِيَ... means 'it is peace until the emergence of dawn' (roots: س-ل-م, ط-ل-ع, ف-ج-ر).",
    },
    {
      id: "q7",
      question: "What does the Arabic word الْقَدْرِ (in the first ayah) emphasize?",
      arabic: "الْقَدْرِ",
      rootLetters: "ق د ر",
      options: [
        { id: "a", text: "Allah's divine decree and honor", isCorrect: true },
        { id: "b", text: "Human power", isCorrect: false },
        { id: "c", text: "The Quran's length", isCorrect: false },
        { id: "d", text: "The moon's phases", isCorrect: false },
      ],
      explanation: "الْقَدْرِ refers to Allah's decree and the night's exalted status (root: ق-د-ر).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase مِن كُلِّ أَمْرٍ in the surah indicate?",
      arabic: "مِن كُلِّ أَمْرٍ",
      rootLetters: "ك ل ل | أ م ر",
      options: [
        { id: "a", text: "From every direction", isCorrect: false },
        { id: "b", text: "With complete knowledge", isCorrect: false },
        { id: "c", text: "For every divine decree", isCorrect: true },
        { id: "d", text: "In every language", isCorrect: false },
      ],
      explanation: "مِن كُلِّ أَمْرٍ means 'for every matter/decreed by Allah' (roots: ك-ل-ل and أ-م-ر).",
    },
    {
      id: "q9",
      question: "What does the Arabic term مَطْلَعِ الْفَجْرِ refer to?",
      arabic: "مَطْلَعِ الْفَجْرِ",
      rootLetters: "ط ل ع | ف ج ر",
      options: [
        { id: "a", text: "Sunset", isCorrect: false },
        { id: "b", text: "The break of dawn", isCorrect: true },
        { id: "c", text: "Midnight", isCorrect: false },
        { id: "d", text: "Noon", isCorrect: false },
      ],
      explanation: "مَطْلَعِ الْفَجْرِ means 'the emergence of dawn' (roots: ط-ل-ع and ف-ج-ر).",
    },
    {
      id: "q10",
      question: "What does the Arabic word أَنزَلْنَاهُ (in the first ayah) specifically refer to?",
      arabic: "أَنزَلْنَاهُ",
      rootLetters: "ن ز ل",
      options: [
        { id: "a", text: "The Torah", isCorrect: false },
        { id: "b", text: "The Psalms", isCorrect: false },
        { id: "c", text: "The Gospel", isCorrect: false },
        { id: "d", text: "The Quran", isCorrect: true },
      ],
      explanation: "أَنزَلْنَاهُ refers to the Quran's revelation (root: ن-ز-ل).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase فِي لَيْلَةِ الْقَدْرِ emphasize about revelation?",
      arabic: "فِي لَيْلَةِ الْقَدْرِ",
      rootLetters: "ل ي ل | ق د ر",
      options: [
        { id: "a", text: "The Quran was revealed all at once this night", isCorrect: true },
        { id: "b", text: "Revelation occurs only at night", isCorrect: false },
        { id: "c", text: "All books were revealed this night", isCorrect: false },
        { id: "d", text: "Prophets receive visions this night", isCorrect: false },
      ],
      explanation: "The Quran was sent down in its entirety to the lowest heaven on this night (Tafsir Al-Tabari).",
    },
    {
      id: "q12",
      question: "What does the Arabic term بِإِذْنِ رَبِّهِمْ teach about the angels' descent?",
      arabic: "بِإِذْنِ رَبِّهِمْ",
      rootLetters: "أ ذ ن | ر ب ب",
      options: [
        { id: "a", text: "Angels act independently", isCorrect: false },
        { id: "b", text: "Angels need human permission", isCorrect: false },
        { id: "c", text: "Angels descend by Allah's command", isCorrect: true },
        { id: "d", text: "Angels descend randomly", isCorrect: false },
      ],
      explanation: "بِإِذْنِ رَبِّهِمْ means 'by permission of their Lord' (roots: أ-ذ-ن and ر-ب-ب).",
    },
  ],
};
