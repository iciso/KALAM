export const anNasrQuizData: SurahQuizData = {
  surahId: 110,
  surahName: "An-Nasr",
  surahArabicName: "النصر",
  totalVerses: 3,
  type: "Medinan",
  difficulty: "Beginner",
  introduction:
    "Surah An-Nasr (The Divine Support) is the 110th chapter of the Quran and refers to Allah's help and victory. It was one of the last surahs revealed and is considered a sign of the Prophet's ﷺ approaching death, as it speaks of the completion of his mission.",
  additionalContextElements: [
    {
      title: "The Final Victory",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Conquest of Mecca</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            This surah was revealed after the conquest of Mecca in 8 AH, when the Prophet ﷺ entered the city peacefully and the Kaaba was cleansed of idols. It marked the fulfillment of Allah's promise of victory.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Mass Conversion</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              After the conquest, people began entering Islam in large numbers, fulfilling the prophecy mentioned in this surah about people embracing the religion of Allah in crowds.
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
      question: "What does the name 'An-Nasr' mean?",
      arabic: "النَّصْرِ",
      rootLetters: "ن ص ر",
      options: [
        { id: "a", text: "The Victory", isCorrect: false },
        { id: "b", text: "The Help", isCorrect: false },
        { id: "c", text: "The Divine Support", isCorrect: true },
        { id: "d", text: "The Conquest", isCorrect: false },
      ],
      explanation:
        "An-Nasr means 'The Divine Support' or 'The Help' and comes from the root ن ص ر meaning to help, support, or grant victory. It refers to Allah's assistance and support given to the Prophet Muhammad ﷺ and the Muslim community.",
    },
    {
      id: "nasr-2",
      question: "What is the meaning of this opening verse?",
      arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
      rootLetters: "ف ت ح",
      options: [
        { id: "a", text: "When Allah's help and victory come", isCorrect: false },
        { id: "b", text: "When the help of Allah and the conquest come", isCorrect: true },
        { id: "c", text: "When Allah's support and success arrive", isCorrect: false },
        { id: "d", text: "When divine assistance and triumph come", isCorrect: false },
      ],
      explanation:
        "Idha jaa nasru Allahi wal-fath means 'When the help of Allah and the conquest come.' The word 'fath' from the root ف ت ح means conquest or opening, specifically referring to the conquest of Mecca. This verse speaks of the divine help that led to this historic victory.",
    },
    {
      id: "nasr-3",
      question: "What is the meaning of this description of people's response?",
      arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
      rootLetters: "ف و ج",
      options: [
        { id: "a", text: "And you see people entering Allah's religion in groups", isCorrect: false },
        { id: "b", text: "And you see people joining Allah's faith in numbers", isCorrect: false },
        { id: "c", text: "And you see people entering Allah's religion in crowds", isCorrect: true },
        { id: "d", text: "And you see people accepting Allah's way in masses", isCorrect: false },
      ],
      explanation:
        "Wa ra'ayta an-nasa yadkhuluna fi dini Allahi afwajan means 'And you see people entering Allah's religion in crowds.' The word 'afwaj' (plural of fawj) from the root ف و ج means crowds, groups, or multitudes. This describes the mass conversion to Islam that occurred after the conquest of Mecca.",
    },
    {
      id: "nasr-4",
      question: "What is the meaning of this command for glorification?",
      arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ",
      rootLetters: "س ب ح",
      options: [
        { id: "a", text: "So glorify your Lord with praise", isCorrect: true },
        { id: "b", text: "So worship your Lord with gratitude", isCorrect: false },
        { id: "c", text: "So remember your Lord with thanks", isCorrect: false },
        { id: "d", text: "So honor your Lord with devotion", isCorrect: false },
      ],
      explanation:
        "Fa sabbih bi hamdi rabbika means 'So glorify your Lord with praise.' The word 'sabbih' from the root س ب ح means to glorify, declare the perfection of, or exalt Allah. 'Bi hamd' means with praise. This is a command to praise and glorify Allah for His help and victory.",
    },
    {
      id: "nasr-5",
      question: "What is the meaning of this final command?",
      arabic: "وَاسْتَغْفِرْهُ إِنَّهُ كَانَ تَوَّابًا",
      rootLetters: "غ ف ر",
      options: [
        { id: "a", text: "And seek His forgiveness, indeed He is the Acceptor of repentance", isCorrect: true },
        { id: "b", text: "And ask His pardon, indeed He is the Merciful", isCorrect: false },
        { id: "c", text: "And request His mercy, indeed He is the Compassionate", isCorrect: false },
        { id: "d", text: "And implore His grace, indeed He is the Forgiving", isCorrect: false },
      ],
      explanation:
        "Wastaghfirhu innahu kana tawwaban means 'And seek His forgiveness, indeed He is the Acceptor of repentance.' The word 'istaghfir' from the root غ ف ر means to seek forgiveness. 'Tawwab' means the One who frequently accepts repentance. This teaches humility even in victory.",
    },
    {
      id: "nasr-6",
      question: "What historical event does this surah primarily refer to?",
      arabic: "الْفَتْحُ",
      options: [
        { id: "a", text: "The Battle of Badr", isCorrect: false },
        { id: "b", text: "The conquest of Mecca", isCorrect: true },
        { id: "c", text: "The Treaty of Hudaybiyyah", isCorrect: false },
        { id: "d", text: "The Battle of Uhud", isCorrect: false },
      ],
      explanation:
        "The word 'al-fath' (the conquest) primarily refers to the conquest of Mecca in 8 AH (630 CE), when the Prophet ﷺ entered the city peacefully with 10,000 companions. This was the greatest victory for Islam, as it led to the cleansing of the Kaaba and mass conversions to Islam.",
    },
    {
      id: "nasr-7",
      question: "What did the Prophet ﷺ understand this surah to signify?",
      arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
      options: [
        { id: "a", text: "That more battles were coming", isCorrect: false },
        { id: "b", text: "That his mission was complete and his time was near", isCorrect: true },
        { id: "c", text: "That he should expand his conquests", isCorrect: false },
        { id: "d", text: "That he should establish a kingdom", isCorrect: false },
      ],
      explanation:
        "The Prophet ﷺ understood this surah as a sign that his mission was complete and his departure from this world was approaching. When Aisha (may Allah be pleased with her) asked him about his increased prayers and seeking forgiveness after this revelation, he explained that it was a sign of the completion of his prophetic mission.",
    },
    {
      id: "nasr-8",
      question: "What does the command to seek forgiveness teach us about success?",
      arabic: "وَاسْتَغْفِرْهُ",
      options: [
        { id: "a", text: "Success should be followed by humility and gratitude to Allah", isCorrect: true },
        { id: "b", text: "Success means we have done something wrong", isCorrect: false },
        { id: "c", text: "Success requires immediate celebration", isCorrect: false },
        { id: "d", text: "Success should make us proud of our achievements", isCorrect: false },
      ],
      explanation:
        "The command to seek forgiveness (wastaghfirhu) even after great success teaches us that victory and success should be followed by humility, gratitude to Allah, and recognition that all success comes from Him alone. It prevents arrogance and reminds us of our constant need for Allah's mercy and forgiveness.",
    },
    {
      id: "nasr-9",
      question: "What does 'Tawwab' tell us about Allah's nature?",
      arabic: "تَوَّابًا",
      rootLetters: "ت و ب",
      options: [
        { id: "a", text: "Allah frequently accepts repentance from His servants", isCorrect: true },
        { id: "b", text: "Allah only forgives once", isCorrect: false },
        { id: "c", text: "Allah is slow to forgive", isCorrect: false },
        { id: "d", text: "Allah forgives only major sins", isCorrect: false },
      ],
      explanation:
        "Tawwab from the root ت و ب means the One who frequently and repeatedly accepts repentance. The intensive form (fa''al pattern) indicates that Allah constantly and abundantly accepts the repentance of His servants. This encourages believers to always turn to Allah in repentance, knowing He is always ready to forgive.",
    },
    {
      id: "nasr-10",
      question: "What is the significance of this verse being in one of the last revealed surahs?",
      arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ",
      options: [
        { id: "a", text: "It summarizes the proper response to Allah's blessings throughout life", isCorrect: true },
        { id: "b", text: "It shows that the Quran was incomplete", isCorrect: false },
        { id: "c", text: "It indicates that more revelations were needed", isCorrect: false },
        { id: "d", text: "It proves the Quran was written by humans", isCorrect: false },
      ],
      explanation:
        "As the arabic verse means to, 'glorify the praises of your Lord and seek His forgiveness' and as it occurs in one of the last revealed surahs, An-Nasr beautifully summarizes the proper response to Allah's blessings throughout life: gratitude through praise and glorification, and humility through seeking forgiveness. It serves as a perfect conclusion to the prophetic mission, teaching believers how to respond to success and divine favor with the right spiritual attitude.",
    },
  ],
}
