export const alAsrQuizData: SurahQuizData = {
    surahId: 103,
    surahName: "Al-Asr",
    surahArabicName: "العصر",
    totalVerses: 3,
    type: "Meccan",
    difficulty: "Beginner",
    introduction:
      "Surah Al-Asr (The Time) is the 103rd chapter of the Quran, revealed in Mecca. Despite its brevity, it delivers a profound message about the fleeting nature of time and the path to human success. It emphasizes that humanity is in a state of loss unless they combine faith, righteous deeds, and mutual exhortation to truth and patience, offering a timeless formula for salvation.",
    additionalContextElements: [
      {
        title: "The Value of Time",
        content: `
          <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
            <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Time and Loss</h3>
            <p class="text-emerald-700 dark:text-emerald-200 mb-3">
              Surah Al-Asr begins with a solemn oath by time (Al-Asr), underscoring its fleeting nature and the universal tendency of humans to fall into loss. This surah serves as a reminder that time is a precious resource that must be used wisely to attain success in this life and the Hereafter.
            </p>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                According to Tafsir Ibn Kathir, 'Al-Asr' refers to time itself, particularly the passing of days and nights, which are opportunities for action. The surah’s opening oath highlights the urgency of using time for righteous purposes before it runs out.
              </p>
            </div>
          </div>
        `,
      },
      {
        title: "The Formula for Success",
        content: `
          <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
            <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Four Pillars of Salvation</h3>
            <p class="text-amber-700 dark:text-amber-200 mb-3">
              The surah outlines four essential qualities for avoiding loss: faith (iman), righteous deeds (amal salih), exhorting one another to truth (haqq), and exhorting one another to patience (sabr). These pillars form a comprehensive guide for individual and communal success.
            </p>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
              <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Imam Shafi’i’s Perspective</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Imam Shafi’i reportedly said that if people reflected deeply on Surah Al-Asr alone, it would suffice for their guidance, as it encapsulates the essence of Islam’s teachings. This reflects the surah’s profound simplicity and universal applicability.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Community and Cooperation</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                The emphasis on mutual exhortation to truth and patience highlights the importance of community in Islam. Tafsir Al-Jalalayn explains that these qualities require believers to support one another in upholding truth and enduring trials, fostering a strong, righteous society.
              </p>
            </div>
          </div>
        `,
      },
    ],
    questions: [
      {
        id: "q1",
        question: "What is the main theme of Surah Al-Asr?",
        arabic: "العصر",
        rootLetters: "ع ص ر",
        options: [
        { id: "a", text: "The importance of wealth", isCorrect: false },
        { id: "b", text: "The value of time and the path to success", isCorrect: true },
        { id: "c", text: "The story of a prophet", isCorrect: false },
        { id: "d", text: "The rules of prayer", isCorrect: false },
      ],
      explanation: "Surah Al-Asr emphasizes the fleeting nature of time and outlines the path to success through faith, righteous deeds, truth, and patience.",
    },
    {
        id: "q2",
        question: "What does the Arabic word خُسْر in Surah Al-Asr mean?",
        arabic: "خُسْر",
        rootLetters: "خ س ر",
        options: [
          { id: "a", text: "Loss", isCorrect: true },
          { id: "b", text: "Opression", isCorrect: false },
          { id: "c", text: "Truth", isCorrect: false },
          { id: "d", text: "Righteous deeds", isCorrect: false },
        ],
        explanation: "The word خُسْر or khusr means loss, derived from the root خ-س-ر. In Surah Al-Asr, the word loss or khusr in Arabic, signifies a state of spiritual and eternal failure, encompassing both worldly and afterlife consequences. It's not merely a temporary setback or financial loss but a fundamental lack of true success in life's journey. This loss is contrasted with the state of those who have faith, do good deeds, and encourage each other in truth and patience. ",
      },
      {
        id: "q3",
        question: "What does the Arabic term إِيمَان or Iman mean in the surah?",
        arabic: "إِيمَان",
        rootLetters: "ء م ن",
        options: [
          { id: "a", text: "Patience", isCorrect: false },
          { id: "b", text: "Faith", isCorrect: true },
          { id: "c", text: "Mutual gains", isCorrect: false },
          { id: "d", text: "Knowledge", isCorrect: false },
        ],
        explanation: "إِيمَان or iman means faith, from the root ء-م-ن. In Surah Al-'Asr, Iman or faith signifies a deep, unwavering belief in God and His messenger, coupled with a commitment to righteous actions and encouraging others to do the same. It's not merely lip service but a conviction that shapes one's behavior and interactions with the world, leading to success in this life and the hereafter, according to Islamic texts. ",
      },
      {
        id: "q4",
        question: "What does the Arabic word 'عَمِلُوا الصَّالِحَات' or amilu as-salihat mean in Surah Al-Asr?",
        arabic: "عَمِلُوا الصَّالِحَات",
        rootLetters: "ع م ل | ص ل ح",
        options: [
          { id: "a", text: "Envy", isCorrect: false },
          { id: "b", text: "Bad deeds", isCorrect: false },
          { id: "c", text: "Exhorting to truth", isCorrect: false },
          { id: "d", text: "Righteous deeds", isCorrect: true },
        ],
        explanation: "'عَمِلُوا الصَّالِحَات' (amilu as-salihat) means 'righteous deeds,' with roots ع-م-ل and ص-ل-ح. In Surah Al-'Asr, righteous deeds or amal-us-salihat, refer to actions that are both good in themselves and done sincerely for the sake of God. These deeds are performed in accordance with Islamic law and are motivated by faith and a desire to please God, rather than for worldly gain or show. ",
      },
      {
        id: "q5",
        question: "What does the Arabic term الحَقّ mean in the surah Al Asr?",
        arabic: "الحَقّ",
        rootLetters: "ح ق ق",
        options: [
          { id: "a", text: "Falsehood", isCorrect: false },
          { id: "b", text: "اLove", isCorrect: false },
          { id: "c", text: "Truth", isCorrect: true },
          { id: "d", text: "Fear", isCorrect: false },
        ],
        explanation: "'الحَقّ' al-haqq means truth, derived from the root ح-ق-ق. the word Truth or Haqq signifies the core principles of Islam and righteous conduct, emphasizing the importance of adhering to divine guidance and acting accordingly. It also highlights the necessity of reminding others to embrace and uphold these truths, along with patience, as essential components for success and avoiding loss in this life and the hereafter. ",
      },
      {
        id: "q6",
        question: "What does the Arabic word صَبْر mean in Surah Al-Asr?",
        arabic: "صَبْر",
        rootLetters: "ص ب ر",
        options: [
          { id: "a", text: "Fasting", isCorrect: false },
          { id: "b", text: "Patience", isCorrect: true },
          { id: "c", text: "Prayer", isCorrect: false },
          { id: "d", text: "Anger", isCorrect: false },
        ],
        explanation: "'صَبْر' (sabr) means patience, from the root ص-ب-ر. In Surah Al-Asr, patience or sabr is highlighted as a crucial element for salvation, alongside faith and righteous deeds. It emphasizes that humanity, in general, is in a state of loss, but those who believe, perform good deeds, and advise each other to truth and patience are exempt from this loss. Therefore, patience is not merely a virtue but a necessary component for spiritual success, enabling believers to navigate life's challenges and remain steadfast in their faith.",
      },
      {
        id: "q7",
        question: "What does the phrase تَوَاصَوْا tawasaw mean?",
        arabic: "تَوَاصَوْا",
        rootLetters: "و ص ي",
        options: [
          { id: "a", text: "They laugh together", isCorrect: false },
          { id: "b", text: "They fight one another", isCorrect: false },
          { id: "c", text: "They love one another", isCorrect: false },
          { id: "d", text: "They enjoin one another", isCorrect: true },
        ],
        explanation: "تَوَاصَوْا or tawasaw means they enjoin one another, derived from و-ص-ي. Enjoining one another to truth means that believers should actively promote and uphold truth and justice within their societies. It underscores the responsibility to speak the truth, stand for what is right, and prevent the spread of falsehood. It encompasses improving the intellectual and spiritual development of Muslims by sharing knowledge and guidance based on the Quran and Sunnah. ",
      },
      {
        id: "q8",
        question: "What phrase does Tafsir of Ibn Kathir refers to by the word 'العصر'?",
        arabic: "العصر",
        rootLetters: "ع ص ر",
        options: [
          { id: "a", text: "Salvation in Hereafter", isCorrect: false },
          { id: "b", text: "Mercy of The Most Merciful", isCorrect: false },
          { id: "c", text: "Loss for Humanity", isCorrect: false },
          { id: "d", text: "The passage of Time", isCorrect: true },
        ],
        explanation: "Tafsir Ibn Kathir explains 'العصر' as time's passage, root letters ع-ص-ر. In Surah 103, Al-'Asr, the phrase by the passage of time Wal-'Asr signifies the immense importance of time in Islam. It serves as an oath, emphasizing that time is a precious resource entrusted to humanity, and its value should not be underestimated. Ibn Kathir emphasizes that the passage of time inherently places humanity in a state of loss. Each passing moment brings humans closer to death, reducing their opportunities for earning rewards in the Hereafter.",
      },
       {
      id: "q9",
      question: "What is one quality exempted from loss in Surah Al-Asr?",
      options: [
        { id: "a", text: "Faith (iman)", isCorrect: true },
        { id: "b", text: "Slander", isCorrect: false },
        { id: "c", text: "Pride", isCorrect: false },
        { id: "d", text: "Wealth", isCorrect: false },
      ],
      explanation: "Faith (iman) is one of the four qualities that exempt believers from loss, as outlined in Surah Al-Asr.",
    },
    {
      id: "q10",
      question: "What does 'haqq' refer to in Surah Al-Asr?",
      options: [
        { id: "a", text: "Wealth", isCorrect: false },
        { id: "b", text: "Power", isCorrect: false },
        { id: "c", text: "Truth", isCorrect: true },
        { id: "d", text: "Fame", isCorrect: false },
      ],
      explanation: "'Haqq' refers to truth, one of the qualities believers are urged to exhort one another towards in Surah Al-Asr.",
    },
    ],
  };
