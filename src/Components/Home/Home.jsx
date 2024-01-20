import React, { useState } from "react";
import Navbar from "../Home/Navbar.jsx";
import Filter from "../Home_Characters/Filter.jsx";
import Results from "../Home_Characters/Results.jsx";
import "./Home.css";

export default function Home() {
  const [type, setType] = useState("character");
  return (
    <div>
      <Navbar />
      <div className="side">
        <Filter />
        <Results type={type} />
      </div>
    </div>
  );
}
