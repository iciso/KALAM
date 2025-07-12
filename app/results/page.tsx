import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

const Results: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get('score') || '0';
  const set = searchParams.get('set') || '1';

  const handleContinue = () => {
    router.push('/games/fill-blanks');
  };

  return (
    <>
      <Head>
        <title>Results - KALAM</title>
        <script src="https://cdn.tailwindcss.com"></script>
      </Head>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-6 font-sans">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-semibold mb-4">Results</h1>
          <p className="text-base sm:text-lg mb-4">
            Set {set} Completed! Your Score: {score}
          </p>
          <button
            onClick={handleContinue}
            className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm sm:text-base hover:bg-green-600 transition w-full sm:w-auto"
          >
            Continue to Next Set
          </button>
        </div>
      </div>
    </>
  );
};

export default Results;
