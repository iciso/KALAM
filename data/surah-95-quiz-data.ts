export const atTinQuizData: SurahQuizData = {
  surahId: 95,
  surahName: "At-Tin",
  surahArabicName: "التين",
  totalVerses: 8,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah At-Tin (The Fig) is the 95th chapter of the Quran. It begins with Allah swearing by the fig, the olive, Mount Sinai, and the secure city of Mecca, emphasizing human creation in the best form and the consequences of faith and disbelief. The surah concludes with affirming Allah as the Most Just of Judges.",

  additionalContextElements: [
    {
      title: "The Oaths in Surah At-Tin",
      content: `
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Significance of the Four Oaths</h3>
          <p class="text-purple-700 dark:text-purple-200 mb-3">
            Allah swears by four significant creations in this surah: the fig, the olive, Mount Sinai, and the secure city (Mecca). Scholars have interpreted these oaths as representing:
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              According to Tafsir Ibn Kathir, the fig and olive represent the lands where they grow abundantly (Syria and Palestine), where many prophets were sent. Mount Sinai is where Allah spoke to Musa (AS), and Mecca is the secure city where Muhammad ﷺ received revelation.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Prophetic Connection</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Some scholars suggest the fig represents the mosque of Prophet Nuh (AS) and the olive represents Jerusalem, while Mount Sinai signifies where Musa (AS) received the Torah, and Mecca represents the final revelation to Muhammad ﷺ.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Human Creation and Accountability",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">The Best of Creation</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The surah emphasizes that Allah created humans in the best form (ahsan taqweem), but those who reject faith will be reduced to the lowest of the low (asfal safileen).
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Al-Jalalayn explains that "ahsan taqweem" refers to the upright form and beautiful appearance given to humans, while "asfal safileen" refers to the lowest level of Hell in the Hereafter for disbelievers.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Hadith Connection</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet ﷺ said: "Indeed, Allah created Adam in His image, and his height was sixty cubits..." (Bukhari 6227). This relates to the concept of humans being created in the best form.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Allah as the Just Judge",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">The Final Verdict</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            The surah concludes by affirming that Allah is the Most Just of Judges (ahkam al-hakimeen), emphasizing divine justice in rewarding believers and punishing disbelievers.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Tafsir Insight</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Tafsir Ibn Kathir explains that this final verse responds to the oaths at the beginning: just as these creations testify to Allah's power, He will indeed judge justly between people based on their deeds.
            </p>
          </div>
        </div>
      `,
    },
  ],

  questions: [
    {
      id: "q1",
      question: "What does the Arabic phrase وَالتِّينِ وَالزَّيْتُونِ in the surah refer to?",
      arabic: "وَالتِّينِ وَالزَّيْتُونِ",
      rootLetters: "ت ي ن | ز ي ت",
      options: [
        { id: "a", text: "Two prophets", isCorrect: false },
        { id: "b", text: "Two mountains", isCorrect: false },
        { id: "c", text: "The fig and the olive", isCorrect: true },
        { id: "d", text: "Two cities", isCorrect: false },
      ],
      explanation: "وَالتِّينِ وَالزَّيْتُونِ means 'By the fig and the olive' (roots: ت-ي-ن and ز-ي-ت), which Allah swears by in the opening verse.",
    },
    {
      id: "q2",
      question: "What does the Arabic term طُورِ سِينِينَ mean?",
      arabic: "طُورِ سِينِينَ",
      rootLetters: "ط و ر | س ي ن",
      options: [
        { id: "a", text: "Mount of Olives", isCorrect: false },
        { id: "b", text: "Mount Sinai", isCorrect: true },
        { id: "c", text: "Mount Uhud", isCorrect: false },
        { id: "d", text: "Mount Hira", isCorrect: false },
      ],
      explanation: "طُورِ سِينِينَ refers to Mount Sinai (roots: ط-و-ر and س-ي-ن), where Allah spoke to Musa (AS).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase وَهَٰذَا الْبَلَدِ الْأَمِينِ refer to?",
      arabic: "وَهَٰذَا الْبَلَدِ الْأَمِينِ",
      rootLetters: "ب ل د | أ م ن",
      options: [
        { id: "a", text: "Medina", isCorrect: false },
        { id: "b", text: "Jerusalem", isCorrect: false },
        { id: "c", text: "Damascus", isCorrect: false },
        { id: "d", text: "The secure city of Mecca", isCorrect: true },
      ],
      explanation: "وَهَٰذَا الْبَلَدِ الْأَمِينِ means 'and this secure city' (roots: ب-ل-د and أ-م-ن), referring to Mecca.",
    },
    {
      id: "q4",
      question: "What does the Arabic expression لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ mean?",
      arabic: "لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ",
      rootLetters: "خ ل ق | ح س ن | ق و م",
      options: [
        { id: "a", text: "We created human in the best form", isCorrect: true },
        { id: "b", text: "We created human from clay", isCorrect: false },
        { id: "c", text: "We created human to worship", isCorrect: false },
        { id: "d", text: "We created human with knowledge", isCorrect: false },
      ],
      explanation: "This phrase means 'We have certainly created human in the best of stature' (roots: خ-ل-ق, ح-س-ن, ق-و-م).",
    },
    {
      id: "q5",
      question: "What does the Arabic term أَحْسَنِ تَقْوِيمٍ specifically refer to?",
      arabic: "أَحْسَنِ تَقْوِيمٍ",
      rootLetters: "ح س ن | ق و م",
      options: [
        { id: "a", text: "Moral perfection", isCorrect: false },
        { id: "b", text: "Physical strength", isCorrect: false },
        { id: "c", text: "The best form and upright stature", isCorrect: true },
        { id: "d", text: "Intellectual capability", isCorrect: false },
      ],
      explanation: "أَحْسَنِ تَقْوِيمٍ means 'the best form' (roots: ح-س-ن and ق-و-م), referring to human physical and spiritual creation.",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ mean?",
      arabic: "ثُمَّ رَدَدْنَاهُ أَسْفَلَ سَافِلِينَ",
      rootLetters: "ر د د | س ف ل",
      options: [
        { id: "a", text: "Then we return him to dust", isCorrect: false },
        { id: "b", text: "Then we return him to the lowest of the low", isCorrect: true },
        { id: "c", text: "Then we resurrect him", isCorrect: false },
        { id: "d", text: "Then we test him", isCorrect: false },
      ],
      explanation: "This phrase means 'Then we return him to the lowest of the low' (roots: ر-د-د and س-ف-ل), referring to the fate of disbelievers.",
    },
    {
      id: "q7",
      question: "What does the Arabic word سَافِلِينَ mean?",
      arabic: "سَافِلِينَ",
      rootLetters: "س ف ل",
      options: [
        { id: "a", text: "The elevated", isCorrect: false },
        { id: "b", text: "The righteous", isCorrect: false },
        { id: "c", text: "The middle", isCorrect: false },
        { id: "d", text: "The lowly", isCorrect: true },
      ],
      explanation: "سَافِلِينَ means 'the lowly' (root: س-ف-ل), describing those who reject faith.",
    },
    {
      id: "q8",
      question: "According to the surah, who will be exempt from this degradation?",
      arabic: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ",
      rootLetters: "ء م ن | ع م ل | ص ل ح",
      options: [
        { id: "a", text: "Those who were wealthy", isCorrect: false },
        { id: "b", text: "Those who had knowledge", isCorrect: false },
        { id: "c", text: "Those who believed and did righteous deeds", isCorrect: true },
        { id: "d", text: "Those who prayed regularly", isCorrect: false },
      ],
      explanation: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ means 'except those who believe and do righteous deeds' (roots: ء-م-ن, ع-م-ل, ص-ل-ح).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ promise?",
      arabic: "فَلَهُمْ أَجْرٌ غَيْرُ مَمْنُونٍ",
      rootLetters: "أ ج ر | م ن ن",
      options: [
        { id: "a", text: "A reward uninterrupted", isCorrect: true },
        { id: "b", text: "A reward without measure", isCorrect: false },
        { id: "c", text: "A reward doubled", isCorrect: false },
        { id: "d", text: "A reward immediate", isCorrect: false },
      ],
      explanation: "This phrase means 'for them is a reward uninterrupted' (roots: أ-ج-ر and م-ن-ن), referring to eternal reward in Paradise.",
    },
    {
      id: "q10",
      question: "What does the Arabic term مَمْنُونٍ mean?",
      arabic: "مَمْنُونٍ",
      rootLetters: "م ن ن",
      options: [
        { id: "a", text: "Measured", isCorrect: false },
        { id: "b", text: "Temporary", isCorrect: false },
        { id: "c", text: "Small", isCorrect: false },
        { id: "d", text: "Interrupted or cut off", isCorrect: true },
      ],
      explanation: "مَمْنُونٍ means 'interrupted' or 'cut off' (root: م-ن-ن), describing the continuous nature of the believers' reward.",
    },
    {
      id: "q11",
      question: "What does the Arabic expression أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ mean?",
      arabic: "أَلَيْسَ اللَّهُ بِأَحْكَمِ الْحَاكِمِينَ",
      rootLetters: "ح ك م",
      options: [
        { id: "a", text: "Is not Allah the Most Forgiving?", isCorrect: false },
        { id: "b", text: "Is not Allah the Most Just of Judges?", isCorrect: true },
        { id: "c", text: "Is not Allah the Creator?", isCorrect: false },
        { id: "d", text: "Is not Allah the Most Merciful?", isCorrect: false },
      ],
      explanation: "This rhetorical question means 'Is not Allah the Most Just of Judges?' (root: ح-ك-م), affirming divine justice.",
    },
    {
      id: "q12",
      question: "What does the Arabic term الْحَاكِمِينَ refer to?",
      arabic: "الْحَاكِمِينَ",
      rootLetters: "ح ك م",
      options: [
        { id: "a", text: "The creators", isCorrect: false },
        { id: "b", text: "The sustainers", isCorrect: false },
        { id: "c", text: "The judges", isCorrect: true },
        { id: "d", text: "The witnesses", isCorrect: false },
      ],
      explanation: "الْحَاكِمِينَ means 'the judges' (root: ح-ك-م), referring to Allah as the ultimate judge.",
    },
  ],
};
