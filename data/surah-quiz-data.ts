import type { VocabularyWord } from "@/types/vocabulary"
import { vocabularyService } from "@/services/vocabulary-service"

export interface SurahQuizQuestion {
  id: string
  arabic: string
  options: {
    id: string
    text: string
    isCorrect: boolean
  }[]
  explanation?: string
  rootLetters?: string
  audioUrl?: string
}

export interface SurahQuizData {
  surahId: number
  surahName: string
  surahArabicName: string
  totalVerses: number
  type: "Meccan" | "Medinan"
  questions: SurahQuizQuestion[]
  introduction: string
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  sectionName?: string // For sectioned surahs like Al-Baqarah
  sectionRange?: string // e.g., "1-60"
}

// Helper function to create quiz questions from vocabulary words
export function createQuestionsFromVocabulary(words: VocabularyWord[]): SurahQuizQuestion[] {
  // Get all vocabulary words to use as distractors
  const allWords = vocabularyService.getAllWords()

  return words.map((word) => {
    // Create 3 wrong options by selecting random words that are different from the current word
    const wrongOptions = allWords
      .filter((w) => w.id !== word.id && w.meanings.length > 0)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((w) => ({
        id: w.id,
        text: w.meanings[0],
        isCorrect: false,
      }))

    // Create the correct option
    const correctOption = {
      id: word.id,
      text: word.meanings[0],
      isCorrect: true,
    }

    // Combine and shuffle all options
    const options = [...wrongOptions, correctOption].sort(() => 0.5 - Math.random())

    return {
      id: word.id,
      arabic: word.arabic,
      options: options,
      explanation: word.notes,
      rootLetters: word.rootLetters,
      audioUrl: word.audioUrl,
    }
  })
}

// Al-Fatihah Quiz Data
export const alFatihahQuizData: SurahQuizData = {
  surahId: 1,
  surahName: "Al-Fatihah",
  surahArabicName: "الفاتحة",
  totalVerses: 7,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Al-Fatihah (The Opening) is the first chapter of the Quran and is recited in every prayer. It contains seven verses and is known as 'The Mother of the Book' (Umm al-Kitab). This quiz will test your knowledge of key vocabulary from this essential surah.",
  questions: [
    {
      id: "fatihah-1",
      arabic: "الْحَمْدُ",
      options: [
        { id: "a", text: "Praise", isCorrect: true },
        { id: "b", text: "Mercy", isCorrect: false },
        { id: "c", text: "Power", isCorrect: false },
        { id: "d", text: "Knowledge", isCorrect: false },
      ],
      rootLetters: "ح م د",
      explanation:
        "Al-Hamd means 'praise' or 'all praise'. In the context of Al-Fatihah, it refers to praising Allah with the tongue while acknowledging His perfect attributes.",
    },
    {
      id: "fatihah-2",
      arabic: "رَبِّ",
      options: [
        { id: "a", text: "Lord", isCorrect: true },
        { id: "b", text: "Creator", isCorrect: false },
        { id: "c", text: "King", isCorrect: false },
        { id: "d", text: "Master", isCorrect: false },
      ],
      rootLetters: "ر ب ب",
      explanation:
        "Rabb means 'Lord' and refers to one who nurtures, sustains, and brings to maturity. It encompasses the ideas of ownership, mastership, and guardianship.",
    },
    {
      id: "fatihah-3",
      arabic: "الْعَالَمِينَ",
      options: [
        { id: "a", text: "The worlds", isCorrect: true },
        { id: "b", text: "The people", isCorrect: false },
        { id: "c", text: "The heavens", isCorrect: false },
        { id: "d", text: "The universe", isCorrect: false },
      ],
      rootLetters: "ع ل م",
      explanation:
        "Al-'Alameen refers to 'the worlds' or 'all that exists'. It encompasses all creation, including humans, jinn, angels, and all realms of existence.",
    },
    {
      id: "fatihah-4",
      arabic: "الرَّحْمَٰنِ",
      options: [
        { id: "a", text: "The Most Gracious", isCorrect: true },
        { id: "b", text: "The Most Wise", isCorrect: false },
        { id: "c", text: "The Most Powerful", isCorrect: false },
        { id: "d", text: "The Most Just", isCorrect: false },
      ],
      rootLetters: "ر ح م",
      explanation:
        "Ar-Rahman is one of Allah's names meaning 'The Most Gracious' or 'The Entirely Merciful'. It refers to the vast mercy that encompasses all creation.",
    },
    {
      id: "fatihah-5",
      arabic: "الرَّحِيمِ",
      options: [
        { id: "a", text: "The Most Merciful", isCorrect: true },
        { id: "b", text: "The Most Forgiving", isCorrect: false },
        { id: "c", text: "The Most Compassionate", isCorrect: false },
        { id: "d", text: "The Most Generous", isCorrect: false },
      ],
      rootLetters: "ر ح م",
      explanation:
        "Ar-Raheem means 'The Most Merciful' and refers to the special mercy Allah bestows upon the believers. While Ar-Rahman refers to the general mercy for all creation, Ar-Raheem refers to specific mercy for the faithful.",
    },
    {
      id: "fatihah-6",
      arabic: "مَالِكِ",
      options: [
        { id: "a", text: "Master", isCorrect: true },
        { id: "b", text: "Creator", isCorrect: false },
        { id: "c", text: "Guardian", isCorrect: false },
        { id: "d", text: "Protector", isCorrect: false },
      ],
      rootLetters: "م ل ك",
      explanation:
        "Maalik means 'Master' or 'Owner'. In the context of Al-Fatihah, it refers to Allah being the absolute owner and master of the Day of Judgment.",
    },
    {
      id: "fatihah-7",
      arabic: "يَوْمِ الدِّينِ",
      options: [
        { id: "a", text: "Day of Judgment", isCorrect: true },
        { id: "b", text: "Day of Creation", isCorrect: false },
        { id: "c", text: "Day of Mercy", isCorrect: false },
        { id: "d", text: "Day of Worship", isCorrect: false },
      ],
      rootLetters: "د ي ن",
      explanation:
        "Yawm ad-Din means 'Day of Judgment' or 'Day of Recompense'. It refers to the day when all souls will be judged according to their deeds in this world.",
    },
    {
      id: "fatihah-8",
      arabic: "نَعْبُدُ",
      options: [
        { id: "a", text: "We worship", isCorrect: true },
        { id: "b", text: "We praise", isCorrect: false },
        { id: "c", text: "We obey", isCorrect: false },
        { id: "d", text: "We follow", isCorrect: false },
      ],
      rootLetters: "ع ب د",
      explanation:
        "Na'budu means 'we worship' or 'we serve'. It comes from the root 'abd' which means servant or slave, indicating complete submission to Allah.",
    },
    {
      id: "fatihah-9",
      arabic: "نَسْتَعِينُ",
      options: [
        { id: "a", text: "We seek help", isCorrect: true },
        { id: "b", text: "We seek guidance", isCorrect: false },
        { id: "c", text: "We seek forgiveness", isCorrect: false },
        { id: "d", text: "We seek protection", isCorrect: false },
      ],
      rootLetters: "ع و ن",
      explanation:
        "Nasta'een means 'we seek help' or 'we ask for assistance'. It acknowledges that all power and ability come from Allah alone.",
    },
    {
      id: "fatihah-10",
      arabic: "اهْدِنَا",
      options: [
        { id: "a", text: "Guide us", isCorrect: true },
        { id: "b", text: "Forgive us", isCorrect: false },
        { id: "c", text: "Bless us", isCorrect: false },
        { id: "d", text: "Protect us", isCorrect: false },
      ],
      rootLetters: "هـ د ي",
      explanation:
        "Ihdina means 'guide us'. It is a supplication asking Allah for guidance to the straight path of truth and righteousness.",
    },
    {
      id: "fatihah-11",
      arabic: "الصِّرَاطَ",
      options: [
        { id: "a", text: "The path", isCorrect: true },
        { id: "b", text: "The book", isCorrect: false },
        { id: "c", text: "The light", isCorrect: false },
        { id: "d", text: "The religion", isCorrect: false },
      ],
      rootLetters: "ص ر ط",
      explanation:
        "As-Siraat means 'the path' or 'the way'. In Al-Fatihah, it refers to the straight path of Islam that leads to Allah's pleasure and Paradise.",
    },
    {
      id: "fatihah-12",
      arabic: "الْمُسْتَقِيمَ",
      options: [
        { id: "a", text: "The straight", isCorrect: true },
        { id: "b", text: "The blessed", isCorrect: false },
        { id: "c", text: "The righteous", isCorrect: false },
        { id: "d", text: "The enlightened", isCorrect: false },
      ],
      rootLetters: "ق و م",
      explanation:
        "Al-Mustaqeem means 'the straight' or 'the upright'. It describes the path as being direct, without deviation, leading straight to the desired destination.",
    },
    {
      id: "fatihah-13",
      arabic: "أَنْعَمْتَ",
      options: [
        { id: "a", text: "You have bestowed favor", isCorrect: true },
        { id: "b", text: "You have created", isCorrect: false },
        { id: "c", text: "You have chosen", isCorrect: false },
        { id: "d", text: "You have guided", isCorrect: false },
      ],
      rootLetters: "ن ع م",
      explanation:
        "An'amta means 'You have bestowed favor' or 'You have blessed'. It refers to Allah's favors upon those whom He has guided to the straight path.",
    },
    {
      id: "fatihah-14",
      arabic: "الْمَغْضُوبِ",
      options: [
        { id: "a", text: "Those who earned wrath", isCorrect: true },
        { id: "b", text: "Those who are lost", isCorrect: false },
        { id: "c", text: "Those who disbelieve", isCorrect: false },
        { id: "d", text: "Those who transgress", isCorrect: false },
      ],
      rootLetters: "غ ض ب",
      explanation:
        "Al-Maghdoobi refers to 'those who earned wrath' or 'those who incurred anger'. According to many commentators, this refers to those who knew the truth but deliberately rejected it.",
    },
    {
      id: "fatihah-15",
      arabic: "الضَّالِّينَ",
      options: [
        { id: "a", text: "Those who went astray", isCorrect: true },
        { id: "b", text: "Those who disbelieve", isCorrect: false },
        { id: "c", text: "Those who are punished", isCorrect: false },
        { id: "d", text: "Those who are ignorant", isCorrect: false },
      ],
      rootLetters: "ض ل ل",
      explanation:
        "Ad-Daalleen means 'those who went astray' or 'those who are misguided'. It refers to those who deviated from the straight path due to ignorance or confusion.",
    },
  ],
}

// Al-Ikhlas Quiz Data
export const alIkhlasQuizData: SurahQuizData = {
  surahId: 112,
  surahName: "Al-Ikhlas",
  surahArabicName: "الإخلاص",
  totalVerses: 4,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Ikhlas (The Sincerity) is the 112th chapter of the Quran. Despite being one of the shortest surahs with only 4 verses, it is considered equal to one-third of the Quran in value because it establishes the concept of pure monotheism (Tawhid). This quiz will test your knowledge of the key vocabulary from this profound surah.",
  questions: [
    {
      id: "ikhlas-1",
      arabic: "قُلْ",
      options: [
        { id: "a", text: "Say", isCorrect: true },
        { id: "b", text: "Recite", isCorrect: false },
        { id: "c", text: "Proclaim", isCorrect: false },
        { id: "d", text: "Announce", isCorrect: false },
      ],
      rootLetters: "ق و ل",
      explanation:
        "Qul means 'say'. It is a command from Allah to Prophet Muhammad to declare the message that follows. This command appears frequently in the Quran.",
    },
    {
      id: "ikhlas-2",
      arabic: "هُوَ",
      options: [
        { id: "a", text: "He", isCorrect: true },
        { id: "b", text: "It", isCorrect: false },
        { id: "c", text: "Who", isCorrect: false },
        { id: "d", text: "That", isCorrect: false },
      ],
      explanation:
        "Huwa means 'He' and refers to Allah. It is a pronoun used to emphasize the personal nature of Allah, who is not an abstract concept but a conscious being.",
    },
    {
      id: "ikhlas-3",
      arabic: "اللَّهُ",
      options: [
        { id: "a", text: "Allah", isCorrect: true },
        { id: "b", text: "God", isCorrect: false },
        { id: "c", text: "The Creator", isCorrect: false },
        { id: "d", text: "The Divine", isCorrect: false },
      ],
      explanation:
        "Allah is the proper name of God in Arabic. It is not a generic term but the specific name of the One True God, the Creator and Sustainer of all that exists.",
    },
    {
      id: "ikhlas-4",
      arabic: "أَحَدٌ",
      options: [
        { id: "a", text: "One (Unique)", isCorrect: true },
        { id: "b", text: "Powerful", isCorrect: false },
        { id: "c", text: "Eternal", isCorrect: false },
        { id: "d", text: "Supreme", isCorrect: false },
      ],
      rootLetters: "أ ح د",
      explanation:
        "Ahad means 'One' but not merely in a numerical sense. It signifies absolute oneness and uniqueness, with no partners, parts, or comparable entities.",
    },
    {
      id: "ikhlas-5",
      arabic: "الصَّمَدُ",
      options: [
        { id: "a", text: "The Eternal Refuge", isCorrect: true },
        { id: "b", text: "The Creator", isCorrect: false },
        { id: "c", text: "The All-Knowing", isCorrect: false },
        { id: "d", text: "The Merciful", isCorrect: false },
      ],
      rootLetters: "ص م د",
      explanation:
        "As-Samad means 'The Eternal Refuge' or 'The Self-Sufficient'. It refers to the one upon whom all depend for their needs while He depends on no one.",
    },
    {
      id: "ikhlas-6",
      arabic: "لَمْ يَلِدْ",
      options: [
        { id: "a", text: "He begets not", isCorrect: true },
        { id: "b", text: "He creates not", isCorrect: false },
        { id: "c", text: "He speaks not", isCorrect: false },
        { id: "d", text: "He forgives not", isCorrect: false },
      ],
      rootLetters: "و ل د",
      explanation:
        "Lam yalid means 'He begets not' or 'He has not given birth'. This negates the concept that Allah has offspring or children, refuting beliefs that attribute sons or daughters to God.",
    },
    {
      id: "ikhlas-7",
      arabic: "وَلَمْ يُولَدْ",
      options: [
        { id: "a", text: "Nor is He begotten", isCorrect: true },
        { id: "b", text: "Nor is He created", isCorrect: false },
        { id: "c", text: "Nor does He die", isCorrect: false },
        { id: "d", text: "Nor does He sleep", isCorrect: false },
      ],
      rootLetters: "و ل د",
      explanation:
        "Wa lam yoolad means 'nor is He begotten' or 'nor was He born'. This negates the idea that Allah came into existence at some point or was created by something else.",
    },
    {
      id: "ikhlas-8",
      arabic: "وَلَمْ يَكُن",
      options: [
        { id: "a", text: "And there is not", isCorrect: true },
        { id: "b", text: "And He does not", isCorrect: false },
        { id: "c", text: "And He will not", isCorrect: false },
        { id: "d", text: "And He cannot", isCorrect: false },
      ],
      rootLetters: "ك و ن",
      explanation:
        "Wa lam yakun means 'and there is not' or 'and there has never been'. It introduces the final statement of the surah, emphasizing that nothing compares to Allah.",
    },
    {
      id: "ikhlas-9",
      arabic: "كُفُوًا",
      options: [
        { id: "a", text: "Equivalent", isCorrect: true },
        { id: "b", text: "Helper", isCorrect: false },
        { id: "c", text: "Partner", isCorrect: false },
        { id: "d", text: "Rival", isCorrect: false },
      ],
      rootLetters: "ك ف أ",
      explanation:
        "Kufuwan means 'equivalent' or 'comparable'. It refers to something that is equal or similar to another in rank, status, or attributes.",
    },
    {
      id: "ikhlas-10",
      arabic: "أَحَدٌ (second occurrence)",
      options: [
        { id: "a", text: "Anyone", isCorrect: true },
        { id: "b", text: "Anything", isCorrect: false },
        { id: "c", text: "Someone", isCorrect: false },
        { id: "d", text: "Something", isCorrect: false },
      ],
      rootLetters: "أ ح د",
      explanation:
        "Ahad in this context means 'anyone' or 'any being'. The phrase 'lam yakun lahu kufuwan ahad' means 'there is none comparable to Him', emphasizing Allah's absolute uniqueness.",
    },
  ],
}

// Add more surah quiz data here for other Phase 1 surahs
