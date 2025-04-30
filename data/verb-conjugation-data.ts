import {
  type VerbRoot,
  type VerbConjugation,
  Tense,
  Person,
  Gender,
  Number,
  type VerbExample,
} from "@/types/conjugation"

// Expanded set of examples for كتب (to write)
const katabExamples: VerbExample[] = [
  {
    id: "ktb-2-282",
    surahNumber: 2,
    ayahNumber: 282,
    arabicText: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰ أَجَلٍ مُّسَمًّى فَاكْتُبُوهُ",
    translationText: "O you who believe! When you contract a debt for a fixed term, write it down.",
    verbForm: "فَاكْتُبُوهُ",
    verbLocation: {
      startIndex: 58,
      endIndex: 66,
    },
  },
  {
    id: "ktb-2-79",
    surahNumber: 2,
    ayahNumber: 79,
    arabicText: "فَوَيْلٌ لِّلَّذِينَ يَكْتُبُونَ الْكِتَابَ بِأَيْدِيهِمْ ثُمَّ يَقُولُونَ هَٰذَا مِنْ عِندِ اللَّهِ",
    translationText: "So woe to those who write the 'scripture' with their own hands, then say, 'This is from Allah.'",
    verbForm: "يَكْتُبُونَ",
    verbLocation: {
      startIndex: 16,
      endIndex: 24,
    },
  },
  {
    id: "ktb-3-181",
    surahNumber: 3,
    ayahNumber: 181,
    arabicText: "سَنَكْتُبُ مَا قَالُوا وَقَتْلَهُمُ الْأَنبِيَاءَ بِغَيْرِ حَقٍّ",
    translationText: "We will record what they said and their killing of the prophets without right.",
    verbForm: "سَنَكْتُبُ",
    verbLocation: {
      startIndex: 0,
      endIndex: 7,
    },
  },
]

// Expanded set of examples for قال (to say)
const qalaExamples: VerbExample[] = [
  {
    id: "qwl-2-30",
    surahNumber: 2,
    ayahNumber: 30,
    arabicText: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",
    translationText:
      "And [mention] when your Lord said to the angels, 'Indeed, I will make upon the earth a successive authority.'",
    verbForm: "قَالَ",
    verbLocation: {
      startIndex: 5,
      endIndex: 8,
    },
  },
  {
    id: "qwl-2-34",
    surahNumber: 2,
    ayahNumber: 34,
    arabicText: "وَإِذْ قُلْنَا لِلْمَلَائِكَةِ اسْجُدُوا لِآدَمَ فَسَجَدُوا إِلَّا إِبْلِيسَ",
    translationText:
      "And [mention] when We said to the angels, 'Prostrate before Adam'; so they prostrated, except for Iblis.",
    verbForm: "قُلْنَا",
    verbLocation: {
      startIndex: 5,
      endIndex: 9,
    },
  },
  {
    id: "qwl-2-11",
    surahNumber: 2,
    ayahNumber: 11,
    arabicText: "وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ",
    translationText:
      "And when it is said to them, 'Do not cause corruption on the earth,' they say, 'We are but reformers.'",
    verbForm: "قَالُوا",
    verbLocation: {
      startIndex: 36,
      endIndex: 40,
    },
  },
  {
    id: "qwl-2-14",
    surahNumber: 2,
    ayahNumber: 14,
    arabicText: "وَإِذَا لَقُوا الَّذِينَ آمَنُوا قَالُوا آمَنَّا وَإِذَا خَلَوْا إِلَىٰ شَيَاطِينِهِمْ قَالُوا إِنَّا مَعَكُمْ",
    translationText:
      "And when they meet those who believe, they say, 'We believe'; but when they are alone with their evil ones, they say, 'Indeed, we are with you.'",
    verbForm: "قَالُوا",
    verbLocation: {
      startIndex: 21,
      endIndex: 25,
    },
  },
]

// Expanded set of examples for فعل (to do)
const faalaExamples: VerbExample[] = [
  {
    id: "fEl-21-62",
    surahNumber: 21,
    ayahNumber: 62,
    arabicText: "قَالُوا أَأَنتَ فَعَلْتَ هَٰذَا بِآلِهَتِنَا يَا إِبْرَاهِيمُ",
    translationText: "They said, 'Have you done this to our gods, O Abraham?'",
    verbForm: "فَعَلْتَ",
    verbLocation: {
      startIndex: 12,
      endIndex: 16,
    },
  },
  {
    id: "fEl-26-19",
    surahNumber: 26,
    ayahNumber: 19,
    arabicText: "وَفَعَلْتَ فَعْلَتَكَ الَّتِي فَعَلْتَ وَأَنتَ مِنَ الْكَافِرِينَ",
    translationText: "And you did your deed which you did, and you were of the ungrateful.",
    verbForm: "فَعَلْتَ",
    verbLocation: {
      startIndex: 2,
      endIndex: 6,
    },
  },
  {
    id: "fEl-12-89",
    surahNumber: 12,
    ayahNumber: 89,
    arabicText: "قَالَ هَلْ عَلِمْتُم مَّا فَعَلْتُم بِيُوسُفَ وَأَخِيهِ إِذْ أَنتُمْ جَاهِلُونَ",
    translationText: "He said, 'Do you know what you did with Joseph and his brother when you were ignorant?'",
    verbForm: "فَعَلْتُم",
    verbLocation: {
      startIndex: 17,
      endIndex: 22,
    },
  },
]

// Basic set of common Quranic three-letter verbs to start with
export const verbRoots: VerbRoot[] = [
  {
    id: "ktb",
    letters: "كتب",
    transliteration: "ka-ta-ba",
    meaning: "to write",
    frequency: 230,
    examples: katabExamples,
  },
  {
    id: "qwl",
    letters: "قول",
    transliteration: "qa-wa-la",
    meaning: "to say",
    frequency: 1700,
    examples: qalaExamples,
  },
  {
    id: "fal",
    letters: "فعل",
    transliteration: "fa-'a-la",
    meaning: "to do",
    frequency: 108,
    examples: faalaExamples,
  },
]

// Past tense conjugation for كتب (to write) with form-specific examples
export const katabaConjugationPast: VerbConjugation = {
  root: verbRoots[0],
  tense: Tense.Past,
  forms: [
    {
      person: Person.Third,
      gender: Gender.Masculine,
      number: Number.Singular,
      arabicText: "كَتَبَ",
      transliteration: "kataba",
      pronunciation: "kataba",
      translation: "he wrote",
      examples: [
        {
          id: "ktb-3rd-m-s-1",
          surahNumber: 6,
          ayahNumber: 54,
          arabicText: "كَتَبَ رَبُّكُمْ عَلَىٰ نَفْسِهِ الرَّحْمَةَ",
          translationText: "Your Lord has decreed upon Himself mercy.",
          verbForm: "كَتَبَ",
          verbLocation: {
            startIndex: 0,
            endIndex: 3,
          },
        },
        {
          id: "ktb-3rd-m-s-2",
          surahNumber: 2,
          ayahNumber: 187,
          arabicText: "وَابْتَغُوا مَا كَتَبَ اللَّهُ لَكُمْ",
          translationText: "And seek what Allah has ordained for you.",
          verbForm: "كَتَبَ",
          verbLocation: {
            startIndex: 11,
            endIndex: 14,
          },
        },
      ],
    },
    {
      person: Person.Third,
      gender: Gender.Feminine,
      number: Number.Singular,
      arabicText: "كَتَبَتْ",
      transliteration: "katabat",
      pronunciation: "katabat",
      translation: "she wrote",
      examples: [
        {
          id: "ktb-3rd-f-s-1",
          surahNumber: 6,
          ayahNumber: 12,
          arabicText: "كَتَبَتْ يَدَاهُ مَا قَدَّمَ لِنَفْسِهِ",
          translationText: "His hands have written what he has earned for himself.",
          verbForm: "كَتَبَتْ",
          verbLocation: {
            startIndex: 0,
            endIndex: 4,
          },
        },
      ],
    },
    // Other forms would be added here with their specific examples
  ],
}

// Past tense conjugation for قال (to say) with form-specific examples
export const qalaConjugationPast: VerbConjugation = {
  root: verbRoots[1],
  tense: Tense.Past,
  forms: [
    {
      person: Person.Third,
      gender: Gender.Masculine,
      number: Number.Singular,
      arabicText: "قَالَ",
      transliteration: "qāla",
      pronunciation: "qaala",
      translation: "he said",
      examples: [
        {
          id: "qwl-3rd-m-s-1",
          surahNumber: 2,
          ayahNumber: 30,
          arabicText: "وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً",
          translationText:
            "And [mention] when your Lord said to the angels, 'Indeed, I will make upon the earth a successive authority.'",
          verbForm: "قَالَ",
          verbLocation: {
            startIndex: 5,
            endIndex: 8,
          },
        },
        {
          id: "qwl-3rd-m-s-2",
          surahNumber: 2,
          ayahNumber: 33,
          arabicText: "قَالَ يَا آدَمُ أَنبِئْهُم بِأَسْمَائِهِمْ",
          translationText: "He said, 'O Adam, inform them of their names.'",
          verbForm: "قَالَ",
          verbLocation: {
            startIndex: 0,
            endIndex: 3,
          },
        },
        {
          id: "qwl-3rd-m-s-3",
          surahNumber: 7,
          ayahNumber: 12,
          arabicText: "قَالَ مَا مَنَعَكَ أَلَّا تَسْجُدَ إِذْ أَمَرْتُكَ",
          translationText: "Allah said, 'What prevented you from prostrating when I commanded you?'",
          verbForm: "قَالَ",
          verbLocation: {
            startIndex: 0,
            endIndex: 3,
          },
        },
      ],
    },
    {
      person: Person.Third,
      gender: Gender.Masculine,
      number: Number.Plural,
      arabicText: "قَالُوا",
      transliteration: "qālū",
      pronunciation: "qaaloo",
      translation: "they (males) said",
      examples: [
        {
          id: "qwl-3rd-m-p-1",
          surahNumber: 2,
          ayahNumber: 11,
          arabicText: "وَإِذَا قِيلَ لَهُمْ لَا تُفْسِدُوا فِي الْأَرْضِ قَالُوا إِنَّمَا نَحْنُ مُصْلِحُونَ",
          translationText:
            "And when it is said to them, 'Do not cause corruption on the earth,' they say, 'We are but reformers.'",
          verbForm: "قَالُوا",
          verbLocation: {
            startIndex: 36,
            endIndex: 40,
          },
        },
        {
          id: "qwl-3rd-m-p-2",
          surahNumber: 2,
          ayahNumber: 14,
          arabicText: "وَإِذَا لَقُوا الَّذِينَ آمَنُوا قَالُوا آمَنَّا",
          translationText: "And when they meet those who believe, they say, 'We believe'",
          verbForm: "قَالُوا",
          verbLocation: {
            startIndex: 21,
            endIndex: 25,
          },
        },
      ],
    },
    // Other forms would be added here with their specific examples
  ],
}

// Past tense conjugation for فعل (to do) with form-specific examples
export const faalaConjugationPast: VerbConjugation = {
  root: verbRoots[2],
  tense: Tense.Past,
  forms: [
    {
      person: Person.Third,
      gender: Gender.Masculine,
      number: Number.Singular,
      arabicText: "فَعَلَ",
      transliteration: "fa'ala",
      pronunciation: "fa'ala",
      translation: "he did",
      examples: [
        {
          id: "fEl-3rd-m-s-1",
          surahNumber: 105,
          ayahNumber: 1,
          arabicText: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
          translationText: "Have you not considered how your Lord dealt with the companions of the elephant?",
          verbForm: "فَعَلَ",
          verbLocation: {
            startIndex: 12,
            endIndex: 15,
          },
        },
        {
          id: "fEl-3rd-m-s-2",
          surahNumber: 89,
          ayahNumber: 6,
          arabicText: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ",
          translationText: "Have you not considered how your Lord dealt with 'Aad?",
          verbForm: "فَعَلَ",
          verbLocation: {
            startIndex: 12,
            endIndex: 15,
          },
        },
      ],
    },
    {
      person: Person.Second,
      gender: Gender.Masculine,
      number: Number.Singular,
      arabicText: "فَعَلْتَ",
      transliteration: "fa'alta",
      pronunciation: "fa'alta",
      translation: "you (male) did",
      examples: [
        {
          id: "fEl-2nd-m-s-1",
          surahNumber: 21,
          ayahNumber: 62,
          arabicText: "قَالُوا أَأَنتَ فَعَلْتَ هَٰذَا بِآلِهَتِنَا يَا إِبْرَاهِيمُ",
          translationText: "They said, 'Have you done this to our gods, O Abraham?'",
          verbForm: "فَعَلْتَ",
          verbLocation: {
            startIndex: 12,
            endIndex: 16,
          },
        },
        {
          id: "fEl-2nd-m-s-2",
          surahNumber: 26,
          ayahNumber: 19,
          arabicText: "وَفَعَلْتَ فَعْلَتَكَ الَّتِي فَعَلْتَ وَأَنتَ مِنَ الْكَافِرِينَ",
          translationText: "And you did your deed which you did, and you were of the ungrateful.",
          verbForm: "فَعَلْتَ",
          verbLocation: {
            startIndex: 2,
            endIndex: 6,
          },
        },
      ],
    },
    // Other forms would be added here with their specific examples
  ],
}

export const initialVerbConjugations: VerbConjugation[] = [
  katabaConjugationPast,
  qalaConjugationPast,
  faalaConjugationPast,
]
