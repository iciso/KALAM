"use client";

import { useState } from "react";
import Link from "next/link";

// Interfaces
interface Dua {
  arabic: string;
  english: string;
  prophet: string;
  reference: string;
}

interface GameSet {
  id: number;
  duas: Dua[];
}

// Game data: 8 sets, 5 duas each
const gameSets: GameSet[] = [
  {
    id: 1,
    duas: [
      {
        arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا",
        english: "Our Lord! Forgive us our sins and anything we may have done that transgressed our duty.",
        prophet: "Adam",
        reference: "Quran 7:23",
      },
      {
        arabic: "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
        english: "My Lord! Grant me authority and join me with the righteous.",
        prophet: "Ibrahim",
        reference: "Quran 26:83",
      },
      {
        arabic: "رَبِّ نَجِّنِي مِنَ الْقَوْمِ الظَّالِمِينَ",
        english: "My Lord! Save me from the unjust people.",
        prophet: "Musa",
        reference: "Quran 28:21",
      },
      {
        arabic: "رَبِّ إِنِّي أَعُوذُ بِكَ أَنْ أَسْأَلَكَ مَا لَيْسَ لِي بِهِ عِلْمٌ",
        english: "My Lord! I seek refuge with You from asking You for anything of which I have no knowledge.",
        prophet: "Nuh",
        reference: "Quran 11:47",
      },
      {
        arabic: "رَبَّنَا أَتْمِمْ لَنَا نُورَنَا وَاغْفِرْ لَنَا",
        english: "Our Lord! Perfect our light for us and forgive us.",
        prophet: "Muhammad",
        reference: "Quran 66:8",
      },
    ],
  },
  {
    id: 2,
    duas: [
      {
        arabic: "رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ",
        english: "Our Lord! We have wronged ourselves, and if You do not forgive us and have mercy upon us, we will surely be among the losers.",
        prophet: "Adam",
        reference: "Quran 7:23",
      },
      {
        arabic: "رَبِّ اجْعَلْ هَٰذَا الْبَلَدَ آمِنًا وَاجْنُبْنِي وَبَنِيَّ أَن نَّعْبُدَ الْأَصْنَامَ",
        english: "My Lord! Make this city secure and keep me and my sons away from worshipping idols.",
        prophet: "Ibrahim",
        reference: "Quran 14:35",
      },
      {
        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
        english: "My Lord! Expand for me my breast and ease for me my task.",
        prophet: "Musa",
        reference: "Quran 20:25-26",
      },
      {
        arabic: "رَبِّ زِدْنِي عِلْمًا",
        english: "My Lord! Increase me in knowledge.",
        prophet: "Sulaiman",
        reference: "Quran 20:114",
      },
      {
        arabic: "رَبَّنَا تَقَبَّلْ مِنَّا ۖ إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
        english: "Our Lord! Accept this from us. Indeed, You are the Hearing, the Knowing.",
        prophet: "Ibrahim",
        reference: "Quran 2:127",
      },
    ],
  },
  {
    id: 3,
    duas: [
      {
        arabic: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَن دَخَلَ بَيْتِيَ مُؤْمِنًا",
        english: "My Lord! Forgive me and my parents and whoever enters my house a believer.",
        prophet: "Nuh",
        reference: "Quran 71:28",
      },
      {
        arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً",
        english: "Our Lord! Give us in this world [that which is] good and in the Hereafter [that which is] good.",
        prophet: "Muhammad",
        reference: "Quran 2:201",
      },
      {
        arabic: "رَبِّ هَبْ لِي مِنَ الصَّالِحِينَ",
        english: "My Lord! Grant me a righteous child.",
        prophet: "Ibrahim",
        reference: "Quran 37:100",
      },
      {
        arabic: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ",
        english: "My Lord! Leave me not childless, though You are the best of inheritors.",
        prophet: "Zakariya",
        reference: "Quran 21:89",
      },
      {
        arabic: "رَبِّ اغْفِرْ لِي وَلِأَخِي وَأَدْخِلْنَا فِي رَحْمَتِكَ",
        english: "My Lord! Forgive me and my brother and admit us into Your mercy.",
        prophet: "Musa",
        reference: "Quran 7:151",
      },
    ],
  },
  {
    id: 4,
    duas: [
      {
        arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
        english: "My Lord! I am in need of whatever good You would send down to me.",
        prophet: "Musa",
        reference: "Quran 28:24",
      },
      {
        arabic: "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا وَارْحَمْنَا وَأَنتَ خَيْرُ الرَّاحِمِينَ",
        english: "Our Lord! We believe, so forgive us and have mercy upon us, and You are the best of the merciful.",
        prophet: "Muhammad",
        reference: "Quran 23:109",
      },
      {
        arabic: "رَبِّ هَبْ لِي حُكْمًا وَأَلْحِقْنِي بِالصَّالِحِينَ",
        english: "My Lord! Grant me wisdom and join me with the righteous.",
        prophet: "Ibrahim",
        reference: "Quran 26:83",
      },
      {
        arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
        english: "My Lord! Inspire me to be thankful for Your favor.",
        prophet: "Sulaiman",
        reference: "Quran 27:19",
      },
      {
        arabic: "رَبِّ اغْفِرْ لِي وَهَبْ لِي مُلْكًا لَا يَنْبَغِي لِأَحَدٍ مِنْ بَعْدِي",
        english: "My Lord! Forgive me and grant me a kingdom such as will not belong to anyone after me.",
        prophet: "Sulaiman",
        reference: "Quran 38:35",
      },
    ],
  },
  {
    id: 5,
    duas: [
      {
        arabic: "رَبَّنَا لَا تَجْعَلْنَا فِتْنَةً لِلْقَوْمِ الظَّالِمِينَ",
        english: "Our Lord! Do not make us a trial for the wrongdoing people.",
        prophet: "Musa",
        reference: "Quran 10:85",
      },
      {
        arabic: "رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ",
        english: "My Lord! I seek refuge with You from the suggestions of the evil ones.",
        prophet: "Yusuf",
        reference: "Quran 12:23",
      },
      {
        arabic: "رَبَّنَا مَا خَلَقْتَ هَٰذَا بَاطِلًا سُبْحَانَكَ",
        english: "Our Lord! You have not created this in vain. Exalted are You!",
        prophet: "Imran",
        reference: "Quran 3:191",
      },
      {
        arabic: "رَبِّ أَنْصُرْنِي عَلَى الْقَوْمِ الْمُفْسِدِينَ",
        english: "My Lord! Help me against the people who cause corruption.",
        prophet: "Nuh",
        reference: "Quran 23:26",
      },
      {
        arabic: "رَبَّنَا اغْفِرْ لَنَا وَارْحَمْنَا وَأَنْتَ خَيْرُ الرَّاحِمِينَ",
        english: "Our Lord! Grant us mercy from Yourself, and prepare for us guidance in our affair.",
        prophet: "Musa",
        reference: "Quran 18:10",
      },
    ],
  },
  {
    id: 6,
    duas: [
      {
        arabic: "رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي",
        english: "My Lord! Make me an establisher of prayer, and from my descendants.",
        prophet: "Ibrahim",
        reference: "Quran 14:40",
      },
      {
        arabic: "رَبَّنَا اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ",
        english: "Our Lord! Forgive me and my parents and the believers on the Day the account is established.",
        prophet: "Ibrahim",
        reference: "Quran 14:41",
      },
      {
        arabic: "رَبِّ نَجِّنِي وَأَهْلِي مِمَّا يَعْمَلُونَ",
        english: "My Lord! Save me and my family from what they do.",
        prophet: "Lut",
        reference: "Quran 26:169",
      },
      {
        arabic: "رَبِّ أَنْزِلْنِي مُنْزَلًا مُبَارَكًا",
        english: "My Lord! Cause me to land at a blessed landing place.",
        prophet: "Nuh",
        reference: "Quran 23:29",
      },
      {
        arabic: "رَبَّنَا آمَنَّا فَاغْفِرْ لَنَا ذُنُوبَنَا وَقِنَا عَذَابَ النَّارِ",
        english: "Our Lord! We have believed, so forgive us our sins and protect us from the punishment of the Fire.",
        prophet: "Muhammad",
        reference: "Quran 3:16",
      },
    ],
  },
  {
    id: 7,
    duas: [
      {
        arabic: "رَبِّ إِنِّي نَذَرْتُ لَكَ مَا فِي بَطْنِي مُحَرَّرًا",
        english: "My Lord! I have vowed to You what is in my womb, dedicated to Your service.",
        prophet: "Imran",
        reference: "Quran 3:35",
      },
      {
        arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
        english: "Our Lord! Do not make our hearts deviate after You have guided us.",
        prophet: "Muhammad",
        reference: "Quran 3:8",
      },
      {
        arabic: "رَبِّ هَبْ لِي مِن لَّدُنْكَ ذُرِّيَّةً طَيِّبَةً",
        english: "My Lord! Grant me from Yourself a good offspring.",
        prophet: "Zakariya",
        reference: "Quran 3:38",
      },
      {
        arabic: "رَبِّ اجْعَلْ هَٰذَا بَلَدًا آمِنًا وَارْزُقْ أَهْلَهُ مِنَ الثَّمَرَاتِ",
        english: "My Lord! Make this land secure and provide fruits for its people.",
        prophet: "Ibrahim",
        reference: "Quran 2:126",
      },
      {
        arabic: "رَبِّ أَنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
        english: "My Lord! Relieve the distress; You are the Most Merciful of the merciful.",
        prophet: "Ayyub",
        reference: "Quran 21:83",
      },
    ],
  },
  {
    id: 8,
    duas: [
      {
        arabic: "رَبِّ لَا تَذَرْنِي فَرْدًا وَأَنتَ خَيْرُ الْوَارِثِينَ",
        english: "My Lord! Do not leave me alone, and You are the best of inheritors.",
        prophet: "Zakariya",
        reference: "Quran 21:89",
      },
      {
        arabic: "رَبَّنَا هَبْ لَنَا مِن لَّدُنْكَ رَحْمَةً وَهَيِّئْ لَنَا مِنْ أَمْرِنَا رَشَدًا",
        english: "Our Lord! Grant us from Yourself mercy and prepare for us guidance in our affair.",
        prophet: "Musa",
        reference: "Quran 18:10",
      },
      {
        arabic: "رَبِّ اغْفِرْ وَارْحَمْ وَأَنتَ خَيْرُ الرَّاحِمِينَ",
        english: "My Lord! Forgive and have mercy, for You are the best of those who show mercy.",
        prophet: "Muhammad",
        reference: "Quran 23:118",
      },
      {
        arabic: "رَبِّ ادْفَعْ عَنَّا عَذَابَ جَهَنَّمَ ۖ إِنَّ عَذَابَهَا كَانَ غَرَامًا",
        english: "Our Lord! Avert from us the punishment of Hell, for its punishment is ever persistent.",
        prophet: "Ibrahim",
        reference: "Quran 25:65",
      },
      {
        arabic: "رَبِّ أَنْزِلْنِي مُنْزَلًا مُبَارَكًا وَأَنتَ خَيْرُ الْمُنْزِلِينَ",
        english: "My Lord! Enable me to disembark with blessings, for You are the best to enable to disembark.",
        prophet: "Nuh",
        reference: "Quran 23:29",
      },
    ],
  },
];

// All unique prophets for selection (more than 5 per set)
const allProphets: string[] = [
  "Adam",
  "Nuh",
  "Ibrahim",
  "Musa",
  "Isa",
  "Muhammad",
  "Sulaiman",
  "Zakariya",
  "Yusuf",
  "Imran",
  "Ayyub",
  "Lut",
  "Luai",
];

const dua-match: React.FC = () => {
  const [currentSetId, setCurrentSetId] = useState<number>(1);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  // Current game set
  const currentSet = gameSets.find((set) => set.id === currentSetId);
  const isSubmitEnabled = Object.keys(selectedAnswers).length === currentSet!.duas.length;

  // Handle prophet selection
  const handleProphetSelect = (duaIndex: number, prophet: string) => {
    setSelectedAnswers((prev) => ({ ...prev, [duaIndex]: prophet }));
  };

  // Handle submit
  const handleSubmit = (): void => {
    let correctCount = 0;
    currentSet!.duas.forEach((dua, index) => {
      if (selectedAnswers[index] === dua.prophet) {
        correctCount++;
      }
    });
    setScore(correctCount);
    setShowResults(true);
  };

  // Reset for new game
  const resetGame = (newSetId: number): void => {
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
    setCurrentSetId(newSetId);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Dua Match</h1>
      {showResults ? (
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Results: {score} / {currentSet!.duas.length}</h2>
          <ul className="space-y-4 mb-6">
            {currentSet!.duas.map((dua, index) => (
              <li key={index} className="text-left">
                <p className="text-right text-xl font-arabic" dir="rtl">{dua.arabic}</p>
                <p><strong>Dua:</strong> {dua.english} ({dua.reference})</p>
                <p><strong>Correct Prophet:</strong> {dua.prophet}</p>
                <p>
                  <strong>Your Answer:</strong> {selectedAnswers[index]}
                  {selectedAnswers[index] === dua.prophet ? (
                    <span className="text-green-500"> ✓</span>
                  ) : (
                    <span className="text-red-500"> ✗</span>
                  )}
                </p>
              </li>
            ))}
          </ul>
          <div className="space-x-4">
            <Link href="/games">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Home
              </button>
            </Link>
            {currentSetId < gameSets.length && (
              <button
                onClick={() => resetGame(currentSetId + 1)}
                className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              >
                Next Set
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="w-full max-w-4xl">
          <h2 className="text-2xl font-semibold mb-4">Set {currentSetId}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Duas</h3>
              <ul className="space-y-4">
                {currentSet!.duas.map((dua, index) => (
                  <li key={index} className="p-4 bg-white rounded shadow">
                    <p className="text-right text-xl font-arabic" dir="rtl">{dua.arabic}</p>
                    <p>{dua.english} ({dua.reference})</p>
                    <p className="mt-2">
                      <strong>Selected:</strong> {selectedAnswers[index] || "None"}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Prophets</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {allProphets.map((prophet, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const firstEmptyIndex = Object.keys(selectedAnswers).length;
                      if (firstEmptyIndex < currentSet!.duas.length) {
                        handleProphetSelect(firstEmptyIndex, prophet);
                      }
                    }}
                    className="px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                    disabled={Object.values(selectedAnswers).includes(prophet)}
                  >
                    {prophet}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            onClick={handleSubmit}
            disabled={!isSubmitEnabled}
            className={`px-4 py-2 mt-6 rounded ${isSubmitEnabled ? "bg-blue-500 text-white hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"}`}
          >
            Submit
          </button>
        </div>
      )}
      <p className="mt-8 text-sm text-gray-600">
        A KALAM game to learn the Quranic duas. Visit{" "}
        <Link href="https://v0-kalam.vercel.app" className="text-blue-600 underline">
          KALAM
        </Link>
      </p>
    </div>
  );
};

export default dua-match;
