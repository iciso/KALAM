"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

interface WordData {
  id: number
  arabic: string
  english: string
}

interface Word {
  id: number
  text: string
  type: "arabic" | "english"
  originalId: number
  selected: boolean
  matched: boolean
}

export default function MatchingGame() {
  const [words, setWords] = useState<Word[]>([])
  const [selectedWord, setSelectedWord] = useState<Word | null>(null)
  const [matchedPairs, setMatchedPairs] = useState(0)
  const [gameStarted, setGameStarted] = useState(false)
  const [gameCompleted, setGameCompleted] = useState(false)
  const [allWords, setAllWords] = useState<WordData[]>([])

  // Use refs to maintain state across renders more reliably
  const usedSetIndicesRef = useRef<number[]>([])
  const currentSetIndexRef = useRef<number>(-1)

  // For debugging - display which set is currently being shown
  const [debugInfo, setDebugInfo] = useState<string>("")

  // Sample words - in a real app, these would come from an API or database
  const wordDatabase = [
    // Set 1: Basic Nouns
    { id: 1, arabic: "كِتَاب", english: "Book" },
    { id: 2, arabic: "قَلَم", english: "Pen" },
    { id: 3, arabic: "مَاء", english: "Water" },
    { id: 4, arabic: "بَيْت", english: "House" },
    { id: 5, arabic: "شَمْس", english: "Sun" },
    { id: 6, arabic: "قَمَر", english: "Moon" },

    // Set 2: Nature
    { id: 7, arabic: "سَمَاء", english: "Sky" },
    { id: 8, arabic: "أَرْض", english: "Earth" },
    { id: 9, arabic: "جَبَل", english: "Mountain" },
    { id: 10, arabic: "بَحْر", english: "Sea" },
    { id: 11, arabic: "نَهْر", english: "River" },
    { id: 12, arabic: "شَجَرَة", english: "Tree" },

    // Set 3: People
    { id: 13, arabic: "رَجُل", english: "Man" },
    { id: 14, arabic: "اِمْرَأَة", english: "Woman" },
    { id: 15, arabic: "وَلَد", english: "Boy" },
    { id: 16, arabic: "بِنْت", english: "Girl" },
    { id: 17, arabic: "يَد", english: "Hand" },
    { id: 18, arabic: "عَيْن", english: "Eye" },

    // Set 4: Body Parts
    { id: 19, arabic: "قَلْب", english: "Heart" },
    { id: 20, arabic: "رَأْس", english: "Head" },
    { id: 21, arabic: "قَدَم", english: "Foot" },
    { id: 22, arabic: "فَم", english: "Mouth" },
    { id: 23, arabic: "أُذُن", english: "Ear" },
    { id: 24, arabic: "أَنْف", english: "Nose" },

    // Set 5: Basic Actions
    { id: 25, arabic: "أَكَلَ", english: "To eat" },
    { id: 26, arabic: "شَرِبَ", english: "To drink" },
    { id: 27, arabic: "نَامَ", english: "To sleep" },
    { id: 28, arabic: "قَرَأَ", english: "To read" },
    { id: 29, arabic: "كَتَبَ", english: "To write" },
    { id: 30, arabic: "ذَهَبَ", english: "To go" },

    // Set 6: Time
    { id: 31, arabic: "يَوْم", english: "Day" },
    { id: 32, arabic: "لَيْل", english: "Night" },
    { id: 33, arabic: "صَبَاح", english: "Morning" },
    { id: 34, arabic: "مَسَاء", english: "Evening" },
    { id: 35, arabic: "سَنَة", english: "Year" },
    { id: 36, arabic: "شَهْر", english: "Month" },

    // Set 7: Numbers
    { id: 37, arabic: "وَاحِد", english: "One" },
    { id: 38, arabic: "اِثْنَان", english: "Two" },
    { id: 39, arabic: "ثَلَاثَة", english: "Three" },
    { id: 40, arabic: "أَرْبَعَة", english: "Four" },
    { id: 41, arabic: "خَمْسَة", english: "Five" },
    { id: 42, arabic: "سِتَّة", english: "Six" },

    // Set 8: Colors
    { id: 43, arabic: "أَبْيَض", english: "White" },
    { id: 44, arabic: "أَسْوَد", english: "Black" },
    { id: 45, arabic: "أَحْمَر", english: "Red" },
    { id: 46, arabic: "أَخْضَر", english: "Green" },
    { id: 47, arabic: "أَزْرَق", english: "Blue" },
    { id: 48, arabic: "أَصْفَر", english: "Yellow" },

    // Set 9: Family
    { id: 49, arabic: "أَب", english: "Father" },
    { id: 50, arabic: "أُمّ", english: "Mother" },
    { id: 51, arabic: "أَخ", english: "Brother" },
    { id: 52, arabic: "أُخْت", english: "Sister" },
    { id: 53, arabic: "جَدّ", english: "Grandfather" },
    { id: 54, arabic: "جَدَّة", english: "Grandmother" },

    // Set 10: Food
    { id: 55, arabic: "خُبْز", english: "Bread" },
    { id: 56, arabic: "لَحْم", english: "Meat" },
    { id: 57, arabic: "سَمَك", english: "Fish" },
    { id: 58, arabic: "فَاكِهَة", english: "Fruit" },
    { id: 59, arabic: "خُضَار", english: "Vegetables" },
    { id: 60, arabic: "حَلِيب", english: "Milk" },

    // Set 11: Quranic Terms 1
    { id: 61, arabic: "اللّٰه", english: "Allah" },
    { id: 62, arabic: "رَسُول", english: "Messenger" },
    { id: 63, arabic: "نَبِيّ", english: "Prophet" },
    { id: 64, arabic: "إِيمَان", english: "Faith" },
    { id: 65, arabic: "صَلَاة", english: "Prayer" },
    { id: 66, arabic: "زَكَاة", english: "Charity" },

    // Set 12: Quranic Terms 2
    { id: 67, arabic: "صَوْم", english: "Fasting" },
    { id: 68, arabic: "حَجّ", english: "Pilgrimage" },
    { id: 69, arabic: "جَنَّة", english: "Paradise" },
    { id: 70, arabic: "نَار", english: "Hellfire" },
    { id: 71, arabic: "مَلَك", english: "Angel" },
    { id: 72, arabic: "شَيْطَان", english: "Satan" },

    // Set 13: Quranic Terms 3
    { id: 73, arabic: "تَوْبَة", english: "Repentance" },
    { id: 74, arabic: "هِدَايَة", english: "Guidance" },
    { id: 75, arabic: "رَحْمَة", english: "Mercy" },
    { id: 76, arabic: "بَرَكَة", english: "Blessing" },
    { id: 77, arabic: "نِعْمَة", english: "Favor" },
    { id: 78, arabic: "عِبَادَة", english: "Worship" },

    // Set 14: Quranic Terms 4
    { id: 79, arabic: "حَلَال", english: "Permissible" },
    { id: 80, arabic: "حَرَام", english: "Forbidden" },
    { id: 81, arabic: "دُنْيَا", english: "World" },
    { id: 82, arabic: "آخِرَة", english: "Hereafter" },
    { id: 83, arabic: "قِيَامَة", english: "Resurrection" },
    { id: 84, arabic: "حِسَاب", english: "Reckoning" },

    // Set 15: Quranic Terms 5
    { id: 85, arabic: "عِلْم", english: "Knowledge" },
    { id: 86, arabic: "حِكْمَة", english: "Wisdom" },
    { id: 87, arabic: "صَبْر", english: "Patience" },
    { id: 88, arabic: "شُكْر", english: "Gratitude" },
    { id: 89, arabic: "تَقْوَى", english: "Piety" },
    { id: 90, arabic: "تَوَكُّل", english: "Trust in Allah" },

    // Set 16: Directions
    { id: 91, arabic: "شَمَال", english: "North" },
    { id: 92, arabic: "جَنُوب", english: "South" },
    { id: 93, arabic: "شَرْق", english: "East" },
    { id: 94, arabic: "غَرْب", english: "West" },
    { id: 95, arabic: "فَوْق", english: "Above" },
    { id: 96, arabic: "تَحْت", english: "Below" },

    // Set 17: Emotions
    { id: 97, arabic: "فَرَح", english: "Happiness" },
    { id: 98, arabic: "حُزْن", english: "Sadness" },
    { id: 99, arabic: "غَضَب", english: "Anger" },
    { id: 100, arabic: "خَوْف", english: "Fear" },
    { id: 101, arabic: "حُبّ", english: "Love" },
    { id: 102, arabic: "كَرَاهِيَة", english: "Hatred" },

    // Set 18: Weather
    { id: 103, arabic: "مَطَر", english: "Rain" },
    { id: 104, arabic: "ثَلْج", english: "Snow" },
    { id: 105, arabic: "رِيح", english: "Wind" },
    { id: 106, arabic: "سَحَاب", english: "Cloud" },
    { id: 107, arabic: "بَرْق", english: "Lightning" },
    { id: 108, arabic: "رَعْد", english: "Thunder" },

    // Set 19: Animals 1
    { id: 109, arabic: "أَسَد", english: "Lion" },
    { id: 110, arabic: "فِيل", english: "Elephant" },
    { id: 111, arabic: "جَمَل", english: "Camel" },
    { id: 112, arabic: "حِصَان", english: "Horse" },
    { id: 113, arabic: "كَلْب", english: "Dog" },
    { id: 114, arabic: "قِطّ", english: "Cat" },

    // Set 20: Animals 2
    { id: 115, arabic: "طَيْر", english: "Bird" },
    { id: 116, arabic: "سَمَكَة", english: "Fish (single)" },
    { id: 117, arabic: "ذِئْب", english: "Wolf" },
    { id: 118, arabic: "ثَعْلَب", english: "Fox" },
    { id: 119, arabic: "نَحْلَة", english: "Bee" },
    { id: 120, arabic: "نَمْلَة", english: "Ant" },

    // Set 21: Places
    { id: 121, arabic: "مَسْجِد", english: "Mosque" },
    { id: 122, arabic: "مَدْرَسَة", english: "School" },
    { id: 123, arabic: "سُوق", english: "Market" },
    { id: 124, arabic: "مَدِينَة", english: "City" },
    { id: 125, arabic: "قَرْيَة", english: "Village" },
    { id: 126, arabic: "بُسْتَان", english: "Garden" },

    // Set 22: Qualities
    { id: 127, arabic: "كَبِير", english: "Big" },
    { id: 128, arabic: "صَغِير", english: "Small" },
    { id: 129, arabic: "طَوِيل", english: "Long/Tall" },
    { id: 130, arabic: "قَصِير", english: "Short" },
    { id: 131, arabic: "جَمِيل", english: "Beautiful" },
    { id: 132, arabic: "قَبِيح", english: "Ugly" },

    // Set 23: More Qualities
    { id: 133, arabic: "حَارّ", english: "Hot" },
    { id: 134, arabic: "بَارِد", english: "Cold" },
    { id: 135, arabic: "جَدِيد", english: "New" },
    { id: 136, arabic: "قَدِيم", english: "Old" },
    { id: 137, arabic: "سَهْل", english: "Easy" },
    { id: 138, arabic: "صَعْب", english: "Difficult" },

    // Set 24: Common Verbs
    { id: 139, arabic: "قَالَ", english: "To say" },
    { id: 140, arabic: "سَمِعَ", english: "To hear" },
    { id: 141, arabic: "رَأَى", english: "To see" },
    { id: 142, arabic: "عَلِمَ", english: "To know" },
    { id: 143, arabic: "فَعَلَ", english: "To do" },
    { id: 144, arabic: "وَجَدَ", english: "To find" },

    // Set 25: More Verbs
    { id: 145, arabic: "دَخَلَ", english: "To enter" },
    { id: 146, arabic: "خَرَجَ", english: "To exit" },
    { id: 147, arabic: "جَلَسَ", english: "To sit" },
    { id: 148, arabic: "وَقَفَ", english: "To stand" },
    { id: 149, arabic: "أَخَذَ", english: "To take" },
    { id: 150, arabic: "أَعْطَى", english: "To give" },
  ]

  useEffect(() => {
    // In a real app, you would fetch words from your API here
    setAllWords(wordDatabase)
  }, [])

  // Helper function to get a set of words at a specific index
  const getWordSetAtIndex = (index: number): WordData[] => {
    const wordsPerSet = 6
    const startIndex = index * wordsPerSet
    const endIndex = Math.min(startIndex + wordsPerSet, allWords.length)
    return allWords.slice(startIndex, endIndex)
  }

  // Helper function to determine how many sets are available
  const getTotalSets = (): number => {
    return Math.ceil(allWords.length / 6)
  }

  // Completely redesigned set selection logic
  const selectNewWordSet = (): number => {
    const totalSets = getTotalSets()

    // If we've used all sets, start over
    if (usedSetIndicesRef.current.length >= totalSets - 1) {
      // Keep only the current set in the used list to prevent immediate repetition
      usedSetIndicesRef.current = currentSetIndexRef.current >= 0 ? [currentSetIndexRef.current] : []
    }

    // Get all possible set indices
    const allSetIndices = Array.from({ length: totalSets }, (_, i) => i)

    // Filter out the indices we've already used and the current index
    const availableIndices = allSetIndices.filter(
      (index) => !usedSetIndicesRef.current.includes(index) && index !== currentSetIndexRef.current,
    )

    // If we somehow have no available indices (edge case), pick any except current
    if (availableIndices.length === 0) {
      const fallbackIndices = allSetIndices.filter((index) => index !== currentSetIndexRef.current)
      // If multiple sets exist, choose one; otherwise use the only one (edge case)
      if (fallbackIndices.length > 0) {
        const newIndex = fallbackIndices[Math.floor(Math.random() * fallbackIndices.length)]
        return newIndex
      }
      return 0 // Ultra-fallback: just use the first set if nothing else is available
    }

    // Randomly select from available indices
    const newIndex = availableIndices[Math.floor(Math.random() * availableIndices.length)]

    // Mark this index as used
    usedSetIndicesRef.current.push(newIndex)

    return newIndex
  }

  const startGame = (newSet = false) => {
    let setIndex: number

    if (!gameStarted || !newSet) {
      // First game or replay with same words
      if (currentSetIndexRef.current === -1) {
        // Very first game - choose set 0
        setIndex = 0
        currentSetIndexRef.current = 0
        usedSetIndicesRef.current = [0]
      } else {
        // Replay with same words - use current set
        setIndex = currentSetIndexRef.current
      }
    } else {
      // Select a new set of words
      setIndex = selectNewWordSet()
      currentSetIndexRef.current = setIndex
    }

    // Get words for the selected set
    const currentWords = getWordSetAtIndex(setIndex)

    // Update debug info
    setDebugInfo(
      `Set #${setIndex + 1} of ${getTotalSets()}. Used sets: [${usedSetIndicesRef.current.map((i) => i + 1).join(", ")}]`,
    )

    // Create a shuffled array of words with their translations
    const arabicWords = currentWords.map((word) => ({
      id: word.id,
      text: word.arabic,
      type: "arabic" as const,
      originalId: word.id,
      selected: false,
      matched: false,
    }))

    const englishWords = currentWords.map((word) => ({
      id: word.id + 1000, // Add offset to create unique IDs
      text: word.english,
      type: "english" as const,
      originalId: word.id,
      selected: false,
      matched: false,
    }))

    // Combine and shuffle
    const gameWords = [...arabicWords, ...englishWords].sort(() => Math.random() - 0.5)

    setWords(gameWords)
    setSelectedWord(null)
    setMatchedPairs(0)
    setGameStarted(true)
    setGameCompleted(false)
  }

  const handleWordClick = (clickedWord: any) => {
    // If the word is already matched or the same word is clicked again, do nothing
    if (clickedWord.matched || (selectedWord && clickedWord.id === selectedWord.id)) {
      return
    }

    // Create a new array with the clicked word marked as selected
    const updatedWords = words.map((word) => (word.id === clickedWord.id ? { ...word, selected: true } : word))

    if (!selectedWord) {
      // First selection
      setSelectedWord(clickedWord)
      setWords(updatedWords)
    } else {
      // Second selection - check for a match
      setWords(updatedWords)

      // Check if the words match (have the same originalId but different types)
      if (clickedWord.originalId === selectedWord.originalId && clickedWord.type !== selectedWord.type) {
        // It's a match!
        setTimeout(() => {
          setWords(
            words.map((word) =>
              word.id === clickedWord.id || word.id === selectedWord.id
                ? { ...word, matched: true, selected: false }
                : word,
            ),
          )
          setSelectedWord(null)
          setMatchedPairs(matchedPairs + 1)

          // Check if game is complete
          const currentWords = getWordSetAtIndex(currentSetIndexRef.current)
          if (matchedPairs + 1 === currentWords.length) {
            setGameCompleted(true)
          }
        }, 500)
      } else {
        // Not a match, deselect after a delay
        setTimeout(() => {
          setWords(
            words.map((word) =>
              word.id === clickedWord.id || word.id === selectedWord.id ? { ...word, selected: false } : word,
            ),
          )
          setSelectedWord(null)
        }, 1000)
      }
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6 bg-green-800 text-white p-4 rounded-lg">
        <h1 className="text-2xl font-bold">Match the Following Words</h1>
        <Link href="/games" className="text-white hover:underline">
          Back to Games
        </Link>
      </div>

      <Card className="p-6 mb-8">
        <h2 className="text-xl font-semibold text-center mb-2">Match the Following Words</h2>
        <p className="text-center text-gray-600 mb-4">Connect Arabic words with their meanings</p>

        <div className="text-center mb-6">
          <p>
            Test your knowledge of Quranic vocabulary by matching Arabic words with their correct meanings. Click on a
            word and then its matching translation to create a pair.
          </p>
          {/* You can remove this in production, it's just for debugging */}
          {debugInfo && <p className="text-xs text-gray-500 mt-2">{debugInfo}</p>}
        </div>

        {!gameStarted ? (
          <div className="flex justify-center">
            <Button onClick={() => startGame(false)} className="bg-green-600 hover:bg-green-700 text-white">
              Start Game
            </Button>
          </div>
        ) : (
          <>
            {gameCompleted ? (
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-green-600 mb-4">Congratulations!</h3>
                <p className="mb-4">You've successfully matched all the words.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button onClick={() => startGame(false)} className="bg-green-600 hover:bg-green-700 text-white">
                    Play Again (Same Words)
                  </Button>
                  <Button onClick={() => startGame(true)} className="bg-blue-600 hover:bg-blue-700 text-white">
                    New Set of Words
                  </Button>
                </div>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                  {words.map((word) => (
                    <div
                      key={word.id}
                      className={`
                        p-4 rounded-lg cursor-pointer text-center flex items-center justify-center min-h-[80px]
                        ${
                          word.matched
                            ? "bg-green-100 border-2 border-green-500"
                            : word.selected
                              ? "bg-blue-100 border-2 border-blue-500"
                              : word.type === "arabic"
                                ? "bg-amber-50 border border-amber-200"
                                : "bg-slate-50 border border-slate-200"
                        }
                        ${word.matched ? "cursor-default" : "hover:shadow-md transition-shadow"}
                      `}
                      onClick={() => !word.matched && handleWordClick(word)}
                    >
                      <span className={word.type === "arabic" ? "text-xl" : ""}>{word.text}</span>
                    </div>
                  ))}
                </div>
                <div className="text-center">
                  <p>
                    Matched pairs: {matchedPairs}/{getWordSetAtIndex(currentSetIndexRef.current).length}
                  </p>
                </div>
              </>
            )}
          </>
        )}
      </Card>
    </div>
  )
}
