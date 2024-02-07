import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Results.css";
import { Typography, Box, Card, Grid } from "@mui/material";

function Results({ stat, spec, gen, search, forlink, ids }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const baseUrl = new URL(`https://rickandmortyapi.com/api${forlink}`);
    const params = new URLSearchParams();
    if (search) params.append("name", search);
    if (stat) params.append("status", stat);
    if (spec) params.append("species", spec);
    if (gen) params.append("gender", gen);
    if (ids) params.append("", ids);
    const urlWithParams =
      baseUrl.toString() + (params.toString() ? `?${params.toString()}` : "");
    fetch(urlWithParams)
      .then((response) => response.json())
      .then((receivedData) => {
        setData(receivedData.results);
      })
      .catch((error) => console.log("Fetching error:", error));
    console.log(urlWithParams);
    console.log(ids);
  }, [gen, stat, spec, search, forlink, ids]);

  return (
    data && (
      <Grid container className="homeCharactersResults">
        {data.map((item) => (
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
