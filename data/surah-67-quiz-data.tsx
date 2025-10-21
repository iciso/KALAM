import type { SurahQuizData } from "./types" // Assuming SurahQuizData type is declared in another file

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
      explanation:
        "الملك (Al-Mulk) means 'The Sovereignty,' derived from the root م-ل-ك, referring to Allah's absolute dominion (Quran.com, Ibn Kathir).",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ' mean?",
      arabic: "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ",
      rootLetters: "ب ر ك | ي د ي | م ل ك",
      options: [
        { id: "a", text: "Blessed is He in whose hand is dominion", isCorrect: true },
        { id: "b", text: "Glorified is He who created the kingdom", isCorrect: false },
        { id: "c", text: "Exalted is He who owns the power", isCorrect: false },
        { id: "d", text: "Praised is He who controls life", isCorrect: false },
      ],
      explanation:
        "تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ (Tabaraka alladhi biyadihi al-mulk) means 'Blessed is He in whose hand is dominion,' roots ب-ر-ك (blessed), ي-د-ي (hand), م-ل-ك (dominion) (MyIslam, Al-Maududi).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ' mean?",
      arabic: "وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
      rootLetters: "ك ل ل | ش ي ء | ق د ر",
      options: [
        { id: "a", text: "And He is over all things lovable", isCorrect: false },
        { id: "b", text: "And He is over all things merciful", isCorrect: false },
        { id: "c", text: "And He is over all things thankful", isCorrect: false },
        { id: "d", text: "And He is over all things competent", isCorrect: true },
      ],
      explanation:
        "وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ (Wa huwa 'ala kulli shay'in qadir) means 'And He is over all things competent,' roots ك-ل-ل (all), ش-ي-ء (things), ق-د-ر (competent) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ' mean?",
      arabic: "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ",
      rootLetters: "خ ل ق | م و ت | ح ي و",
      options: [
        { id: "a", text: "Who created heaven and earth", isCorrect: false },
        { id: "b", text: "Who created death and life", isCorrect: true },
        { id: "c", text: "Who created day and night", isCorrect: false },
        { id: "d", text: "Who created man and jinn", isCorrect: false },
      ],
      explanation:
        "الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ (Alladhi khalaqa al-mawta wal-hayata) means 'Who created death and life,' roots خ-ل-ق (created), م-و-ت (death), ح-ي-و (life) (MyIslam, Al-Maududi).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا' mean?",
      arabic: "لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا",
      rootLetters: "ب ل و | ح س ن | ع م ل",
      options: [
        { id: "a", text: "To test you which of you is best in knowledge", isCorrect: false },
        { id: "b", text: "To test you which of you is best in deed", isCorrect: true },
        { id: "c", text: "To test you which of you is strongest in faith", isCorrect: false },
        { id: "d", text: "To test you which of you is greatest in wealth", isCorrect: false },
      ],
      explanation:
        "لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا (Liyabluwakum ayyukum ahsanu 'amala) means 'To test you which of you is best in deed,' roots ب-ل-و (test), ح-س-ن (best), ع-م-ل (deed) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا' mean?",
      arabic: "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا",
      rootLetters: "خ ل ق | س ب ع | س م و | ط ب ق",
      options: [
        { id: "a", text: "Who created seven earths in layers", isCorrect: false },
        { id: "b", text: "Who created seven heavens in harmony", isCorrect: false },
        { id: "c", text: "Who created seven paths in order", isCorrect: false },
        { id: "d", text: "Who created seven heavens in layers", isCorrect: true },
      ],
      explanation:
        "الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا (Alladhi khalaqa sab'a samawatin tibaqa) means 'Who created seven heavens in layers,' roots خ-ل-ق (created), س-ب-ع (seven), س-م-و (heavens), ط-ب-ق (layers) (MyIslam, Al-Maududi).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَـٰنِ مِن تَفَاوُتٍ' mean?",
      arabic: "مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَـٰنِ مِن تَفَاوُتٍ",
      rootLetters: "ر أ ي | خ ل ق | ر ح م | ف و ت",
      options: [
        { id: "a", text: "You see no inconsistency in the creation of the Merciful", isCorrect: true },
        { id: "b", text: "You see much perfection in the creation of the Merciful", isCorrect: false },
        { id: "c", text: "You see great beauty in the creation of the Merciful", isCorrect: false },
        { id: "d", text: "You see no hardship in the creation of the Merciful", isCorrect: false },
      ],
      explanation:
        "مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَـٰنِ مِن تَفَاوُتٍ (Ma tara fi khalqi ar-rahmani min tafawut) means 'You see no inconsistency in the creation of the Merciful,' roots ر-أ-ي (see), خ-ل-ق (creation), ر-ح-م (Merciful), ف-و-ت (inconsistency) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ' mean?",
      arabic: "فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ",
      rootLetters: "ر ج ع | ب ص ر | ر أ ي | ف ط ر",
      options: [
        { id: "a", text: "So reflect your sight; do you see any perfection?", isCorrect: false },
        { id: "b", text: "So turn your gaze; do you see any beauty?", isCorrect: false },
        { id: "c", text: "So look again; do you see any signs?", isCorrect: false },
        { id: "d", text: "So return your vision; do you see any flaws?", isCorrect: true },
      ],
      explanation:
        "فَارْجِعِ الْبَصَرَ هَلْ تَرَىٰ مِن فُطُورٍ (Farji'i al-basara hal tara min futurin) means 'So return your vision; do you see any flaws?' roots ر-ج-ع (return), ب-ص-ر (vision), ر-أ-ي (see), ف-ط-ر (flaws) (MyIslam, Al-Maududi).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ' mean?",
      arabic: "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ",
      rootLetters: "ر ج ع | ب ص ر | ك ر ر",
      options: [
        { id: "a", text: "Then return your vision twice again", isCorrect: true },
        { id: "b", text: "Then turn your gaze once more", isCorrect: false },
        { id: "c", text: "Then reflect your sight repeatedly", isCorrect: false },
        { id: "d", text: "Then look at the creation carefully", isCorrect: false },
      ],
      explanation:
        "ثُمَّ ارْجِعِ الْبَصَرَ كَرَّتَيْنِ (Thumma irji'i al-basara karratayn) means 'Then return your vision twice again,' roots ر-ج-ع (return), ب-ص-ر (vision), ك-ر-ر (twice) (Quran.com, Ibn Kathir).",
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
      explanation:
        "يَنقَلِبْ إِلَيْكَ الْبَصَرُ خَاسِئًا (Yanqalib ilayka al-basaru khasi'an) means 'Your vision will return to you humbled,' roots ق-ل-ب (return), ب-ص-ر (vision), خ-س-أ (humbled) (MyIslam, Al-Maududi).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'وَهُوَ حَسِيسٌ' mean?",
      arabic: "وَهُوَ حَسِيسٌ",
      rootLetters: "ح س س",
      options: [
        { id: "a", text: "And it is sleepy", isCorrect: false },
        { id: "b", text: "And it is weary", isCorrect: true },
        { id: "c", text: "And it is strengthened", isCorrect: false },
        { id: "d", text: "And it is amazed", isCorrect: false },
      ],
      explanation: "وَهُوَ حَسِيسٌ (Wa huwa hasis) means 'And it is weary,' root ح-س-س (weary) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ' mean?",
      arabic: "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ",
      rootLetters: "ز ي ن | س م و | د ن و | ص ب ح",
      options: [
        { id: "a", text: "And We have decorated the sky with moons", isCorrect: false },
        { id: "b", text: "And We have created the heavens with stars", isCorrect: false },
        { id: "c", text: "And We have beautified the earth with lights", isCorrect: false },
        { id: "d", text: "And We have adorned the nearest heaven with lamps", isCorrect: true },
      ],
      explanation:
        "وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ (Wa laqad zayyanna as-sama'a ad-dunya bimasabih) means 'And We have adorned the nearest heaven with lamps,' roots ز-ي-ن (adorned), س-م-و (heaven), د-ن-و (nearest), ص-ب-ح (lamps) (MyIslam, Al-Maududi).",
    },
    {
      id: "q13",
      question: "What does the Arabic phrase 'وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ' mean?",
      arabic: "وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ",
      rootLetters: "ج ع ل | ر ج م | ش ط ن",
      options: [
        { id: "a", text: "And made them lights for the angels", isCorrect: false },
        { id: "b", text: "And made them projectiles for the devils", isCorrect: true },
        { id: "c", text: "And made them guides for mankind", isCorrect: false },
        { id: "d", text: "And made them ornaments for the heavens", isCorrect: false },
      ],
      explanation:
        "وَجَعَلْنَاهَا رُجُومًا لِّلشَّيَاطِينِ (Wa ja'alnaha rujuman lilshshayatin) means 'And made them projectiles for the devils,' roots ج-ع-ل (made), ر-ج-م (projectiles), ش-ط-ن (devils) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q14",
      question: "What does the Arabic phrase 'وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ' mean?",
      arabic: "وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ",
      rootLetters: "ع ت د | ع ذ ب | س ع ر",
      options: [
        { id: "a", text: "And We have prepared for them the reward of Paradise", isCorrect: false },
        { id: "b", text: "And We have prepared for them the torment of the Grave", isCorrect: false },
        { id: "c", text: "And We have prepared for them the bliss of Heaven", isCorrect: false },
        { id: "d", text: "And We have prepared for them the punishment of the Blaze", isCorrect: true },
      ],
      explanation:
        "وَأَعْتَدْنَا لَهُمْ عَذَابَ السَّعِيرِ (Wa a'tadna lahum 'adhaba as-sa'ir) means 'And We have prepared for them the punishment of the Blaze,' roots ع-ت-د (prepared), ع-ذ-ب (punishment), س-ع-ر (Blaze) (MyIslam, Al-Maududi).",
    },
    {
      id: "q15",
      question: "What does the Arabic phrase 'وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ' mean?",
      arabic: "وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ",
      rootLetters: "ك ف ر | ر ب ب | ع ذ ب | ج ه ن م",
      options: [
        { id: "a", text: "And for those who believed in their Lord is the reward of Paradise", isCorrect: false },
        {
          id: "b",
          text: "And for those who disbelieved in their Lord is the punishment of the grave",
          isCorrect: false,
        },
        { id: "c", text: "And for those who obeyed their Lord is the bliss of Heaven", isCorrect: false },
        { id: "d", text: "And for those who disbelieved in their Lord is the punishment of Hell", isCorrect: true },
      ],
      explanation:
        "وَلِلَّذِينَ كَفَرُوا بِرَبِّهِمْ عَذَابُ جَهَنَّمَ (Wa lilladhina kafaroo birabbihim 'adhabu jahannama) means 'And for those who disbelieved in their Lord is the punishment of Hell,' roots ك-ف-ر (disbelieve), ر-ب-ب (Lord), ع-ذ-ب (punishment), ج-ه-ن-م (Hell) (Quran.com, Ibn Kathir).",
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
      explanation:
        "وَبِئْسَ الْمَصِيرُ (Wa bi'sa al-masir) means 'And wretched is the destination,' roots ب-أ-س (wretched) and ص-ي-ر (destination) (MyIslam, Al-Maududi).",
    },
    {
      id: "q17",
      question: "What does the Arabic phrase 'إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا' mean?",
      arabic: "إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا",
      rootLetters: "ل ق ي | س م ع | ش ه ق",
      options: [
        { id: "a", text: "When they are thrown into it, they hear from it a roar", isCorrect: true },
        { id: "b", text: "When they are cast into it, they hear from it a sigh", isCorrect: false },
        { id: "c", text: "When they are placed in it, they hear from it a whisper", isCorrect: false },
        { id: "d", text: "When they enter it, they hear from it silence", isCorrect: false },
      ],
      explanation:
        "إِذَا أُلْقُوا فِيهَا سَمِعُوا لَهَا شَهِيقًا (Idha ulqu fiha sami'oo laha shahiqa) means 'When they are thrown into it, they hear from it a roar,' roots ل-ق-ي (thrown), س-م-ع (hear), ش-ه-ق (roar) (Quran.com, Ibn Kathir).",
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
      question: "What does the Arabic phrase 'تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ' mean?",
      arabic: "تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ",
      rootLetters: "ك و د | م ي ز | غ ي ظ",
      options: [
        { id: "a", text: "It almost bursts from rage", isCorrect: true },
        { id: "b", text: "It almost calms from peace", isCorrect: false },
        { id: "c", text: "It almost shrinks from fear", isCorrect: false },
        { id: "d", text: "It almost expands from joy", isCorrect: false },
      ],
      explanation:
        "تَكَادُ تَمَيَّزُ مِنَ الْغَيْظِ (Takadu tamayyazu mina al-ghayz) means 'It almost bursts from rage,' roots ك-و-د (almost), م-ي-ز (bursts), غ-ي-ظ (rage) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q20",
      question: "What does the Arabic phrase 'كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ' mean?",
      arabic: "كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ",
      rootLetters: "ك ل م | ل ق ي | ف و ج",
      options: [
        { id: "a", text: "Every time a group is thrown into it", isCorrect: true },
        { id: "b", text: "Every time a soul is saved from it", isCorrect: false },
        { id: "c", text: "Every time a believer enters it", isCorrect: false },
        { id: "d", text: "Every time a company leaves it", isCorrect: false },
      ],
      explanation:
        "كُلَّمَا أُلْقِيَ فِيهَا فَوْجٌ (Kullama ulqiya fiha fawj) means 'Every time a group is thrown into it,' roots ك-ل-م (every time), ل-ق-ي (thrown), ف-و-ج (group) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q21",
      question: "What does the Arabic phrase 'أَأَمِنتُم مَّن فِي السَّمَاءِ' mean?",
      arabic: "أَأَمِنتُم مَّن فِي السَّمَاءِ",
      rootLetters: "أ م ن | س م و",
      options: [
        { id: "a", text: "Do you feel secure from who is in the earth", isCorrect: false },
        { id: "b", text: "Do you feel secure from who is in the heaven", isCorrect: true },
        { id: "c", text: "Do you fear who is in the sky", isCorrect: false },
        { id: "d", text: "Do you trust who is above the clouds", isCorrect: false },
      ],
      explanation:
        "أَأَمِنتُم مَّن فِي السَّمَاءِ (A'amintum man fi as-sama'i) means 'Do you feel secure from who is in the heaven,' roots أ-م-ن (secure) and س-م-و (heaven) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q22",
      question: "What does the Arabic phrase 'أَن يَخْسِفَ بِكُمُ الْأَرْضَ' mean?",
      arabic: "أَن يَخْسِفَ بِكُمُ الْأَرْضَ",
      rootLetters: "خ س ف | أ ر ض",
      options: [
        { id: "a", text: "That He will cause the earth to flood with you", isCorrect: false },
        { id: "b", text: "That He will cause the earth to shake with you", isCorrect: false },
        { id: "c", text: "That He will cause the earth to swallow you up", isCorrect: true },
        { id: "d", text: "That He will cause the earth to burn with you", isCorrect: false },
      ],
      explanation:
        "أَن يَخْسِفَ بِكُمُ الْأَرْضَ (An yakhsifa bikumu al-arda) means 'That He will cause the earth to swallow you up,' root خ-س-ف (swallow) and أ-ر-ض (earth) (MyIslam, Al-Maududi).",
    },
    {
      id: "q23",
      question: "What does the Arabic phrase 'فَإِذَا هِيَ تَمُورُ' mean?",
      arabic: "فَإِذَا هِيَ تَمُورُ",
      rootLetters: "م و ر",
      options: [
        { id: "a", text: "And suddenly it is calm", isCorrect: false },
        { id: "b", text: "And suddenly it is still", isCorrect: false },
        { id: "c", text: "And suddenly it is stable", isCorrect: false },
        { id: "d", text: "And suddenly it is quaking", isCorrect: true },
      ],
      explanation:
        "فَإِذَا هِيَ تَمُورُ (Fa'idha hiya tamur) means 'And suddenly it is quaking,' root م-و-ر (quaking) (Quran.com, Ibn Kathir).",
    },
        {
      id: "q24",
      question: "What does the Arabic phrase 'أَأَمِنتُم مَّن فِي السَّمَاءِ' mean?",
      arabic: "أَأَمِنتُم مَّن فِي السَّمَاءِ",
      rootLetters: "أ م ن | س م و",
      options: [
        { id: "a", text: "Do you feel secure from He who is in the heaven?", isCorrect: true },
        { id: "b", text: "Do you fear He who is in the heaven?", isCorrect: false },
        { id: "c", text: "Do you worship He who is in the heaven?", isCorrect: false },
        { id: "d", text: "Do you know He who is in the heaven?", isCorrect: false },
      ],
      explanation: "أَأَمِنتُم مَّن فِي السَّمَاءِ (A-amintum man fi as-sama') means 'Do you feel secure from He who is in the heaven?' roots أ-م-ن (secure) and س-م-و (heaven) (MyIslam, Al-Maududi).",
    },
    {
      id: "q25",
      question: "What does the Arabic phrase 'فَإِذَا أَرْسَلْنَا عَلَيْهِمْ رِيحًا صَرْصَرًا' mean?",
      arabic: "فَإِذَا أَرْسَلْنَا عَلَيْهِمْ رِيحًا صَرْصَرًا",
      rootLetters: "ر س ل | ر ي ح | ص ر ص ر",
      options: [
        { id: "a", text: "Then when We send upon them a gentle breeze", isCorrect: false },
        { id: "b", text: "Then when We send upon them a cooling wind", isCorrect: false },
        { id: "c", text: "Then when We send upon them a fruitful wind", isCorrect: false },
        { id: "d", text: "Then when We send upon them a roaring wind", isCorrect: true },
      ],
      explanation: "فَإِذَا أَرْسَلْنَا عَلَيْهِمْ رِيحًا صَرْصَرًا (Fa'idha arsalna 'alayhim rihan sarsaran) means 'Then when We send upon them a roaring wind,' roots ر-س-ل (send), ر-ي-ح (wind), ص-ر-ص-ر (roaring) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q26",
      question: "What does the Arabic phrase 'فَظَلُّواْ يُعْرِضُونَ' mean?",
      arabic: "فَظَلُّواْ يُعْرِضُونَ",
      rootLetters: "ظ ل ل | ع ر ض",
      options: [
        { id: "a", text: "So they began to believe", isCorrect: false },
        { id: "b", text: "So they continued to turn away", isCorrect: true },
        { id: "c", text: "So they started to worship", isCorrect: false },
        { id: "d", text: "So they immediately repented", isCorrect: false },
      ],
      explanation: "فَظَلُّواْ يُعْرِضُونَ (Fathallu yu'ridun) means 'So they continued to turn away,' roots ظ-ل-ل (continue) and ع-ر-ض (turn away) (MyIslam, Al-Maududi).",
    },
    {
      id: "q27",
      question: "What does the Arabic phrase 'أَوَلَمْ يَرَوْاْ إِلَى الطَّيْرِ فَوْقَهُمْ' mean?",
      arabic: "أَوَلَمْ يَرَوْاْ إِلَى الطَّيْرِ فَوْقَهُمْ",
      rootLetters: "ر ء ي | ط ي ر | ف و ق",
      options: [
        { id: "a", text: "Have they not considered the animals around them?", isCorrect: false },
        { id: "b", text: "Have they not seen the birds above them?", isCorrect: true },
        { id: "c", text: "Have they not heard the birds singing?", isCorrect: false },
        { id: "d", text: "Have they not studied the birds' creation?", isCorrect: false },
      ],
      explanation: "أَوَلَمْ يَرَوْاْ إِلَى الطَّيْرِ فَوْقَهُمْ (A-walam yaraw ila at-tayri fawqahum) means 'Have they not seen the birds above them?' roots ر-ء-ي (see), ط-ي-ر (birds), ف-و-ق (above) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q28",
      question: "What does the Arabic phrase 'مَّا يُمْسِكُهُنَّ إِلَّا الرَّحْمَٰنُ' mean?",
      arabic: "مَّا يُمْسِكُهُنَّ إِلَّا الرَّحْمَٰنُ",
      rootLetters: "م س ك | ر ح م",
      options: [
        { id: "a", text: "None holds them except the angels", isCorrect: false },
        { id: "b", text: "None guides them except the Creator", isCorrect: false },
        { id: "c", text: "None feeds them except the Provider", isCorrect: false },
        { id: "d", text: "None holds them except the Most Merciful", isCorrect: true },
      ],
      explanation: "مَّا يُمْسِكُهُنَّ إِلَّا الرَّحْمَٰنُ (Ma yumsikuhunna illa ar-Rahman) means 'None holds them except the Most Merciful,' roots م-س-ك (hold) and ر-ح-م (mercy) (MyIslam, Al-Maududi).",
    },
    {
      id: "q29",
      question: "What does the Arabic phrase 'أَمَّنْ هَٰذَا الَّذِي هُوَ جُندٌ لَّكُمْ' mean?",
      arabic: "أَمَّنْ هَٰذَا الَّذِي هُوَ جُندٌ لَّكُمْ",
      rootLetters: "م ن | ج ن د",
      options: [
        { id: "a", text: "Who is it that could be an army for you?", isCorrect: true },
        { id: "b", text: "Who is it that could be a guide for you?", isCorrect: false },
        { id: "c", text: "Who is it that could be a protector for you?", isCorrect: false },
        { id: "d", text: "Who is it that could be a helper for you?", isCorrect: false },
      ],
      explanation: "أَمَّنْ هَٰذَا الَّذِي هُوَ جُندٌ لَّكُمْ (Amman hadha alladhi huwa jundun lakum) means 'Who is it that could be an army for you?' roots م-ن (who) and ج-ن-د (army) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q30",
      question: "What does the Arabic phrase 'إِن كُلُّ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ' mean?",
      arabic: "إِن كُلُّ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ",
      rootLetters: "ك ل ل | س م و | أ ر ض",
      options: [
        { id: "a", text: "Indeed, everyone in the heavens and earth", isCorrect: true },
        { id: "b", text: "Indeed, everything in the heavens and earth", isCorrect: false },
        { id: "c", text: "Indeed, all power in the heavens and earth", isCorrect: false },
        { id: "d", text: "Indeed, all knowledge in the heavens and earth", isCorrect: false },
      ],
      explanation: "إِن كُلُّ مَن فِي السَّمَاوَاتِ وَالْأَرْضِ (In kullu man fi as-samawati wal-ard) means 'Indeed, everyone in the heavens and earth,' roots ك-ل-ل (all), س-م-و (heavens), أ-ر-ض (earth) (MyIslam, Al-Maududi).",
    },
    {
      id: "q31",
      question: "What does the Arabic phrase 'إِلَّا آتِي الرَّحْمَٰنِ عَبْدًا' mean?",
      arabic: "إِلَّا آتِي الرَّحْمَٰنِ عَبْدًا",
      rootLetters: "أ ت ي | ر ح م | ع ب د",
      options: [
        { id: "a", text: "Except as a servant to the angels", isCorrect: false },
        { id: "b", text: "Except as a worshipper to the Creator", isCorrect: false },
        { id: "c", text: "Except as a servant to the Most Merciful", isCorrect: true },
        { id: "d", text: "Except as a follower to the prophets", isCorrect: false },
      ],
      explanation: "إِلَّا آتِي الرَّحْمَٰنِ عَبْدًا (Illan ati ar-Rahmani abdan) means 'Except as a servant to the Most Merciful,' roots أ-ت-ي (come), ر-ح-م (mercy), ع-ب-د (servant) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q32",
      question: "What does the Arabic phrase 'لَقَدْ أَحْصَاهُمْ وَعَدَّهُمْ عَدًّا' mean?",
      arabic: "لَقَدْ أَحْصَاهُمْ وَعَدَّهُمْ عَدًّا",
      rootLetters: "ح ص ي | ع د د",
      options: [
        { id: "a", text: "He has enumerated them and counted them a counting", isCorrect: true },
        { id: "b", text: "He has created them and designed them perfectly", isCorrect: false },
        { id: "c", text: "He has guided them and shown them the path", isCorrect: false },
        { id: "d", text: "He has tested them and tried them thoroughly", isCorrect: false },
      ],
      explanation: "لَقَدْ أَحْصَاهُمْ وَعَدَّهُمْ عَدًّا (Laqad ahsahum wa 'addahum 'addan) means 'He has enumerated them and counted them a counting,' roots ح-ص-ي (enumerate) and ع-د-د (count) (MyIslam, Al-Maududi).",
    },
    {
      id: "q33",
      question: "What does the Arabic phrase 'وَكُلُّهُمْ آتِيهِ يَوْمَ الْقِيَامَةِ فَرْدًا' mean?",
      arabic: "وَكُلُّهُمْ آتِيهِ يَوْمَ الْقِيَامَةِ فَرْدًا",
      rootLetters: "ك ل ل | أ ت ي | ي و م | ق و م | ف ر د",
      options: [
        { id: "a", text: "And all of them will come to Him on Judgment Day in groups", isCorrect: false },
        { id: "b", text: "And all of them will come to Him on Judgment Day alone", isCorrect: true },
        { id: "c", text: "And all of them will come to Him on Judgment Day with their deeds", isCorrect: false },
        { id: "d", text: "And all of them will come to Him on Judgment Day with their families", isCorrect: false },
      ],
      explanation: "وَكُلُّهُمْ آتِيهِ يَوْمَ الْقِيَامَةِ فَرْدًا (Wa kulluhum atihi yawma al-qiyamati fardan) means 'And all of them will come to Him on Judgment Day alone,' roots ك-ل-ل (all), أ-ت-ي (come), ي-و-م (day), ق-و-م (stand), ف-ر-د (alone) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q34",
      question: "What does the Arabic phrase 'إِنَّ الَّذِينَ آمَنُوا بِرَبِّهِمْ' mean?",
      arabic: "إِنَّ الَّذِينَ آمَنُوا بِرَبِّهِمْ",
      rootLetters: "أ م ن | ر ب ب",
      options: [
        { id: "a", text: "Indeed, those who believe in their Lord", isCorrect: true },
        { id: "b", text: "Indeed, those who fear their Lord", isCorrect: false },
        { id: "c", text: "Indeed, those who worship their Lord", isCorrect: false },
        { id: "d", text: "Indeed, those who know their Lord", isCorrect: false },
      ],
      explanation: "إِنَّ الَّذِينَ آمَنُوا بِرَبِّهِمْ (Inna alladhina amanu birabbihim) means 'Indeed, those who believe in their Lord,' roots أ-م-ن (believe) and ر-ب-ب (Lord) (MyIslam, Al-Maududi).",
    },
    {
      id: "q35",
      question: "What does the Arabic phrase 'يُسْرَجُونَ' mean?",
      arabic: "يُسْرَجُونَ",
      rootLetters: "س ر ج",
      options: [
        { id: "a", text: "They will be punished", isCorrect: false },
        { id: "b", text: "They will be illuminated", isCorrect: true },
        { id: "c", text: "They will be rewarded", isCorrect: false },
        { id: "d", text: "They will be guided", isCorrect: false },
      ],
      explanation: "يُسْرَجُونَ (Yusrajon) means 'They will be illuminated,' root س-ر-ج (illuminate) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q36",
      question: "What does the Arabic phrase 'أَفَمَن يَمْشِي مُكِبًّا عَلَىٰ وَجْهِهِ' mean?",
      arabic: "أَفَمَن يَمْشِي مُكِبًّا عَلَىٰ وَجْهِهِ",
      rootLetters: "م ش ي | ك ب ب | و ج ه",
      options: [
        { id: "a", text: "Is one who walks proudly on his feet", isCorrect: false },
        { id: "b", text: "Is one who walks slowly on his path", isCorrect: false },
        { id: "c", text: "Is one who walks prone on his face", isCorrect: true },
        { id: "d", text: "Is one who walks quickly on his journey", isCorrect: false },
      ],
      explanation: "أَفَمَن يَمْشِي مُكِبًّا عَلَىٰ وَجْهِهِ (A-faman yamshi mukibban 'ala wajhih) means 'Is one who walks prone on his face,' roots م-ش-ي (walk), ك-ب-ب (prone), و-ج-ه (face) (MyIslam, Al-Maududi).",
    },
    {
      id: "q37",
      question: "What does the Arabic phrase 'أَهْدَىٰ أَمَّن يَمْشِي سَوِيًّا عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ' mean?",
      arabic: "أَهْدَىٰ أَمَّن يَمْشِي سَوِيًّا عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ",
      rootLetters: "ه د ي | م ش ي | س و ي | ص ر ط | ق و م",
      options: [
        { id: "a", text: "More guided or one who walks proudly on a wide path?", isCorrect: false },
        { id: "b", text: "More guided or one who walks slowly on a straight path?", isCorrect: false },
        { id: "c", text: "More guided or one who walks quickly on a narrow path?", isCorrect: false },
        { id: "d", text: "More guided or one who walks upright on a straight path?", isCorrect: true },
      ],
      explanation: "أَهْدَىٰ أَمَّن يَمْشِي سَوِيًّا عَلَىٰ صِرَاطٍ مُّسْتَقِيمٍ (Ahda amman yamshi sawiyyan 'ala siratin mustaqim) means 'More guided or one who walks upright on a straight path?' roots ه-د-ي (guide), م-ش-ي (walk), س-و-ي (upright), ص-ر-ط (path), ق-و-م (straight) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q38",
      question: "What does the Arabic phrase 'قُلْ هُوَ الَّذِي أَنشَأَكُمْ' mean?",
      arabic: "قُلْ هُوَ الَّذِي أَنشَأَكُمْ",
      rootLetters: "ق و ل | ن ش أ",
      options: [
        { id: "a", text: "Say: He is the One who created you", isCorrect: false },
        { id: "b", text: "Say: He is the One who guided you", isCorrect: false },
        { id: "c", text: "Say: He is the One who sustains you", isCorrect: false },
        { id: "d", text: "Say: He is the One who originated you", isCorrect: true },
      ],
      explanation: "قُلْ هُوَ الَّذِي أَنشَأَكُمْ (Qul huwa alladhi ansha'akum) means 'Say: He is the One who originated you,' roots ق-و-ل (say) and ن-ش-أ (originate) (MyIslam, Al-Maududi).",
    },
    {
      id: "q39",
      question: "What does the Arabic phrase 'وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ' mean?",
      arabic: "وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ",
      rootLetters: "ج ع ل | س م ع | ب ص ر | ف ء د",
      options: [
        { id: "a", text: "And made for you hearing and sight and hearts", isCorrect: false },
        { id: "b", text: "And made for you the hearing and sight and intellect", isCorrect: true },
        { id: "c", text: "And made for you the ears and eyes and minds", isCorrect: false },
        { id: "d", text: "And made for you the ability to hear, see and feel", isCorrect: false },
      ],
      explanation: "وَجَعَلَ لَكُمُ السَّمْعَ وَالْأَبْصَارَ وَالْأَفْئِدَةَ (Wa ja'ala lakumu as-sam'a wal-absara wal-af'idah) means 'And made for you the hearing and sight and intellect,' roots ج-ع-ل (make), س-م-ع (hearing), ب-ص-ر (sight), ف-ء-د (intellect) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q40",
      question: "What does the Arabic phrase 'قَلِيلًا مَّا تَشْكُرُونَ' mean?",
      arabic: "قَلِيلًا مَّا تَشْكُرُونَ",
      rootLetters: "ق ل ل | ش ك ر",
      options: [
        { id: "a", text: "Much do you reflect", isCorrect: false },
        { id: "b", text: "Little do you give thanks", isCorrect: true },
        { id: "c", text: "Often do you remember", isCorrect: false },
        { id: "d", text: "Rarely do you understand", isCorrect: false },
      ],
      explanation: "قَلِيلًا مَّا تَشْكُرُونَ (Qalilan ma tashkurun) means 'Little do you give thanks,' roots ق-ل-ل (little) and ش-ك-ر (thank) (MyIslam, Al-Maududi).",
    },
    {
      id: "q41",
      question: "What does the Arabic phrase 'قُلْ هُوَ الَّذِي ذَرَأَكُمْ فِي الْأَرْضِ' mean?",
      arabic: "قُلْ هُوَ الَّذِي ذَرَأَكُمْ فِي الْأَرْضِ",
      rootLetters: "ق و ل | ذ ر أ | أ ر ض",
      options: [
        { id: "a", text: "Say: He is the One who created you on earth", isCorrect: false },
        { id: "b", text: "Say: He is the One who scattered you on earth", isCorrect: false },
        { id: "c", text: "Say: He is the One who multiplied you on earth", isCorrect: true },
        { id: "d", text: "Say: He is the One who placed you on earth", isCorrect: false },
      ],
      explanation: "قُلْ هُوَ الَّذِي ذَرَأَكُمْ فِي الْأَرْضِ (Qul huwa alladhi dhara'akum fi al-ard) means 'Say: He is the One who multiplied you on earth,' roots ق-و-ل (say), ذ-ر-أ (multiply), أ-ر-ض (earth) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q42",
      question: "What does the Arabic phrase 'وَإِلَيْهِ تُحْشَرُونَ' mean?",
      arabic: "وَإِلَيْهِ تُحْشَرُونَ",
      rootLetters: "ح ش ر",
      options: [
        { id: "a", text: "And to Him you will be gathered", isCorrect: true },
        { id: "b", text: "And to Him you will return", isCorrect: false },
        { id: "c", text: "And to Him you will be accountable", isCorrect: false },
        { id: "d", text: "And to Him you will be raised", isCorrect: false },
      ],
      explanation: "وَإِلَيْهِ تُحْشَرُونَ (Wa ilayhi tuhsharun) means 'And to Him you will be gathered,' root ح-ش-ر (gather) (MyIslam, Al-Maududi).",
    },
    {
      id: "q43",
      question: "What does the Arabic phrase 'وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ' mean?",
      arabic: "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ",
      rootLetters: "ق و ل | م ت ي | و ع د",
      options: [
        { id: "a", text: "And they say: Where is this promise?", isCorrect: false },
        { id: "b", text: "And they say: When is this promise?", isCorrect: true },
        { id: "c", text: "And they say: How is this promise?", isCorrect: false },
        { id: "d", text: "And they say: Why is this promise?", isCorrect: false },
      ],
      explanation: "وَيَقُولُونَ مَتَىٰ هَٰذَا الْوَعْدُ (Wa yaquluna mata hadha al-wa'd) means 'And they say: When is this promise?' roots ق-و-ل (say), م-ت-ي (when), و-ع-د (promise) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q44",
      question: "What does the Arabic phrase 'إِن كُنتُمْ صَادِقِينَ' mean?",
      arabic: "إِن كُنتُمْ صَادِقِينَ",
      rootLetters: "ك و ن | ص د ق",
      options: [
        { id: "a", text: "If you should be truthful", isCorrect: true },
        { id: "b", text: "If you should be believers", isCorrect: false },
        { id: "c", text: "If you should be certain", isCorrect: false },
        { id: "d", text: "If you should be sincere", isCorrect: false },
      ],
      explanation: "إِن كُنتُمْ صَادِقِينَ (In kuntum sadiqin) means 'If you should be truthful,' roots ك-و-ن (be) and ص-د-ق (truthful) (MyIslam, Al-Maududi).",
    },
    {
      id: "q45",
      question: "What does the Arabic phrase 'قُلْ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ' mean?",
      arabic: "قُلْ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ",
      rootLetters: "ق و ل | ع ل م | ل ه",
      options: [
        { id: "a", text: "Say: Indeed, the knowledge is only with Allah", isCorrect: false },
        { id: "b", text: "Say: Only the knowledge is with Allah", isCorrect: true },
        { id: "c", text: "Say: All knowledge belongs to Allah", isCorrect: false },
        { id: "d", text: "Say: The knowledge comes from Allah", isCorrect: false },
      ],
      explanation: "قُلْ إِنَّمَا الْعِلْمُ عِندَ اللَّهِ (Qul innama al-'ilmu 'inda Allah) means 'Say: Only the knowledge is with Allah,' roots ق-و-ل (say), ع-ل-م (knowledge), ل-ه (Allah) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q46",
      question: "What does the Arabic phrase 'وَإِنَّا لَنَرَاكَ فِي ضَلَالٍ مُّبِينٍ' mean?",
      arabic: "وَإِنَّا لَنَرَاكَ فِي ضَلَالٍ مُّبِينٍ",
      rootLetters: "ر ء ي | ض ل ل | ب ي ن",
      options: [
        { id: "a", text: "And indeed, we see you in clear guidance", isCorrect: false },
        { id: "b", text: "And indeed, we see you in obvious error", isCorrect: false },
        { id: "c", text: "And indeed, we see you in clear misguidance", isCorrect: true },
        { id: "d", text: "And indeed, we see you in plain sight", isCorrect: false },
      ],
      explanation: "وَإِنَّا لَنَرَاكَ فِي ضَلَالٍ مُّبِينٍ (Wa inna lanaraka fi dalalin mubin) means 'And indeed, we see you in clear misguidance,' roots ر-ء-ي (see), ض-ل-ل (misguidance), ب-ي-ن (clear) (MyIslam, Al-Maududi).",
    },
    {
      id: "q47",
      question: "What does the Arabic phrase 'قُلْ إِنَّمَا أَنَا نَذِيرٌ' mean?",
      arabic: "قُلْ إِنَّمَا أَنَا نَذِيرٌ",
      rootLetters: "ق و ل | ن ذ ر",
      options: [
        { id: "a", text: "Say: I am only a guide", isCorrect: false },
        { id: "b", text: "Say: I am only a messenger", isCorrect: false },
        { id: "c", text: "Say: I am only a warner", isCorrect: false },
        { id: "d", text: "Say: I am only a warner", isCorrect: true },
      ],
      explanation: "قُلْ إِنَّمَا أَنَا نَذِيرٌ (Qul innama ana nadhir) means 'Say: I am only a warner,' roots ق-و-ل (say) and ن-ذ-ر (warn) (Quran.com, Ibn Kathir).",
    },
  ],
}
