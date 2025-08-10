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
