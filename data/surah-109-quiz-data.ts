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

export const alKafirunQuizData: SurahQuizData = {
  surahId: 109,
  surahName: "Al-Kafirun",
  surahArabicName: "الكافرون",
  totalVerses: 6,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Kafirun (The Disbelievers) is the 109th chapter of the Quran. It is a powerful declaration of religious freedom and the clear distinction between monotheism and polytheism. This surah establishes the principle of 'to you your religion, and to me mine,' emphasizing that there can be no compromise in matters of fundamental faith.",
  additionalContextElements: [
    {
      title: "Historical Context",
      content: `
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">The Meccan Compromise Attempt</h3>
          <p class="text-purple-700 dark:text-purple-200 mb-3">
            This surah was revealed when the leaders of Mecca approached the Prophet Muhammad ﷺ with a proposal for religious compromise. They suggested that he worship their gods for a year, and they would worship Allah for a year, alternating between the two religions.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Divine Response</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Allah revealed this surah as a clear rejection of any compromise in matters of faith. It establishes that monotheism and polytheism are fundamentally incompatible and cannot be mixed or alternated.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Principle of Religious Freedom",
      content: `
        <div class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
          <h3 class="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">No Compulsion in Religion</h3>
          <p class="text-green-700 dark:text-green-200 mb-3">
            While firmly rejecting compromise in faith, this surah also establishes the principle of religious freedom. It acknowledges that people have the right to follow their chosen path, while maintaining that truth and falsehood cannot be mixed.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-green-700 dark:text-green-300 mb-1">Clear Distinction</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                The surah draws a clear line between Islamic monotheism and pagan polytheism.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-green-700 dark:text-green-300 mb-1">Mutual Respect</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                It acknowledges different religious choices while maintaining doctrinal purity.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "kafirun-1",
      question: "What does the name 'Al-Kafirun' mean?",
      arabic: "الْكَافِرُونَ",
      rootLetters: "ك ف ر",
      options: [
        { id: "a", text: "The Believers", isCorrect: false },
        { id: "b", text: "The Disbelievers", isCorrect: true },
        { id: "c", text: "The Hypocrites", isCorrect: false },
        { id: "d", text: "The Righteous", isCorrect: false },
      ],
      explanation:
        "Al-Kafirun means 'The Disbelievers' and comes from the root ك ف ر meaning to cover, conceal, or reject. It refers to those who reject faith in Allah and cover the truth of His oneness by associating partners with Him.",
    },
    {
      id: "kafirun-2",
      question: "What is the meaning of this opening command?",
      arabic: "قُلْ يَا أَيُّهَا الْكَافِرُونَ",
      rootLetters: "ق و ل",
      options: [
        { id: "a", text: "Say: O you who believe", isCorrect: false },
        { id: "b", text: "Say: O you who are righteous", isCorrect: false },
        { id: "c", text: "Say: O you disbelievers", isCorrect: true },
        { id: "d", text: "Say: O you who are astray", isCorrect: false },
      ],
      explanation:
        "Qul ya ayyuhal-kafirun means 'Say: O you disbelievers.' The word 'qul' (ق و ل) is a command to the Prophet ﷺ to declare this message clearly to those who reject faith. This direct address establishes the audience and the serious nature of the declaration that follows.",
    },
    {
      id: "kafirun-3",
      question: "What is the meaning of this declaration of worship?",
      arabic: "لَا أَعْبُدُ مَا تَعْبُدُونَ",
      rootLetters: "ع ب د",
      options: [
        { id: "a", text: "I do not do what you do", isCorrect: false },
        { id: "b", text: "I will not follow what you follow", isCorrect: false },
        { id: "c", text: "I cannot accept what you accept", isCorrect: false },
        { id: "d", text: "I do not worship what you worship", isCorrect: true },
      ],
      explanation:
        "La a'budu ma ta'budun means 'I do not worship what you worship.' The word 'a'budu' comes from the root ع ب د meaning worship or servitude. This establishes the fundamental difference between Islamic monotheism and pagan polytheism - Muslims worship Allah alone, while the disbelievers worship idols and false gods.",
    },
    {
      id: "kafirun-4",
      question: "What is the meaning of this reciprocal statement?",
      arabic: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
      rootLetters: "ع ب د",
      options: [
        { id: "a", text: "And you do not worship what I worship", isCorrect: true },
        { id: "b", text: "And you will not follow what I follow", isCorrect: false },
        { id: "c", text: "And you cannot understand what I understand", isCorrect: false },
        { id: "d", text: "And you do not believe what I believe", isCorrect: false },
      ],
      explanation:
        "Wa la antum 'abiduna ma a'bud means 'And you do not worship what I worship.' This acknowledges the reciprocal nature of the religious divide - just as Muslims don't worship idols, the polytheists don't worship Allah alone. It recognizes the mutual exclusivity of these religious positions.",
    },
    {
      id: "kafirun-5",
      question: "What is the meaning of this repeated negation?",
      arabic: "وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ",
      rootLetters: "ع ب د",
      options: [
        { id: "a", text: "And I will not worship what you have worshipped", isCorrect: false },
        { id: "b", text: "And I am not a worshipper of what you have worshipped", isCorrect: true },
        { id: "c", text: "And I cannot worship what you have worshipped", isCorrect: false },
        { id: "d", text: "And I do not accept what you have accepted", isCorrect: false },
      ],
      explanation:
        "Wa la ana 'abidun ma 'abadtum means 'And I am not a worshipper of what you have worshipped.' This reinforces the previous statement with emphasis on the Prophet's ﷺ identity as someone who fundamentally rejects polytheistic worship, both in the present and as a permanent characteristic.",
    },
    {
      id: "kafirun-6",
      question: "What is the meaning of this final reciprocal statement?",
      arabic: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
      rootLetters: "ع ب د",
      options: [
        { id: "a", text: "And you will never worship what I worship", isCorrect: false },
        { id: "b", text: "And you do not follow what I follow", isCorrect: false },
        { id: "c", text: "And you are not worshippers of what I worship", isCorrect: true },
        { id: "d", text: "And you cannot understand what I understand", isCorrect: false },
      ],
      explanation:
        "Wa la antum 'abiduna ma a'bud means 'And you are not worshippers of what I worship.' This final repetition emphasizes the permanent and fundamental nature of the religious divide. It acknowledges that the disbelievers are not, by their very nature and choice, worshippers of Allah alone.",
    },
    {
      id: "kafirun-7",
      question: "What is the meaning of this famous concluding declaration?",
      arabic: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
      rootLetters: "د ي ن",
      options: [
        { id: "a", text: "To you your religion, and to me mine", isCorrect: false },
        { id: "b", text: "You have your faith, and I have mine", isCorrect: false },
        { id: "c", text: "Your way is yours, and my way is mine", isCorrect: false },
        { id: "d", text: "To you your religion, and to me mine", isCorrect: true },
      ],
      explanation:
        "Lakum dinukum wa liya din means 'To you your religion, and to me mine.' The word 'din' (د ي ن) means religion, way of life, or judgment. This verse establishes the principle of religious freedom while maintaining clear boundaries. It's not endorsing all religions as equal, but acknowledging people's right to choose their path while maintaining the distinction between truth and falsehood.",
    },
    {
      id: "kafirun-8",
      question: "What was the historical context that led to this surah's revelation?",
      arabic: "قُلْ يَا أَيُّهَا الْكَافِرُونَ",
      options: [
        { id: "a", text: "The Meccan leaders proposed a religious compromise", isCorrect: true },
        { id: "b", text: "The Muslims were being persecuted", isCorrect: false },
        { id: "c", text: "A debate about theology occurred", isCorrect: false },
        { id: "d", text: "The Prophet was asked to explain Islam", isCorrect: false },
      ],
      explanation:
        "This surah was revealed when the Meccan leaders approached the Prophet ﷺ with a proposal for religious compromise. They suggested alternating worship - the Prophet would worship their gods for a year, and they would worship Allah for a year. This surah was Allah's clear rejection of any such compromise in matters of faith.",
    },
    {
      id: "kafirun-9",
      question: "What principle does the repetition in this surah emphasize?",
      arabic: "لَا أَعْبُدُ مَا تَعْبُدُونَ",
      options: [
        { id: "a", text: "The importance of prayer", isCorrect: false },
        { id: "b", text: "The absolute incompatibility of monotheism and polytheism", isCorrect: true },
        { id: "c", text: "The need for patience", isCorrect: false },
        { id: "d", text: "The value of dialogue", isCorrect: false },
      ],
      explanation:
        "The repetition throughout this surah emphasizes the absolute incompatibility of monotheism (worshipping Allah alone) and polytheism (worshipping multiple gods or idols). The repeated negations make it clear that these two approaches to worship cannot be mixed, compromised, or alternated.",
    },
    {
      id: "kafirun-10",
      question: "What does the word 'din' encompass in Islamic understanding?",
      arabic: "دِينِ",
      rootLetters: "د ي ن",
      options: [
        { id: "a", text: "Only ritual worship", isCorrect: false },
        { id: "b", text: "Only personal beliefs", isCorrect: false },
        { id: "c", text: "A complete way of life including beliefs, worship, and conduct", isCorrect: true },
        { id: "d", text: "Only moral guidelines", isCorrect: false },
      ],
      explanation:
        "The word 'din' (د ي ن) in Islamic understanding encompasses a complete way of life including beliefs (aqidah), worship (ibadah), moral conduct (akhlaq), and social interactions (mu'amalat). It's not just personal belief but a comprehensive system that governs all aspects of life according to divine guidance.",
    },
    {
      id: "kafirun-11",
      question: "What does this surah teach about religious dialogue and tolerance?",
      arabic: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
      options: [
        { id: "a", text: "All religions are equally valid", isCorrect: false },
        { id: "b", text: "Religious differences should be ignored", isCorrect: false },
        {
          id: "c",
          text: "People have the right to their religious choice while maintaining clear distinctions",
          isCorrect: true,
        },
        { id: "d", text: "Religious discussion should be avoided", isCorrect: false },
      ],
      explanation:
        "This surah teaches that while people have the right to their religious choices, this doesn't mean all religions are equally valid or true. It establishes the principle of 'no compulsion in religion' while maintaining clear doctrinal boundaries. Muslims can coexist peacefully with others while firmly holding to their monotheistic beliefs without compromise.",
    },
    {
      id: "kafirun-12",
      question: "What is the significance of addressing the disbelievers directly?",
      arabic: "يَا أَيُّهَا الْكَافِرُونَ",
      options: [
        { id: "a", text: "To show respect for their position", isCorrect: false },
        { id: "b", text: "To make the message clear and unambiguous", isCorrect: true },
        { id: "c", text: "To invite them to debate", isCorrect: false },
        { id: "d", text: "To express anger toward them", isCorrect: false },
      ],
      explanation:
        "The direct address 'Ya ayyuhal-kafirun' (O you disbelievers) makes the message clear and unambiguous. It's not meant to be insulting but rather to establish clearly who is being addressed and to ensure there's no misunderstanding about the message. This directness prevents any confusion about the Islamic position on religious compromise.",
    },
  ],
}
