import type { SurahQuizData } from "./types"

export const arRahmanQuizData: SurahQuizData = {
  surahId: 55,
  surahName: "Ar-Rahman",
  surahArabicName: "الرحمن",
  totalVerses: 78,
  type: "Meccan",
  difficulty: "Intermediate",
  introduction:
    "Surah Ar-Rahman (The Most Merciful) is the 55th chapter of the Quran, containing 78 verses. Revealed in Mecca, it is known as the 'Bride of the Quran' and uniquely begins with one of Allah's names, Ar-Rahman[reference:0]. The surah is a profound meditation on Allah's mercy, manifest in creation, and repeatedly asks the rhetorical question: 'Then which of your Lord's blessings would you both deny?'[reference:1] This question, directed at both mankind and jinn, is repeated 31 times[reference:2], emphasizing the countless favors of Allah in this world and the Hereafter, and calling all of creation to gratitude and acknowledgment of His sovereignty.",
  additionalContextElements: [
    {
      title: "Themes of Mercy and Creation",
      content: `
        <div class="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
          <h3 class="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">The Majesty of Ar-Rahman</h3>
          <p class="text-orange-700 dark:text-orange-200 mb-3">
            Surah Ar-Rahman is the only Surah that begins with one of the beautiful names of Allah, "Ar-Rahman"[reference:3]. 
            It is also known as the "Bride of the Quran" (Aroos-ul-Quran)[reference:4]. The entire Surah is a celebration of His mercy, from the creation of man and jinn to the blessings of the earth, the seas, and the heavens[reference:5].
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Tafsir Evidence</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir explains that the Surah informs of Allah's favors and mercy for His creatures, as He revealed the Qur'an and made it easy to understand[reference:6]. Al-Maududi notes that the Surah's title deeply relates to its subject matter, as it mentions the manifestations and fruits of Allah's attribute of mercy from beginning to end[reference:7].
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Prophetic Guidance and Hadith</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet ﷺ recited this Surah in prayer before the jinn, and they responded to each verse of "Fabi-ayyi alaa-i Rabbikuma tukazziban" with: "We do not deny any of our Lord's blessings. Praise is for You alone!"[reference:8]. Reciting this Surah is highly recommended, and it is said that if one recites it and passes away that night or day, they will be considered a martyr[reference:9].
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Creation of Man: Surah Al-Hijr (15:26). The Heavens and Earth: Surah Al-Baqarah (2:29). The Refrain: Surah Al-Mulk (67:30) for a similar call to reflection.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Day of Judgment and Divine Recompense",
      content: `
        <div class="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
          <h3 class="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Judgment and the Hereafter</h3>
          <p class="text-indigo-700 dark:text-indigo-200 mb-3">
            The Surah vividly describes the Day of Judgment, when all will be held accountable[reference:10]. 
            It categorizes people into three groups: the disbelievers who will face punishment, the foremost believers who will receive the highest rewards, and the average believers who will also be blessed[reference:11].
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Tafsir Insights</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The verses concerning the Day of Judgment (55:31-45) warn humans and jinn that they cannot escape Allah's decree and will be recompensed for their deeds[reference:12]. 
              The Surah presents a clear picture of the rewards of Paradise for the righteous and the punishment of Hell for the disbelievers[reference:13].
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Day of Judgment: Surah Al-Waqi'ah (56:1-56). Paradise: Surah Al-Insan (76:5-22). Hell: Surah Al-Mulk (67:6-11).
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    // Verses 1-4
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Ar-Rahman, الرحمن?",
      arabic: "الرحمن",
      rootLetters: "ر ح م",
      options: [
        { id: "a", text: "The Creator", isCorrect: false },
        { id: "b", text: "The Most Merciful / The Most Beneficent", isCorrect: true },
        { id: "c", text: "The King", isCorrect: false },
        { id: "d", text: "The Guide", isCorrect: false },
      ],
      explanation:
        "الرحمن (Ar-Rahman) means 'The Most Merciful' or 'The Most Beneficent,' derived from the root ر-ح-م (r-ḥ-m), which conveys mercy and compassion[reference:14]. It is one of the beautiful names of Allah[reference:15].",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'عَلَّمَ الْقُرْآنَ' mean?",
      arabic: "عَلَّمَ الْقُرْآنَ",
      rootLetters: "ع ل م | ق ر أ",
      options: [
        { id: "a", text: "He created the Quran", isCorrect: false },
        { id: "b", text: "He taught the Quran", isCorrect: true },
        { id: "c", text: "He revealed the Quran", isCorrect: false },
        { id: "d", text: "He preserved the Quran", isCorrect: false },
      ],
      explanation:
        "عَلَّمَ الْقُرْآنَ ('Allamal-Qur'an) means 'He taught the Quran,' roots ع-ل-م (taught) and ق-ر-أ (Quran/recitation)[reference:16]. This highlights Allah's mercy in teaching humanity the Quran[reference:17].",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'خَلَقَ الْإِنْسَانَ' mean?",
      arabic: "خَلَقَ الْإِنْسَانَ",
      rootLetters: "خ ل ق | ن س و",
      options: [
        { id: "a", text: "He created the heavens", isCorrect: false },
        { id: "b", text: "He created man", isCorrect: true },
        { id: "c", text: "He created the jinn", isCorrect: false },
        { id: "d", text: "He created the earth", isCorrect: false },
      ],
      explanation:
        "خَلَقَ الْإِنْسَانَ (Khalaqa al-insan) means 'He created man,' roots خ-ل-ق (created) and ن-س-و (man/human)[reference:18].",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'عَلَّمَهُ الْبَيَانَ' mean?",
      arabic: "عَلَّمَهُ الْبَيَانَ",
      rootLetters: "ع ل م | ب ي ن",
      options: [
        { id: "a", text: "He taught him the Quran", isCorrect: false },
        { id: "b", text: "He taught him speech/expression", isCorrect: true },
        { id: "c", text: "He taught him writing", isCorrect: false },
        { id: "d", text: "He taught him knowledge", isCorrect: false },
      ],
      explanation:
        "عَلَّمَهُ الْبَيَانَ ('Allamahu al-bayan) means 'He taught him speech/expression,' roots ع-ل-م (taught) and ب-ي-ن (clarity/expression)[reference:19]. This refers to the gift of articulate speech, distinguishing humans[reference:20].",
    },
    // Verses 5-9
    {
      id: "q5",
      question: "What does the Arabic phrase 'الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ' mean?",
      arabic: "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ",
      rootLetters: "ش م س | ق م ر | ح س ب",
      options: [
        { id: "a", text: "The sun and the moon are in motion", isCorrect: false },
        { id: "b", text: "The sun and the moon are in a reckoning", isCorrect: true },
        { id: "c", text: "The sun and the moon are for counting days", isCorrect: false },
        { id: "d", text: "The sun and the moon are a sign", isCorrect: false },
      ],
      explanation:
        "الشَّمْسُ وَالْقَمَرُ بِحُسْبَانٍ (Ash-shamsu wal-qamaru bihusban) means 'The sun and the moon are in a reckoning,' indicating they follow precise orbits and calculations[reference:21].",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ' mean?",
      arabic: "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ",
      rootLetters: "ن ج م | ش ج ر | س ج د",
      options: [
        { id: "a", text: "And the stars and the trees are in awe", isCorrect: false },
        { id: "b", text: "And the stars and the trees prostrate", isCorrect: true },
        { id: "c", text: "And the stars and the trees are in harmony", isCorrect: false },
        { id: "d", text: "And the stars and the trees are in order", isCorrect: false },
      ],
      explanation:
        "وَالنَّجْمُ وَالشَّجَرُ يَسْجُدَانِ (Wan-najmu wash-shajaru yasjudan) means 'And the stars and the trees prostrate,' signifying that all creation submits to Allah in its own way[reference:22].",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ' mean?",
      arabic: "وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ",
      rootLetters: "س م و | ر ف ع | و ض ع | م ز ن",
      options: [
        { id: "a", text: "And the earth He spread out and placed therein mountains", isCorrect: false },
        { id: "b", text: "And the heaven He raised and set up the balance", isCorrect: true },
        { id: "c", text: "And the sun He created and the moon He measured", isCorrect: false },
        { id: "d", text: "And the sky He adorned and the stars He placed", isCorrect: false },
      ],
      explanation:
        "وَالسَّمَاءَ رَفَعَهَا وَوَضَعَ الْمِيزَانَ (Was-sama'a rafa'aha wa wada'a al-mizan) means 'And the heaven He raised and set up the balance,' referring to the cosmic order and justice[reference:23].",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'أَلَّا تَطْغَوْا فِي الْمِيزَانِ' mean?",
      arabic: "أَلَّا تَطْغَوْا فِي الْمِيزَانِ",
      rootLetters: "ط غ و | م ز ن",
      options: [
        { id: "a", text: "That you may not be unjust in the balance", isCorrect: false },
        { id: "b", text: "That you may not transgress in the balance", isCorrect: true },
        { id: "c", text: "That you may not be arrogant in the balance", isCorrect: false },
        { id: "d", text: "That you may not be negligent in the balance", isCorrect: false },
      ],
      explanation:
        "أَلَّا تَطْغَوْا فِي الْمِيزَانِ (Alla tatghaw fi al-mizan) means 'That you may not transgress in the balance,' a command to maintain justice and fairness[reference:24].",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ' mean?",
      arabic: "وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ",
      rootLetters: "ق و م | و ز ن | ق س ط",
      options: [
        { id: "a", text: "And establish the weight with justice", isCorrect: true },
        { id: "b", text: "And establish the prayer with sincerity", isCorrect: false },
        { id: "c", text: "And establish the balance with mercy", isCorrect: false },
        { id: "d", text: "And establish the measure with fairness", isCorrect: false },
      ],
      explanation:
        "وَأَقِيمُوا الْوَزْنَ بِالْقِسْطِ (Wa aqimu al-wazna bil-qist) means 'And establish the weight with justice,' emphasizing fairness in all dealings[reference:25].",
    },
    // Verses 10-16
    {
      id: "q10",
      question: "What does the Arabic phrase 'وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ' mean?",
      arabic: "وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ",
      rootLetters: "أ ر ض | و ض ع | ن و م",
      options: [
        { id: "a", text: "And the earth He spread out for the cattle", isCorrect: false },
        { id: "b", text: "And the earth He laid for all creatures", isCorrect: true },
        { id: "c", text: "And the earth He made for the people", isCorrect: false },
        { id: "d", text: "And the earth He prepared for the living", isCorrect: false },
      ],
      explanation:
        "وَالْأَرْضَ وَضَعَهَا لِلْأَنَامِ (Wal-arda wada'aha lil-anam) means 'And the earth He laid for all creatures,' indicating Allah's provision for all living beings[reference:26].",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'فِيهَا فَاكِهَةٌ وَالنَّخْلُ ذَاتُ الْأَكْمَامِ' mean?",
      arabic: "فِيهَا فَاكِهَةٌ وَالنَّخْلُ ذَاتُ الْأَكْمَامِ",
      rootLetters: "ف ك ه | ن خ ل | ك م م",
      options: [
        { id: "a", text: "Therein are fruit and palm trees with sheaths", isCorrect: true },
        { id: "b", text: "Therein are gardens and palm trees with dates", isCorrect: false },
        { id: "c", text: "Therein are crops and trees with fruit", isCorrect: false },
        { id: "d", text: "Therein are flowers and trees with leaves", isCorrect: false },
      ],
      explanation:
        "فِيهَا فَاكِهَةٌ وَالنَّخْلُ ذَاتُ الْأَكْمَامِ (Feeha fakihatun wan-nakhlu dhatu al-akmam) means 'Therein are fruit and palm trees with sheaths,' describing the earth's produce[reference:27].",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'وَالْحَبُّ ذُو الْعَصْفِ وَالرَّيْحَانُ' mean?",
      arabic: "وَالْحَبُّ ذُو الْعَصْفِ وَالرَّيْحَانُ",
      rootLetters: "ح ب ب | ع ص ف | ر ي ح",
      options: [
        { id: "a", text: "And grain with husk and fragrant herbs", isCorrect: true },
        { id: "b", text: "And corn with leaves and flowers", isCorrect: false },
        { id: "c", text: "And wheat with straw and trees", isCorrect: false },
        { id: "d", text: "And seeds with chaff and grass", isCorrect: false },
      ],
      explanation:
        "وَالْحَبُّ ذُو الْعَصْفِ وَالرَّيْحَانُ (Wal-habbu dhu al-'asfi war-rayhan) means 'And grain with husk and fragrant herbs,' referring to various types of vegetation[reference:28].",
    },
    {
      id: "q13",
      question: "What does the Arabic phrase 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ' mean?",
      arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
      rootLetters: "أ ل و | ر ب ب | ك ذ ب",
      options: [
        { id: "a", text: "Then which of the favors of your Lord will you both deny?", isCorrect: true },
        { id: "b", text: "Then which of the signs of your Lord will you both reject?", isCorrect: false },
        { id: "c", text: "Then which of the blessings of your Lord will you both disbelieve?", isCorrect: false },
        { id: "d", text: "Then which of the mercies of your Lord will you both deny?", isCorrect: false },
      ],
      explanation:
        "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ (Fabi-ayyi alaa'i Rabbikuma tukaththibani) means 'Then which of the favors of your Lord will you both deny?' This rhetorical question is addressed to both mankind and jinn and is repeated 31 times[reference:29].",
    },
    {
      id: "q14",
      question: "What does the Arabic phrase 'خَلَقَ الْإِنْسَانَ مِنْ صَلْصَالٍ كَالْفَخَّارِ' mean?",
      arabic: "خَلَقَ الْإِنْسَانَ مِنْ صَلْصَالٍ كَالْفَخَّارِ",
      rootLetters: "خ ل ق | ن س و | ص ل ص | ف خ ر",
      options: [
        { id: "a", text: "He created man from clay like pottery", isCorrect: false },
        { id: "b", text: "He created man from sounding clay like pottery", isCorrect: true },
        { id: "c", text: "He created man from dust like pottery", isCorrect: false },
        { id: "d", text: "He created man from mud like pottery", isCorrect: false },
      ],
      explanation:
        "خَلَقَ الْإِنْسَانَ مِنْ صَلْصَالٍ كَالْفَخَّارِ (Khalaqa al-insana min salsalin kal-fakhkhar) means 'He created man from sounding clay like pottery,' referring to the creation of Adam[reference:30].",
    },
    {
      id: "q15",
      question: "What does the Arabic phrase 'وَخَلَقَ الْجَانَّ مِنْ مَارِجٍ مِنْ نَارٍ' mean?",
      arabic: "وَخَلَقَ الْجَانَّ مِنْ مَارِجٍ مِنْ نَارٍ",
      rootLetters: "خ ل ق | ج ن ن | م ر ج | ن و ر",
      options: [
        { id: "a", text: "And He created the jinn from a smokeless flame of fire", isCorrect: true },
        { id: "b", text: "And He created the jinn from a blazing fire", isCorrect: false },
        { id: "c", text: "And He created the jinn from a scorching fire", isCorrect: false },
        { id: "d", text: "And He created the jinn from a dark fire", isCorrect: false },
      ],
      explanation:
        "وَخَلَقَ الْجَانَّ مِنْ مَارِجٍ مِنْ نَارٍ (Wa khalaqa al-janna min marijin min nar) means 'And He created the jinn from a smokeless flame of fire,' describing their origin[reference:31].",
    },
    // Verses 17-25
    {
      id: "q16",
      question: "What does the Arabic phrase 'رَبُّ الْمَشْرِقَيْنِ وَرَبُّ الْمَغْرِبَيْنِ' mean?",
      arabic: "رَبُّ الْمَشْرِقَيْنِ وَرَبُّ الْمَغْرِبَيْنِ",
      rootLetters: "ر ب ب | ش ر ق | غ ر ب",
      options: [
        { id: "a", text: "Lord of the two easts and Lord of the two wests", isCorrect: true },
        { id: "b", text: "Lord of the east and Lord of the west", isCorrect: false },
        { id: "c", text: "Lord of the sunrise and Lord of the sunset", isCorrect: false },
        { id: "d", text: "Lord of the day and Lord of the night", isCorrect: false },
      ],
      explanation:
        "رَبُّ الْمَشْرِقَيْنِ وَرَبُّ الْمَغْرِبَيْنِ (Rabbu al-mashriqayni wa rabbu al-maghribayni) means 'Lord of the two easts and Lord of the two wests,' referring to the different points of sunrise and sunset[reference:32].",
    },
    {
      id: "q17",
      question: "What does the Arabic phrase 'مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ' mean?",
      arabic: "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ",
      rootLetters: "م ر ج | ب ح ر | ل ق ي",
      options: [
        { id: "a", text: "He let the two seas flow, meeting each other", isCorrect: false },
        { id: "b", text: "He released the two seas, they meet", isCorrect: true },
        { id: "c", text: "He created the two seas, they flow together", isCorrect: false },
        { id: "d", text: "He made the two seas, they merge", isCorrect: false },
      ],
      explanation:
        "مَرَجَ الْبَحْرَيْنِ يَلْتَقِيَانِ (Maraja al-bahrayni yaltaqiyani) means 'He released the two seas, they meet,' a sign of Allah's power[reference:33].",
    },
    {
      id: "q18",
      question: "What does the Arabic phrase 'بَيْنَهُمَا بَرْزَخٌ لَا يَبْغِيَانِ' mean?",
      arabic: "بَيْنَهُمَا بَرْزَخٌ لَا يَبْغِيَانِ",
      rootLetters: "ب ي ن | ب ر ز خ | ب غ ي",
      options: [
        { id: "a", text: "Between them is a barrier they do not transgress", isCorrect: true },
        { id: "b", text: "Between them is a partition they do not cross", isCorrect: false },
        { id: "c", text: "Between them is a limit they do not exceed", isCorrect: false },
        { id: "d", text: "Between them is a boundary they do not overstep", isCorrect: false },
      ],
      explanation:
        "بَيْنَهُمَا بَرْزَخٌ لَا يَبْغِيَانِ (Baynahuma barzakhun la yabghiyani) means 'Between them is a barrier they do not transgress,' describing the divine order[reference:34].",
    },
    {
      id: "q19",
      question: "What does the Arabic phrase 'يَخْرُجُ مِنْهُمَا اللُّؤْلُؤُ وَالْمَرْجَانُ' mean?",
      arabic: "يَخْرُجُ مِنْهُمَا اللُّؤْلُؤُ وَالْمَرْجَانُ",
      rootLetters: "خ ر ج | ل أ ل أ | م ر ج",
      options: [
        { id: "a", text: "From them come pearls and coral", isCorrect: true },
        { id: "b", text: "From them come pearls and rubies", isCorrect: false },
        { id: "c", text: "From them come pearls and gems", isCorrect: false },
        { id: "d", text: "From them come pearls and gold", isCorrect: false },
      ],
      explanation:
        "يَخْرُجُ مِنْهُمَا اللُّؤْلُؤُ وَالْمَرْجَانُ (Yakhruju minhuma al-lu'lu'u wal-marjanu) means 'From them come pearls and coral,' a blessing from the seas[reference:35].",
    },
    {
      id: "q20",
      question: "What does the Arabic phrase 'وَلَهُ الْجَوَارِ الْمُنْشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ' mean?",
      arabic: "وَلَهُ الْجَوَارِ الْمُنْشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ",
      rootLetters: "ج ر ي | ن ش أ | ب ح ر | ع ل م",
      options: [
        { id: "a", text: "And His are the ships that sail in the sea like mountains", isCorrect: false },
        { id: "b", text: "And His are the ships raised in the sea like mountains", isCorrect: true },
        { id: "c", text: "And His are the ships that float in the sea like mountains", isCorrect: false },
        { id: "d", text: "And His are the ships that move in the sea like mountains", isCorrect: false },
      ],
      explanation:
        "وَلَهُ الْجَوَارِ الْمُنْشَآتُ فِي الْبَحْرِ كَالْأَعْلَامِ (Wa lahu al-jawari al-munsha'atu fil-bahri kal-a'lam) means 'And His are the ships raised in the sea like mountains,' a sign of His power[reference:36].",
    },
    // Verses 26-30
    {
      id: "q21",
      question: "What does the Arabic phrase 'كُلُّ مَنْ عَلَيْهَا فَانٍ' mean?",
      arabic: "كُلُّ مَنْ عَلَيْهَا فَانٍ",
      rootLetters: "ك ل ل | ف ن ي",
      options: [
        { id: "a", text: "Everyone upon it will perish", isCorrect: true },
        { id: "b", text: "Everyone upon it will die", isCorrect: false },
        { id: "c", text: "Everyone upon it will end", isCorrect: false },
        { id: "d", text: "Everyone upon it will pass away", isCorrect: false },
      ],
      explanation:
        "كُلُّ مَنْ عَلَيْهَا فَانٍ (Kullu man 'alayha fanin) means 'Everyone upon it will perish,' affirming the temporary nature of all creation[reference:37].",
    },
    {
      id: "q22",
      question: "What does the Arabic phrase 'وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ' mean?",
      arabic: "وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ",
      rootLetters: "ب ق ي | و ج ه | ج ل ل | ك ر م",
      options: [
        { id: "a", text: "And there remains the Face of your Lord, Owner of Majesty and Honor", isCorrect: true },
        { id: "b", text: "And there remains the Glory of your Lord, Owner of Majesty and Honor", isCorrect: false },
        { id: "c", text: "And there remains the Presence of your Lord, Owner of Majesty and Honor", isCorrect: false },
        { id: "d", text: "And there remains the Self of your Lord, Owner of Majesty and Honor", isCorrect: false },
      ],
      explanation:
        "وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو الْجَلَالِ وَالْإِكْرَامِ (Wa yabqa wajhu rabbika dhu al-jalali wal-ikram) means 'And there remains the Face of your Lord, Owner of Majesty and Honor,' emphasizing Allah's eternal nature[reference:38].",
    },
    {
      id: "q23",
      question: "What does the Arabic phrase 'يَسْأَلُهُ مَنْ فِي السَّمَاوَاتِ وَالْأَرْضِ' mean?",
      arabic: "يَسْأَلُهُ مَنْ فِي السَّمَاوَاتِ وَالْأَرْضِ",
      rootLetters: "س أ ل | س م و | أ ر ض",
      options: [
        { id: "a", text: "All in the heavens and the earth ask Him", isCorrect: false },
        { id: "b", text: "Whoever is in the heavens and the earth asks Him", isCorrect: true },
        { id: "c", text: "All in the heavens and the earth seek Him", isCorrect: false },
        { id: "d", text: "Whoever is in the heavens and the earth requests Him", isCorrect: false },
      ],
      explanation:
        "يَسْأَلُهُ مَنْ فِي السَّمَاوَاتِ وَالْأَرْضِ (Yas'aluhu man fi as-samawati wal-ard) means 'Whoever is in the heavens and the earth asks Him,' indicating universal dependence on Allah[reference:39].",
    },
    {
      id: "q24",
      question: "What does the Arabic phrase 'كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ' mean?",
      arabic: "كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ",
      rootLetters: "ي و م | ش أ ن",
      options: [
        { id: "a", text: "Every day He is in a matter", isCorrect: false },
        { id: "b", text: "Every day He is bringing about a matter", isCorrect: true },
        { id: "c", text: "Every day He is in a state", isCorrect: false },
        { id: "d", text: "Every day He is in a affair", isCorrect: false },
      ],
      explanation:
        "كُلَّ يَوْمٍ هُوَ فِي شَأْنٍ (Kulla yawmin huwa fi sha'n) means 'Every day He is bringing about a matter,' signifying Allah's continuous creative activity[reference:40].",
    },
    // Verses 31-45
    {
      id: "q25",
      question: "What does the Arabic phrase 'سَنَفْرُغُ لَكُمْ أَيُّهَ الثَّقَلَانِ' mean?",
      arabic: "سَنَفْرُغُ لَكُمْ أَيُّهَ الثَّقَلَانِ",
      rootLetters: "ف ر غ | ث ق ل",
      options: [
        { id: "a", text: "We shall attend to you, O two heavy ones", isCorrect: false },
        { id: "b", text: "We shall attend to you, O two weighty ones", isCorrect: true },
        { id: "c", text: "We shall deal with you, O two burdens", isCorrect: false },
        { id: "d", text: "We shall judge you, O two nations", isCorrect: false },
      ],
      explanation:
        "سَنَفْرُغُ لَكُمْ أَيُّهَ الثَّقَلَانِ (Sanafrughu lakum ayyuha ath-thaqalan) means 'We shall attend to you, O you two weighty ones,' addressing mankind and jinn[reference:41].",
    },
    {
      id: "q26",
      question: "What does the Arabic phrase 'يَا مَعْشَرَ الْجِنِّ وَالْإِنْسِ' mean?",
      arabic: "يَا مَعْشَرَ الْجِنِّ وَالْإِنْسِ",
      rootLetters: "ع ش ر | ج ن ن | ن س و",
      options: [
        { id: "a", text: "O assembly of jinn and men", isCorrect: true },
        { id: "b", text: "O company of jinn and mankind", isCorrect: false },
        { id: "c", text: "O multitude of jinn and humans", isCorrect: false },
        { id: "d", text: "O host of jinn and people", isCorrect: false },
      ],
      explanation:
        "يَا مَعْشَرَ الْجِنِّ وَالْإِنْسِ (Ya ma'shara al-jinni wal-ins) means 'O assembly of jinn and men,' a direct address to both creations[reference:42].",
    },
    {
      id: "q27",
      question: "What does the Arabic phrase 'إِنِ اسْتَطَعْتُمْ أَنْ تَنْفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ' mean?",
      arabic: "إِنِ اسْتَطَعْتُمْ أَنْ تَنْفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ",
      rootLetters: "ط و ع | ن ف ذ | ق ط ر | س م و | أ ر ض",
      options: [
        { id: "a", text: "If you are able to pass beyond the regions of the heavens and the earth", isCorrect: true },
        { id: "b", text: "If you can penetrate the zones of the heavens and the earth", isCorrect: false },
        { id: "c", text: "If you have the power to go beyond the bounds of the heavens and the earth", isCorrect: false },
        { id: "d", text: "If you can cross the frontiers of the heavens and the earth", isCorrect: false },
      ],
      explanation:
        "إِنِ اسْتَطَعْتُمْ أَنْ تَنْفُذُوا مِنْ أَقْطَارِ السَّمَاوَاتِ وَالْأَرْضِ (Ini stata'tum an tanfudhu min aqtari as-samawati wal-ard) means 'If you are able to pass beyond the regions of the heavens and the earth,' a challenge to the limits of creation[reference:43].",
    },
    {
      id: "q28",
      question: "What does the Arabic phrase 'لَا تَنْفُذُونَ إِلَّا بِسُلْطَانٍ' mean?",
      arabic: "لَا تَنْفُذُونَ إِلَّا بِسُلْطَانٍ",
      rootLetters: "ن ف ذ | س ل ط",
      options: [
        { id: "a", text: "You will not pass except with authority", isCorrect: true },
        { id: "b", text: "You will not pass except with power", isCorrect: false },
        { id: "c", text: "You will not pass except with permission", isCorrect: false },
        { id: "d", text: "You will not pass except with might", isCorrect: false },
      ],
      explanation:
        "لَا تَنْفُذُونَ إِلَّا بِسُلْطَانٍ (La tanfudhuna illa bi sultan) means 'You will not pass except with authority,' emphasizing submission to Allah's will[reference:44].",
    },
    {
      id: "q29",
      question: "What does the Arabic phrase 'يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِنْ نَارٍ وَنُحَاسٌ' mean?",
      arabic: "يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِنْ نَارٍ وَنُحَاسٌ",
      rootLetters: "ر س ل | ش و ظ | ن و ر | ن ح س",
      options: [
        { id: "a", text: "There will be sent against you a flame of fire and smoke", isCorrect: false },
        { id: "b", text: "There will be sent against you a flame of fire and brass", isCorrect: true },
        { id: "c", text: "There will be sent against you a blaze of fire and copper", isCorrect: false },
        { id: "d", text: "There will be sent against you a flash of fire and molten brass", isCorrect: false },
      ],
      explanation:
        "يُرْسَلُ عَلَيْكُمَا شُوَاظٌ مِنْ نَارٍ وَنُحَاسٌ (Yursalu 'alaykuma shuwazun min narin wa nuhas) means 'There will be sent against you a flame of fire and brass,' a description of punishment[reference:45].",
    },
    // Verses 46-61
    {
      id: "q30",
      question: "What does the Arabic phrase 'وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ' mean?",
      arabic: "وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ",
      rootLetters: "خ و ف | ق و م | ج ن ن",
      options: [
        { id: "a", text: "And for him who fears the standing before his Lord are two gardens", isCorrect: true },
        { id: "b", text: "And for him who fears his Lord are two gardens", isCorrect: false },
        { id: "c", text: "And for him who fears the station of his Lord are two gardens", isCorrect: false },
        { id: "d", text: "And for him who fears the position of his Lord are two gardens", isCorrect: false },
      ],
      explanation:
        "وَلِمَنْ خَافَ مَقَامَ رَبِّهِ جَنَّتَانِ (Wa liman khafa maqama rabbihi jannatan) means 'And for him who fears the standing before his Lord are two gardens,' describing the reward of the righteous[reference:46].",
    },
    {
      id: "q31",
      question: "What does the Arabic phrase 'ذَوَاتَا أَفْوَانٍ' mean?",
      arabic: "ذَوَاتَا أَفْوَانٍ",
      rootLetters: "ذ و ت | ف و ن",
      options: [
        { id: "a", text: "With spreading branches", isCorrect: true },
        { id: "b", text: "With shaded branches", isCorrect: false },
        { id: "c", text: "With abundant branches", isCorrect: false },
        { id: "d", text: "With leafy branches", isCorrect: false },
      ],
      explanation:
        "ذَوَاتَا أَفْوَانٍ (Dhawata afwan) means 'With spreading branches,' describing the gardens of Paradise.",
    },
    {
      id: "q32",
      question: "What does the Arabic phrase 'فِيهِمَا عَيْنَانِ تَجْرِيَانِ' mean?",
      arabic: "فِيهِمَا عَيْنَانِ تَجْرِيَانِ",
      rootLetters: "ع ي ن | ج ر ي",
      options: [
        { id: "a", text: "In them are two springs flowing", isCorrect: true },
        { id: "b", text: "In them are two rivers flowing", isCorrect: false },
        { id: "c", text: "In them are two fountains flowing", isCorrect: false },
        { id: "d", text: "In them are two streams flowing", isCorrect: false },
      ],
      explanation:
        "فِيهِمَا عَيْنَانِ تَجْرِيَانِ (Feehima 'aynani tajriyani) means 'In them are two springs flowing,' a description of the blessings of Paradise.",
    },
    {
      id: "q33",
      question: "What does the Arabic phrase 'فِيهِمَا مِنْ كُلِّ فَاكِهَةٍ زَوْجَانِ' mean?",
      arabic: "فِيهِمَا مِنْ كُلِّ فَاكِهَةٍ زَوْجَانِ",
      rootLetters: "ف ك ه | ز و ج",
      options: [
        { id: "a", text: "In them are of every fruit two kinds", isCorrect: true },
        { id: "b", text: "In them are every fruit in pairs", isCorrect: false },
        { id: "c", text: "In them are all fruits in couples", isCorrect: false },
        { id: "d", text: "In them are two of every fruit", isCorrect: false },
      ],
      explanation:
        "فِيهِمَا مِنْ كُلِّ فَاكِهَةٍ زَوْجَانِ (Feehima min kulli fakihatin zawjan) means 'In them are of every fruit two kinds,' indicating the abundance of Paradise.",
    },
    {
      id: "q34",
      question: "What does the Arabic phrase 'مُتَّكِئِينَ عَلَى فُرُشٍ بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ' mean?",
      arabic: "مُتَّكِئِينَ عَلَى فُرُشٍ بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ",
      rootLetters: "ت ك أ | ف ر ش | ب ط ن | س ت ب ر",
      options: [
        { id: "a", text: "Reclining on beds whose linings are of brocade", isCorrect: true },
        { id: "b", text: "Reclining on couches whose inner coverings are of silk", isCorrect: false },
        { id: "c", text: "Reclining on carpets whose inner linings are of fine silk", isCorrect: false },
        { id: "d", text: "Reclining on cushions whose interiors are of brocade", isCorrect: false },
      ],
      explanation:
        "مُتَّكِئِينَ عَلَى فُرُشٍ بَطَائِنُهَا مِنْ إِسْتَبْرَقٍ (Muttaki'ina 'ala furushin bata'inuha min istabraq) means 'Reclining on beds whose linings are of brocade,' a description of Paradise's luxury.",
    },
    {
      id: "q35",
      question: "What does the Arabic phrase 'وَجَنَى الْجَنَّتَيْنِ دَانٍ' mean?",
      arabic: "وَجَنَى الْجَنَّتَيْنِ دَانٍ",
      rootLetters: "ج ن ي | ج ن ن | د ن و",
      options: [
        { id: "a", text: "And the fruit of the two gardens is near", isCorrect: false },
        { id: "b", text: "And the fruit of the two gardens is close at hand", isCorrect: true },
        { id: "c", text: "And the fruit of the two gardens is within reach", isCorrect: false },
        { id: "d", text: "And the fruit of the two gardens is accessible", isCorrect: false },
      ],
      explanation:
        "وَجَنَى الْجَنَّتَيْنِ دَانٍ (Wa jana al-jannatayni dan) means 'And the fruit of the two gardens is close at hand,' describing the ease of enjoying Paradise.",
    },
    // Verses 62-78
    {
      id: "q36",
      question: "What does the Arabic phrase 'وَمِنْ دُونِهِمَا جَنَّتَانِ' mean?",
      arabic: "وَمِنْ دُونِهِمَا جَنَّتَانِ",
      rootLetters: "د و ن | ج ن ن",
      options: [
        { id: "a", text: "And below them are two gardens", isCorrect: false },
        { id: "b", text: "And besides them are two gardens", isCorrect: true },
        { id: "c", text: "And in addition to them are two gardens", isCorrect: false },
        { id: "d", text: "And beyond them are two gardens", isCorrect: false },
      ],
      explanation:
        "وَمِنْ دُونِهِمَا جَنَّتَانِ (Wa min dunihima jannatan) means 'And besides them are two gardens,' referring to another level of Paradise for the average believers[reference:47].",
    },
    {
      id: "q37",
      question: "What does the Arabic phrase 'مُدْهَامَّتَانِ' mean?",
      arabic: "مُدْهَامَّتَانِ",
      rootLetters: "د ه م",
      options: [
        { id: "a", text: "Dark green", isCorrect: false },
        { id: "b", text: "Densely shaded with dark green", isCorrect: true },
        { id: "c", text: "Deep green", isCorrect: false },
        { id: "d", text: "Lush green", isCorrect: false },
      ],
      explanation:
        "مُدْهَامَّتَانِ (Mudhammatan) means 'Densely shaded with dark green,' the shortest verse in the Quran[reference:48].",
    },
    {
      id: "q38",
      question: "What does the Arabic phrase 'فِيهِمَا عَيْنَانِ نَضَّاخَتَانِ' mean?",
      arabic: "فِيهِمَا عَيْنَانِ نَضَّاخَتَانِ",
      rootLetters: "ع ي ن | ن ض خ",
      options: [
        { id: "a", text: "In them are two springs gushing forth", isCorrect: true },
        { id: "b", text: "In them are two springs flowing freely", isCorrect: false },
        { id: "c", text: "In them are two springs overflowing", isCorrect: false },
        { id: "d", text: "In them are two springs bursting", isCorrect: false },
      ],
      explanation:
        "فِيهِمَا عَيْنَانِ نَضَّاخَتَانِ (Feehima 'aynani naddakhatani) means 'In them are two springs gushing forth,' a description of the blessings of Paradise.",
    },
    {
      id: "q39",
      question: "What does the Arabic phrase 'فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ' mean?",
      arabic: "فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ",
      rootLetters: "ف ك ه | ن خ ل | ر م ن",
      options: [
        { id: "a", text: "In them are fruit, palm trees, and pomegranates", isCorrect: true },
        { id: "b", text: "In them are fruit, dates, and pomegranates", isCorrect: false },
        { id: "c", text: "In them are fruit, trees, and pomegranates", isCorrect: false },
        { id: "d", text: "In them are fruit, palms, and pomegranates", isCorrect: false },
      ],
      explanation:
        "فِيهِمَا فَاكِهَةٌ وَنَخْلٌ وَرُمَّانٌ (Feehima fakihatun wa nakhlu wa rummanun) means 'In them are fruit, palm trees, and pomegranates,' specific blessings of Paradise.",
    },
    {
      id: "q40",
      question: "What does the Arabic phrase 'فِيهِنَّ خَيْرَاتٌ حِسَانٌ' mean?",
      arabic: "فِيهِنَّ خَيْرَاتٌ حِسَانٌ",
      rootLetters: "خ ي ر | ح س ن",
      options: [
        { id: "a", text: "In them are good, beautiful women", isCorrect: false },
        { id: "b", text: "In them are good and beautiful", isCorrect: true },
        { id: "c", text: "In them are virtuous, beautiful ones", isCorrect: false },
        { id: "d", text: "In them are excellent, beautiful companions", isCorrect: false },
      ],
      explanation:
        "فِيهِنَّ خَيْرَاتٌ حِسَانٌ (Feehinna khayratun hisanun) means 'In them are good and beautiful,' referring to the companions of Paradise.",
    },
    {
      id: "q41",
      question: "What does the Arabic phrase 'حُورٌ مَقْصُورَاتٌ فِي الْخِيَامِ' mean?",
      arabic: "حُورٌ مَقْصُورَاتٌ فِي الْخِيَامِ",
      rootLetters: "ح و ر | ق ص ر | خ ي م",
      options: [
        { id: "a", text: "Fair ones, confined in pavilions", isCorrect: false },
        { id: "b", text: "Fair ones, restrained in tents", isCorrect: true },
        { id: "c", text: "Fair ones, secluded in chambers", isCorrect: false },
        { id: "d", text: "Fair ones, kept in pavilions", isCorrect: false },
      ],
      explanation:
        "حُورٌ مَقْصُورَاتٌ فِي الْخِيَامِ (Hurun maqsuratun fil-khiyam) means 'Fair ones, restrained in tents,' a description of the maidens of Paradise.",
    },
    {
      id: "q42",
      question: "What does the Arabic phrase 'لَمْ يَطْمِثْهُنَّ إِنْسٌ قَبْلَهُمْ وَلَا جَانٌّ' mean?",
      arabic: "لَمْ يَطْمِثْهُنَّ إِنْسٌ قَبْلَهُمْ وَلَا جَانٌّ",
      rootLetters: "ط م ث | ن س و | ج ن ن",
      options: [
        { id: "a", text: "No man has touched them before, nor any jinn", isCorrect: false },
        { id: "b", text: "No man has deflowered them before, nor any jinn", isCorrect: true },
        { id: "c", text: "No man has approached them before, nor any jinn", isCorrect: false },
        { id: "d", text: "No man has been with them before, nor any jinn", isCorrect: false },
      ],
      explanation:
        "لَمْ يَطْمِثْهُنَّ إِنْسٌ قَبْلَهُمْ وَلَا جَانٌّ (Lam yatmithunna insun qablahum wa la jannun) means 'No man has deflowered them before, nor any jinn,' describing the purity of the maidens of Paradise.",
    },
    {
      id: "q43",
      question: "What does the Arabic phrase 'مُتَّكِئِينَ عَلَى رَفْرَفٍ خُضْرٍ وَعَبْقَرِيٍّ حِسَانٍ' mean?",
      arabic: "مُتَّكِئِينَ عَلَى رَفْرَفٍ خُضْرٍ وَعَبْقَرِيٍّ حِسَانٍ",
      rootLetters: "ت ك أ | ر ف ر ف | خ ض ر | ع ب ق ر | ح س ن",
      options: [
        { id: "a", text: "Reclining on green cushions and beautiful carpets", isCorrect: false },
        { id: "b", text: "Reclining on green cushions and fine carpets", isCorrect: true },
        { id: "c", text: "Reclining on green couches and beautiful carpets", isCorrect: false },
        { id: "d", text: "Reclining on green pillows and fine carpets", isCorrect: false },
      ],
      explanation:
        "مُتَّكِئِينَ عَلَى رَفْرَفٍ خُضْرٍ وَعَبْقَرِيٍّ حِسَانٍ (Muttaki'ina 'ala rafrafin khudrin wa 'abqariyyin hisan) means 'Reclining on green cushions and fine carpets,' a description of Paradise.",
    },
    {
      id: "q44",
      question: "What does the Arabic phrase 'تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالْإِكْرَامِ' mean?",
      arabic: "تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالْإِكْرَامِ",
      rootLetters: "ب ر ك | س م و | ج ل ل | ك ر م",
      options: [
        { id: "a", text: "Blessed is the name of your Lord, Owner of Majesty and Honor", isCorrect: true },
        { id: "b", text: "Exalted is the name of your Lord, Possessor of Majesty and Honor", isCorrect: false },
        { id: "c", text: "Blessed is the name of your Lord, Full of Majesty and Honor", isCorrect: false },
        { id: "d", text: "Exalted is the name of your Lord, Owner of Majesty and Honor", isCorrect: false },
      ],
      explanation:
        "تَبَارَكَ اسْمُ رَبِّكَ ذِي الْجَلَالِ وَالْإِكْرَامِ (Tabaraka ismu rabbika dhi al-jalali wal-ikram) means 'Blessed is the name of your Lord, Owner of Majesty and Honor,' the concluding verse of the Surah.",
    },
    // Additional Questions
    {
      id: "q45",
      question: "How many times is the verse 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ' repeated in Surah Ar-Rahman?",
      arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
      rootLetters: "أ ل و | ر ب ب | ك ذ ب",
      options: [
        { id: "a", text: "21 times", isCorrect: false },
        { id: "b", text: "31 times", isCorrect: true },
        { id: "c", text: "41 times", isCorrect: false },
        { id: "d", text: "51 times", isCorrect: false },
      ],
      explanation:
        "The verse 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ' (Then which of the favors of your Lord will you both deny?) is repeated 31 times in Surah Ar-Rahman[reference:49].",
    },
    {
      id: "q46",
      question: "What is the famous title of Surah Ar-Rahman, as mentioned in ahadith?",
      arabic: "سورة الرحمن",
      rootLetters: "ر ح م",
      options: [
        { id: "a", text: "The Bride of the Quran (Aroos-ul-Quran)", isCorrect: true },
        { id: "b", text: "The Heart of the Quran", isCorrect: false },
        { id: "c", text: "The Beauty of the Quran", isCorrect: false },
        { id: "d", text: "The Light of the Quran", isCorrect: false },
      ],
      explanation:
        "Surah Ar-Rahman is known as the 'Bride of the Quran' (Aroos-ul-Quran), a title given based on narrations from the Prophet ﷺ and the Imams[reference:50][reference:51].",
    },
    {
      id: "q47",
      question: "According to a narration from Imam al-Sadiq (a), what is recommended to recite after the verse 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ'?",
      arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
      rootLetters: "أ ل و | ر ب ب | ك ذ ب",
      options: [
        { id: "a", text: "Subhanallah", isCorrect: false },
        { id: "b", text: "La ilaha illallah", isCorrect: false },
        { id: "c", text: "La bishay'in min ala'ika rabbi nukadhdhib", isCorrect: true },
        { id: "d", text: "Allahu Akbar", isCorrect: false },
      ],
      explanation:
        "It is recommended to recite 'لا بشیء من آلائک رب اکذب' (La bishay'in min ala'ika rabbi nukadhdhib) meaning 'Oh God, I will not deny any of your bounties' after reciting this verse[reference:52].",
    },
    {
      id: "q48",
      question: "How many verses does Surah Ar-Rahman contain?",
      arabic: "سورة الرحمن",
      rootLetters: "ر ح م",
      options: [
        { id: "a", text: "78", isCorrect: true },
        { id: "b", text: "77", isCorrect: false },
        { id: "c", text: "79", isCorrect: false },
        { id: "d", text: "80", isCorrect: false },
      ],
      explanation:
        "Surah Ar-Rahman contains 78 verses (ayat)[reference:53][reference:54].",
    },
    {
      id: "q49",
      question: "What is the primary theme of Surah Ar-Rahman?",
      arabic: "سورة الرحمن",
      rootLetters: "ر ح م",
      options: [
        { id: "a", text: "The sovereignty of Allah", isCorrect: false },
        { id: "b", text: "The mercy and blessings of Allah", isCorrect: true },
        { id: "c", text: "The stories of the prophets", isCorrect: false },
        { id: "d", text: "The laws of inheritance", isCorrect: false },
      ],
      explanation:
        "The primary theme of Surah Ar-Rahman is the mercy and blessings of Allah, manifested in creation and the Hereafter[reference:55][reference:56].",
    },
    {
      id: "q50",
      question: "What are the two groups of creation addressed in the refrain 'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ'?",
      arabic: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
      rootLetters: "أ ل و | ر ب ب | ك ذ ب",
      options: [
        { id: "a", text: "Men and angels", isCorrect: false },
        { id: "b", text: "Men and women", isCorrect: false },
        { id: "c", text: "Mankind and jinn", isCorrect: true },
        { id: "d", text: "Believers and disbelievers", isCorrect: false },
      ],
      explanation:
        "The refrain addresses both mankind and jinn, as indicated by the dual form 'Rabbikuma' (your Lord) and 'tukaththibani' (you both deny)[reference:57][reference:58].",
    },
  ],
}
