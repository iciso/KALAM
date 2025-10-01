export const alMulkQuizData: SurahQuizData = {
  surahId: 67,
  surahName: "Al-Mulk",
  surahArabicName: "الملك",
  totalVerses: 30,
  type: "Meccan",
  difficulty: "Intermediate",
  introduction:
    "Surah Al-Mulk (The Sovereignty) is the 67th chapter of the Quran, containing 30 verses and approximately 325 words. Revealed in Mecca, it emphasizes Allah's supreme sovereignty over the universe, the signs of His majesty in creation, the cycle of life and death as a test, and the reality of the Day of Judgment. It calls upon humanity to reflect on these divine manifestations to recognize truth from falsehood and live in obedience to Allah.",
  additionalContextElements: [
    {
      title: "Sovereignty and Signs of Creation",
      content: `
        <div class="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
          <h3 class="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Historical Context and Reasons for Revelation</h3>
          <p class="text-orange-700 dark:text-orange-200 mb-3">
            Surah Al-Mulk was revealed in the early Meccan period, when the Prophet ﷺ faced opposition from the Quraysh who denied monotheism and the afterlife. It serves to affirm Allah's absolute sovereignty and power, countering polytheism by highlighting creation as evidence of His oneness.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Tafsir Evidence</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir explains the surah's focus on Allah's dominion and power over all things, with verses on creation of heavens and earth as signs. Al-Maududi notes it invites reflection on divine majesty to discern truth, addressing Meccan disbelievers' denial of resurrection.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Etymology and Meaning</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              'Al-Mulk' derives from م-ل-ك (malaka), meaning sovereignty or kingdom, referring to Allah's absolute dominion over creation (Ibn Kathir, Quran.com).
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Sovereignty: Surah Al-Fatihah (1:4). Creation signs: Surah Ar-Rahman (55:1-13). Life and death: Surah Al-Baqarah (2:28).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Day of Judgment and Human Reflection",
      content: `
        <div class="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
          <h3 class="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Judgment and Divine Test</h3>
          <p class="text-indigo-700 dark:text-indigo-200 mb-3">
            The surah describes the terrors of Judgment Day, when disbelievers will regret, and stresses life as a test of deeds, urging gratitude and obedience.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Tafsir Insights</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir interprets verses on hell's guardians and ungrateful deniers as warnings. Al-Maududi highlights reflection on creation to avoid falsehood.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Prophetic Guidance and Hadith</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Abu Hurairah narrated that the Prophet ﷺ said: 'Whoever recites Surah Al-Mulk every night, Allah will protect him from grave torment' (Tirmidhi, Ibn Majah).
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Day of Judgment: Surah Al-Waqi'ah (56:1-56). Reflection: Surah Az-Zumar (39:67). Power over creation: Surah Al-An'am (6:59).
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Al-Mulk, الملك?",
      arabic: "الملك",
      rootLetters: "م ل ك",
      options: [
        { id: "a", text: "The Kingdom", isCorrect: false },
        { id: "b", text: "The Power", isCorrect: false },
        { id: "c", text: "The Sovereignty", isCorrect: true },
        { id: "d", text: "The Dominion", isCorrect: false },
      ],
      explanation: "الملك (Al-Mulk) means 'The Sovereignty,' derived from the root م-ل-ك, referring to Allah's absolute dominion (Quran.com, Ibn Kathir).",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ' mean?",
      arabic: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ",
      rootLetters: "ب ر ك | ي د ي | م ل ك",
      options: [
        { id: "a", text: "Blessed is He in whose hand is dominion", isCorrect: true },
        { id: "b", text: "Glorified is He who created the kingdom", isCorrect: false },
        { id: "c", text: "Exalted is He who owns the power", isCorrect: false },
        { id: "d", text: "Praised is He who controls life", isCorrect: false },
      ],
      explanation: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ (Tabaraka alladhi biyadihi al-mulk) means 'Blessed is He in whose hand is dominion,' roots ب-ر-ك (blessed), ي-د-ي (hand), م-ل-ك (dominion) (MyIslam, Al-Maududi).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ' mean?",
      arabic: "وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      rootLetters: "ك ل ل | ش ي ء | ق د ر",
      options: [
        { id: "a", text: "And He is over all things knowledgeable", isCorrect: false },
        { id: "b", text: "And He is over all things merciful", isCorrect: false },
        { id: "c", text: "And He is over all things wise", isCorrect: false },
        { id: "d", text: "And He is over all things competent", isCorrect: true },
      ],
      explanation: "وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ (Wa huwa 'ala kulli shay'in qadir) means 'And He is over all things competent,' roots ك-ل-ل (all), ش-ي-ء (things), ق-د-ر (competent) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ' mean?",
      arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ",
      rootLetters: "خ ل ق | م و ت | ح ي و",
      options: [
        { id: "a", text: "Who created heaven and earth", isCorrect: false },
        { id: "b", text: "Who created death and life", isCorrect: true },
        { id: "c", text: "Who created day and night", isCorrect: false },
        { id: "d", text: "Who created man and jinn", isCorrect: false },
      ],
      explanation: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ (Alladhi khalaqa al-mawta wal-hayata) means 'Who created death and life,' roots خ-ل-ق (created), م-و-ت (death), ح-ي-و (life) (MyIslam, Al-Maududi).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا' mean?",
      arabic: "لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا",
      rootLetters: "ب ل و | ح س ن | ع م ل",
      options: [
        { id: "a", text: "To test you which of you is best in knowledge", isCorrect: false },
        { id: "b", text: "To test you which of you is best in deed", isCorrect: true },
        { id: "c", text: "To test you which of you is strongest in faith", isCorrect: false },
        { id: "d", text: "To test you which of you is greatest in wealth", isCorrect: false },
      ],
      explanation: "لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا (Liyabluwakum ayyukum ahsanu 'amala) means 'To test you which of you is best in deed,' roots ب-ل-و (test), ح-س-ن (best), ع-م-ل (deed) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا' mean?",
      arabic: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا",
      rootLetters: "خ ل ق | س ب ع | س م و | ط ب ق",
      options: [
        { id: "a", text: "Who created seven earths in layers", isCorrect: false },
        { id: "b", text: "Who created seven heavens in harmony", isCorrect: false },
        { id: "c", text: "Who created seven paths in order", isCorrect: false },
        { id: "d", text: "Who created seven heavens in layers", isCorrect: true },
      ],
      explanation: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا (Alladhi khalaqa sab'a samawatin tibaqa) means 'Who created seven heavens in layers,' roots خ-ل-ق (created), س-ب-ع (seven), س-م-و (heavens), ط-ب-ق (layers) (MyIslam, Al-Maududi).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَـٰنِ مِن تَفَاوُتٍ' mean?",
      arabic: "مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَـٰنِ مِن تَفَاوُتٍ",
      rootLetters: "ر أ ي | خ ل ق | ر ح م | ف و ت",
      options: [
        { id: "a", text: "You see no inconsistency in the creation of the Merciful", isCorrect: true },
        { id: "b", text: "You see much perfection in the creation of the Merciful", isCorrect: false },
        { id: "c", text: "You see great beauty in the creation of the Merciful", isCorrect: false },
        { id: "d", text: "You see no flaw in the creation of the Merciful", isCorrect: false },
      ],
      explanation: "مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَـٰنِ مِن تَفَاوُتٍ (Ma tara fi khalqi ar-rahmani min tafawut) means 'You see no inconsistency in the creation of the Merciful,' roots ر-أ-ي (see), خ-ل-ق (creation), ر-ح-م (Merciful), ف-و-ت (inconsistency) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ' mean?",
      arabic: "فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ",
      rootLetters: "ر ج ع | ب ص ر | ر أ ي | ف ط ر",
      options: [
        { id: "a", text: "So return your vision; do you see any flaws?", isCorrect: true },
        { id: "b", text: "So turn your gaze; do you see any beauty?", isCorrect: false },
        { id: "c", text: "So look again; do you see any signs?", isCorrect: false },
        { id: "d", text: "So reflect your sight; do you see any perfection?", isCorrect: false },
      ],
      explanation: "فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ (Farji'i al-basara hal tara min futurin) means 'So return your vision; do you see any flaws?' roots ر-ج-ع (return), ب-ص-ر (vision), ر-أ-ي (see), ف-ط-ر (flaws) (MyIslam, Al-Maududi).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ' mean?",
      arabic: "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ",
      rootLetters: "ر ج ع | ب ص ر | ك ر ر",
      options: [
        { id: "a", text: "Then return your vision twice again", isCorrect: true },
        { id: "b", text: "Then turn your gaze once more", isCorrect: false },
        { id: "c", text: "Then reflect your sight repeatedly", isCorrect: false },
        { id: "d", text: "Then look at the creation carefully", isCorrect: false },
      ],
      explanation: "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ (Thumma irji'i al-basara karratayn) means 'Then return your vision twice again,' roots ر-ج-ع (return), ب-ص-ر (vision), ك-ر-ر (twice) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا' mean?",
      arabic: "يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا",
      rootLetters: "ق ل ب | ب ص ر | خ س أ",
      options: [
        { id: "a", text: "Your vision will return to you humbled", isCorrect: true },
        { id: "b", text: "Your vision will return to you strengthened", isCorrect: false },
        { id: "c", text: "Your vision will return to you amazed", isCorrect: false },
        { id: "d", text: "Your vision will return to you enlightened", isCorrect: false },
      ],
      explanation: "يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا (Yanqalib ilayka al-basaru khasi'an) means 'Your vision will return to you humbled,' roots ق-ل-ب (return), ب-ص-ر (vision), خ-س-أ (humbled) (MyIslam, Al-Maududi).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'وَهُوَ حَسِيسٌ' mean?",
      arabic: "وَهُوَ حَسِيسٌ",
      rootLetters: "ح س س",
      options: [
        { id: "a", text: "And it is weary", isCorrect: false },
        { id: "b", text: "And it is weary", isCorrect: true },
        { id: "c", text: "And it is strengthened", isCorrect: false },
        { id: "d", text: "And it is amazed", isCorrect: false },
      ],
      explanation: "وَهُوَ حَسِيسٌ (Wa huwa hasis) means 'And it is weary,' root ح-س-س (weary) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ' mean?",
      arabic: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ",
      rootLetters: "ز ي ن | س م و | د ن و | ص ب ح",
      options: [
        { id: "a", text: "And We have adorned the nearest heaven with lamps", isCorrect: true },
        { id: "b", text: "And We have created the heavens with stars", isCorrect: false },
        { id: "c", text: "And We have beautified the earth with lights", isCorrect: false },
        { id: "d", text: "And We have decorated the sky with moons", isCorrect: false },
      ],
      explanation: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ (Wa laqad zayyanna as-sama'a ad-dunya bimasabih) means 'And We have adorned the nearest heaven with lamps,' roots ز-ي-ن (adorned), س-م-و (heaven), د-ن-و (nearest), ص-ب-ح (lamps) (MyIslam, Al-Maududi).",
    },
    {
      id: "q13",
      question: "What does the Arabic phrase 'وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ' mean?",
      arabic: "وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ",
      rootLetters: "ج ع ل | ر ج م | ش ط ن",
      options: [
        { id: "a", text: "And made them lights for the angels", isCorrect: false },
        { id: "b", text: "And made them projectiles for the devils", isCorrect: true },
        { id: "c", text: "And made them guides for mankind", isCorrect: false },
        { id: "d", text: "And made them ornaments for the heavens", isCorrect: false },
      ],
      explanation: "وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ (Wa ja'alnaha rujuman lilshshayatin) means 'And made them projectiles for the devils,' roots ج-ع-ل (made), ر-ج-م (projectiles), ش-ط-ن (devils) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q14",
      question: "What does the Arabic phrase 'وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ' mean?",
      arabic: "وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ",
      rootLetters: "ع ت د | ع ذ ب | س ع ر",
      options: [
        { id: "a", text: "And We have prepared for them the punishment of the Blaze", isCorrect: true },
        { id: "b", text: "And We have prepared for them the reward of Paradise", isCorrect: false },
        { id: "c", text: "And We have prepared for them the torment of the Grave", isCorrect: false },
        { id: "d", text: "And We have prepared for them the bliss of Heaven", isCorrect: false },
      ],
      explanation: "وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ (Wa a'tadna lahum 'adhaba as-sa'ir) means 'And We have prepared for them the punishment of the Blaze,' roots ع-ت-د (prepared), ع-ذ-ب (punishment), س-ع-ر (Blaze) (MyIslam, Al-Maududi).",
    },
    {
      id: "q15",
      question: "What does the Arabic phrase 'وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ' mean?",
      arabic: "وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ",
      rootLetters: "ك ف ر | ر ب ب | ع ذ ب | ج ه ن م",
      options: [
        { id: "a", text: "And for those who believed in their Lord is the reward of Paradise", isCorrect: false },
        { id: "b", text: "And for those who disbelieved in their Lord is the punishment of Hell", isCorrect: false },
        { id: "c", text: "And for those who obeyed their Lord is the bliss of Heaven", isCorrect: false },
        { id: "d", text: "And for those who disbelieved in their Lord is the punishment of Hell", isCorrect: true },
      ],
      explanation: "وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ (Wa lilladhina kafaroo birabbihim 'adhabu jahannama) means 'And for those who disbelieved in their Lord is the punishment of Hell,' roots ك-ف-ر (disbelieved), ر-ب-ب (Lord), ع-ذ-ب (punishment), ج-ه-ن-م (Hell) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q16",
      question: "What does the Arabic phrase 'وَبِئْسَ الْمَصِيرُ' mean?",
      arabic: "وَبِئْسَ الْمَصِيرُ",
      rootLetters: "ب أ س | ص ي ر",
      options: [
        { id: "a", text: "And blessed is the destination", isCorrect: false },
        { id: "b", text: "And excellent is the end", isCorrect: false },
        { id: "c", text: "And good is the outcome", isCorrect: false },
        { id: "d", text: "And wretched is the destination", isCorrect: true },
      ],
      explanation: "وَبِئْسَ الْمَصِيرُ (Wa bi'sa al-masir) means 'And wretched is the destination,' roots ب-أ-س (wretched) and ص-ي-ر (destination) (MyIslam, Al-Maududi).",
    },
    {
      id: "q17",
      question: "What does the Arabic phrase 'إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا' mean?",
      arabic: "إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا",
      rootLetters: "ل ق ي | س م ع | ش ه ق",
      options: [
        { id: "a", text: "When they are thrown into it, they hear from it a roar", isCorrect: false },
        { id: "b", text: "When they are cast into it, they hear from it a sigh", isCorrect: false },
        { id: "c", text: "When they are placed in it, they hear from it a whisper", isCorrect: true },
        { id: "d", text: "When they enter it, they hear from it silence", isCorrect: false },
      ],
      explanation: "إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا (Idha ulqu fiha sami'oo laha shahiqa) means 'When they are thrown into it, they hear from it a roar,' roots ل-ق-ي (thrown), س-م-ع (hear), ش-ه-ق (roar) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q18",
      question: "What does the Arabic phrase 'وَهِيَ تَفُورُ' mean?",
      arabic: "وَهِيَ تَفُورُ",
      rootLetters: "ف و ر",
      options: [
        { id: "a", text: "While it bubbles up", isCorrect: false },
        { id: "b", text: "While it boils", isCorrect: true },
        { id: "c", text: "While it calms", isCorrect: false },
        { id: "d", text: "While it freezes", isCorrect: false },
      ],
      explanation: "وَهِيَ تَفُورُ (Wa hiya tafur) means 'While it boils,' root ف-و-ر (boils) (MyIslam, Al-Maududi).",
    },
    {
      id: "q19",
      question: "What does the Arabic phrase 'تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ' mean?",
      arabic: "تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ",
      rootLetters: "ك و د | م ي ز | غ ي ظ",
      options: [
        { id: "a", text: "It almost bursts from rage", isCorrect: true },
        { id: "b", text: "It almost calms from peace", isCorrect: false },
        { id: "c", text: "It almost shrinks from fear", isCorrect: false },
        { id: "d", text: "It almost expands from joy", isCorrect: false },
      ],
      explanation: "تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ (Takadu tamayyazu mina al-ghayz) means 'It almost bursts from rage,' roots ك-و-د (almost), م-ي-ز (bursts), غ-ي-ظ (rage) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q20",
      question: "What does the Arabic phrase 'كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ' mean?",
      arabic: "كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ",
      rootLetters: "ك ل م | ل ق ي | ف و ج",
      options: [
        { id: "a", text: "Every time a group is thrown into it", isCorrect: true },
        { id: "b", text: "Every time a soul is saved from it", isCorrect: false },
        { id: "c", text: "Every time a believer enters it", isCorrect: false },
        { id: "d", text: "Every time a company leaves it", isCorrect: false },
      ],
      explanation: "كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ (Kullama ulqiya fiha fawj) means 'Every time a group is thrown into it,' roots ك-ل-م (every time), ل-ق-ي (thrown), ف-و-ج (group) (MyIslam, Al-Maududi).",
    },
    {
      id: "q21",
      question: "What does the Arabic phrase 'سَأَلَهُمْ خَزَنَتُهَا' mean?",
      arabic: "سَأَلَهُمْ خَزَنَتُهَا",
      rootLetters: "س ء ل | خ ز ن",
      options: [
        { id: "a", text: "Its keepers ask them", isCorrect: false },
        { id: "b", text: "Its angels greet them", isCorrect: false },
        { id: "c", text: "Its guardians ask them", isCorrect: true },
        { id: "d", text: "Its wardens welcome them", isCorrect: false },
      ],
      explanation: "سَأَلَهُمْ خَزَنَتُهَا (Sa'alahum khazanatuha) means 'Its keepers ask them,' roots س-ء-ل (ask) and خ-ز-ن (keepers) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q22",
      question: "What does the Arabic phrase 'أَلَمْ يَأْتِكُمْ نَذِيرٌ' mean?",
      arabic: "أَلَمْ يَأْتِكُمْ نَذِيرٌ",
      rootLetters: "أ ت ي | ن ذ ر",
      options: [
        { id: "a", text: "Did no guide come to you?", isCorrect: false },
        { id: "b", text: "Did no prophet come to you?", isCorrect: false },
        { id: "c", text: "Did no angel come to you?", isCorrect: false },
        { id: "d", text: "Did no warner come to you?", isCorrect: true },
      ],
      explanation: "أَلَمْ يَأْتِكُمْ نَذِيرٌ (Alam ya'tikum nadhir) means 'Did no warner come to you?' roots أ-ت-ي (come) and ن-ذ-ر (warner) (MyIslam, Al-Maududi).",
    },
    {
      id: "q23",
      question: "What does the Arabic phrase 'قَالُوا بَلَىٰ قَدْ جَاءَنَا نَذِيرٌ' mean?",
      arabic: "قَالُوا بَلَىٰ قَدْ جَاءَنَا نَذِيرٌ",
      rootLetters: "ق و ل | ج ي ء | ن ذ ر",
      options: [
        { id: "a", text: "They say, 'Yes, a warner had come to us'", isCorrect: true },
        { id: "b", text: "They say, 'No, no warner came to us'", isCorrect: false },
        { id: "c", text: "They say, 'Yes, a guide had come to us'", isCorrect: false },
        { id: "d", text: "They say, 'No, a prophet came to us'", isCorrect: false },
      ],
      explanation: "قَالُوا بَلَىٰ قَدْ جَاءَنَا نَذِيرٌ (Qaloo bala qad ja'ana nadhir) means 'They say, 'Yes, a warner had come to us',' roots ق-و-ل (say), ج-ي-ء (come), ن-ذ-ر (warner) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q24",
      question: "What does the Arabic phrase 'فَكَذَّبْنَا فَقُلْنَا مَا نَدْرِي مَا السَّاعَةُ' mean?",
      arabic: "فَكَذَّبْنَا فَقُلْنَا مَا نَدْرِي مَا السَّاعَةُ",
      rootLetters: "ك ذ ب | ق و ل | د ر ي | س و ع",
      options: [
        { id: "a", text: "But we denied and said, 'We do not know what the Hour is'", isCorrect: true },
        { id: "b", text: "But we believed and said, 'We know what the Hour is'", isCorrect: false },
        { id: "c", text: "But we accepted and said, 'We understand the Hour'", isCorrect: false },
        { id: "d", text: "But we questioned and said, 'We fear the Hour'", isCorrect: false },
      ],
      explanation: "فَكَذَّبْنَا فَقُلْنَا مَا نَدْرِي مَا السَّاعَةُ (Fakadhdhabna faqulna ma nadri ma as-sa'ah) means 'But we denied and said, 'We do not know what the Hour is',' roots ك-ذ-ب (denied), ق-و-ل (said), د-ر-ي (know), س-و-ع (Hour) (MyIslam, Al-Maududi).",
    },
    {
      id: "q25",
      question: "What does the Arabic phrase 'إِنْ نَظُنُّ إِلَّا ظَنًّا وَمَا نَحْنُ بِمُسْتَيْقِنِينَ' mean?",
      arabic: "إِنْ نَظُنُّ إِلَّا ظَنًّا وَمَا نَحْنُ بِمُسْتَيْقِنِينَ",
      rootLetters: "ظ ن ن | ي ق ن",
      options: [
        { id: "a", text: "We assume only an assumption, and we are not convinced", isCorrect: false },
        { id: "b", text: "We think only a thought, and we are not certain", isCorrect: false },
        { id: "c", text: "We know only knowledge, and we are believers", isCorrect: false },
        { id: "d", text: "We assume only an assumption, and we are not convinced", isCorrect: true },
      ],
      explanation: "إِنْ نَظُنُّ إِلَّا ظَنًّا وَمَا نَحْنُ بِمُسْتَيْقِنِينَ (In nazunnu illa zannan wa ma nahnu bimustayqinin) means 'We assume only an assumption, and we are not convinced,' roots ظ-ن-ن (assume), ي-ق-ن (convinced) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q26",
      question: "What does the Arabic phrase 'وَإِنَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ' mean?",
      arabic: "وَإِنَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ",
      rootLetters: "ك ف ر | ر ب ب | ع د ل",
      options: [
        { id: "a", text: "And indeed, those who believe in their Lord are equal", isCorrect: false },
        { id: "b", text: "And indeed, those who disbelieve in their Lord deviate", isCorrect: false },
        { id: "c", text: "And indeed, those who disbelieve in their Lord are just", isCorrect: false },
        { id: "d", text: "And indeed, those who disbelieve in their Lord deviate", isCorrect: true },
      ],
      explanation: "وَإِنَّ الَّذِينَ كَفَرُوا بِرَبِّهِمْ يَعْدِلُونَ (Wa inna alladhina kafaroo birabbihim ya'dilun) means 'And indeed, those who disbelieve in their Lord deviate,' roots ك-ف-ر (disbelieve), ر-ب-ب (Lord), ع-د-ل (deviate) (MyIslam, Al-Maududi).",
    },
    {
      id: "q27",
      question: "What does the Arabic phrase 'هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا' mean?",
      arabic: "هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا",
      rootLetters: "ج ع ل | أ ر ض | ذ ل ل",
      options: [
        { id: "a", text: "He is the one who made the earth difficult for you", isCorrect: false },
        { id: "b", text: "He is the one who made the earth submissive for you", isCorrect: false },
        { id: "c", text: "He is the one who made the earth barren for you", isCorrect: false },
        { id: "d", text: "He is the one who made the earth exalted for you", isCorrect: true },
      ],
      explanation: "هُوَ الَّذِي جَعَلَ لَكُمُ الْأَرْضَ ذَلُولًا (Huwa alladhi ja'ala lakumu al-arda dhalulan) means 'He is the one who made the earth submissive for you,' roots ج-ع-ل (made), أ-ر-ض (earth), ذ-ل-ل (submissive) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q28",
      question: "What does the Arabic phrase 'فَامْشُوا فِي مَنَاكِبِهَا' mean?",
      arabic: "فَامْشُوا فِي مَنَاكِبِهَا",
      rootLetters: "م ش ي | ن ك ب",
      options: [
        { id: "a", text: "So walk in its valleys", isCorrect: false },
        { id: "b", text: "So walk upon its shoulders", isCorrect: true },
        { id: "c", text: "So travel in its paths", isCorrect: false },
        { id: "d", text: "So roam in its mountains", isCorrect: false },
      ],
      explanation: "فَامْشُوا فِي مَنَاكِبِهَا (Famshoo fi manakibiha) means 'So walk upon its shoulders,' roots م-ش-ي (walk) and ن-ك-ب (shoulders/paths) (MyIslam, Al-Maududi).",
    },
    {
      id: "q29",
      question: "What does the Arabic phrase 'وَكُلُوا مِن رِّزْقِهِ' mean?",
      arabic: "وَكُلُوا مِن رِّزْقِهِ",
      rootLetters: "ك ل ل | ر ز ق",
      options: [
        { id: "a", text: "And eat of His provision", isCorrect: true },
        { id: "b", text: "And drink of His water", isCorrect: false },
        { id: "c", text: "And take of His bounty", isCorrect: false },
        { id: "d", text: "And use of His creation", isCorrect: false },
      ],
      explanation: "وَكُلُوا مِن رِّزْقِهِ (Wa kulu min rizqihi) means 'And eat of His provision,' roots ك-ل-ل (eat) and ر-ز-ق (provision) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q30",
      question: "What does the Arabic phrase 'وَإِلَيْهِ النُّشُورُ' mean?",
      arabic: "وَإِلَيْهِ النُّشُورُ",
      rootLetters: "ن ش ر",
      options: [
        { id: "a", text: "And to Him is the return", isCorrect: false },
        { id: "b", text: "And to Him is the resurrection", isCorrect: true },
        { id: "c", text: "And to Him is the life", isCorrect: false },
        { id: "d", text: "And to Him is the death", isCorrect: false },
      ],
      explanation: "وَإِلَيْهِ النُّشُورُ (Wa ilayhi an-nushur) means 'And to Him is the resurrection,' root ن-ش-ر (resurrection) (MyIslam, Al-Maududi).",
    },
    {
      id: "q31",
      question: "What does the Arabic phrase 'أَأَمِنتُم مَّن فِي السَّمَاءِ' mean?",
      arabic: "أَأَمِنتُم مَّن فِي السَّمَاءِ",
      rootLetters: "أ م ن | س م و",
      options: [
        { id: "a", text: "Do you feel secure from who is in the earth", isCorrect: false },
        { id: "b", text: "Do you feel secure from who is in the heaven", isCorrect: true },
        { id: "c", text: "Do you fear who is in the sky", isCorrect: false },
        { id: "d", text: "Do you trust who is above the clouds", isCorrect: false },
      ],
      explanation: "أَأَمِنتُم مَّن فِي السَّمَاءِ (A'amintum man fi as-sama'i) means 'Do you feel secure from who is in the heaven,' roots أ-م-ن (secure) and س-م-و (heaven) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q32",
      question: "What does the Arabic phrase 'أَن يَخْسِفَ بِكُمُ الْأَرْضَ' mean?",
      arabic: "أَن يَخْسِفَ بِكُمُ الْأَرْضَ",
      rootLetters: "خ س ف | أ ر ض",
      options: [
        { id: "a", text: "That He will cause the earth to flood with you", isCorrect: false },
        { id: "b", text: "That He will cause the earth to shake with you", isCorrect: false },
        { id: "c", text: "That He will cause the earth to swallow you up", isCorrect: true },
        { id: "d", text: "That He will cause the earth to burn with you", isCorrect: false },
      ],
      explanation: "أَن يَخْسِفَ بِكُمُ الْأَرْضَ (An yakhsifa bikumu al-arda) means 'That He will cause the earth to swallow you up,' root خ-س-ف (swallow) and أ-ر-ض (earth) (MyIslam, Al-Maududi).",
    },
    {
      id: "q33",
      question: "What does the Arabic phrase 'فَإِذَا هِيَ تَمُورُ' mean?",
      arabic: "فَإِذَا هِيَ تَمُورُ",
      rootLetters: "م و ر",
      options: [
        { id: "a", text: "And suddenly it is calm", isCorrect: false },
        { id: "b", text: "And suddenly it is still", isCorrect: false },
        { id: "c", text: "And suddenly it is stable", isCorrect: false },
        { id: "d", text: "And suddenly it is quaking", isCorrect: true },
      ],
      explanation: "فَإِذَا هِيَ تَمُورُ (Fa'idha hiya tamur) means 'And suddenly it is quaking,' root م-و-ر (quaking) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q34",
      question: "What does the Arabic phrase 'أَوْ يُسْكِنْكُمْ فِيهَا رِيحًا' mean?",
      arabic: "أَوْ يُسْكِنْكُمْ فِيهَا رِيحًا",
      rootLetters: "س ك ن | ر ي ح",
      options: [
        { id: "a", text: "Or send upon you a wind", isCorrect: true },
        { id: "b", text: "Or cause you to dwell in a storm", isCorrect: false },
        { id: "c", text: "Or bring you rain from the sky", isCorrect: false },
        { id: "d", text: "Or make you settle in peace", isCorrect: false },
      ],
      explanation: "أَوْ يُسْكِنْكُمْ فِيهَا رِيحًا (Aw yuskin kum fiha rihan) means 'Or send upon you a wind,' roots س-ك-ن (send) and ر-ي-ح (wind) (MyIslam, Al-Maududi).",
    },
    {
      id: "q35",
      question: "What does the Arabic phrase 'وَهُوَ الْعَزِيزُ الرَّحِيمُ' mean?",
      arabic: "وَهُوَ الْعَزِيزُ الرَّحِيمُ",
      rootLetters: "ع ز ز | ر ح م",
      options: [
        { id: "a", text: "And He is the Wise, the Merciful", isCorrect: false },
        { id: "b", text: "And He is the Exalted in Might, the Merciful", isCorrect: false },
        { id: "c", text: "And He is the Forgiving, the Compassionate", isCorrect: false },
        { id: "d", text: "And He is the Almighty, the Merciful", isCorrect: true },
      ],
      explanation: "وَهُوَ الْعَزِيزُ الرَّحِيمُ (Wa huwa al-'azizu ar-rahim) means 'And He is the Almighty, the Merciful,' roots ع-ز-ز (Almighty) and ر-ح-م (Merciful) (Quran.com, Ibn Kathir).",
    },
  ],
};
