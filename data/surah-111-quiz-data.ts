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
 
export const alMasadQuizData: SurahQuizData = {
  surahId: 111,
  surahName: "Al-Masad",
  surahArabicName: "المسد",
  totalVerses: 5,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Masad (The Palm Fiber) is the 111th chapter of the Quran. It condemns Abu Lahab, an uncle of the Prophet Muhammad ﷺ, and his wife for their hostility and opposition to Islam. The surah prophesies their punishment and serves as a warning against opposing the truth.",
  additionalContextElements: [
    {
      title: "Historical Context",
      content: `
        <div class="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800">
          <h3 class="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">Opposition to the Prophet</h3>
          <p class="text-red-700 dark:text-red-200 mb-3">
            Abu Lahab and his wife, Umm Jamil, were vehement opponents of the Prophet Muhammad ﷺ. This surah was revealed to address their actions and to demonstrate the consequences of opposing Allah's message.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-red-700 dark:text-red-300 mb-1">Divine Prophecy</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The surah foretells the fate of Abu Lahab and his wife, which was fulfilled as they died in disgrace without accepting Islam.
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "masad-1",
      question: "What does the name 'Al-Masad' mean?",
      arabic: "المسد",
      rootLetters: "م س د",
      options: [
        { id: "a", text: "The Flame", isCorrect: false },
        { id: "b", text: "The Palm Fiber", isCorrect: true },
        { id: "c", text: "The Rope", isCorrect: false },
        { id: "d", text: "The Fire", isCorrect: false },
      ],
      explanation:
        "Al-Masad means 'The Palm Fiber' or 'The Twisted Strands.' It refers to the rope made of palm fiber carried by Umm Jamil, which is mentioned in the surah as a symbol of her punishment.",
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
