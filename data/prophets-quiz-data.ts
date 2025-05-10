export interface ProphetQuizQuestion {
  id: number
  question: string
  options: { id: string; text: string }[]
  correctAnswer: string
  explanation: string
  difficulty: "beginner" | "intermediate" | "advanced"
  prophet: string
  category: "identity" | "story" | "teachings" | "miracles" | "quranic-references" | "legacy"
}

export const prophetQuizQuestions: ProphetQuizQuestion[] = [
  // Adam (عليه السلام)
  {
    id: 1,
    question: "Who was the first prophet created by Allah?",
    options: [
      { id: "a", text: "Ibrahim (Abraham)" },
      { id: "b", text: "Nuh (Noah)" },
      { id: "c", text: "Adam" },
      { id: "d", text: "Muhammad" },
    ],
    correctAnswer: "c",
    explanation: "Adam (عليه السلام) was the first human and first prophet created by Allah.",
    difficulty: "beginner",
    prophet: "Adam",
    category: "identity",
  },
  {
    id: 2,
    question: "What did Allah teach Adam that amazed the angels?",
    options: [
      { id: "a", text: "How to build a house" },
      { id: "b", text: "The names of all things" },
      { id: "c", text: "How to make fire" },
      { id: "d", text: "How to grow crops" },
    ],
    correctAnswer: "b",
    explanation:
      "Allah taught Adam (عليه السلام) the names of all things, knowledge that even the angels did not possess. This is mentioned in Surah Al-Baqarah (2:31-33).",
    difficulty: "intermediate",
    prophet: "Adam",
    category: "story",
  },
  {
    id: 3,
    question: "Which tree did Allah forbid Adam and Hawwa (Eve) from approaching in Paradise?",
    options: [
      { id: "a", text: "The Tree of Eternity" },
      { id: "b", text: "The Forbidden Tree" },
      { id: "c", text: "The Tree of Knowledge" },
      { id: "d", text: "The Quran does not specify the type of tree" },
    ],
    correctAnswer: "d",
    explanation:
      "The Quran does not specify what type of tree it was, only referring to it as 'this tree' (هذه الشجرة). It is described in Surah Al-Baqarah (2:35) and Surah Al-A'raf (7:19).",
    difficulty: "advanced",
    prophet: "Adam",
    category: "quranic-references",
  },

  // Idris (عليه السلام)
  {
    id: 4,
    question: "Prophet Idris (عليه السلام) is mentioned how many times in the Quran?",
    options: [
      { id: "a", text: "Once" },
      { id: "b", text: "Twice" },
      { id: "c", text: "Three times" },
      { id: "d", text: "Five times" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Idris (عليه السلام) is mentioned twice in the Quran: in Surah Maryam (19:56-57) and Surah Al-Anbiya (21:85).",
    difficulty: "intermediate",
    prophet: "Idris",
    category: "quranic-references",
  },
  {
    id: 5,
    question: "What special honor did Allah bestow upon Prophet Idris?",
    options: [
      { id: "a", text: "He was given the ability to speak to animals" },
      { id: "b", text: "He was raised to a high station" },
      { id: "c", text: "He was given a special book" },
      { id: "d", text: "He lived for a thousand years" },
    ],
    correctAnswer: "b",
    explanation:
      "Allah says in the Quran that He raised Idris (عليه السلام) to a high station (مَكَانًا عَلِيًّا). This is mentioned in Surah Maryam (19:57).",
    difficulty: "intermediate",
    prophet: "Idris",
    category: "story",
  },

  // Nuh (عليه السلام)
  {
    id: 6,
    question: "How long did Prophet Nuh (Noah) preach to his people before the flood?",
    options: [
      { id: "a", text: "100 years" },
      { id: "b", text: "500 years" },
      { id: "c", text: "950 years" },
      { id: "d", text: "1,000 years" },
    ],
    correctAnswer: "c",
    explanation:
      "According to the Quran, Prophet Nuh (عليه السلام) remained among his people for 950 years calling them to Allah. This is mentioned in Surah Al-Ankabut (29:14).",
    difficulty: "beginner",
    prophet: "Nuh",
    category: "story",
  },
  {
    id: 7,
    question: "What was the name of Prophet Nuh's son who refused to board the Ark?",
    options: [
      { id: "a", text: "Yam" },
      { id: "b", text: "Kan'an" },
      { id: "c", text: "Ham" },
      { id: "d", text: "Shem" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Nuh's son who refused to board the Ark is referred to in some tafsir as Kan'an (or Canaan). The Quran does not mention his name explicitly but describes the conversation between Nuh and his son in Surah Hud (11:42-43).",
    difficulty: "intermediate",
    prophet: "Nuh",
    category: "story",
  },
  {
    id: 8,
    question: "Which surah in the Quran is named after Prophet Nuh?",
    options: [
      { id: "a", text: "Surah 69" },
      { id: "b", text: "Surah 71" },
      { id: "c", text: "Surah 76" },
      { id: "d", text: "Surah 87" },
    ],
    correctAnswer: "b",
    explanation:
      "Surah 71 of the Quran is named Surah Nuh, dedicated to the story of Prophet Nuh (عليه السلام) and his mission.",
    difficulty: "beginner",
    prophet: "Nuh",
    category: "quranic-references",
  },

  // Hud (عليه السلام)
  {
    id: 9,
    question: "To which people was Prophet Hud sent?",
    options: [
      { id: "a", text: "People of Thamud" },
      { id: "b", text: "People of 'Ad" },
      { id: "c", text: "People of Madyan" },
      { id: "d", text: "People of Lut" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Hud (عليه السلام) was sent to the people of 'Ad, who lived in the southern Arabian Peninsula. This is mentioned in several places in the Quran, including Surah Hud (11:50).",
    difficulty: "beginner",
    prophet: "Hud",
    category: "identity",
  },
  {
    id: 10,
    question: "How were the people of 'Ad punished for rejecting Prophet Hud?",
    options: [
      { id: "a", text: "A great flood" },
      { id: "b", text: "A mighty earthquake" },
      { id: "c", text: "A furious and destructive wind" },
      { id: "d", text: "A shower of stones" },
    ],
    correctAnswer: "c",
    explanation:
      "The people of 'Ad were punished with a furious and destructive wind (ريح صرصر عاتية) that continued for seven nights and eight days. This is mentioned in Surah Al-Haqqah (69:6-7) and Surah Fussilat (41:16).",
    difficulty: "intermediate",
    prophet: "Hud",
    category: "story",
  },

  // Salih (عليه السلام)
  {
    id: 11,
    question: "What miracle did Allah give to Prophet Salih as a sign for his people?",
    options: [
      { id: "a", text: "A staff that turned into a snake" },
      { id: "b", text: "A she-camel that emerged from a rock" },
      { id: "c", text: "The ability to understand the language of birds" },
      { id: "d", text: "Control over the wind" },
    ],
    correctAnswer: "b",
    explanation:
      "Allah gave Prophet Salih (عليه السلام) the miracle of a she-camel that emerged from a rock as a sign for the people of Thamud. This is mentioned in Surah Al-A'raf (7:73) and other places in the Quran.",
    difficulty: "beginner",
    prophet: "Salih",
    category: "miracles",
  },
  {
    id: 12,
    question: "What did the people of Thamud do to the she-camel that led to their punishment?",
    options: [
      { id: "a", text: "They refused to let it drink" },
      { id: "b", text: "They hamstrung and killed it" },
      { id: "c", text: "They used it for labor against Salih's instructions" },
      { id: "d", text: "They sold it to another tribe" },
    ],
    correctAnswer: "b",
    explanation:
      "The people of Thamud hamstrung and killed the she-camel in defiance of Prophet Salih's warning. This is mentioned in Surah Al-A'raf (7:77), Surah Hud (11:65), and Surah Ash-Shams (91:14).",
    difficulty: "intermediate",
    prophet: "Salih",
    category: "story",
  },

  // Ibrahim (عليه السلام)
  {
    id: 13,
    question: "What special title is given to Prophet Ibrahim in the Quran?",
    options: [
      { id: "a", text: "Habibullah (Beloved of Allah)" },
      { id: "b", text: "Khalilullah (Friend of Allah)" },
      { id: "c", text: "Safiullah (Pure of Allah)" },
      { id: "d", text: "Najiyullah (Saved by Allah)" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Ibrahim (عليه السلام) is given the title Khalilullah (Friend of Allah) in the Quran. Allah says in Surah An-Nisa (4:125): 'And Allah took Ibrahim as a Khalil (friend)'.",
    difficulty: "beginner",
    prophet: "Ibrahim",
    category: "identity",
  },
  {
    id: 14,
    question: "What did Prophet Ibrahim do to the idols when his people were away?",
    options: [
      { id: "a", text: "He hid them" },
      { id: "b", text: "He sold them" },
      { id: "c", text: "He broke them except for the largest one" },
      { id: "d", text: "He painted over them" },
    ],
    correctAnswer: "c",
    explanation:
      "Prophet Ibrahim (عليه السلام) broke all the idols except for the largest one, so that people might turn to it and realize it could not defend itself or the other idols. This story is mentioned in Surah Al-Anbiya (21:57-58).",
    difficulty: "beginner",
    prophet: "Ibrahim",
    category: "story",
  },
  {
    id: 15,
    question: "What miracle did Allah perform when Ibrahim was thrown into the fire?",
    options: [
      { id: "a", text: "He was transported to a different place" },
      { id: "b", text: "The fire was extinguished by rain" },
      { id: "c", text: "The fire was made cool and safe for him" },
      { id: "d", text: "Angels formed a shield around him" },
    ],
    correctAnswer: "c",
    explanation:
      "When Prophet Ibrahim (عليه السلام) was thrown into the fire, Allah commanded: 'O fire, be cool and safe for Ibrahim.' This miracle is mentioned in Surah Al-Anbiya (21:69).",
    difficulty: "beginner",
    prophet: "Ibrahim",
    category: "miracles",
  },
  {
    id: 16,
    question: "Which structure did Prophet Ibrahim and his son Ismail raise in Makkah?",
    options: [
      { id: "a", text: "The Black Stone" },
      { id: "b", text: "The Well of Zamzam" },
      { id: "c", text: "The Foundations of the Kaaba" },
      { id: "d", text: "The Maqam Ibrahim" },
    ],
    correctAnswer: "c",
    explanation:
      "Prophet Ibrahim and his son Ismail (عليهما السلام) raised the foundations of the Kaaba in Makkah. This is mentioned in Surah Al-Baqarah (2:127): 'And [mention] when Ibrahim was raising the foundations of the House and [with him] Ismail...'",
    difficulty: "beginner",
    prophet: "Ibrahim",
    category: "story",
  },

  // Lut (عليه السلام)
  {
    id: 17,
    question: "Prophet Lut was related to which other prophet?",
    options: [
      { id: "a", text: "He was the son of Nuh" },
      { id: "b", text: "He was the nephew of Ibrahim" },
      { id: "c", text: "He was the brother of Yaqub" },
      { id: "d", text: "He was the father of Yusuf" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Lut (عليه السلام) was the nephew of Prophet Ibrahim (عليه السلام). He believed in Ibrahim's message and migrated with him, as mentioned in Surah Al-Ankabut (29:26).",
    difficulty: "intermediate",
    prophet: "Lut",
    category: "identity",
  },
  {
    id: 18,
    question: "What was the main sin of the people of Lut?",
    options: [
      { id: "a", text: "Idol worship" },
      { id: "b", text: "Giving short measure in trade" },
      { id: "c", text: "Homosexual acts" },
      { id: "d", text: "Usury (interest)" },
    ],
    correctAnswer: "c",
    explanation:
      "The main sin of the people of Lut (عليه السلام) was that they approached men with desire instead of women. This is mentioned in several places in the Quran, including Surah Al-A'raf (7:80-81).",
    difficulty: "intermediate",
    prophet: "Lut",
    category: "story",
  },
  {
    id: 19,
    question: "How were the people of Lut punished?",
    options: [
      { id: "a", text: "Their city was turned upside down and stones of baked clay rained upon them" },
      { id: "b", text: "They were drowned in a flood" },
      { id: "c", text: "They were struck by a thunderbolt" },
      { id: "d", text: "They were overtaken by a sandstorm" },
    ],
    correctAnswer: "a",
    explanation:
      "The punishment of the people of Lut (عليه السلام) was that their city was turned upside down and stones of baked clay rained upon them. This is mentioned in Surah Hud (11:82) and Surah Al-Hijr (15:74).",
    difficulty: "beginner",
    prophet: "Lut",
    category: "story",
  },

  // Ismail (عليه السلام)
  {
    id: 20,
    question: "What was the relationship between Ismail and Ibrahim?",
    options: [
      { id: "a", text: "Ismail was Ibrahim's brother" },
      { id: "b", text: "Ismail was Ibrahim's nephew" },
      { id: "c", text: "Ismail was Ibrahim's son" },
      { id: "d", text: "Ismail was Ibrahim's grandson" },
    ],
    correctAnswer: "c",
    explanation:
      "Ismail (عليه السلام) was the son of Ibrahim (عليه السلام). This is mentioned in many places in the Quran, including Surah Ibrahim (14:39) and Surah Al-Baqarah (2:127).",
    difficulty: "beginner",
    prophet: "Ismail",
    category: "identity",
  },
  {
    id: 21,
    question: "What quality of Ismail is specifically praised in the Quran?",
    options: [
      { id: "a", text: "His wisdom" },
      { id: "b", text: "His truthfulness in promise" },
      { id: "c", text: "His physical strength" },
      { id: "d", text: "His eloquence" },
    ],
    correctAnswer: "b",
    explanation:
      "The Quran specifically praises Ismail (عليه السلام) for being true to his promise (صادق الوعد). This is mentioned in Surah Maryam (19:54).",
    difficulty: "intermediate",
    prophet: "Ismail",
    category: "identity",
  },
  {
    id: 22,
    question: "What did Ibrahim see in a dream that he later discussed with Ismail?",
    options: [
      { id: "a", text: "That he should leave Ismail in Makkah" },
      { id: "b", text: "That he should sacrifice Ismail" },
      { id: "c", text: "That they would rebuild the Kaaba" },
      { id: "d", text: "That Ismail would have many descendants" },
    ],
    correctAnswer: "b",
    explanation:
      "Ibrahim (عليه السلام) saw in a dream that he was sacrificing his son. He discussed this with Ismail, who showed complete submission to Allah's command. This story is mentioned in Surah As-Saffat (37:102).",
    difficulty: "beginner",
    prophet: "Ismail",
    category: "story",
  },

  // Ishaq (عليه السلام)
  {
    id: 23,
    question: "Ishaq was born to Ibrahim and his wife Sarah when they were:",
    options: [
      { id: "a", text: "Young" },
      { id: "b", text: "Middle-aged" },
      { id: "c", text: "Elderly" },
      { id: "d", text: "The Quran doesn't mention their age" },
    ],
    correctAnswer: "c",
    explanation:
      "Ishaq (عليه السلام) was born to Ibrahim and Sarah when they were elderly. Sarah was surprised at the news of his birth because she was old and barren. This is mentioned in Surah Hud (11:71-72) and Surah Adh-Dhariyat (51:29).",
    difficulty: "intermediate",
    prophet: "Ishaq",
    category: "story",
  },
  {
    id: 24,
    question: "Which two prophets are described as being given to Ibrahim as 'good news' in his old age?",
    options: [
      { id: "a", text: "Ismail and Yaqub" },
      { id: "b", text: "Ishaq and Yaqub" },
      { id: "c", text: "Ishaq and Ismail" },
      { id: "d", text: "Yusuf and Yaqub" },
    ],
    correctAnswer: "b",
    explanation:
      "Ibrahim (عليه السلام) was given the good news of Ishaq and, after him, Yaqub (عليهما السلام). This is mentioned in Surah Hud (11:71).",
    difficulty: "intermediate",
    prophet: "Ishaq",
    category: "quranic-references",
  },

  // Yaqub (عليه السلام)
  {
    id: 25,
    question: "What other name is Prophet Yaqub known by?",
    options: [
      { id: "a", text: "Israel" },
      { id: "b", text: "Imran" },
      { id: "c", text: "Idris" },
      { id: "d", text: "Ilyas" },
    ],
    correctAnswer: "a",
    explanation:
      "Prophet Yaqub (عليه السلام) is also known as Israel. The Quran refers to the Children of Israel (Bani Israel), who are the descendants of Yaqub.",
    difficulty: "intermediate",
    prophet: "Yaqub",
    category: "identity",
  },
  {
    id: 26,
    question: "What advice did Yaqub give to his sons before his death?",
    options: [
      { id: "a", text: "To accumulate wealth" },
      { id: "b", text: "To worship Allah alone" },
      { id: "c", text: "To conquer other lands" },
      { id: "d", text: "To build a monument for him" },
    ],
    correctAnswer: "b",
    explanation:
      "Before his death, Yaqub (عليه السلام) gathered his sons and asked them what they would worship after him. They affirmed they would worship the God of their fathers, Ibrahim, Ismail, and Ishaq - the One God. This is mentioned in Surah Al-Baqarah (2:133).",
    difficulty: "intermediate",
    prophet: "Yaqub",
    category: "teachings",
  },

  // Yusuf (عليه السلام)
  {
    id: 27,
    question: "Which surah of the Quran is entirely devoted to the story of Prophet Yusuf?",
    options: [
      { id: "a", text: "Surah Yunus" },
      { id: "b", text: "Surah Hud" },
      { id: "c", text: "Surah Yusuf" },
      { id: "d", text: "Surah Ibrahim" },
    ],
    correctAnswer: "c",
    explanation:
      "Surah 12 of the Quran is named Surah Yusuf and is entirely devoted to the story of Prophet Yusuf (عليه السلام).",
    difficulty: "beginner",
    prophet: "Yusuf",
    category: "quranic-references",
  },
  {
    id: 28,
    question: "What did Yusuf see in his dream that he later told his father about?",
    options: [
      { id: "a", text: "Eleven stars, the sun, and the moon prostrating to him" },
      { id: "b", text: "Seven fat cows being eaten by seven lean ones" },
      { id: "c", text: "A tree growing from a seed he planted" },
      { id: "d", text: "His brothers asking for his forgiveness" },
    ],
    correctAnswer: "a",
    explanation:
      "Yusuf (عليه السلام) saw in his dream eleven stars, the sun, and the moon prostrating to him. This is mentioned in Surah Yusuf (12:4).",
    difficulty: "beginner",
    prophet: "Yusuf",
    category: "story",
  },
  {
    id: 29,
    question: "What position did Yusuf eventually attain in Egypt?",
    options: [
      { id: "a", text: "Military commander" },
      { id: "b", text: "Religious leader" },
      { id: "c", text: "Treasurer/Minister of storehouses" },
      { id: "d", text: "Pharaoh's personal advisor" },
    ],
    correctAnswer: "c",
    explanation:
      "Yusuf (عليه السلام) became the treasurer or minister in charge of the storehouses of Egypt. He requested this position himself, saying: 'Put me in charge of the storehouses of the land; I am indeed a knowledgeable guardian.' This is mentioned in Surah Yusuf (12:55).",
    difficulty: "intermediate",
    prophet: "Yusuf",
    category: "story",
  },

  // Ayyub (عليه السلام)
  {
    id: 30,
    question: "For what quality is Prophet Ayyub especially known in the Quran?",
    options: [
      { id: "a", text: "His wisdom" },
      { id: "b", text: "His patience" },
      { id: "c", text: "His generosity" },
      { id: "d", text: "His courage" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Ayyub (عليه السلام) is especially known for his patience in the face of suffering and trials. Allah describes him in the Quran saying: 'Indeed, We found him patient, an excellent servant.' This is mentioned in Surah Sad (38:44).",
    difficulty: "beginner",
    prophet: "Ayyub",
    category: "identity",
  },
  {
    id: 31,
    question: "What did Allah command Ayyub to do to end his suffering?",
    options: [
      { id: "a", text: "Fast for forty days" },
      { id: "b", text: "Strike the ground with his foot" },
      { id: "c", text: "Pray at a specific location" },
      { id: "d", text: "Sacrifice an animal" },
    ],
    correctAnswer: "b",
    explanation:
      "Allah commanded Ayyub (عليه السلام) to strike the ground with his foot, which caused a spring of cool water to gush forth for bathing and drinking, curing his ailments. This is mentioned in Surah Sad (38:42).",
    difficulty: "intermediate",
    prophet: "Ayyub",
    category: "story",
  },

  // Shuayb (عليه السلام)
  {
    id: 32,
    question: "To which people was Prophet Shuayb sent?",
    options: [
      { id: "a", text: "People of 'Ad" },
      { id: "b", text: "People of Thamud" },
      { id: "c", text: "People of Madyan" },
      { id: "d", text: "People of Saba" },
    ],
    correctAnswer: "c",
    explanation:
      "Prophet Shuayb (عليه السلام) was sent to the people of Madyan. This is mentioned in several places in the Quran, including Surah Al-A'raf (7:85) and Surah Hud (11:84).",
    difficulty: "beginner",
    prophet: "Shuayb",
    category: "identity",
  },
  {
    id: 33,
    question: "What economic malpractice did Shuayb specifically warn his people against?",
    options: [
      { id: "a", text: "Hoarding wealth" },
      { id: "b", text: "Giving short measure and weight" },
      { id: "c", text: "Charging interest" },
      { id: "d", text: "Monopolizing trade" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Shuayb (عليه السلام) specifically warned his people against giving short measure and weight in their business dealings. He said: 'Give full measure and weight and do not deprive people of their due.' This is mentioned in Surah Al-A'raf (7:85) and Surah Hud (11:84-85).",
    difficulty: "beginner",
    prophet: "Shuayb",
    category: "teachings",
  },

  // Musa (عليه السلام)
  {
    id: 34,
    question: "What was the name of Musa's brother who assisted him in his mission?",
    options: [
      { id: "a", text: "Yusha" },
      { id: "b", text: "Harun" },
      { id: "c", text: "Qarun" },
      { id: "d", text: "Haman" },
    ],
    correctAnswer: "b",
    explanation:
      "Musa's brother who assisted him in his mission was Harun (Aaron) (عليه السلام). Musa asked Allah to appoint Harun as his helper, which Allah granted. This is mentioned in several places in the Quran, including Surah Ta-Ha (20:29-36).",
    difficulty: "beginner",
    prophet: "Musa",
    category: "identity",
  },
  {
    id: 35,
    question: "What were the two main miracles given to Musa when he confronted Pharaoh?",
    options: [
      { id: "a", text: "Parting the sea and bringing water from a rock" },
      { id: "b", text: "His staff turning into a snake and his hand becoming white without disease" },
      { id: "c", text: "Bringing down manna from heaven and creating a cloud for shade" },
      { id: "d", text: "Understanding the language of birds and controlling the wind" },
    ],
    correctAnswer: "b",
    explanation:
      "The two main miracles given to Musa (عليه السلام) when confronting Pharaoh were his staff turning into a snake and his hand becoming white (shining) without disease. These are mentioned in several places, including Surah Ta-Ha (20:17-23) and Surah Al-A'raf (7:106-108).",
    difficulty: "beginner",
    prophet: "Musa",
    category: "miracles",
  },
  {
    id: 36,
    question: "How many plagues or signs did Allah send to Pharaoh and his people through Musa?",
    options: [
      { id: "a", text: "Five" },
      { id: "b", text: "Seven" },
      { id: "c", text: "Nine" },
      { id: "d", text: "Ten" },
    ],
    correctAnswer: "c",
    explanation:
      "Allah sent nine clear signs (plagues) to Pharaoh and his people through Musa (عليه السلام). This is mentioned in Surah Al-Isra (17:101) and Surah An-Naml (27:12).",
    difficulty: "intermediate",
    prophet: "Musa",
    category: "story",
  },
  {
    id: 37,
    question: "What divine scripture was revealed to Prophet Musa?",
    options: [
      { id: "a", text: "Zabur (Psalms)" },
      { id: "b", text: "Injil (Gospel)" },
      { id: "c", text: "Tawrat (Torah)" },
      { id: "d", text: "Suhuf (Scrolls)" },
    ],
    correctAnswer: "c",
    explanation:
      "The divine scripture revealed to Prophet Musa (عليه السلام) was the Tawrat (Torah). This is mentioned in several places in the Quran, including Surah Al-Ma'idah (5:44).",
    difficulty: "beginner",
    prophet: "Musa",
    category: "identity",
  },

  // Harun (عليه السلام)
  {
    id: 38,
    question: "What special quality of Harun is mentioned in the Quran when Musa asked for his help?",
    options: [
      { id: "a", text: "His physical strength" },
      { id: "b", text: "His eloquence in speech" },
      { id: "c", text: "His knowledge of Egyptian customs" },
      { id: "d", text: "His ability to perform miracles" },
    ],
    correctAnswer: "b",
    explanation:
      "When asking Allah to appoint Harun (عليه السلام) as his helper, Musa mentioned that Harun was more eloquent in speech than him. This is mentioned in Surah Al-Qasas (28:34).",
    difficulty: "intermediate",
    prophet: "Harun",
    category: "identity",
  },
  {
    id: 39,
    question:
      "What happened when Musa returned from his meeting with Allah and found his people worshipping the golden calf?",
    options: [
      { id: "a", text: "He immediately punished those responsible" },
      { id: "b", text: "He broke the tablets and seized his brother by the head" },
      { id: "c", text: "He ordered Harun to lead them in repentance" },
      { id: "d", text: "He called upon Allah to send a punishment" },
    ],
    correctAnswer: "b",
    explanation:
      "When Musa (عليه السلام) returned and found his people worshipping the golden calf, he threw down the tablets in anger and seized his brother Harun by the head and beard, pulling him. This is mentioned in Surah Al-A'raf (7:150).",
    difficulty: "intermediate",
    prophet: "Harun",
    category: "story",
  },

  // Dhul-Kifl (عليه السلام)
  {
    id: 40,
    question: "What qualities of Dhul-Kifl are specifically mentioned in the Quran?",
    options: [
      { id: "a", text: "His wisdom and judgment" },
      { id: "b", text: "His patience and steadfastness" },
      { id: "c", text: "His generosity and kindness" },
      { id: "d", text: "His courage and strength" },
    ],
    correctAnswer: "b",
    explanation:
      "The Quran specifically mentions that Dhul-Kifl (عليه السلام) was among the patient ones. Allah says: 'And (remember) Ismail, Idris, and Dhul-Kifl, all were from among the patient.' This is mentioned in Surah Al-Anbiya (21:85).",
    difficulty: "advanced",
    prophet: "Dhul-Kifl",
    category: "identity",
  },

  // Dawud (عليه السلام)
  {
    id: 41,
    question: "What special abilities did Allah grant to Prophet Dawud?",
    options: [
      { id: "a", text: "Understanding the language of birds and softening iron" },
      { id: "b", text: "Control over the wind and ability to see the unseen" },
      { id: "c", text: "Healing the sick and raising the dead" },
      { id: "d", text: "Walking on water and multiplying food" },
    ],
    correctAnswer: "a",
    explanation:
      "Allah granted Dawud (عليه السلام) the ability to understand the language of birds and softened iron for him so he could make armor. These abilities are mentioned in Surah Saba (34:10) and Surah Al-Anbiya (21:79-80).",
    difficulty: "intermediate",
    prophet: "Dawud",
    category: "miracles",
  },
  {
    id: 42,
    question: "What divine scripture was revealed to Prophet Dawud?",
    options: [
      { id: "a", text: "Tawrat (Torah)" },
      { id: "b", text: "Zabur (Psalms)" },
      { id: "c", text: "Injil (Gospel)" },
      { id: "d", text: "Suhuf (Scrolls)" },
    ],
    correctAnswer: "b",
    explanation:
      "The divine scripture revealed to Prophet Dawud (عليه السلام) was the Zabur (Psalms). This is mentioned in Surah An-Nisa (4:163) and Surah Al-Isra (17:55).",
    difficulty: "beginner",
    prophet: "Dawud",
    category: "identity",
  },
  {
    id: 43,
    question: "What was unique about Dawud's voice when he recited the Zabur?",
    options: [
      { id: "a", text: "It could be heard for miles" },
      { id: "b", text: "It was so beautiful that birds and mountains would join him in praise" },
      { id: "c", text: "It could heal the sick" },
      { id: "d", text: "It caused his enemies to fall asleep" },
    ],
    correctAnswer: "b",
    explanation:
      "Dawud (عليه السلام) had such a beautiful voice when reciting the Zabur that the mountains and birds would join him in glorifying Allah. This is mentioned in Surah Saba (34:10) and Surah Al-Anbiya (21:79).",
    difficulty: "intermediate",
    prophet: "Dawud",
    category: "miracles",
  },

  // Sulayman (عليه السلام)
  {
    id: 44,
    question: "What unique kingdom did Allah grant to Sulayman that would not be given to anyone after him?",
    options: [
      { id: "a", text: "Control over the seas" },
      { id: "b", text: "Command over humans, jinn, birds, and animals" },
      { id: "c", text: "Knowledge of all languages" },
      { id: "d", text: "Ability to see the future" },
    ],
    correctAnswer: "b",
    explanation:
      "Allah granted Sulayman (عليه السلام) a unique kingdom where he had command over humans, jinn, birds, and animals. He prayed for a kingdom that would not be given to anyone after him, which Allah granted. This is mentioned in Surah Sad (38:35-36) and Surah An-Naml (27:16-17).",
    difficulty: "intermediate",
    prophet: "Sulayman",
    category: "miracles",
  },
  {
    id: 45,
    question: "Which animal informed Sulayman about the Queen of Sheba (Saba)?",
    options: [
      { id: "a", text: "An eagle" },
      { id: "b", text: "A hoopoe bird" },
      { id: "c", text: "An ant" },
      { id: "d", text: "A horse" },
    ],
    correctAnswer: "b",
    explanation:
      "A hoopoe bird informed Sulayman (عليه السلام) about the Queen of Sheba (Saba) and her kingdom. This story is mentioned in Surah An-Naml (27:20-28).",
    difficulty: "beginner",
    prophet: "Sulayman",
    category: "story",
  },
  {
    id: 46,
    question: "How did the jinn not realize that Sulayman had passed away?",
    options: [
      { id: "a", text: "They were away on a mission" },
      { id: "b", text: "His son pretended to be him" },
      { id: "c", text: "He remained standing, supported by his staff" },
      { id: "d", text: "His death was kept secret by his advisors" },
    ],
    correctAnswer: "c",
    explanation:
      "When Sulayman (عليه السلام) passed away, he remained standing, supported by his staff. The jinn continued their hard labor, not realizing he was dead until a creature of the earth ate away at his staff, causing him to fall. This is mentioned in Surah Saba (34:14).",
    difficulty: "intermediate",
    prophet: "Sulayman",
    category: "story",
  },

  // Ilyas (عليه السلام)
  {
    id: 47,
    question: "Which idol did Prophet Ilyas warn his people against worshipping?",
    options: [
      { id: "a", text: "Hubal" },
      { id: "b", text: "Baal" },
      { id: "c", text: "Uzza" },
      { id: "d", text: "Manat" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Ilyas (عليه السلام) warned his people against worshipping Baal, an idol. This is mentioned in Surah As-Saffat (37:125).",
    difficulty: "advanced",
    prophet: "Ilyas",
    category: "story",
  },

  // Al-Yasa (عليه السلام)
  {
    id: 48,
    question: "In the Quran, Al-Yasa is mentioned alongside which other prophet?",
    options: [
      { id: "a", text: "Yunus and Lut" },
      { id: "b", text: "Ismail and Idris" },
      { id: "c", text: "Dawud and Sulayman" },
      { id: "d", text: "Zakariya and Yahya" },
    ],
    correctAnswer: "a",
    explanation:
      "In the Quran, Al-Yasa (عليه السلام) is mentioned alongside Ismail, Yunus, and Lut. This is mentioned in Surah Al-An'am (6:86).",
    difficulty: "advanced",
    prophet: "Al-Yasa",
    category: "quranic-references",
  },

  // Yunus (عليه السلام)
  {
    id: 49,
    question: "By what other name is Prophet Yunus referred to in the Quran?",
    options: [
      { id: "a", text: "Dhul-Qarnain (The Two-Horned One)" },
      { id: "b", text: "Dhul-Kifl (The One with a Portion)" },
      { id: "c", text: "Dhun-Nun (The One of the Fish)" },
      { id: "d", text: "Dhul-Arsh (The One of the Throne)" },
    ],
    correctAnswer: "c",
    explanation:
      "Prophet Yunus (عليه السلام) is also referred to as Dhun-Nun (The One of the Fish) in the Quran. This is mentioned in Surah Al-Anbiya (21:87).",
    difficulty: "intermediate",
    prophet: "Yunus",
    category: "identity",
  },
  {
    id: 50,
    question: "What happened when Yunus left his people in anger?",
    options: [
      { id: "a", text: "He was struck by illness" },
      { id: "b", text: "He was swallowed by a large fish" },
      { id: "c", text: "He was imprisoned by another nation" },
      { id: "d", text: "He was lost in the desert" },
    ],
    correctAnswer: "b",
    explanation:
      "When Yunus (عليه السلام) left his people in anger, he boarded a ship that later encountered a storm. Lots were cast to lighten the ship, and Yunus was thrown overboard and swallowed by a large fish. This is alluded to in Surah As-Saffat (37:139-142).",
    difficulty: "beginner",
    prophet: "Yunus",
    category: "story",
  },
  {
    id: 51,
    question: "What did Yunus say in his prayer while in the belly of the fish?",
    options: [
      { id: "a", text: "'O Allah, grant me victory over the disbelieving people'" },
      { id: "b", text: "'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers'" },
      { id: "c", text: "'My Lord, do not leave me alone (without an heir)'" },
      { id: "d", text: "'My Lord, expand for me my chest'" },
    ],
    correctAnswer: "b",
    explanation:
      "While in the belly of the fish, Yunus (عليه السلام) prayed: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers' (لا إله إلا أنت سبحانك إني كنت من الظالمين). This is mentioned in Surah Al-Anbiya (21:87).",
    difficulty: "intermediate",
    prophet: "Yunus",
    category: "story",
  },

  // Zakariya (عليه السلام)
  {
    id: 52,
    question: "What was Zakariya's profession according to Islamic tradition?",
    options: [
      { id: "a", text: "Carpenter" },
      { id: "b", text: "Shepherd" },
      { id: "c", text: "Merchant" },
      { id: "d", text: "Fisherman" },
    ],
    correctAnswer: "a",
    explanation:
      "According to Islamic tradition, Prophet Zakariya (عليه السلام) was a carpenter by profession, though this specific detail is not mentioned in the Quran.",
    difficulty: "advanced",
    prophet: "Zakariya",
    category: "identity",
  },
  {
    id: 53,
    question: "Who was under Zakariya's guardianship according to the Quran?",
    options: [
      { id: "a", text: "Yahya" },
      { id: "b", text: "Isa" },
      { id: "c", text: "Maryam" },
      { id: "d", text: "Ishaq" },
    ],
    correctAnswer: "c",
    explanation:
      "According to the Quran, Maryam (mother of Isa) was under the guardianship of Zakariya (عليه السلام). This is mentioned in Surah Al Imran (3:37).",
    difficulty: "intermediate",
    prophet: "Zakariya",
    category: "story",
  },
  {
    id: 54,
    question: "What miracle did Zakariya witness in Maryam's chamber?",
    options: [
      { id: "a", text: "Angels speaking to her" },
      { id: "b", text: "A light shining from her face" },
      { id: "c", text: "Out-of-season fruits" },
      { id: "d", text: "Her prayers being visibly answered" },
    ],
    correctAnswer: "c",
    explanation:
      "Zakariya (عليه السلام) witnessed the miracle of finding out-of-season fruits in Maryam's chamber. When he asked her about it, she said it was from Allah. This is mentioned in Surah Al Imran (3:37).",
    difficulty: "intermediate",
    prophet: "Zakariya",
    category: "story",
  },
  {
    id: 55,
    question: "What sign did Allah give Zakariya after telling him he would have a son?",
    options: [
      { id: "a", text: "His hair turned white instantly" },
      { id: "b", text: "He could not speak to people for three days" },
      { id: "c", text: "His staff blossomed with flowers" },
      { id: "d", text: "His house was filled with light" },
    ],
    correctAnswer: "b",
    explanation:
      "After telling Zakariya (عليه السلام) he would have a son, Allah gave him the sign that he would not be able to speak to people for three days, communicating only through gestures. This is mentioned in Surah Maryam (19:10) and Surah Al Imran (3:41).",
    difficulty: "intermediate",
    prophet: "Zakariya",
    category: "story",
  },

  // Yahya (عليه السلام)
  {
    id: 56,
    question: "What special qualities of Yahya are mentioned in the Quran?",
    options: [
      { id: "a", text: "Eloquence and leadership" },
      { id: "b", text: "Wisdom and compassion" },
      { id: "c", text: "Devoutness, purity, and dutifulness to parents" },
      { id: "d", text: "Courage and physical strength" },
    ],
    correctAnswer: "c",
    explanation:
      "The Quran mentions that Yahya (عليه السلام) was devout, pure, and dutiful to his parents. Allah says: 'And devoutness to his parents, and he was not arrogant or disobedient.' This is mentioned in Surah Maryam (19:13-14).",
    difficulty: "intermediate",
    prophet: "Yahya",
    category: "identity",
  },
  {
    id: 57,
    question: "What unique distinction does Yahya have among the prophets mentioned in the Quran?",
    options: [
      { id: "a", text: "He was the only prophet who never married" },
      { id: "b", text: "He was the only prophet whose name was chosen by Allah before birth" },
      { id: "c", text: "He was the only prophet who never faced opposition" },
      { id: "d", text: "He was the only prophet who lived his entire life in one city" },
    ],
    correctAnswer: "b",
    explanation:
      "Yahya (عليه السلام) has the unique distinction of being the only prophet whose name was chosen by Allah before his birth. Allah says: 'O Zakariya, indeed We give you good tidings of a boy whose name will be Yahya. We have not assigned to any before [this] name.' This is mentioned in Surah Maryam (19:7).",
    difficulty: "advanced",
    prophet: "Yahya",
    category: "identity",
  },

  // Isa (عليه السلام)
  {
    id: 58,
    question: "What titles does the Quran give to Prophet Isa?",
    options: [
      { id: "a", text: "Al-Masih (The Messiah) and Kalimatullah (Word of Allah)" },
      { id: "b", text: "Habibullah (Beloved of Allah) and Safiullah (Pure of Allah)" },
      { id: "c", text: "Khalilullah (Friend of Allah) and Najiyullah (Saved by Allah)" },
      { id: "d", text: "Dhun-Nurayn (Possessor of Two Lights) and Ruhullah (Spirit of Allah)" },
    ],
    correctAnswer: "a",
    explanation:
      "The Quran gives Prophet Isa (عليه السلام) the titles of Al-Masih (The Messiah) and Kalimatullah (Word of Allah). These titles are mentioned in Surah An-Nisa (4:171) and other places.",
    difficulty: "beginner",
    prophet: "Isa",
    category: "identity",
  },
  {
    id: 59,
    question: "What miracle did Isa perform as a baby in the cradle?",
    options: [
      { id: "a", text: "He smiled at his mother" },
      { id: "b", text: "He spoke to defend his mother" },
      { id: "c", text: "He recognized the angels" },
      { id: "d", text: "He refused to nurse" },
    ],
    correctAnswer: "b",
    explanation:
      "As a baby in the cradle, Isa (عليه السلام) miraculously spoke to defend his mother Maryam when people accused her. This miracle is mentioned in Surah Maryam (19:29-33).",
    difficulty: "beginner",
    prophet: "Isa",
    category: "miracles",
  },
  {
    id: 60,
    question: "What divine scripture was revealed to Prophet Isa?",
    options: [
      { id: "a", text: "Tawrat (Torah)" },
      { id: "b", text: "Zabur (Psalms)" },
      { id: "c", text: "Injil (Gospel)" },
      { id: "d", text: "Suhuf (Scrolls)" },
    ],
    correctAnswer: "c",
    explanation:
      "The divine scripture revealed to Prophet Isa (عليه السلام) was the Injil (Gospel). This is mentioned in several places in the Quran, including Surah Al-Ma'idah (5:46).",
    difficulty: "beginner",
    prophet: "Isa",
    category: "identity",
  },
  {
    id: 61,
    question: "According to the Quran, what happened to Isa at the end of his earthly mission?",
    options: [
      { id: "a", text: "He died a natural death" },
      { id: "b", text: "He was crucified" },
      { id: "c", text: "Allah raised him up to Himself" },
      { id: "d", text: "He went into hiding" },
    ],
    correctAnswer: "c",
    explanation:
      "According to the Quran, Isa (عليه السلام) was not crucified, but Allah raised him up to Himself. The Quran states: 'And they did not kill him, nor did they crucify him; but [another] was made to resemble him to them... Rather, Allah raised him to Himself.' This is mentioned in Surah An-Nisa (4:157-158).",
    difficulty: "beginner",
    prophet: "Isa",
    category: "story",
  },

  // Muhammad (ﷺ)
  {
    id: 62,
    question: "What was the first word revealed to Prophet Muhammad ﷺ?",
    options: [
      { id: "a", text: "Bismillah (In the name of Allah)" },
      { id: "b", text: "Iqra (Read)" },
      { id: "c", text: "Qul (Say)" },
      { id: "d", text: "Alhamdulillah (Praise be to Allah)" },
    ],
    correctAnswer: "b",
    explanation:
      "The first word revealed to Prophet Muhammad ﷺ was 'Iqra' (Read). This was the beginning of Surah Al-Alaq, the first revelation that came to him in the Cave of Hira.",
    difficulty: "beginner",
    prophet: "Muhammad",
    category: "story",
  },
  {
    id: 63,
    question: "Which surah of the Quran is specifically named after Prophet Muhammad ﷺ?",
    options: [
      { id: "a", text: "Surah Al-Ahzab" },
      { id: "b", text: "Surah Al-Fath" },
      { id: "c", text: "Surah Muhammad" },
      { id: "d", text: "Surah An-Nasr" },
    ],
    correctAnswer: "c",
    explanation: "Surah 47 of the Quran is specifically named Surah Muhammad, after Prophet Muhammad ﷺ.",
    difficulty: "beginner",
    prophet: "Muhammad",
    category: "quranic-references",
  },
  {
    id: 64,
    question: "What title does the Quran give to Prophet Muhammad ﷺ in Surah Al-Ahzab?",
    options: [
      { id: "a", text: "Khatam an-Nabiyyin (Seal of the Prophets)" },
      { id: "b", text: "Al-Mustafa (The Chosen One)" },
      { id: "c", text: "Rahmatullil Alameen (Mercy to the Worlds)" },
      { id: "d", text: "Habibullah (Beloved of Allah)" },
    ],
    correctAnswer: "a",
    explanation:
      "In Surah Al-Ahzab (33:40), the Quran gives Prophet Muhammad ﷺ the title of 'Khatam an-Nabiyyin' (Seal of the Prophets), indicating that he is the final prophet.",
    difficulty: "beginner",
    prophet: "Muhammad",
    category: "identity",
  },
  {
    id: 65,
    question: "What miracle of Prophet Muhammad ﷺ is referred to as 'the splitting of the moon'?",
    options: [
      { id: "a", text: "When he pointed at the moon and it appeared to split into two parts" },
      { id: "b", text: "When moonlight illuminated the Cave of Thawr during the Hijra" },
      { id: "c", text: "When he predicted a lunar eclipse" },
      { id: "d", text: "When he explained the phases of the moon" },
    ],
    correctAnswer: "a",
    explanation:
      "The miracle referred to as 'the splitting of the moon' occurred when Prophet Muhammad ﷺ pointed at the moon and it appeared to split into two parts. This miracle is alluded to in Surah Al-Qamar (54:1): 'The Hour has come near, and the moon has split.'",
    difficulty: "intermediate",
    prophet: "Muhammad",
    category: "miracles",
  },
]

// Helper function to get a subset of questions
export function getRandomProphetQuestions(count = 10): ProphetQuizQuestion[] {
  const shuffled = [...prophetQuizQuestions].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

// Helper function to get questions by prophet
export function getQuestionsByProphet(prophetName: string): ProphetQuizQuestion[] {
  return prophetQuizQuestions.filter((q) => q.prophet.toLowerCase() === prophetName.toLowerCase())
}

// Helper function to get questions by difficulty
export function getQuestionsByDifficulty(difficulty: string): ProphetQuizQuestion[] {
  return prophetQuizQuestions.filter((q) => q.difficulty === difficulty)
}

// Helper function to get questions by category
export function getQuestionsByCategory(category: string): ProphetQuizQuestion[] {
  return prophetQuizQuestions.filter((q) => q.category === category)
}

// Get all prophets for filtering
export function getAllProphets(): string[] {
  return [...new Set(prophetQuizQuestions.map((q) => q.prophet))].sort()
}

// Get all categories for filtering
export function getAllCategories(): string[] {
  return [...new Set(prophetQuizQuestions.map((q) => q.category))].sort()
}
