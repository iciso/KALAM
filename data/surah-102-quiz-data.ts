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
      question: "What is the main theme of Surah At-Takathur?",
      options: [
        { id: "a", text: "Warning against rivalry for worldly gains", isCorrect: true },
        { id: "b", text: "The virtues of charity", isCorrect: false },
        { id: "c", text: "The story of a prophet", isCorrect: false },
        { id: "d", text: "The rules of fasting", isCorrect: false },
      ],
      explanation: "Surah At-Takathur warns against being consumed by rivalry for worldly gains, such as wealth and status, at the expense of the Hereafter.",
    },
    {
      id: "q2",
      question: "How many ayahs are in Surah At-Takathur?",
      options: [
        { id: "a", text: "5", isCorrect: false },
        { id: "b", text: "8", isCorrect: true },
        { id: "c", text: "3", isCorrect: false },
        { id: "d", text: "9", isCorrect: false },
      ],
      explanation: "Surah At-Takathur consists of 8 ayahs, as it is a short Meccan surah.",
    },
    {
      id: "q3",
      question: "What does the term 'At-Takathur' mean?",
      options: [
        { id: "a", text: "The Time", isCorrect: false },
        { id: "b", text: "The Slanderer", isCorrect: false },
        { id: "c", text: "The Rivalry", isCorrect: true },
        { id: "d", text: "The Fire", isCorrect: false },
      ],
      explanation: "'At-Takathur' means 'The Rivalry,' referring to the human tendency to compete for worldly gains, as explained in Tafsir Ibn Kathir.",
    },
    {
      id: "q4",
      question: "What does Surah At-Takathur say people are distracted by until they reach the graves?",
      options: [
        { id: "a", text: "Prayer and worship", isCorrect: false },
        { id: "b", text: "Charity and good deeds", isCorrect: false },
        { id: "c", text: "Rivalry for worldly gains", isCorrect: true },
        { id: "d", text: "Seeking knowledge", isCorrect: false },
      ],
      explanation: "The surah states that people are distracted by rivalry for worldly gains until they visit the graves, meaning until death.",
    },
    {
      id: "q5",
      question: "What will people see with 'certainty of sight' according to Surah At-Takathur?",
      options: [
        { id: "a", text: "The reality of the Hereafter", isCorrect: true },
        { id: "b", text: "The wealth they accumulated", isCorrect: false },
        { id: "c", text: "The Kaaba’s sanctity", isCorrect: false },
        { id: "d", text: "The Prophet’s mission", isCorrect: false },
      ],
      explanation: "The surah describes people seeing the reality of the Hereafter with 'certainty of sight' (yaqin) after death.",
    },
    {
      id: "q6",
      question: "What type of surah is At-Takathur?",
      options: [
        { id: "a", text: "Medinan", isCorrect: false },
        { id: "b", text: "Meccan", isCorrect: true },
        { id: "c", text: "Makki-Medinan", isCorrect: false },
        { id: "d", text: "Post-Hijrah", isCorrect: false },
      ],
      explanation: "Surah At-Takathur is a Meccan surah, revealed in Mecca during the early period of the Prophet’s mission.",
    },
    {
      id: "q7",
      question: "What will people be questioned about according to Surah At-Takathur?",
      options: [
        { id: "a", text: "Their knowledge", isCorrect: false },
        { id: "b", text: "Their travels", isCorrect: false },
        { id: "c", text: "Their pleasures and blessings", isCorrect: true },
        { id: "d", text: "Their ancestry", isCorrect: false },
      ],
      explanation: "The surah warns that people will be questioned about their pleasures and how they used their blessings in the Hereafter.",
    },
    {
      id: "q8",
      question: "According to Tafsir Ibn Kathir, what did some Meccans boast about in their rivalry?",
      options: [
        { id: "a", text: "Their charity", isCorrect: false },
        { id: "b", text: "Their ancestors and tribesmen", isCorrect: true },
        { id: "c", text: "Their prayers", isCorrect: false },
        { id: "d", text: "Their battles", isCorrect: false },
      ],
      explanation: "Tafsir Ibn Kathir notes that some Meccans boasted about their ancestors and tribesmen, even counting graves, in their rivalry.",
    },
    {
      id: "q9",
      question: "What does Surah At-Takathur urge believers to prioritize?",
      options: [
        { id: "a", text: "Accumulating wealth", isCorrect: false },
        { id: "b", text: "Faith and righteous deeds", isCorrect: true },
        { id: "c", text: "Competing for status", isCorrect: false },
        { id: "d", text: "Boasting about ancestry", isCorrect: false },
      ],
      explanation: "The surah urges believers to prioritize faith and righteous deeds over worldly rivalry to prepare for the Hereafter.",
    },
    {
      id: "q10",
      question: "What does the phrase 'until you visited the graves' signify?",
      options: [
        { id: "a", text: "Rivalry continues until death", isCorrect: true },
        { id: "b", text: "Visiting graves brings blessings", isCorrect: false },
        { id: "c", text: "Graves are a place of worship", isCorrect: false },
        { id: "d", text: "Graves hold worldly wealth", isCorrect: false },
      ],
      explanation: "The phrase signifies that rivalry for worldly gains persists until death, as explained in Tafsir Al-Jalalayn.",
    },
    {
      id: "q11",
      question: "What is the consequence of being distracted by rivalry, according to Surah At-Takathur?",
      options: [
        { id: "a", text: "Loss of wealth", isCorrect: false },
        { id: "b", text: "Neglect of the Hereafter", isCorrect: true },
        { id: "c", text: "Social isolation", isCorrect: false },
        { id: "d", text: "Loss of knowledge", isCorrect: false },
      ],
      explanation: "The surah warns that rivalry distracts from preparing for the Hereafter, leading to accountability before Allah.",
    },
    {
      id: "q12",
      question: "What did the Prophet Muhammad ﷺ say about wealth, as related to Surah At-Takathur?",
      options: [
        { id: "a", text: "Wealth is eternal", isCorrect: false },
        { id: "b", text: "Wealth is only what you eat, wear, or give in charity", isCorrect: true },
        { id: "c", text: "Wealth guarantees success", isCorrect: false },
        { id: "d", text: "Wealth should be hoarded", isCorrect: false },
      ],
      explanation: "A hadith narrated by Imam Ahmad states that true wealth is what you eat, wear, or give in charity, aligning with the surah’s message.",
    },
  ],
};
