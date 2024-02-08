import * as React from "react";
import Selection from "../Selection";
import { useState, useEffect } from "react";
import Results from "../Results";
import { Box, Typography } from "@mui/material";

export default function AllEpisodes() {
  const [dataFromEpisode, SetDataFromEpisode] = useState(null); //for selected episode from Selection
  const [episodeInfo, setEpisodeInfo] = useState([]); //for taking all episode count
  const [page, setPage] = useState(1); //for +1 page number
  const [charactersForOneEpisode, setCharactersForOneEpisode] = useState([]);
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
              id: `${data.id}`,
              characters: data.characters,
            },
          ]);
          setCharactersForOneEpisode((charactersForOneEpisode) => [
            ...charactersForOneEpisode,
            data,
          ]);
          // const episode = data.find((obj) => {
          //   return obj.id === dataFromEpisode.replace(/^\D+/g, "");
          // });
        }
        if (data.error === "Episode not found") {
          console.log("end");
        }
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <Box>
      {console.log(
        dataFromEpisode
          ? episodeInfo[
              dataFromEpisode.replace(/^\D+/g, "") - 1
            ].characters.map((obj) => charactersForOneEpisode.push(obj))
          : ""
      )}
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
      <Selection
        title={"Episodes"}
        options={episodeInfo}
        selectedOption={dataFromEpisode}
        setSelectedOption={dataFromChildForEpisode}
      />
      <Results
        forlink="/character/"
        ids={[200, 300, 400, 500, 600, 700, 800]}
      />
    </Box>
  );
}
