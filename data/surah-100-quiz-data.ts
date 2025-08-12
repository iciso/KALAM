export const alAdiyatQuizData: SurahQuizData = {
  surahId: 100,
  surahName: "Al-'Adiyat",
  surahArabicName: "العاديات",
  totalVerses: 11,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-'Adiyat (The Courser) is the 100th chapter of the Quran, revealed in Mecca. It begins with powerful oaths sworn by charging war horses, depicting their vigor and dedication in battle, to contrast with human ingratitude towards Allah despite His abundant blessings. The surah criticizes mankind's intense love for worldly wealth and serves as a stark reminder of the Day of Judgment, when the contents of graves will be scattered and the secrets of hearts revealed, with Allah fully aware of all deeds.",
  additionalContextElements: [
    {
      title: "The Oaths by the Charging Horses",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Swearing by War Horses</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The surah opens with oaths by horses used in Jihad, describing their panting breaths, striking sparks with hooves, raiding at dawn, raising dust, and penetrating enemy ranks. These vivid images highlight the horses' loyalty and sacrifice, contrasting with human behavior.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains that these verses refer to horses in the way of Allah, with scholars like Ibn Abbas and Mujahid affirming the context of Jihad raids, emphasizing the morning attacks to surprise the enemy.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Human Ingratitude and Accountability",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Man's Ungratefulness</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The surah condemns humanity's ingratitude (kanud) towards Allah, intense love for wealth, and warns of the Resurrection when graves are overturned and hearts' contents exposed, with Allah as the All-Aware.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Consequences of Ingratitude</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              According to Tafsir Al-Jalalayn, 'kanud' signifies extreme ingratitude, where man acknowledges blessings only in prosperity but denies them in adversity, leading to accountability on Judgment Day.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Prophetic Guidance</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              A hadith in Tafsir Ibn Kathir narrates that the Prophet Muhammad ﷺ performed raids at dawn, listening for the Adhan to decide on attack, aligning with the surah's description of morning charges.
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Al-'Adiyat, العاديات?",
      arabic: "العاديات",
      rootLetters: "ع د و",
      options: [
        { id: "a", text: "The Calamity", isCorrect: false },
        { id: "b", text: "The Chargers", isCorrect: true },
        { id: "c", text: "The Time", isCorrect: false },
        { id: "d", text: "The Rivalry", isCorrect: false },
      ],
      explanation: "العاديات (Al-'Adiyat) means 'The Chargers' or 'The Coursers,' derived from the root ع-د-و, referring to horses running or charging in battle.",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'ضَبْحًا' mean in the context of the surah?",
      arabic: "ضَبْحًا",
      rootLetters: "ض ب ح",
      options: [
        { id: "a", text: "Striking sparks", isCorrect: false },
        { id: "b", text: "Raising dust", isCorrect: false },
        { id: "c", text: "Panting breaths", isCorrect: true },
        { id: "d", text: "Raiding at dawn", isCorrect: false },
      ],
      explanation: "ضَبْحًا (dabha) means 'panting breaths,' describing the horses' sounds while charging, from the root ض-ب-ح.",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'فَالْمُورِيَاتِ قَدْحًا' mean?",
      arabic: "فَالْمُورِيَاتِ قَدْحًا",
      rootLetters: "و ر ي | ق د ح",
      options: [
        { id: "a", text: "And the chargers at dawn", isCorrect: false },
        { id: "b", text: "And the producers of sparks striking", isCorrect: true },
        { id: "c", text: "And raising dust thereby", isCorrect: false },
        { id: "d", text: "And penetrating as one", isCorrect: false },
      ],
      explanation: "فَالْمُورِيَاتِ قَدْحًا (fal-muriyati qadha) means 'and the producers of sparks [when] striking,' referring to horses' hooves on rocks, roots و-ر-ي (ignite) and ق-د-ح (strike).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'فَالْمُغِيرَاتِ صُبْحًا' mean?",
      arabic: "فَالْمُغِيرَاتِ صُبْحًا",
      rootLetters: "غ و ر | ص ب ح",
      options: [
        { id: "a", text: "And the racers panting", isCorrect: false },
        { id: "b", text: "And striking sparks", isCorrect: false },
        { id: "c", text: "And raising dust", isCorrect: false },
        { id: "d", text: "And the chargers at dawn", isCorrect: true },
      ],
      explanation: "فَالْمُغِيرَاتِ صُبْحًا (fal-mughirati subha) means 'and the chargers at dawn,' describing raids in the morning, roots غ-و-ر (raid) and ص-ب-ح (morning).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'فَأَثَرْنَ بِهِ نَقْعًا' mean?",
      arabic: "فَأَثَرْنَ بِهِ نَقْعًا",
      rootLetters: "ث و ر | ن ق ع",
      options: [
        { id: "a", text: "Penetrating the enemy", isCorrect: false },
        { id: "b", text: "Striking at dawn", isCorrect: false },
        { id: "c", text: "Raising dust thereby", isCorrect: true },
        { id: "d", text: "Panting while running", isCorrect: false },
      ],
      explanation: "فَأَثَرْنَ بِهِ نَقْعًا (fa-atharna bihi naq'a) means 'raising dust thereby,' from the horses' movement, roots ث-و-ر (stir up) and ن-ق-ع (dust).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'فَوَسَطْنَ بِهِ جَمْعًا' mean?",
      arabic: "فَوَسَطْنَ بِهِ جَمْعًا",
      rootLetters: "و س ط | ج م ع",
      options: [
        { id: "a", text: "Raising dust in battle", isCorrect: false },
        { id: "b", text: "Penetrating as one into the midst", isCorrect: true },
        { id: "c", text: "Charging at dawn", isCorrect: false },
        { id: "d", text: "Striking sparks", isCorrect: false },
      ],
      explanation: "فَوَسَطْنَ بِهِ جَمْعًا (fa-wasatna bihi jam'a) means 'penetrating as one into the midst,' of the enemy, roots و-س-ط (middle) and ج-م-ع (gather).",
    },
    {
      id: "q7",
      question: "What does the Arabic word 'لَكَنُودٌ' mean in the surah?",
      arabic: "لَكَنُودٌ",
      rootLetters: "ك ن د",
      options: [
        { id: "a", text: "Grateful", isCorrect: false },
        { id: "b", text: "Patient", isCorrect: false },
        { id: "c", text: "Ungrateful", isCorrect: true },
        { id: "d", text: "Generous", isCorrect: false },
      ],
      explanation: "لَكَنُودٌ (la-kanud) means 'ungrateful,' describing man's attitude towards his Lord, from the root ك-ن-د.",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'لَشَهِيدٌ' mean in the context of the ayah?",
      arabic: "لَشَهِيدٌ",
      rootLetters: "ش ه د",
      options: [
        { id: "a", text: "A denier", isCorrect: false },
        { id: "b", text: "A witness", isCorrect: true },
        { id: "c", text: "A forgetful one", isCorrect: false },
        { id: "d", text: "A believer", isCorrect: false },
      ],
      explanation: "لَشَهِيدٌ (la-shahid) means 'a witness,' referring to man or Allah witnessing the ingratitude, from the root ش-ه-د.",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'لِحُبِّ الْخَيْرِ لَشَدِيدٌ' mean?",
      arabic: "لِحُبِّ الْخَيْرِ لَشَدِيدٌ",
      rootLetters: "ح ب ب | خ ي ر | ش د د",
      options: [
        { id: "a", text: "Intense in love for wealth", isCorrect: true },
        { id: "b", text: "Moderate in charity", isCorrect: false },
        { id: "c", text: "Indifferent to blessings", isCorrect: false },
        { id: "d", text: "Weak in faith", isCorrect: false },
      ],
      explanation: "لِحُبِّ الْخَيْرِ لَشَدِيدٌ (li-hubbil-khayri la-shadid) means 'intense in love for wealth,' where 'khayr' here means wealth, roots ح-ب-ب (love), خ-ي-ر (good/wealth), ش-د-د (intense).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'بُعْثِرَ مَا فِي الْقُبُورِ' mean?",
      arabic: "بُعْثِرَ مَا فِي الْقُبُورِ",
      rootLetters: "ب ع ث ر | ق ب ر",
      options: [
        { id: "a", text: "When hearts are exposed", isCorrect: false },
        { id: "b", text: "When graves are scattered", isCorrect: true },
        { id: "c", text: "When wealth is counted", isCorrect: false },
        { id: "d", text: "When horses charge", isCorrect: false },
      ],
      explanation: "بُعْثِرَ مَا فِي الْقُبُورِ (bu'thira ma fil-qubur) means 'when the contents of the graves are scattered,' on Judgment Day, roots ب-ع-ث-ر (scatter) and ق-ب-ر (graves).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'وَحُصِّلَ مَا فِي الصُّدُورِ' mean?",
      arabic: "وَحُصِّلَ مَا فِي الصُّدُورِ",
      rootLetters: "ح ص ل | ص د ر",
      options: [
        { id: "a", text: "And deeds are weighed", isCorrect: false },
        { id: "b", text: "And graves are opened", isCorrect: false },
        { id: "c", text: "And what is in the breasts is obtained", isCorrect: true },
        { id: "d", text: "And wealth is distributed", isCorrect: false },
      ],
      explanation: "وَحُصِّلَ مَا فِي الصُّدُورِ (wa-hussila ma fis-sudur) means 'and what is in the breasts is obtained,' revealing secrets of hearts, roots ح-ص-ل (obtain) and ص-د-ر (breasts).",
    },
    {
      id: "q12",
      question: "What does the Arabic word 'لَّخَبِيرٌ' mean in the final ayah?",
      arabic: "لَّخَبِيرٌ",
      rootLetters: "خ ب ر",
      options: [
        { id: "a", text: "All-Merciful", isCorrect: false },
        { id: "b", text: "All-Forgiving", isCorrect: false },
        { id: "c", text: "All-Powerful", isCorrect: false },
        { id: "d", text: "All-Aware", isCorrect: true },
      ],
      explanation: "لَّخَبِيرٌ (la-khabir) means 'All-Aware,' describing Allah's knowledge on that Day, from the root خ-ب-ر.",
    },
  ],
};
