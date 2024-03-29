import React from "react";
import HomeCharacters from "./Components/Home_Characters/Home_Characters.jsx";
import AllEpisodes from "./Components/Home_Episodes/All_episodes.jsx";
import AllLocations from "./Components/Home_Locations/All_locations";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Details from "./Components/Details.jsx";
import Navbar from "./Components/Navbar";
import { Box } from "@mui/material";
function App() {
  return (
    <Box>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/character" element={<HomeCharacters />} />
          <Route path="/" element={<HomeCharacters />} />
          <Route path="/episodes" element={<AllEpisodes />} />
          <Route path="/locations" element={<AllLocations />} />
          <Route path="/character/*" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
