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

export const alQurayshQuizData: SurahQuizData = {
  surahId: 106,
  surahName: "Al-Quraysh",
  surahArabicName: "قريش",
  totalVerses: 4,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Quraysh (The Quraysh) is the 106th chapter of the Quran, revealed in Mecca. This short surah highlights the blessings bestowed upon the Quraysh tribe, particularly their security in travel and provision, urging them to worship Allah, the Lord of the Kaaba, in gratitude for these favors.",
  additionalContextElements: [
    {
      title: "Historical Context",
      content: `
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Blessings for the Quraysh</h3>
          <p class="text-blue-700 dark:text-blue-200 mb-3">
            Surah Al-Quraysh was revealed in Mecca, addressing the Quraysh tribe, who were custodians of the Kaaba and enjoyed significant prestige and economic stability. The surah reminds them of Allah's blessings, such as safety during their trade journeys and provision in a barren land, encouraging gratitude through worship.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Connection to Surah Al-Fil</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Scholars note that Surah Al-Quraysh is closely linked to Surah Al-Fil (105), which describes the protection of the Kaaba from Abraha's army, ensuring the Quraysh's continued security and prosperity.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Key Themes",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Gratitude and Worship</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The surah emphasizes the following blessings and responsibilities:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Security in Travel</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Safety during winter and summer trade journeys to Yemen and Syria.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Provision</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Protection from hunger in the barren valley of Mecca.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Custodianship</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Privilege of maintaining the Kaaba, a sacred sanctuary.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Duty to Worship</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Obligation to worship Allah alone in gratitude for His favors.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "quraysh-1",
      question: "What does the name 'Al-Quraysh' refer to?",
      arabic: "قريش",
      rootLetters: "ق ر ش",
      options: [
        { id: "a", text: "The tribe responsible for the Kaaba", isCorrect: true },
        { id: "b", text: "A sacred mountain in Mecca", isCorrect: false },
        { id: "c", text: "The people of Medina", isCorrect: false },
        { id: "d", text: "A group of early Muslims", isCorrect: false },
      ],
      explanation:
        "Al-Quraysh refers to the Quraysh tribe, the prominent Meccan tribe responsible for the custodianship of the Kaaba. The name comes from the root ق ر ش, linked to gathering or commerce, reflecting their role as traders and caretakers of the sacred sanctuary.",
    },
    {
      id: "quraysh-2",
      question: "What does the opening verse emphasize?",
      arabic: "لِإِيلَافِ قُرَيْشٍ",
      rootLetters: "أ ل ف",
      options: [
        { id: "a", text: "The Quraysh's familiarity with their trade journeys", isCorrect: true },
        { id: "b", text: "The Quraysh's unity as a tribe", isCorrect: false },
        { id: "c", text: "The Quraysh's worship of the Kaaba", isCorrect: false },
        { id: "d", text: "The Quraysh's protection from enemies", isCorrect: false },
      ],
      explanation:
        "Li’ilafi Quraysh means 'For the familiarity of the Quraysh.' The word 'ilaf' from the root أ ل ف refers to their accustomed security and success in trade journeys. The verse highlights Allah’s blessing of enabling the Quraysh to undertake their caravans safely.",
    },
    {
      id: "quraysh-3",
      question: "What specific blessings are mentioned in this verse?",
      arabic: "إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ وَالصَّيْفِ",
      rootLetters: "ر ح ل",
      options: [
        { id: "a", text: "Safety in winter and summer trade journeys", isCorrect: true },
        { id: "b", text: "Abundance of food and water", isCorrect: false },
        { id: "c", text: "Protection from natural disasters", isCorrect: false },
        { id: "d", text: "Victory over their enemies", isCorrect: false },
      ],
      explanation:
        "Ilfihim rihlata ash-shita’i was-sayf means 'Their familiarity with the journey of winter and summer.' The word 'rihla' from the root ر ح ل means journey. The verse refers to the Quraysh’s safe trade caravans to Yemen in winter and Syria in summer, a key source of their prosperity.",
    },
    {
      id: "quraysh-4",
      question: "What is the Quraysh commanded to do in this verse?",
      arabic: "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ",
      rootLetters: "ع ب د",
      options: [
        { id: "a", text: "Worship the Lord of this House (the Kaaba)", isCorrect: true },
        { id: "b", text: "Protect the Kaaba from enemies", isCorrect: false },
        { id: "c", text: "Offer sacrifices at the Kaaba", isCorrect: false },
        { id: "d", text: "Share their wealth with the poor", isCorrect: false },
      ],
      explanation:
        "Falyabudu rabba hadha al-bayt means 'So let them worship the Lord of this House.' The word 'yabudu' from the root ع ب د means to worship. The verse urges the Quraysh to show gratitude by worshipping Allah, the Lord of the Kaaba, for His blessings.",
    },
    {
      id: "quraysh-5",
      question: "What blessings are highlighted in the final verse?",
      arabic: "الَّذِي أَطْعَمَهُم مِّن جُوعٍ وَآمَنَهُم مِّنْ خَوْفٍ",
      rootLetters: "ط ع م",
      options: [
        { id: "a", text: "Protection from hunger and fear", isCorrect: true },
        { id: "b", text: "Wealth and power", isCorrect: false },
        { id: "c", text: "Knowledge and guidance", isCorrect: false },
        { id: "d", text: "Victory and honor", isCorrect: false },
      ],
      explanation:
        "Alladhi at‘amahum min ju‘in wa amanahum min khawf means 'Who has fed them against hunger and secured them from fear.' The roots ط ع م (feed) and أ م ن (secure) highlight Allah’s blessings of provision in a barren land and safety from dangers, for which the Quraysh should be grateful.",
    },
    {
      id: "quraysh-6",
      question: "What is the significance of the Kaaba in this surah?",
      arabic: "رَبَّ هَٰذَا الْبَيْتِ",
      options: [
        { id: "a", text: "It is the sacred House whose Lord the Quraysh must worship", isCorrect: true },
        { id: "b", text: "It is a place for trade and commerce", isCorrect: false },
        { id: "c", text: "It is a fortress for the Quraysh", isCorrect: false },
        { id: "d", text: "It is a symbol of tribal unity", isCorrect: false },
      ],
      explanation:
        "The Kaaba, referred to as 'this House,' is central to the surah as the sacred sanctuary maintained by the Quraysh. Their role as its custodians was a blessing, and the surah commands them to worship its Lord, Allah, in gratitude for His favors, rather than taking pride in their status.",
    },
    {
      id: "quraysh-7",
      question: "What does the word 'ilaf' imply in the context of the surah?",
      arabic: "لِإِيلَافِ قُرَيْشٍ",
      rootLetters: "أ ل ف",
      options: [
        { id: "a", text: "Security and ease in their trade journeys", isCorrect: true },
        { id: "b", text: "Love and affection among the Quraysh", isCorrect: false },
        { id: "c", text: "Their devotion to the Kaaba", isCorrect: false },
        { id: "d", text: "Their unity as a tribe", isCorrect: false },
      ],
      explanation:
        "The word 'ilaf' from the root أ ل ف implies familiarity, habituation, or security. In the surah, it refers to the Quraysh’s accustomed safety and success in their trade journeys, a divine blessing that enabled their economic stability and prominence in Arabia.",
    },
    {
      id: "quraysh-8",
      question: "How is Surah Al-Quraysh by its last verse connected to Surah Al-Fil?",
      arabic: "ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍ وَءَامَنَهُم مِّنْ خَوْفٍۭ",
      options: [
        { id: "a", text: "It highlights the Quraysh’s security after the Kaaba’s protection", isCorrect: true },
        { id: "b", text: "It describes the same historical event", isCorrect: false },
        { id: "c", text: "It addresses the same people as enemies", isCorrect: false },
        { id: "d", text: "It continues the story of Abraha", isCorrect: false },
      ],
      explanation:
        "Surah Al-Fil (105) describes Allah’s protection of the Kaaba from Abraha’s army, ensuring the Quraysh’s safety and the Kaaba’s sanctity. Surah Al-Quraysh follows by highlighting the resulting blessings (security and provision) and urging the Quraysh to worship Allah in gratitude.",
    },
    {
      id: "quraysh-9",
      question: "What lesson does Surah Al-Quraysh teach believers?",
      arabic: "فَلْيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ",
      options: [
        { id: "a", text: "Recognize and worship Allah for His blessings", isCorrect: true },
        { id: "b", text: "Focus on trade and commerce", isCorrect: false },
        { id: "c", text: "Protect the Kaaba at all costs", isCorrect: false },
        { id: "d", text: "Unite as a community", isCorrect: false },
      ],
      explanation:
        "The surah teaches believers to recognize Allah’s blessings—such as provision, safety, and opportunities—and to express gratitude through sincere worship. For the Quraysh, this meant worshipping the Lord of the Kaaba, and for all believers, it emphasizes gratitude and devotion to Allah.",
    },
    {
      id: "quraysh-10",
      question: "Why was this surah significant for the Quraysh during the Meccan period?",
      arabic: "قريش",
      options: [
        { id: "a", text: "It reminded them of their blessings and duty to Allah", isCorrect: true },
        { id: "b", text: "It instructed them to defend Mecca", isCorrect: false },
        { id: "c", text: "It praised their leadership", isCorrect: false },
        { id: "d", text: "It warned them of punishment", isCorrect: false },
      ],
      explanation:
        "During the Meccan period, the Quraysh enjoyed prestige and prosperity due to their role as custodians of the Kaaba and their trade. Surah Al-Quraysh reminded them that these blessings came from Allah, urging them to worship Him alone rather than taking pride in their status or opposing the Prophet ﷺ.",
    },
  ],
}
