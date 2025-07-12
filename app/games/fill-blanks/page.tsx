"use client"

import type React from "react"
import Head from 'next/head';
import { useRouter } from 'next/navigation';

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

// Function to shuffle an array
const shuffleArray = (array: any[]): any[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

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
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'حَكِيم']),
      },
      {
        id: 2,
        surah: 'Al-Fatiha',
        ayah: 6,
        originalText: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ',
        modifiedText: 'ٱهْدِنَا ٱلصِّرَٰطَ ٱلْ___َ',
        translation: 'Guide us to the straight path.',
        correctAnswer: 'مُسْتَقِيم',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'مُسْتَقِيم']),
      },
      {
        id: 3,
        surah: 'Al-Ikhlas',
        ayah: 2,
        originalText: 'ٱللَّهُ ٱلصَّمَدُ',
        modifiedText: 'ٱللَّهُ ٱلْ___ُ',
        translation: 'Allah, the Eternal Refuge.',
        correctAnswer: 'صَّمَد',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'صَّمَد']),
      },
      {
        id: 4,
        surah: 'Al-Kahf',
        ayah: 109,
        originalText: 'قُل لَّوْ كَانَ ٱلْبَحْرُ مِدَادًا لِّكَلِمَٰتِ رَبِّى لَنَفِدَ ٱلْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَٰتُ ٱللَّهِ',
        modifiedText: 'قُل لَّوْ كَانَ ٱلْبَحْرُ مِدَادًا لِّكَلِمَٰتِ رَبِّى لَنَفِدَ ٱلْبَحْرُ قَبْلَ أَن تَنفَدَ كَلِمَٰتُ ___ِ',
        translation: 'Say, "If the sea were ink for [writing] the words of my Lord, the sea would be exhausted before the words of my Lord were exhausted."',
        correctAnswer: 'رَبِّي',
        wordBank: shuffleArray(['رَبِّي', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'ٱللَّه']),
      },
      {
        id: 5,
        surah: 'Al-Rahman',
        ayah: 27,
        originalText: 'وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو ٱلْجَلَٰلِ وَٱلْإِكْرَامِ',
        modifiedText: 'وَيَبْقَىٰ وَجْهُ رَبِّكَ ذُو ٱلْجَلَٰلِ وَٱلْ___ِ',
        translation: 'And there will remain the Face of your Lord, Owner of Majesty and Honor.',
        correctAnswer: 'إِكْرَام',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'إِكْرَام']),
      },
    ],
  },
  {
    id: 2,
    sentences: [
      {
        id: 1,
        surah: 'Al-Asr',
        ayah: 3,
        originalText: 'إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ',
        modifiedText: 'إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَتَوَاصَوْا۟ بِٱلْ___ِ وَتَوَاصَوْا۟ بِٱلصَّبْرِ',
        translation: 'Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.',
        correctAnswer: 'حَقّ',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'حَقّ']),
      },
      {
        id: 2,
        surah: 'Al-Sharh',
        ayah: 5,
        originalText: 'فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا',
        modifiedText: 'فَإِنَّ مَعَ ٱلْ___ِ يُسْرًا',
        translation: 'For indeed, with hardship [will be] ease.',
        correctAnswer: 'عُسْر',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'عُسْر']),
      },
      {
        id: 3,
        surah: 'Al-Tin',
        ayah: 4,
        originalText: 'لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍ',
        modifiedText: 'لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ فِىٓ أَحْسَنِ ___ٍ',
        translation: 'We have certainly created man in the best of stature.',
        correctAnswer: 'تَقْوِيم',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'تَقْوِيم']),
      },
      {
        id: 4,
        surah: 'Al-Qadr',
        ayah: 1,
        originalText: 'إِنَّآ أَنزَلْنَٰهُ فِى لَيْلَةِ ٱلْقَدْرِ',
        modifiedText: 'إِنَّآ أَنزَلْنَٰهُ فِى لَيْلَةِ ٱلْ___ِ',
        translation: 'Indeed, We sent it down during the Night of Decree.',
        correctAnswer: 'قَدْر',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'قَدْر']),
      },
      {
        id: 5,
        surah: 'Al-Nas',
        ayah: 1,
        originalText: 'قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ',
        modifiedText: 'قُلْ أَعُوذُ بِرَبِّ ٱلْ___ِ',
        translation: 'Say, "I seek refuge in the Lord of mankind."',
        correctAnswer: 'نَّاس',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'نَّاس']),
      },
    ],
  },
  {
    id: 3,
    sentences: [
      {
        id: 1,
        surah: 'Al-Falaq',
        ayah: 1,
        originalText: 'قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ',
        modifiedText: 'قُلْ أَعُوذُ بِرَبِّ ٱلْ___ِ',
        translation: 'Say, "I seek refuge in the Lord of daybreak."',
        correctAnswer: 'فَلَق',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'فَلَق']),
      },
      {
        id: 2,
        surah: 'Al-Ikhlas',
        ayah: 3,
        originalText: 'لَمْ يَلِدْ وَلَمْ يُولَدْ',
        modifiedText: 'لَمْ يَلِدْ وَلَمْ ___',
        translation: 'He neither begets nor is born.',
        correctAnswer: 'يُولَد',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'يُولَد']),
      },
      {
        id: 3,
        surah: 'Al-Nasr',
        ayah: 1,
        originalText: 'إِذَا جَاءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ',
        modifiedText: 'إِذَا جَاءَ نَصْرُ ___ وَٱلْفَتْحُ',
        translation: 'When the victory of Allah and conquest comes.',
        correctAnswer: 'ٱللَّه',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'ٱللَّه']),
      },
      {
        id: 4,
        surah: 'Al-Kafirun',
        ayah: 2,
        originalText: 'لَا أَعْبُدُ مَا تَعْبُدُونَ',
        modifiedText: 'لَا أَعْبُدُ مَا ___',
        translation: 'I do not worship what you worship.',
        correctAnswer: 'تَعْبُدُون',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'تَعْبُدُون']),
      },
      {
        id: 5,
        surah: 'Al-Masad',
        ayah: 1,
        originalText: 'تَبَّتْ يَدَآ أَبِى لَهَبٍ وَتَبَّ',
        modifiedText: 'تَبَّتْ يَدَآ أَبِى لَهَبٍ ___',
        translation: 'Perish the hands of Abu Lahab, and perish he!',
        correctAnswer: 'وَتَبَّ',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'وَتَبَّ']),
      },
    ],
  },
  {
    id: 4,
    sentences: [
      {
        id: 1,
        surah: 'Al-Fil',
        ayah: 1,
        originalText: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ ٱلْفِيلِ',
        modifiedText: 'أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ ___',
        translation: 'Have you not seen how your Lord dealt with the companions of the elephant?',
        correctAnswer: 'ٱلْفِيل',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'ٱلْفِيل']),
      },
      {
        id: 2,
        surah: 'Al-Quraish',
        ayah: 1,
        originalText: 'لِإِيلَٰفِ قُرَيْشٍ',
        modifiedText: 'لِإِيلَٰفِ ___',
        translation: 'For the accustomed security of the Quraysh.',
        correctAnswer: 'قُرَيْشٍ',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'قُرَيْشٍ']),
      },
      {
        id: 3,
        surah: 'Al-Maun',
        ayah: 1,
        originalText: 'أَرَأَيْتَ ٱلَّذِى يُكَذِّبُ بِٱلدِّينِ',
        modifiedText: 'أَرَأَيْتَ ٱلَّذِى يُكَذِّبُ ___',
        translation: 'Have you seen the one who denies the religion?',
        correctAnswer: 'بِٱلدِّين',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'بِٱلدِّين']),
      },
      {
        id: 4,
        surah: 'Al-Kawthar',
        ayah: 1,
        originalText: 'إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ',
        modifiedText: 'إِنَّآ أَعْطَيْنَٰكَ ___',
        translation: 'Indeed, We have granted you, [O Muhammad], the abundant good.',
        correctAnswer: 'ٱلْكَوْثَر',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'ٱلْكَوْثَر']),
      },
      {
        id: 5,
        surah: 'Al-Kafirun',
        ayah: 6,
        originalText: 'لَكُمْ دِينُكُمْ وَلِىَ دِينِ',
        modifiedText: 'لَكُمْ دِينُكُمْ وَلِىَ ___',
        translation: 'For you is your religion, and for me is my religion.',
        correctAnswer: 'دِين',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'دِين']),
      },
    ],
  },
  {
    id: 5,
    sentences: [
      {
        id: 1,
        surah: 'Al-Ihlas',
        ayah: 4,
        originalText: 'وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ',
        modifiedText: 'وَلَمْ يَكُن لَّهُۥ كُفُوًا ___',
        translation: 'And there is none comparable to Him.',
        correctAnswer: 'أَحَد',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'أَحَد']),
      },
      {
        id: 2,
        surah: 'Al-Falaq',
        ayah: 2,
        originalText: 'مِن شَرِّ مَا خَلَقَ',
        modifiedText: 'مِن شَرِّ ___',
        translation: 'From the evil of what He created.',
        correctAnswer: 'مَا خَلَق',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'مَا خَلَق']),
      },
      {
        id: 3,
        surah: 'Al-Nas',
        ayah: 3,
        originalText: 'مَلِكِ ٱلنَّاسِ',
        modifiedText: '___ ٱلنَّاسِ',
        translation: 'Sovereign of mankind.',
        correctAnswer: 'مَلِك',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'مَلِك']),
      },
      {
        id: 4,
        surah: 'Al-Fatiha',
        ayah: 4,
        originalText: 'مَالِكِ يَوْمِ ٱلدِّينِ',
        modifiedText: '___ يَوْمِ ٱلدِّينِ',
        translation: 'Master of the Day of Judgment.',
        correctAnswer: 'مَالِك',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'مَالِك']),
      },
      {
        id: 5,
        surah: 'Al-Baqarah',
        ayah: 255,
        originalText: 'ٱلَّذِى لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ',
        modifiedText: 'ٱلَّذِى لَا تَأْخُذُهُۥ ___ وَلَا نَوْمٌ',
        translation: 'He who does not tire or sleep.',
        correctAnswer: 'سِنَة',
        wordBank: shuffleArray(['مَلَك', 'الوكيل', 'الهادي', 'نَبِيّ', 'رَحِيم', 'القوي', 'العظيم', 'رَسُول', 'سِنَة']),
      },
    ],
  },
  {
    id: 6,
    sentences: [
      {
        id: 1,
        surah: "Al-Asr",
        ayah: 1,
        originalText: "وَالْعَصْرِ",
        modifiedText: "وَالْ____",
        translation: "By time,",
        correctAnswer: "عَصْرِ",
        wordBank: ["عَصْرِ", "لَيْلِ", "فَجْرِ", "شَمْسِ", "قَمَرِ", "رَبِيعِ", "صَيْفِ", "شِتَاءِ", "بَحْرِ"],
      },
      {
        id: 2,
        surah: "Al-Asr",
        ayah: 2,
        originalText: "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
        modifiedText: "إِنَّ الْإِنسَانَ لَفِي ____",
        translation: "Indeed, mankind is in loss,",
        correctAnswer: "خُسْرٍ",
        wordBank: ["خُسْرٍ", "نِعْمَةٍ", "رَاحَةٍ", "فَوْزٍ", "سَعَادَةٍ", "قُوَّةٍ", "عِزٍّ", "رِفْعَةٍ", "ثَرَاءٍ"],
      },
      {
        id: 3,
        surah: "Al-Asr",
        ayah: 3,
        originalText: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
        modifiedText: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِ____",
        translation: "Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.",
        correctAnswer: "الصَّبْرِ",
        wordBank: ["الصَّبْرِ", "الْخَيْرِ", "الْحِكْمَةِ", "الْإِحْسَانِ", "الْعَدْلِ", "الرَّحْمَةِ", "الْوَفَاءِ", "الْأَمَلِ", "الْقُوَّةِ"],
      },
      {
        id: 4,
        surah: "Al-Fil",
        ayah: 1,
        originalText: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ الْفِيلِ",
        modifiedText: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَابِ ____",
        translation: "Have you not considered, [O Muhammad], how your Lord dealt with the companions of the elephant?",
        correctAnswer: "الْفِيلِ",
        wordBank: ["الْفِيلِ", "الْخَيْلِ", "النَّارِ", "الْبَحْرِ", "الرِّيحِ", "الْجِبَالِ", "الْأَنْهَارِ", "الْغَيْمِ", "الطُّيُورِ"],
      },
      {
        id: 5,
        surah: "Al-Nasr",
        ayah: 1,
        originalText: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
        modifiedText: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْ____",
        translation: "When the victory of Allah has come and the conquest,",
        correctAnswer: "الْفَتْحُ",
        wordBank: ["الْفَتْحُ", "النَّصْرُ", "الْعِلْمُ", "الرِّزْقُ", "الْهُدَى", "الْعَفْوُ", "الْمَغْفِرَةُ", "السَّلَامُ", "الْبَرَكَةُ"],
      },
    ],
  },
  {
    id: 7,
    sentences: [
      {
        id: 1,
        surah: "Al-Falaq",
        ayah: 1,
        originalText: "قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ",
        modifiedText: "قُلْ أَعُوذُ بِرَبِّ ____",
        translation: "Say, 'I seek refuge in the Lord of daybreak'",
        correctAnswer: "الْفَلَقِ",
        wordBank: ["الْفَلَقِ", "النَّاسِ", "الْخَلْقِ", "الْمَلِكِ", "الرَّحْمَنِ", "الْقَدِيرِ", "الْعَلِيمِ", "الْحَكِيمِ", "الْجَبَّارِ"],
      },
      {
        id: 2,
        surah: "Al-Falaq",
        ayah: 2,
        originalText: "مِن شَرِّ مَا خَلَقَ",
        modifiedText: "مِن شَرِّ مَا ____",
        translation: "From the evil of that which He created",
        correctAnswer: "خَلَقَ",
        wordBank: ["خَلَقَ", "رَزَقَ", "سَمِعَ", "عَلِمَ", "أَرْسَلَ", "هَدَى", "عَفَا", "غَفَرَ", "أَنْعَمَ"],
      },
      {
        id: 3,
        surah: "Al-Nas",
        ayah: 1,
        originalText: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ",
        modifiedText: "قُلْ أَعُوذُ بِرَبِّ ____",
        translation: "Say, 'I seek refuge in the Lord of mankind,'",
        correctAnswer: "النَّاسِ",
        wordBank: ["النَّاسِ", "الْكَوْنِ", "الْجِنِّ", "الشَّيْطَانِ", "الْمَلَائِكَةِ", "الْأَنْبِيَاءِ", "الْعَرْشِ", "الْكُرْسِيِّ", "السَّمَاءِ"],
      },
      {
        id: 4,
        surah: "Al-Nas",
        ayah: 2,
        originalText: "مَلِكِ النَّاسِ",
        modifiedText: "مَلِكِ ____",
        translation: "The Sovereign of mankind,",
        correctAnswer: "النَّاسِ",
        wordBank: ["النَّاسِ", "الْإِنْسِ", "الْجِنِّ", "الْمُلْكِ", "السَّمَاوَاتِ", "الْأَرْضِ", "الْجَنَّةِ", "النَّارِ", "الْقُدْسِ"],
      },
      {
        id: 5,
        surah: "Al-Nas",
        ayah: 3,
        originalText: "إِلَٰهِ النَّاسِ",
        modifiedText: "إِلَٰهِ ____",
        translation: "The God of mankind,",
        correctAnswer: "النَّاسِ",
        wordBank: ["النَّاسِ", "الْعَالَمِينَ", "الْخَلْقِ", "الْكَوْنِ", "الْأَرْضِ", "السَّمَاءِ", "الْجِبَالِ", "البَحَارِ", "النُّجُومِ"],
      },
    ],
  },
  {
    id: 8,
    sentences: [
      {
        id: 1,
        surah: "Al-Fatihah",
        ayah: 6,
        originalText: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
        modifiedText: "اهْدِنَا الصِّرَاطَ ____",
        translation: "Guide us to the straight path—",
        correctAnswer: "الْمُسْتَقِيمَ",
        wordBank: ["الْمُسْتَقِيمَ", "الْقَوِيمَ", "الْهَدَى", "الْمُبِينِ", "النُّورِ", "الْفَضْلِ", "الرَّحْمَةِ", "الْعِزَّةِ", "الْكَمَالِ"],
      },
      {
        id: 2,
        surah: "Al-Fatihah",
        ayah: 7,
        originalText: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        modifiedText: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا ____",
        translation: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
        correctAnswer: "الضَّالِّينَ",
        wordBank: ["الضَّالِّينَ", "الْفَاسِقِينَ", "الْمُنَافِقِينَ", "الْكَافِرِينَ", "الْمُتَقِينَ", "الصِّدِّيقِينَ", "الشُّهَدَاءِ", "الصَّالِحِينَ", "الْمُؤْمِنِينَ"],
      },
      {
        id: 3,
        surah: "Al-Baqarah",
        ayah: 255,
        originalText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ",
        modifiedText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا ____ ۚ",
        translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither slumber nor sleep overtakes Him.",
        correctAnswer: "نَوْمٌ",
        wordBank: ["نَوْمٌ", "غَفْلَةٌ", "نِسْيَانٌ", "إِرْهَاقٌ", "ضَعْفٌ", "حَاجَةٌ", "عَجْزٌ", "تَعْبٌ", "هَمٌّ"],
      },
      {
        id: 4,
        surah: "Al-Baqarah",
        ayah: 255,
        originalText: "لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ",
        modifiedText: "لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِ____ ۚ",
        translation: "To Him belongs whatever is in the heavens and whatever is on the earth. Who is there that can intercede with Him except by His permission?",
        correctAnswer: "إِذْنِهِ",
        wordBank: ["إِذْنِهِ", "عِلْمِهِ", "قُدْرَتِهِ", "حِكْمَتِهِ", "رَحْمَتِهِ", "عَدْلِهِ", "سُلْطَانِهِ", "مَجْدِهِ", "نُورِهِ"],
      },
      {
        id: 5,
        surah: "Al-Baqarah",
        ayah: 255,
        originalText: "وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ",
        modifiedText: "وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ ____ السَّمَاوَاتِ وَالْأَرْضَ ۖ",
        translation: "And they encompass not a thing of His knowledge except for what He wills. His Kursi (Throne) extends over the heavens and the earth.",
        correctAnswer: "كُرْسِيُّهُ",
        wordBank: ["كُرْسِيُّهُ", "عَرْشُهُ", "مُلْكُهُ", "جَنَّتُهُ", "نُورُهُ", "قُدْسُهُ", "عَزَمَتُهُ", "رَحْمَتُهُ", "حِكْمَتُهُ"],
      },
    ],
  },
  {
    id: 9,
    sentences: [
      {
        id: 1,
        surah: "Al-Asr",
        ayah: 2,
        originalText: "إِنَّ الْإِنسَانَ لَفِي خُسْرٍ",
        modifiedText: "إِنَّ الْإِنسَانَ لَفِي ____",
        translation: "Indeed, mankind is in loss,",
        correctAnswer: "خُسْرٍ",
        wordBank: ["خُسْرٍ", "نِعْمَةٍ", "رَاحَةٍ", "فَوْزٍ", "سَعَادَةٍ", "قُوَّةٍ", "عِزٍّ", "رِفْعَةٍ", "ثَرَاءٍ"],
      },
      {
        id: 2,
        surah: "Al-Asr",
        ayah: 3,
        originalText: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ",
        modifiedText: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِ____",
        translation: "Except for those who have believed and done righteous deeds and advised each other to truth and advised each other to patience.",
        correctAnswer: "الصَّبْرِ",
        wordBank: ["الصَّبْرِ", "الْخَيْرِ", "الْحِكْمَةِ", "الْإِحْسَانِ", "الْعَدْلِ", "الرَّحْمَةِ", "الْوَفَاءِ", "الْأَمَلِ", "الْقُوَّةِ"],
      },
      {
        id: 3,
        surah: "Al-Nas",
        ayah: 2,
        originalText: "مَلِكِ النَّاسِ",
        modifiedText: "مَلِكِ ____",
        translation: "The Sovereign of mankind,",
        correctAnswer: "النَّاسِ",
        wordBank: ["النَّاسِ", "الْإِنْسِ", "الْجِنِّ", "الْمُلْكِ", "السَّمَاوَاتِ", "الْأَرْضِ", "الْجَنَّةِ", "النَّارِ", "الْقُدْسِ"],
      },
      {
        id: 4,
        surah: "Al-Nas",
        ayah: 3,
        originalText: "إِلَٰهِ النَّاسِ",
        modifiedText: "إِلَٰهِ ____",
        translation: "The God of mankind,",
        correctAnswer: "النَّاسِ",
        wordBank: ["النَّاسِ", "الْعَالَمِينَ", "الْخَلْقِ", "الْكَوْنِ", "الْأَرْضِ", "السَّمَاءِ", "الْجِبَالِ", "البَحَارِ", "النُّجُومِ"],
      },
      {
        id: 5,
        surah: "Al-Fatihah",
        ayah: 7,
        originalText: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ",
        modifiedText: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا ____",
        translation: "The path of those upon whom You have bestowed favor, not of those who have evoked [Your] anger or of those who are astray.",
        correctAnswer: "الضَّالِّينَ",
        wordBank: ["الضَّالِّينَ", "الْفَاسِقِينَ", "الْمُنَافِقِينَ", "الْكَافِرِينَ", "الْمُتَقِينَ", "الصِّدِّيقِينَ", "الشُّهَدَاءِ", "الصَّالِحِينَ", "الْمُؤْمِنِينَ"],
      },
    ],
  },
  {
    id: 10,
    sentences: [
      {
        id: 1,
        surah: "Al-Baqarah",
        ayah: 255,
        originalText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ ۚ",
        modifiedText: "اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ ۚ لَا تَأْخُذُهُ سِنَةٌ وَلَا ____ ۚ",
        translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of [all] existence. Neither slumber nor sleep overtakes Him.",
        correctAnswer: "نَوْمٌ",
        wordBank: ["نَوْمٌ", "غَفْلَةٌ", "نِسْيَانٌ", "إِرْهَاقٌ", "ضَعْفٌ", "حَاجَةٌ", "عَجْزٌ", "تَعْبٌ", "هَمٌّ"],
      },
      {
        id: 2,
        surah: "Al-Baqarah",
        ayah: 255,
        originalText: "لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِإِذْنِهِ ۚ",
        modifiedText: "لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ ۗ مَن ذَا الَّذِي يَشْفَعُ عِندَهُ إِلَّا بِ____ ۚ",
        translation: "To Him belongs whatever is in the heavens and whatever is on the earth. Who is there that can intercede with Him except by His permission?",
        correctAnswer: "إِذْنِهِ",
        wordBank: ["إِذْنِهِ", "عِلْمِهِ", "قُدْرَتِهِ", "حِكْمَتِهِ", "رَحْمَتِهِ", "عَدْلِهِ", "سُلْطَانِهِ", "مَجْدِهِ", "نُورِهِ"],
      },
      {
        id: 3,
        surah: "Al-Baqarah",
        ayah: 255,
        originalText: "وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ ۖ",
        modifiedText: "وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ ۚ وَسِعَ ____ السَّمَاوَاتِ وَالْأَرْضَ ۖ",
        translation: "And they encompass not a thing of His knowledge except for what He wills. His Kursi (Throne) extends over the heavens and the earth.",
        correctAnswer: "كُرْسِيُّهُ",
        wordBank: ["كُرْسِيُّهُ", "عَرْشُهُ", "مُلْكُهُ", "جَنَّتُهُ", "نُورُهُ", "قُدْسُهُ", "عَزَمَتُهُ", "رَحْمَتُهُ", "حِكْمَتُهُ"],
      },
      {
        id: 4,
        surah: "Al-Nasr",
        ayah: 1,
        originalText: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ",
        modifiedText: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْ____",
        translation: "When the victory of Allah has come and the conquest,",
        correctAnswer: "الْفَتْحُ",
        wordBank: ["الْفَتْحُ", "النَّصْرُ", "الْعِلْمُ", "الرِّزْقُ", "الْهُدَى", "الْعَفْوُ", "الْمَغْفِرَةُ", "السَّلَامُ", "الْبَرَكَةُ"],
      },
      {
        id: 5,
        surah: "Al-Asr",
        ayah: 1,
        originalText: "وَالْعَصْرِ",
        modifiedText: "وَالْ____",
        translation: "By time,",
        correctAnswer: "عَصْرِ",
        wordBank: ["عَصْرِ", "لَيْلِ", "فَجْرِ", "شَمْسِ", "قَمَرِ", "رَبِيعِ", "صَيْفِ", "شِتَاءِ", "بَحْرِ"],
      },
    ],
  },
];

const FillInTheBlanks: React.FC = () => {
  const router = useRouter();
  const [currentSetIndex, setCurrentSetIndex] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedSetIndex = localStorage.getItem('currentSetIndex');
      return savedSetIndex ? parseInt(savedSetIndex, 10) : 0;
    }
    return 0;
  });
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [totalScore, setTotalScore] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTotalScore = localStorage.getItem('totalScore');
      return savedTotalScore ? parseInt(savedTotalScore, 10) : 0;
    }
    return 0;
  });
  const [selectedWord, setSelectedWord] = useState('');
  const [feedback, setFeedback] = useState('');
  const [showTranslation, setShowTranslation] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const setFromUrl = params.get('set');
      if (setFromUrl) {
        const setIndex = parseInt(setFromUrl, 10) - 1;
        if (setIndex >= 0 && setIndex < sentenceSets.length) {
          setCurrentSetIndex(setIndex);
          localStorage.setItem('currentSetIndex', setIndex.toString());
        }
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('currentSetIndex', currentSetIndex.toString());
    }
  }, [currentSetIndex]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('totalScore', totalScore.toString());
    }
  }, [totalScore]);

  const currentSet = sentenceSets[currentSetIndex];
  const currentSentence = currentSet.sentences[currentSentenceIndex];

  const handleWordSelect = (word: string) => {
    setSelectedWord(word);
    if (word === currentSentence.correctAnswer) {
      setScore(score + 10);
      setTotalScore(totalScore + 10);
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
        // Navigate to results page with current score and total score
        router.push(`/results?score=${score}&set=${currentSet.id}&totalScore=${totalScore}`);
        // Move to next set if available
        if (currentSetIndex < sentenceSets.length - 1) {
          setCurrentSetIndex(currentSetIndex + 1);
          setCurrentSentenceIndex(0);
          setScore(0);
          setSelectedWord('');
          setFeedback('');
          setShowTranslation(false);
          setShowHint(false);
        } else {
          // Reset to first set when all sets are completed
          setCurrentSetIndex(0);
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
              Score: {score} (Total: {totalScore})
            </div>
          </div>
          <div className="text-base sm:text-lg font-medium mb-2">
            Sentence: {currentSentenceIndex + 1}/{currentSet.sentences.length} (Set {currentSet.id})
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
                : currentSentence.correctAnswer === 'إِكْرَام'
                ? 'honor'
                : currentSentence.correctAnswer === 'حَقّ'
                ? 'truth'
                : currentSentence.correctAnswer === 'عُسْر'
                ? 'hardship'
                : currentSentence.correctAnswer === 'تَقْوِيم'
                ? 'stature'
                : currentSentence.correctAnswer === 'قَدْر'
                ? 'decree'
                : currentSentence.correctAnswer === 'فَلَق'
                ? 'daybreak'
                : currentSentence.correctAnswer === 'يُولَد'
                ? 'birth'
                : currentSentence.correctAnswer === 'وَتَبَّ'
                ? 'perish'
                : currentSentence.correctAnswer === 'ٱلْفِيل'
                ? 'elephant'
                : currentSentence.correctAnswer === 'قُرَيْشٍ'
                ? 'Quraysh'
                : currentSentence.correctAnswer === 'بِٱلدِّين'
                ? 'religion'
                : currentSentence.correctAnswer === 'ٱلْكَوْثَر'
                ? 'abundant good'
                : currentSentence.correctAnswer === 'دِين'
                ? 'religion'
                : currentSentence.correctAnswer === 'أَحَد'
                ? 'one'
                : currentSentence.correctAnswer === 'مَا خَلَق'
                ? 'what He created'
                : currentSentence.correctAnswer === 'مَلِك'
                ? 'sovereign'
                : currentSentence.correctAnswer === 'مَالِك'
                ? 'master'
                : currentSentence.correctAnswer === 'سِنَة'
                ? 'tiredness'
                : currentSentence.correctAnswer === 'رَبِّي'
                ? 'my Lord'
                : currentSentence.correctAnswer === 'نَّاس'
                ? 'mankind'
                : currentSentence.correctAnswer === 'عَصْرِ'
                ? 'time'
                : currentSentence.correctAnswer === 'خُسْرٍ'
                ? 'loss'
                : currentSentence.correctAnswer === 'الصَّبْرِ'
                ? 'patience'
                : currentSentence.correctAnswer === 'الْفَتْحُ'
                ? 'conquest'
                : currentSentence.correctAnswer === 'خَلَقَ'
                ? 'created'
                : currentSentence.correctAnswer === 'النَّاسِ'
                ? 'mankind'
                : currentSentence.correctAnswer === 'الْمُسْتَقِيمَ'
                ? 'straight'
                : currentSentence.correctAnswer === 'الضَّالِّينَ'
                ? 'astray'
                : currentSentence.correctAnswer === 'نَوْمٌ'
                ? 'sleep'
                : currentSentence.correctAnswer === 'إِذْنِهِ'
                ? 'permission'
                : currentSentence.correctAnswer === 'كُرْسِيُّهُ'
                ? 'throne'
                : 'mankind'}
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
