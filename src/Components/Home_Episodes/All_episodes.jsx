import * as React from "react";
import Selection from "../Selection";
import { useState, useEffect } from "react";
import Results from "../Results";
import { Box } from "@mui/material";
export default function AllEpisodes() {
  const [dataFromEpisode, SetDataFromEpisode] = useState(null);
  const [episodeNum, setEpisodeNum] = useState([]);
  const [page, setPage] = useState(1);
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
          setEpisodeNum((episodeNum) => [
            ...episodeNum,
            { label: `Episode - ${data.id}` },
          ]);
        }
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <Box>
      <Selection
        title={"Episodes"}
        options={episodeNum}
        selectedOption={dataFromEpisode}
        setSelectedOption={dataFromChildForEpisode}
      />
      <Results />
    </Box>
  );
}
