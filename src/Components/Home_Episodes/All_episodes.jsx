import * as React from "react";
import Selection from "../Selection";
import { useState, useEffect } from "react";
import Results from "../Results";
import { Box, Typography } from "@mui/material";

export default function AllEpisodes() {
  const [dataFromEpisode, SetDataFromEpisode] = useState(null); //for selected episode from Selection
  const [episodeInfo, setEpisodeInfo] = useState([]); //for taking all episode count
  const [episode, setEpisode] = useState(1); //for +1 episode number

  const charactersForOneEpisode = [];
  const array = dataFromEpisode
    ? episodeInfo[dataFromEpisode.replace(/^\D+/g, "") - 1].characters.filter(
        (obj) => charactersForOneEpisode.push(obj)
      )
    : "";
  const newArray =
    array && array.map((number) => number.replace(/[^0-9]/g, ""));

  const dataFromChildForEpisode = (data) => {
    SetDataFromEpisode(data);
  };

  const episodeSelectAndResults = {
    display: "flex",
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${episode}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setEpisode(episode + 1);
          setEpisodeInfo((episodeInfo) => [
            ...episodeInfo,
            {
              label: `Episode - ${data.id}`,
              name: `${data.name}`,
              air_date: `${data.air_date}`,
              id: `${data.id}`,
              characters: data.characters,
            },
          ]);
        }
        if (data.error === "Episode not found") {
          console.log("end");
        }
      })
      .catch((error) => console.log(error));
  }, [episode]);

  return (
    <Box>
      <Box>
        <Typography>
          Episode name:
          {dataFromEpisode
            ? episodeInfo[dataFromEpisode.replace(/^\D+/g, "") - 1].name
            : ""}
        </Typography>
        <Typography>
          Air Date:
          {dataFromEpisode
            ? episodeInfo[dataFromEpisode.replace(/^\D+/g, "") - 1].air_date
            : ""}
        </Typography>
      </Box>
      <Box sx={episodeSelectAndResults}>
        <Selection
          title={"Episodes"}
          options={episodeInfo}
          selectedOption={dataFromEpisode}
          setSelectedOption={dataFromChildForEpisode}
        />
        <Results
          ids={
            newArray || [
              1, 2, 35, 38, 62, 92, 127, 144, 158, 175, 179, 181, 239, 249, 271,
              338, 394, 395, 435,
            ]
          }
        />
      </Box>
    </Box>
  );
}
