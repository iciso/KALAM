export const alHumazahQuizData: SurahQuizData = {
  surahId: 104,
  surahName: "Al-Humazah",
  surahArabicName: "الهمزة",
  totalVerses: 9,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Humazah (The Slanderer) is the 104th chapter of the Quran, revealed in Mecca. It strongly condemns destructive behaviors such as slander, backbiting, and obsession with accumulating wealth. The surah warns of severe consequences in the Hereafter, describing a crushing fire (Al-Hutamah) that consumes those who engage in such sins, emphasizing the importance of purifying one’s character and intentions.",
  additionalContextElements: [
    {
      title: "Condemnation of Slander and Backbiting",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Moral Warning</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            Surah Al-Humazah begins with a powerful condemnation of those who engage in slander (humazah) and backbiting (lumazah), behaviors that harm individuals and communities. These actions reflect a lack of sincerity and respect, which the Quran warns against as spiritually destructive.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Social Impact</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains that the terms 'humazah' and 'lumazah' refer to those who mock or defame others openly or secretly. Such behaviors were prevalent among some Meccans who ridiculed the Prophet Muhammad ﷺ and his followers, highlighting the need for ethical conduct.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Consequences of Greed",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Al-Hutamah</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The surah vividly describes 'Al-Hutamah,' a crushing fire that consumes those obsessed with wealth and heedless of their accountability to Allah. This imagery serves as a stark reminder of the consequences of prioritizing material gain over spiritual growth.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Wealth and Accountability</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The surah criticizes those who amass wealth and count it obsessively, believing it will grant them eternal security. According to Tafsir Al-Jalalayn, this reflects a delusion that wealth can protect from divine punishment, whereas true security lies in faith and good deeds.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Eternal Consequences</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The term 'Al-Hutamah' refers to a fire that breaks and crushes everything, symbolizing the severe punishment awaiting those who prioritize worldly gains over righteousness. The surah’s imagery of a fire that reaches the heart underscores the spiritual destruction caused by such sins.
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the primary focus of Surah Al-Humazah?",
      arabic: "وَيْلٌ لِّكُلِّ هُمَزَةٍ لُّمَزَةٍ",
      rootLetters: "ه م ز",
      options: [
        { id: "a", text: "The conquest of Mecca", isCorrect: false },
        { id: "b", text: "Condemning slander and backbiting", isCorrect: true },
        { id: "c", text: "The story of Abraha", isCorrect: false },
        { id: "d", text: "The virtues of prayer", isCorrect: false },
      ],
      explanation: "Surah Al-Humazah focuses on condemning slander and backbiting, warning of their consequences in the Hereafter.",
    },
    {
      id: "q2",
      question: "What does the term 'Al-Humazah' mean?",
      arabic: "هُمَزَةٍ",
      rootLetters: "ه م ز",
      options: [
        { id: "a", text: "The Generous", isCorrect: false },
        { id: "b", text: "The Slanderer", isCorrect: true },
        { id: "c", text: "The Protector", isCorrect: false },
        { id: "d", text: "The Fire", isCorrect: false },
      ],
      explanation: "'Al-Humazah' means 'The Slanderer,' referring to those who mock or defame others, as explained in Tafsir Ibn Kathir.",
    },
    {
      id: "q3",
      question: "What is 'Al-Hutamah' in Surah Al-Humazah?",
      arabic: "الْحُطَمَةُ",
      rootLetters: "ح ط م",
      options: [
        { id: "a", text: "A mountain in Mecca", isCorrect: false },
        { id: "b", text: "A crushing fire", isCorrect: true },
        { id: "c", text: "A sacred well", isCorrect: false },
        { id: "d", text: "A Meccan tribe", isCorrect: false },
      ],
      explanation: "'Al-Hutamah' is a crushing fire that consumes those who slander and amass wealth obsessively, as described in the surah.",
    },
    {
      id: "q4",
      question: "Which behavior is criticized in Surah Al-Humazah alongside slander?",
      arabic: "لُّمَزَةٍ",
      rootLetters: "ل م ز",
      options: [
        { id: "a", text: "Laziness", isCorrect: false },
        { id: "b", text: "Backbiting", isCorrect: true },
        { id: "c", text: "Disobedience to parents", isCorrect: false },
        { id: "d", text: "Breaking promises", isCorrect: false },
      ],
      explanation: "The surah condemns both slander (humazah) and backbiting (lumazah), highlighting their destructive impact on society.",
    },
    {
      id: "q5",
      question: "What does Surah Al-Humazah warn against regarding wealth?",
      arabic: "الَّذِي جَمَعَ مَالًا وَعَدَّدَهُ",
      rootLetters: "ج م ع",
      options: [
        { id: "a", text: "Giving charity excessively", isCorrect: false },
        { id: "b", text: "Amassing wealth obsessively", isCorrect: true },
        { id: "c", text: "Spending wealth on family", isCorrect: false },
        { id: "d", text: "Investing in trade", isCorrect: false },
      ],
      explanation: "The surah warns against obsessively amassing and counting wealth, believing it grants eternal security, as per Tafsir Al-Jalalayn.",
    },
    {
      id: "q6",
      question: "How many ayahs are in Surah Al-Humazah?",
      options: [
        { id: "a", text: "7", isCorrect: false },
        { id: "b", text: "9", isCorrect: true },
        { id: "c", text: "5", isCorrect: false },
        { id: "d", text: "11", isCorrect: false },
      ],
      explanation: "Surah Al-Humazah consists of 9 ayahs, as it is a short Meccan surah.",
    },
    {
      id: "q7",
      question: "What is the consequence described for slanderers in Surah Al-Humazah?",
      arabic: "نَارُ اللَّهِ الْمُوقَدَةُ",
      rootLetters: "ن و ر",
      options: [
        { id: "a", text: "Loss of wealth", isCorrect: false },
        { id: "b", text: "Punishment in Al-Hutamah", isCorrect: true },
        { id: "c", text: "Exile from Mecca", isCorrect: false },
        { id: "d", text: "Social isolation", isCorrect: false },
      ],
      explanation: "The surah describes slanderers and the greedy being punished in Al-Hutamah, a crushing fire that reaches the heart.",
    },
    {
      id: "q8",
      question: "What type of surah is Al-Humazah?",
      options: [
        { id: "a", text: "Medinan", isCorrect: false },
        { id: "b", text: "Meccan", isCorrect: true },
        { id: "c", text: "Makki-Medinan", isCorrect: false },
        { id: "d", text: "Post-Hijrah", isCorrect: false },
      ],
      explanation: "Surah Al-Humazah is a Meccan surah, revealed in Mecca during the early period of the Prophet’s mission.",
    },
    {
      id: "q9",
      question: "What does 'lumazah' refer to in Surah Al-Humazah?",
      arabic: "لُّمَزَةٍ",
      rootLetters: "ل م ز",
      options: [
        { id: "a", text: "Charity", isCorrect: false },
        { id: "b", text: "Backbiting", isCorrect: true },
        { id: "c", text: "Prayer", isCorrect: false },
        { id: "d", text: "Fasting", isCorrect: false },
      ],
      explanation: "'Lumazah' refers to backbiting, criticizing others behind their backs, as condemned in the surah.",
    },
    {
      id: "q10",
      question: "What lesson does Surah Al-Humazah emphasize?",
      arabic: "فِي الْحُطَمَةِ",
      rootLetters: "ح ط م",
      options: [
        { id: "a", text: "The importance of wealth accumulation", isCorrect: false },
        { id: "b", text: "Purifying one’s character", isCorrect: true },
        { id: "c", text: "The virtues of jihad", isCorrect: false },
        { id: "d", text: "The benefits of trade", isCorrect: false },
      ],
      explanation: "The surah emphasizes purifying one’s character by avoiding slander, backbiting, and obsession with wealth.",
    },
    {
      id: "q11",
      question: "What imagery is used to describe the punishment in Al-Hutamah?",
      arabic: "تَلْظَىٰ عَلَى الْقُلُوبِ",
      rootLetters: "ل ظ ي",
      options: [
        { id: "a", text: "A flood that drowns", isCorrect: false },
        { id: "b", text: "A fire that reaches the heart", isCorrect: true },
        { id: "c", text: "A wind that scatters", isCorrect: false },
        { id: "d", text: "A darkness that blinds", isCorrect: false },
      ],
      explanation: "Al-Hutamah is described as a fire that reaches the heart, symbolizing its intense and consuming nature.",
    },
    {
      id: "q12",
      question: "According to Tafsir Ibn Kathir, who were the slanderers in Surah Al-Humazah?",
      arabic: "هُمَزَةٍ لُّمَزَةٍ",
      rootLetters: "ه م ز",
      options: [
        { id: "a", text: "The Quraysh leaders who ridiculed the Prophet ﷺ", isCorrect: true },
        { id: "b", text: "The people of Medina", isCorrect: false },
        { id: "c", text: "The companions of the Prophet", isCorrect: false },
        { id: "d", text: "The Byzantine rulers", isCorrect: false },
      ],
      explanation: "Tafsir Ibn Kathir notes that the slanderers included some Meccan Quraysh who mocked the Prophet Muhammad ﷺ and his followers.",
    },
  ],
};
