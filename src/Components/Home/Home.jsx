import React from "react";
import Navbar from "../Home/Navbar.jsx";
import Filter from "../Home_Characters/Filter.jsx";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Filter />
    </div>
  );
}
