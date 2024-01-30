import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Results({
  stat,
  spec,
  gen,
  seach,
  allCharacterForEpisode,
  characterId,
}) {
  const homeCharactersResultsCell = {
    maxWidth: "303px",
    borderStyle: "solid",
    borderColor: "blue",
    margin: "2px",
    borderRadius: "10px",
    textAlign: "left",
  };
  const homeCharactersResultsPicAndText = {
    position: "relative",
    overflow: "hidden",
  };
  const homeCharactersResultsCellContents = {
    paddingLeft: "3px",
  };
  const homeCharactersResults = {
    display: "grid",
    textAlign: "center",
    gridTemplateColumns: "auto auto auto",
  };
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(
      `https://rickandmortyapi.com/api${window.location.pathname}?
      ${stat ? `&status=${stat}` : ""}
      ${spec ? `&species=${spec}` : ""}
      ${gen ? `&gender=${gen}` : ""}`,
      {
        method: "GET",
      }
    )
      .then((response) => response.json())
      .then((receiveddata) => {
        setData(receiveddata.results);
      })
      .catch((error) => console.log(error));
  }, [gen, stat, spec, seach]);

  return (
    data && (
      <Link to={`/character/${1}`}>
        <div style={homeCharactersResults}>
          {(data || allCharacterForEpisode).map((item) => (
            <div key={item.id} style={homeCharactersResultsCell}>
              <div style={homeCharactersResultsPicAndText}>
                <img src={item.image} alt="Logo" />
                <div className="top-left">{item.status}</div>
              </div>
              <div style={homeCharactersResultsCellContents}>
                <h2>{item.name}</h2>
                <p>last Location</p>
                <h2>{item.location.name}</h2>
              </div>
            </div>
          ))}
        </div>
      </Link>
    )
  );
}

export default Results;
