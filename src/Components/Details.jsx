import { useEffect, useState } from "react";
import "./Details.css";
import { Box } from "@mui/material";

function Details() {
  const [character, SetCharacter] = useState("");
  const currentUrl = window.location.href;
  const url = new URL(currentUrl);
  const pathname = url.pathname;
  const mainDetails = {
    textAlign: "center",
  };
  const mainDetailsCell = {
    width: "303px",
    marginLeft: "auto",
    marginRight: "auto",
  };
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api${pathname}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        SetCharacter(data);
      });
  }, []);
  return (
    character && (
      <Box style={mainDetails}>
        <Box style={mainDetailsCell} key={character.id}>
          <h1>{character.name}</h1>
          <img src={character.image} alt="Logo" />
          <p
            className="characterDetailsStatus"
            style={{
              backgroundColor:
                character.status === "Alive"
                  ? "green"
                  : character.status === "Dead"
                  ? "red"
                  : "grey",
            }}
          >
            {character.status}
          </p>
          <Box className="detailsText">
            <Box>
              <span>Gender: </span>
              {character.gender}
            </Box>
            <Box>
              <span>Location: </span>
              {character.location.name}
            </Box>
            <Box>
              <span>Origins: </span>
              {character.origin.name}
            </Box>
            <Box>
              <span>Species: </span>
              {character.species}
            </Box>
          </Box>
        </Box>
      </Box>
    )
  );
}

export default Details;
