"use client"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DSDQuranGame from "@/games/dsd-quran/DSDQuranGame";

export default function Home() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/games/dsd-quran" element={<DSDQuranGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
