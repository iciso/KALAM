export const ashSharhQuizData: SurahQuizData = {
  surahId: 94,
  surahName: "Ash-Sharh",
  surahArabicName: "الشرح",
  totalVerses: 8,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Ash-Sharh (The Relief) is the 94th chapter of the Quran. It was revealed to comfort Prophet Muhammad ﷺ during difficult times, reminding him of Allah's blessings including the opening of his chest, removal of his burden, and exaltation of his remembrance. The surah concludes with the profound promise that ease follows hardship.",

  additionalContextElements: [
    {
      title: "The Opening of the Prophet's Chest",
      content: `
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">The Event of Shatr As-Sadr</h3>
          <p class="text-purple-700 dark:text-purple-200 mb-3">
            The first verse refers to the miraculous event when Arch Angel Gabriel opened and purified the Prophet's chest during his childhood. This occurred twice: once when he was 4 years old while playing with other children, and again during the Night Journey (Isra' and Mi'raj).
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Hadith Reference</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Anas ibn Malik reported: "The Messenger of Allah ﷺ reported that Gabriel came to him while he was playing with other boys. He took hold of me and laid me down on the ground and opened my chest and took out my heart from which he extracted a clot of blood and said: 'This was Satan's portion of you.' Then he washed it in a golden basin with Zamzam water..." (Muslim 162).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Removal of the Prophet's Burden",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Divine Comfort in Difficult Times</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            This surah was revealed during a period of intense difficulty for the Prophet ﷺ, when opposition from the Quraysh had reached its peak. Allah comforted him by reminding him of His favors and promising relief after hardship.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains that "removing your burden" refers to Allah forgiving the Prophet's previous and future sins, elevating his remembrance, and making his name mentioned alongside Allah's name in the call to prayer and testimony of faith.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Ease After Hardship",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">The Promise of Relief</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The concluding verses contain one of the most profound promises in the Quran: "Indeed, with hardship comes ease." This assurance was not only for the Prophet ﷺ but for all believers throughout time.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Prophetic Explanation</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet ﷺ said: "Know that victory comes with patience, relief with affliction, and ease with hardship" (Tirmidhi 2516). This hadith beautifully complements the Quranic promise in this surah.
            </p>
          </div>
        </div>
      `,
    },
  ],

  questions: [
    {
      id: "q1",
      question: "What does the Arabic phrase أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ in the surah mean?",
      arabic: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ",
      rootLetters: "ش ر ح | ص د ر",
      options: [
        { id: "a", text: "Did We not give you wealth?", isCorrect: false },
        { id: "b", text: "Did We not grant you victory?", isCorrect: false },
        { id: "c", text: "Did We not expand your knowledge?", isCorrect: false },
        { id: "d", text: "Did We not expand your chest?", isCorrect: true },
      ],
      explanation: "أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ means 'Did We not expand for you your chest?' (roots: ش-ر-ح and ص-د-ر), referring to the opening and purification of the Prophet's heart.",
    },
    {
      id: "q2",
      question: "What does the Arabic term وَوَضَعْنَا عَنكَ وِزْرَكَ refer to?",
      arabic: "وَوَضَعْنَا عَنكَ وِزْرَكَ",
      rootLetters: "و ض ع | و ز ر",
      options: [
        { id: "a", text: "Removing your burden", isCorrect: true },
        { id: "b", text: "Lightening your load", isCorrect: false },
        { id: "c", text: "Forgiving your sins", isCorrect: false },
        { id: "d", text: "Lifting your responsibility", isCorrect: false },
      ],
      explanation: "وَوَضَعْنَا عَنكَ وِزْرَكَ means 'And We removed from you your burden' (roots: و-ض-ع and و-ز-ر), referring to Allah lightening the Prophet's difficulties.",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase الَّذِي أَنقَضَ ظَهْرَكَ describe?",
      arabic: "الَّذِي أَنقَضَ ظَهْرَكَ",
      rootLetters: "ن ق ض | ظ ه ر",
      options: [
        { id: "a", text: "Which strengthened your back", isCorrect: false },
        { id: "b", text: "Which healed your wound", isCorrect: false },
        { id: "c", text: "Which weighed down your back", isCorrect: false },
        { id: "d", text: "Which weighed heavily on your back", isCorrect: true },
      ],
      explanation: "الَّذِي أَنقَضَ ظَهْرَكَ means 'which had weighed heavily on your back' (roots: ن-ق-ض and ظ-ه-ر), describing the burden that was removed.",
    },
    {
      id: "q4",
      question: "What does the Arabic term وَرَفَعْنَا لَكَ ذِكْرَكَ mean?",
      arabic: "وَرَفَعْنَا لَكَ ذِكْرَكَ",
      rootLetters: "ر ف ع | ذ ك ر",
      options: [
        { id: "a", text: "We raised your status", isCorrect: false },
        { id: "b", text: "We exalted your remembrance", isCorrect: true },
        { id: "c", text: "We increased your followers", isCorrect: false },
        { id: "d", text: "We elevated your rank", isCorrect: false },
      ],
      explanation: "وَرَفَعْنَا لَكَ ذِكْرَكَ means 'And raised high for you your remembrance' (roots: ر-ف-ع and ذ-ك-ر), referring to the Shahadah and Adhan where the Prophet's name is mentioned.",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase فَإِنَّ مَعَ الْعُسْرِ يُسْرًا promise?",
      arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
      rootLetters: "ع س ر | ي س ر",
      options: [
        { id: "a", text: "Indeed, with patience comes relief", isCorrect: false },
        { id: "b", text: "Indeed, with faith comes peace", isCorrect: false },
        { id: "c", text: "Indeed, with hardship comes ease", isCorrect: true },
        { id: "d", text: "Indeed, with difficulty comes reward", isCorrect: false },
      ],
      explanation: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا means 'Indeed, with hardship comes ease' (roots: ع-س-ر and ي-س-ر), Allah's promise of relief after difficulties.",
    },
    {
      id: "q6",
      question: "What does the Arabic word الْعُسْرِ mean?",
      arabic: "الْعُسْرِ",
      rootLetters: "ع س ر",
      options: [
        { id: "a", text: "Poverty", isCorrect: false },
        { id: "b", text: "Hardship", isCorrect: true },
        { id: "c", text: "Sickness", isCorrect: false },
        { id: "d", text: "Loneliness", isCorrect: false },
      ],
      explanation: "الْعُسْرِ means 'hardship' or 'difficulty' (root: ع-س-ر), as mentioned in the promise of ease following hardship.",
    },
    {
      id: "q7",
      question: "What does the Arabic term يُسْرًا mean?",
      arabic: "يُسْرًا",
      rootLetters: "ي س ر",
      options: [
        { id: "a", text: "Wealth", isCorrect: false },
        { id: "b", text: "Health", isCorrect: false },
        { id: "c", text: "Success", isCorrect: false },
        { id: "d", text: "Ease", isCorrect: true },
      ],
      explanation: "يُسْرًا means 'ease' or 'relief' (root: ي-س-ر), the promised state that follows hardship.",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase إِنَّ مَعَ الْعُسْرِ يُسْرًا emphasize through repetition?",
      arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
      rootLetters: "ع س ر | ي س ر",
      options: [
        { id: "a", text: "That ease is temporary", isCorrect: false },
        { id: "b", text: "That hardship is inevitable", isCorrect: false },
        { id: "c", text: "That for every hardship there are two eases", isCorrect: true },
        { id: "d", text: "That ease precedes hardship", isCorrect: false },
      ],
      explanation: "The repetition emphasizes that for every hardship, there are two eases, as explained in Tafsir Ibn Kathir.",
    },
    {
      id: "q9",
      question: "What does the Arabic expression فَإِذَا فَرَغْتَ فَانصَبْ instruct?",
      arabic: "فَإِذَا فَرَغْتَ فَانصَبْ",
      rootLetters: "ف ر غ | ن ص ب",
      options: [
        { id: "a", text: "When you have finished, then stand", isCorrect: true },
        { id: "b", text: "When you are tired, then rest", isCorrect: false },
        { id: "c", text: "When you are free, then work", isCorrect: false },
        { id: "d", text: "When you complete, then pray", isCorrect: false },
      ],
      explanation: "فَإِذَا فَرَغْتَ فَانصَبْ means 'So when you have finished, then stand' (roots: ف-ر-غ and ن-ص-ب), instructing to devote oneself to worship after completing tasks.",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase وَإِلَىٰ رَبِّكَ فَارْغَب direct towards?",
      arabic: "وَإِلَىٰ رَبِّكَ فَارْغَب",
      rootLetters: "ر غ ب | ر ب ب",
      options: [
        { id: "a", text: "To your Lord then turn", isCorrect: false },
        { id: "b", text: "To your Lord then aspire", isCorrect: false },
        { id: "c", text: "And to your Lord direct your desire", isCorrect: true },
        { id: "d", text: "And to your Lord then pray", isCorrect: false },
      ],
      explanation: "وَإِلَىٰ رَبِّكَ فَارْغَب means 'And to your Lord direct your desire' (roots: ر-غ-ب and ر-ب-ب), encouraging devotion to Allah alone.",
    },
    {
      id: "q11",
      question: "According to Tafsir, what is the primary reason for revealing this surah?",
      arabic: "تَسْلِيَةٌ لِلنَّبِيِّ ﷺ",
      rootLetters: "س ل ي",
      options: [
        { id: "a", text: "To establish prayer times", isCorrect: false },
        { id: "b", text: "To comfort the Prophet ﷺ", isCorrect: true },
        { id: "c", text: "To warn the disbelievers", isCorrect: false },
        { id: "d", text: "To prescribe fasting", isCorrect: false },
      ],
      explanation: "The surah was primarily revealed as تسلية للنبي ﷺ (comfort for the Prophet) during difficult times (root: س-ل-ي).",
    },
    {
      id: "q12",
      question: "What does the Arabic word الذكر in وَرَفَعْنَا لَكَ ذِكْرَكَ specifically refer to?",
      arabic: "ذِكْر",
      rootLetters: "ذ ك ر",
      options: [
        { id: "a", text: "The Quran", isCorrect: false },
        { id: "b", text: "Dhikr (remembrance of Allah)", isCorrect: false },
        { id: "c", text: "The mention of the Prophet's name alongside Allah's", isCorrect: true },
        { id: "d", text: "The Prophet's teachings", isCorrect: false },
      ],
      explanation: "الذكر here specifically refers to the mention of the Prophet's name in the Shahadah and Adhan (root: ذ-ك-ر), as explained in Tafsir.",
    },
  ],
};
