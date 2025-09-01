export const alLailQuizData: SurahQuizData = {
  surahId: 92,
  surahName: "Al-Lail",
  surahArabicName: "الليل",
  totalVerses: 21,
  type: "Meccan",
  difficulty: "Intermediate",
  introduction:
    "Surah Al-Lail (The Night) is the 92nd chapter of the Quran. It opens with powerful oaths by natural phenomena, then contrasts two paths of human behavior: righteousness through faith, charity, and God-consciousness versus wickedness through stinginess, arrogance, and denial of truth. The surah concludes by emphasizing that ultimate success comes only through sincere devotion to Allah.",

  additionalContextElements: [
    {
      title: "The Contrasting Paths of Humanity",
      content: `
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Two Divergent Ways</h3>
          <p class="text-purple-700 dark:text-purple-200 mb-3">
            This surah presents one of the Quran's most vivid contrasts between righteousness and wickedness. It reveals that human efforts naturally diverge into two distinct paths, with eternal consequences determined by one's choice between these ways.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains that the opening oaths (by night, day, and creation of male and female) establish the perfect order and balance in Allah's creation, which contrasts with the disorder of human choices when they deviate from their natural disposition (fitrah).
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Historical Context</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              This surah was revealed in Mecca during a period of intense opposition to the Prophet Muhammad ﷺ. It addressed the stark contrast between early Muslims who sacrificed everything for truth and the Quraysh leaders who used their wealth and power to suppress the message.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Path of Righteousness",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Qualities of the Successful</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            Verses 5-7 describe those who will be eased to the path of ease: those who give charity, purify themselves, and acknowledge the best reward (from Allah). This represents the comprehensive nature of Islamic righteousness—combining faith, action, and intention.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Prophetic Example</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet ﷺ said: "The most beloved of people to Allah are those who are most beneficial to people. The most beloved deed to Allah is to make a Muslim happy, or to remove one of his troubles, or to forgive his debt, or to feed his hunger." (Tabarani). This exemplifies the spirit of giving described in the surah.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Path of Wickedness",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Consequences of Stinginess and Denial</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            Verses 8-10 describe those who will be eased to the path of difficulty: those who are stingy, consider themselves self-sufficient, and deny the best truth. This represents the comprehensive nature of spiritual failure—combining materialism, arrogance, and rejection of truth.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Al-Jalalayn explains that "considering oneself self-sufficient" (istaghna) refers to the arrogance of rejecting faith because of reliance on worldly wealth and status. This was particularly directed at wealthy Quraysh leaders like Abu Jahl and Walid ibn Mughira.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Ultimate Warning",
      content: `
        <div class="mt-6 p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800">
          <h3 class="text-lg font-semibold text-rose-800 dark:text-rose-300 mb-2">The Blazing Fire</h3>
          <p class="text-rose-700 dark:text-rose-200 mb-3">
            The final verses (11-21) contain one of the Quran's most powerful warnings about the fate of those who choose the path of wickedness: the blazing Fire where they will neither die nor live properly, with none to help them despite their wealth.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-rose-700 dark:text-rose-300 mb-1">Connection to Early Revelation</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              This warning was particularly significant for the Meccan polytheists who believed their wealth and social status would protect them. The surah emphatically states that nothing will avail them in the Hereafter except sincere faith and righteous deeds.
            </p>
          </div>
        </div>
      `,
    },
  ],

  questions: [
    {
      id: "q1",
      question: "What does the Arabic phrase وَاللَّيْلِ إِذَا يَغْشَىٰ in the opening verse refer to?",
      arabic: "وَاللَّيْلِ إِذَا يَغْشَىٰ",
      rootLetters: "ل ي ل | غ ش و",
      options: [
        { id: "a", text: "The night when it departs", isCorrect: false },
        { id: "b", text: "The night when it envelops", isCorrect: true },
        { id: "c", text: "The night when it is peaceful", isCorrect: false },
        { id: "d", text: "The night when it is dark", isCorrect: false },
      ],
      explanation: "وَاللَّيْلِ إِذَا يَغْشَىٰ means 'By the night when it covers' (roots: ل-ي-ل and غ-ش-و), referring to night's encompassing darkness.",
    },
    {
      id: "q2",
      question: "What does the Arabic term وَالنَّهَارِ إِذَا تَجَلَّىٰ mean?",
      arabic: "وَالنَّهَارِ إِذَا تَجَلَّىٰ",
      rootLetters: "ن ه ر | ج ل و",
      options: [
        { id: "a", text: "The day when it begins", isCorrect: false },
        { id: "b", text: "The day when it ends", isCorrect: false },
        { id: "c", text: "The day when it reveals itself", isCorrect: true },
        { id: "d", text: "The day when it is bright", isCorrect: false },
      ],
      explanation: "وَالنَّهَارِ إِذَا تَجَلَّىٰ means 'And the day when it appears' (roots: ن-ه-ر and ج-ل-و), referring to daylight revealing the world.",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase وَمَا خَلَقَ الذَّكَرَ وَالْأُنثَىٰ refer to?",
      arabic: "وَمَا خَلَقَ الذَّكَرَ وَالْأُنثَىٰ",
      rootLetters: "خ ل ق | ذ ك ر | أ ن ث",
      options: [
        { id: "a", text: "The creation of animals", isCorrect: false },
        { id: "b", text: "The creation of humanity", isCorrect: false },
        { id: "c", text: "The creation of pairs", isCorrect: false },
        { id: "d", text: "The creation of male and female", isCorrect: true },
      ],
      explanation: "وَمَا خَلَقَ الذَّكَرَ وَالْأُنثَىٰ means 'And He who created the male and female' (roots: خ-ل-ق, ذ-ك-ر, أ-ن-ث), emphasizing Allah's creative power.",
    },
    {
      id: "q4",
      question: "What does the Arabic expression إِنَّ سَعْيَكُمْ لَشَتَّىٰ reveal about human efforts?",
      arabic: "إِنَّ سَعْيَكُمْ لَشَتَّىٰ",
      rootLetters: "س ع ي | ش ت ت",
      options: [
        { id: "a", text: "Your efforts are similar", isCorrect: false },
        { id: "b", text: "Your efforts are difficult", isCorrect: false },
        { id: "c", text: "Your efforts are diverse", isCorrect: false },
        { id: "d", text: "Your efforts are certainly diverse", isCorrect: true },
      ],
      explanation: "إِنَّ سَعْيَكُمْ لَشَتَّىٰ means 'Indeed, your efforts are diverse' (roots: س-ع-ي and ش-ت-ت), indicating different paths people choose.",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase فَأَمَّا مَنْ أَعْطَىٰ وَاتَّقَىٰ describe?",
      arabic: "فَأَمَّا مَنْ أَعْطَىٰ وَاتَّقَىٰ",
      rootLetters: "أ ع ط و | ت ق و",
      options: [
        { id: "a", text: "As for him who gives and fears", isCorrect: false },
        { id: "b", text: "As for him who spends and is righteous", isCorrect: false },
        { id: "c", text: "As for him who gives and fears Allah", isCorrect: true },
        { id: "d", text: "As for him who donates and prays", isCorrect: false },
      ],
      explanation: "فَأَمَّا مَنْ أَعْطَىٰ وَاتَّقَىٰ means 'As for he who gives and fears Allah' (roots: أ-ع-ط-و and ت-ق-و), describing the righteous.",
    },
    {
      id: "q6",
      question: "What does the Arabic term وَصَدَّقَ بِالْحُسْنَىٰ mean?",
      arabic: "وَصَدَّقَ بِالْحُسْنَىٰ",
      rootLetters: "ص د ق | ح س ن",
      options: [
        { id: "a", text: "And believes in goodness", isCorrect: false },
        { id: "b", text: "And believes in the best reward", isCorrect: true },
        { id: "c", text: "And speaks truthfully", isCorrect: false },
        { id: "d", text: "And confirms with beauty", isCorrect: false },
      ],
      explanation: "وَصَدَّقَ بِالْحُسْنَىٰ means 'And believes in the best reward' (roots: ص-د-ق and ح-س-ن), referring to belief in divine recompense.",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ promise the righteous?",
      arabic: "فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ",
      rootLetters: "ي س ر",
      options: [
        { id: "a", text: "We will ease him to difficulty", isCorrect: false },
        { id: "b", text: "We will ease him to ease", isCorrect: false },
        { id: "c", text: "We will test him with ease", isCorrect: false },
        { id: "d", text: "We will ease him to the path of ease", isCorrect: true },
      ],
      explanation: "فَسَنُيَسِّرُهُ لِلْيُسْرَىٰ means 'We will ease him to the path of ease' (root: ي-س-ر), Allah's promise to the righteous.",
    },
    {
      id: "q8",
      question: "What does the Arabic expression وَأَمَّا مَن بَخِلَ وَاسْتَغْنَىٰ describe?",
      arabic: "وَأَمَّا مَن بَخِلَ وَاسْتَغْنَىٰ",
      rootLetters: "ب خ ل | غ ن ي",
      options: [
        { id: "a", text: "But as for him who is stingy and considers himself self-sufficient", isCorrect: true },
        { id: "b", text: "But as for him who hoards and becomes wealthy", isCorrect: false },
        { id: "c", text: "But as for him who refuses and is arrogant", isCorrect: false },
        { id: "d", text: "But as for him who denies and is proud", isCorrect: false },
      ],
      explanation: "وَأَمَّا مَن بَخِلَ وَاسْتَغْنَىٰ means 'But as for he who withholds and considers himself free of need' (roots: ب-خ-ل and غ-ن-ي), describing the wicked.",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase وَكَذَّبَ بِالْحُسْنَىٰ indicate about the wicked?",
      arabic: "وَكَذَّبَ بِالْحُسْنَىٰ",
      rootLetters: "ك ذ ب | ح س ن",
      options: [
        { id: "a", text: "And denies the best reward", isCorrect: true },
        { id: "b", text: "And lies about goodness", isCorrect: false },
        { id: "c", text: "And rejects the truth", isCorrect: false },
        { id: "d", text: "And denies beauty", isCorrect: false },
      ],
      explanation: "وَكَذَّبَ بِالْحُسْنَىٰ means 'And denies the best reward' (roots: ك-ذ-ب and ح-س-ن), showing rejection of divine recompense.",
    },
    {
      id: "q10",
      question: "What does the Arabic term فَسَنُيَسِّرُهُ لِلْعُسْرَىٰ warn the wicked?",
      arabic: "فَسَنُيَسِّرُهُ لِلْعُسْرَىٰ",
      rootLetters: "ي س ر | ع س ر",
      options: [
        { id: "a", text: "We will ease him to difficulty", isCorrect: false },
        { id: "b", text: "We will make difficulty easy for him", isCorrect: false },
        { id: "c", text: "We will ease him to the path of difficulty", isCorrect: true },
        { id: "d", text: "We will increase his difficulty", isCorrect: false },
      ],
      explanation: "فَسَنُيَسِّرُهُ لِلْعُسْرَىٰ means 'We will ease him to the path of difficulty' (roots: ي-س-ر and ع-س-ر), Allah's warning to the wicked.",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase وَمَا يُغْنِي عَنْهُ مَالُهُ إِذَا تَرَدَّىٰ reveal about wealth?",
      arabic: "وَمَا يُغْنِي عَنْهُ مَالُهُ إِذَا تَرَدَّىٰ",
      rootLetters: "غ ن ي | م ل ل | ت ر د ي",
      options: [
        { id: "a", text: "His wealth will not avail him when he perishes", isCorrect: false },
        { id: "b", text: "His wealth will not benefit him when he is destroyed", isCorrect: true },
        { id: "c", text: "His wealth will not save him when he falls", isCorrect: false },
        { id: "d", text: "His wealth will not help him when he dies", isCorrect: false },
      ],
      explanation: "This phrase means 'And his wealth will not avail him when he falls' (roots: غ-ن-ي, م-ل-ل, ت-ر-د-ي), showing wealth's futility in the Hereafter.",
    },
    {
      id: "q12",
      question: "What does the Arabic expression إِنَّ عَلَيْنَا لَلْهُدَىٰ affirm about guidance?",
      arabic: "إِنَّ عَلَيْنَا لَلْهُدَىٰ",
      rootLetters: "ع ل ي | ه د ي",
      options: [
        { id: "a", text: "Indeed, upon Us is guidance", isCorrect: false },
        { id: "b", text: "Indeed, upon Us is to guide", isCorrect: false },
        { id: "c", text: "Indeed, upon Us is the guidance", isCorrect: true },
        { id: "d", text: "Indeed, We are the guides", isCorrect: false },
      ],
      explanation: "إِنَّ عَلَيْنَا لَلْهُدَىٰ means 'Indeed, upon Us is guidance' (roots: ع-ل-ي and ه-د-ي), affirming Allah's responsibility to provide guidance.",
    },
  ],
};
