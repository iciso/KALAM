"use client";

import React, { useState, useEffect, useCallback } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const ItemTypes = {
  WORD: "word",
};

// Full Surah An-Naba (78) – Hafs ‘an ‘Asim – word-split
// Ranges: 1-10, 11-20, 21-30, 31-40
const SURAH_AN_NABA: Record<string, string[]> = {
  "1-10": [
    // 1
    "عَمَّ", "يَتَسَآءَلُونَ",
    // 2
    "عَنِ", "ٱلنَّبَإِ", "ٱلْعَظِيمِ",
    // 3
    "ٱلَّذِى", "هُمْ", "فِيهِ", "مُخْتَلِفُونَ",
    // 4
    "كَلَّا", "سَيَعْلَمُونَ",
    // 5
    "ثُمَّ", "كَلَّا", "سَيَعْلَمُونَ",
    // 6
    "أَلَمْ", "نَجْعَلِ", "ٱلْأَرْضَ", "مِهَـٰدًۭا",
    // 7
    "وَٱلْجِبَالَ", "أَوْتَادًۭا",
    // 8
    "وَخَلَقْنَـٰكُمْ", "أَزْوَٰجًۭا",
    // 9
    "وَجَعَلْنَا", "نَوْمَكُمْ", "سُبَاتًۭا",
    // 10
    "وَجَعَلْنَا", "ٱلَّيْلَ", "لِبَاسًۭا",
  ],

  "11-20": [
    // 11
    "وَجَعَلْنَا", "ٱلنَّهَارَ", "مَعَاشًۭا",
    // 12
    "وَبَنَيْنَا", "فَوْقَكُمْ", "سَبْعًۭا", "شِدَادًۭا",
    // 13
    "وَجَعَلْنَا", "سِرَاجًۭا", "وَهَّاجًۭا",
    // 14
    "وَأَنزَلْنَا", "مِنَ", "ٱلْمُعْصِرَٰتِ", "مَآءًۭ", "ثَجَّاجًۭا",
    // 15
    "لِّنُخْرِجَ", "بِهِۦ", "حَبًّۭا", "وَنَبَاتًۭا",
    // 16
    "وَجَنَّـٰتٍ", "أَلْفَافًا",
    // 17
    "إِنَّ", "يَوْمَ", "ٱلْفَصْلِ", "كَانَ", "مِيقَـٰتًۭا",
    // 18
    "يَوْمَ", "يُنفَخُ", "فِى", "ٱلصُّورِ", "فَتَأْتُونَ", "أَفْوَاجًۭا",
    // 19
    "وَفُتِحَتِ", "ٱلسَّمَآءُ", "فَكَانَتْ", "أَبْوَٰبًۭا",
    // 20
    "وَسُيِّرَتِ", "ٱلْجِبَالُ", "فَكَانَتْ", "سَرَابًا",
  ],

  "21-30": [
    // 21
    "إِنَّ", "جَهَنَّمَ", "كَانَتْ", "مِرْصَادًۭا",
    // 22
    "لِّلطَّـٰغِينَ", "مَـَٔابًۭا",
    // 23
    "لَّـٰبِثِينَ", "فِيهَآ", "أَحْقَابًۭا",
    // 24
    "لَّا", "يَذُوقُونَ", "فِيهَا", "بَرْدًۭا", "وَلَا", "شَرَابًا",
    // 25
    "إِلَّا", "حَمِيمًۭا", "وَغَسَّاقًۭا",
    // 26
    "جَزَآءًۭ", "وِفَاقًا",
    // 27
    "إِنَّهُمْ", "كَانُوا۟", "لَا", "يَرْجُونَ", "حِسَابًۭا",
    // 28
    "وَكَذَّبُوا۟", "بِـَٔايَـٰتِنَا", "كِذَّابًۭا",
    // 29
    "وَكُلَّ", "شَىْءٍ", "أَحْصَيْنَـٰهُ", "كِتَـٰبًۭا",
    // 30
    "فَذُوقُوا۟", "فَلَن", "نَّزِيدَكُمْ", "إِلَّا", "عَذَابًا",
  ],

  "31-40": [
    // 31
    "إِنَّ", "لِلْمُتَّقِينَ", "مَفَازًا",
    // 32
    "حَدَآئِقَ", "وَأَعْنَـٰبًۭا",
    // 33
    "وَكَوَاعِبَ", "أَتْرَابًۭا",
    // 34
    "وَكَأْسًۭا", "دِهَاقًۭا",
    // 35
    "لَّا", "يَسْمَعُونَ", "فِيهَا", "لَغْوًۭا", "وَلَا", "كِذَّٰبًۭا",
    // 36
    "جَزَآءًۭ", "مِّن", "رَّبِّكَ", "عَطَآءً", "حِسَابًۭا",
    // 37
    "رَّبِّ", "ٱلسَّمَـٰوَٰتِ", "وَٱلْأَرْضِ", "وَمَا", "بَيْنَهُمَا", "ٱلرَّحْمَـٰنِ",
    "لَا", "يَمْلِكُونَ", "مِنْهُ", "خِطَابًۭا",
    // 38
    "يَوْمَ", "يَقُومُ", "ٱلرُّوحُ", "وَٱلْمَلَـٰٓئِكَةُ", "صَفًّۭا",
    "لَّا", "يَتَكَلَّمُونَ", "إِلَّا", "مَنْ", "أَذِنَ", "لَهُ", "ٱلرَّحْمَـٰنُ", "وَقَالَ", "صَوَابًۭا",
    // 39
    "ذَٰلِكَ", "ٱلْيَوْمُ", "ٱلْحَقُّ", "فَمَن", "شَآءَ", "ٱتَّخَذَ", "إِلَىٰ", "رَبِّهِۦ", "مَـَٔابًا",
    // 40
    "إِنَّآ", "أَنذَرْنَـٰكُمْ", "عَذَابًۭا", "قَرِيبًۭا",
    "يَوْمَ", "يَنظُرُ", "ٱلْمَرْءُ", "مَا", "قَدَّمَتْ", "يَدَاهُ",
    "وَيَقُولُ", "ٱلْكَافِرُ", "يَـٰلَيْتَنِى", "كُنتُ", "تُرَٰبًۢا",
  ],
};

type RangeKey = keyof typeof SURAH_AN_NABA;

interface WordItemProps {
  id: number;
  text: string;
  index: number;
  moveWord: (from: number, to: number) => void;
}

const WordItem: React.FC<WordItemProps> = ({ id, text, index, moveWord }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.WORD,
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.WORD,
    hover: (item: { id: number; index: number }) => {
      if (item.index !== index) {
        moveWord(item.index, index);
        item.index = index;
      }
    },
  });

  return (
    <div
      ref={(node) => drag(drop(node))}
      className={`
        select-none cursor-grab active:cursor-grabbing
        bg-emerald-50 hover:bg-emerald-100
        border-2 border-emerald-300
        rounded-xl px-4 py-3
        shadow-sm hover:shadow-md
        transition-all duration-150
        ${isDragging ? "opacity-40 scale-95" : "opacity-100"}
      `}
      style={{
        fontFamily: '"Amiri", "Scheherazade New", "Noto Naskh Arabic", "Traditional Arabic", serif',
        fontSize: "clamp(1.75rem, 4.5vw, 2.75rem)", // large & responsive
        lineHeight: 1.6,
        direction: "rtl",
        minWidth: "fit-content",
      }}
    >
      {text}
    </div>
  );
};

const Game: React.FC = () => {
  const [range, setRange] = useState<RangeKey>("1-10");
  const [arrangedWords, setArrangedWords] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  const shuffle = useCallback((arr: string[]) => {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }, []);

  // Load & shuffle when range changes
  useEffect(() => {
    const words = SURAH_AN_NABA[range];
    setArrangedWords(shuffle(words));
    setFeedback("");
    setIsCorrect(false);
  }, [range, shuffle]);

  const moveWord = useCallback((fromIndex: number, toIndex: number) => {
    setArrangedWords((prev) => {
      const updated = [...prev];
      const [moved] = updated.splice(fromIndex, 1);
      updated.splice(toIndex, 0, moved);
      return updated;
    });
  }, []);

  const checkAnswer = () => {
    const correct = SURAH_AN_NABA[range];
    const isMatch = JSON.stringify(arrangedWords) === JSON.stringify(correct);

    if (isMatch) {
      setScore((s) => s + 10);
      setFeedback("صحيح! +10 نقاط 🎉");
      setIsCorrect(true);
    } else {
      setFeedback("حاول مرة أخرى");
      setIsCorrect(false);
      setTimeout(() => setFeedback(""), 1800);
    }
  };

  const nextRange = () => {
    const ranges: RangeKey[] = ["1-10", "11-20", "21-30", "31-40"];
    const currentIdx = ranges.indexOf(range);
    const nextIdx = (currentIdx + 1) % ranges.length;
    setRange(ranges[nextIdx]);
  };

  const reshuffle = () => {
    setArrangedWords(shuffle(SURAH_AN_NABA[range]));
    setFeedback("");
    setIsCorrect(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-emerald-900 mb-2">
              ترتيب كلمات سورة النبأ
            </h1>
            <p className="text-emerald-700 text-lg">
              Arranging the Words of Surah An-Naba (78)
            </p>
          </div>

          {/* Range selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {(["1-10", "11-20", "21-30", "31-40"] as RangeKey[]).map((r) => (
              <button
                key={r}
                onClick={() => setRange(r)}
                className={`
                  px-5 py-2.5 rounded-full font-semibold transition-all
                  ${
                    range === r
                      ? "bg-emerald-600 text-white shadow-lg scale-105"
                      : "bg-white text-emerald-800 border-2 border-emerald-300 hover:bg-emerald-50"
                  }
                `}
              >
                الآيات {r}
              </button>
            ))}
          </div>

          {/* Instructions */}
          <div className="text-center mb-6 text-gray-600">
            اسحب الكلمات ورتّبها بالترتيب الصحيح لآيات السورة
          </div>

          {/* Word tiles – large & readable */}
          <div
            className="
              flex flex-wrap justify-center gap-3 md:gap-4
              p-6 bg-white rounded-2xl shadow-inner
              border border-emerald-100
              min-h-[220px]
              mb-8
            "
            style={{ direction: "rtl" }}
          >
            {arrangedWords.map((word, index) => (
              <WordItem
                key={`${range}-${index}-${word}`}
                id={index}
                text={word}
                index={index}
                moveWord={moveWord}
              />
            ))}
          </div>

          {/* Controls */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button
              onClick={checkAnswer}
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-xl shadow-md transition"
            >
              تحقق من الإجابة
            </button>

            <button
              onClick={reshuffle}
              className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-xl shadow-md transition"
            >
              إعادة خلط
            </button>

            {isCorrect && (
              <button
                onClick={nextRange}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl shadow-md transition"
              >
                المجموعة التالية →
              </button>
            )}
          </div>

          {/* Score & Feedback */}
          <div className="text-center space-y-2">
            <div className="text-xl font-semibold text-emerald-800">
              النقاط: {score}
            </div>
            {feedback && (
              <div
                className={`text-2xl font-bold ${
                  isCorrect ? "text-green-600" : "text-red-500"
                }`}
              >
                {feedback}
              </div>
            )}
          </div>

          {/* Footer note */}
          <p className="text-center text-sm text-gray-500 mt-10">
            سورة النبأ • ٤٠ آية • الجزء ٣٠
          </p>
        </div>
      </div>
    </DndProvider>
  );
};

export default Game;
