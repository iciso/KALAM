export const alFilQuizData: SurahQuizData = {
  surahId: 105,
  surahName: "Al-Fil",
  surahArabicName: "الفيل",
  totalVerses: 5,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Fil (The Elephant) is the 105th chapter of the Quran, revealed in Mecca. It recounts the miraculous event in the Year of the Elephant (circa 570 CE), when Abraha, a Christian ruler from Yemen, attempted to destroy the Kaaba with an army that included elephants. Allah protected His Sacred House by sending birds carrying stones of baked clay, thwarting the invasion. This event, occurring just before the birth of Prophet Muhammad ﷺ, underscores Allah’s power and protection over the Kaaba.",
  additionalContextElements: [
    {
      title: "The Year of the Elephant",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Abraha’s Invasion</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            Abraha, the Christian governor of Yemen under the Aksumite Empire, sought to divert pilgrimage from the Kaaba to a grand church he built in Sana’a, called Al-Qalis. Enraged by the Arabs’ loyalty to the Kaaba, he led an army, including war elephants, to destroy it in the Year of the Elephant (circa 570 CE), coinciding with the year of Prophet Muhammad’s ﷺ birth.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Divine Intervention</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Allah protected the Kaaba by sending flocks of birds (ababil) that pelted Abraha’s army with stones of baked clay (sijjil), causing their defeat. This miraculous event demonstrated Allah’s supremacy and the sanctity of His House.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Abdul Muttalib’s Faith",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Custodian of the Kaaba</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            Abdul Muttalib, the grandfather of Prophet Muhammad ﷺ and the custodian of the Kaaba, faced Abraha’s army with remarkable faith. When Abraha seized camels belonging to the Quraysh, Abdul Muttalib approached him to demand their return, surprising Abraha, who expected a plea to spare the Kaaba.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Abdul Muttalib’s Response</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Abdul Muttalib famously said, “I am the owner of the camels, and the Kaaba has its own Lord who will protect it.” This statement reflected his unwavering trust in Allah’s protection of the Sacred House, focusing only on his personal property and leaving the Kaaba’s defense to Allah.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Historical Significance</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              This event strengthened the Quraysh’s prestige as custodians of the Kaaba and highlighted the Kaaba’s sanctity, setting the stage for the Prophet’s ﷺ mission. Narrations from Tafsir Ibn Kathir and Seerah accounts emphasize Abdul Muttalib’s faith and the miraculous nature of the event, which left a lasting impact on the Arabs.
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the main event described in Surah Al-Fil?",
      options: [
        { id: "a", text: "The birth of Prophet Muhammad ﷺ", isCorrect: false },
        { id: "b", text: "The conquest of Mecca", isCorrect: false },
        { id: "c", text: "Abraha’s attempt to destroy the Kaaba", isCorrect: true },
        { id: "d", text: "The migration to Medina", isCorrect: false },
      ],
      explanation: "Surah Al-Fil describes Abraha’s failed attempt to destroy the Kaaba with an army that included elephants, thwarted by Allah’s intervention with birds carrying stones of baked clay.",
    },
    {
      id: "q2",
      question: "In which year did the event of Surah Al-Fil occur?",
      options: [
        { id: "a", text: "610 CE", isCorrect: false },
        { id: "b", text: "circa 570 CE", isCorrect: true },
        { id: "c", text: "622 CE", isCorrect: false },
        { id: "d", text: "632 CE", isCorrect: false },
      ],
      explanation: "The event, known as the Year of the Elephant, occurred around 570 CE, coinciding with the birth of Prophet Muhammad ﷺ.",
    },
    {
      id: "q3",
      question: "What motivated Abraha to attack the Kaaba?",
      options: [
        { id: "a", text: "To establish trade dominance", isCorrect: false },
        { id: "b", text: "To avenge a personal insult", isCorrect: false },
        { id: "c", text: "To divert pilgrimage to his church in Sana’a", isCorrect: true },
        { id: "d", text: "To conquer Mecca for political power", isCorrect: false },
      ],
      explanation: "Abraha built a grand church (Al-Qalis) in Sana’a and wanted to divert pilgrimage from the Kaaba, leading him to attack it.",
    },
    {
      id: "q4",
      question: "How did Allah protect the Kaaba in Surah Al-Fil?",
      options: [
        { id: "a", text: "By sending an earthquake", isCorrect: false },
        { id: "b", text: "By sending birds with stones of baked clay", isCorrect: true },
        { id: "c", text: "By flooding the area", isCorrect: false },
        { id: "d", text: "By inspiring the Quraysh to fight", isCorrect: false },
      ],
      explanation: "Allah sent flocks of birds (ababil) that pelted Abraha’s army with stones of baked clay (sijjil), destroying them.",
    },
    {
      id: "q5",
      question: "Who was the custodian of the Kaaba during the event of Surah Al-Fil?",
      options: [
        { id: "a", text: "Abu Bakr", isCorrect: false },
        { id: "b", text: "Abdul Muttalib", isCorrect: true },
        { id: "c", text: "Umar ibn Al-Khattab", isCorrect: false },
        { id: "d", text: "Ali ibn Abi Talib", isCorrect: false },
      ],
      explanation: "Abdul Muttalib, the grandfather of Prophet Muhammad ﷺ, was the custodian of the Kaaba during Abraha’s invasion.",
    },
    {
      id: "q6",
      question: "What did Abdul Muttalib ask Abraha to return?",
      options: [
        { id: "a", text: "The Kaaba’s treasures", isCorrect: false },
        { id: "b", text: "His camels", isCorrect: true },
        { id: "c", text: "The Quraysh’s weapons", isCorrect: false },
        { id: "d", text: "The sacred relics", isCorrect: false },
      ],
      explanation: "Abdul Muttalib asked for the return of his camels, stating that the Kaaba had its own Lord to protect it.",
    },
    {
      id: "q7",
      question: "What was Abdul Muttalib’s famous statement to Abraha about the Kaaba?",
      options: [
        { id: "a", text: "The Kaaba is under my protection.", isCorrect: false },
        { id: "b", text: "I am the owner of the camels, and the Kaaba has its own Lord.", isCorrect: true },
        { id: "c", text: "The Quraysh will defend the Kaaba.", isCorrect: false },
        { id: "d", text: "The Kaaba belongs to all Arabs.", isCorrect: false },
      ],
      explanation: "Abdul Muttalib’s statement reflected his faith in Allah’s protection, focusing only on his camels and leaving the Kaaba to Allah’s care.",
    },
    {
      id: "q8",
      question: "What animals were part of Abraha’s army?",
      options: [
        { id: "a", text: "Horses", isCorrect: false },
        { id: "b", text: "Camels", isCorrect: false },
        { id: "c", text: "Elephants", isCorrect: true },
        { id: "d", text: "Cavalry", isCorrect: false },
      ],
      explanation: "Abraha’s army included war elephants, which gave the surah its name, Al-Fil (The Elephant).",
    },
    {
      id: "q9",
      question: "What is the significance of the Year of the Elephant?",
      options: [
        { id: "a", text: "It marked the start of the Islamic calendar.", isCorrect: false },
        { id: "b", text: "It coincided with the birth of Prophet Muhammad ﷺ.", isCorrect: true },
        { id: "c", text: "It was the year of the first revelation.", isCorrect: false },
        { id: "d", text: "It marked the conquest of Mecca.", isCorrect: false },
      ],
      explanation: "The Year of the Elephant (circa 570 CE) is significant as it coincided with the birth of Prophet Muhammad ﷺ, setting the stage for his mission.",
    },
    {
      id: "q10",
      question: "What lesson does Surah Al-Fil teach about Allah’s power?",
      options: [
        { id: "a", text: "Allah rewards those who fight for Him.", isCorrect: false },
        { id: "b", text: "Allah protects His Sacred House against any threat.", isCorrect: true },
        { id: "c", text: "Allah grants victory through human effort.", isCorrect: false },
        { id: "d", text: "Allah only protects the Quraysh.", isCorrect: false },
      ],
      explanation: "The surah emphasizes Allah’s supreme power to protect His Sacred House, as seen in the miraculous defeat of Abraha’s army.",
    },
    {
      id: "q11",
      question: "What were the ‘ababil’ in Surah Al-Fil?",
      options: [
        { id: "a", text: "Angels sent by Allah", isCorrect: false },
        { id: "b", text: "Flocks of birds", isCorrect: true },
        { id: "c", text: "Storms of wind", isCorrect: false },
        { id: "d", text: "Quraysh warriors", isCorrect: false },
      ],
      explanation: "The ‘ababil’ were flocks of birds sent by Allah, carrying stones of baked clay to destroy Abraha’s army.",
    },
    {
      id: "q12",
      question: "How did the event of Surah Al-Fil impact the Quraysh?",
      options: [
        { id: "a", text: "It weakened their status in Mecca.", isCorrect: false },
        { id: "b", text: "It increased their prestige as custodians of the Kaaba.", isCorrect: true },
        { id: "c", text: "It led to their migration to Medina.", isCorrect: false },
        { id: "d", text: "It caused them to abandon the Kaaba.", isCorrect: false },
      ],
      explanation: "The miraculous protection of the Kaaba enhanced the Quraysh’s prestige as its custodians, reinforcing its sanctity among the Arabs.",
    },
  ],
};
