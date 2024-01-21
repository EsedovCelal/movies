import React, { useState } from "react";
import Navbar from "../Home/Navbar.jsx";
import Filter from "../Filter.jsx";
import Results from "../Results.jsx";
import "./Home.css";
import Input from "../input.jsx";

export default function Home() {
  const [type, setType] = useState("character");
  return (
    <div>
      <Navbar />
      <Input />
      <div className="side">
        <Filter />
        <Results type={type} />
      </div>
    </div>
  );
}
