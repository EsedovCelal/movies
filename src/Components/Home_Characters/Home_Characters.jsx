import { useState, React } from "react";
import Selection from "../Selection.jsx";
import { status, gender, species } from "../../Helpers/Constants.js";
import Results from "../Results.jsx";

export default function HomeCharacters() {
  const HomeCharacterFilerAndResults = {
    display: "flex",
    justifyContent: "center",
  };
  const HomeCharacterFilter = {};
  const HomeCharacterResults = {};
  const [dataFromStatus, setDataFromStatus] = useState(null);
  const [dataFromSpecies, setDataFromSpecies] = useState(null);
  const [dataFromGender, setDataFromGender] = useState(null);
  const dataFromChildForStatus = (data) => {
    setDataFromStatus(data);
  };
  const dataFromChildForSpecies = (data) => {
    setDataFromSpecies(data);
  };
  const dataFromChildForGender = (data) => {
    setDataFromGender(data);
  };
  return (
    <div>
      <div style={HomeCharacterFilerAndResults}>
        <div style={HomeCharacterFilter}>
          <p>Filters</p>
          <Selection getOptions={status} send={dataFromChildForStatus} />
          <Selection getOptions={species} send={dataFromChildForSpecies} />
          <Selection getOptions={gender} send={dataFromChildForGender} />
        </div>
        <div style={HomeCharacterResults}>
          <Results
            spec={dataFromSpecies}
            stat={dataFromStatus}
            gen={dataFromGender}
          />
        </div>
      </div>
    </div>
  );
}
