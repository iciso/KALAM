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
  { word: "آدَم", hint: "First human and prophet" },
  { word: "نُوح", hint: "Built an ark" },
  { word: "إِبْرَاهِيم", hint: "Friend of Allah" },
  { word: "مُوسَى", hint: "Received the Torah" },
  { word: "عِيسَى", hint: "Son of Maryam" },
  { word: "مُحَمَّد", hint: "Final Messenger" },
]

// Words for the word search game
export const wordSearchWords = [
  "الله",
  "رَبّ",
  "رَحْمَن",
  "رَحِيم",
  "يَوْم",
  "دِين",
  "عِبَادَة",
  "صِرَاط",
  "مَالِك",
  "نَعْبُدُ",
  "آدَم",
  "نُوح",
  "إِبْرَاهِيم",
  "مُوسَى",
  "عِيسَى",
  "مُحَمَّد",
]

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
      { number: 1, clue: "The Creator of everything", answer: "الله", row: 0, col: 5 }, // Changed col to rightmost letter
      { number: 2, clue: "The Most Compassionate", answer: "رحمن", row: 2, col: 3 }, // Changed col to rightmost letter
      { number: 3, clue: "A period of 24 hours", answer: "يوم", row: 3, col: 6 }, // Changed col to rightmost letter
      { number: 4, clue: "Faith or judgment", answer: "دين", row: 5, col: 6 }, // Changed col to rightmost letter
    ],
    down: [
      { number: 5, clue: "The Sustainer and Nourisher", answer: "رب", row: 3, col: 0 },
      { number: 6, clue: "Owner or master", answer: "مالك", row: 0, col: 2 },
    ],
  },
}
