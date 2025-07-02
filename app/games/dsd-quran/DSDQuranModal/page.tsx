"use client"

import React, { useState } from 'react';
import { Ayah } from './DSDQuranGame';

interface DSDQuranModalProps {
  ayah: Ayah;
  isCorrect: boolean | null;
  onClose: () => void;
}

const DSDQuranModal: React.FC<DSDQuranModalProps> = ({ ayah, isCorrect, onClose }) => {
  const [activeTab, setActiveTab] = useState<string>('Commentary');

  const tabs = [
    'Commentary',
    'Tafsir',
    'Historical Context',
    'Hadeeth',
    'Comparative Religion',
    'Islamophobia',
    'Significance',
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">
          {isCorrect ? 'Correct!' : 'Incorrect!'}
        </h2>
        <p className="mb-4">
          The correct stage is: <strong>{ayah.stage}</strong>
        </p>
        <div className="flex border-b mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 ${activeTab === tab ? 'border-b-2 border-blue-500' : ''}`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="max-h-96 overflow-y-auto">
          {activeTab === 'Commentary' && <p>{ayah.commentary}</p>}
          {activeTab === 'Tafsir' && <p>{ayah.tafsir}</p>}
          {activeTab === 'Historical Context' && <p>{ayah.historicalContext}</p>}
          {activeTab === 'Hadeeth' && <p>{ayah.hadeeth}</p>}
          {activeTab === 'Comparative Religion' && <p>{ayah.comparativeReligion}</p>}
          {activeTab === 'Islamophobia' && <p>{ayah.islamophobia}</p>}
          {activeTab === 'Significance' && <p>{ayah.significance}</p>}
        </div>
        <button
          onClick={onClose}
          className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Next Question
        </button>
      </div>
    </div>
  );
};

export default DSDQuranModal;
