export const alMutaffifinQuizData: SurahQuizData = {
  surahId: 83,
  surahName: "Al-Mutaffifin",
  surahArabicName: "الْمُطَفِّفِينَ",
  totalVerses: 36,
  type: "Meccan",
  difficulty: "Intermediate",
  introduction:
    "Surah Al-Mutaffifin (The Defrauders) is the 83rd chapter of the Quran, containing 36 verses. Revealed in Mecca, it condemns those who engage in fraudulent business practices by giving short measure or weight. The surah emphasizes divine justice, warning that Allah records all deeds in either 'Illiyyun (the exalted register for the righteous) or Sijjin (the debased register for the wicked), and describes the contrasting fates of the wicked in hellfire versus the righteous in paradise, who will be served sealed wine and look down upon those who once mocked them.",
  additionalContextElements: [
    {
      title: "Commercial Fraud and Divine Justice",
      content: `
        <div class="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
          <h3 class="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Historical Context and Reasons for Revelation</h3>
          <p class="text-orange-700 dark:text-orange-200 mb-3">
            There is scholarly debate about whether this surah was revealed in Mecca or Medina. The opening verses about commercial fraud suggest it addressed dishonest traders in Medina who were strict when receiving goods but cheated when selling to others.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Tafsir Evidence</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              According to Maarif ul-Quran, it was a common practice in Madinah that people used to be very strict in measuring when they had to receive something from others, but when they sold something, they used to cheat the buyers. After the revelation of this Surah, all of them abandoned this bad custom totally.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Etymology and Meaning</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The word mutaffifin is derived from tatfif, used for giving short weight and measure fraudulently. The person who acts thus does not defraud another by any substantial amount, but skims small amounts from what is due to every customer cleverly.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Honest trade: Surah Al-A'raf (7:85), Surah Hud (11:84-85). Divine records: Surah Al-Kahf (18:49). Justice in transactions: Surah Al-Baqarah (2:282).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Divine Records: Sijjin and 'Illiyyun",
      content: `
        <div class="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
          <h3 class="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Heavenly and Infernal Registers</h3>
          <p class="text-indigo-700 dark:text-indigo-200 mb-3">
            The surah introduces two divine registers: Sijjin (the debased register) for the deeds of the wicked, and 'Illiyyun (the exalted register) for the righteous. This concept emphasizes that all human actions are meticulously recorded and will be presented on the Day of Judgment.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Tafsir Insights</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Classical commentators explain Sijjin as a prison in the lowest earth where the deeds of the disobedient are recorded, while 'Illiyyun represents the highest realm where the deeds of the righteous are preserved. These serve as cosmic filing systems of divine justice.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Paradise and Its Delights</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The surah vividly describes the righteous being served "sealed wine" whose seal is of musk, mixed with water from Tasnim (a spring in Paradise). This imagery contrasts sharply with the punishment awaiting the defrauders.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Divine recording: Surah Al-Kahf (18:49), Surah Qaf (50:17-18). Paradise descriptions: Surah As-Saffat (37:45-47), Surah Al-Waqi'ah (56:17-19). Justice prevailing: Surah Al-Anbiya (21:47).
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Al-Mutaffifin, الْمُطَفِّفِينَ?",
      arabic: "الْمُطَفِّفِينَ",
      rootLetters: "ط ف ف",
      options: [
        { id: "a", text: "The Generous", isCorrect: false },
        { id: "b", text: "The Defrauders", isCorrect: true },
        { id: "c", text: "The Traders", isCorrect: false },
        { id: "d", text: "Indeed, the record of the sinners is forgotten", isCorrect: false },
      ],
      explanation: "كَلَّا إِنَّ كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ (Kalla inna kitaba al-abrari lafi 'illiyyin) means 'Indeed, the record of the righteous is in 'Illiyyun,' roots ك-ت-ب (record), ب-ر-ر (righteous), ع-ل-و (elevated).",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'وَيْلٌ لِّلْمُطَفِّفِينَ' mean?",
      arabic: "وَيْلٌ لِّلْمُطَفِّفِينَ",
      rootLetters: "و ي ل | ط ف ف",
      options: [
        { id: "a", text: "Blessed are the defrauders", isCorrect: false },
        { id: "b", text: "Forgiveness for the defrauders", isCorrect: false },
        { id: "c", text: "Woe to the defrauders", isCorrect: true },
        { id: "d", text: "Peace to the defrauders", isCorrect: false },
      ],
      explanation: "وَيْلٌ لِّلْمُطَفِّفِينَ (Waylun lilmutaffifin) means 'Woe to the defrauders,' roots و-ي-ل (woe) and ط-ف-ف (defrauders).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ' mean?",
      arabic: "الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ",
      rootLetters: "ك ي ل | ن و س | و ف ي",
      options: [
        { id: "a", text: "Who when they take a measure from people, take in full", isCorrect: true },
        { id: "b", text: "Who when they give to people, give generously", isCorrect: false },
        { id: "c", text: "Who when they trade with people, are honest", isCorrect: false },
        { id: "d", text: "Who when they sell to people, are fair", isCorrect: false },
      ],
      explanation: "الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ (Alladhina idha iktalu 'ala an-nasi yastawfun) means 'Who when they take a measure from people, take in full,' roots ك-ي-ل (measure), ن-و-س (people), و-ف-ي (fulfill).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ' mean?",
      arabic: "وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ",
      rootLetters: "ك ي ل | و ز ن | خ س ر",
      options: [
        { id: "a", text: "But when they give by measure or weight, they are generous", isCorrect: false },
        { id: "b", text: "But when they give by measure or weight, they give less", isCorrect: true },
        { id: "c", text: "But when they give by measure or weight, they are honest", isCorrect: false },
        { id: "d", text: "But when they give by measure or weight, they are fair", isCorrect: false },
      ],
      explanation: "وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ (Wa idha kaluhum aw wazanuhum yukhsirun) means 'But when they give by measure or weight, they give less,' roots ك-ي-ل (measure), و-ز-ن (weigh), خ-س-ر (cause loss).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'أَلَا يَظُنُّ أُولَـٰئِكَ أَنَّهُم مَّبْعُوثُونَ' mean?",
      arabic: "أَلَا يَظُنُّ أُولَـٰئِكَ أَنَّهُم مَّبْعُوثُونَ",
      rootLetters: "ظ ن ن | ب ع ث",
      options: [
        { id: "a", text: "Do they not think they will be forgiven?", isCorrect: false },
        { id: "b", text: "Do they not think they will be guided?", isCorrect: false },
        { id: "c", text: "Do they not think they will be blessed?", isCorrect: false },
        { id: "d", text: "Do they not think they will be resurrected?", isCorrect: true },
      ],
      explanation: "أَلَا يَظُنُّ أُولَـٰئِكَ أَنَّهُم مَّبْعُوثُونَ (Ala yazunnu ulaika annahum mab'uthun) means 'Do they not think they will be resurrected?' roots ظ-ن-ن (think) and ب-ع-ث (resurrect).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'لِيَوْمٍ عَظِيمٍ' mean?",
      arabic: "لِيَوْمٍ عَظِيمٍ",
      rootLetters: "ي و م | ع ظ م",
      options: [
        { id: "a", text: "For a tremendous day", isCorrect: true },
        { id: "b", text: "For a peaceful day", isCorrect: false },
        { id: "c", text: "For a blessed day", isCorrect: false },
        { id: "d", text: "For a hidden day", isCorrect: false },
      ],
      explanation: "لِيَوْمٍ عَظِيمٍ (Liyawmin 'azim) means 'For a tremendous day,' roots ي-و-م (day) and ع-ظ-م (tremendous).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ' mean?",
      arabic: "كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ",
      rootLetters: "ك ت ب | ف ج ر | س ج ن",
      options: [
        { id: "a", text: "Indeed, the record of the righteous is in 'Illiyyun", isCorrect: false },
        { id: "b", text: "Indeed, the record of the believers is in paradise", isCorrect: false },
        { id: "c", text: "Indeed, the record of the grateful is in heaven", isCorrect: false },
        { id: "d", text: "Indeed, the record of the wicked is in Sijjin", isCorrect: true },
      ],
      explanation: "كَلَّا إِنَّ كِتَابَ الْفُجَّارِ لَفِي سِجِّينٍ (Kalla inna kitaba al-fujjari lafi sijjin) means 'Indeed, the record of the wicked is in Sijjin,' roots ك-ت-ب (record), ف-ج-ر (wicked), س-ج-ن (prison/Sijjin).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'وَمَا أَدْرَاكَ مَا سِجِّينٌ' mean?",
      arabic: "وَمَا أَدْرَاكَ مَا سِجِّينٌ",
      rootLetters: "د ر ي | س ج ن",
      options: [
        { id: "a", text: "And what can make you know what paradise is?", isCorrect: false },
        { id: "b", text: "And what can make you know what heaven is?", isCorrect: false },
        { id: "c", text: "And what can make you know what Sijjin is?", isCorrect: true },
        { id: "d", text: "And what can make you know what 'Illiyyun is?", isCorrect: false },
      ],
      explanation: "وَمَا أَدْرَاكَ مَا سِجِّينٌ (Wa ma adraka ma sijjin) means 'And what can make you know what Sijjin is?' roots د-ر-ي (know) and س-ج-ن (Sijjin).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'كِتَابٌ مَّرْقُومٌ' mean?",
      arabic: "كِتَابٌ مَّرْقُومٌ",
      rootLetters: "ك ت ب | ر ق م",
      options: [
        { id: "a", text: "A hidden book", isCorrect: false },
        { id: "b", text: "A written record", isCorrect: true },
        { id: "c", text: "A sealed book", isCorrect: false },
        { id: "d", text: "A forgotten book", isCorrect: false },
      ],
      explanation: "كِتَابٌ مَّرْقُومٌ (Kitabun marqum) means 'A written record,' roots ك-ت-ب (book/record) and ر-ق-م (written/inscribed).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ' mean?",
      arabic: "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ",
      rootLetters: "و ي ل | ي و م | ك ذ ب",
      options: [
        { id: "a", text: "Blessed that day are the believers", isCorrect: false },
        { id: "b", text: "Peace that day for the righteous", isCorrect: false },
        { id: "c", text: "Woe, that day, to the deniers", isCorrect: true },
        { id: "d", text: "Mercy that day for the repentant", isCorrect: false },
      ],
      explanation: "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ (Waylun yawma'idhin lilmukadhdhibin) means 'Woe, that day, to the deniers,' roots و-ي-ل (woe), ي-و-م (day), ك-ذ-ب (deny).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'الَّذِينَ يُكَذِّبُونَ بِيَوْمِ الدِّينِ' mean?",
      arabic: "الَّذِينَ يُكَذِّبُونَ بِيَوْمِ الدِّينِ",
      rootLetters: "ك ذ ب | ي و م | د ي ن",
      options: [
        { id: "a", text: "Who believe in the Day of Judgment", isCorrect: false },
        { id: "b", text: "Who fear the Day of Judgment", isCorrect: false },
        { id: "c", text: "Who prepare for the Day of Judgment", isCorrect: false },
        { id: "d", text: "Who deny the Day of Judgment", isCorrect: true },
      ],
      explanation: "الَّذِينَ يُكَذِّبُونَ بِيَوْمِ الدِّينِ (Alladhina yukadhdhbuna biyawm ad-din) means 'Who deny the Day of Judgment,' roots ك-ذ-ب (deny), ي-و-م (day), د-ي-ن (judgment/religion).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'وَمَا يُكَذِّبُ بِهِ إِلَّا كُلُّ مُعْتَدٍ أَثِيمٍ' mean?",
      arabic: "وَمَا يُكَذِّبُ بِهِ إِلَّا كُلُّ مُعْتَدٍ أَثِيمٍ",
      rootLetters: "ك ذ ب | ع ت د | أ ث م",
      options: [
        { id: "a", text: "And none deny it except every righteous believer", isCorrect: false },
        { id: "b", text: "And none deny it except every humble servant", isCorrect: false },
        { id: "c", text: "And none deny it except every transgressor, sinful", isCorrect: true },
        { id: "d", text: "And none deny it except every grateful worshipper", isCorrect: false },
      ],
      explanation: "وَمَا يُكَذِّبُ بِهِ إِلَّا كُلُّ مُعْتَدٍ أَثِيمٍ (Wa ma yukadhdhbu bihi illa kullu mu'tadin athim) means 'And none deny it except every transgressor, sinful,' roots ك-ذ-ب (deny), ع-ت-د (transgress), أ-ث-م (sinful).",
    },
    {
      id: "q13",
      question: "What does the Arabic phrase 'إِذَا تُتْلَىٰ عَلَيْهِ آيَاتُنَا قَالَ أَسَاطِيرُ الْأَوَّلِينَ' mean?",
      arabic: "إِذَا تُتْلَىٰ عَلَيْهِ آيَاتُنَا قَالَ أَسَاطِيرُ الْأَوَّلِينَ",
      rootLetters: "ت ل و | أ ي ت | س ط ر | أ و ل",
      options: [
        { id: "a", text: "When Our verses are recited to him, he says 'Legends of the former peoples'", isCorrect: true },
        { id: "b", text: "When Our verses are recited to him, he says 'Truth from Allah'", isCorrect: false },
        { id: "c", text: "When Our verses are recited to him, he says 'Guidance for mankind'", isCorrect: false },
        { id: "d", text: "When Our verses are recited to him, he says 'Wisdom of the ages'", isCorrect: false },
      ],
      explanation: "إِذَا تُتْلَىٰ عَلَيْهِ آيَاتُنَا قَالَ أَسَاطِيرُ الْأَوَّلِينَ (Idha tutla 'alayhi ayatuna qala asatiru al-awwalin) means 'When Our verses are recited to him, he says 'Legends of the former peoples',' roots ت-ل-و (recite), أ-ي-ت (verses), س-ط-ر (legends), أ-و-ل (former).",
    },
    {
      id: "q14",
      question: "What does the Arabic phrase 'كَلَّا ۖ بَلْ ۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُوا يَكْسِبُونَ' mean?",
      arabic: "كَلَّا ۖ بَلْ ۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُوا يَكْسِبُونَ",
      rootLetters: "ر ي ن | ق ل ب | ك س ب",
      options: [
        { id: "a", text: "No! But their hearts have been purified by what they used to earn", isCorrect: false },
        { id: "b", text: "No! But their hearts have been sealed by what they used to earn", isCorrect: true },
        { id: "c", text: "No! But their hearts have been opened by what they used to earn", isCorrect: false },
        { id: "d", text: "No! But their hearts have been cleansed by what they used to earn", isCorrect: false },
      ],
      explanation: "كَلَّا ۖ بَلْ ۜ رَانَ عَلَىٰ قُلُوبِهِم مَّا كَانُوا يَكْسِبُونَ (Kalla bal rana 'ala qulubihim ma kanu yaksibun) means 'No! But their hearts have been sealed by what they used to earn,' roots ر-ي-ن (rust/seal), ق-ل-ب (hearts), ك-س-ب (earn).",
    },
    {
      id: "q15",
      question: "What does the Arabic phrase 'كَلَّا إِنَّهُمْ عَن رَّبِّهِمْ يَوْمَئِذٍ لَّمَحْجُوبُونَ' mean?",
      arabic: "كَلَّا إِنَّهُمْ عَن رَّبِّهِمْ يَوْمَئِذٍ لَّمَحْجُوبُونَ",
      rootLetters: "ر ب ب | ي و م | ح ج ب",
      options: [
        { id: "a", text: "Indeed, they from their Lord that day will be brought near", isCorrect: false },
        { id: "b", text: "Indeed, they from their Lord that day will be veiled", isCorrect: true },
        { id: "c", text: "Indeed, they from their Lord that day will be blessed", isCorrect: false },
        { id: "d", text: "Indeed, they from their Lord that day will be forgiven", isCorrect: false },
      ],
      explanation: "كَلَّا إِنَّهُمْ عَن رَّبِّهِمْ يَوْمَئِذٍ لَّمَحْجُوبُونَ (Kalla innahum 'an rabbihim yawma'idhin lamahjubun) means 'Indeed, they from their Lord that day will be veiled,' roots ر-ب-ب (Lord), ي-و-م (day), ح-ج-ب (veiled).",
    },
    {
      id: "q16",
      question: "What does the Arabic phrase 'ثُمَّ إِنَّهُمْ لَصَالُو الْجَحِيمِ' mean?",
      arabic: "ثُمَّ إِنَّهُمْ لَصَالُو الْجَحِيمِ",
      rootLetters: "ص ل و | ج ح م",
      options: [
        { id: "a", text: "Then indeed, they will enter paradise", isCorrect: false },
        { id: "b", text: "Then indeed, they will burn in hellfire", isCorrect: true },
        { id: "c", text: "Then indeed, they will be in gardens", isCorrect: false },
        { id: "d", text: "Then indeed, they will find peace", isCorrect: false },
      ],
      explanation: "ثُمَّ إِنَّهُمْ لَصَالُو الْجَحِيمِ (Thumma innahum lasalu al-jahim) means 'Then indeed, they will burn in hellfire,' roots ص-ل-و (burn) and ج-ح-م (hellfire).",
    },
    {
      id: "q17",
      question: "What does the Arabic phrase 'كَلَّا إِنَّ كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ' mean?",
      arabic: "كَلَّا إِنَّ كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ",
      rootLetters: "ك ت ب | ب ر ر | ع ل و",
      options: [
        { id: "a", text: "Indeed, the record of the righteous is in 'Illiyyun", isCorrect: true },
        { id: "b", text: "Indeed, the record of the wicked is in Sijjin", isCorrect: false },
        { id: "c", text: "Indeed, the record of the believers is hidden", isCorrect: false },
        { id: "d", text: "Indeed, the record of the disbelievers is in hellfire", isCorrect: false },
      ],
      explanation:  "'كَلَّا إِنَّ كِتَابَ الْأَبْرَارِ لَفِي عِلِّيِّينَ' (Kalla Innal Kitabal Abrara Lafi Illiyuun) means 'Indeed, the record of the righteous is in 'Illiyyun,' roots ب ر ر (righteous) and ج-ح-م (hellfire).",  
    },
    {
      id: "q18",
      question: "What does the Arabic phrase 'وَمَا أَدْرَاكَ مَا عِلِّيُّونَ' mean?",
      arabic: "وَمَا أَدْرَاكَ مَا عِلِّيُّونَ",
      rootLetters: "د ر ي | ع ل و",
      options: [
        { id: "a", text: "And what can make you know what Sijjin is?", isCorrect: false },
        { id: "b", text: "And what can make you know what 'Illiyyun is?", isCorrect: true },
        { id: "c", text: "And what can make you know what paradise is?", isCorrect: false },
        { id: "d", text: "And what can make you know what hellfire is?", isCorrect: false },
      ],
      explanation: "وَمَا أَدْرَاكَ مَا عِلِّيُّونَ (Wa ma adraka ma 'illiyyun) means 'And what can make you know what 'Illiyyun is?' roots د-ر-ي (know) and ع-ل-و ('Illiyyun/elevated).",
    },
    {
      id: "q19",
      question: "What does the Arabic phrase 'يَشْهَدُهُ الْمُقَرَّبُونَ' mean?",
      arabic: "يَشْهَدُهُ الْمُقَرَّبُونَ",
      rootLetters: "ش ه د | ق ر ب",
      options: [
        { id: "a", text: "The distant ones witness it", isCorrect: false },
        { id: "b", text: "The brought-near witness it", isCorrect: true },
        { id: "c", text: "The rejected ones witness it", isCorrect: false },
        { id: "d", text: "The forgotten ones witness it", isCorrect: false },
      ],
      explanation: "يَشْهَدُهُ الْمُقَرَّبُونَ (Yashhaduhu al-muqarrabun) means 'The brought-near witness it,' roots ش-ه-د (witness) and ق-ر-ب (brought near).",
    },
    {
      id: "q20",
      question: "What does the Arabic phrase 'إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ' mean?",
      arabic: "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ",
      rootLetters: "ب ر ر | ن ع م",
      options: [
        { id: "a", text: "Indeed, the righteous are in bliss", isCorrect: true },
        { id: "b", text: "Indeed, the wicked are in punishment", isCorrect: false },
        { id: "c", text: "Indeed, the sinners are in regret", isCorrect: false },
        { id: "d", text: "Indeed, the deniers are in loss", isCorrect: false },
      ],
      explanation: "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ (Inna al-abrara lafi na'im) means 'Indeed, the righteous are in bliss,' roots ب-ر-ر (righteous) and ن-ع-م (bliss).",
    },
    {
      id: "q21",
      question: "What does the Arabic phrase 'عَلَى الْأَرَائِكِ يَنظُرُونَ' mean?",
      arabic: "عَلَى الْأَرَائِكِ يَنظُرُونَ",
      rootLetters: "أ ر ك | ن ظ ر",
      options: [
        { id: "a", text: "On floors, sitting", isCorrect: false },
        { id: "b", text: "On thrones, observing", isCorrect: true },
        { id: "c", text: "In corners, hiding", isCorrect: false },
        { id: "d", text: "In gardens, walking", isCorrect: false },
      ],
      explanation: "عَلَى الْأَرَائِكِ يَنظُرُونَ (Ala al-ara'iki yanzurun) means 'On thrones, observing,' roots أ-ر-ك (thrones/couches) and ن-ظ-ر (observe).",
    },
    {
      id: "q22",
      question: "What does the Arabic phrase 'تَعْرِفُ فِي وُجُوهِهِمْ نَضْرَةَ النَّعِيمِ' mean?",
      arabic: "تَعْرِفُ فِي وُجُوهِهِمْ نَضْرَةَ النَّعِيمِ",
      rootLetters: "ع ر ف | و ج ه | ن ض ر | ن ع م",
      options: [
        { id: "a", text: "You notice in their faces marks of sadness", isCorrect: false },
        { id: "b", text: "You see in their faces signs of worry", isCorrect: false },
        { id: "c", text: "You recognize in their faces the radiance of bliss", isCorrect: true },
        { id: "d", text: "You observe in their faces traces of fear", isCorrect: false },
      ],
      explanation: "تَعْرِفُ فِي وُجُوهِهِمْ نَضْرَةَ النَّعِيمِ (Ta'rifu fi wujuhihim nadrata an-na'im) means 'You recognize in their faces the radiance of bliss,' roots ع-ر-ف (recognize), و-ج-ه (faces), ن-ض-ر (radiance), ن-ع-م (bliss).",
    },
    {
      id: "q23",
      question: "What does the Arabic phrase 'يُسْقَوْنَ مِن رَّحِيقٍ مَّخْتُومٍ' mean?",
      arabic: "يُسْقَوْنَ مِن رَّحِيقٍ مَّخْتُومٍ",
      rootLetters: "س ق ي | ر ح ق | خ ت م",
      options: [
        { id: "a", text: "They are given to drink from sealed nectar", isCorrect: true },
        { id: "b", text: "They are given bitter water to drink", isCorrect: false },
        { id: "c", text: "They are denied any drink", isCorrect: false },
        { id: "d", text: "They are given ordinary water", isCorrect: false },
      ],
      explanation: "يُسْقَوْنَ مِن رَّحِيقٍ مَّخْتُومٍ (Yusqawna min rahiqin makhtum) means 'They are given to drink from sealed nectar,' roots س-ق-ي (give drink), ر-ح-ق (pure wine/nectar), خ-ت-م (sealed).",
    },
    {
      id: "q24",
      question: "What does the Arabic phrase 'خِتَامُهُ مِسْكٌ' mean?",
      arabic: "خِتَامُهُ مِسْكٌ",
      rootLetters: "خ ت م | م س ك",
      options: [
        { id: "a", text: "Its smell is foul", isCorrect: false },
        { id: "b", text: "Its taste is bitter", isCorrect: false },
        { id: "c", text: "Its color is dark", isCorrect: false },
        { id: "d", text: "Its seal is musk", isCorrect: true },
      ],
      explanation: "خِتَامُهُ مِسْكٌ (Khitamuhu misk) means 'Its seal is musk,' roots خ-ت-م (seal) and م-س-ك (musk).",
    },
    {
      id: "q25",
      question: "What does the Arabic phrase 'وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ' mean?",
      arabic: "وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ",
      rootLetters: "ن ف س",
      options: [
        { id: "a", text: "And about this let people doubt", isCorrect: false },
        { id: "b", text: "And from this let people turn away", isCorrect: false },
        { id: "c", text: "And for this let the competitors compete", isCorrect: true },
        { id: "d", text: "And in this let people despair", isCorrect: false },
      ],
      explanation: "وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ (Wa fi dhalika falyatanafasi al-mutanafisun) means 'And for this let the competitors compete,' root ن-ف-س (compete).",
    },
    {
      id: "q26",
      question: "What does the Arabic phrase 'وَمِزَاجُهُ مِن تَسْنِيمٍ' mean?",
      arabic: "وَمِزَاجُهُ مِن تَسْنِيمٍ",
      rootLetters: "م ز ج | س ن م",
      options: [
        { id: "a", text: "And its origin is from clay", isCorrect: false },
        { id: "b", text: "And its source is from earth", isCorrect: false },
        { id: "c", text: "And its mixture is from Tasnim", isCorrect: true },
        { id: "d", text: "And its base is from sand", isCorrect: false },
      ],
      explanation: "وَمِزَاجُهُ مِن تَسْنِيمٍ (Wa mizajuhu min tasnim) means 'And its mixture is from Tasnim,' roots م-ز-ج (mixture) and س-ن-م (Tasnim - a spring in paradise).",
    },
    {
      id: "q27",
      question: "What does the Arabic phrase 'عَيْنًا يَشْرَبُ بِهَا الْمُقَرَّبُونَ' mean?",
      arabic: "عَيْنًا يَشْرَبُ بِهَا الْمُقَرَّبُونَ",
      rootLetters: "ع ي ن | ش ر ب | ق ر ب",
      options: [
        { id: "a", text: "A well from which drink the distant", isCorrect: false },
        { id: "b", text: "A spring from which drink the brought-near", isCorrect: true },
        { id: "c", text: "A river from which drink the rejected", isCorrect: false },
        { id: "d", text: "A lake from which drink the forgotten", isCorrect: false },
      ],
      explanation: "عَيْنًا يَشْرَبُ بِهَا الْمُقَرَّبُونَ (Aynan yashrabu biha al-muqarrabun) means 'A spring from which drink the brought-near,' roots ع-ي-ن (spring), ش-ر-ب (drink), ق-ر-ب (brought near).",
    },
    {
      id: "q28",
      question: "What does the Arabic phrase 'إِنَّ الَّذِينَ أَجْرَمُوا كَانُوا مِنَ الَّذِينَ آمَنُوا يَضْحَكُونَ' mean?",
      arabic: "إِنَّ الَّذِينَ أَجْرَمُوا كَانُوا مِنَ الَّذِينَ آمَنُوا يَضْحَكُونَ",
      rootLetters: "ج ر م | ك و ن | ء م ن | ض ح ك",
      options: [
        { id: "a", text: "Indeed, those who repented used to cry with believers", isCorrect: false },
        { id: "b", text: "Indeed, those who believed used to laugh at the criminals", isCorrect: false },
        { id: "c", text: "Indeed, those who committed crimes used to laugh at those who believed", isCorrect: true },
        { id: "d", text: "Indeed, those who were righteous used to help the sinners", isCorrect: false },
      ],
      explanation: "إِنَّ الَّذِينَ أَجْرَمُوا كَانُوا مِنَ الَّذِينَ آمَنُوا يَضْحَكُونَ (Inna alladhina ajramu kanu mina alladhina amanu yadhakun) means 'Indeed, those who committed crimes used to laugh at those who believed,' roots ج-ر-م (commit crimes), ك-و-ن (were), أ-م-ن (believe), ض-ح-ك (laugh).",
    },
    {
      id: "q29",
      question: "What does the Arabic phrase 'وَإِذَا مَرُّوا بِهِمْ يَتَغَامَزُونَ' mean?",
      arabic: "وَإِذَا مَرُّوا بِهِمْ يَتَغَامَزُونَ",
      rootLetters: "م ر ر | غ م ز",
      options: [
        { id: "a", text: "And when they passed by them, they would offer help", isCorrect: false },
        { id: "b", text: "And when they passed by them, they would bow respectfully", isCorrect: false },
        { id: "c", text: "And when they passed by them, they would greet warmly", isCorrect: false },
        { id: "d", text: "And when they passed by them, they would exchange glances", isCorrect: true },
      ],
      explanation: "وَإِذَا مَرُّوا بِهِمْ يَتَغَامَزُونَ (Wa idha marru bihim yataghamazun) means 'And when they passed by them, they would exchange glances,' roots م-ر-ر (pass) and غ-م-ز (wink/exchange glances mockingly).",
    },
    {
      id: "q30",
      question: "What does the Arabic phrase 'فَالْيَوْمَ الَّذِينَ آمَنُوا مِنَ الْكُفَّارِ يَضْحَكُونَ' mean?",
      arabic: "فَالْيَوْمَ الَّذِينَ آمَنُوا مِنَ الْكُفَّارِ يَضْحَكُونَ",
      rootLetters: "ي و م | ء م ن | ك ف ر | ض ح ك",
      options: [
        { id: "a", text: "So today those who believed are laughing at the disbelievers", isCorrect: true },
        { id: "b", text: "So today those who disbelieved are laughing at the believers", isCorrect: false },
        { id: "c", text: "So today those who believed are crying for the disbelievers", isCorrect: false },
        { id: "d", text: "So today those who disbelieved are seeking the believers", isCorrect: false },
      ],
      explanation: "فَالْيَوْمَ الَّذِينَ آمَنُوا مِنَ الْكُفَّارِ يَضْحَكُونَ (Falyawma alladhina amanu mina al-kuffari yadhakun) means 'So today those who believed are laughing at the disbelievers,' roots ي-و-م (today), أ-م-ن (believe), ك-ف-ر (disbelieve), ض-ح-ك (laugh).",
    },
  ],
};
