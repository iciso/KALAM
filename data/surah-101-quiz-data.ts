export const alQariyahQuizData: SurahQuizData = {
  surahId: 101,
  surahName: "Al-Qari'ah",
  surahArabicName: "القارعة",
  totalVerses: 11,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Qari'ah (The Striking Calamity) is the 101st chapter of the Quran, revealed in Mecca. It vividly describes the Day of Judgment as a catastrophic event that strikes terror into hearts, using metaphors of scattered moths and disintegrating mountains. The surah emphasizes accountability through the weighing of deeds, leading to either a pleasing life in Paradise or plunging into the blazing abyss of Hell.",
  additionalContextElements: [
    {
      title: "The Terror of the Last Day",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">The Calamity Strikes</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            Surah Al-Qari'ah opens with repeated questions about the nature of the 'Striking Calamity,' portraying the chaos where humanity is like scattered moths and mountains turn to fluff, symbolizing the upheaval of the Day of Resurrection.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir notes that Al-Qari'ah is a name for the Day of Judgment because it 'strikes' the hearts with its terror, and the repeated questioning amplifies its magnitude.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Judgment and Consequences",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Weighing the Scales</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The surah details the fate based on deeds: those with heavy scales enjoy bliss, while those with light scales fall into Hawiyah, a blazing fire.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Consequences of Deeds</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              According to Tafsir Al-Jalalayn, 'ummuhu hawiyah' metaphorically means one's destiny or refuge is the abyss (Hell), emphasizing the finality of judgment.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Prophetic Guidance</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              A hadith in Sahih Bukhari narrates that the Prophet Muhammad ﷺ said deeds are weighed on the Day of Judgment, aligning with the surah's focus on accountability.
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Al-Qari'ah, القارعة?",
      arabic: "القارعة",
      rootLetters: "ق ر ع",
      options: [
        { id: "a", text: "The Earthquake", isCorrect: false },
        { id: "b", text: "The Time", isCorrect: false },
        { id: "c", text: "The Rivalry", isCorrect: false },
        { id: "d", text: "The Striking Calamity", isCorrect: true },
      ],
      explanation: "القارعة (Al-Qari'ah) means 'The Striking Calamity,' derived from the root ق-ر-ع, referring to something that strikes or knocks with intensity, here symbolizing the Day of Judgment.",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'مَا الْقَارِعَةُ' mean?",
      arabic: "مَا الْقَارِعَةُ",
      rootLetters: "ق ر ع",
      options: [
        { id: "a", text: "When is the Striking Calamity?", isCorrect: false },
        { id: "b", text: "What is the Striking Calamity?", isCorrect: true },
        { id: "c", text: "Where is the Striking Calamity?", isCorrect: false },
        { id: "d", text: "Who causes the Striking Calamity?", isCorrect: false },
      ],
      explanation: "مَا الْقَارِعَةُ (Ma al-qari'ah) means 'What is the Striking Calamity?,' with root ق-ر-ع, questioning the nature of the Day of Judgment.",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'وَمَا أَدْرَاكَ مَا الْقَارِعَةُ' mean?",
      arabic: "وَمَا أَدْرَاكَ مَا الْقَارِعَةُ",
      rootLetters: "د ر ي | ق ر ع",
      options: [
        { id: "a", text: "And what can make you know what the Striking Calamity is?", isCorrect: true },
        { id: "b", text: "And you already know what the Striking Calamity is", isCorrect: false },
        { id: "c", text: "And who told you about the Striking Calamity?", isCorrect: false },
        { id: "d", text: "And why fear the Striking Calamity?", isCorrect: false },
      ],
      explanation: "وَمَا أَدْرَاكَ مَا الْقَارِعَةُ (Wa ma adraka ma al-qari'ah) means 'And what can make you know what the Striking Calamity is?,' roots د-ر-ي (know) and ق-ر-ع, emphasizing its incomprehensible terror.",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'كَالْفَرَاشِ الْمَبْثُوثِ' mean in the context of the surah?",
      arabic: "كَالْفَرَاشِ الْمَبْثُوثِ",
      rootLetters: "ف ر ش | ب ث ث",
      options: [
        { id: "a", text: "Like gathered birds", isCorrect: false },
        { id: "b", text: "Like solid rocks", isCorrect: false },
        { id: "c", text: "Like scattered moths", isCorrect: true },
        { id: "d", text: "Like flowing water", isCorrect: false },
      ],
      explanation: "كَالْفَرَاشِ الْمَبْثُوثِ (kal-farashi al-mabthuth) means 'like scattered moths,' describing people on the Day of Judgment, roots ف-ر-ش (moths) and ب-ث-ث (scattered).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'كَالْعِهْنِ الْمَنفُوشِ' mean?",
      arabic: "كَالْعِهْنِ الْمَنفُوشِ",
      rootLetters: "ع ه ن | ن ف ش",
      options: [
        { id: "a", text: "Like carded wool", isCorrect: true },
        { id: "b", text: "Like hardened steel", isCorrect: false },
        { id: "c", text: "Like burning coal", isCorrect: false },
        { id: "d", text: "Like standing trees", isCorrect: false },
      ],
      explanation: "كَالْعِهْنِ الْمَنفُوشِ (kal-'ihni al-manfush) means 'like carded wool,' describing mountains on the Day of Judgment, roots ع-ه-ن (wool) and ن-ف-ش (fluffed or carded).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'ثَقُلَتْ مَوَازِينُهُ' mean?",
      arabic: "ثَقُلَتْ مَوَازِينُهُ",
      rootLetters: "ث ق ل | و ز ن",
      options: [
        { id: "a", text: "His scales are light", isCorrect: false },
        { id: "b", text: "His deeds are forgotten", isCorrect: false },
        { id: "c", text: "His scales are balanced", isCorrect: false },
        { id: "d", text: "His scales are heavy", isCorrect: true },
      ],
      explanation: "ثَقُلَتْ مَوَازِينُهُ (thaqulat mawazinuh) means 'his scales are heavy,' referring to good deeds outweighing bad, roots ث-ق-ل (heavy) and و-ز-ن (scales).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'عِيشَةٍ رَّاضِيَةٍ' refer to?",
      arabic: "عِيشَةٍ رَّاضِيَةٍ",
      rootLetters: "ع ي ش | ر ض و",
      options: [
        { id: "a", text: "A life of regret", isCorrect: false },
        { id: "b", text: "A pleasing life", isCorrect: true },
        { id: "c", text: "A temporary life", isCorrect: false },
        { id: "d", text: "A difficult life", isCorrect: false },
      ],
      explanation: "عِيشَةٍ رَّاضِيَةٍ ('ishatin radiyah) means 'a pleasing life,' describing the reward in Paradise, roots ع-ي-ش (life) and ر-ض-و (pleasing).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'خَفَّتْ مَوَازِينُهُ' mean?",
      arabic: "خَفَّتْ مَوَازِينُهُ",
      rootLetters: "خ ف ف | و ز ن",
      options: [
        { id: "a", text: "His scales are heavy", isCorrect: false },
        { id: "b", text: "His scales are light", isCorrect: true },
        { id: "c", text: "His scales are equal", isCorrect: false },
        { id: "d", text: "His scales are destroyed", isCorrect: false },
      ],
      explanation: "خَفَّتْ مَوَازِينُهُ (khaffat mawazinuh) means 'his scales are light,' indicating insufficient good deeds, roots خ-ف-ف (light) and و-ز-ن (scales).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'فَأُمُّهُ هَاوِيَةٌ' mean?",
      arabic: "فَأُمُّهُ هَاوِيَةٌ",
      rootLetters: "أ م م | ه و ي",
      options: [
        { id: "a", text: "His abode is the abyss", isCorrect: true },
        { id: "b", text: "His mother is safe", isCorrect: false },
        { id: "c", text: "His destiny is paradise", isCorrect: false },
        { id: "d", text: "His refuge is secure", isCorrect: false },
      ],
      explanation: "فَأُمُّهُ هَاوِيَةٌ (fa-ummuhu hawiyah) means 'his abode is the abyss,' where 'umm' metaphorically means refuge, roots أ-م-م (mother/abode) and ه-و-ي (falling/abyss).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'نَارٌ حَامِيَةٌ' mean?",
      arabic: "نَارٌ حَامِيَةٌ",
      rootLetters: "ن و ر | ح م ي",
      options: [
        { id: "a", text: "A cooling breeze", isCorrect: false },
        { id: "b", text: "A dark shadow", isCorrect: false },
        { id: "c", text: "A blazing fire", isCorrect: true },
        { id: "d", text: "A gentle light", isCorrect: false },
      ],
      explanation: "نَارٌ حَامِيَةٌ (narun hamiyah) means 'a blazing fire,' describing Hell, roots ن-و-ر (fire) and ح-م-ي (intensely hot).",
    },
    {
      id: "q11",
      question: "What does the Arabic word 'الْجِبَالُ' in the surah refer to being like carded wool?",
      arabic: "الْجِبَالُ",
      rootLetters: "ج ب ل",
      options: [
        { id: "a", text: "Rivers", isCorrect: false },
        { id: "b", text: "People", isCorrect: false },
        { id: "c", text: "Skies", isCorrect: false },
        { id: "d", text: "Mountains", isCorrect: true },
      ],
      explanation: "الْجِبَالُ (al-jibalu) means 'mountains,' which will be like carded wool on the Day of Judgment, root ج-ب-ل (mountain).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'يَوْمَ يَكُونُ النَّاسُ' describe?",
      arabic: "يَوْمَ يَكُونُ النَّاسُ",
      rootLetters: "ي و م | ك و ن | ن و س",
      options: [
        { id: "a", text: "The day when people are like scattered moths", isCorrect: true },
        { id: "b", text: "The day when people are united", isCorrect: false },
        { id: "c", text: "The day when people sleep", isCorrect: false },
        { id: "d", text: "The day when people pray", isCorrect: false },
      ],
      explanation: "يَوْمَ يَكُونُ النَّاسُ (yawma yakunu an-nasu) means 'the day when people will be,' leading to their description as scattered moths, roots ي-و-م (day), ك-و-ن (be), ن-و-س (people).",
    },
  ],
};
