"use client"

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DSDQuranGame from './components/games/dsd-quran/DSDQuranGame';
import Games from './pages/Games';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/games" element={<Games />} />
        <Route path="/games/dsd-quran" element={<DSDQuranGame />} />
        {/* Add other game routes here */}
      </Routes>
    </Router>
  );
};

export default App;
