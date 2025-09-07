export const ashShamsQuizData: SurahQuizData = {
  surahId: 91,
  surahName: "Ash-Shams",
  surahArabicName: "الشمس",
  totalVerses: 15,
  type: "Meccan",
  difficulty: "Intermediate",
  introduction:
    "Surah Ash-Shams (The Sun) is the 91st chapter of the Quran. It opens with a series of powerful oaths by natural phenomena that demonstrate Allah's creative power and wisdom, then reveals the central theme of human responsibility: success comes to those who purify their souls, while failure awaits those who corrupt them. The surah concludes with the cautionary tale of the Thamud people who rejected their prophet and faced destruction.",

  additionalContextElements: [
    {
      title: "The Oaths and Their Significance",
      content: `
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Divine Testimony Through Creation</h3>
          <p class="text-purple-700 dark:text-purple-200 mb-3">
            The surah begins with eleven oaths by various aspects of creation: the sun, moon, day, night, sky, earth, and the human soul. These oaths serve as witnesses to the fundamental truth that follows—that Allah has inspired the human soul with knowledge of good and evil, and success depends on heeding this moral compass.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains that these oaths by celestial and terrestrial phenomena emphasize the perfect order and balance in Allah's creation, which contrasts with the moral disorder humans create when they deviate from their innate nature (fitrah). The succession of day and night, the sun and moon's precise orbits, all testify to the Creator's wisdom.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Human Soul and Its Purification",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Moral Responsibility</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            Verses 7-10 contain one of the Quran's most profound statements about human nature and responsibility: "By the soul and He who proportioned it. And inspired it with discernment of its wickedness and its righteousness. He has succeeded who purifies it. And he has failed who corrupts it."
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Prophetic Explanation</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet ﷺ said: "Righteousness is good character, and sin is that which wavers in your soul and you dislike people finding out about it." (Muslim 2553). This relates to the concept of the soul being inspired with knowledge of good and evil mentioned in the surah.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Story of Thamud",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">A Warning from History</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The final verses (11-15) recount the story of the Thamud people who rejected their prophet Salih and hamstrung the she-camel that Allah sent as a miraculous sign. This story serves as a concrete example of soul corruption and its catastrophic consequences.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Historical Context</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Thamud were an ancient Arabian tribe known for their skill in carving homes into mountains. They were given the miracle of a she-camel that emerged from rock as a sign, but their arrogance led them to kill it, defying Prophet Salih's warning. Their destruction came through an earthquake and cry from heaven.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The story of Thamud is mentioned in several Quranic chapters including Al-A'raf (7:73-79), Hud (11:61-68), Al-Hijr (15:80-84), and Al-Qamar (54:23-31). The most detailed account is in Surah Ash-Shu'ara (26:141-159) where Prophet Salih's mission is described.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Relevance to the Meccan Context",
      content: `
        <div class="mt-6 p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800">
          <h3 class="text-lg font-semibold text-rose-800 dark:text-rose-300 mb-2">Contemporary Application</h3>
          <p class="text-rose-700 dark:text-rose-200 mb-3">
            This surah was revealed during the difficult Meccan period when the early Muslims faced intense persecution. The story of Thamud served as a warning to the Quraysh leaders who opposed Prophet Muhammad ﷺ, reminding them that previous nations who rejected their prophets faced destruction.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-rose-700 dark:text-rose-300 mb-1">Reason for Revelation</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              According to Tafsir Al-Jalalayn, this surah was revealed to console the Prophet ﷺ and warn his opponents. The reference to "the most wicked among them" who hamstrung the she-camel (verse 12) was seen by some commentators as an allusion to Abu Jahl, one of the most vehement opponents of Islam.
            </p>
          </div>
        </div>
      `,
    },
  ],

  questions: [
    {
      id: "q1",
      question: "What does the Arabic phrase وَالشَّمْسِ وَضُحَاهَا in the opening verse refer to?",
      arabic: "وَالشَّمْسِ وَضُحَاهَا",
      rootLetters: "ش م س | ض ح و",
      options: [
        { id: "a", text: "By the sun and its heat", isCorrect: false },
        { id: "b", text: "By the sun and its light", isCorrect: false },
        { id: "c", text: "By the sun and its brightness", isCorrect: false },
        { id: "d", text: "By the sun and its morning brightness", isCorrect: true },
      ],
      explanation: "وَالشَّمْسِ وَضُحَاهَا means 'By the sun and its morning brightness' (roots: ش-م-س and ض-ح-و), referring to the sun's radiant light.",
    },
    {
      id: "q2",
      question: "What does the Arabic term وَالْقَمَرِ إِذَا تَلَاهَا mean?",
      arabic: "وَالْقَمَرِ إِذَا تَلَاهَا",
      rootLetters: "ق م ر | ت ل و",
      options: [
        { id: "a", text: "And the moon when it follows it", isCorrect: false },
        { id: "b", text: "And the moon when it reflects it", isCorrect: false },
        { id: "c", text: "And the moon when it follows it", isCorrect: true },
        { id: "d", text: "And the moon when it replaces it", isCorrect: false },
      ],
      explanation: "وَالْقَمَرِ إِذَا تَلَاهَا means 'And the moon when it follows it' (roots: ق-م-ر and ت-ل-و), referring to the moon appearing after sunset.",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase وَالنَّهَارِ إِذَا جَلَّاهَا mean?",
      arabic: "وَالنَّهَارِ إِذَا جَلَّاهَا",
      rootLetters: "ن ه ر | ج ل و",
      options: [
        { id: "a", text: "And the day when it reveals it", isCorrect: false },
        { id: "b", text: "And the day when it illuminates it", isCorrect: false },
        { id: "c", text: "And the day when it brightens it", isCorrect: false },
        { id: "d", text: "And the day when it displays it", isCorrect: true },
      ],
      explanation: "وَالنَّهَارِ إِذَا جَلَّاهَا means 'And the day when it displays it' (roots: ن-ه-ر and ج-ل-و), referring to daylight revealing the world.",
    },
    {
      id: "q4",
      question: "What does the Arabic term وَاللَّيْلِ إِذَا يَغْشَاهَا mean?",
      arabic: "وَاللَّيْلِ إِذَا يَغْشَاهَا",
      rootLetters: "ل ي ل | غ ش و",
      options: [
        { id: "a", text: "And the night when it covers it", isCorrect: false },
        { id: "b", text: "And the night when it envelops it", isCorrect: true },
        { id: "c", text: "And the night when it conceals it", isCorrect: false },
        { id: "d", text: "And the night when it darkens it", isCorrect: false },
      ],
      explanation: "وَاللَّيْلِ إِذَا يَغْشَاهَا means 'And the night when it covers it' (roots: ل-ي-ل and غ-ش-و), referring to night's encompassing darkness.",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase وَالسَّمَاءِ وَمَا بَنَاهَا refer to?",
      arabic: "وَالسَّمَاءِ وَمَا بَنَاهَا",
      rootLetters: "س م و | ب ن ي",
      options: [
        { id: "a", text: "And the sky and He who built it", isCorrect: true },
        { id: "b", text: "And the sky and its construction", isCorrect: false },
        { id: "c", text: "And the sky and its height", isCorrect: false },
        { id: "d", text: "And the sky and its expanse", isCorrect: false },
      ],
      explanation: "وَالسَّمَاءِ وَمَا بَنَاهَا means 'And the sky and He who constructed it' (roots: س-م-و and ب-ن-ي), emphasizing Allah as the Builder.",
    },
    {
      id: "q6",
      question: "What does the Arabic term وَالْأَرْضِ وَمَا طَحَاهَا mean?",
      arabic: "وَالْأَرْضِ وَمَا طَحَاهَا",
      rootLetters: "أ ر ض | ط ح و",
      options: [
        { id: "a", text: "And the earth and He who spread it", isCorrect: false },
        { id: "b", text: "And the earth and He who expanded it", isCorrect: true },
        { id: "c", text: "And the earth and its vastness", isCorrect: false },
        { id: "d", text: "And the earth and its foundation", isCorrect: false },
      ],
      explanation: "وَالْأَرْضِ وَمَا طَحَاهَا means 'And the earth and He who spread it out' (roots: أ-ر-ض and ط-ح-و), referring to Allah flattening the earth for habitation.",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase وَنَفْسٍ وَمَا سَوَّاهَا reveal about human creation?",
      arabic: "وَنَفْسٍ وَمَا سَوَّاهَا",
      rootLetters: "ن ف س | س و ي",
      options: [
        { id: "a", text: "And the soul and He who created it", isCorrect: false },
        { id: "b", text: "And the soul and He who formed it", isCorrect: false },
        { id: "c", text: "And the soul and its nature", isCorrect: false },
        { id: "d", text: "And the soul and He who proportioned it", isCorrect: true },
      ],
      explanation: "وَنَفْسٍ وَمَا سَوَّاهَا means 'And the soul and He who proportioned it' (roots: ن-ف-س and س-و-ي), referring to Allah's perfect creation of the human soul.",
    },
    {
      id: "q8",
      question: "What does the Arabic expression فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا mean?",
      arabic: "فَأَلْهَمَهَا فُجُورَهَا وَتَقْوَاهَا",
      rootLetters: "ل ه م | ف ج ر | ت ق و",
      options: [
        { id: "a", text: "And inspired it with its wickedness and its righteousness", isCorrect: true },
        { id: "b", text: "And taught it its evil and its good", isCorrect: false },
        { id: "c", text: "And showed it its corruption and its piety", isCorrect: false },
        { id: "d", text: "And guided it to sin and righteousness", isCorrect: false },
      ],
      explanation: "This phrase means 'And inspired it with discernment of its wickedness and its righteousness' (roots: ل-ه-م, ف-ج-ر, ت-ق-و), indicating innate moral knowledge.",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase قَدْ أَفْلَحَ مَن زَكَّاهَا promise?",
      arabic: "قَدْ أَفْلَحَ مَن زَكَّاهَا",
      rootLetters: "ف ل ح | ز ك و",
      options: [
        { id: "a", text: "He has succeeded who purifies it", isCorrect: false },
        { id: "b", text: "He has prospered who cleanses it", isCorrect: false },
        { id: "c", text: "He has succeeded who purifies it", isCorrect: true },
        { id: "d", text: "He has won who purifies it", isCorrect: false },
      ],
      explanation: "قَدْ أَفْلَحَ مَن زَكَّاهَا means 'He has succeeded who purifies it' (roots: ف-ل-ح and ز-ك-و), referring to spiritual success through soul purification.",
    },
    {
      id: "q10",
      question: "What does the Arabic term وَقَدْ خَابَ مَن دَسَّاهَا warn?",
      arabic: "وَقَدْ خَابَ مَن دَسَّاهَا",
      rootLetters: "خ ي ب | د س س",
      options: [
        { id: "a", text: "And he has failed who corrupts it", isCorrect: false },
        { id: "b", text: "And he has lost who neglects it", isCorrect: false },
        { id: "c", text: "And he has failed who corrupts it", isCorrect: true },
        { id: "d", text: "And he has ruined who abuses it", isCorrect: false },
      ],
      explanation: "وَقَدْ خَابَ مَن دَسَّاهَا means 'And he has failed who corrupts it' (roots: خ-ي-ب and د-س-س), warning against soul corruption.",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase كَذَّبَتْ ثَمُودُ بِطَغْوَاهَا refer to?",
      arabic: "كَذَّبَتْ ثَمُودُ بِطَغْوَاهَا",
      rootLetters: "ك ذ ب | ط غ و",
      options: [
        { id: "a", text: "Thamud denied with their arrogance", isCorrect: false },
        { id: "b", text: "Thamud denied in their transgression", isCorrect: true },
        { id: "c", text: "Thamud rejected with their rebellion", isCorrect: false },
        { id: "d", text: "Thamud disbelieved in their pride", isCorrect: false },
      ],
      explanation: "كَذَّبَتْ ثَمُودُ بِطَغْوَاهَا means 'Thamud denied in their transgression' (roots: ك-ذ-ب and ط-غ-و), describing their arrogant rejection.",
    },
    {
      id: "q12",
      question: "What does the Arabic expression فَعَقَرُوا النَّاقَةَ describe?",
      arabic: "فَعَقَرُوا النَّاقَةَ",
      rootLetters: "ع ق ر | ن و ق",
      options: [
        { id: "a", text: "So they hamstrung the she-camel", isCorrect: false },
        { id: "b", text: "So they killed the she-camel", isCorrect: false },
        { id: "c", text: "So they hamstrung the she-camel", isCorrect: true },
        { id: "d", text: "So they rejected the she-camel", isCorrect: false },
      ],
      explanation: "فَعَقَرُوا النَّاقَةَ means 'So they hamstrung the she-camel' (roots: ع-ق-ر and ن-و-ق), referring to the Thamud's fatal act of defiance.",
    },
  ],
};
