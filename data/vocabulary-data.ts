import { type VocabularyWord, PartOfSpeech, Difficulty, RelationshipType } from "../types/vocabulary"

export const vocabularyData: VocabularyWord[] = [
  {
    id: "word-001",
    arabic: "الله",
    transliteration: "Allah",
    meanings: ["God", "The Deity"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 2699,
    tags: ["divine", "essential", "core"],
    audioUrl: "/audio/words/allah.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-001-1",
        surahNumber: 1,
        surahName: "Al-Fatihah",
        ayahNumber: 1,
        arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        translationText: "In the name of Allah, the Entirely Benificient, the Especially Merciful",
        wordLocation: {
          startIndex: 5,
          endIndex: 9,
        },
        audioUrl: "/audio/ayahs/1_1.mp3",
        wordAudioUrl: "/audio/words/allah_1_1.mp3",
        hasAudio: true,
      },
      {
        id: "example-001-2",
        surahNumber: 112,
        surahName: "Al-Ikhlas",
        ayahNumber: 1,
        arabicText: "قُلْ هُوَ اللَّهُ أَحَدٌ",
        translationText: "Say, 'He is Allah, [who is] One'",
        wordLocation: {
          startIndex: 7,
          endIndex: 11,
        },
        audioUrl: "/audio/ayahs/112_1.mp3",
        wordAudioUrl: "/audio/words/allah_112_1.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-002",
    arabic: "رَبّ",
    transliteration: "Rabb",
    rootLetters: "ر ب ب",
    meanings: ["Lord", "Master", "Sustainer", "Nurturer"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 975,
    tags: ["divine", "essential", "core"],
    audioUrl: "/audio/words/rabb.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-002-1",
        surahNumber: 1,
        surahName: "Al-Fatihah",
        ayahNumber: 2,
        arabicText: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
        translationText: "All praise is due to Allah, Lord of the worlds",
        wordLocation: {
          startIndex: 14,
          endIndex: 17,
        },
        audioUrl: "/audio/ayahs/1_2.mp3",
        wordAudioUrl: "/audio/words/rabb_1_2.mp3",
        hasAudio: true,
      },
      {
        id: "example-002-2",
        surahNumber: 26,
        surahName: "Ash-Shu'ara",
        ayahNumber: 109,
        arabicText: "وَمَا أَسْأَلُكُمْ عَلَيْهِ مِنْ أَجْرٍ ۖ إِنْ أَجْرِيَ إِلَّا عَلَىٰ رَبِّ الْعَالَمِينَ",
        translationText: "And I do not ask you for it any payment. My payment is only from the Lord of the worlds",
        wordLocation: {
          startIndex: 52,
          endIndex: 55,
        },
        audioUrl: "/audio/ayahs/26_109.mp3",
        wordAudioUrl: "/audio/words/rabb_26_109.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-003",
    arabic: "رَحْمَن",
    transliteration: "Rahman",
    rootLetters: "ر ح م",
    meanings: ["The Most Gracious", "The Most Beneficent", "The Compassionate"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 57,
    tags: ["divine", "attributes", "mercy"],
    audioUrl: "/audio/words/rahman.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-003-1",
        surahNumber: 1,
        surahName: "Al-Fatihah",
        ayahNumber: 1,
        arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        translationText: "In the name of Allah, the Entirely Benificient, the Especially Merciful",
        wordLocation: {
          startIndex: 10,
          endIndex: 16,
        },
        audioUrl: "/audio/ayahs/1_1.mp3",
        wordAudioUrl: "/audio/words/rahman_1_1.mp3",
        hasAudio: true,
      },
      {
        id: "example-003-2",
        surahNumber: 55,
        surahName: "Ar-Rahman",
        ayahNumber: 1,
        arabicText: "الرَّحْمَٰنُ",
        translationText: "The Most Merciful",
        wordLocation: {
          startIndex: 0,
          endIndex: 6,
        },
        audioUrl: "/audio/ayahs/55_1.mp3",
        wordAudioUrl: "/audio/words/rahman_55_1.mp3",
        hasAudio: true,
      },
    ],
    relatedWords: [
      {
        id: "word-004",
        relationshipType: RelationshipType.Root,
      },
    ],
  },
  {
    id: "word-004",
    arabic: "رَحِيم",
    transliteration: "Raheem",
    rootLetters: "ر ح م",
    meanings: ["The Most Merciful", "The Especially Merciful"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 114,
    tags: ["divine", "attributes", "mercy"],
    audioUrl: "/audio/words/raheem.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-004-1",
        surahNumber: 1,
        surahName: "Al-Fatihah",
        ayahNumber: 1,
        arabicText: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
        translationText: "In the name of Allah, the Entirely Benificient, the Especially Merciful",
        wordLocation: {
          startIndex: 17,
          endIndex: 22,
        },
        audioUrl: "/audio/ayahs/1_1.mp3",
        wordAudioUrl: "/audio/words/raheem_1_1.mp3",
        hasAudio: true,
      },
      {
        id: "example-004-2",
        surahNumber: 2,
        surahName: "Al-Baqarah",
        ayahNumber: 173,
        arabicText: "فَمَنِ اضْطُرَّ غَيْرَ بَاغٍ وَلَا عَادٍ فَلَا إِثْمَ عَلَيْهِ ۚ إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ",
        translationText:
          "But whoever is forced [by necessity], neither desiring [it] nor transgressing [its limit], there is no sin upon him. Indeed, Allah is Forgiving and Merciful",
        wordLocation: {
          startIndex: 69,
          endIndex: 73,
        },
        audioUrl: "/audio/ayahs/2_173.mp3",
        wordAudioUrl: "/audio/words/raheem_2_173.mp3",
        hasAudio: true,
      },
    ],
    relatedWords: [
      {
        id: "word-003",
        relationshipType: RelationshipType.Root,
      },
    ],
  },
  {
    id: "word-005",
    arabic: "يَوْم",
    transliteration: "Yawm",
    rootLetters: "ي و م",
    meanings: ["Day", "Time period"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 365,
    tags: ["time", "common"],
    audioUrl: "/audio/words/yawm.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-005-1",
        surahNumber: 1,
        surahName: "Al-Fatihah",
        ayahNumber: 4,
        arabicText: "مَالِكِ يَوْمِ الدِّينِ",
        translationText: "Sovereign of the Day of Recompense",
        wordLocation: {
          startIndex: 5,
          endIndex: 8,
        },
        audioUrl: "/audio/ayahs/1_4.mp3",
        wordAudioUrl: "/audio/words/yawm_1_4.mp3",
        hasAudio: true,
      },
      {
        id: "example-005-2",
        surahNumber: 2,
        surahName: "Al-Baqarah",
        ayahNumber: 48,
        arabicText: "وَاتَّقُوا يَوْمًا لَّا تَجْزِي نَفْسٌ عَن نَّفْسٍ شَيْئًا",
        translationText: "And fear a Day when no soul will suffice for another soul at all",
        wordLocation: {
          startIndex: 7,
          endIndex: 11,
        },
        audioUrl: "/audio/ayahs/2_48.mp3",
        wordAudioUrl: "/audio/words/yawm_2_48.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-006",
    arabic: "دِين",
    transliteration: "Deen",
    rootLetters: "د ي ن",
    meanings: ["Religion", "Way of life", "Judgment", "Recompense"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 92,
    tags: ["faith", "judgment"],
    audioUrl: "/audio/words/deen.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-006-1",
        surahNumber: 1,
        surahName: "Al-Fatihah",
        ayahNumber: 4,
        arabicText: "مَالِكِ يَوْمِ الدِّينِ",
        translationText: "Sovereign of the Day of Recompense",
        wordLocation: {
          startIndex: 9,
          endIndex: 14,
        },
        audioUrl: "/audio/ayahs/1_4.mp3",
        wordAudioUrl: "/audio/words/deen_1_4.mp3",
        hasAudio: true,
      },
      {
        id: "example-006-2",
        surahNumber: 3,
        surahName: "Ali 'Imran",
        ayahNumber: 19,
        arabicText: "إِنَّ الدِّينَ عِندَ اللَّهِ الْإِسْلَامُ",
        translationText: "Indeed, the religion in the sight of Allah is Islam",
        wordLocation: {
          startIndex: 4,
          endIndex: 9,
        },
        audioUrl: "/audio/ayahs/3_19.mp3",
        wordAudioUrl: "/audio/words/deen_3_19.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-007",
    arabic: "عِبَادَة",
    transliteration: "Ibadah",
    rootLetters: "ع ب د",
    meanings: ["Worship", "Servitude", "Devotion"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 275,
    tags: ["worship", "core"],
    audioUrl: "/audio/words/ibadah.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-007-1",
        surahNumber: 1,
        surahName: "Al-Fatihah",
        ayahNumber: 5,
        arabicText: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
        translationText: "It is You we worship and You we ask for help",
        wordLocation: {
          startIndex: 6,
          endIndex: 10,
        },
        audioUrl: "/audio/ayahs/1_5.mp3",
        wordAudioUrl: "/audio/words/ibadah_1_5.mp3",
        hasAudio: true,
      },
      {
        id: "example-007-2",
        surahNumber: 51,
        surahName: "Adh-Dhariyat",
        ayahNumber: 56,
        arabicText: "وَمَا خَلَقْتُ الْجِنَّ وَالْإِنسَ إِلَّا لِيَعْبُدُونِ",
        translationText: "And I did not create the jinn and mankind except to worship Me",
        wordLocation: {
          startIndex: 35,
          endIndex: 42,
        },
        audioUrl: "/audio/ayahs/51_56.mp3",
        wordAudioUrl: "/audio/words/ibadah_51_56.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-008",
    arabic: "صِرَاط",
    transliteration: "Sirat",
    meanings: ["Path", "Way", "Road"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 45,
    tags: ["guidance", "path"],
    audioUrl: "/audio/words/sirat.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-008-1",
        surahNumber: 1,
        surahName: "Al-Fatihah",
        ayahNumber: 6,
        arabicText: "اهْد��نَا الصِّرَاطَ الْمُسْتَقِيمَ",
        translationText: "Guide us to the straight path",
        wordLocation: {
          startIndex: 6,
          endIndex: 12,
        },
        audioUrl: "/audio/ayahs/1_6.mp3",
        wordAudioUrl: "/audio/words/sirat_1_6.mp3",
        hasAudio: true,
      },
      {
        id: "example-008-2",
        surahNumber: 6,
        surahName: "Al-An'am",
        ayahNumber: 153,
        arabicText: "وَأَنَّ هَٰذَا صِرَاطِي مُسْتَقِيمًا فَاتَّبِعُوهُ",
        translationText: "And, [moreover], this is My path, which is straight, so follow it",
        wordLocation: {
          startIndex: 9,
          endIndex: 14,
        },
        audioUrl: "/audio/ayahs/6_153.mp3",
        wordAudioUrl: "/audio/words/sirat_6_153.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-009",
    arabic: "كِتَاب",
    transliteration: "Kitab",
    rootLetters: "ك ت ب",
    meanings: ["Book", "Scripture", "Writing"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 261,
    tags: ["revelation", "scripture"],
    audioUrl: "/audio/words/kitab.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-009-1",
        surahNumber: 2,
        surahName: "Al-Baqarah",
        ayahNumber: 2,
        arabicText: "ذَٰلِكَ الْكِتَابُ لَا رَيْبَ ۛ فِيهِ ۛ هُدًى لِّلْمُتَّقِينَ",
        translationText: "This is the Book about which there is no doubt, a guidance for those conscious of Allah",
        wordLocation: {
          startIndex: 6,
          endIndex: 12,
        },
        audioUrl: "/audio/ayahs/2_2.mp3",
        wordAudioUrl: "/audio/words/kitab_2_2.mp3",
        hasAudio: true,
      },
      {
        id: "example-009-2",
        surahNumber: 6,
        surahName: "Al-An'am",
        ayahNumber: 92,
        arabicText: "وَهَٰذَا كِتَابٌ أَنزَلْنَاهُ مُبَارَكٌ",
        translationText: "And this is a Book which We have sent down, blessed",
        wordLocation: {
          startIndex: 5,
          endIndex: 10,
        },
        audioUrl: "/audio/ayahs/6_92.mp3",
        wordAudioUrl: "/audio/words/kitab_6_92.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-010",
    arabic: "نَفْس",
    transliteration: "Nafs",
    rootLetters: "ن ف س",
    meanings: ["Soul", "Self", "Person", "Being"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 295,
    tags: ["human", "soul"],
    audioUrl: "/audio/words/nafs.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-010-1",
        surahNumber: 2,
        surahName: "Al-Baqarah",
        ayahNumber: 48,
        arabicText: "وَاتَّقُوا يَوْمًا لَّا تَجْزِي نَفْسٌ عَن نَّفْسٍ شَيْئًا",
        translationText: "And fear a Day when no soul will suffice for another soul at all",
        wordLocation: {
          startIndex: 21,
          endIndex: 25,
        },
        audioUrl: "/audio/ayahs/2_48.mp3",
        wordAudioUrl: "/audio/words/nafs_2_48.mp3",
        hasAudio: true,
      },
      {
        id: "example-010-2",
        surahNumber: 3,
        surahName: "Ali 'Imran",
        ayahNumber: 145,
        arabicText: "وَمَا كَانَ لِنَفْسٍ أَن تَمُوتَ إِلَّا بِإِذْنِ اللَّهِ",
        translationText: "And it is not for a soul to die except by permission of Allah",
        wordLocation: {
          startIndex: 9,
          endIndex: 13,
        },
        audioUrl: "/audio/ayahs/3_145.mp3",
        wordAudioUrl: "/audio/words/nafs_3_145.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-011",
    arabic: "إِيمَان",
    transliteration: "Iman",
    rootLetters: "أ م ن",
    meanings: ["Faith", "Belief", "Trust"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 45,
    tags: ["faith", "core"],
    audioUrl: "/audio/words/iman.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-011-1",
        surahNumber: 2,
        surahName: "Al-Baqarah",
        ayahNumber: 108,
        arabicText: "أَمْ تُرِيدُونَ أَن تَسْأَلُوا رَسُولَكُمْ كَمَا سُئِلَ مُوسَىٰ مِن قَبْلُ ۗ وَمَن يَتَبَدَّلِ الْكُفْرَ بِالْإِيمَانِ فَقَدْ ضَلَّ سَوَاءَ السَّبِيلِ",
        translationText:
          "Or do you intend to ask your Messenger as Moses was asked before? And whoever exchanges faith for disbelief has certainly strayed from the soundness of the way",
        wordLocation: {
          startIndex: 75,
          endIndex: 82,
        },
        audioUrl: "/audio/ayahs/2_108.mp3",
        wordAudioUrl: "/audio/words/iman_2_108.mp3",
        hasAudio: true,
      },
      {
        id: "example-011-2",
        surahNumber: 49,
        surahName: "Al-Hujurat",
        ayahNumber: 7,
        arabicText: "وَلَٰكِنَّ اللَّهَ حَبَّبَ إِلَيْكُمُ الْإِيمَانَ وَزَيَّنَهُ فِي قُلُوبِكُمْ",
        translationText: "But Allah has endeared to you the faith and has made it pleasing in your hearts",
        wordLocation: {
          startIndex: 25,
          endIndex: 32,
        },
        audioUrl: "/audio/ayahs/49_7.mp3",
        wordAudioUrl: "/audio/words/iman_49_7.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-012",
    arabic: "تَقْوَى",
    transliteration: "Taqwa",
    rootLetters: "و ق ي",
    meanings: ["God-consciousness", "Piety", "Righteousness", "Fear of Allah"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Intermediate,
    frequency: 151,
    tags: ["faith", "core"],
    audioUrl: "/audio/words/taqwa.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-012-1",
        surahNumber: 2,
        surahName: "Al-Baqarah",
        ayahNumber: 197,
        arabicText: "وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَىٰ",
        translationText: "And take provisions, but indeed, the best provision is fear of Allah",
        wordLocation: {
          startIndex: 28,
          endIndex: 34,
        },
        audioUrl: "/audio/ayahs/2_197.mp3",
        wordAudioUrl: "/audio/words/taqwa_2_197.mp3",
        hasAudio: true,
      },
      {
        id: "example-012-2",
        surahNumber: 49,
        surahName: "Al-Hujurat",
        ayahNumber: 13,
        arabicText: "إِنَّ أَكْرَمَكُمْ عِندَ اللَّهِ أَتْقَاكُمْ",
        translationText: "Indeed, the most noble of you in the sight of Allah is the most righteous of you",
        wordLocation: {
          startIndex: 24,
          endIndex: 31,
        },
        audioUrl: "/audio/ayahs/49_13.mp3",
        wordAudioUrl: "/audio/words/taqwa_49_13.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-013",
    arabic: "جَنَّة",
    transliteration: "Jannah",
    rootLetters: "ج ن ن",
    meanings: ["Garden", "Paradise", "Heaven"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 147,
    tags: ["afterlife", "reward"],
    audioUrl: "/audio/words/jannah.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-013-1",
        surahNumber: 2,
        surahName: "Al-Baqarah",
        ayahNumber: 25,
        arabicText: "وَبَشِّرِ الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ أَنَّ لَهُمْ جَنَّاتٍ تَجْرِي مِن تَحْتِهَا الْأَنْهَارُ",
        translationText:
          "And give good tidings to those who believe and do righteous deeds that they will have gardens [in Paradise] beneath which rivers flow",
        wordLocation: {
          startIndex: 41,
          endIndex: 46,
        },
        audioUrl: "/audio/ayahs/2_25.mp3",
        wordAudioUrl: "/audio/words/jannah_2_25.mp3",
        hasAudio: true,
      },
      {
        id: "example-013-2",
        surahNumber: 3,
        surahName: "Ali 'Imran",
        ayahNumber: 133,
        arabicText: "وَسَارِعُوا إِلَىٰ مَغْفِرَةٍ مِّن رَّبِّكُمْ وَجَنَّةٍ عَرْضُهَا السَّمَاوَاتُ وَالْأَرْضُ",
        translationText: "And hasten to forgiveness from your Lord and a garden as wide as the heavens and earth",
        wordLocation: {
          startIndex: 31,
          endIndex: 35,
        },
        audioUrl: "/audio/ayahs/3_133.mp3",
        wordAudioUrl: "/audio/words/jannah_3_133.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-014",
    arabic: "نَار",
    transliteration: "Nar",
    rootLetters: "ن و ر",
    meanings: ["Fire", "Hell", "Hellfire"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 145,
    tags: ["afterlife", "punishment"],
    audioUrl: "/audio/words/nar.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-014-1",
        surahNumber: 2,
        surahName: "Al-Baqarah",
        ayahNumber: 24,
        arabicText: "فَإِن لَّمْ تَفْعَلُوا وَلَن تَفْعَلُوا فَاتَّقُوا النَّارَ الَّتِي وَقُودُهَا النَّاسُ وَالْحِجَارَةُ",
        translationText:
          "But if you do not - and you will never be able to - then fear the Fire, whose fuel is men and stones",
        wordLocation: {
          startIndex: 31,
          endIndex: 36,
        },
        audioUrl: "/audio/ayahs/2_24.mp3",
        wordAudioUrl: "/audio/words/nar_2_24.mp3",
        hasAudio: true,
      },
      {
        id: "example-014-2",
        surahNumber: 3,
        surahName: "Ali 'Imran",
        ayahNumber: 16,
        arabicText: "رَبَّنَا إِنَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
        translationText:
          "Our Lord, indeed we have believed, so forgive us our sins and protect us from the punishment of the Fire",
        wordLocation: {
          startIndex: 45,
          endIndex: 50,
        },
        audioUrl: "/audio/ayahs/3_16.mp3",
        wordAudioUrl: "/audio/words/nar_3_16.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-015",
    arabic: "صَلَاة",
    transliteration: "Salah",
    rootLetters: "ص ل و",
    meanings: ["Prayer", "Worship"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 83,
    tags: ["worship", "pillars"],
    audioUrl: "/audio/words/salah.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-015-1",
        surahNumber: 2,
        surahName: "Al-Baqarah",
        ayahNumber: 3,
        arabicText: "الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ وَيُقِيمُونَ الصَّلَاةَ وَمِمَّا رَزَقْنَاهُمْ يُنفِقُونَ",
        translationText: "Who believe in the unseen, establish prayer, and spend out of what We have provided for them",
        wordLocation: {
          startIndex: 29,
          endIndex: 35,
        },
        audioUrl: "/audio/ayahs/2_3.mp3",
        wordAudioUrl: "/audio/words/salah_2_3.mp3",
        hasAudio: true,
      },
      {
        id: "example-015-2",
        surahNumber: 20,
        surahName: "Ta-Ha",
        ayahNumber: 14,
        arabicText: "إِنَّنِي أَنَا اللَّهُ لَا إِلَٰهَ إِلَّا أَنَا فَاعْبُدْنِي وَأَقِمِ الصَّلَاةَ لِذِكْرِي",
        translationText:
          "Indeed, I am Allah. There is no deity except Me, so worship Me and establish prayer for My remembrance",
        wordLocation: {
          startIndex: 47,
          endIndex: 53,
        },
        audioUrl: "/audio/ayahs/20_14.mp3",
        wordAudioUrl: "/audio/words/salah_20_14.mp3",
        hasAudio: true,
      },
    ],
  },
]
