export interface SurahQuizData {
  surahId: number
  surahName: string
  surahArabicName: string
  totalVerses: number
  type: string
  difficulty: string
  introduction: string
  additionalContextElements?: {
    title: string
    content: string
  }[]
  questions: {
    id: string
    question: string
    arabic?: string
    rootLetters?: string
    options: {
      id: string
      text: string
      isCorrect: boolean
    }[]
    explanation?: string
  }[]
}

export const alFatihahQuizData: SurahQuizData = {
  surahId: 1,
  surahName: "Al-Fatihah",
  surahArabicName: "الفاتحة",
  totalVerses: 7,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Fatihah (The Opening) is the first chapter of the Quran and is recited in every unit (rak'ah) of the daily prayers. It is known as 'Umm al-Kitab' (The Mother of the Book) and 'Sab'a al-Mathani' (The Seven Oft-Repeated Verses) due to its central importance in Islamic worship and theology.",
  additionalContextElements: [
    {
      title: "Significance in Prayer",
      content: `
        <div class="mt-6 p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100 dark:border-emerald-800">
          <h3 class="text-lg font-semibold text-emerald-800 dark:text-emerald-300 mb-2">Essential in Prayer</h3>
          <p class="text-emerald-700 dark:text-emerald-200 mb-3">
            The Prophet Muhammad ﷺ said: "There is no prayer for the one who does not recite the Opening of the Book (Al-Fatihah)." This highlights its fundamental importance in Islamic worship.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-emerald-700 dark:text-emerald-300 mb-1">Divine Dialogue</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              In a hadith qudsi, the Prophet ﷺ reported that Allah said: "I have divided the prayer between Myself and My servant into two halves, and My servant shall have what he has asked for." When the servant says "All praise is due to Allah, the Lord of all worlds," Allah says: "My servant has praised Me." When the servant says "The Most Compassionate, the Most Merciful," Allah says: "My servant has extolled Me." When the servant says "Master of the Day of Judgment," Allah says: "My servant has glorified Me." When the servant says "You alone we worship and You alone we ask for help," Allah says: "This is between Me and My servant, and My servant shall have what he has asked for." When the servant says "Guide us to the straight path, the path of those whom You have favored, not of those who have earned Your anger, nor of those who have gone astray," Allah says: "This is for My servant, and My servant shall have what he has asked for."
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Theological Significance",
      content: `
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Comprehensive Summary</h3>
          <p class="text-blue-700 dark:text-blue-200 mb-3">
            Surah Al-Fatihah encapsulates the core message of the entire Quran in just seven verses:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Tawhid (Monotheism)</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                The surah establishes Allah as the sole Lord, Master, and deity worthy of worship.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Divine Attributes</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                It highlights Allah's mercy, compassion, and sovereignty over the Day of Judgment.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Worship & Dependence</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                It emphasizes the exclusive worship of Allah and complete reliance on Him.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Guidance & Salvation</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                It contains the essential supplication for guidance to the straight path.
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "fatihah-1",
      question: "What does 'Al-Fatihah' mean?",
      options: [
        { id: "a", text: "The Closing", isCorrect: false },
        { id: "b", text: "The Opening", isCorrect: true },
        { id: "c", text: "The Guidance", isCorrect: false },
        { id: "d", text: "The Light", isCorrect: false },
      ],
      explanation:
        "Al-Fatihah means 'The Opening' and is so named because it opens the Quran as its first chapter. It also opens the door to understanding the message of the Quran.",
    },
    {
      id: "fatihah-2",
      arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      question: "What is the meaning of 'Bismillah ir-Rahman ir-Rahim'?",
      options: [
        { id: "a", text: "In the name of Allah, the Creator, the Sustainer", isCorrect: false },
        { id: "b", text: "In the name of Allah, the Almighty, the Wise", isCorrect: false },
        { id: "c", text: "In the name of Allah, the Most Gracious, the Most Merciful", isCorrect: true },
        { id: "d", text: "In the name of Allah, the Forgiver, the Acceptor of repentance", isCorrect: false },
      ],
      explanation:
        "Bismillah ir-Rahman ir-Rahim means 'In the name of Allah, the Most Gracious, the Most Merciful.' This phrase begins not only Surah Al-Fatihah but also 113 of the 114 chapters of the Quran (except Surah At-Tawbah). It emphasizes Allah's attributes of mercy and compassion.",
    },
    {
      id: "fatihah-3",
      arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      rootLetters: "ح م د",
      question: "What is the meaning of 'Alhamdulillahi Rabbil 'Alamin'?",
      options: [
        { id: "a", text: "All praise is due to Allah, the Lord of all worlds", isCorrect: true },
        { id: "b", text: "All thanks is due to Allah, the Creator of mankind", isCorrect: false },
        { id: "c", text: "All glory is due to Allah, the Master of the universe", isCorrect: false },
        { id: "d", text: "All worship is due to Allah, the Sustainer of creation", isCorrect: false },
      ],
      explanation:
        "Alhamdulillahi Rabbil 'Alamin means 'All praise is due to Allah, the Lord of all worlds.' The word 'hamd' (praise) comes from the root letters ح م د and combines the meanings of praise, gratitude, and glorification. 'Rabb' means Lord, Master, Sustainer, and Nurturer. 'Alamin' refers to all worlds or all creation, including humans, jinn, angels, and all that exists.",
    },
    {
      id: "fatihah-4",
      arabic: "الرَّحْمَٰنِ الرَّحِيمِ",
      question: "What is the difference between 'Ar-Rahman' and 'Ar-Rahim'?",
      options: [
        { id: "a", text: "They are synonyms with no difference in meaning", isCorrect: false },
        {
          id: "b",
          text: "Ar-Rahman refers to Allah's mercy to believers, while Ar-Rahim refers to His mercy to all creation",
          isCorrect: false,
        },
        {
          id: "c",
          text: "Ar-Rahman refers to Allah's mercy to all creation, while Ar-Rahim refers to His special mercy to believers",
          isCorrect: true,
        },
        {
          id: "d",
          text: "Ar-Rahman refers to mercy in this world, while Ar-Rahim refers to mercy in the hereafter",
          isCorrect: false,
        },
      ],
      explanation:
        "Both Ar-Rahman and Ar-Rahim derive from the same root (ر ح م) meaning mercy, but they emphasize different aspects of Allah's mercy. Ar-Rahman refers to Allah's all-encompassing mercy that extends to all creation regardless of faith, while Ar-Rahim refers to His special, intensive mercy that is reserved for believers, particularly in the hereafter.",
    },
    {
      id: "fatihah-5",
      arabic: "مَالِكِ يَوْمِ الدِّينِ",
      question: "What is the meaning of 'Maliki Yawmid-Din'?",
      options: [
        { id: "a", text: "The Creator of the Day of Judgment", isCorrect: false },
        { id: "b", text: "The Master of the Day of Judgment", isCorrect: true },
        { id: "c", text: "The Witness of the Day of Judgment", isCorrect: false },
        { id: "d", text: "The Initiator of the Day of Judgment", isCorrect: false },
      ],
      explanation:
        "Maliki Yawmid-Din means 'The Master of the Day of Judgment.' The word 'Malik' means king or master, and 'Yawmid-Din' refers to the Day of Judgment or the Day of Recompense when all souls will be judged according to their deeds. This verse emphasizes Allah's absolute sovereignty and authority on that momentous day.",
    },
    {
      id: "fatihah-6",
      arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      question: "What is the meaning of 'Iyyaka na'budu wa iyyaka nasta'in'?",
      options: [
        { id: "a", text: "You alone we worship and You alone we ask for help", isCorrect: true },
        { id: "b", text: "You alone we praise and You alone we glorify", isCorrect: false },
        { id: "c", text: "You alone we fear and You alone we obey", isCorrect: false },
        { id: "d", text: "You alone we remember and You alone we call upon", isCorrect: false },
      ],
      explanation:
        "Iyyaka na'budu wa iyyaka nasta'in means 'You alone we worship and You alone we ask for help.' This verse represents the essence of Tawhid (Islamic monotheism) by affirming exclusive worship of Allah and complete reliance on Him. It's significant that this verse shifts from the third person ('Him') to direct address ('You'), establishing a direct relationship between the worshipper and Allah.",
    },
    {
      id: "fatihah-7",
      arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      question: "What is the meaning of 'Ihdinas-siratal-mustaqim'?",
      options: [
        { id: "a", text: "Show us the straight path", isCorrect: false },
        { id: "b", text: "Guide us to the straight path", isCorrect: true },
        { id: "c", text: "Lead us on the straight path", isCorrect: false },
        { id: "d", text: "Keep us on the straight path", isCorrect: false },
      ],
      explanation:
        "Ihdinas-siratal-mustaqim means 'Guide us to the straight path.' The word 'ihdina' comes from 'hidayah' meaning guidance, which includes both showing the right way and enabling one to follow it. 'Sirat' means path or way, and 'mustaqim' means straight, upright, or correct. This verse is a supplication for divine guidance to the path of truth and righteousness.",
    },
    {
      id: "fatihah-8",
      arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ",
      question: "Who are 'those whom You have favored' (alladhina an'amta 'alayhim)?",
      options: [
        { id: "a", text: "Only the companions of Prophet Muhammad ﷺ", isCorrect: false },
        { id: "b", text: "The wealthy and powerful", isCorrect: false },
        { id: "c", text: "The prophets, the truthful, the martyrs, and the righteous", isCorrect: true },
        { id: "d", text: "Those who perform many voluntary acts of worship", isCorrect: false },
      ],
      explanation:
        "According to Surah An-Nisa (4:69), those whom Allah has favored are 'the prophets, the truthful, the martyrs, and the righteous.' These are the people who have received Allah's special favor and blessing by following His guidance, and whose path believers ask to be guided to.",
    },
    {
      id: "fatihah-9",
      arabic: "غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
      question:
        "Who are 'those who have earned Your anger' (al-maghdubi 'alayhim) and 'those who have gone astray' (ad-dallin)?",
      options: [
        { id: "a", text: "The Jews and the Christians, respectively", isCorrect: true },
        { id: "b", text: "The hypocrites and the disbelievers, respectively", isCorrect: false },
        { id: "c", text: "The arrogant and the ignorant, respectively", isCorrect: false },
        { id: "d", text: "The oppressors and the misguided, respectively", isCorrect: false },
      ],
      explanation:
        "According to a hadith of the Prophet Muhammad ﷺ, 'those who have earned Your anger' refers to the Jews who knew the truth but deliberately rejected it, while 'those who have gone astray' refers to the Christians who strayed from the true path out of ignorance. More broadly, these terms refer to anyone who knowingly rejects truth (earning Allah's anger) or who deviates from the right path due to ignorance or confusion.",
    },
    {
      id: "fatihah-10",
      question: "What is the other name of Surah Al-Fatihah that means 'The Seven Oft-Repeated Verses'?",
      options: [
        { id: "a", text: "Umm al-Kitab", isCorrect: false },
        { id: "b", text: "Sab'a al-Mathani", isCorrect: true },
        { id: "c", text: "Ash-Shafiyah", isCorrect: false },
        { id: "d", text: "Al-Wafiyah", isCorrect: false },
      ],
      explanation:
        "Sab'a al-Mathani means 'The Seven Oft-Repeated Verses,' referring to the seven verses of Surah Al-Fatihah that are recited repeatedly in daily prayers. This name is mentioned in the Quran itself in Surah Al-Hijr (15:87): 'And We have certainly given you seven of the oft-repeated [verses] and the great Quran.'",
    },
    {
      id: "fatihah-11",
      question: "What is the name of Surah Al-Fatihah that means 'The Mother of the Book'?",
      options: [
        { id: "a", text: "Umm al-Kitab", isCorrect: true },
        { id: "b", text: "Asas al-Quran", isCorrect: false },
        { id: "c", text: "Fatihat al-Kitab", isCorrect: false },
        { id: "d", text: "Qalb al-Quran", isCorrect: false },
      ],
      explanation:
        "Umm al-Kitab means 'The Mother of the Book.' This name indicates the surah's fundamental importance as it contains the essence of the entire Quran. Just as a mother is the origin of her child, this surah is considered the origin or foundation of the Quranic message.",
    },
    {
      id: "fatihah-12",
      question: "According to Islamic tradition, what is the ruling on reciting Surah Al-Fatihah in prayer?",
      options: [
        { id: "a", text: "It is recommended but not obligatory", isCorrect: false },
        { id: "b", text: "It is obligatory only in the first two units (rak'ahs) of prayer", isCorrect: false },
        { id: "c", text: "It is obligatory in every unit (rak'ah) of prayer", isCorrect: true },
        {
          id: "d",
          text: "It is obligatory only in the obligatory prayers, not in voluntary prayers",
          isCorrect: false,
        },
      ],
      explanation:
        "According to the majority of scholars, reciting Surah Al-Fatihah is obligatory in every unit (rak'ah) of prayer, whether obligatory or voluntary. This is based on the hadith where the Prophet Muhammad ﷺ said: 'There is no prayer for the one who does not recite the Opening of the Book (Al-Fatihah).'",
    },
    {
      id: "fatihah-13",
      question: "What is the significance of saying 'Amin' after reciting Surah Al-Fatihah?",
      options: [
        { id: "a", text: "It marks the completion of the surah", isCorrect: false },
        { id: "b", text: "It means 'O Allah, accept our prayer'", isCorrect: false },
        { id: "c", text: "It means 'O Allah, respond to our supplication'", isCorrect: true },
        { id: "d", text: "It is a declaration of the truth of what was recited", isCorrect: false },
      ],
      explanation:
        "Saying 'Amin' (or 'Ameen') after reciting Surah Al-Fatihah means 'O Allah, respond to our supplication' or 'O Allah, grant our request.' Since the surah ends with a supplication for guidance, saying 'Amin' is asking Allah to accept and answer this prayer. The Prophet Muhammad ﷺ instructed Muslims to say 'Amin' after reciting Al-Fatihah in prayer.",
    },
    {
      id: "fatihah-14",
      question: "Which verse in Surah Al-Fatihah is known as the 'verse of worship and seeking help'?",
      options: [
        { id: "a", text: "Alhamdulillahi Rabbil 'Alamin", isCorrect: false },
        { id: "b", text: "Maliki Yawmid-Din", isCorrect: false },
        { id: "c", text: "Iyyaka na'budu wa iyyaka nasta'in", isCorrect: true },
        { id: "d", text: "Ihdinas-siratal-mustaqim", isCorrect: false },
      ],
      explanation:
        "The verse 'Iyyaka na'budu wa iyyaka nasta'in' (You alone we worship and You alone we ask for help) is known as the verse of worship and seeking help. It represents the essence of the relationship between the servant and Allah, combining the two fundamental aspects of faith: worship ('ibadah) and reliance (isti'anah).",
    },
    {
      id: "fatihah-15",
      question: "According to a hadith qudsi, how is the recitation of Surah Al-Fatihah described?",
      options: [
        { id: "a", text: "As a healing for all diseases", isCorrect: false },
        { id: "b", text: "As a dialogue between Allah and His servant", isCorrect: true },
        { id: "c", text: "As a protection from evil", isCorrect: false },
        { id: "d", text: "As a means of increasing one's sustenance", isCorrect: false },
      ],
      explanation:
        "In a hadith qudsi, the Prophet Muhammad ﷺ reported that Allah said: 'I have divided the prayer between Myself and My servant into two halves.' This hadith describes the recitation of Surah Al-Fatihah as a dialogue between Allah and His servant, where the servant praises Allah and makes supplications, and Allah responds to each verse.",
    },
  ],
}

export const alKafirunQuizData: SurahQuizData = {
  surahId: 109,
  surahName: "Al-Kafirun",
  surahArabicName: "الكافرون",
  totalVerses: 6,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Kafirun (The Disbelievers) is the 109th chapter of the Quran. It is a powerful declaration of religious freedom and the clear distinction between monotheism and polytheism. This short surah of just six verses delivers a decisive message about the incompatibility of true faith with compromise in matters of belief.",
  additionalContextElements: [
    {
      title: "Historical Context",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Historical Context</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            This surah was revealed in response to a specific proposal made by the leaders of Quraysh to Prophet Muhammad ﷺ. Frustrated by their inability to stop the spread of Islam, they attempted a compromise.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">The Quraysh Proposal</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              According to authentic narrations, the Quraysh leaders (including Al-Walid ibn Al-Mughirah, Al-'As ibn Wa'il, Al-Aswad ibn Al-Muttalib, and Umayyah ibn Khalaf) approached the Prophet ﷺ with an offer: "O Muhammad, come let us worship what you worship, and you worship what we worship. We will share with you in all matters. You worship our gods for a year, and we worship your God for a year."
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">Allah's Response</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Allah revealed this surah as a decisive response to reject any form of compromise in matters of faith and worship. The surah makes it clear that there can be no mixing between true monotheism and polytheism. It established a fundamental principle of religious freedom: each person has the right to choose their faith without coercion or compromise.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Significance",
      content: `
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Significance in Islamic Thought</h3>
          <p class="text-blue-700 dark:text-blue-200 mb-3">
            Surah Al-Kafirun holds special significance in Islamic thought and practice:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Religious Pluralism</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                The surah establishes a principle of peaceful coexistence: "To you be your religion, and to me my religion." This affirms the right of individuals to choose their own faith without coercion.
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Protection in Prayer</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                The Prophet ﷺ recommended reciting this surah along with Surah Al-Ikhlas in the two rak'ahs of Fajr prayer and the two rak'ahs after Tawaf (circumambulation of the Ka'bah).
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "kafirun-1",
      arabic: "الْكَافِرُونَ",
      rootLetters: "ك ف ر",
      question: "What does 'Al-Kafirun' mean?",
      options: [
        { id: "a", text: "The Believers", isCorrect: false },
        { id: "b", text: "The Disbelievers", isCorrect: true },
        { id: "c", text: "The Hypocrites", isCorrect: false },
        { id: "d", text: "The Righteous", isCorrect: false },
      ],
      explanation:
        "Al-Kafirun means 'The Disbelievers' and refers to those who reject faith in Allah and associate partners with Him. The word comes from the root 'kafara' which means to cover or conceal, implying that disbelievers cover up or reject the truth.",
    },
    {
      id: "kafirun-2",
      arabic: "قُلْ",
      rootLetters: "ق و ل",
      question: "The surah begins with the command 'Qul'. What does this mean and who is being addressed?",
      options: [
        { id: "a", text: "Say, addressing the believers", isCorrect: false },
        { id: "b", text: "Say, addressing the Prophet Muhammad ﷺ", isCorrect: true },
        { id: "c", text: "Recite, addressing the believers", isCorrect: false },
        { id: "d", text: "Listen, addressing the disbelievers", isCorrect: false },
      ],
      explanation:
        "Qul means 'Say' and is a command from Allah to Prophet Muhammad ﷺ. This command appears frequently in the Quran when Allah instructs the Prophet to deliver a specific message.",
    },
    {
      id: "kafirun-3",
      arabic: "لَا أَعْبُدُ مَا تَعْبُدُونَ",
      question: "What is the meaning of 'La a'budu ma ta'budun'?",
      options: [
        { id: "a", text: "I worship what you worship", isCorrect: false },
        { id: "b", text: "I do not worship what you worship", isCorrect: true },
        { id: "c", text: "You worship what I worship", isCorrect: false },
        { id: "d", text: "You do not worship what I worship", isCorrect: false },
      ],
      explanation:
        "La a'budu ma ta'budun means 'I do not worship what you worship'. This is a clear statement of disassociation from the polytheistic practices of the Meccans who worshipped idols and false deities.",
    },
    {
      id: "kafirun-4",
      arabic: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
      question: "What is the meaning of 'Wa la antum 'abiduna ma a'bud'?",
      options: [
        { id: "a", text: "And you worship what I worship", isCorrect: false },
        { id: "b", text: "And I worship what you worship", isCorrect: false },
        { id: "c", text: "And you do not worship what I worship", isCorrect: true },
        { id: "d", text: "And I do not worship what you worship", isCorrect: false },
      ],
      explanation:
        "Wa la antum 'abiduna ma a'bud means 'And you do not worship what I worship'. This emphasizes that the polytheists do not truly worship Allah as He should be worshipped - with complete devotion and without associating partners with Him.",
    },
    {
      id: "kafirun-5",
      arabic: "وَلَا أَنَا عَابِدٌ مَّا عَبَدتُّمْ",
      question: "What is the meaning of 'Wa la ana 'abidun ma 'abadtum'?",
      options: [
        { id: "a", text: "And I worship what you worship", isCorrect: false },
        { id: "b", text: "And you worship what I worship", isCorrect: false },
        { id: "c", text: "And I will not worship what you worship", isCorrect: true },
        { id: "d", text: "And you will not worship what I worship", isCorrect: false },
      ],
      explanation:
        "Wa la ana 'abidun ma 'abadtum means 'And I will not worship what you worship' or 'Nor will I worship what you have worshipped'. This verse emphasizes the Prophet's future commitment to never worship the idols of the polytheists.",
    },
    {
      id: "kafirun-6",
      arabic: "وَلَا أَنتُمْ عَابِدُونَ مَا أَعْبُدُ",
      question: "The repetition of 'Wa la antum 'abiduna ma a'bud' in the surah serves what purpose?",
      options: [
        { id: "a", text: "To create a poetic rhythm", isCorrect: false },
        { id: "b", text: "To emphasize the impossibility of compromise in matters of faith", isCorrect: true },
        { id: "c", text: "To show that the message wasn't understood the first time", isCorrect: false },
        { id: "d", text: "To indicate that the disbelievers might change in the future", isCorrect: false },
      ],
      explanation:
        "The repetition emphasizes the impossibility of compromise in matters of faith. It reinforces the fundamental incompatibility between monotheism and polytheism, making it clear that there can be no middle ground or mixing of the two belief systems.",
    },
    {
      id: "kafirun-7",
      arabic: "لَكُمْ دِينُكُمْ وَلِيَ دِينِ",
      question: "What is the meaning of the final verse 'Lakum dinukum wa liya din'?",
      options: [
        { id: "a", text: "You must follow my religion", isCorrect: false },
        { id: "b", text: "I must follow your religion", isCorrect: false },
        { id: "c", text: "To you be your religion, and to me my religion", isCorrect: true },
        { id: "d", text: "We should combine our religions", isCorrect: false },
      ],
      explanation:
        "Lakum dinukum wa liya din means 'To you be your religion, and to me my religion'. This verse establishes a principle of religious freedom and peaceful coexistence, acknowledging that each person has the right to choose their own faith without coercion.",
    },
    {
      id: "kafirun-8",
      question: "What was the historical context in which Surah Al-Kafirun was revealed?",
      options: [
        { id: "a", text: "During the migration to Medina", isCorrect: false },
        { id: "b", text: "After the conquest of Mecca", isCorrect: false },
        { id: "c", text: "In response to persecution of Muslims", isCorrect: false },
        { id: "d", text: "In response to a compromise proposal from the Quraysh leaders", isCorrect: true },
      ],
      explanation:
        "Surah Al-Kafirun was revealed in response to a proposal from the Quraysh leaders who suggested that the Prophet Muhammad ﷺ worship their gods for a year, and they would worship Allah for a year. This surah was revealed to reject any such compromise in matters of faith.",
    },
    {
      id: "kafirun-9",
      question: "Which Quraysh leaders were involved in proposing the compromise to the Prophet ﷺ?",
      options: [
        { id: "a", text: "Abu Lahab and Abu Jahl", isCorrect: false },
        { id: "b", text: "Al-Walid ibn Al-Mughirah and Al-'As ibn Wa'il", isCorrect: true },
        { id: "c", text: "Abu Sufyan and Khalid ibn Al-Walid", isCorrect: false },
        { id: "d", text: "Umar ibn Al-Khattab and Abu Bakr", isCorrect: false },
      ],
      explanation:
        "According to narrations, the leaders involved included Al-Walid ibn Al-Mughirah, Al-'As ibn Wa'il, Al-Aswad ibn Al-Muttalib, and Umayyah ibn Khalaf. These were prominent figures among the Quraysh who opposed the message of Islam.",
    },
    {
      id: "kafirun-10",
      question: "What principle regarding religious coexistence does Surah Al-Kafirun establish?",
      options: [
        { id: "a", text: "Forced conversion of disbelievers", isCorrect: false },
        { id: "b", text: "Religious segregation", isCorrect: false },
        { id: "c", text: "Religious freedom and non-coercion", isCorrect: true },
        { id: "d", text: "Religious debate until agreement", isCorrect: false },
      ],
      explanation:
        "Surah Al-Kafirun establishes the principle of religious freedom and non-coercion. The final verse 'To you be your religion, and to me my religion' affirms that each person has the right to choose their own faith without being forced to accept another's beliefs.",
    },
  ],
}

export const alIkhlasQuizData: SurahQuizData = {
  surahId: 112,
  surahName: "Al-Ikhlas",
  surahArabicName: "الإخلاص",
  totalVerses: 4,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Ikhlas (The Sincerity) is the 112th chapter of the Quran. Despite its brevity of just four verses, it is considered equal to one-third of the Quran in terms of reward and importance because it encapsulates the fundamental concept of Tawhid (the Oneness of Allah).",
  additionalContextElements: [
    {
      title: "Significance",
      content: `
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Virtues of Surah Al-Ikhlas</h3>
          <p class="text-purple-700 dark:text-purple-200 mb-3">
            The Prophet Muhammad ﷺ highlighted the special status of this surah in numerous traditions:
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Equal to One-Third of the Quran</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              The Prophet ﷺ said: "By Him in Whose Hand is my soul, it is equivalent to one-third of the Quran." This is because the Quran's teachings can be divided into three main categories: stories, laws, and beliefs about Allah. Surah Al-Ikhlas covers the third category comprehensively.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Love for this Surah</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              When the Prophet ﷺ learned that one of his companions frequently recited this surah in prayers because he loved it, he told him: "Your love for it will admit you into Paradise."
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "ikhlas-1",
      question: "What is the main theme of Surah Al-Ikhlas?",
      options: [
        { id: "a", text: "The importance of prayer", isCorrect: false },
        { id: "b", text: "The Oneness of Allah", isCorrect: true },
        { id: "c", text: "The rewards of charity", isCorrect: false },
        { id: "d", text: "The Day of Judgment", isCorrect: false },
      ],
      explanation: "Surah Al-Ikhlas is centered on the concept of Tawhid, the Oneness of Allah.",
    },
    {
      id: "ikhlas-2",
      arabic: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      question: "What is the meaning of 'Qul huwa Allahu ahad'?",
      options: [
        { id: "a", text: "Say: He is Allah, the One", isCorrect: true },
        { id: "b", text: "Say: He is Allah, the Creator", isCorrect: false },
        { id: "c", text: "Say: He is Allah, the Merciful", isCorrect: false },
        { id: "d", text: "Say: He is Allah, the Powerful", isCorrect: false },
      ],
      explanation:
        "This verse means 'Say: He is Allah, the One'. The word 'Ahad' emphasizes absolute oneness and uniqueness, indicating that Allah is indivisible and has no partners or equals.",
    },
    {
      id: "ikhlas-3",
      arabic: "اللَّهُ الصَّمَدُ",
      question: "What is the meaning of 'Allahu as-Samad'?",
      options: [
        { id: "a", text: "Allah, the All-Knowing", isCorrect: false },
        { id: "b", text: "Allah, the Eternal", isCorrect: true },
        { id: "c", text: "Allah, the Creator", isCorrect: false },
        { id: "d", text: "Allah, the Merciful", isCorrect: false },
      ],
      explanation:
        "This verse means 'Allah, the Eternal' or more precisely 'Allah, the Self-Sufficient Master whom all creatures need'. 'As-Samad' refers to the One who is independent of all needs while all creation depends on Him.",
    },
    {
      id: "ikhlas-4",
      arabic: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      question: "What is the meaning of 'Lam yalid wa lam yulad'?",
      options: [
        { id: "a", text: "He begets not, nor is He begotten", isCorrect: true },
        { id: "b", text: "He creates not, nor is He created", isCorrect: false },
        { id: "c", text: "He forgives not, nor does He need forgiveness", isCorrect: false },
        { id: "d", text: "He sees not, nor is He seen", isCorrect: false },
      ],
      explanation:
        "This verse means 'He begets not, nor is He begotten'. It refutes the concept that Allah has offspring or parents, emphasizing His uniqueness and eternal nature.",
    },
    {
      id: "ikhlas-5",
      arabic: "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ",
      question: "What is the meaning of 'Wa lam yakun lahu kufuwan ahad'?",
      options: [
        { id: "a", text: "And there is none like unto Him", isCorrect: true },
        { id: "b", text: "And He does not resemble His creation", isCorrect: false },
        { id: "c", text: "And He has no partners in His dominion", isCorrect: false },
        { id: "d", text: "And He has no equals in His power", isCorrect: false },
      ],
      explanation:
        "This verse means 'And there is none like unto Him' or 'And there is none comparable to Him'. It emphasizes that nothing in creation resembles Allah in any way.",
    },
    {
      id: "ikhlas-6",
      question: "According to hadith, what fraction of the Quran is Surah Al-Ikhlas equivalent to?",
      options: [
        { id: "a", text: "One-fourth", isCorrect: false },
        { id: "b", text: "One-third", isCorrect: true },
        { id: "c", text: "One-half", isCorrect: false },
        { id: "d", text: "One-tenth", isCorrect: false },
      ],
      explanation:
        "According to a hadith, the Prophet Muhammad ﷺ said that reciting Surah Al-Ikhlas is equivalent to reciting one-third of the Quran. This is because the Quran's teachings can be divided into three categories: stories, laws, and beliefs about Allah. Surah Al-Ikhlas comprehensively covers the third category.",
    },
    {
      id: "ikhlas-7",
      question: "What concept in Islamic theology does Surah Al-Ikhlas primarily address?",
      options: [
        { id: "a", text: "Tawhid (Oneness of Allah)", isCorrect: true },
        { id: "b", text: "Risalah (Prophethood)", isCorrect: false },
        { id: "c", text: "Akhirah (Afterlife)", isCorrect: false },
        { id: "d", text: "Ibadah (Worship)", isCorrect: false },
      ],
      explanation:
        "Surah Al-Ikhlas primarily addresses the concept of Tawhid, which is the absolute Oneness of Allah. This is the most fundamental concept in Islamic theology, upon which all other beliefs are built.",
    },
    {
      id: "ikhlas-8",
      question: "When is it recommended to recite Surah Al-Ikhlas according to Prophetic tradition?",
      options: [
        { id: "a", text: "Only during the five daily prayers", isCorrect: false },
        { id: "b", text: "Only during Ramadan", isCorrect: false },
        { id: "c", text: "After every obligatory prayer", isCorrect: false },
        { id: "d", text: "Before sleeping and after certain prayers", isCorrect: true },
      ],
      explanation:
        "According to Prophetic traditions, it is recommended to recite Surah Al-Ikhlas (along with Surah Al-Falaq and Surah An-Nas) before sleeping, after the obligatory prayers, and particularly in the Fajr and Maghrib prayers.",
    },
  ],
}

export const alFalaqQuizData: SurahQuizData = {
  surahId: 113,
  surahName: "Al-Falaq",
  surahArabicName: "الفلق",
  totalVerses: 5,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Falaq (The Daybreak) is the 113th chapter of the Quran and is one of the two surahs known as 'Al-Mu'awwidhatayn' (The Two Protectors). This surah teaches believers to seek refuge in Allah from various forms of evil.",
  additionalContextElements: [
    {
      title: "Protective Power",
      content: `
        <div class="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
          <h3 class="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Spiritual Protection</h3>
          <p class="text-indigo-700 dark:text-indigo-200 mb-3">
            The Prophet Muhammad ﷺ emphasized the protective power of this surah along with Surah An-Nas.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Prophetic Practice</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Aisha (may Allah be pleased with her) reported that every night when the Prophet ﷺ went to bed, he would cup his hands together, blow into them, and recite Surah Al-Ikhlas, Surah Al-Falaq, and Surah An-Nas. Then he would wipe as much of his body as he could with his hands, starting with his head, face, and the front of his body, repeating this three times.
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "falaq-1",
      question: "What does 'Al-Falaq' mean?",
      options: [
        { id: "a", text: "The Night", isCorrect: false },
        { id: "b", text: "The Dawn", isCorrect: false },
        { id: "c", text: "The Daybreak", isCorrect: true },
        { id: "d", text: "The Light", isCorrect: false },
      ],
      explanation:
        "Al-Falaq means 'The Daybreak' or 'The Dawn', referring to the breaking of darkness by the light of dawn.",
    },
    {
      id: "falaq-2",
      arabic: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
      question: "What is the meaning of 'Qul a'udhu bi rabbil-falaq'?",
      options: [
        { id: "a", text: "Say: I seek refuge in the Lord of the daybreak", isCorrect: true },
        { id: "b", text: "Say: I believe in the Lord of the daybreak", isCorrect: false },
        { id: "c", text: "Say: I worship the Lord of the daybreak", isCorrect: false },
        { id: "d", text: "Say: I praise the Lord of the daybreak", isCorrect: false },
      ],
      explanation:
        "This verse means 'Say: I seek refuge in the Lord of the daybreak'. It is a command to seek protection with Allah from the evils mentioned later in the surah.",
    },
    {
      id: "falaq-3",
      arabic: "مِن شَرِّ مَا خَلَقَ",
      question: "What is the meaning of 'Min sharri ma khalaq'?",
      options: [
        { id: "a", text: "From the evil of what He has created", isCorrect: true },
        { id: "b", text: "From the darkness when it spreads", isCorrect: false },
        { id: "c", text: "From the evil of the envious", isCorrect: false },
        { id: "d", text: "From the evil of magic", isCorrect: false },
      ],
      explanation:
        "This verse means 'From the evil of what He has created'. It is a general statement seeking protection from the evil of all created things.",
    },
    {
      id: "falaq-4",
      arabic: "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ",
      question: "What is the meaning of 'Wa min sharri ghasiqin idha waqab'?",
      options: [
        { id: "a", text: "And from the evil of the darkness when it settles", isCorrect: true },
        { id: "b", text: "And from the evil of those who practice witchcraft", isCorrect: false },
        { id: "c", text: "And from the evil of the envious when he envies", isCorrect: false },
        { id: "d", text: "And from the evil of the whisperer", isCorrect: false },
      ],
      explanation:
        "This verse means 'And from the evil of the darkness when it settles'. It refers to seeking protection from the evils that often occur during the night or in darkness.",
    },
    {
      id: "falaq-5",
      arabic: "وَمِن شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ",
      question: "What is the meaning of 'Wa min sharrin-naffathati fil-'uqad'?",
      options: [
        { id: "a", text: "And from the evil of those who practice witchcraft", isCorrect: true },
        { id: "b", text: "And from the evil of the darkness when it settles", isCorrect: false },
        { id: "c", text: "And from the evil of the envious when he envies", isCorrect: false },
        { id: "d", text: "And from the evil of the whisperer", isCorrect: false },
      ],
      explanation:
        "This verse means 'And from the evil of those who blow on knots' or more commonly understood as 'those who practice witchcraft'. In ancient times, sorcerers would tie knots and blow on them while reciting incantations as part of their magic practices.",
    },
    {
      id: "falaq-6",
      arabic: "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ",
      question: "What is the meaning of 'Wa min sharri hasidin idha hasad'?",
      options: [
        { id: "a", text: "And from the evil of the envious when he envies", isCorrect: true },
        { id: "b", text: "And from the evil of those who practice witchcraft", isCorrect: false },
        { id: "c", text: "And from the evil of the darkness when it settles", isCorrect: false },
        { id: "d", text: "And from the evil of the whisperer", isCorrect: false },
      ],
      explanation:
        "This verse means 'And from the evil of the envious when he envies'. It seeks protection from the harm that can come from people who are envious and jealous of others' blessings.",
    },
    {
      id: "falaq-7",
      question: "What is Surah Al-Falaq classified as along with Surah An-Nas?",
      options: [
        { id: "a", text: "Al-Mathani (The Oft-Repeated)", isCorrect: false },
        { id: "b", text: "Al-Mufassal (The Detailed)", isCorrect: false },
        { id: "c", text: "Al-Mu'awwidhatayn (The Two Protectors)", isCorrect: true },
        { id: "d", text: "Al-Hawamim (The Ha Mim Surahs)", isCorrect: false },
      ],
      explanation:
        "Surah Al-Falaq and Surah An-Nas are together known as Al-Mu'awwidhatayn, meaning 'The Two Protectors' or 'The Two Surahs of Refuge'. They are called this because both begin with seeking refuge in Allah from various evils.",
    },
    {
      id: "falaq-8",
      question: "According to hadith, when did the Prophet Muhammad ﷺ particularly recommend reciting Surah Al-Falaq?",
      options: [
        { id: "a", text: "Only during the five daily prayers", isCorrect: false },
        { id: "b", text: "Before important journeys", isCorrect: false },
        { id: "c", text: "Before sleeping and after waking up", isCorrect: true },
        { id: "d", text: "Only during times of illness", isCorrect: false },
      ],
      explanation:
        "According to authentic hadiths, the Prophet Muhammad ﷺ would recite Surah Al-Falaq and Surah An-Nas before sleeping and after waking up. He also recommended their recitation after each obligatory prayer and during illness.",
    },
  ],
}

export const alNasQuizData: SurahQuizData = {
  surahId: 114,
  surahName: "An-Nas",
  surahArabicName: "الناس",
  totalVerses: 6,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah An-Nas (Mankind) is the 114th and final chapter of the Quran. It is one of the two protective surahs (Al-Mu'awwidhatayn) along with Surah Al-Falaq. This powerful surah teaches believers to seek refuge in Allah from the evil of the whisperer who retreats - referring to Satan who whispers evil suggestions into the hearts of mankind.",
  additionalContextElements: [
    {
      title: "Protective Power",
      content: `
        <div class="mt-6 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-100 dark:border-purple-800">
          <h3 class="text-lg font-semibold text-purple-800 dark:text-purple-300 mb-2">Spiritual Protection</h3>
          <p class="text-purple-700 dark:text-purple-200 mb-3">
            The Prophet Muhammad ﷺ emphasized the protective power of this surah along with Surah Al-Falaq.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-purple-700 dark:text-purple-300 mb-1">Prophetic Practice</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Aisha (may Allah be pleased with her) reported that every night when the Prophet ﷺ went to bed, he would cup his hands together, blow into them, and recite Surah Al-Ikhlas, Surah Al-Falaq, and Surah An-Nas. Then he would wipe as much of his body as he could with his hands, starting with his head, face, and the front of his body, repeating this three times.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Thematic Structure",
      content: `
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Three Aspects of Divine Lordship</h3>
          <p class="text-blue-700 dark:text-blue-200 mb-3">
            Surah An-Nas uniquely mentions three divine attributes of Allah in succession:
          </p>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Rabb (Lord)</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Allah as the Creator, Sustainer, and Nurturer of mankind
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Malik (King)</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Allah as the Sovereign and Ruler over mankind
              </p>
            </div>
            <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
              <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Ilah (God)</h4>
              <p class="text-sm text-gray-600 dark:text-gray-300">
                Allah as the only One worthy of worship by mankind
              </p>
            </div>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "nas-1",
      question: "What does 'An-Nas' mean?",
      options: [
        { id: "a", text: "The Opening", isCorrect: false },
        { id: "b", text: "The People", isCorrect: false },
        { id: "c", text: "The Guidance", isCorrect: false },
        { id: "d", text: "Mankind", isCorrect: true },
      ],
      explanation: "An-Nas means 'Mankind' or 'Humanity', referring to all human beings.",
    },
    {
      id: "nas-2",
      arabic: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
      question: "What is the meaning of 'Qul a'udhu bi rabbin-nas'?",
      options: [
        { id: "a", text: "Say: I seek refuge in the Lord of mankind", isCorrect: true },
        { id: "b", text: "Say: I believe in the Lord of mankind", isCorrect: false },
        { id: "c", text: "Say: I worship the Lord of mankind", isCorrect: false },
        { id: "d", text: "Say: I praise the Lord of mankind", isCorrect: false },
      ],
      explanation:
        "Qul a'udhu bi rabbin-nas means 'Say: I seek refuge in the Lord of mankind'. This is a command to seek protection with Allah from the evils mentioned later in the surah.",
    },
    {
      id: "nas-3",
      arabic: "مَلِكِ النَّاسِ",
      question: "What is the meaning of 'Malikin-nas'?",
      options: [
        { id: "a", text: "The Creator of mankind", isCorrect: false },
        { id: "b", text: "The King of mankind", isCorrect: true },
        { id: "c", text: "The Guide of mankind", isCorrect: false },
        { id: "d", text: "The Protector of mankind", isCorrect: false },
      ],
      explanation:
        "Malikin-nas means 'The King of mankind'. This emphasizes Allah's sovereignty and authority over all human beings.",
    },
    {
      id: "nas-4",
      arabic: "إِلَٰهِ النَّاسِ",
      question: "What is the meaning of 'Ilahin-nas'?",
      options: [
        { id: "a", text: "The God of mankind", isCorrect: true },
        { id: "b", text: "The Savior of mankind", isCorrect: false },
        { id: "c", text: "The Judge of mankind", isCorrect: false },
        { id: "d", text: "The Friend of mankind", isCorrect: false },
      ],
      explanation:
        "Ilahin-nas means 'The God of mankind'. This emphasizes that Allah is the only deity worthy of worship by all human beings.",
    },
    {
      id: "nas-5",
      arabic: "مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ",
      question: "What is the meaning of 'Min sharril-waswasil-khannas'?",
      options: [
        { id: "a", text: "From the evil of the retreating darkness", isCorrect: false },
        { id: "b", text: "From the evil of the envious when he envies", isCorrect: false },
        { id: "c", text: "From the evil of the whisperer who withdraws", isCorrect: true },
        { id: "d", text: "From the evil of those who practice witchcraft", isCorrect: false },
      ],
      explanation:
        "Min sharril-waswasil-khannas means 'From the evil of the whisperer who withdraws/retreats'. This refers to Satan who whispers evil suggestions into people's hearts but retreats when a person remembers Allah.",
    },
    {
      id: "nas-6",
      arabic: "الْوَسْوَاسِ",
      rootLetters: "و س و س",
      question: "What does 'Al-Waswas' refer to?",
      options: [
        { id: "a", text: "A specific type of jinn", isCorrect: false },
        { id: "b", text: "The whisperer (Satan)", isCorrect: true },
        { id: "c", text: "A type of black magic", isCorrect: false },
        { id: "d", text: "The Day of Judgment", isCorrect: false },
      ],
      explanation:
        "Al-Waswas (from the root و س و س meaning to whisper) refers to 'The Whisperer' - a title for Satan who whispers evil suggestions and doubts into the hearts of people.",
    },
    {
      id: "nas-7",
      arabic: "الْخَنَّاسِ",
      question: "What does 'Al-Khannas' mean?",
      options: [
        { id: "a", text: "The one who attacks openly", isCorrect: false },
        { id: "b", text: "The one who retreats or withdraws", isCorrect: true },
        { id: "c", text: "The one who is visible", isCorrect: false },
        { id: "d", text: "The one who is powerful", isCorrect: false },
      ],
      explanation:
        "Al-Khannas means 'The one who retreats' or 'The one who withdraws'. This describes how Satan retreats and withdraws when a person remembers Allah or seeks refuge in Him.",
    },
    {
      id: "nas-8",
      arabic: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ",
      question: "What is the meaning of 'Alladhi yuwaswisu fi sudurin-nas'?",
      options: [
        { id: "a", text: "Who creates doubt in the minds of mankind", isCorrect: false },
        { id: "b", text: "Who whispers into the hearts of mankind", isCorrect: true },
        { id: "c", text: "Who appears in the dreams of mankind", isCorrect: false },
        { id: "d", text: "Who speaks to the souls of mankind", isCorrect: false },
      ],
      explanation:
        "Alladhi yuwaswisu fi sudurin-nas means 'Who whispers into the hearts (literally: chests) of mankind'. This describes how Satan secretly plants evil thoughts and suggestions in people's hearts.",
    },
    {
      id: "nas-9",
      arabic: "مِنَ الْجِنَّةِ وَالنَّاسِ",
      question: "What is the meaning of 'Minal-jinnati wan-nas'?",
      options: [
        { id: "a", text: "From among the jinn and mankind", isCorrect: true },
        { id: "b", text: "From the evil of jinn and mankind", isCorrect: false },
        { id: "c", text: "From the leaders of jinn and mankind", isCorrect: false },
        { id: "d", text: "From the creation of jinn and mankind", isCorrect: false },
      ],
      explanation:
        "Minal-jinnati wan-nas means 'From among the jinn and mankind'. This indicates that the whisperers who tempt people can be both from jinn (including Satan) and from human beings who suggest evil to others.",
    },
    {
      id: "nas-10",
      question: "What is Surah An-Nas classified as along with Surah Al-Falaq?",
      options: [
        { id: "a", text: "Al-Mathani (The Oft-Repeated)", isCorrect: false },
        { id: "b", text: "Al-Mufassal (The Detailed)", isCorrect: false },
        { id: "c", text: "Al-Mu'awwidhatayn (The Two Protectors)", isCorrect: true },
        { id: "d", text: "Al-Hawamim (The Ha Mim Surahs)", isCorrect: false },
      ],
      explanation:
        "Surah An-Nas and Surah Al-Falaq are together known as Al-Mu'awwidhatayn, meaning 'The Two Protectors' or 'The Two Surahs of Refuge'. They are called this because both begin with seeking refuge in Allah from various evils.",
    },
    {
      id: "nas-11",
      question: "According to hadith, when did the Prophet Muhammad ﷺ particularly recommend reciting Surah An-Nas?",
      options: [
        { id: "a", text: "Only during the five daily prayers", isCorrect: false },
        { id: "b", text: "Before important journeys", isCorrect: false },
        { id: "c", text: "Before sleeping and after waking up", isCorrect: true },
        { id: "d", text: "Only during times of illness", isCorrect: false },
      ],
      explanation:
        "According to authentic hadiths, the Prophet Muhammad ﷺ would recite Surah Al-Falaq and Surah An-Nas before sleeping and after waking up. He also recommended their recitation after each obligatory prayer and during illness.",
    },
    {
      id: "nas-12",
      question: "What unique feature does Surah An-Nas have regarding Allah's attributes?",
      options: [
        { id: "a", text: "It mentions Allah's attribute of creation only", isCorrect: false },
        { id: "b", text: "It mentions three divine attributes in succession: Lord, King, and God", isCorrect: true },
        { id: "c", text: "It doesn't mention any of Allah's attributes", isCorrect: false },
        { id: "d", text: "It focuses exclusively on Allah's attribute of mercy", isCorrect: false },
      ],
      explanation:
        "Surah An-Nas uniquely mentions three divine attributes of Allah in succession: Rabb (Lord), Malik (King), and Ilah (God). This comprehensive description emphasizes Allah's complete authority over mankind as their Creator and Sustainer, their Sovereign Ruler, and the only One worthy of their worship.",
    },
  ],
}

export const surahMasadQuizData: SurahQuizData = {
  surahId: 111,
  surahName: "Al-Masad",
  surahArabicName: "المسد",
  totalVerses: 5,
  type: "Meccan",
  difficulty: "Beginner",
  introduction:
    "Surah Al-Masad (The Palm Fiber), also known as Surah Lahab, is the 111th chapter of the Quran. It refers to Abu Lahab, an uncle of Prophet Muhammad ﷺ, and his wife who were staunch opponents of Islam. This surah is a response to their hostility and persecution of the Prophet.",
  additionalContextElements: [
    {
      title: "Historical Context",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">The Call to Mount Safa</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            This surah was revealed after a specific incident early in the Prophet's mission.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">The Incident</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              When Allah commanded the Prophet Muhammad ﷺ to openly proclaim his message, he climbed Mount Safa and called out to gather the Quraysh tribes. When they assembled, he asked them, "If I were to tell you that there is an army behind this mountain ready to attack you, would you believe me?" They replied, "Yes, for we have never known you to lie." The Prophet then said, "I am a warner to you of a severe punishment!" At this point, Abu Lahab, the Prophet's uncle, angrily responded, "May you perish! Did you gather us for this?" and then threw a stone at him. Shortly after this incident, this surah was revealed.
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "masad-1",
      question: "What is another name for Surah Al-Masad?",
      options: [
        { id: "a", text: "Al-Ikhlas", isCorrect: false },
        { id: "b", text: "Al-Falaq", isCorrect: false },
        { id: "c", text: "Al-Lahab", isCorrect: true },
        { id: "d", text: "An-Nas", isCorrect: false },
      ],
      explanation:
        "Another name for Surah Al-Masad is Surah Al-Lahab, referring to Abu Lahab who is mentioned in the surah.",
    },
    {
      id: "masad-2",
      arabic: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ",
      question: "What is the meaning of 'Tabbat yada abi lahabin wa tabb'?",
      options: [
        { id: "a", text: "Perish the hands of Abu Lahab, and perish he", isCorrect: true },
        { id: "b", text: "Blessed are the hands of Abu Lahab, and blessed is he", isCorrect: false },
        { id: "c", text: "Powerful are the hands of Abu Lahab, and powerful is he", isCorrect: false },
        { id: "d", text: "Weak are the hands of Abu Lahab, and weak is he", isCorrect: false },
      ],
      explanation:
        "This verse means 'Perish the hands of Abu Lahab, and perish he' or 'May the hands of Abu Lahab be ruined, and may he be ruined'. It is a condemnation of Abu Lahab for his hostility toward Islam and the Prophet Muhammad ﷺ.",
    },
    {
      id: "masad-3",
      arabic: "مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ",
      question: "What is the meaning of 'Ma aghna 'anhu maluhu wa ma kasab'?",
      options: [
        { id: "a", text: "His wealth and what he earned will not benefit him", isCorrect: true },
        { id: "b", text: "His wealth and what he earned will increase for him", isCorrect: false },
        { id: "c", text: "His wealth and what he earned will be shared with others", isCorrect: false },
        { id: "d", text: "His wealth and what he earned will be lost to others", isCorrect: false },
      ],
      explanation:
        "This verse means 'His wealth and what he earned will not benefit him' or 'His wealth and gains will not avail him'. It indicates that despite Abu Lahab's wealth and status, these would not protect him from divine punishment.",
    },
    {
      id: "masad-4",
      arabic: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ",
      question: "What is the meaning of 'Sayasla naran thata lahab'?",
      options: [
        { id: "a", text: "He will be spared from the blazing Fire", isCorrect: false },
        { id: "b", text: "He will enter a Fire of blazing flames", isCorrect: true },
        { id: "c", text: "He will extinguish the blazing Fire", isCorrect: false },
        { id: "d", text: "He will escape from the blazing Fire", isCorrect: false },
      ],
      explanation:
        "This verse means 'He will enter a Fire of blazing flames' or 'He will burn in a Fire of flame'. It foretells the punishment of Abu Lahab in the Hereafter. Note the wordplay: 'lahab' means 'flame', which corresponds to Abu Lahab's name (Father of Flame).",
    },
    {
      id: "masad-5",
      arabic: "وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ",
      question: "What is the meaning of 'Wamra'atuhu hammalatal-hatab'?",
      options: [
        { id: "a", text: "And his wife, the carrier of firewood", isCorrect: true },
        { id: "b", text: "And his wife, the maker of food", isCorrect: false },
        { id: "c", text: "And his wife, the speaker of truth", isCorrect: false },
        { id: "d", text: "And his wife, the helper of the poor", isCorrect: false },
      ],
      explanation:
        "This verse means 'And his wife, the carrier of firewood'. This refers to Umm Jamil, Abu Lahab's wife, who used to gather thorny branches and place them in the Prophet's path to harm him. Metaphorically, it also refers to her carrying tales and spreading slander, which 'fueled the flames' of hatred against the Prophet.",
    },
    {
      id: "masad-6",
      arabic: "فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ",
      question: "What is the meaning of 'Fi jidiha hablum min masad'?",
      options: [
        { id: "a", text: "Around her neck is a rope of palm fiber", isCorrect: true },
        { id: "b", text: "Around her neck is a necklace of gold", isCorrect: false },
        { id: "c", text: "Around her neck is a garland of flowers", isCorrect: false },
        { id: "d", text: "Around her neck is a collar of iron", isCorrect: false },
      ],
      explanation:
        "This verse means 'Around her neck is a rope of palm fiber'. This could refer to the manner of her punishment in the Hereafter, or it could be a metaphor for the necklace she wore as a symbol of her wealth and status, which she used to boast about while opposing Islam.",
    },
    {
      id: "masad-7",
      question: "Who was Abu Lahab in relation to Prophet Muhammad ﷺ?",
      options: [
        { id: "a", text: "His father", isCorrect: false },
        { id: "b", text: "His uncle", isCorrect: true },
        { id: "c", text: "His cousin", isCorrect: false },
        { id: "d", text: "His brother-in-law", isCorrect: false },
      ],
      explanation:
        "Abu Lahab (whose real name was Abdul Uzza ibn Abdul Muttalib) was the paternal uncle of Prophet Muhammad ﷺ. Despite this close family relationship, he was one of the most vehement opponents of Islam and the Prophet's message.",
    },
    {
      id: "masad-8",
      question: "What is unique about Surah Al-Masad in the Quran?",
      options: [
        { id: "a", text: "It is the only surah that mentions a specific enemy of Islam by name", isCorrect: true },
        { id: "b", text: "It is the shortest surah in the Quran", isCorrect: false },
        { id: "c", text: "It is the only surah revealed in Medina", isCorrect: false },
        { id: "d", text: "It is the only surah that does not begin with Bismillah", isCorrect: false },
      ],
      explanation:
        "Surah Al-Masad is unique in that it is the only surah in the Quran that mentions a specific enemy of Islam by name (Abu Lahab). This is significant because it made a specific prediction about Abu Lahab and his wife that they would not accept Islam, which was fulfilled, as both died as disbelievers.",
    },
  ],
}

export const anNasrQuizData: SurahQuizData = {
  surahId: 110,
  surahName: "An-Nasr",
  surahArabicName: "النصر",
  totalVerses: 3,
  type: "Medinan",
  difficulty: "Beginner",
  introduction:
    "Surah An-Nasr (The Divine Support) is the 110th chapter of the Quran and refers to Allah's help and victory.",
  additionalContextElements: [
    {
      title: "Historical Context",
      content: `
        <div class="mt-6 p-4 bg-amber-50 dark:bg-amber-900/20 rounded-lg border border-amber-100 dark:border-amber-800">
          <h3 class="text-lg font-semibold text-amber-800 dark:text-amber-300 mb-2">Historical Context</h3>
          <p class="text-amber-700 dark:text-amber-200 mb-3">
            Surah An-Nasr was revealed during the Farewell Pilgrimage, just months before the Prophet Muhammad's ﷺ passing. It refers to the victory Allah granted to Islam with the peaceful conquest of Mecca in 8 AH (630 CE).
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-amber-700 dark:text-amber-300 mb-1">The Conquest of Mecca</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              After years of persecution, the Prophet Muhammad ﷺ returned to Mecca with 10,000 followers. Despite having the power to seek revenge, he granted general amnesty to the Meccans, saying "Go, for you are free." This bloodless conquest led to mass acceptance of Islam throughout Arabia.
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "Prophetic Farewell",
      content: `
        <div class="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
          <h3 class="text-lg font-semibold text-blue-800 dark:text-blue-300 mb-2">Sign of the Prophet's Approaching Death</h3>
          <p class="text-blue-700 dark:text-blue-200 mb-3">
            Several companions understood this surah as indicating the approaching end of the Prophet's ﷺ mission and life.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">Ibn Abbas's Understanding</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              When this surah was revealed, Ibn Abbas (the Prophet's cousin) wept. When asked why, he said: "It announces the death of Allah's Messenger ﷺ." Umar ibn Al-Khattab confirmed this interpretation.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-blue-700 dark:text-blue-300 mb-1">The Prophet's Response</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              After this surah was revealed, the Prophet ﷺ increased in his glorification and seeking forgiveness from Allah. When Aisha asked about this change, he confirmed it was because he had been informed of his approaching death.
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "nasr-1",
      question: "What does 'An-Nasr' mean?",
      options: [
        { id: "a", text: "The Victory", isCorrect: false },
        { id: "b", text: "The Help", isCorrect: false },
        { id: "c", text: "The Divine Support", isCorrect: true },
        { id: "d", text: "The Conquest", isCorrect: false },
      ],
      explanation:
        "An-Nasr means 'The Divine Support' or 'The Help' and refers to Allah's assistance to the Prophet Muhammad ﷺ.",
    },
    {
      id: "nasr-2",
      arabic: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
      question: "What is the meaning of 'Idha ja'a nasrullahi wal-fath'?",
      options: [
        { id: "a", text: "When the help of Allah comes and the conquest", isCorrect: true },
        { id: "b", text: "If you seek the help of Allah, you will conquer", isCorrect: false },
        { id: "c", text: "Allah helps those who help themselves", isCorrect: false },
        { id: "d", text: "The conquest comes before Allah's help", isCorrect: false },
      ],
      explanation:
        "This phrase means 'When the help of Allah comes and the conquest (or victory)'. It refers to the conquest of Mecca and Allah's help in establishing Islam.",
    },
    {
      id: "nasr-3",
      arabic: "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا",
      question: "What does 'Wa ra-aitan-nasa yadkhuluna fi dinillahi afwaja' mean?",
      options: [
        { id: "a", text: "And you see the people leaving Allah's religion in crowds", isCorrect: false },
        { id: "b", text: "And you see the people entering Allah's religion in crowds", isCorrect: true },
        { id: "c", text: "And the people will be judged by Allah in groups", isCorrect: false },
        { id: "d", text: "And the people will fight against Allah's religion in groups", isCorrect: false },
      ],
      explanation:
        "This verse means 'And you see the people entering Allah's religion in crowds'. After the conquest of Mecca, many Arab tribes embraced Islam in large numbers.",
    },
    {
      id: "nasr-4",
      arabic: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ",
      question: "What is the command given in 'Fasabbih bihamdi rabbika wastaghfirh'?",
      options: [
        { id: "a", text: "So fight in the cause of your Lord and seek His help", isCorrect: false },
        { id: "b", text: "So celebrate the praises of your Lord and seek His forgiveness", isCorrect: true },
        { id: "c", text: "So be patient with your Lord's decree and seek His guidance", isCorrect: false },
        { id: "d", text: "So spread the message of your Lord and seek new followers", isCorrect: false },
      ],
      explanation:
        "This phrase commands 'So celebrate the praises of your Lord and seek His forgiveness'. It instructs the Prophet to glorify Allah and seek His forgiveness in gratitude for the victory granted.",
    },
    {
      id: "nasr-5",
      arabic: "إِنَّهُ كَانَ تَوَّابًا",
      question: "What does 'Innahu kana tawwaba' mean?",
      options: [
        { id: "a", text: "Indeed, He is Ever Merciful", isCorrect: false },
        { id: "b", text: "Indeed, He is All-Knowing", isCorrect: false },
        { id: "c", text: "Indeed, He is Oft-Returning (in forgiveness)", isCorrect: true },
        { id: "d", text: "Indeed, He is All-Powerful", isCorrect: false },
      ],
      explanation:
        "This phrase means 'Indeed, He is Oft-Returning (in forgiveness)' or 'Indeed, He is Oft-Forgiving'. The word 'tawwaba' comes from the root meaning 'to return' and refers to Allah's attribute of repeatedly accepting repentance and forgiving sins.",
    },
  ],
}
