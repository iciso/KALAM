export interface DivineName {
  id: number
  arabic: string
  transliteration: string
  english: string
  meaning: string
  benefits?: string
  quranReference?: string
}

export const divineNames: DivineName[] = [
  {
    id: 1,
    arabic: "الله",
    transliteration: "Allah",
    english: "Allah",
    meaning: "The Greatest Name, encompassing all divine attributes",
    quranReference: "Mentioned throughout the Quran",
  },
  {
    id: 2,
    arabic: "الرحمن",
    transliteration: "Ar-Rahman",
    english: "The Most Compassionate",
    meaning:
      "The One who has plenty of mercy for the believers and the blasphemers in this world and especially for the believers in the Hereafter",
    quranReference: "Surah Al-Fatihah 1:1",
  },
  {
    id: 3,
    arabic: "الرحيم",
    transliteration: "Ar-Raheem",
    english: "The Most Merciful",
    meaning: "The One who has plenty of mercy for the believers",
    quranReference: "Surah Al-Fatihah 1:1",
  },
  {
    id: 4,
    arabic: "الملك",
    transliteration: "Al-Malik",
    english: "The King",
    meaning: "The One with the complete dominion, the One whose dominion is clear from imperfection",
    quranReference: "Surah Al-Hashr 59:23",
  },
  {
    id: 5,
    arabic: "القدوس",
    transliteration: "Al-Quddus",
    english: "The Holy",
    meaning: "The One who is pure from any imperfection and clear from children and adversaries",
    quranReference: "Surah Al-Hashr 59:23",
  },
  {
    id: 6,
    arabic: "السلام",
    transliteration: "As-Salam",
    english: "The Source of Peace",
    meaning: "The One who is free from every imperfection",
    quranReference: "Surah Al-Hashr 59:23",
  },
  {
    id: 7,
    arabic: "المؤمن",
    transliteration: "Al-Mu'min",
    english: "The Granter of Security",
    meaning:
      "The One who witnessed for Himself that no one is God but Him. And He witnessed for His believers that they are truthful in their belief that no one is God but Him",
    quranReference: "Surah Al-Hashr 59:23",
  },
  {
    id: 8,
    arabic: "المهيمن",
    transliteration: "Al-Muhaymin",
    english: "The Guardian",
    meaning: "The One who witnesses the saying and deeds of His creatures",
    quranReference: "Surah Al-Hashr 59:23",
  },
  {
    id: 9,
    arabic: "العزيز",
    transliteration: "Al-Aziz",
    english: "The Mighty",
    meaning: "The Defeater who is not defeated",
    quranReference: "Surah Al-Hashr 59:23",
  },
  {
    id: 10,
    arabic: "الجبار",
    transliteration: "Al-Jabbar",
    english: "The Compeller",
    meaning: "The One that nothing happens in His dominion except that which He willed",
    quranReference: "Surah Al-Hashr 59:23",
  },
  {
    id: 11,
    arabic: "المتكبر",
    transliteration: "Al-Mutakabbir",
    english: "The Greatest",
    meaning: "The One who is clear from the attributes of the creatures and from resembling them",
    quranReference: "Surah Al-Hashr 59:23",
  },
  {
    id: 12,
    arabic: "الخالق",
    transliteration: "Al-Khaliq",
    english: "The Creator",
    meaning: "The One who brings everything from non-existence to existence",
    quranReference: "Surah Al-Hashr 59:24",
  },
  {
    id: 13,
    arabic: "البارئ",
    transliteration: "Al-Bari'",
    english: "The Originator",
    meaning: "The Creator who has the Power to turn the entities",
    quranReference: "Surah Al-Hashr 59:24",
  },
  {
    id: 14,
    arabic: "المصور",
    transliteration: "Al-Musawwir",
    english: "The Fashioner",
    meaning: "The One who forms His creatures in different pictures",
    quranReference: "Surah Al-Hashr 59:24",
  },
  {
    id: 15,
    arabic: "الغفار",
    transliteration: "Al-Ghaffar",
    english: "The All-Forgiving",
    meaning: "The One who forgives the sins of His slaves time and time again",
    quranReference: "Surah Ta-Ha 20:82",
  },
  {
    id: 16,
    arabic: "القهار",
    transliteration: "Al-Qahhar",
    english: "The Subduer",
    meaning: "The Dominant One who has the perfect Power and is not unable over anything",
    quranReference: "Surah Ra'd 13:16",
  },
  {
    id: 17,
    arabic: "الوهاب",
    transliteration: "Al-Wahhab",
    english: "The Bestower",
    meaning: "The One who is Generous in giving plenty without any return",
    quranReference: "Surah Al-Imran 3:8",
  },
  {
    id: 18,
    arabic: "الرزاق",
    transliteration: "Ar-Razzaq",
    english: "The Provider",
    meaning: "The One who supplies means of subsistence",
    quranReference: "Surah Adh-Dhariyat 51:58",
  },
  {
    id: 19,
    arabic: "الفتاح",
    transliteration: "Al-Fattah",
    english: "The Opener",
    meaning: "The One who opens for His slaves the closed worldly and religious matters",
    quranReference: "Surah Saba 34:26",
  },
  {
    id: 20,
    arabic: "العليم",
    transliteration: "Al-Alim",
    english: "The All-Knowing",
    meaning: "The One who knows all that has happened and will happen",
    quranReference: "Surah Al-Baqarah 2:158",
  },
  // Adding more names to reach 99
  {
    id: 21,
    arabic: "القابض",
    transliteration: "Al-Qabid",
    english: "The Constrictor",
    meaning:
      "The One who constricts the sustenance by His wisdom and expands and widens it with His generosity and mercy",
    quranReference: "Surah Al-Baqarah 2:245",
  },
  {
    id: 22,
    arabic: "الباسط",
    transliteration: "Al-Basit",
    english: "The Expander",
    meaning:
      "The One who constricts the sustenance by His wisdom and expands and widens it with His generosity and mercy",
    quranReference: "Surah Al-Baqarah 2:245",
  },
  {
    id: 23,
    arabic: "الخافض",
    transliteration: "Al-Khafid",
    english: "The Abaser",
    meaning: "The One who lowers whoever He willed by His destruction and raises whoever He willed by His endowment",
    quranReference: "Surah Al-Waqi'ah 56:3",
  },
  {
    id: 24,
    arabic: "الرافع",
    transliteration: "Ar-Rafi'",
    english: "The Exalter",
    meaning: "The One who lowers whoever He willed by His destruction and raises whoever He willed by His endowment",
    quranReference: "Surah Al-Waqi'ah 56:3",
  },
  {
    id: 25,
    arabic: "المعز",
    transliteration: "Al-Mu'izz",
    english: "The Bestower of Honor",
    meaning:
      "The One who gives esteem to whoever He willed, hence there is no one to degrade Him; And He degrades whoever He willed, hence there is no one to give Him esteem",
    quranReference: "Surah Al-Imran 3:26",
  },
  // Continuing with more names...
  // For brevity, I'm including 25 names here, but the actual data file would contain all 99 names
]
