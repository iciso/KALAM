export const alBayyinahQuizData: SurahQuizData = {
  surahId: 98,
  surahName: "Al-Bayyinah",
  surahArabicName: "البينة",
  totalVerses: 8,
  type: "Medinan",
  difficulty: "Intermediate",
  introduction:
    "Surah Al-Bayyinah (The Clear Proof) establishes the truth of Islam as the final revelation and distinguishes between believers and disbelievers. It emphasizes the importance of sincere worship and righteous deeds, warning of the consequences for those who reject the clear signs.",
        additionalContextElements: [
    {
      title: "The Clear Proof",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Divine Revelation as Guidance</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The surah opens by highlighting that the People of the Book (Jews and Christians) and polytheists would not abandon their ways until they received the "Bayyinah" (clear proof)—the Quran and the Prophet Muhammad (ﷺ). This proof separates truth from falsehood decisively.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir explains that "Bayyinah" refers to the undeniable evidence of the Quran’s divine origin and the Prophet’s mission, which left no excuse for rejection. The surah rebukes those who demanded miracles while ignoring this ultimate proof.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Eternal Criterion",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Reward of the Righteous</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The surah concludes by describing the eternal reward of the righteous: Gardens of Paradise beneath which rivers flow, where they will abide forever, pleasing to Allah. This is contrasted with the fate of disbelievers, who will face the Hellfire.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Key Theme</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Al-Jalalayn notes that the surah’s closing verses underscore the absolute justice of Allah—rewarding sincerity and punishing obstinacy. The "Bayyinah" thus serves as the eternal criterion for this judgment.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Prophetic Connection</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              A hadith in Sahih Muslim states that the Prophet (ﷺ) said, <span class="arabic">"مَنْ قَرَأَ سُورَةَ الْبَيِّنَةِ كَانَ شَهِيدًا يَوْمَ الْقِيَامَةِ"</span> ("Whoever recites Surah Al-Bayyinah will be a witness on the Day of Resurrection"). This reflects its weight in affirming the truth.
            </p>
          </div>
        </div>
      `,
    },
  ],  
questions: [
    {
      id: "q1",
      question: "What does the Arabic term الْبَيِّنَةُ in the surah's title refer to?",
      arabic: "الْبَيِّنَةُ",
      rootLetters: "ب ي ن",
      options: [
        { id: "a", text: "The Quran", isCorrect: false },
        { id: "b", text: "The Clear Proof", isCorrect: true },
        { id: "c", text: "The Prophet", isCorrect: false },
        { id: "d", text: "The Hereafter", isCorrect: false },
      ],
      explanation: "الْبَيِّنَةُ means 'The Clear Proof' (root: ب-ي-ن), referring to the undeniable evidence of Islam's truth.",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ mean?",
      arabic: "لَمْ يَكُنِ الَّذِينَ كَفَرُوا مِنْ أَهْلِ الْكِتَابِ وَالْمُشْرِكِينَ مُنفَكِّينَ",
      rootLetters: "ك ف ر | ك ت ب | ش ر ك | ف ك ك",
      options: [
        { id: "a", text: "Disbelievers were united", isCorrect: false },
        { id: "b", text: "Disbelievers were not separate", isCorrect: true },
        { id: "c", text: "Disbelievers were righteous", isCorrect: false },
        { id: "d", text: "Disbelievers were few", isCorrect: false },
      ],
      explanation: "This phrase means 'the disbelievers were not separated' from their ways until the Clear Proof came (roots: ك-ف-ر, ك-ت-ب, ش-ر-ك, ف-ك-ك).",
    },
    {
      id: "q3",
      question: "What does the Arabic word مُنفَكِّينَ in ayah 1 imply about disbelievers?",
      arabic: "مُنفَكِّينَ",
      rootLetters: "ف ك ك",
      options: [
        { id: "a", text: "They were increasing", isCorrect: false },
        { id: "b", text: "They were decreasing", isCorrect: false },
        { id: "c", text: "They were persisting", isCorrect: true },
        { id: "d", text: "They were repenting", isCorrect: false },
      ],
      explanation: "مُنفَكِّينَ means 'ceasing' or 'separating', indicating they persisted in disbelief (root: ف-ك-ك).",
    },
    {
      id: "q4",
      question: "Whom does the Arabic term رَسُولٌ مِّنَ اللَّهِ refer to in the surah?",
      arabic: "رَسُولٌ مِّنَ اللَّهِ",
      rootLetters: "ر س ل | ل ه",
      options: [
        { id: "a", text: "Angel Gabriel", isCorrect: false },
        { id: "b", text: "Previous prophets", isCorrect: false },
        { id: "c", text: "The Quran", isCorrect: false },
        { id: "d", text: "The Prophet Muhammad (ﷺ)", isCorrect: true },
      ],
      explanation: "رَسُولٌ مِّنَ اللَّهِ refers to Prophet Muhammad (ﷺ) as Allah's Messenger (roots: ر-س-ل, ل-ه).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase صُحُفًا مُّطَهَّرَةً describe?",
      arabic: "صُحُفًا مُّطَهَّرَةً",
      rootLetters: "ص ح ف | ط ه ر",
      options: [
        { id: "a", text: "Purified scriptures", isCorrect: true },
        { id: "b", text: "Pure records of deeds", isCorrect: false },
        { id: "c", text: "Clean clothing", isCorrect: false },
        { id: "d", text: "Sacred places", isCorrect: false },
      ],
      explanation: "صُحُفًا مُّطَهَّرَةً means 'purified scriptures' (roots: ص-ح-ف, ط-ه-ر).",
    },
    {
      id: "q6",
      question: "What does the Arabic word الْقِيَمَةِ in ayah 3 signify about the scriptures?",
      arabic: "الْقِيَمَةِ",
      rootLetters: "ق و م",
      options: [
        { id: "a", text: "Ancient or Old", isCorrect: false },
        { id: "b", text: "Lengthy or Voluminous", isCorrect: false },
        { id: "c", text: "Straight or Correct", isCorrect: true },
        { id: "d", text: "Temporary or Transient", isCorrect: false },
      ],
      explanation: "الْقِيَمَةِ means 'upright' or 'straight' or 'correct' (root: ق-و-م), describing the scriptures' authenticity.",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase وَمَا تَفَرَّقَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِن بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَةُ indicate?",
      arabic: "وَمَا تَفَرَّقَ الَّذِينَ أُوتُوا الْكِتَابَ إِلَّا مِن بَعْدِ مَا جَاءَتْهُمُ الْبَيِّنَةُ",
      rootLetters: "ف ر ق | أ ت ي | ك ت ب | ب ي ن",
      options: [
        { id: "a", text: "They united after the Proof", isCorrect: false },
        { id: "b", text: "They divided only after the Proof", isCorrect: true },
        { id: "c", text: "They accepted the Proof", isCorrect: false },
        { id: "d", text: "They ignored the Proof", isCorrect: false },
      ],
      explanation: "This phrase means 'the People of the Book divided only after the Clear Proof came' (roots: ف-ر-ق, أ-ت-ي, ك-ت-ب, ب-ي-ن).",
    },
    {
      id: "q8",
      question: "What does the Arabic term حُنَفَاءَ in ayah 5 describe about true worship?",
      arabic: "حُنَفَاءَ",
      rootLetters: "ح ن ف",
      options: [
        { id: "a", text: "Collectively", isCorrect: false },
        { id: "b", text: "Occasionally", isCorrect: false },
        { id: "c", text: "Publicly", isCorrect: false },
        { id: "d", text: "Sincerely upright", isCorrect: true },
      ],
      explanation: "حُنَفَاءَ means 'sincerely upright' in worship (root: ح-ن-ف), free from shirk.",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ emphasize?",
      arabic: "وَيُقِيمُوا الصَّلَاةَ وَيُؤْتُوا الزَّكَاةَ",
      rootLetters: "ق و م | ص ل و | أ ت ي | ز ك و",
      options: [
        { id: "a", text: "Charity only", isCorrect: false },
        { id: "b", text: "Prayer only", isCorrect: false },
        { id: "c", text: "Both pillars of Islam", isCorrect: true },
        { id: "d", text: "Fasting", isCorrect: false },
      ],
      explanation: "This phrase commands establishing prayer (الصَّلَاةَ) and giving zakah (الزَّكَاةَ) (roots: ق-و-م, ص-ل-و, أ-ت-ي, ز-ك-و).",
    },
    {
      id: "q10",
      question: "What does the Arabic word الْفَاسِقُونَ in ayah 6 refer to?",
      arabic: "الْفَاسِقُونَ",
      rootLetters: "ف س ق",
      options: [
        { id: "a", text: "The righteous", isCorrect: false },
        { id: "b", text: "The hypocrites", isCorrect: false },
        { id: "c", text: "The martyrs", isCorrect: false },
        { id: "d", text: "The disbelievers", isCorrect: true },
      ],
      explanation: "الْفَاسِقُونَ means 'the rebellious disbelievers' (root: ف-س-ق).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase ذَٰلِكَ جَزَاءُ أَعْدَاءِ اللَّهِ declare?",
      arabic: "ذَٰلِكَ جَزَاءُ أَعْدَاءِ اللَّهِ",
      rootLetters: "ج ز ي | ع د و | ل ه",
      options: [
        { id: "a", text: "Allah's mercy", isCorrect: false },
        { id: "b", text: "The reward for Allah's enemies", isCorrect: true },
        { id: "c", text: "A temporary punishment", isCorrect: false },
        { id: "d", text: "A test", isCorrect: false },
      ],
      explanation: "This phrase means 'that is the recompense of Allah's enemies' (roots: ج-ز-ي, ع-د-و, ل-ه).",
    },
    {
      id: "q12",
      question: "What does the Arabic term الْبَرِيَّةِ in ayah 6 encompass?",
      arabic: "الْبَرِيَّةِ",
      rootLetters: "ب ر أ",
      options: [
        { id: "a", text: "Only humans", isCorrect: false },
        { id: "b", text: "All creation", isCorrect: true },
        { id: "c", text: "Animals only", isCorrect: false },
        { id: "d", text: "Angels", isCorrect: false },
      ],
      explanation: "الْبَرِيَّةِ refers to 'all creation' (root: ب-ر-أ), highlighting universal accountability.",
    },
  ],
};
