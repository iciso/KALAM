export const abasaQuizData: SurahQuizData = {
  surahId: 80,
  surahName: "Abasa",
  surahArabicName: "عبس",
  totalVerses: 42,
  type: "Meccan",
  difficulty: "Intermediate",
  introduction:
    "Surah Abasa (He Frowned) is the 80th chapter of the Quran, containing 42 verses and 133 words. Revealed in Mecca, it begins with a divine admonishment to the Prophet ﷺ for turning away from a blind truth-seeker while attending to influential disbelievers. It emphasizes the Quran's exalted status, human ingratitude toward Allah's blessings in creation and provision, and provides a terrifying depiction of the Day of Judgment where familial bonds dissolve in panic.",
  additionalContextElements: [
    {
      title: "Divine Admonishment and Human Creation",
      content: `
        <div class="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-100 dark:border-orange-800">
          <h3 class="text-lg font-semibold text-orange-800 dark:text-orange-300 mb-2">Historical Context and Reasons for Revelation</h3>
          <p class="text-orange-700 dark:text-orange-200 mb-3">
            Revealed in early Mecca, Surah Abasa addresses an incident where the Prophet ﷺ frowned at the blind companion Abdullah ibn Umm Maktum, who interrupted while the Prophet was engaging Quraysh leaders. This served as a reminder of equality in faith and prioritizing truth-seekers over worldly status.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Tafsir Evidence</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir narrates that the surah was revealed when the Prophet ﷺ turned away from Ibn Umm Maktum to focus on influential disbelievers, teaching that guidance comes from Allah alone. Al-Maududi emphasizes it highlights human ingratitude and divine provision.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Etymology and Meaning</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              ‘Abasa’ derives from the root ع-ب-س, meaning ‘he frowned.’ It refers to the Prophet’s momentary expression, used to convey a lesson in humility and equality (Ibn Kathir, Quran.com).
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-orange-700 dark:text-orange-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Divine admonishment: Surah At-Taubah (9:113-114). Human creation: Surah Al-Insan (76:2). Ingratitude: Surah Al-'Adiyat (100:6-8).
            </p>
          </div>
        </div>
      `,
    },
    {
      title: "The Day of Judgment and Human Ingratitude",
      content: `
        <div class="mt-6 p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-100 dark:border-indigo-800">
          <h3 class="text-lg font-semibold text-indigo-800 dark:text-indigo-300 mb-2">Terror of Resurrection and Divine Provision</h3>
          <p class="text-indigo-700 dark:text-indigo-200 mb-3">
            The surah depicts the Day of Judgment's panic, where people flee from loved ones, contrasting with worldly ingratitude toward Allah's blessings in creation, provision, and sustenance from the earth.
          </p>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Tafsir Insights</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Ibn Kathir explains the fleeing on Judgment Day as self-preservation amid terror. Al-Maududi highlights verses on human creation from a drop, urging gratitude for divine favors like food from earth.
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm mb-3">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Prophetic Guidance and Hadith</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              A hadith in Sahih Al-Bukhari relates Ibn Umm Maktum's interruption, leading to the surah's revelation, teaching prioritization of sincere seekers (Ibn Kathir).
            </p>
          </div>
          <div class="bg-white dark:bg-gray-800 p-3 rounded shadow-sm">
            <h4 class="font-medium text-indigo-700 dark:text-indigo-300 mb-1">Cross-References</h4>
            <p class="text-sm text-gray-600 dark:text-gray-300">
              Judgment Day terror: Surah Al-Ma'arij (70:10-14). Divine provision: Surah An-Nahl (16:14-18). Creation: Surah Ya-Sin (36:77-79).
            </p>
          </div>
        </div>
      `,
    },
  ],
  questions: [
    {
      id: "q1",
      question: "What is the English meaning for the surah's title, Abasa, عبس?",
      arabic: "عبس",
      rootLetters: "ع ب س",
      options: [
        { id: "a", text: "He Frowned", isCorrect: true },
        { id: "b", text: "He Smiled", isCorrect: false },
        { id: "c", text: "He Turned Away", isCorrect: false },
        { id: "d", text: "He Listened", isCorrect: false },
      ],
      explanation: "عبس (Abasa) means 'He Frowned,' derived from the root ع-ب-س, referring to the Prophet's momentary expression (Quran.com, Ibn Kathir).",
    },
    {
      id: "q2",
      question: "What does the Arabic phrase 'عَبَسَ وَتَوَلَّى' mean?",
      arabic: "عَبَسَ وَتَوَلَّى",
      rootLetters: "ع ب س | و ل ي",
      options: [
        { id: "a", text: "He smiled and turned toward", isCorrect: false },
        { id: "b", text: "He frowned and turned away", isCorrect: true },
        { id: "c", text: "He listened and approached", isCorrect: false },
        { id: "d", text: "He spoke and engaged", isCorrect: false },
      ],
      explanation: "عَبَسَ وَتَوَلَّى ('Abasa wa tawalla) means 'He frowned and turned away,' roots ع-ب-س (frowned) and و-ل-ي (turned away) (MyIslam, Al-Maududi).",
    },
    {
      id: "q3",
      question: "What does the Arabic phrase 'أَن جَاءَهُ الْأَعْمَى' mean?",
      arabic: "أَن جَاءَهُ الْأَعْمَى",
      rootLetters: "ج ي ء | ع م ي",
      options: [
        { id: "a", text: "Because the wealthy came to him", isCorrect: false },
        { id: "b", text: "Because the poor came to him", isCorrect: false },
        { id: "c", text: "Because the sighted came to him", isCorrect: false },
        { id: "d", text: "Because the blind man came to him", isCorrect: true },
      ],
      explanation: "أَن جَاءَهُ الْأَعْمَى (An ja'ahu al-a'ma) means 'Because the blind man came to him,' roots ج-ي-ء (came) and ع-م-ي (blind) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q4",
      question: "What does the Arabic phrase 'وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّى' mean?",
      arabic: "وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّى",
      rootLetters: "د ر ي | ز ك و",
      options: [
        { id: "a", text: "And what would make you know that he might repent", isCorrect: false },
        { id: "b", text: "And what would make you know that he might believe", isCorrect: false },
        { id: "c", text: "And what would make you know that he might purify himself", isCorrect: true },
        { id: "d", text: "And what would make you know that he might sin", isCorrect: false },
      ],
      explanation: "وَمَا يُدْرِيكَ لَعَلَّهُ يَزَّكَّى (Wa ma yudrika la'allahu yazzakka) means 'And what would make you know that he might purify himself,' roots د-ر-ي (know) and ز-ك-و (purify) (MyIslam, Al-Maududi).",
    },
    {
      id: "q5",
      question: "What does the Arabic phrase 'أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَى' mean?",
      arabic: "أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَى",
      rootLetters: "ذ ك ر | ن ف ع",
      options: [
        { id: "a", text: "Or be awakened and the awakening would hurt him", isCorrect: false },
        { id: "b", text: "Or be warned and the warning would scare him", isCorrect: false },
        { id: "c", text: "Or be reminded and the reminder would benefit him", isCorrect: true },
        { id: "d", text: "Or be taught and the teaching would guide him", isCorrect: false },
      ],
      explanation: "أَوْ يَذَّكَّرُ فَتَنفَعَهُ الذِّكْرَى (Aw yadhdhakkaru fatanfa'uhu adh-dhikra) means 'Or be reminded and the reminder would benefit him,' roots ذ-ك-ر (reminded) and ن-ف-ع (benefit) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q6",
      question: "What does the Arabic phrase 'أَمَّا مَنِ اسْتَغْنَى' mean?",
      arabic: "أَمَّا مَنِ اسْتَغْنَى",
      rootLetters: "غ ن ي",
      options: [
        { id: "a", text: "As for he who is poor", isCorrect: false },
        { id: "b", text: "As for he who is needy", isCorrect: false },
        { id: "c", text: "As for he who is humble", isCorrect: false },
        { id: "d", text: "As for he who considers himself self-sufficient", isCorrect: true },
      ],
      explanation: "أَمَّا مَنِ اسْتَغْنَى (Amma mani istaghna) means 'As for he who considers himself self-sufficient,' root غ-ن-ي (self-sufficient) (MyIslam, Al-Maududi).",
    },
    {
      id: "q7",
      question: "What does the Arabic phrase 'فَأَنتَ لَهُ تَصَدَّى' mean?",
      arabic: "فَأَنتَ لَهُ تَصَدَّى",
      rootLetters: "ص د ي",
      options: [
        { id: "a", text: "You agree to him", isCorrect: false },
        { id: "b", text: "You ignore him", isCorrect: false },
        { id: "c", text: "You attend to him", isCorrect: true },
        { id: "d", text: "You turn from him", isCorrect: false },
      ],
      explanation: "فَأَنتَ لَهُ تَصَدَّى (Fa anta lahu tasadda) means 'You attend to him,' root ص-د-ي (attend) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q8",
      question: "What does the Arabic phrase 'وَمَا عَلَيْكَ أَلَّا يَزَّكَّى' mean?",
      arabic: "وَمَا عَلَيْكَ أَلَّا يَزَّكَّى",
      rootLetters: "ز ك و",
      options: [
        { id: "a", text: "And not upon you is it if he believes", isCorrect: false },
        { id: "b", text: "And not upon you is it if he purifies himself", isCorrect: true },
        { id: "c", text: "And not upon you is it if he repents", isCorrect: false },
        { id: "d", text: "And not upon you is it if he sins", isCorrect: false },
      ],
      explanation: "وَمَا عَلَيْكَ أَلَّا يَزَّكَّى (Wa ma 'alayka alla yazzakka) means 'And not upon you is it if he purifies himself,' root ز-ك-و (purify) (MyIslam, Al-Maududi).",
    },
    {
      id: "q9",
      question: "What does the Arabic phrase 'وَأَمَّا مَن جَاءَكَ يَسْعَى' mean?",
      arabic: "وَأَمَّا مَن جَاءَكَ يَسْعَى",
      rootLetters: "ج ي ء | س ع ي",
      options: [
        { id: "a", text: "But as for he who came to you striving", isCorrect: true },
        { id: "b", text: "But as for he who came to you lazily", isCorrect: false },
        { id: "c", text: "But as for he who came to you doubting", isCorrect: false },
        { id: "d", text: "But as for he who came to you arrogantly", isCorrect: false },
      ],
      explanation: "وَأَمَّا مَن جَاءَكَ يَسْعَى (Wa amma man ja'aka yas'a) means 'But as for he who came to you striving,' roots ج-ي-ء (came) and س-ع-ي (striving) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q10",
      question: "What does the Arabic phrase 'وَهُوَ يَخْشَى' mean?",
      arabic: "وَهُوَ يَخْشَى",
      rootLetters: "خ ش ي",
      options: [
        { id: "a", text: "And he is doubting", isCorrect: false },
        { id: "b", text: "And he is fearing", isCorrect: true },
        { id: "c", text: "And he is arrogant", isCorrect: false },
        { id: "d", text: "And he is careless", isCorrect: false },
      ],
      explanation: "وَهُوَ يَخْشَى (Wa huwa yakhsha) means 'And he is fearing,' root خ-ش-ي (fear) (MyIslam, Al-Maududi).",
    },
    {
      id: "q11",
      question: "What does the Arabic phrase 'فَأَنتَ عَنْهُ تَلَهَّى' mean?",
      arabic: "فَأَنتَ عَنْهُ تَلَهَّى",
      rootLetters: "ل ه و",
      options: [
        { id: "a", text: "You are attending to him", isCorrect: false },
        { id: "b", text: "You are guiding him", isCorrect: false },
        { id: "c", text: "You are distracted from him", isCorrect: true },
        { id: "d", text: "You are turning toward him", isCorrect: false },
      ],
      explanation: "فَأَنتَ عَنْهُ تَلَهَّى (Fa anta 'anhu talahha) means 'You are distracted from him,' root ل-ه-و (distracted) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q12",
      question: "What does the Arabic phrase 'كَلَّا إِنَّهَا تَذْكِرَةٌ' mean?",
      arabic: "كَلَّا إِنَّهَا تَذْكِرَةٌ",
      rootLetters: "ذ ك ر",
      options: [
        { id: "a", text: "No, indeed, it is a guidance", isCorrect: false },
        { id: "b", text: "No, indeed, it is a reminder", isCorrect: true },
        { id: "c", text: "No, indeed, it is a warning", isCorrect: false },
        { id: "d", text: "No, indeed, it is a revelation", isCorrect: false },
      ],
      explanation: "كَلَّا إِنَّهَا تَذْكِرَةٌ (Kalla innaha tadhkirah) means 'No, indeed, it is a reminder,' root ذ-ك-ر (reminder) (MyIslam, Al-Maududi).",
    },
    {
      id: "q13",
      question: "What does the Arabic phrase 'فَمَن شَاءَ ذَكَرَهُ' mean?",
      arabic: "فَمَن شَاءَ ذَكَرَهُ",
      rootLetters: "ش ي ء | ذ ك ر",
      options: [
        { id: "a", text: "So whoever wills may read it", isCorrect: false },
        { id: "b", text: "So whoever wills may forget it", isCorrect: false },
        { id: "c", text: "So whoever wills may remember it", isCorrect: true },
        { id: "d", text: "So whoever wills may deny it", isCorrect: false },
      ],
      explanation: "فَمَن شَاءَ ذَكَرَهُ (Faman sha'a dhakarahu) means 'So whoever wills may remember it,' roots ش-ي-ء (wills) and ذ-ك-ر (remember) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q14",
      question: "What does the Arabic phrase 'فِي صُحُفٍ مُّكَرَّمَةٍ' mean?",
      arabic: "فِي صُحُفٍ مُّكَرَّمَةٍ",
      rootLetters: "ص ح ف | ك ر م",
      options: [
        { id: "a", text: "In honored sheets", isCorrect: true },
        { id: "b", text: "In hidden books", isCorrect: false },
        { id: "c", text: "In sacred scrolls", isCorrect: false },
        { id: "d", text: "In exalted tablets", isCorrect: false },
      ],
      explanation: "فِي صُحُفٍ مُّكَرَّمَةٍ (Fi suhufin mukarramah) means 'In honored sheets,' roots ص-ح-ف (sheets) and ك-ر-م (honored) (MyIslam, Al-Maududi).",
    },
    {
      id: "q15",
      question: "What does the Arabic phrase 'مَّرْفُوعَةٍ مُّطَهَّرَةٍ' mean?",
      arabic: "مَّرْفُوعَةٍ مُّطَهَّرَةٍ",
      rootLetters: "ر ف ع | ط ه ر",
      options: [
        { id: "a", text: "Elevated and pure", isCorrect: false },
        { id: "b", text: "Hidden and protected", isCorrect: false },
        { id: "c", text: "Sacred and honored", isCorrect: false },
        { id: "d", text: "Exalted and purified", isCorrect: true },
      ],
      explanation: "مَّرْفُوعَةٍ مُّطَهَّرَةٍ (Marfu'atin mutahharah) means 'Exalted and purified,' roots ر-ف-ع (exalted) and ط-ه-ر (purified) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q16",
      question: "What does the Arabic phrase 'بِأَيْدِي سَفَرَةٍ' mean?",
      arabic: "بِأَيْدِي سَفَرَةٍ",
      rootLetters: "ي د ي | س ف ر",
      options: [
        { id: "a", text: "In the hands of travelers", isCorrect: false },
        { id: "b", text: "In the hands of followers", isCorrect: false },
        { id: "c", text: "In the hands of messengers", isCorrect: false },
        { id: "d", text: "In the hands of scribes", isCorrect: true },
      ],
      explanation: "بِأَيْدِي سَفَرَةٍ (Bi'aydi safarah) means 'In the hands of scribes or ambassadors,' root س-ف-ر (ambassadors/scribes) (MyIslam, Al-Maududi).",
    },
    {
      id: "q17",
      question: "What does the Arabic phrase 'كِرَامٍ بَرَرَةٍ' mean?",
      arabic: "كِرَامٍ بَرَرَةٍ",
      rootLetters: "ك ر م | ب ر ر",
      options: [
        { id: "a", text: "Respected and diligent", isCorrect: false },
        { id: "b", text: "Honored and righteous", isCorrect: false },
        { id: "c", text: "Noble and dutiful", isCorrect: true },
        { id: "d", text: "Exalted and pure", isCorrect: false },
      ],
      explanation: "كِرَامٍ بَرَرَةٍ (Kiram bararah) means 'Noble and dutiful,' roots ك-ر-م (noble) and ب-ر-ر (dutiful) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q18",
      question: "What does the Arabic phrase 'قُتِلَ الْإِنسَانُ مَا أَكْفَرَهُ' mean?",
      arabic: "قُتِلَ الْإِنسَانُ مَا أَكْفَرَهُ",
      rootLetters: "ق ت ل | أ ن س | ك ف ر",
      options: [
        { id: "a", text: "Cursed is man; how faithful he is", isCorrect: false },
        { id: "b", text: "Cursed is man; how ungrateful he is", isCorrect: true },
        { id: "c", text: "Blessed is man; how grateful he is", isCorrect: false },
        { id: "d", text: "Praised is man; how believing he is", isCorrect: false },
      ],
      explanation: "قُتِلَ الْإِنسَانُ مَا أَكْفَرَهُ (Qutila al-insanu ma akfarahu) means 'Cursed is man; how ungrateful he is,' roots ق-ت-ل (cursed), أ-ن-س (man), ك-ف-ر (ungrateful) (MyIslam, Al-Maududi).",
    },
    {
      id: "q19",
      question: "What does the Arabic phrase 'مِنْ أَيِّ شَيْءٍ خَلَقَهُ' mean?",
      arabic: "مِنْ أَيِّ شَيْءٍ خَلَقَهُ",
      rootLetters: "ش ي ء | خ ل ق",
      options: [
        { id: "a", text: "From what thing did He create him?", isCorrect: true },
        { id: "b", text: "From what place did He guide him?", isCorrect: false },
        { id: "c", text: "From what time did He honor him?", isCorrect: false },
        { id: "d", text: "From what way did He provide for him?", isCorrect: false },
      ],
      explanation: "مِنْ أَيِّ شَيْءٍ خَلَقَهُ (Min ayyi shay'in khalaqahu) means 'From what thing did He create him?' roots ش-ي-ء (thing) and خ-ل-ق (create) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q20",
      question: "What does the Arabic phrase 'مِن نُّطْفَةٍ خَلَقَهُ فَقَدَّرَهُ' mean?",
      arabic: "مِن نُّطْفَةٍ خَلَقَهُ فَقَدَّرَهُ",
      rootLetters: "ن ط ف | خ ل ق | ق د ر",
      options: [
        { id: "a", text: "From clay He created him and proportioned him", isCorrect: false },
        { id: "b", text: "From a sperm-drop He created him and destined him", isCorrect: true },
        { id: "c", text: "From blood He created him and guided him", isCorrect: false },
        { id: "d", text: "From dust He created him and honored him", isCorrect: false },
      ],
      explanation: "مِن نُّطْفَةٍ خَلَقَهُ فَقَدَّرَهُ (Min nutfatin khalaqahu faqaddarahu) means 'From a sperm-drop He created him and destined him,' roots ن-ط-ف (sperm-drop), خ-ل-ق (created), ق-د-ر (destined) (MyIslam, Al-Maududi).",
    },
    {
      id: "q21",
      question: "What does the Arabic phrase 'ثُمَّ السَّبِيلَ يَسَّرَهُ' mean?",
      arabic: "ثُمَّ السَّبِيلَ يَسَّرَهُ",
      rootLetters: "س ب ل | ي س ر",
      options: [
        { id: "a", text: "Then He showed the way for him", isCorrect: false },
        { id: "b", text: "Then He made the path difficult for him", isCorrect: false },
        { id: "c", text: "Then He eased the way for him", isCorrect: true },
        { id: "d", text: "Then He closed the path for him", isCorrect: false },
      ],
      explanation: "ثُمَّ السَّبِيلَ يَسَّرَهُ (Thumma as-sabila yassarahu) means 'Then He eased the way for him,' roots س-ب-ل (way) and ي-س-ر (eased) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q22",
      question: "What does the Arabic phrase 'ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ' mean?",
      arabic: "ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ",
      rootLetters: "م و ت | ق ب ر",
      options: [
        { id: "a", text: "Then He gave him life and resurrected him", isCorrect: false },
        { id: "b", text: "Then He granted favours and rewarded him", isCorrect: false },
        { id: "c", text: "Then He honored him and exalted him", isCorrect: false },
        { id: "d", text: "Then He caused him to die and had him buried", isCorrect: true },
      ],
      explanation: "ثُمَّ أَمَاتَهُ فَأَقْبَرَهُ (Thumma amatahu fa-aqbarahu) means 'Then He caused him to die and had him buried,' roots م-و-ت (die) and ق-ب-ر (buried) (MyIslam, Al-Maududi).",
    },
    {
      id: "q23",
      question: "What does the Arabic phrase 'ثُمَّ إِذَا شَاءَ أَنشَرَهُ' mean?",
      arabic: "ثُمَّ إِذَا شَاءَ أَنشَرَهُ",
      rootLetters: "ش ي ء | ن ش ر",
      options: [
        { id: "a", text: "Then when He wills, He resurrects him", isCorrect: true },
        { id: "b", text: "Then when He wills, He destroys him", isCorrect: false },
        { id: "c", text: "Then when He wills, He forgets him", isCorrect: false },
        { id: "d", text: "Then when He wills, He punishes him", isCorrect: false },
      ],
      explanation: "ثُمَّ إِذَا شَاءَ أَنشَرَهُ (Thumma idha sha'a ansharahu) means 'Then when He wills, He resurrects him,' roots ش-ي-ء (wills) and ن-ش-ر (resurrects) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q24",
      question: "What does the Arabic phrase 'كَلَّا لَمَّا يَقْضِ مَا أَمَرَهُ' mean?",
      arabic: "كَلَّا لَمَّا يَقْضِ مَا أَمَرَهُ",
      rootLetters: "ق ض ي | أ م ر",
      options: [
        { id: "a", text: "No, he has not fulfilled what He commanded him", isCorrect: true },
        { id: "b", text: "No, he has fulfilled what He commanded him", isCorrect: false },
        { id: "c", text: "No, he has forgotten what He commanded him", isCorrect: false },
        { id: "d", text: "No, he has denied what He commanded him", isCorrect: false },
      ],
      explanation: "كَلَّا لَمَّا يَقْضِ مَا أَمَرَهُ (Kalla lamma yaqdi ma amarahu) means 'No, he has not fulfilled what He commanded him,' roots ق-ض-ي (fulfilled) and أ-م-ر (commanded) (MyIslam, Al-Maududi).",
    },
    {
      id: "q25",
      question: "What does the Arabic phrase 'فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ' mean?",
      arabic: "فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ",
      rootLetters: "ن ظ ر | أ ن س | ط ع م",
      options: [
        { id: "a", text: "Let man look at his deeds", isCorrect: false },
        { id: "b", text: "Let man look at his creation", isCorrect: false },
        { id: "c", text: "Let man look at his family", isCorrect: false },
        { id: "d", text: "Let man look at his food", isCorrect: true },
      ],
      explanation: "فَلْيَنظُرِ الْإِنسَانُ إِلَىٰ طَعَامِهِ (Falyanzuri al-insanu ila ta'amihi) means 'Let man look at his food,' roots ن-ظ-ر (look), أ-ن-س (man), ط-ع-م (food) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q26",
      question: "What does the Arabic phrase 'أَنَّا صَبَبْنَا الْمَاءَ صَبًّا' mean?",
      arabic: "أَنَّا صَبَبْنَا الْمَاءَ صَبًّا",
      rootLetters: "ص ب ب | م و ء",
      options: [
        { id: "a", text: "That We pour down our blessings and mercies", isCorrect: false },
        { id: "b", text: "That We pour down the water in abundance", isCorrect: true },
        { id: "c", text: "That We send down the fire in torrents", isCorrect: false },
        { id: "d", text: "That We scatter the seeds in plenty", isCorrect: false },
      ],
      explanation: "أَنَّا صَبَبْنَا الْمَاءَ صَبًّا (Anna sababna al-ma'a sabba) means 'That We pour down the water in abundance,' root ص-ب-ب (pour) and م-و-ء (water) (MyIslam, Al-Maududi).",
    },
    {
      id: "q27",
      question: "What does the Arabic phrase 'ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا' mean?",
      arabic: "ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا",
      rootLetters: "ش ق ق | أ ر ض",
      options: [
        { id: "a", text: "Then We flatten the earth completely", isCorrect: false },
        { id: "b", text: "Then We shake the earth violently", isCorrect: false },
        { id: "c", text: "Then We cover the earth with plants", isCorrect: false },
        { id: "d", text: "Then We split the earth in fissures", isCorrect: true },
      ],
      explanation: "ثُمَّ شَقَقْنَا الْأَرْضَ شَقًّا (Thumma shaqaqna al-arda shaqqa) means 'Then We split the earth in fissures,' root ش-ق-ق (split) and أ-ر-ض (earth) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q28",
      question: "What does the Arabic phrase 'فَأَنبَتْنَا فِيهَا حَبًّا' mean?",
      arabic: "فَأَنبَتْنَا فِيهَا حَبًّا",
      rootLetters: "ن ب ت | ح ب ب",
      options: [
        { id: "a", text: "And We cause to grow in it fruits", isCorrect: false },
        { id: "b", text: "And We cause to grow in it grain", isCorrect: true },
        { id: "c", text: "And We cause to grow in it trees", isCorrect: false },
        { id: "d", text: "And We cause to grow in it vegetables", isCorrect: false },
      ],
      explanation: "فَأَنبَتْنَا فِيهَا حَبًّا (Fa'anbatna fiha habba) means 'And We cause to grow in it grain,' roots ن-ب-ت (grow) and ح-ب-ب (grain) (MyIslam, Al-Maududi).",
    },
    {
      id: "q29",
      question: "What does the Arabic phrase 'وَعِنَبًا وَقَضْبًا' mean?",
      arabic: "وَعِنَبًا وَقَضْبًا",
      rootLetters: "ع ن ب | ق ض ب",
      options: [
        { id: "a", text: "And grapes and herbage", isCorrect: true },
        { id: "b", text: "And olives and dates", isCorrect: false },
        { id: "c", text: "And gardens and fruits", isCorrect: false },
        { id: "d", text: "And rivers and springs", isCorrect: false },
      ],
      explanation: "وَعِنَبًا وَقَضْبًا (Wa 'inaban wa qadba) means 'And grapes and herbage,' roots ع-ن-ب (grapes) and ق-ض-ب (herbage) (Quran.com, Ibn Kathir).",
    },
    {
      id: "q30",
      question: "What does the Arabic phrase 'وَزَيْتُونًا وَنَخْلًا' mean?",
      arabic: "وَزَيْتُونًا وَنَخْلًا",
      rootLetters: "ز ي ت | ن خ ل",
      options: [
        { id: "a", text: "And grapes and dates", isCorrect: false },
        { id: "b", text: "And olives and palm trees", isCorrect: true },
        { id: "c", text: "And gardens and fruits", isCorrect: false },
        { id: "d", text: "And rivers and springs", isCorrect: false },
      ],
      explanation: "وَزَيْتُونًا وَنَخْلًا (Wa zaytunan wa nakhla) means 'And olives and palm trees,' roots ز-ي-ت (olives) and ن-خ-ل (palm trees) (MyIslam, Al-Maududi).",
    },
  ],
};
