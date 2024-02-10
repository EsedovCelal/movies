import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Results.css";
import { Typography, Box, Card, Grid } from "@mui/material";
import NotFoundPage from "./NotFoundPage";

function Results({ stat, spec, gen, search, ids }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const baseUrl = new URL(
      `https://rickandmortyapi.com/api/character/${ids ?? ""}`
    );
    const params = new URLSearchParams();
    if (search) params.append("name", search);
    if (stat) params.append("status", stat);
    if (spec) params.append("species", spec);
    if (gen) params.append("gender", gen);

    const urlWithParams =
      baseUrl.toString() + (params.toString() ? `?${params.toString()}` : "");

    fetch(urlWithParams)
      .then((response) => response.json())
      .then((receivedData) => {
        console.log(receivedData.results);
        if (receivedData.error) {
          setError(true);
        }
        if (ids) {
          if (Array.isArray(receivedData)) {
            setData(receivedData);
          } else {
            setData([receivedData]);
          }
        } else {
          if (Array.isArray(receivedData.results)) {
            setData(receivedData.results);
          } else {
            setData([receivedData.results]);
          }
        }
      })
      .catch((error) => setError(true));
  }, [gen, stat, spec, search, ids]);

  return error ? (
    <NotFoundPage />
  ) : (
    <Grid container className="homeCharactersResults">
      {data &&
        data.error === undefined &&
        data.map((item) => (
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
  );
}

export default Results;
