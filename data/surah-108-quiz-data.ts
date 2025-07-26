export interface SurahQuizData {
  surahId: number
  surahName: string
  surahArabicName: string
  totalVerses: number
  type: string
  difficulty: string
  introduction: string
  additionalContextElements?: {
    title: string
    content: string
  }[]
  questions: {
    id: string
    question: string
    arabic?: string
    rootLetters?: string
    options: {
      id: string
      text: string
      isCorrect: boolean
    }[]
    explanation?: string
  }[]
}

export const alKawtharQuizData: SurahQuizData = {
  surahId: 108,
  surahName: "Al-Kawthar",
  surahArabicName: "الكوثر",
  totalVerses: 3,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Kawthar (The Abundance) is the 108th chapter of the Quran, one of the shortest surahs, and was revealed to console the Prophet Muhammad ﷺ during a time of personal and communal hardship. It promises divine blessings, abundance, and ultimate victory over his adversaries.",
  additionalContextElements: [
    {
      title: "Historical Context",
      content: `
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Revelation Amid Hardship</h3>
          <p class="text-blue-700 dark:text-blue-200 mb-3">
            Surah Al-Kawthar was revealed in Mecca during a period when the Prophet Muhammad ﷺ faced intense opposition and personal loss, including the death of his son, which his enemies mocked as the end of his legacy. This surah reassured him of Allah's abundant blessings.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Divine Reassurance</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The surah counters the taunts of the Quraysh by affirming that the Prophet's legacy would endure through divine blessings, while his enemies would be 'cut off.'
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Meaning of Al-Kawthar",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">The Abundance</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            'Al-Kawthar' refers to abundant blessings granted to the Prophet Muhammad ﷺ, interpreted by scholars to include:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Spiritual Blessings</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Prophethood, the Quran, and guidance for humanity.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Material Blessings</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                A river in Paradise called Al-Kawthar, promised to the Prophet.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Legacy</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                A lasting legacy through his teachings and followers.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Intercession</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                The right to intercede for his Ummah on the Day of Judgment.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "kawthar-1",
      question: "What does the name 'Al-Kawthar' mean?",
      arabic: "الْكَوْثَرَ",
      rootLetters: "ك ث ر",
      options: [
        { id: "a", text: "The Abundance", isCorrect: true },
        { id: "b", text: "The River", isCorrect: false },
        { id: "c", text: "The Victory", isCorrect: false },
        { id: "d", text: "The Mercy", isCorrect: false },
      ],
      explanation:
        "Al-Kawthar means 'The Abundance' and comes from the root ك ث ر, meaning to be abundant or plentiful. It refers to the abundant blessings bestowed upon the Prophet Muhammad ﷺ, including prophethood, the Quran, a river in Paradise, and his enduring legacy.",
    },
    {
      id: "kawthar-2",
      question: "What is the meaning of this opening verse?",
      arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
      rootLetters: "ع ط ي",
      options: [
        { id: "a", text: "Indeed, We have granted you Al-Kawthar", isCorrect: true },
        { id: "b", text: "Indeed, We have given you victory", isCorrect: false },
        { id: "c", text: "Indeed, We have bestowed upon you mercy", isCorrect: false },
        { id: "d", text: "Indeed, We have provided you guidance", isCorrect: false },
      ],
      explanation:
        "Inna a'taynaka al-kawthar means 'Indeed, We have granted you Al-Kawthar.' The word 'a'tayna' from the root ع ط ي means to give or grant. This verse reassures the Prophet ﷺ that Allah has bestowed upon him abundant blessings, countering the taunts of his enemies.",
    },
    {
      id: "kawthar-3",
      question: "What is the meaning of this command?",
      arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
      rootLetters: "ص ل ي",
      options: [
        { id: "a", text: "So pray to your Lord and sacrifice", isCorrect: true },
        { id: "b", text: "So worship your Lord and give charity", isCorrect: false },
        { id: "c", text: "So glorify your Lord and offer gifts", isCorrect: false },
        { id: "d", text: "So praise your Lord and perform rituals", isCorrect: false },
      ],
      explanation:
        "Fa salli li rabbika wanhar means 'So pray to your Lord and sacrifice.' The word 'salli' from the root ص ل ي refers to prayer, and 'wanhar' from the root ن ح ر means to sacrifice or slaughter (e.g., an animal during Eid al-Adha). This commands the Prophet ﷺ to show gratitude through worship and sacrifice.",
    },
    {
      id: "kawthar-4",
      question: "What is the meaning of this final verse?",
      arabic: "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ",
      rootLetters: "ب ت ر",
      options: [
        { id: "a", text: "Indeed, your enemy is the one cut off", isCorrect: true },
        { id: "b", text: "Indeed, your foe is the one defeated", isCorrect: false },
        { id: "c", text: "Indeed, your rival is the one lost", isCorrect: false },
        { id: "d", text: "Indeed, your adversary is the one cursed", isCorrect: false },
      ],
      explanation:
        "Inna shani'aka huwa al-abtar means 'Indeed, your enemy is the one cut off.' The word 'abtar' from the root ب ت ر means cut off, without posterity or legacy. This refutes the Quraysh's mockery that the Prophet ﷺ was 'cut off' due to the death of his sons, declaring instead that his enemies are the ones without a lasting legacy.",
    },
    {
      id: "kawthar-5",
      question: "What does 'Al-Kawthar' include according to scholarly interpretations?",
      arabic: "الْكَوْثَرَ",
      options: [
        { id: "a", text: "A river in Paradise, prophethood, and lasting legacy", isCorrect: true },
        { id: "b", text: "Wealth, power, and victory", isCorrect: false },
        { id: "c", text: "Children, land, and honor", isCorrect: false },
        { id: "d", text: "Knowledge, strength, and peace", isCorrect: false },
      ],
      explanation:
        "Scholars interpret 'Al-Kawthar' as encompassing multiple blessings: a river in Paradise called Al-Kawthar, prophethood, the Quran, guidance for humanity, the Prophet's enduring legacy through his teachings and followers, and his right to intercede on the Day of Judgment.",
    },
    {
      id: "kawthar-6",
      question: "Why was this surah revealed during a time of hardship for the Prophet ﷺ?",
      arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
      options: [
        { id: "a", text: "To console and reassure him of Allah's abundant blessings", isCorrect: true },
        { id: "b", text: "To warn his enemies of punishment", isCorrect: false },
        { id: "c", text: "To instruct him to fight back", isCorrect: false },
        { id: "d", text: "To teach him new rituals", isCorrect: false },
      ],
      explanation:
        "Surah Al-Kawthar was revealed to console the Prophet ﷺ during a difficult time in Mecca, marked by personal loss (e.g., the death of his son) and intense opposition from the Quraysh. It reassured him that Allah had granted him abundant blessings, ensuring his legacy would endure while his enemies would be forgotten.",
    },
    {
      id: "kawthar-7",
      question: "What does the command to 'sacrifice' symbolize in this context?",
      arabic: "وَانْحَرْ",
      rootLetters: "ن ح ر",
      options: [
        { id: "a", text: "Gratitude and devotion to Allah through acts of worship", isCorrect: true },
        { id: "b", text: "Giving wealth to the poor", isCorrect: false },
        { id: "c", text: "Fighting against enemies", isCorrect: false },
        { id: "d", text: "Building a community", isCorrect: false },
      ],
      explanation:
        "The command 'wanhar' (sacrifice) from the root ن ح ر symbolizes gratitude and devotion to Allah through acts of worship, specifically the ritual sacrifice during Eid al-Adha or other permissible times. It reflects the Prophet's ﷺ commitment to Allah despite hardships, encouraging believers to express gratitude through obedience.",
    },
    {
      id: "kawthar-8",
      question: "Who is referred to as 'shani'aka' (your enemy)?",
      arabic: "شَانِئَكَ",
      rootLetters: "ش ن أ",
      options: [
        { id: "a", text: "Those who mocked and opposed the Prophet", isCorrect: true },
        { id: "b", text: "The disbelievers in general", isCorrect: false },
        { id: "c", text: "The Prophet's family members", isCorrect: false },
        { id: "d", text: "The neighboring tribes", isCorrect: false },
      ],
      explanation:
        "Shani'aka from the root ش ن أ means 'your enemy' or 'the one who hates you.' It refers specifically to those in Mecca, like the Quraysh leaders, who mocked and opposed the Prophet Muhammad ﷺ, particularly for not having surviving male heirs. The surah declares their legacy will be 'cut off,' unlike the Prophet's.",
    },
    {
      id: "kawthar-9",
      question: "What lesson does this surah teach about responding to adversity?",
      arabic: "فَصَلِّ لِرَبِّكَ وَانْحَرْ",
      options: [
        { id: "a", text: "Turn to worship and gratitude despite challenges", isCorrect: true },
        { id: "b", text: "Seek revenge against adversaries", isCorrect: false },
        { id: "c", text: "Focus on worldly success", isCorrect: false },
        { id: "d", text: "Withdraw from society", isCorrect: false },
      ],
      explanation:
        "The command to pray and sacrifice in the face of adversity teaches believers to turn to worship, gratitude, and obedience to Allah despite challenges. The Prophet ﷺ was instructed to remain steadfast in his devotion, showing that spiritual resilience and reliance on Allah are the best responses to hardship.",
    },
    {
      id: "kawthar-10",
      question: "What is the significance of this surah being one of the shortest in the Quran?",
      arabic: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ",
      options: [
        { id: "a", text: "It conveys a powerful message of hope in few words", isCorrect: true },
        { id: "b", text: "It was meant to be memorized quickly", isCorrect: false },
        { id: "c", text: "It was less important than longer surahs", isCorrect: false },
        { id: "d", text: "It was revealed in a hurry", isCorrect: false },
      ],
      explanation:
        "Despite its brevity (only three verses), Surah Al-Kawthar conveys a powerful message of hope, divine support, and ultimate victory for the Prophet Muhammad ﷺ. Its concise yet profound nature makes it a source of comfort and inspiration, demonstrating that even a few words from Allah can carry immense meaning.",
    },
  ],
}
