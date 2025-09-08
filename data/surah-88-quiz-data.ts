export const alGhashiyahQuizData: SurahQuizData = {
  surahId: 88,
  surahName: "Al-Ghashiyah",
  surahArabicName: "الغاشية",
  totalVerses: 26,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Ghashiyah (The Overwhelming) is the 88th chapter of the Quran, revealed in Mecca. It describes the Day of Judgment as an overwhelming event, contrasting the fates of the disbelievers in Hell—facing humiliation, exhaustion, and torment—with the believers in Paradise—enjoying radiance, satisfaction, and luxury. The surah urges contemplation of Allah's creation as evidence of monotheism and reminds the Prophet ﷺ of his role as a warner, with ultimate accountability to Allah.",
  additionalContextElements: [
    {
      title: "The Overwhelming Event and Contrasting Fates",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Day of Judgment and Hereafter Destinies</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The surah opens with a question about the overwhelming event (Al-Ghashiyah), a name for the Day of Judgment that will cover and overwhelm all. It vividly contrasts humbled, weary faces in Hell—drinking boiling water, eating thorny plants—with radiant, satisfied faces in Paradise—reclining on elevated couches, enjoying eternal bliss without vain talk or sin.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains Al-Ghashiyah as the Day of Judgment overwhelming people, per Ibn Abbas and Qatadah. Hell's faces are 'khashi'ah' (humbled), laboring in vain; Paradise's are 'na'imah' (radiant), pleased with efforts. Tafsir Al-Jalalayn adds Hell's food 'dari'' causes suffering without nourishment.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Reasons for Revelation and Historical Context</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Revealed early in Mecca during public preaching and rising persecution of Muslims by Quraysh. It warns disbelievers of consequences, encourages the Prophet ﷺ amid opposition, strengthening faith in resurrection and accountability.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Resurrection and fates: Surah An-Naba (78:21-30) for Hell; Surah Al-Insan (76:11-22) for Paradise. Faces on Judgment Day: Surah Al-Qiyamah (75:22-25).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Contemplation of Creation and Prophetic Role",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Signs of Monotheism and Reminder's Duty</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The surah calls for reflection on camels' creation, raised sky, firm mountains, and spread earth as proofs of Allah's power and oneness. It clarifies the Prophet ﷺ's role as a reminder, not controller, with Allah handling guidance and punishment.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir notes these signs prove Allah's greatness: Camels' utility, sky as roof, mountains as pegs, earth as bed. The Prophet reminds, but disbelievers face punishment; all return to Allah for account.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Prophetic Guidance and Hadith</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              A hadith in Sahih Muslim narrates the Prophet ﷺ recited Surah Al-A'la and Al-Ghashiyah in Eid and Friday prayers, emphasizing their themes of glorification and judgment.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Creation signs: Surah An-Nahl (16:79) for birds/sky; Surah An-Naba (78:6-7) for earth/mountains. Prophet's role: Surah Al-Qasas (28:56) on guidance; Surah At-Taghabun (64:12) on obedience.
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Al-Ghashiyah, الغاشية?",
      arabic: "الغاشية",
      rootLetters: "غ ش و",
      options: [
        { id: "a", text: "The Overwhelming", isCorrect: true },
        { id: "b", text: "The Dawn", isCorrect: false },
        { id: "c", text: "The City", isCorrect: false },
        { id: "d", text: "The Chargers", isCorrect: false },
      ],
      explanation: "الغاشية (Al-Ghashiyah) means 'The Overwhelming,' referring to the Day of Judgment, derived from the root غ-ش-و (to cover/overwhelm).",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ' mean?",
      arabic: "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ",
      rootLetters: "أ ت ي | ح د ث | غ ش و",
      options: [
        { id: "a", text: "Has there come to you the news of the dawn?", isCorrect: false },
        { id: "b", text: "Has there come to you the story of the chargers?", isCorrect: false },
        { id: "c", text: "Has there come to you the news of the overwhelming?", isCorrect: true },
        { id: "d", text: "Has there come to you the account of the city?", isCorrect: false },
      ],
      explanation: "هَلْ أَتَاكَ حَدِيثُ الْغَاشِيَةِ (Hal ataka hadithu al-ghashiyah) means 'Has there come to you the news of the overwhelming?,' roots أ-ت-ي (come), ح-د-ث (news), غ-ش-و (overwhelming).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ' mean?",
      arabic: "وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ",
      rootLetters: "و ج ه | ي و م | خ ش ع",
      options: [
        { id: "a", text: "Faces that day will be radiant", isCorrect: false },
        { id: "b", text: "Faces that day will be pleased", isCorrect: false },
        { id: "c", text: "Faces that day will be humbled", isCorrect: true },
        { id: "d", text: "Faces that day will be weary", isCorrect: false },
      ],
      explanation: "وُجُوهٌ يَوْمَئِذٍ خَاشِعَةٌ (Wujuhun yawma'idhin khashi'ah) means 'Faces that day will be humbled,' roots و-ج-ه (faces), ي-و-م (day), خ-ش-ع (humbled).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'عَامِلَةٌ نَّاصِبَةٌ' mean?",
      arabic: "عَامِلَةٌ نَّاصِبَةٌ",
      rootLetters: "ع م ل | ن ص ب",
      options: [
        { id: "a", text: "Pleased with effort", isCorrect: false },
        { id: "b", text: "Laboring, weary", isCorrect: true },
        { id: "c", text: "Radiant and soft", isCorrect: false },
        { id: "d", text: "Drinking from spring", isCorrect: false },
      ],
      explanation: "عَامِلَةٌ نَّاصِبَةٌ ('Amilatun nasibah) means 'laboring, weary,' describing Hell's inhabitants, roots ع-م-ل (labor), ن-ص-ب (weary).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'تَصْلَىٰ نَارًا حَامِيَةً' mean?",
      arabic: "تَصْلَىٰ نَارًا حَامِيَةً",
      rootLetters: "ص ل ي | ن و ر | ح م ي",
      options: [
        { id: "a", text: "Enter a high garden", isCorrect: false },
        { id: "b", text: "Drink from a boiling spring", isCorrect: false },
        { id: "c", text: "Eat from a thorny plant", isCorrect: false },
        { id: "d", text: "Enter a blazing fire", isCorrect: true },
      ],
      explanation: "تَصْلَىٰ نَارًا حَامِيَةً (Tasla naran hamiyah) means 'enter a blazing fire,' roots ص-ل-ي (enter/roast), ن-و-ر (fire), ح-م-ي (blazing).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'تُسْقَىٰ مِنْ عَيْنٍ آنِيَةٍ' mean?",
      arabic: "تُسْقَىٰ مِنْ عَيْنٍ آنِيَةٍ",
      rootLetters: "س ق ي | ع ي ن | أ ن ي",
      options: [
        { id: "a", text: "Fed from a flowing spring", isCorrect: false },
        { id: "b", text: "Reclining on adorned couches", isCorrect: false },
        { id: "c", text: "Hearing no idle speech", isCorrect: false },
        { id: "d", text: "Given drink from a boiling spring", isCorrect: true },
      ],
      explanation: "تُسْقَىٰ مِنْ عَيْنٍ آنِيَةٍ (Tusqa min 'aynin aniyah) means 'given drink from a boiling spring,' roots س-ق-ي (drink), ع-ي-ن (spring), أ-ن-ي (boiling).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍ' mean?",
      arabic: "لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍ",
      rootLetters: "ط ع م | ض ر ع",
      options: [
        { id: "a", text: "No food for them except from dari'", isCorrect: true },
        { id: "b", text: "No drink for them except from cups", isCorrect: false },
        { id: "c", text: "No rest for them except on cushions", isCorrect: false },
        { id: "d", text: "No speech for them except vain", isCorrect: false },
      ],
      explanation: "لَّيْسَ لَهُمْ طَعَامٌ إِلَّا مِن ضَرِيعٍ (Laysa lahum ta'amun illa min dari') means 'no food for them except from dari',' a thorny plant, roots ط-ع-م (food), ض-ر-ع (dari').",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'وُجُوهٌ يَوْمَئِذٍ نَّاعِمَةٌ' mean?",
      arabic: "وُجُوهٌ يَوْمَئِذٍ نَّاعِمَةٌ",
      rootLetters: "و ج ه | ي و م | ن ع م",
      options: [
        { id: "a", text: "Faces that day will be humbled", isCorrect: false },
        { id: "b", text: "Faces that day will be weary", isCorrect: false },
        { id: "c", text: "Faces that day will be laboring", isCorrect: false },
        { id: "d", text: "Faces that day will be radiant", isCorrect: true },
      ],
      explanation: "وُجُوهٌ يَوْمَئِذٍ نَّاعِمَةٌ (Wujuhun yawma'idhin na'imah) means 'faces that day will be radiant,' roots و-ج-ه (faces), ي-و-م (day), ن-ع-م (radiant/soft).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'لِّسَعْيِهَا رَاضِيَةٌ' mean?",
      arabic: "لِّسَعْيِهَا رَاضِيَةٌ",
      rootLetters: "س ع ي | ر ض و",
      options: [
        { id: "a", text: "Humbled by its effort", isCorrect: false },
        { id: "b", text: "Pleased with its effort", isCorrect: true },
        { id: "c", text: "Weary from its effort", isCorrect: false },
        { id: "d", text: "Laboring in its effort", isCorrect: false },
      ],
      explanation: "لِّسَعْيِهَا رَاضِيَةٌ (Li-sa'yiha radiyah) means 'pleased with its effort,' roots س-ع-ي (effort), ر-ض-و (pleased).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'فِي جَنَّةٍ عَالِيَةٍ' mean?",
      arabic: "فِي جَنَّةٍ عَالِيَةٍ",
      rootLetters: "ج ن ن | ع ل و",
      options: [
        { id: "a", text: "In a blazing fire", isCorrect: false },
        { id: "b", text: "In a boiling spring", isCorrect: false },
        { id: "c", text: "In a high garden", isCorrect: true },
        { id: "d", text: "In a thorny plant", isCorrect: false },
      ],
      explanation: "فِي جَنَّةٍ عَالِيَةٍ (Fi jannatin 'aliyah) means 'in a high garden,' roots ج-ن-ن (garden), ع-ل-و (high).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ' mean?",
      arabic: "أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ",
      rootLetters: "ن ظ ر | أ ب ل | خ ل ق",
      options: [
        { id: "a", text: "Do they not look at the sky how it is raised?", isCorrect: false },
        { id: "b", text: "Do they not look at the mountains how they are set?", isCorrect: false },
        { id: "c", text: "Do they not look at the camels how they are created?", isCorrect: true },
        { id: "d", text: "Do they not look at the earth how it is spread?", isCorrect: false },
      ],
      explanation: "أَفَلَا يَنظُرُونَ إِلَى الْإِبِلِ كَيْفَ خُلِقَتْ (Afala yanzuruna ila al-ibili kayfa khuliqat) means 'Do they not look at the camels how they are created?,' roots ن-ظ-ر (look), أ-ب-ل (camels), خ-ل-ق (created).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'فَذَكِّرْ إِنَّمَا أَنتَ مُذَكِّرٌ' mean?",
      arabic: "فَذَكِّرْ إِنَّمَا أَنتَ مُذَكِّرٌ",
      rootLetters: "ذ ك ر",
      options: [
        { id: "a", text: "You are not over them a controller", isCorrect: false },
        { id: "b", text: "So remind, you are only a reminder", isCorrect: true },
        { id: "c", text: "But whoever turns away and disbelieves", isCorrect: false },
        { id: "d", text: "Then Allah will punish him with the greatest punishment", isCorrect: false },
      ],
      explanation: "فَذَكِّرْ إِنَّمَا أَنتَ مُذَكِّرٌ (Fadhakkir innama anta mudhakkir) means 'So remind, you are only a reminder,' root ذ-ك-ر (remind).",
    },
  ],
};
