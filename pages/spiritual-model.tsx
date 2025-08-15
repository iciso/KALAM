// File: pages/spiritual-model.tsx
import { useState, useEffect } from 'react';
import Head from 'next/head';

// Add this CSS import at the top
import '../styles/globals.css'; // Or create a specific CSS file for this component

const SpiritualModel = () => {
  type SpiritualFactor = {
    name: string;
    value: number;
    min: number;
    max: number;
    step: number;
    coefficient: number;
    color: string;
    thumbColor: string;
    description: string;
  };

  const [factors, setFactors] = useState<SpiritualFactor[]>([
    {
      name: 'Ruh (Soul)',
      value: 5,
      min: 0,
      max: 10,
      step: 0.1,
      coefficient: 0.5,
      color: 'from-blue-400 to-blue-600',
      thumbColor: 'bg-blue-600',
      description: 'The divine spirit that connects us to Allah'
    },
    {
      name: 'Nafs (Ego/Desires)',
      value: 5,
      min: 0,
      max: 10,
      step: 0.1,
      coefficient: -0.8,
      color: 'from-red-400 to-red-600',
      thumbColor: 'bg-red-600',
      description: 'The lower self that needs purification'
    },
    {
      name: 'Aql (Intellect)',
      value: 5,
      min: 0,
      max: 10,
      step: 0.1,
      coefficient: 0.3,
      color: 'from-green-400 to-green-600',
      thumbColor: 'bg-green-600',
      description: 'The God-given wisdom to discern truth'
    },
    {
      name: 'Qalb (Heart)',
      value: 5,
      min: 0,
      max: 10,
      step: 0.1,
      coefficient: 0.5,
      color: 'from-purple-400 to-purple-600',
      thumbColor: 'bg-purple-600',
      description: 'The spiritual heart that feels love and mercy'
    }
  ]);

  const [imanLevel, setImanLevel] = useState<number>(50);
  const [predictedState, setPredictedState] = useState<number>(50);

  const calculateSpiritualState = () => {
    let z = 1.0; // Base representing divine mercy
    
    factors.forEach(factor => {
      z += factor.coefficient * factor.value;
    });

    // Enhanced iman influence
    z += 0.03 * imanLevel + 0.00015 * Math.pow(imanLevel, 2);

    const probability = 1 / (1 + Math.exp(-z));
    const spiritualState = Math.round(probability * 100);
    setPredictedState(spiritualState);
  };

  useEffect(() => {
    calculateSpiritualState();
  }, [factors, imanLevel]);

  
  const handleFactorChange = (index: number, value: number) => {
    const newFactors = [...factors];
    newFactors[index].value = parseFloat(value.toFixed(1));
    setFactors(newFactors);
  };

  const getStateDescription = (score: number) => {
    if (score < 30) {
      return {
        label: 'Struggling',
        color: 'bg-red-500',
        text: 'Focus on strengthening your connection with Allah through dhikr and salah',
        emoji: '🤲'
      };
    } else if (score < 60) {
      return {
        label: 'Developing',
        color: 'bg-yellow-500',
        text: 'Continue your spiritual growth with consistent good deeds and learning',
        emoji: '📖'
      };
    } else if (score < 80) {
      return {
        label: 'Strong',
        color: 'bg-blue-500',
        text: 'Your spiritual state is strong - maintain consistency and increase in charity',
        emoji: '💪'
      };
    } else {
      return {
        label: 'Exemplary',
        color: 'bg-green-500',
        text: 'MashaAllah! You are in an excellent spiritual state - share your light with others',
        emoji: '🌟'
      };
    }
  };

      const MeezanScales = ({ score }: { score: number }) => {
  // Calculate tilt angle based on score (0-100)
  const tilt = (score - 50) * 0.9; // -45° to +45° range
  
  return (
    <div className="relative h-64 w-full flex justify-center items-end">
      {/* Base Stand */}
      <div className="absolute bottom-0 h-8 w-2 bg-amber-800 rounded-t-full"></div>
      
      {/* Horizontal Beam */}
      <div className="absolute bottom-8 h-2 w-48 bg-amber-800 rounded-full"></div>
      
      {/* Central Pivot */}
      <div className="absolute bottom-6 h-6 w-6 bg-amber-900 rounded-full z-10"></div>
      
      {/* Scales - animated based on score */}
      <div 
        className="absolute bottom-6 w-40 h-1 bg-amber-700 origin-bottom"
        style={{ transform: `rotate(${tilt}deg)` }}
      >
        {/* Left Scale (Bad Deeds) */}
        <div className="absolute -left-20 -top-8 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
         حال 
        </div>
        
        {/* Right Scale (Current State) */}
        <div className="absolute -right-20 -top-8 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
          حسنات
        </div>
      </div>
      
      {/* Quranic Verse */}
      <div className="absolute -bottom-10 text-center text-xs text-gray-600">
        {score > 50 ? 
          "فَأَمَّا مَن ثَقُلَتْ مَوَازِينُهُۥ ﴿٦﴾ فَهُوَ فِى عِيشَةٍ رَّاضِيَةٍ ﴿٧﴾" :
          "وَأَمَّا مَنْ خَفَّتْ مَوَازِينُهُۥ ﴿٨﴾ فَأُمُّهُۥ هَاوِيَةٌ ﴿٩﴾"}
      </div>
    </div>
  );
};


  const stateInfo = getStateDescription(predictedState);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Ruh-Nafs-Aql-Qalb Spiritual Model | KALAM</title>
        <meta name="description" content="Interactive model of Islamic spiritual factors" />
      </Head>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Spiritual State Model
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Adjust the sliders to see how different spiritual factors influence your state
        </p>

        {/* Iman Level Slider */}
        <div className="mb-8">
          <label htmlFor="imanSlider" className="block text-lg font-medium text-gray-700 mb-2">
            Iman (Faith) Level: <span className="font-bold">{imanLevel}</span>
          </label>
          <input
            id="imanSlider"
            type="range"
            min="0"
            max="100"
            value={imanLevel}
            onChange={(e) => setImanLevel(parseInt(e.target.value))}
            className={`w-full h-3 bg-gradient-to-r from-red-400 via-yellow-400 to-green-500 rounded-lg cursor-pointer range-thumb-white`}
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Weak</span>
            <span>Moderate</span>
            <span>Strong</span>
          </div>
        </div>

        {/* Spiritual Factors */}
        {factors.map((factor, index) => (
          <div key={factor.name} className="mb-6">
            <div className="flex justify-between items-center mb-1">
              <label htmlFor={`${factor.name}-slider`} className="block text-md font-medium text-gray-700">
                {factor.name}: <span className="font-bold">{factor.value}</span>
              </label>
              <span className={`px-2 py-1 text-xs rounded-full text-white ${factor.thumbColor}`}>
                {factor.coefficient > 0 ? 'Positive' : 'Negative'} Influence
              </span>
            </div>
            <input
              id={`${factor.name}-slider`}
              type="range"
              min={factor.min}
              max={factor.max}
              step={factor.step}
              value={factor.value}
              onChange={(e) => handleFactorChange(index, parseFloat(e.target.value))}
              // Replace the existing input className for all sliders (except Iman) with this snippet:
              className={`w-full h-3 bg-gradient-to-r ${factor.color} rounded-lg cursor-pointer range-thumb-${factor.thumbColor.split('-')[1]}`}
            />
            <p className="text-sm text-gray-500 mt-1">{factor.description}</p>
          </div>
        ))}

         {/* Predicted Spiritual State - Single Section */}
      <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-gray-200">
  <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
    Mizan al-Ruh (Balance of the Soul)
  </h2>
  
  <div className="flex items-center justify-center mb-3">
    <span className={`text-lg mr-2 ${stateInfo.color} text-white px-3 py-1 rounded-full flex items-center ${predictedState > 70 ? 'scale-glow' : ''}`}>
      {stateInfo.emoji} {stateInfo.label}
    </span>
    <span className="text-xl font-bold text-gray-700">
      {predictedState}/100
    </span>
  </div>
  
  <MeezanScales score={predictedState} />
   <p className="text-center text-gray-600 italic mt-4 pt-4 border-t border-gray-200">
    &nbsp;
 <!-- This comment within is to push the paragraph below a little down -->
    &nbsp;
  </p>
  <p className="text-center text-gray-600 italic mt-4 pt-4 border-t border-gray-200">
    {stateInfo.text}
  </p>
</div>


        {/* Model Explanation */}
        <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-3">About This Spiritual Model</h3>
          <p className="text-gray-600 mb-3">
            This interactive model demonstrates how different spiritual factors influence your state based on Islamic teachings.
          </p>
          <p className="text-gray-600">
            <strong>Disclaimer:</strong> This is a simplified demo for understanding. True spiritual states are known only to Allah, The knower of The Unseen or Ghayab.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpiritualModel;
