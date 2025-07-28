"use client";

import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  AYAT: 'ayat'
};

const ayatData = {
  easy: [
    { id: 1, passage: ["بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "ٱلْحَمْدُ لِلَّهِ رَبِّ ٱلْعَٰلَمِينَ", "ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "مَٰلِكِ يَوْمِ ٱلدِّينِ"] },
    { id: 2, passage: ["إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ", "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ", "غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ"] },
    { id: 3, passage: ["وَلَا ٱلضَّآلِّينَ", "آمَنَ ٱلرَّسُولُ بِمَا أُنزِلَ إِلَيْهِ", "مِن رَّبِّهِ وَٱلْمُؤْمِنُونَ", "كُلٌّ آمَنَ بِٱللَّهِ"] },
    { id: 4, passage: ["وَمَلَٰٓئِكَتِهِ وَكُتُبِهِ", "وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِ", "وَآمَنَّا وَعَلَيْكَ تَوَكَّلْنَا", "فَٱهْدِنَا إِلَىٰ ٱلصِّرَٰطِ ٱلْمُسْتَقِيمِ"] },
    { id: 5, passage: ["ٱلْحَمْدُ لِلَّهِ ٱلَّذِي لَمْ يَتَّخِذْ وَلَدًا", "وَلَمْ يَكُن لَّهُۥ شَرِيكٌ فِي ٱلْمُلْكِ", "وَلَمْ يَكُن لَّهُۥ وَلِيٌّ مِّنَ ٱلذُّلِّ", "وَكَبَّرَهُۥ تَكْبِيرًا"] }
  ],
  medium: [
    { id: 6, passage: ["وَقَالَ رَبُّكُمُ ٱدْعُونِيٓ أَسْتَجِبْ لَكُمْ", "إِنَّ ٱلَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِي", "سَيَدْخُلُونَ جَهَنَّمَ دَٰخِرِينَ", "فَمَنْ أَظْلَمُ مِمَّنِ ٱفْتَرَىٰ عَلَى ٱللَّهِ"] },
    { id: 7, passage: ["ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ", "ٱلْحَيُّ ٱلْقَيُّومُ", "لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ", "لَهُۥ مَا فِي ٱلسَّمَٰوَٰتِ وَمَا فِي ٱلْأَرْضِ"] },
    { id: 8, passage: ["مَن ذَا ٱلَّذِي يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِ", "يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ", "وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ", "إِلَّا بِمَا شَآءَ"] },
    { id: 9, passage: ["وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ", "وَلَا يَأُودُهُۥ حِفْظُهُمَا", "وَهُوَ ٱلْعَلِيُّ ٱلْعَظِيمُ", "قُلْ هُوَ ٱللَّهُ أَحَدٌ"] },
    { id: 10, passage: ["ٱللَّهُ ٱلصَّمَدُ", "لَمْ يَلِدْ وَلَمْ يُولَدْ", "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ", "فَلَمْ يَكُن لَّهُۥ"] }
  ],
  difficult: [
    { id: 11, passage: ["وَٱلشَّمْسِ وَضُحَىٰهَا", "وَٱلْقَمَرِ إِذَا تَلَىٰهَا", "وَٱلنَّهَارِ إِذَا جَلَّىٰهَا", "وَٱلَّيْلِ إِذَا يَغْشَىٰهَا"] },
    { id: 12, passage: ["قَدْ أَفْلَحَ مَن تَزَكَّىٰ", "وَذَكَرَ ٱسْمَ رَبِّهِ فَصَلَّىٰ", "بَلْ تُؤْثِرُونَ ٱلْحَيَاةَ ٱلدُّنْيَا", "وَٱلْءَاخِرَةُ خَيْرٌ وَأَبْقَىٰ"] },
    { id: 13, passage: ["إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا", "فَإِذَا فَرَغْتَ فَٱنصَبْ", "وَإِلَىٰ رَبِّكَ فَٱرْغَبْ", "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا"] },
    { id: 14, passage: ["قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ", "مِن شَرِّ مَا خَلَقَ", "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", "وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِي ٱلْعُقَدِ"] },
    { id: 15, passage: ["قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ", "مَلِكِ ٱلنَّاسِ", "إِلَٰهِ ٱلنَّاسِ", "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ"] },
  ],
};

const AyatItem = ({ id, text, index, moveAyat }) => {
  const [, drag] = useDrag({
    type: ItemTypes.AYAT,
    item: { id, index }
  });

  const [, drop] = useDrop({
    accept: ItemTypes.AYAT,
    hover: (item) => {
      if (item.index !== index) {
        moveAyat(item.index, index);
        item.index = index;
      }
    }
  });

  return (
    <div ref={(node) => drag(drop(node))} className="ayat-item bg-gray-100 p-2 mb-2 rounded cursor-move">
      {text}
    </div>
  );
};

const Game = () => {
  const [level, setLevel] = useState('easy');
  const [currentPassageId, setCurrentPassageId] = useState(1);
  const [arrangedAyats, setArrangedAyats] = useState([...ayatData[level].find(p => p.id === currentPassageId).passage].sort(() => Math.random() - 0.5));
  const [score, setScore] = useState(0);
  const [feedback, setFeedback] = useState('');

  // Sync currentPassageId and arrangedAyats when level changes
  useEffect(() => {
    const firstPassage = ayatData[level][0]; // Get the first passage of the new level
    if (firstPassage) {
      setCurrentPassageId(firstPassage.id);
      setArrangedAyats([...firstPassage.passage].sort(() => Math.random() - 0.5));
    }
  }, [level]);

  const moveAyat = (fromIndex: number, toIndex: number) => {
    const updatedAyats = [...arrangedAyats];
    const [movedAyat] = updatedAyats.splice(fromIndex, 1);
    updatedAyats.splice(toIndex, 0, movedAyat);
    setArrangedAyats(updatedAyats);
  };

  const checkAnswer = () => {
    const correctPassage = ayatData[level].find(p => p.id === currentPassageId).passage;
    if (JSON.stringify(arrangedAyats) === JSON.stringify(correctPassage)) {
      setScore(score + 5);
      setFeedback('Correct! +5 marks');
      setTimeout(() => {
        setFeedback('');
        nextPassage();
      }, 2000);
    } else {
      setFeedback('Try again!');
      setTimeout(() => setFeedback(''), 2000);
    }
  };

  const nextPassage = () => {
    const passages = ayatData[level];
    const currentIndex = passages.findIndex(p => p.id === currentPassageId);
    const nextIndex = (currentIndex + 1) % passages.length;
    setCurrentPassageId(passages[nextIndex].id);
    setArrangedAyats([...passages[nextIndex].passage].sort(() => Math.random() - 0.5));
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Ayat Arranging Game</h1>
        <div className="mb-4">
          <label className="mr-2">Level: </label>
          <select value={level} onChange={(e) => setLevel(e.target.value)} className="p-1 border rounded">
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="difficult">Difficult</option>
          </select>
        </div>
        <div className="mb-4">
          <h2 className="text-xl">Arrange the Ayats</h2>
          {arrangedAyats.map((ayat, index) => (
            <AyatItem key={index} id={index} text={ayat} index={index} moveAyat={moveAyat} />
          ))}
        </div>
        <button onClick={checkAnswer} className="bg-blue-500 text-white p-2 rounded mb-2">Check Answer</button>
        <div>Score: {score}</div>
        <div className="text-green-500">{feedback}</div>
      </div>
    </DndProvider>
  );
};

export default Game;
