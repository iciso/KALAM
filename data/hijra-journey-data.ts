export interface LocationPoint {
  id: string
  name: string
  arabicName: string
  coordinates: [number, number] // [longitude, latitude]
  description: string
  events: HijraEvent[]
  imageUrl?: string
}

export interface HijraEvent {
  id: string
  title: string
  date: string // Islamic calendar date
  gregorianDate: string // Approximate Gregorian date
  description: string
  importance: string
  order: number // For timeline sequencing
}

export interface RouteSegment {
  id: string
  from: string // Location ID
  to: string // Location ID
  description: string
  distanceKm: number
  durationDays: number
  challenges: string[]
  events: HijraEvent[]
}

// Main locations of the Hijra journey
export const hijraLocations: LocationPoint[] = [
  {
    id: "mecca",
    name: "Mecca",
    arabicName: "مكة",
    coordinates: [39.826168, 21.42251],
    description:
      "The birthplace of Prophet Muhammad and the location of the Kaaba. The persecution of Muslims in Mecca eventually led to the Hijra.",
    events: [
      {
        id: "persecution",
        title: "Persecution of Muslims",
        date: "Dhul-Hijjah, 13 BH",
        gregorianDate: "622 CE",
        description:
          "The Quraysh intensified their persecution of Muslims, making life increasingly difficult for the believers in Mecca.",
        importance: "This persecution was the primary reason for the migration to Medina.",
        order: 1,
      },
      {
        id: "plot",
        title: "Plot Against the Prophet",
        date: "27 Safar, 1 AH",
        gregorianDate: "September 12, 622 CE",
        description:
          "The Quraysh plotted to assassinate Prophet Muhammad by having a young man from each tribe strike him simultaneously, so that no single tribe could be held responsible.",
        importance: "This plot precipitated the immediate departure of the Prophet from Mecca.",
        order: 2,
      },
      {
        id: "ali-bed",
        title: "Ali Sleeps in the Prophet's Bed",
        date: "27 Safar, 1 AH",
        gregorianDate: "September 12, 622 CE",
        description:
          "Ali ibn Abi Talib volunteered to sleep in the Prophet's bed to deceive the assassins, allowing the Prophet to leave Mecca safely.",
        importance: "This act of sacrifice by Ali was crucial for the success of the Hijra.",
        order: 3,
      },
      {
        id: "departure",
        title: "Departure from Mecca",
        date: "27 Safar, 1 AH",
        gregorianDate: "September 12, 622 CE",
        description:
          "Prophet Muhammad and Abu Bakr left Mecca under the cover of darkness, evading the Quraysh who had surrounded his house.",
        importance: "This marked the beginning of the Hijra journey.",
        order: 4,
      },
    ],
    imageUrl: "/images/hijra/mecca.jpg",
  },
  {
    id: "cave-thawr",
    name: "Cave of Thawr",
    arabicName: "غار ثور",
    coordinates: [39.8375, 21.3694],
    description:
      "A cave south of Mecca where Prophet Muhammad and Abu Bakr hid for three days to evade the Quraysh who were searching for them.",
    events: [
      {
        id: "hiding",
        title: "Hiding in the Cave",
        date: "28-30 Safar, 1 AH",
        gregorianDate: "September 13-15, 622 CE",
        description:
          "Prophet Muhammad and Abu Bakr hid in the Cave of Thawr for three days. According to tradition, Allah sent a spider to weave a web across the entrance and a pair of doves to build a nest, making it appear that no one had entered recently.",
        importance:
          "This divine protection was crucial for their survival as the Quraysh search parties came very close to discovering them.",
        order: 5,
      },
      {
        id: "asma-provisions",
        title: "Asma Brings Provisions",
        date: "28-30 Safar, 1 AH",
        gregorianDate: "September 13-15, 622 CE",
        description:
          "Asma bint Abu Bakr brought food and water to the cave, tearing her waistband (nitaq) in two to tie the provisions, earning her the title 'Dhat an-Nitaqayn' (She of the Two Waistbands).",
        importance: "This demonstrates the crucial support role women played in the Hijra journey.",
        order: 6,
      },
      {
        id: "abdullah-intelligence",
        title: "Abdullah Gathers Intelligence",
        date: "28-30 Safar, 1 AH",
        gregorianDate: "September 13-15, 622 CE",
        description:
          "Abdullah ibn Abu Bakr would spend the day in Mecca gathering intelligence about the Quraysh's plans and report back to the Prophet and his father at night.",
        importance: "This intelligence was vital for planning their safe departure from the area.",
        order: 7,
      },
    ],
    imageUrl: "/images/hijra/cave-thawr.jpg",
  },
  {
    id: "quba",
    name: "Quba",
    arabicName: "قباء",
    coordinates: [39.6843, 24.4359],
    description:
      "A village on the outskirts of Medina where Prophet Muhammad stayed for several days and established the first mosque in Islamic history.",
    events: [
      {
        id: "arrival-quba",
        title: "Arrival at Quba",
        date: "8 Rabi al-Awwal, 1 AH",
        gregorianDate: "September 23, 622 CE",
        description:
          "After a journey of about eight days, Prophet Muhammad arrived at Quba, a village on the outskirts of Medina, where he was warmly welcomed by the local Muslims.",
        importance:
          "This marked the end of the dangerous journey and the beginning of the Islamic community in the Medina area.",
        order: 12,
      },
      {
        id: "quba-mosque",
        title: "Establishment of Quba Mosque",
        date: "8-12 Rabi al-Awwal, 1 AH",
        gregorianDate: "September 23-27, 622 CE",
        description:
          "Prophet Muhammad established the Quba Mosque, the first mosque built in Islamic history. The Quran later referred to it as a mosque 'founded on piety'.",
        importance:
          "This was the first institutional establishment of Islam in the new community and set a precedent for mosque-building as a priority.",
        order: 13,
      },
      {
        id: "ali-arrival",
        title: "Ali Joins the Prophet",
        date: "12 Rabi al-Awwal, 1 AH",
        gregorianDate: "September 27, 622 CE",
        description:
          "Ali ibn Abi Talib, after returning the valuables entrusted to the Prophet by the people of Mecca, made the journey to Quba on foot and joined the Prophet there.",
        importance:
          "This completed the core group of the Prophet's closest companions for the establishment of the new community.",
        order: 14,
      },
    ],
    imageUrl: "/images/hijra/quba.jpg",
  },
  {
    id: "medina",
    name: "Medina",
    arabicName: "المدينة",
    coordinates: [39.6142, 24.4672],
    description:
      "Formerly known as Yathrib, Medina became the center of the first Islamic state and the Prophet's home until his death.",
    events: [
      {
        id: "entry-medina",
        title: "Entry into Medina",
        date: "12 Rabi al-Awwal, 1 AH",
        gregorianDate: "September 27, 622 CE",
        description:
          "Prophet Muhammad entered Medina on a Friday, greeted by crowds of people singing 'Tala'al Badru 'Alayna' (The Full Moon Has Risen Upon Us). Each family wanted the honor of hosting him.",
        importance: "This was a momentous occasion marking the beginning of the Islamic state in Medina.",
        order: 15,
      },
      {
        id: "prophets-mosque",
        title: "Building of the Prophet's Mosque",
        date: "Rabi al-Awwal, 1 AH",
        gregorianDate: "October, 622 CE",
        description:
          "One of the first actions in Medina was to purchase land and build a mosque (Masjid an-Nabawi) that would serve as a place of worship, community center, educational institution, and administrative headquarters.",
        importance:
          "The mosque became the center of the new Islamic society and remains one of the holiest sites in Islam.",
        order: 16,
      },
      {
        id: "brotherhood",
        title: "Establishment of Brotherhood",
        date: "Rabi al-Thani, 1 AH",
        gregorianDate: "November, 622 CE",
        description:
          "Prophet Muhammad established a system of brotherhood between the Muhajirun (emigrants from Mecca) and the Ansar (helpers from Medina), pairing each emigrant with a local resident who would share their wealth and homes.",
        importance:
          "This innovative social system helped integrate the refugees and created a new bond of brotherhood that transcended tribal affiliations.",
        order: 17,
      },
      {
        id: "constitution",
        title: "Constitution of Medina",
        date: "1 AH",
        gregorianDate: "622-623 CE",
        description:
          "Prophet Muhammad drafted the Constitution of Medina (Sahifat al-Madinah), a formal agreement between all the tribes and religious communities of Medina, establishing rights, responsibilities, and a framework for governance.",
        importance:
          "This document is considered one of the first written constitutions in the world and established a pluralistic society with religious freedom.",
        order: 18,
      },
    ],
    imageUrl: "/images/hijra/medina.jpg",
  },
  {
    id: "coastal-route",
    name: "Coastal Route",
    arabicName: "الطريق الساحلي",
    coordinates: [39.04, 22.75],
    description:
      "The unconventional coastal route taken by Prophet Muhammad and Abu Bakr to avoid the Quraysh search parties that were monitoring the main road to Medina.",
    events: [
      {
        id: "guide-hired",
        title: "Hiring of Abdullah ibn Urayqit",
        date: "1 Rabi al-Awwal, 1 AH",
        gregorianDate: "September 16, 622 CE",
        description:
          "After leaving the Cave of Thawr, they hired Abdullah ibn Urayqit, a non-Muslim expert guide, to lead them along the less-traveled coastal route to Medina.",
        importance:
          "This strategic decision to take an unusual route was crucial for evading the Quraysh search parties.",
        order: 8,
      },
      {
        id: "suraqas-pursuit",
        title: "Suraqa's Pursuit",
        date: "Rabi al-Awwal, 1 AH",
        gregorianDate: "September, 622 CE",
        description:
          "Suraqa ibn Malik, motivated by the reward offered by the Quraysh, pursued the Prophet but his horse's hooves kept sinking into the sand. After multiple failed attempts, he asked for forgiveness and the Prophet prophesied that he would one day wear the bracelets of the Persian emperor.",
        importance:
          "This incident is seen as a miraculous protection and a fulfilled prophecy, as Suraqa did indeed wear the Persian emperor's bracelets after the Muslim conquest of Persia during Umar's caliphate.",
        order: 9,
      },
    ],
    imageUrl: "/images/hijra/coastal-route.jpg",
  },
  {
    id: "umm-mabad",
    name: "Tent of Umm Ma'bad",
    arabicName: "خيمة أم معبد",
    coordinates: [39.36, 23.3],
    description:
      "A stop along the Hijra route where Prophet Muhammad and Abu Bakr rested and encountered a Bedouin woman named Umm Ma'bad.",
    events: [
      {
        id: "umm-mabad-encounter",
        title: "Encounter with Umm Ma'bad",
        date: "Rabi al-Awwal, 1 AH",
        gregorianDate: "September, 622 CE",
        description:
          "During the journey, they stopped at the tent of Umm Ma'bad al-Khuza'iyya. Despite her having no milk to offer, the Prophet touched an old, dry sheep which then produced abundant milk, enough for everyone to drink and for Umm Ma'bad to fill a container.",
        importance:
          "This miracle became one of the famous signs of prophethood, and Umm Ma'bad's detailed description of the Prophet's appearance is considered one of the most authentic physical descriptions we have.",
        order: 10,
      },
    ],
    imageUrl: "/images/hijra/umm-mabad.jpg",
  },
  {
    id: "ranuna",
    name: "Valley of Ranuna",
    arabicName: "وادي رانوناء",
    coordinates: [39.58, 24.38],
    description:
      "A valley near Medina where the Prophet and Abu Bakr were met by supporters before their final approach to Quba and Medina.",
    events: [
      {
        id: "zubayr-meeting",
        title: "Meeting with Al-Zubayr",
        date: "7 Rabi al-Awwal, 1 AH",
        gregorianDate: "September 22, 622 CE",
        description:
          "In the valley of Ranuna, they met Al-Zubayr ibn al-Awwam and a caravan of Muslim merchants returning from Syria. Al-Zubayr presented white garments to the Prophet and Abu Bakr for their entry into Medina.",
        importance:
          "This meeting symbolized the connection between the Meccan emigrants and the broader Muslim community engaged in trade.",
        order: 11,
      },
    ],
    imageUrl: "/images/hijra/ranuna.jpg",
  },
]

// Route segments connecting the locations
export const hijraRouteSegments: RouteSegment[] = [
  {
    id: "mecca-to-thawr",
    from: "mecca",
    to: "cave-thawr",
    description:
      "The initial journey from Mecca to the Cave of Thawr, traveling south instead of north to confuse pursuers.",
    distanceKm: 5,
    durationDays: 1,
    challenges: [
      "Evading the Quraysh guards surrounding the Prophet's house",
      "Traveling in the opposite direction of Medina to mislead pursuers",
      "Climbing the rugged mountain to reach the cave",
    ],
    events: [],
  },
  {
    id: "thawr-to-coastal",
    from: "cave-thawr",
    to: "coastal-route",
    description:
      "After three days in the cave, they began the journey northward, taking the unusual coastal route to avoid detection.",
    distanceKm: 120,
    durationDays: 2,
    challenges: [
      "Traveling through unfamiliar terrain",
      "Extreme heat during the day",
      "Limited water supplies",
      "Constant fear of pursuit",
    ],
    events: [],
  },
  {
    id: "coastal-to-umm-mabad",
    from: "coastal-route",
    to: "umm-mabad",
    description:
      "Continuing along the coastal route, they reached the tent of Umm Ma'bad where they rested and experienced the miracle of the sheep.",
    distanceKm: 100,
    durationDays: 2,
    challenges: ["Exhaustion from continuous travel", "Limited food supplies", "Navigating without established roads"],
    events: [],
  },
  {
    id: "umm-mabad-to-ranuna",
    from: "umm-mabad",
    to: "ranuna",
    description: "The journey from Umm Ma'bad's tent to the Valley of Ranuna, approaching the outskirts of Medina.",
    distanceKm: 150,
    durationDays: 3,
    challenges: [
      "Increasing anticipation and anxiety as they approached Medina",
      "Physical exhaustion from the long journey",
      "Uncertainty about their reception",
    ],
    events: [],
  },
  {
    id: "ranuna-to-quba",
    from: "ranuna",
    to: "quba",
    description: "The final approach to Quba, where word had spread of the Prophet's imminent arrival.",
    distanceKm: 10,
    durationDays: 1,
    challenges: ["Managing the growing crowds of well-wishers", "Maintaining security despite increasing visibility"],
    events: [],
  },
  {
    id: "quba-to-medina",
    from: "quba",
    to: "medina",
    description: "The ceremonial journey from Quba to Medina, accompanied by crowds of supporters.",
    distanceKm: 5,
    durationDays: 1,
    challenges: [
      "Transitioning from being a refugee to a community leader",
      "Beginning the enormous task of establishing a new society",
    ],
    events: [],
  },
]

// Timeline of the entire Hijra journey
export const hijraTimeline = [...hijraLocations.flatMap((location) => location.events)].sort(
  (a, b) => a.order - b.order,
)

// Historical context before and after the Hijra
export const hijraHistoricalContext = {
  before: [
    {
      id: "first-revelation",
      title: "First Revelation",
      date: "Ramadan, 13 BH",
      gregorianDate: "610 CE",
      description:
        "Prophet Muhammad received the first revelation in the Cave of Hira through Angel Jibreel (Gabriel).",
      importance: "This marked the beginning of his prophethood and the revelation of the Quran.",
    },
    {
      id: "public-preaching",
      title: "Public Preaching",
      date: "10 BH",
      gregorianDate: "613 CE",
      description:
        "After three years of private invitations to Islam, Prophet Muhammad began publicly preaching the message of Islam in Mecca.",
      importance: "This transition to public preaching intensified the opposition from the Meccan leadership.",
    },
    {
      id: "economic-boycott",
      title: "Economic Boycott",
      date: "7-10 BH",
      gregorianDate: "616-619 CE",
      description:
        "The Quraysh imposed a severe economic and social boycott on the Muslims and the Prophet's clan, Banu Hashim, forcing them to withdraw to a valley (Shi'b Abi Talib) where they endured extreme hardship.",
      importance:
        "This three-year period demonstrated the resilience of the early Muslim community and the loyalty of the Prophet's clan, even those who hadn't accepted Islam.",
    },
    {
      id: "year-of-sorrow",
      title: "Year of Sorrow",
      date: "10 BH",
      gregorianDate: "619 CE",
      description:
        "Prophet Muhammad lost both his wife Khadijah and his uncle Abu Talib, who had been his primary emotional and physical protectors.",
      importance:
        "These losses left the Prophet vulnerable to increased persecution and prompted him to seek support outside of Mecca.",
    },
    {
      id: "taif-rejection",
      title: "Rejection at Ta'if",
      date: "10 BH",
      gregorianDate: "619 CE",
      description:
        "Prophet Muhammad traveled to the nearby city of Ta'if seeking protection and support, but was rejected and physically attacked by the people there.",
      importance:
        "This painful experience represented one of the lowest points in the Prophet's mission, yet he responded with patience and prayer rather than cursing those who had harmed him.",
    },
    {
      id: "first-pledge-aqaba",
      title: "First Pledge of Aqaba",
      date: "2 BH",
      gregorianDate: "621 CE",
      description:
        "Twelve men from Yathrib (later Medina) met the Prophet during the Hajj season and pledged allegiance to him, promising to worship only Allah, abstain from theft and adultery, not kill their children, and obey the Prophet in all good things.",
      importance: "This marked the beginning of Islam's spread to Medina and laid the groundwork for the Hijra.",
    },
    {
      id: "musab-medina",
      title: "Mus'ab ibn Umayr in Medina",
      date: "2-1 BH",
      gregorianDate: "621-622 CE",
      description:
        "The Prophet sent Mus'ab ibn Umayr to Medina to teach the new converts about Islam. Through his efforts, Islam spread rapidly in the city.",
      importance: "This strategic move prepared Medina for the arrival of the Prophet and the Meccan Muslims.",
    },
    {
      id: "second-pledge-aqaba",
      title: "Second Pledge of Aqaba",
      date: "1 BH",
      gregorianDate: "622 CE",
      description:
        "Seventy-three men and two women from Medina pledged to protect the Prophet as they would protect their own families, effectively inviting him to migrate to their city.",
      importance:
        "This formal invitation and pledge of military protection made the Hijra possible and established the foundation for the first Islamic state.",
    },
    {
      id: "migration-companions",
      title: "Migration of Companions",
      date: "Dhul-Hijjah, 1 BH",
      gregorianDate: "June-July, 622 CE",
      description:
        "Following the Second Pledge of Aqaba, the Prophet instructed his companions to migrate to Medina in small groups. Most of the Muslims left Mecca, leaving behind only Ali, Abu Bakr, and the Prophet himself, along with those who were forcibly detained.",
      importance:
        "This preliminary migration established a Muslim presence in Medina and demonstrated the commitment of the believers to their faith over tribal and family ties.",
    },
  ],
  after: [
    {
      id: "badr",
      title: "Battle of Badr",
      date: "17 Ramadan, 2 AH",
      gregorianDate: "March 13, 624 CE",
      description:
        "The first major battle between the Muslims and the Quraysh, where a small Muslim force of 313 defeated a much larger Meccan army of about 1,000.",
      importance:
        "This unexpected victory strengthened the position of the Muslims in Medina and was interpreted as divine confirmation of the Prophet's mission.",
    },
    {
      id: "uhud",
      title: "Battle of Uhud",
      date: "7 Shawwal, 3 AH",
      gregorianDate: "March 23, 625 CE",
      description:
        "The second major battle against the Quraysh, where initial Muslim success turned into a setback when archers abandoned their positions.",
      importance:
        "This battle provided important lessons in discipline, obedience, and the nature of testing for the Muslim community.",
    },
    {
      id: "khandaq",
      title: "Battle of the Trench",
      date: "Shawwal, 5 AH",
      gregorianDate: "February, 627 CE",
      description:
        "A coalition of Meccan and other Arab tribes besieged Medina, but were thwarted by a trench the Muslims had dug around the exposed parts of the city.",
      importance:
        "This innovative defensive strategy saved the Muslim community from what could have been a devastating defeat and marked the last major Meccan offensive.",
    },
    {
      id: "hudaybiyyah",
      title: "Treaty of Hudaybiyyah",
      date: "Dhul-Qa'dah, 6 AH",
      gregorianDate: "March, 628 CE",
      description:
        "A seemingly disadvantageous peace treaty between the Muslims and the Quraysh that included a ten-year cessation of hostilities.",
      importance:
        "Despite initial disappointment among some Muslims, this treaty proved to be a strategic victory that allowed Islam to spread rapidly without military opposition.",
    },
    {
      id: "khaybar",
      title: "Conquest of Khaybar",
      date: "Muharram, 7 AH",
      gregorianDate: "May, 628 CE",
      description:
        "The Muslim conquest of the Jewish fortress of Khaybar north of Medina, which had been a center of opposition.",
      importance:
        "This victory secured the northern frontier of the Islamic state and established a precedent for the treatment of conquered peoples.",
    },
    {
      id: "mecca-conquest",
      title: "Conquest of Mecca",
      date: "20 Ramadan, 8 AH",
      gregorianDate: "January 11, 630 CE",
      description:
        "The bloodless conquest of Mecca after the Quraysh violated the Treaty of Hudaybiyyah. The Prophet entered his hometown victoriously but with humility and declared a general amnesty.",
      importance:
        "This pivotal event marked the triumph of Islam in Arabia and demonstrated the Prophet's mercy and strategic wisdom.",
    },
    {
      id: "farewell-pilgrimage",
      title: "Farewell Pilgrimage",
      date: "Dhul-Hijjah, 10 AH",
      gregorianDate: "March, 632 CE",
      description:
        "The Prophet's only complete Hajj, during which he delivered his famous Farewell Sermon outlining the fundamental principles of Islam and human rights.",
      importance:
        "This sermon is considered a summary of Islamic ethics and social principles, emphasizing equality, justice, and the sanctity of life and property.",
    },
    {
      id: "prophets-death",
      title: "Death of the Prophet",
      date: "12 Rabi al-Awwal, 11 AH",
      gregorianDate: "June 8, 632 CE",
      description:
        "Prophet Muhammad passed away in Medina in the apartment of his wife Aisha, having completed his mission of delivering the message of Islam.",
      importance:
        "His death marked the end of revelation and prophethood, and the beginning of the Caliphate period of Islamic history.",
    },
  ],
}
