import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Results.css";
import { Typography, Box, Card, Grid } from "@mui/material";

function Results({ stat, spec, gen, search, allCharacterForEpisode }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api${window.location.pathname}?
      ${search ? `&name=${search}` : ""}
      ${stat ? `&status=${stat}` : ""}
      ${spec ? `&species=${spec}` : ""}
      ${gen ? `&gender=${gen}` : ""}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((receivedData) => {
        setData(receivedData.results);
      })
      .catch((error) => console.log(error));
  }, [gen, stat, spec, search]);

  return (
    data && (
      <Grid container className="homeCharactersResults">
        {(data || allCharacterForEpisode).map((item) => (
          <Link
            to={`/character/${item.id}`}
            className="homeCharactersResultsLink"
            key={item.id}
          >
            <Card>
              <Box className="homeCharactersResultsCell">
                <Box className="homeCharactersResultsPicAndText">
                  <img src={item.image} alt="Logo" />
                  <Box
                    className="homeCharactersResultsTextOnPic"
                    style={{
                      backgroundColor:
                        item.status === "Alive"
                          ? "green"
                          : item.status === "Dead"
                          ? "red"
                          : "grey",
                    }}
                  >
                    {item.status}
                  </Box>
                </Box>
                <Box className="homeCharactersResultsCellContents">
                  <Typography fontWeight={"bold"} fontSize={"20px"}>
                    {item.name}
                  </Typography>
                  <Typography>last Location</Typography>
                  <Typography fontSize={"20px"}>
                    {item.location.name}
                  </Typography>
                </Box>
              </Box>
            </Card>
          </Link>
        ))}
      </Grid>
    )
  );
}

export default Results;
