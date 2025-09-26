export const atTakwirQuizData: SurahQuizData = {
  surahId: 81,
  surahName: "At-Takwir",
  surahArabicName: "التكوير",
  totalVerses: 29,
  type: "Meccan",
  difficulty: "Intermediate",
  introduction:
    "Surah At-Takwir (The Folding Up) is the 81st chapter of the Quran, containing 29 verses and 164 words. Revealed in Mecca, it vividly describes the cosmic upheavals that will occur on the Day of Judgment—such as the sun being folded up, stars dimmed, mountains set in motion, and oceans set ablaze. It emphatically affirms that the Quran is the revelation from Allah through the trustworthy Angel Jibril to Prophet Muhammad ﷺ, and not the speech of a madman or devil. The surah calls humanity to reflect on the signs of Allah and prepare for the inevitable Day of Reckoning.",

  additionalContextElements: [
    {
      title: "Cosmic Signs and the Truth of Revelation",
      content: `
        <div class="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
          <h3 class="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Historical Context and Reasons for Revelation</h3>
          <p class="text-orange-700 dark:text-orange-200 mb-3">
            Revealed in the early Meccan period, Surah At-Takwir responded to the Quraysh’s accusations that the Prophet ﷺ was a poet, soothsayer, or madman. It aimed to affirm the divine origin of the Quran and the truth of the Resurrection, using powerful imagery of cosmic collapse to awaken the disbelievers to the reality of the Hereafter.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Tafsir Evidence</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir explains that the opening verses depict the Day of Judgment’s cataclysmic events, demonstrating Allah’s absolute power. Al-Maududi notes that the surah refutes the Meccan pagans’ denial of prophethood and resurrection, emphasizing the Quran’s divine source through Angel Jibril.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Etymology and Meaning</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              ‘At-Takwir’ derives from the root ك-و-ر, meaning ‘to fold up’ or ‘roll up.’ It refers to the sun being folded away on Judgment Day, symbolizing the end of the world as we know it (Ibn Kathir, Quran.com).
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Cosmic upheaval: Surah Al-Infitar (82:1-5), Surah Al-Inshiqaq (84:1-5). Truth of revelation: Surah An-Najm (53:1-12), Surah Al-Haqqah (69:38-52).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Affirmation of Prophethood and the Noble Messenger",
      content: `
        <div class="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
          <h3 class="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">The Quran’s Divine Origin and the Role of Jibril</h3>
          <p class="text-indigo-700 dark:text-indigo-200 mb-3">
            The surah strongly defends the Prophet Muhammad ﷺ against accusations of insanity or falsehood, affirming that he is a noble messenger who received revelation from the trustworthy Angel Jibril. It underscores that the Quran is a reminder for all worlds, not the speech of a madman.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Tafsir Insights</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir states that the verses “Your companion is not mad” directly refute the Quraysh’s slander. Al-Maududi highlights that the mention of Jibril as “trustworthy” reinforces the reliability of the revelation process.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Prophetic Guidance and Hadith</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              A hadith in Sahih Al-Bukhari mentions that the Prophet ﷺ saw Jibril in his true form with six hundred wings, covering the horizon—a reference to the description in this surah (Ibn Kathir).
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Defense of prophethood: Surah Al-Qalam (68:2-7), Surah Yunus (10:2). Angel Jibril: Surah An-Najm (53:5-10), Surah Al-Baqarah (2:97).
            </p>
          </div>
        </div>
      `,
    },
  ],

  questions: [
    {
      id: "q1",
      question: "What does the Arabic phrase إِذَا الشَّمْسُ كُوِّرَتْ in the surah mean?",
      arabic: "إِذَا الشَّمْسُ كُوِّرَتْ",
      rootLetters: "ش م س | ك و ر",
      options: [
        { id: "a", text: "When the stars are scattered", isCorrect: false },
        { id: "b", text: "When the mountains are moved", isCorrect: false },
        { id: "c", text: "When the oceans are set ablaze", isCorrect: false },
        { id: "d", text: "When the sun is folded up", isCorrect: true },
      ],
      explanation: "إِذَا الشَّمْسُ كُوِّرَتْ means 'When the sun is folded up,' roots ش-م-س (sun) and ك-و-ر (fold) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase وَإِذَا النُّجُومُ انكَدَرَتْ mean?",
      arabic: "وَإِذَا النُّجُومُ انكَدَرَتْ",
      rootLetters: "ن ج م | ك د ر",
      options: [
        { id: "a", text: "And when the stars fall", isCorrect: true },
        { id: "b", text: "And when the seas burst forth", isCorrect: false },
        { id: "c", text: "And when the graves are overturned", isCorrect: false },
        { id: "d", text: "And when the sky is torn", isCorrect: false },
      ],
      explanation: "وَإِذَا النُّجُومُ انكَدَرَتْ means 'And when the stars fall,' roots ن-ج-م (stars) and ك-د-ر (fall/dim) (MyIslam, Al-Maududi).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase وَإِذَا الْجِبَالُ سُيِّرَتْ mean?",
      arabic: "وَإِذَا الْجِبَالُ سُيِّرَتْ",
      rootLetters: "ج ب ل | س ي ر",
      options: [
        { id: "a", text: "And when the winds are unleashed", isCorrect: false },
        { id: "b", text: "And when the mountains are set moving", isCorrect: true },
        { id: "c", text: "And when the earth is shaken", isCorrect: false },
        { id: "d", text: "And when the sun is darkened", isCorrect: false },
      ],
      explanation: "وَإِذَا الْجِبَالُ سُيِّرَتْ means 'And when the mountains are set moving,' roots ج-ب-ل (mountains) and س-ي-ر (set in motion) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase وَإِذَا الْعِشَارُ عُطِّلَتْ mean?",
      arabic: "وَإِذَا الْعِشَارُ عُطِّلَتْ",
      rootLetters: "ع ش ر | ع ط ل",
      options: [
        { id: "a", text: "And when the seas are abandoned", isCorrect: false },
        { id: "b", text: "And when the souls are paired", isCorrect: false },
        { id: "c", text: "And when the pregnant camels are neglected", isCorrect: true },
        { id: "d", text: "And when the scrolls are unfolded", isCorrect: false },
      ],
      explanation: "وَإِذَا الْعِشَارُ عُطِّلَتْ means 'And when the pregnant camels are neglected,' roots ع-ش-ر (pregnant camels) and ع-ط-ل (neglected) (MyIslam, Al-Maududi).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase وَإِذَا الْوُحُوشُ حُشِرَتْ mean?",
      arabic: "وَإِذَا الْوُحُوشُ حُشِرَتْ",
      rootLetters: "و ح ش | ح ش ر",
      options: [
        { id: "a", text: "And when the beasts are gathered", isCorrect: true },
        { id: "b", text: "And when the oceans are mixed", isCorrect: false },
        { id: "c", text: "And when the stars are blotted out", isCorrect: false },
        { id: "d", text: "And when the sun is rolled up", isCorrect: false },
      ],
      explanation: "وَإِذَا الْوُحُوشُ حُشِرَتْ means 'And when the beasts are gathered,' roots و-ح-ش (beasts) and ح-ش-ر (gathered) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase وَإِذَا الْبِحَارُ سُجِّرَتْ mean?",
      arabic: "وَإِذَا الْبِحَارُ سُجِّرَتْ",
      rootLetters: "ب ح ر | س ج ر",
      options: [
        { id: "a", text: "And when the graves are overturned", isCorrect: false },
        { id: "b", text: "And when the souls are reunited", isCorrect: false },
        { id: "c", text: "And when the seas are set ablaze", isCorrect: true },
        { id: "d", text: "And when the mountains are flattened", isCorrect: false },
      ],
      explanation: "وَإِذَا الْبِحَارُ سُجِّرَتْ means 'And when the seas are set ablaze,' roots ب-ح-ر (seas) and س-ج-ر (ignited) (MyIslam, Al-Maududi).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase وَإِذَا النُّفُوسُ زُوِّجَتْ mean?",
      arabic: "وَإِذَا النُّفُوسُ زُوِّجَتْ",
      rootLetters: "ن ف س | ز و ج",
      options: [
        { id: "a", text: "And when the souls are paired", isCorrect: true },
        { id: "b", text: "And when the scrolls are spread", isCorrect: false },
        { id: "c", text: "And when the stars are dimmed", isCorrect: false },
        { id: "d", text: "And when the sun is wrapped", isCorrect: false },
      ],
      explanation: "وَإِذَا النُّفُوسُ زُوِّجَتْ means 'And when the souls are paired,' roots ن-ف-س (soul) and ز-و-ج (paired) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase وَإِذَا الْمَوْءُودَةُ سُئِلَتْ mean?",
      arabic: "وَإِذَا الْمَوْءُودَةُ سُئِلَتْ",
      rootLetters: "م ء د | س ء ل",
      options: [
        { id: "a", text: "And when the buried infant girl is asked", isCorrect: true },
        { id: "b", text: "And when the beasts are gathered", isCorrect: false },
        { id: "c", text: "And when the seas are filled", isCorrect: false },
        { id: "d", text: "And when the sun is extinguished", isCorrect: false },
      ],
      explanation: "وَإِذَا الْمَوْءُودَةُ سُئِلَتْ means 'And when the buried infant girl is asked,' roots م-ء-د (buried alive) and س-ء-ل (asked) (MyIslam, Al-Maududi).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase بِأَيِّ ذَنبٍ قُتِلَتْ mean?",
      arabic: "بِأَيِّ ذَنبٍ قُتِلَتْ",
      rootLetters: "ذ ن ب | ق ت ل",
      options: [
        { id: "a", text: "For what wealth she was left", isCorrect: false },
        { id: "b", text: "For what faith she was punished", isCorrect: false },
        { id: "c", text: "For what sin she was killed", isCorrect: true },
        { id: "d", text: "For what deed she was buried", isCorrect: false },
      ],
      explanation: "بِأَيِّ ذَنبٍ قُتِلَتْ means 'For what sin she was killed,' roots ذ-ن-ب (sin) and ق-ت-ل (killed) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase وَإِذَا الصُّحُفُ نُشِرَتْ mean?",
      arabic: "وَإِذَا الصُّحُفُ نُشِرَتْ",
      rootLetters: "ص ح ف | ن ش ر",
      options: [
        { id: "a", text: "And when the skies are split", isCorrect: false },
        { id: "b", text: "And when the souls are called", isCorrect: false },
        { id: "c", text: "And when the stars are scattered", isCorrect: false },
        { id: "d", text: "And when the scrolls are spread open", isCorrect: true },
      ],
      explanation: "وَإِذَا الصُّحُفُ نُشِرَتْ means 'And when the scrolls are spread open,' roots ص-ح-ف (scrolls) and ن-ش-ر (spread) (MyIslam, Al-Maududi).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase وَإِذَا السَّمَاءُ كُشِطَتْ mean?",
      arabic: "وَإِذَا السَّمَاءُ كُشِطَتْ",
      rootLetters: "س م و | ك ش ط",
      options: [
        { id: "a", text: "And when the earth is stretched", isCorrect: false },
        { id: "b", text: "And when the sky is stripped away", isCorrect: true },
        { id: "c", text: "And when the sun is rolled", isCorrect: false },
        { id: "d", text: "And when the mountains are blown", isCorrect: false },
      ],
      explanation: "وَإِذَا السَّمَاءُ كُشِطَتْ means 'And when the sky is stripped away,' roots س-م-و (sky) and ك-ش-ط (strip off) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase وَإِذَا الْجَحِيمُ سُعِّرَتْ mean?",
      arabic: "وَإِذَا الْجَحِيمُ سُعِّرَتْ",
      rootLetters: "ج ح م | س ع ر",
      options: [
        { id: "a", text: "And when the records are shown", isCorrect: false },
        { id: "b", text: "And when the beasts are gathered", isCorrect: false },
        { id: "c", text: "And when the souls are paired", isCorrect: false },
        { id: "d", text: "And when the Hellfire is set ablaze", isCorrect: true },
      ],
      explanation: "وَإِذَا الْجَحِيمُ سُعِّرَتْ means 'And when the Hellfire is set ablaze,' roots ج-ح-م (Hellfire) and س-ع-ر (heated) (MyIslam, Al-Maududi).",
    },
    {
      id: "q13",
      question: "What does the Arabic phrase وَإِذَا الْجَنَّةُ أُزْلِفَتْ mean?",
      arabic: "وَإِذَا الْجَنَّةُ أُزْلِفَتْ",
      rootLetters: "ج ن ن | ز ل ف",
      options: [
        { id: "a", text: "And when Paradise is brought near", isCorrect: true },
        { id: "b", text: "And when the sun is darkened", isCorrect: false },
        { id: "c", text: "And when the seas are mixed", isCorrect: false },
        { id: "d", text: "And when the sky is torn", isCorrect: false },
      ],
      explanation: "وَإِذَا الْجَنَّةُ أُزْلِفَتْ means 'And when Paradise is brought near,' roots ج-ن-ن (Paradise) and ز-ل-ف (brought near) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q14",
      question: "What does the Arabic phrase عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ mean?",
      arabic: "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ",
      rootLetters: "ع ل م | ن ف س | ح ض ر",
      options: [
        { id: "a", text: "A soul will know what it has earned", isCorrect: false },
        { id: "b", text: "A soul will know what it has hidden", isCorrect: false },
        { id: "c", text: "A soul will know what it has brought", isCorrect: true },
        { id: "d", text: "A soul will know what it has lost", isCorrect: false },
      ],
      explanation: "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ means 'A soul will know what it has brought,' roots ع-ل-م (know), ن-ف-س (soul), ح-ض-ر (brought) (MyIslam, Al-Maududi).",
    },
    {
      id: "q15",
      question: "What does the Arabic phrase فَلَا أُقْسِمُ بِالْخُنَّسِ mean?",
      arabic: "فَلَا أُقْسِمُ بِالْخُنَّسِ",
      rootLetters: "ق س م | خ ن س",
      options: [
        { id: "a", text: "But I swear by the planets", isCorrect: false },
        { id: "b", text: "But I swear by the scribes", isCorrect: false },
        { id: "c", text: "But I swear by the receding stars", isCorrect: true },
        { id: "d", text: "But I swear by the revolving heavens", isCorrect: false },
      ],
      explanation: "فَلَا أُقْسِمُ بِالْخُنَّسِ means 'But I swear by the receding stars,' roots ق-س-م (swear) and خ-ن-س (recede) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q16",
      question: "What does the Arabic phrase الْجَوَارِ الْكُنَّسِ mean?",
      arabic: "الْجَوَارِ الْكُنَّسِ",
      rootLetters: "ج و ر | ك ن س",
      options: [
        { id: "a", text: "The flowing oceans", isCorrect: false },
        { id: "b", text: "The planets that recede and hide", isCorrect: true },
        { id: "c", text: The soaring birds, isCorrect: false },
        { id: "d", text: "The revolving sun and moon", isCorrect: false },
      ],
      explanation: "الْجَوَارِ الْكُنَّسِ means 'The planets that recede and hide,' roots ج-و-ر (flowing) and ك-ن-س (hide) (MyIslam, Al-Maududi).",
    },
    {
      id: "q17",
      question: "What does the Arabic phrase وَاللَّيْلِ إِذَا عَسْعَسَ mean?",
      arabic: "وَاللَّيْلِ إِذَا عَسْعَسَ",
      rootLetters: "ل ي ل | ع س ع س",
      options: [
        { id: "a", text: "And by the night when it departs", isCorrect: true },
        { id: "b", text: "And by the night when it approaches", isCorrect: false },
        { id: "c", text: "And by the night when it darkens", isCorrect: false },
        { id: "d", text: "And by the night when it deepens", isCorrect: false },
      ],
      explanation: "وَاللَّيْلِ إِذَا عَسْعَسَ means 'And by the night when it departs,' roots ل-ي-ل (night) and ع-س-ع-س (depart) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q18",
      question: "What does the Arabic phrase وَالصُّبْحِ إِذَا تَنَفَّسَ mean?",
      arabic: "وَالصُّبْحِ إِذَا تَنَفَّسَ",
      rootLetters: "ص ب ح | ت ن ف س",
      options: [
        { id: "a", text: "And by the dawn when it brightens", isCorrect: false },
        { id: "b", text: "And by the dawn when it breathes", isCorrect: true },
        { id: "c", text: "And by the dawn when it breaks", isCorrect: false },
        { id: "d", text: "And by the dawn when it spreads", isCorrect: false },
      ],
      explanation: "وَالصُّبْحِ إِذَا تَنَفَّسَ means 'And by the dawn when it breathes,' roots ص-ب-ح (dawn) and ت-ن-ف-س (breathe) (MyIslam, Al-Maududi).",
    },
    {
      id: "q19",
      question: "What does the Arabic phrase إِنَّهُ لَقَوْلُ رَسُولٍ كَرِيمٍ mean?",
      arabic: "إِنَّهُ لَقَوْلُ رَسُولٍ كَرِيمٍ",
      rootLetters: "ق و ل | ر س ل | ك ر م",
      options: [
        { id: "a", text: "Indeed, it is the word of a noble Messenger", isCorrect: true },
        { id: "b", text: "Indeed, it is the speech of a truthful prophet", isCorrect: false },
        { id: "c", text: "Indeed, it is the revelation of a mighty Lord", isCorrect: false },
        { id: "d", text: "Indeed, it is the reminder of a wise book", isCorrect: false },
      ],
      explanation: "إِنَّهُ لَقَوْلُ رَسُولٍ كَرِيمٍ means 'Indeed, it is the word of a noble Messenger,' roots ق-و-ل (word), ر-س-ل (messenger), ك-ر-م (noble) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q20",
      question: "What does the Arabic phrase ذِي قُوَّةٍ عِندَ ذِي الْعَرْشِ مَكِينٍ mean?",
      arabic: "ذِي قُوَّةٍ عِندَ ذِي الْعَرْشِ مَكِينٍ",
      rootLetters: "ق و ة | ع ر ش | م ك ن",
      options: [
        { id: "a", text: "Full of strength, with the Owner of the Throne, secure", isCorrect: true },
        { id: "b", text: "Full of wisdom, with the Lord of the Worlds, honored", isCorrect: false },
        { id: "c", text: "Full of knowledge, with the Knower of the unseen, firm", isCorrect: false },
        { id: "d", text: "Full of light, with the Creator of all, exalted", isCorrect: false },
      ],
      explanation: "ذِي قُوَّةٍ عِندَ ذِي الْعَرْشِ مَكِينٍ means 'Full of strength, with the Owner of the Throne, secure,' roots ق-و-ة (strength), ع-ر-ش (throne), م-ك-ن (secure) (MyIslam, Al-Maududi).",
    },
    {
      id: "q21",
      question: "What does the Arabic phrase مُطَاعٍ ثَمَّ أَمِينٍ mean?",
      arabic: "مُطَاعٍ ثَمَّ أَمِينٍ",
      rootLetters: "ط و ع | أ م ن",
      options: [
        { id: "a", text: "Obeyed and trustworthy", isCorrect: true },
        { id: "b", text: "Strong and faithful", isCorrect: false },
        { id: "c", text: "Noble and truthful", isCorrect: false },
        { id: "d", text: "Honored and respected", isCorrect: false },
      ],
      explanation: "مُطَاعٍ ثَمَّ أَمِينٍ means 'Obeyed and trustworthy,' roots ط-و-ع (obeyed) and أ-م-ن (trustworthy) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q22",
      question: "What does the Arabic phrase وَمَا صَاحِبُكُم بِمَجْنُونٍ mean?",
      arabic: "وَمَا صَاحِبُكُم بِمَجْنُونٍ",
      rootLetters: "ص ح ب | ج ن ن",
      options: [
        { id: "a", text: "And your companion is not a poet", isCorrect: false },
        { id: "b", text: "And your companion is not a liar", isCorrect: false },
        { id: "c", text: "And your companion is not a soothsayer", isCorrect: false },
        { id: "d", text: "And your companion is not mad", isCorrect: true },
      ],
      explanation: "وَمَا صَاحِبُكُم بِمَجْنُونٍ means 'And your companion is not mad,' roots ص-ح-ب (companion) and ج-ن-ن (mad) (MyIslam, Al-Maududi).",
    },
    {
      id: "q23",
      question: "What does the Arabic phrase وَلَقَدْ رَآهُ بِالْأُفُقِ الْمُبِينِ mean?",
      arabic: "وَلَقَدْ رَآهُ بِالْأُفُقِ الْمُبِينِ",
      rootLetters: "ر ء ي | أ ف ق | ب ي ن",
      options: [
        { id: "a", text: "And he certainly saw him on the clear horizon", isCorrect: true },
        { id: "b", text: "And he certainly met him in the highest heaven", isCorrect: false },
        { id: "c", text: "And he certainly heard him in the deep night", isCorrect: false },
        { id: "d", text: "And he certainly knew him by the clear signs", isCorrect: false },
      ],
      explanation: "وَلَقَدْ رَآهُ بِالْأُفُقِ الْمُبِينِ means 'And he certainly saw him on the clear horizon,' roots ر-ء-ي (see), أ-ف-ق (horizon), ب-ي-ن (clear) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q24",
      question: "What does the Arabic phrase وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ mean?",
      arabic: "وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ",
      rootLetters: "غ ي ب | ض ن ن",
      options: [
        { id: "a", text: "And he is not withholds the unseen", isCorrect: false },
        { id: "b", text: "And he is not ignorant of the unseen", isCorrect: false },
        { id: "c", text: "And he is not stingy with the unseen", isCorrect: true },
        { id: "d", text: "And he is not doubtful about the unseen", isCorrect: false },
      ],
      explanation: "وَمَا هُوَ عَلَى الْغَيْبِ بِضَنِينٍ means 'And he is not stingy with the unseen,' roots غ-ي-ب (unseen) and ض-ن-ن (stingy) (MyIslam, Al-Maududi).",
    },
    {
      id: "q25",
      question: "What does the Arabic phrase وَمَا هُوَ بِقَوْلِ شَيْطَانٍ رَجِيمٍ mean?",
      arabic: "وَمَا هُوَ بِقَوْلِ شَيْطَانٍ رَجِيمٍ",
      rootLetters: "ق و ل | ش ط ن | ر ج م",
      options: [
        { id: "a", text: "And it is not the word of an outcast devil", isCorrect: true },
        { id: "b", text: "And it is not the word of a lying soothsayer", isCorrect: false },
        { id: "c", text: "And it is not the word of a mad poet", isCorrect: false },
        { id: "d", text: "And it is not the word of a false god", isCorrect: false },
      ],
      explanation: "وَمَا هُوَ بِقَوْلِ شَيْطَانٍ رَجِيمٍ means 'And it is not the word of an outcast devil,' roots ق-و-ل (word), ش-ط-ن (devil), ر-ج-م (stoned/outcast) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q26",
      question: "What does the Arabic phrase فَأَيْنَ تَذْهَبُونَ mean?",
      arabic: "فَأَيْنَ تَذْهَبُونَ",
      rootLetters: "أ ي ن | ذ ه ب",
      options: [
        { id: "a", text: "So what will you believe?", isCorrect: false },
        { id: "b", text: "So where are you going?", isCorrect: true },
        { id: "c", text: "So what will you do?", isCorrect: false },
        { id: "d", text: "So when will you learn?", isCorrect: false },
      ],
      explanation: "فَأَيْنَ تَذْهَبُونَ means 'So where are you going?' roots أ-ي-ن (where) and ذ-ه-ب (go) (MyIslam, Al-Maududi).",
    },
    {
      id: "q27",
      question: "What does the Arabic phrase إِنْ هُوَ إِلَّا ذِكْرٌ لِّلْعَالَمِينَ mean?",
      arabic: "إِنْ هُوَ إِلَّا ذِكْرٌ لِّلْعَالَمِينَ",
      rootLetters: "ذ ك ر | ع ل م",
      options: [
        { id: "a", text: "It is only a warning to the worlds", isCorrect: false },
        { id: "b", text: "It is only a reminder for all worlds", isCorrect: true },
        { id: "c", text: "It is only a revelation to mankind", isCorrect: false },
        { id: "d", text: "It is only a message for the believers", isCorrect: false },
      ],
      explanation: "إِنْ هُوَ إِلَّا ذِكْرٌ لِّلْعَالَمِينَ means 'It is only a reminder for all worlds,' roots ذ-ك-ر (reminder) and ع-ل-م (worlds) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q28",
      question: "What does the Arabic phrase لِمَن شَاءَ مِنكُمْ أَن يَسْتَقِيمَ mean?",
      arabic: "لِمَن شَاءَ مِنكُمْ أَن يَسْتَقِيمَ",
      rootLetters: "ش ي ء | ق و م",
      options: [
        { id: "a", text: "For whoever wishes to believe", isCorrect: false },
        { id: "b", text: "For whoever wishes to see", isCorrect: false },
        { id: "c", text: "For whoever wishes to hear", isCorrect: false },
        { id: "d", text: "For whoever wishes to be straight", isCorrect: true },
      ],
      explanation: "لِمَن شَاءَ مِنكُمْ أَن يَسْتَقِيمَ means 'For whoever wishes to be straight,' roots ش-ي-ء (wish) and ق-و-م (straight) (MyIslam, Al-Maududi).",
    },
    {
      id: "q29",
      question: "What does the Arabic phrase وَمَا تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ رَبُّ الْعَالَمِينَ mean?",
      arabic: "وَما تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ رَبُّ الْعَالَمِينَ",
      rootLetters: "ش ي ء | ر ب ب | ع ل م",
      options: [
        { id: "a", text: "And you cannot will unless Allah wills", isCorrect: false },
        { id: "b", text: "And you cannot know unless Allah knows", isCorrect: false },
        { id: "c", text: "And you cannot will except by the will of Allah", isCorrect: true },
        { id: "d", text: "And you cannot succeed unless Allah helps", isCorrect: false },
      ],
      explanation: "وَما تَشَاءُونَ إِلَّا أَن يَشَاءَ اللَّهُ رَبُّ الْعَالَمِينَ means 'And you cannot will except by the will of Allah,' roots ش-ي-ء (will), ر-ب-ب (Lord), ع-ل-م (worlds) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q30",
      question: "What is the main theme of Surah At-Takwir?",
      arabic: "سورة التكوير",
      rootLetters: "ت ك و ي ر",
      options: [
        { id: "a", text: "Cosmic upheavals of Judgment Day and the truth of revelation", isCorrect: true },
        { id: "b", text: "Laws of inheritance and family rights", isCorrect: false },
        { id: "c", text: "Stories of previous prophets and nations", isCorrect: false },
        { id: "d", text: "Rules of prayer and fasting", isCorrect: false },
      ],
      explanation: "Surah At-Takwir focuses on cosmic upheavals of Judgment Day and affirms the Quran's divine origin through Angel Jibril to Prophet Muhammad ﷺ (Ibn Kathir, Al-Maududi).",
    },
  ],
};
