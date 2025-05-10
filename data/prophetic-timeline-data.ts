export interface PropheticEvent {
  id: string
  title: string
  year: string
  hijriYear?: string
  date?: string
  description: string
  significance: string
  category: "revelation" | "journey" | "conflict" | "treaty" | "personal" | "dawah" | "other"
  location: string
  relatedToIsraMiraj?: string
  order: number
}

export const propheticTimelineData: PropheticEvent[] = [
  {
    id: "birth",
    title: "Birth of Prophet Muhammad ﷺ",
    year: "570 CE",
    hijriYear: "Before Hijri calendar",
    date: "12th of Rabi al-Awwal (traditional date)",
    description: "Prophet Muhammad ﷺ was born in Mecca to Abdullah and Amina.",
    significance: "The birth of the final messenger of Allah to humanity.",
    category: "personal",
    location: "Mecca",
    order: 1,
  },
  {
    id: "first-revelation",
    title: "First Revelation",
    year: "610 CE",
    hijriYear: "Before Hijri calendar",
    date: "27th of Ramadan (traditional date)",
    description:
      "Angel Jibreel (Gabriel) appeared to Muhammad ﷺ in the Cave of Hira with the first revelation of the Quran.",
    significance: "Marked the beginning of Muhammad's ﷺ prophethood and the revelation of the Quran.",
    category: "revelation",
    location: "Cave of Hira, near Mecca",
    relatedToIsraMiraj:
      "Both events involved Angel Jibreel and divine communication. The first revelation began Muhammad's ﷺ prophethood, while Isra and Miraj affirmed his status among all prophets.",
    order: 2,
  },
  {
    id: "public-dawah",
    title: "Beginning of Public Preaching",
    year: "613 CE",
    hijriYear: "Before Hijri calendar",
    description:
      "After three years of private invitations to Islam, Muhammad ﷺ began publicly calling people to Islam.",
    significance:
      "Marked the transition from private to public preaching and the beginning of open opposition from the Quraysh.",
    category: "dawah",
    location: "Mecca",
    order: 3,
  },
  {
    id: "boycott",
    title: "Boycott of Banu Hashim",
    year: "616-619 CE",
    hijriYear: "Before Hijri calendar",
    description:
      "The Quraysh imposed a social and economic boycott on Banu Hashim and Banu Muttalib for protecting Muhammad ﷺ.",
    significance: "A period of severe hardship for the early Muslims and the Prophet's ﷺ clan.",
    category: "conflict",
    location: "Mecca",
    order: 4,
  },
  {
    id: "year-of-sorrow",
    title: "Year of Sorrow",
    year: "619 CE",
    hijriYear: "Before Hijri calendar",
    description:
      "The year in which both Abu Talib (the Prophet's ﷺ uncle and protector) and Khadijah (his beloved wife) died.",
    significance: "A period of great personal loss for the Prophet ﷺ, leaving him without crucial support in Mecca.",
    category: "personal",
    location: "Mecca",
    relatedToIsraMiraj:
      "The Isra and Miraj occurred shortly after this difficult period, providing spiritual comfort and divine support when the Prophet ﷺ was facing intense grief and opposition.",
    order: 5,
  },
  {
    id: "taif-journey",
    title: "Journey to Ta'if",
    year: "619 CE",
    hijriYear: "Before Hijri calendar",
    description: "Muhammad ﷺ traveled to Ta'if seeking support, but was rejected and physically abused by its people.",
    significance: "Demonstrated the Prophet's ﷺ perseverance despite rejection and hardship.",
    category: "journey",
    location: "Ta'if",
    relatedToIsraMiraj:
      "Both journeys occurred during periods of intense hardship. The rejection at Ta'if represented earthly difficulty, while the Isra and Miraj that followed soon after represented divine consolation and honor.",
    order: 6,
  },
  {
    id: "isra-miraj",
    title: "Isra and Miraj (Night Journey)",
    year: "620-621 CE (approximate)",
    hijriYear: "Before Hijri calendar",
    date: "27th of Rajab (traditional date)",
    description: "The miraculous night journey from Mecca to Jerusalem and ascension through the seven heavens.",
    significance:
      "A profound spiritual experience where the five daily prayers were prescribed and the Prophet ﷺ led all previous prophets in prayer.",
    category: "journey",
    location: "From Mecca to Jerusalem to the Seven Heavens",
    order: 7,
  },
  {
    id: "first-pledge-aqaba",
    title: "First Pledge of Aqaba",
    year: "621 CE",
    hijriYear: "Before Hijri calendar",
    description: "Twelve men from Yathrib (later Medina) pledged allegiance to Muhammad ﷺ during the Hajj season.",
    significance: "The beginning of Islam's spread to Yathrib, laying groundwork for the Hijra.",
    category: "treaty",
    location: "Mina, near Mecca",
    relatedToIsraMiraj:
      "The Isra and Miraj preceded this pledge, strengthening the Prophet's ﷺ resolve and spiritual authority as he began to find support outside of Mecca.",
    order: 8,
  },
  {
    id: "second-pledge-aqaba",
    title: "Second Pledge of Aqaba",
    year: "622 CE",
    hijriYear: "Before Hijri calendar",
    description:
      "Seventy-three men and two women from Yathrib pledged to protect Muhammad ﷺ as they would their own families.",
    significance: "Secured a safe haven for Muslims in Yathrib and directly led to the Hijra.",
    category: "treaty",
    location: "Mina, near Mecca",
    order: 9,
  },
  {
    id: "hijra",
    title: "Hijra (Migration to Medina)",
    year: "622 CE",
    hijriYear: "1 AH (start of Islamic calendar)",
    description: "Muhammad ﷺ and his followers migrated from Mecca to Yathrib (renamed Medina).",
    significance:
      "A pivotal event marking the establishment of the first Islamic community-state and the beginning of the Islamic calendar.",
    category: "journey",
    location: "From Mecca to Medina",
    relatedToIsraMiraj:
      "The Isra and Miraj occurred approximately one year before the Hijra, providing spiritual preparation for this major transition. Both journeys represent divine guidance during critical turning points.",
    order: 10,
  },
  {
    id: "badr",
    title: "Battle of Badr",
    year: "624 CE",
    hijriYear: "2 AH",
    date: "17th of Ramadan",
    description:
      "The first major battle between Muslims and the Meccan Quraysh, resulting in a decisive Muslim victory despite being outnumbered.",
    significance: "A crucial victory that established Muslims as a formidable force and boosted morale.",
    category: "conflict",
    location: "Badr, southwest of Medina",
    order: 11,
  },
  {
    id: "uhud",
    title: "Battle of Uhud",
    year: "625 CE",
    hijriYear: "3 AH",
    description:
      "A battle in which Muslims initially had the upper hand but then suffered losses when archers left their positions.",
    significance: "A test for the believers and a lesson in obedience to the Prophet ﷺ.",
    category: "conflict",
    location: "Mount Uhud, near Medina",
    order: 12,
  },
  {
    id: "khandaq",
    title: "Battle of the Trench (Khandaq)",
    year: "627 CE",
    hijriYear: "5 AH",
    description: "Muslims dug a trench around Medina to defend against a coalition of Meccan and other tribes.",
    significance: "A strategic defensive victory that demonstrated the Prophet's ﷺ military innovation.",
    category: "conflict",
    location: "Medina",
    order: 13,
  },
  {
    id: "hudaybiyyah",
    title: "Treaty of Hudaybiyyah",
    year: "628 CE",
    hijriYear: "6 AH",
    description:
      "A seemingly unfavorable peace treaty with the Meccans that actually provided Muslims with strategic advantages.",
    significance:
      "Described in the Quran as a 'clear victory,' it allowed Islam to spread peacefully and led to many conversions.",
    category: "treaty",
    location: "Hudaybiyyah, on the outskirts of Mecca",
    order: 14,
  },
  {
    id: "khaybar",
    title: "Conquest of Khaybar",
    year: "628 CE",
    hijriYear: "7 AH",
    description: "Muslims conquered the Jewish fortress of Khaybar after its inhabitants broke their treaty.",
    significance: "Secured the northern frontier and increased Muslim resources.",
    category: "conflict",
    location: "Khaybar, north of Medina",
    order: 15,
  },
  {
    id: "mecca-conquest",
    title: "Conquest of Mecca",
    year: "630 CE",
    hijriYear: "8 AH",
    date: "20th of Ramadan",
    description:
      "Muhammad ﷺ led 10,000 Muslims in a peaceful conquest of Mecca after the Quraysh violated the Treaty of Hudaybiyyah.",
    significance:
      "A pivotal victory that was largely bloodless, demonstrating the Prophet's ﷺ mercy. He cleansed the Kaaba of idols and forgave his former persecutors.",
    category: "conflict",
    location: "Mecca",
    relatedToIsraMiraj:
      "The Night Journey began at the Sacred Mosque in Mecca. Years later, the Prophet ﷺ returned to this same location in triumph, fulfilling the divine promise of return mentioned during the Isra and Miraj.",
    order: 16,
  },
  {
    id: "hunayn",
    title: "Battle of Hunayn",
    year: "630 CE",
    hijriYear: "8 AH",
    description:
      "Muslims faced a difficult battle against the tribes of Hawazin and Thaqif shortly after the conquest of Mecca.",
    significance:
      "After initial setbacks, Muslims achieved victory, demonstrating that success comes from Allah, not numbers.",
    category: "conflict",
    location: "Valley of Hunayn, near Mecca",
    order: 17,
  },
  {
    id: "tabuk",
    title: "Expedition to Tabuk",
    year: "630 CE",
    hijriYear: "9 AH",
    description: "Muhammad ﷺ led a large army to Tabuk to confront Byzantine forces, though no battle occurred.",
    significance: "Demonstrated Muslim military strength and readiness to defend against major powers.",
    category: "journey",
    location: "Tabuk, northern Arabia",
    order: 18,
  },
  {
    id: "farewell-pilgrimage",
    title: "Farewell Pilgrimage",
    year: "632 CE",
    hijriYear: "10 AH",
    date: "Dhul-Hijjah",
    description: "Muhammad ﷺ performed his only complete Hajj, delivering his famous Farewell Sermon.",
    significance: "Established the rituals of Hajj and delivered final guidance to the Muslim community.",
    category: "journey",
    location: "Mecca",
    order: 19,
  },
  {
    id: "death",
    title: "Death of Prophet Muhammad ﷺ",
    year: "632 CE",
    hijriYear: "11 AH",
    date: "12th of Rabi al-Awwal",
    description: "Muhammad ﷺ passed away in Medina after a brief illness, having completed his mission.",
    significance:
      "Marked the end of direct divine revelation and the beginning of the era of the Rightly Guided Caliphs.",
    category: "personal",
    location: "Medina",
    order: 20,
  },
]
