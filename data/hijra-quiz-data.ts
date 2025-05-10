export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: "easy" | "medium" | "hard"
  category: "locations" | "events" | "timeline" | "quranic" | "people"
}

export const hijraQuizQuestions: QuizQuestion[] = [
  // Location Questions
  {
    id: "loc1",
    question: "Which mountain contained the cave where Prophet Muhammad ﷺ and Abu Bakr hid for three days?",
    options: ["Mount Uhud", "Mount Thawr", "Mount Hira", "Mount Safa"],
    correctAnswer: 1,
    explanation:
      "The Cave of Thawr on Mount Thawr is where the Prophet ﷺ and Abu Bakr hid for three days to evade the Quraysh who were searching for them.",
    difficulty: "easy",
    category: "locations",
  },
  {
    id: "loc2",
    question: "What was the name of the first mosque built in Islamic history during the Hijra journey?",
    options: ["Masjid al-Haram", "Masjid an-Nabawi", "Masjid al-Quba", "Masjid al-Qiblatayn"],
    correctAnswer: 2,
    explanation:
      "Masjid al-Quba was the first mosque built in Islamic history. The Prophet ﷺ established it upon arriving at Quba, a village on the outskirts of Medina.",
    difficulty: "easy",
    category: "locations",
  },
  {
    id: "loc3",
    question: "Which route did Prophet Muhammad ﷺ take to avoid the Quraysh search parties?",
    options: ["The northern route", "The direct route", "The southern route", "The coastal route"],
    correctAnswer: 3,
    explanation:
      "The Prophet ﷺ and Abu Bakr took the unusual coastal route to Medina instead of the direct northern route to avoid the Quraysh search parties.",
    difficulty: "medium",
    category: "locations",
  },
  {
    id: "loc4",
    question: "In which valley did Al-Zubayr ibn al-Awwam meet the Prophet ﷺ and present white garments to him?",
    options: ["Valley of Ranuna", "Valley of Mina", "Valley of Arafat", "Valley of Muzdalifah"],
    correctAnswer: 0,
    explanation:
      "In the Valley of Ranuna, the Prophet ﷺ and Abu Bakr met Al-Zubayr ibn al-Awwam who presented white garments to them for their entry into Medina.",
    difficulty: "hard",
    category: "locations",
  },

  // Event Questions
  {
    id: "evt1",
    question: "Who slept in the Prophet's bed on the night of his departure from Mecca?",
    options: ["Abu Bakr", "Umar ibn al-Khattab", "Ali ibn Abi Talib", "Uthman ibn Affan"],
    correctAnswer: 2,
    explanation:
      "Ali ibn Abi Talib volunteered to sleep in the Prophet's bed to deceive the assassins, allowing the Prophet ﷺ to leave Mecca safely.",
    difficulty: "easy",
    category: "events",
  },
  {
    id: "evt2",
    question: "What miracle occurred at the tent of Umm Ma'bad during the Hijra journey?",
    options: [
      "Water flowed from the Prophet's fingers",
      "A dry sheep produced abundant milk",
      "Food multiplied to feed many people",
      "A tree bent down to provide shade",
    ],
    correctAnswer: 1,
    explanation:
      "Despite Umm Ma'bad having no milk to offer, the Prophet ﷺ touched an old, dry sheep which then produced abundant milk, enough for everyone to drink.",
    difficulty: "medium",
    category: "events",
  },
  {
    id: "evt3",
    question: "What did the Quraysh do when they discovered the Prophet ﷺ had left Mecca?",
    options: [
      "They celebrated his departure",
      "They offered a reward for his capture",
      "They sent a peace delegation",
      "They immediately attacked Medina",
    ],
    correctAnswer: 1,
    explanation:
      "The Quraysh offered a reward of 100 camels for the capture of the Prophet ﷺ, dead or alive, which motivated people like Suraqa ibn Malik to pursue him.",
    difficulty: "medium",
    category: "events",
  },
  {
    id: "evt4",
    question: "What was one of the first major actions the Prophet ﷺ took upon arriving in Medina?",
    options: ["Building a fortress", "Establishing a market", "Building Masjid an-Nabawi", "Organizing an army"],
    correctAnswer: 2,
    explanation:
      "One of the first actions in Medina was to purchase land and build Masjid an-Nabawi (the Prophet's Mosque) that would serve as a place of worship, community center, and administrative headquarters.",
    difficulty: "easy",
    category: "events",
  },

  // Timeline Questions
  {
    id: "time1",
    question: "In which year of the Islamic calendar did the Hijra take place?",
    options: ["1 AH", "5 AH", "10 AH", "13 AH"],
    correctAnswer: 0,
    explanation:
      "The Hijra took place in the year 1 AH (After Hijra). In fact, this event was so significant that it became the starting point of the Islamic calendar.",
    difficulty: "easy",
    category: "timeline",
  },
  {
    id: "time2",
    question: "How many days did Prophet Muhammad ﷺ and Abu Bakr stay in the Cave of Thawr?",
    options: ["1 day", "3 days", "5 days", "7 days"],
    correctAnswer: 1,
    explanation:
      "Prophet Muhammad ﷺ and Abu Bakr stayed in the Cave of Thawr for 3 days until the search for them had subsided.",
    difficulty: "easy",
    category: "timeline",
  },
  {
    id: "time3",
    question: "Approximately how long did the entire journey from Mecca to Medina take?",
    options: ["3 days", "8 days", "14 days", "30 days"],
    correctAnswer: 1,
    explanation:
      "The journey from Mecca to Medina took approximately 8 days, not including the 3 days spent hiding in the Cave of Thawr.",
    difficulty: "medium",
    category: "timeline",
  },

  // Quranic Questions
  {
    id: "quran1",
    question: "Which surah contains the verse that directly mentions the Cave of Thawr incident?",
    options: ["Surah Al-Baqarah", "Surah Al-Anfal", "Surah At-Tawbah", "Surah Al-Isra"],
    correctAnswer: 2,
    explanation:
      'Surah At-Tawbah (9:40) directly mentions the Cave incident: "If you do not aid the Prophet - Allah has already aided him when those who disbelieved had driven him out [of Mecca] as one of two, when they were in the cave..."',
    difficulty: "medium",
    category: "quranic",
  },
  {
    id: "quran2",
    question:
      'Which Quranic verse refers to the "second of the two" (thani ithnayn), describing Abu Bakr\'s companionship with the Prophet ﷺ?',
    options: ["Surah Al-Baqarah 2:207", "Surah At-Tawbah 9:40", "Surah Al-Anfal 8:30", "Surah Al-Hashr 59:9"],
    correctAnswer: 1,
    explanation:
      'Surah At-Tawbah 9:40 refers to Abu Bakr as "the second of the two" (thani ithnayn) when they were in the cave together during the Hijra journey.',
    difficulty: "medium",
    category: "quranic",
  },
  {
    id: "quran3",
    question:
      "Which verse in the Quran refers to Allah's protection of the Prophet ﷺ from the plot of the disbelievers to kill or imprison him?",
    options: ["Surah Al-Baqarah 2:214", "Surah Al-Imran 3:110", "Surah Al-Anfal 8:30", "Surah At-Tawbah 9:20"],
    correctAnswer: 2,
    explanation:
      'Surah Al-Anfal 8:30 states: "And [remember, O Muhammad], when those who disbelieved plotted against you to restrain you or kill you or evict you [from Mecca]. But they plan, and Allah plans. And Allah is the best of planners."',
    difficulty: "hard",
    category: "quranic",
  },

  // People Questions
  {
    id: "ppl1",
    question: "Who was the guide hired by Prophet Muhammad ﷺ to lead them to Medina?",
    options: ["Zayd ibn Harithah", "Abdullah ibn Urayqit", "Suraqa ibn Malik", "Mus'ab ibn Umayr"],
    correctAnswer: 1,
    explanation:
      "Abdullah ibn Urayqit, a non-Muslim expert guide, was hired to lead the Prophet ﷺ and Abu Bakr along the less-traveled coastal route to Medina.",
    difficulty: "medium",
    category: "people",
  },
  {
    id: "ppl2",
    question: "Who was the daughter of Abu Bakr who brought food to the Cave of Thawr?",
    options: ["Aisha", "Asma", "Hafsa", "Umm Kulthum"],
    correctAnswer: 1,
    explanation:
      'Asma bint Abu Bakr brought food and water to the cave, tearing her waistband (nitaq) in two to tie the provisions, earning her the title "Dhat an-Nitaqayn" (She of the Two Waistbands).',
    difficulty: "medium",
    category: "people",
  },
  {
    id: "ppl3",
    question: "Who pursued the Prophet ﷺ during the Hijra journey but later became a Muslim?",
    options: ["Abu Sufyan", "Suraqa ibn Malik", "Khalid ibn al-Walid", "Amr ibn al-As"],
    correctAnswer: 1,
    explanation:
      "Suraqa ibn Malik pursued the Prophet ﷺ for the reward offered by the Quraysh. After his horse's hooves kept sinking into the sand, he asked for forgiveness and later became a Muslim.",
    difficulty: "medium",
    category: "people",
  },
  {
    id: "ppl4",
    question: "Which companion did the Prophet ﷺ establish as a brother to Ali ibn Abi Talib in Medina?",
    options: ["Salman al-Farsi", "Bilal ibn Rabah", "Sahl ibn Hunaif", "Mus'ab ibn Umayr"],
    correctAnswer: 2,
    explanation:
      "The Prophet ﷺ established brotherhood between Ali ibn Abi Talib and Sahl ibn Hunaif as part of the system of brotherhood between the Muhajirun (emigrants) and Ansar (helpers).",
    difficulty: "hard",
    category: "people",
  },

  // Additional Questions
  {
    id: "add1",
    question:
      "What was the name of the document that Prophet Muhammad ﷺ drafted to establish rights and responsibilities in Medina?",
    options: ["Treaty of Hudaybiyyah", "Constitution of Medina", "Pledge of Aqaba", "Covenant of Umar"],
    correctAnswer: 1,
    explanation:
      "The Constitution of Medina (Sahifat al-Madinah) was a formal agreement between all the tribes and religious communities of Medina, establishing rights, responsibilities, and a framework for governance.",
    difficulty: "medium",
    category: "events",
  },
  {
    id: "add2",
    question:
      "What miracle is said to have occurred at the entrance of the Cave of Thawr to conceal the Prophet ﷺ and Abu Bakr?",
    options: [
      "A rock sealed the entrance",
      "A spider web and doves' nest appeared",
      "The cave entrance became invisible",
      "A tree grew to cover the entrance",
    ],
    correctAnswer: 1,
    explanation:
      "According to tradition, Allah sent a spider to weave a web across the entrance and a pair of doves to build a nest, making it appear that no one had entered recently.",
    difficulty: "easy",
    category: "events",
  },
  {
    id: "add3",
    question: "What did the people of Medina sing when the Prophet ﷺ arrived?",
    options: ["Allahu Akbar", "Tala'al Badru Alayna", "Labbayk Allahumma Labbayk", "La ilaha illallah"],
    correctAnswer: 1,
    explanation:
      'The people of Medina greeted the Prophet ﷺ by singing "Tala\'al Badru Alayna" (The Full Moon Has Risen Upon Us), a nasheed that is still popular today.',
    difficulty: "medium",
    category: "events",
  },
]

// Helper function to get questions by category
export function getQuestionsByCategory(category: string): QuizQuestion[] {
  return hijraQuizQuestions.filter((q) => q.category === category)
}

// Helper function to get questions by difficulty
export function getQuestionsByDifficulty(difficulty: string): QuizQuestion[] {
  return hijraQuizQuestions.filter((q) => q.difficulty === difficulty)
}

// Helper function to get a random set of questions
export function getRandomQuestions(count = 10): QuizQuestion[] {
  const shuffled = [...hijraQuizQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}
