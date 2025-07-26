import { SurahQuizData } from "./surah-quiz-types"

export const alMaunQuizData: SurahQuizData = {
  surahId: 107,
  surahName: "Al-Ma'un",
  surahArabicName: "الماعون",
  totalVerses: 7,
  type: "Meccan",
  difficulty: "Intermediate",
  introduction:
    "Surah Al-Ma’un (The Small Kindnesses) is the 107th chapter of the Quran, revealed in Mecca. It addresses hypocrisy and neglect of faith, condemning those who deny the Day of Judgment, mistreat orphans, neglect the poor, and perform prayers insincerely. The surah emphasizes the importance of sincerity in worship and compassion for the vulnerable.",
  additionalContextElements: [
    {
      title: "Historical Context",
      content: `
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Revelation in Mecca</h3>
          <p class="text-blue-700 dark:text-blue-600 mb-3">
            Surah Al-Ma’un was revealed during the early Meccan period when the Muslim community faced persecution. It critiques the hypocritical behavior of some Quraysh leaders who outwardly professed piety but neglected moral and social responsibilities, such as caring for orphans and the needy.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Target Audience</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The surah addresses both disbelievers who denied the Day of Judgment and hypocrites who performed religious acts for show, highlighting the importance of genuine faith and action.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Themes of the Surah",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Sincerity and Social Responsibility</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            Surah Al-Ma’un outlines key characteristics of those who lack true faith, including:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Denial of Judgment</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Rejecting accountability in the Hereafter leads to moral failure.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Mistreatment of Orphans</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Harshness toward the vulnerable reflects a lack of compassion.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Neglect of the Poor</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Failing to assist the needy contradicts Islamic values.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Insincere Worship</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Performing prayers for show, without devotion, is condemned.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "maun-1",
      question: "What does the name 'Al-Ma’un' mean?",
      arabic: "الماعون",
      rootLetters: "م ع ن",
      options: [
        { id: "a", text: "The Small Kindnesses", isCorrect: true },
        { id: "b", text: "The Charity", isCorrect: false },
        { id: "c", text: "The Assistance", isCorrect: false },
        { id: "d", text: "The Neighbor", isCorrect: false },
      ],
      explanation:
        "Al-Ma’un means 'The Small Kindnesses' or 'Acts of Assistance,' derived from the root م ع ن, which relates to help or aid. It refers to small but essential acts of kindness, like sharing necessities or helping the needy, which the surah criticizes hypocrites for neglecting.",
    },
    {
      id: "maun-2",
      question: "What does the opening verse imply?",
      arabic: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ",
      rootLetters: "ك ذ ب",
      options: [
        { id: "a", text: "It refers to one who denies the Day of Judgment", isCorrect: true },
        { id: "b", text: "It refers to one who rejects prayer", isCorrect: false },
        { id: "c", text: "It refers to one who hoards wealth", isCorrect: false },
        { id: "d", text: "It refers to one who oppresses others", isCorrect: false },
      ],
      explanation:
        "Ara’ayta alladhi yukadhdhibu bid-din means 'Have you seen the one who denies the Recompense?' The word 'din' from the root د ي ن here refers to the Day of Judgment or accountability. The surah begins by addressing those who reject belief in the Hereafter, leading to their moral failures.",
    },
    {
      id: "maun-3",
      question: "What behavior is criticized in this verse?",
      arabic: "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ",
      rootLetters: "د ع ع",
      options: [
        { id: "a", text: "Mistreating or repelling orphans", isCorrect: true },
        { id: "b", text: "Ignoring the poor", isCorrect: false },
        { id: "c", text: "Praying insincerely", isCorrect: false },
        { id: "d", text: "Denying charity", isCorrect: false },
      ],
      explanation:
        "Fadhalika alladhi yadu‘u al-yatim means 'That is the one who repels the orphan.' The word 'yadu‘u' from the root د ع ع implies harsh treatment or pushing away. The surah criticizes those who mistreat orphans, a vulnerable group, reflecting their lack of compassion and faith.",
    },
    {
      id: "maun-4",
      question: "What does this verse highlight?",
      arabic: "وَلَا يَحُضُّ عَلَىٰ طَعَامِ الْمِسْكِينِ",
      rootLetters: "ح ض ض",
      options: [
        { id: "a", text: "Neglecting to feed or encourage feeding the poor", isCorrect: true },
        { id: "b", text: "Refusing to pray for the needy", isCorrect: false },
        { id: "c", text: "Hoarding food for oneself", isCorrect: false },
        { id: "d", text: "Mocking the poor", isCorrect: false },
      ],
      explanation:
        "Wala yahuddu ‘ala ta‘ami al-miskin means 'And does not encourage the feeding of the poor.' The word 'yahuddu' from the root ح ض ض means to urge or encourage. This verse condemns those who fail to help or advocate for the needy, highlighting their selfishness and hypocrisy.",
    },
    {
      id: "maun-5",
      question: "What is the meaning of 'waylun lil-musallin'?",
      arabic: "فَوَيْلٌ لِّلْمُصَلِّينَ",
      rootLetters: "ص ل ي",
      options: [
        { id: "a", text: "Woe to those who pray insincerely", isCorrect: true },
        { id: "b", text: "Woe to those who abandon prayer", isCorrect: false },
        { id: "c", text: "Woe to those who pray in public", isCorrect: false },
        { id: "d", text: "Woe to those who pray at night", isCorrect: false },
      ],
      explanation:
        "Waylun lil-musallin means 'Woe to those who pray.' The word 'musallin' from the root ص ل ي refers to those who perform prayers. The surah targets hypocrites who pray for show, without sincerity or mindfulness, as clarified in the following verses.",
    },
    {
      id: "maun-6",
      question: "What characteristic is described here?",
      arabic: "الَّذِينَ هُمْ عَن صَلَاتِهِمْ سَاهُونَ",
      rootLetters: "س هـ و",
      options: [
        { id: "a", text: "Being heedless or neglectful in prayer", isCorrect: true },
        { id: "b", text: "Abandoning prayer entirely", isCorrect: false },
        { id: "c", text: "Praying without understanding", isCorrect: false },
        { id: "d", text: "Praying irregularly", isCorrect: false },
      ],
      explanation:
        "Alladhina hum ‘an salatihim sahun means 'Who are heedless of their prayers.' The word 'sahun' from the root س هـ و implies negligence or lack of attention. This refers to those who pray mechanically or for show, without devotion or awareness of its spiritual purpose.",
    },
    {
      id: "maun-7",
      question: "What is criticized in the final verse?",
      arabic: "وَيَمْنَعُونَ الْمَاعُونَ",
      rootLetters: "م ن ع",
      options: [
        { id: "a", text: "Withholding small acts of kindness or assistance", isCorrect: true },
        { id: "b", text: "Refusing to pay zakat", isCorrect: false },
        { id: "c", text: "Preventing others from praying", isCorrect: false },
        { id: "d", text: "Hiding their wealth", isCorrect: false },
      ],
      explanation:
        "Wayamna‘una al-ma’un means 'And withhold small kindnesses.' The word 'yamna‘una' from the root م ن ع means to withhold or prevent. 'Al-ma’un' refers to small but essential acts of help, like lending tools or aiding the needy. The surah condemns those who refuse even minor assistance.",
    },
    {
      id: "maun-8",
      question: "What is a key lesson of Surah Al-Ma’un?",
      arabic: "الماعون",
      options: [
        { id: "a", text: "True faith requires sincerity in worship and compassion for others", isCorrect: true },
        { id: "b", text: "Prayer alone is sufficient for salvation", isCorrect: false },
        { id: "c", text: "Wealth must be shared with everyone", isCorrect: false },
        { id: "d", text: "Orphans should be adopted by all Muslims", isCorrect: false },
      ],
      explanation:
        "Surah Al-Ma’un teaches that true faith combines sincere worship with compassionate actions. It criticizes those who pray insincerely and neglect social responsibilities, like caring for orphans and the poor, emphasizing that faith must manifest in both devotion to Allah and kindness to others.",
    },
    {
      id: "maun-9",
      question: "Who is the surah primarily addressing?",
      arabic: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ",
      options: [
        { id: "a", text: "Hypocrites and disbelievers who neglect faith and compassion", isCorrect: true },
        { id: "b", text: "Only the Quraysh leaders", isCorrect: false },
        { id: "c", text: "Muslims who forget to pray", isCorrect: false },
        { id: "d", text: "The poor and needy", isCorrect: false },
      ],
      explanation:
        "The surah addresses those who deny the Day of Judgment (disbelievers) and hypocrites who perform religious acts for show but neglect moral duties. It critiques their mistreatment of orphans, neglect of the poor, and insincere prayers, calling for genuine faith and action.",
    },
    {
      id: "maun-10",
      question: "Why is this surah significant for early Muslims in Mecca?",
      arabic: "الماعون",
      options: [
        { id: "a", text: "It exposed the hypocrisy of their opponents and reinforced faith", isCorrect: true },
        { id: "b", text: "It provided laws for charity", isCorrect: false },
        { id: "c", text: "It instructed them to fight back", isCorrect: false },
        { id: "d", text: "It described the rewards of Paradise", isCorrect: false },
      ],
      explanation:
        "During the early Meccan period, Muslims faced persecution from the Quraysh, some of whom displayed hypocrisy by appearing pious while oppressing the vulnerable. Surah Al-Ma’un exposed this behavior, reinforcing the importance of sincere faith and compassion, which strengthened the resolve of the early Muslim community.",
    },
  ],
}
