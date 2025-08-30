export const adDuhaQuizData: SurahQuizData = {
  surahId: 93,
  surahName: "Ad-Duha",
  surahArabicName: "الضحى",
  totalVerses: 11,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Ad-Duha (The Morning Hours) is the 93rd chapter of the Quran. It was revealed to console Prophet Muhammad ﷺ during a period when revelation had temporarily ceased, reassuring him of Allah's constant care and guidance. The surah recounts Allah's blessings and provides instructions for showing gratitude through kindness to others.",

  additionalContextElements: [
    {
      title: "The Context of Revelation",
      content: `
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Comfort During a Difficult Period</h3>
          <p class="text-purple-700 dark:text-purple-200 mb-3">
            This surah was revealed after a brief pause in revelation (wahy), which caused the Prophet ﷺ great distress. The disbelievers of Mecca taunted him, saying "Your Lord has forsaken you." Surah Ad-Duha came as divine consolation, affirming Allah's continuous care and guidance.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Hadith Reference</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Jabir ibn Abdullah reported: "The revelation paused for a while, and the Prophet ﷺ was so grieved that he began to go to the mountaintops intending to throw himself down. But when he reached the mountain top, Gabriel would appear to him and say: 'O Muhammad, you are truly Allah's Messenger.' This would comfort him and he would return. Then the revelation paused again..." (Bukhari 4955).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Allah's Past Blessings",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Divine Favors Recounted</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The surah reminds the Prophet ﷺ of three specific blessings: guidance when he was astray, care when he was needy, and direction when he was lost. These references point to Allah's protection throughout his life.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains that "He found you astray and guided you" refers to Allah's guidance to Islam; "He found you needy and made you rich" refers to both material provision and spiritual wealth; "He found you lost and guided you" refers to direction to the straight path after spiritual uncertainty.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Practical Instructions of Gratitude",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Responding to Divine Favors</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The concluding verses provide practical ways to express gratitude for Allah's blessings: showing kindness to orphans, responding to inquiries from seekers, and proclaiming Allah's bounties openly.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Prophetic Example</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet ﷺ said: "I and the caretaker of an orphan will be in Paradise like these two" (holding up his index and middle fingers). This exemplifies the importance of caring for orphans mentioned in the surah (Bukhari 6005).
            </p>
          </div>
        </div>
      `,
    },
  ],

  questions: [
    {
      id: "q1",
      question: "What does the Arabic phrase وَالضُّحَىٰ in the opening verse refer to?",
      arabic: "وَالضُّحَىٰ",
      rootLetters: "ض ح و",
      options: [
        { id: "a", text: "The night", isCorrect: false },
        { id: "b", text: "The morning hours", isCorrect: true },
        { id: "c", text: "The evening", isCorrect: false },
        { id: "d", text: "The noon", isCorrect: false },
      ],
      explanation: "وَالضُّحَىٰ means 'By the morning brightness' (root: ض-ح-و), referring to the early morning hours when the sun has risen.",
    },
    {
      id: "q2",
      question: "What does the Arabic term وَاللَّيْلِ إِذَا سَجَىٰ mean?",
      arabic: "وَاللَّيْلِ إِذَا سَجَىٰ",
      rootLetters: "ل ي ل | س ج و",
      options: [
        { id: "a", text: "And the night when it departs", isCorrect: false },
        { id: "b", text: "And the night when it falls", isCorrect: false },
        { id: "c", text: "And the night when it is still", isCorrect: true },
        { id: "d", text: "And the night when it is dark", isCorrect: false },
      ],
      explanation: "وَاللَّيْلِ إِذَا سَجَىٰ means 'And the night when it covers with darkness' (roots: ل-ي-ل and س-ج-و), referring to the peaceful stillness of night.",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ assure?",
      arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
      rootLetters: "و د ع | ق ل و",
      options: [
        { id: "a", text: "Your Lord will never forget you", isCorrect: false },
        { id: "b", text: "Your Lord will never test you", isCorrect: false },
        { id: "c", text: "Your Lord will never leave you", isCorrect: false },
        { id: "d", text: "Your Lord has not forsaken you nor hates you", isCorrect: true },
      ],
      explanation: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ means 'Your Lord has not forsaken you, nor has He become displeased' (roots: و-د-ع and ق-ل-و), Allah's reassurance to the Prophet.",
    },
    {
      id: "q4",
      question: "What does the Arabic expression وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ promise?",
      arabic: "وَلَلْآخِرَةُ خَيْرٌ لَّكَ مِنَ الْأُولَىٰ",
      rootLetters: "ء خ ر | خ ي ر | أ و ل",
      options: [
        { id: "a", text: "The future is better than the past", isCorrect: false },
        { id: "b", text: "The next generation will be better", isCorrect: false },
        { id: "c", text: "The next life is better than this one", isCorrect: false },
        { id: "d", text: "The Hereafter is better for you than the first", isCorrect: true },
      ],
      explanation: "This phrase means 'And the Hereafter is better for you than the first [life]' (roots: ء-خ-ر, خ-ي-ر, أ-و-ل), promising eternal rewards.",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase وَوَجَدَكَ ضَالًّا فَهَدَىٰ refer to?",
      arabic: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ",
      rootLetters: "و ج د | ض ل ل | ه د ي",
      options: [
        { id: "a", text: "He found you weak and strengthened you", isCorrect: false },
        { id: "b", text: "He found you unknown and made you known", isCorrect: false },
        { id: "c", text: "He found you astray and guided you", isCorrect: true },
        { id: "d", text: "He found you poor and enriched you", isCorrect: false },
      ],
      explanation: "وَوَجَدَكَ ضَالًّا فَهَدَىٰ means 'He found you lost and guided [you]' (roots: و-ج-د, ض-ل-ل, ه-د-ي), referring to spiritual guidance.",
    },
    {
      id: "q6",
      question: "What does the Arabic term وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ mean?",
      arabic: "وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ",
      rootLetters: "و ج د | ع و ل | غ ن ي",
      options: [
        { id: "a", text: "He found you ignorant and taught you", isCorrect: false },
        { id: "b", text: "He found you needy and made you rich", isCorrect: true },
        { id: "c", text: "He found you lonely and gave you company", isCorrect: false },
        { id: "d", text: "He found you sick and healed you", isCorrect: false },
      ],
      explanation: "وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ means 'He found you poor and made [you] self-sufficient' (roots: و-ج-د, ع-و-ل, غ-ن-ي), referring to material provision.",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ instruct?",
      arabic: "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ",
      rootLetters: "ي ت م | ق ه ر",
      options: [
        { id: "a", text: "As for the orphan, do not neglect him", isCorrect: false },
        { id: "b", text: "As for the orphan, do not abuse him", isCorrect: false },
        { id: "c", text: "As for the orphan, do not turn him away", isCorrect: false },
        { id: "d", text: "As for the orphan, do not oppress him", isCorrect: true },
      ],
      explanation: "فَأَمَّا الْيَتِيمَ فَلَا تَقْهَرْ means 'So as for the orphan, do not oppress [him]' (roots: ي-ت-م and ق-ه-ر), instructing kindness to orphans.",
    },
    {
      id: "q8",
      question: "What does the Arabic expression وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ command?",
      arabic: "وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ",
      rootLetters: "س أ ل | ن ه ر",
      options: [
        { id: "a", text: "And as for the petitioner, do not repel him", isCorrect: true },
        { id: "b", text: "And as for the beggar, do not ignore him", isCorrect: false },
        { id: "c", text: "And as for the questioner, do not refuse him", isCorrect: false },
        { id: "d", text: "And as for the seeker, do not discourage him", isCorrect: false },
      ],
      explanation: "وَأَمَّا السَّائِلَ فَلَا تَنْهَرْ means 'And as for the petitioner, do not repel [him]' (roots: س-ء-ل and ن-ه-ر), instructing gentle treatment.",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ instruct?",
      arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
      rootLetters: "ن ع م | ح د ث",
      options: [
        { id: "a", text: "And as for the favor of your Lord, proclaim it", isCorrect: true },
        { id: "b", text: "And as for the blessing of your Lord, share it", isCorrect: false },
        { id: "c", text: "And as for the mercy of your Lord, announce it", isCorrect: false },
        { id: "d", text: "And as for the gift of your Lord, distribute it", isCorrect: false },
      ],
      explanation: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ means 'But as for the favor of your Lord, report [it]' (roots: ن-ع-م and ح-د-ث), instructing to proclaim Allah's blessings.",
    },
    {
      id: "q10",
      question: "According to Tafsir, what was the primary reason for revealing this surah?",
      arabic: "تَسْلِيَةٌ لِلنَّبِيِّ ﷺ",
      rootLetters: "س ل ي",
      options: [
        { id: "a", text: "To establish prayer times", isCorrect: false },
        { id: "b", text: "To warn the disbelievers", isCorrect: false },
        { id: "c", text: "To comfort the Prophet during the pause in revelation", isCorrect: true },
        { id: "d", text: "To prescribe fasting", isCorrect: false },
      ],
      explanation: "The surah was primarily revealed as تسلية للنبي ﷺ (comfort for the Prophet) during the pause in revelation (root: س-ل-ي).",
    },
    {
      id: "q11",
      question: "What does the Arabic word الضال in وَوَجَدَكَ ضَالًّا فَهَدَىٰ specifically mean?",
      arabic: "ضَالًّا",
      rootLetters: "ض ل ل",
      options: [
        { id: "a", text: "Lost in the desert", isCorrect: false },
        { id: "b", text: "Spiritually astray", isCorrect: true },
        { id: "c", text: "Physically weak", isCorrect: false },
        { id: "d", text: "Socially isolated", isCorrect: false },
      ],
      explanation: "ضَالًّا means 'astray' (root: ض-ل-ل), referring to spiritual guidance before prophethood, not physical lostness.",
    },
    {
      id: "q12",
      question: "What does the Arabic word العائل in وَوَجَدَكَ عَائِلًا فَأَغْنَىٰ mean?",
      arabic: "عَائِلًا",
      rootLetters: "ع و ل",
      options: [
        { id: "a", text: "Sick", isCorrect: false },
        { id: "b", text: "Needy", isCorrect: false },
        { id: "c", text: "Poor and dependent", isCorrect: true },
        { id: "d", text: "Hungry", isCorrect: false },
      ],
      explanation: "عَائِلًا means 'poor' or 'in need' (root: ع-و-ل), referring to both material and spiritual poverty before guidance.",
    },
  ],
};
