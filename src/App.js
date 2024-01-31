import React from "react";
import HomeCharacters from "./Components/Home_Characters/Home_Characters.jsx";
import AllEpisodes from "./Components/Home_Episodes/All_episodes.jsx";
import AllLocations from "./Components/Home_Locations/All_locations";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Details from "./Components/Details.jsx";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="main_page">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/character" element={<HomeCharacters />} />
          <Route path="/episodes" element={<AllEpisodes />} />
          <Route path="/locations" element={<AllLocations />} />
          <Route path="/character/*" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
