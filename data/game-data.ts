// Vocabulary pairs for the memory game
export const vocabularyPairs = [
  { id: 1, arabic: "الله", meaning: "God" },
  { id: 2, arabic: "رَبّ", meaning: "Lord" },
  { id: 3, arabic: "رَحْمَن", meaning: "The Most Gracious" },
  { id: 4, arabic: "رَحِيم", meaning: "The Most Merciful" },
  { id: 5, arabic: "يَوْم", meaning: "Day" },
  { id: 6, arabic: "دِين", meaning: "Judgment/Religion" },
  { id: 7, arabic: "عِبَادَة", meaning: "Worship" },
  { id: 8, arabic: "صِرَاط", meaning: "Path" },
]

// Words for the matching game
export const matchingWords = [
  { id: 1, arabic: "الله", meaning: "God" },
  { id: 2, arabic: "رَبّ", meaning: "Lord" },
  { id: 3, arabic: "رَحْمَن", meaning: "The Most Gracious" },
  { id: 4, arabic: "رَحِيم", meaning: "The Most Merciful" },
  { id: 5, arabic: "يَوْم", meaning: "Day" },
  { id: 6, arabic: "دِين", meaning: "Judgment/Religion" },
]

// Sentences for the fill in the blanks game
export const fillBlanksData = [
  {
    id: 1,
    text: "بِسْمِ ___ الرَّحْمَنِ الرَّحِيمِ",
    blanks: [{ id: "blank1-1", word: "اللهِ", filled: null }],
  },
  {
    id: 2,
    text: "الْحَمْدُ لِلَّهِ ___ الْعَالَمِينَ",
    blanks: [{ id: "blank2-1", word: "رَبِّ", filled: null }],
  },
  {
    id: 3,
    text: "___ الرَّحْمَنِ ___",
    blanks: [
      { id: "blank3-1", word: "مَالِكِ", filled: null },
      { id: "blank3-2", word: "الرَّحِيمِ", filled: null },
    ],
  },
  {
    id: 4,
    text: "إِيَّاكَ ___ وَإِيَّاكَ ___",
    blanks: [
      { id: "blank4-1", word: "نَعْبُدُ", filled: null },
      { id: "blank4-2", word: "نَسْتَعِينُ", filled: null },
    ],
  },
]

// Words for the hangman game
export const hangmanWords = [
  { word: "الله", hint: "The Creator of everything" },
  { word: "رَبّ", hint: "The Sustainer and Nourisher" },
  { word: "رَحْمَن", hint: "The Most Compassionate" },
  { word: "رَحِيم", hint: "The Most Merciful" },
  { word: "يَوْم", hint: "A period of 24 hours" },
  { word: "دِين", hint: "Faith or judgment" },
  { word: "عِبَادَة", hint: "Acts of devotion" },
  { word: "صِرَاط", hint: "A way or path" },
  { word: "مَالِك", hint: "Owner or master" },
  { word: "نَعْبُدُ", hint: "We worship" },
]

// Words for the word search game
export const wordSearchWords = ["الله", "رَبّ", "رَحْمَن", "رَحِيم", "يَوْم", "دِين", "عِبَادَة", "صِرَاط", "مَالِك", "نَعْبُدُ"]

// Crossword puzzle data
export const crosswordData = {
  grid: [
    ["", "", "ا", "ل", "ل", "ه", "", ""],
    ["", "", "ل", "", "", "", "", ""],
    ["ر", "ح", "م", "ن", "", "", "", ""],
    ["ب", "", "ا", "", "ي", "و", "م", ""],
    ["", "", "ل", "", "", "", "", ""],
    ["", "", "ك", "", "د", "ي", "ن", ""],
    ["", "", "", "", "", "", "", ""],
  ],
  clues: {
    across: [
      { number: 1, clue: "The Creator of everything", answer: "الله", row: 0, col: 2 },
      { number: 2, clue: "The Most Compassionate", answer: "رحمن", row: 2, col: 0 },
      { number: 3, clue: "A period of 24 hours", answer: "يوم", row: 3, col: 4 },
      { number: 4, clue: "Faith or judgment", answer: "دين", row: 5, col: 4 },
    ],
    down: [
      { number: 5, clue: "The Sustainer and Nourisher", answer: "رب", row: 3, col: 0 },
      { number: 6, clue: "Owner or master", answer: "مالك", row: 0, col: 2 },
    ],
  },
}
