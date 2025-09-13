export const alAlaQuizData: SurahQuizData = {
  surahId: 87,
  surahName: "Al-A'la",
  surahArabicName: "الأعلى",
  totalVerses: 19,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-A'la (The Most High) is the 87th chapter of the Quran, revealed in Mecca. It begins with a command to glorify Allah's name, affirms His role as the Creator who proportions, destines, and guides, and reminds of the superiority of the Hereafter over worldly life. The surah addresses the Prophet ﷺ regarding the revelation process and urges reminding those who fear Allah, contrasting the successful purifier with the wretched who face eternal punishment in Hellfire.",
  additionalContextElements: [
    {
      title: "Glorification of Allah and His Creation",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Exalting the Most High Creator</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The surah opens with glorifying Allah, describing His creation of pastures turned to stubble, emphasizing His perfect design and provision. It highlights Allah's knowledge of the manifest and hidden, easing the path to ease for the Prophet ﷺ.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains 'sabbih' as glorification, and the verses on creation refer to Allah's origination and proportioning of all things, including vegetation cycles, as signs of His power.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Reasons for Revelation and Historical Context</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Revealed in early Makkah before Hijrah, as per Al-Bukhari from Al-Bara' bin Azib. Verses 6-7 addressed the Prophet's ﷺ initial haste in repeating revelation to memorize, assuring divine facilitation.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Glorification: Surah Al-Fatihah (1:2). Creation signs: Surah Ar-Rahman (55:1-13).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Reminder of the Hereafter and Success",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Path to Success and Warning</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The surah urges reminding those who benefit, the fearful, while the wretched avoid it, facing the greatest Fire. Success lies in purification, remembering Allah, and prayer, preferring the eternal over the transient.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              According to Tafsir Ibn Kathir, 'tazakka' means purifying from sins and polytheism. The wretched are disbelievers entering Hell without death or life.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Prophetic Guidance and Hadith</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Al-Num'an ibn Bashir narrated in Sahih Muslim that the Prophet ﷺ recited Al-A'la and Al-Ghashiyah in Eid and Friday prayers. Reciting it grants ten rewards per letter.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Purification: Surah Al-A'la (87:14). Hereafter preference: Surah Al-Qiyamah (75:20-21). Reminder: Surah Al-Insan (76:24).
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Al-A'la, الأعلى?",
      arabic: "الأعلى",
      rootLetters: "ع ل و",
      options: [
        { id: "a", text: "The Overwhelming", isCorrect: false },
        { id: "b", text: "The Dawn", isCorrect: false },
        { id: "c", text: "The City", isCorrect: false },
        { id: "d", text: "The Most High", isCorrect: true },
      ],
      explanation: "الأعلى (Al-A'la) means 'The Most High,' derived from the root ع-ل-و, signifying elevation and supremacy.",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى' mean?",
      arabic: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى",
      rootLetters: "س ب ح | ر ب ب | ع ل و",
      options: [
        { id: "a", text: "Praise the name of your Lord, the Most Merciful", isCorrect: false },
        { id: "b", text: "Remember the name of your Lord, the Creator", isCorrect: false },
        { id: "c", text: "Glorify the name of your Lord, the Most High", isCorrect: true },
        { id: "d", text: "Call upon the name of your Lord, the All-Knowing", isCorrect: false },
      ],
      explanation: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى (Sabbih isma rabbika al-a'la) means 'Glorify the name of your Lord, the Most High,' roots س-ب-ح (glorify), ر-ب-ب (Lord), ع-ل-و (high).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'الَّذِي خَلَقَ فَسَوَّى' mean?",
      arabic: "الَّذِي خَلَقَ فَسَوَّى",
      rootLetters: "خ ل ق | س و ي",
      options: [
        { id: "a", text: "Who destined and guided", isCorrect: false },
        { id: "b", text: "Who brought out the pasture", isCorrect: false },
        { id: "c", text: "Who created and proportioned", isCorrect: false },
        { id: "d", text: "Who created and proportioned", isCorrect: true },
      ],
      explanation: "الَّذِي خَلَقَ فَسَوَّى (Alladhi khalaqa fa-sawwa) means 'Who created and proportioned,' roots خ-ل-ق (create) and س-و-ي (proportion).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'وَالَّذِي قَدَّرَ فَهَدَى' mean?",
      arabic: "وَالَّذِي قَدَّرَ فَهَدَى",
      rootLetters: "ق د ر | ه د ي",
      options: [
        { id: "a", text: "And who brought out and made stubble", isCorrect: false },
        { id: "b", text: "And who destined and guided", isCorrect: true },
        { id: "c", text: "And who forgot except what Allah wills", isCorrect: false },
        { id: "d", text: "And who eases toward ease", isCorrect: false },
      ],
      explanation: "وَالَّذِي قَدَّرَ فَهَدَى (Walladhi qaddara fa-hada) means 'And who destined and guided,' roots ق-د-ر (destine) and ه-د-ي (guide).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'فَجَعَلَهُ غُثَاءً أَحْوَى' mean?",
      arabic: "فَجَعَلَهُ غُثَاءً أَحْوَى",
      rootLetters: "ج ع ل | غ ث و | ح و ي",
      options: [
        { id: "a", text: "And [then] makes it black stubble", isCorrect: true },
        { id: "b", text: "And destined for the guidance", isCorrect: false },
        { id: "c", text: "And brought out the pasture", isCorrect: false },
        { id: "d", text: "And proportioned the creation", isCorrect: false },
      ],
      explanation: "فَجَعَلَهُ غُثَاءً أَحْوَى (Fa ja'alahu ghutha'an ahwa) means 'And [then] makes it black stubble,' roots ج-ع-ل (make), غ-ث-و (stubble), ح-و-ي (black/dry).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'سَنُقْرِئُكَ فَلَا تَنسَى' mean?",
      arabic: "سَنُقْرِئُكَ فَلَا تَنسَى",
      rootLetters: "ق ر ء | ن س ي",
      options: [
        { id: "a", text: "We will make you recite, and you will not forget", isCorrect: false },
        { id: "b", text: "We will ease you toward difficulty", isCorrect: false },
        { id: "c", text: "We will make you recite, and you will not forget", isCorrect: true },
        { id: "d", text: "We will remind you of what is hidden", isCorrect: false },
      ],
      explanation: "سَنُقْرِئُكَ فَلَا تَنسَى (Sanuqri'uka fa la tansa) means 'We will make you recite, and you will not forget,' roots ق-ر-ء (recite) and ن-س-ي (forget).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'إِلَّا مَا شَاءَ اللَّهُ إِنَّهُ يَعْلَمُ الْجَهْرَ وَمَا يَخْفَى' mean?",
      arabic: "إِلَّا مَا شَاءَ اللَّهُ إِنَّهُ يَعْلَمُ الْجَهْرَ وَمَا يَخْفَى",
      rootLetters: "ش ي ء | ع ل م | ج ه ر | خ ف ي",
      options: [
        { id: "a", text: "Except what Allah should will. He knows what is manifest and what is hidden", isCorrect: false },
        { id: "b", text: "Except what Allah should will. Indeed, He knows what is declared and what is hidden", isCorrect: true },
        { id: "c", text: "Except what is forgotten. He guides the open and the concealed", isCorrect: false },
        { id: "d", text: "Except the manifest. He creates what is apparent and what is veiled", isCorrect: false },
      ],
      explanation: "إِلَّا مَا شَاءَ اللَّهُ إِنَّهُ يَعْلَمُ الْجَهْرَ وَمَا يَخْفَى (Illa ma sha Allahu innahu ya'lamu al-jahra wa ma yakhfa) means 'Except what Allah should will. Indeed, He knows what is declared and what is hidden,' roots ش-ي-ء (will), ع-ل-م (know), ج-ه-ر (declared), خ-ف-ي (hidden).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'وَنُيَسِّرُكَ لِلْيُسْرَى' mean?",
      arabic: "وَنُيَسِّرُكَ لِلْيُسْرَى",
      rootLetters: "ي س ر",
      options: [
        { id: "a", text: "And We will ease you toward hardship", isCorrect: false },
        { id: "b", text: "And We will remind you of the reminder", isCorrect: false },
        { id: "c", text: "And We will ease you toward ease", isCorrect: true },
        { id: "d", text: "And We will guide you to the guided path", isCorrect: false },
      ],
      explanation: "وَنُيَسِّرُكَ لِلْيُسْرَى (Wa nu yassiruka lil-yusra) means 'And We will ease you toward ease,' root ي-س-ر (ease).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'فَذَكِّرْ إِنْ نَفَعَتِ الذِّكْرَى' mean?",
      arabic: "فَذَكِّرْ إِنْ نَفَعَتِ الذِّكْرَى",
      rootLetters: "ذ ك ر | ن ف ع",
      options: [
        { id: "a", text: "So remind, if the reminder should benefit", isCorrect: true },
        { id: "b", text: "So forget, if the memory harms", isCorrect: false },
        { id: "c", text: "So guide, if the path is easy", isCorrect: false },
        { id: "d", text: "So create, if the proportion is right", isCorrect: false },
      ],
      explanation: "فَذَكِّرْ إِنْ نَفَعَتِ الذِّكْرَى (Fa dhakkir in nafa'at adh-dhikra) means 'So remind, if the reminder should benefit,' roots ذ-ك-ر (remind) and ن-ف-ع (benefit).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'سَيَذَّكَّرُ مَنْ يَخْشَى' mean?",
      arabic: "سَيَذَّكَّرُ مَنْ يَخْشَى",
      rootLetters: "ذ ك ر | خ ش ي",
      options: [
        { id: "a", text: "He who fears [Allah] will be reminded", isCorrect: false },
        { id: "b", text: "He who forgets will be guided", isCorrect: false },
        { id: "c", text: "He who creates will proportion", isCorrect: false },
        { id: "d", text: "He who fears [Allah] will be reminded", isCorrect: true },
      ],
      explanation: "سَيَذَّكَّرُ مَنْ يَخْشَى (Sa yadhakkaru man yakhsha) means 'He who fears [Allah] will be reminded,' roots ذ-ك-ر (remind) and خ-ش-ي (fear).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'قَدْ أَفْلَحَ مَنْ تَزَكَّى' mean?",
      arabic: "قَدْ أَفْلَحَ مَنْ تَزَكَّى",
      rootLetters: "ف ل ح | ز ك و",
      options: [
        { id: "a", text: "He has certainly succeeded who purifies himself", isCorrect: false },
        { id: "b", text: "He has failed who remembers his Lord", isCorrect: false },
        { id: "c", text: "He has certainly succeeded who purifies himself", isCorrect: true },
        { id: "d", text: "He has erred who avoids the reminder", isCorrect: false },
      ],
      explanation: "قَدْ أَفْلَحَ مَنْ تَزَكَّى (Qad aflaha man tazakka) means 'He has certainly succeeded who purifies himself,' roots ف-ل-ح (succeed) and ز-ك-و (purify).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّى' mean?",
      arabic: "وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّى",
      rootLetters: "ذ ك ر | ر ب ب | ص ل و",
      options: [
        { id: "a", text: "And remembers the name of his Lord and prays", isCorrect: false },
        { id: "b", text: "And remembers the name of his Lord and prays", isCorrect: true },
        { id: "c", text: "And forgets the name of his Creator and sins", isCorrect: false },
        { id: "d", text: "And glorifies the name of the Most High and forgets", isCorrect: false },
      ],
      explanation: "وَذَكَرَ اسْمَ رَبِّهِ فَصَلَّى (Wa dhakara isma rabbihi fa-salla) means 'And remembers the name of his Lord and prays,' roots ذ-ك-ر (remember), ر-ب-ب (Lord), ص-ل-و (pray).",
    },
  ],
};
