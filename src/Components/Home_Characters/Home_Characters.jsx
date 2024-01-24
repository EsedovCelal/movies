import React from "react";
import Navbar from "./Navbar.jsx";
import Selection from "../Selection.jsx";
import { status, gender, species } from "../../Helpers/Constants.js";
import Results from "../Results.jsx";

export default function HomeCharacters() {
  return (
    <div>
      <Navbar />
      <Selection sendOptions={status} />
      <br />
      <Selection sendOptions={species} />
      <br />
      <Selection sendOptions={gender} />
      <Results />
    </div>
  );
}
