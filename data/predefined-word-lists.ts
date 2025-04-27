import type { WordList } from "../types/word-lists"

// Pre-defined word lists based on categories and learning paths
export const predefinedWordLists: WordList[] = [
  // Difficulty-based lists
  {
    id: "predefined-beginner",
    name: "Beginner's Essentials",
    description: "The most essential and common words for beginners to start with",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-001", // Allah
      "word-002", // Rabb
      "word-003", // Rahman
      "word-004", // Raheem
      "word-005", // Yawm
      "word-006", // Deen
      "word-007", // Ibadah
      "word-008", // Sirat
      "word-011", // Iman
      "word-013", // Jannah
      "word-014", // Nar
      "word-015", // Salah
      "word-019", // Naas
      "word-030", // Rasul
      "word-039", // Zakat
    ],
  },
  {
    id: "predefined-intermediate",
    name: "Intermediate Vocabulary",
    description: "Important words for intermediate learners to expand their Quranic vocabulary",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-012", // Taqwa
      "word-022", // Huda
      "word-028", // Ilm
      "word-029", // Hikmah
      "word-035", // Adl
      "word-036", // Ihsan
      "word-037", // Sabr
      "word-038", // Shukr
      "word-040", // Sawm
      "word-041", // Hajj
      "word-061", // Halal
      "word-062", // Haram
      "word-064", // Qiyamah
      "word-067", // Ayah
      "word-068", // Surah
    ],
  },
  {
    id: "predefined-advanced",
    name: "Advanced Concepts",
    description: "Advanced theological and spiritual concepts for deeper understanding",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-051", // Tawhid
      "word-052", // Shirk
      "word-053", // Qada
      "word-054", // Qadar
      "word-055", // Tazkiyah
      "word-056", // Tafakkur
      "word-057", // Tadabbur
      "word-059", // Ikhlas
      "word-060", // Zuhd
      "word-063", // Fard
      "word-065", // Mizan
      "word-069", // Tafsir
      "word-070", // Khushu
      "word-071", // Rida
      "word-073", // Iffah
    ],
  },

  // Thematic lists
  {
    id: "predefined-divine",
    name: "Divine Names & Attributes",
    description: "Words describing Allah's names, attributes, and actions",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-001", // Allah
      "word-002", // Rabb
      "word-003", // Rahman
      "word-004", // Raheem
      "word-023", // Nur
      "word-053", // Qada
      "word-054", // Qadar
      "word-071", // Rida
    ],
  },
  {
    id: "predefined-prophets",
    name: "Prophets & Messengers",
    description: "Words related to prophets, messengers, and revelation",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-030", // Rasul
      "word-031", // Nabi
      "word-032", // Adam
      "word-033", // Ibrahim
      "word-034", // Musa
      "word-009", // Kitab
      "word-067", // Ayah
      "word-068", // Surah
      "word-069", // Tafsir
    ],
  },
  {
    id: "predefined-ethics",
    name: "Ethics & Character",
    description: "Words related to moral values, ethics, and character development",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-012", // Taqwa
      "word-035", // Adl
      "word-036", // Ihsan
      "word-037", // Sabr
      "word-038", // Shukr
      "word-058", // Taqwa
      "word-059", // Ikhlas
      "word-060", // Zuhd
      "word-070", // Khushu
      "word-072", // Amanah
      "word-073", // Iffah
    ],
  },
  {
    id: "predefined-afterlife",
    name: "Afterlife & Judgment",
    description: "Words describing the hereafter, judgment day, paradise, and hellfire",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-005", // Yawm
      "word-006", // Deen
      "word-013", // Jannah
      "word-014", // Nar
      "word-026", // Mawt
      "word-064", // Qiyamah
      "word-065", // Mizan
      "word-066", // Sirat
    ],
  },
  {
    id: "predefined-worship",
    name: "Worship & Devotion",
    description: "Words related to acts of worship and spiritual practices",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-007", // Ibadah
      "word-015", // Salah
      "word-039", // Zakat
      "word-040", // Sawm
      "word-041", // Hajj
      "word-050", // Dua
      "word-055", // Tazkiyah
      "word-059", // Ikhlas
      "word-070", // Khushu
    ],
  },
  {
    id: "predefined-nature",
    name: "Natural World",
    description: "Words describing elements of nature and creation",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-016", // Samaa
      "word-017", // Ard
      "word-018", // Maa
      "word-042", // Shams
      "word-043", // Qamar
      "word-044", // Najm
    ],
  },

  // Functional lists
  {
    id: "predefined-most-frequent",
    name: "Most Frequent Words",
    description: "The most frequently occurring words in the Quran",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-001", // Allah (2699)
      "word-002", // Rabb (975)
      "word-017", // Ard (461)
      "word-067", // Ayah (382)
      "word-005", // Yawm (365)
      "word-010", // Nafs (295)
      "word-009", // Kitab (261)
      "word-019", // Naas (241)
      "word-030", // Rasul (235)
      "word-047", // Khawf (124)
      "word-016", // Samaa (120)
      "word-045", // Ab (117)
      "word-004", // Raheem (114)
      "word-037", // Sabr (103)
      "word-028", // Ilm (105)
    ],
  },
  {
    id: "predefined-first-surah",
    name: "Al-Fatihah Vocabulary",
    description: "All key words from Surah Al-Fatihah (The Opening)",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-001", // Allah
      "word-002", // Rabb
      "word-003", // Rahman
      "word-004", // Raheem
      "word-005", // Yawm
      "word-006", // Deen
      "word-007", // Ibadah
      "word-008", // Sirat
    ],
  },
  {
    id: "predefined-pillars",
    name: "Five Pillars of Islam",
    description: "Words related to the five pillars of Islam",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-011", // Iman (Shahada)
      "word-015", // Salah (Prayer)
      "word-039", // Zakat (Charity)
      "word-040", // Sawm (Fasting)
      "word-041", // Hajj (Pilgrimage)
      "word-051", // Tawhid (related to Shahada)
      "word-059", // Ikhlas (Sincerity in worship)
      "word-063", // Fard (Obligation)
    ],
  },
  {
    id: "predefined-theology",
    name: "Islamic Theology",
    description: "Key theological concepts in Islamic belief",
    createdAt: new Date(),
    updatedAt: new Date(),
    wordIds: [
      "word-051", // Tawhid
      "word-052", // Shirk
      "word-053", // Qada
      "word-054", // Qadar
      "word-011", // Iman
      "word-012", // Taqwa
      "word-022", // Huda
      "word-064", // Qiyamah
    ],
  },
]
