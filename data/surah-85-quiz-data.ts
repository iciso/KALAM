export const alBurujQuizData: SurahQuizData = {
  surahId: 85,
  surahName: "Al-Buruj",
  surahArabicName: "الْبُرُوجِ",
  totalVerses: 22,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Buruj (The Constellations) is the 85th chapter of the Quran, revealed in Mecca. It opens with oaths by the sky containing constellations and the promised day to condemn the makers of the ditch who burned believers alive. The surah emphasizes Allah's swift retribution against oppressors, His omnipresence as witness to all deeds, and the protection of His glorious Quran in a preserved tablet, warning that those who persecute believers without repenting face the torment of Hell and burning.",
  additionalContextElements: [
    {
      title: "The Story of Ashab al-Ukhdud (People of the Ditch)",
      content: `
        <div class="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800">
          <h3 class="text-lg font-semibold text-red-800 dark:text-red-300 mb-2">Historical Context and Reasons for Revelation</h3>
          <p class="text-red-700 dark:text-red-200 mb-3">
            The surah was revealed in reference to the persecution of early believers in Yemen by the Jewish king Dhu Nuwas around 523 CE. This tyrant king dug ditches, filled them with fire, and burned alive Christians who refused to abandon their faith, particularly in the city of Najran.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-red-700 dark:text-red-300 mb-1">Hadith Evidence</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Muslim narrated from Suhayb that the Prophet ﷺ said: "Among those before you was a king who had a magician. When the magician grew old, he said to the king: 'I have grown old, so send me a boy to teach magic.' A boy was sent, but on his way he met a monk who taught him about Allah. The story culminates with the boy, monk, and believers being killed by the king, who dug ditches and burned them alive."
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-red-700 dark:text-red-300 mb-1">Tafsir Insights</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir explains that "Ashab al-Ukhdud" refers specifically to Dhu Nuwas and his army who persecuted the Christians of Najran. Al-Qurtubi notes that this event was well-known among Arabs and served as a warning that Allah's justice is certain, even if delayed. The fire they used became their own destruction.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-red-700 dark:text-red-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Similar persecution themes: Surah Al-Qasas (28:4-6) about Pharaoh's persecution, Surah Fussilat (41:46) on oppression consequences, Surah Al-Hajj (22:39-40) on permission to fight persecutors.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Divine Justice and the Preserved Quran",
      content: `
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Allah's Omnipresence and Quran's Protection</h3>
          <p class="text-blue-700 dark:text-blue-200 mb-3">
            The surah emphasizes that Allah is witness to all deeds, His revenge is severe against oppressors, and His Quran is preserved in Lawh al-Mahfuz (the Preserved Tablet). These themes console persecuted believers that justice will prevail and divine guidance remains protected.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Tafsir Commentary</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Al-Tabari interprets "shadid al-batsh" (severe in punishment) as Allah's overwhelming power against oppressors. The "Lawh Mahfuz" mentioned is the heavenly preserved record where the Quran is inscribed, ensuring its eternal protection from corruption, as explained by Ibn Abbas.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Historical Application</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              This surah provided comfort to early Muslims facing Meccan persecution, assuring them that Allah witnesses their suffering and will ultimately grant victory. The story shows that oppressors throughout history face divine retribution.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Divine witnessing: Surah Al-Fajr (89:14), Quran's preservation: Surah Al-Hijr (15:9), Divine punishment: Surah Hud (11:102), Lawh Mahfuz: Surah Al-Waqi'ah (56:78).
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Al-Buruj, الْبُرُوجِ?",
      arabic: "الْبُرُوجِ",
      rootLetters: "ب ر ج",
      options: [
        { id: "a", text: "The Stars", isCorrect: false },
        { id: "b", text: "The Heavens", isCorrect: false },
        { id: "c", text: "The Planets", isCorrect: false },
        { id: "d", text: "The Constellations", isCorrect: true },
      ],
      explanation: "الْبُرُوجِ (Al-Buruj) means 'The Constellations,' derived from the root ب-ر-ج, referring to the zodiacal constellations or towers in the sky.",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'وَالسَّمَاءِ ذَاتِ الْبُرُوجِ' mean?",
      arabic: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ",
      rootLetters: "س م و | ذ و ت | ب ر ج",
      options: [
        { id: "a", text: "By the sky containing constellations", isCorrect: true },
        { id: "b", text: "By the earth with its mountains", isCorrect: false },
        { id: "c", text: "By the night and its darkness", isCorrect: false },
        { id: "d", text: "By the sun and its brightness", isCorrect: false },
      ],
      explanation: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ (Was-samai dhati al-buruj) means 'By the sky containing constellations,' roots س-م-و (sky), ذ-و-ت (possessing), ب-ر-ج (constellations).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'وَالْيَوْمِ الْمَوْعُودِ' mean?",
      arabic: "وَالْيَوْمِ الْمَوْعُودِ",
      rootLetters: "ي و م | و ع د",
      options: [
        { id: "a", text: "By the day of creation", isCorrect: false },
        { id: "b", text: "By the day of victory", isCorrect: false },
        { id: "c", text: "By the day of revelation", isCorrect: false },
        { id: "d", text: "By the promised day", isCorrect: true },
      ],
      explanation: "وَالْيَوْمِ الْمَوْعُودِ (Wal-yawmi al-maw'ud) means 'By the promised day,' referring to the Day of Judgment, roots ي-و-م (day) and و-ع-د (promise).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'قُتِلَ أَصْحَابُ الْأُخْدُودِ' mean?",
      arabic: "قُتِلَ أَصْحَابُ الْأُخْدُودِ",
      rootLetters: "ق ت ل | ص ح ب | أ خ د",
      options: [
        { id: "a", text: "Blessed are the people of the valley", isCorrect: false },
        { id: "b", text: "Saved are the companions of the cave", isCorrect: false },
        { id: "c", text: "Cursed are the makers of the ditch", isCorrect: true },
        { id: "d", text: "Protected are the believers of the mountain", isCorrect: false },
      ],
      explanation: "قُتِلَ أَصْحَابُ الْأُخْدُودِ (Qutila ashab al-ukhdud) means 'Cursed are the makers of the ditch,' roots ق-ت-ل (cursed/killed), ص-ح-ب (companions), أ-خ-د (ditch).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'النَّارِ ذَاتِ الْوَقُودِ' mean?",
      arabic: "النَّارِ ذَاتِ الْوَقُودِ",
      rootLetters: "ن و ر | ذ و ت | و ق د",
      options: [
        { id: "a", text: "The water with its purity", isCorrect: false },
        { id: "b", text: "The fire with its fuel", isCorrect: true },
        { id: "c", text: "The wind with its force", isCorrect: false },
        { id: "d", text: "The earth with its plants", isCorrect: false },
      ],
      explanation: "النَّارِ ذَاتِ الْوَقُودِ (An-nari dhati al-waqud) means 'The fire with its fuel,' roots ن-و-ر (fire), ذ-و-ت (possessing), و-ق-د (fuel).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'إِذْ هُمْ عَلَيْهَا قُعُودٌ' mean?",
      arabic: "إِذْ هُمْ عَلَيْهَا قُعُودٌ",
      rootLetters: "ق ع د",
      options: [
        { id: "a", text: "When they were standing around it", isCorrect: false },
        { id: "b", text: "When they were running from it", isCorrect: false },
        { id: "c", text: "When they were sitting around it", isCorrect: true },
        { id: "d", text: "When they were walking near it", isCorrect: false },
      ],
      explanation: "إِذْ هُمْ عَلَيْهَا قُعُودٌ (Idh hum 'alayha qu'ud) means 'When they were sitting around it,' root ق-ع-د (sitting).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ شُهُودٌ' mean?",
      arabic: "وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ شُهُودٌ",
      rootLetters: "ف ع ل | ء م ن | ش ه د",
      options: [
        { id: "a", text: "And they were unaware of what they did to the believers", isCorrect: false },
        { id: "b", text: "And they were regretting their actions against the believers", isCorrect: false },
        { id: "c", text: "And they were hiding what they did to the believers", isCorrect: false },
        { id: "d", text: "And they were witnesses to what they did to the believers", isCorrect: true },
      ],
      explanation: "وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ شُهُودٌ (Wa hum 'ala ma yaf'aluna bil-mu'minina shuhud) means 'And they were witnesses to what they did to the believers,' roots ف-ع-ل (do), أ-م-ن (believers), ش-ه-د (witnesses).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'وَمَا نَقَمُوا مِنْهُمْ إِلَّا أَن يُؤْمِنُوا بِاللَّهِ' mean?",
      arabic: "وَمَا نَقَمُوا مِنْهُمْ إِلَّا أَن يُؤْمِنُوا بِاللَّهِ",
      rootLetters: "ن ق م | ء م ن",
      options: [
        { id: "a", text: "And they resented them only because they believed in Allah", isCorrect: true },
        { id: "b", text: "And they loved them for their faith in Allah", isCorrect: false },
        { id: "c", text: "And they ignored them despite their belief in Allah", isCorrect: false },
        { id: "d", text: "And they helped them because they believed in Allah", isCorrect: false },
      ],
      explanation: "وَمَا نَقَمُوا مِنْهُمْ إِلَّا أَن يُؤْمِنُوا بِاللَّهِ (Wa ma naqamu minhum illa an yu'minu billah) means 'And they resented them only because they believed in Allah,' roots ن-ق-م (resented) and أ-م-ن (believe).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'إِنَّ بَطْشَ رَبِّكَ لَشَدِيدٌ' mean?",
      arabic: "إِنَّ بَطْشَ رَبِّكَ لَشَدِيدٌ",
      rootLetters: "ب ط ش | ر ب ب | ش د د",
      options: [
        { id: "a", text: "Indeed, your Lord's mercy is vast", isCorrect: false },
        { id: "b", text: "Indeed, your Lord's punishment is severe", isCorrect: true },
        { id: "c", text: "Indeed, your Lord's wisdom is perfect", isCorrect: false },
        { id: "d", text: "Indeed, your Lord's knowledge is complete", isCorrect: false },
      ],
      explanation: "إِنَّ بَطْشَ رَبِّكَ لَشَدِيدٌ (Inna batsha rabbika lashadid) means 'Indeed, your Lord's punishment is severe,' roots ب-ط-ش (punishment), ر-ب-ب (Lord), ش-د-د (severe).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'إِنَّهُ هُوَ يُبْدِئُ وَيُعِيدُ' mean?",
      arabic: "إِنَّهُ هُوَ يُبْدِئُ وَيُعِيدُ",
      rootLetters: "ب د أ | ع و د",
      options: [
        { id: "a", text: "Indeed, He creates and sustains", isCorrect: false },
        { id: "b", text: "Indeed, He guides and protects", isCorrect: false },
        { id: "c", text: "Indeed, He originates and repeats", isCorrect: true },
        { id: "d", text: "Indeed, He forgives and punishes", isCorrect: false },
      ],
      explanation: "إِنَّهُ هُوَ يُبْدِئُ وَيُعِيدُ (Innahu huwa yubdi'u wa yu'id) means 'Indeed, He originates and repeats,' referring to creation and resurrection, roots ب-د-أ (originate) and ع-و-د (repeat).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'بَلِ الَّذِينَ كَفَرُوا فِي تَكْذِيبٍ' mean?",
      arabic: "بَلِ الَّذِينَ كَفَرُوا فِي تَكْذِيبٍ",
      rootLetters: "ك ف ر | ك ذ ب",
      options: [
        { id: "a", text: "But those who believe are in guidance", isCorrect: false },
        { id: "b", text: "But those who disbelieve are in denial", isCorrect: true },
        { id: "c", text: "But those who doubt are in confusion", isCorrect: false },
        { id: "d", text: "But those who repent are in forgiveness", isCorrect: false },
      ],
      explanation: "بَلِ الَّذِينَ كَفَرُوا فِي تَكْذِيبٍ (Bal alladhina kafaru fi takdhib) means 'But those who disbelieve are in denial,' roots ك-ف-ر (disbelieve) and ك-ذ-ب (denial/lying).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'فِي لَوْحٍ مَّحْفُوظٍ' mean?",
      arabic: "فِي لَوْحٍ مَّحْفُوظٍ",
      rootLetters: "ل و ح | ح ف ظ",
      options: [
        { id: "a", text: "In a hidden book", isCorrect: false },
        { id: "b", text: "In a temporary record", isCorrect: false },
        { id: "c", text: "In a preserved tablet", isCorrect: true },
        { id: "d", text: "In a forgotten scroll", isCorrect: false },
      ],
      explanation: "فِي لَوْحٍ مَّحْفُوظٍ (Fi lawhin mahfuz) means 'In a preserved tablet,' referring to the Lawh al-Mahfuz where the Quran is eternally recorded, roots ل-و-ح (tablet) and ح-ف-ظ (preserved).",
    },
  ],
};
