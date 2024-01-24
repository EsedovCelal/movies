import React from "react";
import HomeCharacters from "./Components/Home_Characters/Home_Characters.jsx";
import AllEpisodes from "./Components/Home_Episodes/All_episodes.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
// import Navbar from "./Components/Home_Characters/Navbar.jsx";
function App() {
  return (
    <div className="main_page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeCharacters />} />
          <Route path="/Episodes" element={<AllEpisodes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
