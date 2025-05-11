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

// Al-Falaq Quiz Data
export const alFalaqQuizData: SurahQuizData = {
  surahId: 113,
  surahName: "Al-Falaq",
  surahArabicName: "الفلق",
  totalVerses: 5,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Falaq (The Daybreak) is the 113th chapter of the Quran and one of the two 'Mu'awwidhatayn' (the two surahs of seeking refuge). This surah teaches believers to seek Allah's protection from various forms of evil. This quiz will test your knowledge of the key vocabulary from this protective surah.",
  questions: [
    {
      id: "falaq-1",
      arabic: "قُلْ",
      options: [
        { id: "a", text: "Say", isCorrect: true },
        { id: "b", text: "Recite", isCorrect: false },
        { id: "c", text: "Proclaim", isCorrect: false },
        { id: "d", text: "Announce", isCorrect: false },
      ],
      rootLetters: "ق و ل",
      explanation:
        "Qul means 'say'. It is a command from Allah to Prophet Muhammad to declare the message that follows. This command appears frequently in the Quran, especially at the beginning of surahs.",
    },
    {
      id: "falaq-2",
      arabic: "أَعُوذُ",
      options: [
        { id: "a", text: "I seek refuge", isCorrect: true },
        { id: "b", text: "I believe", isCorrect: false },
        { id: "c", text: "I worship", isCorrect: false },
        { id: "d", text: "I praise", isCorrect: false },
      ],
      rootLetters: "ع و ذ",
      explanation:
        "A'udhu means 'I seek refuge' or 'I seek protection'. It is used when a person seeks protection with Allah from something harmful or evil.",
    },
    {
      id: "falaq-3",
      arabic: "بِرَبِّ",
      options: [
        { id: "a", text: "With the Lord", isCorrect: true },
        { id: "b", text: "In the name", isCorrect: false },
        { id: "c", text: "By the power", isCorrect: false },
        { id: "d", text: "Through the mercy", isCorrect: false },
      ],
      rootLetters: "ر ب ب",
      explanation:
        "Bi-Rabbi means 'with the Lord' or 'in the Lord'. The preposition 'bi' indicates seeking protection with or through someone, in this case, the Lord (Rabb).",
    },
    {
      id: "falaq-4",
      arabic: "الْفَلَقِ",
      options: [
        { id: "a", text: "The daybreak", isCorrect: true },
        { id: "b", text: "The night", isCorrect: false },
        { id: "c", text: "The sun", isCorrect: false },
        { id: "d", text: "The moon", isCorrect: false },
      ],
      rootLetters: "ف ل ق",
      explanation:
        "Al-Falaq means 'the daybreak' or 'the dawn'. It refers to the breaking of darkness by the light of dawn, symbolizing hope and relief after difficulty.",
    },
    {
      id: "falaq-5",
      arabic: "شَرِّ",
      options: [
        { id: "a", text: "Evil", isCorrect: true },
        { id: "b", text: "Darkness", isCorrect: false },
        { id: "c", text: "Harm", isCorrect: false },
        { id: "d", text: "Danger", isCorrect: false },
      ],
      rootLetters: "ش ر ر",
      explanation:
        "Sharri means 'evil' or 'the evil of'. It refers to anything that causes harm, pain, or distress, whether physical, mental, or spiritual.",
    },
    {
      id: "falaq-6",
      arabic: "مَا خَلَقَ",
      options: [
        { id: "a", text: "What He has created", isCorrect: true },
        { id: "b", text: "What exists", isCorrect: false },
        { id: "c", text: "What appears", isCorrect: false },
        { id: "d", text: "What emerges", isCorrect: false },
      ],
      rootLetters: "خ ل ق",
      explanation:
        "Ma khalaqa means 'what He has created'. This phrase refers to seeking protection from the evil of all created things, acknowledging that some creation may contain harm.",
    },
    {
      id: "falaq-7",
      arabic: "غَاسِقٍ",
      options: [
        { id: "a", text: "Darkness", isCorrect: true },
        { id: "b", text: "Moon", isCorrect: false },
        { id: "c", text: "Night", isCorrect: false },
        { id: "d", text: "Shadow", isCorrect: false },
      ],
      rootLetters: "غ س ق",
      explanation:
        "Ghasiq refers to 'darkness' or 'that which is dark'. Some interpretations specifically relate it to the night when its darkness intensifies, a time when many harmful things become active.",
    },
    {
      id: "falaq-8",
      arabic: "إِذَا وَقَبَ",
      options: [
        { id: "a", text: "When it settles", isCorrect: true },
        { id: "b", text: "When it rises", isCorrect: false },
        { id: "c", text: "When it shines", isCorrect: false },
        { id: "d", text: "When it appears", isCorrect: false },
      ],
      rootLetters: "و ق ب",
      explanation:
        "Idha waqaba means 'when it settles' or 'when it intensifies'. It refers to the time when darkness completely envelops everything, often associated with the middle of the night.",
    },
    {
      id: "falaq-9",
      arabic: "النَّفَّاثَاتِ",
      options: [
        { id: "a", text: "Those who blow", isCorrect: true },
        { id: "b", text: "Those who speak", isCorrect: false },
        { id: "c", text: "Those who write", isCorrect: false },
        { id: "d", text: "Those who cast", isCorrect: false },
      ],
      rootLetters: "ن ف ث",
      explanation:
        "An-Naffathat means 'those who blow'. In context, it refers to those who practice witchcraft by blowing on knots as part of their spells or incantations.",
    },
    {
      id: "falaq-10",
      arabic: "فِي الْعُقَدِ",
      options: [
        { id: "a", text: "In the knots", isCorrect: true },
        { id: "b", text: "In the hearts", isCorrect: false },
        { id: "c", text: "In the minds", isCorrect: false },
        { id: "d", text: "In the words", isCorrect: false },
      ],
      rootLetters: "ع ق د",
      explanation:
        "Fil-'uqad means 'in the knots'. This refers to a practice of witchcraft where spells were cast by blowing on knotted strings or threads, a common form of sorcery in ancient times.",
    },
    {
      id: "falaq-11",
      arabic: "حَاسِدٍ",
      options: [
        { id: "a", text: "Envier", isCorrect: true },
        { id: "b", text: "Enemy", isCorrect: false },
        { id: "c", text: "Oppressor", isCorrect: false },
        { id: "d", text: "Deceiver", isCorrect: false },
      ],
      rootLetters: "ح س د",
      explanation:
        "Hasid means 'envier' or 'one who is envious'. It refers to a person who wishes that others lose their blessings or advantages.",
    },
    {
      id: "falaq-12",
      arabic: "إِذَا حَسَدَ",
      options: [
        { id: "a", text: "When he envies", isCorrect: true },
        { id: "b", text: "When he hates", isCorrect: false },
        { id: "c", text: "When he attacks", isCorrect: false },
        { id: "d", text: "When he plots", isCorrect: false },
      ],
      rootLetters: "ح س د",
      explanation:
        "Idha hasad means 'when he envies'. This phrase specifies that the harm from an envier comes specifically when they act upon their envy, potentially through the 'evil eye' or other harmful actions.",
    },
  ],
}

// An-Nas Quiz Data
export const alNasQuizData: SurahQuizData = {
  surahId: 114,
  surahName: "An-Nas",
  surahArabicName: "الناس",
  totalVerses: 6,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah An-Nas (Mankind) is the 114th and final chapter of the Quran. Along with Surah Al-Falaq, it forms the 'Mu'awwidhatayn' (the two surahs of seeking refuge). This surah teaches believers to seek Allah's protection specifically from the whispers of Satan. This quiz will test your knowledge of the key vocabulary from this protective surah.",
  questions: [
    {
      id: "nas-1",
      arabic: "قُلْ",
      options: [
        { id: "a", text: "Say", isCorrect: true },
        { id: "b", text: "Recite", isCorrect: false },
        { id: "c", text: "Proclaim", isCorrect: false },
        { id: "d", text: "Announce", isCorrect: false },
      ],
      rootLetters: "ق و ل",
      explanation:
        "Qul means 'say'. It is a command from Allah to Prophet Muhammad to declare the message that follows. This command appears frequently in the Quran, especially at the beginning of surahs.",
    },
    {
      id: "nas-2",
      arabic: "أَعُوذُ",
      options: [
        { id: "a", text: "I seek refuge", isCorrect: true },
        { id: "b", text: "I believe", isCorrect: false },
        { id: "c", text: "I worship", isCorrect: false },
        { id: "d", text: "I praise", isCorrect: false },
      ],
      rootLetters: "ع و ذ",
      explanation:
        "A'udhu means 'I seek refuge' or 'I seek protection'. It is used when a person seeks protection with Allah from something harmful or evil.",
    },
    {
      id: "nas-3",
      arabic: "بِرَبِّ",
      options: [
        { id: "a", text: "With the Lord", isCorrect: true },
        { id: "b", text: "In the name", isCorrect: false },
        { id: "c", text: "By the power", isCorrect: false },
        { id: "d", text: "Through the mercy", isCorrect: false },
      ],
      rootLetters: "ر ب ب",
      explanation:
        "Bi-Rabbi means 'with the Lord' or 'in the Lord'. The preposition 'bi' indicates seeking protection with or through someone, in this case, the Lord (Rabb).",
    },
    {
      id: "nas-4",
      arabic: "النَّاسِ",
      options: [
        { id: "a", text: "Mankind", isCorrect: true },
        { id: "b", text: "People", isCorrect: false },
        { id: "c", text: "Humanity", isCorrect: false },
        { id: "d", text: "Humans", isCorrect: false },
      ],
      rootLetters: "ن و س",
      explanation:
        "An-Nas means 'mankind' or 'humanity'. It refers to all human beings collectively. In this surah, the word is repeated several times with different attributes of Allah in relation to mankind.",
    },
    {
      id: "nas-5",
      arabic: "مَلِكِ",
      options: [
        { id: "a", text: "The King", isCorrect: true },
        { id: "b", text: "The Master", isCorrect: false },
        { id: "c", text: "The Ruler", isCorrect: false },
        { id: "d", text: "The Owner", isCorrect: false },
      ],
      rootLetters: "م ل ك",
      explanation:
        "Malik means 'King' or 'Sovereign'. It refers to Allah as the absolute ruler and authority over mankind, emphasizing His power and control.",
    },
    {
      id: "nas-6",
      arabic: "إِلَٰهِ",
      options: [
        { id: "a", text: "The God", isCorrect: true },
        { id: "b", text: "The Creator", isCorrect: false },
        { id: "c", text: "The Deity", isCorrect: false },
        { id: "d", text: "The Divine", isCorrect: false },
      ],
      rootLetters: "أ ل هـ",
      explanation:
        "Ilah means 'God' or 'deity'. In this context, it refers to Allah as the only true God of mankind, the only one worthy of worship and devotion.",
    },
    {
      id: "nas-7",
      arabic: "شَرِّ",
      options: [
        { id: "a", text: "Evil", isCorrect: true },
        { id: "b", text: "Harm", isCorrect: false },
        { id: "c", text: "Danger", isCorrect: false },
        { id: "d", text: "Wickedness", isCorrect: false },
      ],
      rootLetters: "ش ر ر",
      explanation:
        "Sharri means 'evil' or 'the evil of'. It refers to anything that causes harm, pain, or distress, whether physical, mental, or spiritual.",
    },
    {
      id: "nas-8",
      arabic: "الْوَسْوَاسِ",
      options: [
        { id: "a", text: "The whisperer", isCorrect: true },
        { id: "b", text: "The tempter", isCorrect: false },
        { id: "c", text: "The deceiver", isCorrect: false },
        { id: "d", text: "The troublemaker", isCorrect: false },
      ],
      rootLetters: "و س و س",
      explanation:
        "Al-Waswas means 'the whisperer'. It refers to Satan who whispers evil suggestions into the hearts of people, trying to lead them astray from the right path.",
    },
    {
      id: "nas-9",
      arabic: "الْخَنَّاسِ",
      options: [
        { id: "a", text: "Who withdraws", isCorrect: true },
        { id: "b", text: "Who hides", isCorrect: false },
        { id: "c", text: "Who returns", isCorrect: false },
        { id: "d", text: "Who attacks", isCorrect: false },
      ],
      rootLetters: "خ ن س",
      explanation:
        "Al-Khannas means 'who withdraws' or 'who recedes'. It describes how Satan retreats and hides when a person remembers Allah, only to return when the person is heedless.",
    },
    {
      id: "nas-10",
      arabic: "يُوَسْوِسُ",
      options: [
        { id: "a", text: "Who whispers", isCorrect: true },
        { id: "b", text: "Who speaks", isCorrect: false },
        { id: "c", text: "Who suggests", isCorrect: false },
        { id: "d", text: "Who tempts", isCorrect: false },
      ],
      rootLetters: "و س و س",
      explanation:
        "Yuwaswisu means 'who whispers'. This is the verb form describing the action of Satan, who quietly suggests evil thoughts and temptations to humans.",
    },
    {
      id: "nas-11",
      arabic: "صُدُورِ",
      options: [
        { id: "a", text: "Chests (hearts)", isCorrect: true },
        { id: "b", text: "Minds", isCorrect: false },
        { id: "c", text: "Thoughts", isCorrect: false },
        { id: "d", text: "Souls", isCorrect: false },
      ],
      rootLetters: "ص د ر",
      explanation:
        "Sudur means 'chests' but refers to the hearts or inner selves of people. This indicates that Satan's whispers affect the innermost thoughts and feelings of humans.",
    },
    {
      id: "nas-12",
      arabic: "الْجِنَّةِ",
      options: [
        { id: "a", text: "Jinn", isCorrect: true },
        { id: "b", text: "Spirits", isCorrect: false },
        { id: "c", text: "Demons", isCorrect: false },
        { id: "d", text: "Angels", isCorrect: false },
      ],
      rootLetters: "ج ن ن",
      explanation:
        "Al-Jinnah means 'the jinn'. Jinn are beings created from smokeless fire, invisible to humans under normal circumstances. The surah mentions that whisperers can be from both jinn and mankind.",
    },
  ],
}

// Add more surah quiz data here for other Phase 1 surahs
