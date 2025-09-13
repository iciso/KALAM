import * as fs from "fs"
import * as path from "path"

interface VocabularyWord {
  id: string
  arabic: string
  transliteration: string
  meanings: string[]
  difficulty: "Beginner" | "Intermediate" | "Advanced"
  category: string
  tags: string[]
  examples: Array<{
    id: string
    surahNumber: number
    surahName: string
    ayahNumber: number
    arabicText: string
    translationText: string
    wordLocation: {
      startIndex: number
      endIndex: number
    }
    hasAudio: boolean
  }>
  hasAudio: boolean
  frequency?: number
  rootLetters?: string
}

// Improved categorization rules
const CATEGORY_RULES = {
  "Divine Names & Attributes": {
    keywords: ["الله", "رب", "الرحمن", "الرحيم", "الملك", "القدوس", "السلام", "المؤمن", "المهيمن"],
    patterns: [/^الـ.*/, /.*الله.*/, /.*رب.*/],
  },
  "Prayer & Worship": {
    keywords: ["صلاة", "صل", "اركع", "اسجد", "دعا", "ذكر", "تسبيح", "حمد", "شكر"],
    patterns: [/.*صل.*/, /.*دع.*/, /.*عبد.*/],
  },
  "Faith & Belief": {
    keywords: ["إيمان", "آمن", "كفر", "شرك", "توحيد", "يقين", "هدى", "ضلال"],
    patterns: [/.*آمن.*/, /.*كفر.*/, /.*هد.*/],
  },
  "Afterlife & Judgment": {
    keywords: ["يوم", "الدين", "القيامة", "الآخرة", "جنة", "نار", "حساب", "ميزان", "صراط"],
    patterns: [/.*يوم.*/, /.*آخر.*/, /.*جن.*/, /.*نار.*/],
  },
  "Prophets & Messengers": {
    keywords: ["نبي", "رسول", "محمد", "إبراهيم", "موسى", "عيسى", "نوح", "آدم"],
    patterns: [/.*نبي.*/, /.*رسول.*/],
  },
  "Family & Relationships": {
    keywords: ["أب", "أم", "ابن", "بنت", "زوج", "زوجة", "أخ", "أخت", "عم", "خال"],
    patterns: [/.*أب.*/, /.*أم.*/, /.*زوج.*/],
  },
  "Time & Seasons": {
    keywords: ["يوم", "ليل", "نهار", "صباح", "مساء", "شهر", "سنة", "وقت"],
    patterns: [/.*يوم.*/, /.*ليل.*/, /.*نهار.*/],
  },
  "Nature & Creation": {
    keywords: ["سماء", "أرض", "بحر", "جبل", "شجر", "نبات", "حيوان", "طير"],
    patterns: [/.*سما.*/, /.*أرض.*/, /.*بحر.*/],
  },
  "Actions & Verbs": {
    keywords: ["فعل", "عمل", "قال", "جاء", "ذهب", "أكل", "شرب", "نام"],
    patterns: [/^[يتن].*/, /.*فعل.*/],
  },
  "Emotions & States": {
    keywords: ["حب", "خوف", "رجاء", "حزن", "فرح", "غضب", "رضا", "سكينة"],
    patterns: [/.*حب.*/, /.*خوف.*/, /.*فرح.*/],
  },
  "Knowledge & Wisdom": {
    keywords: ["علم", "حكمة", "فهم", "عقل", "فكر", "تدبر", "قرأ", "كتب"],
    patterns: [/.*علم.*/, /.*حكم.*/, /.*فهم.*/],
  },
  "Morality & Ethics": {
    keywords: ["خير", "شر", "حق", "باطل", "عدل", "ظلم", "صدق", "كذب"],
    patterns: [/.*خير.*/, /.*شر.*/, /.*حق.*/],
  },
}

function categorizeWord(word: VocabularyWord): string {
  const arabic = word.arabic
  const meanings = word.meanings.join(" ").toLowerCase()

  // Check each category
  for (const [categoryName, rules] of Object.entries(CATEGORY_RULES)) {
    // Check keywords
    for (const keyword of rules.keywords) {
      if (arabic.includes(keyword) || meanings.includes(keyword.toLowerCase())) {
        return categoryName
      }
    }

    // Check patterns
    for (const pattern of rules.patterns) {
      if (pattern.test(arabic)) {
        return categoryName
      }
    }
  }

  // Fallback categorization based on Surah number
  if (word.examples && word.examples.length > 0) {
    const surahNumber = word.examples[0].surahNumber
    if (surahNumber === 1) return "Opening Chapter (Al-Fatihah)"
    if (surahNumber >= 92 && surahNumber <= 114) return "Short Chapters (Juz Amma)"
    if (surahNumber >= 2 && surahNumber <= 9) return "Long Chapters"
  }

  return "General Quranic Vocabulary"
}

function assignImprovedTags(word: VocabularyWord): string[] {
  const tags = new Set<string>()

  // Keep existing tags
  if (word.tags) {
    word.tags.forEach((tag) => tags.add(tag))
  }

  // Add category-based tags
  const category = word.category.toLowerCase().replace(/[^a-z0-9]/g, "-")
  tags.add(category)

  // Add difficulty tag
  tags.add(word.difficulty.toLowerCase())

  // Add Surah-based tags
  if (word.examples && word.examples.length > 0) {
    const surahNumber = word.examples[0].surahNumber
    tags.add(`surah-${surahNumber}`)

    // Add Juz tags
    if (surahNumber === 1) tags.add("juz-1")
    if (surahNumber >= 92) tags.add("juz-30")
  }

  // Add length-based tags
  const arabicLength = word.arabic.length
  if (arabicLength <= 3) tags.add("short-word")
  else if (arabicLength <= 6) tags.add("medium-word")
  else tags.add("long-word")

  // Add frequency tags if available
  if (word.frequency) {
    if (word.frequency >= 10) tags.add("high-frequency")
    else if (word.frequency >= 5) tags.add("medium-frequency")
    else tags.add("low-frequency")
  }

  return Array.from(tags).sort()
}

async function improveVocabularyCategories() {
  console.log("🔄 Improving vocabulary categories and tags...\n")

  const dataPath = path.join(process.cwd(), "data", "vocabulary-data-quiz-extracted.ts")

  if (!fs.existsSync(dataPath)) {
    console.error("❌ Quiz-extracted vocabulary file not found!")
    console.log("   Please run the extraction script first.")
    return
  }

  // Read the current file
  const fileContent = fs.readFileSync(dataPath, "utf-8")

  // Extract the vocabulary array using regex
  const arrayMatch = fileContent.match(/export const quizExtractedVocabulary: VocabularyWord\[\] = (\[[\s\S]*\])/m)

  if (!arrayMatch) {
    console.error("❌ Could not parse vocabulary data from file!")
    return
  }

  let vocabularyData: VocabularyWord[]
  try {
    vocabularyData = JSON.parse(arrayMatch[1])
  } catch (error) {
    console.error("❌ Error parsing vocabulary JSON:", error)
    return
  }

  console.log(`📊 Processing ${vocabularyData.length} words...`)

  // Improve categories and tags
  const categoryStats: { [key: string]: number } = {}
  const improvedWords = vocabularyData.map((word) => {
    const improvedCategory = categorizeWord(word)
    const improvedTags = assignImprovedTags({ ...word, category: improvedCategory })

    // Count categories
    categoryStats[improvedCategory] = (categoryStats[improvedCategory] || 0) + 1

    return {
      ...word,
      category: improvedCategory,
      tags: improvedTags,
    }
  })

  // Generate improved file content
  const improvedFileContent = `// Auto-generated vocabulary from Surah quiz data
// Generated on: ${new Date().toISOString()}
// Total words: ${improvedWords.length}
// Categories improved and organized

import { VocabularyWord, Difficulty } from "../types/vocabulary"

export const quizExtractedVocabulary: VocabularyWord[] = ${JSON.stringify(improvedWords, null, 2)}
`

  // Write the improved file
  fs.writeFileSync(dataPath, improvedFileContent, "utf-8")

  console.log("\n✅ Categories and tags improved successfully!")
  console.log("\n📈 Category Distribution:")
  Object.entries(categoryStats)
    .sort(([, a], [, b]) => b - a)
    .forEach(([category, count]) => {
      console.log(`   - ${category}: ${count} words`)
    })

  console.log(`\n📁 Updated file: ${dataPath}`)
  console.log("\n🔍 Sample improvements:")

  // Show some examples
  const samples = improvedWords.slice(0, 5)
  samples.forEach((word, index) => {
    console.log(`\n   ${index + 1}. ${word.arabic} (${word.transliteration})`)
    console.log(`      Category: ${word.category}`)
    console.log(`      Tags: ${word.tags.slice(0, 5).join(", ")}${word.tags.length > 5 ? "..." : ""}`)
  })

  console.log("\n📝 Next steps:")
  console.log("   1. Review the categorization and make manual adjustments if needed")
  console.log("   2. Deploy the updated vocabulary to see improved organization")
  console.log("   3. The enhanced vocabulary service will automatically use these categories")
}

// Run the improvement script
improveVocabularyCategories().catch(console.error)
