"use client"

import type React from "react"
import Head from 'next/head';

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Timer, RefreshCw, HelpCircle, ArrowRight, CheckCircle, BookOpen, XCircle, Bug } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { fillBlanksService, type FillBlankSentence } from "@/services/fill-blanks-service"

interface Sentence {
  id: number;
  surah: string;
  ayah: number;
  originalText: string;
  modifiedText: string;
  translation: string;
  correctAnswer: string;
  wordBank: string[];
}

interface SentenceSet {
  id: number;
  sentences: Sentence[];
}

const sentenceSets: SentenceSet[] = [
  {
    id: 1,
    sentences: [
      {
        id: 1,
        surah: 'Al-Baqarah',
        ayah: 32,
        originalText: 'قَالُوا سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا ۖ إِنَّكَ أَنتَ الْعَلِيمُ الْحَكِيمُ',
        modifiedText: 'قَالُوا سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا ۖ إِنَّكَ أَنتَ الْعَلِيمُ الْ___ُ',
        translation: 'They said, "Exalted are You; we have no knowledge except what You have taught us. Indeed, it is You who is the All-Knowing, the All-Wise."',
        correctAnswer: 'حَكِيم',
        wordBank: ['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'حَكِيم'],
      },
      {
        id: 2,
        surah: 'Al-Fatiha',
        ayah: 6,
        originalText: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        modifiedText: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْ___َ',
        translation: 'Guide us to the straight path.',
        correctAnswer: 'مُسْتَقِيم',
        wordBank: ['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ',while (true) {
  console.log("This is an infinite loop!");
} 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'مُسْتَقِيم'],
      },
      {
        id: 3,
        surah: 'Al-Ikhlas',
        ayah: 2,
        originalText: 'ٱللَّهُ ٱلصَّمَدُ',
        modifiedText: 'ٱللَّهُ ٱلْ___ُ',
        translation: 'Allah, the Eternal Refuge.',
        correctAnswer: 'صَّمَد',
        wordBank: ['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'صَّمَد'],
      },
      {
        id: 4,
        surah: 'Al-Kahf',
        ayah: 109,
        originalText: 'قُل لَّوْ كَانَ ٱلْبَحْرُ مِدَادًا لِّكَلِمَٰتِ رَبِّى لَنَفِدَ ٱلْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَٰتُ ٱللَّهِ',
        modifiedText: 'قُل لَّوْ كَانَ ٱلْبَحْرُ مِدَادًا لِّكَلِمَٰتِ رَبِّى لَنَفِدَ ٱلْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَٰتُ ___ِ',
        translation: 'Say, "If the sea were ink for [writing] the words of my Lord, the sea would be exhausted before the words of my Lord were exhausted."',
        correctAnswer: 'ٱللَّه',
        wordBank: ['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'ٱللَّه'],
      },
      {
        id: 5,
        surah: 'Al-Rahman',
        ayah: 27,
        originalText: 'وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو ٱلْجَلَٰلِ وَٱلْإِكْرَامِ',
        modifiedText: 'وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو ٱلْجَلَٰلِ وَٱلْ___ِ',
        translation: 'And there will remain the Face of your Lord, Owner of Majesty and Honor.',
        correctAnswer: 'إِكْرَام',
        wordBank: ['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'إِكْرَام'],
      },
    ],
  },
  // Add more sets as needed
  {
    id: 2,
    sentences: [
      // Additional set for demonstration; can be expanded
      {
        id: 1,
        surah: 'Al-Asr',
        ayah: 3,
        originalText: 'إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ',
        modifiedText: 'إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَتَوَاصَوْا۟ بِٱلْ___ِ وَتَوَاصَوْا۟ بِٱلصَّبْرِ',
        translation: 'Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.',
        correctAnswer: 'حَقّ',
        wordBank: ['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'حَقّ'],
      },
      // Add more sentences for Set 2 as needed
    ],
  },
];

const FillInTheBlanks: React.FC = () => {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedWord, setSelectedWord] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showTranslation, setShowTranslation] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const currentSet = sentenceSets[currentSetIndex];
  const currentSentence = currentSet.sentences[currentSentenceIndex];

  const handleWordSelect = (word: string) => {
    setSelectedWord(word);
    if (word === currentSentence.correctAnswer) {
      setScore(score + 10);
      setFeedback('Correct! Well done!');
    } else {
      setFeedback('Incorrect. Try again!');
    }
  };

  const handleNextSentence = () => {
    if (selectedWord === currentSentence.correctAnswer) {
      if (currentSentenceIndex < currentSet.sentences.length - 1) {
        setCurrentSentenceIndex(currentSentenceIndex + 1);
        setSelectedWord('');
        setFeedback('');
        setShowTranslation(false);
        setShowHint(false);
      } else {
        // Export score to results page and move to next set
        window.location.href = `/results?score=${score + 10}&set=${currentSet.id}`;
        if (currentSetIndex < sentenceSets.length - 1) {
          setCurrentSetIndex(currentSetIndex + 1);
          setCurrentSentenceIndex(0);
          setScore(0);
          setSelectedWord('');
          setFeedback('');
          setShowTranslation(false);
          setShowHint(false);
        }
      }
    }
  };

  const toggleTranslation = () => setShowTranslation(!showTranslation);
  const toggleHint = () => setShowHint(!showHint);

  return (
    <>
      <Head>
        <title>Fill in the Blanks - KALAM</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4 sm:p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-4">
            <div className="text-lg sm:text-xl font-semibold">
              {new Date().toLocaleTimeString()}
            </div>
            <div className="text-lg sm:text-xl font-semibold">
              Score: {score}
            </div>
          </div>
          <div className="text-base sm:text-lg font-medium mb-2">
            Sentence: {currentSentenceIndex + 1}/{currentSet.sentences.length}
          </div>
          <div className="text-base sm:text-lg font-medium mb-4">
            {currentSentence.surah}, Ayah {currentSentence.ayah}
          </div>

          {/* Sentence Display */}
          <div dir="rtl" className="text-xl sm:text-2xl md:text-3xl font-arabic text-right mb-4 leading-relaxed">
            {currentSentence.modifiedText}
          </div>

          {/* Translation and Hint */}
          <div className="flex flex-col sm:flex-row justify-between mb-4 space-y-2 sm:space-y-0 sm:space-x-4">
            <button
              onClick={toggleTranslation}
              className="bg-blue-500 text-white px-3 py-2 rounded-lg text-sm sm:text-base hover:bg-blue-600 transition w-full sm:w-auto"
            >
              {showTranslation ? 'Hide Translation' : 'Show Translation'}
            </button>
            <button
              onClick={toggleHint}
              className="bg-gray-500 text-white px-3 py-2 rounded-lg text-sm sm:text-base hover:bg-gray-600 transition w-full sm:w-auto"
            >
              Hint
            </button>
          </div>
          {showTranslation && (
            <div className="text-sm sm:text-base text-gray-700 mb-4">
              {currentSentence.translation}
            </div>
          )}
          {showHint && (
            <div className="text-sm sm:text-base text-gray-700 mb-4">
              Hint: The missing word is related to{' '}
              {currentSentence.correctAnswer === 'حَكِيم'
                ? 'wisdom'
                : currentSentence.correctAnswer === 'مُسْتَقِيم'
                ? 'guidance'
                : currentSentence.correctAnswer === 'صَّمَد'
                ? 'eternity'
                : currentSentence.correctAnswer === 'ٱللَّه'
                ? 'divinity'
                : 'honor'}
            </div>
          )}

          {/* Feedback */}
          {feedback && (
            <div className={`text-sm sm:text-base mb-4 ${feedback.includes('Correct') ? 'text-green-600' : 'text-red-600'}`}>
              {feedback}
            </div>
          )}

          {/* Word Bank */}
          <div className="mb-4">
            <h3 className="text-base sm:text-lg font-semibold mb-2">Word Bank</h3>
            <div dir="rtl" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {currentSentence.wordBank.map((word, index) => (
                <button
                  key={index}
                  onClick={() => handleWordSelect(word)}
                  className="bg-gray-200 px-3 py-2 rounded-lg text-sm sm:text-base text-right hover:bg-gray-300 transition"
                  disabled={!!feedback && word !== currentSentence.correctAnswer}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>

          {/* Next Button */}
          {feedback.includes('Correct') && (
            <button
              onClick={handleNextSentence}
              className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-green-600 transition w-full sm:w-auto"
            >
              Next Sentence
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default FillInTheBlanks;
