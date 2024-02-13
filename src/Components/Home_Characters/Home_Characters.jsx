import { useState, React } from "react";
import Selection from "../Selection.jsx";
import { status, gender, species } from "../../Helpers/Constants.js";
import Results from "../Results.jsx";
import { Box, TextField, Typography } from "@mui/material";

export default function HomeCharacters() {
  const [dataFromStatus, setDataFromStatus] = useState(null);
  const [dataFromSpecies, setDataFromSpecies] = useState(null);
  const [dataFromGender, setDataFromGender] = useState(null);
  const [dataFromSearch, SetDataFromSearch] = useState(null);

  const HomeCharacterFilAndRes = {
    display: "flex",
    justifyContent: "center",
    maxWidth: "70%",
    margin: "0 auto",
  };
  const HomeCharacterInputAndText = {
    textAlign: "center",
  };
  const HomeCharacterInputText = {
    fontSize: "50px",
  };
  const HomeCharacterInput = {
    width: "40%",
    marginBottom: "10px",
    // borderStyle: "solid",
    // borderColor: "red",
  };
  const HomeCharacterClearFilter = {
    cursor: "pointer",
    textDecoration: "underline",
  };
  const HomeCharacterFilterText = {
    textAlign: "center",
  };
  const HomeCharacterInputFilerAndResults = {};
  const HomeCharacterFilter = {
    display: "grid",
    maxHeight: "300px",
  };
  const HomeCharacterFilterMain = {
    maxHeight: "300px",
    display: "grid",
    alignContent: "space-between",
    height: "200px",
  };
  const HomeCharacterResults = {
    // maxWidth: "1200px",
  };

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
        <Box sx={HomeCharacterInputAndText}>
          <Typography sx={HomeCharacterInputText}>Characters</Typography>
          <Box>
            <TextField
              placeholder="Search for characters"
              sx={HomeCharacterInput}
              value={dataFromSearch === null ? "" : dataFromSearch}
              onChange={(event) => SetDataFromSearch(event.target.value)}
            ></TextField>
          </Box>
        </Box>
        <Box sx={HomeCharacterFilAndRes}>
          <Box sx={HomeCharacterFilter}>
            <Box sx={HomeCharacterFilterText}>
              <Typography sx={{ fontWeight: "bold" }}>Filters</Typography>
              <Typography
                variant="button"
                sx={HomeCharacterClearFilter}
                onClick={() => handleClearFilter()}
              >
                Clear Filters
              </Typography>
            </Box>
            <Box sx={HomeCharacterFilterMain}>
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
          </Box>
          <Results
            sx={HomeCharacterResults}
            spec={dataFromSpecies}
            stat={dataFromStatus}
            gen={dataFromGender}
            search={dataFromSearch}
          />
        </Box>
      </Box>
    </Box>
  );
}
