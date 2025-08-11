export const atTakathurQuizData: SurahQuizData = {
  surahId: 102,
  surahName: "At-Takathur",
  surahArabicName: "التكاثر",
  totalVerses: 8,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah At-Takathur (The Rivalry) is the 102nd chapter of the Quran, revealed in Mecca. It warns against the human tendency to be consumed by rivalry and competition for worldly gains, such as wealth and status, at the expense of preparing for the Hereafter. The surah reminds believers of the certainty of death and accountability before Allah, urging them to prioritize faith and righteous deeds.",
  additionalContextElements: [
    {
      title: "The Distraction of Rivalry",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Worldly Competition</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            Surah At-Takathur addresses the destructive obsession with accumulating wealth, children, and status, which distracts people from their purpose in life. This rivalry, prevalent among the Meccan Quraysh, led them to boast about their worldly achievements while neglecting spiritual obligations.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains that the surah was revealed to admonish those who were preoccupied with outdoing one another in worldly matters, such as counting their tribesmen or wealth, even to the extent of visiting graves to boast about their ancestors.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Reality of Accountability",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">The Hereafter</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The surah vividly describes the moment when people will face the reality of the Hereafter, seeing the truth with 'certainty of sight' (yaqin). It warns that they will be questioned about their worldly pleasures and how they used their blessings, emphasizing accountability before Allah.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Consequences of Neglect</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              According to Tafsir Al-Jalalayn, the phrase 'until you visited the graves' signifies that this rivalry persists until death, at which point it is too late to rectify one’s priorities. The surah urges believers to focus on what truly matters before it’s too late.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Prophetic Guidance</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              A hadith narrated by Imam Ahmad relates that the Prophet Muhammad ﷺ said, “The son of Adam says, ‘My wealth, my wealth,’ but what is truly yours is what you have eaten, worn, or given in charity.” This aligns with the surah’s message to prioritize deeds over fleeting worldly gains.
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, At-Takathur, التكاثر?",
      arabic: "التكاثر",
      rootLetters: "ك ث ر",
      options: [
        { id: "a", text: "The Hellfire", isCorrect: false },
        { id: "b", text: "The Wealth", isCorrect: false },
        { id: "c", text: "The Time", isCorrect: false },
        { id: "d", text: "The Rivalry", isCorrect: true },
      ],
      explanation: "التكاثر (At-Takathur) means 'The Rivalry,' or 'Competition', derived from the root ك-ث-ر, referring to competition for worldly gains.",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'حَتَّىٰ زُرْتُمُ الْمَقَابِرَ' mean?",
      arabic: "حَتَّىٰ زُرْتُمُ الْمَقَابِرَ",
      rootLetters: "ز و ر | ق ب ر",
      options: [
        { id: "a", text: "Until death", isCorrect: true },
        { id: "b", text: "Until prayer", isCorrect: false },
        { id: "c", text: "Until victory", isCorrect: false },
        { id: "d", text: "Until judgment", isCorrect: false },
      ],
      explanation: "حَتَّىٰ زُرْتُمُ الْمَقَابِرَ (until you visit the graves) signifies rivalry persisting until death (roots: ز-و-ر and ق-ب-ر).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'عَيْنِ الْيَقِينِ' mean?",
      arabic: "عَيْنِ الْيَقِينِ",
      rootLetters: "ي ق ن",
      options: [
        { id: "a", text: "Accumulating wealth", isCorrect: false },
        { id: "b", text: "Full of doubt", isCorrect: false },
        { id: "c", text: "Certainty of sight", isCorrect: true },
        { id: "d", text: "Without any fear", isCorrect: false },
      ],
      explanation: "عَيْنِ الْيَقِينِ (ayn al-yaqin) means 'certainty of sight,' derived from ي-ق-ن (certainty).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'لَهُو' mean?",
      arabic: "لَهُو",
      rootLetters: "ل ه و",
      options: [
        { id: "a", text: "Wordly distractions", isCorrect: true },
        { id: "b", text: "Sincere prayers", isCorrect: false },
        { id: "c", text: "Regular charity", isCorrect: false },
        { id: "d", text: "Beneficial knowledge", isCorrect: false },
      ],
      explanation: "لَهُو (lahw) means 'distractions,' from the root ل-ه-و, referring to worldly pursuits.",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'لَتَرَوُنَّ الْجَحِيمَ' mean?",
      arabic: "لَتَرَوُنَّ الْجَحِيمَ",
      rootLetters: "ر أ ي | ج ح م",
      options: [
        { id: "a", text: "You will see Paradise", isCorrect: false },
        { id: "b", text: "You will see Hellfire", isCorrect: true },
        { id: "c", text: "You will see wealth", isCorrect: false },
        { id: "d", text: "You will see angels", isCorrect: false },
      ],
      explanation: "لَتَرَوُنَّ الْجَحِيمَ (la-tarawunna al-jahim) means 'you will surely see Hellfire,' with roots ر-أ-ي and ج-ح-م.",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'لَتُسْأَلُنَّ' mean?",
      arabic: "لَتُسْأَلُنَّ",
      rootLetters: "س ء ل",
      options: [
        { id: "a", text: "Rewarded", isCorrect: false },
        { id: "b", text: "Punished", isCorrect: false },
        { id: "c", text: "Questioned", isCorrect: true },
        { id: "d", text: "Forgiven", isCorrect: false },
      ],
      explanation: "لَتُسْأَلُنَّ (la-tus'alunna) means 'you will be questioned,' derived from س-ء-ل.",
    },
    {
      id: "q7",
      question: "What does the Arabic word 'التفاخر' in Tafsir Ibn Kathir refer to?",
      arabic: "التفاخر",
      rootLetters: "ف خ ر",
      options: [
        { id: "a", text: "Hiding", isCorrect: false },
        { id: "b", text: "Praying", isCorrect: false },
        { id: "c", text: "Giving", isCorrect: false },
        { id: "d", text: "Boasting", isCorrect: true },
      ],
      explanation: "التفاخر (at-tafakhur) means 'boasting' and refers to boasting about wealth from the root ف-خ-ر, as explained in Tafsir Ibn Kathir.",
    },
    {
      id: "q8",
      question: "What does the Arabic word 'مَالُكَ' in the Hadeeth of this Surah At-Takathur refer to?",
      arabic: "مَالُكَ",
      rootLetters: "م و ل",
      options: [
        { id: "a", text: "What you eat, wear, or give in charity", isCorrect: true },
        { id: "b", text: "Gold and silver", isCorrect: false },
        { id: "c", text: "Land and property", isCorrect: false },
        { id: "d", text: "Business profits", isCorrect: false },
      ],
      explanation: "The hadith defines مَالُكَ (your wealth) as what you consume or give in charity (root: م-و-ل).",
    },
    {
      id: "q9",
      question: "What is the root of the word الْمَقَابِرَ (the graves) in the surah?",
      arabic: "الْمَقَابِرَ",
      rootLetters: "ق ب ر",
      options: [
        { id: "a", text: "ز-و-ر", isCorrect: false },
        { id: "b", text: "د-ف-ن", isCorrect: false },
        { id: "c", text: "م-و-ت", isCorrect: false },
        { id: "d", text: "ق-ب-ر", isCorrect: true },
      ],
      explanation: "الْمَقَابِرَ (al-maqabir) is derived from the root ق-ب-ر (grave).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'أَلْهَاكُمُ' mean?",
      arabic: "أَلْهَاكُمُ",
      rootLetters: "ل ه و",
      options: [
        { id: "a", text: "You are grateful", isCorrect: false },
        { id: "b", text: "You are patient", isCorrect: false },
        { id: "c", text: "You are obsessed", isCorrect: true },
        { id: "d", text: "You are fearful", isCorrect: false },
      ],
      explanation: "أَلْهَاكُمُ (alhakum) means 'you are obsessed,' from the root ل-ه-و.",
    },
  ],
};
