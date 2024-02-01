import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Results.css";

function Results({
  stat,
  spec,
  gen,
  seach,
  allCharacterForEpisode,
  characterId,
}) {
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
      <div className="homeCharactersResults">
        {(data || allCharacterForEpisode).map((item) => (
          <Link to={`/character/${item.id}`} key={item.id}>
            <div className="homeCharactersResultsCell">
              <div className="homeCharactersResultsPicAndText">
                <img src={item.image} alt="Logo" />
                <div
                  className="homeCharactersResultsTextOnPic"
                  style={{
                    backgroundColor:
                      item.status === "alive"
                        ? "green"
                        : item.status === "dead"
                        ? "red"
                        : "grey",
                  }}
                >
                  {item.status}
                </div>
              </div>
              <div className="homeCharactersResultsCellContents">
                <h2>{item.name}</h2>
                <p>last Location</p>
                <h2>{item.location.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    )
  );
}

export default Results;
