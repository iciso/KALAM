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
      question: "How many ayahs are in Surah Al-Asr?",
      options: [
        { id: "a", text: "3", isCorrect: true },
        { id: "b", text: "5", isCorrect: false },
        { id: "c", text: "7", isCorrect: false },
        { id: "d", text: "9", isCorrect: false },
      ],
      explanation: "Surah Al-Asr consists of 3 ayahs, making it one of the shortest surahs in the Quran.",
    },
    {
      id: "q3",
      question: "What does the term 'Al-Asr' mean?",
      options: [
        { id: "a", text: "The Fire", isCorrect: false },
        { id: "b", text: "The Time", isCorrect: true },
        { id: "c", text: "The Slanderer", isCorrect: false },
        { id: "d", text: "The Victory", isCorrect: false },
      ],
      explanation: "'Al-Asr' means 'The Time,' referring to the fleeting nature of time, as explained in Tafsir Ibn Kathir.",
    },
    {
      id: "q4",
      question: "According to Surah Al-Asr, what is the state of humanity without the four qualities mentioned?",
      options: [
        { id: "a", text: "In a state of loss", isCorrect: true },
        { id: "b", text: "In a state of victory", isCorrect: false },
        { id: "c", text: "In a state of peace", isCorrect: false },
        { id: "d", text: "In a state of wealth", isCorrect: false },
      ],
      explanation: "The surah states that humanity is in a state of loss unless they have faith, righteous deeds, and exhort one another to truth and patience.",
    },
    {
      id: "q5",
      question: "What is one of the four qualities for success mentioned in Surah Al-Asr?",
      options: [
        { id: "a", text: "Accumulating wealth", isCorrect: false },
        { id: "b", text: "Fasting daily", isCorrect: false },
        { id: "c", text: "Righteous deeds", isCorrect: true },
        { id: "d", text: "Traveling widely", isCorrect: false },
      ],
      explanation: "Righteous deeds (amal salih) is one of the four qualities for success outlined in Surah Al-Asr.",
    },
    {
      id: "q6",
      question: "What type of surah is Al-Asr?",
      options: [
        { id: "a", text: "Medinan", isCorrect: false },
        { id: "b", text: "Meccan", isCorrect: true },
        { id: "c", text: "Makki-Medinan", isCorrect: false },
        { id: "d", text: "Post-Hijrah", isCorrect: false },
      ],
      explanation: "Surah Al-Asr is a Meccan surah, revealed in Mecca during the early period of the Prophet’s mission.",
    },
    {
      id: "q7",
      question: "What does Surah Al-Asr emphasize about community?",
      options: [
        { id: "a", text: "Competing for leadership", isCorrect: false },
        { id: "b", text: "Isolating from others", isCorrect: false },
        { id: "c", text: "Building wealth together", isCorrect: false },
        { id: "d", text: "Mutual exhortation to truth and patience", isCorrect: true },
      ],
      explanation: "The surah emphasizes mutual exhortation to truth (haqq) and patience (sabr), highlighting the importance of community support.",
    },
    {
      id: "q8",
      question: "Who reportedly said that Surah Al-Asr alone could suffice for guidance if reflected upon?",
      options: [
        { id: "a", text: "Imam Shafi’i", isCorrect: true },
        { id: "b", text: "Ibn Abbas", isCorrect: false },
        { id: "c", text: "Abu Bakr", isCorrect: false },
        { id: "d", text: "Umar ibn Al-Khattab", isCorrect: false },
      ],
      explanation: "Imam Shafi’i is reported to have said that reflecting deeply on Surah Al-Asr could suffice for guidance due to its comprehensive message.",
    },
    {
      id: "q9",
      question: "What does the oath 'By time' signify in Surah Al-Asr?",
      options: [
        { id: "a", text: "The importance of daily prayers", isCorrect: false },
        { id: "b", text: "The start of revelation", isCorrect: false },
        { id: "c", text: "The end of the world", isCorrect: false },
        { id: "d", text: "The fleeting nature of time", isCorrect: true },
      ],
      explanation: "The oath 'By time' underscores the fleeting nature of time, urging believers to use it wisely for righteous actions.",
    },
    {
      id: "q10",
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
      id: "q11",
      question: "What does 'haqq' refer to in Surah Al-Asr?",
      options: [
        { id: "a", text: "Wealth", isCorrect: false },
        { id: "b", text: "Power", isCorrect: false },
        { id: "c", text: "Truth", isCorrect: true },
        { id: "d", text: "Fame", isCorrect: false },
      ],
      explanation: "'Haqq' refers to truth, one of the qualities believers are urged to exhort one another towards in Surah Al-Asr.",
    },
    {
      id: "q12",
      question: "According to Tafsir Al-Jalalayn, why is mutual exhortation important in Surah Al-Asr?",
      options: [
        { id: "a", text: "To build wealth", isCorrect: false },
        { id: "b", text: "To gain leadership", isCorrect: false },
        { id: "c", text: "To compete in knowledge", isCorrect: false },
        { id: "d", text: "To foster a righteous community", isCorrect: true },
      ],
      explanation: "Tafsir Al-Jalalayn highlights that mutual exhortation to truth and patience fosters a strong, righteous community, essential for success.",
    },
  ],
};
