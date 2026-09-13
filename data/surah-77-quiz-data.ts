export const alMursalatQuizData: SurahQuizData = {
  surahId: 77,
  surahName: "Al-Mursalat",
  surahArabicName: "المرسلات",
  totalVerses: 50,
  type: "Meccan",
  difficulty: "Intermediate",
  introduction:
    "Surah Al-Mursalat (The Emissaries / Those Sent Forth) is the 77th chapter of the Quran, containing 50 verses. Revealed in Mecca in the early period of prophethood, it affirms the certainty of the Day of Resurrection and the Hereafter through powerful divine oaths by the winds or angels sent successively. It features a piercing refrain of warning and contrasts the destinies of the righteous (shade, springs, and fruits) with the severe punishments awaiting the deniers and wrongdoers.",
  additionalContextElements: [
    {
      title: "Divine Oaths and the Certainty of Resurrection",
      content: `
        <div class="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
          <h3 class="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Historical Context and Reasons for Revelation</h3>
          <p class="text-orange-700 dark:text-orange-200 mb-3">
            Surah Al-Mursalat is a Meccan surah revealed in the early years of the Prophet’s mission. It was sent down while the Prophet ﷺ was in a cave at Mina; Abdullah ibn Mas‘ud learned it directly from the Prophet’s mouth as it was being revealed. The Quraysh of Mecca repeatedly denied the Resurrection and demanded that it be brought immediately if true. The surah responds by swearing by the forces Allah sends forth as evidence that the promised Day must occur.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Tafsir Evidence</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir records that the surah was revealed in Mina and that the Prophet recited it in the Maghrib prayer. Al-Maududi explains that the oaths by successive winds (or angels) demonstrate Allah’s power and wisdom, proving that the Resurrection cannot be vain or impossible.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Etymology and Meaning</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              ‘Al-Mursalat’ comes from the root ر-س-ل meaning “those sent forth.” Classical commentators differ: some interpret it as the winds sent successively, others as the angels who deliver revelation and distinguish truth from falsehood.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Divine oaths affirming Resurrection: Surah At-Tur (52:1-8), Surah Adh-Dhariyat (51:1-6). Destruction of previous nations: Surah Al-Haqqah (69:4-12). Day of Decision: Surah As-Saffat (37:21).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Refrain of Warning and the Two Destinies",
      content: `
        <div class="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
          <h3 class="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Woe to the Deniers and the Reward of the Righteous</h3>
          <p class="text-indigo-700 dark:text-indigo-200 mb-3">
            The surah repeatedly warns “Woe that Day to the deniers,” contrasting the shade, springs, and fruits prepared for the God-fearing with the scorching smoke and torment prepared for those who rejected the truth.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Tafsir Insights</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir notes that the refrain emphasizes the inevitability of judgment. Al-Maududi highlights that the same power which created man from a despised fluid and made the earth a receptacle for the living and the dead can certainly resurrect and judge.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Prophetic Guidance and Hadith</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Umm al-Fadl heard the Prophet ﷺ recite Surah Al-Mursalat in the Maghrib prayer; it was among the last surahs she heard from him. The revelation account with Ibn Mas‘ud in the cave at Mina is recorded in Sahih al-Bukhari and Sahih Muslim.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Woe to the deniers: Surah Al-Mutaffifin (83:10-17). Shade and springs for the righteous: Surah Al-Insan (76:12-22). Creation from fluid: Surah Al-Mu’minun (23:12-14).
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What does the Arabic phrase 'وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ' mean?",
      arabic: "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ",
      rootLetters: "و ي ل | ي و م | ك ذ ب",
      options: [
        { id: "a", text: "Blessed that Day are the believers", isCorrect: false },
        { id: "b", text: "Peace that Day to the truthful", isCorrect: false },
        { id: "c", text: "Mercy that Day for the repentant", isCorrect: false },
        { id: "d", text: "Woe that Day to the deniers", isCorrect: true },
      ],
      explanation: "وَيْلٌ يَوْمَئِذٍ لِّلْمُكَذِّبِينَ (Waylun yawma’idhin lil-mukadhdhibin) means 'Woe that Day to the deniers,' the first occurrence of the refrain in the surah; roots و-ي-ل (woe), ي-و-م (day), ك-ذ-ب (deny) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q2",
      question: "What is the English meaning for the surah's title, Al-Mursalat, المرسلات?",
      arabic: "المرسلات",
      rootLetters: "ر س ل",
      options: [
        { id: "a", text: "The Folded Up", isCorrect: false },
        { id: "b", text: "The Emissaries / Those Sent Forth", isCorrect: true },
        { id: "c", text: "The Overwhelming", isCorrect: false },
        { id: "d", text: "The Splitting Open", isCorrect: false },
      ],
      explanation: "المرسلات (Al-Mursalat) means 'The Emissaries' or 'Those Sent Forth,' from the root ر-س-ل (Quran.com, Ibn Kathir).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'وَالْمُرْسَلَاتِ عُرْفًا' mean?",
      arabic: "وَالْمُرْسَلَاتِ عُرْفًا",
      rootLetters: "ر س ل | ع ر ف",
      options: [
        { id: "a", text: "By those sent forth successively / in gusts", isCorrect: true },
        { id: "b", text: "By those gathered in ranks", isCorrect: false },
        { id: "c", text: "By those scattered randomly", isCorrect: false },
        { id: "d", text: "By those halted completely", isCorrect: false },
      ],
      explanation: "وَالْمُرْسَلَاتِ عُرْفًا (Wal-mursalati ‘urfa) means 'By those sent forth successively / in gusts,' roots ر-س-ل (sent) and ع-ر-ف (successively) (MyIslam, Al-Maududi).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'فَالْعَاصِفَاتِ عَصْفًا' mean?",
      arabic: "فَالْعَاصِفَاتِ عَصْفًا",
      rootLetters: "ع ص ف",
      options: [
        { id: "a", text: "And those blowing gently", isCorrect: false },
        { id: "b", text: "And those remaining still", isCorrect: false },
        { id: "c", text: "And those blowing violently", isCorrect: true },
        { id: "d", text: "And those spreading widely", isCorrect: false },
      ],
      explanation: "فَالْعَاصِفَاتِ عَصْفًا (Fal-‘asifati ‘asfa) means 'And those blowing violently,' root ع-ص-ف (blow violently) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'وَالنَّاشِرَاتِ نَشْرًا' mean?",
      arabic: "وَالنَّاشِرَاتِ نَشْرًا",
      rootLetters: "ن ش ر",
      options: [
        { id: "a", text: "And those gathering tightly", isCorrect: false },
        { id: "b", text: "And those scattering / spreading widely", isCorrect: true },
        { id: "c", text: "And those descending rapidly", isCorrect: false },
        { id: "d", text: "And those ascending slowly", isCorrect: false },
      ],
      explanation: "وَالنَّاشِرَاتِ نَشْرًا (Wan-nashirati nashra) means 'And those scattering / spreading widely,' root ن-ش-ر (spread/scatter) (MyIslam, Al-Maududi).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'فَالْفَارِقَاتِ فَرْقًا' mean?",
      arabic: "فَالْفَارِقَاتِ فَرْقًا",
      rootLetters: "ف ر ق",
      options: [
        { id: "a", text: "And those uniting completely", isCorrect: false },
        { id: "b", text: "And those mixing thoroughly", isCorrect: false },
        { id: "c", text: "And those concealing truth", isCorrect: false },
        { id: "d", text: "And those fully distinguishing / separating", isCorrect: true },
      ],
      explanation: "فَالْفَارِقَاتِ فَرْقًا (Fal-fariqati farqa) means 'And those fully distinguishing / separating,' root ف-ر-ق (separate/distinguish) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'فَالْمُلْقِيَاتِ ذِكْرًا' mean?",
      arabic: "فَالْمُلْقِيَاتِ ذِكْرًا",
      rootLetters: "ل ق ي | ذ ك ر",
      options: [
        { id: "a", text: "And those withholding the message", isCorrect: false },
        { id: "b", text: "And those delivering a message / reminder", isCorrect: true },
        { id: "c", text: "And those erasing the reminder", isCorrect: false },
        { id: "d", text: "And those delaying the revelation", isCorrect: false },
      ],
      explanation: "فَالْمُلْقِيَاتِ ذِكْرًا (Fal-mulqiyati dhikra) means 'And those delivering a message / reminder,' roots ل-ق-ي (deliver) and ذ-ك-ر (reminder) (MyIslam, Al-Maududi).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'عُذْرًا أَوْ نُذْرًا' mean?",
      arabic: "عُذْرًا أَوْ نُذْرًا",
      rootLetters: "ع ذ ر | ن ذ ر",
      options: [
        { id: "a", text: "As justification or warning", isCorrect: true },
        { id: "b", text: "As reward or punishment", isCorrect: false },
        { id: "c", text: "As guidance or misguidance", isCorrect: false },
        { id: "d", text: "As mercy or justice", isCorrect: false },
      ],
      explanation: "عُذْرًا أَوْ نُذْرًا (‘Udhra aw nudhra) means 'As justification or warning,' roots ع-ذ-ر (excuse/justification) and ن-ذ-ر (warning) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'إِنَّمَا تُوعَدُونَ لَوَاقِعٌ' mean?",
      arabic: "إِنَّمَا تُوعَدُونَ لَوَاقِعٌ",
      rootLetters: "و ع د | و ق ع",
      options: [
        { id: "a", text: "Surely what you are promised is delayed", isCorrect: false },
        { id: "b", text: "Surely what you are promised is uncertain", isCorrect: false },
        { id: "c", text: "Surely what you are promised will come to pass", isCorrect: true },
        { id: "d", text: "Surely what you are promised is impossible", isCorrect: false },
      ],
      explanation: "إِنَّمَا تُوعَدُونَ لَوَاقِعٌ (Innama tu‘aduna lawaqi‘) means 'Surely what you are promised will come to pass,' roots و-ع-د (promise) and و-ق-ع (occur) (MyIslam, Al-Maududi).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'فَإِذَا النُّجُومُ طُمِسَتْ' mean?",
      arabic: "فَإِذَا النُّجُومُ طُمِسَتْ",
      rootLetters: "ن ج م | ط م س",
      options: [
        { id: "a", text: "So when the stars are brightened", isCorrect: false },
        { id: "b", text: "So when the stars are scattered", isCorrect: false },
        { id: "c", text: "So when the stars are gathered", isCorrect: false },
        { id: "d", text: "So when the stars are obliterated / lose their light", isCorrect: true },
      ],
      explanation: "فَإِذَا النُّجُومُ طُمِسَتْ (Fa-idha an-nujumu tumisat) means 'So when the stars are obliterated / lose their light,' roots ن-ج-م (stars) and ط-م-س (obliterate) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'وَإِذَا السَّمَاءُ فُرِجَتْ' mean?",
      arabic: "وَإِذَا السَّمَاءُ فُرِجَتْ",
      rootLetters: "س م و | ف ر ج",
      options: [
        { id: "a", text: "And when the heaven is closed", isCorrect: false },
        { id: "b", text: "And when the heaven is opened / cleft asunder", isCorrect: true },
        { id: "c", text: "And when the heaven is lowered", isCorrect: false },
        { id: "d", text: "And when the heaven is darkened", isCorrect: false },
      ],
      explanation: "وَإِذَا السَّمَاءُ فُرِجَتْ (Wa idha as-sama’u furijat) means 'And when the heaven is opened / cleft asunder,' roots س-م-و (heaven) and ف-ر-ج (open/cleave) (MyIslam, Al-Maududi).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'وَإِذَا الْجِبَالُ نُسِفَتْ' mean?",
      arabic: "وَإِذَا الْجِبَالُ نُسِفَتْ",
      rootLetters: "ج ب ل | ن س ف",
      options: [
        { id: "a", text: "And when the mountains are raised", isCorrect: false },
        { id: "b", text: "And when the mountains are blown away", isCorrect: true },
        { id: "c", text: "And when the mountains are solidified", isCorrect: false },
        { id: "d", text: "And when the mountains are covered", isCorrect: false },
      ],
      explanation: "وَإِذَا الْجِبَالُ نُسِفَتْ (Wa idha al-jibalu nusifat) means 'And when the mountains are blown away,' roots ج-ب-ل (mountains) and ن-س-ف (blow away) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q13",
      question: "What does the Arabic phrase 'وَإِذَا الرُّسُلُ أُقِّتَتْ' mean?",
      arabic: "وَإِذَا الرُّسُلُ أُقِّتَتْ",
      rootLetters: "ر س ل | و ق ت",
      options: [
        { id: "a", text: "And when the messengers are delayed", isCorrect: false },
        { id: "b", text: "And when the messengers are gathered / their time is appointed", isCorrect: true },
        { id: "c", text: "And when the messengers are dismissed", isCorrect: false },
        { id: "d", text: "And when the messengers are silenced", isCorrect: false },
      ],
      explanation: "وَإِذَا الرُّسُلُ أُقِّتَتْ (Wa idha ar-rusulu uqqitat) means 'And when the messengers are gathered / their time is appointed,' roots ر-س-ل (messengers) and و-ق-ت (appointed time) (MyIslam, Al-Maududi).",
    },
    {
      id: "q14",
      question: "What does the Arabic phrase 'لِأَيِّ يَوْمٍ أُجِّلَتْ' mean?",
      arabic: "لِأَيِّ يَوْمٍ أُجِّلَتْ",
      rootLetters: "ي و م | أ ج ل",
      options: [
        { id: "a", text: "For what year was it advanced?", isCorrect: false },
        { id: "b", text: "For what hour was it hastened?", isCorrect: false },
        { id: "c", text: "For what Day has it been deferred / postponed?", isCorrect: true },
        { id: "d", text: "For what night was it concealed?", isCorrect: false },
      ],
      explanation: "لِأَيِّ يَوْمٍ أُجِّلَتْ (Li-ayyi yawmin ujjilat) means 'For what Day has it been deferred / postponed?' roots ي-و-م (day) and أ-ج-ل (defer) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q15",
      question: "What does the Arabic phrase 'لِيَوْمِ الْفَصْلِ' mean?",
      arabic: "لِيَوْمِ الْفَصْلِ",
      rootLetters: "ي و م | ف ص ل",
      options: [
        { id: "a", text: "For the Day of Decision / Sorting Out", isCorrect: true },
        { id: "b", text: "For the Day of Mercy", isCorrect: false },
        { id: "c", text: "For the Day of Creation", isCorrect: false },
        { id: "d", text: "For the Day of Forgetfulness", isCorrect: false },
      ],
      explanation: "لِيَوْمِ الْفَصْلِ (Li-yawmi al-fasl) means 'For the Day of Decision / Sorting Out,' roots ي-و-م (day) and ف-ص-ل (decide/separate) (MyIslam, Al-Maududi).",
    },
    {
      id: "q16",
      question: "What does the Arabic phrase 'وَمَا أَدْرَاكَ مَا يَوْمُ الْفَصْلِ' mean?",
      arabic: "وَمَا أَدْرَاكَ مَا يَوْمُ الْفَصْلِ",
      rootLetters: "د ر ي | ي و م | ف ص ل",
      options: [
        { id: "a", text: "And what will make you know what the Day of Mercy is?", isCorrect: false },
        { id: "b", text: "And what will make you know what the Day of Creation is?", isCorrect: false },
        { id: "c", text: "And what will make you know what the Day of Bliss is?", isCorrect: false },
        { id: "d", text: "And what will make you know what the Day of Decision is?", isCorrect: true },
      ],
      explanation: "وَمَا أَدْرَاكَ مَا يَوْمُ الْفَصْلِ (Wa ma adraka ma yawmu al-fasl) means 'And what will make you know what the Day of Decision is?' roots د-ر-ي (know), ي-و-م (day), ف-ص-ل (decision) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q17",
      question: "What does the Arabic phrase 'أَلَمْ نُهْلِكِ الْأَوَّلِينَ' mean?",
      arabic: "أَلَمْ نُهْلِكِ الْأَوَّلِينَ",
      rootLetters: "ه ل ك | أ و ل",
      options: [
        { id: "a", text: "Did We not save the former peoples?", isCorrect: false },
        { id: "b", text: "Did We not guide the former peoples?", isCorrect: false },
        { id: "c", text: "Did We not destroy the former peoples?", isCorrect: true },
        { id: "d", text: "Did We not honor the former peoples?", isCorrect: false },
      ],
      explanation: "أَلَمْ نُهْلِكِ الْأَوَّلِينَ (Alam nuhliki al-awwalin) means 'Did We not destroy the former peoples?' roots ه-ل-ك (destroy) and أ-و-ل (former) (MyIslam, Al-Maududi).",
    },
    {
      id: "q18",
      question: "What does the Arabic phrase 'ثُمَّ نُتْبِعُهُمُ الْآخِرِينَ' mean?",
      arabic: "ثُمَّ نُتْبِعُهُمُ الْآخِرِينَ",
      rootLetters: "ت ب ع | أ خ ر",
      options: [
        { id: "a", text: "Then We will save the later ones", isCorrect: false },
        { id: "b", text: "Then We will make the later ones follow them", isCorrect: true },
        { id: "c", text: "Then We will honor the later ones", isCorrect: false },
        { id: "d", text: "Then We will forget the later ones", isCorrect: false },
      ],
      explanation: "ثُمَّ نُتْبِعُهُمُ الْآخِرِينَ (Thumma nutbi‘uhumu al-akhirin) means 'Then We will make the later ones follow them,' roots ت-ب-ع (follow) and أ-خ-ر (later) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q19",
      question: "What does the Arabic phrase 'كَذَٰلِكَ نَفْعَلُ بِالْمُجْرِمِينَ' mean?",
      arabic: "كَذَٰلِكَ نَفْعَلُ بِالْمُجْرِمِينَ",
      rootLetters: "ف ع ل | ج ر م",
      options: [
        { id: "a", text: "Thus do We deal with the righteous", isCorrect: false },
        { id: "b", text: "Thus do We deal with the grateful", isCorrect: false },
        { id: "c", text: "Thus do We deal with the criminals / wicked", isCorrect: true },
        { id: "d", text: "Thus do We deal with the believers", isCorrect: false },
      ],
      explanation: "كَذَٰلِكَ نَفْعَلُ بِالْمُجْرِمِينَ (Kadhālika naf‘alu bil-mujrimīn) means 'Thus do We deal with the criminals / wicked,' roots ف-ع-ل (do) and ج-ر-م (criminal) (MyIslam, Al-Maududi).",
    },
    {
      id: "q20",
      question: "What does the Arabic phrase 'أَلَمْ نَخْلُقكُّم مِّن مَّاءٍ مَّهِينٍ' mean?",
      arabic: "أَلَمْ نَخْلُقكُّم مِّن مَّاءٍ مَّهِينٍ",
      rootLetters: "خ ل ق | م و ء | م ه ن",
      options: [
        { id: "a", text: "Did We not create you from pure light?", isCorrect: false },
        { id: "b", text: "Did We not create you from a despised / insignificant fluid?", isCorrect: true },
        { id: "c", text: "Did We not create you from solid clay?", isCorrect: false },
        { id: "d", text: "Did We not create you from pure water?", isCorrect: false },
      ],
      explanation: "أَلَمْ نَخْلُقكُّم مِّن مَّاءٍ مَّهِينٍ (Alam nakhluqkum min ma’in mahin) means 'Did We not create you from a despised / insignificant fluid?' roots خ-ل-ق (create), م-و-ء (water/fluid), م-ه-ن (despised) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q21",
      question: "What does the Arabic phrase 'فَجَعَلْنَاهُ فِي قَرَارٍ مَّكِينٍ' mean?",
      arabic: "فَجَعَلْنَاهُ فِي قَرَارٍ مَّكِينٍ",
      rootLetters: "ج ع ل | ق ر ر | م ك ن",
      options: [
        { id: "a", text: "Then We placed it in an open place", isCorrect: false },
        { id: "b", text: "Then We placed it in a secure place / resting place", isCorrect: true },
        { id: "c", text: "Then We placed it in a temporary vessel", isCorrect: false },
        { id: "d", text: "Then We placed it in a distant land", isCorrect: false },
      ],
      explanation: "فَجَعَلْنَاهُ فِي قَرَارٍ مَّكِينٍ (Fa-ja‘alnahu fi qararin makin) means 'Then We placed it in a secure place / resting place,' roots ج-ع-ل (placed), ق-ر-ر (resting place), م-ك-ن (secure) (MyIslam, Al-Maududi).",
    },
    {
      id: "q22",
      question: "What does the Arabic phrase 'إِلَىٰ قَدَرٍ مَّعْلُومٍ' mean?",
      arabic: "إِلَىٰ قَدَرٍ مَّعْلُومٍ",
      rootLetters: "ق د ر | ع ل م",
      options: [
        { id: "a", text: "For a known / determined term", isCorrect: true },
        { id: "b", text: "For an unknown period", isCorrect: false },
        { id: "c", text: "For an unlimited time", isCorrect: false },
        { id: "d", text: "For a random duration", isCorrect: false },
      ],
      explanation: "إِلَىٰ قَدَرٍ مَّعْلُومٍ (Ila qadarin ma‘lum) means 'For a known / determined term,' roots ق-د-ر (measure/term) and ع-ل-م (known) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q23",
      question: "What does the Arabic phrase 'فَقَدَرْنَا فَنِعْمَ الْقَادِرُونَ' mean?",
      arabic: "فَقَدَرْنَا فَنِعْمَ الْقَادِرُونَ",
      rootLetters: "ق د ر | ن ع م",
      options: [
        { id: "a", text: "So We estimated, and We are the least of estimators", isCorrect: false },
        { id: "b", text: "So We measured, and We are poor at measuring", isCorrect: false },
        { id: "c", text: "So We determined, and excellent are We to determine", isCorrect: true },
        { id: "d", text: "So We delayed, and We are the best at delaying", isCorrect: false },
      ],
      explanation: "فَقَدَرْنَا فَنِعْمَ الْقَادِرُونَ (Fa-qadarna fa-ni‘ma al-qadirun) means 'So We determined, and excellent are We to determine,' roots ق-د-ر (determine) and ن-ع-م (excellent) (MyIslam, Al-Maududi).",
    },
    {
      id: "q24",
      question: "What does the Arabic phrase 'أَلَمْ نَجْعَلِ الْأَرْضَ كِفَاتًا' mean?",
      arabic: "أَلَمْ نَجْعَلِ الْأَرْضَ كِفَاتًا",
      rootLetters: "ج ع ل | أ ر ض | ك ف ت",
      options: [
        { id: "a", text: "Did We not make the earth barren?", isCorrect: false },
        { id: "b", text: "Did We not make the earth a receptacle / gathering place?", isCorrect: true },
        { id: "c", text: "Did We not make the earth unstable?", isCorrect: false },
        { id: "d", text: "Did We not make the earth elevated?", isCorrect: false },
      ],
      explanation: "أَلَمْ نَجْعَلِ الْأَرْضَ كِفَاتًا (Alam naj‘ali al-arda kifata) means 'Did We not make the earth a receptacle / gathering place?' roots ج-ع-ل (make), أ-ر-ض (earth), ك-ف-ت (receptacle) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q25",
      question: "What does the Arabic phrase 'أَحْيَاءً وَأَمْوَاتًا' mean in the context of the earth?",
      arabic: "أَحْيَاءً وَأَمْوَاتًا",
      rootLetters: "ح ي و | م و ت",
      options: [
        { id: "a", text: "For the rich and the poor", isCorrect: false },
        { id: "b", text: "For the believers and the disbelievers", isCorrect: false },
        { id: "c", text: "For the near and the far", isCorrect: false },
        { id: "d", text: "For the living and the dead", isCorrect: true },
      ],
      explanation: "أَحْيَاءً وَأَمْوَاتًا (Ahya’an wa amwata) means 'For the living and the dead,' roots ح-ي-و (living) and م-و-ت (dead) (MyIslam, Al-Maududi).",
    },
    {
      id: "q26",
      question: "What does the Arabic phrase 'وَجَعَلْنَا فِيهَا رَوَاسِيَ شَامِخَاتٍ' mean?",
      arabic: "وَجَعَلْنَا فِيهَا رَوَاسِيَ شَامِخَاتٍ",
      rootLetters: "ج ع ل | ر س و | ش م خ",
      options: [
        { id: "a", text: "And We placed therein low hills", isCorrect: false },
        { id: "b", text: "And We placed therein flowing rivers", isCorrect: false },
        { id: "c", text: "And We placed therein flat plains", isCorrect: false },
        { id: "d", text: "And We placed therein lofty / firmly-set mountains", isCorrect: true },
      ],
      explanation: "وَجَعَلْنَا فِيهَا رَوَاسِيَ شَامِخَاتٍ (Wa ja‘alna fiha rawasiya shamikhat) means 'And We placed therein lofty / firmly-set mountains,' roots ج-ع-ل (placed), ر-س-و (firmly set), ش-م-خ (lofty) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q27",
      question: "What does the Arabic phrase 'وَأَسْقَيْنَاكُم مَّاءً فُرَاتًا' mean?",
      arabic: "وَأَسْقَيْنَاكُم مَّاءً فُرَاتًا",
      rootLetters: "س ق ي | م و ء | ف ر ت",
      options: [
        { id: "a", text: "And We gave you bitter water to drink", isCorrect: false },
        { id: "b", text: "And We gave you pure / sweet water to drink", isCorrect: true },
        { id: "c", text: "And We gave you salty water to drink", isCorrect: false },
        { id: "d", text: "And We gave you scarce water to drink", isCorrect: false },
      ],
      explanation: "وَأَسْقَيْنَاكُم مَّاءً فُرَاتًا (Wa asqaynakum ma’an furata) means 'And We gave you pure / sweet water to drink,' roots س-ق-ي (give to drink), م-و-ء (water), ف-ر-ت (pure/sweet) (MyIslam, Al-Maududi).",
    },
    {
      id: "q28",
      question: "What does the Arabic phrase 'انطَلِقُوا إِلَىٰ مَا كُنتُم بِهِ تُكَذِّبُونَ' mean?",
      arabic: "انطَلِقُوا إِلَىٰ مَا كُنتُم بِهِ تُكَذِّبُونَ",
      rootLetters: "ط ل ق | ك ذ ب",
      options: [
        { id: "a", text: "Proceed to what you used to affirm", isCorrect: false },
        { id: "b", text: "Proceed to what you used to deny", isCorrect: true },
        { id: "c", text: "Proceed to what you used to hope for", isCorrect: false },
        { id: "d", text: "Proceed to what you used to fear", isCorrect: false },
      ],
      explanation: "انطَلِقُوا إِلَىٰ مَا كُنتُم بِهِ تُكَذِّبُونَ (Intaliqoo ila ma kuntum bihi tukadhdhiboon) means 'Proceed to what you used to deny,' roots ط-ل-ق (proceed) and ك-ذ-ب (deny) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q29",
      question: "What does the Arabic phrase 'انطَلِقُوا إِلَىٰ ظِلٍّ ذِي ثَلَاثِ شُعَبٍ' mean?",
      arabic: "انطَلِقُوا إِلَىٰ ظِلٍّ ذِي ثَلَاثِ شُعَبٍ",
      rootLetters: "ط ل ق | ظ ل ل | ش ع ب",
      options: [
        { id: "a", text: "Proceed to a shadow having three columns", isCorrect: true },
        { id: "b", text: "Proceed to a light having three rays", isCorrect: false },
        { id: "c", text: "Proceed to a garden having three rivers", isCorrect: false },
        { id: "d", text: "Proceed to a mountain having three peaks", isCorrect: false },
      ],
      explanation: "انطَلِقُوا إِلَىٰ ظِلٍّ ذِي ثَلَاثِ شُعَبٍ (Intaliqoo ila zillin dhi thalathi shu‘ab) means 'Proceed to a shadow having three columns,' roots ط-ل-ق (proceed), ظ-ل-ل (shadow), ش-ع-ب (columns/branches) (MyIslam, Al-Maududi).",
    },
    {
      id: "q30",
      question: "What does the Arabic phrase 'لَا ظَلِيلٍ وَلَا يُغْنِي مِنَ اللَّهَبِ' mean?",
      arabic: "لَا ظَلِيلٍ وَلَا يُغْنِي مِنَ اللَّهَبِ",
      rootLetters: "ظ ل ل | غ ن ي | ل ه ب",
      options: [
        { id: "a", text: "Neither cooling nor availing against the flame", isCorrect: true },
        { id: "b", text: "Both cooling and protecting from the flame", isCorrect: false },
        { id: "c", text: "Neither hot nor harmful from the flame", isCorrect: false },
        { id: "d", text: "Both shaded and safe from the flame", isCorrect: false },
      ],
      explanation: "لَا ظَلِيلٍ وَلَا يُغْنِي مِنَ اللَّهَبِ (La zalilin wa la yughni mina al-lahab) means 'Neither cooling nor availing against the flame,' roots ظ-ل-ل (shade), غ-ن-ي (avail), ل-ه-ب (flame) (Quran.com, Ibn Kathir).",
    },
  ],
};
