export const alInfitarQuizData: SurahQuizData = {
  surahId: 82,
  surahName: "Al-Infitar",
  surahArabicName: "الإنفطار",
  totalVerses: 19,
  type: "Meccan",
  difficulty: "Intermediate",
  introduction:
    "Surah Al-Infitar (The Splitting Open) is the 82nd chapter of the Quran, containing 19 verses and 81 words. Revealed in Mecca, it vividly describes the cosmic upheaval of the Day of Judgment—when the sky splits, stars scatter, seas burst forth, and graves are overturned. It emphasizes that every soul will know its deeds, recorded by noble angels, and highlights Allah’s absolute power over creation while warning of humanity’s negligence toward the reality of accountability.",
  additionalContextElements: [
    {
      title: "Cosmic Upheaval and Divine Accountability",
      content: `
        <div class="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
          <h3 class="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Historical Context and Reasons for Revelation</h3>
          <p class="text-orange-700 dark:text-orange-200 mb-3">
            Revealed in Mecca during the early period of the Prophet’s mission, Surah Al-Infitar addressed the Quraysh, who denied the Day of Judgment and mocked the concept of resurrection. It aims to awaken them to the reality of divine accountability and the transient nature of worldly life.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Tafsir Evidence</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir explains that the surah’s opening verses depict the cosmic collapse signaling the Day of Judgment, emphasizing Allah’s power to dismantle and resurrect. Al-Maududi notes that it counters the Meccans’ rejection of accountability, using vivid imagery to instill awe and urgency.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Etymology and Meaning</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              ‘Al-Infitar’ derives from the root ف-ط-ر, meaning ‘to split’ or ‘cleave asunder.’ It refers to the splitting of the sky, a cataclysmic event marking the onset of Judgment Day, as per Ibn Kathir and Quran.com translations.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Cosmic upheaval: Surah At-Takwir (81:1-6), Surah Az-Zalzalah (99:1-2). Divine accountability: Surah Al-Mutaffifin (83:7-17), Surah Al-Inshiqaq (84:1-5).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Recording Angels and Human Negligence",
      content: `
        <div class="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
          <h3 class="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Noble Recorders and Consequences</h3>
          <p class="text-indigo-700 dark:text-indigo-200 mb-3">
            The surah highlights noble angels recording every deed, underscoring divine justice. It rebukes humanity for negligence (ghaflah) toward Allah’s signs and the Day of Judgment, contrasting the fates of the righteous and the wicked.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Tafsir Insights</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir states that ‘noble recorders’ are angels assigned to every soul, meticulously documenting actions. Al-Maududi emphasizes the rhetorical question about human negligence, urging reflection on Allah’s power and the inevitability of judgment.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Prophetic Guidance and Hadith</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              A hadith in Sahih Muslim narrates that the Prophet ﷺ recited Surah Al-Infitar and Al-Inshiqaq in congregational prayers, emphasizing their themes of cosmic upheaval and accountability to instill fear of the Day of Judgment.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Recording angels: Surah Qaf (50:17-18), Surah At-Tariq (86:4). Human negligence: Surah Al-Mutaffifin (83:14), Surah Al-Qiyamah (75:5-6).
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Al-Infitar, الإنفطار?",
      arabic: "الإنفطار",
      rootLetters: "ف ط ر",
      options: [
        { id: "a", text: "The Overwhelming", isCorrect: false },
        { id: "b", text: "The Night Visitor", isCorrect: false },
        { id: "c", text: "The Splitting Open", isCorrect: true },
        { id: "d", text: "The Most High", isCorrect: false },
      ],
      explanation: "الإنفطار (Al-Infitar) means 'The Splitting Open,' derived from the root ف-ط-ر, referring to the sky splitting on the Day of Judgment (Ibn Kathir, Quran.com).",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'إِذَا السَّمَاءُ انفَطَرَتْ' mean?",
      arabic: "إِذَا السَّمَاءُ انفَطَرَتْ",
      rootLetters: "س م و | ف ط ر",
      options: [
        { id: "a", text: "When the stars scatter", isCorrect: false },
        { id: "b", text: "When the seas burst forth", isCorrect: false },
        { id: "c", text: "When the graves are overturned", isCorrect: false },
        { id: "d", text: "When the sky splits open", isCorrect: true },
      ],
      explanation: "إِذَا السَّمَاءُ انفَطَرَتْ (Idha as-sama’u infatarat) means 'When the sky splits open,' roots س-م-و (sky) and ف-ط-ر (split) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'وَإِذَا الْكَوَاكِبُ انتَثَرَتْ' mean?",
      arabic: "وَإِذَا الْكَوَاكِبُ انتَثَرَتْ",
      rootLetters: "ك و ك ب | ن ث ر",
      options: [
        { id: "a", text: "And when the seas are made to gush", isCorrect: false },
        { id: "b", text: "And when the stars scatter", isCorrect: true },
        { id: "c", text: "And when the graves are overturned", isCorrect: false },
        { id: "d", text: "And when the sky is cleaved", isCorrect: false },
      ],
      explanation: "وَإِذَا الْكَوَاكِبُ انتَثَرَتْ (Wa idha al-kawakibu intatharat) means 'And when the stars scatter,' roots ك-و-ك-ب (stars) and ن-ث-ر (scatter) (MyIslam, Al-Maududi).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'وَإِذَا الْبِحَارُ فُجِّرَتْ' mean?",
      arabic: "وَإِذَا الْبِحَارُ فُجِّرَتْ",
      rootLetters: "ب ح ر | ف ج ر",
      options: [
        { id: "a", text: "And when the stars fall", isCorrect: false },
        { id: "b", text: "And when the graves are turned", isCorrect: false },
        { id: "c", text: "And when the seas burst forth", isCorrect: true },
        { id: "d", text: "And when the sky splits", isCorrect: false },
      ],
      explanation: "وَإِذَا الْبِحَارُ فُجِّرَتْ (Wa idha al-biharu fujjirat) means 'And when the seas burst forth,' roots ب-ح-ر (seas) and ف-ج-ر (burst) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'وَإِذَا الْقُبُورُ بُعْثِرَتْ' mean?",
      arabic: "وَإِذَا الْقُبُورُ بُعْثِرَتْ",
      rootLetters: "ق ب ر | ب ع ث ر",
      options: [
        { id: "a", text: "And when the graves are overturned", isCorrect: true },
        { id: "b", text: "And when the seas are flooded", isCorrect: false },
        { id: "c", text: "And when the stars are scattered", isCorrect: false },
        { id: "d", text: "And when the sky is torn", isCorrect: false },
      ],
      explanation: "وَإِذَا الْقُبُورُ بُعْثِرَتْ (Wa idha al-quburu bu’thirat) means 'And when the graves are overturned,' roots ق-ب-ر (graves) and ب-ع-ث-ر (overturned) (MyIslam, Al-Maududi).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ' mean?",
      arabic: "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ",
      rootLetters: "ع ل م | ن ف س | ح ض ر",
      options: [
        { id: "a", text: "A soul will know what it has hidden", isCorrect: false },
        { id: "b", text: "A soul will know what it has brought", isCorrect: true },
        { id: "c", text: "A soul will know what it has forgotten", isCorrect: false },
        { id: "d", text: "A soul will know what it has earned", isCorrect: false },
      ],
      explanation: "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ (‘Alimat nafsun ma ahdarat) means 'A soul will know what it has brought,' roots ع-ل-م (know), ن-ف-س (soul), ح-ض-ر (brought) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ' mean?",
      arabic: "يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ",
      rootLetters: "أ ن س | غ ر ر | ر ب ب | ك ر م",
      options: [
        { id: "a", text: "O mankind, what has deceived you concerning your Generous Lord?", isCorrect: true },
        { id: "b", text: "O mankind, what has guided you to your Mighty Lord?", isCorrect: false },
        { id: "c", text: "O mankind, what has pleased you with your Eternal Lord?", isCorrect: false },
        { id: "d", text: "O mankind, what has saved you from your Just Lord?", isCorrect: false },
      ],
      explanation: "يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ (Ya ayyuha al-insanu ma gharraka birabbika al-karim) means 'O mankind, what has deceived you concerning your Generous Lord?' roots أ-ن-س (mankind), غ-ر-ر (deceived), ر-ب-ب (Lord), ك-ر-م (generous) (MyIslam, Al-Maududi).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ' mean?",
      arabic: "الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ",
      rootLetters: "خ ل ق | س و ي | ع د ل",
      options: [
        { id: "a", text: "Who guided you, shaped you, and led you", isCorrect: false },
        { id: "b", text: "Who created you, forgave you, and saved you", isCorrect: false },
        { id: "c", text: "Who made you, blessed you, and honored you", isCorrect: false },
        { id: "d", text: "Who created you, proportioned you, and balanced you", isCorrect: true },
      ],
      explanation: "الَّذِي خَلَقَكَ فَسَوَّاكَ فَعَدَلَكَ (Alladhi khalaqaka fasawwaka fa‘adalak) means 'Who created you, proportioned you, and balanced you,' roots خ-ل-ق (created), س-و-ي (proportioned), ع-د-ل (balanced) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'فِي أَيِّ صُورَةٍ مَّا شَاءَ رَكَّبَكَ' mean?",
      arabic: "فِي أَيِّ صُورَةٍ مَّا شَاءَ رَكَّبَكَ",
      rootLetters: "ص و ر | ش ي ء | ر ك ب",
      options: [
        { id: "a", text: "In whatever path He willed, He guided you", isCorrect: false },
        { id: "b", text: "In whatever place He willed, He placed you", isCorrect: false },
        { id: "c", text: "In whatever form He willed, He assembled you", isCorrect: true },
        { id: "d", text: "In whatever time He willed, He created you", isCorrect: false },
      ],
      explanation: "فِي أَيِّ صُورَةٍ مَّا شَاءَ رَكَّبَكَ (Fi ayyi suratin ma sha’a rakkabak) means 'In whatever form He willed, He assembled you,' roots ص-و-ر (form), ش-ي-ء (will), ر-ك-ب (assembled) (MyIslam, Al-Maududi).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ' mean?",
      arabic: "كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ",
      rootLetters: "ك ذ ب | د ي ن",
      options: [
        { id: "a", text: "No, but you believe in the Judgment", isCorrect: false },
        { id: "b", text: "No, but you seek the Judgment", isCorrect: false },
        { id: "c", text: "No, but you fear the Judgment", isCorrect: false },
        { id: "d", text: "No, but you deny the Judgment", isCorrect: true },
      ],
      explanation: "كَلَّا بَلْ تُكَذِّبُونَ بِالدِّينِ (Kalla bal tukadhdhibuna bid-din) means 'No, but you deny the Judgment,' roots ك-ذ-ب (deny) and د-ي-ن (Judgment/religion) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ' mean?",
      arabic: "وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ",
      rootLetters: "ح ف ظ",
      options: [
        { id: "a", text: "And indeed, over you are guardians", isCorrect: true },
        { id: "b", text: "And indeed, over you are judges", isCorrect: false },
        { id: "c", text: "And indeed, over you are guides", isCorrect: false },
        { id: "d", text: "And indeed, over you are saviors", isCorrect: false },
      ],
      explanation: "وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ (Wa inna ‘alaykum lahafizhin) means 'And indeed, over you are guardians,' root ح-ف-ظ (guardians) (MyIslam, Al-Maududi).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'كِرَامًا كَاتِبِينَ' mean?",
      arabic: "كِرَامًا كَاتِبِينَ",
      rootLetters: "ك ر م | ك ت ب",
      options: [
        { id: "a", text: "Merciful protectors", isCorrect: false },
        { id: "b", text: "Honest judges", isCorrect: false },
        { id: "c", text: "Righteous guides", isCorrect: false },
        { id: "d", text: "Noble recorders", isCorrect: true },
      ],
      explanation: "كِرَامًا كَاتِبِينَ (Kiraman katibin) means 'Noble recorders,' roots ك-ر-م (noble) and ك-ت-ب (recorders) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q13",
      question: "What does the Arabic phrase 'يَعْلَمُونَ مَا تَفْعَلُونَ' mean?",
      arabic: "يَعْلَمُونَ مَا تَفْعَلُونَ",
      rootLetters: "ع ل م | ف ع ل",
      options: [
        { id: "a", text: "They know what you do", isCorrect: true },
        { id: "b", text: "They guide what you do", isCorrect: false },
        { id: "c", text: "They judge what you do", isCorrect: false },
        { id: "d", text: "They hide what you do", isCorrect: false },
      ],
      explanation: "يَعْلَمُونَ مَا تَفْعَلُونَ (Ya‘lamuna ma taf‘alun) means 'They know what you do,' roots ع-ل-م (know) and ف-ع-ل (do) (MyIslam, Al-Maududi).",
    },
    {
      id: "q14",
      question: "What does the Arabic phrase 'إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ' mean?",
      arabic: "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ",
      rootLetters: "ب ر ر | ن ع م",
      options: [
        { id: "a", text: "Indeed, the wicked are in punishment", isCorrect: false },
        { id: "b", text: "Indeed, the sinners are in loss", isCorrect: false },
        { id: "c", text: "Indeed, the righteous are in bliss", isCorrect: true },
        { id: "d", text: "Indeed, the disbelievers are in regret", isCorrect: false },
      ],
      explanation: "إِنَّ الْأَبْرَارَ لَفِي نَعِيمٍ (Inna al-abrara lafi na‘im) means 'Indeed, the righteous are in bliss,' roots ب-ر-ر (righteous) and ن-ع-م (bliss) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q15",
      question: "What does the Arabic phrase 'وَإِنَّ الْفُجَّارَ لَفِي جَحِيمٍ' mean?",
      arabic: "وَإِنَّ الْفُجَّارَ لَفِي جَحِيمٍ",
      rootLetters: "ف ج ر | ج ح م",
      options: [
        { id: "a", text: "And indeed, the righteous are in paradise", isCorrect: false },
        { id: "b", text: "And indeed, the wicked are in hellfire", isCorrect: true },
        { id: "c", text: "And indeed, the believers are in bliss", isCorrect: false },
        { id: "d", text: "And indeed, the sinners are in peace", isCorrect: false },
      ],
      explanation: "وَإِنَّ الْفُجَّارَ لَفِي جَحِيمٍ (Wa inna al-fujjara lafi jahim) means 'And indeed, the wicked are in hellfire,' roots ف-ج-ر (wicked) and ج-ح-م (hellfire) (MyIslam, Al-Maududi).",
    },
    {
      id: "q16",
      question: "What does the Arabic phrase 'يَصْلَوْنَهَا يَوْمَ الدِّينِ' mean?",
      arabic: "يَصْلَوْنَهَا يَوْمَ الدِّينِ",
      rootLetters: "ص ل و | ي و م | د ي ن",
      options: [
        { id: "a", text: "They will enter it on the Day of Peace", isCorrect: false },
        { id: "b", text: "They will burn in it on the Day of Judgment", isCorrect: true },
        { id: "c", text: "They will escape it on the Day of Mercy", isCorrect: false },
        { id: "d", text: "They will see it on the Day of Reckoning", isCorrect: false },
      ],
      explanation: "يَصْلَوْنَهَا يَوْمَ الدِّينِ (Yaslawna ha yawma ad-din) means 'They will burn in it on the Day of Judgment,' roots ص-ل-و (burn), ي-و-م (day), د-ي-ن (Judgment) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q17",
      question: "What does the Arabic phrase 'وَمَا هُمْ بِخَارِجِينَ مِنْهَا' mean?",
      arabic: "وَمَا هُمْ بِخَارِجِينَ مِنْهَا",
      rootLetters: "خ ر ج",
      options: [
        { id: "a", text: "And they will not be able to emerge from it", isCorrect: true },
        { id: "b", text: "And they will not be able to enter it", isCorrect: false },
        { id: "c", text: "And they will not be able to see it", isCorrect: false },
        { id: "d", text: "And they will not be able to avoid it", isCorrect: false },
      ],
      explanation: "وَمَا هُمْ بِخَارِجِينَ مِنْهَا (Wa ma hum bikharijina minha) means 'And they will not be able to emerge from it,' root خ-ر-ج (emerge) (MyIslam, Al-Maududi).",
    },
    {
      id: "q18",
      question: "What does the Arabic phrase 'وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ' mean?",
      arabic: "وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ",
      rootLetters: "د ر ي | ي و م | د ي ن",
      options: [
        { id: "a", text: "And what can make you know what the Day of Peace is?", isCorrect: false },
        { id: "b", text: "And what can make you know what the Day of Mercy is?", isCorrect: false },
        { id: "c", text: "And what can make you know what the Day of Bliss is?", isCorrect: false },
        { id: "d", text: "And what can make you know what the Day of Judgment is?", isCorrect: true },
      ],
      explanation: "وَمَا أَدْرَاكَ مَا يَوْمُ الدِّينِ (Wa ma adraka ma yawmu ad-din) means 'And what can make you know what the Day of Judgment is?' roots د-ر-ي (know), ي-و-م (day), د-ي-ن (Judgment) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q19",
      question: "What does the Arabic phrase 'ثُمَّ مَا أَدْرَاكَ مَا يَوْمُ الدِّينِ' mean?",
      arabic: "ثُمَّ مَا أَدْرَاكَ مَا يَوْمُ الدِّينِ",
      rootLetters: "د ر ي | ي و م | د ي ن",
      options: [
        { id: "a", text: "Then, what can make you know what the Day of Mercy is?", isCorrect: false },
        { id: "b", text: "Then, what can make you know what the Day of Bliss is?", isCorrect: false },
        { id: "c", text: "Then, what can make you know what the Day of Judgment is?", isCorrect: true },
        { id: "d", text: "Then, what can make you know what the Day of Peace is?", isCorrect: false },
      ],
      explanation: "ثُمَّ مَا أَدْرَاكَ مَا يَوْمُ الدِّينِ (Thumma ma adraka ma yawmu ad-din) means 'Then, what can make you know what the Day of Judgment is?' roots د-ر-ي (know), ي-و-م (day), د-ي-ن (Judgment) (MyIslam, Al-Maududi).",
    },
    {
      id: "q20",
      question: "What does the Arabic phrase 'يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْئًا' mean?",
      arabic: "يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْئًا",
      rootLetters: "ي و م | م ل ك | ن ف س | ش ي ء",
      options: [
        { id: "a", text: "A day when no soul will guide another soul", isCorrect: false },
        { id: "b", text: "A day when no soul will save another soul", isCorrect: false },
        { id: "c", text: "A day when no soul will judge another soul", isCorrect: false },
        { id: "d", text: "A day when no soul will avail another soul anything", isCorrect: true },
      ],
      explanation: "يَوْمَ لَا تَمْلِكُ نَفْسٌ لِّنَفْسٍ شَيْئًا (Yawma la tamliku nafsun linafsin shay’an) means 'A day when no soul will avail another soul anything,' roots ي-و-م (day), م-ل-ك (avail/possess), ن-ف-س (soul), ش-ي-ء (anything) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q21",
      question: "What does the Arabic phrase 'وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ' mean?",
      arabic: "وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ",
      rootLetters: "أ م ر | ي و م",
      options: [
        { id: "a", text: "And the command that day is with Allah", isCorrect: true },
        { id: "b", text: "And the command that day is with the angels", isCorrect: false },
        { id: "c", text: "And the command that day is with mankind", isCorrect: false },
        { id: "d", text: "And the command that day is with the prophets", isCorrect: false },
      ],
      explanation: "وَالْأَمْرُ يَوْمَئِذٍ لِلَّهِ (Wal-amru yawma’idhin lillah) means 'And the command that day is with Allah,' roots أ-م-ر (command) and ي-و-م (day) (MyIslam, Al-Maududi).",
    },
    {
      id: "q22",
      question: "What does the Arabic phrase 'إِذَا السَّمَاءُ انفَطَرَتْ' mean in the context of the surah?",
      arabic: "إِذَا السَّمَاءُ انفَطَرَتْ",
      rootLetters: "س م و | ف ط ر",
      options: [
        { id: "a", text: "When the earth trembles", isCorrect: false },
        { id: "b", text: "When the stars fall", isCorrect: false },
        { id: "c", text: "When the seas overflow", isCorrect: false },
        { id: "d", text: "When the sky is split open", isCorrect: true },
      ],
      explanation: "إِذَا السَّمَاءُ انفَطَرَتْ (Idha as-sama’u infatarat) means 'When the sky is split open,' referring to the cosmic upheaval on Judgment Day, roots س-م-و (sky) and ف-ط-ر (split) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q23",
      question: "What does the Arabic phrase 'وَإِذَا الْكَوَاكِبُ انتَثَرَتْ' mean in the context of the surah?",
      arabic: "وَإِذَا الْكَوَاكِبُ انتَثَرَتْ",
      rootLetters: "ك و ك ب | ن ث ر",
      options: [
        { id: "a", text: "And when the stars scatter", isCorrect: true },
        { id: "b", text: "And when the seas burst", isCorrect: false },
        { id: "c", text: "And when the graves are opened", isCorrect: false },
        { id: "d", text: "And when the sky splits", isCorrect: false },
      ],
      explanation: "وَإِذَا الْكَوَاكِبُ انتَثَرَتْ (Wa idha al-kawakibu intatharat) means 'And when the stars scatter,' describing cosmic chaos, roots ك-و-ك-ب (stars) and ن-ث-ر (scatter) (MyIslam, Al-Maududi).",
    },
    {
      id: "q24",
      question: "What does the Arabic phrase 'وَإِذَا الْبِحَارُ فُجِّرَتْ' mean in the context of the surah?",
      arabic: "وَإِذَا الْبِحَارُ فُجِّرَتْ",
      rootLetters: "ب ح ر | ف ج ر",
      options: [
        { id: "a", text: "And when the stars are scattered", isCorrect: false },
        { id: "b", text: "And when the graves are overturned", isCorrect: false },
        { id: "c", text: "And when the seas burst forth", isCorrect: true },
        { id: "d", text: "And when the sky is torn", isCorrect: false },
      ],
      explanation: "وَإِذَا الْبِحَارُ فُجِّرَتْ (Wa idha al-biharu fujjirat) means 'And when the seas burst forth,' indicating Judgment Day’s upheaval, roots ب-ح-ر (seas) and ف-ج-ر (burst) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q25",
      question: "What does the Arabic phrase 'وَإِذَا الْقُبُورُ بُعْثِرَتْ' mean in the context of the surah?",
      arabic: "وَإِذَا الْقُبُورُ بُعْثِرَتْ",
      rootLetters: "ق ب ر | ب ع ث ر",
      options: [
        { id: "a", text: "And when the seas are flooded", isCorrect: false },
        { id: "b", text: "And when the graves are overturned", isCorrect: true },
        { id: "c", text: "And when the stars are scattered", isCorrect: false },
        { id: "d", text: "And when the sky is split", isCorrect: false },
      ],
      explanation: "وَإِذَا الْقُبُورُ بُعْثِرَتْ (Wa idha al-quburu bu’thirat) means 'And when the graves are overturned,' signaling resurrection, roots ق-ب-ر (graves) and ب-ع-ث-ر (overturned) (MyIslam, Al-Maududi).",
    },
    {
      id: "q26",
      question: "What does the Arabic phrase 'عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ' mean in the context of the surah?",
      arabic: "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ",
      rootLetters: "ع ل م | ن ف س | ح ض ر",
      options: [
        { id: "a", text: "A soul will know what it has hidden", isCorrect: false },
        { id: "b", text: "A soul will know what it has brought", isCorrect: true },
        { id: "c", text: "A soul will know what it has forgotten", isCorrect: false },
        { id: "d", text: "A soul will know what it has earned", isCorrect: false },
      ],
      explanation: "عَلِمَتْ نَفْسٌ مَّا أَحْضَرَتْ (‘Alimat nafsun ma ahdarat) means 'A soul will know what it has brought,' referring to deeds presented on Judgment Day, roots ع-ل-م (know), ن-ف-س (soul), ح-ض-ر (brought) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q27",
      question: "What does the Arabic phrase 'مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ' mean in the context of the surah?",
      arabic: "مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ",
      rootLetters: "غ ر ر | ر ب ب | ك ر م",
      options: [
        { id: "a", text: "What has deceived you concerning your Generous Lord?", isCorrect: true },
        { id: "b", text: "What has guided you to your Mighty Lord?", isCorrect: false },
        { id: "c", text: "What has pleased you with your Eternal Lord?", isCorrect: false },
        { id: "d", text: "What has saved you from your Just Lord?", isCorrect: false },
      ],
      explanation: "مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ (Ma gharraka birabbika al-karim) means 'What has deceived you concerning your Generous Lord?' questioning human negligence, roots غ-ر-ر (deceived), ر-ب-ب (Lord), ك-ر-م (generous) (MyIslam, Al-Maududi).",
    },
    {
      id: "q28",
      question: "What does the Arabic phrase 'الَّذِي خَلَقَكَ فَسَوَّاكَ' mean in the context of the surah?",
      arabic: "الَّذِي خَلَقَكَ فَسَوَّاكَ",
      rootLetters: "خ ل ق | س و ي",
      options: [
        { id: "a", text: "Who guided you and led you", isCorrect: false },
        { id: "b", text: "Who created you and forgave you", isCorrect: false },
        { id: "c", text: "Who made you and blessed you", isCorrect: false },
        { id: "d", text: "Who created you and proportioned you", isCorrect: true },
      ],
      explanation: "الَّذِي خَلَقَكَ فَسَوَّاكَ (Alladhi khalaqaka fasawwak) means 'Who created you and proportioned you,' roots خ-ل-ق (created) and س-و-ي (proportioned) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q29",
      question: "What does the Arabic phrase 'تُكَذِّبُونَ بِالدِّينِ' mean in the context of the surah?",
      arabic: "تُكَذِّبُونَ بِالدِّينِ",
      rootLetters: "ك ذ ب | د ي ن",
      options: [
        { id: "a", text: "You believe in the Judgment", isCorrect: false },
        { id: "b", text: "You seek the Judgment", isCorrect: false },
        { id: "c", text: "You deny the Judgment", isCorrect: true },
        { id: "d", text: "You fear the Judgment", isCorrect: false },
      ],
      explanation: "تُكَذِّبُونَ بِالدِّينِ (Tukadhdhibuna bid-din) means 'You deny the Judgment,' roots ك-ذ-ب (deny) and د-ي-ن (Judgment) (MyIslam, Al-Maududi).",
    },
    {
      id: "q30",
      question: "What does the Arabic phrase 'لَحَافِظِينَ كِرَامًا كَاتِبِينَ' mean in the context of the surah?",
      arabic: "لَحَافِظِينَ كِرَامًا كَاتِبِينَ",
      rootLetters: "ح ف ظ | ك ر م | ك ت ب",
      options: [
        { id: "a", text: "Merciful protectors and guides", isCorrect: false },
        { id: "b", text: "Honest judges and saviors", isCorrect: false },
        { id: "c", text: "Righteous helpers and scribes", isCorrect: false },
        { id: "d", text: "Noble guardians and recorders", isCorrect: true },
      ],
      explanation: "لَحَافِظِينَ كِرَامًا كَاتِبِينَ (Lahafizhin kiraman katibin) means 'Noble guardians and recorders,' roots ح-ف-ظ (guardians), ك-ر-م (noble), ك-ت-ب (recorders) (Quran.com, Ibn Kathir).",
    },
  ],
};
