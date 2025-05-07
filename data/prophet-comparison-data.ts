export interface ProphetData {
  id: string
  name: string
  arabicName: string
  title?: string
  birthPlace?: string
  timePeriod?: string
  age?: number
  family?: {
    father?: string
    mother?: string
    children?: string[]
    spouses?: string[]
    siblings?: string[]
  }
  keyEvents: {
    title: string
    description: string
  }[]
  miracles: string[]
  challenges: string[]
  teachings: string[]
  quranicMentions: {
    count: number
    majorSurahs: string[]
    notableVerses: {
      reference: string
      description: string
    }[]
  }
  books?: string[]
  nation?: string
  endOfLife?: string
}

export const prophetComparisonData: Record<string, ProphetData> = {
  adam: {
    id: "adam",
    name: "Adam",
    arabicName: "آدَم",
    title: "First Human and Prophet",
    birthPlace: "Paradise (Jannah)",
    timePeriod: "Beginning of human existence",
    age: 930,
    family: {
      spouses: ["Hawwa (Eve)"],
      children: ["Habil (Abel)", "Qabil (Cain)", "Shith (Seth)", "Many others"],
    },
    keyEvents: [
      {
        title: "Creation",
        description: "Created by Allah from clay and given life with Allah's spirit",
      },
      {
        title: "Life in Paradise",
        description: "Lived in Paradise with his wife Hawwa (Eve)",
      },
      {
        title: "Forbidden Tree",
        description: "Tempted by Iblis (Satan) to eat from the forbidden tree",
      },
      {
        title: "Descent to Earth",
        description: "Sent to Earth after eating from the forbidden tree",
      },
      {
        title: "Repentance",
        description: "Repented and was forgiven by Allah",
      },
    ],
    miracles: ["Created directly by Allah's hands", "Taught the names of all things", "Angels prostrated to him"],
    challenges: [
      "Temptation by Iblis (Satan)",
      "Adapting to life on Earth",
      "Murder of his son Habil (Abel) by Qabil (Cain)",
    ],
    teachings: ["Monotheism (Tawhid)", "Repentance and seeking forgiveness", "Obedience to Allah's commands"],
    quranicMentions: {
      count: 25,
      majorSurahs: ["Al-Baqarah", "Al-A'raf", "Ta-Ha"],
      notableVerses: [
        {
          reference: "2:30-37",
          description: "Creation of Adam, angels prostrating, and descent to Earth",
        },
        {
          reference: "7:19-25",
          description: "The story of the forbidden tree and descent to Earth",
        },
        {
          reference: "20:115-121",
          description: "Adam's forgetfulness and disobedience",
        },
      ],
    },
    endOfLife: "Died on Earth after living for 930 years",
  },

  nuh: {
    id: "nuh",
    name: "Nuh (Noah)",
    arabicName: "نُوح",
    title: "The First Messenger",
    birthPlace: "Mesopotamia (modern-day Iraq)",
    timePeriod: "Approximately 10th century BCE",
    age: 950,
    family: {
      children: ["Sam (Shem)", "Ham", "Yafith (Japheth)", "Yam/Kan'an (who disbelieved)"],
    },
    keyEvents: [
      {
        title: "Prophethood",
        description: "Called to prophethood in a time of widespread idolatry",
      },
      {
        title: "950 Years of Preaching",
        description: "Preached for 950 years with limited success",
      },
      {
        title: "Building the Ark",
        description: "Instructed by Allah to build an ark in preparation for the flood",
      },
      {
        title: "The Great Flood",
        description: "Survived the flood with believers and pairs of animals",
      },
      {
        title: "New Beginning",
        description: "Established a new community of believers after the flood",
      },
    ],
    miracles: [
      "Extreme longevity (lived for 950 years)",
      "The Ark and its construction",
      "Survival of the Great Flood",
    ],
    challenges: [
      "Widespread rejection and mockery",
      "Minimal response to his message over centuries",
      "Loss of his disbelieving son in the flood",
    ],
    teachings: ["Pure monotheism", "Rejection of idolatry", "Patience and perseverance", "Trust in Allah's plan"],
    quranicMentions: {
      count: 43,
      majorSurahs: ["Hud", "Al-Mu'minun", "Nuh"],
      notableVerses: [
        {
          reference: "11:25-48",
          description: "Detailed account of Nuh's story, the flood, and his son",
        },
        {
          reference: "71:1-28",
          description: "Surah dedicated to Nuh, detailing his preaching methods",
        },
        {
          reference: "23:23-30",
          description: "The construction of the ark and the flood",
        },
      ],
    },
    nation: "People of Nuh",
    endOfLife: "Died after establishing a new community of believers post-flood",
  },

  ibrahim: {
    id: "ibrahim",
    name: "Ibrahim (Abraham)",
    arabicName: "إِبْرَاهِيم",
    title: "Khalilullah (Friend of Allah), Father of the Prophets",
    birthPlace: "Ur, Mesopotamia (modern-day Iraq)",
    timePeriod: "Approximately 1800 BCE",
    age: 175,
    family: {
      father: "Azar (Terah)",
      spouses: ["Sarah", "Hajar (Hagar)"],
      children: ["Isma'il (Ishmael)", "Ishaq (Isaac)"],
    },
    keyEvents: [
      {
        title: "Search for Truth",
        description: "Journey from star-worship to monotheism",
      },
      {
        title: "Breaking the Idols",
        description: "Destroyed the idols of his people to prove their powerlessness",
      },
      {
        title: "The Fire Incident",
        description: "Thrown into a fire by Nimrod but saved by Allah",
      },
      {
        title: "Migration",
        description: "Migrated from Ur to Canaan, Egypt, and eventually Mecca",
      },
      {
        title: "Sacrifice of His Son",
        description: "Willingness to sacrifice his son Isma'il as commanded by Allah",
      },
      {
        title: "Building the Ka'bah",
        description: "Built the Ka'bah with his son Isma'il in Mecca",
      },
    ],
    miracles: [
      "Survival of the fire of Nimrod",
      "Birth of sons in old age",
      "Turning birds to life after dividing them (2:260)",
    ],
    challenges: [
      "Confrontation with his father and people over idolatry",
      "Persecution by King Nimrod",
      "Test of sacrificing his son",
      "Leaving his wife Hajar and son Isma'il in the barren valley of Mecca",
    ],
    teachings: [
      "Pure monotheism (Hanif)",
      "Submission to Allah (Islam)",
      "Hospitality and generosity",
      "Steadfastness in faith",
    ],
    quranicMentions: {
      count: 69,
      majorSurahs: ["Al-Baqarah", "Al-An'am", "Ibrahim", "Al-Anbiya"],
      notableVerses: [
        {
          reference: "6:74-83",
          description: "Ibrahim's search for truth through observing celestial bodies",
        },
        {
          reference: "21:51-73",
          description: "Breaking the idols and being thrown into the fire",
        },
        {
          reference: "37:102-109",
          description: "The sacrifice of his son",
        },
      ],
    },
    nation: "Multiple nations through his sons Isma'il and Ishaq",
    endOfLife: "Died in Palestine at the age of 175",
  },

  musa: {
    id: "musa",
    name: "Musa (Moses)",
    arabicName: "مُوسَى",
    title: "Kalimullah (One who spoke with Allah)",
    birthPlace: "Egypt",
    timePeriod: "Approximately 13th century BCE",
    age: 120,
    family: {
      father: "Imran",
      mother: "Yokhebed",
      siblings: ["Harun (Aaron)", "Maryam (Miriam)"],
      spouses: ["Safura (Zipporah)"],
    },
    keyEvents: [
      {
        title: "Birth and Early Life",
        description: "Born during Pharaoh's infanticide, placed in a basket on the Nile, raised in Pharaoh's palace",
      },
      {
        title: "Escape to Madyan",
        description: "Fled Egypt after accidentally killing an Egyptian, lived with Prophet Shu'ayb",
      },
      {
        title: "Call at Mount Tur",
        description: "Received prophethood at the burning bush on Mount Tur (Sinai)",
      },
      {
        title: "Confrontation with Pharaoh",
        description: "Returned to Egypt to free the Children of Israel from Pharaoh's oppression",
      },
      {
        title: "Exodus and Parting of the Sea",
        description: "Led the Israelites out of Egypt, parted the Red Sea",
      },
      {
        title: "Receiving the Torah",
        description: "Received the Torah on Mount Sinai during 40 days of seclusion",
      },
      {
        title: "Wandering in the Desert",
        description: "Led the Israelites through 40 years in the desert",
      },
    ],
    miracles: [
      "Staff turning into a serpent",
      "Glowing hand (Yad al-Bayda)",
      "Parting of the Red Sea",
      "Water from the rock",
      "Manna and quails from heaven",
    ],
    challenges: [
      "Confronting Pharaoh and his magicians",
      "Dealing with the stubbornness of the Children of Israel",
      "The golden calf incident during his absence",
      "40 years of wandering in the desert",
    ],
    teachings: [
      "Monotheism and rejection of idolatry",
      "The Ten Commandments",
      "Detailed religious law (Shariah)",
      "Justice and liberation from oppression",
    ],
    quranicMentions: {
      count: 136,
      majorSurahs: ["Al-Baqarah", "Al-A'raf", "Ta-Ha", "Al-Qasas"],
      notableVerses: [
        {
          reference: "28:3-43",
          description: "Detailed account of Musa's birth, upbringing, and mission",
        },
        {
          reference: "20:9-98",
          description: "Conversation with Allah, confrontation with Pharaoh, and the golden calf incident",
        },
        {
          reference: "7:103-156",
          description: "The plagues of Egypt and the exodus",
        },
      ],
    },
    books: ["Torah (Tawrat)"],
    nation: "Children of Israel (Bani Israel)",
    endOfLife: "Died near the Promised Land after 40 years in the desert",
  },

  isa: {
    id: "isa",
    name: "Isa (Jesus)",
    arabicName: "عِيسَى",
    title: "Ruhullah (Spirit of Allah), Al-Masih (The Messiah)",
    birthPlace: "Bethlehem, Palestine",
    timePeriod: "Approximately 1st century CE",
    age: 33,
    family: {
      mother: "Maryam (Mary)",
    },
    keyEvents: [
      {
        title: "Miraculous Birth",
        description: "Born to the Virgin Mary through divine intervention",
      },
      {
        title: "Speaking in the Cradle",
        description: "Spoke as a newborn to defend his mother's honor",
      },
      {
        title: "Prophethood and Ministry",
        description: "Began his ministry at around age 30, preaching to the Children of Israel",
      },
      {
        title: "Miracles and Healing",
        description: "Performed numerous miracles including healing the sick and raising the dead",
      },
      {
        title: "The Last Supper",
        description: "Final gathering with his disciples before his apparent crucifixion",
      },
      {
        title: "Ascension",
        description: "Raised to heaven alive by Allah, protected from crucifixion",
      },
    ],
    miracles: [
      "Speaking in the cradle",
      "Creating birds from clay and breathing life into them",
      "Healing the blind and lepers",
      "Raising the dead",
      "Table spread from heaven (Ma'idah)",
    ],
    challenges: [
      "Rejection by many of the Children of Israel",
      "Accusations of sorcery and blasphemy",
      "Plot to kill him",
      "Later distortion of his message by followers",
    ],
    teachings: [
      "Pure monotheism",
      "Confirmation of the Torah",
      "Compassion and mercy",
      "Spiritual purification",
      "Preparation for the coming of Prophet Muhammad",
    ],
    quranicMentions: {
      count: 25,
      majorSurahs: ["Al-Imran", "Al-Nisa", "Al-Ma'idah", "Maryam"],
      notableVerses: [
        {
          reference: "19:16-34",
          description: "The birth of Isa to Maryam and his speaking in the cradle",
        },
        {
          reference: "3:45-59",
          description: "Annunciation to Maryam and Isa's miracles",
        },
        {
          reference: "4:157-158",
          description: "Clarification that Isa was not crucified but raised to heaven",
        },
      ],
    },
    books: ["Injil (Gospel)"],
    nation: "Children of Israel (Bani Israel)",
    endOfLife: "Raised alive to heaven, will return before the Day of Judgment",
  },

  muhammad: {
    id: "muhammad",
    name: "Muhammad",
    arabicName: "مُحَمَّد",
    title: "Khatam an-Nabiyyin (Seal of the Prophets), Habibullah (Beloved of Allah)",
    birthPlace: "Mecca, Arabia",
    timePeriod: "570-632 CE",
    age: 63,
    family: {
      father: "Abdullah",
      mother: "Aminah",
      spouses: [
        "Khadijah",
        "Sawdah",
        "Aisha",
        "Hafsah",
        "Zaynab bint Khuzaymah",
        "Umm Salamah",
        "Zaynab bint Jahsh",
        "Juwayriyah",
        "Umm Habibah",
        "Safiyyah",
        "Maymunah",
      ],
      children: ["Qasim", "Abdullah", "Ibrahim", "Zaynab", "Ruqayyah", "Umm Kulthum", "Fatimah"],
    },
    keyEvents: [
      {
        title: "Birth and Early Life",
        description: "Born in the Year of the Elephant, orphaned at a young age",
      },
      {
        title: "First Revelation",
        description: "Received the first revelation in Cave Hira at age 40",
      },
      {
        title: "Early Preaching",
        description: "Secret and then public preaching in Mecca for 13 years",
      },
      {
        title: "Persecution in Mecca",
        description: "Faced severe opposition and persecution from the Quraysh",
      },
      {
        title: "Hijrah (Migration)",
        description: "Migrated from Mecca to Medina in 622 CE, marking the beginning of the Islamic calendar",
      },
      {
        title: "Establishment of First Islamic State",
        description: "Established the first Islamic community and state in Medina",
      },
      {
        title: "Conquest of Mecca",
        description: "Peacefully conquered Mecca in 630 CE and cleansed the Ka'bah of idols",
      },
      {
        title: "Farewell Pilgrimage",
        description: "Delivered his final sermon during his last Hajj in 632 CE",
      },
    ],
    miracles: [
      "The Quran (greatest miracle)",
      "Isra and Mi'raj (Night Journey and Ascension)",
      "Splitting of the moon",
      "Multiplication of food and water",
      "Healing through prayer",
    ],
    challenges: [
      "Intense persecution in Mecca",
      "Multiple battles and conflicts",
      "Betrayal by some allies",
      "Personal losses and grief",
      "Unification of diverse Arabian tribes",
    ],
    teachings: [
      "Complete way of life (Islam)",
      "Five Pillars of Islam",
      "Articles of Faith",
      "Social justice and equality",
      "Moral and ethical conduct",
      "Balance between worldly life and spirituality",
    ],
    quranicMentions: {
      count: 4,
      majorSurahs: ["Al-Ahzab", "Muhammad", "Al-Fath", "Al-Tawbah"],
      notableVerses: [
        {
          reference: "33:40",
          description: "Muhammad as the Seal of the Prophets",
        },
        {
          reference: "48:29",
          description: "Description of Muhammad and his companions",
        },
        {
          reference: "9:128-129",
          description: "Muhammad's concern for believers",
        },
      ],
    },
    books: ["Quran"],
    nation: "All humanity",
    endOfLife: "Died in Medina in 632 CE after completing his mission",
  },
}

// Add more prophets as needed...

export const comparisonCategories = [
  { id: "basic", label: "Basic Information", icon: "User" },
  { id: "family", label: "Family", icon: "Users" },
  { id: "keyEvents", label: "Key Events", icon: "Milestone" },
  { id: "miracles", label: "Miracles", icon: "Sparkles" },
  { id: "challenges", label: "Challenges", icon: "Mountain" },
  { id: "teachings", label: "Teachings", icon: "BookOpen" },
  { id: "quranicMentions", label: "Quranic Mentions", icon: "BookMarked" },
]
