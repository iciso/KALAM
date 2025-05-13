"use client"

import { useEffect, useState } from "react"
import SurahQuiz from "@/components/surah-quiz"

export default function SurahNasrQuizClient() {
  const [quizData, setQuizData] = useState<any>(null)

  useEffect(() => {
    // This is the quiz data for Surah An-Nasr
    setQuizData({
      surahId: 110,
      surahName: "An-Nasr",
      surahArabicName: "النصر",
      totalVerses: 3,
      type: "Medinan",
      difficulty: "Beginner",
      introduction:
        "Surah An-Nasr (The Divine Support) is the 110th chapter of the Quran. It consists of just 3 verses and was revealed in Medina. This surah is significant as it was one of the last complete surahs revealed to Prophet Muhammad ﷺ, coming shortly after the conquest of Mecca. The surah celebrates Allah's help and victory, particularly referring to the bloodless conquest of Mecca, and instructs the Prophet to glorify Allah and seek His forgiveness.",
      additionalContextElements: [
        {
          title: "Historical Context",
          content: `
          <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
            <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Historical Context</h3>
            <p class="text-blue-700 dark:text-blue-200 mb-3">
              Surah An-Nasr was revealed shortly after the conquest of Mecca in the 10th year of Hijrah (632 CE). 
              This was a momentous event in Islamic history, as the Muslims peacefully entered Mecca, the city from 
              which they had been persecuted and driven out eight years earlier.
            </p>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">The Bloodless Conquest</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                The conquest of Mecca was largely bloodless, with the Prophet Muhammad ﷺ instructing his followers 
                to enter peacefully and not to harm anyone who did not resist. This merciful approach led to many 
                Meccans embracing Islam, fulfilling the prophecy in this surah about people entering Allah's religion 
                in multitudes.
              </p>
            </div>
          </div>
          `,
        },
        {
          title: "Prophetic Farewell",
          content: `
          <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
            <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Prophetic Farewell</h3>
            <p class="text-amber-700 dark:text-amber-200 mb-3">
              This surah holds special significance as it subtly indicated the approaching end of Prophet Muhammad's ﷺ mission and life.
            </p>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
              <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Ibn Abbas's Understanding</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Ibn Abbas (may Allah be pleased with him), the Prophet's cousin and renowned Quranic scholar, understood this surah as 
                signaling the Prophet's approaching death. When Umar ibn Al-Khattab asked him about this interpretation, Ibn Abbas explained 
                that the surah indicated the completion of the Prophet's mission, which implied his time in this world was coming to an end.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Authenticated Evidence</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Imam Bukhari narrates that after the revelation of this surah, the Prophet ﷺ increased his recitation of 
                "Subhan Allah wa bihamdihi, Astaghfirullah wa atubu ilayh" (Glory and praise be to Allah, I seek Allah's forgiveness 
                and turn to Him in repentance). When Aisha asked him about this change, he confirmed that he had been informed of his 
                approaching death through this surah, saying: "When the victory of Allah has come and the conquest, and you see the people 
                entering into the religion of Allah in multitudes, then exalt with praise of your Lord and ask forgiveness of Him. Indeed, 
                He is ever Accepting of repentance."
              </p>
            </div>
          </div>
          `,
        },
      ],
      questions: [
        {
          id: "nasr-1",
          arabic: "نَصْرُ",
          options: [
            { id: "a", text: "Help/Victory", isCorrect: true },
            { id: "b", text: "Guidance", isCorrect: false },
            { id: "c", text: "Revelation", isCorrect: false },
            { id: "d", text: "Blessing", isCorrect: false },
          ],
          rootLetters: "ن ص ر",
          explanation:
            "Nasr means 'help' or 'victory' and comes from the root letters ن ص ر (nun-sad-ra). In this context, it refers to Allah's divine support and the victory He granted to the Prophet Muhammad ﷺ, particularly in the conquest of Mecca.",
        },
        {
          id: "nasr-2",
          arabic: "الْفَتْحُ",
          options: [
            { id: "a", text: "The conquest/opening", isCorrect: true },
            { id: "b", text: "The revelation", isCorrect: false },
            { id: "c", text: "The judgment", isCorrect: false },
            { id: "d", text: "The reward", isCorrect: false },
          ],
          rootLetters: "ف ت ح",
          explanation:
            "Al-Fath means 'the conquest' or 'the opening' and comes from the root letters ف ت ح (fa-ta-ha). It refers specifically to the conquest of Mecca in 8 AH (630 CE), which was a pivotal moment in Islamic history when the Muslims peacefully took control of Mecca without bloodshed.",
        },
        {
          id: "nasr-3",
          arabic: "يَدْخُلُونَ",
          options: [
            { id: "a", text: "They enter", isCorrect: true },
            { id: "b", text: "They leave", isCorrect: false },
            { id: "c", text: "They speak", isCorrect: false },
            { id: "d", text: "They worship", isCorrect: false },
          ],
          rootLetters: "د خ ل",
          explanation:
            "Yadkhuloona means 'they enter' and comes from the root letters د خ ل (dal-kha-lam). The verse describes people entering into Islam in large numbers following the conquest of Mecca, as many Arabs were waiting to see the outcome of the conflict between the Prophet and his own tribe before accepting Islam.",
        },
        {
          id: "nasr-4",
          arabic: "دِينِ اللَّهِ",
          options: [
            { id: "a", text: "The religion of Allah", isCorrect: true },
            { id: "b", text: "The path of Allah", isCorrect: false },
            { id: "c", text: "The book of Allah", isCorrect: false },
            { id: "d", text: "The law of Allah", isCorrect: false },
          ],
          rootLetters: "د ي ن",
          explanation:
            "Deen Allah means 'the religion of Allah' and refers to Islam. The term 'deen' comes from the root letters د ي ن (dal-ya-nun) and encompasses not just ritual worship but a complete way of life, including beliefs, practices, and moral values.",
        },
        {
          id: "nasr-5",
          arabic: "أَفْوَاجًا",
          options: [
            { id: "a", text: "In multitudes/groups", isCorrect: true },
            { id: "b", text: "In secret", isCorrect: false },
            { id: "c", text: "In haste", isCorrect: false },
            { id: "d", text: "In fear", isCorrect: false },
          ],
          rootLetters: "ف و ج",
          explanation:
            "Afwaja means 'in multitudes' or 'in groups' and comes from the root letters ف و ج (fa-waw-jim). This describes how people entered Islam in large numbers after the conquest of Mecca, with entire tribes accepting the faith together rather than as individuals.",
        },
        {
          id: "nasr-6",
          arabic: "فَسَبِّحْ",
          options: [
            { id: "a", text: "Then glorify/exalt", isCorrect: true },
            { id: "b", text: "Then pray", isCorrect: false },
            { id: "c", text: "Then recite", isCorrect: false },
            { id: "d", text: "Then proclaim", isCorrect: false },
          ],
          rootLetters: "س ب ح",
          explanation:
            "Fasabbih is a command meaning 'then glorify' or 'then exalt' and comes from the root letters س ب ح (seen-ba-ha). The prefix 'fa' indicates a sequence or result. This command instructs the Prophet to glorify Allah in gratitude for the victory and success He has granted.",
        },
        {
          id: "nasr-7",
          arabic: "بِحَمْدِ",
          options: [
            { id: "a", text: "With praise of", isCorrect: true },
            { id: "b", text: "With love of", isCorrect: false },
            { id: "c", text: "With fear of", isCorrect: false },
            { id: "d", text: "With hope in", isCorrect: false },
          ],
          rootLetters: "ح م د",
          explanation:
            "Bihamdi means 'with praise of' and comes from the root letters ح م د (ha-mim-dal). The prefix 'bi' means 'with'. This phrase instructs the Prophet to glorify Allah while also praising Him, combining two forms of worship.",
        },
        {
          id: "nasr-8",
          arabic: "رَبِّكَ",
          options: [
            { id: "a", text: "Your Lord", isCorrect: true },
            { id: "b", text: "Your God", isCorrect: false },
            { id: "c", text: "Your Master", isCorrect: false },
            { id: "d", text: "Your Creator", isCorrect: false },
          ],
          rootLetters: "ر ب ب",
          explanation:
            "Rabbika means 'your Lord' and comes from the root letters ر ب ب (ra-ba-ba). The term 'Rabb' encompasses meanings of Lord, Sustainer, Cherisher, and Master. The suffix 'ka' means 'your', making it a personal address to the Prophet Muhammad ﷺ.",
        },
        {
          id: "nasr-9",
          arabic: "وَاسْتَغْفِرْهُ",
          options: [
            { id: "a", text: "And seek His forgiveness", isCorrect: true },
            { id: "b", text: "And thank Him", isCorrect: false },
            { id: "c", text: "And remember Him", isCorrect: false },
            { id: "d", text: "And call upon Him", isCorrect: false },
          ],
          rootLetters: "غ ف ر",
          explanation:
            "Wastaghfirhu means 'and seek His forgiveness' and comes from the root letters غ ف ر (ghayn-fa-ra). The prefix 'wa' means 'and', while 'istaghfir' is a command to seek forgiveness. The suffix 'hu' means 'Him', referring to Allah. This instruction to seek forgiveness even at the moment of victory teaches humility and recognition that all success comes from Allah.",
        },
        {
          id: "nasr-10",
          arabic: "إِنَّهُ",
          options: [
            { id: "a", text: "Indeed, He", isCorrect: true },
            { id: "b", text: "Because He", isCorrect: false },
            { id: "c", text: "When He", isCorrect: false },
            { id: "d", text: "If He", isCorrect: false },
          ],
          explanation:
            "Innahu means 'indeed, He' or 'verily, He'. The term 'inna' is an emphatic particle that strengthens the statement that follows, and the suffix 'hu' means 'He', referring to Allah. This emphasizes the certainty of Allah's attribute mentioned next.",
        },
        {
          id: "nasr-11",
          arabic: "كَانَ",
          options: [
            { id: "a", text: "Is/was", isCorrect: true },
            { id: "b", text: "Becomes", isCorrect: false },
            { id: "c", text: "Remains", isCorrect: false },
            { id: "d", text: "Appears", isCorrect: false },
          ],
          rootLetters: "ك و ن",
          explanation:
            "Kana means 'is' or 'was' and comes from the root letters ك و ن (kaf-waw-nun). In Arabic, when 'kana' is used with Allah's attributes, it indicates that the attribute is eternal and unchanging, not something that began at a certain point.",
        },
        {
          id: "nasr-12",
          arabic: "تَوَّابًا",
          options: [
            { id: "a", text: "Oft-Returning (in forgiveness)", isCorrect: true },
            { id: "b", text: "All-Knowing", isCorrect: false },
            { id: "c", text: "All-Powerful", isCorrect: false },
            { id: "d", text: "Most Merciful", isCorrect: false },
          ],
          rootLetters: "ت و ب",
          explanation:
            "Tawwaban means 'Oft-Returning in forgiveness' or 'Repeatedly Accepting of repentance' and comes from the root letters ت و ب (ta-waw-ba). The intensive form indicates that Allah abundantly accepts repentance from His servants whenever they turn to Him sincerely.",
        },
        {
          id: "nasr-13",
          arabic: "إِذَا جَاءَ",
          options: [
            { id: "a", text: "When comes", isCorrect: true },
            { id: "b", text: "If comes", isCorrect: false },
            { id: "c", text: "After comes", isCorrect: false },
            { id: "d", text: "Before comes", isCorrect: false },
          ],
          rootLetters: "ج ي أ",
          explanation:
            "Idha ja'a means 'when comes' and introduces a conditional statement. 'Idha' means 'when' and indicates certainty about the occurrence of what follows, while 'ja'a' means 'comes' or 'arrives' and comes from the root letters ج ي أ (jim-ya-hamza).",
        },
        {
          id: "nasr-14",
          arabic: "وَرَأَيْتَ",
          options: [
            { id: "a", text: "And you see", isCorrect: true },
            { id: "b", text: "And you hear", isCorrect: false },
            { id: "c", text: "And you know", isCorrect: false },
            { id: "d", text: "And you find", isCorrect: false },
          ],
          rootLetters: "ر أ ي",
          explanation:
            "Wa ra'ayta means 'and you see' and comes from the root letters ر أ ي (ra-hamza-ya). The prefix 'wa' means 'and', while 'ra'ayta' is the past tense verb 'you saw' used in a present context to indicate certainty. This was addressed to Prophet Muhammad ﷺ, referring to his witnessing people embracing Islam in large numbers.",
        },
        {
          id: "nasr-15",
          arabic: "النَّاسَ",
          options: [
            { id: "a", text: "The people", isCorrect: true },
            { id: "b", text: "The believers", isCorrect: false },
            { id: "c", text: "The nations", isCorrect: false },
            { id: "d", text: "The tribes", isCorrect: false },
          ],
          rootLetters: "ن و س",
          explanation:
            "An-Nas means 'the people' or 'mankind' and comes from the root letters ن و س (nun-waw-seen). It refers to people in general, indicating that the message of Islam is universal and not limited to any particular group or tribe.",
        },
      ],
    })
  }, [])

  if (!quizData) {
    return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  return <SurahQuiz quizData={quizData} />
}
