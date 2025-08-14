"use client";

import { useState, useEffect } from "react";
import { attributes, Attribute } from "@/data/attributesData"; // Adjust path if needed

export default function AttributesGame() {
  const [shuffledVerses, setShuffledVerses] = useState<string[]>([]);
  const [selectedAttribute, setSelectedAttribute] = useState<Attribute | null>(null);
  const [selectedVerse, setSelectedVerse] = useState<string | null>(null);
  const [details, setDetails] = useState<string>("");
  const [score, setScore] = useState(0);
  const [matchedIds, setMatchedIds] = useState<number[]>([]);

  useEffect(() => {
    // Shuffle verses on load
    const verses = attributes.map((attr) => attr.verse);
    setShuffledVerses(verses.sort(() => Math.random() - 0.5));
  }, []);

  const handleAttributeClick = (attr: Attribute) => {
    if (matchedIds.includes(attr.id)) return; // Already matched
    setSelectedAttribute(attr);
    setDetails(""); // Clear previous details
  };

  const handleVerseClick = (verse: string) => {
    setSelectedVerse(verse);
  };

  useEffect(() => {
    if (selectedAttribute && selectedVerse) {
      if (selectedAttribute.verse === selectedVerse) {
        setDetails(
          `Congratulations! Correct match.\n\nAttribute: ${selectedAttribute.arabic} (${selectedAttribute.transliteration} - ${selectedAttribute.meaning})\n\nQuran Reference: ${selectedAttribute.verse}\nQuran Text: ${selectedAttribute.quranText}\n\nExplanation (Tafsir): ${selectedAttribute.explanation}\n\nHadith: ${selectedAttribute.hadith}`
        );
        setScore(score + 1);
        setMatchedIds([...matchedIds, selectedAttribute.id]);
      } else {
        setDetails("Incorrect match. Try again!");
      }
      // Clear selections after check
      setTimeout(() => {
        setSelectedAttribute(null);
        setSelectedVerse(null);
      }, 2000);
    }
  }, [selectedAttribute, selectedVerse]);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold text-green-800">Allah's Attributes Matching Game</h1>
        <p className="mt-4 text-lg text-gray-700">
          Match each attribute of Allah SWT to its correct Surah:Verse from the Quran. On correct match, learn more from Quran, Hadith, and Tafsir.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Attributes Column */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Attributes</h2>
          <div className="grid grid-cols-1 gap-4">
            {attributes.map((attr) => (
              <button
                key={attr.id}
                onClick={() => handleAttributeClick(attr)}
                disabled={matchedIds.includes(attr.id)}
                className={`p-4 rounded-lg shadow-md ${
                  matchedIds.includes(attr.id)
                    ? "bg-green-200 cursor-not-allowed"
                    : "bg-white hover:bg-gray-200"
                } ${selectedAttribute?.id === attr.id ? "border-2 border-blue-500" : ""}`}
              >
                {attr.arabic} ({attr.transliteration} - {attr.meaning})
              </button>
            ))}
          </div>
        </div>

        {/* Verses Column */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Surah:Verse</h2>
          <div className="grid grid-cols-1 gap-4">
            {shuffledVerses.map((verse, index) => (
              <button
                key={index}
                onClick={() => handleVerseClick(verse)}
                className={`p-4 rounded-lg shadow-md bg-white hover:bg-gray-200 ${
                  selectedVerse === verse ? "border-2 border-blue-500" : ""
                }`}
              >
                {verse}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Details Text Box */}
      <div className="mt-8 p-6 bg-white rounded-lg shadow-md whitespace-pre-line">
        <h2 className="text-2xl font-semibold mb-4">Details</h2>
        {details || "Select an attribute and a verse to match."}
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center">
        <p className="text-xl">Score: {score} / 10</p>
        {score === 10 && <p className="text-green-600 font-bold">Well done! All matched. Proceed to next set?</p>}
      </footer>
    </div>
  );
}
