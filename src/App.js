import React from "react";
import Home from "./Components/Home/Home.jsx";
import AllEpisodes from "./Components/Home_Episodes/All_episodes.jsx";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="main_page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Episodes" element={<AllEpisodes />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
