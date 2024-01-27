import { useState, React } from "react";
import Navbar from "./Navbar.jsx";
import Selection from "../Selection.jsx";
import { status, gender, species } from "../../Helpers/Constants.js";
import Results from "../Results.jsx";

export default function HomeCharacters() {
  const [dataFromStatus, setDataFromStatus] = useState(null);
  const [dataFromSpecies, setDataFromSpecies] = useState(null);
  const [dataFromGender, setDataFromGender] = useState(null);

  const dataFromChildForStatus = (data) => {
    console.log(data);
    setDataFromStatus(data);
  };

  const dataFromChildForSpecies = (data) => {
    console.log(data);
    setDataFromSpecies(data);
  };

  const dataFromChildForGender = (data) => {
    console.log(data);
    setDataFromGender(data);
  };
  console.log(dataFromGender, dataFromSpecies, dataFromStatus);
  return (
    <div>
      <Navbar />
      <Selection getOptions={status} send={dataFromChildForStatus} />
      <br />
      <Selection getOptions={species} send={dataFromChildForSpecies} />
      <br />
      <Selection getOptions={gender} send={dataFromChildForGender} />
      <Results
        spec={dataFromSpecies}
        stat={dataFromStatus}
        gen={dataFromGender}
      />
    </div>
  );
}
