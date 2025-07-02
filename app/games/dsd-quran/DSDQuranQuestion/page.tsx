"use client"

import React from 'react';
import { Ayah } from './DSDQuranGame';

interface DSDQuranQuestionProps {
  ayah: Ayah;
  stages: string[];
  onAnswer: (answer: string) => void;
}

const DSDQuranQuestion: React.FC<DSDQuranQuestionProps> = ({ ayah, stages, onAnswer }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-4">
        Which stage of Gordon Allport's scale of prejudice does this verse best represent?
      </h2>
      <p className="text-lg mb-4">
        <strong>{ayah.surah} ({ayah.verse})</strong>: {ayah.text}
      </p>
      <div className="grid grid-cols-1 gap-2">
        {stages.map((stage) => (
          <button
            key={stage}
            onClick={() => onAnswer(stage)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {stage}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DSDQuranQuestion;
