export interface RevelationContext {
  id: number
  verseRange: string
  title: string
  context: string
  historicalEvent?: string
  themes: string[]
  figures: string[]
  location?: {
    name: string
    coordinates: [number, number] // [longitude, latitude]
    description: string
  }
  authenticityLevel: "sahih" | "hasan" | "da'if" | "multiple-reports"
  category: "theological" | "interfaith" | "military" | "social" | "legal" | "narrative"
  relatedContexts?: number[] // IDs of related contexts
  year?: number // Year of Hijrah (negative for before Hijrah)
}

export const surahImranRevelationData: RevelationContext[] = [
  {
    id: 1,
    verseRange: "1-9",
    title: "Opening and Muhkamat vs Mutashabihat",
    context:
      "These verses were revealed as a foundation for the surah, establishing core theological principles and addressing the issue of clear versus allegorical verses. They came in response to debates about interpretation of scripture.",
    themes: ["Tawhid", "Scripture", "Interpretation", "Divine Attributes"],
    figures: ["Prophet Muhammad"],
    authenticityLevel: "multiple-reports",
    category: "theological",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The Prophet's Mosque in Medina where many revelations occurred",
    },
    year: 3,
  },
  {
    id: 2,
    verseRange: "10-20",
    title: "Warning to Disbelievers and Dialogue with People of the Book",
    context:
      "Revealed following interactions with delegations from Christian communities, particularly the Christians of Najran who came to debate with the Prophet about the nature of Jesus.",
    historicalEvent: "Delegation of Najran Christians to Medina",
    themes: ["Interfaith Dialogue", "Monotheism", "Previous Scriptures"],
    figures: ["Christians of Najran", "Prophet Muhammad"],
    authenticityLevel: "sahih",
    category: "interfaith",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The Prophet's Mosque where the delegation met with the Prophet",
    },
    relatedContexts: [3, 6],
    year: 9,
  },
  {
    id: 3,
    verseRange: "21-32",
    title: "Call to Faith and Warning Against Alliances with Disbelievers",
    context:
      "These verses addressed the growing tensions between the Muslim community and those who opposed them, warning against taking disbelievers as allies over fellow believers.",
    themes: ["Faith", "Alliance", "Community Solidarity"],
    figures: ["Prophet Muhammad", "Hypocrites of Medina"],
    authenticityLevel: "hasan",
    category: "social",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The growing Muslim community in Medina",
    },
    relatedContexts: [2],
    year: 3,
  },
  {
    id: 4,
    verseRange: "33-63",
    title: "Story of Maryam, Isa, and Yahya",
    context:
      "Revealed in response to questions and debates about Jesus, Mary, and John the Baptist, particularly during interfaith dialogues with Christians. These verses present the Islamic perspective on these figures.",
    historicalEvent: "Theological debates with Christian delegations",
    themes: ["Prophets", "Jesus", "Mary", "Monotheism"],
    figures: ["Jesus", "Mary", "Zechariah", "John the Baptist"],
    authenticityLevel: "sahih",
    category: "narrative",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The Prophet's Mosque where interfaith dialogues occurred",
    },
    relatedContexts: [2, 6],
    year: 9,
  },
  {
    id: 5,
    verseRange: "64-80",
    title: "Invitation to Common Terms and Refutation of False Claims",
    context:
      "These verses were revealed specifically during the dialogue with the Christians of Najran, inviting them to common grounds of monotheism and addressing their theological claims about Jesus.",
    historicalEvent: "Mubahala challenge with Najran Christians",
    themes: ["Interfaith Dialogue", "Common Grounds", "Monotheism"],
    figures: ["Christians of Najran", "Prophet Muhammad", "Abraham"],
    authenticityLevel: "sahih",
    category: "interfaith",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The location where the Mubahala challenge was issued",
    },
    relatedContexts: [2, 4, 6],
    year: 9,
  },
  {
    id: 6,
    verseRange: "81-91",
    title: "Covenant of the Prophets and Rejection of Faith After Guidance",
    context:
      "Revealed to address those who accepted Islam and then rejected it, as well as to establish the continuity of prophetic messages throughout history.",
    themes: ["Prophetic Covenant", "Apostasy", "Faith"],
    figures: ["Prophets (collectively)"],
    authenticityLevel: "hasan",
    category: "theological",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The Muslim community in Medina",
    },
    year: 3,
  },
  {
    id: 7,
    verseRange: "92-101",
    title: "Righteousness, Pilgrimage, and People of the Book",
    context:
      "These verses addressed various aspects of righteousness, including charity and pilgrimage, while also continuing the dialogue with the People of the Book.",
    themes: ["Righteousness", "Charity", "Pilgrimage", "Scripture"],
    figures: ["Jews of Medina", "Muslims"],
    authenticityLevel: "hasan",
    category: "legal",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The developing Muslim society in Medina",
    },
    year: 3,
  },
  {
    id: 8,
    verseRange: "102-109",
    title: "Unity of Muslims and Formation of Community",
    context:
      "Revealed following tribal disputes among Muslims, calling for unity and brotherhood while warning against division.",
    historicalEvent: "Disputes between Aws and Khazraj tribes",
    themes: ["Unity", "Brotherhood", "Community"],
    figures: ["Aws tribe", "Khazraj tribe"],
    authenticityLevel: "sahih",
    category: "social",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The tribal quarters of Medina",
    },
    year: 3,
  },
  {
    id: 9,
    verseRange: "110-120",
    title: "Best Community and Relations with People of the Book",
    context:
      "These verses addressed the Muslim community's position among nations and their relationships with the People of the Book, particularly following tensions with Jewish tribes in Medina.",
    themes: ["Community Excellence", "Interfaith Relations"],
    figures: ["Jews of Medina", "Muslims"],
    authenticityLevel: "hasan",
    category: "social",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The multi-faith society of Medina",
    },
    year: 3,
  },
  {
    id: 10,
    verseRange: "121-129",
    title: "Battle of Uhud - Preparation",
    context:
      "Revealed concerning the preparations for the Battle of Uhud, addressing the Prophet's arrangements of troops and the anxiety of some groups.",
    historicalEvent: "Preparations for Battle of Uhud",
    themes: ["Warfare", "Courage", "Trust in Allah"],
    figures: ["Prophet Muhammad", "Quraysh Army"],
    authenticityLevel: "sahih",
    category: "military",
    location: {
      name: "Uhud",
      coordinates: [39.6169, 24.5086],
      description: "The mountain of Uhud north of Medina where the battle took place",
    },
    relatedContexts: [11, 12],
    year: 3,
  },
  {
    id: 11,
    verseRange: "130-143",
    title: "Lessons from Usury, Death, and Previous Nations",
    context:
      "These verses were revealed to provide moral and spiritual guidance to the believers, particularly in the context of economic practices and reflecting on death and the afterlife.",
    themes: ["Usury", "Afterlife", "Piety", "Historical Lessons"],
    figures: ["Believers"],
    authenticityLevel: "hasan",
    category: "theological",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The developing economic system in Medina",
    },
    year: 3,
  },
  {
    id: 12,
    verseRange: "144-158",
    title: "Battle of Uhud - Aftermath and Lessons",
    context:
      "Revealed following the Muslims' defeat at the Battle of Uhud, addressing the setback, martyrdom, and lessons to be learned from the experience.",
    historicalEvent: "Aftermath of Battle of Uhud",
    themes: ["Warfare", "Martyrdom", "Divine Wisdom", "Testing"],
    figures: ["Prophet Muhammad", "Martyrs of Uhud", "Muslim Army"],
    authenticityLevel: "sahih",
    category: "military",
    location: {
      name: "Uhud",
      coordinates: [39.6169, 24.5086],
      description: "The battlefield of Uhud after the conflict",
    },
    relatedContexts: [10],
    year: 3,
  },
  {
    id: 13,
    verseRange: "159-168",
    title: "Prophet's Gentleness and Hypocrites' Behavior",
    context:
      "These verses addressed the Prophet's gentle leadership after Uhud and exposed the behavior of the hypocrites who had abandoned the Muslims during the battle.",
    historicalEvent: "Hypocrites' desertion at Uhud",
    themes: ["Leadership", "Hypocrisy", "Trust in Allah"],
    figures: ["Prophet Muhammad", "Abdullah ibn Ubayy (leader of hypocrites)"],
    authenticityLevel: "sahih",
    category: "social",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The return to Medina after the battle",
    },
    relatedContexts: [10, 12],
    year: 3,
  },
  {
    id: 14,
    verseRange: "169-180",
    title: "Status of Martyrs and Warning Against Miserliness",
    context:
      "Revealed to comfort the families of those who died at Uhud, explaining the elevated status of martyrs, while also warning against hoarding wealth.",
    historicalEvent: "Mourning of Uhud martyrs",
    themes: ["Martyrdom", "Afterlife", "Charity", "Wealth"],
    figures: ["Martyrs of Uhud", "Families of martyrs"],
    authenticityLevel: "sahih",
    category: "theological",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The homes of the martyrs' families in Medina",
    },
    relatedContexts: [12],
    year: 3,
  },
  {
    id: 15,
    verseRange: "181-189",
    title: "Response to Jewish Claims and Signs of Creation",
    context:
      "These verses responded to certain claims made by some Jewish leaders about God's poverty, while also directing attention to the signs of God's creation.",
    themes: ["Divine Attributes", "Creation", "Interfaith Polemics"],
    figures: ["Jewish leaders", "Believers"],
    authenticityLevel: "hasan",
    category: "theological",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The multi-faith community of Medina",
    },
    year: 3,
  },
  {
    id: 16,
    verseRange: "190-200",
    title: "Reflection, Supplication, and Steadfastness",
    context:
      "The concluding verses of the surah were revealed to encourage deep reflection on creation, teach methods of supplication, and emphasize the importance of patience and steadfastness.",
    themes: ["Reflection", "Supplication", "Patience", "Steadfastness"],
    figures: ["Believers"],
    authenticityLevel: "hasan",
    category: "theological",
    location: {
      name: "Medina",
      coordinates: [39.6133, 24.4672],
      description: "The Prophet's Mosque and surrounding areas",
    },
    year: 3,
  },
]
