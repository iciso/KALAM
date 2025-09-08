export const alFajrQuizData: SurahQuizData = {
  surahId: 89,
  surahName: "Al-Fajr",
  surahArabicName: "الفجر",
  totalVerses: 30,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Fajr (The Dawn) is the 89th chapter of the Quran, revealed in Mecca. It affirms the reality of the Hereafter, warns against arrogance, excessive love for wealth, and oppression of the poor by recounting the destruction of ancient civilizations like 'Ad, Thamud, and Pharaoh. The surah highlights human ingratitude and concludes with the promise of Paradise for the righteous souls who return to their Lord well-pleased and pleasing.",
  additionalContextElements: [
    {
      title: "Oaths and Destruction of Past Nations",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Divine Oaths and Warnings Through History</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The surah begins with oaths by the dawn, the ten nights (first ten of Dhul-Hijjah), the even and the odd, and the night as it passes, to emphasize Allah's watchfulness and the certainty of accountability. It recounts the destruction of 'Ad (with Iram of the pillars), Thamud (who carved rocks in the valley), and Pharaoh (of the stakes) for their tyranny and disbelief.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains the oaths: 'Al-Fajr' as dawn, 'ten nights' as the first ten of Dhul-Hijjah, 'even and odd' possibly referring to creation in pairs and Allah's oneness, and the night symbolizing time's passage. The destruction stories illustrate how Allah pours torment on corrupt nations.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Reasons for Revelation and Historical Context</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Revealed in early Mecca when persecution of new Muslims began, opposing the Quraysh's arrogance and tyranny. It counters disbelievers who boasted wealth and oppressed the poor, urging awakening to faith amid growing opposition to the Prophet ﷺ.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Destruction of nations: Surah Al-A'raf (7:65-93) for 'Ad and Thamud; Surah Yunus (10:75-92) for Pharaoh. Oaths and signs: Surah Ad-Duha (93:1-2) for dawn and night.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Human Ingratitude and the Hereafter",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Man's Behavior and Eternal Rewards</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The surah criticizes man's hasty reactions to trials—boasting in honor and complaining in hardship—while neglecting orphans and the poor due to love for wealth. It warns of the Day when graves are overturned and hearts exposed, concluding with the serene soul's entry into Paradise.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Al-Jalalayn notes man's ingratitude: interpreting blessings as honor and trials as disgrace. Ibn Kathir adds that on Judgment Day, no regrets will help, and righteous souls will be invited to Paradise.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Prophetic Guidance and Hadith</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ubayy ibn Ka'b narrated that the Prophet ﷺ said: Reciting Surah Al-Fajr in the ten nights forgives sins; otherwise, it provides light on Judgment Day. Masruq and Muhammad bin Ka'b relate 'Al-Fajr' to the Day of Sacrifice.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Human ingratitude: Surah Al-'Adiyat (100:6-8). Hereafter and souls: Surah Al-Waqi'ah (56:7-10); Surah Az-Zumar (39:73-75) for entry into Paradise.
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Al-Fajr, الفجر?",
      arabic: "الفجر",
      rootLetters: "ف ج ر",
      options: [
        { id: "a", text: "The Night", isCorrect: false },
        { id: "b", text: "The City", isCorrect: false },
        { id: "c", text: "The Dawn", isCorrect: true },
        { id: "d", text: "The Time", isCorrect: false },
      ],
      explanation: "الفجر (Al-Fajr) means 'The Dawn,' derived from the root ف-ج-ر, referring to the break of day.",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'وَلَيَالٍ عَشْرٍ' mean?",
      arabic: "وَلَيَالٍ عَشْرٍ",
      rootLetters: "ل ي ل | ع ش ر",
      options: [
        { id: "a", text: "And the even and the odd", isCorrect: false },
        { id: "b", text: "And the dawn", isCorrect: false },
        { id: "c", text: "And the night when it passes", isCorrect: false },
        { id: "d", text: "And ten nights", isCorrect: true },
      ],
      explanation: "وَلَيَالٍ عَشْرٍ (wa layalin 'ashr) means 'and ten nights,' referring to the first ten of Dhul-Hijjah, roots ل-ي-ل (night) and ع-ش-ر (ten).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'وَالشَّفْعِ وَالْوَتْرِ' mean?",
      arabic: "وَالشَّفْعِ وَالْوَتْرِ",
      rootLetters: "ش ف ع | و ت ر",
      options: [
        { id: "a", text: "And the even and the odd", isCorrect: true },
        { id: "b", text: "And the dawn and the night", isCorrect: false },
        { id: "c", text: "And ten nights", isCorrect: false },
        { id: "d", text: "And the night when it departs", isCorrect: false },
      ],
      explanation: "وَالشَّفْعِ وَالْوَتْرِ (wash-shaf'i wal-watr) means 'and the even and the odd,' roots ش-ف-ع (even) and و-ت-ر (odd).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'وَاللَّيْلِ إِذَا يَسْرِ' mean?",
      arabic: "وَاللَّيْلِ إِذَا يَسْرِ",
      rootLetters: "ل ي ل | س ر ي",
      options: [
        { id: "a", text: "And the dawn when it breaks", isCorrect: false },
        { id: "b", text: "And the night when it passes", isCorrect: true },
        { id: "c", text: "And the even when it pairs", isCorrect: false },
        { id: "d", text: "And the odd when it stands", isCorrect: false },
      ],
      explanation: "وَاللَّيْلِ إِذَا يَسْرِ (wal-layli idha yasr) means 'and the night when it passes,' roots ل-ي-ل (night) and س-ر-ي (pass/depart).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'إِرَمَ ذَاتِ الْعِمَادِ' refer to?",
      arabic: "إِرَمَ ذَاتِ الْعِمَادِ",
      rootLetters: "ع م د",
      options: [
        { id: "a", text: "Thamud who carved the rocks", isCorrect: false },
        { id: "b", text: "Pharaoh of the stakes", isCorrect: false },
        { id: "c", text: "Ad of the valley", isCorrect: false },
        { id: "d", text: "Iram of the pillars", isCorrect: true },
      ],
      explanation: "إِرَمَ ذَاتِ الْعِمَادِ (Irama dhati al-'imad) refers to 'Iram of the pillars,' associated with 'Ad, root ع-م-د (pillar).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'الَّذِينَ جَابُوا الصَّخْرَ بِالْوَادِ' mean?",
      arabic: "الَّذِينَ جَابُوا الصَّخْرَ بِالْوَادِ",
      rootLetters: "ج و ب | ص خ ر | و د ي",
      options: [
        { id: "a", text: "Who built pillars in the land", isCorrect: false },
        { id: "b", text: "Who raised high structures", isCorrect: false },
        { id: "c", text: "Who carved the rocks in the valley", isCorrect: true },
        { id: "d", text: "Who possessed the stakes", isCorrect: false },
      ],
      explanation: "الَّذِينَ جَابُوا الصَّخْرَ بِالْوَادِ (alladhina jabu as-sakhra bil-wad) means 'who carved the rocks in the valley,' referring to Thamud, roots ج-و-ب (carve), ص-خ-ر (rock), و-د-ي (valley).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'ذِي الْأَوْتَادِ' mean?",
      arabic: "ذِي الْأَوْتَادِ",
      rootLetters: "و ت د",
      options: [
        { id: "a", text: "Of the pillars", isCorrect: false },
        { id: "b", text: "Of the valley", isCorrect: false },
        { id: "c", text: "Of the rocks", isCorrect: false },
        { id: "d", text: "Of the stakes", isCorrect: true },
      ],
      explanation: "ذِي الْأَوْتَادِ (dhi al-awtad) means 'of the stakes,' referring to Pharaoh, root و-ت-د (stake/peg).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'فَأَمَّا الْإِنسَانُ إِذَا مَا ابْتَلَاهُ رَبُّهُ' mean?",
      arabic: "فَأَمَّا الْإِنسَانُ إِذَا مَا ابْتَلَاهُ رَبُّهُ",
      rootLetters: "أ ن س | ب ل و | ر ب ب",
      options: [
        { id: "a", text: "As for man, when his Lord tries him", isCorrect: true },
        { id: "b", text: "As for man, when his Lord honors him", isCorrect: false },
        { id: "c", text: "As for man, when his Lord disgraces him", isCorrect: false },
        { id: "d", text: "As for man, when his Lord rewards him", isCorrect: false },
      ],
      explanation: "فَأَمَّا الْإِنسَانُ إِذَا مَا ابْتَلَاهُ رَبُّهُ (Fa amma al-insanu idha ma ibtalahu rabbuhu) means 'As for man, when his Lord tries him,' roots أ-ن-س (man), ب-ل-و (try/test), ر-ب-ب (Lord).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'لَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ' mean?",
      arabic: "لَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ",
      rootLetters: "ح ض ض | ط ع م | س ك ن",
      options: [
        { id: "a", text: "Does not care for the orphan", isCorrect: false },
        { id: "b", text: "Does not urge feeding the poor", isCorrect: true },
        { id: "c", text: "Does not inherit wealth", isCorrect: false },
        { id: "d", text: "Does not hoard treasures", isCorrect: false },
      ],
      explanation: "لَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ (la yahuddu 'ala ta'ami al-miskin) means 'does not urge feeding the poor,' roots ح-ض-ض (urge), ط-ع-م (food), س-ك-ن (poor).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'كَلَّا بَل لَّا تُكْرِمُونَ الْيَتِيمَ' mean?",
      arabic: "كَلَّا بَل لَّا تُكْرِمُونَ الْيَتِيمَ",
      rootLetters: "ك ر م | ي ت م",
      options: [
        { id: "a", text: "No, but you do not feed the poor", isCorrect: false },
        { id: "b", text: "No, but you do not urge the feeding", isCorrect: false },
        { id: "c", text: "No, but you do not honor the orphan", isCorrect: true },
        { id: "d", text: "No, but you do not love wealth", isCorrect: false },
      ],
      explanation: "كَلَّا بَل لَّا تُكْرِمُونَ الْيَتِيمَ (Kalla bal la tukrimuna al-yatim) means 'No, but you do not honor the orphan,' roots ك-ر-م (honor) and ي-ت-م (orphan).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ' mean?",
      arabic: "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ",
      rootLetters: "ن ف س | ط م أ",
      options: [
        { id: "a", text: "O the rebellious soul", isCorrect: false },
        { id: "b", text: "O the serene soul", isCorrect: true },
        { id: "c", text: "O the ungrateful soul", isCorrect: false },
        { id: "d", text: "O the complaining soul", isCorrect: false },
      ],
      explanation: "يَا أَيَّتُهَا النَّفْسُ الْمُطْمَئِنَّةُ (Ya ayyatuha an-nafsu al-mutma'innah) means 'O the serene soul,' roots ن-ف-س (soul) and ط-م-أ (serene/assured).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً' mean?",
      arabic: "ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً",
      rootLetters: "ر ج ع | ر ب ب | ر ض و",
      options: [
        { id: "a", text: "Enter among My servants", isCorrect: false },
        { id: "b", text: "Enter My Paradise", isCorrect: false },
        { id: "c", text: "Return to your Lord, well-pleased and pleasing", isCorrect: true },
        { id: "d", text: "Depart from your Lord, displeased", isCorrect: false },
      ],
      explanation: "ارْجِعِي إِلَىٰ رَبِّكِ رَاضِيَةً مَّرْضِيَّةً (Irji'i ila rabbiki radiyatan mardiyyah) means 'Return to your Lord, well-pleased and pleasing,' roots ر-ج-ع (return), ر-ب-ب (Lord), ر-ض-و (pleased).",
    },
  ],
};
