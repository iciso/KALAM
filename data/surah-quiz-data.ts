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
        { id: "a", text: "I do not worship what you worship", isCorrect: false },
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

export const alIkhlasQuizData: SurahQuizData = {
  surahId: 112,
  surahName: "Al-Ikhlas",
  surahArabicName: "الإخلاص",
  totalVerses: 4,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Ikhlas (The Sincerity) is the 112th chapter of the Quran and is considered one of the most important chapters. The Prophet Muhammad ﷺ said it is equivalent to one-third of the Quran because it deals with the fundamental concept of Tawhid (the Oneness of Allah).",
  additionalContextElements: [
    {
      title: "Theological Significance",
      content: `
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">The Three Types of Tawheed</h3>
          <p class="text-blue-700 dark:text-blue-200 mb-3">
            Surah Al-Ikhlas is the cornerstone of Tawheed (Islamic monotheism) and establishes the fundamental concept of Allah's oneness that distinguishes Islam from all other religions.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Tawheed ar-Rububiyyah</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Oneness of Lordship: Allah is the only creator and sustainer of all that exists
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Tawheed al-Uluhiyyah</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Oneness of Worship: Allah alone deserves to be worshipped
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Tawheed al-Asma wa al-Sifat</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Oneness of Names and Attributes: Allah's attributes are unique and incomparable
              </p>
            </div>
          </div>
        </div>
      `,
    },
    {
      title: "Historical Context",
      content: `
        <div class="mt-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-100 dark:border-green-800">
          <h3 class="text-lg font-semibold text-green-800 dark:text-green-300 mb-2">Revelation Context</h3>
          <p class="text-green-700 dark:text-green-200 mb-3">
            This surah was revealed in response to questions from both Muslims and non-Muslims about the nature of Allah. It provides the clearest and most concise description of Allah's essence in the entire Quran.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-green-700 dark:text-green-300 mb-1">Prophetic Saying</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet Muhammad ﷺ said: "Is any one of you unable to recite one-third of the Quran in one night?" When asked how, he replied: "Qul Huwa Allahu Ahad (Surah Al-Ikhlas) is equivalent to one-third of the Quran."
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "ikhlas-1",
      question: "What does the name 'Al-Ikhlas' mean?",
      arabic: "الْإِخْلَاصِ",
      rootLetters: "خ ل ص",
      options: [
        { id: "a", text: "The Sincerity", isCorrect: true },
        { id: "b", text: "The Purity", isCorrect: false },
        { id: "c", text: "The Unity", isCorrect: false },
        { id: "d", text: "The Oneness", isCorrect: false },
      ],
      explanation:
        "Al-Ikhlas means 'The Sincerity' or 'The Purity of Faith.' It comes from the root خ ل ص meaning to be pure, sincere, or free from impurities. The surah is called this because it purifies the concept of Allah from all forms of shirk (associating partners with Allah).",
    },
    {
      id: "ikhlas-2",
      question: "What is the meaning of this opening command?",
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      rootLetters: "أ ح د",
      options: [
        { id: "a", text: "Say: He is Allah, the One", isCorrect: true },
        { id: "b", text: "Say: He is Allah, the First", isCorrect: false },
        { id: "c", text: "Say: He is Allah, the Only", isCorrect: false },
        { id: "d", text: "Say: He is Allah, the Unique", isCorrect: false },
      ],
      explanation:
        "Qul Huwa Allahu Ahad means 'Say: He is Allah, the One.' The word 'Ahad' comes from the root أ ح د and emphasizes absolute oneness and unity. Unlike 'Wahid' which can mean 'one among many,' 'Ahad' means absolute, indivisible oneness that cannot be counted or numbered.",
    },
    {
      id: "ikhlas-3",
      question: "What is the meaning of this attribute of Allah?",
      arabic: "اللَّهُ الصَّمَدُ",
      rootLetters: "ص م د",
      options: [
        { id: "a", text: "Allah, the Eternal, Absolute", isCorrect: true },
        { id: "b", text: "Allah, the Merciful, Compassionate", isCorrect: false },
        { id: "c", text: "Allah, the Powerful, Mighty", isCorrect: false },
        { id: "d", text: "Allah, the Wise, All-Knowing", isCorrect: false },
      ],
      explanation:
        "Allahu As-Samad means 'Allah, the Eternal, Absolute.' The word 'Samad' comes from the root ص م د and has multiple meanings: the One who is eternal, self-sufficient, the One to whom all creation turns in times of need, the One who is solid and impenetrable, and the Master upon whom all depend.",
    },
    {
      id: "ikhlas-4",
      question: "What is the meaning of this negation?",
      arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      rootLetters: "و ل د",
      options: [
        { id: "a", text: "He neither begets nor is born", isCorrect: true },
        { id: "b", text: "He neither creates nor is created", isCorrect: false },
        { id: "c", text: "He neither begins nor ends", isCorrect: false },
        { id: "d", text: "He neither changes nor is changed", isCorrect: false },
      ],
      explanation:
        "Lam yalid wa lam yulad means 'He neither begets nor is born.' This verse from the root و ل د (meaning to give birth or be born) negates any notion of Allah having offspring or being the offspring of anyone. This directly refutes Christian beliefs about Jesus being the 'Son of God' and pagan beliefs about gods having children.",
    },
    {
      id: "ikhlas-5",
      question: "What is the meaning of this final declaration?",
      arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      rootLetters: "ك ف و",
      options: [
        { id: "a", text: "And there is none comparable to Him", isCorrect: true },
        { id: "b", text: "And there is none equal to Him", isCorrect: false },
        { id: "c", text: "And there is none like Him", isCorrect: false },
        { id: "d", text: "And there is none similar to Him", isCorrect: false },
      ],
      explanation:
        "Wa lam yakun lahu kufuwan ahad means 'And there is none comparable to Him.' The word 'kufuw' comes from the root ك ف و meaning equal, equivalent, or comparable. This verse establishes that nothing in creation can be compared to Allah in any way - not in His essence, attributes, or actions.",
    },
    {
      id: "ikhlas-6",
      question: "What does the word 'Ahad' specifically emphasize about Allah's oneness?",
      arabic: "أَحَدٌ",
      options: [
        { id: "a", text: "Absolute, indivisible oneness", isCorrect: true },
        { id: "b", text: "First in sequence", isCorrect: false },
        { id: "c", text: "Single in number", isCorrect: false },
        { id: "d", text: "Unique in creation", isCorrect: false },
      ],
      explanation:
        "The word 'Ahad' emphasizes absolute, indivisible oneness. Unlike 'Wahid' (one), which can imply 'one among many,' 'Ahad' denotes absolute unity that cannot be divided, multiplied, or counted. It represents Allah's essence as completely unique and incomparable.",
    },
    {
      id: "ikhlas-7",
      question: "What does 'As-Samad' tell us about Allah's relationship with creation?",
      arabic: "الصَّمَدُ",
      options: [
        { id: "a", text: "All creation depends on Him, but He depends on nothing", isCorrect: true },
        { id: "b", text: "He is separate from all creation", isCorrect: false },
        { id: "c", text: "He is present in all creation", isCorrect: false },
        { id: "d", text: "He controls all creation directly", isCorrect: false },
      ],
      explanation:
        "As-Samad indicates that all creation depends entirely on Allah for their existence, sustenance, and needs, while Allah is completely self-sufficient and depends on nothing. He is the ultimate source and destination of all needs, the One to whom all turn in times of necessity.",
    },
    {
      id: "ikhlas-8",
      question: "Why does the surah specifically negate Allah having offspring?",
      arabic: "لَمْ يَلِدْ",
      options: [
        { id: "a", text: "To refute beliefs that attribute children to Allah", isCorrect: true },
        { id: "b", text: "To show Allah's power over creation", isCorrect: false },
        { id: "c", text: "To emphasize Allah's eternal nature", isCorrect: false },
        { id: "d", text: "To distinguish Allah from humans", isCorrect: false },
      ],
      explanation:
        "The negation 'lam yalid' (He does not beget) specifically refutes various beliefs that attribute children or offspring to Allah, including Christian beliefs about Jesus as the 'Son of God' and pagan beliefs about gods having children. Having offspring implies need, change, and similarity to creation - all of which contradict Allah's perfect nature.",
    },
    {
      id: "ikhlas-9",
      question: "What does the phrase 'none comparable to Him' establish about Allah?",
      arabic: "كُفُوًا",
      options: [
        { id: "a", text: "Allah is beyond all comparison and analogy", isCorrect: true },
        { id: "b", text: "Allah is the greatest among all beings", isCorrect: false },
        { id: "c", text: "Allah is different from His creation", isCorrect: false },
        { id: "d", text: "Allah is the most powerful", isCorrect: false },
      ],
      explanation:
        "The word 'kufuw' (comparable/equivalent) establishes that Allah is completely beyond all comparison, analogy, or similarity. This means we cannot truly understand Allah by comparing Him to anything in creation, as He transcends all categories of created existence. This is fundamental to proper Islamic theology.",
    },
    {
      id: "ikhlas-10",
      question: "Why is this surah considered equivalent to one-third of the Quran?",
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      options: [
        { id: "a", text: "It contains the complete doctrine of Allah's oneness", isCorrect: true },
        { id: "b", text: "It has special spiritual power", isCorrect: false },
        { id: "c", text: "It was revealed in a special way", isCorrect: false },
        { id: "d", text: "It contains the most important prayer", isCorrect: false },
      ],
      explanation:
        "According to the Prophet Muhammad ﷺ, this surah is equivalent to one-third of the Quran because it contains the complete and pure doctrine of Tawhid (Allah's oneness). Since the Quran's message can be broadly categorized into three themes - Allah's oneness, stories of previous nations, and laws/guidance - this surah comprehensively covers the first and most fundamental theme.",
    },
  ],
}

export const alFalaqQuizData: SurahQuizData = {
  surahId: 113,
  surahName: "Al-Falaq",
  surahArabicName: "الفلق",
  totalVerses: 5,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Falaq (The Daybreak) is the 113th chapter of the Quran and is one of the two 'Mu'awwidhatain' (the two seeking refuge chapters) along with Surah An-Nas. It teaches us to seek Allah's protection from various forms of evil and harm.",
  additionalContextElements: [
    {
      title: "The Mu'awwidhatain",
      content: `
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">The Two Seeking Refuge Chapters</h3>
          <p class="text-purple-700 dark:text-purple-200 mb-3">
            Surah Al-Falaq and Surah An-Nas are known as the Mu'awwidhatain (المعوذتان), meaning "the two seeking refuge chapters." The Prophet Muhammad ﷺ said: "No one seeks refuge with anything like that with which they seek refuge with Allah by means of these two surahs."
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Protection from Evil</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              These surahs provide comprehensive protection from all forms of evil - seen and unseen, physical and spiritual, external and internal. They are often recited for protection, especially before sleep and during times of difficulty.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Types of Evil Mentioned",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Four Categories of Evil</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            Surah Al-Falaq seeks protection from four specific types of evil:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">General Evil</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                From the evil of all that Allah has created - covering all forms of harm and evil in creation.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Darkness</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                From the evil of darkness when it settles - referring to the night and the evil that emerges in darkness.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Sorcery</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                From the evil of those who blow on knots - referring to sorcerers and their harmful practices.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Envy</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                From the evil of the envier when he envies - protection from the harmful effects of jealousy and envy.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "falaq-1",
      question: "What does the name 'Al-Falaq' mean?",
      arabic: "الْفَلَقِ",
      rootLetters: "ف ل ق",
      options: [
        { id: "a", text: "The Night", isCorrect: false },
        { id: "b", text: "The Daybreak", isCorrect: true },
        { id: "c", text: "The Dawn", isCorrect: false },
        { id: "d", text: "The Morning", isCorrect: false },
      ],
      explanation:
        "Al-Falaq means 'The Daybreak' or 'The Dawn' - the time when darkness splits and light emerges. It comes from the root ف ل ق meaning to split or cleave. The word symbolizes the splitting of darkness by light, representing Allah's power to dispel all forms of darkness and evil.",
    },
    {
      id: "falaq-2",
      question: "What is the meaning of this opening command?",
      arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      rootLetters: "ع و ذ",
      options: [
        { id: "a", text: "Say: I seek refuge with the Lord of the daybreak", isCorrect: true },
        { id: "b", text: "Say: I seek help from the Lord of the daybreak", isCorrect: false },
        { id: "c", text: "Say: I seek guidance from the Lord of the daybreak", isCorrect: false },
        { id: "d", text: "Say: I seek forgiveness from the Lord of the daybreak", isCorrect: false },
      ],
      explanation:
        "Qul a'udhu bi Rabbil-falaq means 'Say: I seek refuge with the Lord of the daybreak.' The word 'a'udhu' comes from the root ع و ذ meaning to seek protection or refuge. This establishes Allah as the ultimate source of protection and safety.",
    },
    {
      id: "falaq-3",
      question: "What is the meaning of this phrase about general evil?",
      arabic: "مِن شَرِّ مَا خَلَقَ",
      rootLetters: "ش ر ر",
      options: [
        { id: "a", text: "From the evil of what He created", isCorrect: true },
        { id: "b", text: "From the harm of what He made", isCorrect: false },
        { id: "c", text: "From the danger of what He formed", isCorrect: false },
        { id: "d", text: "From the wickedness of what He brought forth", isCorrect: false },
      ],
      explanation:
        "Min sharri ma khalaq means 'From the evil of what He created.' This seeks protection from all forms of evil that exist in Allah's creation. The word 'sharr' (ش ر ر) means evil or harm. This is a comprehensive protection covering all created beings that might cause harm.",
    },
    {
      id: "falaq-4",
      question: "What is the meaning of this phrase about darkness?",
      arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      rootLetters: "غ س ق",
      options: [
        { id: "a", text: "And from the evil of darkness when it settles", isCorrect: true },
        { id: "b", text: "And from the evil of night when it comes", isCorrect: false },
        { id: "c", text: "And from the evil of shadow when it falls", isCorrect: false },
        { id: "d", text: "And from the evil of blackness when it spreads", isCorrect: false },
      ],
      explanation:
        "Wa min sharri ghasiqin idha waqab means 'And from the evil of darkness when it settles.' The word 'ghasiq' comes from the root غ س ق meaning intense darkness or the night. 'Waqab' means to settle or penetrate. This refers to the evil that emerges and becomes active during the darkness of night.",
    },
    {
      id: "falaq-5",
      question: "What is the meaning of this phrase about sorcery?",
      arabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
      rootLetters: "ن ف ث",
      options: [
        { id: "a", text: "And from the evil of the blowers in knots", isCorrect: true },
        { id: "b", text: "And from the evil of the whisperers in corners", isCorrect: false },
        { id: "c", text: "And from the evil of the speakers in secrets", isCorrect: false },
        { id: "d", text: "And from the evil of the chanters in circles", isCorrect: false },
      ],
      explanation:
        "Wa min sharrin-naffathati fil-'uqad means 'And from the evil of the blowers in knots.' This refers to sorcerers and witches who practice magic by blowing on knots while reciting spells. The word 'naffathat' comes from the root ن ف ث meaning to blow or spit. This seeks protection from the harmful effects of sorcery and black magic.",
    },
    {
      id: "falaq-6",
      question: "What is the meaning of this phrase about envy?",
      arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      rootLetters: "ح س د",
      options: [
        { id: "a", text: "And from the evil of an envier when he envies", isCorrect: true },
        { id: "b", text: "And from the evil of a jealous person when he is jealous", isCorrect: false },
        { id: "c", text: "And from the evil of a hater when he hates", isCorrect: false },
        { id: "d", text: "And from the evil of an enemy when he opposes", isCorrect: false },
      ],
      explanation:
        "Wa min sharri hasidin idha hasad means 'And from the evil of an envier when he envies.' The word 'hasid' comes from the root ح س د meaning envy or jealousy. This seeks protection from the harmful effects of envy, which can manifest as the evil eye or other forms of spiritual harm caused by jealousy.",
    },
    {
      id: "falaq-7",
      question: "What does the word 'Rabb' emphasize in this context?",
      arabic: "رَبِّ الْفَلَقِ",
      rootLetters: "ر ب ب",
      options: [
        { id: "a", text: "Allah's lordship and control over the daybreak", isCorrect: true },
        { id: "b", text: "Allah's creation of the morning", isCorrect: false },
        { id: "c", text: "Allah's love for the dawn", isCorrect: false },
        { id: "d", text: "Allah's preference for light", isCorrect: false },
      ],
      explanation:
        "Rabbil-falaq emphasizes Allah's complete lordship, control, and authority over the daybreak and all that it represents. The word 'Rabb' (ر ب ب) means Lord, Master, Sustainer, and Nurturer. By seeking refuge with the 'Lord of the daybreak,' we acknowledge Allah's power to bring light and dispel darkness in all its forms.",
    },
    {
      id: "falaq-8",
      question: "Why is the daybreak specifically mentioned as Allah's domain?",
      arabic: "الْفَلَقِ",
      options: [
        { id: "a", text: "It symbolizes Allah's power to dispel darkness and evil", isCorrect: true },
        { id: "b", text: "It represents the beginning of prayer time", isCorrect: false },
        { id: "c", text: "It shows Allah's control over time", isCorrect: false },
        { id: "d", text: "It indicates Allah's preference for morning", isCorrect: false },
      ],
      explanation:
        "The daybreak (Al-Falaq) is mentioned because it symbolizes Allah's power to split darkness with light, representing His ability to dispel all forms of evil and darkness from our lives. Just as Allah brings physical light to dispel physical darkness, He can bring spiritual light to dispel spiritual darkness and evil.",
    },
    {
      id: "falaq-9",
      question: "What is the significance of mentioning 'when it settles' regarding darkness?",
      arabic: "إِذَا وَقَبَ",
      rootLetters: "و ق ب",
      options: [
        { id: "a", text: "It refers to the time when evil is most active", isCorrect: true },
        { id: "b", text: "It indicates the depth of night", isCorrect: false },
        { id: "c", text: "It shows the completeness of darkness", isCorrect: false },
        { id: "d", text: "It represents the end of day", isCorrect: false },
      ],
      explanation:
        "The phrase 'idha waqab' (when it settles) from the root و ق ب indicates the time when darkness has fully settled and penetrated everywhere. This is traditionally when evil forces, harmful creatures, and negative influences are most active. The Quran acknowledges this reality and teaches us to seek Allah's protection during these vulnerable times.",
    },
    {
      id: "falaq-10",
      question: "What is the comprehensive nature of protection sought in this surah?",
      arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      options: [
        { id: "a", text: "Protection from all forms of evil - physical, spiritual, seen and unseen", isCorrect: true },
        { id: "b", text: "Protection only from human enemies", isCorrect: false },
        { id: "c", text: "Protection only from natural disasters", isCorrect: false },
        { id: "d", text: "Protection only from spiritual harm", isCorrect: false },
      ],
      explanation:
        "Surah Al-Falaq seeks comprehensive protection from all forms of evil: general evil from all creation, the evil that emerges in darkness, the evil of sorcery and magic, and the evil of envy. This covers physical, spiritual, seen, and unseen forms of harm, making it a complete prayer of protection for believers.",
    },
  ],
}

export const alNasQuizData: SurahQuizData = {
  surahId: 114,
  surahName: "An-Nas",
  surahArabicName: "الناس",
  totalVerses: 6,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah An-Nas (Mankind) is the 114th and final chapter of the Quran. It is the second of the two 'Mu'awwidhatain' (seeking refuge chapters) and provides protection from the whispers of Satan and evil influences that target the human heart and mind.",
  additionalContextElements: [
    {
      title: "The Final Chapter",
      content: `
        <div class="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
          <h3 class="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Completion of the Quran</h3>
          <p class="text-indigo-700 dark:text-indigo-200 mb-3">
            As the final chapter of the Quran, Surah An-Nas serves as a fitting conclusion by teaching believers to seek Allah's protection from the most subtle and persistent form of evil - the whispers that target our thoughts and hearts.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Three Attributes of Allah</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              This surah mentions three key attributes of Allah in relation to mankind: Rabb (Lord), Malik (King), and Ilah (God), emphasizing His complete authority over human affairs.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Protection from Whispers",
      content: `
        <div class="mt-6 p-4 bg-rose-50 dark:bg-rose-900/20 rounded-lg border border-rose-100 dark:border-rose-800">
          <h3 class="text-lg font-semibold text-rose-800 dark:text-rose-300 mb-2">The Whisperer's Strategy</h3>
          <p class="text-rose-700 dark:text-rose-200 mb-3">
            Unlike the external evils mentioned in Surah Al-Falaq, this surah focuses on internal spiritual threats - the whispers that come from both jinn and human sources to mislead and corrupt the human heart.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-rose-700 dark:text-rose-300 mb-1">Subtle Influence</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Whispers work gradually and subtly, making evil seem attractive and good seem burdensome.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-rose-700 dark:text-rose-300 mb-1">Retreating Nature</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                The whisperer retreats when Allah is remembered, showing the power of divine remembrance.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "nas-1",
      question: "What does the name 'An-Nas' mean?",
      arabic: "النَّاسِ",
      rootLetters: "ن و س",
      options: [
        { id: "a", text: "The Believers", isCorrect: false },
        { id: "b", text: "The Disbelievers", isCorrect: false },
        { id: "c", text: "The Angels", isCorrect: false },
        { id: "d", text: "Mankind", isCorrect: true },
      ],
      explanation:
        "An-Nas means 'Mankind' or 'People' and comes from the root ن و س. This surah is specifically about seeking Allah's protection for all of humanity from the whispers that target the human heart and mind.",
    },
    {
      id: "nas-2",
      question: "What is the meaning of this opening command?",
      arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
      rootLetters: "ر ب ب",
      options: [
        { id: "a", text: "Say: I seek refuge with the Lord of mankind", isCorrect: true },
        { id: "b", text: "Say: I seek help from the Creator of mankind", isCorrect: false },
        { id: "c", text: "Say: I seek guidance from the Master of mankind", isCorrect: false },
        { id: "d", text: "Say: I seek forgiveness from the Sustainer of mankind", isCorrect: false },
      ],
      explanation:
        "Qul a'udhu bi Rabbin-nas means 'Say: I seek refuge with the Lord of mankind.' The word 'Rabb' emphasizes Allah's lordship, care, and nurturing of all human beings. This establishes Allah as the ultimate protector and guardian of humanity.",
    },
    {
      id: "nas-3",
      question: "What is the meaning of this second attribute?",
      arabic: "مَلِكِ النَّاسِ",
      rootLetters: "م ل ك",
      options: [
        { id: "a", text: "Lord of mankind", isCorrect: false },
        { id: "b", text: "King of mankind", isCorrect: true },
        { id: "c", text: "Creator of mankind", isCorrect: false },
        { id: "d", text: "Judge of mankind", isCorrect: false },
      ],
      explanation:
        "Maliki an-nas means 'King of mankind.' The word 'Malik' from the root م ل ك emphasizes Allah's sovereignty and absolute authority over all human affairs. As King, Allah has complete control and dominion over humanity.",
    },
    {
      id: "nas-4",
      question: "What is the meaning of this third attribute?",
      arabic: "إِلَٰهِ النَّاسِ",
      rootLetters: "أ ل ه",
      options: [
        { id: "a", text: "God of mankind", isCorrect: true },
        { id: "b", text: "Lord of mankind", isCorrect: false },
        { id: "c", text: "Creator of mankind", isCorrect: false },
        { id: "d", text: "Sustainer of mankind", isCorrect: false },
      ],
      explanation:
        "Ilahi an-nas means 'God of mankind.' The word 'Ilah' from the root أ ل ه means the One who is worshipped and to whom all devotion is due. This emphasizes that Allah alone deserves the worship and complete submission of all humanity.",
    },
    {
      id: "nas-5",
      question: "What is the meaning of this description of the evil?",
      arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      rootLetters: "و س و س",
      options: [
        { id: "a", text: "From the evil of the darkness when it gathers", isCorrect: false },
        { id: "b", text: "From the evil of the night when it departs", isCorrect: false },
        { id: "c", text: "From the evil of the retreating whisperer", isCorrect: true },
        { id: "d", text: "From the evil of the day when it shines", isCorrect: false },
      ],
      explanation:
        "Min sharril-waswasil-khannas means 'From the evil of the retreating whisperer.' The word 'waswas' comes from the root و س و س meaning to whisper, and 'khannas' means one who retreats or withdraws. This refers to Satan who whispers evil thoughts but retreats when Allah is remembered.",
    },
    {
      id: "nas-6",
      question: "What is the meaning of this description of the whisperer's action?",
      arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
      rootLetters: "ص د ر",
      options: [
        { id: "a", text: "Who whispers in the hearts of mankind", isCorrect: true },
        { id: "b", text: "Who creates fear in the hearts of mankind", isCorrect: false },
        { id: "c", text: "Who brings peace to the hearts of mankind", isCorrect: false },
        { id: "d", text: "Who guides the hearts of mankind", isCorrect: false },
      ],
      explanation:
        "Alladhi yuwaswisu fi suduri an-nas means 'Who whispers in the hearts of mankind.' The word 'sudur' (plural of sadr) from the root ص د ر means chests or hearts. This describes how evil whispers target the innermost thoughts and feelings of human beings.",
    },
    {
      id: "nas-7",
      question: "What is the meaning of this final specification?",
      arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
      rootLetters: "ج ن ن",
      options: [
        { id: "a", text: "From the jinn and mankind", isCorrect: true },
        { id: "b", text: "From the angels and mankind", isCorrect: false },
        { id: "c", text: "From the heavens and the earth", isCorrect: false },
        { id: "d", text: "From the seen and the unseen", isCorrect: false },
      ],
      explanation:
        "Minal-jinnati wan-nas means 'From the jinn and mankind.' This specifies that evil whispers can come from both jinn (like Satan and his followers) and from human beings who spread corruption, doubt, and evil ideas. Both sources can influence and mislead people.",
    },
    {
      id: "nas-8",
      question: "Why are three attributes of Allah mentioned in this surah?",
      arabic: "رَبِّ النَّاسِ مَلِكِ النَّاسِ إِلَٰهِ النَّاسِ",
      options: [
        { id: "a", text: "To emphasize Allah's complete authority over mankind in all aspects", isCorrect: true },
        { id: "b", text: "To show Allah's mercy toward humanity", isCorrect: false },
        { id: "c", text: "To demonstrate Allah's power over creation", isCorrect: false },
        { id: "d", text: "To highlight Allah's knowledge of all things", isCorrect: false },
      ],
      explanation:
        "The three attributes (Rabb - Lord/Nurturer, Malik - King/Sovereign, Ilah - God/Worshipped One) emphasize Allah's complete authority over mankind in all aspects: as our Creator and Sustainer, as our absolute Ruler, and as the only One worthy of worship. This comprehensive authority makes Him the perfect refuge from all forms of evil.",
    },
    {
      id: "nas-9",
      question: "What does 'Al-Khannas' (the retreating one) teach us about the whisperer?",
      arabic: "الْخَنَّاسِ",
      rootLetters: "خ ن س",
      options: [
        { id: "a", text: "The whisperer is weak and retreats when Allah is remembered", isCorrect: true },
        { id: "b", text: "The whisperer is always present and never leaves", isCorrect: false },
        { id: "c", text: "The whisperer only comes at night", isCorrect: false },
        { id: "d", text: "The whisperer is stronger than human will", isCorrect: false },
      ],
      explanation:
        "Al-Khannas (the retreating one) from the root خ ن س teaches us that the whisperer is actually weak and cowardly. When a person remembers Allah, seeks His protection, or engages in worship, the whisperer retreats and withdraws. This shows that divine remembrance is our most powerful weapon against evil whispers.",
    },
    {
      id: "nas-10",
      question: "How does this surah complement Surah Al-Falaq?",
      arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      options: [
        {
          id: "a",
          text: "Al-Falaq protects from external evils, An-Nas protects from internal whispers",
          isCorrect: true,
        },
        { id: "b", text: "Both surahs protect from the same types of evil", isCorrect: false },
        { id: "c", text: "An-Nas is more important than Al-Falaq", isCorrect: false },
        { id: "d", text: "They should never be recited together", isCorrect: false },
      ],
      explanation:
        "Surah Al-Falaq seeks protection from external evils (general evil, darkness, sorcery, envy), while Surah An-Nas focuses on internal spiritual threats (whispers that corrupt the heart and mind). Together, they provide comprehensive protection from all forms of evil - both external and internal, physical and spiritual.",
    },
  ],
}

export const surahMasadQuizData: SurahQuizData = {
  surahId: 111,
  surahName: "Al-Masad",
  surahArabicName: "المسد",
  totalVerses: 5,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Masad (The Palm Fiber) is the 111th chapter of the Quran, also known as Surah Al-Lahab (The Flame). It was revealed about Abu Lahab, the Prophet's uncle, and his wife, who were among the fiercest opponents of Islam. This surah demonstrates divine justice and the futility of opposing Allah's message.",
  additionalContextElements: [
    {
      title: "Historical Context",
      content: `
        <div class="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800">
          <h3 class="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">Abu Lahab and His Opposition</h3>
          <p class="text-red-700 dark:text-red-200 mb-3">
            Abu Lahab (whose real name was Abd al-Uzza) was the Prophet Muhammad's ﷺ uncle and one of his most vocal opponents. Despite family ties, he actively worked against the spread of Islam and publicly humiliated the Prophet ﷺ.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-red-700 dark:text-red-300 mb-1">The Incident</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              When the Prophet ﷺ first publicly called people to Islam from Mount Safa, Abu Lahab responded with hostility, saying "May you perish! Is this why you gathered us?" This surah was revealed in response to his opposition.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Divine Justice and Prophecy",
      content: `
        <div class="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
          <h3 class="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Miraculous Prophecy</h3>
          <p class="text-orange-700 dark:text-orange-200 mb-3">
            This surah contains a remarkable prophecy: it declared that Abu Lahab would never accept Islam and would die as a disbeliever. For over 10 years after this revelation, Abu Lahab could have easily disproven the Quran by simply accepting Islam, but he never did.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Divine Knowledge</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                This demonstrates Allah's perfect knowledge of the future and the hearts of people.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Quranic Challenge</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Abu Lahab had every opportunity to disprove this prophecy but was unable to do so.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "masad-1",
      question: "What does the name 'Al-Masad' mean?",
      arabic: "الْمَسَدِ",
      rootLetters: "م س د",
      options: [
        { id: "a", text: "The Flame", isCorrect: false },
        { id: "b", text: "The Palm Fiber", isCorrect: true },
        { id: "c", text: "The Rope", isCorrect: false },
        { id: "d", text: "The Fire", isCorrect: false },
      ],
      explanation:
        "Al-Masad means 'The Palm Fiber' and comes from the root م س د. It refers to the twisted rope made from palm fiber mentioned at the end of the surah. The surah is also known as 'Al-Lahab' (The Flame), but its official name is Al-Masad.",
    },
    {
      id: "masad-2",
      question: "What is the meaning of this opening curse?",
      arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
      rootLetters: "ت ب ب",
      options: [
        { id: "a", text: "May the hands of Abu Lahab perish, and may he perish", isCorrect: true },
        { id: "b", text: "The hands of Abu Lahab are destroyed, and he is destroyed", isCorrect: false },
        { id: "c", text: "Abu Lahab's hands have failed, and he has failed", isCorrect: false },
        { id: "d", text: "Let Abu Lahab's hands be cut off, and let him be cut off", isCorrect: false },
      ],
      explanation:
        "Tabbat yada Abi Lahabin wa tabb means 'May the hands of Abu Lahab perish, and may he perish.' The word 'tabb' comes from the root ت ب ب meaning to perish, be ruined, or be destroyed. This is both a curse and a prophecy of his ultimate failure and destruction.",
    },
    {
      id: "masad-3",
      question: "Who was Abu Lahab in relation to Prophet Muhammad ﷺ?",
      arabic: "أَبِي لَهَبٍ",
      options: [
        { id: "a", text: "His uncle", isCorrect: true },
        { id: "b", text: "His cousin", isCorrect: false },
        { id: "c", text: "His neighbor", isCorrect: false },
        { id: "d", text: "His brother-in-law", isCorrect: false },
      ],
      explanation:
        "Abu Lahab was the Prophet Muhammad's ﷺ uncle, the brother of his father Abdullah. His real name was Abd al-Uzza, but he was called 'Abu Lahab' (Father of Flame) because of his fiery temperament and reddish complexion. Despite being family, he was one of Islam's fiercest opponents.",
    },
    {
      id: "masad-4",
      question: "What is the meaning of this verse about his wealth?",
      arabic: "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ",
      rootLetters: "غ ن ي",
      options: [
        { id: "a", text: "His wealth and what he earned will not avail him", isCorrect: true },
        { id: "b", text: "His money and possessions have left him", isCorrect: false },
        { id: "c", text: "His riches and earnings are worthless", isCorrect: false },
        { id: "d", text: "His fortune and gains have disappeared", isCorrect: false },
      ],
      explanation:
        "Ma aghna 'anhu maluhu wa ma kasab means 'His wealth and what he earned will not avail him.' The word 'aghna' comes from the root غ ن ي meaning to enrich or benefit. This teaches that worldly wealth and status cannot protect anyone from Allah's punishment or grant salvation.",
    },
    {
      id: "masad-5",
      question: "What is the meaning of this description of his punishment?",
      arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
      rootLetters: "ص ل ي",
      options: [
        { id: "a", text: "He will burn in a Fire of blazing flame", isCorrect: true },
        { id: "b", text: "He will enter a fire with flames", isCorrect: false },
        { id: "c", text: "He will face a flaming fire", isCorrect: false },
        { id: "d", text: "He will be thrown into burning flames", isCorrect: false },
      ],
      explanation:
        "Sa yasla naran dhata lahabin means 'He will burn in a Fire of blazing flame.' The word 'yasla' comes from the root ص ل ي meaning to burn or roast. 'Dhata lahab' means 'possessing flame' - describing the intense, blazing nature of the hellfire he will face.",
    },
    {
      id: "masad-6",
      question: "What is the meaning of this description of his wife?",
      arabic: "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ",
      rootLetters: "ح م ل",
      options: [
        { id: "a", text: "And his wife, the carrier of firewood", isCorrect: true },
        { id: "b", text: "And his woman, the gatherer of wood", isCorrect: false },
        { id: "c", text: "And his spouse, the collector of sticks", isCorrect: false },
        { id: "d", text: "And his partner, the bearer of logs", isCorrect: false },
      ],
      explanation:
        "Wa imra'atuhu hammalalata al-hatab means 'And his wife, the carrier of firewood.' The word 'hammalah' comes from the root ح م ل meaning to carry or bear. This refers to Umm Jamil, Abu Lahab's wife, who used to carry thorny branches and place them in the Prophet's ﷺ path to harm him.",
    },
    {
      id: "masad-7",
      question: "What is the meaning of this final description?",
      arabic: "فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ",
      rootLetters: "ج ي د",
      options: [
        { id: "a", text: "Around her neck is a rope of palm fiber", isCorrect: true },
        { id: "b", text: "On her throat is a cord of twisted rope", isCorrect: false },
        { id: "c", text: "Upon her neck is a chain of fiber", isCorrect: false },
        { id: "d", text: "Around her throat is a string of palm leaves", isCorrect: false },
      ],
      explanation:
        "Fi jidiha hablun min masad means 'Around her neck is a rope of palm fiber.' The word 'jid' comes from the root ج ي د meaning neck. This describes her punishment in the afterlife - she will have a rope of palm fiber around her neck, symbolizing her being bound and dragged to punishment.",
    },
    {
      id: "masad-8",
      question: "What does the mention of 'hands' symbolically represent?",
      arabic: "يَدَا",
      options: [
        { id: "a", text: "His efforts and actions against Islam", isCorrect: true },
        { id: "b", text: "His physical strength", isCorrect: false },
        { id: "c", text: "His ability to work", isCorrect: false },
        { id: "d", text: "His power to harm others", isCorrect: false },
      ],
      explanation:
        "The mention of 'yada' (hands) symbolically represents Abu Lahab's efforts, actions, and schemes against Islam and the Prophet ﷺ. In Arabic, 'hands' often symbolize one's deeds and efforts. The curse on his hands means all his efforts against Islam will fail and bring about his own destruction.",
    },
    {
      id: "masad-9",
      question: "What prophetic aspect makes this surah remarkable?",
      arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
      options: [
        { id: "a", text: "It predicted Abu Lahab would never accept Islam", isCorrect: true },
        { id: "b", text: "It foretold the exact time of his death", isCorrect: false },
        { id: "c", text: "It described his physical appearance", isCorrect: false },
        { id: "d", text: "It revealed his secret plans", isCorrect: false },
      ],
      explanation:
        "This surah is remarkable because it prophetically declared that Abu Lahab would never accept Islam and would die as a disbeliever. For over 10 years after this revelation, Abu Lahab could have easily disproven the Quran by simply accepting Islam, but he never did - proving the divine origin of this prophecy.",
    },
    {
      id: "masad-10",
      question: "What universal lesson does this surah teach about opposing divine truth?",
      arabic: "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ",
      options: [
        { id: "a", text: "Worldly power and wealth cannot protect against divine justice", isCorrect: true },
        { id: "b", text: "Family relationships are more important than wealth", isCorrect: false },
        { id: "c", text: "Hard work always leads to success", isCorrect: false },
        { id: "d", text: "Money is the root of all evil", isCorrect: false },
      ],
      explanation:
        "This surah teaches the universal lesson that worldly power, wealth, status, and connections cannot protect anyone from divine justice. Abu Lahab was wealthy, influential, and related to the Prophet ﷺ, yet none of this could save him from the consequences of opposing Allah's message. True success lies in accepting divine guidance, not in accumulating worldly possessions.",
    },
  ],
}

export const anNasrQuizData: SurahQuizData = {
  surahId: 110,
  surahName: "An-Nasr",
  surahArabicName: "النصر",
  totalVerses: 3,
  type: "Medinan",
  difficulty: "Beginner",
  introduction:
    "Surah An-Nasr (The Divine Support) is the 110th chapter of the Quran and refers to Allah's help and victory. It was one of the last surahs revealed and is considered a sign of the Prophet's ﷺ approaching death, as it speaks of the completion of his mission.",
  additionalContextElements: [
    {
      title: "The Final Victory",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Conquest of Mecca</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            This surah was revealed after the conquest of Mecca in 8 AH, when the Prophet ﷺ entered the city peacefully and the Kaaba was cleansed of idols. It marked the fulfillment of Allah's promise of victory.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Mass Conversion</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              After the conquest, people began entering Islam in large numbers, fulfilling the prophecy mentioned in this surah about people embracing the religion of Allah in crowds.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "A Sign of Completion",
      content: `
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">The Prophet's Understanding</h3>
          <p class="text-blue-700 dark:text-blue-200 mb-3">
            When this surah was revealed, the Prophet ﷺ understood it as a sign that his mission was complete and his time in this world was coming to an end. He began to prepare for his departure.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Increased Worship</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                After this revelation, the Prophet ﷺ increased his prayers and remembrance of Allah.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Seeking Forgiveness</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                He frequently sought Allah's forgiveness, following the command in this surah.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "nasr-1",
      question: "What does the name 'An-Nasr' mean?",
      arabic: "النَّصْرِ",
      rootLetters: "ن ص ر",
      options: [
        { id: "a", text: "The Victory", isCorrect: false },
        { id: "b", text: "The Help", isCorrect: false },
        { id: "c", text: "The Divine Support", isCorrect: true },
        { id: "d", text: "The Conquest", isCorrect: false },
      ],
      explanation:
        "An-Nasr means 'The Divine Support' or 'The Help' and comes from the root ن ص ر meaning to help, support, or grant victory. It refers to Allah's assistance and support given to the Prophet Muhammad ﷺ and the Muslim community.",
    },
    {
      id: "nasr-2",
      question: "What is the meaning of this opening verse?",
      arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
      rootLetters: "ف ت ح",
      options: [
        { id: "a", text: "When Allah's help and victory come", isCorrect: false },
        { id: "b", text: "When the help of Allah and the conquest come", isCorrect: true },
        { id: "c", text: "When Allah's support and success arrive", isCorrect: false },
        { id: "d", text: "When divine assistance and triumph come", isCorrect: false },
      ],
      explanation:
        "Idha jaa nasru Allahi wal-fath means 'When the help of Allah and the conquest come.' The word 'fath' from the root ف ت ح means conquest or opening, specifically referring to the conquest of Mecca. This verse speaks of the divine help that led to this historic victory.",
    },
    {
      id: "nasr-3",
      question: "What is the meaning of this description of people's response?",
      arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
      rootLetters: "ف و ج",
      options: [
        { id: "a", text: "And you see people entering Allah's religion in groups", isCorrect: false },
        { id: "b", text: "And you see people joining Allah's faith in numbers", isCorrect: false },
        { id: "c", text: "And you see people entering Allah's religion in crowds", isCorrect: true },
        { id: "d", text: "And you see people accepting Allah's way in masses", isCorrect: false },
      ],
      explanation:
        "Wa ra'ayta an-nasa yadkhuluna fi dini Allahi afwajan means 'And you see people entering Allah's religion in crowds.' The word 'afwaj' (plural of fawj) from the root ف و ج means crowds, groups, or multitudes. This describes the mass conversion to Islam that occurred after the conquest of Mecca.",
    },
    {
      id: "nasr-4",
      question: "What is the meaning of this command for glorification?",
      arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ",
      rootLetters: "س ب ح",
      options: [
        { id: "a", text: "So glorify your Lord with praise", isCorrect: true },
        { id: "b", text: "So worship your Lord with gratitude", isCorrect: false },
        { id: "c", text: "So remember your Lord with thanks", isCorrect: false },
        { id: "d", text: "So honor your Lord with devotion", isCorrect: false },
      ],
      explanation:
        "Fa sabbih bi hamdi rabbika means 'So glorify your Lord with praise.' The word 'sabbih' from the root س ب ح means to glorify, declare the perfection of, or exalt Allah. 'Bi hamd' means with praise. This is a command to praise and glorify Allah for His help and victory.",
    },
    {
      id: "nasr-5",
      question: "What is the meaning of this final command?",
      arabic: "وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا",
      rootLetters: "غ ف ر",
      options: [
        { id: "a", text: "And seek His forgiveness, indeed He is the Acceptor of repentance", isCorrect: true },
        { id: "b", text: "And ask His pardon, indeed He is the Merciful", isCorrect: false },
        { id: "c", text: "And request His mercy, indeed He is the Compassionate", isCorrect: false },
        { id: "d", text: "And implore His grace, indeed He is the Forgiving", isCorrect: false },
      ],
      explanation:
        "Wastaghfirhu innahu kana tawwaban means 'And seek His forgiveness, indeed He is the Acceptor of repentance.' The word 'istaghfir' from the root غ ف ر means to seek forgiveness. 'Tawwab' means the One who frequently accepts repentance. This teaches humility even in victory.",
    },
    {
      id: "nasr-6",
      question: "What historical event does this surah primarily refer to?",
      arabic: "الْفَتْحُ",
      options: [
        { id: "a", text: "The Battle of Badr", isCorrect: false },
        { id: "b", text: "The conquest of Mecca", isCorrect: true },
        { id: "c", text: "The Treaty of Hudaybiyyah", isCorrect: false },
        { id: "d", text: "The Battle of Uhud", isCorrect: false },
      ],
      explanation:
        "The word 'al-fath' (the conquest) primarily refers to the conquest of Mecca in 8 AH (630 CE), when the Prophet ﷺ entered the city peacefully with 10,000 companions. This was the greatest victory for Islam, as it led to the cleansing of the Kaaba and mass conversions to Islam.",
    },
    {
      id: "nasr-7",
      question: "What did the Prophet ﷺ understand this surah to signify?",
      arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
      options: [
        { id: "a", text: "That more battles were coming", isCorrect: false },
        { id: "b", text: "That his mission was complete and his time was near", isCorrect: true },
        { id: "c", text: "That he should expand his conquests", isCorrect: false },
        { id: "d", text: "That he should establish a kingdom", isCorrect: false },
      ],
      explanation:
        "The Prophet ﷺ understood this surah as a sign that his mission was complete and his departure from this world was approaching. When Aisha (may Allah be pleased with her) asked him about his increased prayers and seeking forgiveness after this revelation, he explained that it was a sign of the completion of his prophetic mission.",
    },
    {
      id: "nasr-8",
      question: "What does the command to seek forgiveness teach us about success?",
      arabic: "وَاسْتَغْفِرْهُ",
      options: [
        { id: "a", text: "Success should be followed by humility and gratitude to Allah", isCorrect: true },
        { id: "b", text: "Success means we have done something wrong", isCorrect: false },
        { id: "c", text: "Success requires immediate celebration", isCorrect: false },
        { id: "d", text: "Success should make us proud of our achievements", isCorrect: false },
      ],
      explanation:
        "The command to seek forgiveness (wastaghfirhu) even after great success teaches us that victory and success should be followed by humility, gratitude to Allah, and recognition that all success comes from Him alone. It prevents arrogance and reminds us of our constant need for Allah's mercy and forgiveness.",
    },
    {
      id: "nasr-9",
      question: "What does 'Tawwab' tell us about Allah's nature?",
      arabic: "تَوَّابًا",
      rootLetters: "ت و ب",
      options: [
        { id: "a", text: "Allah frequently accepts repentance from His servants", isCorrect: true },
        { id: "b", text: "Allah only forgives once", isCorrect: false },
        { id: "c", text: "Allah is slow to forgive", isCorrect: false },
        { id: "d", text: "Allah forgives only major sins", isCorrect: false },
      ],
      explanation:
        "Tawwab from the root ت و ب means the One who frequently and repeatedly accepts repentance. The intensive form (fa''al pattern) indicates that Allah constantly and abundantly accepts the repentance of His servants. This encourages believers to always turn to Allah in repentance, knowing He is always ready to forgive.",
    },
    {
      id: "nasr-10",
      question: "What is the significance of this verse being in one of the last revealed surahs?",
      arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ",
      options: [
        { id: "a", text: "It summarizes the proper response to Allah's blessings throughout life", isCorrect: true },
        { id: "b", text: "It shows that the Quran was incomplete", isCorrect: false },
        { id: "c", text: "It indicates that more revelations were needed", isCorrect: false },
        { id: "d", text: "It proves the Quran was written by humans", isCorrect: false },
      ],
      explanation:
        "As the arabic verse means to, 'glorify the praises of your Lord and seek His forgiveness' and as it occurs in one of the last revealed surahs, An-Nasr beautifully summarizes the proper response to Allah's blessings throughout life: gratitude through praise and glorification, and humility through seeking forgiveness. It serves as a perfect conclusion to the prophetic mission, teaching believers how to respond to success and divine favor with the right spiritual attitude.",
    },
  ],
}
