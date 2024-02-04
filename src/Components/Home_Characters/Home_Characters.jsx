import { useState, React } from "react";
import Selection from "../Selection.jsx";
import { status, gender, species } from "../../Helpers/Constants.js";
import Results from "../Results.jsx";
import { Box, TextField, Typography } from "@mui/material";
import "./Home_Characters.css";

export default function HomeCharacters() {
  const [dataFromStatus, setDataFromStatus] = useState(null);
  const [dataFromSpecies, setDataFromSpecies] = useState(null);
  const [dataFromGender, setDataFromGender] = useState(null);
  const [dataFromSearch, SetDataFromSearch] = useState(null);

  const HomeCharacterFilAndRes = {
    display: "flex",
    justifyContent: "center",
  };
  const HomeCharacterInput = {
    textAlign: "center",
  };
  const HomeCharacterInputText = {
    fontSize: "50px",
  };

  const HomeCharacterClearFilter = {
    cursor: "pointer",
    textDecoration: "underline",
  };
  const HomeCharacterInputFilerAndResults = {};
  const HomeCharacterFilter = {};
  const HomeCharacterResults = {};

  const dataFromChildForStatus = (data) => {
    setDataFromStatus(data);
  };

  const dataFromChildForSpecies = (data) => {
    setDataFromSpecies(data);
  };

  const dataFromChildForGender = (data) => {
    setDataFromGender(data);
  };

  const handleClearFilter = () => {
    dataFromChildForStatus(null);
    dataFromChildForSpecies(null);
    dataFromChildForGender(null);
    SetDataFromSearch(null);
  };

  return (
    <Box>
      <Box sx={HomeCharacterInputFilerAndResults}>
        <Box sx={HomeCharacterInput}>
          <Typography sx={HomeCharacterInputText}>Characters</Typography>
          <Box>
            <TextField
              value={dataFromSearch === null ? "" : dataFromSearch}
              onChange={(event) => SetDataFromSearch(event.target.value)}
            ></TextField>
          </Box>
        </Box>
        <Box sx={HomeCharacterFilAndRes}>
          <Box sx={HomeCharacterFilter}>
            <Typography>Filters</Typography>
            <Typography
              variant="button"
              sx={HomeCharacterClearFilter}
              onClick={() => handleClearFilter()}
            >
              Clear Filters
            </Typography>
            <Selection
              title="Status"
              options={status}
              selectedOption={dataFromStatus}
              setSelectedOption={dataFromChildForStatus}
            />
            <Selection
              title="Species"
              options={species}
              selectedOption={dataFromSpecies}
              setSelectedOption={dataFromChildForSpecies}
            />
            <Selection
              title="Gender"
              options={gender}
              selectedOption={dataFromGender}
              setSelectedOption={dataFromChildForGender}
            />
          </Box>
          <Box sx={HomeCharacterResults}>
            <Results
              spec={dataFromSpecies}
              stat={dataFromStatus}
              gen={dataFromGender}
              search={dataFromSearch}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
