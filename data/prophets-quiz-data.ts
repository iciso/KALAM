export interface ProphetQuizQuestion {
  id: number
  question: string
  options: {
    id: string
    text: string
  }[]
  correctAnswer: string
  explanation: string
  prophetInfo: {
    name: string
    arabic: string
    transliteration: string
    significance: string
  }
}

export const prophetQuizQuestions: ProphetQuizQuestion[] = [
  {
    id: 1,
    question: "Which prophet was instructed to build an ark to save believers from a great flood?",
    options: [
      { id: "a", text: "Ibrahim (Abraham)" },
      { id: "b", text: "Nuh (Noah)" },
      { id: "c", text: "Musa (Moses)" },
      { id: "d", text: "Sulayman (Solomon)" },
    ],
    correctAnswer: "b",
    explanation:
      "Allah commanded Prophet Nuh (Noah) to build an ark to save the believers and pairs of animals from the great flood that was sent as punishment to the disbelievers.",
    prophetInfo: {
      name: "Nuh",
      arabic: "نُوح",
      transliteration: "Nuh",
      significance:
        "Known for his perseverance in calling his people to Allah for 950 years and for building the ark that saved believers from the flood.",
    },
  },
  {
    id: 2,
    question: "Which prophet was thrown into a fire by his people, but Allah made the fire cool and safe for him?",
    options: [
      { id: "a", text: "Ibrahim (Abraham)" },
      { id: "b", text: "Ismail (Ishmael)" },
      { id: "c", text: "Yusuf (Joseph)" },
      { id: "d", text: "Dawud (David)" },
    ],
    correctAnswer: "a",
    explanation:
      "Prophet Ibrahim (Abraham) was thrown into a fire by his people for destroying their idols, but Allah commanded the fire: 'O fire! Be cool and safe for Ibrahim!' (Quran 21:69)",
    prophetInfo: {
      name: "Ibrahim",
      arabic: "إِبْرَاهِيم",
      transliteration: "Ibrahim",
      significance:
        "Known as Khalilullah (Friend of Allah) and the father of many prophets. He rebuilt the Kaaba with his son Ismail.",
    },
  },
  {
    id: 3,
    question: "Which prophet was swallowed by a whale (or large fish)?",
    options: [
      { id: "a", text: "Yunus (Jonah)" },
      { id: "b", text: "Yahya (John)" },
      { id: "c", text: "Ayyub (Job)" },
      { id: "d", text: "Ilyas (Elias)" },
    ],
    correctAnswer: "a",
    explanation:
      "Prophet Yunus (Jonah) was swallowed by a whale after he left his people in anger. He glorified Allah from within the belly of the whale: 'There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.' (Quran 21:87)",
    prophetInfo: {
      name: "Yunus",
      arabic: "يُونُس",
      transliteration: "Yunus",
      significance:
        "Also known as Dhun-Nun (The One of the Whale). His story teaches about patience, repentance, and Allah's mercy.",
    },
  },
  {
    id: 4,
    question: "Which prophet was given the miracle of speaking from the cradle as a baby?",
    options: [
      { id: "a", text: "Muhammad" },
      { id: "b", text: "Musa (Moses)" },
      { id: "c", text: "Isa (Jesus)" },
      { id: "d", text: "Yahya (John)" },
    ],
    correctAnswer: "c",
    explanation:
      "Prophet Isa (Jesus) spoke from the cradle as a baby to defend his mother Maryam (Mary): 'Indeed, I am the servant of Allah. He has given me the Scripture and made me a prophet.' (Quran 19:30)",
    prophetInfo: {
      name: "Isa",
      arabic: "عِيسَى",
      transliteration: "Isa",
      significance:
        "Known as Ruhullah (Spirit of Allah) and the Messiah. He was given the Injil (Gospel) and performed many miracles by Allah's permission.",
    },
  },
  {
    id: 5,
    question: "Which prophet was tested with the loss of his wealth, children, and health but remained patient?",
    options: [
      { id: "a", text: "Ayyub (Job)" },
      { id: "b", text: "Yaqub (Jacob)" },
      { id: "c", text: "Zakariyya (Zechariah)" },
      { id: "d", text: "Shuayb" },
    ],
    correctAnswer: "a",
    explanation:
      "Prophet Ayyub (Job) was tested with the loss of his wealth, children, and health. Despite these trials, he remained patient and never lost faith in Allah. Allah praised him: 'Indeed, We found him patient, an excellent servant. Indeed, he was one repeatedly turning back [to Allah].' (Quran 38:44)",
    prophetInfo: {
      name: "Ayyub",
      arabic: "أَيُّوب",
      transliteration: "Ayyub",
      significance:
        "Known for his exemplary patience during extreme trials. His story teaches about steadfastness in faith during hardship.",
    },
  },
  {
    id: 6,
    question: "Which prophet was sold into slavery by his brothers?",
    options: [
      { id: "a", text: "Ishaq (Isaac)" },
      { id: "b", text: "Yusuf (Joseph)" },
      { id: "c", text: "Yaqub (Jacob)" },
      { id: "d", text: "Lut (Lot)" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Yusuf (Joseph) was thrown into a well by his jealous brothers and then sold into slavery. His story is described by Allah as 'the best of stories' in the Quran and has an entire surah named after him (Surah Yusuf).",
    prophetInfo: {
      name: "Yusuf",
      arabic: "يُوسُف",
      transliteration: "Yusuf",
      significance:
        "Known for his exceptional beauty, wisdom, and forgiveness. His story teaches about patience, chastity, and trust in Allah's plan.",
    },
  },
  {
    id: 7,
    question: "Which prophet was given control over the wind and jinn?",
    options: [
      { id: "a", text: "Dawud (David)" },
      { id: "b", text: "Sulayman (Solomon)" },
      { id: "c", text: "Dhul-Kifl" },
      { id: "d", text: "Idris" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Sulayman (Solomon) was given control over the wind, jinn, and the ability to understand the language of animals. Allah says: 'And to Solomon [We subjected] the wind - its morning [journey was that of] a month - and its afternoon [journey was that of] a month' (Quran 34:12)",
    prophetInfo: {
      name: "Sulayman",
      arabic: "سُلَيْمَان",
      transliteration: "Sulayman",
      significance:
        "Son of Prophet Dawud (David) and known for his wisdom, justice, and kingdom unlike any other. He built the first Masjid Al-Aqsa.",
    },
  },
  {
    id: 8,
    question: "Which prophet parted the sea by Allah's permission?",
    options: [
      { id: "a", text: "Ibrahim (Abraham)" },
      { id: "b", text: "Nuh (Noah)" },
      { id: "c", text: "Musa (Moses)" },
      { id: "d", text: "Isa (Jesus)" },
    ],
    correctAnswer: "c",
    explanation:
      "Prophet Musa (Moses) parted the sea by Allah's permission when he and the Children of Israel were being pursued by Pharaoh and his army. Allah commanded him: 'Strike with your staff the sea,' and it parted, each portion like a great mountain. (Quran 26:63)",
    prophetInfo: {
      name: "Musa",
      arabic: "مُوسَى",
      transliteration: "Musa",
      significance:
        "Known as Kalimullah (the one who spoke directly with Allah). He was given the Torah and led the Children of Israel out of Egypt.",
    },
  },
  {
    id: 9,
    question: "Which prophet was the father of Yusuf (Joseph)?",
    options: [
      { id: "a", text: "Ibrahim (Abraham)" },
      { id: "b", text: "Ishaq (Isaac)" },
      { id: "c", text: "Yaqub (Jacob)" },
      { id: "d", text: "Ismail (Ishmael)" },
    ],
    correctAnswer: "c",
    explanation:
      "Prophet Yaqub (Jacob), also known as Israel, was the father of Prophet Yusuf (Joseph) and eleven other sons who became the progenitors of the twelve tribes of Israel.",
    prophetInfo: {
      name: "Yaqub",
      arabic: "يَعْقُوب",
      transliteration: "Yaqub",
      significance:
        "Also known as Israel, he was the son of Prophet Ishaq (Isaac) and the father of twelve sons, including Prophet Yusuf (Joseph).",
    },
  },
  {
    id: 10,
    question: "Which prophet was the last and final messenger of Allah?",
    options: [
      { id: "a", text: "Isa (Jesus)" },
      { id: "b", text: "Musa (Moses)" },
      { id: "c", text: "Ibrahim (Abraham)" },
      { id: "d", text: "Muhammad" },
    ],
    correctAnswer: "d",
    explanation:
      "Prophet Muhammad ﷺ was the last and final messenger of Allah. The Quran states: 'Muhammad is not the father of any of your men, but he is the Messenger of Allah and the seal (last) of the Prophets.' (Quran 33:40)",
    prophetInfo: {
      name: "Muhammad",
      arabic: "مُحَمَّد",
      transliteration: "Muhammad",
      significance:
        "The final messenger of Allah, sent to all of humanity. He received the Quran and is known as the best example for mankind to follow.",
    },
  },
  {
    id: 11,
    question: "Which prophet was instructed to sacrifice his son as a test of faith?",
    options: [
      { id: "a", text: "Ibrahim (Abraham)" },
      { id: "b", text: "Nuh (Noah)" },
      { id: "c", text: "Dawud (David)" },
      { id: "d", text: "Zakariyya (Zechariah)" },
    ],
    correctAnswer: "a",
    explanation:
      "Prophet Ibrahim (Abraham) was instructed to sacrifice his son as a test of faith. When both father and son submitted to Allah's command, Allah ransomed his son with a great sacrifice (a ram). This event is commemorated during Eid al-Adha.",
    prophetInfo: {
      name: "Ibrahim",
      arabic: "إِبْرَاهِيم",
      transliteration: "Ibrahim",
      significance:
        "Known for his unwavering faith and willingness to sacrifice everything for Allah, including his own son.",
    },
  },
  {
    id: 12,
    question: "Which prophet was given the Zabur (Psalms)?",
    options: [
      { id: "a", text: "Sulayman (Solomon)" },
      { id: "b", text: "Dawud (David)" },
      { id: "c", text: "Musa (Moses)" },
      { id: "d", text: "Isa (Jesus)" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Dawud (David) was given the Zabur (Psalms). The Quran mentions: 'And to David We gave the Zabur [Psalms].' (Quran 4:163)",
    prophetInfo: {
      name: "Dawud",
      arabic: "دَاوُود",
      transliteration: "Dawud",
      significance:
        "Known for his beautiful voice in reciting the Zabur (Psalms). He was both a prophet and a king who ruled with justice.",
    },
  },
  {
    id: 13,
    question:
      "Which prophet's staff turned into a snake and his hand became white without disease as signs from Allah?",
    options: [
      { id: "a", text: "Musa (Moses)" },
      { id: "b", text: "Harun (Aaron)" },
      { id: "c", text: "Isa (Jesus)" },
      { id: "d", text: "Sulayman (Solomon)" },
    ],
    correctAnswer: "a",
    explanation:
      "Prophet Musa (Moses) was given these miracles by Allah. The Quran states: 'And throw down your staff. But when he saw it writhing as if it were a snake, he turned in flight and did not return... And draw in your hand to your side; it will come out white without disease - another sign.' (Quran 28:31-32)",
    prophetInfo: {
      name: "Musa",
      arabic: "مُوسَى",
      transliteration: "Musa",
      significance:
        "One of the most mentioned prophets in the Quran. He confronted Pharaoh and led the Children of Israel out of Egypt.",
    },
  },
  {
    id: 14,
    question: "Which prophet was born to a mother who had been barren and whose father was very old?",
    options: [
      { id: "a", text: "Isa (Jesus)" },
      { id: "b", text: "Yahya (John)" },
      { id: "c", text: "Ishaq (Isaac)" },
      { id: "d", text: "Yusuf (Joseph)" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Yahya (John) was born to Prophet Zakariyya (Zechariah) and his wife when they were both very old, and his wife had been barren. Zakariyya had prayed to Allah: 'My Lord, indeed my bones have weakened, and my head has filled with white, and never have I been in my supplication to You, my Lord, unhappy. And indeed, I fear the successors after me, and my wife has been barren, so give me from Yourself an heir.' (Quran 19:4-5)",
    prophetInfo: {
      name: "Yahya",
      arabic: "يَحْيَى",
      transliteration: "Yahya",
      significance:
        "Known for his piety and wisdom from a young age. Allah says about him: 'And We gave him wisdom [while yet] a boy.' (Quran 19:12)",
    },
  },
  {
    id: 15,
    question: "Which prophet was sent to the people of 'Ad?",
    options: [
      { id: "a", text: "Salih" },
      { id: "b", text: "Hud" },
      { id: "c", text: "Shuayb" },
      { id: "d", text: "Lut (Lot)" },
    ],
    correctAnswer: "b",
    explanation:
      "Prophet Hud was sent to the people of 'Ad. The Quran states: 'And to 'Ad [We sent] their brother Hud. He said, 'O my people, worship Allah; you have no deity other than Him. You are not but inventors [of falsehood].' (Quran 11:50)",
    prophetInfo: {
      name: "Hud",
      arabic: "هُود",
      transliteration: "Hud",
      significance:
        "Sent to the mighty people of 'Ad who were known for their tall stature and advanced civilization but were destroyed for their disbelief.",
    },
  },
]
