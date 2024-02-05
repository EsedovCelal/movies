import * as React from "react";
import Selection from "../Selection";
import { useState, useEffect } from "react";
import Results from "../Results";
import { Box, Typography } from "@mui/material";
export default function AllEpisodes() {
  const [dataFromEpisode, SetDataFromEpisode] = useState(null); //for selected episode from Selection
  const [episodeInfo, setEpisodeInfo] = useState([]); //for taking all episode count
  const [page, setPage] = useState(1); //for +1 page number
  // const [charactersForOneArray, setCharacterForOneArray] = useState([]);
  const dataFromChildForEpisode = (data) => {
    SetDataFromEpisode(data);
  };
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode/${page}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setPage(page + 1);
          setEpisodeInfo((episodeInfo) => [
            ...episodeInfo,
            {
              label: `Episode - ${data.id}`,
              name: `${data.name}`,
              air_date: `${data.air_date}`,
            },
          ]);
        }
        if (data.error === "Episode not found") {
          console.log("end");
        }
      })
      .catch((error) => console.log(error));
  }, [page]);

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
      {console.log(dataFromEpisode ? dataFromEpisode.replace(/^\D+/g, "") : "")}
      <Selection
        title={"Episodes"}
        options={episodeInfo}
        selectedOption={dataFromEpisode}
        setSelectedOption={dataFromChildForEpisode}
      />
    </Box>
  );
}
