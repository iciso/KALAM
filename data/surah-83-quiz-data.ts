
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
        { id: "a", text: "On thrones, observing", isCorrect: true },
        { id: "b", text: "On floors, sitting", isCorrect: false },
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
        { id: "a", text: "You recognize in their faces the radiance of bliss", isCorrect: true },
        { id: "b", text: "You see in their faces signs of worry", isCorrect: false },
        { id: "c", text: "You notice in their faces marks of sadness", isCorrect: false },
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
        { id: "a", text: "Its seal is musk", isCorrect: true },
        { id: "b", text: "Its taste is bitter", isCorrect: false },
        { id: "c", text: "Its color is dark", isCorrect: false },
        { id: "d", text: "Its smell is foul", isCorrect: false },
      ],
      explanation: "خِتَامُهُ مِسْكٌ (Khitamuhu misk) means 'Its seal is musk,' roots خ-ت-م (seal) and م-س-ك (musk).",
    },
    {
      id: "q25",
      question: "What does the Arabic phrase 'وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ' mean?",
      arabic: "وَفِي ذَٰلِكَ فَلْيَتَنَافَسِ الْمُتَنَافِسُونَ",
      rootLetters: "ن ف س",
      options: [
        { id: "a", text: "And for this let the competitors compete", isCorrect: true },
        { id: "b", text: "And from this let people turn away", isCorrect: false },
        { id: "c", text: "And about this let people doubt", isCorrect: false },
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
        { id: "a", text: "And its mixture is from Tasnim", isCorrect: true },
        { id: "b", text: "And its source is from earth", isCorrect: false },
        { id: "c", text: "And its origin is from clay", isCorrect: false },
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
        { id: "a", text: "A spring from which drink the brought-near", isCorrect: true },
        { id: "b", text: "A well from which drink the distant", isCorrect: false },
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
        { id: "a", text: "Indeed, those who committed crimes used to laugh at those who believed", isCorrect: true },
        { id: "b", text: "Indeed, those who believed used to laugh at the criminals", isCorrect: false },
        { id: "c", text: "Indeed, those who repented used to cry with believers", isCorrect: false },
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
        { id: "a", text: "And when they passed by them, they would exchange glances", isCorrect: true },
        { id: "b", text: "And when they passed by them, they would bow respectfully", isCorrect: false },
        { id: "c", text: "And when they passed by them, they would greet warmly", isCorrect: false },
        { id: "d", text: "And when they passed by them, they would offer help", isCorrect: false },
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
