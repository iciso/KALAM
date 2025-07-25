"use client";

import React, { Suspense } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import { Progress } from "@/components/ui/progress"; // Make sure this import exists

const ResultsContent: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get('score') || '0';
  const set = searchParams.get('set') || '1';
  const totalScore = searchParams.get('totalScore') || '0';
  const setTotal = searchParams.get('setTotal') || '50';

  const handleContinue = () => {
    const nextSet = parseInt(set, 10) + 1;
    router.push(`/games/fill-blanks?set=${nextSet}`);
  };

  const handleReset = () => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('currentSetIndex', '0');
      localStorage.setItem('totalScore', '0');
    }
    router.push('/games/fill-blanks?set=1');
  };

  return (
    <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4 sm:p-6">
      <h1 className="text-xl sm:text-2xl font-semibold mb-4">Set {set} Results</h1>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span>Set Score:</span>
          <span className="font-medium">{score}/{setTotal}</span>
        </div>
        <Progress value={(parseInt(score)/parseInt(setTotal))*100} className="h-2" />
      </div>
      
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span>Total Score:</span>
          <span className="font-medium">{totalScore}</span>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
        <button
          onClick={handleContinue}
          className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-green-600 transition w-full sm:w-auto"
        >
          Continue to Next Set
        </button>
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-red-600 transition w-full sm:w-auto"
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

const Results: React.FC = () => {
  return (
    <>
      <Head>
        <title>Results - KALAM</title>
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
        <Suspense fallback={<div className="text-base sm:text-lg">Loading results...</div>}>
          <ResultsContent />
        </Suspense>
      </div>
    </>
  );
};

export default Results;
