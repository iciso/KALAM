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

const predefinedSentences: Sentence[] = [
  {
    id: 1,
    surah: 'Al-Baqarah',
    ayah: 32,
    originalText: 'قَالُوا سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا ۖ إِنَّكَ أَنتَ الْعَلِيمُ الْحَكِيمُ',
    modifiedText: 'قَالُوا سُبْحَانَكَ لَا عِلْمَ لَنَا إِلَّا مَا عَلَّمْتَنَا ۖ إِنَّكَ أَنتَ الْعَلِيمُ الْ___ُ',
    translation: 'They said, "Exalted are You; we have no knowledge except what You have taught us. Indeed, it is You who is the All-Knowing, the All-Wise."',
    correctAnswer: 'حَكِيم',
    wordBank: ['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'حَكِيم'],
  },
  {
    id: 2,
    surah: 'Al-Baqarah',
    ayah: 129,
    originalText: 'رَبَّنَا وَابْعَثْ فِيهِمْ رَسُولًا مِّنْهُمْ يَتْلُو عَلَيْهِمْ آيَاتِكَ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْحِكْمَةَ',
    modifiedText: 'رَبَّنَا وَابْعَثْ فِيهِمْ رَسُولًا مِّنْهُمْ يَتْلُو عَلَيْهِمْ آيَاتِكَ وَيُعَلِّمُهُمُ الْكِتَابَ وَالْ___َ',
    translation: 'Our Lord, and send among them a messenger from themselves who will recite to them Your verses and teach them the Book and wisdom.',
    correctAnswer: 'حِكْمَة',
    wordBank: ['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'حِكْمَة'],
  },
  {
    id: 3,
    surah: 'Al-Baqarah',
    ayah: 151,
    originalText: 'كَمَا أَرْسَلْنَا فِيكُمْ رَسُولًا مِّنكُمْ يَتْلُو عَلَيْكُمْ آيَاتِنَا وَيُزَكِّيكُمْ وَيُعَلِّمُكُمُ الْكِتَابَ وَالْحِكْمَةَ',
    modifiedText: 'كَمَا أَرْسَلْنَا فِيكُمْ رَسُولًا مِّنكُمْ يَتْلُو عَلَيْكُمْ آيَاتِنَا وَيُزَكِّيكُمْ وَيُعَلِّمُكُمُ الْكِتَابَ وَالْ___َ',
    translation: 'Just as We have sent among you a messenger from yourselves reciting to you Our verses and purifying you and teaching you the Book and wisdom.',
    correctAnswer: 'حِكْمَة',
    wordBank: ['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'حِكْمَة'],
  },
  {
    id: 4,
    surah: 'Al-Baqarah',
    ayah: 231,
    originalText: 'وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ وَمَا أَنزَلَ عَلَيْكُم مِّنَ الْكِتَابِ وَالْحِكْمَةِ يَعِظُكُم بِهِ',
    modifiedText: 'وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ وَمَا أَنزَلَ عَلَيْكُم مِّنَ الْكِتَابِ وَالْ___ِ يَعِظُكُم بِهِ',
    translation: 'And remember the favor of Allah upon you and what has been revealed to you of the Book and wisdom by which He instructs you.',
    correctAnswer: 'حِكْمَة',
    wordBank: ['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'حِكْمَة'],
  },
  {
    id: 5,
    surah: 'Al-Baqarah',
    ayah: 269,
    originalText: 'يُؤْتِي الْحِكْمَةَ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا',
    modifiedText: 'يُؤْتِي الْ___َ مَن يَشَاءُ ۚ وَمَن يُؤْتَ الْ___َ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا',
    translation: 'He gives wisdom to whom He wills, and whoever has been given wisdom has certainly been given much good.',
    correctAnswer: 'حِكْمَة',
    wordBank: ['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'حِكْمَة'],
  },
];

const FillInTheBlanks: React.FC = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedWord, setSelectedWord] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showTranslation, setShowTranslation] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const currentSentence = predefinedSentences[currentSentenceIndex];

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
      if (currentSentenceIndex < predefinedSentences.length - 1) {
        setCurrentSentenceIndex(currentSentenceIndex + 1);
        setSelectedWord('');
        setFeedback('');
        setShowTranslation(false);
        setShowHint(false);
      } else {
        // Export score to results page (existing functionality assumed)
        window.location.href = `/results?score=${score + 10}`;
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
            Sentence: {currentSentenceIndex + 1}/{predefinedSentences.length}
          </div>
          <div className="text-base sm:text-lg font-medium mb-4">
            {currentSentence.surah}, Ayah {currentSentence.ayah}
          </div>

          {/* Sentence Display */}
          <div className="text-xl sm:text-2xl md:text-3xl font-arabic text-right mb-4 leading-relaxed">
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
              Hint: The missing word is related to wisdom.
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
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
