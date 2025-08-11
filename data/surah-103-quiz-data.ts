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
        question: "What is the Arabic term for 'time' in Surah Al-Asr?",
        arabic: "العصر",
        rootLetters: "ع ص ر",
        options: [
          { id: "a", text: "الدهر", isCorrect: false },
          { id: "b", text: "العصر", isCorrect: true },
          { id: "c", text: "الوقت", isCorrect: false },
          { id: "d", text: "الساعة", isCorrect: false },
        ],
        explanation: "The term 'العصر' (Al-Asr) refers to time in this surah, with root letters ع-ص-ر.",
      },
      {
        id: "q2",
        question: "What Arabic word in Surah Al-Asr means 'loss'?",
        arabic: "خُسْر",
        rootLetters: "خ س ر",
        options: [
          { id: "a", text: "خُسْر", isCorrect: true },
          { id: "b", text: "ضَلَال", isCorrect: false },
          { id: "c", text: "هَلَاك", isCorrect: false },
          { id: "d", text: "غَفْلَة", isCorrect: false },
        ],
        explanation: "The word 'خُسْر' (khusr) means 'loss,' derived from the root خ-س-ر.",
      },
      {
        id: "q3",
        question: "Which Arabic term in the surah refers to 'faith'?",
        arabic: "إِيمَان",
        rootLetters: "ء م ن",
        options: [
          { id: "a", text: "إِيمَان", isCorrect: true },
          { id: "b", text: "تَقْوَى", isCorrect: false },
          { id: "c", text: "صَبْر", isCorrect: false },
          { id: "d", text: "عِلْم", isCorrect: false },
        ],
        explanation: "'إِيمَان' (iman) means faith, from the root ء-م-ن.",
      },
      {
        id: "q4",
        question: "What is the Arabic for 'righteous deeds' in Surah Al-Asr?",
        arabic: "عَمِلُوا الصَّالِحَات",
        rootLetters: "ع م ل | ص ل ح",
        options: [
          { id: "a", text: "عَمِلُوا الصَّالِحَات", isCorrect: true },
          { id: "b", text: "فَعَلُوا الخَيْرَات", isCorrect: false },
          { id: "c", text: "أَطَاعُوا الله", isCorrect: false },
          { id: "d", text: "ذَكَرُوا الله", isCorrect: false },
        ],
        explanation: "'عَمِلُوا الصَّالِحَات' (amilu as-salihat) means 'righteous deeds,' with roots ع-م-ل and ص-ل-ح.",
      },
      {
        id: "q5",
        question: "Which term in the surah means 'truth'?",
        arabic: "الحَقّ",
        rootLetters: "ح ق ق",
        options: [
          { id: "a", text: "الحَقّ", isCorrect: true },
          { id: "b", text: "الصِّدْق", isCorrect: false },
          { id: "c", text: "العَدْل", isCorrect: false },
          { id: "d", text: "الفَضْل", isCorrect: false },
        ],
        explanation: "'الحَقّ' (al-haqq) means 'truth,' derived from the root ح-ق-ق.",
      },
      {
        id: "q6",
        question: "What is the Arabic word for 'patience' in Surah Al-Asr?",
        arabic: "صَبْر",
        rootLetters: "ص ب ر",
        options: [
          { id: "a", text: "صَبْر", isCorrect: true },
          { id: "b", text: "جَهْد", isCorrect: false },
          { id: "c", text: "ثَبَات", isCorrect: false },
          { id: "d", text: "احْتِمَال", isCorrect: false },
        ],
        explanation: "'صَبْر' (sabr) means patience, from the root ص-ب-ر.",
      },
      {
        id: "q7",
        question: "What phrase in the surah means 'they enjoin one another'?",
        arabic: "تَوَاصَوْا",
        rootLetters: "و ص ي",
        options: [
          { id: "a", text: "تَوَاصَوْا", isCorrect: true },
          { id: "b", text: "تَعَاوَنُوا", isCorrect: false },
          { id: "c", text: "تَذَاكَرُوا", isCorrect: false },
          { id: "d", text: "تَبَادَلُوا", isCorrect: false },
        ],
        explanation: "'تَوَاصَوْا' (tawasaw) means 'they enjoin one another,' derived from و-ص-ي.",
      },
      {
        id: "q8",
        question: "Which term in Tafsir Ibn Kathir refers to 'time's passage'?",
        arabic: "العصر",
        rootLetters: "ع ص ر",
        options: [
          { id: "a", text: "العصر", isCorrect: true },
          { id: "b", text: "الزمان", isCorrect: false },
          { id: "c", text: "الأجل", isCorrect: false },
          { id: "d", text: "الدَّهْر", isCorrect: false },
        ],
        explanation: "Tafsir Ibn Kathir explains 'العصر' as time's passage, root letters ع-ص-ر.",
      },
      {
        id: "q9",
        question: "What Arabic word did Imam Shafi’i highlight for guidance?",
        arabic: "العصر",
        rootLetters: "ع ص ر",
        options: [
          { id: "a", text: "العصر", isCorrect: true },
          { id: "b", text: "الإيمان", isCorrect: false },
          { id: "c", text: "الحق", isCorrect: false },
          { id: "d", text: "الخسر", isCorrect: false },
        ],
        explanation: "Imam Shafi’i emphasized reflecting on 'العصر' (time) for guidance, root ع-ص-ر.",
      },
      {
        id: "q10",
        question: "Which term in Tafsir Al-Jalalayn refers to 'mutual exhortation'?",
        arabic: "تَوَاصَوْا",
        rootLetters: "و ص ي",
        options: [
          { id: "a", text: "تَوَاصَوْا", isCorrect: true },
          { id: "b", text: "تَعَاوَنُوا", isCorrect: false },
          { id: "c", text: "تَنَاصَحُوا", isCorrect: false },
          { id: "d", text: "تَشَاوَرُوا", isCorrect: false },
        ],
        explanation: "Tafsir Al-Jalalayn explains 'تَوَاصَوْا' (mutual exhortation), root و-ص-ي.",
      },
    ],
  };
