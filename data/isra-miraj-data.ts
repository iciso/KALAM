export interface Location {
  id: string
  name: string
  arabicName: string
  coordinates?: { x: number; y: number } // For 2D visualization
  description: string
  events: Event[]
  imageUrl?: string
  order: number
}

export interface Event {
  id: string
  title: string
  description: string
  significance: string
  order: number
}

export interface ProphetEncounter {
  id: string
  prophetName: string
  arabicName: string
  location: string // Which heaven
  description: string
  greeting: string
  lesson: string
  imageUrl?: string
}

export interface QuranicReference {
  id: string
  surah: string
  ayahNumbers: number[]
  arabicText: string
  translation: string
  context: string
  relevance: string
  tafsir: Tafsir[] // Added tafsir array
}

export interface Tafsir {
  scholar: string
  text: string
  source: string
}

// Main locations of the Isra and Miraj journey
export const israMirajLocations: Location[] = [
  {
    id: "mecca",
    name: "Mecca (Al-Masjid Al-Haram)",
    arabicName: "مكة (المسجد الحرام)",
    coordinates: { x: 50, y: 90 },
    description: "The starting point of the Night Journey, where Prophet Muhammad ﷺ was sleeping near the Kaaba.",
    events: [
      {
        id: "awakening",
        title: "The Awakening",
        description: "Angel Jibreel (Gabriel) woke the Prophet ﷺ and prepared him for the journey.",
        significance: "Marks the beginning of one of the most miraculous events in Islamic history.",
        order: 1,
      },
      {
        id: "buraq",
        title: "Arrival of Al-Buraq",
        description:
          "A white beast, smaller than a mule but larger than a donkey, was brought for the Prophet ﷺ to ride.",
        significance:
          "Al-Buraq was a special mount that could stride as far as it could see, symbolizing the supernatural nature of the journey.",
        order: 2,
      },
    ],
    imageUrl: "/images/isra-miraj/mecca.jpg",
    order: 1,
  },
  {
    id: "jerusalem",
    name: "Jerusalem (Al-Masjid Al-Aqsa)",
    arabicName: "القدس (المسجد الأقصى)",
    coordinates: { x: 60, y: 60 },
    description: "The 'Farthest Mosque' in Jerusalem, the destination of the Isra (Night Journey) portion.",
    events: [
      {
        id: "prayer-prophets",
        title: "Leading the Prophets in Prayer",
        description: "Prophet Muhammad ﷺ led all the previous prophets in prayer at Al-Aqsa Mosque.",
        significance: "Symbolized Muhammad ﷺ as the final messenger and leader of all prophets.",
        order: 1,
      },
      {
        id: "choice-drinks",
        title: "Choice Between Milk and Wine",
        description: "The Prophet ﷺ was offered a choice between a cup of milk and a cup of wine.",
        significance: "His choice of milk represented the natural disposition (fitrah) and right guidance.",
        order: 2,
      },
      {
        id: "miraj-beginning",
        title: "Beginning of the Miraj (Ascension)",
        description: "From Al-Aqsa, the Prophet ﷺ began his ascension through the heavens.",
        significance: "Transition from the horizontal journey (Isra) to the vertical ascension (Miraj).",
        order: 3,
      },
    ],
    imageUrl: "/images/isra-miraj/jerusalem.jpg",
    order: 2,
  },
  {
    id: "first-heaven",
    name: "First Heaven",
    arabicName: "السماء الأولى",
    coordinates: { x: 50, y: 50 },
    description: "The first level of heaven, made of pure silver.",
    events: [
      {
        id: "meeting-adam",
        title: "Meeting Prophet Adam",
        description: "Prophet Muhammad ﷺ met Adam, the father of humanity, who welcomed him.",
        significance: "Adam represents the beginning of humanity, appropriate for the first heaven.",
        order: 1,
      },
      {
        id: "souls-right-left",
        title: "Souls of the Deceased",
        description:
          "Adam was looking at the souls of his descendants - to his right were the blessed ones destined for Paradise, and to his left were those destined for Hell.",
        significance: "Represents the accountability of human actions and the reality of the afterlife.",
        order: 2,
      },
    ],
    imageUrl: "/images/isra-miraj/first-heaven.jpg",
    order: 3,
  },
  {
    id: "second-heaven",
    name: "Second Heaven",
    arabicName: "السماء الثانية",
    coordinates: { x: 50, y: 40 },
    description: "The second level of heaven.",
    events: [
      {
        id: "meeting-isa-yahya",
        title: "Meeting Prophets Isa and Yahya",
        description: "Prophet Muhammad ﷺ met Prophets Jesus (Isa) and John the Baptist (Yahya), who were cousins.",
        significance: "These prophets represent devotion, sacrifice, and the message of pure monotheism.",
        order: 1,
      },
    ],
    imageUrl: "/images/isra-miraj/second-heaven.jpg",
    order: 4,
  },
  {
    id: "third-heaven",
    name: "Third Heaven",
    arabicName: "السماء الثالثة",
    coordinates: { x: 50, y: 35 },
    description: "The third level of heaven.",
    events: [
      {
        id: "meeting-yusuf",
        title: "Meeting Prophet Yusuf",
        description: "Prophet Muhammad ﷺ met Prophet Joseph (Yusuf), who was blessed with extraordinary beauty.",
        significance: "Yusuf represents patience through trials and forgiveness toward those who wronged him.",
        order: 1,
      },
    ],
    imageUrl: "/images/isra-miraj/third-heaven.jpg",
    order: 5,
  },
  {
    id: "fourth-heaven",
    name: "Fourth Heaven",
    arabicName: "السماء الرابعة",
    coordinates: { x: 50, y: 30 },
    description: "The fourth level of heaven.",
    events: [
      {
        id: "meeting-idris",
        title: "Meeting Prophet Idris",
        description: "Prophet Muhammad ﷺ met Prophet Enoch (Idris).",
        significance: "Idris was known for his wisdom, knowledge, and was raised to a high station by Allah.",
        order: 1,
      },
    ],
    imageUrl: "/images/isra-miraj/fourth-heaven.jpg",
    order: 6,
  },
  {
    id: "fifth-heaven",
    name: "Fifth Heaven",
    arabicName: "السماء الخامسة",
    coordinates: { x: 50, y: 25 },
    description: "The fifth level of heaven.",
    events: [
      {
        id: "meeting-harun",
        title: "Meeting Prophet Harun",
        description: "Prophet Muhammad ﷺ met Prophet Aaron (Harun), who was beloved by his people.",
        significance:
          "Harun represents eloquence, support, and brotherhood, as he was the supportive brother of Prophet Musa.",
        order: 1,
      },
    ],
    imageUrl: "/images/isra-miraj/fifth-heaven.jpg",
    order: 7,
  },
  {
    id: "sixth-heaven",
    name: "Sixth Heaven",
    arabicName: "السماء السادسة",
    coordinates: { x: 50, y: 20 },
    description: "The sixth level of heaven.",
    events: [
      {
        id: "meeting-musa",
        title: "Meeting Prophet Musa",
        description:
          "Prophet Muhammad ﷺ met Prophet Moses (Musa), who wept because Muhammad's followers would enter Paradise in greater numbers than his own.",
        significance:
          "Musa represents leadership, courage in confronting tyranny, and direct communication with Allah.",
        order: 1,
      },
    ],
    imageUrl: "/images/isra-miraj/sixth-heaven.jpg",
    order: 8,
  },
  {
    id: "seventh-heaven",
    name: "Seventh Heaven",
    arabicName: "السماء السابعة",
    coordinates: { x: 50, y: 15 },
    description: "The seventh and highest level of heaven.",
    events: [
      {
        id: "meeting-ibrahim",
        title: "Meeting Prophet Ibrahim",
        description:
          "Prophet Muhammad ﷺ met Prophet Abraham (Ibrahim), who was resting against Al-Bayt Al-Ma'mur (The Frequented House).",
        significance:
          "Ibrahim represents pure monotheism, submission to Allah, and is known as the 'Friend of Allah' (Khalilullah).",
        order: 1,
      },
      {
        id: "bayt-mamur",
        title: "Al-Bayt Al-Ma'mur",
        description:
          "The Prophet ﷺ saw Al-Bayt Al-Ma'mur, a sacred house in the seventh heaven directly above the Kaaba, which 70,000 angels visit daily for worship.",
        significance: "Represents the cosmic alignment between earthly and heavenly worship.",
        order: 2,
      },
    ],
    imageUrl: "/images/isra-miraj/seventh-heaven.jpg",
    order: 9,
  },
  {
    id: "sidrat-muntaha",
    name: "Sidrat al-Muntaha",
    arabicName: "سدرة المنتهى",
    coordinates: { x: 50, y: 10 },
    description: "The Lote Tree of the Utmost Boundary, beyond which none can pass.",
    events: [
      {
        id: "lote-tree",
        title: "The Magnificent Lote Tree",
        description:
          "The Prophet ﷺ saw the Sidrat al-Muntaha with its magnificent leaves like elephant ears and fruits like clay jugs, covered in colors beyond description.",
        significance:
          "Marks the boundary beyond which even angels cannot pass, symbolizing the limits of created knowledge.",
        order: 1,
      },
      {
        id: "four-rivers",
        title: "The Four Rivers",
        description:
          "The Prophet ﷺ saw four rivers originating from the base of the Lote Tree: two hidden rivers of Paradise and two manifest rivers (the Nile and Euphrates).",
        significance: "Represents the connection between the earthly and heavenly realms.",
        order: 2,
      },
    ],
    imageUrl: "/images/isra-miraj/sidrat-muntaha.jpg",
    order: 10,
  },
  {
    id: "divine-presence",
    name: "Divine Presence",
    arabicName: "الحضرة الإلهية",
    coordinates: { x: 50, y: 5 },
    description: "The closest any creation has come to the Divine Presence.",
    events: [
      {
        id: "divine-communication",
        title: "Direct Communication with Allah",
        description:
          "The Prophet ﷺ was brought into the Divine Presence where Allah spoke to him directly without intermediary.",
        significance:
          "The highest honor bestowed upon any creation, representing the closest communion with the Divine.",
        order: 1,
      },
      {
        id: "prayer-obligation",
        title: "Prescription of Daily Prayers",
        description:
          "Allah initially prescribed fifty daily prayers, which were eventually reduced to five through the Prophet's intercession and Musa's advice.",
        significance:
          "Established the five daily prayers as a direct link between believers and Allah, with the reward of fifty prayers.",
        order: 2,
      },
      {
        id: "final-revelation",
        title: "Final Verses of Surah Al-Baqarah",
        description:
          "The Prophet ﷺ received the final verses of Surah Al-Baqarah, including the fundamental beliefs of Islam.",
        significance: "These verses contain core principles of faith and Allah's promise of forgiveness for believers.",
        order: 3,
      },
    ],
    imageUrl: "/images/isra-miraj/divine-presence.jpg",
    order: 11,
  },
  {
    id: "return-journey",
    name: "Return to Mecca",
    arabicName: "العودة إلى مكة",
    coordinates: { x: 50, y: 90 },
    description: "The Prophet's return to Mecca after completing the miraculous journey.",
    events: [
      {
        id: "return",
        title: "Return Before Dawn",
        description:
          "The Prophet ﷺ returned to Mecca before dawn, with his bed still warm, completing the entire journey in a fraction of a night.",
        significance: "Emphasizes the miraculous nature of the journey, transcending normal space and time.",
        order: 1,
      },
      {
        id: "telling-journey",
        title: "Recounting the Journey",
        description:
          "The Prophet ﷺ told the Quraysh about his journey, leading to disbelief among many but strengthening Abu Bakr's faith, earning him the title 'As-Siddiq' (The Truthful).",
        significance:
          "Became a test of faith, separating those who believed in the unseen from those who required tangible proof.",
        order: 2,
      },
      {
        id: "jerusalem-description",
        title: "Describing Jerusalem",
        description:
          "When challenged, the Prophet ﷺ accurately described Jerusalem in detail, despite never having visited it physically before.",
        significance: "Provided evidence of the journey's truth to those who sought verification.",
        order: 3,
      },
    ],
    imageUrl: "/images/isra-miraj/return-mecca.jpg",
    order: 12,
  },
]

// Prophet encounters during the journey
export const prophetEncounters: ProphetEncounter[] = [
  {
    id: "adam",
    prophetName: "Adam",
    arabicName: "آدم",
    location: "first-heaven",
    description: "The father of humanity and the first prophet.",
    greeting: "Welcome to the righteous son and the righteous prophet.",
    lesson: "Humanity's origin and destiny, the consequences of our choices.",
    imageUrl: "/images/isra-miraj/prophet-adam.jpg",
  },
  {
    id: "isa-yahya",
    prophetName: "Isa (Jesus) and Yahya (John)",
    arabicName: "عيسى ويحيى",
    location: "second-heaven",
    description: "Cousins who supported each other in their prophetic missions.",
    greeting: "Welcome to the righteous brother and the righteous prophet.",
    lesson: "Family bonds in faith and the importance of supporting one another in righteousness.",
    imageUrl: "/images/isra-miraj/prophets-isa-yahya.jpg",
  },
  {
    id: "yusuf",
    prophetName: "Yusuf (Joseph)",
    arabicName: "يوسف",
    location: "third-heaven",
    description: "Known for his exceptional beauty and patience through trials.",
    greeting: "Welcome to the righteous brother and the righteous prophet.",
    lesson: "Patience during hardship and forgiveness toward those who wrong us.",
    imageUrl: "/images/isra-miraj/prophet-yusuf.jpg",
  },
  {
    id: "idris",
    prophetName: "Idris (Enoch)",
    arabicName: "إدريس",
    location: "fourth-heaven",
    description: "Known for his wisdom and knowledge.",
    greeting: "Welcome to the righteous brother and the righteous prophet.",
    lesson: "The pursuit of knowledge and spiritual elevation.",
    imageUrl: "/images/isra-miraj/prophet-idris.jpg",
  },
  {
    id: "harun",
    prophetName: "Harun (Aaron)",
    arabicName: "هارون",
    location: "fifth-heaven",
    description: "Brother of Musa and known for his eloquence.",
    greeting: "Welcome to the righteous brother and the righteous prophet.",
    lesson: "The power of eloquent speech and supporting others in their mission.",
    imageUrl: "/images/isra-miraj/prophet-harun.jpg",
  },
  {
    id: "musa",
    prophetName: "Musa (Moses)",
    arabicName: "موسى",
    location: "sixth-heaven",
    description: "The prophet who spoke directly with Allah and confronted Pharaoh.",
    greeting: "Welcome to the righteous brother and the righteous prophet.",
    lesson: "Leadership, courage, and direct communion with Allah.",
    imageUrl: "/images/isra-miraj/prophet-musa.jpg",
  },
  {
    id: "ibrahim",
    prophetName: "Ibrahim (Abraham)",
    arabicName: "إبراهيم",
    location: "seventh-heaven",
    description: "The Friend of Allah (Khalilullah) and father of many prophets.",
    greeting: "Welcome to the righteous son and the righteous prophet.",
    lesson: "Pure monotheism, complete submission to Allah, and building legacy through righteousness.",
    imageUrl: "/images/isra-miraj/prophet-ibrahim.jpg",
  },
]

// Quranic references to Isra and Miraj with added Tafsir
export const israMirajQuranicReferences: QuranicReference[] = [
  {
    id: "isra-1",
    surah: "Al-Isra",
    ayahNumbers: [1],
    arabicText:
      "سُبْحَانَ الَّذِي أَسْرَىٰ بِعَبْدِهِ لَيْلًا مِّنَ الْمَسْجِدِ الْحَرَامِ إِلَى الْمَسْجِدِ الْأَقْصَى الَّذِي بَارَكْنَا حَوْلَهُ لِنُرِيَهُ مِنْ آيَاتِنَا ۚ إِنَّهُ هُوَ السَّمِيعُ الْبَصِيرُ",
    translation:
      "Exalted is He who took His Servant by night from al-Masjid al-Haram to al-Masjid al-Aqsa, whose surroundings We have blessed, to show him of Our signs. Indeed, He is the Hearing, the Seeing.",
    context: "This verse directly mentions the Night Journey (Isra) from Mecca to Jerusalem.",
    relevance:
      "The primary Quranic reference to the Isra, naming both the starting point (Al-Masjid Al-Haram in Mecca) and destination (Al-Masjid Al-Aqsa in Jerusalem).",
    tafsir: [
      {
        scholar: "Ibn Kathir",
        text: "Allah glorifies Himself and praises Himself for the power, ability and authority with which He took His servant Muhammad on the Night Journey from Al-Masjid Al-Haram in Makkah to Al-Masjid Al-Aqsa in Jerusalem, which was the place of the prophets since the time of Ibrahim Al-Khalil. The Prophets all gathered there, and Muhammad led them in prayer in their own homeland. This indicates that he is the greatest leader of all, may the peace and blessings of Allah be upon him and upon them all. Allah says, 'Glorified be He,' glorifying Himself above the association of partners with Him, affirming that He is One with no partner or associate, 'Who took His servant.' This refers to Muhammad, and the fact that Allah calls him His 'servant' in this context is more perfect praise, as Allah is confirming his servitude to Him first, then extolling him with the miracle of the Isra'.",
        source: "Tafsir Ibn Kathir",
      },
      {
        scholar: "Al-Tabari",
        text: "The meaning of 'Subhan' (Glorified) is to declare Allah far removed from any imperfection or deficiency. The Night Journey took place when the Prophet was awake, not in a dream, and he was taken bodily from Makkah to Jerusalem. This is what is apparent from the text of the Qur'an and is the belief of the vast majority of scholars. The purpose of the journey was to show the Prophet some of Allah's signs and wonders, to honor him, and to test the people, as this event became a trial for some whose faith was weak.",
        source: "Tafsir al-Tabari",
      },
      {
        scholar: "Al-Qurtubi",
        text: "The scholars differed as to whether the Prophet was taken on the Night Journey in body or in spirit. The majority view, which is the correct one, is that he was taken bodily while awake. This is supported by the wording of the verse, as Allah says 'with His servant' (bi-'abdihi), not 'with the spirit of His servant.' Also, if it had been merely a dream, it would not have been considered such a miracle that many people rejected it. The word 'laylan' (by night) indicates that this journey took place during a part of the night, not the entire night.",
        source: "Tafsir al-Qurtubi",
      },
    ],
  },
  {
    id: "najm-1",
    surah: "An-Najm",
    ayahNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    arabicText:
      "وَالنَّجْمِ إِذَا هَوَىٰ ۝ مَا ضَلَّ صَاحِبُكُمْ وَمَا غَوَىٰ ۝ وَمَا يَنطِقُ عَنِ الْهَوَىٰ ۝ إِنْ هُوَ إِلَّا وَحْيٌ يُوحَىٰ ۝ عَلَّمَهُ شَدِيدُ الْقُوَىٰ ۝ ذُو مِرَّةٍ فَاسْتَوَىٰ ۝ وَهُوَ بِالْأُفُقِ الْأَعْلَىٰ ۝ ثُمَّ دَنَا فَتَدَلَّىٰ ۝ فَكَانَ قَابَ قَوْسَيْنِ أَوْ أَدْنَىٰ ۝ فَأَوْحَىٰ إِلَىٰ عَبْدِهِ مَا أَوْحَىٰ ۝ مَا كَذَبَ الْفُؤَادُ مَا رَأَىٰ ۝ أَفَتُمَارُونَهُ عَلَىٰ مَا يَرَىٰ ۝ وَلَقَدْ رَآهُ نَزْلَةً أُخْرَىٰ ۝ عِندَ سِدْرَةِ الْمُنتَهَىٰ ۝ عِندَهَا جَنَّةُ الْمَأْوَىٰ ۝ إِذْ يَغْشَى السِّدْرَةَ مَا يَغْشَىٰ ۝ مَا زَاغَ الْبَصَرُ وَمَا طَغَىٰ ۝ لَقَدْ رَأَىٰ مِنْ آيَاتِ رَبِّهِ الْكُبْرَىٰ",
    translation:
      "By the star when it descends, Your companion [Muhammad] has not strayed, nor has he erred, Nor does he speak from [his own] inclination. It is not but a revelation revealed, Taught to him by one intense in strength [Gabriel] - One of soundness. And he rose to [his] true form While he was in the higher [part of the] horizon. Then he approached and descended And was at a distance of two bow lengths or nearer. And he revealed to His Servant what he revealed. The heart did not lie [about] what it saw. So will you dispute with him over what he saw? And he certainly saw him in another descent, At the Lote Tree of the Utmost Boundary - Near it is the Garden of Refuge - When there covered the Lote Tree that which covered [it]. The sight [of the Prophet] did not swerve, nor did it transgress [its limit]. He certainly saw of the greatest signs of his Lord.",
    context:
      "These verses describe the Prophet's vision during the Miraj, particularly at Sidrat al-Muntaha (the Lote Tree of the Utmost Boundary).",
    relevance:
      "Provides details about the higher portions of the Miraj journey, including the Prophet's approach to the Divine Presence and his witnessing of great signs.",
    tafsir: [
      {
        scholar: "Ibn Kathir",
        text: "Allah swears by the star when it sets at the beginning of this Surah, and proceeds to declare the truthfulness of His Messenger Muhammad. The phrase 'Your companion has not strayed' means that Muhammad has not deviated from the truth, nor has he been misguided. Rather, he is rightly-guided, firm upon the straight path. 'Nor does he speak from his own inclination' affirms that the Prophet does not speak of his own desire or opinion; rather, what he conveys is revelation inspired to him. Regarding 'taught to him by one intense in strength,' Ibn Kathir explains this refers to Angel Jibreel (Gabriel), who is described as having great power and a mighty appearance. The description of Jibreel appearing 'while he was in the higher horizon' refers to when the Prophet first saw Jibreel in his true angelic form at the beginning of his prophethood. The verses then describe how Jibreel approached and came closer to the Prophet, until he was 'at a distance of two bow lengths or nearer,' indicating extreme closeness during the revelation.",
        source: "Tafsir Ibn Kathir",
      },
      {
        scholar: "Al-Tabari",
        text: "Regarding 'At the Lote Tree of the Utmost Boundary,' Al-Tabari explains that this is a tree in the seventh heaven, beyond which none of Allah's creation passes. It is called the Lote Tree of the Utmost Boundary because the knowledge of the angels stops there, and none has gone beyond it except the Prophet Muhammad during the Mi'raj. 'Near it is the Garden of Refuge' refers to Paradise, which is near this tree. 'When there covered the Lote Tree that which covered it' indicates that the tree was covered with something magnificent from Allah's light and creatures, such as angels, or colors of indescribable beauty. The phrase 'The sight did not swerve, nor did it transgress' means that the Prophet's vision remained steady and focused; he did not look away from what he was shown, nor did he try to see what was hidden from him.",
        source: "Tafsir al-Tabari",
      },
      {
        scholar: "Al-Qurtubi",
        text: "Al-Qurtubi notes that the scholars differed on what the Prophet saw. Some said he saw Jibreel in his true form, while others said he saw Allah (without encompassing Him with his vision). The majority view is that he saw Jibreel. The phrase 'The heart did not lie about what it saw' means that what the Prophet perceived with his heart was true and real, not imagination or illusion. 'He certainly saw of the greatest signs of his Lord' indicates that the Prophet witnessed some of Allah's greatest signs during this journey, which included wonders of the unseen world that no other human had ever witnessed.",
        source: "Tafsir al-Qurtubi",
      },
    ],
  },
  {
    id: "najm-2",
    surah: "An-Najm",
    ayahNumbers: [13, 14, 15, 16, 17, 18],
    arabicText:
      "وَلَقَدْ رَآهُ نَزْلَةً أُخْرَىٰ ۝ عِندَ سِدْرَةِ الْمُنتَهَىٰ ۝ عِندَهَا جَنَّةُ الْمَأْوَىٰ ۝ إِذْ يَغْشَى السِّدْرَةَ مَا يَغْشَىٰ ۝ مَا زَاغَ الْبَصَرُ وَمَا طَغَىٰ ۝ لَقَدْ رَأَىٰ مِنْ آيَاتِ رَبِّهِ الْكُبْرَىٰ",
    translation:
      "And he certainly saw him in another descent, At the Lote Tree of the Utmost Boundary - Near it is the Garden of Refuge - When there covered the Lote Tree that which covered [it]. The sight [of the Prophet] did not swerve, nor did it transgress [its limit]. He certainly saw of the greatest signs of his Lord.",
    context: "These verses specifically mention Sidrat al-Muntaha (the Lote Tree of the Utmost Boundary).",
    relevance:
      "Describes the furthest point reached during the Miraj, beyond which no created being had passed before.",
    tafsir: [
      {
        scholar: "Ibn Kathir",
        text: "The phrase 'And he certainly saw him in another descent' refers to the Prophet seeing Jibreel in his true form a second time during the Night of Isra and Mi'raj. This occurred at the Sidrat al-Muntaha (Lote Tree of the Utmost Boundary), which is in the seventh heaven. Ibn Abbas, Ibn Mas'ud, and other companions explained that this tree is at the edge of the seventh heaven, beyond which no one passes. Ibn Kathir mentions that the tree was covered with colors, butterflies, and angels as numerous as crows, all worshipping Allah. The Prophet's sight remained focused and did not waver from what he was commanded to observe, nor did he look at what he was not permitted to see. The 'greatest signs' that the Prophet saw included wonders of the unseen realm that no human had ever witnessed before.",
        source: "Tafsir Ibn Kathir",
      },
      {
        scholar: "Al-Saadi",
        text: "Al-Saadi explains that 'the Garden of Refuge' (Jannat al-Ma'wa) is so named because it is the abode to which the souls of the believers and the righteous take refuge. Regarding what covered the Lote Tree, he mentions that it was covered with angels, light, and colors of such beauty that no one can describe them. The fact that the Prophet's sight 'did not swerve, nor did it transgress' is praised as perfect etiquette in the presence of Allah, as he focused only on what he was shown and did not try to look beyond what was permitted to him. This demonstrates the Prophet's perfect servitude and discipline in the divine presence.",
        source: "Tafsir al-Saadi",
      },
      {
        scholar: "Al-Alusi",
        text: "Al-Alusi elaborates that the Sidrat al-Muntaha is called by this name because the knowledge of all creation ends there, and none knows what is beyond it except Allah. It is also said that it is where the deeds and souls of the deceased ascend and stop. He mentions that some scholars described the Lote Tree as having fruits like the jars of Hajar (a place in Yemen) and leaves like elephant ears. What covered the tree included various colors, gold locusts, and angels that only Allah could count. The 'greatest signs' that the Prophet saw included Paradise, Hell, and other matters of the unseen that strengthened his faith and certainty.",
        source: "Ruh al-Ma'ani by Al-Alusi",
      },
    ],
  },
  {
    id: "baqarah-1",
    surah: "Al-Baqarah",
    ayahNumbers: [285, 286],
    arabicText:
      "آمَنَ الرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ مِن رَّبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ ۝ لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا ۚ رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ ۖ وَاعْ��ُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا ۚ أَنتَ مَوْلَانَا فَانصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ",
    translation:
      "The Messenger has believed in what was revealed to him from his Lord, and [so have] the believers. All of them have believed in Allah and His angels and His books and His messengers, [saying], 'We make no distinction between any of His messengers.' And they say, 'We hear and we obey. [We seek] Your forgiveness, our Lord, and to You is the [final] destination.' Allah does not charge a soul except [with that within] its capacity. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. 'Our Lord, do not impose blame upon us if we have forgotten or erred. Our Lord, and lay not upon us a burden like that which You laid upon those before us. Our Lord, and burden us not with that which we have no ability to bear. And pardon us; and forgive us; and have mercy upon us. You are our protector, so give us victory over the disbelieving people.'",
    context: "These final verses of Surah Al-Baqarah were revealed to the Prophet during the Night Journey.",
    relevance:
      "These verses contain fundamental principles of faith and were a special gift given directly to the Prophet during his ascension.",
    tafsir: [
      {
        scholar: "Ibn Kathir",
        text: "These two verses are among the greatest in the Qur'an. The Prophet said: 'Whoever recites the last two verses of Surat Al-Baqarah at night, they will suffice him.' This means they will protect him from any harm during that night. It is reported in Sahih Muslim that these verses were given to the Prophet during the Night of Isra and Mi'raj as a special gift. Allah first describes the faith of the Messenger and the believers, who affirm their belief in Allah, His angels, His books, and His messengers without discriminating between any of them. Their response to Allah's commands is 'We hear and we obey,' showing their complete submission. The believers then seek Allah's forgiveness, acknowledging that to Him is the final return.",
        source: "Tafsir Ibn Kathir",
      },
      {
        scholar: "Al-Tabari",
        text: "Al-Tabari explains that the statement 'Allah does not burden a soul beyond its capacity' is a mercy from Allah, as He only requires from His servants what they are capable of doing. The phrase 'It will have what it has earned and bear what it has earned' means that each soul will be rewarded for its good deeds and held accountable for its sins. The believers then make several supplications, asking Allah not to hold them accountable for what they forget or mistakes they make, not to burden them with difficult obligations as were given to previous nations, and not to test them beyond their capacity. They conclude by asking for Allah's pardon, forgiveness, mercy, and victory over disbelievers.",
        source: "Tafsir al-Tabari",
      },
      {
        scholar: "Ibn Abbas",
        text: "Ibn Abbas narrated that when these verses were revealed during the Mi'raj, Allah said after each supplication: 'I have done so.' This indicates that Allah accepted each request made in these verses. Ibn Abbas also explained that the 'burden' mentioned in 'lay not upon us a burden like that which You laid upon those before us' refers to the difficult religious obligations that were placed on previous nations, such as having to cut off parts of their garments that were impure, and the prohibition of working on the Sabbath for the Jews.",
        source: "Tafsir Ibn Abbas",
      },
      {
        scholar: "Al-Qurtubi",
        text: "Al-Qurtubi mentions that these verses encompass the fundamentals of faith and the etiquette of supplication. He notes that the Prophet said: 'I was given the concluding verses of Surat Al-Baqarah from a treasure beneath the Throne that was not given to any prophet before me.' This indicates the special status of these verses. Al-Qurtubi also explains that the phrase 'We make no distinction between any of His messengers' means in terms of believing in them, not in terms of their ranks, as Allah Himself has favored some prophets over others.",
        source: "Tafsir al-Qurtubi",
      },
    ],
  },
]

// Historical context and significance
export const israMirajContext = {
  timing: {
    islamicDate: "27th of Rajab (according to tradition)",
    period: "Late Meccan period, approximately one year before the Hijra",
    significance:
      "Came during a time of great hardship for the Prophet ﷺ, after the Year of Sorrow when he lost his wife Khadijah and uncle Abu Talib.",
  },

  historicalSignificance: [
    "Provided spiritual strength to the Prophet ﷺ during a difficult period",
    "Established the five daily prayers as a direct connection between believers and Allah",
    "Connected the three sacred mosques: Al-Masjid Al-Haram, Al-Masjid Al-Aqsa, and the heavenly Al-Bayt Al-Ma'mur",
    "Demonstrated the Prophet's ﷺ status as the leader of all prophets",
    "Offered a glimpse into the unseen realms, including Paradise, Hell, and the seven heavens",
    "Became a test of faith for the believers, distinguishing between those who believed in the unseen and those who required tangible proof",
  ],

  spiritualLessons: [
    "The importance of prayer as a direct link to Allah",
    "The reality of the afterlife and accountability",
    "The continuity of prophetic guidance throughout human history",
    "The transcendence of physical limitations through spiritual elevation",
    "The Prophet's ﷺ unique position as the seal of the prophets and beloved of Allah",
  ],
}

// Visions of Paradise and Hell
export const afterlifeVisions = {
  paradise: [
    {
      id: "paradise-rivers",
      title: "Rivers of Paradise",
      description:
        "The Prophet ﷺ saw the four rivers of Paradise, two hidden and two manifest (corresponding to the Nile and Euphrates).",
      significance: "Represents the connection between earthly blessings and heavenly rewards.",
    },
    {
      id: "paradise-fragrance",
      title: "Divine Fragrance",
      description: "The Prophet ﷺ experienced the beautiful fragrance of Paradise that surpassed any earthly scent.",
      significance: "Sensory experience of Paradise's pleasures beyond human imagination.",
    },
  ],

  hell: [
    {
      id: "backbiters",
      title: "Punishment of Backbiters",
      description:
        "People with copper nails scratching their faces and chests, punished for backbiting and attacking people's honor.",
      significance: "Warning against the serious sin of harming others' reputation.",
    },
    {
      id: "wealth-hoarders",
      title: "Punishment of Wealth Hoarders",
      description: "People with heads being crushed with rocks, punished for neglecting obligatory prayers.",
      significance: "Warning against neglecting prayer, the pillar of faith.",
    },
    {
      id: "riba-consumers",
      title: "Punishment of Riba Consumers",
      description: "People swimming in a river of blood, being fed stones, punished for consuming interest (riba).",
      significance: "Warning against the major sin of dealing with interest in financial transactions.",
    },
    {
      id: "adulterers",
      title: "Punishment of Adulterers",
      description:
        "People with fresh, cooked meat and rotten meat, choosing to eat the rotten meat, representing adulterers who choose forbidden relationships over lawful ones.",
      significance: "Warning against adultery and choosing the unlawful over what Allah has made lawful.",
    },
  ],
}

export const authenticHadithReferences = [
  {
    id: "bukhari-3207",
    narrator: "Anas ibn Malik",
    collection: "Sahih al-Bukhari",
    bookNumber: "Book of the Beginning of Creation",
    hadithNumber: "3207",
    text: "The Messenger of Allah (ﷺ) said: 'I was brought the Buraq, which is an animal white and long, larger than a donkey but smaller than a mule, who would place his hoof at a distance equal to the range of vision. I mounted it and came to Jerusalem, then tethered it to the ring used by the prophets. Then I entered the mosque and prayed two rak'ahs there...'",
    relevance: "Describes the beginning of the journey and the Buraq, the heavenly mount",
    location: "mecca",
  },
  {
    id: "bukhari-3887",
    narrator: "Malik ibn Sa'sa'ah",
    collection: "Sahih al-Bukhari",
    bookNumber: "Book of Virtues",
    hadithNumber: "3887",
    text: "The Prophet (ﷺ) said: 'While I was at the House in a state midway between sleep and wakefulness, (an angel recognized me) as the man lying between two men. A golden tray full of wisdom and belief was brought to me and my body was cut open from the throat to the lower part of the abdomen and then my abdomen was washed with Zamzam water and (my heart was) filled with wisdom and belief.'",
    relevance: "Describes the purification of the Prophet's heart before the journey",
    location: "mecca",
  },
  {
    id: "muslim-162",
    narrator: "Abu Dharr",
    collection: "Sahih Muslim",
    bookNumber: "Book of Faith",
    hadithNumber: "162",
    text: "The Messenger of Allah (ﷺ) said: 'The roof of my house was opened when I was in Mecca, and Jibreel descended and opened my chest, then washed it with Zamzam water. Then he brought a golden basin filled with wisdom and faith, poured it into my chest, and sealed it. Then he took me by the hand and ascended with me to the nearest heaven...'",
    relevance: "Describes the beginning of the ascension (Mi'raj) to the heavens",
    location: "mecca",
  },
  {
    id: "bukhari-349",
    narrator: "Ibn 'Abbas",
    collection: "Sahih al-Bukhari",
    bookNumber: "Book of Prayer",
    hadithNumber: "349",
    text: "The Prophet (ﷺ) said: 'Then Jibreel took me by the hand and ascended with me to the nearest heaven... Then we ascended to the second heaven... (and so on until the seventh heaven). In each heaven, he met various prophets including Adam, Yahya (John), 'Isa (Jesus), Yusuf (Joseph), Idris (Enoch), Harun (Aaron), Musa (Moses), and Ibrahim (Abraham).'",
    relevance: "Details the Prophet's meetings with previous prophets in different heavens",
    location: "first-heaven",
  },
  {
    id: "bukhari-3342",
    narrator: "Abu Hurayrah",
    collection: "Sahih al-Bukhari",
    bookNumber: "Book of the Prophets",
    hadithNumber: "3342",
    text: "On the night of Isra, the Prophet (ﷺ) was shown two rivers (in Paradise). He asked Jibreel about them, and he said: 'These are the Nile and the Euphrates at their sources.' Then he was shown Sidrat al-Muntaha (the Lote Tree of the Utmost Boundary)...",
    relevance: "Describes what the Prophet saw at Sidrat al-Muntaha",
    location: "sidrat-muntaha",
  },
  {
    id: "muslim-164",
    narrator: "Anas ibn Malik",
    collection: "Sahih Muslim",
    bookNumber: "Book of Faith",
    hadithNumber: "164",
    text: "The Prophet (ﷺ) said: 'Then I was taken up to Sidrat al-Muntaha, whose fruits were like the pitchers of Hajar and its leaves were like the ears of elephants. Jibreel said: This is Sidrat al-Muntaha. There were four rivers, two hidden and two visible. I asked: What are these, O Jibreel? He said: The two hidden rivers are rivers in Paradise, and the visible ones are the Nile and the Euphrates.'",
    relevance: "Provides more details about Sidrat al-Muntaha and the rivers of Paradise",
    location: "sidrat-muntaha",
  },
  {
    id: "bukhari-7517",
    narrator: "Ibn 'Abbas",
    collection: "Sahih al-Bukhari",
    bookNumber: "Book of Tawhid",
    hadithNumber: "7517",
    text: "The Prophet (ﷺ) said: 'Then fifty prayers were made obligatory for me. I returned and passed by Musa, who asked: What have you been ordered to do? I said: I have been ordered to offer fifty prayers. Musa said: Your followers cannot bear fifty prayers. Go back to your Lord and ask for a reduction...' This continued until the prayers were reduced to five. Musa still advised him to ask for a further reduction, but the Prophet (ﷺ) said: 'I feel shy of asking my Lord again, but I am pleased and submit to His order.'",
    relevance: "Describes how the five daily prayers were prescribed during the Mi'raj",
    location: "divine-presence",
  },
  {
    id: "bukhari-3035",
    narrator: "Jabir ibn Abdullah",
    collection: "Sahih al-Bukhari",
    bookNumber: "Book of Beginning of Creation",
    hadithNumber: "3035",
    text: "The Prophet (ﷺ) said: 'When the Quraysh disbelieved me regarding my Night Journey, I stood in Al-Hijr and Allah displayed Jerusalem before me, and I began to inform them about its signs while looking at it.'",
    relevance: "Shows how the Prophet proved his journey to the disbelievers by describing Jerusalem in detail",
    location: "jerusalem",
  },
  {
    id: "muslim-172",
    narrator: "Abu Hurayrah",
    collection: "Sahih Muslim",
    bookNumber: "Book of Faith",
    hadithNumber: "172",
    text: "The Prophet (ﷺ) said: 'I saw myself in a group of prophets, and behold, Moses was standing there offering prayer... And behold, Jesus was standing there offering prayer... And behold, Abraham was standing there offering prayer. I was most similar to Abraham in appearance.'",
    relevance: "Describes the Prophet leading other prophets in prayer at Al-Aqsa Mosque",
    location: "jerusalem",
  },
  {
    id: "bukhari-5576",
    narrator: "Malik ibn Sa'sa'ah",
    collection: "Sahih al-Bukhari",
    bookNumber: "Book of Drinks",
    hadithNumber: "5576",
    text: "The Prophet (ﷺ) said: 'Then I was presented with two vessels, one containing milk and the other containing wine. I was told: Take whichever you want. So I took the milk and drank it. It was said to me: You have been guided to the Fitrah (natural disposition) - or - You have chosen the Fitrah. Had you taken the wine, your Ummah would have gone astray.'",
    relevance: "Describes a symbolic choice offered to the Prophet during the journey",
    location: "jerusalem",
  },
]
