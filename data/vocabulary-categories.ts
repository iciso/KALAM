export interface VocabularyCategory {
  id: string
  name: string
  description: string
  icon: string
  color: string
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Mixed"
  estimatedWords: number
}

export const vocabularyCategories: VocabularyCategory[] = [
  {
    id: "divine-names-attributes",
    name: "Divine Names & Attributes",
    description: "Names and attributes of Allah mentioned in the Quran",
    icon: "✨",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    difficulty: "Intermediate",
    estimatedWords: 50,
  },
  {
    id: "prayer-worship",
    name: "Prayer & Worship",
    description: "Words related to prayer, worship, and religious practices",
    icon: "🤲",
    color: "bg-gradient-to-r from-blue-500 to-cyan-500",
    difficulty: "Beginner",
    estimatedWords: 75,
  },
  {
    id: "faith-belief",
    name: "Faith & Belief",
    description: "Terms related to faith, belief, and Islamic creed",
    icon: "💫",
    color: "bg-gradient-to-r from-green-500 to-emerald-500",
    difficulty: "Intermediate",
    estimatedWords: 60,
  },
  {
    id: "afterlife-judgment",
    name: "Afterlife & Judgment",
    description: "Words about the Day of Judgment, Paradise, and Hell",
    icon: "⚖️",
    color: "bg-gradient-to-r from-orange-500 to-red-500",
    difficulty: "Advanced",
    estimatedWords: 80,
  },
  {
    id: "prophets-messengers",
    name: "Prophets & Messengers",
    description: "Names and stories of prophets mentioned in the Quran",
    icon: "👨‍🏫",
    color: "bg-gradient-to-r from-indigo-500 to-purple-500",
    difficulty: "Beginner",
    estimatedWords: 40,
  },
  {
    id: "family-relationships",
    name: "Family & Relationships",
    description: "Terms for family members and social relationships",
    icon: "👨‍👩‍👧‍👦",
    color: "bg-gradient-to-r from-pink-500 to-rose-500",
    difficulty: "Beginner",
    estimatedWords: 35,
  },
  {
    id: "time-seasons",
    name: "Time & Seasons",
    description: "Words related to time, days, months, and seasons",
    icon: "🕐",
    color: "bg-gradient-to-r from-yellow-500 to-orange-500",
    difficulty: "Beginner",
    estimatedWords: 45,
  },
  {
    id: "nature-creation",
    name: "Nature & Creation",
    description: "Words about the natural world and Allah's creation",
    icon: "🌍",
    color: "bg-gradient-to-r from-green-500 to-blue-500",
    difficulty: "Intermediate",
    estimatedWords: 70,
  },
  {
    id: "actions-verbs",
    name: "Actions & Verbs",
    description: "Common verbs and action words from the Quran",
    icon: "⚡",
    color: "bg-gradient-to-r from-red-500 to-pink-500",
    difficulty: "Mixed",
    estimatedWords: 90,
  },
  {
    id: "emotions-states",
    name: "Emotions & States",
    description: "Words describing emotions, feelings, and spiritual states",
    icon: "💝",
    color: "bg-gradient-to-r from-purple-500 to-indigo-500",
    difficulty: "Intermediate",
    estimatedWords: 55,
  },
  {
    id: "knowledge-wisdom",
    name: "Knowledge & Wisdom",
    description: "Terms related to knowledge, learning, and wisdom",
    icon: "📚",
    color: "bg-gradient-to-r from-blue-500 to-purple-500",
    difficulty: "Advanced",
    estimatedWords: 65,
  },
  {
    id: "morality-ethics",
    name: "Morality & Ethics",
    description: "Words about good and evil, right and wrong",
    icon: "⚖️",
    color: "bg-gradient-to-r from-emerald-500 to-teal-500",
    difficulty: "Intermediate",
    estimatedWords: 50,
  },
  {
    id: "opening-chapter",
    name: "Opening Chapter (Al-Fatihah)",
    description: "Vocabulary from Surah Al-Fatihah",
    icon: "🌟",
    color: "bg-gradient-to-r from-gold-500 to-yellow-500",
    difficulty: "Beginner",
    estimatedWords: 15,
  },
  {
    id: "short-chapters",
    name: "Short Chapters (Juz Amma)",
    description: "Vocabulary from the short chapters (Surah 92-114)",
    icon: "📖",
    color: "bg-gradient-to-r from-cyan-500 to-blue-500",
    difficulty: "Beginner",
    estimatedWords: 120,
  },
  {
    id: "long-chapters",
    name: "Long Chapters",
    description: "Vocabulary from longer chapters of the Quran",
    icon: "📜",
    color: "bg-gradient-to-r from-slate-500 to-gray-500",
    difficulty: "Advanced",
    estimatedWords: 200,
  },
  {
    id: "general-quranic",
    name: "General Quranic Vocabulary",
    description: "Common words and phrases from throughout the Quran",
    icon: "📝",
    color: "bg-gradient-to-r from-gray-500 to-slate-500",
    difficulty: "Mixed",
    estimatedWords: 150,
  },
]

export function getCategoryById(id: string): VocabularyCategory | undefined {
  return vocabularyCategories.find((category) => category.id === id)
}

export function getCategoryByName(name: string): VocabularyCategory | undefined {
  return vocabularyCategories.find((category) => category.name === name)
}

export function getCategoriesByDifficulty(
  difficulty: "Beginner" | "Intermediate" | "Advanced" | "Mixed",
): VocabularyCategory[] {
  return vocabularyCategories.filter((category) => category.difficulty === difficulty)
}
