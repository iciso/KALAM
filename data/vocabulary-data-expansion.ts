import { type VocabularyWord, PartOfSpeech, Difficulty } from "../types/vocabulary"

// These are 15 additional words to expand the vocabulary database
export const additionalVocabularyData: VocabularyWord[] = [
  {
    id: "word-016",
    arabic: "سَمَاء",
    transliteration: "Samaa",
    rootLetters: "س م و",
    meanings: ["Sky", "Heaven", "Firmament"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 120,
    tags: ["nature", "creation"],
    audioUrl: "/audio/words/samaa.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-016-1",
        surahNumber: 2,
        surahName: "Al-Baqarah",
        ayahNumber: 22,
        arabicText: "الَّذِي جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا وَالسَّمَاءَ بِنَاءً",
        translationText: "Who made for you the earth a bed [spread out] and the sky a ceiling",
        wordLocation: {
          startIndex: 36,
          endIndex: 42,
        },
        audioUrl: "/audio/ayahs/2_22.mp3",
        wordAudioUrl: "/audio/words/samaa_2_22.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-017",
    arabic: "أَرْض",
    transliteration: "Ard",
    rootLetters: "أ ر ض",
    meanings: ["Earth", "Land", "Ground"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 461,
    tags: ["nature", "creation"],
    audioUrl: "/audio/words/ard.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-017-1",
        surahNumber: 2,
        surahName: "Al-Baqarah",
        ayahNumber: 22,
        arabicText: "الَّذِي جَعَلَ لَكُمُ الْأَرْضَ فِرَاشًا وَالسَّمَاءَ بِنَاءً",
        translationText: "Who made for you the earth a bed [spread out] and the sky a ceiling",
        wordLocation: {
          startIndex: 22,
          endIndex: 28,
        },
        audioUrl: "/audio/ayahs/2_22.mp3",
        wordAudioUrl: "/audio/words/ard_2_22.mp3",
        hasAudio: true,
      },
    ],
  },
  {
    id: "word-018",
    arabic: "مَاء",
    transliteration: "Maa",
    rootLetters: "م و ه",
    meanings: ["Water", "Rain"],
    partOfSpeech: PartOfSpeech.Noun,
    difficulty: Difficulty.Beginner,
    frequency: 63,
    tags: ["nature", "sustenance"],
    audioUrl: "/audio/words/maa.mp3",
    hasAudio: true,
    examples: [
      {
        id: "example-018-1",
        surahNumber: 2,
        surahName: "Al-Baqarah",
        ayahNumber: 22,
        arabicText: "وَأَنزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجَ بِهِ مِنَ الثَّمَرَاتِ رِزْقًا لَّكُمْ",
        translationText: "And sent down rain from the sky and brought forth thereby fruits as provision for you",
        wordLocation: {
          startIndex: 19,
          endIndex: 22,
        },
        audioUrl: "/audio/ayahs/2_22.mp3",
        wordAudioUrl: "/audio/words/maa_2_22.mp3",
        hasAudio: true,
      },
    ],
  },
]

// Export as vocabularyDataPhase2 to match the expected import
export const vocabularyDataPhase2 = additionalVocabularyData
