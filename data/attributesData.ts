export interface Attribute {
  id: number;
  arabic: string;
  transliteration: string;
  meaning: string;
  verse: string;
  quranText: string; // English translation of the reference verse
  explanation: string; // Tafsir-like details
  hadith: string; // Relevant Hadith if available
}

export const attributes: Attribute[] = [
  {
    id: 1,
    arabic: "ٱلرَّحْمَـٰنُ",
    transliteration: "Ar-Rahman",
    meaning: "The Most Gracious / Beneficent",
    verse: "1:1",
    quranText: "In the Name of Allah, the Most Gracious, the Most Merciful.",
    explanation: "He who wills goodness and mercy for all His creatures. This attribute emphasizes Allah's universal mercy that encompasses all creation, regardless of belief.",
    hadith: "Abu Huraira reported: The Messenger of Allah (PBUH) said, 'Allah has ninety-nine names... whoever memorizes them will enter Paradise.' (Sahih Bukhari)",
  },
  {
    id: 2,
    arabic: "ٱلرَّحِيمُ",
    transliteration: "Ar-Raheem",
    meaning: "The Most Merciful",
    verse: "1:1",
    quranText: "In the Name of Allah, the Most Gracious, the Most Merciful.",
    explanation: "He who acts with extreme kindness, especially towards believers. This highlights Allah's specific mercy in the Hereafter for the faithful.",
    hadith: "Same as above (general Hadith on 99 names).",
  },
  {
    id: 3,
    arabic: "ٱلْمَلِكُ",
    transliteration: "Al-Malik",
    meaning: "The King / Sovereign Lord",
    verse: "1:3",
    quranText: "The Sovereign, the Most Holy, the Source of Peace (and Perfection).",
    explanation: "The One with complete Dominion, Whose rule is clear from imperfection. He owns and controls everything in the universe.",
    hadith: "Same as above.",
  },
  {
    id: 4,
    arabic: "ٱلْقُدُّوسُ",
    transliteration: "Al-Quddus",
    meaning: "The Most Sacred / Holy",
    verse: "59:23",
    quranText: "He is Allah, than Whom there is no other God, the Sovereign Lord, the Holy One...",
    explanation: "The One who is pure and far removed from any imperfection or shortcomings. Evil is not attributed to Him.",
    hadith: "Same as above.",
  },
  {
    id: 5,
    arabic: "ٱلْسَّلَامُ",
    transliteration: "As-Salam",
    meaning: "The Giver of Peace / Perfection",
    verse: "59:23",
    quranText: "...the Source of Peace (and Perfection), the Guardian of Faith...",
    explanation: "The One who is free from every imperfection, granting tranquility to those who are with Him.",
    hadith: "Same as above.",
  },
  {
    id: 6,
    arabic: "ٱلْمُؤْمِنُ",
    transliteration: "Al-Mu’min",
    meaning: "The Infuser of Faith / Most Faithful",
    verse: "59:23",
    quranText: "...the Guardian of Faith, the Preserver of Safety...",
    explanation: "The One who witnesses for Himself that no one is God but Him, and affirms the truthfulness of believers.",
    hadith: "Same as above.",
  },
  {
    id: 7,
    arabic: "ٱلْمُهَيْمِنُ",
    transliteration: "Al-Muhaymin",
    meaning: "The Guardian / Overseer",
    verse: "59:23",
    quranText: "...the Preserver of Safety, the All-Mighty...",
    explanation: "The One who witnesses the sayings and deeds of His creatures, protecting and overseeing all.",
    hadith: "Same as above.",
  },
  {
    id: 8,
    arabic: "ٱلْعَزِيزُ",
    transliteration: "Al-Aziz",
    meaning: "The Almighty / Mighty One",
    verse: "2:129",
    quranText: "Our Lord! And raise up in their midst a messenger from among them who recites unto them Your revelations...",
    explanation: "The Strong, the Defeater who is not defeated. He possesses ultimate power and honor.",
    hadith: "Same as above.",
  },
  {
    id: 9,
    arabic: "ٱلْجَبَّارُ",
    transliteration: "Al-Jabbar",
    meaning: "The Compeller / All Compelling",
    verse: "59:23",
    quranText: "...the Irresistible, the Supreme...",
    explanation: "The One that nothing happens in His Dominion except that which He willed. He mends what is broken.",
    hadith: "Same as above.",
  },
  {
    id: 10,
    arabic: "ٱلْمُتَكَبِّرُ",
    transliteration: "Al-Mutakabbir",
    meaning: "The Supreme / Majestic",
    verse: "59:23",
    quranText: "...Glory be to Allah from that which they attribute (unto Him)!",
    explanation: "The One who is clear from the attributes of creatures and from resembling them. He is the Greatest in all aspects.",
    hadith: "Same as above.",
  },
];
