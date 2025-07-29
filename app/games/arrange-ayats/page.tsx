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
    { id: 2, passage: ["إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ", "ٱهْدِنَا ٱلصِّرَٰطَ ٱلْمُسْتَقِيمَ", "صِرَٰطَ ٱلَّذِينَ أَنْعَمْتَ عَلَيْهِمْ", "غَيْرِ ٱلْمَغْضُوبِ عَلَيْهِمْ وَلَا ٱلضَّآلِّينَ"] },
    { id: 3, passage: ["ءَامَنَ ٱلرَّسُولُ بِمَآ أُنزِلَ إِلَيْهِ مِن رَّبِّهِۦ وَٱلْمُؤْمِنُونَ", "كُلٌّ ءَامَنَ بِٱللَّهِ وَمَلَٰٓئِكَتِهِۦ وَكُتُبِهِۦ", "وَرُسُلِهِۦ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِّن رُّسُلِهِۦ", "وَقَالُوا۟ سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ ٱلْمَصِيرُ"] },
    { id: 4, passage: ["لَا يُكَلِّفُ ٱللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ", "لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا ٱكْتَسَبَتْ ۗ", "رَبَّنَا لَا تُؤَاخِذْنَآ إِن نَّسِينَآ أَوْ أَخْطَأْنَا ۚ", "رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَآ إِصْرًا كَمَا حَمَلْتَهُۥ عَلَى ٱلَّذِينَ مِن قَبْلِنَا ۚ"] },
    { id: 5, passage: ["وَقُلِ ٱلْحَمْدُ لِلَّهِ ٱلَّذِى لَمْ يَتَّخِذْ وَلَدًا", "وَلَمْ يَكُن لَّهُۥ شَرِيكٌ فِى ٱلْمُلْكِ", "وَلَمْ يَكُن لَّهُۥ وَلِىٌّ مِّنَ ٱلذُّلِّ ۖ", "وَكَبِّرْهُ تَكْبِيرًۢا"] },
    { id: 6, passage: ["إِنَّآ أَعْطَيْنَٰكَ ٱلْكَوْثَرَ", "فَصَلِّ لِرَبِّكَ وَٱنْحَرْ", "إِنَّ شَانِئَكَ هُوَ ٱلْأَبْتَرُ"] },
    { id: 7, passage: ["إِذَا جَآءَ نَصْرُ ٱللَّهِ وَٱلْفَتْحُ", "وَرَأَيْتَ ٱلنَّاسَ يَدْخُلُونَ فِى دِينِ ٱللَّهِ أَفْوَاجًا", "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَٱسْتَغْفِرْهُ ۚ إِنَّهُۥ كَانَ تَوَّابًۢا"] },
    { id: 8, passage: ["تَبَّتْ يَدَآ أَبِى لَهَبٍ وَتَبَّ", "مَآ أَغْنَىٰ عَنْهُ مَالُهُۥ وَمَا كَسَبَ", "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ"] },
    { id: 9, passage: ["أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ", "وَوَضَعْنَا عَنكَ وِزْرَكَ", "ٱلَّذِىٓ أَنقَضَ ظَهْرَكَ", "وَرَفَعْنَا لَكَ ذِكْرَكَ"] },
    { id: 10, passage: ["وَٱلْعَصْرِ", "إِنَّ ٱلْإِنسَٰنَ لَفِى خُسْرٍ", "إِلَّا ٱلَّذِينَ ءَامَنُوا۟ وَعَمِلُوا۟ ٱلصَّٰلِحَٰتِ وَتَوَاصَوْا۟ بِٱلْحَقِّ وَتَوَاصَوْا۟ بِٱلصَّبْرِ"] }
  ],
  medium: [
    { id: 11, passage: ["وَقَالَ رَبُّكُمُ ٱدْعُونِىٓ أَسْتَجِبْ لَكُمْ ۚ", "إِنَّ ٱلَّذِينَ يَسْتَكْبِرُونَ عَنْ عِبَادَتِى", "سَيَدْخُلُونَ جَهَنَّمَ دَٰخِرِينَ", "فَمَنْ أَظْلَمُ مِمَّنِ ٱفْتَرَىٰ عَلَى ٱللَّهِ كَذِبًا أَوْ كَذَّبَ بِـَٔايَٰتِهِۦٓ"] },
    { id: 12, passage: ["ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ", "ٱلْحَىُّ ٱلْقَيُّومُ", "لَا تَأْخُذُهُۥ سِنَةٌ وَلَا نَوْمٌ", "لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ وَمَا فِى ٱلْأَرْضِ"] },
    { id: 13, passage: ["مَن ذَا ٱلَّذِى يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ", "يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ", "وَلَا يُحِيطُونَ بِشَىْءٍ مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ"] },
    { id: 14, passage: ["وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ وَٱلْأَرْضَ", "وَلَا يَئُودُهُۥ حِفْظُهُمَا", "وَهُوَ ٱلْعَلِىُّ ٱلْعَظِيمُ", "قُلْ هُوَ ٱللَّهُ أَحَدٌ"] },
    { id: 15, passage: ["ٱللَّهُ ٱلصَّمَدُ", "لَمْ يَلِدْ وَلَمْ يُولَدْ", "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ", "وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌ"] }, // Corrected and completed Surah Ikhlas parts
    { id: 16, passage: ["قُلْ يَٰٓأَيُّهَا ٱلْكَٰفِرُونَ", "لَآ أَعْبُدُ مَا تَعْبُدُونَ", "وَلَآ أَنتُمْ عَٰبِدُونَ مَآ أَعْبُدُ", "وَلَآ أَنَا۠ عَابِدٌ مَّا عَبَدتُّمْ"] },
    { id: 17, passage: ["أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِأَصْحَٰبِ ٱلْفِيلِ", "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِى تَضْلِيلٍ", "وَأَرْسَلَ عَلَيْهِمْ طَيْرًا أَبَابِيلَ", "تَرْمِيهِم بِحِجَارَةٍ مِّن سِجِّيلٍ"] },
    { id: 18, passage: ["لِإِيلَٰفِ قُرَيْشٍ", "إِۦلَٰفِهِمْ رِحْلَةَ ٱلشِّتَآءِ وَٱلصَّيْفِ", "فَلْيَعْبُدُوا۟ رَبَّ هَٰذَا ٱلْبَيْتِ", "ٱلَّذِىٓ أَطْعَمَهُم مِّن جُوعٍ وَءَامَنَهُم مِّنْ خَوْفٍۭ"] },
    { id: 19, passage: ["أَرَءَيْتَ ٱلَّذِى يُكَذِّبُ بِٱلدِّينِ", "فَذَٰلِكَ ٱلَّذِى يَدُعُّ ٱلْيَتِيمَ", "وَلَا يَحُضُّ عَلَىٰ طَعَامِ ٱلْمِسْكِينِ", "فَوَيْلٌ لِّلْمُصَلِّينَ"] },
    { id: 20, passage: ["وَٱلتِّينِ وَٱلزَّيْتُونِ", "وَطُورِ سِينِينَ", "وَهَٰذَا ٱلْبَلَدِ ٱلْأَمِينِ", "لَقَدْ خَلَقْنَا ٱلْإِنسَٰنَ فِىٓ أَحْسَنِ تَقْوِيمٍ"] }
  ],
  difficult: [
    { id: 21, passage: ["وَٱلشَّمْسِ وَضُحَىٰهَا", "وَٱلْقَمَرِ إِذَا تَلَىٰهَا", "وَٱلنَّهَارِ إِذَا جَلَّىٰهَا", "وَٱلَّيْلِ إِذَا يَغْشَىٰهَا"] },
    { id: 22, passage: ["قَدْ أَفْلَحَ مَن تَزَكَّىٰ", "وَذَكَرَ ٱسْمَ رَبِّهِۦ فَصَلَّىٰ", "بَلْ تُؤْثِرُونَ ٱلْحَيَوٰةَ ٱلدُّنْيَا", "وَٱلْءَاخِرَةُ خَيْرٌ وَأَبْقَىٰ"] },
    { id: 23, passage: ["فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا", "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًا", "فَإِذَا فَرَغْتَ فَٱنصَبْ", "وَإِلَىٰ رَبِّكَ فَٱرْغَب"] },
    { id: 24, passage: ["قُلْ أَعُوذُ بِرَبِّ ٱلْفَلَقِ", "مِن شَرِّ مَا خَلَقَ", "وَمِن شَرِّ غَاسِقٍ إِذَا وَقَبَ", "وَمِن شَرِّ ٱلنَّفَّٰثَٰتِ فِى ٱلْعُقَدِ", "وَمِن شَرِّ حَاسِدٍ إِذَا حَسَدَ"] },
    { id: 25, passage: ["قُلْ أَعُوذُ بِرَبِّ ٱلنَّاسِ", "مَلِكِ ٱلنَّاسِ", "إِلَٰهِ ٱلنَّاسِ", "مِن شَرِّ ٱلْوَسْوَاسِ ٱلْخَنَّاسِ", "ٱلَّذِى يُوَسْوِسُ فِى صُدُورِ ٱلنَّاسِ"] },
    { id: 26, passage: ["عَمَّ يَتَسَآءَلُونَ", "عَنِ ٱلنَّبَإِ ٱلْعَظِيمِ", "ٱلَّذِى هُمْ فِيهِ مُخْتَلِفُونَ", "كَلَّا سَيَعْلَمُونَ", "ثُمَّ كَلَّا سَيَعْلَمُونَ"] },
    { id: 27, passage: ["وَٱلنَّٰزِعَٰتِ غَرْقًا", "وَٱلنَّٰشِطَٰتِ نَشْطًا", "وَٱلسَّٰبِحَٰتِ سَبْحًا", "فَٱلسَّٰبِقَٰتِ سَبْقًا", "فَٱلْمُدَبِّرَٰتِ أَمْرًا"] },
    { id: 28, passage: ["عَبَسَ وَتَوَلَّىٰٓ", "أَن جَآءَهُ ٱلْأَعْمَىٰ", "وَمَا يُدْرِيكَ لَعَلَّهُۥ يَزَّكَّىٰٓ", "أَوْ يَذَّكَّرُ فَتَنفَعَهُ ٱلذِّكْرَىٰٓ", "أَمَّا مَنِ ٱسْتَغْنَىٰ"] },
    { id: 29, passage: ["إِذَا ٱلشَّمْسُ كُوِّرَتْ", "وَإِذَا ٱلنُّجُومُ ٱنكَدَرَتْ", "وَإِذَا ٱلْجِبَالُ سُيِّرَتْ", "وَإِذَا ٱلْعِشَارُ عُطِّلَتْ", "وَإِذَا ٱلْوُحُوشُ حُشِرَتْ"] },
    { id: 30, passage: ["إِذَا ٱلسَّمَآءُ ٱنفَطَرَتْ", "وَإِذَا ٱلْكَوَاكِبُ ٱنتَثَرَتْ", "وَإِذَا ٱلْبِحَارُ فُجِّرَتْ", "وَإِذَا ٱلْقُبُورُ بُعْثِرَتْ", "عَلِمَتْ نَفْسٌ مَّا قَدَّمَتْ وَأَخَّرَتْ"] }
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
  const [arrangedAyats, setArrangedAyats] = useState(() => {
    const initialPassage = ayatData['easy'].find(p => p.id === 1);
    return initialPassage ? [...initialPassage.passage].sort(() => Math.random() - 0.5) : [];
  });
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
    const correctPassage = ayatData[level].find(p => p.id === currentPassageId)?.passage;
    if (correctPassage && JSON.stringify(arrangedAyats) === JSON.stringify(correctPassage)) {
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
