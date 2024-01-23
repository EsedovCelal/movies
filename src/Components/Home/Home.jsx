import React from "react";
import Navbar from "../Home/Navbar.jsx";
import Filter from "../Home_Characters/Filter.jsx";
import AllEpisodes from "../Home_Episodes/All_episodes.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Filter />
      <AllEpisodes />
    </div>
  );
}
