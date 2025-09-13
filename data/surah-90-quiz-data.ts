export const alBaladQuizData: SurahQuizData = {
  surahId: 90,
  surahName: "Al-Balad",
  surahArabicName: "البلد",
  totalVerses: 20,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Balad (The City) is the 90th chapter of the Quran, revealed in Mecca. It emphasizes the sanctity of Mecca and the inherent struggles of human life, reminding people that they are created in toil and must choose between the path of righteousness—through acts like freeing slaves, feeding the needy, and enjoining good—or the path of denial and arrogance, leading to eternal consequences in the Hereafter.",
  additionalContextElements: [
    {
      title: "The Oath by the Sacred City and Human Toil",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Sanctity of Mecca and Man's Creation in Hardship</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The surah begins with oaths by the city of Mecca, its inhabitant (the Prophet Muhammad ﷺ), and the parent-child relationship, highlighting the inherent hardship (kabad) in human life. It criticizes those who boast about their wealth and think no one has power over them, reminding them of Allah's blessings like eyes, tongue, and lips, and the guidance to two paths.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains that the oath by 'this city' refers to Mecca's sanctity, and 'you are free in this city' means the Prophet ﷺ is permitted to fight there if needed. Man's creation 'in toil' means life is full of struggles, as per Ikrimah and Qatadah's interpretations of hardship and long-suffering.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Reasons for Revelation and Historical Context</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Revealed during the early Meccan period when the Quraysh disbelievers opposed the Prophet ﷺ with tyranny and persecution, boasting about their secure city. It counters their arrogance by affirming life's trials and accountability.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Hardship in life: Surah Ash-Sharh (94:5-6) 'With hardship comes ease.' Blessings and guidance: Surah Al-Insan (76:2-3) on creation and showing the way.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Steep Path and Eternal Consequences",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Righteous Deeds and Judgment</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The surah describes the 'steep path' as freeing slaves, feeding orphans and the poor during famine, believing, and enjoining patience and mercy. Those who follow are companions of the right (Paradise), while deniers are companions of the left (Hellfire closed over them).
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              According to Tafsir Ibn Kathir, the 'steep path' involves charitable acts and faith, contrasting with those who squander wealth vainly. Tafsir Al-Jalalayn adds that companions of the right/left refer to positions on Judgment Day.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Prophetic Guidance and Hadith</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              A hadith states that reciting Surah Al-Balad secures one from Allah's Wrath on the Day of Judgment. The Prophet ﷺ emphasized freeing slaves and feeding the needy, aligning with the surah's message.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Good deeds: Surah Al-Baqarah (2:177) on freeing slaves and feeding poor. Companions of right/left: Surah Al-Waqi'ah (56:8-10). Patience and mercy: Surah Al-Asr (103:3).
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Al-Balad, البلد?",
      arabic: "البلد",
      rootLetters: "ب ل د",
      options: [
        { id: "a", text: "The Night", isCorrect: false },
        { id: "b", text: "The City", isCorrect: true },
        { id: "c", text: "The Dawn", isCorrect: false },
        { id: "d", text: "The Mountain", isCorrect: false },
      ],
      explanation: "البلد (Al-Balad) means 'The City,' referring to Mecca, derived from the root ب-ل-د.",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ' mean?",
      arabic: "لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ",
      rootLetters: "ق س م | ب ل د",
      options: [
        { id: "a", text: "I swear by this city", isCorrect: true },
        { id: "b", text: "I do not swear by the night", isCorrect: false },
        { id: "c", text: "I swear by the dawn", isCorrect: false },
        { id: "d", text: "I swear by the parent", isCorrect: false },
      ],
      explanation: "لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ (La uqsimu bihadha al-balad) means 'I swear by this city,' with roots ق-س-م (swear) and ب-ل-د (city).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'وَأَنتَ حِلٌّ بِهَٰذَا الْبَلَدِ' mean?",
      arabic: "وَأَنتَ حِلٌّ بِهَٰذَا الْبَلَدِ",
      rootLetters: "ح ل ل | ب ل د",
      options: [
        { id: "a", text: "And you are a resident of this city", isCorrect: false },
        { id: "b", text: "And you are forbidden in this city", isCorrect: false },
        { id: "c", text: "And you are honored in this city", isCorrect: false },
        { id: "d", text: "And you are free in this city", isCorrect: true },
      ],
      explanation: "وَأَنتَ حِلٌّ بِهَٰذَا الْبَلَدِ (Wa anta hillun bihadha al-balad) means 'And you are free in this city,' roots ح-ل-ل (permissible/free) and ب-ل-د (city).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ' mean?",
      arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ",
      rootLetters: "خ ل ق | أ ن س | ك ب د",
      options: [
        { id: "a", text: "We created man in ease", isCorrect: false },
        { id: "b", text: "We created man in toil", isCorrect: true },
        { id: "c", text: "We created man in wealth", isCorrect: false },
        { id: "d", text: "We created man in ignorance", isCorrect: false },
      ],
      explanation: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي كَبَدٍ (Laqad khalaqna al-insana fi kabad) means 'We created man in toil,' roots خ-ل-ق (create), أ-ن-س (man), ك-ب-د (toil/hardship).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ' mean?",
      arabic: "أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ",
      rootLetters: "ح س ب | ق د ر",
      options: [
        { id: "a", text: "Does he think he will be rewarded?", isCorrect: false },
        { id: "b", text: "Does he think he is powerful?", isCorrect: false },
        { id: "c", text: "Does he think none has power over him?", isCorrect: true },
        { id: "d", text: "Does he think he is unseen?", isCorrect: false },
      ],
      explanation: "أَيَحْسَبُ أَن لَّن يَقْدِرَ عَلَيْهِ أَحَدٌ (A-yahsabu an lan yaqdira 'alayhi ahad) means 'Does he think none has power over him?,' roots ح-س-ب (think) and ق-د-ر (power).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'أَهۡلَكۡتُ مَالٗا لُّبَدًا' mean?",
      arabic: "أَهۡلَكۡتُ مَالٗا لُّبَدًا",
      rootLetters: "ن ف ق | م و ل | ل ب د",
      options: [
        { id: "a", text: "I have saved abundant wealth", isCorrect: false },
        { id: "b", text: "I have inherited abundant wealth", isCorrect: false },
        { id: "c", text: "I have earned abundant wealth", isCorrect: false },
        { id: "d", text: "I have spent abundant wealth", isCorrect: true },
      ],
      explanation: " أَهۡلَكۡتُ مَالٗا لُّبَدًا (Ahlaktu malan lubada) means 'I have spent abundant wealth,' roots ن-ف-ق (spend), م-و-ل (wealth), ل-ب-د (abundant).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'أَلَمْ نَجْعَل لَّهُ عَيْنَيْنِ' mean?",
      arabic: "أَلَمْ نَجْعَل لَّهُ عَيْنَيْنِ",
      rootLetters: "ج ع ل | ع ي ن",
      options: [
        { id: "a", text: "Have We not made for him a tongue?", isCorrect: false },
        { id: "b", text: "Have We not made for him lips?", isCorrect: false },
        { id: "c", text: "Have We not made for him hands?", isCorrect: false },
        { id: "d", text: "Have We not made for him two eyes?", isCorrect: true },
      ],
      explanation: "أَلَمْ نَجْعَل لَّهُ عَيْنَيْنِ (A-lam naj'al lahu 'aynayn) means 'Have We not made for him two eyes?,' roots ج-ع-ل (make) and ع-ي-ن (eye).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'وَلِسَانًا وَشَفَتَيْنِ' mean?",
      arabic: "وَلِسَانًا وَشَفَتَيْنِ",
      rootLetters: "ل س ن | ش ف و",
      options: [
        { id: "a", text: "And two hands and feet", isCorrect: false },
        { id: "b", text: "And two ears and eyes", isCorrect: false },
        { id: "c", text: "And a tongue and two lips", isCorrect: true },
        { id: "d", text: "And a heart and mind", isCorrect: false },
      ],
      explanation: "وَلِسَانًا وَشَفَتَيْنِ (Wa lisanan wa shafatayn) means 'And a tongue and two lips,' roots ل-س-ن (tongue) and ش-ف-و (lips).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'فَلَا اقْتَحَمَ الْعَقَبَةَ' mean?",
      arabic: "فَلَا اقْتَحَمَ الْعَقَبَةَ",
      rootLetters: "ق ح م | ع ق ب",
      options: [
        { id: "a", text: "But he has not descended the path", isCorrect: false },
        { id: "b", text: "But he has not chosen the easy path", isCorrect: false },
        { id: "c", text: "But he has not attempted the steep path", isCorrect: true },
        { id: "d", text: "But he has not seen the steep path", isCorrect: false },
      ],
      explanation: "فَلَا اقْتَحَمَ الْعَقَبَةَ (Fala iqtahama al-'aqabah) means 'But he has not attempted the steep path,' roots ق-ح-م (attempt/force through) and ع-ق-ب (steep path).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'فَكُّ رَقَبَةٍ' mean?",
      arabic: "فَكُّ رَقَبَةٍ",
      rootLetters: "ف ك ك | ر ق ب",
      options: [
        { id: "a", text: "Freeing of a slave", isCorrect: true },
        { id: "b", text: "Feeding of an orphan", isCorrect: false },
        { id: "c", text: "Giving wealth to the poor", isCorrect: false },
        { id: "d", text: "Enjoining patience", isCorrect: false },
      ],
      explanation: "فَكُّ رَقَبَةٍ (Fakku raqabah) means 'Freeing of a slave,' roots ف-ك-ك (free/untie) and ر-ق-ب (neck/slave).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'أَوْ إِطْعَامٌ فِي يَوْمٍ ذِي مَسْغَبَةٍ' mean?",
      arabic: "أَوْ إِطْعَامٌ فِي يَوْمٍ ذِي مَسْغَبَةٍ",
      rootLetters: "ط ع م | ي و م | س غ ب",
      options: [
        { id: "a", text: "Or clothing on a day of cold", isCorrect: false },
        { id: "b", text: "Or feeding on a day of severe hunger", isCorrect: true },
        { id: "c", text: "Or praying on a day of feast", isCorrect: false },
        { id: "d", text: "Or fasting on a day of thirst", isCorrect: false },
      ],
      explanation: "أَوْ إِطْعَامٌ فِي يَوْمٍ ذِي مَسْغَبَةٍ (Aw it'amun fi yawmin dhi masghabah) means 'Or feeding on a day of severe hunger,' roots ط-ع-م (feed), ي-و-م (day), س-غ-ب (hunger).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'أُولَٰئِكَ أَصْحَابُ الْمَيْمَنَةِ' mean?",
      arabic: "أُولَٰئِكَ أَصْحَابُ الْمَيْمَنَةِ",
      rootLetters: "ص ح ب | ي م ن",
      options: [
        { id: "a", text: "Those are the companions of the left", isCorrect: false },
        { id: "b", text: "Those are the companions of the fire", isCorrect: false },
        { id: "c", text: "Those are the companions of the right", isCorrect: true },
        { id: "d", text: "Those are the companions of the wrong", isCorrect: false },
      ],
      explanation: "أُولَٰئِكَ أَصْحَابُ الْمَيْمَنَةِ (Ula'ika ashabu al-maymanah) means 'Those are the companions of the right,' roots ص-ح-ب (companions) and ي-م-ن (right).",
    },
  ],
};
