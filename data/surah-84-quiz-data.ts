export const alInshiqaqQuizData: SurahQuizData = {
  surahId: 84,
  surahName: "Al-Inshiqaq",
  surahArabicName: "الْإِنشِقَاقُ",
  totalVerses: 25,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Inshiqaq (The Splitting Asunder) is the 84th chapter of the Quran, revealed in Mecca. It vividly describes the cosmic upheavals at the end of times - the splitting of the sky, the stretching and emptying of the earth - and emphasizes humanity's inevitable meeting with Allah. The surah contrasts the fate of the righteous who receive their record in their right hand with joy, versus the wicked who receive theirs behind their back and face the blazing fire, calling people to reflect on Allah's creation and prepare for the certain Day of Judgment.",
  additionalContextElements: [
    {
      title: "Cosmic Signs and the Day of Judgment",
      content: `
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Signs of the Hour and Resurrection Reality</h3>
          <p class="text-purple-700 dark:text-purple-200 mb-3">
            This surah was revealed to address the Meccan disbelievers' denial of resurrection and the afterlife. It presents compelling astronomical and geological signs that will precede the Day of Judgment, making the abstract concept of resurrection tangible through observable cosmic phenomena.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Tafsir Insights</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir explains that "inshiqaq as-sama'" (splitting of the sky) refers to the tearing apart of the heavens on the Day of Judgment, as mentioned in multiple Quranic verses. Al-Tabari notes that the earth "casting out" (alqat) its contents means disgorging the dead for resurrection and emptying itself of its treasures and burdens.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Hadith Evidence</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet ﷺ said: "The sun will be brought near to creation on the Day of Resurrection until it is a mile or two away" (Muslim). He also described the sky splitting: "How can I enjoy life when the angel of the trumpet has put his lips to the horn and is waiting for the order to blow?" (Tirmidhi).
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Sky splitting: Surah Al-Furqan (25:25), Surah Maryam (19:90). Earth's transformation: Surah Az-Zalzalah (99:1-2), Surah Al-Haaqqa (69:14). Meeting Allah: Surah Al-Baqarah (2:46), Surah Al-Kahf (18:110).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Record of Deeds and Divine Justice",
      content: `
        <div class="mt-6 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-100 dark:border-teal-800">
          <h3 class="text-lg font-semibold text-teal-800 dark:text-teal-300 mb-2">Right Hand versus Behind the Back</h3>
          <p class="text-teal-700 dark:text-teal-200 mb-3">
            The surah presents the dramatic contrast between the righteous and the wicked through the symbolism of receiving one's record of deeds. This imagery was particularly powerful for the Meccan Arabs who understood honor and shame through bodily gestures and positioning in their tribal culture.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-teal-700 dark:text-teal-300 mb-1">Tafsir Commentary</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Al-Qurtubi explains that receiving the record "bi yaminih" (in the right hand) symbolizes honor and success, while receiving it "wara'a zahrih" (behind the back) indicates disgrace and failure. Ibn Abbas noted that the left hand will be chained behind the back, forcing the wicked to receive their record awkwardly, symbolizing their shame.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-teal-700 dark:text-teal-300 mb-1">Historical Context</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Revealed during the middle Meccan period when the Prophet ﷺ faced increasing opposition. The vivid imagery served to warn the disbelievers of their inevitable accountability while comforting the early believers who faced persecution for their faith.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-teal-700 dark:text-teal-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Record in right hand: Surah Al-Haaqqa (69:19), Surah Al-Takwir (81:10). Divine reckoning: Surah Al-Ghashiya (88:26), Surah Al-Insan (76:11). Eternal punishment: Surah Al-Layl (92:14-16).
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Al-Inshiqaq, الْإِنشِقَاقُ?",
      arabic: "الْإِنشِقَاقُ",
      rootLetters: "ش ق ق",
      options: [
        { id: "a", text: "The Earthquake", isCorrect: false },
        { id: "b", text: "The Thunder", isCorrect: false },
        { id: "c", text: "The Splitting Asunder", isCorrect: true },
        { id: "d", text: "The Great News", isCorrect: false },
      ],
      explanation: "الْإِنشِقَاقُ (Al-Inshiqaq) means 'The Splitting Asunder,' derived from the root ش-ق-ق, referring to the splitting of the sky on the Day of Judgment.",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'إِذَا السَّمَاءُ انشَقَّتْ' mean?",
      arabic: "إِذَا السَّمَاءُ انشَقَّتْ",
      rootLetters: "س م و | ش ق ق",
      options: [
        { id: "a", text: "When the earth is shaken", isCorrect: false },
        { id: "b", text: "When the sky is split apart", isCorrect: true },
        { id: "c", text: "When the mountains crumble", isCorrect: false },
        { id: "d", text: "When the seas overflow", isCorrect: false },
      ],
      explanation: "إِذَا السَّمَاءُ انشَقَّتْ (Idha as-samau inshaqqat) means 'When the sky is split apart,' roots س-م-و (sky) and ش-ق-ق (split).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ' mean?",
      arabic: "وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ",
      rootLetters: "أ ذ ن | ر ب ب | ح ق ق",
      options: [
        { id: "a", text: "And it disobeyed its Lord and was wrong", isCorrect: false },
        { id: "b", text: "And it questioned its Lord and was answered", isCorrect: false },
        { id: "c", text: "And it forgot its Lord and was lost", isCorrect: false },
        { id: "d", text: "And it listened to its Lord and was fitting", isCorrect: true },
      ],
      explanation: "وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ (Wa adhinat lirabbha wa huqqat) means 'And it listened to its Lord and was fitting,' roots أ-ذ-ن (listen), ر-ب-ب (Lord), ح-ق-ق (fitting/right).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'وَإِذَا الْأَرْضُ مُدَّتْ' mean?",
      arabic: "وَإِذَا الْأَرْضُ مُدَّتْ",
      rootLetters: "أ ر ض | م د د",
      options: [
        { id: "a", text: "And when the earth is destroyed", isCorrect: false },
        { id: "b", text: "And when the earth is stretched out", isCorrect: true },
        { id: "c", text: "And when the earth is hidden", isCorrect: false },
        { id: "d", text: "And when the earth is lifted", isCorrect: false },
      ],
      explanation: "وَإِذَا الْأَرْضُ مُدَّتْ (Wa idha al-ardu muddat) means 'And when the earth is stretched out,' roots أ-ر-ض (earth) and م-د-د (stretched).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ' mean?",
      arabic: "وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ",
      rootLetters: "ل ق ي | خ ل و",
      options: [
        { id: "a", text: "And it casts out what is within it and empties itself", isCorrect: true },
        { id: "b", text: "And it keeps what is within it and fills up", isCorrect: false },
        { id: "c", text: "And it hides what is within it and conceals", isCorrect: false },
        { id: "d", text: "And it protects what is within it and guards", isCorrect: false },
      ],
      explanation: "وَأَلْقَتْ مَا فِيهَا وَتَخَلَّتْ (Wa alqat ma fiha wa takhallat) means 'And it casts out what is within it and empties itself,' roots ل-ق-ي (cast) and خ-ل-و (empty).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'يَا أَيُّهَا الْإِنسَانُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا' mean?",
      arabic: "يَا أَيُّهَا الْإِنسَانُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا",
      rootLetters: "ا ن س | ك د ح | ر ب ب",
      options: [
        { id: "a", text: "O mankind, you are resting toward your Lord comfortably", isCorrect: false },
        { id: "b", text: "O mankind, you are fleeing from your Lord quickly", isCorrect: false },
        { id: "c", text: "O mankind, you are laboring toward your Lord laboriously", isCorrect: true },
        { id: "d", text: "O mankind, you are sleeping toward your Lord peacefully", isCorrect: false },
      ],
      explanation: "يَا أَيُّهَا الْإِنسَانُ إِنَّكَ كَادِحٌ إِلَىٰ رَبِّكَ كَدْحًا (Ya ayyuha al-insanu innaka kadihun ila rabbika kadhan) means 'O mankind, you are laboring toward your Lord laboriously,' roots ا-ن-س (mankind), ك-د-ح (labor), ر-ب-ب (Lord).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ' mean?",
      arabic: "فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ",
      rootLetters: "ا ت ي | ك ت ب | ي م ن",
      options: [
        { id: "a", text: "As for he who is given his record behind his back", isCorrect: false },
        { id: "b", text: "As for he who is given his record in his left hand", isCorrect: false },
        { id: "c", text: "As for he who is given his record on his head", isCorrect: false },
        { id: "d", text: "As for he who is given his record in his right hand", isCorrect: true },
      ],
      explanation: "فَأَمَّا مَنْ أُوتِيَ كِتَابَهُ بِيَمِينِهِ (Fa amma man utiya kitabahu bi yaminih) means 'As for he who is given his record in his right hand,' roots ا-ت-ي (given), ك-ت-ب (record), ي-م-ن (right hand).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا' mean?",
      arabic: "فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا",
      rootLetters: "ح س ب | ي س ر",
      options: [
        { id: "a", text: "He will be given a difficult account", isCorrect: false },
        { id: "b", text: "He will be given a lengthy account", isCorrect: false },
        { id: "c", text: "He will be given an easy account", isCorrect: true },
        { id: "d", text: "He will be given a hidden account", isCorrect: false },
      ],
      explanation: "فَسَوْفَ يُحَاسَبُ حِسَابًا يَسِيرًا (Fasawfa yuhasabu hisaban yasira) means 'He will be given an easy account,' roots ح-س-ب (account) and ي-س-ر (easy).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ وَرَاءَ ظَهْرِهِ' mean?",
      arabic: "وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ وَرَاءَ ظَهْرِهِ",
      rootLetters: "ا ت ي | ك ت ب | و ر ء | ظ ه ر",
      options: [
        { id: "a", text: "And as for he who is given his record in his right hand", isCorrect: false },
        { id: "b", text: "And as for he who is given his record in front of him", isCorrect: false },
        { id: "c", text: "And as for he who is given his record above his head", isCorrect: false },
        { id: "d", text: "And as for he who is given his record behind his back", isCorrect: true },
      ],
      explanation: "وَأَمَّا مَنْ أُوتِيَ كِتَابَهُ وَرَاءَ ظَهْرِهِ (Wa amma man utiya kitabahu wara'a zahrihi) means 'And as for he who is given his record behind his back,' roots ا-ت-ي (given), ك-ت-ب (record), و-ر-ء (behind), ظ-ه-ر (back).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'فَسَوْفَ يَدْعُو ثُبُورًا' mean?",
      arabic: "فَسَوْفَ يَدْعُو ثُبُورًا",
      rootLetters: "د ع و | ث ب ر",
      options: [
        { id: "a", text: "He will call for mercy", isCorrect: false },
        { id: "b", text: "He will call for guidance", isCorrect: false },
        { id: "c", text: "He will call for destruction", isCorrect: true },
        { id: "d", text: "He will call for help", isCorrect: false },
      ],
      explanation: "فَسَوْفَ يَدْعُو ثُبُورًا (Fasawfa yad'u thubura) means 'He will call for destruction,' roots د-ع-و (call) and ث-ب-ر (destruction/ruin).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'إِنَّهُ كَانَ فِي أَهْلِهِ مَسْرُورًا' mean?",
      arabic: "إِنَّهُ كَانَ فِي أَهْلِهِ مَسْرُورًا",
      rootLetters: "ك و ن | ا ه ل | س ر ر",
      options: [
        { id: "a", text: "Indeed, he was among his family sad", isCorrect: false },
        { id: "b", text: "Indeed, he was among his family joyful", isCorrect: true },
        { id: "c", text: "Indeed, he was among his family worried", isCorrect: false },
        { id: "d", text: "Indeed, he was among his family angry", isCorrect: false },
      ],
      explanation: "إِنَّهُ كَانَ فِي أَهْلِهِ مَسْرُورًا (Innahu kana fi ahlihi masrura) means 'Indeed, he was among his family joyful,' roots ك-و-ن (was), ا-ه-ل (family), س-ر-ر (joyful).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'إِنَّهُ ظَنَّ أَن لَّن يَحُورَ' mean?",
      arabic: "إِنَّهُ ظَنَّ أَن لَّن يَحُورَ",
      rootLetters: "ظ ن ن | ح و ر",
      options: [
        { id: "a", text: "Indeed, he thought he would never return", isCorrect: true },
        { id: "b", text: "Indeed, he thought he would always prosper", isCorrect: false },
        { id: "c", text: "Indeed, he thought he would live forever", isCorrect: false },
        { id: "d", text: "Indeed, he thought he would never die", isCorrect: false },
      ],
      explanation: "إِنَّهُ ظَنَّ أَن لَّن يَحُورَ (Innahu zanna an lan yahur) means 'Indeed, he thought he would never return,' roots ظ-ن-ن (thought) and ح-و-ر (return).",
    },
    {
    id: "q13",
    question: "What does the Arabic phrase 'فَلَا أُقْسِمُ بِالشَّفَقِ' mean?",
    arabic: "فَلَا أُقْسِمُ بِالشَّفَقِ",
    rootLetters: "ق س م | ش ف ق",
    options: [
      { id: "a", text: "So I swear by the morning light", isCorrect: false },
      { id: "b", text: "So I swear by the blazing sun", isCorrect: false },
      { id: "c", text: "So I swear by the full moon", isCorrect: false },
      { id: "d", text: "So I swear by the twilight glow", isCorrect: true },
    ],
    explanation: "فَلَا أُقْسِمُ بِالشَّفَقِ (Fala uqsimu bish-shafaq) means 'So I swear by the twilight glow,' roots ق-س-م (swear) and ش-ف-ق (twilight glow).",
  },
  {
    id: "q14",
    question: "What does the Arabic phrase 'وَاللَّيْلِ وَمَا وَسَقَ' mean?",
    arabic: "وَاللَّيْلِ وَمَا وَسَقَ",
    rootLetters: "ل ي ل | و س ق",
    options: [
      { id: "a", text: "And by the day and what it reveals", isCorrect: false },
      { id: "b", text: "And by the night and what it envelops", isCorrect: true },
      { id: "c", text: "And by the dawn and what it brings", isCorrect: false },
      { id: "d", text: "And by the evening and what it hides", isCorrect: false },
    ],
    explanation: "وَاللَّيْلِ وَمَا وَسَقَ (Wallayli wa ma wasaq) means 'And by the night and what it envelops,' roots ل-ي-ل (night) and و-س-ق (envelops/gathers).",
  },
  {
    id: "q15",
    question: "What does the Arabic phrase 'وَالْقَمَرِ إِذَا اتَّسَقَ' mean?",
    arabic: "وَالْقَمَرِ إِذَا اتَّسَقَ",
    rootLetters: "ق م ر | و س ق",
    options: [
      { id: "a", text: "And by the moon when it disappears", isCorrect: false },
      { id: "b", text: "And by the moon when it dims", isCorrect: false },
      { id: "c", text: "And by the moon when it becomes full", isCorrect: true },
      { id: "d", text: "And by the moon when it rises", isCorrect: false },
    ],
    explanation: "وَالْقَمَرِ إِذَا اتَّسَقَ (Walqamari idha ittasaq) means 'And by the moon when it becomes full,' roots ق-م-ر (moon) and و-س-ق (becomes complete/full).",
  },
  {
    id: "q16",
    question: "What does the Arabic phrase 'لَتَرْكَبُنَّ طَبَقًا عَن طَبَقٍ' mean?",
    arabic: "لَتَرْكَبُنَّ طَبَقًا عَن طَبَقٍ",
    rootLetters: "ر ك ب | ط ب ق",
    options: [
      { id: "a", text: "You will surely remain in one state forever", isCorrect: false },
      { id: "b", text: "You will surely experience stage after stage", isCorrect: true },
      { id: "c", text: "You will surely travel in straight lines", isCorrect: false },
      { id: "d", text: "You will surely stay in the same place", isCorrect: false },
    ],
    explanation: "لَتَرْكَبُنَّ طَبَقًا عَن طَبَقٍ (Latarkabunna tabaqan 'an tabaq) means 'You will surely experience stage after stage,' roots ر-ك-ب (experience/ride) and ط-ب-ق (layers/stages).",
  },
  {
    id: "q17",
    question: "What does the Arabic phrase 'فَمَا لَهُمْ لَا يُؤْمِنُونَ' mean?",
    arabic: "فَمَا لَهُمْ لَا يُؤْمِنُونَ",
    rootLetters: "ء م ن",
    options: [
      { id: "a", text: "So why do they always believe?", isCorrect: false },
      { id: "b", text: "So why do they sometimes doubt?", isCorrect: false },
      { id: "c", text: "So what is wrong with them that they do not believe?", isCorrect: true },
      { id: "d", text: "So how do they manage to have faith?", isCorrect: false },
    ],
    explanation: "فَمَا لَهُمْ لَا يُؤْمِنُونَ (Fama lahum la yu'minun) means 'So what is wrong with them that they do not believe?' root ء-م-ن (believe).",
  },
  {
    id: "q18",
    question: "What does the Arabic phrase 'وَإِذَا قُرِئَ عَلَيْهِمُ الْقُرْآنُ لَا يَسْجُدُونَ' mean?",
    arabic: "وَإِذَا قُرِئَ عَلَيْهِمُ الْقُرْآنُ لَا يَسْجُدُونَ",
    rootLetters: "ق ر ء | ق ر ء ن | س ج د",
    options: [
      { id: "a", text: "And when the Quran is recited to them, they do not prostrate", isCorrect: true },
      { id: "b", text: "And when the Quran is recited to them, they always prostrate", isCorrect: false },
      { id: "c", text: "And when the Quran is recited to them, they listen carefully", isCorrect: false },
      { id: "d", text: "And when the Quran is recited to them, they run away", isCorrect: false },
    ],
    explanation: "وَإِذَا قُرِئَ عَلَيْهِمُ الْقُرْآنُ لَا يَسْجُدُونَ (Wa idha quri'a 'alayhimu al-qur'anu la yasjudun) means 'And when the Quran is recited to them, they do not prostrate,' roots ق-ر-ء (recite), ق-ر-ء-ن (Quran), س-ج-د (prostrate).",
  },
  {
    id: "q19",
    question: "What does the Arabic phrase 'بَلِ الَّذِينَ كَفَرُوا يُكَذِّبُونَ' mean?",
    arabic: "بَلِ الَّذِينَ كَفَرُوا يُكَذِّبُونَ",
    rootLetters: "ك ف ر | ك ذ ب",
    options: [
      { id: "a", text: "But those who believe are truthful", isCorrect: false },
      { id: "b", text: "But those who disbelieve are denying", isCorrect: true },
      { id: "c", text: "But those who doubt are seeking", isCorrect: false },
      { id: "d", text: "But those who repent are forgiven", isCorrect: false },
    ],
    explanation: "بَلِ الَّذِينَ كَفَرُوا يُكَذِّبُونَ (Bal alladhina kafaru yukadhdhbun) means 'But those who disbelieve are denying,' roots ك-ف-ر (disbelieve) and ك-ذ-ب (deny/lie).",
  },
  {
    id: "q20",
    question: "What does the Arabic phrase 'وَاللَّهُ أَعْلَمُ بِمَا يُوعُونَ' mean?",
    arabic: "وَاللَّهُ أَعْلَمُ بِمَا يُوعُونَ",
    rootLetters: "ع ل م | و ع ي",
    options: [
      { id: "a", text: "And Allah is unaware of what they hide", isCorrect: false },
      { id: "b", text: "And Allah is confused by what they do", isCorrect: false },
      { id: "c", text: "And Allah is most knowing of what they keep within themselves", isCorrect: true },
      { id: "d", text: "And Allah is pleased with what they reveal", isCorrect: false },
    ],
    explanation: "وَاللَّهُ أَعْلَمُ بِمَا يُوعُونَ (Wallahu a'lamu bima yu'un) means 'And Allah is most knowing of what they keep within themselves,' roots ع-ل-م (know) and و-ع-ي (contain/keep).",
  },
  {
    id: "q21",
    question: "What does the Arabic phrase 'فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ' mean?",
    arabic: "فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ",
    rootLetters: "ب ش ر | ع ذ ب | ا ل م",
    options: [
      { id: "a", text: "So give them good tidings of a painful punishment", isCorrect: true },
      { id: "b", text: "So give them hope of divine mercy", isCorrect: false },
      { id: "c", text: "So promise them eternal peace", isCorrect: false },
      { id: "d", text: "So assure them of complete forgiveness", isCorrect: false },
    ],
    explanation: "فَبَشِّرْهُم بِعَذَابٍ أَلِيمٍ (Fabashshirhum bi'adhabin alim) means 'So give them good tidings of a painful punishment,' roots ب-ش-ر (give tidings), ع-ذ-ب (punishment), ا-ل-م (painful).",
  },
  {
    id: "q22",
    question: "What does the Arabic phrase 'إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ' mean?",
    arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ",
    rootLetters: "ء م ن | ع م ل | ص ل ح",
    options: [
      { id: "a", text: "Except those who disbelieved and did evil", isCorrect: false },
      { id: "b", text: "Except those who doubted and were confused", isCorrect: false },
      { id: "c", text: "Except those who believed and did righteous deeds", isCorrect: true },
      { id: "d", text: "Except those who turned away and were heedless", isCorrect: false },
    ],
    explanation: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ (Illa alladhina amanu wa 'amilu as-salihat) means 'Except those who believed and did righteous deeds,' roots ء-م-ن (believe), ع-م-ل (do/work), ص-ل-ح (righteous).",
  },
  {
    id: "q23",
    question: "What does the Arabic phrase 'لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ' mean?",
    arabic: "لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
    rootLetters: "ا ج ر | غ ي ر | م ن ن",
    options: [
      { id: "a", text: "For them is a reward that is limited", isCorrect: false },
      { id: "b", text: "For them is a punishment that is severe", isCorrect: false },
      { id: "c", text: "For them is a test that is difficult", isCorrect: false },
      { id: "d", text: "For them is a reward uninterrupted", isCorrect: true },
    ],
    explanation: "لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ (Lahum ajrun ghayru mamnun) means 'For them is a reward uninterrupted,' roots ا-ج-ر (reward), غ-ي-ر (other than), م-ن-ن (cut off/interrupted).",
  },
  {
    id: "q24",
    question: "What is the final message that Surah Al-Inshiqaq concludes with regarding the believers?",
    arabic: "لَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
    rootLetters: "ا ج ر | م ن ن",
    options: [
      { id: "a", text: "They will face trials in this world", isCorrect: false },
      { id: "b", text: "They will be tested with hardships", isCorrect: false },
      { id: "c", text: "They will receive guidance in dreams", isCorrect: false },
      { id: "d", text: "They will receive an eternal, unending reward", isCorrect: true },
    ],
    explanation: "The surah concludes with the promise that those who believe and do righteous deeds will receive 'أَجْرٌ غَيْرُ مَمْنُونٍ' (ajrun ghayru mamnun) - an uninterrupted, eternal reward from Allah, contrasting with the temporary pleasures of this world.",
  },
  ],
};
