import React from "react";
import Navbar from "./Navbar.jsx";
import Selection from "../Selection.jsx";
import { status, gender, species } from "../../Helpers/Constants.js";
import Results from "../Results.jsx";

export default function HomeCharacters() {
  return (
    <div>
      <Navbar />
      <Selection getOptions={status} />
      <br />
      <Selection getOptions={species} />
      <br />
      <Selection getOptions={gender} />
      <Results />
    </div>
  );
}
