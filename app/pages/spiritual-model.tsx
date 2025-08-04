// File: pages/spiritual-model.tsx
import { useState, useEffect } from 'react';
import Head from 'next/head';

const SpiritualModel = () => {
  // Define types for our model
  type SpiritualFactor = {
    name: string;
    value: number;
    min: number;
    max: number;
    step: number;
    coefficient: number;
    color: string;
    description: string;
  };

  // Initial state with Islamic spiritual factors
  const [factors, setFactors] = useState<SpiritualFactor[]>([
    {
      name: 'Ruh (Soul)',
      value: 5,
      min: 0,
      max: 10,
      step: 0.1,
      coefficient: 0.6, // Strong positive impact
      color: 'bg-blue-500',
      description: 'The divine spirit that connects us to Allah'
    },
    {
      name: 'Nafs (Ego/Desires)',
      value: 5,
      min: 0,
      max: 10,
      step: 0.1,
      coefficient: -0.4, // Negative impact when uncontrolled
      color: 'bg-red-500',
      description: 'The lower self that needs purification'
    },
    {
      name: 'Aql (Intellect)',
      value: 5,
      min: 0,
      max: 10,
      step: 0.1,
      coefficient: 0.3, // Positive but secondary to Ruh
      color: 'bg-green-500',
      description: 'The God-given wisdom to discern truth'
    },
    {
      name: 'Qalb (Heart)',
      value: 5,
      min: 0,
      max: 10,
      step: 0.1,
      coefficient: 0.5, // Strong positive when purified
      color: 'bg-purple-500',
      description: 'The spiritual heart that feels love and mercy'
    }
  ]);

  const [imanLevel, setImanLevel] = useState<number>(50); // 0-100 scale
  const [predictedState, setPredictedState] = useState<number>(50); // 0-100 scale

  // Calculate the spiritual state using logistic regression
  const calculateSpiritualState = () => {
    // Start with a base value representing Allah's mercy
    let z = 1.0; // Base representing divine mercy
    
    // Add each factor's contribution
    factors.forEach(factor => {
      z += factor.coefficient * factor.value;
    });

    // Add iman's influence (quadratic relationship)
    z += 0.02 * imanLevel + 0.0001 * Math.pow(imanLevel, 2);

    // Sigmoid function to get probability between 0-1
    const probability = 1 / (1 + Math.exp(-z));

    // Scale to 0-100 for display
    const spiritualState = Math.round(probability * 100);
    setPredictedState(spiritualState);
  };

  // Update calculation when any factor changes
  useEffect(() => {
    calculateSpiritualState();
  }, [factors, imanLevel]);

  // Handle slider changes
  const handleFactorChange = (index: number, value: number) => {
    const newFactors = [...factors];
    newFactors[index].value = parseFloat(value.toFixed(1));
    setFactors(newFactors);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Ruh-Nafs-Aql-Qalb Spiritual Model | KALAM</title>
        <meta name="description" content="Interactive model of Islamic spiritual factors" />
      </Head>

      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Spiritual State Regression Model
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
            className="w-full h-3 bg-gradient-to-r from-red-400 via-yellow-400 to-green-500 rounded-lg appearance-none cursor-pointer"
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
              <span className={`px-2 py-1 text-xs rounded-full text-white ${factor.color}`}>
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
              className={`w-full h-3 ${factor.color} rounded-lg appearance-none cursor-pointer`}
            />
            <p className="text-sm text-gray-500 mt-1">{factor.description}</p>
          </div>
        ))}

        {/* Predicted Spiritual State */}
        <div className="mt-10 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border border-gray-200">
          <h2 className="text-xl font-semibold text-center text-gray-800 mb-4">
            Current Spiritual State
          </h2>
          <div className="relative pt-1">
            <div className="flex items-center justify-between mb-2">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-gradient-to-r from-red-500 to-green-500">
                  {predictedState < 30 ? 'Struggling' : 
                   predictedState < 60 ? 'Developing' : 
                   predictedState < 80 ? 'Strong' : 'Exemplary'}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-gray-600">
                  {predictedState}/100
                </span>
              </div>
            </div>
            <div className="overflow-hidden h-4 mb-4 text-xs flex rounded bg-gray-200">
              <div
                style={{ width: `${predictedState}%` }}
                className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-green-400 to-blue-500"
              ></div>
            </div>
          </div>
          <p className="text-center text-gray-600 italic mt-2">
            {predictedState < 30 ? 'Focus on strengthening your connection with Allah through dhikr and salah' :
             predictedState < 60 ? 'Continue your spiritual growth with consistent good deeds and learning' :
             predictedState < 80 ? 'Your spiritual state is strong - maintain consistency and increase in charity' :
             'MashaAllah! You are in an excellent spiritual state - share your light with others'}
          </p>
        </div>

        {/* Model Explanation */}
        <div className="mt-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-lg font-medium text-gray-800 mb-3">About This Spiritual Model</h3>
          <p className="text-gray-600 mb-3">
            This model demonstrates how different spiritual factors (Ruh, Nafs, Aql, Qalb) interact with Iman
            to influence one's overall spiritual state, based on Islamic teachings.
          </p>
          <p className="text-gray-600 mb-3">
            The calculation uses a logistic regression approach where each factor has a specific weight:
          </p>
          <ul className="list-disc pl-5 text-gray-600 mb-3">
            {factors.map(factor => (
              <li key={factor.name} className="mb-1">
                <span className="font-medium">{factor.name}:</span> Coefficient = {factor.coefficient} ({factor.coefficient > 0 ? 'positive' : 'negative'} impact)
              </li>
            ))}
          </ul>
          <p className="text-gray-600">
            Remember that in reality, Allah's mercy is boundless and cannot be fully captured by any model.
            This is merely a simplified demonstration for educational purposes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SpiritualModel;
